import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Truck, ThermometerSnowflake, Clock, ArrowRight } from 'lucide-react';

interface LogisticsProps {
  onOpenQuote: () => void;
}

export const LogisticsPage: React.FC<LogisticsProps> = ({ onOpenQuote }) => {
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();
  const sectionRef3 = useScrollReveal();
  return (
    <div className="logistics-page">
      {/* Header Banner */}
      <PageHero
        eyebrow="Supply Chain & Logistics Division"
        title="Cold Chain & Integrated Logistics Infrastructure"
        subtitle="Specialized multi-temperature warehousing, rapid customs clearance, and nationwide climate-controlled fleet distribution for sensitive food raw materials."
        backgroundImage="/images/pages/logistics/Image30.jpg"
      />

      {/* Main Logistics Overview */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">Cold Chain Integrity</div>
              <h2 className="section-title">Preserving Ingredient Purity From Port of Entry to Plant Floor</h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Food ingredients like enzymes, bacterial cultures, functional proteins, and liquid flavors demand precise thermal control. AWA Group’s logistics division ensures unbroken cold chains, fast maritime port clearance, and rapid dispatch across all Egyptian industrial zones.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Our logistics complexes in Alexandria Port vicinity and Cairo are monitored 24/7 with digital telemetry, humidity regulators, and automated backup power generators.
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>Inquire About Supply Chain Services</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/logistics/Image30.jpg" 
                alt="AWA Logistics Warehouse Facility" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Logistics Capabilities */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Services & Technical Specs</div>
            <h2 className="section-title">Full-Spectrum Supply Chain Capabilities</h2>
            <p className="section-desc">
              Tailored storage and transport solutions fully compliant with NFSA and international food safety protocols.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="reveal-fade-up" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ThermometerSnowflake size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Multi-Temperature Warehousing</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Dedicated zones for ambient (+15°C to +25°C), chilled (+2°C to +8°C), and deep frozen storage (-18°C) equipped with real-time temperature data logging.
              </p>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.1s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Truck size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Refrigerated Fleet Distribution</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Modern fleet of insulated and reefer trucks delivering directly to manufacturing plants and regional fulfillment centers across Egypt.
              </p>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.2s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Clock size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Fast Customs Clearance</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Decades of expertise navigating Egyptian food authority regulations (NFSA), GOEIC inspections, and port quarantine protocols for rapid container release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Logistics Showcase */}
      <section className="section" ref={sectionRef3}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <div className="reveal-fade-up">
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img 
                  src="/images/pages/logistics/Image31.jpg" 
                  alt="AWA Distribution Center High Density Racking" 
                  className="reveal-zoom"
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/logistics/Image2-7.jpg';
                }}
              />
              </div>
              <h4 style={{ marginTop: '1.25rem', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>High-Density Racking & Pallet Management</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>FIFO inventory management systems with complete batch lot traceability.</p>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.2s' }}>
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img 
                  src="/images/pages/logistics/Image32.jpg" 
                  alt="AWA Cold Storage Sanitation" 
                  className="reveal-zoom"
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                }}
              />
              </div>
              <h4 style={{ marginTop: '1.25rem', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>Strict Sanitation & Hygiene Protocols</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>FSSC 22000 compliant hygiene controls across all loading docks and cold cells.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
