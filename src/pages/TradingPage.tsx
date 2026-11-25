import React from 'react';
import { PageHero } from '../components/PageHero';
import { CheckCircle2, ArrowRight, Database } from 'lucide-react';
import { PARTNER_LOGOS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Reveal, StaggerParent, StaggerChild } from '../components/Reveal';

interface TradingProps {
  onOpenQuote: () => void;
}

export const TradingPage: React.FC<TradingProps> = ({ onOpenQuote }) => {
  const { t, translations } = useLanguage();
  const categories = translations.trading.categories;

  return (
    <div className="trading-page">
      <SEO
        title={t('nav.trading', 'Formulation & Sourcing')}
        description={translations.trading.hero.subtitle}
        path="/trading"
        image="/images/pages/trading/Image11.jpg"
      />
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.trading.hero.eyebrow}
        title={translations.trading.hero.title}
        subtitle={translations.trading.hero.subtitle}
        backgroundImage="/images/pages/trading/Image11.jpg"
      />

      {/* Trading Overview */}
      <Reveal as="section" className="section">
        <div className="container">
          <div className="editorial-grid">
            <Reveal direction="right">
              <div className="eyebrow">{translations.trading.overview.eyebrow}</div>
              <h2 className="section-title">
                {translations.trading.overview.title}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {translations.trading.overview.p1}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                {translations.trading.overview.p2}
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>{translations.trading.overview.ctaBtn}</span>
                <ArrowRight size={16} />
              </button>
            </Reveal>

            <Reveal direction="left" delay={0.1} className="editorial-img-container">
              <img 
                src="/images/pages/trading/Image11.jpg" 
                alt="AWA Raw Material Warehousing & Trading" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/blending.jpg';
                }}
              />
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* Ingredient Catalog Grid */}
      <Reveal as="section" className="section section-stone">
        <div className="container">
          <Reveal className="section-header">
            <div className="eyebrow">{translations.trading.catalog.eyebrow}</div>
            <h2 className="section-title">{translations.trading.catalog.title}</h2>
            <p className="section-desc">
              {translations.trading.catalog.desc}
            </p>
          </Reveal>

          <StaggerParent style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {categories.map((cat, idx) => (
              <StaggerChild key={idx}>
                <div
                  style={{
                    background: '#FFFFFF',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-subtle)',
                    height: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <Database size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark-navy)' }}>{cat.title}</h3>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {cat.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </Reveal>

      {/* Global Partner Marquee */}
      <Reveal as="section" className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {translations.trading.partners.eyebrow}
            </div>
            <h2 className="section-title">
              {translations.trading.partners.title}
            </h2>
          </div>
          <PartnerMarquee items={PARTNER_LOGOS} speed="normal" />
        </div>
      </Reveal>
    </div>
  );
};
