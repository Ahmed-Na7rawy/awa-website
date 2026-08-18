import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { 
  STATS, 
  FOOD_SECTORS, 
  CLIENT_LOGOS
} from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface HomeProps {
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

/* Interactive Count-Up Number Item */
const AnimatedStatCard: React.FC<{ value: string; label: string; detail: string; delay: number }> = ({ value, label, detail, delay }) => {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericPart, 2000);

  return (
    <div ref={ref} className="interactive-number-card reveal-fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="interactive-number-val">{count}{suffix}</div>
      <div className="interactive-number-lbl">{label}</div>
      <div className="interactive-number-detail">{detail}</div>
    </div>
  );
};

export const HomePage: React.FC<HomeProps> = ({ onNavigate, onOpenQuote }) => {
  // State for interactive components
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeBrandTab, setActiveBrandTab] = useState(0);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [activeStickyStep, setActiveStickyStep] = useState(0);

  // Scroll reveal refs
  const heroRef = useScrollReveal();
  const numbersRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const stickyRef = useScrollReveal();
  const bentoRef = useScrollReveal();
  const carouselRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const brandsRef = useScrollReveal();
  const whyAwaRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  const statementRef = useScrollReveal();
  const marqueeRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  // Carousel navigation
  const totalCarouselSlides = FOOD_SECTORS.length;
  const nextCarousel = () => setCarouselIndex((prev) => (prev + 1) % totalCarouselSlides);
  const prevCarousel = () => setCarouselIndex((prev) => (prev - 1 + totalCarouselSlides) % totalCarouselSlides);

  // "Science to Scale" Sticky Stages Data
  const scienceToScaleStages = [
    {
      step: '01',
      tag: 'DISCOVER',
      title: 'Global Raw Material Science & Direct Sourcing',
      desc: 'Identifying high-yield hydrocolloids, specialty starches, emulsifying salts, and dairy isolates from audited producers in over 30 countries.',
      image: '/images/pages/solutions/raw-materials-warehouse.jpg',
      caps: ['Direct Origin Auditing', 'Molecular Purity Verification', 'Custom Import Protocols']
    },
    {
      step: '02',
      tag: 'FORMULATE',
      title: 'Application Pilot Labs & Sensory Rheology',
      desc: 'Our Alexandria & Borg El-Arab pilot centers replicate client industrial cooking, UHT pasteurization, extrusion, and homogenization environments.',
      image: '/images/pages/home/s2.jpg',
      caps: ['Pilot Dairy Vats', 'Texture Profiling Analyzers', 'Syneresis & Shelf-Life Testing']
    },
    {
      step: '03',
      tag: 'SCALE',
      title: 'High-Capacity Industrial Compounding & Blending',
      desc: 'Automated powder blending and liquid processing lines in Borg El-Arab deliver 15.5 MT/hr of consistent, homogeneous functional matrices.',
      image: '/images/pages/industries/image33.jpg',
      caps: ['15.5 MT/hr Capacity', 'Automated Micro-Dosing', 'Homogeneous Particle Distribution']
    },
    {
      step: '04',
      tag: 'ASSURE',
      title: 'Food Safety, Halal & FSSC 22000 Certification',
      desc: 'Every compounded batch is verified against rigorous chemical, microbiological, and sensory benchmarks before COA release.',
      image: '/images/pages/home/blending.jpg',
      caps: ['FSSC 22000 Certified', 'ISO 9001:2015 Standards', 'Batch-by-Batch Release COA']
    },
    {
      step: '05',
      tag: 'DELIVER',
      title: '15,000 MT Cold-Chain Logistics & Distribution',
      desc: 'State-of-the-art temperature-controlled warehousing in Alexandria and Cairo guaranteeing seamless supply continuity across the MENA region.',
      image: '/images/pages/solutions/cold-chain-logistics-truck.jpg',
      caps: ['15,000 MT Capacity', 'Real-Time Telemetry', 'Rapid Regional Delivery']
    }
  ];

  // Smooth scroll handler to target stage card
  const handleScrollToStage = (sIdx: number) => {
    setActiveStickyStep(sIdx);
    const targetEl = document.getElementById(`stage-card-${scienceToScaleStages[sIdx].step}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Interactive Brand Portfolio Data
  const brandPortfolioData = [
    {
      id: 'sweet-and-slim',
      name: 'Sweet & Slim',
      category: 'Zero-Calorie Diet Sweeteners',
      logo: '/images/logos/Sweet&slim logo.png',
      image: '/images/pages/products/retail/sweet-slim/picture5.png',
      desc: 'Egypt’s premier zero-calorie aspartame and sucralose formulation. Formulated to offer genuine sugar sweetness without aftertaste, heat-stable for cooking and hot beverages.',
      stats: ['#1 Diet Sweetener Choice', 'Heat-Stable to 220°C', 'Over 10 Million Sachets Sold']
    },
    {
      id: 'squeasy',
      name: 'SquEasy Dessert Purées',
      category: 'Ambient Dessert & Beverage Purées',
      logo: '/images/logos/squeasy logo.png',
      image: '/images/pages/products/retail/squeasy/cover.png',
      desc: 'Ambient, squeeze-ready fruit purées and dessert toppings crafted for baristas, dessert chefs, and home culinary enthusiasts without artificial gelatin.',
      stats: ['Natural Fruit Bases', 'Ambient Shelf-Life', 'Barista & Dessert Grade']
    },
    {
      id: 'yalla-drinks',
      name: 'Yalla Drinks Universe',
      category: 'Cafe Beverage & Frappe Bases',
      logo: '/images/logos/yalla drinks.png',
      image: '/images/pages/products/frapit.jpg',
      desc: 'Instant frappe powders, flavored smoothie bases, and iced tea solutions engineered for quick-serve hospitality chains and cafes requiring consistent foam and suspension.',
      stats: ['Rapid Dispersion', 'Rich Velvety Texture', 'Foodservice Tailored']
    },
    {
      id: 'awabey',
      name: 'AWABEY Soapwort Extract',
      category: 'Natural Foam Stabilizers',
      logo: '/images/logos/Bey Logo.png',
      image: '/images/pages/solutions/dairy.jpg',
      desc: 'A joint venture extracting premium Saponaria officinalis to supply natural, high-stability foam for Middle Eastern halva, confectionery, and dairy delights.',
      stats: ['100% Natural Extract', 'Thermal Stability', 'Traditional Halva Standard']
    },
    {
      id: 'awasoy',
      name: 'AWASOY Plant Proteins',
      category: 'Functional Soy & Pea Proteins',
      logo: '/images/logos/soy.png',
      image: '/images/pages/industries/image33.jpg',
      desc: 'High-purity isolated soy and plant protein compounding delivering high water retention, emulsification, and firm texture for processed meat and vegan matrices.',
      stats: ['90%+ Protein Purity', 'High Gel Strength', 'Cost-Optimized Formulation']
    }
  ];

  // "Why AWA" Interactive Showcase Data
  const whyAwaData = [
    {
      num: '01',
      title: 'Science-Led Formulation',
      desc: 'We do not simply sell ingredients; our in-house food scientists and rheologists design custom functional formulas that solve syneresis, texture, and stability challenges in your specific production lines.',
      image: '/images/pages/home/s2.jpg',
      stat: '500+ Custom Recipes'
    },
    {
      num: '02',
      title: 'Industrial Manufacturing Scale',
      desc: 'With 15.5 MT/hr automated blending capacity in Borg El-Arab, we handle industrial-scale production runs with rigorous batch-to-batch consistency and automated micro-dosing.',
      image: '/images/pages/industries/image33.jpg',
      stat: '15.5 MT/hr Capacity'
    },
    {
      num: '03',
      title: 'Regional Middle East Leadership',
      desc: 'Over 33 years of direct operational experience across Egypt and neighboring Middle Eastern and African markets gives us unmatched regulatory and consumer-taste understanding.',
      image: '/images/pages/solutions/cold-chain-logistics-truck.jpg',
      stat: '33+ Years Presence'
    },
    {
      num: '04',
      title: 'End-to-End Value Control',
      desc: 'From global raw material procurement to custom pilot batching, automated compounding, and temperature-controlled logistics, we control the entire quality chain.',
      image: '/images/pages/solutions/raw-materials-warehouse.jpg',
      stat: '30+ Global Origin Hubs'
    },
    {
      num: '05',
      title: 'Certified Food Safety & Quality',
      desc: 'FSSC 22000, ISO 9001:2015, and Halal certifications backed by complete spectrophotometric, microbiological, and texture profiling test protocols.',
      image: '/images/pages/home/blending.jpg',
      stat: '100% Release COA'
    }
  ];

  // Historical Timeline Milestones
  const timelineMilestones = [
    {
      year: '1993',
      title: 'Foundation in Alexandria',
      desc: 'Established as an innovative food science trading and ingredient solutions company serving Egyptian food processors.'
    },
    {
      year: '2004',
      title: 'Borg El-Arab Plant Launch',
      desc: 'Constructed automated high-capacity compounding and powder blending facility in New Borg El-Arab City.'
    },
    {
      year: '2012',
      title: 'Sweet & Slim FMCG Launch',
      desc: 'Introduced Egypt’s flagship zero-calorie sweetener, establishing AWA’s consumer retail manufacturing division.'
    },
    {
      year: '2018',
      title: 'Pilot Labs & Joint Ventures',
      desc: 'Expanded specialized dairy and meat application pilot laboratories; formed AWABEY natural soapwort venture.'
    },
    {
      year: '2024+',
      title: 'Regional Scale & Cold Chain',
      desc: 'Operating 15,000 MT cold-chain logistics and serving multinational food manufacturers across the MENA region.'
    }
  ];

  return (
    <div className="home-page">
      {/* ═══════════════════════════════════════════════════ */}
      {/* 1. LIGHT CINEMATIC HERO SECTION                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="hero-cinematic-section" ref={heroRef}>
        <div className="hero-cinematic-bg-grid" />
        <div className="container">
          <div className="hero-cinematic-grid">
            {/* Left Editorial Text & CTAs */}
            <div className="reveal-fade-left">
              <div className="hero-cinematic-eyebrow">
                <Sparkles size={14} />
                <span>AWA GROUP · FOOD SCIENCE × INDUSTRIAL SCALE</span>
              </div>

              <h1 className="hero-cinematic-title">
                Where Advanced Food Science Meets Industrial Formulation
              </h1>

              <p className="hero-cinematic-desc">
                Partnering with leading food manufacturers across Egypt and the Middle East to engineer custom functional systems, optimize texture profiles, and deliver certified compounding at scale.
              </p>

              <div className="hero-cinematic-actions">
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

            {/* Right Oversized Visual Composition with Floating Cards */}
            <div className="hero-cinematic-media reveal-fade-right reveal-delay-1">
              <div className="hero-cinematic-img-frame">
                <img 
                  src="/images/pages/home/s2.jpg" 
                  alt="AWA Group Food Science Application Laboratory" 
                  className="hero-cinematic-img"
                />
              </div>

              {/* Floating Glass Metric 1 */}
              <div className="hero-glass-badge-1">
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Award size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 800 }}>
                    33+ Years
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    Industrial Leadership (Est. 1993)
                  </span>
                </div>
              </div>

              {/* Floating Glass Metric 2 */}
              <div className="hero-glass-badge-2">
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(20, 30, 154, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 800 }}>
                    FSSC 22000 & ISO 9001
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    Borg El-Arab Certified Plants
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 2. CONTINUOUS CAPABILITY TEXT MARQUEE              */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="text-marquee-section">
        <div className="text-marquee-track">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} style={{ display: 'inline-flex', gap: '2.5rem', alignItems: 'center' }}>
              <span className="text-marquee-item">FOOD SCIENCE <span className="text-marquee-dot" /></span>
              <span className="text-marquee-item">APPLICATION R&D <span className="text-marquee-dot" /></span>
              <span className="text-marquee-item">CUSTOM FORMULATION <span className="text-marquee-dot" /></span>
              <span className="text-marquee-item">HIGH-CAPACITY COMPOUNDING <span className="text-marquee-dot" /></span>
              <span className="text-marquee-item">FSSC 22000 QUALITY <span className="text-marquee-dot" /></span>
              <span className="text-marquee-item">COLD-CHAIN LOGISTICS <span className="text-marquee-dot" /></span>
              <span className="text-marquee-item">RETAIL FMCG BRANDS <span className="text-marquee-dot" /></span>
              <span className="text-marquee-item">INDUSTRIAL SOLUTIONS <span className="text-marquee-dot" /></span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. INTERACTIVE "BY THE NUMBERS" SECTION            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="interactive-numbers-section" ref={numbersRef}>
        <div className="container">
          <div className="interactive-numbers-grid">
            {STATS.map((stat, idx) => (
              <AnimatedStatCard
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
      {/* 4. EDITORIAL STORY & COLLAGE SECTION               */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="editorial-story-section" ref={storyRef}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">SCIENCE • SCALE • IMPACT</div>
              <h2 className="section-title">
                Bridging Global Food Science With Industrial Scale Across the Middle East
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Founded in 1993, <strong>AWA Group</strong> has grown into one of the region's most capable food solutions companies. We partner with multinational food corporations, dairy producers, industrial bakeries, and meat processors to solve complex texture, stability, and cost-efficiency formulation challenges.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                From our Alexandria headquarters, Cairo commercial offices, and advanced manufacturing plants in New Borg El-Arab City, our multi-disciplinary application scientists and rheologists engineer market-leading solutions.
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="feature-checklist" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>Pilot Application Labs</strong>
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
                <span>Learn About AWA History</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Overlapping Asymmetric Collage */}
            <div className="editorial-collage-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/industries/image33.jpg" 
                alt="AWA Industrial Compounding Plant"
                className="editorial-collage-main"
              />
              <img 
                src="/images/pages/home/s2.jpg" 
                alt="AWA Application Lab Trials"
                className="editorial-collage-sub"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. "SCIENCE TO SCALE" STICKY SCROLL STORY          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="sticky-story-section" ref={stickyRef}>
        <div className="container">
          <div className="sticky-story-layout">
            {/* Left Sticky Column */}
            <div className="sticky-story-left">
              <div className="eyebrow">End-to-End Methodology</div>
              <h2 className="sticky-story-title">From Food Science to Industrial Scale</h2>
              <p className="sticky-story-desc">
                How AWA Group empowers industrial food manufacturers end-to-end: transforming molecular discovery and functional stabilization into large-scale production reality.
              </p>

              <div className="sticky-story-stepper">
                {scienceToScaleStages.map((stage, sIdx) => (
                  <button
                    key={stage.step}
                    onClick={() => handleScrollToStage(sIdx)}
                    className={`sticky-story-step-btn ${activeStickyStep === sIdx ? 'active' : ''}`}
                  >
                    <span className="step-num">{stage.step}</span>
                    <span>{stage.tag} — {stage.title.split('&')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Progressive Cards Container */}
            <div className="sticky-story-cards-container">
              {scienceToScaleStages.map((stage, idx) => (
                <div 
                  id={`stage-card-${stage.step}`}
                  key={stage.step}
                  className="sticky-story-card reveal-fade-up"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                  onMouseEnter={() => setActiveStickyStep(idx)}
                >
                  <div className="sticky-story-img-wrap">
                    <img src={stage.image} alt={stage.title} className="sticky-story-img" />
                  </div>
                  <div className="sticky-story-card-body">
                    <div className="sticky-story-card-step">Stage {stage.step} · {stage.tag}</div>
                    <h3 className="sticky-story-card-title">{stage.title}</h3>
                    <p className="sticky-story-card-desc">{stage.desc}</p>

                    <ul className="sticky-story-caps-list">
                      {stage.caps.map((cap, cIdx) => (
                        <li key={cIdx} className="sticky-story-cap-pill">
                          ✓ {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. ASYMMETRIC BENTO GRID (CAPABILITIES)            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="bento-grid-section" ref={bentoRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Integrated Food Architecture</div>
            <h2 className="section-title">The AWA Industrial Capability Matrix</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Designed as an interconnected ecosystem combining global raw material sourcing, certified compounding plants, application pilot centers, and cold logistics.
            </p>
          </div>

          <div className="bento-grid-container">
            {/* Tile 1: Large 2x2 with Image */}
            <div className="bento-tile bento-tile-large reveal-fade-up" onClick={() => onNavigate('trading')}>
              <img src="/images/pages/home/blending.jpg" alt="Global Sourcing" className="bento-tile-bg-img" />
              <div className="bento-tile-overlay-dark" />
              <div className="bento-tile-content">
                <span className="bento-num">01 · Direct Sourcing</span>
                <h3 className="bento-title">Global Sourcing & Direct Raw Material Trading</h3>
                <p className="bento-desc">Direct access to certified producers across 30+ countries for hydrocolloids, starches, and dairy ingredients.</p>
              </div>
              <div className="bento-arrow-wrap">
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Tile 2: Standard */}
            <div className="bento-tile reveal-fade-up reveal-delay-1" onClick={() => onNavigate('solutions')}>
              <div className="bento-tile-content">
                <span className="bento-num">02 · Formulation</span>
                <h3 className="bento-title">Application R&D & Sensory Pilot Labs</h3>
                <p className="bento-desc">Pilot vats, texture analyzers, and thermal stability suites replicating factory conditions.</p>
              </div>
              <div className="bento-arrow-wrap">
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Tile 3: Standard */}
            <div className="bento-tile reveal-fade-up reveal-delay-2" onClick={() => onNavigate('about')}>
              <div className="bento-tile-content">
                <span className="bento-num">03 · Quality</span>
                <h3 className="bento-title">Food Safety & FSSC 22000 Assurance</h3>
                <p className="bento-desc">Batch-by-batch release COA, Halal certified, and complete spectrophotometric audits.</p>
              </div>
              <div className="bento-arrow-wrap">
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Tile 4: Wide 2-Column */}
            <div className="bento-tile bento-tile-wide reveal-fade-up reveal-delay-3" onClick={() => onNavigate('industries')}>
              <div className="bento-tile-content">
                <span className="bento-num">04 · Industrial Scale</span>
                <h3 className="bento-title">High-Capacity Compounding (15.5 MT/hr)</h3>
                <p className="bento-desc">Automated powder blending and liquid dispersion lines in New Borg El-Arab City with micro-dosing precision.</p>
              </div>
              <div className="bento-arrow-wrap">
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Tile 5: Wide with Background Image */}
            <div className="bento-tile bento-tile-wide reveal-fade-up reveal-delay-4" onClick={() => onNavigate('logistics')}>
              <img src="/images/pages/solutions/cold-chain-logistics-truck.jpg" alt="Cold Chain Logistics" className="bento-tile-bg-img" />
              <div className="bento-tile-overlay-dark" />
              <div className="bento-tile-content">
                <span className="bento-num" style={{ color: '#4ADE80' }}>05 · Cold Logistics</span>
                <h3 className="bento-title" style={{ color: '#FFFFFF' }}>15,000 MT Cold-Chain Logistics & Storage</h3>
                <p className="bento-desc" style={{ color: '#E2E8F0' }}>Temperature-controlled facilities across Alexandria & Cairo ensuring supply reliability.</p>
              </div>
              <div className="bento-arrow-wrap" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Tile 6: Standard */}
            <div className="bento-tile reveal-fade-up reveal-delay-5" onClick={() => onNavigate('products')}>
              <div className="bento-tile-content">
                <span className="bento-num">06 · Retail FMCG</span>
                <h3 className="bento-title">Consumer Brands & Contract Co-Packing</h3>
                <p className="bento-desc">Manufactured in Borg El-Arab under Sweet & Slim, SquEasy, and private-label retail lines.</p>
              </div>
              <div className="bento-arrow-wrap">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. SPECIALIZED FOOD MATRIX CAROUSEL                */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="matrix-carousel-section" ref={carouselRef}>
        <div className="container">
          <div className="matrix-carousel-header reveal-fade-up">
            <div>
              <div className="eyebrow">Formulation Matrix</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Specialized Food Matrix Formulations</h2>
            </div>

            <div className="matrix-carousel-controls">
              <button 
                onClick={prevCarousel} 
                className="matrix-carousel-btn"
                aria-label="Previous Category"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="matrix-carousel-counter">
                {String(carouselIndex + 1).padStart(2, '0')} / {String(totalCarouselSlides).padStart(2, '0')}
              </div>
              <button 
                onClick={nextCarousel} 
                className="matrix-carousel-btn"
                aria-label="Next Category"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="matrix-carousel-viewport">
            <div 
              className="matrix-carousel-track"
              style={{ transform: `translateX(-${carouselIndex * (100 / 3)}%)` }}
            >
              {FOOD_SECTORS.map((sector) => (
                <div 
                  key={sector.id}
                  className="matrix-carousel-card"
                  onClick={() => onNavigate('solutions', sector.id)}
                >
                  <div className="matrix-carousel-img-wrap">
                    <img src={sector.image} alt={sector.name} className="matrix-carousel-img" />
                  </div>
                  <div className="matrix-carousel-body">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. HORIZONTAL VISUAL IMAGE GALLERY                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="horizontal-gallery-section" ref={galleryRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '2rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Visual Capabilities</div>
            <h2 className="section-title">The Science Behind Every Solution</h2>
          </div>
        </div>

        <div className="horizontal-gallery-track">
          {[
            '/images/gallery/1738157726256.jpg',
            '/images/gallery/1738157728405.jpg',
            '/images/gallery/1744640598381.jpg',
            '/images/gallery/1759843978724.jpg',
            '/images/gallery/1780492882946.jpg',
            '/images/gallery/1780840717152.jpg',
            '/images/gallery/1780840717215.jpg',
            '/images/gallery/1738157726256.jpg',
            '/images/gallery/1738157728405.jpg',
            '/images/gallery/1744640598381.jpg',
            '/images/gallery/1759843978724.jpg',
            '/images/gallery/1780492882946.jpg',
            '/images/gallery/1780840717152.jpg',
            '/images/gallery/1780840717215.jpg',
          ].map((src, idx) => (
            <div key={idx} className="gallery-card-item">
              <img src={src} alt={`AWA Visual Capability ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 9. INTERACTIVE BRAND PORTFOLIO WITH TABS           */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="brands-portfolio-section" ref={brandsRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Consumer Products & Co-Manufacturing</div>
            <h2 className="section-title">AWA Retail & FMCG Brand Portfolio</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '700px' }}>
              Formulated and manufactured in our Borg El-Arab facilities to deliver taste, zero-calorie wellness, and barista-grade convenience.
            </p>
          </div>

          {/* Interactive Tab Bar */}
          <div className="brand-tab-bar reveal-fade-up reveal-delay-1">
            {brandPortfolioData.map((brand, bIdx) => (
              <button
                key={brand.id}
                onClick={() => setActiveBrandTab(bIdx)}
                className={`brand-tab-btn ${activeBrandTab === bIdx ? 'active' : ''}`}
              >
                {brand.name}
              </button>
            ))}
          </div>

          {/* Featured Brand Stage Card */}
          {brandPortfolioData[activeBrandTab] && (
            <div className="brand-stage-card reveal-fade-up">
              <div className="brand-stage-img-wrap">
                <img 
                  src={brandPortfolioData[activeBrandTab].image} 
                  alt={brandPortfolioData[activeBrandTab].name} 
                  className="brand-stage-img"
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: '#FFFFFF', padding: '0.4rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'inline-flex', alignItems: 'center' }}>
                    <img 
                      src={brandPortfolioData[activeBrandTab].logo} 
                      alt={brandPortfolioData[activeBrandTab].name} 
                      style={{ height: '30px', maxWidth: '130px', objectFit: 'contain' }}
                    />
                  </div>
                  <span style={{ fontSize: '0.775rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                    {brandPortfolioData[activeBrandTab].category}
                  </span>
                </div>

                <h3 style={{ fontSize: '2.25rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
                  {brandPortfolioData[activeBrandTab].name}
                </h3>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2rem' }}>
                  {brandPortfolioData[activeBrandTab].desc}
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                  {brandPortfolioData[activeBrandTab].stats.map((st, stIdx) => (
                    <div key={stIdx} style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', padding: '0.5rem 0.95rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      ✓ {st}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('products', brandPortfolioData[activeBrandTab].id)}
                  className="btn btn-primary"
                >
                  <span>Explore {brandPortfolioData[activeBrandTab].name} Line</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Operating Companies & Brands Logo Strip */}
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
      {/* 10. INTERACTIVE "WHY AWA" HOVER SHOWCASE           */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="why-awa-section" ref={whyAwaRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">Strategic Advantage</div>
            <h2 className="section-title">Why Industry Leaders Choose AWA Group</h2>
            <p className="section-desc">
              Hover over each capability pillar to explore our technical and manufacturing depth.
            </p>
          </div>

          <div className="why-awa-grid">
            {/* Left Interactive Accordion Items */}
            <div className="why-awa-list">
              {whyAwaData.map((item, idx) => (
                <div
                  key={item.num}
                  className={`why-awa-item ${activeWhyIndex === idx ? 'active' : ''}`}
                  onMouseEnter={() => setActiveWhyIndex(idx)}
                >
                  <div className="why-awa-item-header">
                    <span className="why-awa-item-num">{item.num}</span>
                    <h3 className="why-awa-item-title">{item.title}</h3>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {item.stat}
                    </span>
                  </div>
                  {activeWhyIndex === idx && (
                    <p className="why-awa-item-desc reveal-fade-up">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right Dynamic High-Res Visual Frame */}
            <div className="why-awa-visual-frame reveal-fade-right">
              <img 
                src={whyAwaData[activeWhyIndex].image} 
                alt={whyAwaData[activeWhyIndex].title} 
                className="why-awa-visual-img"
              />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(10px)', padding: '1rem 1.25rem', borderRadius: '14px', color: '#FFFFFF' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4ADE80' }}>
                  AWA Verified Standard
                </div>
                <strong style={{ fontSize: '1rem', fontWeight: 800 }}>
                  {whyAwaData[activeWhyIndex].title} · {whyAwaData[activeWhyIndex].stat}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 11. INTERACTIVE HISTORICAL TIMELINE                */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="timeline-section" ref={timelineRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Over Three Decades</div>
            <h2 className="section-title">The AWA Historical Trajectory</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              Built on 33 years of continuous innovation, facility expansion, and trusted partnerships.
            </p>
          </div>

          <div className="timeline-track-grid">
            {timelineMilestones.map((ms, idx) => (
              <div key={ms.year} className="timeline-node-card reveal-fade-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="timeline-node-dot" />
                <div className="timeline-year-tag">{ms.year}</div>
                <h3 className="timeline-node-title">{ms.title}</h3>
                <p className="timeline-node-desc">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 12. LARGE TYPOGRAPHIC STATEMENT MOMENT             */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="statement-typography-section" ref={statementRef}>
        <div className="container">
          <div className="reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
              Our Guiding Commitment
            </div>
            <h2 className="statement-large-text">
              "Better Ingredients. <span className="gradient-text">Smarter Formulation.</span> Bigger Possibilities."
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              From pilot lab batches to full factory production lines, AWA Group delivers the science and scale that regional food manufacturers rely on every day.
            </p>
            <button onClick={onOpenQuote} className="btn btn-primary">
              <span>Request Formulation Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 13. TRUSTED PARTNERS MARQUEE                       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '5.5rem 0', background: '#F8FAFC' }} ref={marqueeRef}>
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
      {/* 14. SOPHISTICATED LIGHT CTA BANNER                 */}
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

      {/* ═══════════════════════════════════════════════════ */}
      {/* 15. FLOATING CONTACT CTA PILL                      */}
      {/* ═══════════════════════════════════════════════════ */}
      <button 
        onClick={onOpenQuote} 
        className="floating-contact-cta"
        aria-label="Talk to AWA Formulation Team"
      >
        <span className="floating-pulse-dot" />
        <span>Talk to AWA</span>
        <MessageSquare size={16} />
      </button>
    </div>
  );
};
