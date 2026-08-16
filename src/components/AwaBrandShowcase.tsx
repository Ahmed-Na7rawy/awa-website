import React, { useState } from 'react';
import { AWA_STYLE_BRANDS, BrandIdentity } from '../data/awaBrandsData';
import { 
  Sparkles, 
  ArrowRight, 
  ShoppingBag, 
  Store,
  ChevronRight,
  Share2,
  Calendar,
  Layers,
  Flame,
  Utensils
} from 'lucide-react';
import { PartnerMarquee } from './PartnerMarquee';
import './AwaBrandShowcase.css';

interface AwaBrandShowcaseProps {
  initialBrandId?: string;
  onOpenQuote: () => void;
}

export const AwaBrandShowcase: React.FC<AwaBrandShowcaseProps> = ({ initialBrandId, onOpenQuote }) => {
  const [selectedBrandId, setSelectedBrandId] = useState<string>(
    initialBrandId === 'sweet-and-slim' || initialBrandId === 'squeasy' || initialBrandId === 'yalla-drinks'
      ? initialBrandId
      : 'sweet-and-slim'
  );

  React.useEffect(() => {
    if (initialBrandId && (initialBrandId === 'sweet-and-slim' || initialBrandId === 'squeasy' || initialBrandId === 'yalla-drinks')) {
      setSelectedBrandId(initialBrandId);
    }
  }, [initialBrandId]);

  const currentBrand: BrandIdentity = 
    AWA_STYLE_BRANDS.find((b) => b.id === selectedBrandId) || AWA_STYLE_BRANDS[0];

  return (
    <div className="awa-brand-page">
      {/* 1. Global Brand Selector Strip (Top Bar) */}
      <div className="awa-switcher-bar">
        <div className="container">
          <div className="awa-switcher-inner">
            {AWA_STYLE_BRANDS.map((brand) => {
              const isActive = selectedBrandId === brand.id;
              return (
                <button
                  key={brand.id}
                  onClick={() => setSelectedBrandId(brand.id)}
                  className={`awa-switcher-btn ${isActive ? 'active' : ''}`}
                  style={{
                    backgroundColor: isActive ? brand.accentColor : '#f1f5f9',
                    borderColor: isActive ? brand.accentColor : '#e2e8f0',
                  }}
                >
                  <span
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#ffffff' : brand.accentColor,
                    }}
                  />
                  <span>{brand.brandName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. AWA Molto-Style Header Stage */}
      <section 
        className="awa-hero-banner"
        style={{ background: currentBrand.heroBgGradient }}
      >
        <div className="container">
          <div className="awa-hero-content">
            <div>
              <div className="awa-slogan-tag">
                <Sparkles size={16} />
                <span>{currentBrand.brandTag}</span>
              </div>
              <h1 className="awa-main-title">{currentBrand.brandName}</h1>
              <p className="awa-slogan-sub">"{currentBrand.slogan}"</p>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-cta-primary"
                  style={{ color: currentBrand.accentColor, fontWeight: 800 }}
                >
                  <ShoppingBag size={18} />
                  <span>Retailer Distribution Inquiries</span>
                </button>
                <a
                  href="#sub-families"
                  className="btn btn-outline-white"
                >
                  <span>Explore Product Ranges</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="edita-hero-floating-img-wrap">
              <img
                key={currentBrand.id}
                src={currentBrand.heroImage}
                alt={currentBrand.brandName}
                className="edita-hero-floating-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Molto-Style Brand Story Card */}
      <section className="edita-story-section">
        <div className="container">
          <div className="edita-story-card">
            <span 
              className="edita-story-badge"
              style={{ background: `${currentBrand.accentColor}18`, color: currentBrand.accentColor }}
            >
              <Calendar size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              {currentBrand.heritageYear}
            </span>
            <h2 className="edita-story-title">The Story of {currentBrand.brandName}</h2>
            <p className="edita-story-body">{currentBrand.introStory}</p>
          </div>
        </div>
      </section>

      {/* 4. Segmented Sub-Families (Molto Blue / Orange / Magnum / Gold Architecture) */}
      <div id="sub-families">
        {currentBrand.subFamilies.map((family, fIdx) => (
          <section 
            key={family.id} 
            className="edita-family-section"
            style={{ 
              background: fIdx % 2 === 0 ? '#f8fafc' : '#ffffff',
              borderTop: '1px solid #e2e8f0'
            }}
          >
            <div className="container">
              <div className="edita-family-header">
                <span 
                  className="edita-family-badge"
                  style={{ backgroundColor: family.badgeBg, color: family.themeColor }}
                >
                  <Layers size={14} /> Product Family {fIdx + 1}
                </span>
                <h2 className="edita-family-title">{family.familyName}</h2>
                <p className="edita-family-tagline">{family.familyTagline}</p>
              </div>

              <div className="edita-family-grid">
                {family.products.map((prod) => (
                  <div key={prod.id} className="edita-molto-card">
                    {prod.tag && (
                      <span 
                        className="edita-molto-tag"
                        style={{ backgroundColor: family.themeColor }}
                      >
                        {prod.tag}
                      </span>
                    )}

                    <div className="edita-molto-img-wrap">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="edita-molto-img"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = currentBrand.heroImage;
                        }}
                      />
                    </div>

                    <div className="edita-molto-body">
                      <div 
                        className="edita-molto-flavor"
                        style={{ color: family.themeColor }}
                      >
                        {prod.flavor}
                      </div>
                      <h3 className="edita-molto-name">{prod.name}</h3>
                      <p className="edita-molto-desc">{prod.description}</p>

                      <div className="edita-molto-footer">
                        <span className="edita-molto-weight">{prod.weight}</span>
                        <button
                          onClick={onOpenQuote}
                          style={{
                            color: family.themeColor,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontWeight: 800,
                            fontSize: '0.9rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          <span>Inquire</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 5. Video & Media Campaign (SquEasy TV Commercial) */}
      {currentBrand.videoUrl && (
        <section className="awa-media-section">
          <div className="container">
            <div className="awa-media-grid">
              <div>
                <span className="badge" style={{ backgroundColor: `${currentBrand.accentColor}18`, color: currentBrand.accentColor }}>
                  <Utensils size={15} /> Commercials & Recipes
                </span>
                <h2 className="section-title">
                  Experience {currentBrand.brandName} In Action
                </h2>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {currentBrand.id === 'yalla-drinks'
                    ? 'Watch how baristas and coffee lovers craft velvety iced frappes, zesty fruit smoothies, and aromatic instant coffees in seconds.'
                    : 'Watch how chefs, baristas, and foodies create mouthwatering breakfast waffles, ice frappes, and dessert platters with SquEasy\'s mess-free silicone cross-valve.'}
                </p>

                <div className="awa-social-links-row">
                  {currentBrand.socialLinks.map((s, idx) => (
                    <a 
                      key={idx} 
                      href={s.url} 
                      className="awa-social-btn"
                    >
                      <Share2 size={16} color={currentBrand.accentColor} />
                      <span>{s.platform}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)', background: '#000000' }}>
                <video
                  src={currentBrand.videoUrl}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Nationwide Supermarket & Hypermarket Distribution Strip */}
      <section style={{ padding: '5rem 0', background: '#ffffff', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <PartnerMarquee
            items={currentBrand.retailers}
            title="Available Across Egypt's Top Hypermarkets & Food Chains"
            speed="normal"
          />
        </div>
      </section>

      {/* 7. Commercial Distributorship CTA */}
      <section 
        style={{
          background: currentBrand.heroBgGradient,
          padding: '5.5rem 0',
          textAlign: 'center',
          color: '#ffffff'
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 900, color: '#ffffff', marginBottom: '1.25rem' }}>
            Stock {currentBrand.brandName} In Your Stores
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '2.5rem', lineHeight: '1.7' }}>
            Partner with AWA Group for direct wholesale supply, customized POS shelf displays, and regional export opportunities.
          </p>
          <button
            onClick={onOpenQuote}
            className="btn btn-cta-primary"
            style={{ color: currentBrand.accentColor, padding: '1.1rem 2.75rem', fontSize: '1.1rem', fontWeight: 800 }}
          >
            Request Wholesale Price Catalog
          </button>
        </div>
      </section>
    </div>
  );
};
