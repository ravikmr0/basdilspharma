import { SectionHeading } from '../components/SectionHeading';
import { TeamSection } from '../components/TeamSection';

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-shell about-hero">
        <div className="container about-hero-content">
          <SectionHeading
            eyebrow="About BASDILS"
            title="Trust, innovation, and healthcare excellence"
            description="BASDILS PHARMACEUTICALS PVT. LTD. builds dependable healthcare brands with a strong focus on product quality, partner support, and compliant execution."
          />
          <div className="about-hero-stats">
            <div className="hero-stat-item reveal">
              <strong className="stat-number">15+</strong>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="hero-stat-item reveal">
              <strong className="stat-number">100+</strong>
              <span className="stat-label">Premium Products</span>
            </div>
            <div className="hero-stat-item reveal">
              <strong className="stat-number">500+</strong>
              <span className="stat-label">Healthcare Partners</span>
            </div>
            <div className="hero-stat-item reveal">
              <strong className="stat-number">98%</strong>
              <span className="stat-label">Client Trust Index</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-shell">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="Core Philosophy"
            title="Built on principles that matter"
            description="Our approach to pharmaceutical excellence is rooted in unwavering commitment to quality, innovation, and integrity."
          />
          <div className="about-panel glass-panel reveal premium-surface">
            <div className="mission-grid">
              <article className="mission-card">
                <div className="mission-icon">
                  <i className="fa-solid fa-eye" />
                </div>
                <h4>Vision</h4>
                <p>To become a trusted and respected healthcare company by delivering innovative, affordable, and high-quality pharmaceutical solutions that improve quality of life.</p>
              </article>
              <article className="mission-card">
                <div className="mission-icon">
                  <i className="fa-solid fa-target" />
                </div>
                <h4>Mission</h4>
                <p>To provide quality healthcare products at affordable prices, maintain the highest standards of ethics and integrity, and build long-term relationships with partners.</p>
              </article>
              <article className="mission-card">
                <div className="mission-icon">
                  <i className="fa-solid fa-star" />
                </div>
                <h4>Values</h4>
                <p>Quality first, innovation, integrity, customer focus, and excellence in everything we do.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-shell commitment-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Excellence in every aspect"
            description="From manufacturing to customer support, we maintain the highest standards of quality and professionalism."
          />
          <div className="commitment-grid">
            <div className="commitment-card reveal">
              <div className="commitment-icon">
                <i className="fa-solid fa-award" />
              </div>
              <h3>WHO-GMP Manufacturing</h3>
              <p>State-of-the-art facilities adhering to international quality standards and regulatory compliance.</p>
            </div>
            <div className="commitment-card reveal">
              <div className="commitment-icon">
                <i className="fa-solid fa-shield-halved" />
              </div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality control measures ensure every product meets highest standards.</p>
            </div>
            <div className="commitment-card reveal">
              <div className="commitment-icon">
                <i className="fa-solid fa-flask" />
              </div>
              <h3>Research & Innovation</h3>
              <p>Continuous R&D to develop advanced formulations and breakthrough healthcare solutions.</p>
            </div>
            <div className="commitment-card reveal">
              <div className="commitment-icon">
                <i className="fa-solid fa-handshake" />
              </div>
              <h3>Partner Success</h3>
              <p>Dedicated support teams ensuring your business growth and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Why Partner Section */}
      <section className="section-shell partner-section">
        <div className="container">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Experience the BASDILS difference"
            description="We're not just a pharmaceutical company—we're your growth partner dedicated to your success."
          />
          <div className="benefits-grid">
            {[
              { icon: 'fa-cube', title: 'Diverse Portfolio', desc: '100+ quality-tested products across therapeutic categories.' },
              { icon: 'fa-graduation-cap', title: 'Expert Support', desc: 'Technical and marketing support from experienced professionals.' },
              { icon: 'fa-chart-line', title: 'Growth Focus', desc: 'Strategies and resources designed for your business expansion.' },
              { icon: 'fa-lock', title: 'Regulatory Compliance', desc: 'Full adherence to pharmaceutical regulations and standards.' },
              { icon: 'fa-truck', title: 'Reliable Distribution', desc: 'Efficient supply chain and timely product delivery.' },
              { icon: 'fa-comments', title: '24/7 Support', desc: 'Responsive customer service and technical assistance.' }
            ].map((benefit, idx) => (
              <article key={idx} className="benefit-card reveal">
                <div className="benefit-icon">
                  <i className={`fa-solid ${benefit.icon}`} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
