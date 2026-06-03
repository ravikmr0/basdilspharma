import { Link } from 'react-router-dom';
import type { Product } from '../data/catalog';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="product-card reveal"
      data-category={product.categoryTags.join(' ')}
      data-dosage={product.dosageTags.join(' ')}
      data-therapeutic={product.therapeuticTags.join(' ')}
    >
      <div className="pack-shot">
        <span>{product.name}</span>
      </div>
      <h3>{product.displayName}</h3>
      <p className="muted">{product.shortDescription}</p>
      <ul className="product-meta">
        <li>{product.categoryLabel}</li>
        <li>{product.dosageForm}</li>
        <li>{product.therapeuticTags[0].replace('-', ' ')}</li>
      </ul>
      <Link className="link-button" to={`/products/${product.slug}`}>
        View Details
      </Link>
    </article>
  );
}
