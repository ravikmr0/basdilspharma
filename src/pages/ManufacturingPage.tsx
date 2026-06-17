import { SectionHeading } from '../components/SectionHeading';

export function ManufacturingPage() {
  const manufacturingPillars = [
    {
      number: '01',
      title: 'WHO-GMP Standards',
      description: 'Current quality expectations across production.',
      details: 'We maintain international pharmaceutical manufacturing standards ensuring safety, efficacy, and consistency.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/332723723/TG/DO/PO/25087216/who-gmp-compliance-services.jpg',
      icon: 'fa-industry'
    },
    {
      number: '02',
      title: 'Quality Control',
      description: 'Testing and review discipline at each stage.',
      details: 'Advanced laboratory testing and quality assurance at every step of the manufacturing process.',
      image: 'https://qodenext.com/wp-content/uploads/2023/06/quality-control-in-pharmaceutical-industry-compressed.jpg',
      icon: 'fa-flask'
    },
    {
      number: '03',
      title: 'Packaging Excellence',
      description: 'Premium, compliant, and production-ready packaging.',
      details: 'State-of-the-art packaging technology ensuring product integrity and regulatory compliance.',
      image: 'https://www.arka.com/cdn/shop/files/pharmaceutical-packaging-materials.jpg?v=1700564885',
      icon: 'fa-box'
    },
    {
      number: '04',
      title: 'Compliance Management',
      description: 'Documentation, audits, and partner readiness.',
      details: 'Comprehensive audit trails, documentation systems, and regulatory compliance management.',
      image: 'https://alpineprohealth.com/blog/wp-content/uploads/2025/05/Medical-Coding-Compliance-The-Good-the-Bad-and-the-Ugly.png',
      icon: 'fa-certificate'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
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
              <div key={pillar.number} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg p-6 md:p-8">
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
              <img
                src="https://www.netra-accura.com/assets/img/automated-induction-seal-inspection.jpg"
                alt="Quality Assurance"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
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
            <div className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">WHO-GMP Certification</h4>
              <p className="text-gray-600 text-xs">Compliant with World Health Organization Good Manufacturing Practice standards</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">ISO 9001:2015</h4>
              <p className="text-gray-600 text-xs">Quality Management System certified for consistent product excellence</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">FSSAI Approved</h4>
              <p className="text-gray-600 text-xs">Food Safety and Standards Authority of India approved manufacturing facility</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 space-y-1">
              <h4 className="text-base font-bold font-display text-gray-900">Pharmaceutical Grade</h4>
              <p className="text-gray-600 text-xs">Meets pharmaceutical manufacturing standards for quality and safety</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
