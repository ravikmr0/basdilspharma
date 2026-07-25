import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../data/catalog';
import { branding } from '../config/branding';

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  const location = useLocation();
  const [isTransparent, setIsTransparent] = useState(location.pathname === '/');

  useEffect(() => {
    const updateHeader = () => {
      const atTop = window.scrollY <= 24;
      setIsTransparent(location.pathname === '/' && atTop);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, [location.pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent border-b border-transparent' 
          : 'bg-white border-b border-gray-200 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Section */}
            <NavLink 
              className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group" 
              to="/" 
              aria-label="BASDILS Pharmaceuticals home"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                <img
                  src="/Images/logo.png"
                  alt="BASDILS Logo"
                  width="48"
                  height="48"
                  decoding="async"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
              <div className="hidden xs:flex sm:flex flex-col justify-center min-w-0">
                <strong className="text-gray-900 font-bold text-base sm:text-lg leading-tight">BASDILS</strong>
                <small className="text-gray-600 text-xs font-medium leading-tight">Pharmaceuticals</small>
              </div>
            </NavLink>

            {/* Mobile Search Bar - Visible on mobile and tablet */}
            <div className="flex md:hidden flex-1 mx-2 sm:mx-3">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search..."
                  aria-label="Search products"
                  className="w-full px-2 sm:px-3 py-1.5 pl-2 sm:pl-3 pr-8 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white text-xs sm:text-sm transition-all duration-200"
                />
                <button 
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors flex-shrink-0"
                  type="button"
                  aria-label="Submit search"
                >
                  <i className="fa-solid fa-magnifying-glass text-xs sm:text-sm" />
                </button>
              </div>
            </div>

            {/* Desktop Search Bar - Hidden on mobile */}
            <div className="hidden md:flex flex-1 mx-4 lg:mx-8 max-w-md">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search Products..."
                  aria-label="Search products"
                  className="w-full px-3 sm:px-4 py-2 pl-3 sm:pl-4 pr-9 sm:pr-10 rounded-lg border border-gray-300 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 bg-white text-sm transition-all duration-200"
                />
                <button 
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors flex-shrink-0"
                  type="button"
                  aria-label="Submit search"
                >
                  <i className="fa-solid fa-magnifying-glass text-sm" />
                </button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              <nav className="flex items-center gap-0.5" id="primary-nav">
                {navigation.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => 
                      isActive 
                        ? 'px-3 lg:px-4 py-2 text-primary-600 font-semibold border-b-2 border-primary-600 text-xs lg:text-sm transition-colors' 
                        : 'px-3 lg:px-4 py-2 text-gray-700 hover:text-primary-600 font-medium text-xs lg:text-sm transition-colors'
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ml-2 flex-shrink-0 ${
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
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center gap-1">
                <span className={`h-0.5 w-5 sm:w-6 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`h-0.5 w-5 sm:w-6 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-5 sm:w-6 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>


          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 pt-16 sm:pt-20" 
          onClick={onToggleMenu}
        >
          <nav 
            className="bg-white shadow-xl max-w-sm w-full ml-auto rounded-l-2xl overflow-y-auto max-h-screen" 
            id="mobile-nav"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <NavLink 
                className="flex items-center gap-3" 
                to="/"
                onClick={onToggleMenu}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-600 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/logo.jpeg"
                    alt="BASDILS Pharmaceuticals"
                    width="48"
                    height="48"
                    decoding="async"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                <div className="min-w-0">
                  <strong className="block text-gray-900 font-bold text-base sm:text-lg leading-tight">BASDILS</strong>
                  <small className="text-gray-600 text-xs font-medium leading-tight">Pharmaceuticals</small>
                </div>
              </NavLink>
            </div>

            <nav className="py-3 sm:py-4 space-y-1 px-3 sm:px-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => 
                    isActive 
                      ? 'block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-primary-50 text-primary-600 font-semibold text-sm transition-colors' 
                      : 'block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors'
                  }
                  onClick={onToggleMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="p-4 sm:p-6 border-t border-gray-200">
              <div className="flex justify-center gap-3 mb-4">
                <a href={branding.socialMedia.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300 text-sm">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href={branding.socialMedia.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300 text-sm">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href={branding.socialMedia.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300 text-sm">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href={branding.socialMedia.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300 text-sm">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a href={branding.socialMedia.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-all duration-300 text-sm">
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
            
            <a 
              href={`tel:${branding.contact.phone}`}
              className="block mx-3 sm:mx-4 px-3 py-2 mb-3 bg-primary-600 text-white font-semibold rounded-lg text-center hover:bg-primary-700 transition-colors text-xs sm:text-sm"
            >
              <i className="fa-solid fa-phone mr-2" />
              Call Now
            </a>

            <a 
              href="https://wa.me/919931691959"
              target="_blank"
              rel="noreferrer"
              className="block mx-3 sm:mx-4 px-3 py-2 mb-3 bg-green-500 text-white font-semibold rounded-lg text-center hover:bg-green-600 transition-colors text-xs sm:text-sm"
            >
              <i className="fa-brands fa-whatsapp mr-2" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}


    </>
  );
}
