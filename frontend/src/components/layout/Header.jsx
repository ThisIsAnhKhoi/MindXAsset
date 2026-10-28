import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  {
    path: '/',
    label: 'Trang chủ',
    shortLabel: 'Trang chủ',
    icon: (
      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    path: '/character-builder',
    label: 'Tạo Nhân Vật',
    shortLabel: 'Nhân vật',
    badge: 'Studio',
    icon: (
      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    path: '/generator',
    label: 'Tạo Ảnh AI',
    shortLabel: 'Tạo Ảnh',
    icon: (
      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    path: '/gallery',
    label: 'Thư viện',
    shortLabel: 'Thư viện',
    icon: (
      <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Header = () => {
  const location = useLocation();
  const activeItem = NAV_ITEMS.find(item => item.path === location.pathname) || NAV_ITEMS[0];

  return (
    <>
      {/* Top Header Bar */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-3.5 sm:px-6 lg:px-8 py-2 sm:py-2.5 sticky top-0 z-40 flex justify-between items-center gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5 shrink-0">
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 active:scale-[0.98] transition-all shrink-0">
            <img 
              src="https://mindx.edu.vn/favicon.ico" 
              alt="MindX Logo" 
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl shadow-xs object-cover shrink-0"
            />
            <div className="flex flex-col shrink-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-red-600 tracking-tight leading-none whitespace-nowrap">
                MindXAsset
              </h1>
              <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase hidden lg:block mt-0.5 whitespace-nowrap">
                2D Game Asset Studio
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile current page pill */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-red-700 bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            {activeItem.shortLabel}
          </span>
        </div>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-gray-100/80 p-1 rounded-2xl border border-gray-200/60 shrink-0">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all flex items-center gap-1.5 lg:gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-red-600 shadow-xs font-bold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <span className={isActive ? 'text-red-600' : 'text-gray-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`hidden lg:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide ${
                    isActive ? 'bg-red-100 text-red-700' : 'bg-gray-200/80 text-gray-600'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Mobile Bottom Navigation Dock */}
      <nav
        aria-label="Điều hướng di động"
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 pt-1 pb-safe"
      >
        <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all active:scale-95 ${
                  isActive
                    ? 'text-red-600 font-bold'
                    : 'text-gray-500 hover:text-gray-800 font-medium'
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 w-8 h-0.5 bg-red-600 rounded-full" />
                )}
                <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-red-50 text-red-600' : ''}`}>
                  {item.icon}
                </div>
                <span className="text-[11px] leading-tight mt-0.5 truncate max-w-full">
                  {item.shortLabel}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
