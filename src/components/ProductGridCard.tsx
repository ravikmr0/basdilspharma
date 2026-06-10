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
  return (
    <Link to={`/products/${product.slug}`} className="product-grid-card">
      <div className="product-grid-card-inner">
        {/* Product Image with Overlay */}
        <div className="product-grid-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-grid-image"
            loading="lazy"
            onLoad={(e: any) => {
              e.target.parentElement.classList.add('image-loaded');
            }}
            onError={(e: any) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('image-error');
            }}
          />
          <div className="product-grid-image-overlay" />
          <div className="product-grid-image-fallback" style={{ '--product-color': product.color } as React.CSSProperties}>
            <i className={`fa-solid ${product.icon}`} />
          </div>
        </div>

        {/* Content */}
        <div className="product-grid-content">
          <h3 className="product-grid-title">{product.name}</h3>
          <p className="product-grid-display">{product.displayName}</p>
          <p className="product-grid-description">{product.shortDescription}</p>

          {/* Meta Info */}
          <div className="product-grid-meta">
            <span className="meta-badge">
              <i className="fa-solid fa-vial" />
              {product.dosageForm}
            </span>
            <span className="meta-badge">
              <i className="fa-solid fa-box" />
              {product.packSize}
            </span>
          </div>

          {/* Category Badge */}
          <span className="product-grid-category">
            {formatTag(product.therapeuticTags[0])}
          </span>
        </div>

        {/* Arrow Indicator */}
        <div className="product-grid-arrow">
          <i className="fa-solid fa-arrow-right" />
        </div>
      </div>
    </Link>
  );
}
