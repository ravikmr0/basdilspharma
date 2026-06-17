import type { CSSProperties } from 'react';
import { useEffect, useEffectEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/catalog';

type HeroProductSliderProps = {
  products: Product[];
};

const sliderThemes = [
  { primary: '#1e63b2', accent: '#d62828' },
  { primary: '#0f766e', accent: '#f97316' },
  { primary: '#7c3aed', accent: '#0ea5e9' },
  { primary: '#0d5cab', accent: '#16a34a' }
];

function formatTag(tag: string) {
  return tag
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

export function HeroProductSlider({ products }: HeroProductSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProduct = products[activeIndex];
  const theme = sliderThemes[activeIndex % sliderThemes.length];
  const previewCount = Math.min(3, Math.max(products.length - 1, 0));
  const previewProducts = Array.from({ length: previewCount }, (_, offset) => {
    const index = (activeIndex + offset + 1) % products.length;
    return {
      index,
      product: products[index]
    };
  });

  const shiftSlide = useEffectEvent((direction: number) => {
    setActiveIndex((current) => (current + direction + products.length) % products.length);
  });

  useEffect(() => {
    if (products.length < 2 || isPaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const autoplay = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        shiftSlide(1);
      }
    }, 4500);

    return () => window.clearInterval(autoplay);
  }, [isPaused, products.length]);

  if (!activeProduct) {
    return null;
  }

  const sliderStyle = {
    '--slider-primary': theme.primary,
    '--slider-accent': theme.accent
  } as CSSProperties;

  return (
    <div
      className="p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 relative overflow-hidden"
      role="region"
      aria-label="Featured products slider"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-10" style={{ background: theme.primary }}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-10" style={{ background: theme.accent }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm font-semibold">
            <i className="fa-solid fa-shield-heart mr-2" /> Product Showcase
          </div>
          <p className="text-white/60 font-mono text-sm">
            {String(activeIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Product Details */}
          <div aria-live="polite">
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: theme.primary }}>{activeProduct.categoryLabel}</p>
            <h3 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">{activeProduct.displayName}</h3>
            <p className="text-lg text-gray-300 mb-6">{activeProduct.overview}</p>
            
            {/* Meta Information */}
            <div className="flex gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-lg text-white/80 text-sm">{activeProduct.packSize}</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg text-white/80 text-sm">{formatTag(activeProduct.therapeuticTags[0])}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center" style={{ backgroundColor: theme.primary, color: 'white' }} to={`/products/${activeProduct.slug}`}>
                View Details
              </Link>
              <Link className="px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 text-center text-white" style={{ borderColor: theme.accent }} to="/contact">
                Enquire Now
              </Link>
            </div>
          </div>

          {/* Product Information Box */}
          <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">{activeProduct.dosageForm}</p>
            <h4 className="text-2xl font-bold font-display text-white mb-2">{activeProduct.name}</h4>
            <p className="text-gray-300 mb-6 text-sm">{activeProduct.shortDescription}</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <i className="fa-solid fa-check text-green-400" /> {activeProduct.benefits[0]}
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <i className="fa-solid fa-check text-green-400" /> {activeProduct.benefits[1] ?? activeProduct.packSize}
              </li>
            </ul>
          </div>
        </div>

        {/* Preview Rail */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {previewProducts.map(({ index, product }, previewPosition) => (
            <button
              key={product.slug}
              className="flex-shrink-0 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-left transition-all duration-300 min-w-max"
              type="button"
              aria-label={`Show ${product.displayName}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="block text-xs font-mono text-white/60 mb-1">{String(index + 1).padStart(2, '0')}</span>
              <strong className="block text-white font-display">{product.name}</strong>
              <small className="block text-white/60 text-xs">{product.dosageForm}</small>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 flex items-center justify-center"
            type="button"
            aria-label="Previous product"
            onClick={() => shiftSlide(-1)}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {products.map((product, index) => (
              <button
                key={product.slug}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                type="button"
                aria-label={`Go to ${product.displayName}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 flex items-center justify-center"
            type="button"
            aria-label="Next product"
            onClick={() => shiftSlide(1)}
          >
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
