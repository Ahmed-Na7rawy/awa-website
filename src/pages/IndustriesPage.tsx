import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Settings, Cpu, Sparkles, ArrowRight } from 'lucide-react';

interface IndustriesProps {
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const IndustriesPage: React.FC<IndustriesProps> = ({ onOpenQuote, onNavigate }) => {
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();
  return (
    <div className="industries-page">
      {/* Header Banner */}
      <PageHero
        eyebrow="Industrial Infrastructure"
        title="Manufacturing Plants & Precision Production"
        subtitle="Automated blending complexes and clean packaging facilities in New Borg El-Arab City serving regional food processors and consumer retail markets."
        backgroundImage="/images/pages/industries/image33.jpg"
      />

      {/* Main Overview */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">New Borg El-Arab Plant</div>
              <h2 className="section-title">Automated Production Lines Engineered for Food Purity</h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                AWA Group’s manufacturing complex in the 4th Industrial Zone of New Borg El-Arab City spans specialized cleanroom production zones for dry powder blending, liquid stabilizer formulation, and retail consumer packaging.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                With computerized micro-dosing systems, stainless steel 316L mixing vessels, and strict HEPA air filtration, our facility guarantees complete batch-to-batch uniformity and zero cross-contamination.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenQuote} className="btn btn-primary">
                  <span>Inquire For Contract Toll Manufacturing</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('products')} className="btn btn-secondary">
                  View Consumer Brands
                </button>
              </div>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/industries/image33.jpg" 
                alt="AWA Borg El Arab Manufacturing Plant" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/customercare.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Production Capabilities</div>
            <h2 className="section-title">Industrial Processing Lines</h2>
            <p className="section-desc">
              Flexible batch sizes and custom manufacturing options for domestic and export clients.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="reveal-fade-up" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Settings size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>High-Shear Powder Blending</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Computerized ribbon and paddle blenders capable of uniform dispersion for micro-ingredients, hydrocolloids, and vitamin premixes in 25kg multi-wall bags.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                Capacity: 1,500 MT / Month
              </div>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.1s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Cpu size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Consumer Retail Packaging</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Automated multi-lane sachet packaging (Sweet & Slim), squeeze bottle filling lines (SquEasy purées), and nitrogen-flushed pouch filling.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                Multi-Format Lines
              </div>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.2s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Sparkles size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Private Label & Toll Manufacturing</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Turnkey contract manufacturing for multinational FMCG brands, retail supermarkets, and food service chains with full recipe confidentiality.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                Turnkey OEM / ODM Solutions
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
