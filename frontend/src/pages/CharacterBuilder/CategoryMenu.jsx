const CategoryMenu = ({ categories = [], activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full overflow-y-auto max-h-[420px] pr-1.5 custom-scrollbar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`
              w-full py-2 px-2.5 rounded-xl font-sans font-semibold text-[13px] flex items-center gap-2.5 border transition-all text-left cursor-pointer
              ${isActive
                ? 'bg-red-600 text-white border-red-700 shadow-sm translate-x-0.5'
                : 'bg-white text-gray-700 border-gray-200/80 hover:bg-red-50/70 hover:text-red-700 hover:border-red-200 shadow-2xs'
              }
            `}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-base shrink-0 transition-transform ${
              isActive ? 'bg-white/20 scale-105' : 'bg-gray-100 group-hover:bg-white'
            }`}>
              {cat.icon}
            </div>
            <span className="truncate flex-1 tracking-tight">{cat.label}</span>
            {isActive && (
              <span className="text-white shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
