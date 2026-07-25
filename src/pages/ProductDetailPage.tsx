import { Link } from 'react-router-dom';
import type { Product } from '../data/catalog';

type ProductDetailPageProps = {
  product: Product;
};

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">{product.categoryLabel}</p>
            <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6">{product.displayName}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{product.overview}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="px-8 py-4 bg-primary-800 hover:bg-primary-950 text-white font-semibold rounded-lg transition-all duration-300 text-center" to="/contact">
                Enquire Now
              </Link>
              <Link className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-all duration-300 text-center" to="/products">
                Back to Products
              </Link>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-lg border border-primary-100 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-bold font-display text-gray-900 mb-2">Dosage</h4>
                <p className="text-gray-600">{product.dosage}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-display text-gray-900 mb-2">Pack Size</h4>
                <p className="text-gray-600">{product.packSize}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold font-display text-gray-900 mb-2">Category</h4>
                <p className="text-gray-600">{product.categoryLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="p-8 bg-white rounded-lg border border-primary-100 hover:shadow-card transition-all duration-300 animate-fade-in">
              <h4 className="text-xl font-bold font-display text-gray-900 mb-4">{product.ingredientsLabel}</h4>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-check-circle text-primary-600" /> {ingredient}
                  </li>
                ))}
              </ul>
            </article>
            <article className="p-8 bg-white rounded-lg border border-primary-100 hover:shadow-card transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-xl font-bold font-display text-gray-900 mb-4">Benefits</h4>
              <ul className="space-y-2">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-gray-600">
                    <i className="fa-solid fa-check-circle text-secondary-500" /> {benefit}
                  </li>
                ))}
              </ul>
            </article>
            <article className="p-8 bg-white rounded-lg border border-primary-100 hover:shadow-card transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl font-bold font-display text-gray-900 mb-4">Product Overview</h4>
              <p className="text-gray-600 leading-relaxed">{product.overview}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
