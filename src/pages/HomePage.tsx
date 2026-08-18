import React from 'react';
import { 
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

/* Animated Stat Item (Light Theme) */
const AnimatedStatLight: React.FC<{ value: string; label: string; detail: string; delay: number }> = ({ value, label, detail, delay }) => {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericPart, 2000);

  return (
    <div ref={ref} className="metric-light-item reveal-fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="metric-light-val">{count}{suffix}</div>
      <div className="metric-light-lbl">{label}</div>
      <div className="metric-light-detail">{detail}</div>
    </div>
  );
};

export const HomePage: React.FC<HomeProps> = ({ onNavigate, onOpenQuote }) => {
  const metricsRef = useScrollReveal();
  const manifestoRef = useScrollReveal();
  const valueChainRef = useScrollReveal();
  const matrixRef = useScrollReveal();
  const brandsRef = useScrollReveal();
  const marqueeRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={22} />;
      case 'FlaskConical': return <FlaskConical size={22} />;
      case 'Factory': return <Factory size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'Truck': return <Truck size={22} />;
      case 'PackageCheck': return <PackageCheck size={22} />;
      default: return <Award size={22} />;
    }
  };

  const retailBrands = PRODUCTS_LIST.filter(p => p.category === 'retail');
  const featuredBrand = retailBrands[0];

  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════════════ */}
      {/* 1. HERO SECTION (LIGHT EDITORIAL 2-COLUMN)         */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="hero-light-section">
        <div className="container">
          <div className="hero-light-grid">
            {/* Left Column: Typography & CTAs */}
            <div>
              <div className="hero-light-eyebrow">
                <span>AWA GROUP · FOOD SCIENCE & INDUSTRIAL SOLUTIONS</span>
              </div>

              <h1 className="hero-light-title">
                Where Advanced Food Science Meets Industrial Formulation
              </h1>

              <p className="hero-light-desc">
                Partnering with leading food manufacturers across Egypt and the Middle East to engineer custom functional systems, optimize texture profiles, and deliver certified compounding at scale.
              </p>

              <div className="hero-light-actions">
                <button
                  onClick={() => onNavigate('solutions')}
                  className="btn btn-primary"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-secondary"
                >
                  <span>Partner With AWA</span>
                </button>
              </div>
            </div>

            {/* Right Column: Editorial Laboratory Image */}
            <div className="hero-light-img-container">
              <div className="hero-light-img-wrap">
                <img 
                  src="/images/pages/home/s2.jpg" 
                  alt="AWA Group Food Science Application Laboratory" 
                  className="hero-light-img"
                />
              </div>

              {/* Floating Quality Assurance Badge */}
              <div className="hero-light-badge-floating">
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.925rem', color: 'var(--text-main)', fontWeight: 800 }}>
                    FSSC 22000 & ISO 9001
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    Borg El-Arab Certified Plant & Pilot Labs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 2. HERO METRICS STRIP (CLEAN HORIZONTAL ON WHITE)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="metrics-strip-light" ref={metricsRef}>
        <div className="container">
          <div className="metrics-light-grid">
            {STATS.map((stat, idx) => (
              <AnimatedStatLight
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
      {/* 3. INTRO / COMPANY STORY (EDITORIAL LIGHT)          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" ref={manifestoRef}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">SCIENCE • SCALE • IMPACT</div>
              <h2 className="section-title">
                Bridging Global Food Science With Industrial Scale Across the Middle East
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Founded in 1993, <strong>AWA Group</strong> has developed into one of the region's most capable food solutions groups. We collaborate with multinational food corporations, dairy producers, bakeries, and meat processors to solve complex texture, yield, and stability formulation challenges.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                With our headquarters in Alexandria, commercial operations in Cairo, and high-capacity manufacturing complexes in New Borg El-Arab City, our application scientists and rheologists turn raw chemical and natural ingredients into market-winning consumer foods.
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="feature-checklist" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>Application Pilot Labs</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Replicating client factory conditions</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>Global Sourcing Lines</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Direct partners in 30+ countries</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>Industrial Compounding</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>15.5 MT/hr powder & liquid capacity</span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>Certified Quality Control</strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Batch-by-batch release COA</span>
                  </div>
                </div>
              </div>

              <button onClick={() => onNavigate('about')} className="btn btn-secondary">
                <span>Learn About AWA</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Visual Editorial Image Column */}
            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/industries/image33.jpg" 
                alt="AWA Industrial Compounding Plant"
                className="editorial-img"
                style={{ minHeight: '480px', objectFit: 'cover', borderRadius: 'var(--radius-xl)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. THE AWA INDUSTRIAL VALUE CHAIN (LIGHT SEQUENCE)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="value-chain-light-section" ref={valueChainRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>End-to-End Capabilities</div>
            <h2 className="section-title">The AWA Industrial Value Chain</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Connecting raw material procurement, application R&D, industrial compounding, quality certification, cold logistics, and consumer co-packing.
            </p>
          </div>

          <div className="value-chain-light-grid">
            {VALUE_CHAIN_STAGES.map((stage, idx) => (
              <div 
                key={stage.step}
                className="value-chain-light-card reveal-fade-up"
                style={{ transitionDelay: `${0.1 + idx * 0.08}s` }}
              >
                <div className="value-chain-light-header">
                  <span className="value-chain-light-step">{stage.step}</span>
                  <div className="value-chain-light-icon">
                    {getStageIcon(stage.icon)}
                  </div>
                </div>

                <h3 className="value-chain-light-title">{stage.title}</h3>
                <div className="value-chain-light-sub">{stage.subtitle}</div>
                <p className="value-chain-light-desc">{stage.description}</p>

                <div className="value-chain-light-link" onClick={() => onNavigate('solutions')}>
                  <span>Explore Capability</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. SPECIALIZED FOOD MATRIX (LIGHT EDITORIAL)       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="matrix-light-section" ref={matrixRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Formulation Matrix</div>
            <h2 className="section-title">Specialized Food Matrix Formulations</h2>
            <p className="section-desc">
              Custom functional stabilizer blends, protein networks, and texturizers designed for specific industrial processing conditions.
            </p>
          </div>

          <div className="matrix-light-grid">
            {FOOD_SECTORS.map((sector, idx) => (
              <div 
                key={sector.id}
                className="matrix-light-card reveal-fade-up"
                style={{ transitionDelay: `${0.1 + idx * 0.08}s`, cursor: 'pointer' }}
                onClick={() => onNavigate('solutions', sector.id)}
              >
                <div className="matrix-light-img-wrap">
                  <img src={sector.image} alt={sector.name} className="matrix-light-img" />
                </div>

                <div className="matrix-light-body">
                  <div className="matrix-light-cat">Application System</div>
                  <h3 className="matrix-light-title">{sector.name}</h3>
                  <p className="matrix-light-desc">{sector.desc}</p>

                  <div className="matrix-light-link">
                    <span>Explore Solutions</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. BRANDS / RETAIL PORTFOLIO (LIGHT SHOWCASE)       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="brands-light-section" ref={brandsRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Consumer Products & Co-Manufacturing</div>
            <h2 className="section-title">AWA Retail & FMCG Brand Portfolio</h2>
            <p className="section-desc">
              Formulated and manufactured in our Borg El-Arab facilities to deliver taste, zero-calorie wellness, and barista-grade convenience.
            </p>
          </div>

          {/* Featured Brand Showcase */}
          {featuredBrand && (
            <div className="brand-featured-light-card reveal-fade-up reveal-delay-1">
              <div className="brand-featured-light-img-wrap">
                <img 
                  src={featuredBrand.image} 
                  alt={featuredBrand.name} 
                  className="brand-featured-light-img"
                />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  {featuredBrand.logo && (
                    <div style={{ background: '#FFFFFF', padding: '0.35rem 0.85rem', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-color)' }}>
                      <img src={featuredBrand.logo} alt={featuredBrand.name} style={{ height: '28px', maxWidth: '130px', objectFit: 'contain' }} />
                    </div>
                  )}
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                    {featuredBrand.brand || 'Consumer Brand'}
                  </span>
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {featuredBrand.name}
                </h3>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2rem' }}>
                  {featuredBrand.description}
                </p>
                <button
                  onClick={() => onNavigate('products', featuredBrand.id)}
                  className="btn btn-primary"
                >
                  <span>Explore Brand Portfolio</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Brand Logo Grid Strip */}
          <div className="brand-logo-grid-light">
            {[
              { name: 'AWA Group', logo: '/images/logos/awa group logo no background.png', type: 'Parent Group' },
              { name: 'AWABEY Soapwort', logo: '/images/logos/Bey Logo.png', type: 'Joint Venture' },
              { name: 'AWASOY Protein', logo: '/images/logos/soy.png', type: 'Plant Proteins' },
              { name: 'Sweet & Slim', logo: '/images/logos/Sweet&slim logo.png', type: 'Diet Sweeteners' },
              { name: 'SquEasy', logo: '/images/logos/squeasy logo.png', type: 'Dessert Purées' },
              { name: 'Yalla Drinks', logo: '/images/logos/yalla drinks.png', type: 'Cafe Beverage Systems' },
            ].map((co, idx) => (
              <div key={idx} className="brand-logo-item-light">
                <img 
                  src={co.logo} 
                  alt={co.name} 
                  style={{ maxHeight: '36px', maxWidth: '120px', width: 'auto', objectFit: 'contain', marginBottom: '0.35rem' }} 
                />
                <span style={{ fontSize: '0.675rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {co.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. TRUSTED BY LEADING REGIONAL FOOD MANUFACTURERS  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '5.5rem 0', background: '#FFFFFF' }} ref={marqueeRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '2.75rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Enterprise Trust</div>
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
      {/* 8. SOPHISTICATED LIGHT CTA BANNER                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="cta-light-section" ref={ctaRef}>
        <div className="container">
          <div className="cta-light-inner">
            <div className="reveal-fade-left">
              <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>
                Formulation Partnership
              </div>
              <h2 className="cta-light-title">
                Engineer Better Food Solutions With AWA Group
              </h2>
              <p className="cta-light-desc">
                Whether you need specialized texture stabilization, cost-optimized dairy recipes, plant-based protein isolates, or guaranteed cold-chain delivery, our technical team is ready to assist.
              </p>
            </div>
            <div className="cta-light-actions reveal-fade-right">
              <button 
                onClick={onOpenQuote}
                className="btn btn-primary"
              >
                <span>Partner With AWA</span>
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => onNavigate('solutions')}
                className="btn btn-secondary"
              >
                <span>Explore Our Capabilities</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
