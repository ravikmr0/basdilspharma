import { NavLink } from 'react-router-dom';
import { navigation } from '../data/catalog';

type HeaderProps = {
  theme: 'light' | 'dark';
  menuOpen: boolean;
  onToggleMenu: () => void;
  onToggleTheme: () => void;
};

export function Header({ theme, menuOpen, onToggleMenu, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <NavLink className="brand" to="/" aria-label="BASDILS Pharmaceuticals home">
          <span className="brand-mark">B</span>
          <span className="brand-copy">
            <strong>BASDILS</strong>
            <small>Pharmaceuticals Pvt. Ltd.</small>
          </span>
        </NavLink>

        <button className="icon-button theme-toggle" type="button" aria-label="Toggle dark mode" onClick={onToggleTheme}>
          <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
        </button>

        <button
          className="icon-button menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} id="primary-nav">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="button button-primary header-cta" to="/contact">
          Get in Touch
        </NavLink>
      </div>
    </header>
  );
}
