import { Link } from 'react-router-dom';
import { PremiumHeroSlider } from '../components/PremiumHeroSlider';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCardsSlider } from '../components/ProductCardsSlider';
import { PageMeta } from '../components/PageMeta';
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

const trustMetrics = [
  { value: 'WHO-GMP', label: 'Quality-led manufacturing', icon: 'fa-shield-halved' },
  { value: '8+', label: 'Therapeutic segments', icon: 'fa-capsules' },
  { value: 'PAN India', label: 'Partnership opportunities', icon: 'fa-map-location-dot' },
  { value: 'End-to-end', label: 'Commercial support', icon: 'fa-handshake' }
];

const therapyShortcuts = [
  { label: 'Women’s Health', icon: 'fa-venus', tone: 'from-rose-50 to-white', border: 'border-rose-100', iconTone: 'text-rose-600 bg-rose-100' },
  { label: 'Liver Care', icon: 'fa-leaf', tone: 'from-emerald-50 to-white', border: 'border-emerald-100', iconTone: 'text-emerald-700 bg-emerald-100' },
  { label: 'Bone & Joint', icon: 'fa-bone', tone: 'from-violet-50 to-white', border: 'border-violet-100', iconTone: 'text-violet-700 bg-violet-100' },
  { label: 'Nutraceuticals', icon: 'fa-seedling', tone: 'from-amber-50 to-white', border: 'border-amber-100', iconTone: 'text-amber-700 bg-amber-100' }
];

const faqs = [
  {
    question: 'Does Basdils Pharmaceuticals offer PCD Pharma Franchise opportunities in India?',
    answer: 'Yes, Basdils Pharmaceuticals offers exclusive PCD Pharma Franchise opportunities across India with monopoly rights, marketing visual aids, promotional inputs, and comprehensive support.'
  },
  {
    question: 'Are your pharmaceutical products WHO-GMP certified?',
    answer: 'All our formulations are manufactured in state-of-the-art WHO-GMP certified and ISO 9001:2015 accredited facilities adhering to strict quality standards.'
  },
  {
    question: 'What therapeutic segments does Basdils Pharmaceuticals specialize in?',
    answer: 'We cover Women Healthcare, Liver Care, Bone & Nerve Health, Joint Care, Hematinics, Ayurvedic healthcare formulations, and General Wellness products.'
  },
  {
    question: 'Do you provide Third-Party Pharmaceutical Manufacturing services?',
    answer: 'Yes, we provide end-to-end third-party and contract manufacturing services for tablets, capsules, softgels, syrups, and nutraceutical products.'
  },
  {
    question: 'How can I get started as a franchise partner or place a bulk inquiry?',
    answer: 'You can reach out directly via WhatsApp at +91 9931691959, email us at basdilpharma@gmail.com, or fill out the contact form on our website.'
  }
];

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.basdilspharma.com/#webpage',
      'url': 'https://www.basdilspharma.com/',
      'name': 'Basdils Pharmaceuticals Pvt. Ltd. | WHO-GMP Pharma Manufacturer India',
      'description': 'WHO-GMP certified pharmaceutical manufacturer offering PCD pharma franchise, third-party manufacturing, and nutraceutical products across India.',
      'isPartOf': { '@id': 'https://www.basdilspharma.com/#website' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.basdilspharma.com/#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.basdilspharma.com/'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.basdilspharma.com/#faq',
      'mainEntity': faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    }
  ]
};

