import { Link } from 'react-router-dom';
import { ProductGridCard } from '../components/ProductGridCard';
import { SectionHeading } from '../components/SectionHeading';
import { products } from '../data/catalog';

export function ProductsPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="py-10 md:py-14 lg:py-16 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Healthcare Solutions For Every Need"
            description="BASDILS Pharmaceuticals offers a comprehensive portfolio of nutraceuticals, Ayurvedic medicines, women's healthcare, liver care, iron supplements, bone health, joint care, and general wellness products designed to improve patient outcomes and quality of life."
          />
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
