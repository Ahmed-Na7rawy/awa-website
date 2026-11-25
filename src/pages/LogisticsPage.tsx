import React from 'react';
import { PageHero } from '../components/PageHero';
import { Truck, ThermometerSnowflake, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Reveal, StaggerParent, StaggerChild } from '../components/Reveal';

interface LogisticsProps {
  onOpenQuote: () => void;
}

export const LogisticsPage: React.FC<LogisticsProps> = ({ onOpenQuote }) => {
  const { t, translations } = useLanguage();

  return (
    <div className="logistics-page">
      <SEO
        title={t('nav.logistics', 'Cold Chain Logistics')}
        description={translations.logistics.hero.subtitle}
        path="/logistics"
        image="/images/pages/logistics/Image30.jpg"
      />
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.logistics.hero.eyebrow}
        title={translations.logistics.hero.title}
        subtitle={translations.logistics.hero.subtitle}
        backgroundImage="/images/pages/logistics/Image30.jpg"
      />

      {/* Main Logistics Overview */}
      <Reveal as="section" className="section">
        <div className="container">
          <div className="editorial-grid">
            <Reveal direction="right">
              <div className="eyebrow">{translations.logistics.overview.eyebrow}</div>
              <h2 className="section-title">
                {translations.logistics.overview.title}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {translations.logistics.overview.desc1}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                {translations.logistics.overview.desc2}
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>{translations.logistics.overview.cta}</span>
                <ArrowRight size={16} />
              </button>
            </Reveal>

            <Reveal direction="left" delay={0.1} className="editorial-img-container">
              <img 
                src="/images/pages/logistics/Image30.jpg" 
                alt="AWA Logistics Warehouse Facility" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                }}
              />
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* Core Logistics Capabilities */}
      <Reveal as="section" className="section section-stone">
        <div className="container">
          <Reveal className="section-header">
            <div className="eyebrow">{translations.logistics.specs.eyebrow}</div>
            <h2 className="section-title">{translations.logistics.specs.title}</h2>
            <p className="section-desc">
              {translations.logistics.specs.desc}
            </p>
          </Reveal>

          <StaggerParent style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <StaggerChild>
              <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <ThermometerSnowflake size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                  {translations.logistics.specs.item1Title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                  {translations.logistics.specs.item1Desc}
                </p>
              </div>
            </StaggerChild>

            <StaggerChild>
              <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Truck size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                  {translations.logistics.specs.item2Title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                  {translations.logistics.specs.item2Desc}
                </p>
              </div>
            </StaggerChild>

            <StaggerChild>
              <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Clock size={26} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                  {translations.logistics.specs.item3Title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                  {translations.logistics.specs.item3Desc}
                </p>
              </div>
            </StaggerChild>
          </StaggerParent>
        </div>
      </Reveal>

      {/* Warehouse Logistics Showcase */}
      <Reveal as="section" className="section">
        <div className="container">
          <StaggerParent style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <StaggerChild>
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img 
                  src="/images/pages/logistics/Image31.jpg" 
                  alt="AWA Distribution Center High Density Racking" 
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/pages/logistics/Image2-7.jpg';
                  }}
                />
              </div>
              <h4 style={{ marginTop: '1.25rem', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                {translations.logistics.showcase.item1Title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {translations.logistics.showcase.item1Desc}
              </p>
            </StaggerChild>

            <StaggerChild>
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img 
                  src="/images/pages/logistics/Image32.jpg" 
                  alt="AWA Cold Storage Sanitation" 
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                  }}
                />
              </div>
              <h4 style={{ marginTop: '1.25rem', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                {translations.logistics.showcase.item2Title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {translations.logistics.showcase.item2Desc}
              </p>
            </StaggerChild>
          </StaggerParent>
        </div>
      </Reveal>
    </div>
  );
};
