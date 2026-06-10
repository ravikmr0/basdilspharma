import { SectionHeading } from '../components/SectionHeading';

export function ManufacturingPage() {
  const manufacturingPillars = [
    {
      number: '01',
      title: 'WHO-GMP Standards',
      description: 'Current quality expectations across production.',
      details: 'We maintain international pharmaceutical manufacturing standards ensuring safety, efficacy, and consistency.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop',
      icon: 'fa-industry'
    },
    {
      number: '02',
      title: 'Quality Control',
      description: 'Testing and review discipline at each stage.',
      details: 'Advanced laboratory testing and quality assurance at every step of the manufacturing process.',
      image: 'https://images.unsplash.com/photo-1576091160550-112173e7f44b?w=600&h=600&fit=crop',
      icon: 'fa-flask'
    },
    {
      number: '03',
      title: 'Packaging Excellence',
      description: 'Premium, compliant, and production-ready packaging.',
      details: 'State-of-the-art packaging technology ensuring product integrity and regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1578496781514-8bab03247f8a?w=600&h=600&fit=crop',
      icon: 'fa-box'
    },
    {
      number: '04',
      title: 'Compliance Management',
      description: 'Documentation, audits, and partner readiness.',
      details: 'Comprehensive audit trails, documentation systems, and regulatory compliance management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop',
      icon: 'fa-certificate'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-shell manufacturing-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Manufacturing & Quality"
            title="Built around compliance and quality control"
            description="Our manufacturing story centers on WHO-GMP standards, ISO-aligned systems, laboratory discipline, packaging excellence, and traceable quality processes."
          />
        </div>
      </section>

      {/* Manufacturing Pillars Section */}
      <section className="section-shell manufacturing-pillars">
        <div className="container">
          <div className="pillars-grid">
            {manufacturingPillars.map((pillar) => (
              <div key={pillar.number} className="pillar-card reveal">
                {/* Image Section */}
                <div className="pillar-image-wrapper">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="pillar-image"
                    loading="lazy"
                    onError={(e: any) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="pillar-image-overlay" />
                </div>

                {/* Content Section */}
                <div className="pillar-content">
                  <div className="pillar-number">{pillar.number}</div>
                  <div className="pillar-icon">
                    <i className={`fa-solid ${pillar.icon}`} />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.description}</p>
                  <p className="pillar-details">{pillar.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="section-shell quality-assurance-section">
        <div className="container">
          <div className="qa-content glass-panel reveal">
            <div className="qa-text">
              <h2>Quality Assurance Excellence</h2>
              <p>Our commitment to quality extends beyond compliance. We implement continuous improvement processes, regular audits, and partner training programs to ensure every product meets our exacting standards.</p>
              <ul className="qa-features">
                <li><i className="fa-solid fa-check-circle" /> WHO-GMP Certified Facilities</li>
                <li><i className="fa-solid fa-check-circle" /> ISO 9001:2015 Quality Management</li>
                <li><i className="fa-solid fa-check-circle" /> Advanced Laboratory Infrastructure</li>
                <li><i className="fa-solid fa-check-circle" /> Automated Quality Control Systems</li>
                <li><i className="fa-solid fa-check-circle" /> Real-time Traceability & Documentation</li>
                <li><i className="fa-solid fa-check-circle" /> Regular Third-Party Audits</li>
              </ul>
            </div>
            <div className="qa-image">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop"
                alt="Quality Assurance"
                className="qa-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="section-shell certifications-section">
        <div className="container">
          <div className="section-title-center">
            <h2>Certifications & Accreditations</h2>
            <p>Industry-recognized certifications demonstrating our commitment to quality and compliance</p>
          </div>
          <div className="certifications-grid">
            <div className="certification-card glass-panel">
              <i className="fa-solid fa-certificate certification-icon" />
              <h4>WHO-GMP Certification</h4>
              <p>Compliant with World Health Organization Good Manufacturing Practice standards</p>
            </div>
            <div className="certification-card glass-panel">
              <i className="fa-solid fa-check certification-icon" />
              <h4>ISO 9001:2015</h4>
              <p>Quality Management System certified for consistent product excellence</p>
            </div>
            <div className="certification-card glass-panel">
              <i className="fa-solid fa-shield certification-icon" />
              <h4>FSSAI Approved</h4>
              <p>Food Safety and Standards Authority of India approved manufacturing facility</p>
            </div>
            <div className="certification-card glass-panel">
              <i className="fa-solid fa-vial certification-icon" />
              <h4>Pharmaceutical Grade</h4>
              <p>Meets pharmaceutical manufacturing standards for quality and safety</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
