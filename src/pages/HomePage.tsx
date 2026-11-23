import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck, 
  Sparkles, 
  FlaskConical, 
  Globe2, 
  Handshake, 
  Target,
  Layers,
  TrendingUp,
  Coins,
  Leaf,
  Palette,
  Lightbulb,
  Settings2,
  Play,
  Pause,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  v9Assets, 
  industryData, 
  challengeData, 
  familyData, 
  certifications, 
  jointVentures,
  capabilityData 
} from '../data/v9Data';
import '../awa-editorial.css';

interface HomeProps {
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

/* SVG Icon Resolvers for Solution Pathways */
const getChallengeIcon = (id: string) => {
  switch (id) {
    case 'texture-structure': return <Layers size={20} strokeWidth={1.75} />;
    case 'stability-shelf-life': return <ShieldCheck size={20} strokeWidth={1.75} />;
    case 'taste-sensory': return <Sparkles size={20} strokeWidth={1.75} />;
    case 'yield-processing': return <TrendingUp size={20} strokeWidth={1.75} />;
    case 'cost-effective-formulations': return <Coins size={20} strokeWidth={1.75} />;
    case 'nutrition-reformulation': return <Leaf size={20} strokeWidth={1.75} />;
    case 'color-appearance': return <Palette size={20} strokeWidth={1.75} />;
    case 'new-product-development': return <Lightbulb size={20} strokeWidth={1.75} />;
    default: return <Target size={20} strokeWidth={1.75} />;
  }
};

const getFamilyIcon = (id: string) => {
  switch (id) {
    case 'texture-structure': return <Layers size={20} strokeWidth={1.75} />;
    case 'taste-sensory': return <Sparkles size={20} strokeWidth={1.75} />;
    case 'preservation-shelf-life': return <ShieldCheck size={20} strokeWidth={1.75} />;
    case 'nutrition': return <Leaf size={20} strokeWidth={1.75} />;
    case 'color-appearance': return <Palette size={20} strokeWidth={1.75} />;
    case 'functional-processing': return <Settings2 size={20} strokeWidth={1.75} />;
    default: return <FlaskConical size={20} strokeWidth={1.75} />;
  }
};

/* Arabic Titles and Descriptions for Industry Applications */
const industryArabicTitles: Record<string, { title: string; desc: string }> = {
  'dairy-cheese': {
    title: 'الألبان والأجبان والحلويات المجمدة',
    desc: 'من الأجبان المطبوخة وحليب المعاملة الحرارية إلى منتجات الألبان المتخمرة والمثلجات، نقدم وظائف مصممة لمصفوفة المنتج وعمليات التصنيع.'
  },
  'meat-seafood': {
    title: 'اللحوم والدواجن والمأكولات البحرية',
    desc: 'مكونات وظيفية لربط المياه والدهون، تحسين القوام، ثبات الحبيبات، وزيادة إنتاجية الطهي عبر تطبيقات اللحوم والدواجن.'
  },
  'bakery': {
    title: 'المخبوزات والحلويات والمعجنات',
    desc: 'أنظمة مكونات تدعم أداء العجين والمخفوقات، الطراوة، الحفاظ على الرطوبة، وثبات الحشوات والمنتج النهائي.'
  },
  'beverages': {
    title: 'المشروبات والعصائر',
    desc: 'حلول للانتشار والتثبيت، المذاق والشعور بالفم، الذوبان والتركيبات الغذائية عبر مختلف أشكال المشروبات السائلة والبودرة.'
  },
  'culinary': {
    title: 'الصلصات والشوربات والحلول المطبخية',
    desc: 'أنظمة وظيفية وحسية للصلصات، التتبيلات، المرق، والوجبات الجاهزة لتحقيق استقرار المستحلبات وثبات النكهة.'
  },
  'snacks': {
    title: 'المقرمشات ورقائق الإفطار',
    desc: 'تقنيات المكونات والتركيبات لقوام مقرمش ومميز، توزيع التوابل، جودة الحبوب، وثبات عمليات الإنتاج والتصنيع.'
  }
};

export const HomePage: React.FC<HomeProps> = ({ onNavigate, onOpenQuote }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

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

  // State for explorer tabs
  const [exploreTab, setExploreTab] = useState<'industry' | 'challenge' | 'family'>('industry');

  const handleJumpExplore = (tab: 'industry' | 'challenge' | 'family') => {
    setExploreTab(tab);
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll reveal refs
  const heroRef = useScrollReveal();
  const explorerRef = useScrollReveal();
  const differenceRef = useScrollReveal();
  const formulationRef = useScrollReveal();
  const standardsRef = useScrollReveal();
  const growthRef = useScrollReveal();
  const insightsRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const marqueeRef = useScrollReveal();

  const insightStories = [
    {
      kicker: isAr ? 'المعرفة التطبيقية' : 'APPLICATION KNOWLEDGE',
      title: isAr ? 'تركيبات مصممة وفقاً لمتطلبات المعالجة والتشغيل.' : 'Formulation tailored to process requirements.',
      desc: isAr ? 'فهم كيف تؤثر المكونات، ومصفوفات المنتجات، ومتغيرات المعالجة الصناعية على الأداء النهائي للمنتج.' : 'Understanding how ingredients, product matrices and processing parameters affect performance.',
      image: v9Assets.v8Assets['rd-wide'],
      tag: isAr ? 'تطبيقات الأغذية' : 'Food Applications'
    },
    {
      kicker: isAr ? 'الابتكار الصناعي' : 'INDUSTRIAL INNOVATION',
      title: isAr ? 'من التجارب المخبرية والتطبيقية إلى حلول عملية قابلة للتوسع.' : 'From technical trials to practical solutions.',
      desc: isAr ? 'كيف يدعم التطوير التطبيقي المنظم والتقنيات المتخصصة مصنعي الأغذية في تحويل الأفكار إلى إنتاج صناعي موثوق.' : 'How structured application development and specialist technologies support food manufacturers.',
      image: v9Assets.v8Assets.formulations,
      tag: isAr ? 'تجارب التوسع' : 'Scale-up Trials'
    },
    {
      kicker: isAr ? 'العمليات المسؤولة' : 'RESPONSIBLE OPERATIONS',
      title: isAr ? 'المعايير الدولية في الممارسة اليومية.' : 'International standards in daily practice.',
      desc: isAr ? 'الجودة والسلامة والاستدامة كمنهجية وانضباط تشغيلي راسخ بدلاً من مجرد ادعاءات تسويقية.' : 'Quality, safety and sustainability as operational disciplines rather than marketing claims.',
      image: v9Assets.v8Assets['rd-lab'],
      tag: isAr ? 'أنظمة الجودة' : 'Quality Systems'
    }
  ];

  return (
    <div className="home-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'حلول الصناعات الغذائية وتطوير التركيبات المخصصة • مجموعة AWA' : 'Tailored Food Solutions & Industrial Ingredients • AWA Group'}
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
            poster={v9Assets.v7Assets.factory}
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

            <p className="awa-editorial-desc reveal-fade-up reveal-delay-2">
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
      {/* 2. ARCHITECTURAL STRATEGIC NAVIGATOR (Quick Jump)    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-arch-navigator">
        <div className="wrap">
          <div className="awa-arch-nav-grid">
            <div className="awa-arch-nav-intro">
              <span className="awa-arch-nav-kicker">
                {isAr ? 'ابحث عن حلك المناسب' : 'FIND YOUR SOLUTION'}
              </span>
              <h3 className="awa-arch-nav-heading">
                {isAr ? 'استكشف محفظة حلول AWA الصناعية' : "Explore AWA's industrial portfolio"}
              </h3>
            </div>

            <button 
              type="button" 
              onClick={() => handleJumpExplore('industry')}
              className={`awa-arch-nav-item ${exploreTab === 'industry' ? 'is-active' : ''}`}
            >
              <div className="awa-arch-nav-meta">
                <span className="awa-arch-nav-index">01 / SECTOR</span>
                <ArrowUpRight size={16} className="awa-arch-nav-arrow" />
              </div>
              <div>
                <span className="awa-arch-nav-title">
                  {isAr ? 'حسب قطاع الصناعة' : 'By Industry'}
                </span>
                <span className="awa-arch-nav-sub">
                  {isAr ? 'استكشف تطبيقات الأغذية' : 'Explore food applications'}
                </span>
              </div>
            </button>

            <button 
              type="button" 
              onClick={() => handleJumpExplore('challenge')}
              className={`awa-arch-nav-item ${exploreTab === 'challenge' ? 'is-active' : ''}`}
            >
              <div className="awa-arch-nav-meta">
                <span className="awa-arch-nav-index">02 / OBJECTIVE</span>
                <ArrowUpRight size={16} className="awa-arch-nav-arrow" />
              </div>
              <div>
                <span className="awa-arch-nav-title">
                  {isAr ? 'حسب التحدي التقني' : 'By Challenge'}
                </span>
                <span className="awa-arch-nav-sub">
                  {isAr ? 'معالجة الاحتياجات التقنية' : 'Address a technical need'}
                </span>
              </div>
            </button>

            <button 
              type="button" 
              onClick={() => handleJumpExplore('family')}
              className={`awa-arch-nav-item ${exploreTab === 'family' ? 'is-active' : ''}`}
            >
              <div className="awa-arch-nav-meta">
                <span className="awa-arch-nav-index">03 / FUNCTION</span>
                <ArrowUpRight size={16} className="awa-arch-nav-arrow" />
              </div>
              <div>
                <span className="awa-arch-nav-title">
                  {isAr ? 'حسب عائلة المنتج' : 'By Product Family'}
                </span>
                <span className="awa-arch-nav-sub">
                  {isAr ? 'استكشف الوظائف للمكونات' : 'Explore ingredient functions'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. EXPLORE OUR EXPERTISE — IMAGE-LED EXHIBITION      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section is-tint" id="explore" style={{ scrollMarginTop: '80px' }} ref={explorerRef}>
        <div className="wrap">
          <div className="awa-editorial-header">
            <span className="awa-editorial-kicker">
              {isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}
            </span>
            <h2 className="awa-editorial-title">
              {isAr ? (
                <>استكشف خبراتنا <span style={{ color: 'var(--awa-green-accent)' }}>بالطريقة التي تناسبك.</span></>
              ) : (
                <>Explore our expertise <span style={{ color: 'var(--awa-green-accent)' }}>your way.</span></>
              )}
            </h2>
            <p className="awa-editorial-desc">
              {isAr
                ? 'نقدم مكونات غذائية وأنظمة وظيفية وتركيبات مخصصة مصممة حول متطلبات التصنيع الخاصة. تصفح حسب التطبيق، التحدي التقني، أو عائلة المنتج الوظيفية.'
                : 'We provide food ingredients, functional systems and customized formulations designed around specific manufacturing requirements. Browse by application, technical challenge or functional product family.'}
            </p>
          </div>

          {/* Architectural Tabs */}
          <div className="awa-arch-tabs" role="tablist" aria-label="Application categories">
            <button
              type="button"
              role="tab"
              aria-selected={exploreTab === 'industry'}
              className={`awa-arch-tab-btn ${exploreTab === 'industry' ? 'is-active' : ''}`}
              onClick={() => setExploreTab('industry')}
            >
              <span>{isAr ? 'حسب قطاع الصناعة' : 'By Industry'}</span>
              <span className="awa-arch-tab-count">6</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={exploreTab === 'challenge'}
              className={`awa-arch-tab-btn ${exploreTab === 'challenge' ? 'is-active' : ''}`}
              onClick={() => setExploreTab('challenge')}
            >
              <span>{isAr ? 'حسب التحدي التقني' : 'By Challenge'}</span>
              <span className="awa-arch-tab-count">8</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={exploreTab === 'family'}
              className={`awa-arch-tab-btn ${exploreTab === 'family' ? 'is-active' : ''}`}
              onClick={() => setExploreTab('family')}
            >
              <span>{isAr ? 'حسب عائلة المنتج' : 'By Product Family'}</span>
              <span className="awa-arch-tab-count">6</span>
            </button>
          </div>

          {/* Exhibition Content */}
          <div id="explorer-results">
            {exploreTab === 'industry' && (
              <div className="awa-industry-exhibition-grid">
                {industryData.map((o) => {
                  const arInfo = industryArabicTitles[o.id];
                  const cardTitle = (isAr && arInfo) ? arInfo.title : o.title;
                  const cardDesc = (isAr && arInfo) ? arInfo.desc : o.desc;
                  const assetKey = (o.id === 'bakery' ? 'bakery' : o.id === 'culinary' ? 'culinary' : o.id === 'snacks' ? 'snacks' : o.id) as keyof typeof v9Assets.v7Assets;
                  const photoSrc = (v9Assets.v7Assets as Record<string, string>)[assetKey] || v9Assets.v7Assets.factory;

                  return (
                    <Link
                      key={o.id}
                      className="awa-industry-frame"
                      to={`/solutions/industry/${o.id}`}
                      aria-label={`Explore ${cardTitle}`}
                    >
                      <div className="awa-industry-media">
                        <img
                          src={photoSrc}
                          alt={`Close-up food application photography for ${cardTitle}`}
                          loading="lazy"
                        />
                        <span className="awa-industry-sector-badge">
                          {isAr ? 'قطاع تطبيقي' : 'Application Sector'}
                        </span>
                      </div>

                      <div className="awa-industry-content">
                        <h3 className="awa-industry-name">{cardTitle}</h3>
                        <p className="awa-industry-summary">{cardDesc}</p>
                        <span className="awa-industry-action">
                          <span>{isAr ? 'استكشف الحلول والتطبيقات' : 'Explore solutions'}</span>
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {exploreTab === 'challenge' && (
              <div className="awa-technical-spec-grid">
                {challengeData.map((o) => (
                  <Link
                    key={o.id}
                    className="awa-spec-item"
                    to={`/solutions/challenge/${o.id}`}
                  >
                    <div className="awa-spec-icon-box">
                      {getChallengeIcon(o.id)}
                    </div>
                    <div>
                      <h4 className="awa-spec-title">{o.title}</h4>
                      <p className="awa-spec-desc">{o.desc}</p>
                    </div>
                    <ArrowRight size={16} className="awa-spec-arrow" />
                  </Link>
                ))}
              </div>
            )}

            {exploreTab === 'family' && (
              <div className="awa-technical-spec-grid">
                {familyData.map((o) => (
                  <Link
                    key={o.id}
                    className="awa-spec-item"
                    to={`/solutions/family/${o.id}`}
                  >
                    <div className="awa-spec-icon-box">
                      {getFamilyIcon(o.id)}
                    </div>
                    <div>
                      <h4 className="awa-spec-title">{o.title}</h4>
                      <p className="awa-spec-desc">{o.desc}</p>
                    </div>
                    <ArrowRight size={16} className="awa-spec-arrow" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--awa-border-hairline)' }}>
            <Link 
              to="/solutions" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '14px', 
                fontWeight: 800, 
                color: 'var(--awa-navy-main)',
                textDecoration: 'none'
              }}
            >
              <span>{isAr ? 'استكشف دليل الحلول الكامل ↗' : 'Explore full solutions directory ↗'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. TECHNICAL EXPERTISE — ASYMMETRIC EDITORIAL SPREAD */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section" ref={differenceRef}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '48px', alignItems: 'flex-start', marginBottom: '40px' }}>
            <div>
              <span className="awa-editorial-kicker">{isAr ? 'تميز مجموعة AWA' : 'THE AWA DIFFERENCE'}</span>
              <h2 className="awa-editorial-title" style={{ margin: 0 }}>
                {isAr ? (
                  <>خبرة تقنية مخصصة<br /><span style={{ color: 'var(--awa-green-accent)' }}>لتطبيقك الصناعي.</span></>
                ) : (
                  <>Technical expertise, tailored to<br /><span style={{ color: 'var(--awa-green-accent)' }}>your application.</span></>
                )}
              </h2>
            </div>
            <div style={{ paddingTop: '12px' }}>
              <p className="awa-editorial-desc" style={{ marginBottom: '20px' }}>
                {isAr
                  ? 'تجمع مجموعة AWA بين المعرفة الدولية بالمكونات، وعلوم الأغذية التطبيقية، والخبرة التصنيعية لمساعدة مصنعي الأغذية في معالجة تحديات المنتجات والمعالجة الصناعية. نقيم الخواص الوظيفية للمكونات، ومتطلبات التصنيع، وجدوى التركيبات الاقتصادية لتطوير حلول عملية تلائم كل تطبيق.'
                  : 'AWA brings together international ingredient expertise, applied food science and manufacturing knowledge to help food manufacturers solve product and processing challenges. We evaluate ingredient functionality, processing requirements and formulation economics to develop practical solutions suited to each application.'}
              </p>
              <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--awa-green-accent)', textDecoration: 'none' }}>
                <span>{isAr ? 'اكتشف من نحن ↗' : 'Discover who we are ↗'}</span>
              </Link>
            </div>
          </div>

          {/* Asymmetric Composition */}
          <div className="awa-asymmetric-spread">
            {/* Lead Pillar 01: Global Sourcing & Supply */}
            <Link to="/capabilities/sourcing" className="awa-lead-pillar">
              <div className="awa-lead-pillar-media">
                <img 
                  src={v9Assets.v7Assets.sourcing} 
                  alt="Food ingredient consignments and international sourcing operations, conceptual illustration" 
                  loading="eager" 
                />
              </div>
              <div className="awa-lead-pillar-body">
                <div>
                  <span className="awa-pillar-numeral">01 / GLOBAL REACH</span>
                  <h3 className="awa-pillar-title">
                    {isAr ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply'}
                  </h3>
                  <h4 className="awa-pillar-subtitle">
                    {isAr ? 'تحديد واختيار المكونات والتقنيات المناسبة.' : 'Identify the right ingredients and technologies.'}
                  </h4>
                  <p className="awa-pillar-text">
                    {capabilityData[0].desc}
                  </p>
                </div>
                <div className="awa-pillar-action">
                  <span>{isAr ? 'استكشف قدرات التوريد' : 'Explore sourcing capability'}</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>

            {/* Stacked Pillars 02 & 03: R&D and Manufacturing */}
            <div className="awa-secondary-pillars-stack">
              {/* Pillar 02: R&D */}
              <Link to="/capabilities/rd" className="awa-compact-pillar">
                <div className="awa-compact-pillar-media">
                  <img 
                    src={v9Assets.v7Assets.formulation} 
                    alt="Illustrative food R&D laboratory conducting formulation evaluations" 
                    loading="eager" 
                  />
                </div>
                <div className="awa-compact-pillar-body">
                  <div>
                    <span className="awa-pillar-numeral">02 / APPLIED SCIENCE</span>
                    <h3 className="awa-pillar-title" style={{ fontSize: '20px' }}>
                      {isAr ? 'البحث والتطوير وتطبيقات الأغذية' : 'R&D & Application Development'}
                    </h3>
                    <h4 className="awa-pillar-subtitle" style={{ fontSize: '14.5px', marginBottom: '8px' }}>
                      {isAr ? 'بناء الوظيفة المطلوبة حول ظروف المعالجة.' : 'Build functionality around your process.'}
                    </h4>
                    <p className="awa-pillar-text" style={{ fontSize: '13.5px' }}>
                      {capabilityData[1].desc}
                    </p>
                  </div>
                  <div className="awa-pillar-action" style={{ marginTop: '16px', paddingTop: '12px' }}>
                    <span>{isAr ? 'استكشف البحث والتطوير' : 'Explore R&D capability'}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>

              {/* Pillar 03: Manufacturing */}
              <Link to="/capabilities/manufacturing" className="awa-compact-pillar">
                <div className="awa-compact-pillar-media">
                  <img 
                    src={v9Assets.v7Assets.factory} 
                    alt="AWA Group manufacturing facility showing industrial powder processing machinery" 
                    loading="eager" 
                  />
                </div>
                <div className="awa-compact-pillar-body">
                  <div>
                    <span className="awa-pillar-numeral">03 / INDUSTRIAL SCALE</span>
                    <h3 className="awa-pillar-title" style={{ fontSize: '20px' }}>
                      {isAr ? 'التميز الصناعي والتصنيع' : 'Manufacturing Excellence'}
                    </h3>
                    <h4 className="awa-pillar-subtitle" style={{ fontSize: '14.5px', marginBottom: '8px' }}>
                      {isAr ? 'ترجمة خبرات التركيب إلى إنتاج صناعي موثوق.' : 'Translate formulation expertise into production.'}
                    </h4>
                    <p className="awa-pillar-text" style={{ fontSize: '13.5px' }}>
                      {capabilityData[3].desc}
                    </p>
                  </div>
                  <div className="awa-pillar-action" style={{ marginTop: '16px', paddingTop: '12px' }}>
                    <span>{isAr ? 'استكشف التميز التصنيعي' : 'Explore manufacturing'}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. DESIGNED FOR PERFORMANCE — TECHNICAL LEDGER      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-formulation-ledger-section" ref={formulationRef}>
        <div className="wrap">
          <div className="awa-formulation-layout">
            <div>
              <span className="awa-editorial-kicker" style={{ color: '#34D399' }}>
                {isAr ? 'خبرات التركيبات المخصصة' : 'TAILORED FORMULATION EXPERTISE'}
              </span>
              <h2 className="awa-formulation-title">
                {isAr ? (
                  <>مصممة للأداء المتميز.<br /><span style={{ color: '#34D399' }}>مدروسة لتحقيق أعلى قيمة.</span></>
                ) : (
                  <>Designed for performance.<br /><span style={{ color: '#34D399' }}>Considered for value.</span></>
                )}
              </h2>
              <p className="awa-formulation-desc">
                {isAr
                  ? 'يتطلب تطوير التركيبات الغذائية تحقيق التوازن الدقيق بين الخواص الوظيفية، وظروف المعالجة الصناعية، والأهداف التجارية المستهدفة. تجمع مجموعة AWA بين توريد المكونات والتطوير التطبيقي لتقييم البدائل المناسبة، وتحسين أنظمة المكونات، ومساعدة العملاء على تحقيق الأداء المحدد وأهداف التكلفة.'
                  : 'Food formulation requires the right balance between functionality, process conditions and commercial targets. AWA combines ingredient sourcing and application development to assess suitable alternatives, optimize ingredient systems and support customers in meeting defined performance and cost objectives.'}
              </p>
              <Link 
                to="/capabilities/formulations" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFFFFF',
                  color: 'var(--awa-navy-main)',
                  fontWeight: 800,
                  fontSize: '14px',
                  padding: '14px 24px',
                  textDecoration: 'none',
                  borderRadius: '2px'
                }}
              >
                <span>{isAr ? 'استكشف التركيبات المخصصة ↗' : 'Explore customized formulations ↗'}</span>
              </Link>
            </div>

            {/* Precision Technical Ledger */}
            <div className="awa-technical-ledger">
              <div className="awa-ledger-row">
                <span className="awa-ledger-tag">01 · RHEOLOGY</span>
                <div className="awa-ledger-content">
                  <strong>{isAr ? 'القوام والبنية الوظيفية' : 'Texture & Rheology Matrix'}</strong>
                  <span>{isAr ? 'التحكم في اللزوجة، التماسك، الانصهار، وقابلية الفرد والشعور بالفم.' : 'Control firmness, viscosity, binding, spreadability, melting and mouthfeel.'}</span>
                </div>
              </div>

              <div className="awa-ledger-row">
                <span className="awa-ledger-tag">02 · STABILITY</span>
                <div className="awa-ledger-content">
                  <strong>{isAr ? 'الثبات وحفظ الصلاحية' : 'Phase Stability & Shelf Life'}</strong>
                  <span>{isAr ? 'ثبات الاستحلاب، منع النضح والانفصال أثناء المعالجة وفترات التخزين.' : 'Manage separation, oxidation, consistency and performance through processing and storage.'}</span>
                </div>
              </div>

              <div className="awa-ledger-row">
                <span className="awa-ledger-tag">03 · PROCESSING</span>
                <div className="awa-ledger-content">
                  <strong>{isAr ? 'إنتاجية المعالجة الصناعية' : 'Yield & Process Consistency'}</strong>
                  <span>{isAr ? 'دعم كفاءة التشغيل، زيادة إنتاجية الطهي، ومقاومة إجهاد القص الميكانيكي.' : 'Support processing consistency, ingredient use, cooking yield and production efficiency.'}</span>
                </div>
              </div>

              <div className="awa-ledger-row">
                <span className="awa-ledger-tag">04 · ECONOMICS</span>
                <div className="awa-ledger-content">
                  <strong>{isAr ? 'الجدوى والتكلفة بالاستخدام' : 'Formulation Economics'}</strong>
                  <span>{isAr ? 'تحقيق الأداء المحدد للمنتج بأفضل تكلفة عبر الاختيار الدقيق للمكونات.' : 'Achieve the required product performance at a suitable cost through ingredient selection and formulation optimization.'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. INTERNATIONAL STANDARDS — CORPORATE SHOWCASE     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section is-tint" id="certifications-home" ref={standardsRef}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '48px', alignItems: 'flex-start', marginBottom: '40px' }}>
            <div>
              <span className="awa-editorial-kicker">{isAr ? 'الالتزام بالمعايير الدولية' : 'COMMITMENT TO INTERNATIONAL STANDARDS'}</span>
              <h2 className="awa-editorial-title" style={{ margin: 0 }}>
                {isAr ? (
                  <>المعايير الدولية.<br /><span style={{ color: 'var(--awa-green-accent)' }}>الجودة في الممارسة اليومية.</span></>
                ) : (
                  <>International Standards.<br /><span style={{ color: 'var(--awa-green-accent)' }}>Quality in Practice.</span></>
                )}
              </h2>
            </div>
            <div style={{ paddingTop: '12px' }}>
              <p className="awa-editorial-desc">
                {isAr
                  ? 'في مجموعة AWA، تعد الجودة وسلامة الغذاء والعمليات المسؤولة ركائز أساسية لطريقة عملنا. تدعم عملياتنا التصنيعية أنظمة إدارة معترف بها، وشهادات منتجات، وتسجيلات رقابية، مما يعكس التزاماً ثابتاً بالتجانس والانضباط التشغيلي والتحسين المستمر.'
                  : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing operations are supported by recognized management systems, product certifications and relevant regulatory registrations, reflecting a commitment to consistency, operational discipline and continual improvement.'}
              </p>
            </div>
          </div>

          {/* Unified Credentials Showcase Frame */}
          <div className="awa-credentials-showcase">
            {/* International Certifications (5 Bays) */}
            <div className="awa-credential-row-international">
              {certifications.filter(c => c.group === 'international').map((cert) => {
                const sealSrc = (v9Assets.corporateAssets as Record<string, string>)[cert.asset];
                return (
                  <Link 
                    key={cert.id} 
                    to="/quality" 
                    className="awa-credential-tile"
                  >
                    <div className="awa-credential-seal-frame">
                      {sealSrc ? (
                        <img src={sealSrc} alt={`${cert.code} logo`} loading="eager" />
                      ) : (
                        <span style={{ fontWeight: 800, color: 'var(--awa-navy-main)' }}>{cert.code}</span>
                      )}
                    </div>
                    <span className="awa-credential-code">{cert.code}</span>
                    <span className="awa-credential-type">{cert.type}</span>
                  </Link>
                );
              })}
            </div>

            {/* Regulatory Listings (2 Bays) */}
            <div className="awa-credential-row-regulatory">
              {certifications.filter(c => c.group === 'regulatory').map((cert) => {
                const sealSrc = (v9Assets.corporateAssets as Record<string, string>)[cert.asset];
                return (
                  <Link 
                    key={cert.id} 
                    to="/quality" 
                    className="awa-regulatory-dossier"
                  >
                    <div className="awa-regulatory-seal-frame">
                      {sealSrc ? (
                        <img src={sealSrc} alt={`${cert.code} logo`} loading="eager" />
                      ) : (
                        <span style={{ fontWeight: 800, color: 'var(--awa-navy-main)' }}>{cert.code}</span>
                      )}
                    </div>
                    <div className="awa-regulatory-copy">
                      <strong>{cert.code}</strong>
                      <small>{cert.type}</small>
                      <p>{cert.meaning}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: 'var(--awa-charcoal-muted)', maxWidth: '720px' }}>
              {isAr 
                ? 'تخضع مطالبات منشأة AWA للحلول الغذائية والمنتجات المعتمدة لتأكيد النطاق والصلاحية السارية.'
                : 'AWA Food Solutions facility and certified-product claims require confirmation of current scope and validity before publication.'}
            </span>
            <Link to="/quality" style={{ fontSize: '13px', fontWeight: 800, color: 'var(--awa-green-accent)', textDecoration: 'none' }}>
              {isAr ? 'استكشف الجودة والاعتمادات ↗' : 'Explore Quality & Certifications ↗'}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. RESPONSIBLE GROWTH — EDITORIAL SPLIT COLUMNS     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section" ref={growthRef}>
        <div className="wrap">
          <div className="awa-growth-layout">
            <div>
              <span className="awa-editorial-kicker">{isAr ? 'النمو المسؤول' : 'RESPONSIBLE GROWTH'}</span>
              <h2 className="awa-editorial-title" style={{ margin: '0 0 16px 0' }}>
                {isAr ? (
                  <>نمو مسؤول.<br /><span style={{ color: 'var(--awa-green-accent)' }}>أثر دائم ومستمر.</span></>
                ) : (
                  <>Responsible Growth.<br /><span style={{ color: 'var(--awa-green-accent)' }}>Lasting Impact.</span></>
                )}
              </h2>
              <p className="awa-editorial-desc" style={{ marginBottom: '28px' }}>
                {isAr
                  ? 'نؤمن بأن النمو طويل الأجل ينبع من قرارات مسؤولة عبر عملياتنا وسلاسل القيمة لدينا. يركز نهجنا على ممارسات الموردين، وكفاءة الموارد، والابتكار المسؤول للمنتجات، ورفاهية أفرادنا، مدعوماً بالتزام مستمر بالتحسين.'
                  : 'We believe long-term growth comes from responsible decisions across our operations and value chain. Our approach focuses on supplier practices, resource efficiency, responsible product innovation and the wellbeing of our people, supported by a commitment to continuous improvement.'}
              </p>
              <Link 
                to="/sustainability" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: 800,
                  color: 'var(--awa-navy-main)',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--awa-green-accent)',
                  paddingBottom: '4px'
                }}
              >
                <span>{isAr ? 'استكشف الاستدامة ↗' : 'Explore sustainability ↗'}</span>
              </Link>
            </div>

            <div className="awa-growth-principles-grid">
              <div className="awa-growth-principle">
                <span className="awa-growth-index">01 / SOURCING</span>
                <h3 className="awa-growth-heading">
                  {isAr ? 'التوريد المسؤول' : 'Responsible Sourcing'}
                </h3>
                <p className="awa-growth-text">
                  {isAr ? 'تقييم الموردين وبناء علاقات توريد موثوقة ومستدامة للمكونات.' : 'Supplier evaluation and dependable ingredient relationships.'}
                </p>
              </div>

              <div className="awa-growth-principle">
                <span className="awa-growth-index">02 / RESOURCES</span>
                <h3 className="awa-growth-heading">
                  {isAr ? 'كفاءة الموارد' : 'Resource Efficiency'}
                </h3>
                <p className="awa-growth-text">
                  {isAr ? 'إدارة استهلاك الطاقة والمياه والمواد وتقليل الهدر والمخلفات.' : 'Energy, water, materials and waste management.'}
                </p>
              </div>

              <div className="awa-growth-principle">
                <span className="awa-growth-index">03 / INNOVATION</span>
                <h3 className="awa-growth-heading">
                  {isAr ? 'الابتكار المسؤول' : 'Responsible Innovation'}
                </h3>
                <p className="awa-growth-text">
                  {isAr ? 'كفاءة استخدام المكونات وتطوير تركيبات واعية بظروف المعالجة.' : 'Ingredient efficiency and process-aware formulation.'}
                </p>
              </div>

              <div className="awa-growth-principle">
                <span className="awa-growth-index">04 / WORKPLACE</span>
                <h3 className="awa-growth-heading">
                  {isAr ? 'الأفراد والسلامة' : 'People & Safety'}
                </h3>
                <p className="awa-growth-text">
                  {isAr ? 'بيئات عمل آمنة، برامج تدريب مستمرة، ومسؤولية تشغيلية واضحة.' : 'Safe workplaces, training and accountability.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. KNOWLEDGE & INSIGHTS — PROFESSIONAL JOURNAL       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section is-tint" ref={insightsRef}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="awa-editorial-kicker">{isAr ? 'المقالات والأخبار' : 'INSIGHTS & NEWS'}</span>
              <h2 className="awa-editorial-title" style={{ margin: '0 0 10px 0' }}>
                {isAr ? (
                  <>معرفة تدعم <span style={{ color: 'var(--awa-green-accent)' }}>التقدم والنمو.</span></>
                ) : (
                  <>Knowledge that <span style={{ color: 'var(--awa-green-accent)' }}>supports progress.</span></>
                )}
              </h2>
              <p className="awa-editorial-desc" style={{ maxWidth: '640px' }}>
                {isAr
                  ? 'توضح المعرفة التقنية، وقصص الابتكار المعتمدة، والتطورات المؤسسية كيف تطبق AWA خبراتها عبر قطاعات صناعة الأغذية المختلفة.'
                  : 'Technical knowledge, approved innovation stories and corporate developments demonstrate how AWA applies its expertise across the food industry.'}
              </p>
            </div>
            <Link to="/knowledge" style={{ fontSize: '14px', fontWeight: 800, color: 'var(--awa-navy-main)', textDecoration: 'none' }}>
              {isAr ? 'استكشف المقالات والأخبار ↗' : 'Explore Insights & News ↗'}
            </Link>
          </div>

          <div className="awa-journal-layout">
            {insightStories.map((story, sIdx) => (
              <Link 
                key={sIdx}
                to="/knowledge"
                className="awa-journal-article"
              >
                <div className="awa-journal-media">
                  <img src={story.image} alt={story.title} loading="lazy" />
                  <span className="awa-journal-category-badge">{story.tag}</span>
                </div>
                <div className="awa-journal-body">
                  <div>
                    <span className="awa-journal-kicker">{story.kicker}</span>
                    <h3 className="awa-journal-title">{story.title}</h3>
                    <p className="awa-journal-lead">{story.desc}</p>
                  </div>
                  <span className="awa-journal-action">
                    <span>{isAr ? 'اقرأ المزيد ↗' : 'Read more ↗'}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 9. GLOBAL ALLIANCES & PRINCIPALS DIRECTORY          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section" ref={marqueeRef}>
        <div className="wrap">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <span className="awa-editorial-kicker">{isAr ? 'الشركاء والشركات المشتركة' : 'STRATEGIC JOINT VENTURES & GLOBAL PRINCIPALS'}</span>
            <h2 className="awa-editorial-title">
              {isAr ? 'ربط الخبرة العالمية بالقدرة الصناعية المحلية' : 'Connecting International Expertise with Local Scale'}
            </h2>
            <p className="awa-editorial-desc">
              {isAr
                ? 'توسع المشاريع المشتركة الدولية والعلاقات الراسخة مع كبرى الشركات المصنعة وصول AWA إلى تقنيات الأغذية المتخصصة والمعرفة التطبيقية المتقدمة.'
                : "International joint ventures and established principal relationships extend AWA's access to specialist food technologies, technical knowledge and collaborative development opportunities."}
            </p>
          </div>

          {/* Joint Ventures Directory Dossiers */}
          <div className="awa-jv-directory-grid">
            {jointVentures.map((jv) => {
              const jvLogo = jv.name === 'Turkphos' ? v9Assets.v8Assets.turkphosLogo : v9Assets.v8Assets.ingrevaLogo;
              return (
                <div key={jv.name} className="awa-jv-dossier">
                  <div>
                    <div className="awa-jv-dossier-top">
                      <div className="awa-jv-logo-frame">
                        <img src={jvLogo} alt={`${jv.name} official logo`} />
                      </div>
                      <span className="awa-jv-region">{jv.region} · JOINT VENTURE</span>
                    </div>
                    <h3 className="awa-jv-name">{jv.name}</h3>
                    <h4 className="awa-jv-scope">{jv.category}</h4>
                    <p className="awa-jv-text">{jv.desc}</p>
                  </div>
                  <a href={jv.url} target="_blank" rel="noopener noreferrer" className="awa-jv-link">
                    <span>{isAr ? 'زيارة الموقع الإلكتروني ↗' : 'Visit website ↗'}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Principal Logos Directory Marquee */}
          <div style={{ borderTop: '1px solid var(--awa-border-hairline)', paddingTop: '36px' }}>
            <PartnerMarquee items={Object.values(v9Assets.principalLogos)} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 10. PRODUCTION FACILITIES — PANORAMIC PRESENTATION  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section is-tint" ref={galleryRef} style={{ padding: '80px 0' }}>
        <div className="wrap" style={{ marginBottom: '32px' }}>
          <span className="awa-editorial-kicker">{isAr ? 'البنية التحتية والمرافق' : 'FACILITIES & CAPABILITIES'}</span>
          <h2 className="awa-editorial-title" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', margin: 0 }}>
            {isAr ? 'علوم أغذية تطبيقية، مرافق متقدمة وقدرات إنتاجية' : 'Applied Food Science, Advanced Facilities & Production Scale'}
          </h2>
        </div>

        <div className="awa-facilities-viewport">
          <div className="awa-facilities-strip">
            {[
              { src: v9Assets.v7Assets.factory, alt: 'AWA Industrial Compounding Plant, Borg El-Arab' },
              { src: v9Assets.v8Assets['rd-lab'], alt: 'AWA R&D Application Laboratory' },
              { src: v9Assets.v8Assets['cheese-banner'], alt: 'Processed Cheese & Dairy Applications Pilot Testing' },
              { src: v9Assets.v8Assets['industrial-plant'], alt: 'Precision High-Capacity Blending Line' },
              { src: v9Assets.v8Assets['food-cuisine'], alt: 'Savory & Culinary Formulation Development' },
              { src: v9Assets.v8Assets['sourcing-port'], alt: 'Global Sourcing & Supply Chain Operations' },
              { src: (v9Assets.v7Assets as Record<string, string>)['dairy-cheese'], alt: 'Dairy & Cultured Matrix Applications' },
              { src: (v9Assets.v7Assets as Record<string, string>)['meat-seafood'], alt: 'Meat & Savory Formulation Systems' },
            ].map((item, idx) => (
              <div key={idx} className="awa-facility-panoramic-card">
                <div className="awa-facility-media">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </div>
                <div className="awa-facility-caption">
                  {item.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 11. CLOSING CONVERSATION CTA                         */}
      {/* ═══════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--awa-navy-main)', padding: '80px 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <span style={{ color: '#34D399', fontWeight: 800, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', color: '#FFFFFF', margin: '0 0 10px 0', fontWeight: 800, letterSpacing: '-0.02em' }}>
              {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
              {isAr ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.' : 'Tell us about your application or project and connect with the right team.'}
            </p>
          </div>
          <Link 
            to="/contact?type=technical" 
            style={{ 
              background: '#FFFFFF', 
              color: 'var(--awa-navy-main)', 
              fontWeight: 800, 
              padding: '16px 28px', 
              borderRadius: '2px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '15px',
              textDecoration: 'none'
            }}
          >
            <span>{isAr ? 'ناقش مشروعك ↗' : 'Discuss your project ↗'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Floating Quote / Sample CTA */}
      <button 
        onClick={onOpenQuote} 
        className="floating-contact-cta"
        aria-label="Request a sample or quote"
      >
        <span className="floating-pulse-dot" />
        <span>{isAr ? 'تواصل مع AWA' : 'Talk to AWA'}</span>
        <MessageSquare size={16} />
      </button>
    </div>
  );
};
