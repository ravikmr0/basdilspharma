import { SectionHeading } from '../components/SectionHeading';

export function ManufacturingPage() {
  return (
    <section className="section-shell">
      <div className="container split-layout">
        <SectionHeading
          eyebrow="Manufacturing & Quality"
          title="Built around compliance and quality control"
          description="Our manufacturing story centers on WHO-GMP standards, ISO-aligned systems, laboratory discipline, packaging excellence, and traceable quality processes."
        />
        <div className="timeline-panel glass-panel reveal">
          <div className="timeline">
            <article>
              <strong>01</strong>
              <div>
                <h4>WHO-GMP Standards</h4>
                <p>Current quality expectations across production.</p>
              </div>
            </article>
            <article>
              <strong>02</strong>
              <div>
                <h4>Quality Control</h4>
                <p>Testing and review discipline at each stage.</p>
              </div>
            </article>
            <article>
              <strong>03</strong>
              <div>
                <h4>Packaging Excellence</h4>
                <p>Premium, compliant, and production-ready packaging.</p>
              </div>
            </article>
            <article>
              <strong>04</strong>
              <div>
                <h4>Compliance Management</h4>
                <p>Documentation, audits, and partner readiness.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
