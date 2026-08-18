import React, { useState, useEffect, useRef } from 'react';
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
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface HomeProps {
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

/* Animated stat component */
const AnimatedStat: React.FC<{ value: string; label: string; detail: string; delay: number }> = ({ value, label, detail, delay }) => {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericPart, 2000);

  return (
    <div ref={ref} className="stat-item reveal-fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-value">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-detail">{detail}</div>
    </div>
  );
};

export const HomePage: React.FC<HomeProps> = ({ onNavigate, onOpenQuote }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [pillarTransitioning, setPillarTransitioning] = useState(false);

  const statsRef = useScrollReveal();
  const manifestoRef = useScrollReveal();
  const pillarsRef = useScrollReveal();
  const sectorsRef = useScrollReveal();
  const brandsRef = useScrollReveal();
  const marqueeRef = useScrollReveal();
  const ctaRef = useScrollReveal();

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

  const handlePillarChange = (idx: number) => {
    if (idx === activePillarIndex) return;
    setPillarTransitioning(true);
    setTimeout(() => {
      setActivePillarIndex(idx);
      setPillarTransitioning(false);
    }, 250);
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'Factory': return <Factory size={24} />;
      default: return <Award size={24} />;
    }
  };

  const retailBrands = PRODUCTS_LIST.filter(p => p.category === 'retail');
  const featuredBrand = retailBrands[0];
  const secondaryBrands = retailBrands.slice(1);

  // Slide progress for hero
  const slideProgress = ((currentSlide + 1) / HERO_SLIDES.length) * 100;

  return (
    <div className="home-page">
      {/* 1. Cinematic Hero Section with Ken Burns */}
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
                  {/* Executive Company Name & Slogan Badge */}
                  <div 
                    className="hero-corp-badge"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      background: 'rgba(15, 23, 42, 0.7)',
                      backdropFilter: 'blur(14px)',
                      padding: '0.5rem 1.35rem 0.5rem 0.85rem',
                      borderRadius: '50px',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      marginBottom: '1.25rem',
                      animation: currentSlide === idx ? 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' : 'none'
                    }}
                  >
                    <img 
                      src="/images/logos/awa group logo no background.png" 
                      alt="AWA Group" 
                      style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.1 }}>
                        AWA GROUP
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#4ADE80', fontWeight: 700, letterSpacing: '0.02em' }}>
                        Your Regional Sustainable Partner
                      </span>
                    </div>
                  </div>

                  <div className="eyebrow eyebrow-dark" style={{ animationDelay: '0.2s', animation: currentSlide === idx ? 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both' : 'none' }}>
                    <span>{slide.badge}</span>
                  </div>
                  <h1 className="hero-title" style={{ animation: currentSlide === idx ? 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both' : 'none' }}>
                    {slide.title}
                  </h1>
                  <p className="hero-subtitle" style={{ animation: currentSlide === idx ? 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both' : 'none' }}>
                    {slide.subtitle}
                  </p>
                  <div className="hero-buttons" style={{ animation: currentSlide === idx ? 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both' : 'none' }}>
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

        {/* Slide Controls with Progress */}
        <div className="hero-controls">
          <button onClick={prevSlide} className="hero-btn-arrow" aria-label="Previous Slide">
            <ChevronLeft size={20} />
          </button>
          <div className="hero-progress-bar">
            <div className="hero-progress-fill" style={{ width: `${slideProgress}%` }} />
          </div>
          <button onClick={nextSlide} className="hero-btn-arrow" aria-label="Next Slide">
            <ChevronRight size={20} />
          </button>
          <div className="hero-slide-counter">
            <span className="hero-slide-current">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="hero-slide-sep">/</span>
            <span className="hero-slide-total">{String(HERO_SLIDES.length).padStart(2, '0')}</span>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip with Count-Up Animation */}
      <section className="stats-strip" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {STATS.map((stat, idx) => (
              <AnimatedStat
                key={idx}
                value={stat.value}
                label={stat.label}
                detail={stat.detail}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Editorial Company Manifesto with Scroll Reveal */}
      <section className="section" ref={manifestoRef}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title">
                Pioneering Food Technology & Supply Chain Excellence in Egypt Since 1993
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Founded in 1993, <strong>AWA Group</strong> has grown to become Egypt's foremost supplier of innovative food systems, custom functional blends, and top-tier raw ingredients. We empower food manufacturers with deep technical knowledge, world-class application testing, and robust end-to-end supply chain infrastructure.
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

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
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
      <section className="section section-stone" ref={pillarsRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Four Strategic Divisions</div>
            <h2 className="section-title">Comprehensive Food Industry Infrastructure</h2>
            <p className="section-desc">
              From laboratory concept formulation to raw material sourcing, temperature-controlled distribution, and end consumer manufacturing.
            </p>
          </div>

          <div className="pillars-editorial reveal-fade-up reveal-delay-2">
            <div className="pillar-tab-list">
              {CORE_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.id}
                  className={`pillar-tab-item ${activePillarIndex === idx ? 'active' : ''}`}
                  onClick={() => handlePillarChange(idx)}
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

            <div className={`pillar-display-card ${pillarTransitioning ? 'pillar-transitioning' : ''}`}>
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

      {/* 5. Food Sectors — Visual Showcase */}
      <section className="section" ref={sectorsRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Industries & Applications</div>
            <h2 className="section-title">Specialized Food Matrix Solutions</h2>
            <p className="section-desc">
              We provide tailored functional blends and ingredient systems designed specifically for diverse processing conditions.
            </p>
          </div>

          <div className="sectors-visual-grid">
            {FOOD_SECTORS.map((sector, idx) => (
              <div 
                key={idx} 
                className={`sector-visual-card reveal-fade-up`}
                style={{ transitionDelay: `${0.1 + idx * 0.05}s` }}
                onClick={() => onNavigate('solutions')}
              >
                <div className="sector-visual-icon">
                  <img src={sector.icon} alt={sector.name} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                <h4 className="sector-visual-name">{sector.name}</h4>
                <p className="sector-visual-desc">{sector.desc}</p>
                <div className="sector-visual-link">
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. B2C Consumer Brands — Editorial Portfolio */}
      <section className="section section-dark" ref={brandsRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow eyebrow-dark">Consumer Products</div>
            <h2 className="section-title">AWA Retail & FMCG Brand Portfolio</h2>
            <p className="section-desc">
              Developed and manufactured in our Borg El-Arab facilities to deliver taste, quality, and convenience to retail consumers.
            </p>
          </div>

          {/* Featured Brand — Large Editorial */}
          {featuredBrand && (
            <div className="brand-featured reveal-fade-up reveal-delay-1">
              <div className="brand-featured-img-wrap">
                <img 
                  src={featuredBrand.image} 
                  alt={featuredBrand.name} 
                  className="brand-featured-img"
                />
              </div>
              <div className="brand-featured-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.15rem' }}>
                  {featuredBrand.logo && (
                    <div style={{ background: '#FFFFFF', padding: '0.35rem 0.85rem', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                      <img src={featuredBrand.logo} alt={featuredBrand.name} style={{ height: '28px', maxWidth: '130px', objectFit: 'contain' }} />
                    </div>
                  )}
                  <span className="b2c-tag" style={{ color: '#4ADE80', margin: 0 }}>{featuredBrand.brand || 'Consumer Brand'}</span>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {featuredBrand.name}
                </h3>
                <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: '1.7', marginBottom: '2rem' }}>
                  {featuredBrand.description}
                </p>
                <button
                  onClick={() => onNavigate('products', featuredBrand.id)}
                  className="btn btn-primary"
                >
                  <span>Explore {featuredBrand.brand || 'Brand'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Secondary Brands — Compact Row */}
          <div className="brand-secondary-row">
            {secondaryBrands.map((brand, idx) => (
              <div 
                key={brand.id} 
                className={`brand-secondary-card reveal-fade-up`}
                style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="brand-secondary-img-wrap">
                  <img src={brand.image} alt={brand.name} className="brand-secondary-img" />
                </div>
                <div className="brand-secondary-body">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                    {brand.logo && (
                      <div style={{ background: '#FFFFFF', padding: '0.25rem 0.65rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <img src={brand.logo} alt={brand.name} style={{ height: '22px', maxWidth: '100px', objectFit: 'contain' }} />
                      </div>
                    )}
                    <span className="b2c-tag" style={{ color: '#4ADE80', margin: 0 }}>{brand.brand || 'Consumer Brand'}</span>
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    {brand.name}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {brand.description}
                  </p>
                  <button
                    onClick={() => onNavigate('products', brand.id)}
                    className="btn btn-outline-white btn-sm"
                    style={{ width: '100%' }}
                  >
                    <span>View Product Line</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 6.1 Interactive Corporate & Brand Ecosystem Marquee / Grid */}
          <div style={{ marginTop: '3.5rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4ADE80' }}>
                Group Operating Companies & Consumer Brands
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, marginTop: '0.25rem' }}>
                One Cohesive Food Science & Manufacturing Powerhouse
              </h4>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', alignItems: 'center' }}>
              {[
                { name: 'AWA Group', logo: '/images/logos/awa group logo no background.png', type: 'Parent Group', bg: '#FFFFFF' },
                { name: 'AWABEY Soapwort', logo: '/images/logos/Bey Logo.png', type: 'Joint Venture', bg: '#FFFFFF' },
                { name: 'AWASOY Protein', logo: '/images/logos/soy.png', type: 'Plant Proteins', bg: '#FFFFFF' },
                { name: 'Sweet & Slim', logo: '/images/logos/Sweet&slim logo.png', type: 'Diet Sweeteners', bg: '#FFFFFF' },
                { name: 'SquEasy', logo: '/images/logos/squeasy logo.png', type: 'Dessert Purées', bg: '#FFFFFF' },
                { name: 'Yalla Drinks', logo: '/images/logos/yalla drinks.png', type: 'Cafe Beverage Systems', bg: '#FFFFFF' },
              ].map((co, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: co.bg,
                    borderRadius: '16px',
                    padding: '1rem 0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '95px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                  }}
                >
                  <img 
                    src={co.logo} 
                    alt={co.name} 
                    style={{ maxHeight: '38px', maxWidth: '130px', width: 'auto', objectFit: 'contain', marginBottom: '0.35rem' }} 
                  />
                  <span style={{ fontSize: '0.675rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {co.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Partner & Client Marquee */}
      <section className="section" style={{ padding: '4.5rem 0' }} ref={marqueeRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Global Ecosystem</div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Trusted by Leading Regional Food Manufacturers</h2>
          </div>
          <div className="reveal-fade-up reveal-delay-1">
            <PartnerMarquee items={CLIENT_LOGOS} />
          </div>
        </div>
      </section>

      {/* 8. High-Impact Closing Call to Action */}
      <section className="cta-banner" ref={ctaRef}>
        <div className="container cta-inner">
          <div style={{ maxWidth: '680px' }} className="reveal-fade-left">
            <div className="eyebrow eyebrow-dark">Partner With AWA</div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '1rem' }}>
              Ready to Upgrade Your Food Formulations & Supply Chain?
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: '1.65' }}>
              Contact our application scientists and supply chain specialists today to discuss technical formulations, sample requests, or bulk ingredient contracts.
            </p>
          </div>
          <div className="reveal-fade-right reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
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
