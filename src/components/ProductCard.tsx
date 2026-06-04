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
      className="product-card reveal"
      data-category={product.categoryTags.join(' ')}
      data-dosage={product.dosageTags.join(' ')}
      data-therapeutic={product.therapeuticTags.join(' ')}
    >
      <div className="product-card-top">
        <p className="product-card-category">{product.categoryLabel}</p>
        <span className="product-card-form">{product.dosageForm}</span>
      </div>

      <div className="pack-shot">
        <span>{product.name}</span>
        <small>{product.packSize}</small>
      </div>

      <div className="product-card-body">
        <p className="product-card-kicker">{formatTag(product.therapeuticTags[0])}</p>
        <h3>{product.displayName}</h3>
        <p className="muted">{product.shortDescription}</p>
        <p className="product-card-overview">{product.overview}</p>

        <ul className="product-meta">
          <li>{product.dosageForm}</li>
          <li>{formatTag(product.therapeuticTags[0])}</li>
          <li>{product.packSize}</li>
        </ul>

        <div className="product-card-detail">
          <strong>{product.ingredientsLabel}</strong>
          <p>
            {ingredientPreview}
            {extraIngredients > 0 ? ` +${extraIngredients} more` : ''}
          </p>
        </div>

        <div className="product-card-detail">
          <strong>Key Benefits</strong>
          <ul className="product-highlights">
            {highlightedBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="product-card-actions">
        <Link className="link-button" to={`/products/${product.slug}`}>
          View Details
        </Link>
        <Link className="button button-secondary product-card-enquiry" to="/contact">
          Enquire Now
        </Link>
      </div>
    </article>
  );
}
