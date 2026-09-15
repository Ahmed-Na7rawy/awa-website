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
  FOOD_SECTORS, 
  CLIENT_LOGOS
} from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

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
  const { t, language, translations } = useLanguage();

  // State for interactive components
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [activeStickyStep, setActiveStickyStep] = useState(0);

  // Scroll reveal refs
  const heroRef = useScrollReveal();
  const numbersRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const stickyRef = useScrollReveal();
  const carouselRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const whyAwaRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  const statementRef = useScrollReveal();
  const marqueeRef = useScrollReveal();

  // Carousel navigation
  const totalCarouselSlides = FOOD_SECTORS.length;
  const nextCarousel = () => setCarouselIndex((prev) => (prev + 1) % totalCarouselSlides);
  const prevCarousel = () => setCarouselIndex((prev) => (prev - 1 + totalCarouselSlides) % totalCarouselSlides);

  // "Science to Scale" Sticky Stages Data
  const stageImages = [
    '/images/pages/solutions/raw-materials-warehouse.jpg',
    '/images/pages/home/pilot-plant-dairy-testing.jpg',
    '/images/pages/industries/image33.jpg',
    '/images/pages/home/blending.jpg',
    '/images/pages/solutions/cold-chain-logistics-truck.jpg',
  ];

  const scienceToScaleStages = translations.home.scienceToScale.stages.map((stage, idx) => ({
    ...stage,
    image: stageImages[idx] || stageImages[0],
  }));

  // Smooth scroll handler to target stage card
  const handleScrollToStage = (sIdx: number) => {
    setActiveStickyStep(sIdx);
    const targetEl = document.getElementById(`stage-card-${scienceToScaleStages[sIdx].step}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // "Why AWA" Interactive Showcase Data
  const whyImages = [
    '/images/pages/home/sensory-rheology-lab.jpg',
    '/images/pages/industries/image33.jpg',
    '/images/pages/solutions/cold-chain-logistics-truck.jpg',
    '/images/pages/solutions/raw-materials-warehouse.jpg',
    '/images/pages/home/blending.jpg',
  ];

  const whyAwaData = translations.home.whyAwa.pillars.map((pillar, idx) => ({
    ...pillar,
    image: whyImages[idx] || whyImages[0],
  }));

  return (
    <div className="home-page">
      <SEO
        path="/"
        image="/images/pages/industries/image33.jpg"
      />
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
                <span>{translations.home.hero.eyebrow}</span>
              </div>

              <h1 className="hero-cinematic-title">
                {translations.home.hero.title}
              </h1>

              <p className="hero-cinematic-desc">
                {translations.home.hero.desc}
              </p>

              <div className="hero-cinematic-actions">
                <button
                  onClick={() => onNavigate('solutions')}
                  className="btn btn-primary"
                >
                  <span>{translations.home.hero.ctaPrimary}</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-secondary"
                >
                  <span>{translations.home.hero.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Right Oversized Visual Composition with Floating Cards */}
            <div className="hero-cinematic-media reveal-fade-right reveal-delay-1">
              <div className="hero-cinematic-img-frame">
                <img 
                  src="/images/pages/home/hero-food-science-lab.jpg" 
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
                    {translations.home.hero.badge1Title}
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    {translations.home.hero.badge1Sub}
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
                    {translations.home.hero.badge2Title}
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    {translations.home.hero.badge2Sub}
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
              {translations.home.marquee.map((item, mIdx) => (
                <span key={mIdx} className="text-marquee-item">
                  {item} <span className="text-marquee-dot" />
                </span>
              ))}
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
            {translations.home.numbers.stats.map((stat, idx) => (
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
              <div className="eyebrow">{translations.home.story.eyebrow}</div>
              <h2 className="section-title">
                {translations.home.story.title}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {translations.home.story.p1}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                {translations.home.story.p2}
              </p>

              {/* Verified Capabilities Checklist */}
              <div className="feature-checklist" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {language === 'ar' ? 'معامل التطبيقات التجريبية' : 'Pilot Application Labs'}
                    </strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {language === 'ar' ? 'محاكاة بيئة وظروف خطوط الإنتاج' : 'Replicating client factory conditions'}
                    </span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {language === 'ar' ? 'خطوط التوريد العالمية' : 'Global Sourcing Lines'}
                    </strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {language === 'ar' ? 'شراكات مباشرة في أكثر من 30 دولة' : 'Direct partners in 30+ countries'}
                    </span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {language === 'ar' ? 'الخلط والإنتاج الصناعي' : 'Industrial Compounding'}
                    </strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {language === 'ar' ? 'طاقة 15.5 طن/ساعة مساحيق وسوائل' : '15.5 MT/hr powder & liquid capacity'}
                    </span>
                  </div>
                </div>
                <div className="feature-check-item">
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ display: 'block', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {language === 'ar' ? 'مراقبة الجودة والاعتمادات' : 'Certified Quality Control'}
                    </strong>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {language === 'ar' ? 'شهادة تحليل معتمدة لكل دفعة' : 'Batch-by-batch release COA'}
                    </span>
                  </div>
                </div>
              </div>

              <button onClick={() => onNavigate('about')} className="btn btn-secondary">
                <span>{translations.home.story.btn}</span>
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
                src="/images/pages/home/food-chemistry-formulation.jpg" 
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
              <div className="eyebrow">{translations.home.scienceToScale.eyebrow}</div>
              <h2 className="sticky-story-title">{translations.home.scienceToScale.title}</h2>
              <p className="sticky-story-desc">
                {translations.home.scienceToScale.desc}
              </p>

              <div className="sticky-story-stepper">
                {scienceToScaleStages.map((stage, sIdx) => (
                  <button
                    key={stage.step}
                    onClick={() => handleScrollToStage(sIdx)}
                    className={`sticky-story-step-btn ${activeStickyStep === sIdx ? 'active' : ''}`}
                  >
                    <span className="step-num">{stage.step}</span>
                    <span>{stage.tag} — {stage.title.split('&')[0].split('·')[0]}</span>
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
                    <div className="sticky-story-card-step">
                      {language === 'ar' ? `المرحلة ${stage.step} · ${stage.tag}` : `Stage ${stage.step} · ${stage.tag}`}
                    </div>
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
      {/* 6. SPECIALIZED FOOD MATRIX CAROUSEL                */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="matrix-carousel-section" ref={carouselRef}>
        <div className="container">
          <div className="matrix-carousel-header reveal-fade-up">
            <div>
              <div className="eyebrow">{translations.home.carousel.eyebrow}</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>{translations.home.carousel.title}</h2>
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
              style={{ transform: `translateX(${language === 'ar' ? '' : '-'}${carouselIndex * (100 / 3)}%)` }}
            >
              {FOOD_SECTORS.map((sector) => (
                <Link 
                  key={sector.id}
                  to={`/solutions/${sector.id}`}
                  className="matrix-carousel-card"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                >
                  <div className="matrix-carousel-img-wrap">
                    <img src={sector.image} alt={sector.name} className="matrix-carousel-img" />
                  </div>
                  <div className="matrix-carousel-body">
                    <div className="matrix-light-cat">
                      {language === 'ar' ? 'أنظمة التطبيق الصناعي' : 'Application System'}
                    </div>
                    <h3 className="matrix-light-title">
                      {language === 'ar' && sector.id === 'dairy' ? 'حلول الألبان والأجبان' :
                       language === 'ar' && sector.id === 'meat' ? 'أنظمة اللحوم والمصنعات' :
                       language === 'ar' && sector.id === 'bakery' ? 'المخبوزات والحلويات' :
                       language === 'ar' && sector.id === 'beverage' ? 'المشروبات والعصائر' :
                       language === 'ar' && sector.id === 'sauces' ? 'الصلصات والمايونيز' :
                       language === 'ar' && sector.id === 'fmcg' ? 'العلامات الاستهلاكية' :
                       sector.name}
                    </h3>
                    <p className="matrix-light-desc">{sector.desc}</p>
                    <div className="matrix-light-link">
                      <span>{language === 'ar' ? 'استكشف الحلول' : 'Explore Solutions'}</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
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
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.home.gallery.eyebrow}</div>
            <h2 className="section-title">{translations.home.gallery.title}</h2>
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
      {/* 10. INTERACTIVE "WHY AWA" HOVER SHOWCASE           */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="why-awa-section" ref={whyAwaRef}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">{translations.home.whyAwa.eyebrow}</div>
            <h2 className="section-title">{translations.home.whyAwa.title}</h2>
            <p className="section-desc">
              {translations.home.whyAwa.desc}
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
                  {language === 'ar' ? 'معايير AWA المعتمدة' : 'AWA Verified Standard'}
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
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.home.timeline.eyebrow}</div>
            <h2 className="section-title">{translations.home.timeline.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              {translations.home.timeline.desc}
            </p>
          </div>

          <div className="timeline-track-grid">
            {translations.home.timeline.nodes.map((ms, idx) => (
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
              {language === 'ar' ? 'فلسفتنا ورؤيتنا' : 'Our Guiding Commitment'}
            </div>
            <h2 className="statement-large-text">
              {language === 'ar' ? (
                <span>"مكونات أرقى. <span className="gradient-text">تركيبات أذكى.</span> إمكانيات صناعية أوسع."</span>
              ) : (
                <span>"Better Ingredients. <span className="gradient-text">Smarter Formulation.</span> Bigger Possibilities."</span>
              )}
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              {translations.home.statement.quote}
            </p>
            <button onClick={onOpenQuote} className="btn btn-primary">
              <span>{translations.home.hero.ctaPrimary}</span>
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
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.home.partners.eyebrow}</div>
            <h2 className="section-title" style={{ fontSize: '2.25rem' }}>{translations.home.partners.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              {translations.home.partners.desc}
            </p>
          </div>
          <div className="reveal-fade-up reveal-delay-1">
            <PartnerMarquee items={CLIENT_LOGOS} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 15. FLOATING CONTACT CTA PILL                      */}
      {/* ═══════════════════════════════════════════════════ */}
      <button 
        onClick={onOpenQuote} 
        className="floating-contact-cta"
        aria-label={translations.home.floatingCta.aria}
      >
        <span className="floating-pulse-dot" />
        <span>{translations.home.floatingCta.text}</span>
        <MessageSquare size={16} />
      </button>
    </div>
  );
};
