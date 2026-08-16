import React from 'react';
import { Factory, ShieldCheck, CheckCircle2, ArrowRight, Settings, Cpu, Sparkles } from 'lucide-react';

interface IndustriesProps {
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const IndustriesPage: React.FC<IndustriesProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">Manufacturing Plants</span>
          <h1 className="page-banner-title">Industries & Precision Production</h1>
          <p className="page-banner-subtitle">
            Modern blending and automated packaging facilities in New Borg El-Arab City serving industrial and FMCG markets.
          </p>
        </div>
      </section>

      {/* Main Manufacturing Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge">New Borg El-Arab Plant</span>
              <h2 className="section-title">Automated Production Lines Engineered for Purity</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                AWA Group’s modern manufacturing facility in the 4th Industrial Zone of New Borg El-Arab City spans specialized cleanroom production zones for dry powder blending, liquid formulation, and consumer product packaging.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                With computerized batch dosing, stainless steel 316L blending vessels, and strict HEPA air filtration, our facility guarantees zero cross-contamination and highest sanitary assurance.
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={onOpenQuote} className="btn btn-primary">
                  Inquire For Contract Manufacturing <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('products')} className="btn btn-secondary">
                  View Manufactured Products
                </button>
              </div>
            </div>

            <div>
              <img 
                src="/images/pages/industries/image33.jpg" 
                alt="AWA Industries Plant" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/customercare.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Manufacturing Lines */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge">Production Lines</span>
            <h2 className="section-title">Industrial Processing Capabilities</h2>
            <p className="section-desc">
              Customized manufacturing options tailored for domestic and export clients.
            </p>
          </div>

          <div className="cards-3col">
            <div style={{ background: '#ffffff', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Settings size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>High-Shear Powder Blending</h3>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Ribbon and paddle blenders capable of uniform dispersion for micro-ingredients, hydrocolloids, and vitamin premixes in 25kg bulk bags.
              </p>
              <span className="badge" style={{ fontSize: '0.75rem', margin: 0 }}>Capacity: 1,500 MT / Month</span>
            </div>

            <div style={{ background: '#ffffff', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Cpu size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Consumer Retail Packaging</h3>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Automated multi-lane sachet packaging (for Sweet & Slim), squeeze bottle filling lines (for SquEasy), and nitrogen-flushed pouch packaging.
              </p>
              <span className="badge" style={{ fontSize: '0.75rem', margin: 0 }}>Multi-Format Lines</span>
            </div>

            <div style={{ background: '#ffffff', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Sparkles size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Private Label & Toll Manufacturing</h3>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Complete turnkey contract manufacturing for FMCG brands, retail supermarkets, and food service chains with recipe formulation and design.
              </p>
              <span className="badge" style={{ fontSize: '0.75rem', margin: 0 }}>Custom OEM / ODM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
