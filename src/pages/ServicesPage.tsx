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
      image: 'https://www.biofieldpharma.com/wp-content/uploads/2018/05/487167270_1094814099327307_575181375430377370_n-1-1-1080x675.jpg',
      benefits: ['Established Product Portfolio', 'Comprehensive Training', 'Dedicated Support Team', 'Marketing Materials', 'Territory Protection']
    },
    {
      title: 'Third Party Manufacturing',
      icon: 'fa-industry',
      description: 'WHO-GMP facilities, quality manufacturing, private label solutions, and timely delivery.',
      fullDescription: 'Leverage our state-of-the-art manufacturing capabilities to bring your formulations to market. We handle the entire production process with stringent quality controls and regulatory compliance.',
      bullets: ['WHO-GMP Facilities', 'Quality Manufacturing', 'Private Label Solutions', 'Timely Delivery'],
      image: 'https://www.eraasinternational.com/Blogs/3qazFTdd3qB0gV6rVv7Ltu9kGvyBiaIME91inlPC.jpg',
      benefits: ['Advanced Equipment', 'Expert Team', 'Quality Assurance', 'Regulatory Compliance', 'Flexible Volumes']
    },
    {
      title: 'Contract Manufacturing',
      icon: 'fa-handshake',
      description: 'End-to-end production with regulatory compliance and packaging solutions.',
      fullDescription: 'Full-service contract manufacturing from formulation to finished product. Our experienced team ensures your specifications are met with pharmaceutical-grade quality and on-time delivery.',
      bullets: ['End-to-End Production', 'Regulatory Compliance', 'Packaging Solutions'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/HI/NS/YZ/29976809/3rd-party-medicine-manufacturer-500x500.jpeg',
      benefits: ['Custom Solutions', 'Quality Control', 'Documentation Support', 'Scalability', 'Cost Efficiency']
    },
    {
      title: 'Product Development',
      icon: 'fa-flask',
      description: 'Custom formulations for nutraceutical and Ayurvedic product development.',
      fullDescription: 'Transform your ideas into market-ready products. Our R&D team specializes in creating innovative formulations that meet market demands and regulatory requirements.',
      bullets: ['Custom Formulations', 'Nutraceutical Development', 'Ayurvedic Product Development'],
      image: 'https://vixpharma.com/storage/2025/01/Product-development.png',
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Commercial Support for Brand Growth"
            description="BASDILS supports partners with franchise opportunities, manufacturing execution, product development, and packaging-led brand building solutions."
          />
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceDetails.map((service) => (
              <article key={service.title} className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in">
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Service Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.fullDescription}</p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" /> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <span key={benefit} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a href="/contact" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 text-center inline-block w-full">
                    Inquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Why Choose BASDILS?</h2>
            <p className="text-lg text-gray-600">Industry-leading expertise, quality, and commitment to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Certified Quality', description: 'WHO-GMP and ISO 9001:2015 certifications' },
              { title: 'Fast Execution', description: 'Quick turnaround with dedicated project management' },
              { title: 'Compliance Ready', description: 'All regulatory and documentation support included' },
              { title: 'Expert Team', description: 'Experienced professionals with industry expertise' },
              { title: 'R&D Capability', description: 'In-house research and development facility' },
              { title: '24/7 Support', description: 'Dedicated support team for all your needs' }
            ].map((item, idx) => (
              <div key={item.title} className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 space-y-2 animate-fade-in" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <h4 className="text-lg font-bold font-display text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Streamlined approach to delivering excellence</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="flex-1 relative animate-fade-in" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                <div className="p-8 bg-white rounded-xl border border-gray-200 text-center h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step.number}</div>
                  <h4 className="text-xl font-bold font-display text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Service Comparison</h2>
            <p className="text-lg text-gray-600">Choose the right solution for your needs</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">PCD Franchise</th>
                  <th className="px-6 py-4 text-center font-semibold">Third Party Mfg</th>
                  <th className="px-6 py-4 text-center font-semibold">Contract Mfg</th>
                  <th className="px-6 py-4 text-center font-semibold">Product Dev</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">Initial Setup</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Marketing Support</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">Quality Assurance</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Regulatory Compliance</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 font-semibold text-gray-900">R&D Support</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Custom Formulation</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Territory Protection</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✓</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                  <td className="px-6 py-4 text-center text-gray-400">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Ready to Get Started?</h2>
              <p className="text-lg text-primary-100">Choose the service that fits your business needs and let's grow together.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block">
                Send Inquiry
              </a>
              <a href="https://wa.me/919931691959" target="_blank" rel="noreferrer" className="px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 inline-block">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
