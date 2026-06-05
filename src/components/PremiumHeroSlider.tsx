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
  accentColor: string;
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
    accentColor: '#0d5cab',
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
    accentColor: '#1677d8',
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
    accentColor: '#d62828',
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
    accentColor: '#0f766e',
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
    accentColor: '#16a34a',
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
    accentColor: '#083b73',
  },
];

const floatingIcons = [
  { icon: 'fa-capsules', x: '8%', y: '18%', delay: 0, duration: 8 },
  { icon: 'fa-dna', x: '85%', y: '22%', delay: 2, duration: 10 },
  { icon: 'fa-flask-vial', x: '12%', y: '72%', delay: 4, duration: 9 },
  { icon: 'fa-syringe', x: '78%', y: '68%', delay: 1, duration: 7 },
  { icon: 'fa-heart-pulse', x: '92%', y: '45%', delay: 3, duration: 11 },
  { icon: 'fa-staff-snake', x: '4%', y: '48%', delay: 5, duration: 8 },
];

export function PremiumHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set([slides[0].id]));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setLoadedImages((prev) => new Set([...prev, slides[index].id]));
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning],
  );

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % slides.length);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    timerRef.current = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActiveIndex((prev) => {
          const next = (prev + 1) % slides.length;
          setLoadedImages((l) => new Set([...l, slides[next].id]));
          return next;
        });
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 800);
      }
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Preload next image
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex].image;
  }, [activeIndex]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    setTouchStart(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const activeSlide = slides[activeIndex];

  return (
    <div
      ref={sliderRef}
      className="premium-hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Hero product showcase"
      aria-roledescription="carousel"
    >
      {/* Background images with Ken Burns */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`premium-hero-bg ${index === activeIndex ? 'is-active' : ''} ${index === activeIndex ? 'ken-burns' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== activeIndex}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="premium-hero-overlay" />

      {/* Floating medical icons */}
      <div className="premium-hero-icons" aria-hidden="true">
        {floatingIcons.map((item, i) => (
          <i
            key={i}
            className={`fa-solid ${item.icon} premium-hero-float`}
            style={{
              left: item.x,
              top: item.y,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Slide content */}
      <div className="container premium-hero-content">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`premium-hero-slide ${index === activeIndex ? 'is-active' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            <p className="premium-hero-eyebrow">{slide.eyebrow}</p>
            <h1 className="premium-hero-title">{slide.title}</h1>
            <p className="premium-hero-desc">{slide.description}</p>

            {/* Featured product badge */}
            {slide.featuredProduct && (
              <Link className="premium-hero-featured" to={slide.featuredProduct.to}>
                <i className="fa-solid fa-star" />
                <span>Featured: {slide.featuredProduct.name}</span>
              </Link>
            )}

            {/* Featured products list */}
            {slide.featuredProducts && (
              <div className="premium-hero-featured-list">
                {slide.featuredProducts.map((fp) => (
                  <Link key={fp.name} className="premium-hero-featured-chip" to={fp.to}>
                    <i className="fa-solid fa-capsules" />
                    {fp.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Highlights */}
            {slide.highlights && (
              <ul className="premium-hero-highlights">
                {slide.highlights.map((h) => (
                  <li key={h}>
                    <i className="fa-solid fa-circle-check" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* CTA buttons */}
            <div className="premium-hero-actions">
              {slide.buttons.map((btn) => (
                <Link
                  key={btn.label}
                  className={`button premium-hero-btn premium-hero-btn-${btn.variant}`}
                  to={btn.to}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="premium-hero-stats-bar">
        <div className="container premium-hero-stats-grid">
          <div className="premium-hero-stat">
            <strong><AnimatedCounter value={100} />+</strong>
            <span>Products</span>
          </div>
          <div className="premium-hero-stat">
            <strong><AnimatedCounter value={1} /></strong>
            <span>Nationwide Presence</span>
          </div>
          <div className="premium-hero-stat">
            <strong><AnimatedCounter value={12} />+</strong>
            <span>WHO-GMP Partners</span>
          </div>
          <div className="premium-hero-stat">
            <strong><AnimatedCounter value={98} />%</strong>
            <span>Trust Index</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="premium-hero-nav">
        <button
          className="icon-button premium-hero-arrow"
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="premium-hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`premium-hero-dot ${index === activeIndex ? 'is-active' : ''}`}
              type="button"
              aria-label={`Go to ${slide.eyebrow}`}
              aria-pressed={index === activeIndex}
              onClick={() => goTo(index)}
            >
              <span className="premium-hero-dot-label">{slide.eyebrow}</span>
            </button>
          ))}
        </div>

        <button
          className="icon-button premium-hero-arrow"
          type="button"
          aria-label="Next slide"
          onClick={goNext}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="premium-hero-scroll" aria-hidden="true">
        <div className="premium-hero-scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Slide counter */}
      <div className="premium-hero-counter" aria-live="polite">
        {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
}
