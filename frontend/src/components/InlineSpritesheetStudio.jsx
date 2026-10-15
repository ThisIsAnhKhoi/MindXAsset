import { useState, useEffect, useRef, useMemo } from 'react';
import { toast } from 'react-toastify';

/**
 * InlineSpritesheetStudio
 * Xưởng xem trước & cắt lưới Sprite Sheet tích hợp trực tiếp bên dưới Character Studio.
 * Cho phép tải ảnh lên từ máy tính, kéo thả, hoặc nạp ảnh từ Canvas nhân vật / AI.
 */
export default function InlineSpritesheetStudio({
  initialImageUrl = null,
  onCaptureFromCanvas = null
}) {
  // Image Source
  const [imageUrl, setImageUrl] = useState(initialImageUrl || '/assets/sample_spritesheet_8x4.png');
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  // Grid Dimensions
  const [columns, setColumns] = useState(8);
  const [rows, setRows] = useState(4);

  // Playback State
  const [fps, setFps] = useState(8);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [selectedActionId, setSelectedActionId] = useState('row_0');

  // Background Options
  const BACKGROUNDS = [
    {
      id: 'transparent',
      name: 'Trong suốt (Caro)',
      className: 'bg-gray-100 bg-[length:16px_16px] bg-[linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%,#e5e7eb),linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%,#e5e7eb)] bg-[position:0_0,8px_8px]'
    },
    { id: 'black', name: 'Nền đen', className: 'bg-gray-950 text-white' },
    { id: 'white', name: 'Nền trắng', className: 'bg-white' },
    { id: 'green', name: 'Màn xanh lá', className: 'bg-[#00b140]' },
    {
      id: 'forest',
      name: 'Bối cảnh RPG',
      className: 'bg-cover bg-center',
      style: { backgroundImage: 'url("https://img.freepik.com/free-vector/pixel-art-rural-landscape_24908-61882.jpg")' }
    }
  ];
  const [previewBg, setPreviewBg] = useState(BACKGROUNDS[0]);

  // DOM References
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  // Sync when parent provides new image (e.g. from AI generator)
  useEffect(() => {
    if (initialImageUrl) {
      setImageUrl(initialImageUrl);
      // Auto-adjust default columns/rows if it's 5x3 AI sheet
      setColumns(5);
      setRows(3);
    }
  }, [initialImageUrl]);

  // Measure natural dimensions whenever imageUrl changes
  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imgRef.current = img;
      const w = img.naturalWidth || img.width;
      const h = img.naturalHeight || img.height;
      setImgSize({ width: w, height: h });
      setCurrentFrame(0);
    };
    img.onerror = () => {
      // Fallback
      console.warn('Không thể nạp ảnh:', imageUrl);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  // Handle Local File Upload
  const handleFileUpload = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Vui lòng chọn tệp hình ảnh (PNG, JPG, WebP)!');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
      toast.success(`Đã tải lên tệp: ${file.name}`);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  // Quick Presets
  const applyPreset = (c, r) => {
    setColumns(c);
    setRows(r);
    setCurrentFrame(0);
    setSelectedActionId('row_0');
  };

  // Derive animation action groups dynamically based on rows
  const actions = useMemo(() => {
    const total = Math.max(1, columns * rows);
    if (rows <= 1) {
      return [{ id: 'all', name: `Toàn bộ (${total} Khung)`, start_frame: 0, end_frame: total - 1 }];
    }

    const list = [];
    const rNames4 = [
      '⬇️ Hàng 1: Đi xuống (Mặt trước)',
      '⬅️ Hàng 2: Đi sang trái (Nghiêng trái)',
      '⬆️ Hàng 3: Đi lên (Lưng / Sau)',
      '➡️ Hàng 4: Đi sang phải (Nghiêng phải)'
    ];

    const rNames3 = [
      '🚶 Hàng 1: Đứng & Đi bộ',
      '⚔️ Hàng 2: Tấn công & Thủ',
      '💥 Hàng 3: Bị thương & Trạng thái'
    ];

    for (let r = 0; r < rows; r++) {
      let name = `Hàng ${r + 1} (${r * columns + 1} - ${(r + 1) * columns})`;
      if (rows === 4 && rNames4[r]) name = rNames4[r];
      else if (rows === 3 && rNames3[r]) name = rNames3[r];

      list.push({
        id: `row_${r}`,
        name: name,
        row: r,
        start_frame: r * columns,
        end_frame: Math.min((r + 1) * columns - 1, total - 1)
      });
    }

    list.push({
      id: 'all',
      name: `🔄 Toàn bộ khung hình (${total} Khung)`,
      row: -1,
      start_frame: 0,
      end_frame: total - 1
    });

    return list;
  }, [columns, rows]);

  // Selected action object
  const currentAction = actions.find(a => a.id === selectedActionId) || actions[0] || {
    id: 'all',
    start_frame: 0,
    end_frame: Math.max(0, columns * rows - 1)
  };

  // Animation Playback Loop
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

  const frameWidth = imgSize.width > 0 && columns > 0 ? imgSize.width / columns : 0;
  const frameHeight = imgSize.height > 0 && rows > 0 ? imgSize.height / rows : 0;

  // Render current frame to canvas using integer pixel art math
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
    const padding = 16;
    const targetW = canvas.width - padding * 2;
    const targetH = canvas.height - padding * 2;

    let dw = targetW;
    let dh = targetH;
    if (aspect > targetW / targetH) {
      dh = dw / aspect;
    } else {
      dw = dh * aspect;
    }

    const dx = Math.round((canvas.width - dw) / 2);
    const dy = Math.round((canvas.height - dh) / 2);

    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, Math.round(dw), Math.round(dh));
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

  // Download single sliced frame
  const handleDownloadCurrentFrame = () => {
    if (!imageUrl || !imgRef.current || !frameWidth || !frameHeight) return;
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
    toast.success(`Đã tải xuống Khung hình #${currentFrame + 1}`);
  };

  // Load current assembled character from Studio Canvas
  const handleLoadFromStudio = () => {
    if (typeof onCaptureFromCanvas === 'function') {
      const base64 = onCaptureFromCanvas();
      if (base64) {
        setImageUrl(base64);
        setColumns(1);
        setRows(1);
        toast.success("Đã nạp nhân vật trực tiếp từ Character Studio!");
      } else {
        toast.info("Chưa có dữ liệu từ Canvas. Vui lòng thử lại!");
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5 mt-4 transition-all">
      
      {/* ── Tiêu đề & Thanh Thao Tác Nạp Nhanh ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-red-100 text-red-600 rounded-lg text-sm font-bold">🎬</span>
            <h2 className="text-base sm:text-lg font-black text-gray-900 tracking-tight font-sans uppercase">
              XƯỞNG TÁCH LƯỚI & XEM TRƯỚC SPRITE SHEET (INLINE PREVIEW)
            </h2>
            <span className="text-[11px] font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">
              Sẵn sàng 24/7
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-0.5 font-sans">
            Tải lên bất kỳ ảnh Sprite Sheet nào từ máy tính hoặc nạp từ Character Studio để tự động cắt khung và tua hoạt cảnh ngay lập tức.
          </p>
        </div>

        {/* Nút thao tác nhanh nguồn ảnh */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="py-1.5 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer shadow-2xs transition-all"
          >
            <span>📁</span> Tải ảnh từ máy
          </button>

          {onCaptureFromCanvas && (
            <button
              type="button"
              onClick={handleLoadFromStudio}
              className="py-1.5 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer border border-gray-200 transition-all"
            >
              <span>🎨</span> Lấy từ Studio
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setImageUrl('/assets/sample_spritesheet_8x4.png');
              applyPreset(8, 4);
              toast.success("Đã nạp mẫu RPG 4 Hướng (8 cột x 4 hàng)!");
            }}
            className="py-1.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer border border-amber-200 transition-all"
          >
            <span>🏃</span> Mẫu 8x4 RPG Walk
          </button>
        </div>
      </div>

      {/* ── Khu vực Kéo thả & Presets Thiết lập Lưới ── */}
      <div 
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="mt-3 p-3 bg-gray-50/80 rounded-xl border border-dashed border-gray-300 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-sans text-gray-600"
      >
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-base">📥</span>
          <span>
            Kéo thả tệp ảnh vào đây để mở trực tiếp, hoặc chọn nhanh cấu hình lưới:
          </span>
        </div>

        {/* Quick Grid Presets */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1">
            Lưới mẫu:
          </span>
          <button
            type="button"
            onClick={() => applyPreset(8, 4)}
            className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              columns === 8 && rows === 4 ? 'bg-red-600 text-white shadow-2xs' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            8x4 (RPG 4 Hướng)
          </button>
          <button
            type="button"
            onClick={() => applyPreset(5, 3)}
            className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              columns === 5 && rows === 3 ? 'bg-red-600 text-white shadow-2xs' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            5x3 (AI Grid 15 Frames)
          </button>
          <button
            type="button"
            onClick={() => applyPreset(3, 4)}
            className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              columns === 3 && rows === 4 ? 'bg-red-600 text-white shadow-2xs' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            3x4 (Pipoya 12 Frames)
          </button>
          <button
            type="button"
            onClick={() => applyPreset(4, 4)}
            className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              columns === 4 && rows === 4 ? 'bg-red-600 text-white shadow-2xs' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            4x4 (16 Khung)
          </button>
        </div>
      </div>

      {/* ── Bố Cục Chính 2 Cột: Bên Trái Lưới Khung - Bên Phải Trình Phát Hoạt Ảnh ── */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* CỘT TRÁI (7 Phầm): Ma Trận Lưới Khung Hình (Interactive Grid Slicer) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          
          {/* Thanh tham số Lưới: Cột & Hàng & Thống kê kích thước */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-sans">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <label className="font-bold text-gray-600">Số cột:</label>
                <input
                  type="number"
                  min="1"
                  max="32"
                  value={columns}
                  onChange={(e) => {
                    const val = Math.max(1, parseInt(e.target.value) || 1);
                    setColumns(val);
                    setCurrentFrame(0);
                  }}
                  className="w-14 bg-white border border-gray-300 rounded-lg py-1 px-2 text-center font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="flex items-center gap-1.5">
                <label className="font-bold text-gray-600">Số hàng:</label>
                <input
                  type="number"
                  min="1"
                  max="32"
                  value={rows}
                  onChange={(e) => {
                    const val = Math.max(1, parseInt(e.target.value) || 1);
                    setRows(val);
                    setCurrentFrame(0);
                  }}
                  className="w-14 bg-white border border-gray-300 rounded-lg py-1 px-2 text-center font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Thông số kỹ thuật ảnh */}
            <div className="text-[11px] text-gray-500 font-mono">
              Khổ ảnh: <b className="text-gray-800">{imgSize.width}x{imgSize.height}px</b> &bull; Ô: <b className="text-gray-800">{Math.round(frameWidth)}x{Math.round(frameHeight)}px</b>
            </div>
          </div>

          {/* Khung Hiển thị Lưới Ma Trận (Click ô để nhảy frame) */}
          <div className="relative border border-gray-200 rounded-xl overflow-hidden bg-gray-900/5 max-h-[380px] overflow-y-auto custom-scrollbar select-none">
            {imageUrl ? (
              <div className="relative inline-block w-full">
                {/* Ảnh Spritesheet gốc */}
                <img
                  src={imageUrl}
                  alt="Spritesheet"
                  className="w-full h-auto block pixelated"
                  style={{ imageRendering: 'pixelated' }}
                />

                {/* Lớp phủ Lưới Ma trận SVG / CSS */}
                <div
                  className="absolute inset-0 grid"
                  style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
                  }}
                >
                  {Array.from({ length: columns * rows }).map((_, idx) => {
                    const isCurrent = idx === currentFrame;
                    const start = currentAction.start_frame;
                    const end = currentAction.end_frame;
                    const isInAction = idx >= start && idx <= end;

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          setCurrentFrame(idx);
                          setIsPlaying(false);
                        }}
                        className={`
                          relative border border-dashed transition-all cursor-pointer flex items-start justify-start p-1
                          ${isCurrent 
                            ? 'border-amber-400 bg-amber-400/25 ring-2 ring-amber-400 ring-inset z-20' 
                            : isInAction 
                              ? 'border-red-400/40 bg-red-500/5 hover:bg-red-500/15 z-10' 
                              : 'border-white/20 bg-black/10 hover:bg-white/20'
                          }
                        `}
                        title={`Khung #${idx + 1} (Click để xem)`}
                      >
                        <span className={`
                          text-[9px] font-mono font-bold px-1 rounded-sm shadow-xs select-none
                          ${isCurrent ? 'bg-amber-500 text-white' : 'bg-black/60 text-white/90'}
                        `}>
                          {idx + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-gray-400 gap-2">
                <span className="text-3xl">🖼️</span>
                <span>Chưa có ảnh Sprite Sheet nào được chọn</span>
              </div>
            )}
          </div>

          <div className="text-[11px] text-gray-400 italic text-right font-sans">
            * Mẹo: Click trực tiếp vào bất kỳ ô số nào trên ma trận để dừng và soi chi tiết khung hình đó.
          </div>
        </div>

        {/* CỘT PHẢI (5 Phần): Trình Phát Hoạt Ảnh (Live Animation Player) */}
        <div className="lg:col-span-5 bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col gap-3">
          
          {/* Header Trình phát & Khung hiện tại */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider font-sans flex items-center gap-1.5">
              <span>▶</span> Xem trước hoạt ảnh động tác
            </span>
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-red-100 text-red-700 rounded-md">
              Khung: {currentFrame + 1} / {columns * rows}
            </span>
          </div>

          {/* Chọn nhóm hành động (Hàng 1, Hàng 2, Toàn bộ) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-sans">
              Chọn nhóm hành động để phát:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {actions.map((act) => {
                const isSelected = selectedActionId === act.id;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => {
                      setSelectedActionId(act.id);
                      setCurrentFrame(act.start_frame);
                    }}
                    className={`
                      py-1 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-sans
                      ${isSelected
                        ? 'bg-red-600 text-white shadow-2xs ring-2 ring-red-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                      }
                    `}
                  >
                    {act.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Đổi màu nền Preview */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-gray-500 font-sans shrink-0">Nền thử:</span>
            <div className="flex flex-wrap gap-1">
              {BACKGROUNDS.map((bg) => (
                <button
                  key={bg.id}
                  type="button"
                  onClick={() => setPreviewBg(bg)}
                  className={`
                    px-2 py-0.5 text-[11px] font-medium rounded-md border transition-all cursor-pointer font-sans
                    ${previewBg.id === bg.id
                      ? 'bg-gray-800 text-white border-gray-800'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-200'
                    }
                  `}
                >
                  {bg.name}
                </button>
              ))}
            </div>
          </div>

          {/* Vùng Canvas Renderer pixel-art sắc nét */}
          <div
            className={`
              w-full h-56 rounded-xl border border-gray-300 flex items-center justify-center overflow-hidden transition-all relative
              ${previewBg.className}
            `}
            style={previewBg.style || {}}
          >
            <canvas
              ref={canvasRef}
              width={220}
              height={220}
              className="max-w-full max-h-full block pixelated"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Thanh tua hoạt cảnh (Timeline & Playback Controls) */}
          <div className="flex flex-col gap-2 pt-1">
            <div className="flex items-center justify-between gap-3">
              {/* Nút lùi, phát/dừng, tiến */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrevFrame}
                  className="p-1.5 bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-lg text-xs font-bold cursor-pointer"
                  title="Khung trước đó"
                >
                  ⏮
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`
                    py-1.5 px-3 rounded-lg text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer shadow-2xs transition-all
                    ${isPlaying ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}
                  `}
                >
                  {isPlaying ? '⏸ Tạm dừng' : '▶ Tiếp tục'}
                </button>
                <button
                  type="button"
                  onClick={handleNextFrame}
                  className="p-1.5 bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 rounded-lg text-xs font-bold cursor-pointer"
                  title="Khung tiếp theo"
                >
                  ⏭
                </button>
              </div>

              {/* Tốc độ FPS */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-600 font-sans">
                  Tốc độ: <b className="text-red-600">{fps} FPS</b>
                </span>
              </div>
            </div>

            {/* Slider điều chỉnh FPS */}
            <input
              type="range"
              min="1"
              max="24"
              value={fps}
              onChange={(e) => setFps(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
          </div>

          {/* Thanh nút Tải xuất hình ảnh */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200">
            <button
              type="button"
              onClick={handleDownloadCurrentFrame}
              className="py-2 px-3 bg-white hover:bg-gray-100 text-gray-800 rounded-xl text-xs font-bold font-sans flex items-center justify-center gap-1.5 border border-gray-300 cursor-pointer transition-all shadow-2xs"
            >
              <span>✂️</span> Tải Khung Này (#{currentFrame + 1})
            </button>
            <button
              type="button"
              onClick={handleDownloadFullSheet}
              className="py-2 px-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold font-sans flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-2xs"
            >
              <span>📦</span> Tải Sprite Sheet PNG
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
