import React, { useState, useRef } from 'react';
import { 
  ArrowUpRight,
  ArrowRight,
  ShieldCheck, 
  FlaskConical, 
  Globe2, 
  Handshake, 
  Play, 
  Pause,
  Leaf,
  Recycle,
  Users,
  Lightbulb,
  Cog,
  Boxes,
  TrendingUp
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  v9Assets
} from '../data/v9Data';
import '../awa-editorial.css';
import '../awa-reference-home.css';

interface HomeProps {
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomeProps> = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const [activeCapability, setActiveCapability] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useScrollReveal();

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  // Technical capabilities data & corresponding authentic industrial/laboratory imagery
  const capabilitiesList = [
    {
      id: 'sourcing',
      num: '01',
      title: isAr ? 'توريد المكونات والمضافات الغذائية' : 'Food Ingredients & Additives',
      subtitle: isAr ? 'تجارب التطبيقات المعملية والتوريد' : 'PILOT APPLICATION & SOURCING',
      desc: isAr 
        ? 'تحديد المكونات والتقنيات المناسبة من خلال شبكة توكيلات عالمية حصرية لتلبية معايير الجودة والأداء والتكلفة.'
        : 'Identify and evaluate specialty ingredients and technologies through international principals, matching performance needs and commercial feasibility.',
      route: '/capabilities/sourcing',
      image: '/images/pages/home/pilot-plant-dairy-testing.jpg',
      icon: <Leaf size={18} />
    },
    {
      id: 'rd',
      num: '02',
      title: isAr ? 'حلول وتطبيقات الأغذية التطبيقية' : 'Food Solutions & Applications',
      subtitle: isAr ? 'كيمياء الأغذية والتطوير التطبيقي' : 'FOOD CHEMISTRY & FORMULATION',
      desc: isAr 
        ? 'ربط وظائف المكونات بمعايير التصنيع وتجارب التطبيقات المعملية لمعالجة تحديات المنتجات والقوام بدقة.'
        : 'Connect ingredient functionality, processing parameters and pilot application trials to address specific customer challenges.',
      route: '/capabilities/rd',
      image: '/images/pages/home/food-chemistry-formulation.jpg',
      icon: <FlaskConical size={18} />
    },
    {
      id: 'manufacturing',
      num: '03',
      title: isAr ? 'الابتكار والتميز في التصنيع الصناعي' : 'Innovation & R&D Support',
      subtitle: isAr ? 'خلط صناعي وتصنيع متقدم' : 'AUTOMATED INDUSTRIAL BLENDING',
      desc: isAr 
        ? 'ترجمة خبرات التركيب إلى خطوط إنتاج مؤتمتة تدعم الأنظمة الوظيفية والتصنيع التعاقدي بأعلى معايير النظافة.'
        : 'Translate formulation expertise into high-capacity automated production supporting functional systems and contract manufacturing.',
      route: '/capabilities/manufacturing',
      image: '/images/pages/home/blending.jpg',
      icon: <Lightbulb size={18} />
    }
  ];

  // Articles for Section 06 (Knowledge Center - Magazine Editorial)
  const featuredArticle = {
    id: 'feat-1',
    category: isAr ? 'أبحاث تطبيقية' : 'Applied Research',
    date: 'Nov 24, 2026',
    title: isAr 
      ? 'دراسة سوق خلطات وأملاح الفوسفات الوظيفية للأجبان المطبوخة والبدائل النباتية' 
      : 'High-Protein Snacks & Emulsifying Salt Systems in Modern Dairy Formulations',
    excerpt: isAr
      ? 'تحليل تطبيقي معمق حول استقرار الاستحلاب، والتحكم في درجة الذوبان، وتحسين قوام منتجات الألبان والأغذية الوظيفية عبر تقنيات التركيب المتقدمة.'
      : 'An in-depth technical analysis on protein solubility, emulsification stability, and textural optimization in modern functional dairy and snack systems.',
    image: v9Assets.v8Assets['cheese-banner'] || '/images/pages/home/food-chemistry-formulation.jpg',
    link: '/knowledge'
  };

