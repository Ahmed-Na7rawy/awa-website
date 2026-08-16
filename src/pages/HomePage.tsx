import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  FlaskConical, 
  Globe, 
  Truck, 
  Factory,
  Award,
  ShieldCheck,
  Building2,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react';
import { 
  HERO_SLIDES, 
  STATS, 
  CORE_PILLARS, 
  FOOD_SECTORS, 
  CERTIFICATIONS, 
  CLIENT_LOGOS,
  PARTNER_LOGOS
} from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';

interface HomeProps {
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomeProps> = ({ onNavigate, onOpenQuote }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Auto-play slider
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical size={26} />;
      case 'Globe': return <Globe size={26} />;
      case 'Truck': return <Truck size={26} />;
      case 'Factory': return <Factory size={26} />;
      default: return <Award size={26} />;
    }
  };

  return (
    <div className="home-page">
      {/* 1. Hero Carousel */}
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
                  <div className="badge badge-dark anim-fade-in" style={{ animationDelay: '0.1s' }}>
                    <Sparkles size={14} />
                    <span>{slide.badge}</span>
                  </div>
                  <h1 className="hero-title anim-slide-up" style={{ animationDelay: '0.2s' }}>
                    {slide.title}
                  </h1>
                  <p className="hero-subtitle anim-slide-up" style={{ animationDelay: '0.35s' }}>
                    {slide.subtitle}
                  </p>
                  <div className="hero-buttons anim-slide-up" style={{ animationDelay: '0.5s' }}>
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

        {/* Hero Decorative Floating Lights */}
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        {/* Controls */}
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

      {/* 2. Key Stats Ribbon with Glassmorphism */}
      <div className="container stats-ribbon">
        <div className="stats-card glassmorphic hover-glow">
          {STATS.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. About Brief Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-col">
              <span className="badge">
                <Zap size={14} /> Who We Are
              </span>
              <h2 className="section-title">
                Pioneering Food Technology & Supply Chain Excellence in Egypt
              </h2>
              <p className="lead-paragraph">
                Founded in 1993, <strong>AWA Group</strong> has grown to become Egypt’s foremost supplier of innovative food systems, custom functional blends, and top-tier ingredients. We empower food manufacturers with deep technical knowledge, world-class application testing, and robust end-to-end supply chain infrastructure.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Operating from our modern headquarters in Alexandria, Cairo commercial offices, and state-of-the-art manufacturing plants in New Borg El-Arab City, we bridge global food science with local industrial needs.
              </p>

              <div className="features-2col">
                <div className="feature-item-pill">
                  <CheckCircle2 color="#128d46" size={22} className="feature-icon" />
                  <div>
                    <strong className="feature-title">Dedicated R&D Labs</strong>
                    <span className="feature-sub">Custom formulation & pilot testing</span>
                  </div>
                </div>
                <div className="feature-item-pill">
                  <CheckCircle2 color="#128d46" size={22} className="feature-icon" />
                  <div>
                    <strong className="feature-title">Global Direct Sourcing</strong>
                    <span className="feature-sub">40+ certified global suppliers</span>
                  </div>
                </div>
                <div className="feature-item-pill">
                  <CheckCircle2 color="#128d46" size={22} className="feature-icon" />
                  <div>
                    <strong className="feature-title">Cold Logistics Fleet</strong>
                    <span className="feature-sub">Climate-controlled transport</span>
                  </div>
                </div>
                <div className="feature-item-pill">
                  <CheckCircle2 color="#128d46" size={22} className="feature-icon" />
                  <div>
                    <strong className="feature-title">FSSC 22000 & ISO</strong>
                    <span className="feature-sub">Highest global food safety standard</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('about')} className="btn btn-primary">
                  Read Company Profile <ArrowRight size={16} />
                </button>
                <button onClick={onOpenQuote} className="btn btn-secondary">
                  Contact Technical Team
                </button>
              </div>
            </div>

            <div className="about-visual-col">
              <div className="image-frame-premium">
                <img 
                  src="/images/pages/home/about.jpg" 
                  alt="AWA Food Solutions Facility"
                  className="about-featured-img"
                />
                <div className="floating-badge-card glassmorphic float-animation">
                  <div className="floating-badge-icon">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111a2e' }}>100% Guaranteed</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Food Safety & Traceability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Business Pillars */}
      <section className="section section-alt pattern-grid">
        <div className="container">
          <div className="section-header">
            <span className="badge">Four Strategic Divisions</span>
            <h2 className="section-title">Comprehensive Food Industry Capabilities</h2>
            <p className="section-desc">
              From laboratory concept formulation to raw material sourcing, temperature-controlled distribution, and end manufacturing.
            </p>
          </div>

          <div className="pillars-grid">
            {CORE_PILLARS.map((pillar) => (
              <div key={pillar.id} className="pillar-card premium-card">
                <div className="pillar-img-wrap">
                  <img src={pillar.image} alt={pillar.title} className="pillar-img" />
                  <div className="pillar-img-overlay"></div>
                  <div className="pillar-icon-badge">
                    {getPillarIcon(pillar.icon)}
                  </div>
                </div>
                <div className="pillar-body">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <div className="pillar-subtitle">{pillar.subtitle}</div>
                  <p className="pillar-desc">{pillar.description}</p>
                  <ul className="pillar-features">
                    {pillar.features.map((f, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} color="#128d46" /> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate(pillar.page)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', marginTop: 'auto' }}
                  >
                    <span>{pillar.actionText}</span> <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Food Sectors We Empower */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Industries & Applications</span>
            <h2 className="section-title">Specialized Food Matrix Solutions</h2>
            <p className="section-desc">
              We provide tailored functional blends and ingredient systems designed specifically for diverse processing conditions.
            </p>
          </div>

          <div className="sectors-grid">
            {FOOD_SECTORS.map((sector, idx) => (
              <div key={idx} className="sector-card interactive-hover">
                <div className="sector-icon-box">
                  <img src={sector.icon} alt={sector.name} className="sector-icon-img" />
                </div>
                <div>
                  <h4 className="sector-name">{sector.name}</h4>
                  <p className="sector-desc">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => onNavigate('solutions')} className="btn btn-primary">
              View Detailed Applications & Formulations <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Featured Consumer & Retail Brands */}
      <section className="section section-dark glowing-bg">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">
              <TrendingUp size={14} /> Consumer Brands
            </span>
            <h2 className="section-title">Market-Leading Retail Innovations</h2>
            <p className="section-desc">
              In addition to B2B food solutions, AWA manufactures beloved consumer brands available in hypermarkets, cafes, and restaurants across the region.
            </p>
          </div>

          <div className="cards-3col">
            {/* Sweet & Slim */}
            <div className="brand-showcase-card">
              <div className="brand-img-container">
                <img 
                  src="/images/pages/products/sweetslim.png" 
                  alt="Sweet & Slim" 
                  className="brand-img-fluid"
                />
              </div>
              <div className="brand-card-content">
                <h3 className="brand-card-title">Sweet & Slim®</h3>
                <p className="brand-card-desc">
                  Egypt's premier zero-calorie sweetener formulated with high-purity sucralose and dietary fibers. Aspartame-free, heat-stable, and diabetic-safe.
                </p>
                <button 
                  onClick={() => onNavigate('products', 'sweet-and-slim')} 
                  className="btn btn-outline-white btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Learn More & Formats
                </button>
              </div>
            </div>

            {/* SquEasy */}
            <div className="brand-showcase-card">
              <div className="brand-img-container">
                <img 
                  src="/images/pages/products/SquEasy.png" 
                  alt="SquEasy Purées" 
                  className="brand-img-fluid"
                />
              </div>
              <div className="brand-card-content">
                <h3 className="brand-card-title">SquEasy® Purées</h3>
                <p className="brand-card-desc">
                  Rich fruit and sauce purées in ergonomic squeeze bottles. The choice of top baristas, bakeries, and ice cream parlors for decorating and flavor infusion.
                </p>
                <button 
                  onClick={() => onNavigate('products', 'squeasy')} 
                  className="btn btn-outline-white btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  Explore Flavor Range
                </button>
              </div>
            </div>

            {/* Yalla Series */}
            <div className="brand-showcase-card">
              <div className="brand-img-container">
                <img 
                  src="/images/pages/products/frapit.jpg" 
                  alt="Yalla Frapp It & Drinks" 
                  className="brand-img-fluid"
                  style={{ borderRadius: '12px' }}
                />
              </div>
              <div className="brand-card-content">
                <h3 className="brand-card-title">Yalla® Beverage Bases</h3>
                <p className="brand-card-desc">
                  Instant gourmet frappe powders, smoothie bases, and iced coffee blends formulated for maximum yield, creamy foam stability, and intense taste.
                </p>
                <button 
                  onClick={() => onNavigate('products', 'yalla-drinks')} 
                  className="btn btn-outline-white btn-sm"
                  style={{ width: '100%', marginTop: 'auto' }}
                >
                  View Beverage Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Certifications & Quality Commitment */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Safety & Certifications</span>
            <h2 className="section-title">International Quality Standards</h2>
            <p className="section-desc">
              AWA Group maintains stringent quality assurance, environmental care, and occupational health systems certified by global auditing bodies.
            </p>
          </div>

          <div className="cert-grid">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="cert-card premium-hover">
                <img src={cert.img} alt={cert.name} className="cert-img" />
                <div className="cert-name">{cert.name}</div>
                <div className="cert-label">{cert.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Moving Carousel / Marquee for Partners & Clients */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="badge">Trust & Network</span>
            <h2 className="section-title">Trusted By Food Industry Leaders</h2>
            <p className="section-desc">
              Powering world-class food processing through strategic alliances with international chemical innovators and premier FMCG brands.
            </p>
          </div>

          {/* Infinite Moving Partner Carousel */}
          <PartnerMarquee
            title="Strategic Global Supply Partners"
            items={PARTNER_LOGOS}
            speed="normal"
          />

          {/* Infinite Moving Client Carousel (Reversed for dynamic visual contrast) */}
          <PartnerMarquee
            title="Key Industrial Clients & FMCG Manufacturers"
            items={CLIENT_LOGOS}
            speed="slow"
            reverse={true}
          />
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="cta-banner-premium">
        <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 2 }}>
          <div className="badge badge-dark" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={14} /> Start Your Formulation
          </div>
          <h2 className="cta-title">
            Ready to Innovate Your Next Food Product?
          </h2>
          <p className="cta-desc">
            Partner with our application centers and food scientists. We formulate, test, optimize, and supply the highest quality ingredient systems.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenQuote} className="btn btn-cta-primary">
              Request Free Formulation Sample
            </button>
            <button onClick={() => onNavigate('contact')} className="btn btn-outline-white">
              Contact Our Sales Offices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
