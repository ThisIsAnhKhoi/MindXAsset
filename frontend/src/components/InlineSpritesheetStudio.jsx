import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { toast } from 'react-toastify';

/**
 * InlineSpritesheetStudio
 * Bộ công cụ kiểm thử & tách lưới Sprite Sheet chuẩn Studio Game 2D.
 * Thiết kế khoa học, tối giản, sang trọng, độ chính xác pixel tuyệt đối (100% Zero-Bleed).
 */
export default function InlineSpritesheetStudio({
  initialImageUrl = null,
  onCaptureFromCanvas = null
}) {
  // ── 1. NGUỒN ẢNH & THÔNG SỐ ──
  const [imageUrl, setImageUrl] = useState(initialImageUrl || '/assets/sample_spritesheet_8x4.png?v=2');
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });
  const [fileName, setFileName] = useState('sample_spritesheet_8x4.png');

  // ── 2. CẤU HÌNH MA TRẬN LƯỚI ──
  const [columns, setColumns] = useState(8);
  const [rows, setRows] = useState(4);

  // ── 3. BỘ ĐIỀU KHIỂN CHẾ ĐỘ XEM (VIEW MODES) ──
  // 'fit': Vừa khít 100% khung nhìn (Mặc định - giải quyết triệt để lỗi tràn khung)
  // '1x': Kích thước gốc 1:1
  // '2x': Phóng to 200% soi pixel siêu nhỏ
  const [zoomMode, setZoomMode] = useState('fit');

  // ── 4. BỘ TINH CHỈNH TỌA ĐỘ NÂNG CAO (CALIBRATION) ──
  const [showCalibration, setShowCalibration] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const [gapX, setGapX] = useState(0);
  const [gapY, setGapY] = useState(0);
  const [groundAnchor, setGroundAnchor] = useState(true); // Neo chân tiếp đất (chống trôi nhấp nhô)

  // ── 5. TRẠNG THÁI TUA HOẠT ẢNH ──
  const [fps, setFps] = useState(8);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [selectedActionId, setSelectedActionId] = useState('row_0');

  // ── 6. BỘ MÀU NỀN STUDIO ──
  const BACKGROUNDS = [
    {
      id: 'transparent',
      label: 'Caro',
      className: 'bg-slate-100 bg-[length:14px_14px] bg-[linear-gradient(45deg,#cbd5e1_25%,transparent_25%,transparent_75%,#cbd5e1_75%,#cbd5e1),linear-gradient(45deg,#cbd5e1_25%,transparent_25%,transparent_75%,#cbd5e1_75%,#cbd5e1)] bg-[position:0_0,7px_7px]'
    },
    { id: 'dark', label: 'Tối', className: 'bg-slate-900' },
    { id: 'light', label: 'Sáng', className: 'bg-white' },
    { id: 'chroma', label: 'Xanh', className: 'bg-[#00b140]' },
    {
      id: 'rpg',
      label: 'RPG',
      className: 'bg-cover bg-center',
      style: { backgroundImage: 'url("https://img.freepik.com/free-vector/pixel-art-rural-landscape_24908-61882.jpg")' }
    }
  ];
  const [previewBg, setPreviewBg] = useState(BACKGROUNDS[0]);

  // ── 7. THAM CHIẾU DOM ──
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const dropZoneRef = useRef(null);
  const activeCellRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Đồng bộ ảnh mới từ props ngoài (khi AI vừa sinh xong ảnh)
  useEffect(() => {
    if (initialImageUrl) {
      setImageUrl(initialImageUrl);
      setFileName('ai_generated_spritesheet.png');
      setColumns(5);
      setRows(3);
      setZoomMode('fit');
    }
  }, [initialImageUrl]);

  // Đo đạc khổ ảnh thực tế khi ảnh thay đổi
  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imgRef.current = img;
      setImgSize({
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height
      });
      setCurrentFrame(0);
    };
    img.onerror = () => {
      console.warn('Không thể nạp spritesheet:', imageUrl);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  // Xử lý nạp file từ người dùng
  const handleLoadFile = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) {
      toast.error('Vui lòng chọn tệp định dạng ảnh (PNG, JPG, WebP)!');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
      setFileName(file.name);
      setZoomMode('fit');
      toast.success(`Đã nạp spritesheet: ${file.name}`);
    };
    reader.readAsDataURL(file);
  }, []);

  // Lắng nghe Paste ảnh từ Clipboard (Ctrl + V)
  useEffect(() => {
    const handlePaste = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            handleLoadFile(file);
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [handleLoadFile]);

  // Kéo thả file
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleLoadFile(e.dataTransfer.files[0]);
    }
  };

  // Cài đặt nhanh Preset lưới
  const applyPreset = (c, r, name = '') => {
    setColumns(c);
    setRows(r);
    setCurrentFrame(0);
    setSelectedActionId('row_0');
    if (name) toast.info(`Đã áp dụng cấu hình: ${name} (${c}×${r})`);
  };

  // Tính toán động kích thước mỗi ô sau khi trừ lề bù trừ
  const cellWidth = useMemo(() => {
    if (!imgSize.width || columns <= 0) return 0;
    const usable = imgSize.width - (marginLeft + marginRight) - (columns - 1) * gapX;
    return Math.max(1, usable / columns);
  }, [imgSize.width, columns, marginLeft, marginRight, gapX]);

  const cellHeight = useMemo(() => {
    if (!imgSize.height || rows <= 0) return 0;
    const usable = imgSize.height - (marginTop + marginBottom) - (rows - 1) * gapY;
    return Math.max(1, usable / rows);
  }, [imgSize.height, rows, marginTop, marginBottom, gapY]);

  // Tính toán động các nhóm hành động theo hàng
  const actions = useMemo(() => {
    const total = Math.max(1, columns * rows);
    if (rows <= 1) {
      return [{ id: 'all', label: `Toàn bộ (${total})`, start_frame: 0, end_frame: total - 1 }];
    }

    const list = [];
    const rNames4 = [
      { label: 'Mặt trước (Xuống)', icon: '⬇' },
      { label: 'Nghiêng trái', icon: '⬅' },
      { label: 'Phía sau (Lên)', icon: '⬆' },
      { label: 'Nghiêng phải', icon: '➡' }
    ];

    const rNames3 = [
      { label: 'Đứng & Đi', icon: '🚶' },
      { label: 'Tấn công & Thủ', icon: '⚔' },
      { label: 'Bị thương', icon: '💥' }
    ];

    for (let r = 0; r < rows; r++) {
      let label = `Hàng ${r + 1}`;
      let icon = '•';
      if (rows === 4 && rNames4[r]) {
        label = rNames4[r].label;
        icon = rNames4[r].icon;
      } else if (rows === 3 && rNames3[r]) {
        label = rNames3[r].label;
        icon = rNames3[r].icon;
      }

      list.push({
        id: `row_${r}`,
        label,
        icon,
        row: r,
        start_frame: r * columns,
        end_frame: Math.min((r + 1) * columns - 1, total - 1)
      });
    }

    list.push({
      id: 'all',
      label: 'Tất cả',
      icon: '🔄',
      row: -1,
      start_frame: 0,
      end_frame: total - 1
    });

    return list;
  }, [columns, rows]);

  // Hành động hiện tại
  const currentAction = actions.find((a) => a.id === selectedActionId) || actions[0] || {
    id: 'all',
    start_frame: 0,
    end_frame: Math.max(0, columns * rows - 1)
  };

  // Vòng lặp tua hoạt ảnh
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

  // Tự động cuộn ô active vào tầm nhìn khi ở chế độ phóng to 1x / 2x
  useEffect(() => {
    if (zoomMode !== 'fit' && activeCellRef.current) {
      activeCellRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [currentFrame, zoomMode]);

  // Vẽ frame hiện tại lên Canvas với tỷ lệ sắc nét chuẩn Pixel Art (Zero Bleed & Ground Anchor)
  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img || !imgSize.width || columns <= 0 || rows <= 0 || cellWidth <= 0 || cellHeight <= 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    const col = currentFrame % columns;
    const row = Math.floor(currentFrame / columns);

    // Tọa độ cắt lát trên ảnh gốc chính xác từng pixel
    const sx = marginLeft + col * (cellWidth + gapX);
    const sy = marginTop + row * (cellHeight + gapY);
    const sw = cellWidth;
    const sh = cellHeight;

    // Giữ tỷ lệ khung hình chuẩn
    const padding = 16;
    const targetW = canvas.width - padding * 2;
    const targetH = canvas.height - padding * 2;
    const aspect = sw / sh;

    let dw = targetW;
    let dh = targetH;
    if (aspect > targetW / targetH) {
      dh = dw / aspect;
    } else {
      dw = dh * aspect;
    }

    const dx = Math.round((canvas.width - dw) / 2);
    let dy;
    if (groundAnchor) {
      // Neo tiếp đất: Chân nhân vật luôn đứng vững trên đường đáy sân khấu
      dy = Math.round(canvas.height - padding - dh);
    } else {
      // Căn giữa tâm
      dy = Math.round((canvas.height - dh) / 2);
    }

    // Vẽ bóng tiếp đất nếu bật groundAnchor
    if (groundAnchor) {
      ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.beginPath();
      const shadowW = dw * 0.55;
      const shadowH = Math.max(4, dh * 0.08);
      const shadowX = dx + (dw - shadowW) / 2;
      const shadowY = dy + dh - shadowH / 2;
      ctx.ellipse(shadowX + shadowW / 2, shadowY + shadowH / 2, shadowW / 2, shadowH / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // Vẽ nhân vật sắc nét
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, Math.round(dw), Math.round(dh));
  }, [
    currentFrame,
    columns,
    rows,
    imgSize,
    cellWidth,
    cellHeight,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
    gapX,
    gapY,
    groundAnchor
  ]);

  // Điều khiển bước khung
  const handlePrevFrame = () => {
    const start = currentAction.start_frame;
    const end = currentAction.end_frame;
    setCurrentFrame((prev) => (prev <= start ? end : prev - 1));
  };

  const handleNextFrame = () => {
    const start = currentAction.start_frame;
    const end = currentAction.end_frame;
    setCurrentFrame((prev) => (prev >= end ? start : prev + 1));
  };

  // Tải trọn bộ Spritesheet
  const handleDownloadFullSheet = () => {
    if (!imageUrl) return;
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `spritesheet_${columns}x${rows}_${fileName}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Tải khung đơn
  const handleDownloadCurrentFrame = () => {
    if (!imageUrl || !imgRef.current || !cellWidth || !cellHeight) return;
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(cellWidth));
    canvas.height = Math.max(1, Math.round(cellHeight));
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const col = currentFrame % columns;
    const row = Math.floor(currentFrame / columns);
    const sx = marginLeft + col * (cellWidth + gapX);
    const sy = marginTop + row * (cellHeight + gapY);

    ctx.drawImage(imgRef.current, sx, sy, cellWidth, cellHeight, 0, 0, canvas.width, canvas.height);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `frame_${currentFrame + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Đã xuất Khung hình #${currentFrame + 1}`);
  };

  // Lấy nhân vật từ Canvas Studio
  const handleLoadFromStudio = () => {
    if (typeof onCaptureFromCanvas === 'function') {
      const base64 = onCaptureFromCanvas();
      if (base64) {
        setImageUrl(base64);
        setFileName('character_studio_capture.png');
        setColumns(1);
        setRows(1);
        setZoomMode('fit');
        toast.success('Đã nạp nhân vật từ Studio!');
      } else {
        toast.info('Chưa có dữ liệu từ Canvas Studio.');
      }
    }
  };

  // Đặt lại căn chỉnh lề về 0
  const handleResetCalibration = () => {
    setMarginTop(0);
    setMarginLeft(0);
    setMarginRight(0);
    setMarginBottom(0);
    setGapX(0);
    setGapY(0);
    setGroundAnchor(true);
    toast.info('Đã đặt lại thông số căn chỉnh lề');
  };

  return (
    <div 
      ref={dropZoneRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden mt-4 transition-all"
    >
      
      {/* ── 1. STUDIO MASTER TOOLBAR (Hợp nhất 1 thanh điều hướng sang trọng) ── */}
      <div className="px-5 py-3.5 bg-slate-50/70 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Tên công cụ & Thông số kỹ thuật */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs shadow-2xs">
            2D
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-slate-900 font-sans tracking-tight uppercase">
                SPRITESHEET STUDIO & INSPECTOR
              </h2>
              <span className="text-[11px] font-mono text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded-md">
                {columns}×{rows} Lưới
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mt-0.5">
              <span className="truncate max-w-[200px]" title={fileName}>{fileName}</span>
              <span>•</span>
              <span>{imgSize.width}×{imgSize.height}px</span>
              <span>•</span>
              <span className="text-slate-700 font-semibold">{Math.round(cellWidth)}×{Math.round(cellHeight)}px/cell</span>
            </div>
          </div>
        </div>

        {/* Nhóm thao tác Nạp Nguồn Ảnh */}
        <div className="flex items-center gap-2 shrink-0">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleLoadFile(e.target.files[0]);
              }
            }}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold font-sans flex items-center gap-1.5 cursor-pointer shadow-2xs hover:border-slate-400 transition-all"
          >
            <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Tải tệp ảnh
          </button>

          {onCaptureFromCanvas && (
            <button
              type="button"
              onClick={handleLoadFromStudio}
              className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold font-sans flex items-center gap-1.5 cursor-pointer shadow-2xs hover:border-slate-400 transition-all"
              title="Chụp ảnh nhân vật từ bàn làm việc Character Studio"
            >
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Lấy từ Studio
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setImageUrl('/assets/sample_spritesheet_8x4.png?v=2');
              setFileName('sample_spritesheet_8x4.png');
              setZoomMode('fit');
              handleResetCalibration();
              applyPreset(8, 4, 'Mẫu RPG 4 Hướng');
            }}
            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold font-sans flex items-center gap-1.5 cursor-pointer shadow-2xs transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Mẫu 8×4 RPG Walk
          </button>
        </div>

      </div>

      {/* ── 2. SUB-TOOLBAR: CẤU HÌNH MA TRẬN LƯỚI & NÚT TINH CHỈNH ── */}
      <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
        
        {/* Preset Lưới thông dụng */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Lưới mẫu:
          </span>
          <div className="inline-flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
            {[
              { id: '8x4', c: 8, r: 4, label: '8×4 RPG' },
              { id: '5x3', c: 5, r: 3, label: '5×3 AI' },
              { id: '3x4', c: 3, r: 4, label: '3×4 Pipoya' },
              { id: '4x4', c: 4, r: 4, label: '4×4' }
            ].map((p) => {
              const active = columns === p.c && rows === p.r;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => applyPreset(p.c, p.r, p.label)}
                  className={`
                    px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer
                    ${active ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600 hover:text-slate-900'}
                  `}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tùy chỉnh Cột & Hàng + Nút Mở Tinh chỉnh Nâng cao */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium text-[11px]">Cột:</span>
            <input
              type="number"
              min="1"
              max="32"
              value={columns}
              onChange={(e) => {
                setColumns(Math.max(1, parseInt(e.target.value) || 1));
                setCurrentFrame(0);
              }}
              className="w-12 bg-slate-50 border border-slate-200 rounded-md py-0.5 px-1.5 text-center font-mono font-bold text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium text-[11px]">Hàng:</span>
            <input
              type="number"
              min="1"
              max="32"
              value={rows}
              onChange={(e) => {
                setRows(Math.max(1, parseInt(e.target.value) || 1));
                setCurrentFrame(0);
              }}
              className="w-12 bg-slate-50 border border-slate-200 rounded-md py-0.5 px-1.5 text-center font-mono font-bold text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <span className="text-slate-300">|</span>

          {/* Nút bật/tắt ngăn tinh chỉnh nâng cao */}
          <button
            type="button"
            onClick={() => setShowCalibration(!showCalibration)}
            className={`
              px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all flex items-center gap-1.5
              ${showCalibration 
                ? 'bg-slate-900 text-white shadow-2xs' 
                : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
              }
            `}
          >
            <span>⚙</span>
            <span>Tinh chỉnh tọa độ</span>
            <span className="text-[10px] opacity-70">{showCalibration ? '▲' : '▼'}</span>
          </button>
        </div>

      </div>

      {/* ── 2.1. NGĂN TINH CHỈNH TỌA ĐỘ NÂNG CAO (Collapsible Calibration Drawer) ── */}
      {showCalibration && (
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 text-xs font-sans items-center animate-fadeIn">
          <div>
            <label className="block text-[10px] font-mono font-semibold text-slate-500 uppercase">Lề trên (px)</label>
            <input
              type="number"
              value={marginTop}
              onChange={(e) => setMarginTop(parseInt(e.target.value) || 0)}
              className="w-full mt-1 bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono font-semibold text-slate-500 uppercase">Lề trái (px)</label>
            <input
              type="number"
              value={marginLeft}
              onChange={(e) => setMarginLeft(parseInt(e.target.value) || 0)}
              className="w-full mt-1 bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono font-semibold text-slate-500 uppercase">Lề phải (px)</label>
            <input
              type="number"
              value={marginRight}
              onChange={(e) => setMarginRight(parseInt(e.target.value) || 0)}
              className="w-full mt-1 bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono font-semibold text-slate-500 uppercase">Lề dưới (px)</label>
            <input
              type="number"
              value={marginBottom}
              onChange={(e) => setMarginBottom(parseInt(e.target.value) || 0)}
              className="w-full mt-1 bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono font-semibold text-slate-500 uppercase">Khoảng cách X (px)</label>
            <input
              type="number"
              value={gapX}
              onChange={(e) => setGapX(parseInt(e.target.value) || 0)}
              className="w-full mt-1 bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs text-slate-800"
            />
          </div>
          <div>
            <label className="block text-[10px] font-mono font-semibold text-slate-500 uppercase">Khoảng cách Y (px)</label>
            <input
              type="number"
              value={gapY}
              onChange={(e) => setGapY(parseInt(e.target.value) || 0)}
              className="w-full mt-1 bg-white border border-slate-200 rounded px-2 py-1 font-mono text-xs text-slate-800"
            />
          </div>
          <div className="flex flex-col justify-end">
            <span className="block text-[10px] font-mono font-semibold text-slate-500 uppercase mb-1">Căn tiếp đất</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setGroundAnchor(!groundAnchor)}
                className={`
                  px-2 py-1 rounded text-[11px] font-semibold cursor-pointer border transition-all flex-1 text-center
                  ${groundAnchor ? 'bg-emerald-600 text-white border-emerald-700' : 'bg-white text-slate-700 border-slate-300'}
                `}
                title="Căn đáy chân tiếp đất giúp nhân vật không bị nhấp nhô khi hoạt họa"
              >
                {groundAnchor ? '⚓ Đáy chân' : '🎯 Giữa tâm'}
              </button>
              <button
                type="button"
                onClick={handleResetCalibration}
                className="px-2 py-1 bg-white hover:bg-slate-100 text-slate-600 border border-slate-300 rounded text-[11px] cursor-pointer"
                title="Khôi phục mặc định"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 3. KHUNG NHÌN ĐÔI CÂN XỨNG (DUAL VIEWPORTS: 7 CỘT LƯỚI - 5 CỘT STAGE) ── */}
      <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch bg-slate-50/30">
        
        {/* CỘT TRÁI (7 Phần): Bàn Soi Ma Trận (Sheet Matrix Viewport) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col h-[500px] overflow-hidden">
          
          {/* Header Bàn soi + Bộ chuyển chế độ xem */}
          <div className="px-3.5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs shrink-0">
            <span className="font-bold text-slate-700 tracking-tight flex items-center gap-1.5 font-sans">
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              MA TRẬN LƯỚI ({columns * rows} Ô)
            </span>

            {/* Bộ điều khiển Chế độ xem: Vừa khung (Mặc định) | 1:1 Gốc | 2× Zoom */}
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs">
              {[
                { id: 'fit', label: 'Vừa khung', icon: '⤢' },
                { id: '1x', label: '1:1 Gốc', icon: '1×' },
                { id: '2x', label: '2× Zoom', icon: '2×' }
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setZoomMode(m.id)}
                  className={`
                    px-2 py-0.5 rounded text-[11px] font-sans font-semibold cursor-pointer transition-all flex items-center gap-1
                    ${zoomMode === m.id
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                    }
                  `}
                >
                  <span className="text-[10px] opacity-80">{m.icon}</span>
                  <span>{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Vùng hiển thị Spritesheet Matrix (Chuẩn xác 100% không cắt xén ở chế độ Fit) */}
          <div 
            ref={scrollContainerRef}
            className={`
              flex-1 p-3 custom-scrollbar flex items-center justify-center bg-slate-900/5 select-none relative
              ${zoomMode === 'fit' ? 'overflow-hidden' : 'overflow-auto'}
            `}
          >
            {imageUrl ? (
              <div
                className="relative flex items-center justify-center transition-all"
                style={
                  zoomMode === 'fit'
                    ? { maxWidth: '100%', maxHeight: '100%' }
                    : zoomMode === '1x'
                    ? { width: `${imgSize.width}px`, height: `${imgSize.height}px`, minWidth: `${imgSize.width}px` }
                    : { width: `${imgSize.width * 2}px`, height: `${imgSize.height * 2}px`, minWidth: `${imgSize.width * 2}px` }
                }
              >
                <div className="relative inline-block leading-none">
                  {/* Ảnh Spritesheet gốc */}
                  <img
                    src={imageUrl}
                    alt="Spritesheet Matrix"
                    className={`block pixelated pointer-events-none select-none ${
                      zoomMode === 'fit' ? 'max-w-full max-h-[380px] w-auto h-auto' : 'w-full h-full'
                    }`}
                    style={{
                      imageRendering: 'pixelated',
                    }}
                  />

                  {/* Lưới Ma Trận SVG/CSS: Inset bọc chính xác 100% theo img */}
                  <div
                    className="absolute inset-0 grid pointer-events-auto"
                    style={{
                      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                      gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                      paddingTop: `${marginTop}px`,
                      paddingBottom: `${marginBottom}px`,
                      paddingLeft: `${marginLeft}px`,
                      paddingRight: `${marginRight}px`,
                      columnGap: `${gapX}px`,
                      rowGap: `${gapY}px`
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
                          ref={isCurrent ? activeCellRef : null}
                          onClick={() => {
                            setCurrentFrame(idx);
                            setIsPlaying(false);
                            // Tự động chuyển hàng hành động khớp với ô vừa chọn
                            const rowOfCell = Math.floor(idx / columns);
                            const matchingAction = actions.find((a) => a.row === rowOfCell);
                            if (matchingAction && selectedActionId !== matchingAction.id && selectedActionId !== 'all') {
                              setSelectedActionId(matchingAction.id);
                            }
                          }}
                          className={`
                            relative border transition-all cursor-pointer flex items-start justify-start p-0.5
                            ${isCurrent 
                              ? 'border-amber-400 bg-amber-400/25 ring-2 ring-amber-400 ring-inset z-20 shadow-xs' 
                              : isInAction 
                                ? 'border-red-400/40 bg-red-500/10 hover:bg-red-500/20 z-10' 
                                : 'border-slate-300/40 bg-black/5 hover:bg-white/30'
                            }
                          `}
                          title={`Khung #${idx + 1}`}
                        >
                          <span className={`
                            text-[9px] font-mono font-bold px-1 py-0.2 rounded select-none leading-tight
                            ${isCurrent ? 'bg-amber-500 text-white shadow-2xs' : 'bg-slate-900/70 text-white/90'}
                          `}>
                            {idx + 1}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-400 text-xs font-sans">
                Chưa có dữ liệu Spritesheet
              </div>
            )}
          </div>

          {/* Footer Bàn soi: Trạng thái khung hiện tại */}
          <div className="px-3.5 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 shrink-0">
            <span>Tọa độ: Cột {(currentFrame % columns) + 1} • Hàng {Math.floor(currentFrame / columns) + 1}</span>
            <span className="font-semibold text-slate-700">Khung #{currentFrame + 1} / {columns * rows}</span>
          </div>

        </div>

        {/* CỘT PHẢI (5 Phần): Sân Khấu Hoạt Cảnh (Animation Stage Viewport) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col h-[500px] overflow-hidden justify-between">
          
          {/* Header Sân khấu: Nhóm hành động (Horizontal Chips Bar) */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 shrink-0 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700 text-xs tracking-tight uppercase font-sans flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                TRÌNH PHÁT HOẠT CẢNH
              </span>
              <span className="font-mono text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md border border-red-200/60">
                Frame {currentFrame - currentAction.start_frame + 1} / {currentAction.end_frame - currentAction.start_frame + 1}
              </span>
            </div>

            {/* Các thẻ Chip chọn hàng hành động ngang gọn gàng */}
            <div className="flex flex-wrap gap-1">
              {actions.map((act) => {
                const active = selectedActionId === act.id;
                return (
                  <button
                    key={act.id}
                    type="button"
                    onClick={() => {
                      setSelectedActionId(act.id);
                      setCurrentFrame(act.start_frame);
                    }}
                    className={`
                      px-2.5 py-1 rounded-lg text-xs font-semibold font-sans transition-all cursor-pointer flex items-center gap-1
                      ${active 
                        ? 'bg-slate-900 text-white shadow-2xs' 
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                      }
                    `}
                  >
                    <span>{act.icon}</span>
                    <span>{act.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Vùng Canvas Sân khấu trung tâm */}
          <div className="flex-1 p-3 flex items-center justify-center relative overflow-hidden bg-slate-100/50">
            {/* Color Swatches đổi màu nền (Góc trên phải nhỏ gọn) */}
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 rounded-lg border border-slate-200 shadow-2xs z-20">
              {BACKGROUNDS.map((bg) => (
                <button
                  key={bg.id}
                  type="button"
                  onClick={() => setPreviewBg(bg)}
                  className={`
                    w-4 h-4 rounded-full border transition-all cursor-pointer
                    ${previewBg.id === bg.id ? 'ring-2 ring-red-500 scale-110' : 'border-slate-300 opacity-80 hover:opacity-100'}
                    ${bg.id === 'transparent' ? 'bg-slate-300' : ''}
                    ${bg.id === 'dark' ? 'bg-slate-950' : ''}
                    ${bg.id === 'light' ? 'bg-white' : ''}
                    ${bg.id === 'chroma' ? 'bg-[#00b140]' : ''}
                    ${bg.id === 'rpg' ? 'bg-amber-700' : ''}
                  `}
                  title={`Nền: ${bg.label}`}
                />
              ))}
            </div>

            {/* Canvas Stage */}
            <div
              className={`
                w-full h-full max-h-[250px] rounded-xl border border-slate-200/80 flex items-center justify-center overflow-hidden transition-all shadow-inner
                ${previewBg.className}
              `}
              style={previewBg.style || {}}
            >
              <canvas
                ref={canvasRef}
                width={240}
                height={240}
                className="max-w-full max-h-full block pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </div>

          {/* Transport Controls Bar (Chuẩn Phần mềm Làm Game) */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col gap-2.5">
            
            {/* Thanh điều khiển Play/Pause/Steps & FPS */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevFrame}
                  className="w-7 h-7 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold flex items-center justify-center cursor-pointer transition-all shadow-2xs"
                  title="Khung trước đó"
                >
                  ⏮
                </button>
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`
                    px-3 py-1.5 rounded-lg text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer shadow-2xs transition-all
                    ${isPlaying ? 'bg-slate-800 hover:bg-slate-900 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}
                  `}
                >
                  {isPlaying ? '⏸ Tạm dừng' : '▶ Tiếp tục'}
                </button>
                <button
                  type="button"
                  onClick={handleNextFrame}
                  className="w-7 h-7 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold flex items-center justify-center cursor-pointer transition-all shadow-2xs"
                  title="Khung tiếp theo"
                >
                  ⏭
                </button>
              </div>

              {/* Tốc độ FPS */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 font-medium">
                  {Math.round(1000 / fps)}ms
                </span>
                <span className="text-xs font-bold text-slate-700 font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
                  {fps} FPS
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
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
            />

            {/* Hai nút xuất ảnh sạch sẽ */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200">
              <button
                type="button"
                onClick={handleDownloadCurrentFrame}
                className="py-1.5 px-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold font-sans flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-2xs"
              >
                <span>✂</span> Xuất khung #{currentFrame + 1}
              </button>
              <button
                type="button"
                onClick={handleDownloadFullSheet}
                className="py-1.5 px-2 bg-slate-900 hover:bg-black text-white rounded-lg text-xs font-semibold font-sans flex items-center justify-center gap-1.5 cursor-pointer transition-all shadow-2xs"
              >
                <span>📦</span> Xuất trọn bộ Sheet
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
