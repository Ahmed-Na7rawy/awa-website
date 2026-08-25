import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Leaf, BarChart3, Users2, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

interface SustainabilityProps {
  onOpenQuote: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityProps> = ({ onOpenQuote }) => {
  const { t, translations } = useLanguage();
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();

  const pillarIcons = [<Leaf size={26} />, <BarChart3 size={26} />, <Users2 size={26} />];

  return (
    <div className="sustainability-page">
      <SEO
        title={t('nav.sustainability', 'Sustainability')}
        description={translations.sustainability.hero.subtitle}
        path="/sustainability"
        image="/images/pages/sustainability/esg.jpg"
      />
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.sustainability.hero.eyebrow}
        title={translations.sustainability.hero.title}
        subtitle={translations.sustainability.hero.subtitle}
        backgroundImage="/images/pages/sustainability/esg.jpg"
      />

      {/* ESG Framework */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {translations.sustainability.framework.eyebrow}
            </div>
            <h2 className="section-title">
              {translations.sustainability.framework.title}
            </h2>
            <p className="section-desc">
              {translations.sustainability.framework.desc}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {translations.sustainability.framework.pillars.map((pillar, idx) => (
              <div key={idx} className="reveal-fade-up" style={{ animationDelay: `${idx * 0.1}s`, background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {pillarIcons[idx]}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {pillar.desc}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                  {pillar.bullets.map((bullet, bi) => (
                    <li key={bi} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={14} color="var(--primary)" /> 
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Clean Label Innovation */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">{translations.sustainability.cleanLabel.eyebrow}</div>
              <h2 className="section-title">
                {translations.sustainability.cleanLabel.title}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {translations.sustainability.cleanLabel.p1}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}
                 dangerouslySetInnerHTML={{ __html: translations.sustainability.cleanLabel.p2 }}
              />
              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>{translations.sustainability.cleanLabel.ctaBtn}</span>
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
