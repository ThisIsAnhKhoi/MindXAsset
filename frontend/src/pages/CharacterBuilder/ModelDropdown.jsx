import { useState, useRef, useEffect } from 'react';

const ModelDropdown = ({ models = [], selectedModelId, onSelectModel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedModel = models.find(m => m.id === selectedModelId) || models[0];

  // Auto-close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (modelId) => {
    onSelectModel(modelId);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border rounded-xl py-2 px-2.5 transition-all duration-200 flex items-center justify-between text-left cursor-pointer group shadow-2xs select-none ${
          isOpen
            ? 'border-red-500 ring-2 ring-red-500/20 shadow-sm'
            : 'border-red-200 hover:border-red-400 hover:shadow-xs'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100/80 text-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            {selectedModel.icon || '🧙'}
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-xs font-bold text-gray-900 group-hover:text-red-700 transition-colors truncate block font-sans">
              {selectedModel.name}
            </span>
            <p className="text-[10px] text-gray-500 truncate font-sans mt-0.5">
              {selectedModel.subtitle || 'Tùy biến nhân vật'}
            </p>
          </div>
        </div>

        {/* Chevron Icon */}
        <div className="ml-1 text-gray-400 group-hover:text-red-600 transition-colors shrink-0">
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-red-600' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu Popover */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white/98 backdrop-blur-md border border-gray-200/90 rounded-2xl shadow-2xl p-1.5 space-y-1 max-h-[380px] overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider font-sans border-b border-gray-100 flex items-center justify-between">
            <span>Chọn Mô Hình ({models.length})</span>
            <span className="text-[9px] text-red-500 font-semibold font-mono">MindX Studio</span>
          </div>

          {models.map(model => {
            const isSelected = model.id === selectedModelId;
            return (
              <button
                key={model.id}
                type="button"
                onClick={() => handleSelect(model.id)}
                className={`w-full p-2 rounded-xl transition-all flex items-center gap-2.5 text-left border cursor-pointer group/item ${
                  isSelected
                    ? 'bg-red-50/90 border-red-200 shadow-2xs'
                    : 'bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-200/60'
                }`}
              >
                {/* Model Icon */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg shrink-0 transition-transform ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-xs scale-105'
                    : 'bg-gray-100 text-gray-700 group-hover/item:scale-105 group-hover/item:bg-white group-hover/item:shadow-2xs'
                }`}>
                  {model.icon || '📦'}
                </div>

                {/* Model Details */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold font-sans truncate ${
                      isSelected ? 'text-red-900' : 'text-gray-800 group-hover/item:text-red-600'
                    }`}>
                      {model.name}
                    </span>
                    {model.badge && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full border shrink-0 ${model.tagColor || 'bg-red-50 text-red-600 border-red-200'}`}>
                        {model.badge}
                      </span>
                    )}
                  </div>
                  <p className={`text-[10px] font-sans truncate mt-0.5 ${
                    isSelected ? 'text-red-700/80' : 'text-gray-500'
                  }`}>
                    {model.subtitle || model.desc}
                  </p>
                </div>

                {/* Selected Checkmark */}
                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ModelDropdown;
