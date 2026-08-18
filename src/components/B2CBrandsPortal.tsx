import React, { useState } from 'react';
import { RETAIL_BRANDS_DATA, RetailBrand } from '../data/retailBrandsData';
import { 
  Award, 
  ShieldCheck, 
  Flame, 
  Heart, 
  ArrowRight, 
  ShoppingBag, 
  CheckCircle2, 
  Store,
  Play,
  ChevronRight
} from 'lucide-react';
import './B2CBrandsPortal.css';

interface B2CBrandsPortalProps {
  initialBrandId?: string;
  onOpenQuote: () => void;
}

export const B2CBrandsPortal: React.FC<B2CBrandsPortalProps> = ({ initialBrandId, onOpenQuote }) => {
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

  const currentBrand: RetailBrand = 
    RETAIL_BRANDS_DATA.find((b) => b.id === selectedBrandId) || RETAIL_BRANDS_DATA[0];

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Flame': return <Flame size={24} />;
      case 'Heart': return <Heart size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <div className="b2c-portal">
      {/* 1. PepsiCo-Style Brand Selector Bar */}
      <div className="b2c-brand-nav">
        {RETAIL_BRANDS_DATA.map((brand) => (
          <button
            key={brand.id}
            onClick={() => setSelectedBrandId(brand.id)}
            className={`b2c-brand-tab ${selectedBrandId === brand.id ? 'active' : ''}`}
          >
            <span
              className="b2c-brand-tab-dot"
              style={{ backgroundColor: brand.themeColor }}
            />
            <span>{brand.name}</span>
          </button>
        ))}
      </div>

      {/* 2. Full-Width Dramatic Hero Stage */}
      <section 
        className="b2c-hero-stage"
        style={{ background: currentBrand.gradientBg }}
      >
        <div className="b2c-hero-bg-glow" />
        <div className="container">
          <div className="b2c-hero-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                {currentBrand.logo && (
                  <div style={{ background: '#FFFFFF', padding: '0.4rem 0.9rem', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
                    <img src={currentBrand.logo} alt={currentBrand.name} style={{ height: '32px', maxWidth: '140px', objectFit: 'contain' }} />
                  </div>
                )}
                <div className="b2c-hero-badge" style={{ margin: 0 }}>
                  <Award size={15} />
                  <span>{currentBrand.badge}</span>
                </div>
              </div>
              <h1 className="b2c-hero-title">{currentBrand.name}</h1>
              <p className="b2c-hero-tagline">{currentBrand.tagline}</p>
              <p className="b2c-hero-desc">{currentBrand.longDescription}</p>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-cta-primary"
                  style={{ color: currentBrand.themeColor }}
                >
                  <ShoppingBag size={18} />
                  <span>Become a Retail Distributor</span>
                </button>
                <a
                  href="#shelf"
                  className="btn btn-outline-white"
                >
                  <span>Explore Flavors & Packs</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="b2c-hero-img-wrap">
              <img
                key={currentBrand.id}
                src={currentBrand.heroImage}
                alt={currentBrand.name}
                className="b2c-hero-img"
              />
            </div>
          </div>

          {/* 3. Nutrition & Quality Highlights Spotlight */}
          <div className="b2c-highlights-grid">
            {currentBrand.nutritionHighlights.map((item, idx) => (
              <div key={idx} className="b2c-highlight-card">
                <div 
                  className="b2c-highlight-icon"
                  style={{ background: `${currentBrand.accentColor}25`, color: currentBrand.accentColor }}
                >
                  {getHighlightIcon(item.icon)}
                </div>
                <h4 className="b2c-highlight-title">{item.title}</h4>
                <p className="b2c-highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Product Lineup / PepsiCo Shelf */}
      <section id="shelf" className="b2c-shelf-section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">The Flavor Lineup</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              {currentBrand.name} Products & Formats
            </h2>
            <p className="section-desc">
              Carefully formulated for premium taste, consistent mouthfeel, and everyday convenience.
            </p>
          </div>

          <div className="b2c-shelf-grid">
            {currentBrand.products.map((prod, idx) => (
              <div key={idx} className="b2c-product-card">
                <div className="b2c-product-card-img-wrap">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="b2c-product-card-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = currentBrand.heroImage;
                    }}
                  />
                </div>
                <div className="b2c-product-card-body">
                  <div 
                    className="b2c-product-card-flavor"
                    style={{ color: currentBrand.accentColor }}
                  >
                    {prod.flavor}
                  </div>
                  <h3 className="b2c-product-card-title">{prod.name}</h3>
                  <p className="b2c-product-card-desc">{prod.description}</p>

                  <div className="b2c-product-card-footer">
                    <span className="b2c-product-card-vol">{prod.volume}</span>
                    <button
                      onClick={onOpenQuote}
                      style={{
                        color: currentBrand.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 700,
                        fontSize: '0.875rem'
                      }}
                    >
                      Inquire <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Hypermarket & Supermarket Retail Distribution Strip */}
      <section className="b2c-retailers-section">
        <div className="container">
          <h3 className="b2c-retailers-title">
            <Store size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
            Available At Leading Hypermarkets & Retail Chains Across Egypt
          </h3>

          <div className="marquee-container">
            <div className="b2c-retailers-marquee-track">
              {[...currentBrand.retailers, ...currentBrand.retailers, ...currentBrand.retailers].map((logo, idx) => (
                <div key={idx} className="b2c-retailer-logo-box">
                  <img
                    src={logo}
                    alt="Hypermarket Retailer"
                    className="b2c-retailer-logo-img"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Flavor / Consumer Experience Gallery */}
      <section className="b2c-gallery-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="badge badge-dark">In Every Home & Café</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Experience {currentBrand.name}
            </h2>
          </div>

          <div className="b2c-gallery-scroll">
            {currentBrand.gallery.map((gImg, idx) => (
              <div key={idx} className="b2c-gallery-card">
                <img
                  src={gImg}
                  alt={`${currentBrand.name} Lifestyle`}
                  className="b2c-gallery-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Commercial Distributorship CTA */}
      <section 
        style={{
          background: currentBrand.gradientBg,
          padding: '5rem 0',
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#ffffff', marginBottom: '1rem' }}>
            Stock {currentBrand.name} On Your Shelves
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Partner with AWA Group for direct wholesale distribution, private labeling, or food service supplying across Egypt and export markets.
          </p>
          <button
            onClick={onOpenQuote}
            className="btn btn-cta-primary"
            style={{ color: currentBrand.themeColor, padding: '1.1rem 2.5rem', fontSize: '1.05rem' }}
          >
            Request Wholesale Price List & POS Display Kits
          </button>
        </div>
      </section>
    </div>
  );
};
