import { useEffect, useRef, useState } from 'react';
import type { Product } from '../data/catalog';

type ProductCardsSliderProps = {
  products: Product[];
};

export function ProductCardsSlider({ products }: ProductCardsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.ceil(products.length / 3));
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, products.length]);

  // Scroll to active index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.product-showcase-card')?.clientWidth || 0;
      const gap = 20;
      scrollContainerRef.current.scrollTo({
        left: activeIndex * (cardWidth + gap) * 3,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % Math.ceil(products.length / 3));
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3));

  const showcaseProducts = [
    {
      name: 'BASOFER-D3',
      category: 'Iron & Hematinic Support',
      description: 'Iron and nutritional support for healthy hemoglobin levels.',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      color: '#d62828'
    },
    {
      name: 'BASIFOL',
      category: 'Vitamin & Mineral Support',
      description: 'Premium folate, DHA, and B12 nutrition support.',
      image: 'https://images.pexels.com/photos/5945683/pexels-photo-5945683.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      color: '#16a34a'
    },
    {
      name: 'TENDODIL-FORTE',
      category: 'Joint & Mobility',
      description: 'Joint support formula for mobility and musculoskeletal wellness.',
      image: 'https://images.pexels.com/photos/4325622/pexels-photo-4325622.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      color: '#0d5cab'
    },
    {
      name: 'BASDIL-LIV DS',
      category: 'Liver & Digestive',
      description: 'Liver tonic with enzyme support.',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      color: '#7c3aed'
    },
    {
      name: 'MENSORIS',
      category: 'Women\'s Healthcare',
      description: 'Ayurvedic uterine tonic.',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      color: '#f97316'
    },
    {
      name: 'BACITROL-PLUS',
      category: 'Bone & Calcium',
      description: 'Bone health and calcium metabolism support.',
      image: 'https://images.pexels.com/photos/3735857/pexels-photo-3735857.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      color: '#06b6d4'
    }
  ];

  return (
    <div className="product-showcase-container">
      {/* Carousel Track */}
      <div 
        className="product-showcase-track"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {showcaseProducts.map((product, idx) => (
          <article
            key={idx}
            className="product-showcase-card reveal"
            style={{ 
              '--accent-color': product.color,
              backgroundImage: `url(${product.image})`
            } as React.CSSProperties}
          >
            <div className="product-card-overlay" />
            <div className="product-card-content">
              <p className="product-card-category">{product.category}</p>
              <h3 className="product-card-name">{product.name}</h3>
              <p className="product-card-desc">{product.description}</p>
              <div className="product-card-footer">
                <div className="product-card-accent" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="product-showcase-nav">
        <button
          className="product-nav-arrow"
          type="button"
          aria-label="Previous products"
          onClick={goPrev}
        >
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="product-showcase-dots">
          {Array.from({ length: Math.ceil(products.length / 3) }).map((_, idx) => (
            <button
              key={idx}
              className={`product-dot ${idx === activeIndex ? 'is-active' : ''}`}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              aria-pressed={idx === activeIndex}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        <button
          className="product-nav-arrow"
          type="button"
          aria-label="Next products"
          onClick={goNext}
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
