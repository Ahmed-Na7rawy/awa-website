import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  FlaskConical, 
  Globe, 
  Truck, 
  Factory,
  ShieldCheck,
  Award,
  Zap,
  Building2,
  ChevronDown
} from 'lucide-react';
import { 
  HERO_SLIDES, 
  STATS, 
  CORE_PILLARS, 
  FOOD_SECTORS, 
  PRODUCTS_LIST,
  CLIENT_LOGOS,
  CERTIFICATIONS
} from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';

interface HomeProps {
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomeProps> = ({ onNavigate, onOpenQuote }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const activePillar = CORE_PILLARS[activePillarIndex];

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'Factory': return <Factory size={24} />;
      default: return <Award size={24} />;
    }
  };

  return (
    <div className="home-page">
      {/* 1. Cinematic Hero Section */}
      <section className="hero-slider">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${currentSlide === idx ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="container">
                <div className="hero-content">
                  <div className="eyebrow eyebrow-dark anim-fade-in">
                    <span>{slide.badge}</span>
                  </div>
                  <h1 className="hero-title anim-slide-up">
                    {slide.title}
                  </h1>
                  <p className="hero-subtitle anim-slide-up">
                    {slide.subtitle}
                  </p>
                  <div className="hero-buttons anim-slide-up">
                    <button
                      onClick={() => onNavigate(slide.ctaPrimaryTarget)}
                      className="btn btn-primary"
                    >
                      <span>{slide.ctaPrimary}</span>
                      <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={() => onNavigate(slide.ctaSecondaryTarget)}
                      className="btn btn-outline-white"
                    >
                      {slide.ctaSecondary}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Controls */}
        <div className="hero-controls">
          <button onClick={prevSlide} className="hero-btn-arrow" aria-label="Previous Slide">
            <ChevronLeft size={20} />
          </button>
          <div className="hero-dots">
            {HERO_SLIDES.map((_, idx) => (
              <div
                key={idx}
                className={`hero-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="hero-btn-arrow" aria-label="Next Slide">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* 2. Full-Bleed High Contrast Stats Strip */}
      <section className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Continuous Story: Editorial Company Manifesto */}
      <section className="section">
        <div className="container">
          <div className="editorial-grid">
            <div>
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title">
                Pioneering Food Technology & Supply Chain Excellence in Egypt Since 1993
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Founded in 1993, <strong>AWA Group</strong> has grown to become Egypt’s foremost supplier of innovative food systems, custom functional blends, and top-tier raw ingredients. We empower food manufacturers with deep technical knowledge, world-class application testing, and robust end-to-end supply chain infrastructure.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Operating from our Alexandria headquarters, Cairo commercial offices, and state-of-the-art manufacturing plants in New Borg El-Arab City, we bridge global food science with local industrial needs.
              </p>

              <div className="feature-checklist">
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 700, fontSize: '0.925rem' }}>Dedicated R&D Labs</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Custom formulation & pilot testing</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 700, fontSize: '0.925rem' }}>Global Direct Sourcing</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>40+ certified global suppliers</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 700, fontSize: '0.925rem' }}>Cold Logistics Fleet</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Temperature-controlled transport</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 700, fontSize: '0.925rem' }}>FSSC 22000 & ISO</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Highest global food safety standard</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('about')} className="btn btn-primary">
                  Read Corporate Profile <ArrowRight size={16} />
                </button>
                <button onClick={onOpenQuote} className="btn btn-secondary">
                  Contact Technical Experts
                </button>
              </div>
            </div>

            <div className="editorial-img-container">
              <img 
                src="/images/pages/home/about.jpg" 
                alt="AWA Food Solutions Innovation Facility"
                className="editorial-img"
                style={{ minHeight: '460px' }}
              />
              <div className="editorial-caption-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={22} color="#4ADE80" />
                  <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#FFFFFF' }}>100% Quality Assurance</span>
                </div>
                <div style={{ fontSize: '0.825rem', color: '#CBD5E1' }}>
                  Complete traceability, stringent sensory analysis, and pilot lab validation for every batch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive 4-Pillar Division Showcase */}
      <section className="section section-stone">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Four Strategic Divisions</div>
            <h2 className="section-title">Comprehensive Food Industry Infrastructure</h2>
            <p className="section-desc">
              From laboratory concept formulation to raw material sourcing, temperature-controlled distribution, and end consumer manufacturing.
            </p>
          </div>

          <div className="pillars-editorial">
            <div className="pillar-tab-list">
              {CORE_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className={`pillar-tab-item ${activePillarIndex === idx ? 'active' : ''}`}
                  onClick={() => setActivePillarIndex(idx)}
                >
                  <div className="pillar-tab-icon">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div>
                    <div className="pillar-tab-title">{pillar.title}</div>
                    <div className="pillar-tab-sub">{pillar.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pillar-display-card">
              <img 
                src={activePillar.image} 
                alt={activePillar.title} 
                className="pillar-display-img"
              />
              <div className="pillar-display-body">
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  {activePillar.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                  {activePillar.description}
                </p>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                  Key Divisional Capabilities:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                  {activePillar.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} color="var(--primary)" /> <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate(activePillar.page)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <span>{activePillar.actionText}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Food Sectors We Empower */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Industries & Applications</div>
            <h2 className="section-title">Specialized Food Matrix Solutions</h2>
            <p className="section-desc">
              We provide tailored functional blends and ingredient systems designed specifically for diverse processing conditions.
            </p>
          </div>

          <div className="sectors-row-grid">
            {FOOD_SECTORS.map((sector, idx) => (
              <div key={idx} className="sector-editorial-card">
                <div className="sector-icon-wrap">
                  <img src={sector.icon} alt={sector.name} style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                </div>
                <h4 className="sector-name">{sector.name}</h4>
                <p className="sector-desc">{sector.desc}</p>
                <button 
                  onClick={() => onNavigate('solutions')}
                  style={{ 
                    marginTop: 'auto', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    color: 'var(--primary)', 
                    fontWeight: 700, 
                    fontSize: '0.875rem' 
                  }}
                >
                  <span>Explore Formulations</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onNavigate('solutions')} className="btn btn-primary">
              <span>View Full Applications Matrix</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. B2C Consumer Brands Showcase */}
      <section className="section section-stone">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Consumer Products</div>
            <h2 className="section-title">AWA Retail & FMCG Brand Portfolio</h2>
            <p className="section-desc">
              Developed and manufactured in our Borg El-Arab facilities to deliver taste, quality, and convenience to retail consumers.
            </p>
          </div>

          <div className="b2c-brand-grid">
            {PRODUCTS_LIST.filter(p => p.category === 'retail').map((brand) => (
              <div key={brand.id} className="b2c-brand-card">
                <div className="b2c-img-wrap">
                  <img src={brand.image} alt={brand.name} className="b2c-img" />
                </div>
                <div className="b2c-body">
                  <div className="b2c-tag">{brand.brand || 'Consumer Brand'}</div>
                  <h3 className="b2c-title">{brand.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {brand.description}
                  </p>
                  <button
                    onClick={() => onNavigate('products', brand.id)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>View Product Line</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Partner & Client Marquee */}
      <section className="section" style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Global Ecosystem</div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Trusted by Leading Regional Food Manufacturers</h2>
          </div>
          <PartnerMarquee items={CLIENT_LOGOS} />
        </div>
      </section>

      {/* 8. High-Impact Closing Call to Action */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow eyebrow-dark">Partner With AWA</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
              Ready to Upgrade Your Food Formulations & Supply Chain?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: '1.65' }}>
              Contact our application scientists and supply chain specialists today to discuss technical formulations, sample requests, or bulk ingredient contracts.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
            <button onClick={onOpenQuote} className="btn btn-cta-primary">
              <span>Request Solution Quote</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('contact')} className="btn btn-outline-white">
              Contact Alexandria Headquarters
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
