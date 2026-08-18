import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Leaf, BarChart3, Users2, CheckCircle2, ArrowRight } from 'lucide-react';

interface SustainabilityProps {
  onOpenQuote: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityProps> = ({ onOpenQuote }) => {
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();
  return (
    <div className="sustainability-page">
      {/* Header Banner */}
      <PageHero
        eyebrow="ESG & Responsibility"
        title="Sustainability & ESG Commitment"
        subtitle="Operating responsibly through our 3 Core Pillars: Assess, Monitor, and Engage across raw material sourcing, production energy efficiency, and community well-being."
        backgroundImage="/images/pages/sustainability/esg.jpg"
      />

      {/* ESG Framework */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Framework</div>
            <h2 className="section-title">The Three Pillars of AWA Sustainability</h2>
            <p className="section-desc">
              Embedding environmental stewardship, health & safety standards (ISO 14001 & ISO 45001), and community responsibility into our daily operations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* Assess */}
            <div className="reveal-fade-up" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Leaf size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>1. Assess</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                We continuously evaluate our ecological footprint from raw ingredient sourcing to factory energy consumption, packaging recyclability, and wastewater management.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> Supplier ESG compliance audits
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> Carbon footprint baselining
                </li>
              </ul>
            </div>

            {/* Monitor */}
            <div className="reveal-fade-up" style={{ animationDelay: '0.1s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <BarChart3 size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>2. Monitor</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Real-time tracking of water consumption, energy efficiency in blending plants, cold chain refrigeration refrigerants, and workplace health metrics under ISO 14001.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> Energy metering & LED retrofitting
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> Zero-landfill waste reduction goals
                </li>
              </ul>
            </div>

            {/* Engage */}
            <div className="reveal-fade-up" style={{ animationDelay: '0.2s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Users2 size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>3. Engage</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Actively fostering growth for our workforce through continuous safety training, supporting local community development in Alexandria and Borg El-Arab City, and promoting healthy nutritional formulations.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> Health & wellness nutrition formulations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> Community CSR partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Clean Label Innovation */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">Nutritional Health Innovation</div>
              <h2 className="section-title">Enabling Healthier Diets with Sugar & Fat Reduction</h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Our application labs specialize in developing functional formulations that allow food processors to significantly reduce added sugars, saturated fats, and synthetic additives without compromising taste, mouthfeel, or texture.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Through brands like <strong>Sweet & Slim</strong> and clean-label natural bio-preservative systems, we help build a healthier future for Egyptian and Arab families.
              </p>
              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>Inquire About Clean Label Solutions</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/sustainability/esg.jpg" 
                alt="AWA ESG Green Commitment" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/sustainability/sustainability.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
