import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './BrandShowcase.css';

export interface EditorialSpotlightTab {
  id: string;
  tabLabel: string;
  title: string;
  badge: string;
  tagline: string;
  leadImage: string;
  dotColor: string;
  benefits: string[];
  keySpec: string;
  keySpecLabel: string;
  nutritionStrip: { label: string; value: string }[];
}

export interface BrandEditorialTheme {
  sectionBg: string;
  stageBg: string;
  borderColor: string;
  accent: string;
  accentDark: string;
}

interface BrandEditorialSpotlightProps {
  headlineEn: string;
  headlineAr: string;
  subtitleEn: string;
  subtitleAr: string;
  tabsEn: EditorialSpotlightTab[];
  tabsAr: EditorialSpotlightTab[];
  theme: BrandEditorialTheme;
  onOpenQuote: () => void;
}

export const BrandEditorialSpotlight: React.FC<BrandEditorialSpotlightProps> = ({
  headlineEn,
  headlineAr,
  subtitleEn,
  subtitleAr,
  tabsEn,
  tabsAr,
  theme,
  onOpenQuote,
}) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const tabs = isAr ? tabsAr : tabsEn;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeTab = tabs[activeIndex] || tabs[0];

  const themeVars = {
    '--ss-section-bg': theme.sectionBg,
    '--ss-stage-bg': theme.stageBg,
    '--ss-border': theme.borderColor,
    '--ss-accent': theme.accent,
    '--ss-accent-dark': theme.accentDark,
  } as React.CSSProperties;

  return (
    <section className="ss-wellness-section-light" style={themeVars}>
      <div className="ss-wellness-container-light">
        {/* Editorial Section Header */}
        <div className="ss-editorial-header">
          <h1 className="ss-editorial-title">
            {isAr ? headlineAr : headlineEn}
          </h1>

          <p className="ss-editorial-subtitle">
            {isAr ? subtitleAr : subtitleEn}
          </p>

          {/* Product Line Switcher */}
          <div className="ss-pillars-nav-light" role="tablist">
            {tabs.map((tab, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(idx)}
                  className={`ss-pillar-btn-light ${isSelected ? 'active' : ''}`}
                >
                  <span
                    className="ss-pillar-dot"
                    style={{ backgroundColor: isSelected ? '#FFFFFF' : tab.dotColor }}
                  />
                  <span>{tab.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cohesive White Editorial Spotlight Container */}
        <div className="ss-editorial-card">
          <div className="ss-editorial-grid">
            {/* Left Column: Product Intro, Benefits & Key Metric */}
            <div className="ss-editorial-copy">
              <div>
                <div className="ss-editorial-badge">
                  {activeTab.badge}
                </div>
                <h3 className="ss-editorial-product-title">
                  {activeTab.title}
                </h3>
                <p className="ss-editorial-tagline">
                  {activeTab.tagline}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="ss-editorial-benefits">
                {activeTab.benefits.map((b, idx) => (
                  <div key={idx} className="ss-editorial-benefit-item">
                    <CheckCircle2 size={17} style={{ color: theme.accent, flexShrink: 0 }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Key Metric Box & Quote Action */}
              <div className="ss-editorial-metric-row">
                <div className="ss-editorial-metric">
                  <div className="ss-editorial-metric-value">
                    {activeTab.keySpec}
                  </div>
                  <div className="ss-editorial-metric-label">
                    {activeTab.keySpecLabel}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="ss-editorial-cta-link"
                >
                  <ShieldCheck size={16} />
                  <span>{isAr ? 'طلب المواصفات الفنية' : 'Request Specs'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Light-Tinted Display Stage with White Image Frame */}
            <div className="ss-editorial-stage">
              <div className="ss-product-frame ss-product-frame--editorial">
                <img
                  src={activeTab.leadImage}
                  alt={activeTab.title}
                  className="ss-product-frame-img ss-product-frame-img--editorial"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/2026/1.png';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Clean Highlights Strip Beneath Main Content */}
          <div className="ss-nutrition-strip">
            {activeTab.nutritionStrip.map((item, idx) => (
              <div key={idx} className="ss-nutrition-strip-item">
                <span className="ss-nutrition-strip-label">{item.label}</span>
                <span className="ss-nutrition-strip-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
