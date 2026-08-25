import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Settings, Cpu, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface IndustriesProps {
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const IndustriesPage: React.FC<IndustriesProps> = ({ onOpenQuote, onNavigate }) => {
  const { translations } = useLanguage();
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();
  return (
    <div className="industries-page">
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.industries.hero.eyebrow}
        title={translations.industries.hero.title}
        subtitle={translations.industries.hero.subtitle}
        backgroundImage="/images/pages/industries/image33.jpg"
      />

      {/* Main Overview */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">{translations.industries.overview.eyebrow}</div>
              <h2 className="section-title">
                {translations.industries.overview.title}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {translations.industries.overview.desc1}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                {translations.industries.overview.desc2}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenQuote} className="btn btn-primary">
                  <span>{translations.industries.overview.ctaPrimary}</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('products')} className="btn btn-secondary">
                  <span>{translations.industries.overview.ctaSecondary}</span>
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
            <div className="eyebrow">{translations.industries.capabilities.eyebrow}</div>
            <h2 className="section-title">{translations.industries.capabilities.title}</h2>
            <p className="section-desc">
              {translations.industries.capabilities.desc}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="reveal-fade-up" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Settings size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {translations.industries.capabilities.item1Title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {translations.industries.capabilities.item1Desc}
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                {translations.industries.capabilities.item1Cap}
              </div>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.1s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Cpu size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {translations.industries.capabilities.item2Title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {translations.industries.capabilities.item2Desc}
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                {translations.industries.capabilities.item2Cap}
              </div>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.2s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {translations.industries.capabilities.item3Title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {translations.industries.capabilities.item3Desc}
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                {translations.industries.capabilities.item3Cap}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
