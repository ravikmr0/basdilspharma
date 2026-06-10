import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/catalog';

export function ServicesPage() {
  const serviceDetails = [
    {
      title: 'PCD Pharma Franchise',
      icon: 'fa-store',
      description: 'Monopoly rights, promotional inputs, marketing support, and attractive margins.',
      fullDescription: 'Expand your business with our PCD (Propaganda Cum Distribution) pharma franchise model. Get exclusive territorial rights, comprehensive marketing support, and proven products with established brand reputation.',
      bullets: ['Monopoly Rights', 'Promotional Inputs', 'Marketing Support', 'Attractive Margins'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop',
      benefits: ['Established Product Portfolio', 'Comprehensive Training', 'Dedicated Support Team', 'Marketing Materials', 'Territory Protection']
    },
    {
      title: 'Third Party Manufacturing',
      icon: 'fa-industry',
      description: 'WHO-GMP facilities, quality manufacturing, private label solutions, and timely delivery.',
      fullDescription: 'Leverage our state-of-the-art manufacturing capabilities to bring your formulations to market. We handle the entire production process with stringent quality controls and regulatory compliance.',
      bullets: ['WHO-GMP Facilities', 'Quality Manufacturing', 'Private Label Solutions', 'Timely Delivery'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop',
      benefits: ['Advanced Equipment', 'Expert Team', 'Quality Assurance', 'Regulatory Compliance', 'Flexible Volumes']
    },
    {
      title: 'Contract Manufacturing',
      icon: 'fa-handshake',
      description: 'End-to-end production with regulatory compliance and packaging solutions.',
      fullDescription: 'Full-service contract manufacturing from formulation to finished product. Our experienced team ensures your specifications are met with pharmaceutical-grade quality and on-time delivery.',
      bullets: ['End-to-End Production', 'Regulatory Compliance', 'Packaging Solutions'],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=600&fit=crop',
      benefits: ['Custom Solutions', 'Quality Control', 'Documentation Support', 'Scalability', 'Cost Efficiency']
    },
    {
      title: 'Product Development',
      icon: 'fa-flask',
      description: 'Custom formulations for nutraceutical and Ayurvedic product development.',
      fullDescription: 'Transform your ideas into market-ready products. Our R&D team specializes in creating innovative formulations that meet market demands and regulatory requirements.',
      bullets: ['Custom Formulations', 'Nutraceutical Development', 'Ayurvedic Product Development'],
      image: 'https://images.unsplash.com/photo-1563427436-cbf36c3fecb9?w=600&h=600&fit=crop',
      benefits: ['Expert Formulation', 'Market Research', 'Regulatory Guidance', 'Prototype Development', 'Fast Turnaround']
    }
  ];

  const whyChooseUs = [
    { icon: 'fa-award', title: 'Certified Quality', description: 'WHO-GMP and ISO 9001:2015 certifications' },
    { icon: 'fa-rocket', title: 'Fast Execution', description: 'Quick turnaround with dedicated project management' },
    { icon: 'fa-shield', title: 'Compliance Ready', description: 'All regulatory and documentation support included' },
    { icon: 'fa-users', title: 'Expert Team', description: 'Experienced professionals with industry expertise' },
    { icon: 'fa-flask-vial', title: 'R&D Capability', description: 'In-house research and development facility' },
    { icon: 'fa-headset', title: '24/7 Support', description: 'Dedicated support team for all your needs' }
  ];

  const processSteps = [
    { number: '01', title: 'Consultation', description: 'Understand your requirements and objectives' },
    { number: '02', title: 'Planning', description: 'Develop detailed project plan and timeline' },
    { number: '03', title: 'Execution', description: 'Execute with quality and precision' },
    { number: '04', title: 'Delivery', description: 'Deliver on time with full documentation' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-shell services-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Commercial Support for Brand Growth"
            description="BASDILS supports partners with franchise opportunities, manufacturing execution, product development, and packaging-led brand building solutions."
          />
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-shell services-main-section">
        <div className="container">
          <div className="services-grid-enhanced">
            {serviceDetails.map((service) => (
              <article key={service.title} className="service-card-enhanced glass-panel reveal">
                {/* Service Image */}
                <div className="service-image-wrapper">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                  />
                  <div className="service-image-overlay" />
                  <div className="service-icon-badge">
                    <i className={`fa-solid ${service.icon}`} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.fullDescription}</p>

                  {/* Key Features */}
                  <div className="service-features">
                    <h4>Key Features</h4>
                    <ul className="feature-list">
                      {service.bullets.map((bullet) => (
                        <li key={bullet}>
                          <i className="fa-solid fa-check-circle" /> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="service-benefits">
                    <h4>Benefits</h4>
                    <div className="benefits-tags">
                      {service.benefits.map((benefit) => (
                        <span key={benefit} className="benefit-tag">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href="/contact" className="service-cta">
                    Inquire Now <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-shell why-choose-us-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Why Choose BASDILS?</h2>
            <p>Industry-leading expertise, quality, and commitment to your success</p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="why-card glass-panel reveal">
                <div className="why-icon">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-shell process-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Our Process</h2>
            <p>Streamlined approach to delivering excellence</p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="process-step reveal">
                <div className="step-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                {idx < processSteps.length - 1 && <div className="step-arrow"><i className="fa-solid fa-arrow-right" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="section-shell comparison-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Service Comparison</h2>
            <p>Choose the right solution for your needs</p>
          </div>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>PCD Franchise</th>
                  <th>Third Party Mfg</th>
                  <th>Contract Mfg</th>
                  <th>Product Dev</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">Initial Setup</td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                </tr>
                <tr>
                  <td className="feature-name">Marketing Support</td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className="feature-name">Quality Assurance</td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                </tr>
                <tr>
                  <td className="feature-name">Regulatory Compliance</td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                </tr>
                <tr>
                  <td className="feature-name">R&D Support</td>
                  <td>-</td>
                  <td>-</td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                </tr>
                <tr>
                  <td className="feature-name">Custom Formulation</td>
                  <td>-</td>
                  <td>-</td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                </tr>
                <tr>
                  <td className="feature-name">Territory Protection</td>
                  <td><i className="fa-solid fa-circle-check" /></td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-shell services-cta-section">
        <div className="container">
          <div className="services-cta-box glass-panel reveal">
            <div className="cta-content-center">
              <h2>Ready to Get Started?</h2>
              <p>Choose the service that fits your business needs and let's grow together.</p>
              <div className="cta-buttons-group">
                <a href="/contact" className="button button-primary">
                  <i className="fa-solid fa-envelope" /> Send Inquiry
                </a>
                <a href="https://wa.me/919931691959" target="_blank" rel="noreferrer" className="button button-secondary">
                  <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
