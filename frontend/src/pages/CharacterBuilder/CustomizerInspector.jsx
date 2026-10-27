import { colorPalettes } from './assets_config';

/**
 * Calculates focal zoom and background positioning for Pipoya sprites
 * Ensures hats, eyes, glasses and beards are zoomed in and centered
 */
const getCategorySpriteStyle = (category, spriteSrc) => {
  if (!spriteSrc) return {};

  let scale = 1.35;
  let fy = 16;

  if (category === 'hats') {
    scale = 2.8;
    fy = 7;
  } else if (category === 'eyes' || category === 'glasses' || category === 'makeup') {
    scale = 3.2;
    fy = 14;
  } else if (category === 'beards' || category === 'mouth') {
    scale = 2.8;
    fy = 18;
  } else if (category === 'hairs' || category === 'hairadds' || category === 'ears') {
    scale = 2.2;
    fy = 10;
  } else if (category === 'tops' || category === 'clothes' || category === 'cloaks') {
    scale = 1.9;
    fy = 20;
  }

  const bgW = Math.round(96 * scale);
  const bgH = Math.round(128 * scale);
  const posX = Math.round(24 - 48 * scale);
  const posY = Math.round(24 - fy * scale);

  return {
    backgroundImage: `url(${spriteSrc})`,
    backgroundPosition: `${posX}px ${posY}px`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${bgW}px ${bgH}px`,
    imageRendering: 'pixelated'
  };
};

const CustomizerInspector = ({
  activeCategory,
  selections,
  colors,
  onSelectOption,
  onSelectColor,
  currentConfig,
  currentPalettes
}) => {
  const allOptions = (currentConfig || {})[activeCategory] || [];
  const currentOptions = (activeCategory === 'state' && selections.prop_type)
    ? allOptions.filter(o => !o.forType || o.forType === selections.prop_type)
    : allOptions;
  const currentColor = colors[activeCategory] || '#ffffff';
  const presets = (currentPalettes && currentPalettes[activeCategory]) || colorPalettes[activeCategory] || [];

  const getCategoryTitle = () => {
    if (activeCategory === 'prop_type') return 'Nhóm Danh Mục Vật Phẩm';
    if (activeCategory === 'state') {
      const activeTypeObj = (currentConfig?.prop_type || []).find(t => t.id === selections.prop_type);
      return activeTypeObj ? activeTypeObj.name : 'Vật Phẩm & Biến Thể';
    }
    if (activeCategory === 'pedestal') return '🏛️ Bệ Đỡ Trưng Bày';
    if (activeCategory === 'aura') return '✨ Hào Quang Phép Thuật';
    if (activeCategory === 'effects') return '🌟 Bụi Sao & Tia Sáng';
    return activeCategory;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-sm h-full overflow-hidden">
      {/* Tiêu đề mục đang tùy biến */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 shrink-0">
        <h3 className="text-base font-bold uppercase tracking-wider text-gray-800 font-sans truncate pr-2">
          {getCategoryTitle()}
        </h3>
        <span className="text-xs px-2.5 py-0.5 bg-red-50 text-red-700 font-bold rounded-full font-sans border border-red-200 shrink-0">
          {currentOptions.length} Kiểu
        </span>
      </div>

      {/* Danh sách Item Styles / Kiểu dáng (Lưới linh hoạt, tự cân đối không để trống ô) */}
      <div className="flex-1 overflow-hidden flex flex-col my-2">
        {/* Quick category switch pills for props in state mode */}
        {activeCategory === 'state' && currentConfig?.prop_type && (
          <div className="flex gap-1.5 overflow-x-auto pb-2 mb-1.5 custom-scrollbar shrink-0">
            {currentConfig.prop_type.map(type => {
              const isTypeActive = selections.prop_type === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => onSelectOption('prop_type', type.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                    isTypeActive
                      ? 'bg-red-600 text-white border-red-700 shadow-xs scale-105'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 hover:text-red-600'
                  }`}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
        )}
        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 font-sans shrink-0">
          Chọn kiểu dáng (Xem trước phóng to):
        </label>
        <div className={`grid ${currentOptions.length <= 4 ? 'grid-cols-2' : 'grid-cols-3'} gap-2.5 overflow-y-auto pr-1 custom-scrollbar flex-1 content-start`}>
          {currentOptions.map((opt) => {
            const isSelected = selections[activeCategory] === opt.id;
            const isNone = opt.id.endsWith('_none');
            const spriteSrc = opt.layers && opt.layers.length > 0 ? opt.layers[0].src : null;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectOption(activeCategory, opt.id)}
                className={`
                  relative rounded-xl border-2 flex flex-col items-center justify-between p-2 transition-all duration-150 group cursor-pointer aspect-square min-h-[94px]
                  ${
                    isSelected
                      ? 'border-red-500 bg-red-50 shadow-md ring-2 ring-red-200 scale-[1.02]'
                      : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-red-300 hover:shadow-xs'
                  }
                `}
                title={opt.name}
              >
                {/* Checkmark badge góc trên bên phải */}
                {isSelected && (
                  <div className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-xs z-10 pointer-events-none">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                {/* Khung ảnh Thumbnail Preview (Phóng to sắc nét) */}
                <div className="w-14 h-14 rounded-lg bg-gray-50/90 border border-gray-100 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shrink-0 p-0.5">
                  {isNone ? (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <span className="text-2xl font-bold leading-none">∅</span>
                    </div>
                  ) : (opt.thumbSrc || opt.src) ? (
                    /* Ảnh đơn PNG/SVG phóng to chuẩn pixel */
                    <img
                      src={opt.thumbSrc || opt.src}
                      alt={opt.name}
                      loading="lazy"
                      className="w-full h-full object-contain pointer-events-none drop-shadow-2xs"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  ) : spriteSrc ? (
                    /* Dành cho RPG Pipoya (Auto-Zoom tiêu cự vào mũ, kính, mắt) */
                    <div
                      className="w-14 h-14 pointer-events-none"
                      style={getCategorySpriteStyle(activeCategory, spriteSrc)}
                    />
                  ) : (
                    <div className={`w-7 h-7 rounded flex items-center justify-center font-bold text-xs ${isSelected ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      ✦
                    </div>
                  )}
                </div>

                {/* Nhãn tên bên dưới */}
                <span className={`text-[10px] font-sans truncate w-full text-center leading-tight mt-1 ${isSelected ? 'font-bold text-red-700' : 'text-gray-500 group-hover:text-gray-800'}`}>
                  {opt.name.replace(/(Không mặc|Trọc|Không có|Chân trần)/g, 'Trống')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bảng màu sắc (Color Box & Presets dạng compact) */}
      <div className="border-t border-gray-100 pt-2.5 flex flex-col gap-2 shrink-0">
        <div className="flex items-center justify-between">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider font-sans">
            Nhuộm màu:
          </label>
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border border-gray-200 bg-gray-50 text-gray-700"
            >
              {currentColor}
            </span>
            <label className="cursor-pointer bg-white hover:bg-gray-100 text-gray-700 text-[11px] font-bold py-1 px-2 rounded border border-gray-300 transition-colors hover:text-red-600">
              Pha màu
              <input
                type="color"
                value={currentColor}
                onChange={(e) => onSelectColor(activeCategory, e.target.value)}
                className="sr-only"
              />
            </label>
          </div>
        </div>

        {/* Các chấm màu gợi ý sẵn (Chỉ hiện khi có preset) */}
        {presets.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-start">
            {presets.map((colorItem) => {
              const hex = typeof colorItem === 'string' ? colorItem : (colorItem?.hex || '#ffffff');
              const name = typeof colorItem === 'string' ? colorItem : (colorItem?.name || hex);
              const isActiveColor = (currentColor || '').toLowerCase() === hex.toLowerCase();
              return (
                <button
                  key={hex}
                  type="button"
                  onClick={() => onSelectColor(activeCategory, hex)}
                  title={name}
                  className={`
                    w-6 h-6 rounded-full border-2 transition-transform shadow-2xs cursor-pointer
                    ${
                      isActiveColor
                        ? 'border-white scale-125 ring-2 ring-red-500'
                        : 'border-white hover:scale-110 hover:ring-1 hover:ring-gray-300'
                    }
                  `}
                  style={{ backgroundColor: hex }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomizerInspector;

