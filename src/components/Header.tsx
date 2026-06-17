import { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../data/catalog';

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(location.pathname === '/');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const updateHeader = () => {
      const atTop = window.scrollY <= 24;
      setIsTransparent(location.pathname === '/' && atTop);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearchQuery('');
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent border-b border-transparent' 
          : 'bg-white border-b border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Section */}
            <NavLink 
              className="flex items-center gap-3 flex-shrink-0 group" 
              to="/" 
              aria-label="BASDILS Pharmaceuticals home"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/logo.jpeg"
                  alt=""
                  width="48"
                  height="48"
                  decoding="async"
                  className="w-10 h-10"
                />
              </div>
              <div className="hidden sm:flex flex-col justify-center">
                <strong className="text-gray-900 font-bold text-lg">BASDILS</strong>
                <small className="text-gray-600 text-xs font-medium">Pharmaceuticals</small>
              </div>
            </NavLink>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 mx-8 max-w-md">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search Products..."
                  aria-label="Search products"
                  className="w-full px-4 py-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white text-sm"
                />
                <button 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors"
                  type="button"
                  aria-label="Submit search"
                >
                  <i className="fa-solid fa-magnifying-glass text-sm" />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <nav className="flex items-center gap-1" id="primary-nav">
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => 
                      isActive 
                        ? 'px-4 py-2 text-primary-600 font-semibold border-b-2 border-primary-600 text-sm transition-colors' 
                        : 'px-4 py-2 text-gray-700 hover:text-primary-600 font-medium text-sm transition-colors'
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                menuOpen 
                  ? 'bg-primary-100 text-primary-600' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={onToggleMenu}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

            {/* Mobile Search Toggle */}
            <button
              className="lg:hidden p-2 ml-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              type="button"
              aria-label="Toggle search"
              onClick={handleSearchToggle}
            >
              <i className="fa-solid fa-magnifying-glass text-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 pt-20" 
          onClick={onToggleMenu}
        >
          <nav 
            className="bg-white shadow-xl max-w-sm w-full ml-auto rounded-l-2xl overflow-y-auto max-h-screen" 
            id="mobile-nav"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <NavLink 
                className="flex items-center gap-3" 
                to="/"
                onClick={onToggleMenu}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                  <img
                    src="/logo.jpeg"
                    alt="BASDILS Pharmaceuticals"
                    width="48"
                    height="48"
                    decoding="async"
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold">BASDILS</strong>
                  <small className="text-gray-600 text-xs font-medium">Pharmaceuticals</small>
                </div>
              </NavLink>
            </div>

            <nav className="py-4 space-y-1 px-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => 
                    isActive 
                      ? 'block px-4 py-3 rounded-lg bg-primary-50 text-primary-600 font-semibold text-sm transition-colors' 
                      : 'block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors'
                  }
                  onClick={onToggleMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-center gap-4 mb-4">
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300">
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
            
            <a 
              href="tel:+919931691959"
              className="block px-4 py-3 mt-4 bg-primary-600 text-white font-semibold rounded-lg text-center hover:bg-primary-700 transition-colors"
            >
              <i className="fa-solid fa-phone mr-2" />
              Call Now
            </a>
          </nav>
        </div>
      )}

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden pt-20 flex items-start justify-center p-4" onClick={handleSearchToggle}>
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mt-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search Products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search products"
                  className="w-full px-4 py-3 pl-4 pr-12 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  type="button"
                  aria-label="Close search"
                  onClick={handleSearchToggle}
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>
              </div>
            </div>
            {searchQuery && (
              <div className="p-4 text-sm text-gray-600">
                <i className="fa-solid fa-magnifying-glass mr-2 text-primary-600" />
                Searching for "{searchQuery}"...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
