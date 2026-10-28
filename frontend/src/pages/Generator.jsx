import { useState, useRef } from 'react';
import SpritePreviewModal from '../components/SpritePreviewModal';
import AnimationPreview from '../components/AnimationPreview';
import { toast } from 'react-toastify';
import { getApiBaseUrl } from '../config/api';

/* ── Helper: format seconds → "Xm Ys" ── */
const formatDuration = (totalSeconds) => {
  const t = parseFloat(totalSeconds);
  if (isNaN(t) || t <= 0) return '0s';
  if (t < 60) return `${Math.round(t)}s`;
  const m = Math.floor(t / 60);
  const s = Math.round(t % 60);
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
};

const IMAGE_UPLOAD_TYPES = ['sprite-from-image', 'pixel-from-image'];
const HIDE_STYLE_PERSPECTIVE_TYPES = ['pixel', 'pixel-from-image', 'sprite-from-image'];

const THEMES = [
  { id: 'all', label: 'Tất cả (All)', icon: '🌟' },
  { id: 'military', label: 'Quân Đội (Military)', icon: '🎖️' },
  { id: 'fantasy', label: 'Thần Thoại (Fantasy)', icon: '🧙' },
  { id: 'daily', label: 'Đời Thường (Daily)', icon: '🎒' },
  { id: 'scifi', label: 'Xe Thám Hiểm & Sci-Fi', icon: '🚀' },
  { id: 'items', label: 'Vật Phẩm & Tương Tác', icon: '💎' }
];

const SMART_PRESETS = [
  {
    theme: 'military',
    title: 'Lính Đặc Nhiệm Rừng',
    type: 'character',
    prompt: 'elite special forces commando soldier wearing jungle camouflage tactical gear, night vision goggles and combat helmet',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'military',
    title: 'Xe Tăng Chiến Thuật Bánh Xích',
    type: 'vehicle',
    prompt: 'mini tactical armored battle tank with heavy rotating turret and dual caterpillar tracks',
    style: 'Pixel Art',
    ratio: '16:9'
  },
  {
    theme: 'military',
    title: 'Hòm Tiếp Tế Đạn Dược Quân Đội',
    type: 'prop',
    prompt: 'military green heavy metal ammo supply crate with steel latch and yellow stencil hazard markings',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'scifi',
    title: 'Xe Thám Hiểm Sao Hỏa (Rover)',
    type: 'vehicle',
    prompt: 'Mars planetary exploration rover machine with large rugged off-road wheels, rotating radar dish, robotic sample arm and solar panels',
    style: 'Pixel Art',
    ratio: '16:9'
  },
  {
    theme: 'scifi',
    title: 'Người Ngoài Hành Tinh 3 Mắt',
    type: 'alien',
    prompt: 'green extraterrestrial alien creature with 3 glowing purple eyes, sensory antennae, tentacle limbs and high-tech bio-suit',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'scifi',
    title: 'Tàu Bay Đệm Từ (Hover Speeder)',
    type: 'vehicle',
    prompt: 'futuristic aerodynamic hover speeder bike with blue glowing anti-gravity thrusters and sleek cockpit',
    style: 'Pixel Art',
    ratio: '16:9'
  },
  {
    theme: 'fantasy',
    title: 'Hiệp Sĩ Hoàng Gia Giáp Sắt',
    type: 'character',
    prompt: 'noble paladin knight wearing shining steel plate armor with golden trim engravings and royal blue flowing cape',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'fantasy',
    title: 'Pháp Sư Áo Choàng Tím',
    type: 'character',
    prompt: 'arcane wizard wearing deep purple hooded robe holding glowing magical crystal orb staff',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'fantasy',
    title: 'Cổng Dịch Chuyển Ma Thuật (Portal)',
    type: 'prop',
    prompt: 'ancient stone arch portal with glowing purple swirling dimensional energy vortex and mystical runes',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'daily',
    title: 'Học Sinh Đeo Balo Đồng Phục',
    type: 'character',
    prompt: 'anime high school student wearing classic school uniform carrying a backpack and sneakers',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'daily',
    title: 'Xe Buýt Học Sinh Retro',
    type: 'vehicle',
    prompt: 'cute yellow classic retro school bus in pixel art style with black bumper',
    style: 'Pixel Art',
    ratio: '16:9'
  },
  {
    theme: 'daily',
    title: 'Máy Bán Nước Tự Động Phố Phường',
    type: 'prop',
    prompt: 'Japanese street glowing beverage vending machine with illuminated drinks display and coin slot',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'items',
    title: 'Rương Kho Báu Vàng Khảm Ngọc',
    type: 'prop',
    prompt: 'ornate royal golden treasure chest filled with glowing colorful gems and ancient gold coins',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'items',
    title: 'Bình Máu Hồi Phục (Health Potion)',
    type: 'prop',
    prompt: 'glass flask potion bottle filled with glowing red bubbling elixir liquid with wooden cork stopper',
    style: 'Pixel Art',
    ratio: '1:1'
  },
  {
    theme: 'items',
    title: 'Cần Gạt Cơ Quan Mở Cửa Hầm',
    type: 'prop',
    prompt: 'dungeon wall switch heavy iron lever with stone base plate and red crystal indicator light',
    style: 'Pixel Art',
    ratio: '1:1'
  }
];

