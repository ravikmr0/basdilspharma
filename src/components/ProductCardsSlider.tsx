import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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

  const showcaseProducts = products.slice(0, 6);

  if (!showcaseProducts.length) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Carousel Container with Side Controls */}
      <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto px-4">
        {/* Left Arrow Button */}
        <button
          className="group flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-900 hover:bg-primary-950 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-glow border border-secondary-300/40"
          type="button"
          aria-label="Previous products"
          onClick={goPrev}
        >
          <i className="fa-solid fa-chevron-left group-hover:scale-125 transition-transform text-xl" />
        </button>

        {/* Carousel Track */}
        <div 
          className="flex-grow overflow-hidden rounded-lg"
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-5 transition-transform duration-500 ease-out">
            {showcaseProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 h-[23rem] rounded-lg overflow-hidden group cursor-pointer relative shadow-card hover:shadow-card-hover transition-all duration-300 product-showcase-card bg-white border border-primary-100"
              >
                <div className="product-image-frame h-56 rounded-none border-0 border-b border-primary-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image-fit group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = '/Images/logo.png';
                    }}
                  />
                </div>

                <div className="relative h-36 p-5 bg-[linear-gradient(135deg,#0d2027_0%,#224951_70%,#2e1d0e_100%)] text-white">
                  <p className="text-xs font-semibold text-secondary-200 mb-2 uppercase tracking-wider line-clamp-1">{product.categoryLabel}</p>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary-200 transition-colors duration-300 leading-tight line-clamp-1">{product.name}</h3>
                  <p className="text-white/85 text-sm leading-relaxed line-clamp-2">{product.shortDescription}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(90deg, ${product.color}, ${product.color}00)` }} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          className="group flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-900 hover:bg-primary-950 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-glow border border-secondary-300/40"
          type="button"
          aria-label="Next products"
          onClick={goNext}
        >
          <i className="fa-solid fa-chevron-right group-hover:scale-125 transition-transform text-xl" />
        </button>
      </div>

      {/* Dot Indicators - Centered Below */}
      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: Math.ceil(showcaseProducts.length / 3) }).map((_, idx) => (
          <button
            key={idx}
            className={`transition-all duration-300 rounded-full ${
              idx === activeIndex
                ? 'w-10 h-3 bg-primary-900'
                : 'w-3 h-3 bg-gray-300 hover:bg-primary-400'
            }`}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            aria-pressed={idx === activeIndex}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
