import { Link } from 'react-router-dom';
import type { Product } from '../data/catalog';

type ProductDetailPageProps = {
  product: Product;
};

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  return (
    <>
      <section className="section-shell">
        <div className="container split-layout">
          <div className="section-heading reveal">
            <p className="eyebrow">{product.categoryLabel}</p>
            <h1>{product.displayName}</h1>
            <p className="lead">{product.overview}</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Enquire Now
              </Link>
              <Link className="button button-secondary" to="/products">
                Back to Products
              </Link>
            </div>
          </div>
          <div className="about-panel glass-panel reveal">
            <div className="mission-grid">
              <article>
                <h4>Dosage</h4>
                <p>{product.dosage}</p>
              </article>
              <article>
                <h4>Pack Size</h4>
                <p>{product.packSize}</p>
              </article>
              <article>
                <h4>Category</h4>
                <p>{product.categoryLabel}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="feature-grid">
            <article className="info-card reveal">
              <h4>{product.ingredientsLabel}</h4>
              <ul className="detail-list">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </article>
            <article className="info-card reveal">
              <h4>Benefits</h4>
              <ul className="detail-list">
                {product.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
            <article className="info-card reveal">
              <h4>Product Overview</h4>
              <p>{product.overview}</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
