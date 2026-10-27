import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
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
  if (!hex || hex === '#ffffff' || hex === '#fff') return null;
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length !== 6 && cleanHex.length !== 3) return null;
  const num = parseInt(cleanHex.length === 3 ? cleanHex.split('').map(c => c + c).join('') : cleanHex, 16);
  if (isNaN(num)) return null;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return rgbToHsl(r, g, b);
}

const CanvasPreview = forwardRef(({ layers, width = 512, height = 512, transparentBg = false, frameSize = 32, isSpritesheet = true }, ref) => {
  const canvasRef = useRef(null);

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

    // Sort layers by z_index
    const sortedLayers = [...layers].sort((a, b) => (a.z_index || 0) - (b.z_index || 0));

    // Load all images first before clearing canvas to avoid flickering
    const drawLayers = async () => {
      try {
        // Load all images in parallel for maximum speed
        const imagePromises = sortedLayers.map(layer => {
          if (!layer || !layer.src) return Promise.resolve(null);
          return preloadImage(layer.src);
        });
        
        const loadedImages = await Promise.all(imagePromises);

        if (!isActive) return;

        // Clear and draw once all images are ready
        ctx.clearRect(0, 0, width, height);
        ctx.imageSmoothingEnabled = false; // Đảm bảo pixelated

        // Check if rendering legacy side-view vehicles (frameSize !== 100 && frameSize !== 160)
        const isLegacyVehicle = sortedLayers.some(l => l && (l.category === 'chassis' || l.category === 'wheels')) && frameSize !== 100 && frameSize !== 160;
        const isTopDownVehicle = sortedLayers.some(l => l && (l.category === 'chassis' || l.category === 'ground' || l.category === 'accessories')) && (frameSize === 100 || frameSize === 160);
        const floorY = Math.round(height * (1 - 56 / 330)); // Top surface of the pedestal (h-14)
        if (isLegacyVehicle) {
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(width / 2, floorY, Math.round(width * 0.36), 10, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
          ctx.fill();
          ctx.restore();
        }

        let extractedSkinColor = null;
        for (let i = 0; i < loadedImages.length; i++) {
          const img = loadedImages[i];
          const layerInfo = sortedLayers[i];
          
          if (!img) continue; // Bỏ qua nếu không tải được ảnh

          const hasColor = layerInfo.color && layerInfo.color !== '#ffffff' && layerInfo.color.toLowerCase() !== '#fff';
          let finalColor = layerInfo.color;
          const sX = isSpritesheet ? (img.width > frameSize ? frameSize : 0) : 0;
          const sY = 0;
          const sW = isSpritesheet ? Math.min(frameSize, img.width) : img.width;
          const sH = isSpritesheet ? Math.min(frameSize, img.height) : img.height;

          let layerScale;
          let dw, dh, dx, dy;

          if (isTopDownVehicle) {
            // Integer 3x scale centered in canvas for 100x100 TopDown pixel art
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
            // Scale to fit BOTH width AND height (whichever is smaller)
            const scaleByW = (width * 0.85) / sW;
            const scaleByH = (height * 0.85) / sH;
            const rawScale = Math.min(scaleByW, scaleByH);
            // Integer scale for pixel art sprites so every pixel is crisp and razor sharp
            layerScale = (isSpritesheet || sW <= 64) ? Math.max(1, Math.floor(rawScale)) : rawScale;
            dw = sW * layerScale;
            dh = sH * layerScale;
            dx = Math.round((width - dw) / 2);
            dy = Math.round((height - dh) / 2);
          }

          // Skin Color Extraction for Arms
          if (!isSpritesheet && layerInfo.category === 'base' && !extractedSkinColor) {
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = sW;
            tempCanvas.height = sH;
            const tctx = tempCanvas.getContext('2d');
            tctx.drawImage(img, 0, 0, sW, sH);
            // Read pixel from the face (x=32, y=45)
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
            const lightColor = custom.lights || null;
            const wheelColor = custom.wheels || null;

            const hasCustomRecolor =
              (bodyColor && bodyColor !== '#ffffff' && bodyColor.toLowerCase() !== '#fff') ||
              (glassColor && glassColor !== '#ffffff' && glassColor.toLowerCase() !== '#fff') ||
              (lightColor && lightColor !== '#ffffff' && lightColor.toLowerCase() !== '#fff') ||
              (wheelColor && wheelColor !== '#ffffff' && wheelColor.toLowerCase() !== '#fff');

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
              const lightHsl = hexToHsl(lightColor);
              const wheelHsl = hexToHsl(wheelColor);

              for (let idx = 0; idx < data.length; idx += 4) {
                const a = data[idx + 3];
                if (a < 30) continue;

                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];

                // 1. Black/Dark pixels (tires, rims, dark shadows, black decals)
                if (r < 40 && g < 40 && b < 40) {
                  if (wheelHsl) {
                    const [, , origL] = rgbToHsl(r, g, b);
                    const [nr, ng, nb] = hslToRgb(wheelHsl[0], Math.max(0.35, wheelHsl[1]), origL);
                    data[idx] = nr; data[idx + 1] = ng; data[idx + 2] = nb;
                  }
                  continue; // Preserve natural black rubber / dark trim
                }

                // 2. Glass / Windows (cyan/blue or neutral gray-blue glass)
                const isGlass = (b > r + 20 && g > r + 5) || (Math.abs(r - g) < 12 && Math.abs(g - b) < 12 && r >= 65 && r <= 130);
                if (isGlass) {
                  if (glassHsl) {
                    const [, , origL] = rgbToHsl(r, g, b);
                    const [nr, ng, nb] = hslToRgb(glassHsl[0], Math.max(0.45, glassHsl[1]), origL);
                    data[idx] = nr; data[idx + 1] = ng; data[idx + 2] = nb;
                  }
                  continue; // Preserve natural glass if no custom glass tint
                }

                // 3. Headlights (Bright Xenon/white)
                const isHeadlight = (r > 230 && g > 220 && b > 160);
                if (isHeadlight) {
                  if (lightHsl) {
                    const [, , origL] = rgbToHsl(r, g, b);
                    const [nr, ng, nb] = hslToRgb(lightHsl[0], Math.max(0.65, lightHsl[1]), origL);
                    data[idx] = nr; data[idx + 1] = ng; data[idx + 2] = nb;
                  }
                  continue; // Preserve headlights
                }

                // 4. Body Paint - Smooth Lightness Ramp Remap (preserve shadows & highlights)
                if (bodyHsl) {
                  const [, origS, origL] = rgbToHsl(r, g, b);
                  const targetS = Math.min(1.0, Math.max(0.35, origS * (bodyHsl[1] / 0.8 || 1.0)));
                  const [nr, ng, nb] = hslToRgb(bodyHsl[0], targetS, origL);
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

          // ===== Advanced Transform Logic =====
          ctx.save();

          if (layerInfo.position) {
            // Dựa vào cấu hình monster (ví dụ: position {x, y})
            // Ta cần canh giữa quái vật trong canvas
            const monsterScale = isSpritesheet ? layerScale : Math.min((width * 0.75) / 200, (height * 0.75) / 250);

            // Điểm bắt đầu vẽ (căn giữa)
            const offsetX = (width - 200 * monsterScale) / 2;
            const offsetY = (height - 250 * monsterScale) / 2;

            // Tính toán Pivot thực tế (mặc định 0,0 là góc trên trái)
            const pX = layerInfo.pivot ? layerInfo.pivot.x * sW : 0;
            const pY = layerInfo.pivot ? layerInfo.pivot.y * sH : 0;

            // Tính toán vị trí dịch chuyển để vẽ
            let tX = offsetX + layerInfo.position.x * monsterScale;
            let tY = offsetY + layerInfo.position.y * monsterScale;

            // Nếu có bodyCenter, ta neo trung tâm của body vào chính giữa canvas
            if (layerInfo.bodyCenter) {
              const dx = layerInfo.position.x - layerInfo.bodyCenter.x;
              const dy = layerInfo.position.y - layerInfo.bodyCenter.y;

              // Đưa điểm bodyCenter vào giữa màn hình (theo width) 
              // Lùi y xuống 55% height để chân chạm bóng đổ hợp lý hơn
              tX = width / 2 + dx * monsterScale;
              tY = height * 0.45 + dy * monsterScale;
            }

            // Di chuyển trục tọa độ tới điểm Neo trên màn hình
            ctx.translate(tX, tY);

            // Nếu có ScaleX (ví dụ lật tay trái)
            if (layerInfo.scaleX === -1) {
              ctx.scale(-1, 1);
            }

            // Vẽ ảnh sao cho điểm Neo (pX, pY) trùng với điểm hiện tại
            ctx.drawImage(
              imgToDraw,
              drawSx, drawSy, sW, sH,
              -pX * monsterScale, -pY * monsterScale,
              sW * monsterScale, sH * monsterScale
            );
          } else {
            // Logic mặc định cho Pixel character (căn giữa hoàn toàn)
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
      isActive = false; // Cleanup to prevent race conditions
    };
  }, [layers, width, height, frameSize, isSpritesheet]);

  // Determine aspect ratio: spritesheet=square, portrait(64x96)=9:16, monster/topdown=square
  const isSquareContent = frameSize >= 100 || isSpritesheet;
  const isTopDown = frameSize === 100 || frameSize === 160;
  const aspectClass = isSquareContent ? 'aspect-square max-w-[330px] max-h-[330px]' : 'aspect-[9/16] max-w-[240px] max-h-[370px]';

  return (
    <div className={`relative border-4 border-gray-200 rounded-xl shadow-lg flex flex-col items-center justify-center overflow-hidden w-full transition-colors duration-300 ${aspectClass} ${transparentBg ? 'bg-transparent' : 'bg-gray-50'}`}>
      {/* Nền bục đứng nhân vật Retro Pixel Art - Chỉ hiện khi KHÔNG bật nền trong suốt và KHÔNG phải TopDown */}
      {!transparentBg && !isTopDown && (
        <div className="absolute inset-0 z-0 flex flex-col justify-end">
          {/* Bầu trời / background phía trên */}
          <div className="flex-1 bg-gray-100"></div>
          {/* Bờ tường và vạch phân cách */}
          <div className="h-10 bg-gray-200 border-t border-gray-300"></div>
          {/* Sàn đất / bục đứng */}
          <div className="h-14 bg-gray-300 border-t border-gray-400"></div>
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
          backgroundSize: '24px 24px'
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
