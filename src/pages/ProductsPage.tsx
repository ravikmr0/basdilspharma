import { Link } from 'react-router-dom';
import { ProductGridCard } from '../components/ProductGridCard';
import { PageMeta } from '../components/PageMeta';
import { products } from '../data/catalog';

const productsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.basdilspharma.com/products#webpage',
      'url': 'https://www.basdilspharma.com/products',
      'name': 'Pharmaceutical & Nutraceutical Products | Basdils Pharmaceuticals',
      'description': 'Explore Basdils Pharmaceuticals product portfolio across Women Healthcare, Liver Care, Bone & Joint Care, Hematinics, and General Wellness.',
      'isPartOf': { '@id': 'https://www.basdilspharma.com/#website' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.basdilspharma.com/products#breadcrumb',
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
          'name': 'Products',
          'item': 'https://www.basdilspharma.com/products'
        }
      ]
    }
  ]
};

export function ProductsPage() {
  return (
    <>
      <PageMeta
        title="Product Portfolio | Pharmaceutical & Nutraceutical Formulations"
        description="Explore Basdils Pharmaceuticals product portfolio including OVADIL-OD, Basdil-Liv-DS, Basifol, BASOFER-D3, BACITROL-PLUS, and TENDODIL-FORTE across key healthcare categories."
        canonical="https://www.basdilspharma.com/products"
        schema={productsSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 md:py-14 lg:py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-secondary-100/60 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-secondary-700">
                Product Portfolio
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.05] text-primary-950">
                Healthcare Solutions For Every Need
              </h1>
              <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                BASDILS Pharmaceuticals offers a comprehensive portfolio of nutraceuticals, Ayurvedic medicines, women's healthcare, liver care, iron supplements, bone health, joint care, and general wellness products designed to improve patient outcomes and quality of life.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {['Pharmaceuticals', 'Nutraceuticals', 'Ayurvedic Care'].map((label) => (
                  <span key={label} className="rounded-full border border-primary-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-primary-900 shadow-sm">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-secondary-200/60 via-white to-amber-100/70 blur-sm" aria-hidden="true" />
              <figure className="relative overflow-hidden rounded-2xl border border-white/80 bg-white p-2 shadow-[0_24px_70px_rgba(13,32,39,0.18)]">
                <img
                  src="/hero_section/product_portfolio.png"
                  alt="BASDILS pharmaceutical research, manufacturing, nutraceutical and Ayurvedic product portfolio"
                  className="aspect-[16/9] w-full rounded-xl object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <figcaption className="absolute bottom-5 left-5 rounded-xl border border-white/30 bg-primary-950/85 px-4 py-3 text-left text-white shadow-lg backdrop-blur-md">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-secondary-200">Complete catalogue</span>
                  <span className="mt-1 block text-sm font-semibold">Quality-led healthcare portfolio</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Category Overview Cards */}
      <section className="py-10 md:py-14 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Women's Healthcare", desc: 'Formulations for reproductive and general wellness support.' },
              { title: 'Ayurvedic Products', desc: 'Traditional herbal wellness with a modern quality framework.' },
              { title: 'Hematinics', desc: 'Iron and nutrition support for daily health needs.' },
              { title: 'Bone & Joint Care', desc: 'Supportive therapies for musculoskeletal wellness.' }
            ].map((cat) => (
              <article key={cat.title} className="card-base p-5 space-y-2 hover:shadow-lg transition-all duration-300 border-t-4 border-primary-600">
                <h4 className="text-base font-bold text-gray-900">{cat.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{cat.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 md:py-14 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductGridCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <p className="text-primary-200 text-xs font-semibold uppercase tracking-wider">
                Need more information?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
                Request our complete product catalogue
              </h2>
              <p className="text-primary-100 text-base">
                Download our comprehensive product portfolio or speak with our team about your specific requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link className="btn-primary" to="/contact">
                Download Catalogue
              </Link>
              <Link className="btn-outline text-white border-white hover:bg-white/10" to="/contact">
                Request Product List
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
