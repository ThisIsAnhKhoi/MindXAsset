import { useState, useMemo, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import CanvasPreview from './CanvasPreview';
import CategoryMenu from './CategoryMenu';
import CustomizerInspector from './CustomizerInspector';
import { assetConfig, getLayerSource } from './assets_config';
import { monsterConfig, getMonsterLayers } from './monster_config';
import { alienConfig, getAlienLayers } from './alien_config';
import { vehicleConfig, getVehicleLayers, vehicleColorPalettes } from './vehicle_config';
import { propConfig, getPropLayers, propColorPalettes } from './prop_config';
import { soldierConfig, getSoldierLayers, soldierColorPalettes } from './soldier_config';
import { fantasyConfig, getFantasyLayers, fantasyColorPalettes, fantasyGroups } from './fantasy_config';
import SpritePreviewModal from '../../components/SpritePreviewModal';
import InlineSpritesheetStudio from '../../components/InlineSpritesheetStudio';
import ModelDropdown from './ModelDropdown';
import { preloadImages } from './assetCache';
import { getApiBaseUrl } from '../../config/api';

const CHARACTER_MODELS = [
  {
    id: 'fantasy',
    name: 'Nhân Vật Fantasy',
    subtitle: 'Chibi RPG 48x48 • 30 Chủng tộc',
    icon: '🧙',
    badge: 'Hot • 48px',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
    frameSize: 48,
    isSpritesheet: false,
    config: fantasyConfig,
    groups: fantasyGroups,
    colorPalettes: fantasyColorPalettes,
    categories: [
      { id: 'races', label: 'Chủng Tộc', icon: '🧝' },
      { id: 'expressions', label: 'Biểu Cảm', icon: '🎭' },
      { id: 'hairs', label: 'Kiểu Tóc', icon: '💇' },
      { id: 'outfits', label: 'Trang Phục', icon: '🥋' },
      { id: 'bottoms', label: 'Quần & Giày', icon: '👖' },
      { id: 'headgear', label: 'Mũ & Sừng', icon: '👑' },
      { id: 'accessories', label: 'Đai & Đuôi', icon: '🦊' },
      { id: 'weapons', label: 'Vũ Khí', icon: '⚔️' },
      { id: 'shadows', label: 'Bóng Đổ', icon: '🌑' }
    ]
  },
  {
    id: 'pipoya',
    name: 'RPG Pixel Cổ Điển',
    subtitle: 'Nhân vật 4 hướng đi • JRPG 32x32',
    icon: '🧝',
    badge: 'Spritesheet',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    frameSize: 32,
    isSpritesheet: true,
    config: assetConfig,
    categories: [
      { id: 'bases', label: 'Thân Thể', icon: '👤' },
      { id: 'eyes', label: 'Đôi Mắt', icon: '👁️' },
      { id: 'hairs', label: 'Mái Tóc', icon: '💇' },
      { id: 'tops', label: 'Áo & Giáp', icon: '👕' },
      { id: 'hats', label: 'Mũ Nón', icon: '🎩' },
      { id: 'glasses', label: 'Kính Mắt', icon: '🕶️' },
      { id: 'ears', label: 'Tai Thú', icon: '🐱' },
      { id: 'tails', label: 'Đuôi Thú', icon: '🦊' },
      { id: 'items', label: 'Vũ Khí', icon: '⚔️' },
      { id: 'cloaks', label: 'Áo Choàng', icon: '🦇' },
      { id: 'beards', label: 'Râu Tóc', icon: '🧔' },
      { id: 'hairadds', label: 'Kẹp Tóc', icon: '🎀' },
      { id: 'makeup', label: 'Họa Mặt', icon: '💄' }
    ]
  },
  {
    id: 'soldier',
    name: 'Chiến Binh Đặc Nhiệm',
    subtitle: 'Lính Spec-Ops • Giáp & Súng hiện đại',
    icon: '🪖',
    badge: 'Quân Sự',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    frameSize: 32,
    isSpritesheet: true,
    config: soldierConfig,
    colorPalettes: soldierColorPalettes,
    categories: [
      { id: 'bases', label: 'Thân Lính', icon: '👤' },
      { id: 'helmets', label: 'Mũ & Kính NVG', icon: '🪖' },
      { id: 'vests', label: 'Áo Giáp', icon: '🦺' },
      { id: 'bottoms', label: 'Quần Tác Chiến', icon: '👖' },
      { id: 'weapons', label: 'Súng & Vũ Khí', icon: '🔫' },
      { id: 'gear', label: 'Balo & Đạn', icon: '🎒' }
    ]
  },
  {
    id: 'vehicle',
    name: 'Xe Cộ & Phương Tiện',
    subtitle: '57 mẫu xe Top-Down • Đổi màu & đèn',
    icon: '🏎️',
    badge: 'Top-Down',
    tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
    frameSize: 160,
    isSpritesheet: false,
    config: vehicleConfig,
    colorPalettes: vehicleColorPalettes,
    categories: [
      { id: 'chassis', label: 'Dòng Xe', icon: '🏎️' },
      { id: 'direction', label: 'Góc Nhìn', icon: '🧭' },
      { id: 'paint', label: 'Màu Sơn', icon: '🎨' },
      { id: 'windows', label: 'Kính Xe', icon: '🪟' },
      { id: 'lights', label: 'Đèn Pha', icon: '💡' },
      { id: 'accessories', label: 'Họa Tiết', icon: '⚡' },
      { id: 'ground', label: 'Mặt Đường', icon: '🛣️' }
    ]
  },
  {
    id: 'prop',
    name: 'Vật Phẩm In-Game',
    subtitle: 'Trang bị, rương báu & hào quang ma pháp',
    icon: '💎',
    badge: 'Vật Phẩm',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
    frameSize: 48,
    isSpritesheet: false,
    config: propConfig,
    colorPalettes: propColorPalettes,
    categories: [
      { id: 'prop_type', label: 'Nhóm Đồ', icon: '📦' },
      { id: 'state', label: 'Vật Phẩm', icon: '💎' },
      { id: 'pedestal', label: 'Bục Đỡ', icon: '🏛️' },
      { id: 'aura', label: 'Hào Quang', icon: '✨' },
      { id: 'effects', label: 'Hiệu Ứng', icon: '🌟' }
    ]
  },
  {
    id: 'monster',
    name: 'Quái Vật Dị Biến',
    subtitle: 'Monster CC0 • Sừng, càng & nanh vuốt',
    icon: '👾',
    badge: 'Quái Vật',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    frameSize: 256,
    isSpritesheet: false,
    config: monsterConfig,
    categories: [
      { id: 'body', label: 'Thân Quái', icon: '👾' },
      { id: 'leg', label: 'Đôi Chân', icon: '🦵' },
      { id: 'arm', label: 'Cánh Tay', icon: '💪' },
      { id: 'detail', label: 'Sừng & Vảy', icon: '✨' },
      { id: 'eye', label: 'Đôi Mắt', icon: '👁️' },
      { id: 'eyebrow', label: 'Lông Mày', icon: '🤨' },
      { id: 'mouth', label: 'Răng Nanh', icon: '👄' },
      { id: 'nose', label: 'Chiếc Mũi', icon: '👃' }
    ]
  },
  {
    id: 'alien',
    name: 'Người Ngoài Hành Tinh',
    subtitle: 'Alien Vũ Trụ • Ăng-ten & xúc tu',
    icon: '👽',
    badge: 'Ngoại Giới',
    tagColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    frameSize: 256,
    isSpritesheet: false,
    config: alienConfig,
    categories: [
      { id: 'body', label: 'Thân Quái', icon: '👽' },
      { id: 'antenna', label: 'Ăng-Ten', icon: '📡' },
      { id: 'eye', label: 'Mắt Dị Tộc', icon: '👁️' },
      { id: 'mouth', label: 'Nanh Miệng', icon: '👄' },
      { id: 'arm', label: 'Xúc Tu Tay', icon: '💪' },
      { id: 'leg', label: 'Chân Đệm', icon: '🦵' }
    ]
  }
];

const CharacterBuilder = () => {
  // Lựa chọn Model
  const [currentModelId, setCurrentModelId] = useState('fantasy');
  const currentModel = CHARACTER_MODELS.find(m => m.id === currentModelId) || CHARACTER_MODELS[0];

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
    races: 'race_human_fair',
    expressions: 'expr_neutral',
    hairs: 'hair_r8_c0',
    outfits: 'outfit_r19_c0',
    bottoms: 'bottom_r30_c0',
    headgear: 'headgear_none',
    accessories: 'acc_none',
    weapons: 'weapon_none',
    shadows: 'shadow_ground_pixel',
    action: 'idle'
  });

  // Chuyển đổi Model trực tiếp trong handler tránh cascading render
  const handleModelChange = (newModelId) => {
    setCurrentModelId(newModelId);
    const targetModel = CHARACTER_MODELS.find(m => m.id === newModelId) || CHARACTER_MODELS[0];
    const newSelections = { action: 'idle' };
    if (newModelId === 'fantasy') {
      newSelections.races = 'race_human_fair';
      newSelections.expressions = 'expr_neutral';
      newSelections.hairs = 'hair_r8_c0';
      newSelections.outfits = 'outfit_r19_c0';
      newSelections.bottoms = 'bottom_r30_c0';
      newSelections.headgear = 'headgear_none';
      newSelections.accessories = 'acc_none';
      newSelections.weapons = 'weapon_none';
      newSelections.shadows = 'shadow_ground_pixel';
    } else {
      targetModel.categories.forEach(cat => {
        const options = targetModel.config[cat.id] || [];
        if (options.length > 0) {
          newSelections[cat.id] = options[0].id;
        }
      });
    }
    setSelections(newSelections);
    setActiveCategory(targetModel.categories[0].id);
  };

  // 1. Tải trước toàn bộ ảnh trong danh mục đang chọn (Category Preloading)
  useEffect(() => {
    const options = (currentModel.config || {})[activeCategory] || [];
    const urls = options.map(opt => {
      if (opt.src) return opt.src;
      if (opt.thumbSrc) return opt.thumbSrc;
      if (opt.layers && opt.layers[0]?.src) return opt.layers[0].src;
      return null;
    }).filter(Boolean);

    if (urls.length > 0) {
      preloadImages(urls);
    }
  }, [activeCategory, currentModel]);

  // 2. Nạp trước toàn bộ tài sản của model ngay lập tức (Eager Full Preloader)
  useEffect(() => {
    const allUrls = [];
    Object.values(currentModel.config || {}).forEach(opts => {
      if (Array.isArray(opts)) {
        opts.forEach(opt => {
          const src = opt.src || opt.thumbSrc || opt.layers?.[0]?.src;
          if (src) allUrls.push(src);
        });
      }
    });

    if (allUrls.length > 0) {
      preloadImages(allUrls);
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
    setSelections(prev => {
      const next = { ...prev, [category]: id };
      if (category === 'prop_type' && currentModel.id === 'prop') {
        const typeOpt = (currentModel.config.prop_type || []).find(t => t.id === id);
        if (typeOpt && typeOpt.defaultState) {
          next.state = typeOpt.defaultState;
        }
      }
      return next;
    });
    if (category === 'prop_type' && currentModel.id === 'prop') {
      setActiveCategory('state');
    }
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

    if (currentModel.id === 'alien') {
      return getAlienLayers(selections).map(l => {
        const baseCat = l.category.split('_')[0];
        return {
          ...l,
          color: colors[baseCat] || colors[l.category] || '#ffffff'
        };
      }).sort((a, b) => (a.z_index || 0) - (b.z_index || 0));
    }

    if (currentModel.id === 'vehicle') {
      return getVehicleLayers(selections, colors);
    }

    if (currentModel.id === 'prop') {
      return getPropLayers(selections, colors);
    }

    if (currentModel.id === 'soldier') {
      return getSoldierLayers(selections, colors);
    }

    if (currentModel.id === 'fantasy') {
      return getFantasyLayers(selections, colors);
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

          {/* CỘT 1: Sidebar Danh mục Điều Hướng (Hợp nhất 1 Card duy nhất, overflow-visible cho Dropdown) */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col h-[560px] relative z-20">
            {/* Header Thẻ: Chọn Model với Custom Dropdown */}
            <div className="p-3 border-b border-gray-100 bg-gray-50/70 shrink-0 rounded-t-2xl">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5 font-sans">
                Loại Nhân Vật
              </label>
              <ModelDropdown
                models={CHARACTER_MODELS}
                selectedModelId={currentModelId}
                onSelectModel={handleModelChange}
              />
            </div>

            {/* Thân Thẻ: Danh sách Bộ phận (Cuộn nội bộ bên trong) */}
            <div className="flex-1 p-3 overflow-y-auto custom-scrollbar flex flex-col min-h-0">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 block font-sans shrink-0">
                Bộ Phận ({currentModel.categories.length})
              </span>
              <CategoryMenu
                categories={currentModel.categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
              />
            </div>

            {/* Đáy Thẻ: Động tác Action (Segmented Pills đẹp mắt) */}
            {currentModel.isSpritesheet && (
              <div className="p-2.5 border-t border-gray-100 bg-gray-50/80 shrink-0 rounded-b-2xl">
                <label className="text-[10px] font-bold uppercase tracking-wider block mb-1 text-gray-400 font-sans">
                  Động tác (Action)
                </label>
                <div className="grid grid-cols-3 gap-1 p-1 bg-gray-200/60 rounded-xl border border-gray-200/80">
                  {[
                    { id: 'idle', label: 'Đứng im', icon: '🧍' },
                    { id: 'run', label: 'Chạy', icon: '🏃' },
                    { id: 'attack', label: 'Tấn công', icon: '⚔️' },
                  ].map(act => {
                    const isActive = selections.action === act.id;
                    return (
                      <button
                        key={act.id}
                        type="button"
                        onClick={() => handleSelectOption('action', act.id)}
                        className={`
                          py-1 px-1 rounded-lg text-[11px] font-bold font-sans flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer
                          ${isActive
                            ? 'bg-white text-red-600 shadow-2xs font-extrabold border border-red-100'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                          }
                        `}
                      >
                        <span className="text-xs">{act.icon}</span>
                        <span className="leading-tight text-[10px]">{act.label}</span>
                      </button>
                    );
                  })}
                </div>
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
                width={currentModel.isSpritesheet || currentModel.frameSize >= 48 ? 380 : 360}
                height={currentModel.isSpritesheet || currentModel.frameSize >= 48 ? 380 : 640}
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
              currentPalettes={currentModel.colorPalettes}
              currentGroups={currentModel.groups}
              isSpritesheet={currentModel.isSpritesheet}
              currentModel={currentModel}
            />
          </div>

        </div>

        {/* Xưởng Xem Trước Hoạt Ảnh & Tách Lưới Sprite Sheet Tích Hợp Trực Tiếp (Always Visible) */}
        <InlineSpritesheetStudio
          initialImageUrl={imageResult}
          onCaptureFromCanvas={() => canvasPreviewRef.current?.getBase64Image()}
        />

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
