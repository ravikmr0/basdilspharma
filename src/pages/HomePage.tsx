import { Link } from 'react-router-dom';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { HeroProductSlider } from '../components/HeroProductSlider';
import { SectionHeading } from '../components/SectionHeading';
import { products } from '../data/catalog';

export function HomePage() {
  return (
    <>
      <section className="hero section-shell" id="home">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Empowering Healthcare Through Innovation, Quality &amp; Trust</p>
            <h1>Empowering Healthcare Through Innovation, Quality &amp; Trust</h1>
            <p className="lead">
              At <strong>BASDILS PHARMACEUTICALS PVT. LTD.</strong>, we are committed to delivering high-quality pharmaceutical,
              nutraceutical, and Ayurvedic healthcare solutions that improve lives and support better health outcomes.
              With a strong focus on quality, innovation, and customer satisfaction, we strive to make healthcare accessible,
              effective, and reliable across India.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/products">
                Explore Products
              </Link>
              <Link className="button button-secondary" to="/contact">
                Contact Us
              </Link>
            </div>
            <div className="hero-stats">
              <article className="stat-card">
                <strong><AnimatedCounter value={100} /></strong>
                <span>Products</span>
              </article>
              <article className="stat-card">
                <strong><AnimatedCounter value={1} /></strong>
                <span>Nationwide Presence</span>
              </article>
              <article className="stat-card">
                <strong><AnimatedCounter value={12} /></strong>
                <span>WHO-GMP Partners</span>
              </article>
              <article className="stat-card">
                <strong><AnimatedCounter value={98} /></strong>
                <span>Trust Index</span>
              </article>
            </div>
          </div>

          <div className="hero-visual reveal">
            <HeroProductSlider products={products} />
          </div>
        </div>
      </section>

      <section className="logo-band section-tight">
        <div className="container band-row">
          <span>WHO-GMP Manufacturing</span>
          <span>ISO-aligned Systems</span>
          <span>Research-led Formulations</span>
          <span>Ethical Business Practices</span>
          <span>Healthcare Distribution Support</span>
        </div>
      </section>

      <section className="section-shell" id="about">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="Company Overview"
            title="A growing healthcare company with a clear purpose"
            description="Founded with a vision to contribute meaningfully to the healthcare industry, BASDILS PHARMACEUTICALS PVT. LTD. has emerged as a growing pharmaceutical company offering a diverse portfolio of healthcare products across multiple therapeutic segments."
          />
          <div className="about-panel glass-panel reveal">
            <div>
              <h3>Company Overview</h3>
              <p>Our product range includes nutraceuticals, women's healthcare, liver care, iron and hematinic supplements, bone health products, joint care solutions, Ayurvedic formulations, and general wellness products.</p>
            </div>
            <div className="about-grid-cards">
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-lightbulb" /></span>
                <h4>Innovation</h4>
                <p>Continuously developing advanced formulations.</p>
              </article>
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-badge-check" /></span>
                <h4>Quality</h4>
                <p>Strict quality standards throughout every stage.</p>
              </article>
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-handshake-angle" /></span>
                <h4>Trust</h4>
                <p>Transparent and dependable business practices.</p>
              </article>
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-medal" /></span>
                <h4>Excellence</h4>
                <p>Customer satisfaction remains at the center of everything we do.</p>
              </article>
            </div>
            <div className="mission-grid">
              <article>
                <h4>Vision</h4>
                <p>To become a trusted and respected healthcare company by delivering innovative, affordable, and high-quality pharmaceutical solutions that improve quality of life.</p>
              </article>
              <article>
                <h4>Mission</h4>
                <p>To provide quality healthcare products at affordable prices, maintain the highest standards of ethics and integrity, and build long-term relationships with partners.</p>
              </article>
              <article>
                <h4>Core Values</h4>
                <p>Quality first, innovation, integrity, customer focus, and excellence.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

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
          <div className="carousel glass-panel reveal">
            <div className="carousel-track">
              {[
                ['BASOFER-D3', 'Iron and nutritional support for healthy hemoglobin levels.'],
                ['BASIFOL', 'Premium folate, DHA, and B12 nutrition support.'],
                ['TENDODIL-FORTE', 'Joint support formula for mobility and musculoskeletal wellness.'],
                ['BASDIL-LIV DS', 'Liver tonic with enzyme support.'],
                ['MENSORIS', 'Ayurvedic uterine tonic.'],
                ['BACITROL-PLUS', 'Bone health and calcium metabolism support.']
              ].map(([title, description]) => (
                <article className="carousel-card" key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
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
              <article className="feature-card reveal" key={title as string}>
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
              <article className="service-card reveal" key={title as string}>
                <i className={`fa-solid ${icon}`} />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container cta-banner glass-panel reveal">
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
