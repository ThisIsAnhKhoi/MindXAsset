import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { preloadImage } from './assetCache';

// === Color Ramp Helpers (RGB <-> HSL) ===
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: break;
    }
    h /= 6;
  }
  return [h, s, l];
}

function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      let val = t;
      if (val < 0) val += 1;
      if (val > 1) val -= 1;
      if (val < 1 / 6) return p + (q - p) * 6 * val;
      if (val < 1 / 2) return q;
      if (val < 2 / 3) return p + (q - p) * (2 / 3 - val) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function hexToHsl(hex) {
  if (!hex || hex.toLowerCase() === '#ffffff' || hex.toLowerCase() === '#fff') return null;
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length !== 6 && cleanHex.length !== 3) return null;
  const num = parseInt(cleanHex.length === 3 ? cleanHex.split('').map(c => c + c).join('') : cleanHex, 16);
  if (isNaN(num)) return null;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return rgbToHsl(r, g, b);
}

const WALK_FRAMES = [0, 1, 2, 1];

const CanvasPreview = forwardRef(({
  layers,
  width = 512,
  height = 512,
  transparentBg = false,
  frameSize = 32,
  isSpritesheet = true,
  compactMobile = false,
  action = 'idle'
}, ref) => {
  const canvasRef = useRef(null);
  const [animStep, setAnimStep] = useState(0);

  useEffect(() => {
    if (!isSpritesheet || !action || action === 'idle') {
      return undefined;
    }
    const intervalMs = action === 'attack' ? 125 : 170;
    const timer = setInterval(() => {
      setAnimStep(prev => (prev + 1) % 4);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isSpritesheet, action]);

  const effectiveStep = (!isSpritesheet || !action || action === 'idle') ? 0 : animStep;

  useImperativeHandle(ref, () => ({
    download: (filename = 'mindx-character.png') => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    },
    getBase64Image: () => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      return canvas.toDataURL('image/png');
    }
  }));

  useEffect(() => {
    let isActive = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const sortedLayers = [...layers].sort((a, b) => (a.z_index || 0) - (b.z_index || 0));

    const drawLayers = async () => {
      try {
        const imagePromises = sortedLayers.map(layer => {
          if (!layer || !layer.src) return Promise.resolve(null);
          return preloadImage(layer.src);
        });

        const loadedImages = await Promise.all(imagePromises);

        if (!isActive) return;

        ctx.clearRect(0, 0, width, height);
        ctx.imageSmoothingEnabled = false;

        const isLegacyVehicle = sortedLayers.some(l => l && (l.category === 'chassis' || l.category === 'wheels')) && frameSize !== 100 && frameSize !== 160;
        const isTopDownVehicle = sortedLayers.some(l => l && (l.category === 'chassis' || l.category === 'ground' || l.category === 'accessories' || l.category === 'lights')) && (frameSize === 100 || frameSize === 160);
        const isMonsterOrAlien = sortedLayers.some(l => l && (l.bodyCenter || (l.position && !isLegacyVehicle && !isTopDownVehicle)));
        const floorY = Math.round(height * (1 - 56 / 330));
        if (isLegacyVehicle) {
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(width / 2, floorY, Math.round(width * 0.36), 10, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
          ctx.fill();
          ctx.restore();
        } else if (isMonsterOrAlien && !transparentBg) {
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(width / 2, floorY - 2, Math.round(width * 0.22), 8, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.20)';
          ctx.fill();
          ctx.restore();
        }

        let extractedSkinColor = null;
        for (let i = 0; i < loadedImages.length; i++) {
          const img = loadedImages[i];
          const layerInfo = sortedLayers[i];

          if (!img) continue;

          const hasColor = layerInfo.color && layerInfo.color.toLowerCase() !== '#ffffff' && layerInfo.color.toLowerCase() !== '#fff';
          let finalColor = layerInfo.color;
          const activeFrameIdx = (isSpritesheet && action && action !== 'idle') ? WALK_FRAMES[effectiveStep] : 1;
          const sX = isSpritesheet ? (img.width > frameSize ? activeFrameIdx * frameSize : 0) : 0;
          const sY = 0;
          const sW = isSpritesheet ? Math.min(frameSize, img.width) : img.width;
          const sH = isSpritesheet ? Math.min(frameSize, img.height) : img.height;

          let layerScale;
          let dw, dh, dx, dy;

          if (isTopDownVehicle) {
            const scale = Math.max(1, Math.floor((Math.min(width, height) * 0.85) / sW));
            dw = sW * scale;
            dh = sH * scale;
            dx = Math.round((width - dw) / 2);
            dy = Math.round((height - dh) / 2);
          } else if (isLegacyVehicle && !layerInfo.position) {
            layerScale = (width * 0.85) / 256;
            dw = 256 * layerScale;
            dh = 256 * layerScale;
            dx = Math.round((width - dw) / 2);
            dy = Math.round(floorY - 217 * layerScale);
          } else {
            const scaleByW = (width * 0.85) / sW;
            const scaleByH = (height * 0.85) / sH;
            const rawScale = Math.min(scaleByW, scaleByH);
            layerScale = (isSpritesheet || sW <= 64) ? Math.max(1, Math.floor(rawScale)) : rawScale;
            dw = sW * layerScale;
            dh = sH * layerScale;
            dx = Math.round((width - dw) / 2);
            dy = Math.round((height - dh) / 2);
            if (isSpritesheet && action === 'attack' && effectiveStep % 2 === 1) {
              dy -= 4;
            }
          }

          if (!isSpritesheet && layerInfo.category === 'base' && !extractedSkinColor) {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = sW;
            tempCanvas.height = sH;
            const tctx = tempCanvas.getContext('2d');
            tctx.drawImage(img, 0, 0, sW, sH);
            const pData = tctx.getImageData(32, 45, 1, 1).data;
            if (pData[3] > 0) {
              extractedSkinColor = `rgb(${pData[0]}, ${pData[1]}, ${pData[2]})`;
            }
          }
          if (!isSpritesheet && layerInfo.category === 'arms') {
            if (extractedSkinColor) {
              finalColor = extractedSkinColor;
            }
          }

          let imgToDraw = img;
          let drawSx = sX;
          let drawSy = sY;

          if (isTopDownVehicle && layerInfo.category === 'chassis') {
            const custom = layerInfo.customColors || {};
            const bodyColor = custom.chassis || (hasColor ? finalColor : null);
            const glassColor = custom.windows || null;
            const wheelColor = custom.wheels || null;

            const hasCustomRecolor =
              (bodyColor && bodyColor.toLowerCase() !== '#ffffff' && bodyColor.toLowerCase() !== '#fff') ||
              (glassColor && glassColor.toLowerCase() !== '#ffffff' && glassColor.toLowerCase() !== '#fff') ||
              (wheelColor && wheelColor.toLowerCase() !== '#ffffff' && wheelColor.toLowerCase() !== '#fff');

            if (hasCustomRecolor) {
              const off = document.createElement('canvas');
              off.width = sW;
              off.height = sH;
              const octx = off.getContext('2d');
              octx.imageSmoothingEnabled = false;
              octx.drawImage(img, sX, sY, sW, sH, 0, 0, sW, sH);

              const imgData = octx.getImageData(0, 0, sW, sH);
              const data = imgData.data;

              const bodyHsl = hexToHsl(bodyColor);
              const glassHsl = hexToHsl(glassColor);
              const wheelHsl = hexToHsl(wheelColor);

              for (let idx = 0; idx < data.length; idx += 4) {
                const a = data[idx + 3];
                if (a < 30) continue;

                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];

                // Dark tires & outlines
                if (r < 42 && g < 42 && b < 42) {
                  if (wheelHsl) {
                    const [, , origL] = rgbToHsl(r, g, b);
                    const [nr, ng, nb] = hslToRgb(wheelHsl[0], Math.max(0.35, wheelHsl[1]), origL);
                    data[idx] = nr; data[idx + 1] = ng; data[idx + 2] = nb;
                  }
                  continue;
                }

                // Windshield & side windows
                const isGlass = (b > r + 18 && g > r + 4 && r < 140) || (Math.abs(r - g) < 12 && Math.abs(g - b) < 12 && r >= 55 && r <= 125);
                if (isGlass) {
                  if (glassHsl) {
                    const [, , origL] = rgbToHsl(r, g, b);
                    const [nr, ng, nb] = hslToRgb(glassHsl[0], Math.max(0.45, glassHsl[1]), origL);
                    data[idx] = nr; data[idx + 1] = ng; data[idx + 2] = nb;
                  }
                  continue;
                }

                // Preserve bright white headlamp lenses (r>240, g>240, b>230)
                if (r > 242 && g > 242 && b > 232) {
                  continue;
                }

                if (bodyHsl) {
                  const [, , origL] = rgbToHsl(r, g, b);
                  const targetS = bodyHsl[1] < 0.12 ? bodyHsl[1] : Math.min(1.0, Math.max(0.50, bodyHsl[1]));
                  const targetL = bodyHsl[2] < 0.25
                    ? Math.max(0.08, origL * 0.45)
                    : bodyHsl[2] > 0.85
                      ? Math.min(0.94, origL * 1.18)
                      : origL;
                  const [nr, ng, nb] = hslToRgb(bodyHsl[0], targetS, targetL);
                  data[idx] = nr; data[idx + 1] = ng; data[idx + 2] = nb;
                }
              }

              octx.putImageData(imgData, 0, 0);
              imgToDraw = off;
              drawSx = 0;
              drawSy = 0;
            }
          } else if (hasColor || (!isSpritesheet && layerInfo.category === 'arms' && extractedSkinColor)) {
            const off = document.createElement('canvas');
            off.width = sW;
            off.height = sH;
            const octx = off.getContext('2d');

            octx.filter = 'grayscale(100%) contrast(1.2) brightness(1.1)';
            octx.drawImage(img, sX, sY, sW, sH, 0, 0, sW, sH);
            octx.filter = 'none';

            octx.globalCompositeOperation = 'multiply';
            octx.fillStyle = finalColor;
            octx.fillRect(0, 0, sW, sH);

            octx.globalCompositeOperation = 'destination-in';
            octx.drawImage(img, sX, sY, sW, sH, 0, 0, sW, sH);

            imgToDraw = off;
            drawSx = 0;
            drawSy = 0;
          }

          ctx.save();

          if (layerInfo.position) {
            const monsterScale = isSpritesheet ? layerScale : Math.min((width * 0.70) / 360, (height * 0.70) / 430);
            const offsetX = (width - 360 * monsterScale) / 2;
            const offsetY = (height - 430 * monsterScale) / 2;
            const pX = layerInfo.pivot ? layerInfo.pivot.x * sW : 0;
            const pY = layerInfo.pivot ? layerInfo.pivot.y * sH : 0;

            let tX = offsetX + layerInfo.position.x * monsterScale;
            let tY = offsetY + layerInfo.position.y * monsterScale;

            if (layerInfo.bodyCenter) {
              const dxPos = layerInfo.position.x - layerInfo.bodyCenter.x;
              const dyPos = layerInfo.position.y - layerInfo.bodyCenter.y;
              tX = width / 2 + dxPos * monsterScale;
              tY = height * 0.46 + dyPos * monsterScale;
            }

            ctx.translate(tX, tY);

            if (layerInfo.scaleX === -1) {
              ctx.scale(-1, 1);
            }

            ctx.drawImage(
              imgToDraw,
              drawSx, drawSy, sW, sH,
              -pX * monsterScale, -pY * monsterScale,
              sW * monsterScale, sH * monsterScale
            );
          } else {
            // Draw directional contact shadow under Top-Down Vehicle chassis
            if (isTopDownVehicle && layerInfo.category === 'chassis' && !transparentBg) {
              ctx.save();
              ctx.filter = 'brightness(0) opacity(0.32)';
              ctx.drawImage(imgToDraw, drawSx, drawSy, sW, sH, dx + 4, dy + 5, dw, dh);
              ctx.restore();
            }
            ctx.drawImage(imgToDraw, drawSx, drawSy, sW, sH, dx, dy, dw, dh);
          }

          ctx.restore();
        }
      } catch (err) {
        console.error('Failed to load layers', err);
      }
    };

    drawLayers();

    return () => {
      isActive = false;
    };
  }, [layers, width, height, frameSize, isSpritesheet, transparentBg, action, effectiveStep]);

  const isSquareContent = frameSize >= 100 || isSpritesheet;
  const isTopDown = frameSize === 100 || frameSize === 160;

  const aspectClass = compactMobile
    ? 'aspect-square w-[100px] h-[100px] min-[360px]:w-[126px] min-[360px]:h-[126px] sm:w-[240px] sm:h-[240px] md:w-full md:h-auto md:max-w-[260px] md:max-h-[260px] lg:max-w-[320px] lg:max-h-[320px] shrink-0'
    : isSquareContent
      ? 'aspect-square max-w-[230px] max-h-[230px] sm:max-w-[270px] sm:max-h-[270px] lg:max-w-[330px] lg:max-h-[330px] w-full'
      : 'aspect-[9/16] max-w-[180px] max-h-[270px] sm:max-w-[210px] sm:max-h-[320px] lg:max-w-[240px] lg:max-h-[370px] w-full';

  return (
    <div className={`relative border-3 sm:border-4 border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center overflow-hidden transition-colors duration-300 ${aspectClass} ${transparentBg ? 'bg-transparent' : 'bg-gray-50'}`}>
      {/* Nền bục đứng nhân vật Retro Pixel Art */}
      {!transparentBg && !isTopDown && (
        <div className="absolute inset-0 z-0 flex flex-col justify-end">
          <div className="flex-1 bg-gray-100"></div>
          <div className="h-[14%] bg-gray-200 border-t border-gray-300"></div>
          <div className="h-[18%] bg-gray-300 border-t border-gray-400"></div>
        </div>
      )}

      {/* Nền Studio Top-Down phẳng chuyên nghiệp */}
      {!transparentBg && isTopDown && (
        <div className="absolute inset-0 z-0 bg-gray-100 flex items-center justify-center">
          <div className="w-full h-full opacity-25" style={{
            backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}></div>
        </div>
      )}

      {/* Hiệu ứng nền caro (transparency grid) khi bật nền trong suốt */}
      {transparentBg && (
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: 'conic-gradient(#aaa 25%, white 25%, white 50%, #aaa 50%, #aaa 75%, white 75%, white)',
          backgroundSize: '20px 20px'
        }}></div>
      )}

      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="relative z-10 w-full h-full object-contain drop-shadow-md"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
});

export default CanvasPreview;
