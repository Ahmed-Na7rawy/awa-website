import React from 'react';
import { Leaf, BarChart3, Users2, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface SustainabilityProps {
  onOpenQuote: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityProps> = ({ onOpenQuote }) => {
  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">
            <Sparkles size={14} /> ESG & Responsibility
          </span>
          <h1 className="page-banner-title">Sustainability & ESG Commitment</h1>
          <p className="page-banner-subtitle">
            Operating sustainably through our 3 Core Pillars: Assess, Monitor, and Engage across all business sectors.
          </p>
        </div>
      </section>

      {/* ESG Framework */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Framework</span>
            <h2 className="section-title">The Three Pillars of AWA Sustainability</h2>
            <p className="section-desc">
              Embedding environmental stewardship, health safety, and community responsibility into our daily operations.
            </p>
          </div>

          <div className="cards-3col">
            {/* Assess */}
            <div className="premium-card" style={{ padding: '2.5rem 2rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Leaf size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>1. Assess</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                We continuously evaluate our ecological footprint from raw ingredient sourcing to factory energy consumption, packaging recyclability, and wastewater management.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#475569' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#128d46" /> Supplier ESG audits
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#128d46" /> Carbon footprint baselining
                </li>
              </ul>
            </div>

            {/* Monitor */}
            <div className="premium-card" style={{ padding: '2.5rem 2rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <BarChart3 size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>2. Monitor</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Real-time tracking of water consumption, energy efficiency in blending plants, cold chain refrigeration refrigerants, and workplace health metrics under ISO 14001 & ISO 45001.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#475569' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#128d46" /> Energy metering & LED retrofitting
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#128d46" /> Zero-landfill waste reduction goals
                </li>
              </ul>
            </div>

            {/* Engage */}
            <div className="premium-card" style={{ padding: '2.5rem 2rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <Users2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>3. Engage</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Actively fostering growth for our workforce through continuous training, supporting local community development in Alexandria and New Borg El-Arab City, and promoting healthy nutritional formulations.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#475569' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#128d46" /> Health & wellness nutrition recipes
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="#128d46" /> Community CSR partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Innovation in Action with Original Images */}
      <section className="section section-alt pattern-grid">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Nutritional Health</span>
              <h2 className="section-title">Enabling Healthier Diets with Sugar & Fat Reduction</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Our application labs specialize in developing functional formulations that allow food manufacturers to significantly reduce added sugars, saturated fats, and synthetic additives without compromising taste or texture.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Through brands like <strong>Sweet & Slim</strong> and clean-label natural antimicrobial systems (AWA-Guard), we help build a healthier future for Egyptian and Arab families.
              </p>
              <button onClick={onOpenQuote} className="btn btn-primary">
                Inquire About Clean Label Formulations <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <img 
                src="/images/pages/sustainability/esg.jpg" 
                alt="AWA ESG Commitment" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/sustainability/sustainability.jpg';
                }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                <img 
                  src="/images/pages/sustainability/Image39.jpg" 
                  alt="AWA Green Practice 1" 
                  style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '10px' }} 
                />
                <img 
                  src="/images/pages/sustainability/Image40.jpg" 
                  alt="AWA Green Practice 2" 
                  style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '10px' }} 
                />
                <img 
                  src="/images/pages/sustainability/Image41.jpg" 
                  alt="AWA Green Practice 3" 
                  style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '10px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
