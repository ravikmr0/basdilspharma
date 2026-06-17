import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function SiteLayout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!revealNodes.length || typeof IntersectionObserver === 'undefined') {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((current) => !current)}
      />
      <main id="main-content" className="pt-20">
        <Outlet />
      </main>
      <Footer />
      {/* Call Button */}
      <a
        className="fixed bottom-[96px] right-6 w-[60px] h-[60px] bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-xl z-40 sm:text-xl lg:text-2xl sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px] sm:bottom-[105px] lg:bottom-[112px]"
        href="tel:+919931691959"
        aria-label="Call BASDILS"
      >
        <i className="fa-solid fa-phone" />
      </a>
      
      {/* WhatsApp Button */}
      <a
        className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-xl z-40 sm:text-xl lg:text-2xl sm:w-[65px] sm:h-[65px] lg:w-[70px] lg:h-[70px]"
        href="https://wa.me/919931691959"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact BASDILS on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
    </>
  );
}
