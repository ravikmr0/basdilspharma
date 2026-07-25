import { NavLink } from 'react-router-dom';
import { branding } from '../config/branding';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    { name: 'Orthopedics', path: '/products' },
    { name: 'Liver Care', path: '/products' },
    { name: 'Gynecology', path: '/products' },
    { name: 'Hematinics', path: '/products' },
    { name: 'Respiratory', path: '/products' },
    { name: 'Neurology', path: '/products' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-16 sm:pt-20 pb-8 sm:pb-12 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-gray-800">
          {/* Company Information Section */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                <img
                  src="/Images/logo.png"
                  alt="BASDILS Pharmaceuticals"
                  width="56"
                  height="56"
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-base sm:text-lg leading-tight">BASDILS</h3>
                <p className="text-gray-400 text-xs leading-tight font-medium">Pharmaceuticals Pvt Ltd</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Committed to Healthcare Excellence
            </p>

            {/* Registered Office */}
            <div>
              <h4 className="text-white font-semibold text-xs sm:text-sm mb-2">Registered Office</h4>
              <div className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                <i className="fa-solid fa-map-marker-alt w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <address className="not-italic">{branding.addresses.registered.fullAddress}</address>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3 pt-2">
              <a href={`mailto:${branding.contact.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                <i className="fa-solid fa-envelope w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all hover:underline">{branding.contact.email}</span>
              </a>
              <a href={`tel:${branding.contact.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                <i className="fa-solid fa-phone w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{branding.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Office Locations Section */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-white font-bold text-sm sm:text-lg">Corporate Offices</h4>
            {branding.addresses.offices.map((office, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-3 sm:p-4 border border-gray-700 hover:border-blue-600 transition-all duration-300">
                <h5 className="text-white font-semibold text-xs sm:text-sm mb-2">{office.name}</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <i className="fa-solid fa-map-pin w-3 h-3 text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 text-xs">{office.address}</span>
                  </div>
                  {office.phone && (
                    <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <i className="fa-solid fa-phone w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span className="text-xs">{office.phone}</span>
                    </a>
                  )}
                  {office.email && (
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <i className="fa-solid fa-envelope w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span className="text-xs break-all">{office.email}</span>
                    </a>
                  )}
                  <a href={office.googleMapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors inline-block">
                    <i className="fa-solid fa-map w-3 h-3 flex-shrink-0" />
                    <span className="text-xs underline">View on Maps</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-bold text-sm sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <NavLink 
                  key={link.path}
                  to={link.path} 
                  className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm block hover:translate-x-1 duration-300"
                >
                  → {link.name}
                </NavLink>
              ))}
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
                  className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm block hover:translate-x-1 duration-300"
                >
                  → {category.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Social & CTA Section */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-white font-bold text-sm sm:text-lg mb-3 sm:mb-4">Connect With Us</h4>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                Follow us on social media for the latest updates.
              </p>

              <div className="flex gap-2 sm:gap-3 flex-wrap mb-6">
                <a href={branding.socialMedia.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 text-sm hover:scale-110" aria-label="LinkedIn" title="LinkedIn">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href={branding.socialMedia.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 text-sm hover:scale-110" aria-label="Facebook" title="Facebook">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href={branding.socialMedia.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 text-sm hover:scale-110" aria-label="Instagram" title="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href={branding.socialMedia.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-black text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 text-sm hover:scale-110" aria-label="X (Twitter)" title="X (Twitter)">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a href={branding.socialMedia.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 text-sm hover:scale-110" aria-label="YouTube" title="YouTube">
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>

            <NavLink 
              to="/contact" 
              className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg text-center transition-all duration-300 text-xs sm:text-sm hover:shadow-lg hover:shadow-blue-600/50"
            >
              <i className="fa-solid fa-envelope mr-2" />
              Get In Touch
            </NavLink>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} {branding.company.name} All rights reserved.
          </p>

          <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms & Conditions
            </a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Compliance
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
