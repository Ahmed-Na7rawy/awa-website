import React, { useState, useEffect } from 'react';
import { PRODUCTS_LIST } from '../data/siteData';
import { AwaBrandShowcase } from '../components/AwaBrandShowcase';
import { CheckCircle2, ArrowRight, Layers, ShoppingBag } from 'lucide-react';

interface ProductsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsProps> = ({ initialSubId, onOpenQuote }) => {
  const isInitialRetail = 
    initialSubId === 'retail' || 
    initialSubId === 'sweet-and-slim' || 
    initialSubId === 'squeasy' || 
    initialSubId === 'yalla-drinks';

  const [activeTab, setActiveTab] = useState<'retail' | 'industrial'>(
    isInitialRetail ? 'retail' : 'retail'
  );

  useEffect(() => {
    if (isInitialRetail) {
      setActiveTab('retail');
    } else if (initialSubId === 'industrial') {
      setActiveTab('industrial');
    }
  }, [initialSubId]);

  const industrialProducts = PRODUCTS_LIST.filter(p => p.category === 'industrial');

  return (
    <div className="products-page">
      {/* Top Banner & Selector */}
      <section className="section section-dark" style={{ padding: '5rem 0 3.5rem 0' }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">AWA Portfolio</div>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
            Products & Consumer Brands
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            Explore AWA Group’s dual capability: innovative consumer retail FMCG brands engineered for households, alongside industrial functional stabilizer systems built for food processing plants.
          </p>

          {/* Selector Switcher */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('retail')}
              className={`btn ${activeTab === 'retail' ? 'btn-primary' : 'btn-outline-white'}`}
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              <ShoppingBag size={18} />
              <span>Consumer Retail Brands</span>
            </button>
            <button
              onClick={() => setActiveTab('industrial')}
              className={`btn ${activeTab === 'industrial' ? 'btn-primary' : 'btn-outline-white'}`}
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              <Layers size={18} />
              <span>Industrial Ingredients & Stabilizers</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      {activeTab === 'retail' ? (
        <AwaBrandShowcase initialBrandId={initialSubId} onOpenQuote={onOpenQuote} />
      ) : (
        <section className="section section-stone">
          <div className="container">
            <div className="section-header">
              <div className="eyebrow">Industrial Solutions</div>
              <h2 className="section-title">Functional Ingredient Blends</h2>
              <p className="section-desc">
                High-performance stabilizer systems, emulsifiers, hydrocolloid matrices, and shelf-life extenders manufactured at our Borg El-Arab facility.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
              {industrialProducts.map((prod) => (
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
                    height: '240px',
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
                        maxHeight: '200px',
                        maxWidth: '100%',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/pages/products/industrial.jpg';
                      }}
                    />
                  </div>

                  <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                      B2B Industrial System
                    </div>

                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                      {prod.name}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                      {prod.description}
                    </p>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                        Key Technical Features:
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
                      <span>Request Formulation Sample</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
