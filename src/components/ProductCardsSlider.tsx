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
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/407107164/DP/YU/QH/38043662/bonsorb-d3-vitamin-d3-oral-solution-60000-iu-nano-shots.jpg',
      color: '#d62828'
    },
    {
      name: 'BASIFOL',
      category: 'Vitamin & Mineral Support',
      description: 'Premium folate, DHA, and B12 nutrition support.',
      image: 'https://hands-group.com/wp-content/uploads/2023/03/Bacifol-Syrup-200ml.jpg',
      color: '#16a34a'
    },
    {
      name: 'TENDODIL-FORTE',
      category: 'Joint & Mobility',
      description: 'Joint support formula for mobility and musculoskeletal wellness.',
      image: 'https://images.apollo247.in/pub/media/catalog/product/T/E/TEN0260_1_1.jpg',
      color: '#0d5cab'
    },
    {
      name: 'BASDIL-LIV DS',
      category: 'Liver & Digestive',
      description: 'Liver tonic with enzyme support.',
      image: 'https://m.media-amazon.com/images/I/71wY-VGlEOL._AC_UF350,350_QL80_.jpg',
      color: '#7c3aed'
    },
    {
      name: 'MENSORIS',
      category: 'Women\'s Healthcare',
      description: 'Ayurvedic uterine tonic.',
      image: 'https://cdn.pixelbin.io/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/original/M5ubCGYO4u-ldd_bioscience_mensoral_syrup_450_ml_0_0.jpg',
      color: '#f97316'
    },
    {
      name: 'BACITROL-PLUS',
      category: 'Bone & Calcium',
      description: 'Bone health and calcium metabolism support.',
      image: 'https://m.media-amazon.com/images/I/71xjWCL3BML._AC_UF1000,1000_QL80_.jpg',
      color: '#06b6d4'
    }
  ];

  return (
    <div className="w-full">
      {/* Carousel Container with Side Controls */}
      <div className="flex items-center justify-center gap-4 max-w-7xl mx-auto px-4">
        {/* Left Arrow Button */}
        <button
          className="group flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110"
          type="button"
          aria-label="Previous products"
          onClick={goPrev}
        >
          <i className="fa-solid fa-chevron-left group-hover:scale-125 transition-transform text-xl" />
        </button>

        {/* Carousel Track */}
        <div 
          className="flex-grow overflow-hidden rounded-2xl"
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-5 transition-transform duration-500 ease-out">
            {showcaseProducts.map((product, idx) => (
              <article
                key={idx}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 h-80 rounded-2xl overflow-hidden group cursor-pointer relative shadow-lg hover:shadow-2xl transition-all duration-300 product-showcase-card"
                style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent group-hover:from-gray-900/98 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-xs font-semibold text-primary-300 mb-2 uppercase tracking-wider">{product.category}</p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300 leading-tight">{product.name}</h3>
                  <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">{product.description}</p>
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(90deg, ${product.color}, ${product.color}00)` }} />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          className="group flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110"
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
                ? 'w-10 h-3 bg-primary-600'
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
