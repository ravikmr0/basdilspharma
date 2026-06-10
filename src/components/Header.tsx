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
      <header className={`site-header${isTransparent ? ' is-transparent' : ''}`}>
        <div className="container header-bar">
          {/* Brand Section */}
          <NavLink 
            className="header-brand" 
            to="/" 
            aria-label="BASDILS Pharmaceuticals home"
          >
            <span className="header-logo-container" aria-hidden="true">
              <img
                className="header-logo"
                src="/logo.jpeg"
                alt=""
                width="60"
                height="60"
                decoding="async"
              />
            </span>
            <span className="header-brand-content">
              <strong className="header-brand-name">BASDILS</strong>
              <small className="header-brand-sub">Pharmaceuticals Pvt. Ltd.</small>
              <span className="header-brand-tagline">Quality • Innovation • Trust</span>
            </span>
          </NavLink>

          {/* Desktop Search Bar */}
          <div className="header-search-desktop">
            <div className="search-input-wrapper">
              <input
                type="search"
                className="search-input"
                placeholder="Search Products..."
                aria-label="Search products"
              />
              <button 
                className="search-icon-btn"
                type="button"
                aria-label="Submit search"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="header-desktop-nav">
            <nav className="primary-nav" id="primary-nav">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => 
                    isActive ? 'nav-link nav-link-active' : 'nav-link'
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && <span className="nav-underline" />}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`header-menu-toggle ${menuOpen ? 'is-active' : ''}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={onToggleMenu}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

          {/* Mobile Search Toggle */}
          <button
            className="header-search-toggle"
            type="button"
            aria-label="Toggle search"
            onClick={handleSearchToggle}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="mobile-nav-overlay" onClick={onToggleMenu}>
          <nav 
            className="mobile-nav-drawer" 
            id="mobile-nav"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav-header">
              <NavLink 
                className="mobile-nav-brand" 
                to="/"
                onClick={onToggleMenu}
              >
                <img
                  src="/logo.jpeg"
                  alt="BASDILS Pharmaceuticals"
                  width="48"
                  height="48"
                  decoding="async"
                />
                <div>
                  <strong>BASDILS</strong>
                  <small>Pharmaceuticals</small>
                </div>
              </NavLink>
              <button
                className="mobile-nav-close"
                type="button"
                aria-label="Close menu"
                onClick={onToggleMenu}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => 
                    isActive ? 'mobile-nav-link mobile-nav-link-active' : 'mobile-nav-link'
                  }
                  onClick={onToggleMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mobile-nav-footer">
              <div className="mobile-nav-social">
                <a href="#" aria-label="LinkedIn" className="social-icon">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="#" aria-label="Facebook" className="social-icon">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#" aria-label="Instagram" className="social-icon">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#" aria-label="Twitter" className="social-icon">
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Search Overlay */}
      {searchOpen && (
        <div className="mobile-search-overlay">
          <div className="mobile-search-container">
            <div className="mobile-search-input-group">
              <input
                ref={searchInputRef}
                type="search"
                className="mobile-search-input"
                placeholder="Search Products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              <button
                className="mobile-search-close"
                type="button"
                aria-label="Close search"
                onClick={handleSearchToggle}
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="mobile-search-results">
              {searchQuery && (
                <div className="search-result-item">
                  <i className="fa-solid fa-magnifying-glass" />
                  <span>Search for "{searchQuery}"</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
