import { useState, useMemo, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import CanvasPreview from './CanvasPreview';
import CategoryMenu from './CategoryMenu';
import CustomizerInspector from './CustomizerInspector';
import { assetConfig, getLayerSource } from './assets_config';
import { monsterConfig, getMonsterLayers } from './monster_config';
import SpritePreviewModal from '../../components/SpritePreviewModal';
import { preloadImages } from './assetCache';
import { getApiBaseUrl } from '../../config/api';

const CHARACTER_MODELS = [
  {
    id: 'pipoya',
    name: 'RPG Pixel (Chung)',
    frameSize: 32,
    isSpritesheet: true,
    config: assetConfig,
    categories: [
      { id: 'bases', label: 'Body (Thân)', icon: '👤' },
      { id: 'eyes', label: 'Eyes (Mắt)', icon: '👁️' },
      { id: 'hairs', label: 'Hair (Tóc)', icon: '💇' },
      { id: 'tops', label: 'Clothes (Áo)', icon: '👕' },
      { id: 'hats', label: 'Hats (Nón/Mũ)', icon: '🎩' },
      { id: 'glasses', label: 'Glasses (Kính)', icon: '🕶️' },
      { id: 'ears', label: 'Ears (Tai thú)', icon: '🐱' },
      { id: 'tails', label: 'Tails (Đuôi)', icon: '🦊' },
      { id: 'items', label: 'Items (Vật phẩm)', icon: '⚔️' },
      { id: 'cloaks', label: 'Cloaks (Áo choàng)', icon: '🦇' },
      { id: 'beards', label: 'Beards (Râu)', icon: '🧔' },
      { id: 'hairadds', label: 'Hair Adds (Phụ kiện tóc)', icon: '🎀' },
      { id: 'makeup', label: 'Makeup (Trang điểm)', icon: '💄' }
    ]
  },
  {
    id: 'monster',
    name: 'Monster (Quái Vật)',
    frameSize: 256,
    isSpritesheet: false,
    config: monsterConfig,
    categories: [
      { id: 'body', label: 'Body (Thân)', icon: '👾' },
      { id: 'leg', label: 'Legs (Chân)', icon: '🦵' },
      { id: 'arm', label: 'Arms (Tay)', icon: '💪' },
      { id: 'detail', label: 'Sừng/Tai', icon: '✨' },
      { id: 'eye', label: 'Eyes (Mắt)', icon: '👁️' },
      { id: 'eyebrow', label: 'Eyebrow (Lông mày)', icon: '🤨' },
      { id: 'mouth', label: 'Mouth (Miệng)', icon: '👄' },
      { id: 'nose', label: 'Nose (Mũi)', icon: '👃' }
    ]
  }
];

const CharacterBuilder = () => {
  // Lựa chọn Model
  const [currentModelId, setCurrentModelId] = useState('pipoya');
  const currentModel = CHARACTER_MODELS.find(m => m.id === currentModelId);

  // Tên nhân vật
  const [characterName, setCharacterName] = useState('MindX Character');

  // Tab danh mục đang chọn ở cột trái
  const [activeCategory, setActiveCategory] = useState(currentModel.categories[0].id);

  // Trạng thái nền trong suốt
  const [transparentBg, setTransparentBg] = useState(false);

  // Tham chiếu tới CanvasPreview để gọi hàm download
  const canvasPreviewRef = useRef(null);

  // Lựa chọn kiểu dáng (Variant ID)
  const [selections, setSelections] = useState({
    bases: 'bases_001',
    eyes: 'eyes_001',
    hairs: 'hairs_001',
    tops: 'tops_001',
    hats: 'hats_none',
    glasses: 'glasses_none',
    ears: 'ears_none',
    tails: 'tails_none',
    items: 'items_none',
    cloaks: 'cloaks_none',
    beards: 'beards_none',
    hairadds: 'hairadds_none',
    makeup: 'makeup_none',
    action: 'idle'
  });

  // Chuyển đổi Model trực tiếp trong handler tránh cascading render
  const handleModelChange = (newModelId) => {
    setCurrentModelId(newModelId);
    const targetModel = CHARACTER_MODELS.find(m => m.id === newModelId) || CHARACTER_MODELS[0];
    const newSelections = { action: 'idle' };
    targetModel.categories.forEach(cat => {
      const options = targetModel.config[cat.id] || [];
      if (options.length > 0) {
        newSelections[cat.id] = options[0].id;
      }
    });
    setSelections(newSelections);
    setActiveCategory(targetModel.categories[0].id);
  };

  // 1. Tải trước toàn bộ ảnh trong danh mục đang chọn (Category Preloading)
  useEffect(() => {
    const options = (currentModel.config || {})[activeCategory] || [];
    const urls = options.map(opt => {
      if (opt.src) return opt.src;
      if (opt.layers && opt.layers[0]?.src) return opt.layers[0].src;
      return null;
    }).filter(Boolean);

    if (urls.length > 0) {
      preloadImages(urls);
    }
  }, [activeCategory, currentModel]);

  // 2. Nạp trước ngầm toàn bộ tài sản của model khi rảnh rỗi (Idle Background Preloader)
  useEffect(() => {
    const runIdlePreload = () => {
      const allUrls = [];
      Object.values(currentModel.config || {}).forEach(opts => {
        if (Array.isArray(opts)) {
          opts.forEach(opt => {
            const src = opt.src || opt.layers?.[0]?.src;
            if (src) allUrls.push(src);
          });
        }
      });

      // Chia nhỏ thành từng batch 20 ảnh để không làm nghẽn băng thông
      let index = 0;
      const batchSize = 20;
      const loadNextBatch = () => {
        if (index >= allUrls.length) return;
        const batch = allUrls.slice(index, index + batchSize);
        index += batchSize;
        preloadImages(batch).then(() => {
          if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            window.requestIdleCallback(loadNextBatch);
          } else {
            setTimeout(loadNextBatch, 80);
          }
        });
      };
      loadNextBatch();
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(runIdlePreload);
      } else {
        setTimeout(runIdlePreload, 250);
      }
    }
  }, [currentModelId, currentModel.config]);

  // Bảng màu cho từng bộ phận (Color Modulation)
  const [colors, setColors] = useState({});

  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingSheet, setIsGeneratingSheet] = useState(false);
  const [previewMetadata, setPreviewMetadata] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [imageResult, setImageResult] = useState(null);

  // Đổi Option kiểu dáng
  const handleSelectOption = (category, id) => {
    setSelections(prev => ({ ...prev, [category]: id }));
  };

  // Đổi Màu sắc
  const handleSelectColor = (category, hexColor) => {
    setColors(prev => ({ ...prev, [category]: hexColor }));
  };

  // Nút RANDOMIZE: Phối ngẫu nhiên toàn bộ nhân vật
  const handleRandomize = () => {
    const randomNames = ['MindX Hero', 'Pixel Dev', 'Code Master', 'Data Wizard', 'Design Guru'];
    setCharacterName(randomNames[Math.floor(Math.random() * randomNames.length)]);

    const newSelections = { ...selections };

    currentModel.categories.forEach(cat => {
      const options = currentModel.config[cat.id] || [];
      if (options.length > 0) {
        const randOpt = options[Math.floor(Math.random() * options.length)];
        newSelections[cat.id] = randOpt.id;
      }
    });

    setSelections(newSelections);
    toast.info("Đã tạo nhân vật ngẫu nhiên! 🎲");
  };

  // Tải ảnh PNG trực tiếp
  const handleDownloadPNG = () => {
    if (canvasPreviewRef.current) {
      canvasPreviewRef.current.download(`${characterName.replace(/\s+/g, '_')}_sprite.png`);
      toast.success("Đã tải ảnh về máy!");
    }
  };

  // Tổng hợp layers kèm xử lý Exclusion Rules
  const activeLayers = useMemo(() => {
    if (currentModel.id === 'monster') {
      return getMonsterLayers(selections).map(l => {
        const baseCat = l.category.split('_')[0];
        return {
          ...l,
          color: colors[baseCat] || colors[l.category] || '#ffffff'
        };
      }).sort((a, b) => (a.z_index || 0) - (b.z_index || 0));
    }

    let layers = [];
    const selectedOptions = {};

    currentModel.categories.forEach(cat => {
      const selectedId = selections[cat.id];
      const option = (currentModel.config[cat.id] || []).find(o => o.id === selectedId);
      if (option) selectedOptions[cat.id] = option;
    });

    // Xác định layer bị ẩn do Exclusion Rules (VD: mũ trùm đầu thì ẩn tóc)
    const hiddenCategories = new Set();
    Object.values(selectedOptions).forEach(option => {
      if (option?.rules?.hides) {
        option.rules.hides.forEach(hiddenCat => hiddenCategories.add(hiddenCat));
      }
    });

    // Render layers
    currentModel.categories.forEach(cat => {
      if (!hiddenCategories.has(cat.id) && selectedOptions[cat.id]) {
        const opt = selectedOptions[cat.id];
        // Lấy danh sách layers (trả về mảng {src, z_index})
        const layerArr = getLayerSource(cat.id, opt.id, currentModel.config);
        if (layerArr && layerArr.length > 0) {
          layerArr.forEach(l => {
            let layerColor = colors[cat.id] || '#ffffff';
            // Arms should inherit skin color from 'base' or 'bases'
            if (cat.id === 'arms') {
              layerColor = colors['base'] || colors['bases'] || '#ffffff';
            }

            layers.push({
              id: opt.id,
              name: opt.name,
              category: cat.id,
              src: l.src,
              z_index: l.z_index,
              color: layerColor
            });
          });
        }
      }
    });

    // Sắp xếp theo z_index từ nhỏ đến lớn (để vẽ từ sau ra trước)
    layers.sort((a, b) => (a.z_index || 0) - (b.z_index || 0));

    return layers;
  }, [selections, colors, currentModel]);

  // Gửi thông tin sang AI / Backend
  const handleGenerate = async () => {
    setIsGenerating(true);

    const base64Image = canvasPreviewRef.current?.getBase64Image();

    const formOutput = {
      name: characterName,
      config: selections,
      colors: colors,
      action: selections.action,
      export_format: 'spritesheet',
      resolution: '512x512',
      transparent: transparentBg,
      base64_image: base64Image
    };

    try {
      const baseUrl = getApiBaseUrl();
      const res = await fetch(`${baseUrl}/api/generate-custom-character`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formOutput)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Lỗi server');

      setImageResult(data.image); // data.image returns the Base64 generated image
      setPreviewMetadata(data.metadata || null);
      setShowPreviewModal(true);
      toast.success("Tạo hoạt ảnh AI thành công!");
    } catch (error) {
      console.error(error);
      toast.error(`Có lỗi xảy ra: ${error.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Tạo trọn bộ Sprite Sheet 5x3 (15 Khung hình đa hành động từ Canvas & Vision AI)
  const handleGenerateFullSpritesheet = async () => {
    setIsGeneratingSheet(true);

    const base64Image = canvasPreviewRef.current?.getBase64Image();

    try {
      const baseUrl = getApiBaseUrl();
      const res = await fetch(`${baseUrl}/api/generate-full-spritesheet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          characterName: characterName || 'MindX Hero Character',
          config: selections,
          colors: colors,
          style: 'Pixel Art',
          base64_image: base64Image
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Lỗi server');

      setImageResult(data.image);
      setPreviewMetadata(data.metadata || null);
      setShowPreviewModal(true);
      toast.success("Tạo trọn bộ Sprite Sheet (15 Khung hình) thành công!");
    } catch (error) {
      console.error(error);
      toast.error(`Có lỗi xảy ra: ${error.message}`);
    } finally {
      setIsGeneratingSheet(false);
    }
  };

  return (
    <div className="flex-1 bg-[#F8F9FA] py-3 px-4 sm:px-6 font-sans border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">

        {/* Banner Tiêu đề thu gọn thanh lịch */}
        <div className="flex items-center justify-between pb-2 border-b border-gray-200 shrink-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-gray-900 font-sans tracking-tight flex items-center gap-2">
              <span className="text-red-600">⚡</span> CHARACTER STUDIO
            </h1>
            <p className="text-xs text-gray-500 font-sans mt-0.5">
              Xây dựng nhân vật Pixel Art hoàn chỉnh với Custom Layering & Nhuộm màu động
            </p>
          </div>
        </div>

        {/* Bố cục 3 CỘT chuẩn Studio - Đồng bộ chiều cao 560px, triệt tiêu đè lấn */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">

          {/* CỘT 1: Sidebar Danh mục Điều Hướng (Hợp nhất 1 Card duy nhất) */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col h-[560px] overflow-hidden">
            {/* Header Thẻ: Chọn Model */}
            <div className="p-3.5 border-b border-gray-100 bg-gray-50/60 shrink-0">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5 font-sans">
                Loại Nhân Vật
              </label>
              <select
                value={currentModelId}
                onChange={(e) => handleModelChange(e.target.value)}
                className="w-full bg-white text-red-700 font-bold border border-red-200 py-2 px-3 rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-red-500 shadow-2xs"
              >
                {CHARACTER_MODELS.map(model => (
                  <option key={model.id} value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>

            {/* Thân Thẻ: Danh sách Bộ phận (Cuộn nội bộ bên trong) */}
            <div className="flex-1 p-3 overflow-y-auto custom-scrollbar flex flex-col">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 block font-sans shrink-0">
                Bộ Phận ({currentModel.categories.length})
              </span>
              <CategoryMenu
                categories={currentModel.categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
              />
            </div>

            {/* Đáy Thẻ: Động tác Action (Gắn liền ở chân, không bị rơi rụng hay che khuất) */}
            {currentModel.isSpritesheet && (
              <div className="p-3 border-t border-gray-100 bg-gray-50/80 shrink-0">
                <label className="text-[11px] font-bold uppercase tracking-wider block mb-1.5 text-gray-500 font-sans">
                  Động tác (Action)
                </label>
                <select
                  value={selections.action}
                  onChange={(e) => handleSelectOption('action', e.target.value)}
                  className="w-full bg-white border border-gray-300 text-gray-800 py-1.5 px-3 rounded-lg font-sans text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="idle">Đứng im (Idle)</option>
                  <option value="run">Chạy (Run)</option>
                  <option value="attack">Tấn công (Attack)</option>
                </select>
              </div>
            )}
          </div>

          {/* CỘT 2: Khung Xem Trước Canvas Studio (Hợp nhất 1 Card duy nhất có Toolbar) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between p-4 h-[560px] overflow-hidden">
            {/* Top Bar: Đặt tên nhân vật & Toggle Xóa nền */}
            <div className="flex items-center justify-between pb-2.5 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-1.5 flex-1 mr-2 overflow-hidden">
                <span className="text-gray-400 text-xs shrink-0">✏️</span>
                <input
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  className="text-base font-bold font-sans text-gray-800 border-b border-transparent hover:border-gray-300 focus:border-red-500 focus:outline-none py-0.5 px-1 bg-transparent truncate w-full"
                  placeholder="Nhập tên nhân vật..."
                />
              </div>

              {/* Checkbox Xóa nền được đặt gọn gàng ở góc */}
              <label className="flex items-center gap-1.5 cursor-pointer text-xs font-medium text-gray-600 hover:text-gray-900 shrink-0 select-none">
                <input
                  type="checkbox"
                  checked={transparentBg}
                  onChange={(e) => setTransparentBg(e.target.checked)}
                  className="w-3.5 h-3.5 text-red-600 rounded border-gray-300 focus:ring-red-500"
                />
                Xóa nền
              </label>
            </div>

            {/* Vùng Canvas Preview trung tâm */}
            <div className="flex-1 flex items-center justify-center my-1.5 overflow-hidden">
              <CanvasPreview
                ref={canvasPreviewRef}
                layers={activeLayers}
                width={currentModel.isSpritesheet ? 380 : 360}
                height={currentModel.isSpritesheet ? 380 : 640}
                transparentBg={transparentBg}
                frameSize={currentModel.frameSize}
                isSpritesheet={currentModel.isSpritesheet}
              />
            </div>

            {/* Bottom Toolbar: Gộp toàn bộ nút hành động vào chân Card liền mạch */}
            <div className="pt-2.5 border-t border-gray-100 flex flex-col gap-2 shrink-0">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleRandomize}
                  className="py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-sans font-bold text-xs uppercase tracking-wider rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span className="text-sm">🎲</span> Ngẫu nhiên
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPNG}
                  className="py-2 px-3 bg-gray-800 hover:bg-gray-900 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="text-sm">⬇️</span> Lưu ảnh PNG
                </button>
              </div>

              {/* Nút Tạo Trọn Bộ Sprite Sheet 5x3 (15 Khung AI Grid Matrix) */}
              <button
                type="button"
                onClick={handleGenerateFullSpritesheet}
                disabled={isGeneratingSheet || isGenerating}
                className={`
                  w-full py-2.5 px-3 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer
                  ${isGeneratingSheet
                    ? 'bg-amber-300 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white hover:shadow-md'
                  }
                `}
              >
                {isGeneratingSheet ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Đang tạo Trọn Bộ Sprite Sheet (Grid AI)...
                  </>
                ) : (
                  <>
                    <span className="text-sm">✨</span> Tạo Trọn Bộ Sprite Sheet (Grid AI)
                  </>
                )}
              </button>

              {/* Nút Xuất Hoạt Ảnh Đơn (AI Generator) */}
              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating || isGeneratingSheet}
                className={`
                  w-full py-2 px-3 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer border
                  ${isGenerating
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-gray-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Đang xuất hoạt ảnh 1 động tác...
                  </>
                ) : (
                  <>
                    <span>⚡</span> Xuất Hoạt Ảnh 1 Động Tác (10 Frames)
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CỘT 3: Tùy biến chi tiết Kiểu dáng & Màu sắc (Phải) */}
          <div className="md:col-span-4 h-[560px]">
            <CustomizerInspector
              activeCategory={activeCategory}
              selections={selections}
              colors={colors}
              onSelectOption={handleSelectOption}
              onSelectColor={handleSelectColor}
              currentConfig={currentModel.config}
              isSpritesheet={currentModel.isSpritesheet}
            />
          </div>

        </div>

      </div>

      {/* Modal hiển thị Spritesheet AI */}
      <SpritePreviewModal
        isOpen={showPreviewModal}
        onClose={() => setShowPreviewModal(false)}
        imageUrl={imageResult}
        metadata={previewMetadata}
        actionName={selections.action}
      />
    </div>
  );
};

export default CharacterBuilder;