export function HomePage() {
  return (
    <>
      <PageMeta
        title="WHO-GMP Certified Pharmaceutical Manufacturer & PCD Franchise India"
        description="Basdils Pharmaceuticals Pvt. Ltd. is a leading WHO-GMP certified pharmaceutical manufacturer in India offering PCD pharma franchise, third-party manufacturing, and high-quality healthcare formulations."
        canonical="https://www.basdilspharma.com/"
        schema={homeSchema}
      />

      <PremiumHeroSlider />

      {/* Trust proof strip */}
      <section className="relative z-10 -mt-8 sm:-mt-10 px-3 sm:px-4 md:px-6 lg:px-8" aria-label="BASDILS at a glance">
        <div className="max-w-7xl mx-auto rounded-2xl border border-white/70 bg-white/95 shadow-[0_18px_60px_rgba(13,32,39,0.14)] backdrop-blur-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {trustMetrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`flex items-center gap-3 p-4 sm:p-5 lg:p-6 ${
                  index % 2 === 0 ? 'border-r border-gray-100' : ''
                } ${index < 2 ? 'border-b lg:border-b-0' : ''} ${index === 1 ? 'lg:border-r' : ''}`}
              >
                <span className="flex h-10 w-10 sm:h-11 sm:w-11 flex-none items-center justify-center rounded-xl bg-primary-50 text-secondary-700">
                  <i className={`fa-solid ${metric.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm sm:text-base font-extrabold text-primary-950">{metric.value}</p>
                  <p className="mt-0.5 text-[11px] sm:text-xs leading-snug text-gray-600">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 lg:pb-20 bg-white" id="products">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Therapeutic Segments"
            title="Products across key healthcare categories"
            description="Explore BASDILS offerings across women's healthcare, liver care, nutraceuticals, iron and hematinics, bone health, joint care, Ayurvedic healthcare, and general wellness."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {therapyShortcuts.map((therapy) => (
              <Link
                key={therapy.label}
                to="/products"
                className={`group rounded-2xl border ${therapy.border} bg-gradient-to-br ${therapy.tone} p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <span className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${therapy.iconTone} transition-transform duration-300 group-hover:scale-110`}>
                  <i className={`fa-solid ${therapy.icon}`} aria-hidden="true" />
                </span>
                <div className="flex items-end justify-between gap-2">
                  <span className="text-xs sm:text-sm font-bold text-primary-950">{therapy.label}</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-secondary-700" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-lg p-4 sm:p-6 md:p-8 border border-primary-100 shadow-card flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 animate-slide-up">
            <div className="space-y-1 w-full md:w-auto">
              <p className="text-xs sm:text-sm font-semibold text-secondary-700 uppercase tracking-wider">Browse the catalog</p>
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
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-primary-50/60" id="featured-products">
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
              {
                title: 'Premium Quality Products',
                desc: 'Formulated using high-purity active ingredients compliant with IP, BP, and USP standards.'
              },
              {
                title: 'Scientific Formulations',
                desc: 'Developed by experienced R&D scientists to maximize bioavailability and clinical efficacy.'
              },
              {
                title: 'Regulatory Compliance',
                desc: 'Full documentation, COA certificates, and WHO-GMP audit readiness for every batch.'
              },
              {
                title: 'Wide Product Portfolio',
                desc: 'Extensive product range spanning Tablets, Capsules, Softgels, Syrups, and Nutraceuticals.'
              },
              {
                title: 'Ethical Business Practices',
                desc: 'Transparent pricing, exclusive monopoly rights, and trustworthy commercial partnerships.'
              },
              {
                title: 'Customer Satisfaction',
                desc: 'Dedicated account management, fast dispatch, and reliable post-sales support.'
              }
            ].map((item) => (
              <div 
                key={item.title} 
                className="card-base hover:shadow-lg transition-all duration-300 p-4 sm:p-5 md:p-6 border-l-4 border-primary-600 group space-y-2"
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

      {/* Manufacturing Excellence Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 border-y border-primary-100" id="manufacturing">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHeading
            tone="dark"
            eyebrow="Manufacturing Excellence"
            title="State-of-the-art pharmaceutical manufacturing"
            description="BASDILS operates WHO-GMP certified facilities with advanced quality control systems, ISO certifications, and stringent regulatory compliance to ensure every product meets the highest international standards."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary-300 text-primary-950 flex items-center justify-center flex-shrink-0 font-bold text-lg"><i className="fa-solid fa-check" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">WHO-GMP Certification</h4>
                  <p className="text-primary-100 text-xs sm:text-sm mt-1">Compliance with World Health Organization Good Manufacturing Practice standards</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary-300 text-primary-950 flex items-center justify-center flex-shrink-0 font-bold text-lg"><i className="fa-solid fa-check" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">ISO 9001:2015 Certified</h4>
                  <p className="text-primary-100 text-xs sm:text-sm mt-1">Quality management system and international best practices</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary-300 text-primary-950 flex items-center justify-center flex-shrink-0 font-bold text-lg"><i className="fa-solid fa-check" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Advanced R&D</h4>
                  <p className="text-primary-100 text-xs sm:text-sm mt-1">Continuous research and development for innovative formulations</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary-300 text-primary-950 flex items-center justify-center flex-shrink-0 font-bold text-lg"><i className="fa-solid fa-check" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Stringent Quality Control</h4>
                  <p className="text-primary-100 text-xs sm:text-sm mt-1">In-process and finished product testing with certified laboratories</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary-300 text-primary-950 flex items-center justify-center flex-shrink-0 font-bold text-lg"><i className="fa-solid fa-check" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Regulatory Compliance</h4>
                  <p className="text-primary-100 text-xs sm:text-sm mt-1">Full compliance with Indian Drugs and Cosmetics Act and regulations</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary-300 text-primary-950 flex items-center justify-center flex-shrink-0 font-bold text-lg"><i className="fa-solid fa-check" aria-hidden="true" /></div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Traceability Systems</h4>
                  <p className="text-primary-100 text-xs sm:text-sm mt-1">Complete batch tracking and documentation from raw material to finished product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership journey */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-white">
        <div className="absolute -left-24 top-12 h-64 w-64 rounded-full bg-secondary-100/50 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary-100/60 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-secondary-700">Built for partnership</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight text-primary-950">
                From opportunity to market—supported at every step
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-gray-700">
                BASDILS combines quality formulations, commercial clarity, and responsive partner support to help healthcare businesses grow with confidence.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link className="btn-primary text-center" to="/contact">Start a Partnership</Link>
                <Link className="btn-secondary text-center" to="/services">Explore Our Services</Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { step: '01', title: 'Share your requirement', text: 'Tell us your market, therapy focus, and business goals.' },
                { step: '02', title: 'Choose the right portfolio', text: 'Get product and service recommendations aligned to your opportunity.' },
                { step: '03', title: 'Plan with confidence', text: 'Receive clear commercial guidance, documentation, and execution support.' },
                { step: '04', title: 'Grow with ongoing support', text: 'Stay backed by a responsive team beyond the first order.' }
              ].map((item) => (
                <article key={item.step} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_12px_35px_rgba(13,32,39,0.07)]">
                  <span className="text-xs font-extrabold tracking-widest text-secondary-700">{item.step}</span>
                  <h3 className="mt-3 text-base font-bold text-primary-950">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
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
                <div className="text-xs sm:text-sm font-bold text-secondary-700">{service.num}</div>
                <h3 className="text-sm sm:text-base font-bold text-primary-950">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
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
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <i key={`${testimonial.name}-${index}`} className="fa-solid fa-star text-xs sm:text-sm" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed text-xs sm:text-sm">
                  "{testimonial.quote}"
                </p>
                <div className="pt-2 sm:pt-3 border-t border-gray-200">
                  <p className="font-bold text-primary-950 text-xs sm:text-sm">{testimonial.name}</p>
                  <p className="text-xs text-secondary-700 font-semibold">{testimonial.role}</p>
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
      <section className="py-12 md:py-16 lg:py-20 bg-[linear-gradient(135deg,#0d2027_0%,#224951_58%,#2e1d0e_100%)]">
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
                className="px-8 py-3 bg-white text-primary-950 font-semibold rounded-lg hover:bg-secondary-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
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

