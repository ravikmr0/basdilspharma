import { Link } from 'react-router-dom';
import type { Product } from '../data/catalog';

type ProductGridCardProps = {
  product: Product;
};

function formatTag(tag: string) {
  return tag
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

export function ProductGridCard({ product }: ProductGridCardProps) {
  const ingredientPreview = product.ingredients.slice(0, 2).join(', ');
  const extraIngredients = product.ingredients.length - 2;
  const highlightedBenefits = product.benefits.slice(0, 2);

  return (
    <article
      className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col"
      data-category={product.categoryTags.join(' ')}
      data-dosage={product.dosageTags.join(' ')}
      data-therapeutic={product.therapeuticTags.join(' ')}
    >
      {/* Product Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/Images/logo.png';
            e.currentTarget.className = 'w-full h-full object-contain bg-white p-4';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Header with Category & Icon */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 px-5 py-5 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="flex gap-2">
            <span className="inline-block px-2 py-0.5 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
              {product.categoryLabel}
            </span>
            <span className="inline-block px-2 py-0.5 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full">
              {product.dosageForm}
            </span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-primary-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <i className="fa-solid fa-bottle-droplet text-sm" />
          </div>
        </div>

        <div>
          <p className="text-base font-bold text-gray-900">{product.name}</p>
          <p className="text-xs text-gray-600 font-medium">{product.packSize}</p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-grow space-y-3">
        <div>
          <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-1">
            {formatTag(product.therapeuticTags[0])}
          </p>
          <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">{product.displayName}</h3>
          <p className="text-xs text-gray-600">{product.shortDescription}</p>
        </div>

        <p className="text-xs text-gray-700 leading-relaxed line-clamp-2">{product.overview}</p>

        {/* Product Meta Info */}
        <div className="flex flex-wrap gap-2 py-2 border-y border-gray-200">
          <span className="flex items-center gap-1.5 text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded-lg">
            <i className="fa-solid fa-vial text-primary-600" />
            {product.dosageForm}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded-lg">
            <i className="fa-solid fa-leaf text-green-600" />
            {formatTag(product.therapeuticTags[0])}
          </span>
        </div>

        {/* Key Ingredients */}
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-900">
            <i className="fa-solid fa-flask text-primary-600 mr-1" />
            Ingredients
          </p>
          <p className="text-xs text-gray-600">
            {ingredientPreview}
            {extraIngredients > 0 && (
              <span className="text-primary-600 font-medium"> +{extraIngredients} more</span>
            )}
          </p>
        </div>

        {/* Key Benefits */}
        <div className="space-y-1">
          <p className="text-xs font-semibold text-gray-900">
            <i className="fa-solid fa-star text-primary-600 mr-1" />
            Benefits
          </p>
          <ul className="space-y-1">
            {highlightedBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-1.5 text-xs text-gray-700">
                <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
        <Link
          to={`/product/${product.slug}`}
          className="block w-full text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300 text-sm"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
