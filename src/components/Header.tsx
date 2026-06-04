import { NavLink } from 'react-router-dom';
import { navigation } from '../data/catalog';

type HeaderProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export function Header({ menuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-bar">
        <NavLink className="brand" to="/" aria-label="BASDILS Pharmaceuticals home">
          <span className="brand-mark" aria-hidden="true">
            <img
              className="brand-logo"
              src="/logo.jpeg"
              alt=""
              width="60"
              height="60"
              decoding="async"
            />
          </span>
          <span className="brand-copy">
            <strong>BASDILS</strong>
            <small>Pharmaceuticals Pvt. Ltd.</small>
          </span>
        </NavLink>

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
