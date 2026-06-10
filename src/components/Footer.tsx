import { NavLink } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    { name: 'Nutraceuticals', path: '/products' },
    { name: 'Hematinics', path: '/products' },
    { name: 'Ayurvedic', path: '/products' },
    { name: "Women's Health", path: '/products' },
    { name: 'Liver Care', path: '/products' },
    { name: 'Bone & Joint Care', path: '/products' }
  ];

  const socialLinks = [
    { icon: 'fa-linkedin', label: 'LinkedIn', href: '#' },
    { icon: 'fa-facebook', label: 'Facebook', href: '#' },
    { icon: 'fa-instagram', label: 'Instagram', href: '#' },
    { icon: 'fa-twitter', label: 'Twitter', href: '#' }
  ];

  return (
    <footer className="site-footer">
      <div className="footer-divider" />
      
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Company Information Section */}
          <div className="footer-section footer-company">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-container">
                <img
                  className="footer-logo"
                  src="/logo.jpeg"
                  alt="BASDILS Pharmaceuticals Pvt. Ltd."
                  width="80"
                  height="80"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="footer-company-content">
              <h3 className="footer-company-name">BASDILS Pharmaceuticals</h3>
              <p className="footer-company-desc">
                Quality-driven pharmaceutical, nutraceutical, and Ayurvedic healthcare solutions built with a focus on trust, consistency, and long-term healthcare value.
              </p>

              <div className="footer-company-contacts">
                <div className="footer-contact-item">
                  <i className="fa-solid fa-envelope" />
                  <a href="mailto:info@basdilspharma.com">
                    info@basdilspharma.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <i className="fa-solid fa-phone" />
                  <a href="tel:+919931691959">
                    +91 99316 91959
                  </a>
                </div>
                <div className="footer-contact-item">
                  <i className="fa-solid fa-globe" />
                  <a href="https://www.basdilspharma.com" target="_blank" rel="noreferrer">
                    www.basdilspharma.com
                  </a>
                </div>
                <div className="footer-contact-item">
                  <i className="fa-solid fa-map-marker-alt" />
                  <span>Basdils Pharmaceuticals Pvt. Ltd. Reg. Office :- BML, HJP, VSL, BR-844101 INDIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section footer-links">
            <h4 className="footer-section-title">Quick Links</h4>
            <nav className="footer-nav">
              <NavLink to="/" className="footer-nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="footer-nav-link">
                About Us
              </NavLink>
              <NavLink to="/products" className="footer-nav-link">
                Products
              </NavLink>
              <NavLink to="/services" className="footer-nav-link">
                Services
              </NavLink>
              <NavLink to="/manufacturing" className="footer-nav-link">
                Manufacturing
              </NavLink>
              <NavLink to="/contact" className="footer-nav-link">
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Product Categories Section */}
          <div className="footer-section footer-categories">
            <h4 className="footer-section-title">Product Categories</h4>
            <nav className="footer-nav">
              {productCategories.map((category) => (
                <NavLink 
                  key={category.name}
                  to={category.path} 
                  className="footer-nav-link"
                >
                  {category.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact & Social Section */}
          <div className="footer-section footer-social-section">
            <h4 className="footer-section-title">Connect With Us</h4>
            
            <p className="footer-social-tagline">
              Stay connected with us for the latest updates and innovative healthcare solutions.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social-icon"
                  aria-label={social.label}
                  title={social.label}
                >
                  <i className={`fa-brands ${social.icon}`} />
                </a>
              ))}
            </div>

            <div className="footer-cta-box">
              <p className="footer-cta-text">Have questions? Reach out to our team.</p>
              <NavLink to="/contact" className="button button-primary footer-cta-btn">
                <i className="fa-solid fa-arrow-right" />
                Get In Touch
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              &copy; {currentYear} BASDILS Pharmaceuticals Pvt. Ltd. All rights reserved.
            </p>
          </div>

          <nav className="footer-legal-links">
            <a href="#" className="footer-legal-link">
              Privacy Policy
            </a>
            <span className="footer-legal-separator" />
            <a href="#" className="footer-legal-link">
              Terms of Service
            </a>
            <span className="footer-legal-separator" />
            <a href="#" className="footer-legal-link">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
