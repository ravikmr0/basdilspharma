import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-panel">
          <NavLink className="footer-brand" to="/" aria-label="BASDILS Pharmaceuticals home">
            <img
              className="footer-logo"
              src="/logo.jpeg"
              alt="BASDILS Pharmaceuticals Pvt. Ltd."
              width="180"
              height="180"
              loading="lazy"
              decoding="async"
            />
          </NavLink>
          <p>
            Quality-driven pharmaceutical, nutraceutical, and Ayurvedic healthcare solutions built with a focus on trust,
            consistency, and long-term healthcare value.
          </p>
          <p>Email: <a href="mailto:info@basdilspharma.com">info@basdilspharma.com</a></p>
          <p>Website: <a href="https://www.basdilspharma.com">www.basdilspharma.com</a></p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
          <h4>Categories</h4>
          <NavLink to="/products">Nutraceuticals</NavLink>
          <NavLink to="/products">Hematinics</NavLink>
          <NavLink to="/products">Ayurvedic</NavLink>
          <NavLink to="/products">Women's Health</NavLink>
          <NavLink to="/products">Liver Care</NavLink>
          <NavLink to="/products">Bone &amp; Joint Care</NavLink>
        </div>
        <div>
          <h4>Social</h4>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
