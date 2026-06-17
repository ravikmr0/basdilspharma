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
      <section className="py-16 md:py-24 lg:py-32 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Therapeutic Segments"
            title="Products across key healthcare categories"
            description="Explore BASDILS offerings across women's healthcare, liver care, nutraceuticals, iron and hematinics, bone health, joint care, Ayurvedic healthcare, and general wellness."
          />
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-primary-200 flex flex-col md:flex-row items-center justify-between gap-8 animate-slide-up">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">Browse the catalog</p>
              <p className="text-lg text-gray-700 font-medium">Go to the dedicated products page for search and filters.</p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Link className="btn-primary" to="/products">
                Browse Products
              </Link>
              <Link className="btn-secondary" to="/services">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50" id="featured-products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality Commitment"
            title="Quality is the foundation of BASDILS Pharmaceuticals"
            description="Our products are manufactured in facilities that follow WHO-GMP standards, ISO certified processes, stringent quality control measures, advanced manufacturing practices, and regulatory compliance standards."
          />
          <ProductCardsSlider products={products} />
        </div>
      </section>

      {/* Why Choose BASDILS Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose BASDILS"
            title="Partner with a company built on quality and trust"
            description="A wide product portfolio, ethical practices, and customer-focused execution keep the brand grounded in long-term value."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="card-base hover:shadow-lg transition-all duration-300 p-8 border-l-4 border-primary-600 group"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Complete commercial support for brand growth"
            description="BASDILS supports partners with franchise opportunities, manufacturing execution, development support, and packaging-led brand building."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="card-base hover:shadow-lg transition-all duration-300 p-8 space-y-3"
              >
                <div className="text-sm font-bold text-primary-600">{service.num}</div>
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Experience"
            title="What partners value most about BASDILS"
            description="A premium customer experience is built on transparency, responsiveness, and product credibility."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <article 
                key={testimonial.name}
                className="card-base space-y-4 border-2 border-gray-200 hover:border-primary-300 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`${testimonial.name}-${index}`} className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-primary-200 text-sm font-semibold uppercase tracking-wider">
                Contact Information
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight">
                Let's build healthier lives together
              </h2>
              <p className="text-lg text-primary-100">
                Innovation • Quality • Trust • Care
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
                to="/contact"
              >
                Contact BASDILS
              </Link>
              <Link 
                className="px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg transition-all duration-300 border-2 border-white/30 inline-block text-center"
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
