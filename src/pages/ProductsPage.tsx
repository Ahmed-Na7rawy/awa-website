import React, { useState, useEffect } from 'react';
import { PRODUCTS_LIST } from '../data/siteData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsProps> = ({ initialSubId, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    initialSubId === 'retail' || initialSubId === 'industrial' ? initialSubId : 'all'
  );

  useEffect(() => {
    if (initialSubId === 'retail' || initialSubId === 'industrial') {
      setActiveCategory(initialSubId);
    }
  }, [initialSubId]);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter(p => p.category === activeCategory);

  return (
    <div className="products-page">
      {/* Header Banner */}
      <section className="section section-dark" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">Product Catalog & Consumer Brands</div>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
            AWA Product Portfolio & Consumer Brands
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px' }}>
            From high-performance industrial stabilizer systems to household consumer retail brands including Sweet & Slim®, SquEasy®, and Yalla®.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Catalog */}
      <section className="section section-stone">
        <div className="container">
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[
              { id: 'all', label: `All Products (${PRODUCTS_LIST.length})` },
              { id: 'retail', label: 'Consumer & Retail Brands' },
              { id: 'industrial', label: 'Industrial Ingredients & Stabilizers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`btn ${activeCategory === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)', padding: '0.6rem 1.5rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{
                  height: '280px',
                  background: '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  borderBottom: '1px solid var(--border-color)'
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

                <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)' }}>
                      {prod.category === 'retail' ? 'Consumer Retail Brand' : 'B2B Industrial System'}
                    </div>
                    {prod.brand && (
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                        {prod.brand}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                    {prod.name}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                    {prod.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                      Key Features:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {prod.features.map((f, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={16} color="var(--primary)" /> <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {prod.specs && (
                    <div style={{ background: 'var(--stone-bg)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', border: '1px solid var(--stone-border)' }}>
                      {prod.specs.map((s, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.825rem', padding: '0.2rem 0' }}>
                          <span style={{ color: 'var(--text-muted)' }}>{s.label}:</span>
                          <span style={{ fontWeight: 700, color: 'var(--dark-navy)' }}>{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={onOpenQuote}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 'auto', width: '100%' }}
                  >
                    <span>Request Sample & Product Sheet</span>
                    <ArrowRight size={14} />
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
