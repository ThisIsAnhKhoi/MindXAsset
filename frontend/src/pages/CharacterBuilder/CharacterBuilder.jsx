import { useState, useMemo, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import CanvasPreview from './CanvasPreview';
import CategoryMenu from './CategoryMenu';
import CustomizerInspector from './CustomizerInspector';
import { assetConfig, getLayerSource } from './assets_config';
import { monsterConfig, getMonsterLayers, monsterColorPalettes } from './monster_config';
import { alienConfig, getAlienLayers, alienColorPalettes } from './alien_config';
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
    colorPalettes: monsterColorPalettes,
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
    colorPalettes: alienColorPalettes,
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
  const [currentModelId, setCurrentModelId] = useState('fantasy');
  const currentModel = CHARACTER_MODELS.find(m => m.id === currentModelId) || CHARACTER_MODELS[0];

  const [characterName, setCharacterName] = useState('MindX Character');
  const [activeCategory, setActiveCategory] = useState(currentModel.categories[0].id);
  const [transparentBg, setTransparentBg] = useState(false);

  // Mobile Workspace Tab: 'customizer' (Thiết kế nhân vật) | 'spritesheet' (Xưởng cắt lưới)
  const [mobileTab, setMobileTab] = useState('customizer');

  const canvasPreviewRef = useRef(null);

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

  const [colors, setColors] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingSheet, setIsGeneratingSheet] = useState(false);
  const [previewMetadata, setPreviewMetadata] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [imageResult, setImageResult] = useState(null);

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

  const handleSelectColor = (category, hexColor) => {
    setColors(prev => ({ ...prev, [category]: hexColor }));
  };

  const handleRandomize = () => {
    const randomNames = ['MindX Hero', 'Pixel Dev', 'Code Master', 'Data Wizard', 'Design Guru'];
    setCharacterName(randomNames[Math.floor(Math.random() * randomNames.length)]);

    const newSelections = { ...selections };

    currentModel.categories.forEach(cat => {
      const options = currentModel.config[cat.id] || [];
      if (options.length > 0) {
        // Keep a road/ground visible when randomizing vehicles instead of picking 'none'
        const pool = (currentModel.id === 'vehicle' && cat.id === 'ground')
          ? options.filter(o => o.id !== 'none')
          : options;
        const randOpt = pool[Math.floor(Math.random() * pool.length)] || options[0];
        newSelections[cat.id] = randOpt.id;
      }
    });

    setSelections(newSelections);
    toast.info("Đã tạo ngẫu nhiên! 🎲", { toastId: 'randomize-toast', autoClose: 1200 });
  };

  const handleDownloadPNG = () => {
    if (canvasPreviewRef.current) {
      canvasPreviewRef.current.download(`${characterName.replace(/\s+/g, '_')}_sprite.png`);
      toast.success("Đã tải ảnh về máy!");
    }
  };

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

    const hiddenCategories = new Set();
    Object.values(selectedOptions).forEach(option => {
      if (option?.rules?.hides) {
        option.rules.hides.forEach(hiddenCat => hiddenCategories.add(hiddenCat));
      }
    });

    currentModel.categories.forEach(cat => {
      if (!hiddenCategories.has(cat.id) && selectedOptions[cat.id]) {
        const opt = selectedOptions[cat.id];
        const layerArr = getLayerSource(cat.id, opt.id, currentModel.config);
        if (layerArr && layerArr.length > 0) {
          layerArr.forEach(l => {
            let layerColor = colors[cat.id] || '#ffffff';
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

    layers.sort((a, b) => (a.z_index || 0) - (b.z_index || 0));
    return layers;
  }, [selections, colors, currentModel]);

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

      setImageResult(data.image);
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
    <div className="flex-1 bg-[#F8F9FA] py-1.5 sm:py-3 px-2 sm:px-5 lg:px-6 font-sans border-t border-gray-200 min-w-0">
      <div className="max-w-6xl mx-auto flex flex-col gap-1.5 sm:gap-3.5 min-w-0">

        {/* Top Studio Bar: Tiêu đề + Chuyển chế độ nhanh trên Mobile/Tablet */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 pb-1.5 sm:pb-2 border-b border-gray-200 shrink-0 min-w-0">
          <div className="flex items-center justify-between min-w-0">
            <div className="min-w-0">
              <h1 className="text-sm min-[360px]:text-base sm:text-xl lg:text-2xl font-black text-gray-900 font-sans tracking-tight flex items-center gap-1.5 truncate">
                <span className="text-red-600 shrink-0">⚡</span>
                <span className="truncate">CHARACTER STUDIO</span>
              </h1>
              <p className="hidden md:block text-xs text-gray-500 font-sans mt-0.5 truncate">
                Xây dựng nhân vật Pixel Art hoàn chỉnh với Custom Layering & Nhuộm màu động
              </p>
            </div>
          </div>

          {/* Mobile & Tablet Workspace Switcher: Tùy biến Nhân vật vs Xưởng Spritesheet */}
          <div className="grid grid-cols-2 sm:flex lg:hidden bg-gray-200/80 p-1 rounded-xl border border-gray-200 self-stretch sm:self-auto shrink-0 min-w-0 gap-1">
            <button
              type="button"
              onClick={() => setMobileTab('customizer')}
              className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer min-w-0 ${
                mobileTab === 'customizer'
                  ? 'bg-white text-red-600 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="shrink-0">🎨</span>
              <span className="truncate">Thiết Kế Nhân Vật</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileTab('spritesheet')}
              className={`px-2 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer min-w-0 ${
                mobileTab === 'spritesheet'
                  ? 'bg-white text-red-600 shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="shrink-0">🎞️</span>
              <span className="truncate">Xưởng Spritesheet</span>
            </button>
          </div>
        </div>

        {/*
          PHẦN 1: BÀN THIẾT KẾ NHÂN VẬT (CHARACTER CUSTOMIZER)
          - Mobile (< md): Split-Screen siêu gọn (Stage Ngang ở trên + Dải Bộ phận + Bảng chọn đồ ngay bên dưới — vừa khít 1 màn hình 393x852 và tương thích cả 280px!)
          - Tablet (md: 768px - 1023px): 2 Cột cân đối (Cột trái 5 phần: Model + Canvas; Cột phải 7 phần: Dải Bộ phận + Lưới chọn đồ)
          - Desktop (lg: >= 1024px): 3 Cột chuẩn Studio (3 : 5 : 4) cao đồng bộ 560px
        */}
        <div className={`${mobileTab === 'customizer' ? 'grid' : 'hidden lg:grid'} grid-cols-1 md:grid-cols-12 gap-2 sm:gap-4 lg:gap-5 items-stretch min-w-0`}>

          {/* CỘT 1 (Desktop lg: 3 cột | Mobile & Tablet: Gộp ModelDropdown vào cột Trái) */}
          <div className="hidden lg:flex lg:col-span-3 bg-white rounded-2xl border border-gray-200 shadow-xs flex-col h-[560px] relative z-20">
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

            <div className="flex-1 p-3 overflow-y-auto custom-scrollbar flex flex-col min-h-0">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 block font-sans shrink-0">
                Bộ Phận ({currentModel.categories.length})
              </span>
              <CategoryMenu
                categories={currentModel.categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                mode="vertical"
              />
            </div>

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

          {/* CỘT 2: Khung Xem Trước Canvas Studio (Mobile: Stage Ngang siêu gọn | Tablet: 5 cột | Desktop: 5 cột) */}
          <div className="md:col-span-5 lg:col-span-5 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between p-2.5 sm:p-4 h-auto md:h-[530px] lg:h-[560px] relative z-20 min-w-0">
            
            {/* Chọn Model tích hợp ngay đầu Card trên Mobile & Tablet (< lg) để tiết kiệm 1 Card riêng */}
            <div className="lg:hidden pb-2 mb-1.5 border-b border-gray-100 shrink-0">
              <ModelDropdown
                models={CHARACTER_MODELS}
                selectedModelId={currentModelId}
                onSelectModel={handleModelChange}
              />
            </div>

            {/* Thanh Tên Nhân Vật & Xóa Nền rộng toàn khung (Hiển thị rõ ràng từ 280px đến Desktop) */}
            <div className="flex items-center justify-between pb-2 mb-1.5 sm:mb-0 border-b border-gray-100 shrink-0 gap-2 min-w-0">
              <div className="flex items-center gap-1.5 flex-1 min-w-0">
                <span className="text-gray-400 text-xs shrink-0">✏️</span>
                <input
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  className="text-xs sm:text-base font-bold font-sans text-gray-800 border-b border-transparent hover:border-gray-300 focus:border-red-500 focus:outline-none py-0.5 px-1 bg-transparent truncate w-full min-w-0"
                  placeholder="Nhập tên nhân vật..."
                />
              </div>

              <label className="flex items-center gap-1.5 cursor-pointer text-[11px] sm:text-xs font-semibold text-gray-600 hover:text-gray-900 shrink-0 select-none bg-gray-50 px-2 py-1 rounded-lg border border-gray-200/80">
                <input
                  type="checkbox"
                  checked={transparentBg}
                  onChange={(e) => setTransparentBg(e.target.checked)}
                  className="w-3.5 h-3.5 text-red-600 rounded border-gray-300 focus:ring-red-500"
                />
                <span>Xóa nền</span>
              </label>
            </div>

            {/*
              MOBILE SPLIT-STAGE (< sm):
              - Màn hình siêu hẹp (< 350px, ví dụ 283px): Xếp dọc tự nhiên (Canvas ở trên, 4 nút bấm trải rộng 100% ở dưới, không bao giờ cắt chữ!)
              - Điện thoại chuẩn (350px - 639px, ví dụ 393px): Xếp ngang (Canvas bên trái, 4 nút bấm bên phải) tiết kiệm chiều dọc!
            */}
            <div className="flex flex-col min-[350px]:flex-row sm:flex-col items-center gap-2 min-[360px]:gap-3 sm:flex-1 sm:justify-center sm:my-1.5 min-w-0">
              <CanvasPreview
                ref={canvasPreviewRef}
                layers={activeLayers}
                width={currentModel.isSpritesheet || currentModel.frameSize >= 48 ? 380 : 360}
                height={currentModel.isSpritesheet || currentModel.frameSize >= 48 ? 380 : 640}
                transparentBg={transparentBg}
                frameSize={currentModel.frameSize}
                isSpritesheet={currentModel.isSpritesheet}
                compactMobile={true}
                action={selections.action}
              />

              {/* Bảng điều khiển nhanh bên cạnh/dưới Canvas (Chỉ hiện trên Mobile < sm) */}
              <div className="flex sm:hidden flex-col gap-1.5 w-full min-[350px]:flex-1 min-w-0 justify-center self-stretch">
                {/* Chọn động tác nếu là Spritesheet */}
                {currentModel.isSpritesheet && (
                  <div className="grid grid-cols-3 gap-1 p-0.5 bg-gray-100 rounded-lg border border-gray-200">
                    {[
                      { id: 'idle', label: 'Đứng', icon: '🧍' },
                      { id: 'run', label: 'Chạy', icon: '🏃' },
                      { id: 'attack', label: 'Đánh', icon: '⚔️' },
                    ].map(act => {
                      const isActive = selections.action === act.id;
                      return (
                        <button
                          key={act.id}
                          type="button"
                          onClick={() => handleSelectOption('action', act.id)}
                          className={`py-0.5 px-1 rounded-md text-[10px] font-bold flex items-center justify-center gap-0.5 min-w-0 ${
                            isActive ? 'bg-white text-red-600 shadow-2xs' : 'text-gray-600'
                          }`}
                        >
                          <span className="shrink-0">{act.icon}</span>
                          <span className="truncate">{act.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Hàng nút Ngẫu nhiên & Lưu PNG */}
                <div className="grid grid-cols-2 gap-1.5 min-w-0">
                  <button
                    type="button"
                    onClick={handleRandomize}
                    className="py-2 px-1.5 min-[360px]:px-2 bg-gray-100 active:bg-gray-200 text-gray-800 font-bold text-[11px] rounded-lg border border-gray-200 flex items-center justify-center gap-1 min-w-0"
                  >
                    <span className="shrink-0">🎲</span>
                    <span className="truncate">Ngẫu nhiên</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadPNG}
                    className="py-2 px-1.5 min-[360px]:px-2 bg-gray-900 active:bg-black text-white font-bold text-[11px] rounded-lg flex items-center justify-center gap-1 min-w-0"
                  >
                    <span className="shrink-0">⬇️</span>
                    <span className="truncate">Lưu PNG</span>
                  </button>
                </div>

                {/* Hàng nút AI Xuất Sprite Sheet & Hoạt ảnh */}
                <div className="grid grid-cols-2 gap-1.5 min-w-0">
                  <button
                    type="button"
                    onClick={handleGenerateFullSpritesheet}
                    disabled={isGeneratingSheet || isGenerating}
                    className="py-2 px-1.5 min-[360px]:px-2 bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold text-[10px] min-[360px]:text-[11px] rounded-lg flex items-center justify-center gap-1 shadow-2xs disabled:opacity-50 min-w-0"
                  >
                    <span className="shrink-0">✨</span>
                    <span className="truncate">{isGeneratingSheet ? 'Đang tạo...' : 'Sheet 15F'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleGenerate}
                    disabled={isGenerating || isGeneratingSheet}
                    className="py-2 px-1.5 min-[360px]:px-2 bg-white text-gray-700 border border-gray-300 font-bold text-[10px] min-[360px]:text-[11px] rounded-lg flex items-center justify-center gap-1 disabled:opacity-50 min-w-0"
                  >
                    <span className="shrink-0">⚡</span>
                    <span className="truncate">{isGenerating ? 'Đang tạo...' : '10 Frames'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Toolbar cho Tablet & Desktop (sm+) */}
            <div className="hidden sm:flex pt-2.5 border-t border-gray-100 flex-col gap-2 shrink-0">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleRandomize}
                  className="py-2 px-2.5 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] text-gray-800 font-sans font-bold text-xs uppercase tracking-wider rounded-xl border border-gray-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <span className="text-sm">🎲</span> Ngẫu nhiên
                </button>

                <button
                  type="button"
                  onClick={handleDownloadPNG}
                  className="py-2 px-2.5 bg-gray-800 hover:bg-gray-900 active:scale-[0.98] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span className="text-sm">⬇️</span> Lưu ảnh PNG
                </button>
              </div>

              <button
                type="button"
                onClick={handleGenerateFullSpritesheet}
                disabled={isGeneratingSheet || isGenerating}
                className={`
                  w-full py-2.5 px-3 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-[0.99]
                  ${isGeneratingSheet
                    ? 'bg-amber-300 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white hover:shadow-md'
                  }
                `}
              >
                {isGeneratingSheet ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white shrink-0" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="truncate">Đang tạo Sprite Sheet (Grid AI)...</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm shrink-0">✨</span>
                    <span className="truncate">Tạo Trọn Bộ Sprite Sheet (Grid AI)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={isGenerating || isGeneratingSheet}
                className={`
                  w-full py-2 px-3 font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer border active:scale-[0.99]
                  ${isGenerating
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="truncate">Đang xuất hoạt ảnh 1 động tác...</span>
                  </>
                ) : (
                  <>
                    <span className="shrink-0">⚡</span>
                    <span className="truncate">Xuất Hoạt Ảnh 1 Động Tác (10 Frames)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CỘT 3: Thanh Bộ Phận Ngang (Mobile/Tablet) + Tùy biến Kiểu dáng & Màu sắc (Tablet: 7 cột | Desktop: 4 cột) */}
          <div className="md:col-span-7 lg:col-span-4 flex flex-col gap-2 md:h-[530px] lg:h-[560px] min-w-0">
            {/* Thanh cuộn ngang chọn Bộ phận dành cho Mobile & Tablet (< lg) */}
            <div className="lg:hidden bg-white rounded-2xl border border-gray-200 px-2.5 py-2 shadow-2xs shrink-0">
              <div className="flex items-center justify-between mb-1 px-0.5">
                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider font-sans">
                  Bộ Phận ({currentModel.categories.length})
                </span>
                <span className="text-[10px] text-gray-400 font-medium">Vuốt ngang ➔</span>
              </div>
              <CategoryMenu
                categories={currentModel.categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                mode="horizontal"
              />
            </div>

            {/* Bảng chọn Kiểu dáng & Nhuộm màu */}
            <div className="h-[304px] sm:h-[420px] md:h-full md:flex-1 min-h-0">
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

        </div>

        {/*
          PHẦN 2: XƯỞNG XEM TRƯỚC HOẠT ẢNH & TÁCH LƯỚI SPRITE SHEET
          - Desktop (lg+): Luôn hiển thị bên dưới
          - Mobile & Tablet (< lg): Hiển thị khi chọn tab "🎞️ Xưởng Spritesheet"
        */}
        <div className={`${mobileTab === 'spritesheet' ? 'block' : 'hidden lg:block'}`}>
          <InlineSpritesheetStudio
            initialImageUrl={imageResult}
            onCaptureFromCanvas={() => canvasPreviewRef.current?.getBase64Image()}
          />
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
