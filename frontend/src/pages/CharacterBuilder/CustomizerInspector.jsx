import { useState } from 'react';
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
  currentModel,
  currentConfig,
  currentPalettes,
  currentGroups
}) => {
  const [filterGroup, setFilterGroup] = useState('all');
  const [prevCategory, setPrevCategory] = useState(activeCategory);

  if (prevCategory !== activeCategory) {
    setPrevCategory(activeCategory);
    setFilterGroup('all');
  }

  const allOptions = (currentConfig || {})[activeCategory] || [];
  const availableGroups = (currentGroups && currentGroups[activeCategory]) || null;

  let currentOptions = allOptions;
  if (activeCategory === 'state' && selections.prop_type) {
    currentOptions = allOptions.filter(o => !o.forType || o.forType === selections.prop_type);
  } else if (availableGroups && filterGroup && filterGroup !== 'all') {
    currentOptions = allOptions.filter(o => o.group === filterGroup || o.id?.endsWith('_none'));
  }

  const currentColor = colors[activeCategory] || '#ffffff';
  const presets = (currentPalettes && currentPalettes[activeCategory]) || colorPalettes[activeCategory] || [];

  const getCategoryTitle = () => {
    if (activeCategory === 'prop_type') return '📦 Nhóm Vật Phẩm';
    if (activeCategory === 'state') {
      const activeTypeObj = (currentConfig?.prop_type || []).find(t => t.id === selections.prop_type);
      return activeTypeObj ? activeTypeObj.name : '💎 Vật Phẩm & Biến Thể';
    }
    const catObj = (currentModel?.categories || []).find(c => c.id === activeCategory);
    if (catObj) {
      return `${catObj.icon} ${catObj.label}`;
    }
    return activeCategory;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-2.5 sm:p-4 flex flex-col justify-between shadow-xs h-full overflow-hidden min-w-0">
      {/* Tiêu đề mục đang tùy biến */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-2 shrink-0 min-w-0">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800 font-sans truncate pr-2">
          {getCategoryTitle()}
        </h3>
        <span className="text-[11px] px-2 py-0.5 bg-red-50 text-red-700 font-bold rounded-full font-sans border border-red-200 shrink-0">
          {currentOptions.length} Kiểu
        </span>
      </div>

      {/* Danh sách Item Styles / Kiểu dáng */}
      <div className="flex-1 overflow-hidden flex flex-col my-1.5 sm:my-2 min-h-0">
        {/* Quick category switch pills for props in state mode */}
        {activeCategory === 'state' && currentConfig?.prop_type && (
          <div className="flex gap-1.5 overflow-x-auto pb-1.5 mb-1.5 no-scrollbar sm:custom-scrollbar shrink-0">
            {currentConfig.prop_type.map(type => {
              const isTypeActive = selections.prop_type === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => onSelectOption('prop_type', type.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all border shrink-0 ${
                    isTypeActive
                      ? 'bg-red-600 text-white border-red-700 shadow-xs'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 hover:text-red-600'
                  }`}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
        )}

        {/* Quick filter pills for sub-groups */}
        {availableGroups && availableGroups.length > 0 && (
          <div className="flex gap-1.5 overflow-x-auto pb-1.5 mb-1.5 no-scrollbar sm:custom-scrollbar shrink-0">
            {availableGroups.map(grp => {
              const isGrpActive = filterGroup === grp.id;
              const count = grp.id === 'all'
                ? allOptions.length
                : allOptions.filter(o => o.group === grp.id).length;
              return (
                <button
                  key={grp.id}
                  type="button"
                  onClick={() => setFilterGroup(grp.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all border shrink-0 ${
                    isGrpActive
                      ? 'bg-red-600 text-white border-red-700 shadow-xs'
                      : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 hover:text-red-600'
                  }`}
                >
                  {grp.name} {grp.id !== 'all' && `(${count})`}
                </button>
              );
            })}
          </div>
        )}

        {/* Grid các thẻ chọn kiểu dáng — Chiều cao cố định vừa vặn, tự chuyển 2 cột ở màn hình siêu hẹp < 340px */}
        <div
          className={`grid ${
            currentOptions.length <= 4
              ? 'grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-2'
              : 'grid-cols-2 min-[340px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-3'
          } gap-2 overflow-y-auto p-1 pr-1.5 custom-scrollbar flex-1 content-start`}
        >
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
                  relative rounded-xl border-2 flex flex-col items-center justify-between p-1.5 sm:p-2 transition-all duration-150 group cursor-pointer h-[86px] sm:h-[92px] active:scale-95 min-w-0
                  ${
                    isSelected
                      ? 'border-red-500 bg-red-50/90 shadow-xs ring-1 ring-red-200'
                      : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-red-300'
                  }
                `}
                title={opt.name}
              >
                {/* Checkmark badge góc trên bên phải */}
                {isSelected && (
                  <div className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-2xs z-10 pointer-events-none">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                {/* Khung ảnh Thumbnail Preview */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-50/90 border border-gray-100 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 shrink-0 p-0.5">
                  {isNone ? (
                    <div className="flex flex-col items-center justify-center text-gray-400">
                      <span className="text-xl font-bold leading-none">∅</span>
                    </div>
                  ) : (opt.thumbSrc || opt.src) ? (
                    <img
                      src={opt.thumbSrc || opt.src}
                      alt={opt.name}
                      className="w-full h-full object-contain pointer-events-none drop-shadow-2xs"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  ) : spriteSrc ? (
                    <div
                      className="w-12 h-12 pointer-events-none"
                      style={getCategorySpriteStyle(activeCategory, spriteSrc)}
                    />
                  ) : (
                    <div className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${isSelected ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                      ✦
                    </div>
                  )}
                </div>

                {/* Nhãn tên bên dưới — Đủ chiều cao line-height, không bao giờ bị cắt chữ */}
                <span className={`text-[10px] sm:text-[11px] font-sans truncate w-full text-center leading-normal shrink-0 px-0.5 ${isSelected ? 'font-bold text-red-700' : 'text-gray-600 group-hover:text-gray-900'}`}>
                  {opt.name.replace(/(Không mặc|Trọc|Không có|Chân trần)/g, 'Trống')}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bảng màu sắc (Gọn gàng, cuộn ngang trên màn hình hẹp nếu nhiều màu) */}
      <div className="border-t border-gray-100 pt-2 flex flex-col gap-1.5 shrink-0 min-w-0">
        <div className="flex items-center justify-between gap-1.5 min-w-0">
          <label className="text-[10px] min-[360px]:text-[11px] font-bold text-gray-500 uppercase tracking-wider font-sans truncate">
            Nhuộm màu:
          </label>
          <div className="flex items-center gap-1 shrink-0">
            <span
              className="text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded border border-gray-200 bg-gray-50 text-gray-700"
            >
              {currentColor}
            </span>
            <label className="cursor-pointer bg-white hover:bg-gray-100 active:scale-95 text-gray-700 text-[10px] min-[360px]:text-[11px] font-bold py-0.5 px-2 rounded-lg border border-gray-300 transition-all hover:text-red-600 flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full border border-gray-300 shrink-0" style={{ backgroundColor: currentColor }} />
              <span>Pha màu</span>
              <input
                type="color"
                value={currentColor}
                onChange={(e) => onSelectColor(activeCategory, e.target.value)}
                className="sr-only"
              />
            </label>
          </div>
        </div>

        {/* Các chấm màu gợi ý sẵn — Đệm đủ không gian để ring không bao giờ bị cắt viền */}
        {presets.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1.5 px-1.5">
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
                    w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-transform shadow-2xs cursor-pointer shrink-0
                    ${
                      isActiveColor
                        ? 'border-white scale-110 ring-2 ring-red-500'
                        : 'border-gray-200 hover:scale-105 hover:ring-1 hover:ring-gray-300'
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
