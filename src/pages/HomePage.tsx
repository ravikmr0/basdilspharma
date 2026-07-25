import { Link } from 'react-router-dom';
import { PremiumHeroSlider } from '../components/PremiumHeroSlider';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCardsSlider } from '../components/ProductCardsSlider';
import { products } from '../data/catalog';

const testimonials = [
  {
    quote: 'Their quality controls and professional approach make them a dependable partner for our healthcare network.',
    name: 'Amit Sharma',
    role: 'Regional Distribution Lead'
  },
  {
    quote: 'The product portfolio feels thoughtfully curated, and every interaction reflects strong credibility and care.',
    name: 'Priya Menon',
    role: 'Healthcare Franchise Partner'
  },
  {
    quote: 'A premium brand experience backed by genuine product quality and responsive support from the team.',
    name: 'Rahul Verma',
    role: 'Private Label Client'
  }
];

export function HomePage() {
  return (
    <>
      <PremiumHeroSlider />

      {/* Products Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Therapeutic Segments"
            title="Products across key healthcare categories"
            description="Explore BASDILS offerings across women's healthcare, liver care, nutraceuticals, iron and hematinics, bone health, joint care, Ayurvedic healthcare, and general wellness."
          />
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-primary-200 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 animate-slide-up">
            <div className="space-y-1 w-full md:w-auto">
              <p className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-wider">Browse the catalog</p>
              <p className="text-xs sm:text-base text-gray-700 font-medium">Go to the dedicated products page for search and filters.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link className="btn-primary text-xs sm:text-sm w-full sm:w-auto text-center" to="/products">
                Browse Products
              </Link>
              <Link className="btn-secondary text-xs sm:text-sm w-full sm:w-auto text-center" to="/services">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-gray-50" id="featured-products">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality Commitment"
            title="Quality is the foundation of BASDILS Pharmaceuticals"
            description="Our products are manufactured in facilities that follow WHO-GMP standards, ISO certified processes, stringent quality control measures, advanced manufacturing practices, and regulatory compliance standards."
          />
          <ProductCardsSlider products={products} />
        </div>
      </section>

      {/* Why Choose BASDILS Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-white" id="why-choose">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose BASDILS"
            title="Partner with a company built on quality and trust"
            description="A wide product portfolio, ethical practices, and customer-focused execution keep the brand grounded in long-term value."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'Premium Quality Products',
              'Scientific Formulations',
              'Regulatory Compliance',
              'Wide Product Portfolio',
              'Ethical Business Practices',
              'Customer Satisfaction'
            ].map((title) => (
              <div 
                key={title} 
                className="card-base hover:shadow-lg transition-all duration-300 p-4 sm:p-5 md:p-6 border-l-4 border-primary-600 group"
              >
                <h3 className="text-sm sm:text-base font-bold text-primary-950 group-hover:text-secondary-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Complete commercial support for brand growth"
            description="BASDILS supports partners with franchise opportunities, manufacturing execution, development support, and packaging-led brand building."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { num: '01', title: 'PCD Pharma Franchise', desc: 'Exclusive territorial rights with comprehensive marketing support' },
              { num: '02', title: 'Third Party Manufacturing', desc: 'WHO-GMP facilities with advanced production capabilities' },
              { num: '03', title: 'Contract Manufacturing', desc: 'End-to-end production with full regulatory compliance' },
              { num: '04', title: 'Private Label Manufacturing', desc: 'Customized solutions for your brand requirements' },
              { num: '05', title: 'Product Development', desc: 'Custom formulations backed by R&D expertise' },
              { num: '06', title: 'Marketing Support', desc: 'Strategic support to build and grow your brand' }
            ].map((service) => (
              <div 
                key={service.title} 
                className="card-base hover:shadow-lg transition-all duration-300 p-4 sm:p-5 md:p-6 space-y-2"
              >
                <div className="text-xs sm:text-sm font-bold text-primary-600">{service.num}</div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Experience"
            title="What partners value most about BASDILS"
            description="A premium customer experience is built on transparency, responsiveness, and product credibility."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial) => (
              <article 
                key={testimonial.name}
                className="card-base space-y-2 sm:space-y-3 border-2 border-gray-200 hover:border-primary-300 hover:shadow-card-hover transition-all duration-300 p-4 sm:p-5 md:p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`${testimonial.name}-${index}`} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-600" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed text-xs sm:text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="pt-2 sm:pt-3 border-t border-gray-200">
                  <p className="font-bold text-gray-900 text-xs sm:text-sm">{testimonial.name}</p>
                  <p className="text-xs text-primary-600 font-medium">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-gray-50" id="faq">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Everything you need to know about partnering with Basdils"
            description="Common questions about our PCD pharma franchise, third-party manufacturing, and product quality standards."
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white p-5 rounded-2xl border border-gray-200 transition-all duration-200">
                <summary className="font-bold text-primary-950 text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.question}</span>
                  <i className="fa-solid fa-chevron-down text-secondary-700 ml-2 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <div className="space-y-3">
              <p className="text-primary-200 text-sm font-semibold uppercase tracking-wider">
                Contact Information
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight">
                Let's build healthier lives together
              </h2>
              <p className="text-lg text-primary-100">
                Innovation • Quality • Trust • Care
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
                to="/contact"
              >
                Contact BASDILS
              </Link>
              <Link 
                className="px-8 py-3 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 inline-block text-center"
                to="/products"
              >
                Download Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
