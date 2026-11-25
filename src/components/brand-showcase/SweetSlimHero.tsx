import React from 'react';
import { ShieldCheck, Flame, Heart, Zap, Award, ArrowRight, ShoppingBag } from 'lucide-react';
import { FmcgBrandData } from '../../data/fmcgBrandsData';
import { useLanguage } from '../../context/LanguageContext';
import './BrandShowcase.css';

interface SweetSlimHeroProps {
  brand: FmcgBrandData;
  onOpenQuote: () => void;
}

export const SweetSlimHero: React.FC<SweetSlimHeroProps> = ({ brand, onOpenQuote }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={18} style={{ color: '#059669' }} />;
      case 'Flame': return <Flame size={18} style={{ color: '#D97706' }} />;
      case 'Heart': return <Heart size={18} style={{ color: '#059669' }} />;
      case 'Zap': return <Zap size={18} style={{ color: '#059669' }} />;
      default: return <Award size={18} style={{ color: '#059669' }} />;
    }
  };

  return (
    <section className="ss-hero-section">
      <div className="ss-hero-grid">
        {/* Left Column: Typography, CTAs & Benefits */}
        <div>
          <div className="ss-eyebrow">
            <Award size={14} style={{ color: '#059669' }} />
            <span>{brand.heroSticky.eyebrow}</span>
          </div>

          <h1 className="ss-hero-headline">
            {brand.heroSticky.headline}
          </h1>

          <p className="ss-hero-sub">
            {brand.heroSticky.subheadline}
          </p>

          <div className="ss-hero-actions">
            <button
              onClick={onOpenQuote}
              className="fmcg-btn-primary"
              style={{ backgroundColor: '#059669' }}
            >
              <ShoppingBag size={18} />
              <span>{brand.heroSticky.ctaPrimary}</span>
            </button>
            <button
              onClick={onOpenQuote}
              className="fmcg-btn-outline"
            >
              <span>{brand.heroSticky.ctaSecondary}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Product Benefit Grid */}
          <div className="ss-hero-badges-row">
            {brand.heroSticky.floatingBadges.map((b) => (
              <div key={b.id} className="ss-hero-badge-card">
                <div className="ss-hero-badge-icon">
                  {getBadgeIcon(b.icon)}
                </div>
                <div>
                  <div className="ss-hero-badge-text">{b.text}</div>
                  <div className="ss-hero-badge-sub">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Pale-Mint Product Display Stage with White Studio Photo Frame */}
        <div className="ss-hero-stage">
          {/* Minimal Supporting Top Label */}
          <div className="ss-hero-stage-header">
            <span className="ss-stage-label">
              {isAr ? 'العبوة الكلاسيكية • ١٠٠ ظرف' : 'Classic Sweetener • 100 Sachets'}
            </span>
            <span className="ss-stage-tag">
              {isAr ? '٠ سعرة حرارية' : '0 Calories'}
            </span>
          </div>

          {/* White Product-Photo Frame (intentional framing for white-background studio shot) */}
          <div className="ss-product-frame">
            <img
              src={brand.heroSticky.mainPackImage}
              alt={brand.brandName}
              className="ss-product-frame-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/2026/1.png';
              }}
            />
          </div>

          {/* Minimal Supporting Bottom Benefit Strip */}
          <div className="ss-hero-stage-footer">
            <span>{isAr ? 'خالٍ من الأسبارتام' : 'Aspartame-Free'}</span>
            <span className="ss-dot-sep" aria-hidden="true" />
            <span>{isAr ? 'مؤشر جلايسيمي ٠.٠' : '0.0 Glycemic Index'}</span>
            <span className="ss-dot-sep" aria-hidden="true" />
            <span>{isAr ? 'ثابت حتى ٢٢٠°م' : 'Bake-Stable 220°C'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
