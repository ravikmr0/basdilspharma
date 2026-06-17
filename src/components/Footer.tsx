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
    <footer className="bg-gray-900 text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-gray-800">
          {/* Company Information Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-600 flex items-center justify-center flex-shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="BASDILS Pharmaceuticals"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight">BASDILS</h3>
                <p className="text-gray-400 text-xs leading-tight">Pharmaceuticals</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Quality-driven pharmaceutical, nutraceutical, and Ayurvedic healthcare solutions built with a focus on trust, consistency, and long-term healthcare value.
            </p>

            <div className="space-y-2 sm:space-y-3">
              <a href="mailto:info@basdilspharma.com" className="flex items-center gap-2 sm:gap-3 hover:text-primary-400 transition-colors group">
                <i className="fa-solid fa-envelope w-4 h-4 sm:w-5 sm:h-5 text-primary-500 group-hover:text-primary-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">info@basdilspharma.com</span>
              </a>
              <a href="tel:+919931691959" className="flex items-center gap-2 sm:gap-3 hover:text-primary-400 transition-colors group">
                <i className="fa-solid fa-phone w-4 h-4 sm:w-5 sm:h-5 text-primary-500 group-hover:text-primary-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 99316 91959</span>
              </a>
              <a href="https://www.basdilspharma.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 sm:gap-3 hover:text-primary-400 transition-colors group">
                <i className="fa-solid fa-globe w-4 h-4 sm:w-5 sm:h-5 text-primary-500 group-hover:text-primary-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">www.basdilspharma.com</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-3">
                <i className="fa-solid fa-map-marker-alt w-4 h-4 sm:w-5 sm:h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">BML, HJP, VSL, BR-844101 INDIA</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-bold text-sm sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              <NavLink to="/" className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm block">
                Home
              </NavLink>
              <NavLink to="/about" className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm block">
                About Us
              </NavLink>
              <NavLink to="/products" className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm block">
                Products
              </NavLink>
              <NavLink to="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm block">
                Services
              </NavLink>
              <NavLink to="/manufacturing" className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm block">
                Manufacturing
              </NavLink>
              <NavLink to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm block">
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Product Categories Section */}
          <div>
            <h4 className="text-white font-bold text-sm sm:text-lg mb-4 sm:mb-6">Product Categories</h4>
            <nav className="space-y-2 sm:space-y-3">
              {productCategories.map((category) => (
                <NavLink 
                  key={category.name}
                  to={category.path} 
                  className="text-gray-400 hover:text-primary-400 transition-colors text-xs sm:text-sm block"
                >
                  {category.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Social & CTA Section */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-white font-bold text-sm sm:text-lg mb-3 sm:mb-6">Connect With Us</h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                Stay connected for the latest healthcare innovations and updates.
              </p>

              <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 text-sm hover:scale-110"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <i className={`fa-brands ${social.icon}`} />
                  </a>
                ))}
              </div>
            </div>

            <NavLink 
              to="/contact" 
              className="block px-3 sm:px-4 py-2.5 sm:py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg text-center transition-colors duration-300 text-xs sm:text-base"
            >
              <i className="fa-solid fa-arrow-right mr-2" />
              Get In Touch
            </NavLink>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            &copy; {currentYear} BASDILS Pharmaceuticals Pvt. Ltd. All rights reserved.
          </p>

          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
