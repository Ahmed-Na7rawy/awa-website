import React, { useState } from 'react';
import { PRODUCTS_LIST } from '../data/siteData';
import { AwaBrandShowcase } from '../components/AwaBrandShowcase';
import { CheckCircle2, ArrowRight, Sparkles, Layers, ShoppingBag } from 'lucide-react';

interface ProductsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsProps> = ({ initialSubId, onOpenQuote }) => {
  // If initialSubId is one of the retail brands or 'retail', default to 'retail' view
  const isInitialRetail = 
    initialSubId === 'retail' || 
    initialSubId === 'sweet-and-slim' || 
    initialSubId === 'squeasy' || 
    initialSubId === 'yalla-drinks';

  const [activeTab, setActiveTab] = useState<'retail' | 'industrial'>(
    isInitialRetail ? 'retail' : 'retail'
  );

  const industrialProducts = PRODUCTS_LIST.filter(p => p.category === 'industrial');

  return (
    <div>
      {/* Top Selector Banner */}
      <section className="page-banner" style={{ padding: '3.5rem 0 2.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-dark">
            <Sparkles size={14} /> Product Divisions
          </span>
          <h1 className="page-banner-title" style={{ fontSize: '2.75rem', marginBottom: '0.5rem' }}>
            Products & Consumer Brands
          </h1>
          <p className="page-banner-subtitle" style={{ margin: '0 auto 2rem auto' }}>
            Discover our market-leading FMCG packaged consumer brands or explore our B2B industrial ingredient systems.
          </p>

          {/* Mode Switcher */}
          <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.08)', padding: '0.4rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <button
              onClick={() => setActiveTab('retail')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeTab === 'retail' ? 'linear-gradient(135deg, #128d46 0%, #0fa89d 100%)' : 'transparent',
                color: activeTab === 'retail' ? '#ffffff' : '#94a3b8',
                boxShadow: activeTab === 'retail' ? '0 4px 15px rgba(18, 141, 70, 0.4)' : 'none'
              }}
            >
              <ShoppingBag size={18} />
              <span>Consumer Retail Brands (B2C)</span>
            </button>
            <button
              onClick={() => setActiveTab('industrial')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeTab === 'industrial' ? 'linear-gradient(135deg, #128d46 0%, #0fa89d 100%)' : 'transparent',
                color: activeTab === 'industrial' ? '#ffffff' : '#94a3b8',
                boxShadow: activeTab === 'industrial' ? '0 4px 15px rgba(18, 141, 70, 0.4)' : 'none'
              }}
            >
              <Layers size={18} />
              <span>Industrial Ingredients (B2B)</span>
            </button>
          </div>
        </div>
      </section>

      {/* RENDER AWA B2C OR INDUSTRIAL B2B */}
      {activeTab === 'retail' ? (
        <AwaBrandShowcase
          initialBrandId={initialSubId}
          onOpenQuote={onOpenQuote}
        />
      ) : (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="badge">B2B Ingredient Systems</span>
              <h2 className="section-title">Industrial Stabilizers & Additives</h2>
              <p className="section-desc">
                Custom functional blends engineered for commercial food factories, dairies, and bakeries.
              </p>
            </div>

            <div className="cards-3col">
              {industrialProducts.map((prod) => (
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
                    height: '240px',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                    borderBottom: '1px solid #e2e8f0'
                  }}>
                    <img
                      src={prod.image}
                      alt={prod.name}
                      style={{ maxHeight: '190px', maxWidth: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/pages/products/industrial.jpg';
                      }}
                    />
                  </div>

                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span className="badge" style={{ alignSelf: 'flex-start', margin: '0 0 0.75rem 0' }}>
                      B2B Formulation
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.5rem' }}>
                      {prod.name}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                      {prod.description}
                    </p>

                    <div style={{ marginBottom: '1.25rem' }}>
                      <strong style={{ fontSize: '0.85rem', color: '#111a2e', display: 'block', marginBottom: '0.4rem' }}>
                        Key Characteristics:
                      </strong>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {prod.features.map((f, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: '#475569' }}>
                            <CheckCircle2 size={14} color="#128d46" /> <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {prod.specs && (
                      <div style={{ background: '#f8fafc', padding: '0.75rem 0.9rem', borderRadius: '8px', marginBottom: '1.25rem', border: '1px solid #e2e8f0' }}>
                        {prod.specs.map((s, idx) => (
                          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '0.2rem 0' }}>
                            <span style={{ color: '#64748b' }}>{s.label}:</span>
                            <span style={{ fontWeight: 600, color: '#111a2e' }}>{s.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={onOpenQuote}
                      className="btn btn-primary btn-sm"
                      style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                    >
                      Request Technical Spec Sheet <ArrowRight size={14} />
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
