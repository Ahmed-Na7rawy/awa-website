import React from 'react';
import { PRODUCTS_LIST, ProductItem } from '../data/siteData';
import { CheckCircle2, ArrowRight, ShoppingBag, Sparkles, Filter, Image as ImageIcon } from 'lucide-react';

interface ProductsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsProps> = ({ initialSubId, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = React.useState<string>(
    initialSubId === 'retail' || initialSubId === 'industrial' ? initialSubId : 'all'
  );
  const [selectedProduct, setSelectedProduct] = React.useState<ProductItem | null>(null);

  React.useEffect(() => {
    if (initialSubId === 'retail' || initialSubId === 'industrial') {
      setActiveCategory(initialSubId);
    } else if (initialSubId) {
      const match = PRODUCTS_LIST.find(p => p.id === initialSubId);
      if (match) setSelectedProduct(match);
    }
  }, [initialSubId]);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">
            <Sparkles size={14} /> Product Catalog
          </span>
          <h1 className="page-banner-title">Our Products & Consumer Brands</h1>
          <p className="page-banner-subtitle">
            From high-tech functional ingredients to household consumer retail favorites including Sweet & Slim, SquEasy, and Yalla.
          </p>
        </div>
      </section>

      {/* Products Filter Tabs */}
      <section className="section">
        <div className="container">
          <div className="tabs-nav" style={{ justifyContent: 'center' }}>
            <button
              onClick={() => setActiveCategory('all')}
              className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
            >
              All Products ({PRODUCTS_LIST.length})
            </button>
            <button
              onClick={() => setActiveCategory('retail')}
              className={`tab-btn ${activeCategory === 'retail' ? 'active' : ''}`}
            >
              Consumer & Retail Brands
            </button>
            <button
              onClick={() => setActiveCategory('industrial')}
              className={`tab-btn ${activeCategory === 'industrial' ? 'active' : ''}`}
            >
              Industrial Ingredients & Stabilizers
            </button>
          </div>

          {/* Product Cards Grid */}
          <div className="cards-2col">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="premium-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  height: '270px',
                  background: prod.category === 'retail' ? '#f8fafc' : '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  borderBottom: '1px solid #e2e8f0',
                  position: 'relative'
                }}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{
                      maxHeight: '230px',
                      maxWidth: '100%',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/pages/products/industrial.jpg';
                    }}
                  />
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="badge" style={{ margin: 0 }}>
                      {prod.category === 'retail' ? 'Consumer Retail Brand' : 'B2B Industrial System'}
                    </span>
                    {prod.brand && (
                      <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#128d46' }}>
                        {prod.brand}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>
                    {prod.name}
                  </h3>

                  <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                    {prod.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <strong style={{ fontSize: '0.875rem', color: '#111a2e', display: 'block', marginBottom: '0.5rem' }}>
                      Key Features:
                    </strong>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {prod.features.map((f, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#475569' }}>
                          <CheckCircle2 size={15} color="#128d46" /> <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging & specs if available */}
                  {prod.specs && (
                    <div style={{ background: '#f8fafc', padding: '0.85rem 1.1rem', borderRadius: '10px', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                      {prod.specs.map((s, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', padding: '0.25rem 0' }}>
                          <span style={{ color: '#64748b' }}>{s.label}:</span>
                          <span style={{ fontWeight: 600, color: '#111a2e' }}>{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Gallery Thumbnails from images folder */}
                  {prod.gallery && prod.gallery.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                        Product Line Variants & Formats:
                      </span>
                      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                        {prod.gallery.map((gImg, gIdx) => (
                          <img
                            key={gIdx}
                            src={gImg}
                            alt="Product variant"
                            style={{
                              height: '56px',
                              width: '56px',
                              objectFit: 'contain',
                              background: '#f1f5f9',
                              borderRadius: '8px',
                              padding: '0.25rem',
                              border: '1px solid #e2e8f0',
                              flexShrink: 0
                            }}
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={onOpenQuote}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                  >
                    Request Sample & Commercial Sheet <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
