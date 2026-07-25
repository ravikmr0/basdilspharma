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

  const socialLinks = [
    { href: branding.socialMedia.linkedin, label: 'LinkedIn', icon: 'fa-linkedin' },
    { href: branding.socialMedia.facebook, label: 'Facebook', icon: 'fa-facebook' },
    { href: branding.socialMedia.instagram, label: 'Instagram', icon: 'fa-instagram' },
    { href: branding.socialMedia.twitter, label: 'X', icon: 'fa-x-twitter' },
    { href: branding.socialMedia.youtube, label: 'YouTube', icon: 'fa-youtube' }
  ];

  return (
    <footer className="bg-[linear-gradient(135deg,#0d2027_0%,#183840_52%,#2e1d0e_100%)] text-primary-100 pt-16 sm:pt-20 pb-8 sm:pb-12 mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-white/10">
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-lg ring-1 ring-secondary-200/60">
                <img
                  src="/Images/logo.png"
                  alt="Basdils Pharmaceuticals"
                  width="44"
                  height="44"
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-bold text-sm leading-tight">Basdils <span className="text-secondary-300">Pharmaceuticals</span></h3>
                <p className="text-primary-200 text-xs leading-tight font-medium">Pvt Ltd</p>
              </div>
            </div>

            <p className="text-primary-200 text-sm leading-relaxed">
              Committed to healthcare excellence through quality manufacturing, reliable partnerships, and ethical growth.
            </p>

            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Registered Office</h4>
              <div className="flex items-start gap-2 text-primary-200 text-sm">
                <i className="fa-solid fa-location-dot w-4 h-4 text-secondary-300 flex-shrink-0 mt-0.5" />
                <address className="not-italic">{branding.addresses.registered.fullAddress}</address>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <a href={`mailto:${branding.contact.gmail}`} className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
                <i className="fa-brands fa-google w-4 h-4 text-secondary-300 flex-shrink-0" />
                <span className="text-sm break-all">{branding.contact.gmail}</span>
              </a>
              <a href={`mailto:${branding.contact.email}`} className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
                <i className="fa-solid fa-envelope w-4 h-4 text-secondary-300 flex-shrink-0" />
                <span className="text-sm break-all">{branding.contact.email}</span>
              </a>
              <a href={`tel:${branding.contact.phone}`} className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
                <i className="fa-solid fa-phone w-4 h-4 text-secondary-300 flex-shrink-0" />
                <span className="text-sm">{branding.contact.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-5">
            <h4 className="text-white font-bold text-lg">Corporate Offices</h4>
            {branding.addresses.offices.map((office) => (
              <div key={office.name} className="bg-white/[0.07] rounded-lg p-4 border border-white/10 hover:border-secondary-300/50 transition-colors backdrop-blur-sm">
                <h5 className="text-white font-semibold text-sm mb-2">{office.name}</h5>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <i className="fa-solid fa-map-pin w-3 h-3 text-secondary-300 flex-shrink-0 mt-1" />
                    <span className="text-primary-200 text-xs">{office.address}</span>
                  </div>
                  {office.phone && (
                    <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-primary-200 hover:text-secondary-300 transition-colors">
                      <i className="fa-solid fa-phone w-3 h-3 text-secondary-300 flex-shrink-0" />
                      <span className="text-xs">{office.phone}</span>
                    </a>
                  )}
                  {office.email && (
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-primary-200 hover:text-secondary-300 transition-colors">
                      <i className="fa-solid fa-envelope w-3 h-3 text-secondary-300 flex-shrink-0" />
                      <span className="text-xs break-all">{office.email}</span>
                    </a>
                  )}
                  <a href={office.googleMapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-secondary-300 hover:text-secondary-200 transition-colors">
                    <i className="fa-solid fa-map w-3 h-3 flex-shrink-0" />
                    <span className="text-xs underline">View on Maps</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className="text-primary-200 hover:text-secondary-300 transition-colors text-sm block">
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Product Categories</h4>
            <nav className="space-y-3">
              {productCategories.map((category) => (
                <NavLink key={category.name} to={category.path} className="text-primary-200 hover:text-secondary-300 transition-colors text-sm block">
                  {category.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-1 space-y-5">
            <div>
              <h4 className="text-white font-bold text-lg mb-3">Connect With Us</h4>
              <p className="text-primary-200 text-sm mb-4">
                Follow us for product launches, quality updates, and franchise opportunities.
              </p>

              <div className="flex gap-2 flex-wrap mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-secondary-600 text-primary-100 hover:text-white flex items-center justify-center transition-colors text-sm"
                    aria-label={link.label}
                    title={link.label}
                  >
                    <i className={`fa-brands ${link.icon}`} />
                  </a>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              className="block px-4 py-3 bg-secondary-400 hover:bg-secondary-500 text-primary-950 font-semibold rounded-lg text-center transition-colors text-sm shadow-glow"
            >
              <i className="fa-solid fa-envelope mr-2" />
              Get In Touch
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-primary-200 text-sm">
            &copy; {currentYear} {branding.company.name} All rights reserved.
          </p>

          <nav className="flex items-center gap-3 sm:gap-6 text-sm flex-wrap justify-center">
            <NavLink to="/privacy" className="text-primary-200 hover:text-secondary-300 transition-colors">
              Privacy Policy
            </NavLink>
            <span className="text-primary-700 hidden sm:inline">/</span>
            <NavLink to="/contact" className="text-primary-200 hover:text-secondary-300 transition-colors">
              Terms & Conditions
            </NavLink>
            <span className="text-primary-700 hidden sm:inline">/</span>
            <NavLink to="/manufacturing" className="text-primary-200 hover:text-secondary-300 transition-colors">
              Compliance
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
