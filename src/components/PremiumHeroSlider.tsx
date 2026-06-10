import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  buttons: { label: string; to: string; variant: 'primary' | 'secondary' }[];
};

/**
 * Premium pharmaceutical industry background images
 * Slide 1: Modern laboratory research
 * Slide 2: Manufacturing & production
 * Slide 3: Healthcare professionals
 * Slide 4: Pharmaceutical products
 * Slide 5: Biotechnology innovation
 */
const slides: Slide[] = [
  {
    id: 'research',
    eyebrow: 'Scientific Innovation',
    title: 'Healthcare Excellence Through Quality & Innovation',
    subtitle: 'Scientific Formulations. Trusted Manufacturing. Quality Care.',
    description:
      'Delivering pharmaceutical, nutraceutical, and Ayurvedic solutions backed by scientific expertise, rigorous quality standards, and a commitment to advancing healthcare.',
    image:
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
    buttons: [
      { label: 'View Products', to: '/products', variant: 'primary' },
      { label: 'Download Catalogue', to: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'manufacturing',
    eyebrow: 'Manufacturing Excellence',
    title: 'Advanced Manufacturing & Quality Excellence',
    subtitle: 'Trusted Pharmaceutical, Nutraceutical & Ayurvedic Excellence',
    description:
      'Advanced manufacturing facilities with automated production lines, rigorous quality control systems, and ISO-certified processes ensuring pharmaceutical excellence in every product.',
    image:
      'https://images.pexels.com/photos/3735857/pexels-photo-3735857.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
    buttons: [
      { label: 'Learn More', to: '/manufacturing', variant: 'primary' },
      { label: 'Certifications', to: '/about', variant: 'secondary' },
    ],
  },
  {
    id: 'healthcare-professionals',
    eyebrow: 'Medical Excellence',
    title: 'Trusted by Healthcare Professionals Nationwide',
    subtitle: 'Innovation in Pharmaceutical Healthcare',
    description:
      'Partnering with healthcare professionals across India to deliver innovative pharmaceutical solutions trusted for quality, efficacy, and safety.',
    image:
      'https://images.pexels.com/photos/7974355/pexels-photo-7974355.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
    buttons: [
      { label: 'Explore Products', to: '/products', variant: 'primary' },
      { label: 'Contact Sales', to: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'products',
    eyebrow: 'Product Portfolio',
    title: 'Quality Pharmaceuticals & Wellness Solutions',
    subtitle: 'Pharmaceutical, Nutraceutical & Ayurvedic Solutions',
    description:
      'Formulated and manufactured with pharmaceutical precision. Capsules, tablets, syrups, and supplements backed by scientific research and quality excellence.',
    image:
      'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
    buttons: [
      { label: 'View All Products', to: '/products', variant: 'primary' },
      { label: 'Request Samples', to: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'biotechnology',
    eyebrow: 'Future of Medicine',
    title: 'Pioneering Biotech & Scientific Innovation',
    subtitle: 'Leading Scientific Research & Development',
    description:
      'Advanced R&D, scientific research, and biotechnology innovation driving breakthrough pharmaceutical treatments and wellness solutions for tomorrow\'s healthcare.',
    image:
      'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
    buttons: [
      { label: 'About Our R&D', to: '/about', variant: 'primary' },
      { label: 'Innovation Hub', to: '/contact', variant: 'secondary' },
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

  // Autoplay: 4-5 second interval
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    autoRef.current = setInterval(() => {
      if (!pausedRef.current && document.visibilityState === 'visible') {
        goNext();
      }
    }, 4500);

    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [goNext]);

  // Preload adjacent images for performance
  useEffect(() => {
    const prev = (activeIndex - 1 + slides.length) % slides.length;
    const next = (activeIndex + 1) % slides.length;
    [prev, next].forEach((i) => {
      const img = new Image();
      img.src = slides[i].image;
    });
  }, [activeIndex]);

  // Touch swipe support for mobile and tablet
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

  // Keyboard accessibility
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
      aria-label="Premium hero carousel - Pharmaceutical healthcare solutions"
      aria-roledescription="carousel"
    >
      {/* Background image layers with smooth fade transition */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`ph-bg${i === activeIndex ? ' is-active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={i !== activeIndex}
        />
      ))}

      {/* Premium dark-blue gradient overlay */}
      <div className="ph-overlay" />

      {/* Content section */}
      <div className="container ph-inner">
        <div className="ph-text" key={slide.id} data-dir={animDirection}>
          {/* Section eyebrow label */}
          <p className="ph-eyebrow">{slide.eyebrow}</p>

          {/* Main heading */}
          <h1 className="ph-title">{slide.title}</h1>

          {/* Optional subtitle */}
          {slide.subtitle && <p className="ph-subtitle">{slide.subtitle}</p>}

          {/* Description */}
          <p className="ph-desc">{slide.description}</p>

          {/* CTA buttons with premium styling */}
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
      </div>

      {/* Navigation controls */}
      <nav className="ph-nav" aria-label="Slide navigation">
        {/* Left arrow control */}
        <button
          className="ph-arrow"
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          title="Previous slide (or press left arrow key)"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        {/* Pagination dots */}
        <div className="ph-dots">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`ph-dot${i === activeIndex ? ' is-active' : ''}`}
              type="button"
              aria-label={`Go to ${s.eyebrow} slide`}
              aria-pressed={i === activeIndex}
              onClick={() => goTo(i)}
              title={s.eyebrow}
            />
          ))}
        </div>

        {/* Right arrow control */}
        <button
          className="ph-arrow"
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          title="Next slide (or press right arrow key)"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </nav>

      {/* Scroll indicator */}
      <div className="ph-scroll" aria-hidden="true">
        <div className="ph-scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Slide counter */}
      <div className="ph-counter" aria-live="polite" aria-label="Slide counter">
        {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
