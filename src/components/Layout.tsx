import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const saved = window.localStorage.getItem('basdils-theme') as Theme | null;
  if (saved === 'dark' || saved === 'light') {
    return saved;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function SiteLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem('basdils-theme', theme);
  }, [theme]);

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

  const onToggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <>
      <Header
        theme={theme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((current) => !current)}
        onToggleTheme={onToggleTheme}
      />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
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