const Generator = () => {
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [prompt, setPrompt] = useState('');
  const [assetType, setAssetType] = useState('character');
  const [artStyle, setArtStyle] = useState('Pixel Art');
  const [perspective, setPerspective] = useState('Isometric');
  const [ratio, setRatio] = useState('1:1');
  const [customWidth, setCustomWidth] = useState(512);
  const [customHeight, setCustomHeight] = useState(512);

  const [timeOfDay, setTimeOfDay] = useState('day');
  const [action, setAction] = useState('running');
  const [frames, setFrames] = useState(10);

  const [tiles, setTiles] = useState('');
  const [columns, setColumns] = useState(8);
  const [cellSize, setCellSize] = useState('64x64');

  const [blockSize, setBlockSize] = useState(8);
  const [colors, setColors] = useState(32);
  const [extraPrompt, setExtraPrompt] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const [isGenerating, setIsGenerating] = useState(false);
  const [imageResult, setImageResult] = useState(null);
  const [generationTime, setGenerationTime] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const getCellSizePx = () => parseInt(cellSize.split('x')[0], 10) || 64;
  const tilesetAutoWidth = columns * getCellSizePx();

  const handleAssetTypeChange = (newType) => {
    setAssetType(newType);
    setImageResult(null);
    setMetadata(null);
  };

  const processFile = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      toast.error('Vui lòng chọn một file ảnh hợp lệ (JPG, PNG, WEBP).');
      return;
    }
    setUploadedImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreviewUrl(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const clearUploadedImage = () => {
    setUploadedImage(null);
    setImagePreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const applySmartPreset = (preset) => {
    setPrompt(preset.prompt);
    setAssetType(preset.type);
    if (preset.style) setArtStyle(preset.style);
    if (preset.ratio) setRatio(preset.ratio);
    if (preset.theme && preset.theme !== 'all') setSelectedTheme(preset.theme);
    toast.success(`Đã áp dụng mẫu: "${preset.title}"! 🚀`);
  };

  const handleGenerate = async () => {
    if (!IMAGE_UPLOAD_TYPES.includes(assetType) && !prompt.trim() && !tiles.trim()) {
      toast.error('Vui lòng nhập mô tả ý tưởng của bạn!');
      return;
    }
    if (IMAGE_UPLOAD_TYPES.includes(assetType) && !uploadedImage) {
      toast.error('Vui lòng tải lên một ảnh tham chiếu!');
      return;
    }

    setIsGenerating(true);
    setImageResult(null);
    setMetadata(null);
    
    const startTime = Date.now();

    try {
      const baseUrl = getApiBaseUrl();
      let endpoint = '';
      let bodyData = null;
      let formData = null;

      let size_key = ratio === '1:1' ? '64x64' : (ratio === '16:9' ? '128x128' : '32x32');
      if (assetType === 'background') {
        size_key = ratio === '1:1' ? 'background_sq' : (ratio === '16:9' ? 'background_hd' : 'background_sd');
      }
      if (ratio === 'custom') {
        size_key = `${customWidth}x${customHeight}`;
      }

      const activeTheme = selectedTheme !== 'all' ? selectedTheme : undefined;
      const activeSubType = ['vehicle', 'alien', 'prop'].includes(assetType) ? assetType : undefined;

      if (assetType === 'background') {
        endpoint = `${baseUrl}/api/generate-background`;
        bodyData = { subject: prompt, size_key, style: artStyle, time_of_day: timeOfDay, seed: -1, theme: activeTheme };
      } else if (assetType === 'tilesheet') {
        endpoint = `${baseUrl}/api/generate-tilesheet`;
        bodyData = { subject: prompt, action, frames, style: artStyle, perspective, seed: -1, theme: activeTheme, sub_type: activeSubType };
      } else if (assetType === 'tileset') {
        endpoint = `${baseUrl}/api/generate-tileset`;
        bodyData = { subject: prompt || tiles, size_key: cellSize, columns, style: artStyle, perspective, seed: -1 };
      } else if (IMAGE_UPLOAD_TYPES.includes(assetType)) {
        endpoint = `${baseUrl}/api/generate-from-image`;
        formData = new FormData();
        formData.append('subject', extraPrompt);
        formData.append('command', assetType);
        formData.append('style', artStyle);
        formData.append('size_key', size_key);
        if (assetType === 'pixel-from-image') {
          formData.append('block', blockSize);
          formData.append('colors', colors);
        }
        formData.append('image', uploadedImage);
        bodyData = formData;
      } else {
        endpoint = `${baseUrl}/api/generate-sprite`;
        let finalPrompt = prompt;
        let styleToSend = artStyle;
        if (assetType === 'pixel') {
          styleToSend = 'Pixel Art';
          finalPrompt += `, color palette: ${colors} colors limited, block size ${blockSize}`;
        }
        bodyData = { 
          subject: finalPrompt, 
          size_key, 
          style: styleToSend, 
          perspective, 
          seed: -1,
          theme: activeTheme,
          sub_type: activeSubType
        };
      }

      let response;
      if (bodyData instanceof FormData) {
        response = await fetch(endpoint, { method: 'POST', body: bodyData });
      } else {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyData)
        });
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Đã có lỗi xảy ra từ máy chủ.');
      }

      setImageResult(data.image || `${baseUrl}/${data.file_path}`);
      if (data.metadata) setMetadata(data.metadata);
      
      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
      setGenerationTime(timeTaken);
      toast.success('Tạo Asset thành công!');
    } catch (err) {
      toast.error(err.message || 'Lỗi khi tạo asset.');
    } finally {
      setIsGenerating(false);
    }
  };

  const showStyleAndPerspective = !HIDE_STYLE_PERSPECTIVE_TYPES.includes(assetType);
  const showUpload = IMAGE_UPLOAD_TYPES.includes(assetType);

  return (
    <div className="max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
      {/* ═══════════ LEFT PANEL: Cấu hình (Grid 2 cột gọn gàng trên Mobile & Tablet) ═══════════ */}
      <div className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 bg-white p-3.5 sm:p-6 rounded-2xl shadow-xs border border-gray-100 h-fit">
        <div className="pb-1.5 sm:pb-2 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-xl font-bold text-gray-900">Cấu hình Asset</h2>
            <p className="text-xs text-gray-500 hidden sm:block mt-0.5">Lựa chọn thông số để tạo hình ảnh</p>
          </div>
          <span className="text-[11px] bg-red-50 text-red-600 font-semibold px-2.5 py-0.5 rounded-full border border-red-100">
            Smart Config ✦
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3.5">
          {/* Chủ đề Game (Theme) */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-700 truncate">
              Chủ đề Game
            </label>
            <select 
              className="w-full rounded-xl bg-gray-50 border border-gray-300 text-gray-900 p-2 sm:p-2.5 text-xs sm:text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition font-medium"
              value={selectedTheme} 
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              {THEMES.map(t => (
                <option key={t.id} value={t.id}>{t.icon} {t.label}</option>
              ))}
            </select>
          </div>

          {/* Loại Asset */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-700 truncate">Loại Asset</label>
            <select
              className="w-full rounded-xl bg-gray-50 border border-gray-300 text-gray-900 p-2 sm:p-2.5 text-xs sm:text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition font-medium"
              value={assetType}
              onChange={(e) => handleAssetTypeChange(e.target.value)}
            >
              <option value="character">👤 Nhân vật / Chiến binh</option>
              <option value="vehicle">🚙 Xe thám hiểm / Phương tiện</option>
              <option value="alien">👽 Người ngoài hành tinh / Quái vật</option>
              <option value="prop">💎 Vật phẩm & Đồ tương tác</option>
              <option value="background">🏞️ Cảnh quan / Background</option>
              <option value="tilesheet">🎞️ Hoạt ảnh / Tilesheet</option>
              <option value="tileset">🧱 Gạch môi trường / Tileset</option>
              <option value="pixel">👾 Ép chữ thành Pixel</option>
              <option value="sprite-from-image">🖼️ Từ ảnh {'→'} Sprite</option>
              <option value="pixel-from-image">🖼️ Từ ảnh {'→'} Pixel Art</option>
            </select>
          </div>

          {/* ── Upload ảnh (Drag & Drop) ── */}
          {showUpload && (
            <div className="flex flex-col gap-1.5 col-span-2 lg:col-span-1">
              <label className="text-xs font-semibold text-gray-700">Tải ảnh lên (Bắt buộc)</label>
              {!imagePreviewUrl ? (
                <div
                  className={`relative flex flex-col items-center justify-center gap-1.5 border-2 border-dashed rounded-xl p-4 sm:p-6 cursor-pointer transition-all ${
                    isDragging 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-300 bg-gray-50 hover:border-red-400 hover:bg-red-50/40'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    <span className="font-semibold text-red-600">Nhấn để chọn</span> hoặc kéo thả ảnh
                  </p>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    className="hidden" 
                  />
                </div>
              ) : (
                <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <img src={imagePreviewUrl} alt="Preview" className="w-full max-h-40 object-contain" />
                  <button 
                    onClick={clearUploadedImage}
                    className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg transition-colors"
                    title="Xóa ảnh"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── Phong cách ── */}
          {showStyleAndPerspective && (
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700 truncate">Phong cách</label>
              <select className="w-full rounded-xl bg-gray-50 border border-gray-300 text-gray-900 p-2 sm:p-2.5 text-xs sm:text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition" value={artStyle} onChange={(e) => setArtStyle(e.target.value)}>
                <option value="Pixel Art">Pixel Art</option>
                <option value="Cartoon">Cartoon / Anime</option>
                <option value="Realistic">Realistic / 3D Render</option>
                <option value="Chibi">Chibi</option>
                <option value="Voxel">Voxel 3D</option>
                <option value="Cyberpunk">Cyberpunk</option>
              </select>
            </div>
          )}

          {/* ── Góc nhìn ── */}
          {showStyleAndPerspective && (
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700 truncate">Góc nhìn</label>
              <select className="w-full rounded-xl bg-gray-50 border border-gray-300 text-gray-900 p-2 sm:p-2.5 text-xs sm:text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition" value={perspective} onChange={(e) => setPerspective(e.target.value)}>
                <option value="Front">Chính diện (Front)</option>
                <option value="Side">Mặt ngang (Side)</option>
                <option value="Back">Mặt sau (Back)</option>
                <option value="Isometric">Isometric (2.5D)</option>
              </select>
            </div>
          )}

          {/* ── Tỉ lệ / Kích thước ── */}
          <div className={`flex flex-col gap-1 ${assetType === 'background' ? 'col-span-1' : 'col-span-2 lg:col-span-1'}`}>
            <label className="text-xs font-semibold text-gray-700 truncate">Tỉ lệ / Kích thước</label>
            <select className="w-full rounded-xl bg-gray-50 border border-gray-300 text-gray-900 p-2 sm:p-2.5 text-xs sm:text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition" value={ratio} onChange={(e) => setRatio(e.target.value)}>
              {assetType === 'background' ? (
                <>
                  <option value="1:1">Vuông (1:1)</option>
                  <option value="16:9">Ngang HD (16:9)</option>
                  <option value="9:16">Dọc (9:16)</option>
                  <option value="custom">Tự do (Custom)</option>
                </>
              ) : (
                <>
                  <option value="1:1">64x64 px (Chuẩn)</option>
                  <option value="16:9">128x128 px (Lớn)</option>
                  <option value="9:16">32x32 px (Nhỏ)</option>
                  <option value="custom">Tự do (Custom)</option>
                </>
              )}
            </select>
            {ratio === 'custom' && (
              <div className="grid grid-cols-2 gap-2.5 mt-1.5">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-gray-600">Chiều rộng (W)</label>
                  {assetType === 'tileset' ? (
                    <input 
                      type="number" 
                      className="w-full rounded-lg bg-gray-100 border border-gray-300 p-2 text-xs text-gray-500 cursor-not-allowed" 
                      value={tilesetAutoWidth} 
                      disabled 
                    />
                  ) : (
                    <input type="number" min="16" max="2048" className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={customWidth} onChange={e => setCustomWidth(parseInt(e.target.value) || 512)} />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-gray-600">Chiều cao (H)</label>
                  <input type="number" min="16" max="2048" className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={customHeight} onChange={e => setCustomHeight(parseInt(e.target.value) || 512)} />
                </div>
              </div>
            )}
          </div>

          {/* ── Type Specific Fields ── */}
          {assetType === 'background' && (
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-700 truncate">Thời gian</label>
              <select className="w-full rounded-xl bg-gray-50 border border-gray-300 text-gray-900 p-2 sm:p-2.5 text-xs sm:text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition" value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
                <option value="day">Ban ngày (Day)</option>
                <option value="night">Ban đêm (Night)</option>
                <option value="dusk">Hoàng hôn (Dusk)</option>
                <option value="dawn">Bình minh (Dawn)</option>
              </select>
            </div>
          )}

          {assetType === 'tilesheet' && (
            <div className="grid grid-cols-2 gap-2.5 col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-600">Hành động</label>
                <input type="text" className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={action} onChange={e => setAction(e.target.value)} placeholder="VD: running"/>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-600">Số khung hình</label>
                <input type="number" min="2" max="24" className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={frames} onChange={e => setFrames(parseInt(e.target.value) || 10)} />
              </div>
            </div>
          )}

          {assetType === 'tileset' && (
            <div className="grid grid-cols-2 gap-2.5 col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-600">Số cột (Columns)</label>
                <input type="number" min="2" max="16" className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={columns} onChange={e => setColumns(parseInt(e.target.value) || 8)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-600">Size ô (Cell)</label>
                <select className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={cellSize} onChange={e => setCellSize(e.target.value)}>
                  <option value="16x16">16x16</option>
                  <option value="32x32">32x32</option>
                  <option value="64x64">64x64</option>
                </select>
              </div>
            </div>
          )}

          {(assetType === 'pixel' || assetType === 'pixel-from-image') && (
            <div className="grid grid-cols-2 gap-2.5 col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-600">Block Size</label>
                <input type="number" min="2" max="32" className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={blockSize} onChange={e => setBlockSize(parseInt(e.target.value) || 8)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-600">Màu sắc</label>
                <input type="number" min="2" max="256" className="w-full rounded-lg bg-gray-50 border border-gray-300 p-2 text-xs focus:border-red-500 outline-none transition" value={colors} onChange={e => setColors(parseInt(e.target.value) || 32)} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══════════ RIGHT PANEL: Mô tả & Kết quả ═══════════ */}
      <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6 min-w-0">
        {/* ── Prompt area ── */}
        <div className="bg-white p-3.5 sm:p-6 rounded-2xl shadow-xs border border-gray-100">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <h2 className="text-base sm:text-xl font-bold text-gray-900">Mô tả Asset</h2>
            <span className="text-[11px] font-semibold bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full shrink-0">AI Team Pipeline</span>
          </div>

          {/* ── Khay Gợi Ý Ý Tưởng 1-Click Theo Chủ Đề ── */}
          <div className="mb-3 bg-gray-50/80 p-2.5 sm:p-3.5 rounded-xl border border-gray-200/90">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1 truncate">
                💡 Gợi Ý 1-Click ({selectedTheme === 'all' ? 'Tất cả' : THEMES.find(t => t.id === selectedTheme)?.label})
              </span>
              <span className="text-[10px] text-gray-400">Vuốt chọn ➔</span>
            </div>
            <div className="flex sm:flex-wrap gap-1.5 overflow-x-auto sm:overflow-y-auto sm:max-h-24 no-scrollbar pb-0.5">
              {SMART_PRESETS
                .filter(p => selectedTheme === 'all' || p.theme === selectedTheme)
                .map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => applySmartPreset(preset)}
                    className="text-xs bg-white hover:bg-red-50 hover:text-red-700 hover:border-red-300 border border-gray-200 text-gray-700 font-medium px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>{preset.theme === 'military' ? '🎖️' : preset.theme === 'scifi' ? '🚀' : preset.theme === 'fantasy' ? '🧙' : preset.theme === 'daily' ? '🎒' : '💎'}</span>
                    <span>{preset.title}</span>
                  </button>
                ))}
            </div>
          </div>
          
          {/* Textarea */}
          <textarea
            className="w-full h-24 sm:h-32 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 p-3 sm:p-4 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition resize-none placeholder-gray-400"
            placeholder={(assetType === 'tileset') ? "Nhập các mô tả cho ô gạch (cách nhau bởi dấu phẩy, VD: grass tile, water tile)..." : "Mô tả chi tiết ý tưởng của bạn (VD: Một chiến binh hiệp sĩ mặc giáp bạc, đang cầm kiếm lửa...)"}
            value={assetType === 'tileset' ? tiles : (assetType === 'sprite-from-image' ? extraPrompt : prompt)}
            onChange={(e) => {
              if (assetType === 'tileset') setTiles(e.target.value);
              else if (assetType === 'sprite-from-image') setExtraPrompt(e.target.value);
              else setPrompt(e.target.value);
            }}
          />
          
          {/* Nút "Tạo Asset" */}
          <div className="flex justify-end mt-2.5 sm:mt-3">
            <button 
              className="w-full sm:w-auto justify-center bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white px-6 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Đang xử lý...</>
              ) : (
                <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Tạo Asset</>
              )}
            </button>
          </div>
        </div>

        {/* ── Khung Kết Quả ── */}
        <div className="bg-white p-3.5 sm:p-6 rounded-2xl shadow-xs border border-gray-100 min-h-[240px] sm:min-h-[380px] flex flex-col">
          <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-3">Kết quả</h2>
          
          {!imageResult && !isGenerating && (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
              <svg className="w-10 h-10 sm:w-14 sm:h-14 mb-2.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <p className="font-medium text-xs sm:text-sm">Hình ảnh AI tạo ra sẽ hiển thị ở đây</p>
            </div>
          )}

          {isGenerating && (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 py-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <div className="absolute inset-0 border-4 border-red-100 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <p className="text-gray-600 font-medium animate-pulse text-xs sm:text-sm">AI đang vẽ... Vui lòng đợi!</p>
            </div>
          )}

          {imageResult && !isGenerating && (
            <div className="flex flex-col gap-4 animate-fade-in">
              <div className="relative group rounded-xl overflow-hidden bg-slate-100 bg-[length:16px_16px] bg-[linear-gradient(45deg,#cbd5e1_25%,transparent_25%,transparent_75%,#cbd5e1_75%,#cbd5e1),linear-gradient(45deg,#cbd5e1_25%,transparent_25%,transparent_75%,#cbd5e1_75%,#cbd5e1)] bg-[position:0_0,8px_8px] border border-gray-200 p-2 sm:p-4 flex items-center justify-center">
                <img 
                  src={imageResult} 
                  alt="Generated Asset" 
                  className="w-full max-h-[340px] sm:max-h-[480px] object-contain"
                  style={{ imageRendering: (artStyle === 'Pixel Art' || assetType === 'pixel' || assetType === 'pixel-from-image') ? 'pixelated' : 'auto' }}
                />
                <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowPreviewModal(true)}
                      className="bg-white/95 hover:bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer shadow-md"
                    >
                      Phóng to
                    </button>
                    <a 
                      href={imageResult} 
                      download="mindx_asset.png"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
                    >
                      Tải xuống
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:hidden">
                <button 
                  onClick={() => setShowPreviewModal(true)}
                  className="bg-gray-100 active:bg-gray-200 text-gray-900 font-bold py-2.5 px-3 rounded-xl border border-gray-200 flex items-center justify-center gap-1.5 text-xs"
                >
                  Phóng to & Cắt Lưới
                </button>
                <a 
                  href={imageResult} 
                  download="mindx_asset.png"
                  className="bg-red-600 active:bg-red-700 text-white font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs shadow-xs"
                >
                  Tải xuống PNG
                </a>
              </div>

              {generationTime && (
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500 bg-gray-50 px-3.5 py-2 rounded-lg border border-gray-100">
                  <span className="flex items-center gap-1.5 font-medium">
                    Hoàn tất trong {formatDuration(generationTime)}
                  </span>
                  <span className="text-xs text-gray-400">Độ phân giải gốc (AI Team Pipeline)</span>
                </div>
              )}

              {(assetType === 'tilesheet' || assetType === 'tileset') && (
                <AnimationPreview 
                  imageUrl={imageResult} 
                  frames={metadata?.frames || []} 
                  layoutFormat={metadata?.layout_format || 'single'}
                />
              )}
            </div>
          )}
        </div>
      </div>

      <SpritePreviewModal 
        isOpen={showPreviewModal} 
        onClose={() => setShowPreviewModal(false)} 
        imageUrl={imageResult} 
        metadata={metadata}
      />
    </div>
  );
};

export default Generator;
