import { Link } from 'react-router-dom';
import { ProductGridCard } from '../components/ProductGridCard';
import { SectionHeading } from '../components/SectionHeading';
import { products } from '../data/catalog';

export function ProductsPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="section-shell products-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Healthcare Solutions For Every Need"
            description="BASDILS Pharmaceuticals offers a comprehensive portfolio of nutraceuticals, Ayurvedic medicines, women's healthcare, liver care, iron supplements, bone health, joint care, and general wellness products designed to improve patient outcomes and quality of life."
          />
        </div>
      </section>

      {/* Category Overview Cards */}
      <section className="section-shell categories-section">
        <div className="container">
          <div className="categories-grid glass-panel reveal">
            <article className="category-card">
              <span className="category-icon"><i className="fa-solid fa-person-pregnant" /></span>
              <h4>Women's Healthcare</h4>
              <p>Formulations for reproductive and general wellness support.</p>
            </article>
            <article className="category-card">
              <span className="category-icon"><i className="fa-solid fa-mortar-pestle" /></span>
              <h4>Ayurvedic Products</h4>
              <p>Traditional herbal wellness with a modern quality framework.</p>
            </article>
            <article className="category-card">
              <span className="category-icon"><i className="fa-solid fa-droplet" /></span>
              <h4>Hematinics</h4>
              <p>Iron and nutrition support for daily health needs.</p>
            </article>
            <article className="category-card">
              <span className="category-icon"><i className="fa-solid fa-bone" /></span>
              <h4>Bone & Joint Care</h4>
              <p>Supportive therapies for musculoskeletal wellness.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-shell products-grid-section">
        <div className="container">
          <div className="products-grid-modern">
            {products.map((product) => (
              <ProductGridCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-shell">
        <div className="container cta-banner glass-panel reveal">
          <div className="cta-content">
            <p className="eyebrow">Need more information?</p>
            <h2>Request our complete product catalogue</h2>
            <p>Download our comprehensive product portfolio or speak with our team about your specific requirements.</p>
          </div>
          <div className="cta-actions">
            <Link className="button button-primary" to="/contact">
              <i className="fa-solid fa-download" />
              Download Catalogue
            </Link>
            <Link className="button button-secondary" to="/contact">
              <i className="fa-solid fa-envelope" />
              Request Product List
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
