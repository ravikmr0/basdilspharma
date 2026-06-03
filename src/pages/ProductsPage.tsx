import { useDeferredValue, useMemo, useState, useTransition } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { productFilters, products } from '../data/catalog';

type FilterState = {
  category: string;
  dosage: string;
  therapeutic: string;
};

function matchesFilter(values: string[], filter: string) {
  return filter === 'all' || values.includes(filter);
}

export function ProductsPage() {
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);
  const [, startTransition] = useTransition();
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    dosage: 'all',
    therapeutic: 'all'
  });

  const filteredProducts = useMemo(() => {
    const query = deferredSearch.trim().toLowerCase();
    return products.filter((product) => {
      const text = `${product.name} ${product.displayName} ${product.shortDescription} ${product.categoryLabel}`.toLowerCase();
      const queryMatch = !query || text.includes(query);
      const categoryMatch = matchesFilter(product.categoryTags, filters.category);
      const dosageMatch = matchesFilter(product.dosageTags, filters.dosage);
      const therapeuticMatch = matchesFilter(product.therapeuticTags, filters.therapeutic);
      return queryMatch && categoryMatch && dosageMatch && therapeuticMatch;
    });
  }, [deferredSearch, filters.category, filters.dosage, filters.therapeutic]);

  return (
    <>
      <section className="section-shell">
        <div className="container split-layout">
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Healthcare Solutions For Every Need"
            description="BASDILS Pharmaceuticals offers a comprehensive portfolio of nutraceuticals, Ayurvedic medicines, women's healthcare, liver care, iron supplements, bone health, joint care, and general wellness products designed to improve patient outcomes and quality of life."
          />
          <div className="about-panel glass-panel reveal">
            <div className="about-grid-cards">
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-person-pregnant" /></span>
                <h4>Women's Healthcare</h4>
                <p>Formulations for reproductive and general wellness support.</p>
              </article>
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-mortar-pestle" /></span>
                <h4>Ayurvedic Products</h4>
                <p>Traditional herbal wellness with a modern quality framework.</p>
              </article>
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-circle-plus" /></span>
                <h4>Hematinics</h4>
                <p>Iron and nutrition support for daily health needs.</p>
              </article>
              <article className="info-card">
                <span className="icon-wrap"><i className="fa-solid fa-bone" /></span>
                <h4>Bone &amp; Joint Care</h4>
                <p>Supportive therapies for musculoskeletal wellness.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="filters">
        <div className="container">
          <div className="toolbar glass-panel reveal">
            <label className="search-field">
              <i className="fa-solid fa-magnifying-glass" />
              <input
                type="search"
                placeholder="Search product name, category, or segment"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>

            <div className="filter-block">
              <p className="eyebrow">Filter By Category</p>
              <div className="filter-chips">
                {productFilters.category.map((option) => (
                  <button
                    key={option.value}
                    className={`chip ${filters.category === option.value ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => startTransition(() => setFilters((current) => ({ ...current, category: option.value })))}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-block">
              <p className="eyebrow">Filter By Dosage Form</p>
              <div className="filter-chips">
                {productFilters.dosage.map((option) => (
                  <button
                    key={option.value}
                    className={`chip ${filters.dosage === option.value ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => startTransition(() => setFilters((current) => ({ ...current, dosage: option.value })))}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-block">
              <p className="eyebrow">Filter By Therapeutic Area</p>
              <div className="filter-chips">
                {productFilters.therapeutic.map((option) => (
                  <button
                    key={option.value}
                    className={`chip ${filters.therapeutic === option.value ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => startTransition(() => setFilters((current) => ({ ...current, therapeutic: option.value })))}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <SectionHeading
            eyebrow="Featured Catalogue"
            title="Major products and therapeutic segments"
            description="Each product card links to an individual detail page with composition, benefits, dosage, and pack size information."
          />

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container cta-banner glass-panel reveal">
          <div>
            <p className="eyebrow">Need the full catalogue?</p>
            <h2>Request a product list or download the portfolio</h2>
          </div>
          <div className="cta-actions">
            <Link className="button button-primary" to="/contact">
              Request Product List
            </Link>
            <Link className="button button-secondary" to="/contact">
              Download Catalogue
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
