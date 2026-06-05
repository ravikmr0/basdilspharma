import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedCounter } from './AnimatedCounter';

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  buttons: { label: string; to: string; variant: 'primary' | 'secondary' }[];
  featuredProduct?: { name: string; to: string };
  featuredProducts?: { name: string; to: string }[];
  highlights?: string[];
};

const slides: Slide[] = [
  {
    id: 'corporate',
    eyebrow: 'Corporate Healthcare',
    title: 'Delivering Quality Healthcare Solutions Across India',
    description:
      'BASDILS Pharmaceuticals is committed to providing innovative pharmaceutical, nutraceutical, and Ayurvedic products that improve lives through quality, trust, and excellence.',
    image:
      'https://images.pexels.com/photos/4056820/pexels-photo-4056820.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    buttons: [
      { label: 'Explore Products', to: '/products', variant: 'primary' },
      { label: 'Contact Us', to: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'portfolio',
    eyebrow: 'Product Portfolio',
    title: 'Comprehensive Healthcare Product Portfolio',
    description:
      "From Women's Healthcare and Liver Care to Nutraceuticals, Bone Health, and Iron Supplements, we offer scientifically formulated healthcare solutions for every stage of life.",
    image:
      'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    buttons: [
      { label: 'View Products', to: '/products', variant: 'primary' },
      { label: 'Download Catalogue', to: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'womens-health',
    eyebrow: "Women's Healthcare",
    title: "Supporting Women's Health & Wellness",
    description:
      "Advanced Ayurvedic and nutritional formulations designed to promote women's wellness, reproductive health, and overall well-being.",
    image:
      'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    buttons: [
      { label: 'Learn More', to: '/products/mensoris', variant: 'primary' },
      { label: 'Request Inquiry', to: '/contact', variant: 'secondary' },
    ],
    featuredProduct: { name: 'Mensoris Syrup', to: '/products/mensoris' },
  },
  {
    id: 'liver-care',
    eyebrow: 'Liver Care Solutions',
    title: 'Advanced Liver Health & Digestive Support',
    description:
      'Scientifically formulated herbal solutions that help support liver function, digestion, appetite, and daily wellness.',
    image:
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    buttons: [
      { label: 'View Details', to: '/products/basdil-liv-ds', variant: 'primary' },
      { label: 'Contact Us', to: '/contact', variant: 'secondary' },
    ],
    featuredProduct: { name: 'Basdil-Liv DS Syrup', to: '/products/basdil-liv-ds' },
  },
  {
    id: 'nutrition',
    eyebrow: 'Nutrition & Wellness',
    title: 'Strengthening Health Through Nutrition',
    description:
      'High-quality nutraceutical formulations enriched with vitamins, minerals, folate, DHA, iron, calcium, and essential nutrients.',
    image:
      'https://images.pexels.com/photos/5910499/pexels-photo-5910499.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    buttons: [
      { label: 'Explore Range', to: '/products', variant: 'primary' },
      { label: 'Get Quote', to: '/contact', variant: 'secondary' },
    ],
    featuredProducts: [
      { name: 'Basifol', to: '/products/basifol' },
      { name: 'Basofer-D3', to: '/products/basofer-d3' },
      { name: 'Bacitrol-Plus', to: '/products/bacitrol-plus' },
    ],
  },
  {
    id: 'manufacturing',
    eyebrow: 'Manufacturing & Quality',
    title: 'Quality You Can Trust',
    description:
      'Manufactured in certified facilities following stringent quality standards, ensuring safety, consistency, and reliability in every product.',
    image:
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    buttons: [
      { label: 'About Us', to: '/about', variant: 'primary' },
      { label: 'Become a Partner', to: '/contact', variant: 'secondary' },
    ],
    highlights: [
      'Quality Assured Products',
      'Certified Manufacturing Partners',
      'Nationwide Distribution',
      'Ethical Business Practices',
    ],
  },
];

export function PremiumHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animDirection, setAnimDirection] = useState(1);
  const touchRef = useRef<number | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  // Keep pausedRef in sync so the interval callback reads the latest value
  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((prev) => {
        setAnimDirection(index >= prev ? 1 : -1);
        return index;
      });
    },
    [],
  );

  const goNext = useCallback(() => {
    setActiveIndex((prev) => {
      setAnimDirection(1);
      return (prev + 1) % slides.length;
    });
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => {
      setAnimDirection(-1);
      return (prev - 1 + slides.length) % slides.length;
    });
  }, []);

  // Autoplay
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    autoRef.current = setInterval(() => {
      if (!pausedRef.current && document.visibilityState === 'visible') {
        goNext();
      }
    }, 5000);

    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [goNext]);

  // Preload adjacent images
  useEffect(() => {
    const prev = (activeIndex - 1 + slides.length) % slides.length;
    const next = (activeIndex + 1) % slides.length;
    [prev, next].forEach((i) => {
      const img = new Image();
      img.src = slides[i].image;
    });
  }, [activeIndex]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchRef.current === null) return;
    const diff = touchRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchRef.current = null;
  };

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const slide = slides[activeIndex];

  return (
    <section
      className="ph"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Hero showcase"
      aria-roledescription="carousel"
    >
      {/* Background layers: previous + current for crossfade */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`ph-bg${i === activeIndex ? ' is-active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={i !== activeIndex}
        />
      ))}

      <div className="ph-overlay" />

      {/* Content */}
      <div className="container ph-inner">
        <div className="ph-text" key={slide.id} data-dir={animDirection}>
          <p className="ph-eyebrow">{slide.eyebrow}</p>
          <h1 className="ph-title">{slide.title}</h1>
          <p className="ph-desc">{slide.description}</p>

          {slide.featuredProduct && (
            <Link className="ph-badge" to={slide.featuredProduct.to}>
              <i className="fa-solid fa-star" />
              <span>Featured: {slide.featuredProduct.name}</span>
            </Link>
          )}

          {slide.featuredProducts && (
            <div className="ph-chips">
              {slide.featuredProducts.map((fp) => (
                <Link key={fp.name} className="ph-chip" to={fp.to}>
                  <i className="fa-solid fa-capsules" />
                  {fp.name}
                </Link>
              ))}
            </div>
          )}

          {slide.highlights && (
            <ul className="ph-checks">
              {slide.highlights.map((h) => (
                <li key={h}>
                  <i className="fa-solid fa-circle-check" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="ph-actions">
            {slide.buttons.map((btn) => (
              <Link
                key={btn.label}
                className={`ph-btn ph-btn-${btn.variant}`}
                to={btn.to}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="ph-stats">
          {([
            [100, '+', 'Products'],
            [1, '', 'Nationwide Presence'],
            [12, '+', 'WHO-GMP Partners'],
            [98, '%', 'Trust Index'],
          ] as const).map(([val, suffix, label]) => (
            <div className="ph-stat" key={label}>
              <strong>
                <AnimatedCounter value={val} />
                {suffix}
              </strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="ph-nav" aria-label="Slide navigation">
        <button
          className="ph-arrow"
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <div className="ph-dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`ph-dot${i === activeIndex ? ' is-active' : ''}`}
              type="button"
              aria-label={s.eyebrow}
              aria-pressed={i === activeIndex}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button
          className="ph-arrow"
          type="button"
          aria-label="Next slide"
          onClick={goNext}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </nav>

      {/* Scroll indicator */}
      <div className="ph-scroll" aria-hidden="true">
        <div className="ph-scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Counter */}
      <div className="ph-counter" aria-live="polite">
        {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
