import React from 'react';
import { Truck, Warehouse, ShieldCheck, ThermometerSnowflake, Clock, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';

interface LogisticsProps {
  onOpenQuote: () => void;
}

export const LogisticsPage: React.FC<LogisticsProps> = ({ onOpenQuote }) => {
  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">Supply Chain & Freight</span>
          <h1 className="page-banner-title">Cold Chain & Integrated Logistics</h1>
          <p className="page-banner-subtitle">
            Specialized temperature-controlled warehousing, customs clearance, and nationwide delivery for sensitive food ingredients.
          </p>
        </div>
      </section>

      {/* Main Logistics Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Cold Chain Excellence</span>
              <h2 className="section-title">Preserving Ingredient Purity From Port to Plant</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Food ingredients like enzymes, cultures, functional proteins, and flavors demand meticulous thermal management. AWA Group’s dedicated logistics division ensures uninterrupted cold chains, fast maritime clearance, and rapid dispatch across all Egyptian governorates.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Our logistics hubs in Alexandria Port vicinity and Cairo are monitored 24/7 with digital data loggers, humidity controls, and backup power generators.
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                Inquire About Logistics Services <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <img 
                src="/images/pages/logistics/Image30.jpg" 
                alt="AWA Logistics Warehouse" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Capabilities Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge">Services</span>
            <h2 className="section-title">Full-Spectrum Supply Chain Capabilities</h2>
            <p className="section-desc">
              Tailored storage and transport solutions compliant with NFSA and international food safety protocols.
            </p>
          </div>

          <div className="cards-3col">
            <div style={{ background: '#ffffff', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <ThermometerSnowflake size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Multi-Temperature Warehousing</h3>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Dedicated zones for ambient (+15°C to +25°C), chilled (+2°C to +8°C), and frozen storage (-18°C) equipped with real-time temperature telemetry.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Truck size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Refrigerated Fleet Distribution</h3>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Modern fleet of insulated and reefer trucks delivering directly to manufacturing plants and regional fulfillment centers across Egypt.
              </p>
            </div>

            <div style={{ background: '#ffffff', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Clock size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Fast Customs Clearance</h3>
              <p style={{ color: '#64748b', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Decades of expertise navigating Egyptian food authority regulations (NFSA), GOEIC inspections, and port quarantine protocols for swift port release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Image Showcase */}
      <section className="section">
        <div className="container">
          <div className="cards-2col">
            <div>
              <img 
                src="/images/pages/logistics/Image31.jpg" 
                alt="AWA Distribution Center" 
                style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/logistics/Image2-7.jpg';
                }}
              />
              <h4 style={{ marginTop: '1rem', fontSize: '1.1rem', fontWeight: 700 }}>High-Density Racking & Pallet Management</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>FIFO inventory systems with complete batch lot tracking.</p>
            </div>

            <div>
              <img 
                src="/images/pages/logistics/Image32.jpg" 
                alt="AWA Cold Storage" 
                style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                }}
              />
              <h4 style={{ marginTop: '1rem', fontSize: '1.1rem', fontWeight: 700 }}>Strict Sanitation & Pest Management</h4>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>ISO 22000 compliant hygiene protocols across all loading docks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