  const supportingArticles = [
    {
      id: 'art-2',
      category: isAr ? 'ابتكار' : 'Innovation',
      date: 'Nov 18, 2026',
      title: isAr 
        ? 'دراسة تقنية حول بدائل السكر والدهون دون التأثير على القوام الحسي' 
        : 'Industrial Sugar & Fat Replacement Without Sensory Compromise',
      image: '/images/pages/home/food-chemistry-formulation.jpg',
      link: '/knowledge'
    },
    {
      id: 'art-3',
      category: isAr ? 'رؤى السوق' : 'Market Insights',
      date: 'Nov 12, 2026',
      title: isAr 
        ? 'أبحاث تحسين الإنتاجية والاحتفاظ بالرطوبة في مصنعات اللحوم والدواجن' 
        : 'Yield & Moisture Retention Research in Processed Meats & Poultry',
      image: v9Assets.v7Assets['meat-seafood'] || '/images/pages/home/pilot-plant-dairy-testing.jpg',
      link: '/knowledge'
    }
  ];

  return (
    <div className={`awa-home-ref ${isAr ? 'rtl' : 'ltr'}`}>
      <SEO
        title={isAr ? 'مجموعة AWA • حلول غذائية مخصصة مصممة لتحقيق الأداء الأمثل' : 'AWA Group • Tailored Food Solutions. Built to Perform.'}
        description="AWA Group combines global sourcing expertise, application-driven R&D and manufacturing capabilities to develop customized food solutions."
        path="/"
        image={v9Assets.v7Assets.factory}
      />

      {/* ═══════════════════════════════════════════════════ */}
      {/* 1. CINEMATIC VIDEO HERO                              */}
      {/* (APPROVED AND UNMODIFIED PER ABSOLUTE RESTRICTIONS)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-video-hero" ref={heroRef}>
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
          <div className="awa-video-overlay" />
        </div>

        <div className="container awa-video-hero-container">
          <div className="awa-video-hero-content">
            <div className="awa-editorial-eyebrow reveal-fade-up">
              <span className="awa-eyebrow-accent-line" />
              <span className="awa-eyebrow-text">
                {isAr ? 'مجموعة AWA / حلول الصناعات الغذائية' : 'AWA GROUP / FOOD INDUSTRY SOLUTIONS'}
              </span>
            </div>

            <h1 className="awa-editorial-headline reveal-fade-up reveal-delay-1">
              {isAr ? (
                <>
                  حلول غذائية مخصصة.
                  <br />
                  <span className="awa-highlight-green">مصممة لتحقيق الأداء الأمثل.</span>
                </>
              ) : (
                <>
                  Tailored Food Solutions.
                  <br />
                  <span className="awa-highlight-green">Built to Perform.</span>
                </>
              )}
            </h1>

            <p className="awa-editorial-desc reveal-fade-up reveal-delay-2" style={{ marginBottom: '2.75rem' }}>
              {isAr
                ? 'تجمع مجموعة AWA بين الخبرة العالمية في التوريد، والبحث والتطوير القائم على التطبيقات، والقدرات التصنيعية لتطوير حلول غذائية مخصصة. نعمل بشكل وثيق مع مصنعي الأغذية لمعالجة التحديات التقنية، وتحسين التركيبات وتقديم حلول مصممة خصيصاً لتلبية متطلبات الإنتاج لديهم.'
                : 'AWA Group combines global sourcing expertise, application-driven R&D and manufacturing capabilities to develop customized food solutions. We work closely with food manufacturers to address technical challenges, optimize formulations and deliver solutions tailored to their production requirements.'}
            </p>

            <div className="awa-editorial-actions reveal-fade-up reveal-delay-3">
              <Link to="/solutions" className="awa-editorial-btn-primary">
                <span>{isAr ? 'استكشف حلول الصناعات' : 'Explore Industry Solutions'}</span>
                <ArrowUpRight size={17} />
              </Link>
              <Link to="/about" className="awa-editorial-btn-secondary">
                <span>{isAr ? 'اكتشف مجموعة AWA' : 'Discover AWA Group'}</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleVideoPlayback}
          className="awa-video-ctrl-btn"
          aria-label={isVideoPlaying ? 'Pause background video' : 'Play background video'}
          title={isVideoPlaying ? 'Pause video' : 'Play video'}
        >
          {isVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        {/* Credibility / Trust Strip */}
        <div className="awa-video-credibility-strip">
          <div className="container">
            <div className="awa-video-credibility-inner">
              <div className="awa-video-credibility-item">
                <FlaskConical className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {isAr ? 'توريد · تطوير · تصنيع' : 'SOURCE · DEVELOP · MANUFACTURE'}
                </span>
              </div>
              <div className="awa-video-credibility-item">
                <Globe2 className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {isAr ? 'من العلم إلى الحل العملي' : 'SCIENCE TO SOLUTION'}
                </span>
              </div>
              <div className="awa-video-credibility-item">
                <ShieldCheck className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {isAr ? 'معايير جودة معتمدة دولياً' : 'Recognized International Standards'}
                </span>
              </div>
              <div className="awa-video-credibility-item">
                <Handshake className="awa-video-credibility-icon" strokeWidth={1.75} />
                <span className="awa-video-credibility-title">
                  {isAr ? 'شراكات تقنية وصناعية موثوقة' : 'Trusted Technical Partnership'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 01: EXPLORE OUR EXPERTISE YOUR WAY          */}
      {/* (ASYMMETRIC EDITORIAL PHOTO COMPOSITION REFINED)    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-expertise">
        <div className="awa-ref-container">
          <div className="awa-ref-expertise-grid">
            {/* Left Content Column */}
            <div className="awa-ref-expertise-info">
              <div className="awa-ref-eyebrow">
                <span>{isAr ? 'مجالات الصناعات الغذائية' : 'INDUSTRY PORTFOLIO'}</span>
              </div>
              <h2 className="awa-ref-sec-title">
                {isAr ? 'استكشف خبراتنا' : 'Explore our expertise'} <br />
                <span className="highlight-green">{isAr ? 'بطريقتك الخاصة' : 'your way'}</span>
              </h2>
              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'من المكونات الأساسية إلى الابتكار التطبيقي — اكتشف مجموعتنا الشاملة من حلول الصناعات الغذائية المصممة لتحقيق الأداء الأمثل.'
                  : 'From ingredients to innovation — discover our wide range of food solutions tailored to your production process.'}
              </p>
              <Link to="/solutions" className="awa-ref-pill-btn outline">
                <span>{isAr ? 'استعراض كافة الحلول' : 'Explore all solutions'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right Asymmetric Photo Composition */}
            <div className="awa-ref-photo-mosaic">
              {/* Dominant Featured Category: Dairy & Cheese */}
              <Link 
                to="/solutions/industry/dairy-cheese"
                className="awa-ref-mosaic-card"
              >
                <img 
                  src={v9Assets.v7Assets['dairy-cheese']} 
                  alt="Dairy, Cheese & Frozen Desserts" 
                  className="awa-ref-mosaic-img"
                  loading="eager"
                />
                <div className="awa-ref-mosaic-overlay">
                  <span className="awa-ref-mosaic-num">01</span>
                  <div className="awa-ref-mosaic-title-row">
                    <h3 className="awa-ref-mosaic-title">
                      {isAr ? 'الألبان والأجبان والحلويات المجمدة' : 'Dairy, Cheese &\nFrozen Desserts'}
                    </h3>
                    <span className="awa-ref-mosaic-arrow">
                      <ArrowRight size={15} className="rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Two Stacked Secondary Categories */}
              <div className="awa-ref-mosaic-stacked">
                {/* Meat & Poultry */}
                <Link 
                  to="/solutions/industry/meat-seafood"
                  className="awa-ref-mosaic-card"
                >
                  <img 
                    src={v9Assets.v7Assets['meat-seafood']} 
                    alt="Meat, Poultry & Seafood" 
                    className="awa-ref-mosaic-img"
                    loading="lazy"
                  />
                  <div className="awa-ref-mosaic-overlay">
                    <span className="awa-ref-mosaic-num">02</span>
                    <div className="awa-ref-mosaic-title-row">
                      <h4 className="awa-ref-mosaic-title" style={{ fontSize: '15.5px' }}>
                        {isAr ? 'اللحوم والدواجن والأسماك' : 'Meat, Poultry &\nSeafood'}
                      </h4>
                      <span className="awa-ref-mosaic-arrow" style={{ width: '28px', height: '28px' }}>
                        <ArrowRight size={13} className="rtl:rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Sauces & Culinary */}
                <Link 
                  to="/solutions/industry/culinary"
                  className="awa-ref-mosaic-card"
                >
                  <img 
                    src={v9Assets.v7Assets['culinary']} 
                    alt="Sauces, Soups & Culinary" 
                    className="awa-ref-mosaic-img"
                    loading="lazy"
                  />
                  <div className="awa-ref-mosaic-overlay">
                    <span className="awa-ref-mosaic-num">03</span>
                    <div className="awa-ref-mosaic-title-row">
                      <h4 className="awa-ref-mosaic-title" style={{ fontSize: '15.5px' }}>
                        {isAr ? 'الصلصات والشوربات والطهي' : 'Sauces, Soups &\nCulinary'}
                      </h4>
                      <span className="awa-ref-mosaic-arrow" style={{ width: '28px', height: '28px' }}>
                        <ArrowRight size={13} className="rtl:rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Horizontal Subcategory Navigation Strip */}
          <div className="awa-ref-subcats-row">
            <Link to="/solutions/industry/beverages" className="awa-ref-subcat-item">
              <span>{isAr ? 'المشروبات والعصائر' : 'Beverages'}</span>
              <span>›</span>
            </Link>
            <Link to="/solutions/industry/snacks" className="awa-ref-subcat-item">
              <span>{isAr ? 'المقرمشات ورقائق الإفطار' : 'Snacks & Cereals'}</span>
              <span>›</span>
            </Link>
            <Link to="/solutions/industry/bakery" className="awa-ref-subcat-item">
              <span>{isAr ? 'المخبوزات والحلويات' : 'Bakery & Confectionery'}</span>
              <span>›</span>
            </Link>
            <Link to="/capabilities/formulations" className="awa-ref-subcat-item">
              <span>{isAr ? 'أنظمة التركيبات المخصصة' : 'Custom Formulations'}</span>
              <span>›</span>
            </Link>
            <Link to="/solutions/catalogue" className="awa-ref-subcat-item">
              <span>{isAr ? 'كتالوج المكونات الكامل' : 'Ingredient Catalogue'}</span>
              <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 02: TECHNICAL EXPERTISE, TAILORED (SPLIT)   */}
      {/* (AUTHENTIC INDUSTRIAL R&D IMAGERY + ACTIVE SWITCH)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-technical">
        <div className="awa-ref-container">
          <div className="awa-ref-tech-grid">
            {/* Left 48%: Large Authentic Industrial/R&D Photograph */}
            <div className="awa-ref-tech-visual">
              {capabilitiesList.map((cap, idx) => (
                <img
                  key={cap.id}
                  src={cap.image}
                  alt={cap.title}
                  className="awa-ref-tech-img"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: activeCapability === idx ? 1 : 0,
                    transform: activeCapability === idx ? 'scale(1)' : 'scale(1.05)',
                    pointerEvents: activeCapability === idx ? 'auto' : 'none'
                  }}
                  loading="lazy"
                />
              ))}
              <div className="awa-ref-tech-badge">
                {capabilitiesList[activeCapability].subtitle}
              </div>
            </div>

            {/* Right 52%: Editorial Heading + Functional Interactive Items */}
            <div className="awa-ref-tech-info">
              <div className="awa-ref-eyebrow">
                <span>{isAr ? 'الخبرة التكنولوجية والتطبيقية' : 'TECHNICAL EXPERTISE'}</span>
              </div>

              <h2 className="awa-ref-sec-title">
                {isAr ? 'خبرة فنية، مصممة ' : 'Technical expertise, '} <br />
                {isAr ? 'خصيصاً ' : 'tailored to '}
                <span className="highlight-green">
                  {isAr ? 'لتطبيقاتك الصناعية.' : 'your application.'}
                </span>
              </h2>

              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'تساعدك خبرتنا العميقة في صناعة الأغذية وفهمنا الدقيق لمعايير التشغيل على تحويل الأفكار والتركيبات إلى حلول قابلة للتطوير وموثوقة الإنتاج.'
                  : 'Our in-depth knowledge and industry experience help you turn ideas into reliable, scalable solutions.'}
              </p>

              <Link
                to="/capabilities"
                style={{ color: '#00A84F', fontWeight: 800, fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}
              >
                <span>{isAr ? 'اكتشف قدراتنا المتكاملة' : 'Discover our capabilities'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>

              {/* 3 Refined Interactive Capabilities */}
              <div className="awa-ref-tech-list" role="tablist">
                {capabilitiesList.map((cap, idx) => (
                  <div
                    key={cap.id}
                    role="tab"
                    tabIndex={0}
                    aria-selected={activeCapability === idx}
                    onMouseEnter={() => setActiveCapability(idx)}
                    onFocus={() => setActiveCapability(idx)}
                    onClick={() => setActiveCapability(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveCapability(idx);
                      }
                    }}
                    className={`awa-ref-tech-item ${activeCapability === idx ? 'active' : ''}`}
                  >
                    <div className="awa-ref-tech-item-left">
                      <span className="awa-ref-tech-num">{cap.num}</span>
                      <div className="awa-ref-tech-icon-wrap">
                        {cap.icon}
                      </div>
                      <div className="awa-ref-tech-text">
                        <span className="awa-ref-tech-title">{cap.title}</span>
                        <span className="awa-ref-tech-sub">{cap.subtitle}</span>
                      </div>
                    </div>
                    <Link to={cap.route} className="awa-ref-tech-arrow" title={cap.title}>
                      ↗
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 03: DESIGNED FOR PERFORMANCE & VALUE        */}
      {/* (EXPRESSIVE 2-PART COMPOSITION WITH CONNECTED VALUE)*/}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-perf">
        <div className="awa-ref-container">
          <div className="awa-ref-perf-grid">
            {/* Left Content */}
            <div className="awa-ref-expertise-info">
              <div className="awa-ref-eyebrow">
                <span>{isAr ? 'الأداء والقيمة' : 'PERFORMANCE & VALUE'}</span>
              </div>
              <h2 className="awa-ref-sec-title">
                {isAr ? 'مصممة للأداء.' : 'Designed for'} <br />
                {isAr ? 'ومحسوبة ' : 'performance.'} <br />
                <span className="highlight-green">
                  {isAr ? 'لتحقيق القيمة.' : 'Considered for value.'}
                </span>
              </h2>
              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'حلول عالية الجودة تقدم أثراً قابلاً للقياس عبر سلسلة القيمة الخاصة بك، محققة التوازن الدقيق بين الأداء الوظيفي والتكلفة الاقتصادية.'
                  : 'High-quality solutions that deliver measurable impact across your entire value chain, balancing sensory performance with commercial viability.'}
              </p>
              <Link to="/capabilities/formulations" className="awa-ref-pill-btn dark">
                <span>{isAr ? 'اعرف المزيد' : 'Learn more'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 3 Connected Principles with Distinctive Icons */}
            <div className="awa-ref-perf-pillars">
              {/* Pillar 1 */}
              <div className="awa-ref-perf-pillar">
                <div className="awa-ref-perf-icon-box">
                  <Cog size={28} strokeWidth={1.8} />
                </div>
                <h3 className="awa-ref-perf-name">
                  {isAr ? 'الأداء الوظيفي' : 'Functional Performance'}
                </h3>
                <p className="awa-ref-perf-desc">
                  {isAr ? 'ضبط القوام، الاستحلاب، والذوبانية لتحقيق أعلى جودة حسية.' : 'Precision texture, melt control, and shelf-life stability.'}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="awa-ref-perf-pillar">
                <div className="awa-ref-perf-icon-box">
                  <Boxes size={28} strokeWidth={1.8} />
                </div>
                <h3 className="awa-ref-perf-name">
                  {isAr ? 'التوافق الإنتاجي' : 'Production Compatibility'}
                </h3>
                <p className="awa-ref-perf-desc">
                  {isAr ? 'التوافق التام مع خطوط التشغيل الحالية وظروف المعاملات الحرارية.' : 'Seamless integration with existing industrial lines & thermal profiles.'}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="awa-ref-perf-pillar">
                <div className="awa-ref-perf-icon-box">
                  <TrendingUp size={28} strokeWidth={1.8} />
                </div>
                <h3 className="awa-ref-perf-name">
                  {isAr ? 'القيمة التجارية' : 'Commercial Value'}
                </h3>
                <p className="awa-ref-perf-desc">
                  {isAr ? 'تحسين تكلفة الوصفات وزيادة إنتاجية التشغيل بهوامش ربحية مستدامة.' : 'Optimized formulation economics and reduced ingredient waste.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 04: INTERNATIONAL STANDARDS (MINT SURFACE)  */}
      {/* (AUTHENTIC LOGOS WITH CLEAR STRUCTURAL SEPARATION)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-certs">
        <div className="awa-ref-container">
          <div className="awa-ref-certs-card">
            {/* Left Header */}
            <div className="awa-ref-certs-intro">
              <span className="awa-ref-eyebrow" style={{ color: '#0F5132' }}>
                <span>{isAr ? 'الشهادات والاعتمادات' : 'CERTIFICATIONS'}</span>
              </span>
              <h2 className="awa-ref-sec-title" style={{ fontSize: 'clamp(1.9rem, 2.9vw, 2.6rem)', marginBottom: '14px' }}>
                {isAr ? 'معايير دولية.' : 'International Standards.'} <br />
                {isAr ? 'جودة في الممارسة.' : 'Quality in Practice.'}
              </h2>
              <p className="awa-ref-sec-desc" style={{ color: '#2D5E4A', marginBottom: '24px' }}>
                {isAr
                  ? 'نلتزم بأعلى معايير سلامة الأغذية العالمية، لأن الجودة والامتثال يمثلان جوهر كل ما نقوم به.'
                  : 'We meet the highest international standards, because quality is at the core of what we do.'}
              </p>
              <Link
                to="/quality"
                style={{ color: '#0F5132', fontWeight: 800, fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>{isAr ? 'استعراض كافة الشهادات والاعتمادات' : 'View our certifications'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: Logos in 2 Columns with Distinct Separation */}
            <div className="awa-ref-certs-showcase">
              {/* International Certifications Column */}
              <div className="awa-ref-cert-group">
                <span className="awa-ref-cert-group-label">
                  {isAr ? 'الشهادات الدولية المعتمدة' : 'International Certifications'}
                </span>
                <div className="awa-ref-cert-logos">
                  {['fssc-22000', 'iso-9001', 'iso-14001', 'iso-45001'].map((assetKey) => {
                    const src = (v9Assets.corporateAssets as any)[assetKey];
                    return (
                      <div key={assetKey} className="awa-ref-cert-logo-box" title={assetKey.toUpperCase()}>
                        <img 
                          src={src} 
                          alt={assetKey} 
                          className="awa-ref-cert-logo-item" 
                          loading="eager" 
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Regulatory Registrations Column */}
              <div className="awa-ref-cert-group">
                <span className="awa-ref-cert-group-label">
                  {isAr ? 'التسجيل والاعتماد التنظيمي' : 'Regulatory Registrations'}
                </span>
                <div className="awa-ref-cert-logos">
                  {['fda', 'halal', 'nfsa'].map((assetKey) => {
                    const src = (v9Assets.corporateAssets as any)[assetKey];
                    return (
                      <div key={assetKey} className="awa-ref-cert-logo-box" title={assetKey.toUpperCase()}>
                        <img 
                          src={src} 
                          alt={assetKey} 
                          className="awa-ref-cert-logo-item" 
                          loading="eager" 
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 05: RESPONSIBLE GROWTH. LASTING IMPACT.     */}
      {/* (AUTHENTIC SUSTAINABLE AGRICULTURE + 5 PILLARS)     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-sustain">
        <div className="awa-ref-container">
          {/* Top Editorial Split */}
          <div className="awa-ref-sustain-main">
            {/* Left Authentic Agriculture/Seedling Photo */}
            <div className="awa-ref-sustain-visual">
              <img 
                src="/images/pages/sustainability/sustainability.jpg" 
                alt="Responsible Growth & Agriculture" 
                className="awa-ref-sustain-img"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = v9Assets.v7Assets.sourcing;
                }}
              />
            </div>

            {/* Center-Right Content */}
            <div className="awa-ref-sustain-intro">
              <div className="awa-ref-eyebrow">
                <span>{isAr ? 'الاستدامة والأثر' : 'SUSTAINABILITY & IMPACT'}</span>
              </div>
              <h2 className="awa-ref-sec-title">
                {isAr ? 'نمو مسؤول.' : 'Responsible Growth.'} <br />
                <span className="highlight-green">{isAr ? 'وأثر دائم.' : 'Lasting Impact.'}</span>
              </h2>
              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'بناء مستقبل غذائي أكثر استدامة عبر الممارسات المسؤولة، وحماية الموارد الطبيعية، والابتكار التطبيقي المتواصل عبر عملياتنا وسلاسل القيمة.'
                  : 'Building a more sustainable food future through responsible practices, resource efficiency, and continuous applied innovation across our operations and value chain.'}
              </p>
              <Link to="/sustainability" className="awa-ref-pill-btn outline">
                <span>{isAr ? 'أثرنا في الاستدامة' : 'Our impact'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* 5 Full-Width Connected Editorial Pillars */}
          <div className="awa-ref-sustain-pillars">
            {[
              { 
                num: '01', 
                title: isAr ? 'التوريد المستدام' : 'Sustainable Sourcing', 
                desc: isAr ? 'شراكات زراعية مسؤولة وسلاسل توريد معتمدة المصدر.' : 'Ethical agricultural partnerships & traceable origins.',
                icon: <Leaf size={20} /> 
              },
              { 
                num: '02', 
                title: isAr ? 'المسؤولية البيئية' : 'Environmental Responsibility', 
                desc: isAr ? 'كفاءة استهلاك الطاقة وتقليل الأثر الكربوني الصناعي.' : 'Energy efficiency & reduced industrial carbon footprint.',
                icon: <Recycle size={20} /> 
              },
              { 
                num: '03', 
                title: isAr ? 'دعم المجتمع' : 'Community & People', 
                desc: isAr ? 'التعليم والتدريب التقني المستمر والاستثمار المجتمعي.' : 'Continuous technical education & social investment.',
                icon: <Users size={20} /> 
              },
              { 
                num: '04', 
                title: isAr ? 'سلامة الغذاء والجودة' : 'Food Safety & Quality', 
                desc: isAr ? 'التزام صارم بأعلى معايير النظافة والرقابة المعتمدة.' : 'Zero-compromise compliance & strict hygiene protocols.',
                icon: <ShieldCheck size={20} /> 
              },
              { 
                num: '05', 
                title: isAr ? 'الابتكار لغد أفضل' : 'Innovation for Tomorrow', 
                desc: isAr ? 'تطوير حلول البطاقات النظيفة والبدائل النباتية المستدامة.' : 'Clean-label formulations & plant-based solutions.',
                icon: <Lightbulb size={20} /> 
              },
            ].map((pillar) => (
              <div key={pillar.num} className="awa-ref-sustain-pillar">
                <div className="awa-ref-sustain-top">
                  <span className="awa-ref-sustain-num">{pillar.num}</span>
                  <div className="awa-ref-sustain-icon">
                    {pillar.icon}
                  </div>
                </div>
                <strong className="awa-ref-sustain-label">
                  {pillar.title}
                </strong>
                <p className="awa-ref-sustain-desc">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 06: KNOWLEDGE THAT SUPPORTS PROGRESS        */}
      {/* (MAGAZINE EDITORIAL: 1 FEATURED + 2 SUPPORTING)     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-knowledge">
        <div className="awa-ref-container">
          <div className="awa-ref-knowledge-header">
            <div>
              <div className="awa-ref-eyebrow">
                <span>{isAr ? 'منصة الأبحاث والمعرفة' : 'RESEARCH & INSIGHTS'}</span>
              </div>
              <h2 className="awa-ref-sec-title">
                {isAr ? 'معرفة تدعم' : 'Knowledge that'} <br />
                {isAr ? 'التقدم الصناعي.' : 'supports progress.'}
              </h2>
              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'رؤى وأبحاث واتجاهات الصناعة لمساعدتك على البقاء في الصدارة في تطوير وتركيب الأغذية.'
                  : 'Insights, research and industry trends to help you stay ahead in food formulation and manufacturing.'}
              </p>
            </div>
            <Link
              to="/knowledge"
              className="awa-ref-pill-btn outline"
              style={{ marginBottom: '18px' }}
            >
              <span>{isAr ? 'استكشف كافة الأبحاث' : 'Explore all insights'}</span>
              <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>

          {/* Magazine Composition */}
          <div className="awa-ref-mag-layout">
            {/* Dominant Featured Article (Left) */}
            <Link to={featuredArticle.link} className="awa-ref-mag-featured">
              <div className="awa-ref-mag-feat-img-wrap">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="awa-ref-mag-feat-img"
                  loading="lazy"
                />
              </div>
              <div className="awa-ref-mag-feat-body">
                <div className="awa-ref-meta-row">
                  <span className="awa-ref-tag-pill">{featuredArticle.category}</span>
                  <span className="awa-ref-meta-date">{featuredArticle.date}</span>
                </div>
                <h3 className="awa-ref-mag-feat-title">
                  {featuredArticle.title}
                </h3>
                <p className="awa-ref-mag-feat-excerpt">
                  {featuredArticle.excerpt}
                </p>
                <span className="awa-ref-read-more">
                  <span>{isAr ? 'قراءة الدراسة الكاملة' : 'Read full study'}</span>
                  <ArrowRight size={14} className="rtl:rotate-180" />
                </span>
              </div>
            </Link>

            {/* Two Stacked Supporting Articles (Right) */}
            <div className="awa-ref-mag-stacked">
              {supportingArticles.map((art) => (
                <Link
                  key={art.id}
                  to={art.link}
                  className="awa-ref-mag-side-card"
                >
                  <div className="awa-ref-mag-side-img-wrap">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="awa-ref-mag-side-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="awa-ref-mag-side-body">
                    <div>
                      <div className="awa-ref-meta-row">
                        <span className="awa-ref-tag-pill">{art.category}</span>
                        <span className="awa-ref-meta-date">{art.date}</span>
                      </div>
                      <h4 className="awa-ref-mag-side-title">
                        {art.title}
                      </h4>
                    </div>
                    <span className="awa-ref-read-more" style={{ fontSize: '12.5px' }}>
                      <span>{isAr ? 'اقرأ المزيد' : 'Read more'}</span>
                      <ArrowRight size={12} className="rtl:rotate-180" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 07: FINAL CTA (DEEP NAVY WITH GREEN ACCENT) */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-cta">
        <div className="awa-ref-cta-glow" />
        <div className="awa-ref-container">
          <div className="awa-ref-cta-inner">
            <div className="awa-ref-cta-text">
              <h2>
                {isAr ? 'هل لديك ' : 'Have a '}
                <span className="highlight-green">
                  {isAr ? 'تحدٍ غذائي' : 'food challenge'}
                </span>
                {isAr ? ' تريد حله؟' : ' to solve?'}
              </h2>
              <p>
                {isAr
                  ? 'أخبرنا عن احتياجاتك ومتطلبات مشروعك ولنبتكر الحل الأمثل معاً.'
                  : "Tell us about your needs and let's create the right solution together."}
              </p>
            </div>

            <Link
              to="/contact?type=technical"
              className="awa-ref-pill-btn white"
              style={{ padding: '16px 36px', fontSize: '14.5px' }}
            >
              <span>{isAr ? 'تواصل مع خبرائنا' : 'Contact our experts'}</span>
              <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
