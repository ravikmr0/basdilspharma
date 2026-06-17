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
    title: 'Healthcare Excellence Through Quality',
    subtitle: 'Scientific Formulations. Trusted Manufacturing. Quality.',
    description:
      'Delivering pharmaceutical, nutraceutical, and Ayurvedic solutions backed by scientific expertise, rigorous quality standards, and a commitment to advancing healthcare.',
    image:
      '/hero_section/scientific_innovation.png',
    buttons: [
      { label: 'View Products', to: '/products', variant: 'primary' },
      { label: 'Download Catalogue', to: '/contact', variant: 'secondary' },
    ],
  },
  {
    id: 'manufacturing',
    eyebrow: 'Manufacturing Excellence',
    title: 'Advanced Manufacturing & Quality Excellence',
    subtitle: 'Trusted Pharmaceutical, Nutraceutical & Ayurvedic.',
    description:
      'Advanced manufacturing facilities with automated production lines, rigorous quality control systems, and ISO-certified processes ensuring pharmaceutical excellence in every product.',
    image:
      '/hero_section/manufacturing_process.png',
    buttons: [
      { label: 'Learn More', to: '/manufacturing', variant: 'primary' },
      { label: 'Certifications', to: '/about', variant: 'secondary' },
    ],
  },
  {
    id: 'healthcare-professionals',
    eyebrow: 'Medical Excellence',
    title: 'Trusted by Healthcare Professionals.',
    subtitle: 'Innovation in Pharmaceutical Healthcare',
    description:
      'Partnering with healthcare professionals across India to deliver innovative pharmaceutical solutions trusted for quality, efficacy.',
    image:
      '/hero_section/medical_excellence.png',
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
      '/hero_section/product_portfolio.png',
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
      '/hero_section/future_of_medicine.png',
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
      className="relative w-full h-screen overflow-hidden"
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
          className={`absolute inset-0 transition-opacity duration-1000 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden={i !== activeIndex}
        />
      ))}

      {/* Premium dark-blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-blue-900/60" />

      {/* Content section */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div 
          key={slide.id} 
          data-dir={animDirection}
          className={`max-w-2xl transition-all duration-700 ${
            animDirection === 1 ? 'animate-slide-up' : 'animate-slide-down'
          }`}
        >
          {/* Section eyebrow label */}
          <p className="text-primary-300 text-sm font-semibold uppercase tracking-wider mb-4 animate-fade-in">{slide.eyebrow}</p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {slide.title}
          </h1>

          {/* Optional subtitle */}
          {slide.subtitle && (
            <p className="text-xl md:text-2xl text-primary-200 mb-6 font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {slide.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {slide.description}
          </p>

          {/* CTA buttons with premium styling */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {slide.buttons.map((btn) => (
              <Link
                key={btn.label}
                className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 inline-block text-center ${
                  btn.variant === 'primary'
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 backdrop-blur-sm'
                }`}
                to={btn.to}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation controls - Centered side navigation */}
      <nav className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 pointer-events-none" aria-label="Slide navigation">
        {/* Left arrow control */}
        <button
          className="group pointer-events-auto w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/40 hover:border-white/70 shadow-lg hover:shadow-xl"
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          title="Previous slide (or press left arrow key)"
        >
          <i className="fa-solid fa-chevron-left text-xl group-hover:scale-110 group-active:scale-95 transition-transform" />
        </button>

        {/* Right arrow control */}
        <button
          className="group pointer-events-auto w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/40 hover:border-white/70 shadow-lg hover:shadow-xl"
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          title="Next slide (or press right arrow key)"
        >
          <i className="fa-solid fa-chevron-right text-xl group-hover:scale-110 group-active:scale-95 transition-transform" />
        </button>
      </nav>

      {/* Pagination dots and scroll indicator - Bottom navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-6">
        {/* Pagination dots */}
        <div className="flex gap-3" aria-label="Slide indicators">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 h-2 bg-primary-400'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              } rounded-full`}
              type="button"
              aria-label={`Go to ${s.eyebrow} slide`}
              aria-pressed={i === activeIndex}
              onClick={() => goTo(i)}
              title={s.eyebrow}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="text-white/60 animate-bounce hidden md:flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-0.5 h-6 bg-gradient-to-b from-white/60 to-transparent" />
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-8 right-8 text-white/80 font-mono text-sm" aria-live="polite" aria-label="Slide counter">
        {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
}
