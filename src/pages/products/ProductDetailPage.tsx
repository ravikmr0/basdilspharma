import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/catalog';

function formatTag(tag: string) {
  return tag
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p: any) => p.slug === slug);

  if (!product) {
    return (
      <section className="section-shell">
        <div className="container">
          <div className="empty-products glass-panel reveal">
            <p className="eyebrow">Product Not Found</p>
            <h3>We couldn't find the product you're looking for.</h3>
            <p>This product may have been discontinued or the URL is incorrect.</p>
            <Link className="button button-primary" to="/products">
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentIndex = products.findIndex((p: any) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Section with Product Header */}
      <section className="section-shell product-detail-hero">
        <div className="container product-detail-header">
          <div className="breadcrumb-nav">
            <Link to="/products">Products</Link>
            <span>/</span>
            <span className="current">{product.name}</span>
          </div>

          <div className="product-detail-hero-content">
            <div className="product-detail-icon-large" style={{ '--product-color': product.color } as React.CSSProperties}>
              <i className={`fa-solid ${product.icon}`} />
            </div>

            <div className="product-detail-hero-text">
              <p className="eyebrow">{formatTag(product.therapeuticTags[0])}</p>
              <h1>{product.displayName}</h1>
              <p className="product-detail-kicker">{product.categoryLabel}</p>
              
              <div className="product-detail-quick-info">
                <div className="quick-info-item">
                  <i className="fa-solid fa-vial" />
                  <span>{product.dosageForm}</span>
                </div>
                <div className="quick-info-item">
                  <i className="fa-solid fa-box" />
                  <span>{product.packSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-shell">
        <div className="container product-detail-layout">
          {/* Left Column - Main Content */}
          <div className="product-detail-main">
            {/* Overview */}
            <div className="detail-section glass-panel reveal">
              <h2>Overview</h2>
              <p className="detail-lead">{product.overview}</p>
              {product.fullDescription && (
                <p>{product.fullDescription}</p>
              )}
            </div>

            {/* Short Description */}
            <div className="detail-section glass-panel reveal">
              <p className="detail-highlight">{product.shortDescription}</p>
            </div>

            {/* Ingredients Section */}
            <div className="detail-section glass-panel reveal">
              <h3>{product.ingredientsLabel}</h3>
              <div className="ingredients-grid">
                {product.ingredients.map((ingredient: string, index: number) => (
                  <div key={index} className="ingredient-item">
                    <i className="fa-solid fa-flask" />
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="detail-section glass-panel reveal">
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                {product.benefits.map((benefit: string, index: number) => (
                  <li key={index}>
                    <i className="fa-solid fa-check-circle" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="product-detail-sidebar">
            {/* Key Information Card */}
            <div className="detail-card glass-panel reveal">
              <h4>Product Information</h4>
              
              <div className="info-row">
                <label>Category</label>
                <span>{product.categoryLabel}</span>
              </div>

              <div className="info-row">
                <label>Dosage Form</label>
                <span>{product.dosageForm}</span>
              </div>

              <div className="info-row">
                <label>Pack Size</label>
                <span>{product.packSize}</span>
              </div>

              <div className="info-row">
                <label>Therapeutic Area</label>
                <span>{formatTag(product.therapeuticTags[0])}</span>
              </div>

              <div className="info-row">
                <label>Dosage</label>
                <span>{product.dosage}</span>
              </div>
            </div>

            {/* CTA Card */}
            <div className="detail-card glass-panel reveal cta-card">
              <h4>Interested in this product?</h4>
              <p>Get more information or place an enquiry with our team.</p>
              
              <div className="cta-buttons">
                <a href="tel:+919931691959" className="button button-primary full-width">
                  <i className="fa-solid fa-phone" />
                  Call Us
                </a>
                <Link to="/contact" className="button button-secondary full-width">
                  <i className="fa-solid fa-envelope" />
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="detail-card glass-panel reveal">
              <h4>Product Tags</h4>
              <div className="tags-container">
                {product.categoryTags.map((tag: string) => (
                  <span key={tag} className="tag">
                    {formatTag(tag)}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Navigation Section */}
      {(prevProduct || nextProduct) && (
        <section className="section-shell product-navigation">
          <div className="container">
            <h3 className="eyebrow">Related Products</h3>
            <div className="product-nav-grid">
              {prevProduct && (
                <Link to={`/products/${prevProduct.slug}`} className="product-nav-card prev">
                  <i className="fa-solid fa-chevron-left" />
                  <span className="nav-label">Previous</span>
                  <span className="nav-product">{prevProduct.name}</span>
                </Link>
              )}
              
              <Link to="/products" className="product-nav-card center">
                <i className="fa-solid fa-th" />
                <span className="nav-label">View All</span>
                <span className="nav-product">Product Catalogue</span>
              </Link>

              {nextProduct && (
                <Link to={`/products/${nextProduct.slug}`} className="product-nav-card next">
                  <span className="nav-label">Next</span>
                  <span className="nav-product">{nextProduct.name}</span>
                  <i className="fa-solid fa-chevron-right" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
