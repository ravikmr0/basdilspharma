import { SectionHeading } from '../components/SectionHeading';
import { TeamSection } from '../components/TeamSection';

export function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About BASDILS"
            title="Trust, innovation, and healthcare excellence"
            description="BASDILS PHARMACEUTICALS PVT. LTD. builds dependable healthcare brands with a strong focus on product quality, partner support, and compliant execution."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold font-display text-primary-600 mb-2">15+</div>
              <p className="text-gray-600 font-medium">Years of Excellence</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold font-display text-primary-600 mb-2">100+</div>
              <p className="text-gray-600 font-medium">Premium Products</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold font-display text-primary-600 mb-2">500+</div>
              <p className="text-gray-600 font-medium">Healthcare Partners</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-bold font-display text-primary-600 mb-2">98%</div>
              <p className="text-gray-600 font-medium">Client Trust Index</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Philosophy"
            title="Built on principles that matter"
            description="Our approach to pharmaceutical excellence is rooted in unwavering commitment to quality, innovation, and integrity."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="p-8 rounded-2xl bg-white border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold font-display text-gray-900 mb-3">Vision</h4>
              <p className="text-gray-600 leading-relaxed">To become a trusted and respected healthcare company by delivering innovative, affordable, and high-quality pharmaceutical solutions that improve quality of life.</p>
            </article>
            <article className="p-8 rounded-2xl bg-white border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold font-display text-gray-900 mb-3">Mission</h4>
              <p className="text-gray-600 leading-relaxed">To provide quality healthcare products at affordable prices, maintain the highest standards of ethics and integrity, and build long-term relationships with partners.</p>
            </article>
            <article className="p-8 rounded-2xl bg-white border-l-4 border-yellow-600 hover:shadow-lg transition-all duration-300">
              <h4 className="text-2xl font-bold font-display text-gray-900 mb-3">Values</h4>
              <p className="text-gray-600 leading-relaxed">Quality first, innovation, integrity, customer focus, and excellence in everything we do.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Excellence in every aspect"
            description="From manufacturing to customer support, we maintain the highest standards of quality and professionalism."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in space-y-3" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-bold font-display text-gray-900">WHO-GMP Manufacturing</h3>
              <p className="text-gray-600">State-of-the-art facilities adhering to international quality standards and regulatory compliance.</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in space-y-3" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-bold font-display text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control measures ensure every product meets highest standards.</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in space-y-3" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-bold font-display text-gray-900">Research & Innovation</h3>
              <p className="text-gray-600">Continuous R&D to develop advanced formulations and breakthrough healthcare solutions.</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in space-y-3" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-bold font-display text-gray-900">Partner Success</h3>
              <p className="text-gray-600">Dedicated support teams ensuring your business growth and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Why Partner Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Experience the BASDILS difference"
            description="We're not just a pharmaceutical company—we're your growth partner dedicated to your success."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Diverse Portfolio', desc: '100+ quality-tested products across therapeutic categories.' },
              { title: 'Expert Support', desc: 'Technical and marketing support from experienced professionals.' },
              { title: 'Growth Focus', desc: 'Strategies and resources designed for your business expansion.' },
              { title: 'Regulatory Compliance', desc: 'Full adherence to pharmaceutical regulations and standards.' },
              { title: 'Reliable Distribution', desc: 'Efficient supply chain and timely product delivery.' },
              { title: '24/7 Support', desc: 'Responsive customer service and technical assistance.' }
            ].map((benefit, idx) => (
              <article key={idx} className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary-200 transition-all duration-300 animate-fade-in space-y-2" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <h3 className="text-lg font-bold font-display text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
