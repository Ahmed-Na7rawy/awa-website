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

  // Technical capabilities data (Section 02)
  const capabilitiesList = [
    {
      id: 'sourcing',
      num: '01',
      title: isAr ? 'توريد المكونات والمضافات الغذائية' : 'Food Ingredients & Additives',
      route: '/capabilities/sourcing',
      icon: <Leaf size={18} />
    },
    {
      id: 'rd',
      num: '02',
      title: isAr ? 'حلول وتطبيقات الأغذية التطبيقية' : 'Food Solutions & Applications',
      route: '/capabilities/rd',
      icon: <FlaskConical size={18} />
    },
    {
      id: 'manufacturing',
      num: '03',
      title: isAr ? 'الابتكار والتميز في التصنيع الصناعي' : 'Innovation & R&D Support',
      route: '/capabilities/manufacturing',
      icon: <Lightbulb size={18} />
    }
  ];

  // Articles for Section 06 (3 equal cards matching reference exactly)
  const insightArticles = [
    {
      id: 'art-1',
      category: isAr ? 'أبحاث' : 'Research',
      date: 'Nov 24, 2025',
      title: isAr 
        ? 'دراسة سوق خلطات وأملاح الفوسفات الوظيفية للأجبان المطبوخة' 
        : 'High-Protein Snacks Market Study',
      image: '/images/pages/home/article-protein-snacks.jpg',
      link: '/knowledge'
    },
    {
      id: 'art-2',
      category: isAr ? 'ابتكار' : 'Innovation',
      date: 'Nov 18, 2025',
      title: isAr 
        ? 'دراسة تقنية حول تحسين معاملات زيوت القلي الصناعية' 
        : 'Industrial Frying Oil Technical Study',
      image: '/images/pages/home/article-frying-oil.jpg',
      link: '/knowledge'
    },
    {
      id: 'art-3',
      category: isAr ? 'رؤى السوق' : 'Market Insights',
      date: 'Nov 12, 2025',
      title: isAr 
        ? 'أبحاث معجون وصلصات الطماطم وقوام الاستحلاب' 
        : 'Tomato Paste & Sauce Research',
      image: '/images/pages/home/article-tomato-paste.jpg',
      link: '/knowledge'
    }
  ];

  return (
    <div className={`awa-exact-ref ${isAr ? 'rtl' : 'ltr'}`}>
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
      {/* (IMAGE 1 SPECIFICATION: EXACT 1:1 REPRODUCTION)    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="ref-sec-expertise">
        {/* Soft Organic Pale Mint Background Wave */}
        <div className="ref-expertise-wave" aria-hidden="true">
          <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-100,-100 C150,-50 350,150 280,400 C220,600 50,680 -100,700 Z"
              fill="#EBF7EE"
              opacity="0.85"
            />
          </svg>
        </div>

        <div className="ref-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="ref-expertise-grid">
            {/* Left Content */}
            <div className="ref-expertise-left">
              <span className="ref-dash" />
              <h2 className="ref-title">
                {isAr ? 'استكشف خبراتنا' : 'Explore our expertise'} <br />
                <span className="green-text">{isAr ? 'بطريقتك الخاصة' : 'your way'}</span>
              </h2>
              <p className="ref-desc">
                {isAr
                  ? 'من المكونات الأساسية إلى الابتكار التطبيقي — اكتشف مجموعتنا الشاملة من حلول الصناعات الغذائية.'
                  : 'From ingredients to innovation — discover our wide range of food solutions.'}
              </p>
              <Link to="/solutions" className="ref-pill-btn outline">
                <span>{isAr ? 'استعراض كافة الحلول' : 'Explore all solutions'}</span>
                <ArrowRight size={13} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right Asymmetric Photo Composition */}
            <div className="ref-mosaic">
              {/* Dominant Featured Category: Dairy & Cheese */}
              <Link 
                to="/solutions/industry/dairy-cheese"
                className="ref-mosaic-dominant"
              >
                <img 
                  src="/images/pages/home/mosaic-dairy.jpg" 
                  alt="Dairy, Cheese & Frozen Desserts" 
                  loading="eager"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = v9Assets.v7Assets['dairy-cheese'];
                  }}
                />
                <div className="ref-mosaic-dominant-overlay">
                  <span className="ref-mosaic-num">01</span>
                  <div className="ref-mosaic-title-row">
                    <h3 className="ref-mosaic-title">
                      {isAr ? 'الألبان والأجبان والحلويات المجمدة' : 'Dairy, Cheese &\nFrozen Desserts'}
                    </h3>
                    <span className="ref-mosaic-circle-arrow">
                      <ArrowRight size={13} className="rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Two Stacked Secondary Categories */}
              <div className="ref-mosaic-stacked">
                {/* Meat & Poultry */}
                <Link 
                  to="/solutions/industry/meat-seafood"
                  className="ref-mosaic-sub"
                >
                  <img 
                    src="/images/pages/home/mosaic-meat.jpg" 
                    alt="Meat, Poultry & Seafood" 
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = v9Assets.v7Assets['meat-seafood'];
                    }}
                  />
                  <div className="ref-mosaic-sub-overlay">
                    <span className="ref-mosaic-num">02</span>
                    <div className="ref-mosaic-title-row">
                      <h4 className="ref-sub-title">
                        {isAr ? 'اللحوم والدواجن والأسماك' : 'Meat, Poultry &\nSeafood'}
                      </h4>
                      <span className="ref-mosaic-circle-arrow" style={{ width: '22px', height: '22px', fontSize: '11px' }}>
                        <ArrowRight size={11} className="rtl:rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Sauces & Culinary */}
                <Link 
                  to="/solutions/industry/culinary"
                  className="ref-mosaic-sub"
                >
                  <img 
                    src="/images/pages/home/mosaic-culinary.jpg" 
                    alt="Sauces, Soups & Culinary" 
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = v9Assets.v7Assets['culinary'];
                    }}
                  />
                  <div className="ref-mosaic-sub-overlay">
                    <span className="ref-mosaic-num">03</span>
                    <div className="ref-mosaic-title-row">
                      <h4 className="ref-sub-title">
                        {isAr ? 'الصلصات والشوربات والطهي' : 'Sauces, Soups &\nCulinary'}
                      </h4>
                      <span className="ref-mosaic-circle-arrow" style={{ width: '22px', height: '22px', fontSize: '11px' }}>
                        <ArrowRight size={11} className="rtl:rotate-180" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Horizontal Subcategory Navigation Bar */}
          <div className="ref-cats-nav">
            <Link to="/solutions/industry/beverages" className="ref-cat-link">
              <span>{isAr ? 'المشروبات والعصائر' : 'Beverages'}</span>
              <span>›</span>
            </Link>
            <Link to="/solutions/industry/snacks" className="ref-cat-link">
              <span>{isAr ? 'المقرمشات ورقائق الإفطار' : 'Snacks & Cereals'}</span>
              <span>›</span>
            </Link>
            <Link to="/solutions/industry/bakery" className="ref-cat-link">
              <span>{isAr ? 'المخبوزات والحلويات' : 'Bakery & Confectionery'}</span>
              <span>›</span>
            </Link>
            <Link to="/capabilities/formulations" className="ref-cat-link">
              <span>{isAr ? 'المربيات والدهن الغذائي' : 'Preserves & Spreads'}</span>
              <span>›</span>
            </Link>
            <Link to="/solutions/catalogue" className="ref-cat-link">
              <span>{isAr ? 'البسكويت والمقرمشات' : 'Biscuits & Cereals'}</span>
              <span>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 02: TECHNICAL EXPERTISE, TAILORED (SPLIT)   */}
      {/* (IMAGE 1 SPECIFICATION: FULL BLEED LEFT PHOTO)      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="ref-sec-technical">
        <div className="ref-tech-bleed-wrap">
          {/* Left: Stainless Steel Dairy Pouring Machine Photo (Full Bleed to Left Edge) */}
          <div className="ref-tech-photo-wrap">
            <img
              src="/images/pages/home/technical-machinery-milk.jpg"
              alt="Technical Food Processing Equipment"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/pages/home/dairy-filling-machine.png';
              }}
            />
          </div>

          {/* Center: Editorial Heading & Description */}
          <div className="ref-tech-center">
            <div className="ref-eyebrow">
              <span>•</span>
              <span>{isAr ? 'الخبرة التكنولوجية والتطبيقية' : 'TECHNICAL EXPERTISE'}</span>
            </div>

            <h2 className="ref-title" style={{ fontSize: 'clamp(1.8rem, 2.7vw, 2.3rem)' }}>
              {isAr ? 'خبرة فنية، مصممة ' : 'Technical expertise, '} <br />
              {isAr ? 'خصيصاً ' : 'tailored to '}
              <span className="green-text">
                {isAr ? 'لتطبيقاتك.' : 'your\napplication.'}
              </span>
            </h2>

            <p className="ref-desc">
              {isAr
                ? 'تساعدك خبرتنا العميقة في صناعة الأغذية وفهمنا الدقيق لمعايير التشغيل على تحويل الأفكار والتركيبات إلى حلول قابلة للتطوير وموثوقة الإنتاج.'
                : 'Our in-depth knowledge and industry experience help you turn ideas into reliable, scalable solutions.'}
            </p>

            <Link to="/capabilities" className="ref-link-green">
              <span>{isAr ? 'اكتشف قدراتنا' : 'Discover our capabilities'}</span>
              <ArrowRight size={13} className="rtl:rotate-180" />
            </Link>
          </div>

          {/* Right: 3 Horizontally Aligned Items with Mint Circle Icons */}
          <div className="ref-tech-right">
            {capabilitiesList.map((cap) => (
              <Link
                key={cap.id}
                to={cap.route}
                className="ref-tech-item"
              >
                <div className="ref-tech-item-left">
                  <span className="ref-tech-num">{cap.num}</span>
                  <div className="ref-tech-icon">
                    {cap.icon}
                  </div>
                  <span className="ref-tech-name">{cap.title}</span>
                </div>
                <span className="ref-tech-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 03: DESIGNED FOR PERFORMANCE & VALUE        */}
      {/* (IMAGE 1 SPECIFICATION: LEFT TEXT + 3 COL DIVIDERS) */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="ref-sec-perf">
        {/* Organic Light Mint Wave Behind 3 Pillars */}
        <div className="ref-perf-wave" aria-hidden="true">
          <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M300,0 C500,40 750,10 800,0 L800,500 C650,480 400,520 200,400 C80,300 120,120 300,0 Z"
              fill="#EBF7EE"
              opacity="0.9"
            />
          </svg>
        </div>

        <div className="ref-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="ref-perf-layout">
            {/* Left Content */}
            <div className="ref-perf-left">
              <div className="ref-eyebrow">
                <span>•</span>
                <span>{isAr ? 'الأداء والقيمة' : 'PERFORMANCE & VALUE'}</span>
              </div>
              <h2 className="ref-title">
                {isAr ? 'مصممة للأداء.' : 'Designed for'} <br />
                {isAr ? 'ومحسوبة ' : 'performance.'} <br />
                <span className="green-text">
                  {isAr ? 'لتحقيق القيمة.' : 'Considered for value.'}
                </span>
              </h2>
              <p className="ref-desc">
                {isAr
                  ? 'حلول عالية الجودة تقدم أثراً قابلاً للقياس عبر سلسلة القيمة الخاصة بك.'
                  : 'High-quality solutions that deliver measurable impact across your entire value chain.'}
              </p>
              <Link to="/capabilities/formulations" className="ref-pill-btn navy">
                <span>{isAr ? 'اعرف المزيد' : 'Learn more'}</span>
                <ArrowRight size={13} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 3 Columns with Thin Line Dividers */}
            <div className="ref-perf-right">
              {/* Principle 1 */}
              <div className="ref-perf-col">
                <div className="ref-perf-icon">
                  <Cog size={36} strokeWidth={1.8} />
                </div>
                <h3 className="ref-perf-name">
                  {isAr ? 'الأداء\nالوظيفي' : 'Functional\nPerformance'}
                </h3>
              </div>

              {/* Principle 2 */}
              <div className="ref-perf-col">
                <div className="ref-perf-icon">
                  <Boxes size={36} strokeWidth={1.8} />
                </div>
                <h3 className="ref-perf-name">
                  {isAr ? 'التوافق\nالإنتاجي' : 'Production\nCompatibility'}
                </h3>
              </div>

              {/* Principle 3 */}
              <div className="ref-perf-col">
                <div className="ref-perf-icon">
                  <TrendingUp size={36} strokeWidth={1.8} />
                </div>
                <h3 className="ref-perf-name">
                  {isAr ? 'القيمة\nالتجارية' : 'Commercial\nValue'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 04: INTERNATIONAL STANDARDS (MINT SURFACE)  */}
      {/* (IMAGE 1 SPECIFICATION: MINT BG + REAL LOGO ROW)    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="ref-sec-certs">
        <div className="ref-container">
          <div className="ref-certs-layout">
            {/* Left Header */}
            <div className="ref-certs-left">
              <span className="ref-eyebrow" style={{ color: '#0F5132' }}>
                <span>{isAr ? 'الشهادات والاعتمادات' : 'CERTIFICATIONS'}</span>
              </span>
              <h2 className="ref-title" style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)', marginBottom: '14px' }}>
                {isAr ? 'معايير دولية.' : 'International Standards.'} <br />
                {isAr ? 'جودة في الممارسة.' : 'Quality in Practice.'}
              </h2>
              <p className="ref-desc" style={{ color: '#2D5E4A', marginBottom: '22px' }}>
                {isAr
                  ? 'نلتزم بأعلى معايير سلامة الأغذية العالمية، لأن الجودة والامتثال يمثلان جوهر كل ما نقوم به.'
                  : 'We meet the highest international standards, because quality is at the core of what we do.'}
              </p>
              <Link to="/quality" className="ref-link-green" style={{ color: '#0F5132' }}>
                <span>{isAr ? 'استعراض كافة الشهادات' : 'View our certifications'}</span>
                <ArrowRight size={13} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Center: International Certifications (Exact 5 from V9 Reference) */}
            <div className="ref-certs-center">
              <span className="ref-certs-group-title">
                {isAr ? 'الشهادات الدولية المعتمدة' : 'International Certifications'}
              </span>
              <div className="ref-certs-logos">
                <img 
                  src={v9Assets.corporateAssets['fssc-22000']} 
                  alt="FSSC 22000" 
                  title="FSSC 22000 — Food Safety Management System"
                  className="ref-cert-img" 
                />
                <img 
                  src={v9Assets.corporateAssets['iso-9001']} 
                  alt="ISO 9001" 
                  title="ISO 9001 — Quality Management System"
                  className="ref-cert-img" 
                />
                <img 
                  src={v9Assets.corporateAssets['iso-14001']} 
                  alt="ISO 14001" 
                  title="ISO 14001 — Environmental Management System"
                  className="ref-cert-img" 
                />
                <img 
                  src={v9Assets.corporateAssets['iso-45001']} 
                  alt="ISO 45001" 
                  title="ISO 45001 — Occupational Health & Safety"
                  className="ref-cert-img" 
                />
                <img 
                  src={v9Assets.corporateAssets['halal']} 
                  alt="Halal Certification" 
                  title="Halal — Certified Product Scope (EOS)"
                  className="ref-cert-img" 
                />
              </div>
            </div>

            {/* Right: Regulatory Registrations (Exact 2 from V9 Reference) */}
            <div className="ref-certs-right">
              <span className="ref-certs-group-title">
                {isAr ? 'التسجيل والاعتماد التنظيمي' : 'Regulatory Registrations'}
              </span>
              <div className="ref-certs-logos">
                <img 
                  src={v9Assets.corporateAssets['fda']} 
                  alt="U.S. FDA Facility Registration" 
                  title="U.S. FDA — Food Facility Registration"
                  className="ref-cert-img" 
                />
                <img 
                  src={v9Assets.corporateAssets['nfsa']} 
                  alt="NFSA White List Facility" 
                  title="National Food Safety Authority (NFSA) — White List Facility"
                  className="ref-cert-img" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 05: RESPONSIBLE GROWTH. LASTING IMPACT.     */}
      {/* (IMAGE 1 SPECIFICATION: FULL BLEED LEFT SPROUT)     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="ref-sec-sustain">
        <div className="ref-sustain-bleed-wrap">
          {/* Left: Seedling Sprout Photo (Full Bleed to Left Edge) */}
          <div className="ref-sustain-photo-wrap">
            <img 
              src="/images/pages/home/sustainability-green-seedling.jpg" 
              alt="Responsible Growth & Agriculture" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/pages/sustainability/sustainability.jpg';
              }}
            />
          </div>

          {/* Center: Editorial Headline & Description */}
          <div className="ref-sustain-center">
            <h2 className="ref-title" style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)' }}>
              {isAr ? 'نمو مسؤول.' : 'Responsible Growth.'} <br />
              <span className="green-text">{isAr ? 'وأثر دائم.' : 'Lasting Impact.'}</span>
            </h2>
            <p className="ref-desc">
              {isAr
                ? 'بناء مستقبل غذائي أكثر استدامة عبر الممارسات المسؤولة والابتكار.'
                : 'Building a more sustainable food future through responsible practices and innovation.'}
            </p>
            <Link to="/sustainability" className="ref-pill-btn outline" style={{ borderColor: '#00A84F', color: '#00A84F' }}>
              <span>{isAr ? 'أثرنا في الاستدامة' : 'Our impact'}</span>
              <ArrowRight size={13} className="rtl:rotate-180" />
            </Link>
          </div>

          {/* Right: 5 Horizontal Columns with Thin Line Dividers */}
          <div className="ref-sustain-pillars">
            {[
              { num: '01', title: isAr ? 'التوريد المستدام' : 'Sustainable\nSourcing', icon: <Leaf size={22} strokeWidth={1.8} /> },
              { num: '02', title: isAr ? 'المسؤولية البيئية' : 'Environmental\nResponsibility', icon: <Recycle size={22} strokeWidth={1.8} /> },
              { num: '03', title: isAr ? 'دعم المجتمع' : 'Community\nSupport', icon: <Users size={22} strokeWidth={1.8} /> },
              { num: '04', title: isAr ? 'سلامة الغذاء والجودة' : 'Food Safety\n& Quality', icon: <ShieldCheck size={22} strokeWidth={1.8} /> },
              { num: '05', title: isAr ? 'الابتكار لغد أفضل' : 'Innovation\nfor a Better\nTomorrow', icon: <Lightbulb size={22} strokeWidth={1.8} /> },
            ].map((pillar) => (
              <div key={pillar.num} className="ref-sustain-col">
                <span className="ref-sustain-num">{pillar.num}</span>
                <div className="ref-sustain-icon">
                  {pillar.icon}
                </div>
                <strong className="ref-sustain-name">
                  {pillar.title}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 06: KNOWLEDGE THAT SUPPORTS PROGRESS        */}
      {/* (IMAGE 1 SPECIFICATION: LEFT TEXT + 3 EQUAL CARDS)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="ref-sec-knowledge">
        <div className="ref-container">
          <div className="ref-know-layout">
            {/* Left Content */}
            <div className="ref-know-left">
              <h2 className="ref-title" style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.3rem)' }}>
                {isAr ? 'معرفة تدعم' : 'Knowledge that'} <br />
                {isAr ? 'التقدم الصناعي.' : 'supports progress.'}
              </h2>
              <p className="ref-desc">
                {isAr
                  ? 'رؤى وأبحاث واتجاهات الصناعة لمساعدتك على البقاء في الصدارة.'
                  : 'Insights, research and industry trends to help you stay ahead.'}
              </p>
              <Link to="/knowledge" className="ref-link-green">
                <span>{isAr ? 'استكشف منصة المعرفة' : 'Explore our insights'}</span>
                <ArrowRight size={13} className="rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 3 Equal Article Cards */}
            <div className="ref-know-cards">
              {insightArticles.map((art) => (
                <Link
                  key={art.id}
                  to={art.link}
                  className="ref-article-card"
                >
                  <div className="ref-article-photo">
                    <img 
                      src={art.image} 
                      alt={art.title} 
                      loading="lazy"
                    />
                  </div>
                  <div className="ref-article-body">
                    <div className="ref-article-meta">
                      <span className="ref-article-badge">
                        {art.category}
                      </span>
                      <span className="ref-article-date">
                        {art.date}
                      </span>
                    </div>
                    <h3 className="ref-article-title">
                      {art.title}
                    </h3>
                    <span className="ref-article-link">
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
      {/* (IMAGE 1 SPECIFICATION: NAVY BG + WHITE BUTTON)     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="ref-sec-cta">
        {/* Subtle Decorative Flowing Wave Lines */}
        <div className="ref-cta-wave" aria-hidden="true">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1440 280">
            <path fill="none" stroke="#00A84F" strokeWidth="2" d="M0,140 C320,240,480,40,720,140 C960,240,1120,40,1440,140" />
            <path fill="none" stroke="#34D399" strokeWidth="1" strokeDasharray="5 5" d="M0,170 C320,270,480,70,720,170 C960,270,1120,70,1440,170" />
          </svg>
        </div>

        <div className="ref-container">
          <div className="ref-cta-layout">
            <div className="ref-cta-left">
              <h2>
                {isAr ? 'هل لديك ' : 'Have a '}
                <span className="green-text">
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
              className="ref-pill-btn white"
            >
              <span>{isAr ? 'تواصل مع خبرائنا' : 'Contact our experts'}</span>
              <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
