import { SectionHeading } from '../components/SectionHeading';

export function AboutPage() {
  return (
    <section className="section-shell">
      <div className="container split-layout">
        <SectionHeading
          eyebrow="About BASDILS"
          title="Trust, innovation, and healthcare excellence"
          description="BASDILS PHARMACEUTICALS PVT. LTD. builds dependable healthcare brands with a strong focus on product quality, partner support, and compliant execution."
        />
        <div className="about-panel glass-panel reveal">
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
              <h4>Values</h4>
              <p>Quality first, innovation, integrity, customer focus, and excellence.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
