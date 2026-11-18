import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  MessageSquare, 
  FlaskConical, 
  Globe2, 
  Handshake, 
  Users, 
  Factory, 
  Microscope,
  Play,
  Pause
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
import { industryData, challengeData, familyData } from '../data/v9Data';

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

  // Video hero playback state and ref
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true);
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, []);

  // State for interactive components
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [activeStickyStep, setActiveStickyStep] = useState(0);
  const [exploreTab, setExploreTab] = useState<'industry' | 'challenge' | 'family'>('industry');
  const [activeHeroSector, setActiveHeroSector] = useState<'dairy' | 'meat' | 'bakery' | 'beverage'>('dairy');
  const [activeFacilityView, setActiveFacilityView] = useState<'plant' | 'lab'>('plant');

  const heroSectors = [
    {
      id: 'dairy' as const,
      label: language === 'ar' ? 'الألبان والأجبان' : 'Dairy & Cheese',
      icon: '🧀',
      image: '/images/v9/v7/dairy-cheese.webp',
      tag: language === 'ar' ? 'أنظمة الاستحلاب والقوام' : 'Emulsification & Viscosity Systems',
      spec: language === 'ar' ? 'تحكم دقيق في الذوبان والثبات' : 'Controlled Melting & Thermal Stability',
    },
    {
      id: 'meat' as const,
      label: language === 'ar' ? 'اللحوم والمصنعات' : 'Meat & Savory',
      icon: '🥩',
      image: '/images/v9/v7/meat-seafood.webp',
      tag: language === 'ar' ? 'أنظمة الربط وحفظ الرطوبة' : 'Binding & Yield Extension Systems',
      spec: language === 'ar' ? 'ثبات مستحلب الدهون والبروتين' : 'Fat-Protein Emulsion Stability',
    },
    {
      id: 'bakery' as const,
      label: language === 'ar' ? 'المخبوزات والحلويات' : 'Bakery & Dessert',
      icon: '🥐',
      image: '/images/v9/v7/bakery.webp',
      tag: language === 'ar' ? 'تمديد الصلاحية وهندسة القوام' : 'Shelf-Life & Crumb Softness Systems',
      spec: language === 'ar' ? 'مقاومة الرطوبة ومحاكاة النضارة' : 'Moisture Retention & Freshness Control',
    },
    {
      id: 'beverage' as const,
      label: language === 'ar' ? 'المشروبات والصلصات' : 'Beverage & Sauces',
      icon: '🥤',
      image: '/images/v9/v7/beverages.webp',
      tag: language === 'ar' ? 'مستحلبات النكهة وعوامل التعتيم' : 'Clouding & Flavor Emulsion Systems',
      spec: language === 'ar' ? 'ثبات متجانس بدون انفصال' : 'Homogeneous Phase Separation Control',
    },
  ];

  const v7IndustryImages: Record<string, string> = {
    'dairy-cheese': '/images/v9/v7/dairy-cheese.webp',
    'meat-seafood': '/images/v9/v7/meat-seafood.webp',
    'bakery': '/images/v9/v7/bakery.webp',
    'beverages': '/images/v9/v7/beverages.webp',
    'culinary': '/images/v9/v7/culinary.webp',
    'snacks': '/images/v9/v7/snacks.webp',
  };

  const handleJumpExplore = (tab: 'industry' | 'challenge' | 'family') => {
    setExploreTab(tab);
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      {/* 1. AWA CINEMATIC VIDEO HERO                          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-video-hero" ref={heroRef}>
        {/* Cinematic Background Video with Poster Fallback */}
        <div className="awa-video-bg-wrap" aria-hidden="true">
          <video
            ref={videoRef}
            className="awa-video-bg"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/pages/home/hero-food-science-lab.jpg"
          >
            <source src="/videos/awa-hero.mp4" type="video/mp4" />
          </video>
          {/* Organic Asymmetrical Overlay: Darker on text side, transparent to preserve food footage */}
          <div className="awa-video-overlay" />
        </div>

        {/* Hero Foreground Content */}
        <div className="container awa-video-hero-container">
          <div className="awa-video-hero-content">
            {/* Eyebrow Label — Refined Enterprise Typography */}
            <div className="awa-video-eyebrow reveal-fade-up">
              <span className="awa-video-eyebrow-bar" />
              <span className="awa-video-eyebrow-text">
                {language === 'ar' 
                  ? 'مجموعة AWA · العلم والتركيبات والتصنيع الصناعي' 
                  : 'AWA GROUP · SCIENCE, FORMULATION & SCALE'}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="awa-video-headline reveal-fade-up reveal-delay-1">
              {language === 'ar' ? (
                <>
                  ربط الابتكار في علوم الأغذية بالتصنيع و<span className="awa-video-highlight">الإنتاج الصناعي</span> الواسع
                </>
              ) : (
                <>
                  Bridging Food Science <span className="awa-video-highlight">Innovation</span> With Industrial Manufacturing Scale
                </>
              )}
            </h1>

            {/* Concise Supporting Description */}
            <p className="awa-video-desc reveal-fade-up reveal-delay-2">
              {language === 'ar'
                ? 'شريككم الرائد في حلول الأغذية في مصر والشرق الأوسط. نبتكر أنظمة مثبتات الهيدروكولويد المخصصة، والبروتينات النباتية الوظيفية، والخلطات المتخصصة، بدعم من معامل التطبيقات التجريبية الحديثة وبنية تحتية معتمدة للتبريد وسلاسل الإمداد بطاقة 15,000 طن متري.'
                : "Partner with Egypt's leading food solutions group. We engineer custom hydrocolloid stabilizer systems, functional plant proteins, and specialty blends supported by state-of-the-art pilot application laboratories and 15,000 MT certified cold-chain infrastructure."}
            </p>

            {/* Call to Actions */}
            <div className="awa-video-actions reveal-fade-up reveal-delay-3">
              <button
                type="button"
                onClick={onOpenQuote || (() => handleNav('contact'))}
                className="awa-video-btn-primary"
              >
                <span>{language === 'ar' ? 'تواصل مع علماء الأغذية لدينا' : 'Partner With Our Food Scientists'}</span>
                <ArrowRight size={18} />
              </button>
              <Link
                to="/solutions"
                className="awa-video-btn-secondary"
              >
                <span>{language === 'ar' ? 'استكشف الحلول' : 'Explore Solutions'}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Discreet Video Playback Control */}
        <button
          type="button"
          onClick={toggleVideoPlayback}
          className="awa-video-ctrl-btn"
          aria-label={isVideoPlaying ? (language === 'ar' ? 'إيقاف الفيديو مؤقتاً' : 'Pause background video') : (language === 'ar' ? 'تشغيل الفيديو' : 'Play background video')}
          title={isVideoPlaying ? 'Pause video' : 'Play video'}
        >
          {isVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Section 6: Bottom Credibility Strip */}
        <div className="awa-video-credibility-strip">
          <div className="container">
            <div className="awa-video-credibility-inner">
              <div className="awa-video-credibility-item">
                <FlaskConical className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {language === 'ar' ? 'حلول غذائية متطورة' : 'Cutting-Edge Food Solutions'}
                </span>
              </div>
              <div className="awa-video-credibility-item">
                <Globe2 className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {language === 'ar' ? 'انتشار إقليمي في الشرق الأوسط وأفريقيا' : 'Global Reach in MENA'}
                </span>
              </div>
              <div className="awa-video-credibility-item">
                <ShieldCheck className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {language === 'ar' ? 'معايير جودة صارمة' : 'Uncompromising Quality Standards'}
                </span>
              </div>
              <div className="awa-video-credibility-item">
                <Handshake className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {language === 'ar' ? 'شريك صناعي موثوق' : 'A Trusted Industry Partner'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 1.5 FIND YOUR SOLUTION / INDUSTRIAL PATHFINDER      */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="find-paths">
        <div className="container find-paths-inner">
          <div className="find-paths-heading">
            <strong>{language === 'ar' ? 'اعثر على حلك المناسب' : 'Find your solution'}</strong>
            <small>{language === 'ar' ? "استكشف محفظة AWA الصناعية" : "Explore AWA's industrial portfolio"}</small>
          </div>
          <button type="button" onClick={() => handleJumpExplore('industry')}>
            <span className="path-icon">▦</span>
            <span>
              {language === 'ar' ? 'حسب القطاع الصناعي' : 'By Industry'}
              <small>{language === 'ar' ? 'استكشف التطبيقات الغذائية' : 'Explore food applications'}</small>
            </span>
            <b>↗</b>
          </button>
          <button type="button" onClick={() => handleJumpExplore('challenge')}>
            <span className="path-icon">◎</span>
            <span>
              {language === 'ar' ? 'حسب التحدي التقني' : 'By Challenge'}
              <small>{language === 'ar' ? 'حل مشكلة تصنيعية محددة' : 'Address a technical need'}</small>
            </span>
            <b>↗</b>
          </button>
          <button type="button" onClick={() => handleJumpExplore('family')}>
            <span className="path-icon">▧</span>
            <span>
              {language === 'ar' ? 'حسب عائلة المنتج' : 'By Product Family'}
              <small>{language === 'ar' ? 'استكشف وظائف المكونات' : 'Explore ingredient functions'}</small>
            </span>
            <b>↗</b>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 1.6 INTERACTIVE EXPLORER SECTION                    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section tint" id="explore" style={{ scrollMarginTop: '80px', padding: '4.5rem 0' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {language === 'ar' ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}
            </div>
            <h2 className="section-title">
              {language === 'ar' ? (
                <>استكشف خبراتنا <span className="gradient-text">على طريقتك.</span></>
              ) : (
                <>Explore our expertise <span className="gradient-text">your way.</span></>
              )}
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              {language === 'ar'
                ? 'نقدم مكونات غذائية وأنظمة وظيفية وتركيبات مخصصة مصممة وفقاً لمتطلبات التصنيع الدقيقة. تصفح حسب التطبيق أو التحدي التقني أو عائلة المنتج.'
                : 'We provide food ingredients, functional systems and customized formulations designed around specific manufacturing requirements. Browse by application, technical challenge or functional product family.'}
            </p>
          </div>

          <div className="browser-tabs" role="tablist" aria-label="Explore industrial solutions" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className={exploreTab === 'industry' ? 'active' : ''}
              onClick={() => setExploreTab('industry')}
              role="tab"
              aria-selected={exploreTab === 'industry'}
            >
              <span className="approach-icon" aria-hidden="true">▦</span> {language === 'ar' ? 'حسب القطاع' : 'By Industry'}
            </button>
            <button
              type="button"
              className={exploreTab === 'challenge' ? 'active' : ''}
              onClick={() => setExploreTab('challenge')}
              role="tab"
              aria-selected={exploreTab === 'challenge'}
            >
              <span className="approach-icon" aria-hidden="true">◎</span> {language === 'ar' ? 'حسب التحدي' : 'By Challenge'}
            </button>
            <button
              type="button"
              className={exploreTab === 'family' ? 'active' : ''}
              onClick={() => setExploreTab('family')}
              role="tab"
              aria-selected={exploreTab === 'family'}
            >
              <span className="approach-icon" aria-hidden="true">▧</span> {language === 'ar' ? 'حسب عائلة المنتج' : 'By Product Family'}
            </button>
          </div>

          <div className="browser-results" id="explorer-results">
            {exploreTab === 'industry' && (
              industryData.map((o) => (
                <Link
                  key={o.id}
                  className="browser-card industry-photo-card"
                  to={`/solutions/industry/${o.id}`}
                  aria-label={`Explore ${o.title}`}
                >
                  <div className="industry-card-photo">
                    <img
                      src={v7IndustryImages[o.id] || '/images/v9/v7/hero.webp'}
                      alt={o.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="industry-card-body">
                    <strong>{o.title}</strong>
                    <span className="industry-card-arrow" aria-hidden="true">↗</span>
                  </div>
                </Link>
              ))
            )}

            {exploreTab === 'challenge' && (
              challengeData.map((o) => (
                <Link
                  key={o.id}
                  className="browser-card discovery-card"
                  to={`/solutions/challenge/${o.id}`}
                >
                  <span className="tiny-icon" aria-hidden="true">{o.icon}</span>
                  <strong>{o.title}</strong>
                  <p>{o.desc}</p>
                  <span>{language === 'ar' ? 'استكشف التحدي' : 'Explore challenge'} ↗</span>
                </Link>
              ))
            )}

            {exploreTab === 'family' && (
              familyData.map((o) => (
                <Link
                  key={o.id}
                  className="browser-card discovery-card"
                  to={`/solutions/family/${o.id}`}
                >
                  <span className="tiny-icon" aria-hidden="true">{o.icon}</span>
                  <strong>{o.title}</strong>
                  <p>{o.desc}</p>
                  <span>{language === 'ar' ? 'استكشف عائلة المنتج' : 'Explore product family'} ↗</span>
                </Link>
              ))
            )}
          </div>

          <div className="cta-small" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/solutions" className="btn btn-secondary">
              <span>{language === 'ar' ? 'استكشف دليل الحلول الكامل' : 'Explore full solutions directory'}</span>
              <ArrowRight size={16} />
            </Link>
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
