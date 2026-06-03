import { SectionHeading } from '../components/SectionHeading';
import { services } from '../data/catalog';

export function ServicesPage() {
  return (
    <section className="section-shell">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Commercial support for brand growth"
          description="BASDILS supports partners with franchise opportunities, manufacturing execution, development support, and packaging-led brand building."
        />
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <i className={`fa-solid ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="detail-list">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
