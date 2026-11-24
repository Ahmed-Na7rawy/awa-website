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

  const [hoveredCapability, setHoveredCapability] = useState<number>(0);
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

  // Technical capabilities data & corresponding dynamic imagery
  const capabilitiesList = [
    {
      id: 'sourcing',
      num: '01',
      title: isAr ? 'توريد المكونات والمضافات الغذائية' : 'Food Ingredients & Additives',
      subtitle: isAr ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply',
      desc: isAr 
        ? 'تحديد المكونات والتقنيات المناسبة من خلال شبكة توكيلات عالمية حصرية لتلبية معايير الجودة والأداء والتكلفة.'
        : 'Identify and evaluate specialty ingredients and technologies through international principals, matching performance needs and commercial feasibility.',
      route: '/capabilities/sourcing',
      image: v9Assets.v7Assets.sourcing || '/images/pages/home/pilot-plant-dairy-testing.jpg',
      icon: <Leaf size={18} />
    },
    {
      id: 'rd',
      num: '02',
      title: isAr ? 'حلول وتطبيقات الأغذية التطبيقية' : 'Food Solutions & Applications',
      subtitle: isAr ? 'البحث والتطوير ودعم التطبيقات' : 'R&D & Application Development',
      desc: isAr 
        ? 'ربط وظائف المكونات بمعايير التصنيع وتجارب التطبيقات المعملية لمعالجة تحديات المنتجات والقوام بدقة.'
        : 'Connect ingredient functionality, processing parameters and pilot application trials to address specific customer challenges.',
      route: '/capabilities/rd',
      image: v9Assets.v7Assets.formulation || '/images/pages/home/food-chemistry-formulation.jpg',
      icon: <FlaskConical size={18} />
    },
    {
      id: 'manufacturing',
      num: '03',
      title: isAr ? 'الابتكار والتميز في التصنيع الصناعي' : 'Innovation & R&D Support',
      subtitle: isAr ? 'التميز في التصنيع والخلط' : 'Manufacturing Excellence',
      desc: isAr 
        ? 'ترجمة خبرات التركيب إلى خطوط إنتاج مؤتمتة تدعم الأنظمة الوظيفية والتصنيع التعاقدي بأعلى معايير النظافة.'
        : 'Translate formulation expertise into high-capacity automated production supporting functional systems and contract manufacturing.',
      route: '/capabilities/manufacturing',
      image: v9Assets.v7Assets.factory || '/images/pages/home/blending.jpg',
      icon: <Lightbulb size={18} />
    }
  ];

  // Articles for Section 06
  const insightArticles = [
    {
      id: 'art-1',
      category: isAr ? 'أبحاث' : 'Research',
      date: 'Nov 24, 2026',
      title: isAr 
        ? 'دراسة سوق خلطات وأملاح الفوسفات الوظيفية للأجبان المطبوخة' 
        : 'High-Protein Snacks Market Study',
      image: v9Assets.v8Assets['sourcing-ingredients'] || v9Assets.v8Assets['cheese-banner'],
      link: '/knowledge'
    },
    {
      id: 'art-2',
      category: isAr ? 'ابتكار' : 'Innovation',
      date: 'Nov 18, 2026',
      title: isAr 
        ? 'دراسة تقنية حول تحسين معاملات زيوت القلي الصناعية' 
        : 'Industrial Frying Oil Technical Study',
      image: '/images/pages/home/food-chemistry-formulation.jpg',
      link: '/knowledge'
    },
    {
      id: 'art-3',
      category: isAr ? 'رؤى السوق' : 'Market Insights',
      date: 'Nov 12, 2026',
      title: isAr 
        ? 'أبحاث معجون وصلصات الطماطم وقوام الاستحلاب' 
        : 'Tomato Paste & Sauce Research',
      image: v9Assets.v7Assets['culinary'] || '/images/pages/home/pilot-plant-dairy-testing.jpg',
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
      {/* (ASYMMETRIC EDITORIAL PHOTO COMPOSITION AS REF)     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-expertise">
        <div className="awa-ref-container">
          <div className="awa-ref-expertise-grid">
            {/* Left Content Column */}
            <div className="awa-ref-expertise-info">
              <h2 className="awa-ref-sec-title">
                {isAr ? 'استكشف خبراتنا' : 'Explore our expertise'} <br />
                <span className="highlight-green">{isAr ? 'بطريقتك الخاصة' : 'your way'}</span>
              </h2>
              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'من المكونات الأساسية إلى الابتكار التطبيقي — اكتشف مجموعتنا الشاملة من حلول الصناعات الغذائية.'
                  : 'From ingredients to innovation — discover our wide range of food solutions.'}
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
                      <ArrowRight size={14} className="rtl:rotate-180" />
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
                      <h4 className="awa-ref-mosaic-title" style={{ fontSize: '15px' }}>
                        {isAr ? 'اللحوم والدواجن والأسماك' : 'Meat, Poultry &\nSeafood'}
                      </h4>
                      <span className="awa-ref-mosaic-arrow" style={{ width: '24px', height: '24px', fontSize: '12px' }}>
                        <ArrowRight size={12} className="rtl:rotate-180" />
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
                      <h4 className="awa-ref-mosaic-title" style={{ fontSize: '15px' }}>
                        {isAr ? 'الصلصات والشوربات والطهي' : 'Sauces, Soups &\nCulinary'}
                      </h4>
                      <span className="awa-ref-mosaic-arrow" style={{ width: '24px', height: '24px', fontSize: '12px' }}>
                        <ArrowRight size={12} className="rtl:rotate-180" />
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
              <span>{isAr ? 'المربيات والدهن الغذائي' : 'Preserves & Spreads'}</span>
              <span>›</span>
            </Link>
            <Link to="/solutions/catalogue" className="awa-ref-subcat-item">
              <span>{isAr ? 'البسكويت والمقرمشات' : 'Biscuits & Cereals'}</span>
              <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 02: TECHNICAL EXPERTISE, TAILORED (SPLIT)   */}
      {/* (45% INDUSTRIAL PHOTO + INTERACTIVE NUMBERED LIST)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-technical">
        <div className="awa-ref-container">
          <div className="awa-ref-tech-grid">
            {/* Left 45%: Large Industrial Photograph with Smooth Curved Edge */}
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
                    opacity: hoveredCapability === idx ? 1 : 0,
                    transform: hoveredCapability === idx ? 'scale(1)' : 'scale(1.05)',
                    pointerEvents: hoveredCapability === idx ? 'auto' : 'none'
                  }}
                  loading="lazy"
                />
              ))}
            </div>

            {/* Right 55%: Editorial Heading + Refined Interactive List */}
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

              <p className="awa-ref-sec-desc" style={{ maxWidth: '480px' }}>
                {isAr
                  ? 'تساعدك خبرتنا العميقة في صناعة الأغذية وفهمنا الدقيق لمعايير التشغيل على تحويل الأفكار والتركيبات إلى حلول قابلة للتطوير وموثوقة الإنتاج.'
                  : 'Our in-depth knowledge and industry experience help you turn ideas into reliable, scalable solutions.'}
              </p>

              <Link
                to="/capabilities"
                style={{ color: '#00A84F', fontWeight: 700, fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}
              >
                <span>{isAr ? 'اكتشف قدراتنا المتكاملة' : 'Discover our capabilities'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>

              {/* 3 Refined Interactive Capabilities */}
              <div className="awa-ref-tech-list">
                {capabilitiesList.map((cap, idx) => (
                  <Link
                    key={cap.id}
                    to={cap.route}
                    onMouseEnter={() => setHoveredCapability(idx)}
                    onFocus={() => setHoveredCapability(idx)}
                    className={`awa-ref-tech-item ${hoveredCapability === idx ? 'active' : ''}`}
                  >
                    <div className="awa-ref-tech-item-left">
                      <span className="awa-ref-tech-num">{cap.num}</span>
                      <div className="awa-ref-tech-icon-wrap">
                        {cap.icon}
                      </div>
                      <span className="awa-ref-tech-title">{cap.title}</span>
                    </div>
                    <span className="awa-ref-tech-arrow">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 03: DESIGNED FOR PERFORMANCE & VALUE        */}
      {/* (EXPRESSIVE 2-PART EDITORIAL WITH 3 PILLARS)        */}
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
                  ? 'حلول عالية الجودة تقدم أثراً قابلاً للقياس عبر سلسلة القيمة الخاصة بك.'
                  : 'High-quality solutions that deliver measurable impact across your entire value chain.'}
              </p>
              <Link to="/capabilities/formulations" className="awa-ref-pill-btn dark">
                <span>{isAr ? 'اعرف المزيد' : 'Learn more'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 3 Supporting Principles with Thin Dividers */}
            <div className="awa-ref-perf-pillars">
              {/* Pillar 1 */}
              <div className="awa-ref-perf-pillar">
                <div className="awa-ref-perf-icon">
                  <Cog size={36} strokeWidth={1.75} />
                </div>
                <h3 className="awa-ref-perf-name">
                  {isAr ? 'الأداء\nالوظيفي' : 'Functional\nPerformance'}
                </h3>
              </div>

              {/* Pillar 2 */}
              <div className="awa-ref-perf-pillar">
                <div className="awa-ref-perf-icon">
                  <Boxes size={36} strokeWidth={1.75} />
                </div>
                <h3 className="awa-ref-perf-name">
                  {isAr ? 'التوافق\nالإنتاجي' : 'Production\nCompatibility'}
                </h3>
              </div>

              {/* Pillar 3 */}
              <div className="awa-ref-perf-pillar">
                <div className="awa-ref-perf-icon">
                  <TrendingUp size={36} strokeWidth={1.75} />
                </div>
                <h3 className="awa-ref-perf-name">
                  {isAr ? 'القيمة\nالتجارية' : 'Commercial\nValue'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 04: INTERNATIONAL STANDARDS (MINT SURFACE)  */}
      {/* (EXACT REPLICA OF THE MINT CERTIFICATION SHOWCASE)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-certs">
        <div className="awa-ref-container">
          <div className="awa-ref-certs-card">
            {/* Left Header */}
            <div className="awa-ref-certs-intro">
              <span className="awa-ref-eyebrow" style={{ color: '#0F5132' }}>
                <span>{isAr ? 'الشهادات والاعتمادات' : 'CERTIFICATIONS'}</span>
              </span>
              <h2 className="awa-ref-sec-title" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', marginBottom: '14px' }}>
                {isAr ? 'معايير دولية.' : 'International Standards.'} <br />
                {isAr ? 'جودة في الممارسة.' : 'Quality in Practice.'}
              </h2>
              <p className="awa-ref-sec-desc" style={{ color: '#2D5E4A', marginBottom: '22px' }}>
                {isAr
                  ? 'نلتزم بأعلى معايير سلامة الأغذية العالمية، لأن الجودة والامتثال يمثلان جوهر كل ما نقوم به.'
                  : 'We meet the highest international standards, because quality is at the core of what we do.'}
              </p>
              <Link
                to="/quality"
                style={{ color: '#0F5132', fontWeight: 700, fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>{isAr ? 'استعراض كافة الشهادات والاعتمادات' : 'View our certifications'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: Logos in 2 Columns with Divider */}
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
                      <img 
                        key={assetKey}
                        src={src} 
                        alt={assetKey} 
                        className="awa-ref-cert-logo-item" 
                        loading="eager" 
                      />
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
                      <img 
                        key={assetKey}
                        src={src} 
                        alt={assetKey} 
                        className="awa-ref-cert-logo-item" 
                        loading="eager" 
                      />
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
      {/* (SUSTAINABILITY PHOTO + 5 HORIZONTAL PILLARS)       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-sustain">
        <div className="awa-ref-container">
          <div className="awa-ref-sustain-main">
            {/* Left Arched Photo */}
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

            {/* Center Content */}
            <div className="awa-ref-sustain-intro">
              <h2 className="awa-ref-sec-title">
                {isAr ? 'نمو مسؤول.' : 'Responsible Growth.'} <br />
                <span className="highlight-green">{isAr ? 'وأثر دائم.' : 'Lasting Impact.'}</span>
              </h2>
              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'بناء مستقبل غذائي أكثر استدامة عبر الممارسات المسؤولة والابتكار.'
                  : 'Building a more sustainable food future through responsible practices and innovation.'}
              </p>
              <Link to="/sustainability" className="awa-ref-pill-btn outline">
                <span>{isAr ? 'أثرنا في الاستدامة' : 'Our impact'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 5 Horizontal Pillars with Numbers & Outline Icons */}
            <div className="awa-ref-sustain-pillars">
              {[
                { num: '01', title: isAr ? 'التوريد المستدام' : 'Sustainable\nSourcing', icon: <Leaf size={20} /> },
                { num: '02', title: isAr ? 'المسؤولية البيئية' : 'Environmental\nResponsibility', icon: <Recycle size={20} /> },
                { num: '03', title: isAr ? 'دعم المجتمع' : 'Community\nSupport', icon: <Users size={20} /> },
                { num: '04', title: isAr ? 'سلامة الغذاء والجودة' : 'Food Safety\n& Quality', icon: <ShieldCheck size={20} /> },
                { num: '05', title: isAr ? 'الابتكار لغد أفضل' : 'Innovation\nfor a Better\nTomorrow', icon: <Lightbulb size={20} /> },
              ].map((pillar) => (
                <div key={pillar.num} className="awa-ref-sustain-pillar">
                  <span className="awa-ref-sustain-num">{pillar.num}</span>
                  <div className="awa-ref-sustain-icon">
                    {pillar.icon}
                  </div>
                  <strong className="awa-ref-sustain-label">
                    {pillar.title}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 06: KNOWLEDGE THAT SUPPORTS PROGRESS        */}
      {/* (EDITORIAL HEADING + 3 ARTICLE PREVIEWS WITH PHOTOS)*/}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-knowledge">
        <div className="awa-ref-container">
          <div className="awa-ref-knowledge-grid">
            {/* Left Content */}
            <div className="awa-ref-knowledge-intro">
              <h2 className="awa-ref-sec-title">
                {isAr ? 'معرفة تدعم' : 'Knowledge that'} <br />
                {isAr ? 'التقدم الصناعي.' : 'supports progress.'}
              </h2>
              <p className="awa-ref-sec-desc">
                {isAr
                  ? 'رؤى وأبحاث واتجاهات الصناعة لمساعدتك على البقاء في الصدارة.'
                  : 'Insights, research and industry trends to help you stay ahead.'}
              </p>
              <Link
                to="/knowledge"
                style={{ color: '#00A84F', fontWeight: 700, fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>{isAr ? 'استكشف منصة المعرفة والأبحاث' : 'Explore our insights'}</span>
                <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 3 Article Previews */}
            <div className="awa-ref-articles-grid">
              {insightArticles.map((art) => (
                <Link
                  key={art.id}
                  to={art.link}
                  className="awa-ref-article-card"
                >
                  <div className="awa-ref-article-img-wrap">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      className="awa-ref-article-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="awa-ref-article-body">
                    <div className="awa-ref-article-meta">
                      <span className="awa-ref-article-tag">
                        {art.category}
                      </span>
                      <span className="awa-ref-article-date">
                        {art.date}
                      </span>
                    </div>
                    <h3 className="awa-ref-article-title">
                      {art.title}
                    </h3>
                    <span className="awa-ref-article-link">
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
      {/* SECTION 07: FINAL CTA (DEEP NAVY WITH GREEN WAVE)   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-ref-sec-cta">
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
                  ? 'أخبرنا عن احتياجاتك ولنبتكر الحل الأمثل معاً.'
                  : "Tell us about your needs and let's create the right solution together."}
              </p>
            </div>

            <Link
              to="/contact?type=technical"
              className="awa-ref-pill-btn white"
              style={{ padding: '14px 28px', fontSize: '14px' }}
            >
              <span>{isAr ? 'تواصل مع خبرائنا' : 'Contact our experts'}</span>
              <ArrowRight size={15} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
