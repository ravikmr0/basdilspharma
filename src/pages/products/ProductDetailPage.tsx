import { useParams, Link } from 'react-router-dom';
import { PageMeta } from '../../components/PageMeta';
import { products } from '../../data/catalog';

function formatTag(tag: string) {
  return tag
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p: any) => p.slug === slug);

  if (!product) {
    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <PageMeta
          title="Product Not Found"
          description="The requested pharmaceutical product could not be found."
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-primary-100 text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-2">Product Not Found</p>
            <h3 className="text-3xl font-bold font-display text-gray-900 mb-2">We couldn't find the product you're looking for.</h3>
            <p className="text-gray-600 mb-8">This product may have been discontinued or the URL is incorrect.</p>
            <Link className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 inline-block" to="/products">
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentIndex = products.findIndex((p: any) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const productSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `https://www.basdilspharma.com/products/${product.slug}#product`,
        'name': product.name,
        'image': `https://www.basdilspharma.com${product.image}`,
        'description': product.shortDescription,
        'category': product.categoryLabel,
        'brand': {
          '@type': 'Brand',
          'name': 'Basdils Pharmaceuticals'
        },
        'manufacturer': {
          '@id': 'https://www.basdilspharma.com/#organization'
        },
        'offers': {
          '@type': 'AggregateOffer',
          'priceCurrency': 'INR',
          'price': 'Contact for pricing',
          'availability': 'https://schema.org/InStock',
          'offerCount': 1
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.basdilspharma.com/products/${product.slug}#breadcrumb`,
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
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': product.name,
            'item': `https://www.basdilspharma.com/products/${product.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <PageMeta
        title={`${product.displayName} | ${product.categoryLabel}`}
        description={`${product.displayName} by Basdils Pharmaceuticals - ${product.shortDescription}`}
        canonical={`https://www.basdilspharma.com/products/${product.slug}`}
        ogImage={`https://www.basdilspharma.com${product.image}`}
        schema={productSchema}
      />
      {/* Hero Section with Product Header */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-gray-600">
            <Link to="/products" className="hover:text-primary-600 transition-colors">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </div>

          {/* Product Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="product-image-frame w-full max-w-md rounded-lg p-5 shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 sm:h-80 object-contain"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = '/Images/logo.png';
                  }}
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">{formatTag(product.therapeuticTags[0])}</p>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-2 leading-none">{product.displayName}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.categoryLabel}</p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-vial text-primary-600 text-2xl" />
                  <span className="text-gray-600">{product.dosageForm}</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-box text-primary-600 text-2xl" />
                  <span className="text-gray-600">{product.packSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="p-8 bg-white rounded-lg border border-primary-100 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
              <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">{product.overview}</p>
              {product.fullDescription && (
                <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
              )}
            </div>

            {/* Short Description Highlight */}
            <div className="p-8 bg-gradient-to-r from-primary-50 via-white to-secondary-50 rounded-lg border border-primary-100 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-lg font-semibold text-primary-900">{product.shortDescription}</p>
            </div>

            {/* Ingredients Section */}
            <div className="p-8 bg-white rounded-lg border border-primary-100 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-6">{product.ingredientsLabel}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.ingredients.map((ingredient: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg border border-primary-100 hover:border-secondary-300 transition-colors">
                    <i className="fa-solid fa-flask text-primary-600 text-lg" />
                    <span className="text-gray-700 font-medium">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="p-8 bg-white rounded-lg border border-primary-100 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-6">Key Benefits</h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <i className="fa-solid fa-check-circle text-secondary-500 text-lg mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-8">
            {/* Key Information Card */}
            <div className="p-8 bg-white rounded-lg border border-primary-100 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-xl font-bold font-display text-gray-900 mb-6">Product Information</h4>
              
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <label className="text-sm font-semibold text-gray-600 block mb-1">Category</label>
                  <span className="text-gray-900 font-medium">{product.categoryLabel}</span>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <label className="text-sm font-semibold text-gray-600 block mb-1">Dosage Form</label>
                  <span className="text-gray-900 font-medium">{product.dosageForm}</span>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <label className="text-sm font-semibold text-gray-600 block mb-1">Pack Size</label>
                  <span className="text-gray-900 font-medium">{product.packSize}</span>
                </div>

                <div className="pb-4 border-b border-gray-200">
                  <label className="text-sm font-semibold text-gray-600 block mb-1">Therapeutic Area</label>
                  <span className="text-gray-900 font-medium">{formatTag(product.therapeuticTags[0])}</span>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-600 block mb-1">Dosage</label>
                  <span className="text-gray-900 font-medium">{product.dosage}</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-8 bg-gradient-to-br from-primary-900 to-primary-950 rounded-lg text-white hover:shadow-glow transition-all duration-300 animate-fade-in border border-secondary-300/20" style={{ animationDelay: '0.5s' }}>
              <h4 className="text-xl font-bold font-display mb-2">Interested in this product?</h4>
              <p className="text-primary-100 mb-6">Get more information or place an enquiry with our team.</p>
              
              <div className="space-y-3">
                <a href="tel:+919931691959" className="block w-full px-6 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-secondary-50 transition-all duration-300 text-center">
                  <i className="fa-solid fa-phone mr-2" />
                  Call Us
                </a>
                <Link to="/contact" className="block w-full px-6 py-3 bg-primary-800 hover:bg-primary-900 text-white font-semibold rounded-lg transition-all duration-300 text-center border-2 border-white/30">
                  <i className="fa-solid fa-envelope mr-2" />
                  Enquire Now
                </Link>
              </div>
            </div>

            {/* Tags */}
            <div className="p-8 bg-white rounded-lg border border-primary-100 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="text-lg font-bold font-display text-gray-900 mb-4">Product Tags</h4>
              <div className="flex flex-wrap gap-2">
                {product.categoryTags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold hover:bg-primary-100 transition-colors cursor-pointer">
                    {formatTag(tag)}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Navigation Section */}
      {(prevProduct || nextProduct) && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-8">Related Products</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prevProduct ? (
                <Link to={`/products/${prevProduct.slug}`} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all duration-300 group flex flex-col items-center text-center">
                  <i className="fa-solid fa-chevron-left text-primary-600 text-2xl mb-2 group-hover:translate-x-2 transition-transform" />
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">Previous</span>
                  <span className="text-lg font-bold font-display text-gray-900">{prevProduct.name}</span>
                </Link>
              ) : (
                <div />
              )}
              
              <Link to="/products" className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all duration-300 flex flex-col items-center text-center">
                <i className="fa-solid fa-th text-primary-600 text-2xl mb-2" />
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">View All</span>
                <span className="text-lg font-bold font-display text-gray-900">Product Catalogue</span>
              </Link>

              {nextProduct ? (
                <Link to={`/products/${nextProduct.slug}`} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-primary-300 transition-all duration-300 group flex flex-col items-center text-center">
                  <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-1">Next</span>
                  <span className="text-lg font-bold font-display text-gray-900">{nextProduct.name}</span>
                  <i className="fa-solid fa-chevron-right text-primary-600 text-2xl mt-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
