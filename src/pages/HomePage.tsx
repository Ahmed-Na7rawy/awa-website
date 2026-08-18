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
  PackageCheck, 
  Check
} from 'lucide-react';
import { 
  HERO_SLIDES, 
  STATS, 
  VALUE_CHAIN_STAGES, 
  FOOD_SECTORS, 
  PRODUCTS_LIST,
  CLIENT_LOGOS
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

  const statsRef = useScrollReveal();
  const manifestoRef = useScrollReveal();
  const valueChainRef = useScrollReveal();
  const matrixRef = useScrollReveal();
  const brandsRef = useScrollReveal();
  const marqueeRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={24} />;
      case 'FlaskConical': return <FlaskConical size={24} />;
      case 'Factory': return <Factory size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'Truck': return <Truck size={24} />;
      case 'PackageCheck': return <PackageCheck size={24} />;
      default: return <Award size={24} />;
    }
  };

  const retailBrands = PRODUCTS_LIST.filter(p => p.category === 'retail');
  const featuredBrand = retailBrands[0];
  const secondaryBrands = retailBrands.slice(1);

  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════════════ */}
      {/* 1. CINEMATIC B2B HERO SECTION                      */}
      {/* ═══════════════════════════════════════════════════ */}
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
                  {/* Executive Company Name & Regional Slogan Badge */}
                  <div 
                    className="hero-corp-badge"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      background: 'rgba(8, 14, 26, 0.75)',
                      backdropFilter: 'blur(16px)',
                      padding: '0.5rem 1.35rem 0.5rem 0.85rem',
                      borderRadius: '50px',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      marginBottom: '1.5rem',
                      animation: currentSlide === idx ? 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' : 'none'
                    }}
                  >
                    <img 
                      src="/images/logos/awa group logo no background.png" 
                      alt="AWA Group" 
                      style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.1 }}>
                        AWA GROUP
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#4ADE80', fontWeight: 700, letterSpacing: '0.02em' }}>
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
                      onClick={onOpenQuote}
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

        {/* Hero Vertical Slider Controls */}
        <div className="hero-controls">
          <button onClick={prevSlide} className="hero-btn-arrow" aria-label="Previous Slide">
            <ChevronLeft size={20} />
          </button>
          <div className="hero-slide-counter">
            <span className="hero-slide-current">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="hero-slide-sep">/</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{String(HERO_SLIDES.length).padStart(2, '0')}</span>
          </div>
          <button onClick={nextSlide} className="hero-btn-arrow" aria-label="Next Slide">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 2. STATS STRIP WITH LIVE COUNT-UP                  */}
      {/* ═══════════════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. EDITORIAL CORPORATE AUTHORITY & SCALE SECTION   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" ref={manifestoRef}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">Corporate Scale & Authority</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', lineHeight: 1.18, marginBottom: '1.5rem' }}>
                Bridging Global Food Science With Industrial Scale Across The Middle East
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Founded in 1993, <strong>AWA Group</strong> is an established food science and manufacturing powerhouse. We partner with the world's most demanding food brands, dairy conglomerates, industrial bakeries, and meat processors to engineer custom functional ingredient matrices and secure direct global supply chains.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                Operating from our headquarters in Alexandria, commercial offices in Cairo, and high-capacity automated production facilities in New Borg El-Arab City, our multi-disciplinary team of food scientists, rheologists, and chemical engineers turn formulation challenges into competitive market advantages.
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="feature-checklist" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--dark-navy)' }}>Pilot Formulation Labs</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Replicating client factory conditions</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--dark-navy)' }}>Direct Global Sourcing</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Audited producers in 30+ countries</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--dark-navy)' }}>Automated Compounding</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>5.5 MT/hr powder & 10 MT/hr liquid</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--dark-navy)' }}>FSSC 22000 & Halal</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Rigorous batch-by-batch release COA</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('about')} className="btn btn-primary">
                  <span>Explore Group Profile</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={onOpenQuote} className="btn btn-secondary">
                  Schedule Technical Consultation
                </button>
              </div>
            </div>

            {/* Visual Editorial Image Column */}
            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/home/s2.jpg" 
                alt="AWA Group R&D Application & Formulation Center"
                className="editorial-img"
                style={{ minHeight: '500px', objectFit: 'cover' }}
              />
              <div className="editorial-caption-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={24} color="#4ADE80" />
                  <span style={{ fontWeight: 900, fontSize: '1.1rem', color: '#FFFFFF' }}>Borg El-Arab Application Center</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#CBD5E1', lineHeight: '1.6' }}>
                  Equipped with texture analyzers, spectrophotometers, pilot dairy vats, and accelerated thermal stability test suites.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. THE 6-STAGE INDUSTRIAL VALUE CHAIN (01 TO 06)   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="value-chain-section" ref={valueChainRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>Integrated Food Architecture</div>
            <h2 className="section-title" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
              The AWA Industrial Value Chain
            </h2>
            <p className="section-desc" style={{ color: '#94A3B8', margin: '0 auto', maxWidth: '760px' }}>
              How AWA Group empowers industrial food manufacturers end-to-end: from global raw material procurement to custom pilot formulation, high-capacity blending, and temperature-controlled logistics.
            </p>
          </div>

          <div className="value-chain-grid">
            {VALUE_CHAIN_STAGES.map((stage, idx) => (
              <div 
                key={stage.step}
                className="value-chain-card reveal-fade-up"
                style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
              >
                <div className="value-chain-header">
                  <span className="value-chain-step">{stage.step}</span>
                  <div className="value-chain-icon-wrap">
                    {getStageIcon(stage.icon)}
                  </div>
                </div>

                <h3 className="value-chain-title">{stage.title}</h3>
                <div className="value-chain-subtitle">{stage.subtitle}</div>
                <p className="value-chain-desc">{stage.description}</p>

                <div className="value-chain-metrics-tag">
                  {stage.metrics}
                </div>

                <ul className="value-chain-caps">
                  {stage.capabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="value-chain-cap-item">
                      <Check size={14} color="#4ADE80" style={{ flexShrink: 0 }} />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. SPECIALIZED FOOD MATRIX SOLUTIONS (ASYMMETRIC)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="matrix-asymmetric-section" ref={matrixRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Industry Sectors & Matrix Solutions</div>
            <h2 className="section-title">Specialized Food Matrix Formulations</h2>
            <p className="section-desc">
              Tailored functional stabilizer systems, protein networks, emulsifiers, and shelf-life extenders designed for specific industrial processing conditions.
            </p>
          </div>

          <div className="matrix-editorial-grid">
            {FOOD_SECTORS.map((sector, idx) => (
              <div 
                key={sector.id}
                className="matrix-editorial-card reveal-fade-up"
                style={{ transitionDelay: `${0.1 + idx * 0.08}s`, cursor: 'pointer' }}
                onClick={() => onNavigate('solutions', sector.id)}
              >
                <div className="matrix-card-img-wrap">
                  <img src={sector.image} alt={sector.name} className="matrix-card-img" />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#FFFFFF', padding: '0.4rem', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <img src={sector.icon} alt={sector.name} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="matrix-card-body">
                  <h3 className="matrix-card-title">{sector.name}</h3>
                  <p className="matrix-card-desc">{sector.desc}</p>

                  <div className="matrix-pill-list">
                    {sector.highlights.map((h, hIdx) => (
                      <span key={hIdx} className="matrix-pill">{h}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 800, fontSize: '0.875rem', marginTop: 'auto' }}>
                    <span>Explore Formulation Systems</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. B2C & FMCG BRAND PORTFOLIO                      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section section-dark" ref={brandsRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow eyebrow-dark">Consumer Products & Co-Manufacturing</div>
            <h2 className="section-title">AWA Retail & FMCG Brand Portfolio</h2>
            <p className="section-desc">
              Developed and manufactured in our Borg El-Arab facilities to deliver taste, zero-calorie wellness, and barista-grade convenience to retail and foodservice markets.
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.15rem', flexWrap: 'wrap' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
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

          {/* Operating Companies & Brands Ecosystem Bar */}
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

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. TRUSTED BY LEADING REGIONAL FOOD MANUFACTURERS  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '5rem 0', background: '#F8FAFC' }} ref={marqueeRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '2.75rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Enterprise Partnerships</div>
            <h2 className="section-title" style={{ fontSize: '2.25rem' }}>Trusted by Leading Regional Food Manufacturers</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              We supply custom stabilization systems and functional ingredients to the Middle East's premier industrial food and beverage brands.
            </p>
          </div>
          <div className="reveal-fade-up reveal-delay-1">
            <PartnerMarquee items={CLIENT_LOGOS} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. EXECUTIVE B2B CLOSING CALL TO ACTION            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="cta-banner" ref={ctaRef}>
        <div className="container">
          <div className="cta-inner">
            <div className="reveal-fade-left">
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4ADE80', marginBottom: '0.5rem' }}>
                Start Your Formulation Trial
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '0.75rem' }}>
                Engineer Better Food Solutions With AWA Group
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.7 }}>
                Whether you need specialized texture stabilization, cost-optimized dairy recipes, plant-based protein isolates, or guaranteed cold-chain delivery, our technical team is ready to assist.
              </p>
            </div>
            <div className="reveal-fade-right" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenQuote}
                className="btn btn-cta-primary"
                style={{ padding: '1rem 2rem', fontSize: '1rem' }}
              >
                <span>Partner With AWA</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => onNavigate('solutions')}
                className="btn btn-outline-white"
                style={{ padding: '1rem 2rem', fontSize: '1rem' }}
              >
                <span>Explore Solutions Matrix</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
