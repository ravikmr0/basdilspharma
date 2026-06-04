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
      className="hero-slider"
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
      <div className="hero-slider-shell glass-panel" style={sliderStyle}>
        <div className="hero-slider-top">
          <div className="hero-card-badge">
            <i className="fa-solid fa-shield-heart" /> Product Showcase
          </div>
          <p className="hero-slider-count">
            {String(activeIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </p>
        </div>

        <div className="lab-orbit hero-slider-orbit">
          <span />
          <span />
          <span />
          <span />
        </div>

        <article className="hero-slider-detail glass-panel" aria-live="polite">
          <p className="hero-slider-kicker">{activeProduct.categoryLabel}</p>
          <h3>{activeProduct.displayName}</h3>
          <p>{activeProduct.overview}</p>
          <div className="hero-slider-meta">
            <span>{activeProduct.packSize}</span>
            <span>{formatTag(activeProduct.therapeuticTags[0])}</span>
          </div>
          <div className="hero-slider-actions">
            <Link className="button button-primary" to={`/products/${activeProduct.slug}`}>
              View Details
            </Link>
            <Link className="button button-secondary" to="/contact">
              Enquire Now
            </Link>
          </div>
        </article>

        <div className="hero-pack hero-slider-pack">
          <span className="hero-slider-form">{activeProduct.dosageForm}</span>
          <div className="pack-label">{activeProduct.name}</div>
          <div className="pack-sub">{activeProduct.shortDescription}</div>
          <ul className="hero-slider-highlights">
            <li>{activeProduct.benefits[0]}</li>
            <li>{activeProduct.benefits[1] ?? activeProduct.packSize}</li>
          </ul>
        </div>

        <div className="hero-slider-preview-rail">
          {previewProducts.map(({ index, product }, previewPosition) => (
            <button
              key={product.slug}
              className={`hero-slider-preview preview-${previewPosition + 1}`}
              type="button"
              aria-label={`Show ${product.displayName}`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{product.name}</strong>
              <small>{product.dosageForm}</small>
            </button>
          ))}
        </div>

        <div className="hero-slider-nav">
          <button
            className="icon-button hero-slider-arrow"
            type="button"
            aria-label="Previous product"
            onClick={() => shiftSlide(-1)}
          >
            <i className="fa-solid fa-arrow-left" />
          </button>
          <div className="hero-slider-dots">
            {products.map((product, index) => (
              <button
                key={product.slug}
                className={`hero-slider-dot ${index === activeIndex ? 'is-active' : ''}`}
                type="button"
                aria-label={`Go to ${product.displayName}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button
            className="icon-button hero-slider-arrow"
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
