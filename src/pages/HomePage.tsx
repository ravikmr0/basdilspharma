import { Link } from 'react-router-dom';
import { PremiumHeroSlider } from '../components/PremiumHeroSlider';
import { SectionHeading } from '../components/SectionHeading';

const trustHighlights = [
  { value: 'WHO-GMP', label: 'Manufacturing Standards', icon: 'fa-shield-halved' },
  { value: '98%', label: 'Client Trust Index', icon: 'fa-heart-pulse' },
  { value: '12+', label: 'Specialty Categories', icon: 'fa-capsules' },
  { value: '24/7', label: 'Partner Support', icon: 'fa-headset' }
];

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

      <section className="logo-band section-tight">
        <div className="container band-row">
          <span className="band-pill">WHO-GMP Manufacturing</span>
          <span className="band-pill">ISO-aligned Systems</span>
          <span className="band-pill">Research-led Formulations</span>
          <span className="band-pill">Ethical Business Practices</span>
          <span className="band-pill">Healthcare Distribution Support</span>
        </div>
      </section>

      <section className="section-shell section-surface" id="trust">
        <div className="container">
          <div className="section-intro reveal">
            <p className="eyebrow">Trusted Healthcare Partner</p>
            <h2>Premium quality commitments, deep expertise, and growth-focused partnerships.</h2>
            <p>BASDILS brings together scientific formulation, operational discipline, and a modern customer experience to support healthcare brands at every stage of growth.</p>
          </div>
          <div className="stats-strip">
            {trustHighlights.map((item) => (
              <article className="value-card reveal" key={item.label}>
                <i className={`fa-solid ${item.icon}`} />
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="about">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="Company Overview"
            title="A growing healthcare company with a clear purpose"
            description="Founded with a vision to contribute meaningfully to the healthcare industry, BASDILS PHARMACEUTICALS PVT. LTD. has emerged as a growing pharmaceutical company offering a diverse portfolio of healthcare products across multiple therapeutic segments."
          />
          <div className="about-panel glass-panel reveal premium-surface">
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
