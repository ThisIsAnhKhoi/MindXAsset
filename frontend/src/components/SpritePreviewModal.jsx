import { useState, useEffect, useRef, useMemo } from 'react';

const SpritePreviewModal = ({ isOpen, imageUrl, metadata, onClose, actionName }) => {
  const [columns, setColumns] = useState(metadata?.columns || 5);
  const [rows, setRows] = useState(metadata?.rows || 3);
  const [prevMetadata, setPrevMetadata] = useState(metadata);
  const [fps, setFps] = useState(8);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [selectedActionId, setSelectedActionId] = useState('idle_walk');

  const BACKGROUNDS = [
    { id: 'transparent', name: 'Trong suốt (Caro)', value: 'url("https://www.transparenttextures.com/patterns/cubes.png")', className: 'bg-gray-200' },
    { id: 'black', name: 'Nền đen', value: 'none', className: 'bg-black' },
    { id: 'white', name: 'Nền trắng', value: 'none', className: 'bg-white' },
    { id: 'green', name: 'Màn xanh lá', value: 'none', className: 'bg-[#00b140]' },
    { id: 'forest', name: 'Khu rừng', value: 'url("https://img.freepik.com/free-vector/pixel-art-rural-landscape_24908-61882.jpg")', className: 'bg-cover bg-center' },
  ];
  const [previewBg, setPreviewBg] = useState(BACKGROUNDS[0]);

  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);

  // Sync state if metadata changes
  if (metadata !== prevMetadata) {
    setPrevMetadata(metadata);
    if (metadata?.columns) setColumns(metadata.columns);
    if (metadata?.rows) setRows(metadata.rows);
  }

  // Measure natural dimensions of loaded spritesheet
  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        setImgSize({ width: img.naturalWidth || img.width, height: img.naturalHeight || img.height });
      };
      img.src = imageUrl;
    }
  }, [imageUrl]);

  // Derive available animation action groups
  const actions = useMemo(() => {
    if (metadata?.actions && Array.isArray(metadata.actions) && metadata.actions.length > 0) {
      return metadata.actions;
    }
    const total = columns * rows;
    if (rows <= 1) {
      return [{ id: 'all', name: `Toàn bộ (${total} Khung)`, start_frame: 0, end_frame: Math.max(0, total - 1) }];
    }
    const defaultLabels = [
      '🚶 Đứng & Đi bộ (Hàng 1)',
      '⚔️ Tấn công & Thủ (Hàng 2)',
      '💥 Bị thương & Trạng thái (Hàng 3)',
      '⚡ Kỹ năng (Hàng 4)',
      '🌟 Động tác đặc biệt (Hàng 5)'
    ];
    const list = [];
    for (let r = 0; r < rows; r++) {
      list.push({
        id: `row_${r}`,
        name: defaultLabels[r] || `Hàng ${r + 1}`,
        row: r,
        start_frame: r * columns,
        end_frame: Math.min((r + 1) * columns - 1, total - 1)
      });
    }
    list.push({
      id: 'all',
      name: `🔄 Tất cả (${total} Khung)`,
      row: -1,
      start_frame: 0,
      end_frame: total - 1
    });
    return list;
  }, [metadata, columns, rows]);

  // Set default action when actions list updates
  useEffect(() => {
    if (actions.length > 0) {
      const preferred = actions.find(a => a.id !== 'all') || actions[0];
      setSelectedActionId(preferred.id);
      setCurrentFrame(preferred.start_frame);
    }
  }, [actions]);

  const currentAction = actions.find(a => a.id === selectedActionId) || actions[0] || {
    id: 'all',
    start_frame: 0,
    end_frame: Math.max(0, columns * rows - 1)
  };

  // Animation playback loop bounded to current action
  useEffect(() => {
    let interval;
    const start = currentAction.start_frame;
    const end = currentAction.end_frame;
    const frameCount = end - start + 1;

    if (isPlaying && frameCount > 1) {
      interval = setInterval(() => {
        setCurrentFrame((prev) => {
          if (prev < start || prev >= end) return start;
          return prev + 1;
        });
      }, 1000 / fps);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentAction, fps]);

  const frameWidth = imgSize.width / columns || 0;
  const frameHeight = imgSize.height / rows || 0;

  // Render current frame to canvas cleanly without any CSS clipping or offset drift
  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || !imgSize.width || columns <= 0 || rows <= 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    const col = currentFrame % columns;
    const row = Math.floor(currentFrame / columns);
    const sw = imgSize.width / columns;
    const sh = imgSize.height / rows;
    const sx = col * sw;
    const sy = row * sh;

    const aspect = sw / sh;
    const padding = 12;
    const targetW = canvas.width - padding * 2;
    const targetH = canvas.height - padding * 2;

    let dw = targetW;
    let dh = targetH;
    if (aspect > targetW / targetH) {
      dh = dw / aspect;
    } else {
      dw = dh * aspect;
    }

    const dx = (canvas.width - dw) / 2;
    const dy = (canvas.height - dh) / 2;

    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
  }, [currentFrame, columns, rows, imgSize]);

  // Stepping controls
  const handlePrevFrame = () => {
    const start = currentAction.start_frame;
    const end = currentAction.end_frame;
    setCurrentFrame(prev => (prev <= start ? end : prev - 1));
  };

  const handleNextFrame = () => {
    const start = currentAction.start_frame;
    const end = currentAction.end_frame;
    setCurrentFrame(prev => (prev >= end ? start : prev + 1));
  };

  // Download whole spritesheet PNG
  const handleDownloadFullSheet = () => {
    if (!imageUrl) return;
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `spritesheet_${columns}x${rows}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Download sliced single frame PNG
  const handleDownloadCurrentFrame = () => {
    if (!imageUrl || !imgRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(frameWidth));
    canvas.height = Math.max(1, Math.round(frameHeight));
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const col = currentFrame % columns;
    const row = Math.floor(currentFrame / columns);
    const sx = col * (imgSize.width / columns);
    const sy = row * (imgSize.height / rows);
    const sw = imgSize.width / columns;
    const sh = imgSize.height / rows;

    ctx.drawImage(imgRef.current, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `frame_${currentFrame + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Build grid overlay cells with interactive click-to-preview
  const gridCells = [];
  const start = currentAction.start_frame;
  const end = currentAction.end_frame;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const idx = r * columns + c;
      const isCurrent = idx === currentFrame;
      const isInAction = idx >= start && idx <= end;
      gridCells.push(
        <div 
          key={`${r}-${c}`} 
          onClick={() => {
            setCurrentFrame(idx);
            setIsPlaying(false);
          }}
          className={`box-border transition-all cursor-pointer relative flex items-start justify-start p-0.5 select-none ${
            isCurrent 
              ? 'border-2 border-amber-400 bg-amber-400/35 z-20 shadow-xs' 
              : isInAction 
                ? 'border border-red-500/60 bg-red-500/10 hover:bg-red-500/25' 
                : 'border border-gray-400/25 opacity-35 hover:opacity-80'
          }`}
          style={{ width: `${100 / columns}%`, height: `${100 / rows}%` }}
          title={`Khung #${idx + 1} - Click để xem`}
        >
          <span className={`px-1 py-0.2 rounded text-[9px] font-mono leading-tight ${isCurrent ? 'bg-amber-500 text-white font-bold' : 'text-gray-700 bg-white/85'}`}>
            {idx + 1}
          </span>
        </div>
      );
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-5">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-gray-50/80 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-red-100 text-red-600 flex items-center justify-center text-base font-bold shadow-2xs">
              ⚡
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                Preview Hoạt Ảnh & Tách Lưới Sprite Sheet
              </h2>
              <p className="text-xs text-gray-500">
                {columns} cột x {rows} hàng ({columns * rows} khung hình) {actionName ? `• Động tác: ${actionName}` : ''}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-xl hover:bg-red-50 cursor-pointer"
            title="Đóng cửa sổ"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body: Side-by-side on md screens (768px+) */}
        <div className="flex-1 overflow-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* Left Panel: Slicing Grid */}
          <div className="w-full md:w-1/2 p-4 flex flex-col gap-3 overflow-y-auto">
            <div className="flex items-center justify-between shrink-0">
              <h3 className="font-bold text-sm text-gray-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">1</span>
                Lưới khung hình (Spritesheet Matrix)
              </h3>
              <span className="text-[11px] text-gray-500">Click vào ô để chọn khung</span>
            </div>
            
            {/* Grid Dimensions Inputs */}
            <div className="grid grid-cols-2 gap-3 bg-gray-50 p-2 rounded-xl border border-gray-200 shrink-0">
              <div className="flex flex-col gap-0.5">
                <label className="text-[11px] font-bold text-gray-600">Số cột ngang (Columns)</label>
                <input 
                  type="number" min="1" max="64"
                  className="w-full bg-white border border-gray-300 rounded-lg py-1 px-2.5 text-xs font-bold text-gray-800 focus:ring-2 focus:ring-red-500 outline-none"
                  value={columns} onChange={e => setColumns(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="text-[11px] font-bold text-gray-600">Số hàng dọc (Rows)</label>
                <input 
                  type="number" min="1" max="64"
                  className="w-full bg-white border border-gray-300 rounded-lg py-1 px-2.5 text-xs font-bold text-gray-800 focus:ring-2 focus:ring-red-500 outline-none"
                  value={rows} onChange={e => setRows(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>
            </div>

            {/* Spritesheet Image with Overlay Grid */}
            <div className="flex-1 bg-gray-100 rounded-xl border border-gray-200 p-2.5 flex flex-col items-center justify-center min-h-[260px] overflow-auto">
              <div className="relative inline-block" ref={containerRef}>
                <img 
                  ref={imgRef}
                  src={imageUrl} 
                  alt="Spritesheet Original" 
                  className="max-w-full max-h-[340px] object-contain block shadow-xs" 
                  style={{ imageRendering: 'pixelated' }} 
                />
                {/* Grid Overlay */}
                <div className="absolute inset-0 flex flex-wrap pointer-events-auto">
                  {gridCells}
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-2 px-1 text-[11px] text-gray-500 shrink-0">
                <span>Khổ ảnh: {imgSize.width} x {imgSize.height} px</span>
                <span>Khung đơn: {Math.round(frameWidth)} x {Math.round(frameHeight)} px</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Multi-Action Animation Preview */}
          <div className="w-full md:w-1/2 p-4 flex flex-col gap-3 overflow-y-auto">
            <div className="flex items-center justify-between shrink-0">
              <h3 className="font-bold text-sm text-gray-800 flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">2</span>
                Xem trước hoạt ảnh động tác
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 bg-red-50 text-red-700 rounded-md border border-red-200">
                Khung {currentFrame + 1} / {columns * rows}
              </span>
            </div>

            {/* Action Group Filter Selector Tabs */}
            <div className="flex flex-col gap-1 shrink-0">
              <label className="text-[11px] font-bold text-gray-600">Chọn nhóm hành động để phát:</label>
              <div className="flex flex-wrap gap-1.5">
                {actions.map(act => {
                  const isActive = act.id === selectedActionId;
                  return (
                    <button
                      key={act.id}
                      onClick={() => {
                        setSelectedActionId(act.id);
                        setCurrentFrame(act.start_frame);
                      }}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-red-600 text-white shadow-xs'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {act.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Background Environment Selector */}
            <div className="flex gap-1.5 overflow-x-auto pb-0.5 items-center text-xs shrink-0">
              <span className="text-[11px] font-medium text-gray-500 whitespace-nowrap">Nền thử:</span>
              {BACKGROUNDS.map(bg => (
                <button
                  key={bg.id}
                  onClick={() => setPreviewBg(bg)}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium border transition-all whitespace-nowrap cursor-pointer ${
                    previewBg.id === bg.id 
                      ? 'border-red-500 bg-red-50 text-red-700 font-bold' 
                      : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {bg.name}
                </button>
              ))}
            </div>

            {/* Animation Canvas Viewport */}
            <div 
              className={`flex-1 rounded-xl border-2 border-gray-300 p-3 flex flex-col items-center justify-center min-h-[220px] max-h-[260px] shadow-inner overflow-hidden relative ${previewBg.className}`}
              style={{ backgroundImage: previewBg.value }}
            >
              <canvas 
                ref={canvasRef} 
                width={220} 
                height={220} 
                className="relative z-10 max-w-full max-h-full drop-shadow-md"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>

            {/* Playback Controls & Speed */}
            <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-200 flex flex-col gap-2 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={handlePrevFrame}
                    className="p-1.5 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg text-gray-700 text-xs font-bold transition-all cursor-pointer"
                    title="Khung trước"
                  >
                    ⏮️
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`px-3 py-1.5 rounded-lg font-bold text-xs text-white transition-colors cursor-pointer flex items-center gap-1 ${
                      isPlaying ? 'bg-amber-500 hover:bg-amber-600' : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    {isPlaying ? '⏸️ Tạm dừng' : '▶️ Tiếp tục'}
                  </button>
                  <button 
                    onClick={handleNextFrame}
                    className="p-1.5 bg-white border border-gray-300 hover:bg-gray-100 rounded-lg text-gray-700 text-xs font-bold transition-all cursor-pointer"
                    title="Khung kế"
                  >
                    ⏭️
                  </button>
                </div>
                
                <span className="text-xs font-bold text-gray-700">Tốc độ: {fps} FPS</span>
              </div>

              <input 
                type="range" min="1" max="30" value={fps} onChange={(e) => setFps(parseInt(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3 border-t border-gray-200 bg-gray-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadCurrentFrame}
              className="py-1.5 px-3 bg-white hover:bg-gray-100 border border-gray-300 text-gray-800 rounded-xl font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <span>✂️</span> Tải Khung Này (Frame {currentFrame + 1})
            </button>
            <button
              onClick={handleDownloadFullSheet}
              className="py-1.5 px-3.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <span>📥</span> Tải Sprite Sheet PNG
            </button>
          </div>

          <button 
            onClick={onClose} 
            className="px-5 py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-bold text-xs transition-colors cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>

      </div>
    </div>
  );
};

export default SpritePreviewModal;