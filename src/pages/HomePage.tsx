import { Link } from 'react-router-dom';
import { PremiumHeroSlider } from '../components/PremiumHeroSlider';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCardsSlider } from '../components/ProductCardsSlider';
import { products } from '../data/catalog';

const testimonials = [
  {
    quote: 'Their quality controls and professional approach make them a dependable partner for our healthcare network.',
    name: 'Amit Sharma',
    role: 'Regional Distribution Lead'
  },
  {
    quote: 'The product portfolio feels thoughtfully curated, and every interaction reflects strong credibility and care.',
    name: 'Priya Menon',
    role: 'Healthcare Franchise Partner'
  },
  {
    quote: 'A premium brand experience backed by genuine product quality and responsive support from the team.',
    name: 'Rahul Verma',
    role: 'Private Label Client'
  }
];

export function HomePage() {
  return (
    <>
      <PremiumHeroSlider />

      <section className="section-shell" id="products">
        <div className="container">
          <SectionHeading
            eyebrow="Therapeutic Segments"
            title="Products across key healthcare categories"
            description="Explore BASDILS offerings across women's healthcare, liver care, nutraceuticals, iron and hematinics, bone health, joint care, Ayurvedic healthcare, and general wellness."
          />
          <div className="toolbar glass-panel reveal">
            <div className="filter-block">
              <p className="eyebrow">Browse the catalog</p>
              <p>Go to the dedicated products page for search and filters.</p>
            </div>
            <div className="cta-actions">
              <Link className="button button-primary" to="/products">
                Browse Products
              </Link>
              <Link className="button button-secondary" to="/services">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="featured-products">
        <div className="container">
          <SectionHeading
            eyebrow="Quality Commitment"
            title="Quality is the foundation of BASDILS Pharmaceuticals"
            description="Our products are manufactured in facilities that follow WHO-GMP standards, ISO certified processes, stringent quality control measures, advanced manufacturing practices, and regulatory compliance standards."
          />
          <ProductCardsSlider products={products} />
        </div>
      </section>

      <section className="section-shell" id="why-choose">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose BASDILS"
            title="Partner with a company built on quality and trust"
            description="A wide product portfolio, ethical practices, and customer-focused execution keep the brand grounded in long-term value."
          />
          <div className="feature-grid">
            {[
              ['Premium Quality Products', 'fa-award'],
              ['Scientific Formulations', 'fa-flask'],
              ['Regulatory Compliance', 'fa-scale-balanced'],
              ['Wide Product Portfolio', 'fa-cubes'],
              ['Ethical Business Practices', 'fa-people-arrows'],
              ['Customer Satisfaction', 'fa-heart']
            ].map(([title, icon]) => (
              <article className="feature-card reveal premium-card" key={title as string}>
                <i className={`fa-solid ${icon}`} />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Complete commercial support for brand growth"
            description="BASDILS supports partners with franchise opportunities, manufacturing execution, development support, and packaging-led brand building."
          />
          <div className="service-grid">
            {[
              ['PCD Pharma Franchise', 'fa-store'],
              ['Third Party Manufacturing', 'fa-industry'],
              ['Contract Manufacturing', 'fa-handshake'],
              ['Private Label Manufacturing', 'fa-boxes-stacked'],
              ['Product Development', 'fa-diagram-project'],
              ['Marketing Support', 'fa-bullhorn'],
              ['Distribution Network', 'fa-route']
            ].map(([title, icon]) => (
              <article className="service-card reveal premium-card" key={title as string}>
                <i className={`fa-solid ${icon}`} />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="testimonials">
        <div className="container">
          <SectionHeading
            eyebrow="Client Experience"
            title="What partners value most about BASDILS"
            description="A premium customer experience is built on transparency, responsiveness, and product credibility."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card reveal" key={testimonial.name}>
                <div className="testimonial-rating" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i key={`${testimonial.name}-${index}`} className="fa-solid fa-star" />
                  ))}
                </div>
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container cta-banner glass-panel reveal premium-banner">
          <div>
            <p className="eyebrow">Contact Information</p>
            <h2>Let's build healthier lives together</h2>
            <p>Innovation • Quality • Trust • Care</p>
          </div>
          <div className="cta-actions">
            <Link className="button button-primary" to="/contact">
              Contact BASDILS
            </Link>
            <Link className="button button-secondary" to="/products">
              Download Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
