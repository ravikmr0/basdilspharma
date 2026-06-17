import { Link } from 'react-router-dom';
import type { Product } from '../data/catalog';

type ProductCardProps = {
  product: Product;
};

function formatTag(tag: string) {
  return tag
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

export function ProductCard({ product }: ProductCardProps) {
  const ingredientPreview = product.ingredients.slice(0, 3).join(', ');
  const extraIngredients = product.ingredients.length - 3;
  const highlightedBenefits = product.benefits.slice(0, 3);

  return (
    <article
      className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
      data-category={product.categoryTags.join(' ')}
      data-dosage={product.dosageTags.join(' ')}
      data-therapeutic={product.therapeuticTags.join(' ')}
    >
      {/* Header with Category & Icon */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 px-6 py-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
              {product.categoryLabel}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">
              {product.dosageForm}
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <i className="fa-solid fa-bottle-droplet text-lg" />
          </div>
        </div>

        <div>
          <p className="text-lg font-bold text-gray-900">{product.name}</p>
          <p className="text-sm text-gray-600 font-medium">{product.packSize}</p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-grow space-y-4">
        <div>
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
            {formatTag(product.therapeuticTags[0])}
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">{product.displayName}</h3>
          <p className="text-sm text-gray-600">{product.shortDescription}</p>
        </div>

        <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">{product.overview}</p>

        {/* Product Meta Info */}
        <div className="flex flex-wrap gap-3 py-4 border-y border-gray-200">
          <span className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
            <i className="fa-solid fa-vial text-primary-600" />
            {product.dosageForm}
          </span>
          <span className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
            <i className="fa-solid fa-leaf text-green-600" />
            {formatTag(product.therapeuticTags[0])}
          </span>
          <span className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
            <i className="fa-solid fa-box text-blue-600" />
            {product.packSize}
          </span>
        </div>

        {/* Key Ingredients */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            <i className="fa-solid fa-flask text-primary-600 mr-2" />
            Key Ingredients
          </p>
          <p className="text-sm text-gray-600">
            {ingredientPreview}
            {extraIngredients > 0 && (
              <span className="text-primary-600 font-medium"> +{extraIngredients} more</span>
            )}
          </p>
        </div>

        {/* Key Benefits */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            <i className="fa-solid fa-star text-primary-600 mr-2" />
            Key Benefits
          </p>
          <ul className="space-y-1.5">
            {highlightedBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                <i className="fa-solid fa-check-circle text-green-500 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-3">
        <Link 
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          to={`/products/${product.slug}`}
        >
          View Details
          <i className="fa-solid fa-arrow-right" />
        </Link>
        <Link 
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-all duration-300 text-sm"
          to="/contact"
        >
          <i className="fa-solid fa-envelope" />
          Enquire Now
        </Link>
      </div>
    </article>
  );
}
