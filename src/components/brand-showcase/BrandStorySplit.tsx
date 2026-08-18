import React from 'react';
import { Award, Factory, CheckCircle2 } from 'lucide-react';
import { FmcgBrandData } from '../../data/fmcgBrandsData';
import './BrandShowcase.css';

interface BrandStorySplitProps {
  brand: FmcgBrandData;
  onOpenQuote: () => void;
}

export const BrandStorySplit: React.FC<BrandStorySplitProps> = ({ brand }) => {
  const isLight = brand.id === 'yalla-drinks';

  return (
    <section className="fmcg-story-section">
      <div className="fmcg-story-grid">
        {/* Left Column: Factory Media with Overlay */}
        <div className="fmcg-story-media">
          <img
            src={brand.story.image}
            alt={brand.story.title}
            className="fmcg-story-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/pages/home/about.jpg';
            }}
          />

          <div className="fmcg-story-overlay-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#FBBF24', marginBottom: '0.25rem' }}>
              <Factory size={14} />
              <span>New Borg El-Arab Manufacturing Complex</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#CBD5E1', lineHeight: 1.4 }}>
              Sterile automated blending, nitrogen-flushed packaging lines, and sensory pilot labs.
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Stats */}
        <div>
          <div
            className="fmcg-eyebrow"
            style={{
              borderColor: `${brand.theme.primary}55`,
              backgroundColor: isLight ? '#FFFFFF' : `${brand.theme.primary}22`,
              color: isLight ? '#0284C7' : brand.theme.accent,
            }}
          >
            <Award size={14} />
            <span>{brand.story.badgeText}</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, textTransform: 'uppercase', color: 'inherit', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            {brand.story.title}
          </h2>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: isLight ? '#0284C7' : brand.theme.accent, marginBottom: '1.25rem' }}>
            {brand.story.subtitle}
          </h3>

          <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: 1.7, marginBottom: '1rem' }}>
            {brand.story.leadParagraph}
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.75, lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {brand.story.secondaryParagraph}
          </p>

          {/* Bullet Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {brand.story.bulletPoints.map((pt, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '12px', background: isLight ? '#FFFFFF' : 'rgba(255,255,255,0.04)', border: isLight ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.08)', boxShadow: isLight ? '0 4px 12px rgba(0,0,0,0.02)' : 'none' }}>
                <CheckCircle2 size={16} style={{ color: brand.theme.primary, marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'inherit' }}>{pt.title}</div>
                  <div style={{ fontSize: '0.775rem', opacity: 0.75, marginTop: '2px' }}>{pt.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="fmcg-stats-grid">
            {brand.story.stats.map((stat, idx) => (
              <div key={idx} className="fmcg-stat-item">
                <div className="fmcg-stat-val" style={{ color: brand.theme.primary }}>
                  {stat.value}
                </div>
                <div className="fmcg-stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
