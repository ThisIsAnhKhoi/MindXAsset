import { useEffect, useRef, useState, useMemo } from 'react';
import JSZip from 'jszip';
import { toast } from 'react-toastify';

export default function AnimationPreview({ imageUrl, frames = [], layoutFormat = 'single' }) {
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const bgInputRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(100);
  const [currentFrame, setCurrentFrame] = useState(0);
  
  const [manualCols, setManualCols] = useState(1);
  const [manualRows, setManualRows] = useState(1);

  const BACKGROUNDS = [
    { id: 'transparent', name: 'Trong suốt (Caro)', style: {}, className: 'bg-gray-200 bg-[length:16px_16px] bg-[linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc),linear-gradient(45deg,#ccc_25%,transparent_25%,transparent_75%,#ccc_75%,#ccc)] bg-[position:0_0,8px_8px]' },
    { id: 'black', name: 'Nền đen', style: {}, className: 'bg-black' },
    { id: 'white', name: 'Nền trắng', style: {}, className: 'bg-white border-gray-300' },
    { id: 'green', name: 'Màn hình xanh', style: {}, className: 'bg-[#00b140]' },
  ];

  const [previewBg, setPreviewBg] = useState(BACKGROUNDS[0]);
  const [customBgUrl, setCustomBgUrl] = useState(null);
  const [useCustomBg, setUseCustomBg] = useState(false);

  const isAutoSlice = Array.isArray(frames) && frames.length > 0;

  const autoCols = useMemo(() => {
    if (isAutoSlice) {
      const distinctX = new Set(frames.map(f => f.x));
      return distinctX.size || 1;
    }
    return 1;
  }, [frames, isAutoSlice]);

  const autoRows = useMemo(() => {
    if (isAutoSlice) {
      const distinctY = new Set(frames.map(f => f.y));
      return distinctY.size || 1;
    }
    return 1;
  }, [frames, isAutoSlice]);

  const cols = isAutoSlice ? autoCols : manualCols;
  const rows = isAutoSlice ? autoRows : manualRows;

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;
    img.onload = () => {
      imageRef.current = img;
    };
  }, [imageUrl]);

  useEffect(() => {
    if (!isPlaying || !imageRef.current) return;
    
    const totalFrames = isAutoSlice ? frames.length : (cols * rows);
    if (totalFrames <= 1) return;

    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev + 1) % totalFrames);
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, cols, rows, frames, isAutoSlice]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const img = imageRef.current;
    
    if (!ctx || !img) return;

    const totalFrames = isAutoSlice ? frames.length : (cols * rows);
    if (totalFrames === 0) return;
    
    let frameX;
    let frameY;
    let frameW;
    let frameH;

    if (isAutoSlice) {
      const frameData = frames[currentFrame % frames.length];
      if (frameData) {
        frameX = frameData.x;
        frameY = frameData.y;
        frameW = frameData.w;
        frameH = frameData.h;
      } else {
        frameX = 0;
        frameY = 0;
        frameW = img.width;
        frameH = img.height;
      }
    } else {
      frameW = img.width / cols;
      frameH = img.height / rows;
      const col = (currentFrame % totalFrames) % cols;
      const row = Math.floor((currentFrame % totalFrames) / cols);
      frameX = col * frameW;
      frameY = row * frameH;
    }

    canvas.width = frameW;
    canvas.height = frameH;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, frameX, frameY, frameW, frameH, 0, 0, frameW, frameH);
  }, [currentFrame, cols, rows, frames, isAutoSlice, imageUrl]);

  const handleBgUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith('image/')) {
        toast.error('Vui lòng chọn file ảnh nền hợp lệ.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomBgUrl(reader.result);
        setUseCustomBg(true);
        setPreviewBg(null);
        toast.success('Đã tải nền tùy chỉnh!');
      };
      reader.readAsDataURL(file);
    }
  };

  const selectBuiltinBg = (bg) => {
    setPreviewBg(bg);
    setUseCustomBg(false);
  };

  const clearCustomBg = () => {
    setCustomBgUrl(null);
    setUseCustomBg(false);
    setPreviewBg(BACKGROUNDS[0]);
    if (bgInputRef.current) bgInputRef.current.value = '';
  };

  const bgClassName = useCustomBg ? 'bg-cover bg-center bg-no-repeat' : (previewBg?.className || '');
  const bgStyle = useCustomBg && customBgUrl ? { backgroundImage: `url("${customBgUrl}")` } : {};

  const handleDownloadZip = async () => {
    const img = imageRef.current;
    if (!img) return;

    const zip = new JSZip();
    const totalFrames = isAutoSlice ? frames.length : (cols * rows);
    
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');

    let count = 0;
    for (let i = 0; i < totalFrames; i++) {
      let frameX;
      let frameY;
      let frameW;
      let frameH;
      
      if (isAutoSlice) {
        const frameData = frames[i];
        frameX = frameData.x;
        frameY = frameData.y;
        frameW = frameData.w;
        frameH = frameData.h;
      } else {
        frameW = img.width / cols;
        frameH = img.height / rows;
        const col = i % cols;
        const row = Math.floor(i / cols);
        frameX = col * frameW;
        frameY = row * frameH;
      }

      tempCanvas.width = frameW;
      tempCanvas.height = frameH;
      tempCtx.clearRect(0, 0, frameW, frameH);
      tempCtx.drawImage(img, frameX, frameY, frameW, frameH, 0, 0, frameW, frameH);

      const dataUrl = tempCanvas.toDataURL('image/png');
      const base64Data = dataUrl.split(',')[1];
      zip.file(`frame_${i.toString().padStart(2, '0')}.png`, base64Data, { base64: true });
      count++;
    }

    toast.info('Đang nén file ZIP...');
    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mindx_spritesheet_${Date.now()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success(`Đã tải xuống ${count} frames thành công!`);
    } catch {
      toast.error('Lỗi khi tạo file ZIP!');
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col gap-3.5 sm:gap-4 mt-4">
      <div className="flex items-center justify-between border-b pb-2 border-gray-200 gap-2">
        <h3 className="font-semibold text-gray-700 text-xs sm:text-sm truncate">
          Animation Preview & Slicer ({layoutFormat === 'grid' ? 'Lưới Grid' : 'Dải Ngang'})
        </h3>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md transition font-semibold shrink-0 cursor-pointer"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* ── Background Selector ── */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 items-center">
        <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap mr-1">Nền:</span>
        {BACKGROUNDS.map(bg => (
          <button
            key={bg.id}
            onClick={() => selectBuiltinBg(bg)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              !useCustomBg && previewBg?.id === bg.id 
                ? 'border-red-500 bg-red-50 text-red-700 font-bold' 
                : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            {bg.name}
          </button>
        ))}
        
        <button
          onClick={() => bgInputRef.current?.click()}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all whitespace-nowrap flex items-center gap-1 shrink-0 cursor-pointer ${
            useCustomBg 
              ? 'border-red-500 bg-red-50 text-red-700 font-bold' 
              : 'border-dashed border-gray-300 bg-white text-gray-500 hover:border-red-400 hover:text-red-600'
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          {useCustomBg ? 'Đã tải nền' : 'Tải nền của bạn'}
        </button>
        <input 
          ref={bgInputRef}
          type="file" 
          accept="image/*" 
          onChange={handleBgUpload} 
          className="hidden" 
        />

        {useCustomBg && (
          <button
            onClick={clearCustomBg}
            className="px-2 py-1.5 rounded-lg text-xs font-medium border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 transition-all whitespace-nowrap shrink-0"
            title="Xóa nền tùy chỉnh"
          >
            ✕
          </button>
        )}
      </div>

      {/* ── Canvas preview ── */}
      <div 
        className={`flex justify-center items-center rounded-lg border border-gray-300 overflow-hidden relative min-h-[128px] p-2 ${bgClassName}`}
        style={bgStyle}
      >
        <canvas ref={canvasRef} className="max-w-full max-h-48 object-contain relative z-10" style={{ imageRendering: 'pixelated' }} />
      </div>

      <div className="flex flex-col gap-3 text-xs sm:text-sm text-gray-700">
        <div className="flex items-center gap-3">
          <label className="w-16 sm:w-20 font-medium shrink-0">Tốc độ:</label>
          <input 
            type="range" 
            min="20" 
            max="500" 
            value={speed} 
            onChange={(e) => setSpeed(parseInt(e.target.value))} 
            className="flex-1 accent-red-600"
          />
          <span className="w-14 text-right text-xs font-semibold shrink-0">{speed}ms</span>
        </div>

        {!isAutoSlice && (
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <label className="font-medium text-xs sm:text-sm">Số cột:</label>
              <input 
                type="number" 
                min="1" 
                value={manualCols} 
                onChange={(e) => setManualCols(Math.max(1, parseInt(e.target.value) || 1))} 
                className="w-full bg-white border border-gray-300 rounded-md px-2 py-1 outline-none focus:border-red-500 transition"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <label className="font-medium text-xs sm:text-sm">Số dòng:</label>
              <input 
                type="number" 
                min="1" 
                value={manualRows} 
                onChange={(e) => setManualRows(Math.max(1, parseInt(e.target.value) || 1))} 
                className="w-full bg-white border border-gray-300 rounded-md px-2 py-1 outline-none focus:border-red-500 transition"
              />
            </div>
          </div>
        )}

        <button 
          onClick={handleDownloadZip}
          className="w-full mt-1 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-semibold py-2.5 sm:py-2 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          <span>Cắt & Tải File ZIP ({isAutoSlice ? frames.length : (cols * rows)} frames)</span>
        </button>
      </div>
    </div>
  );
}
