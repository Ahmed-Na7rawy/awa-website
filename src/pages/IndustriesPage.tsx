import React from 'react';
import { PageHero } from '../components/PageHero';
import { Settings, Cpu, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Reveal, StaggerParent, StaggerChild } from '../components/Reveal';

interface IndustriesProps {
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const IndustriesPage: React.FC<IndustriesProps> = ({ onOpenQuote, onNavigate }) => {
  const { t, translations } = useLanguage();
  return (
    <div className="industries-page">
      <SEO
        title={t('nav.industries', 'Manufacturing')}
        description={translations.industries.hero.subtitle}
        path="/industries"
        image="/images/pages/industries/image33.jpg"
      />
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.industries.hero.eyebrow}
        title={translations.industries.hero.title}
        subtitle={translations.industries.hero.subtitle}
        backgroundImage="/images/pages/industries/image33.jpg"
      />

      {/* Main Overview */}
      <Reveal as="section" className="section">
        <div className="container">
          <div className="editorial-grid">
            <Reveal direction="right">
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
            </Reveal>

            <Reveal direction="left" delay={0.1} className="editorial-img-container">
              <img 
                src="/images/pages/industries/image33.jpg" 
                alt="AWA Borg El Arab Manufacturing Plant" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/customercare.jpg';
                }}
              />
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* Manufacturing Capabilities */}
      <Reveal as="section" className="section section-stone">
        <div className="container">
          <Reveal className="section-header">
            <div className="eyebrow">{translations.industries.capabilities.eyebrow}</div>
            <h2 className="section-title">{translations.industries.capabilities.title}</h2>
            <p className="section-desc">
              {translations.industries.capabilities.desc}
            </p>
          </Reveal>

          <StaggerParent style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <StaggerChild>
              <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: '100%' }}>
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
            </StaggerChild>

            <StaggerChild>
              <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: '100%' }}>
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
            </StaggerChild>

            <StaggerChild>
              <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: '100%' }}>
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
            </StaggerChild>
          </StaggerParent>
        </div>
      </Reveal>
    </div>
  );
};
