import { SectionHeading } from '../components/SectionHeading';
import { TeamSection } from '../components/TeamSection';
import { PageMeta } from '../components/PageMeta';

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.basdilspharma.com/about#webpage',
      'url': 'https://www.basdilspharma.com/about',
      'name': 'About Us | Basdils Pharmaceuticals Pvt. Ltd.',
      'description': 'Basdils Pharmaceuticals Pvt. Ltd. — 15+ years of healthcare commitment, WHO-GMP certified manufacturing, and ethical pharmaceutical distribution in India.',
      'isPartOf': { '@id': 'https://www.basdilspharma.com/#website' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.basdilspharma.com/about#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.basdilspharma.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'About Us',
          'item': 'https://www.basdilspharma.com/about'
        }
      ]
    }
  ]
};

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us | WHO-GMP Certified Pharma Leader"
        description="Learn about Basdils Pharmaceuticals Pvt. Ltd. — our 15+ years of healthcare excellence, vision, mission, WHO-GMP certified manufacturing, and leadership."
        canonical="https://www.basdilspharma.com/about"
        schema={aboutSchema}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            asH1
            eyebrow="About BASDILS"
            title="Trust, innovation, and healthcare excellence"
            description="BASDILS PHARMACEUTICALS PVT. LTD. builds dependable healthcare brands with a strong focus on product quality, partner support, and compliant execution."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold font-display text-primary-900 mb-1">15+</div>
              <p className="text-gray-600 font-medium text-sm">Years of Excellence</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold font-display text-primary-900 mb-1">100+</div>
              <p className="text-gray-600 font-medium text-sm">Premium Products</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold font-display text-primary-900 mb-1">500+</div>
              <p className="text-gray-600 font-medium text-sm">Healthcare Partners</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl font-bold font-display text-primary-900 mb-1">98%</div>
              <p className="text-gray-600 font-medium text-sm">Client Trust Index</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Philosophy"
            title="Built on principles that matter"
            description="Our approach to pharmaceutical excellence is rooted in unwavering commitment to quality, innovation, and integrity."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="p-6 rounded-lg bg-white border-l-4 border-primary-800 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h4 className="text-xl font-bold font-display text-gray-900 mb-2">Vision</h4>
              <p className="text-gray-600 leading-relaxed text-sm">To become a trusted and respected healthcare company by delivering innovative, affordable, and high-quality pharmaceutical solutions that improve quality of life.</p>
            </article>
            <article className="p-6 rounded-lg bg-white border-l-4 border-secondary-400 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h4 className="text-xl font-bold font-display text-gray-900 mb-2">Mission</h4>
              <p className="text-gray-600 leading-relaxed text-sm">To provide quality healthcare products at affordable prices, maintain the highest standards of ethics and integrity, and build long-term relationships with partners.</p>
            </article>
            <article className="p-6 rounded-lg bg-white border-l-4 border-secondary-600 shadow-card hover:shadow-card-hover transition-all duration-300">
              <h4 className="text-xl font-bold font-display text-gray-900 mb-2">Values</h4>
              <p className="text-gray-600 leading-relaxed text-sm">Quality first, innovation, integrity, customer focus, and excellence in everything we do.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Excellence in every aspect"
            description="From manufacturing to customer support, we maintain the highest standards of quality and professionalism."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 bg-white rounded-lg border border-primary-100 hover:shadow-card transition-all duration-300 animate-fade-in space-y-2" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-base font-bold font-display text-gray-900">WHO-GMP Manufacturing</h3>
              <p className="text-gray-600 text-sm">State-of-the-art facilities adhering to international quality standards and regulatory compliance.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-primary-100 hover:shadow-card transition-all duration-300 animate-fade-in space-y-2" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-base font-bold font-display text-gray-900">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">Rigorous testing and quality control measures ensure every product meets highest standards.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-primary-100 hover:shadow-card transition-all duration-300 animate-fade-in space-y-2" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-base font-bold font-display text-gray-900">Research & Innovation</h3>
              <p className="text-gray-600 text-sm">Continuous R&D to develop advanced formulations and breakthrough healthcare solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-primary-100 hover:shadow-card transition-all duration-300 animate-fade-in space-y-2" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-base font-bold font-display text-gray-900">Partner Success</h3>
              <p className="text-gray-600 text-sm">Dedicated support teams ensuring your business growth and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Why Partner Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title="Experience the BASDILS difference"
            description="We're not just a pharmaceutical company—we're your growth partner dedicated to your success."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Diverse Portfolio', desc: '100+ quality-tested products across therapeutic categories.' },
              { title: 'Expert Support', desc: 'Technical and marketing support from experienced professionals.' },
              { title: 'Growth Focus', desc: 'Strategies and resources designed for your business expansion.' },
              { title: 'Regulatory Compliance', desc: 'Full adherence to pharmaceutical regulations and standards.' },
              { title: 'Reliable Distribution', desc: 'Efficient supply chain and timely product delivery.' },
              { title: '24/7 Support', desc: 'Responsive customer service and technical assistance.' }
            ].map((benefit, idx) => (
              <article key={idx} className="p-6 bg-white rounded-lg border border-primary-100 hover:shadow-card hover:border-secondary-300 transition-all duration-300 animate-fade-in space-y-2" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <h3 className="text-base font-bold font-display text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
