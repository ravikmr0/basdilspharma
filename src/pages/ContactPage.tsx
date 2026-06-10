import { SectionHeading } from '../components/SectionHeading';

export function ContactPage() {
  const contactMethods = [
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+91 9931691959',
      link: 'tel:+919931691959',
      description: 'Monday - Friday, 9 AM - 6 PM IST'
    },
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'info@basdilspharma.com',
      link: 'mailto:info@basdilspharma.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'fa-brands fa-whatsapp',
      title: 'WhatsApp',
      value: '+91 9931691959',
      link: 'https://wa.me/919931691959',
      description: 'Quick support & inquiries'
    },
    {
      icon: 'fa-location-dot',
      title: 'Visit Us',
      value: 'Dehradun Office',
      link: '#',
      description: 'Ekta Enclave, Kargi'
    }
  ];

  const offices = [
    {
      name: 'Corporate Headquarters',
      type: 'Manufacturing Facility',
      address: 'Ekta Enclave, G. No.-2, Banjarawala Road, Kargi, Dehradun - 248001 (U.K.) India',
      phone: '+91 9931691959',
      email: 'info@basdilspharma.com',
      hours: 'Monday - Friday: 9 AM - 6 PM IST',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=500&fit=crop'
    },
    {
      name: 'Registered Office',
      type: 'Corporate Office',
      address: 'BML, HJP, VSL, BR-844101 Bihar, INDIA',
      phone: '+91 9931691959',
      email: 'info@basdilspharma.com',
      hours: 'Monday - Friday: 9 AM - 6 PM IST',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=500&fit=crop'
    }
  ];

  const departments = [
    {
      name: 'Sales & Distribution',
      icon: 'fa-chart-line',
      email: 'sales@basdilspharma.com',
      description: 'PCD Pharma Franchise opportunities and bulk orders'
    },
    {
      name: 'Manufacturing',
      icon: 'fa-industry',
      email: 'mfg@basdilspharma.com',
      description: 'Third-party & contract manufacturing inquiries'
    },
    {
      name: 'Product Development',
      icon: 'fa-flask',
      email: 'rd@basdilspharma.com',
      description: 'Custom formulation and R&D services'
    },
    {
      name: 'Customer Support',
      icon: 'fa-headset',
      email: 'support@basdilspharma.com',
      description: 'Product information and technical support'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-shell contact-hero">
        <div className="container">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Build Healthier Lives Together"
            description="We're here to help with partnerships, inquiries, and support. Reach out to us through your preferred channel."
          />
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="section-shell quick-contact-section">
        <div className="container">
          <div className="quick-contact-grid">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'} rel={method.link.startsWith('http') ? 'noreferrer' : ''} className="contact-method-card glass-panel reveal">
                <div className="method-icon">
                  <i className={`fa-solid ${method.icon}`} />
                </div>
                <h4 className="method-title">{method.title}</h4>
                <p className="method-value">{method.value}</p>
                <p className="method-description">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-shell contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>We'll get back to you as soon as possible</p>
              </div>
              <form className="contact-form glass-panel">
                <div className="form-grid-two">
                  <div className="form-group">
                    <label htmlFor="name">
                      <span>Full Name</span>
                      <input type="text" id="name" name="name" placeholder="Your full name" required />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">
                      <span>Company</span>
                      <input type="text" id="company" name="company" placeholder="Company name" required />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <span>Email Address</span>
                      <input type="email" id="email" name="email" placeholder="your@email.com" required />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <span>Phone Number</span>
                      <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
                    </label>
                  </div>
                  <div className="form-group full">
                    <label htmlFor="subject">
                      <span>Subject</span>
                      <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
                    </label>
                  </div>
                  <div className="form-group full">
                    <label htmlFor="message">
                      <span>Message</span>
                      <textarea id="message" name="message" rows={6} placeholder="Tell us how we can help..." required></textarea>
                    </label>
                  </div>
                </div>
                <button className="button button-primary full-width" type="submit">
                  <i className="fa-solid fa-paper-plane" /> Send Message
                </button>
              </form>
            </div>

            {/* Sidebar - Direct Contact */}
            <aside className="contact-sidebar">
              <div className="contact-info-card glass-panel">
                <div className="info-header">
                  <i className="fa-solid fa-info-circle" />
                  <h3>Quick Information</h3>
                </div>
                <div className="info-group">
                  <h4>Response Time</h4>
                  <p>We typically respond within 24 business hours</p>
                </div>
                <div className="info-group">
                  <h4>Business Hours</h4>
                  <ul className="hours-list">
                    <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday - Sunday: Closed</li>
                    <li>Holidays: Closed</li>
                  </ul>
                </div>
                <div className="info-group">
                  <h4>Certifications</h4>
                  <ul className="cert-list">
                    <li><i className="fa-solid fa-check-circle" /> WHO-GMP Certified</li>
                    <li><i className="fa-solid fa-check-circle" /> ISO 9001:2015</li>
                    <li><i className="fa-solid fa-check-circle" /> FSSAI Approved</li>
                  </ul>
                </div>
              </div>

              <div className="contact-info-card glass-panel">
                <div className="info-header">
                  <i className="fa-solid fa-headset" />
                  <h3>Support</h3>
                </div>
                <p className="support-text">For immediate assistance, call us or use WhatsApp. Our support team is ready to help!</p>
                <div className="support-buttons">
                  <a href="tel:+919931691959" className="support-btn phone">
                    <i className="fa-solid fa-phone" /> Call Now
                  </a>
                  <a href="https://wa.me/919931691959" target="_blank" rel="noreferrer" className="support-btn whatsapp">
                    <i className="fa-brands fa-whatsapp" /> WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-shell departments-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Our Departments</h2>
            <p>Reach the right team for your needs</p>
          </div>
          <div className="departments-grid">
            {departments.map((dept) => (
              <div key={dept.name} className="department-card glass-panel reveal">
                <div className="dept-icon">
                  <i className={`fa-solid ${dept.icon}`} />
                </div>
                <h4>{dept.name}</h4>
                <p className="dept-description">{dept.description}</p>
                <a href={`mailto:${dept.email}`} className="dept-email">
                  <i className="fa-solid fa-envelope" /> {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-shell offices-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Our Offices</h2>
            <p>Visit us at any of our locations</p>
          </div>
          <div className="offices-grid">
            {offices.map((office, idx) => (
              <div key={idx} className="office-card glass-panel reveal">
                <div className="office-image">
                  <img src={office.image} alt={office.name} loading="lazy" />
                  <div className="office-image-overlay" />
                  <div className="office-badge">{office.type}</div>
                </div>
                <div className="office-content">
                  <h3>{office.name}</h3>
                  <div className="office-info">
                    <div className="info-item">
                      <i className="fa-solid fa-map-marker-alt" />
                      <p>{office.address}</p>
                    </div>
                    <div className="info-item">
                      <i className="fa-solid fa-phone" />
                      <a href={`tel:${office.phone}`}>{office.phone}</a>
                    </div>
                    <div className="info-item">
                      <i className="fa-solid fa-envelope" />
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </div>
                    <div className="info-item">
                      <i className="fa-solid fa-clock" />
                      <p>{office.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-shell contact-cta-section">
        <div className="container">
          <div className="cta-box glass-panel reveal">
            <div className="cta-content">
              <h2>Ready to Partner with Us?</h2>
              <p>Whether you're looking for PCD pharma franchise, third-party manufacturing, or custom formulations, we're here to support your growth.</p>
            </div>
            <div className="cta-actions">
              <a href="mailto:info@basdilspharma.com" className="button button-primary">
                <i className="fa-solid fa-paper-plane" /> Send Inquiry
              </a>
              <a href="tel:+919931691959" className="button button-secondary">
                <i className="fa-solid fa-phone" /> Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
