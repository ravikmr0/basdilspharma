import { SectionHeading } from '../components/SectionHeading';
import { PageMeta } from '../components/PageMeta';

const manufacturingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.basdilspharma.com/manufacturing#webpage',
      'url': 'https://www.basdilspharma.com/manufacturing',
      'name': 'Manufacturing & Quality | Basdils Pharmaceuticals',
      'description': 'WHO-GMP certified pharmaceutical manufacturing facilities, quality control laboratories, and compliance standards at Basdils Pharmaceuticals.',
      'isPartOf': { '@id': 'https://www.basdilspharma.com/#website' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.basdilspharma.com/manufacturing#breadcrumb',
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
          'name': 'Manufacturing',
          'item': 'https://www.basdilspharma.com/manufacturing'
        }
      ]
    }
  ]
};

export function ManufacturingPage() {
  const manufacturingPillars = [
    {
      number: '01',
      title: 'WHO-GMP Standards',
      description: 'Current quality expectations across production.',
      details: 'We maintain international pharmaceutical manufacturing standards ensuring safety, efficacy, and consistency.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
      icon: 'fa-industry'
    },
    {
      number: '02',
      title: 'Quality Control',
      description: 'Testing and review discipline at each stage.',
      details: 'Advanced laboratory testing and quality assurance at every step of the manufacturing process.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80',
      icon: 'fa-flask'
    },
    {
      number: '03',
      title: 'Packaging Excellence',
      description: 'Premium, compliant, and production-ready packaging.',
      details: 'State-of-the-art packaging technology ensuring product integrity and regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
      icon: 'fa-box'
    },
    {
      number: '04',
      title: 'Compliance Management',
      description: 'Documentation, audits, and partner readiness.',
      details: 'Comprehensive audit trails, documentation systems, and regulatory compliance management.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      icon: 'fa-certificate'
    }
  ];

  return (
    <>
      <PageMeta
        title="Manufacturing & Quality Assurance | WHO-GMP Certified Facilities"
        description="Discover Basdils Pharmaceuticals WHO-GMP certified manufacturing processes, ISO 9001:2015 quality standards, laboratory infrastructure, and compliance controls."
        canonical="https://www.basdilspharma.com/manufacturing"
        schema={manufacturingSchema}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            asH1
            eyebrow="Manufacturing & Quality"
            title="Built around compliance and quality control"
            description="Our manufacturing story centers on WHO-GMP standards, ISO-aligned systems, laboratory discipline, packaging excellence, and traceable quality processes."
          />
        </div>
      </section>

      {/* Manufacturing Pillars Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {manufacturingPillars.map((pillar, idx) => (
              <div key={pillar.number} className="group rounded-lg overflow-hidden bg-white border border-primary-100 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                {/* Image Section */}
                <div className="media-image-frame h-60 rounded-none border-0 border-b border-primary-100">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="media-image-cover group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e: any) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="text-xs font-bold text-primary-600 mb-1">{pillar.number}</div>
                  <h3 className="text-xl font-bold font-display text-gray-900 mb-1">{pillar.title}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{pillar.description}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{pillar.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-lg border border-primary-100 overflow-hidden shadow-card p-6 md:p-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">Quality Assurance Excellence</h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">Our commitment to quality extends beyond compliance. We implement continuous improvement processes, regular audits, and partner training programs to ensure every product meets our exacting standards.</p>
              <ul className="space-y-2">
                <li className="text-gray-700 font-medium text-sm">WHO-GMP Certified Facilities</li>
                <li className="text-gray-700 font-medium text-sm">ISO 9001:2015 Quality Management</li>
                <li className="text-gray-700 font-medium text-sm">Advanced Laboratory Infrastructure</li>
                <li className="text-gray-700 font-medium text-sm">Automated Quality Control Systems</li>
                <li className="text-gray-700 font-medium text-sm">Real-time Traceability & Documentation</li>
                <li className="text-gray-700 font-medium text-sm">Regular Third-Party Audits</li>
              </ul>
            </div>
            <div>
              <div className="media-image-frame aspect-[4/3]">
                <img
                  src="https://www.netra-accura.com/assets/img/automated-induction-seal-inspection.jpg"
                  alt="Quality Assurance"
                  className="media-image-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-3">Certifications & Accreditations</h2>
            <p className="text-base text-gray-600">Industry-recognized certifications demonstrating our commitment to quality and compliance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg border border-primary-100 text-center hover:shadow-card transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">WHO-GMP Certification</h4>
              <p className="text-gray-600 text-xs">Compliant with World Health Organization Good Manufacturing Practice standards</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-primary-100 text-center hover:shadow-card transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">ISO 9001:2015</h4>
              <p className="text-gray-600 text-xs">Quality Management System certified for consistent product excellence</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-primary-100 text-center hover:shadow-card transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">FSSAI Approved</h4>
              <p className="text-gray-600 text-xs">Food Safety and Standards Authority of India approved manufacturing facility</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-primary-100 text-center hover:shadow-card transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">Pharmaceutical Grade</h4>
              <p className="text-gray-600 text-xs">Meets pharmaceutical manufacturing standards for quality and safety</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
