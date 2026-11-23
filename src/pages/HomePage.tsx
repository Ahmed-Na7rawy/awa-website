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
  CheckCircle2,
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

interface HomeProps {
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

/* SVG Icon Resolvers for Solution Pathways */
const getChallengeIcon = (id: string) => {
  switch (id) {
    case 'texture-structure': return <Layers size={22} />;
    case 'stability-shelf-life': return <ShieldCheck size={22} />;
    case 'taste-sensory': return <Sparkles size={22} />;
    case 'yield-processing': return <TrendingUp size={22} />;
    case 'cost-effective-formulations': return <Coins size={22} />;
    case 'nutrition-reformulation': return <Leaf size={22} />;
    case 'color-appearance': return <Palette size={22} />;
    case 'new-product-development': return <Lightbulb size={22} />;
    default: return <Target size={22} />;
  }
};

const getFamilyIcon = (id: string) => {
  switch (id) {
    case 'texture-structure': return <Layers size={22} />;
    case 'taste-sensory': return <Sparkles size={22} />;
    case 'preservation-shelf-life': return <ShieldCheck size={22} />;
    case 'nutrition': return <Leaf size={22} />;
    case 'color-appearance': return <Palette size={22} />;
    case 'functional-processing': return <Settings2 size={22} />;
    default: return <FlaskConical size={22} />;
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
      {/* 2. THE STRATEGIC DISCOVERY NAVIGATOR (Quick Jump)    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="find-paths" style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(16, 38, 59, 0.04)' }}>
        <div className="wrap find-paths-inner" style={{ display: 'grid', gridTemplateColumns: '1.15fr repeat(3, 1fr)', alignItems: 'stretch', minHeight: '100px' }}>
          <div className="find-paths-heading" style={{ padding: '24px 24px 20px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F' }}>
              {isAr ? 'ابحث عن حلك المناسب' : 'FIND YOUR SOLUTION'}
            </span>
            <strong style={{ fontSize: '1.25rem', color: '#10263B', fontWeight: 800, letterSpacing: '-0.02em', margin: '0.2rem 0' }}>
              {isAr ? 'استكشف محفظة حلول AWA الصناعية' : "Explore AWA's industrial portfolio"}
            </strong>
            <small style={{ fontSize: '0.8rem', color: '#64748B' }}>
              {isAr ? 'تصفح حسب قطاع التطبيق، التحدي التقني أو العائلة الوظيفية' : 'Navigate by sector, technical objective, or functional family'}
            </small>
          </div>

          <button 
            type="button" 
            onClick={() => handleJumpExplore('industry')}
            style={{
              border: 0,
              borderLeft: isAr ? 0 : '1px solid #E2E8F0',
              borderRight: isAr ? '1px solid #E2E8F0' : 0,
              background: exploreTab === 'industry' ? 'rgba(0, 168, 79, 0.05)' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '24px 22px',
              transition: 'all 0.2s ease',
              textAlign: isAr ? 'right' : 'left',
              cursor: 'pointer'
            }}
            className="find-paths-btn"
          >
            <span className="path-icon" style={{ fontSize: '1.4rem', color: '#00A84F', lineHeight: 1 }}>▦</span>
            <span style={{ display: 'flex', flexDirection: 'column', fontWeight: 800, fontSize: '0.95rem', color: '#10263B' }}>
              <span>{isAr ? 'حسب قطاع الصناعة' : 'By Industry'}</span>
              <small style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 550, marginTop: '2px' }}>
                {isAr ? 'استكشف تطبيقات الأغذية' : 'Explore food applications'}
              </small>
            </span>
            <span style={{ marginLeft: isAr ? 0 : 'auto', marginRight: isAr ? 'auto' : 0, color: '#00A84F', fontWeight: 800, fontSize: '1rem' }}>↗</span>
          </button>

          <button 
            type="button" 
            onClick={() => handleJumpExplore('challenge')}
            style={{
              border: 0,
              borderLeft: isAr ? 0 : '1px solid #E2E8F0',
              borderRight: isAr ? '1px solid #E2E8F0' : 0,
              background: exploreTab === 'challenge' ? 'rgba(0, 168, 79, 0.05)' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '24px 22px',
              transition: 'all 0.2s ease',
              textAlign: isAr ? 'right' : 'left',
              cursor: 'pointer'
            }}
            className="find-paths-btn"
          >
            <span className="path-icon" style={{ fontSize: '1.4rem', color: '#00A84F', lineHeight: 1 }}>◎</span>
            <span style={{ display: 'flex', flexDirection: 'column', fontWeight: 800, fontSize: '0.95rem', color: '#10263B' }}>
              <span>{isAr ? 'حسب التحدي التقني' : 'By Challenge'}</span>
              <small style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 550, marginTop: '2px' }}>
                {isAr ? 'معالجة الاحتياجات التقنية' : 'Address a technical need'}
              </small>
            </span>
            <span style={{ marginLeft: isAr ? 0 : 'auto', marginRight: isAr ? 'auto' : 0, color: '#00A84F', fontWeight: 800, fontSize: '1rem' }}>↗</span>
          </button>

          <button 
            type="button" 
            onClick={() => handleJumpExplore('family')}
            style={{
              border: 0,
              borderLeft: isAr ? 0 : '1px solid #E2E8F0',
              borderRight: isAr ? '1px solid #E2E8F0' : 0,
              background: exploreTab === 'family' ? 'rgba(0, 168, 79, 0.05)' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '24px 22px',
              transition: 'all 0.2s ease',
              textAlign: isAr ? 'right' : 'left',
              cursor: 'pointer'
            }}
            className="find-paths-btn"
          >
            <span className="path-icon" style={{ fontSize: '1.4rem', color: '#00A84F', lineHeight: 1 }}>▧</span>
            <span style={{ display: 'flex', flexDirection: 'column', fontWeight: 800, fontSize: '0.95rem', color: '#10263B' }}>
              <span>{isAr ? 'حسب عائلة المنتج' : 'By Product Family'}</span>
              <small style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 550, marginTop: '2px' }}>
                {isAr ? 'استكشف الوظائف للمكونات' : 'Explore ingredient functions'}
              </small>
            </span>
            <span style={{ marginLeft: isAr ? 0 : 'auto', marginRight: isAr ? 'auto' : 0, color: '#00A84F', fontWeight: 800, fontSize: '1rem' }}>↗</span>
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. FOOD INDUSTRY SOLUTIONS EXPLORER                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="food-applications-section" id="explore" style={{ scrollMarginTop: '80px', padding: '5.5rem 0', background: '#F8FAFC' }} ref={explorerRef}>
        <div className="container">
          <div className="food-apps-intro">
            <div className="food-apps-eyebrow">
              <span className="eyebrow-accent-line" />
              <span>{isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}</span>
            </div>
            <h2 className="food-apps-title">
              {isAr ? (
                <>استكشف خبراتنا <span className="awa-highlight-green">بالطريقة التي تناسبك.</span></>
              ) : (
                <>Explore our expertise <span className="awa-highlight-green">your way.</span></>
              )}
            </h2>
            <p className="food-apps-desc">
              {isAr
                ? 'نقدم مكونات غذائية وأنظمة وظيفية وتركيبات مخصصة مصممة حول متطلبات التصنيع الخاصة. تصفح حسب التطبيق، التحدي التقني، أو عائلة المنتج الوظيفية.'
                : 'We provide food ingredients, functional systems and customized formulations designed around specific manufacturing requirements. Browse by application, technical challenge or functional product family.'}
            </p>
          </div>

          {/* Minimal Horizontal Navigation Tabs */}
          <div className="editorial-tabs-wrapper" role="tablist" aria-label="Application categories">
            <div className="editorial-tabs-bar">
              <button
                type="button"
                role="tab"
                aria-selected={exploreTab === 'industry'}
                className={`editorial-tab-btn ${exploreTab === 'industry' ? 'active' : ''}`}
                onClick={() => setExploreTab('industry')}
              >
                <span className="approach-icon" aria-hidden="true" style={{ marginRight: '6px' }}>▦</span>
                <span>{isAr ? 'حسب قطاع الصناعة' : 'By Industry'}</span>
                <span className="editorial-tab-badge">6</span>
                {exploreTab === 'industry' && <span className="editorial-tab-underline" />}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={exploreTab === 'challenge'}
                className={`editorial-tab-btn ${exploreTab === 'challenge' ? 'active' : ''}`}
                onClick={() => setExploreTab('challenge')}
              >
                <span className="approach-icon" aria-hidden="true" style={{ marginRight: '6px' }}>◎</span>
                <span>{isAr ? 'حسب التحدي التقني' : 'By Challenge'}</span>
                <span className="editorial-tab-badge">8</span>
                {exploreTab === 'challenge' && <span className="editorial-tab-underline" />}
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={exploreTab === 'family'}
                className={`editorial-tab-btn ${exploreTab === 'family' ? 'active' : ''}`}
                onClick={() => setExploreTab('family')}
              >
                <span className="approach-icon" aria-hidden="true" style={{ marginRight: '6px' }}>▧</span>
                <span>{isAr ? 'حسب عائلة المنتج' : 'By Product Family'}</span>
                <span className="editorial-tab-badge">6</span>
                {exploreTab === 'family' && <span className="editorial-tab-underline" />}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="food-apps-grid" id="explorer-results">
            {exploreTab === 'industry' && (
              industryData.map((o) => {
                const arInfo = industryArabicTitles[o.id];
                const cardTitle = (isAr && arInfo) ? arInfo.title : o.title;
                const cardDesc = (isAr && arInfo) ? arInfo.desc : o.desc;
                const assetKey = (o.id === 'bakery' ? 'bakery' : o.id === 'culinary' ? 'culinary' : o.id === 'snacks' ? 'snacks' : o.id) as keyof typeof v9Assets.v7Assets;
                const photoSrc = (v9Assets.v7Assets as Record<string, string>)[assetKey] || v9Assets.v7Assets.factory;

                return (
                  <Link
                    key={o.id}
                    className="editorial-food-card"
                    to={`/solutions/industry/${o.id}`}
                    aria-label={`Explore ${cardTitle}`}
                  >
                    <div className="editorial-card-photo-wrap">
                      <img
                        src={photoSrc}
                        alt={`Close-up food application photography for ${cardTitle}`}
                        loading="lazy"
                      />
                      <span className="editorial-photo-tag">
                        {isAr ? 'تطبيق صناعي' : 'Application Sector'}
                      </span>
                    </div>

                    <div className="editorial-card-body">
                      <div className="editorial-card-main">
                        <h3 className="editorial-card-title">{cardTitle}</h3>
                        <p className="editorial-card-desc">{cardDesc}</p>
                      </div>

                      <div className="editorial-card-footer">
                        <span className="editorial-card-cta">
                          <span>{isAr ? 'استكشف الحلول والتطبيقات' : 'Explore solutions'}</span>
                          <ArrowUpRight size={17} className="card-arrow-icon" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}

            {exploreTab === 'challenge' && (
              challengeData.map((o) => (
                <Link
                  key={o.id}
                  className="editorial-food-card editorial-text-card"
                  to={`/solutions/challenge/${o.id}`}
                >
                  <div className="discovery-card-icon-box">
                    {getChallengeIcon(o.id)}
                  </div>
                  <div className="editorial-card-main">
                    <h3 className="editorial-card-title">{o.title}</h3>
                    <p className="editorial-card-desc">{o.desc}</p>
                  </div>
                  <div className="editorial-card-footer">
                    <span className="editorial-card-cta">
                      <span>{isAr ? 'استكشف التحدي والحلول' : 'Explore challenge & solutions'}</span>
                      <ArrowRight size={15} className="card-arrow-icon" />
                    </span>
                  </div>
                </Link>
              ))
            )}

            {exploreTab === 'family' && (
              familyData.map((o) => (
                <Link
                  key={o.id}
                  className="editorial-food-card editorial-text-card"
                  to={`/solutions/family/${o.id}`}
                >
                  <div className="discovery-card-icon-box">
                    {getFamilyIcon(o.id)}
                  </div>
                  <div className="editorial-card-main">
                    <h3 className="editorial-card-title">{o.title}</h3>
                    <p className="editorial-card-desc">{o.desc}</p>
                  </div>
                  <div className="editorial-card-footer">
                    <span className="editorial-card-cta">
                      <span>{isAr ? 'استكشف عائلة المنتج' : 'Explore product family'}</span>
                      <ArrowRight size={15} className="card-arrow-icon" />
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="editorial-showcase-cta" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/solutions" className="editorial-understated-btn">
              <span>{isAr ? 'استكشف دليل الحلول الكامل' : 'Explore full solutions directory'}</span>
              <ArrowRight size={16} className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. THE AWA DIFFERENCE (Editorial Photographic Triad) */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ background: '#FFFFFF', padding: '6rem 0', borderTop: '1px solid #E2E8F0' }} ref={differenceRef}>
        <div className="wrap">
          <div className="home-intro" style={{ display: 'grid', gridTemplateColumns: '1.08fr 0.92fr', gap: '4rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <div className="kicker">{isAr ? 'تميز مجموعة AWA' : 'THE AWA DIFFERENCE'}</div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', color: '#10263B', fontWeight: 800, lineHeight: 1.18, margin: '1rem 0 0' }}>
                {isAr ? (
                  <>خبرة تقنية مخصصة<br /><span className="accent">لتطبيقك الصناعي.</span></>
                ) : (
                  <>Technical expertise, tailored to<br /><span className="accent">your application.</span></>
                )}
              </h2>
            </div>
            <div className="home-intro-right" style={{ paddingTop: '1.5rem' }}>
              <p style={{ fontSize: '1.05rem', color: '#556976', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
                {isAr
                  ? 'تجمع مجموعة AWA بين المعرفة الدولية بالمكونات، وعلوم الأغذية التطبيقية، والخبرة التصنيعية لمساعدة مصنعي الأغذية في معالجة تحديات المنتجات والمعالجة الصناعية. نقيم الخواص الوظيفية للمكونات، ومتطلبات التصنيع، وجدوى التركيبات الاقتصادية لتطوير حلول عملية تلائم كل تطبيق.'
                  : 'AWA brings together international ingredient expertise, applied food science and manufacturing knowledge to help food manufacturers solve product and processing challenges. We evaluate ingredient functionality, processing requirements and formulation economics to develop practical solutions suited to each application.'}
              </p>
              <Link to="/about" className="text-link" style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                {isAr ? 'اكتشف من نحن ↗' : 'Discover who we are ↗'}
              </Link>
            </div>
          </div>

          {/* 3 Authentic V9 Capability Photo Cards */}
          <div className="value-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {/* Card 1: Sourcing */}
            <Link 
              to="/capabilities/sourcing" 
              className="value-card capability-photo-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(16, 38, 59, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
            >
              <div className="capability-card-photo" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={v9Assets.v7Assets.sourcing} 
                  alt="Food ingredient consignments and international sourcing operations, conceptual illustration" 
                  loading="eager"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span style={{ position: 'absolute', top: '14px', right: isAr ? 'auto' : '14px', left: isAr ? '14px' : 'auto', background: 'rgba(16, 38, 59, 0.85)', backdropFilter: 'blur(8px)', color: '#FFFFFF', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em' }}>
                  01 · GLOBAL REACH
                </span>
              </div>
              <div className="capability-card-text" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', display: 'block', marginBottom: '0.5rem' }}>
                    {isAr ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply'}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#10263B', fontWeight: 800, lineHeight: 1.25, margin: '0 0 0.85rem' }}>
                    {isAr ? 'تحديد واختيار المكونات والتقنيات المناسبة.' : 'Identify the right ingredients and technologies.'}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.65, margin: 0 }}>
                    {capabilityData[0].desc}
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 750, color: '#00A84F' }}>
                    {isAr ? 'استكشف قدرات التوريد' : 'Explore sourcing capability'}
                  </span>
                  <ArrowRight size={15} color="#00A84F" />
                </div>
              </div>
            </Link>

            {/* Card 2: R&D */}
            <Link 
              to="/capabilities/rd" 
              className="value-card capability-photo-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(16, 38, 59, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
            >
              <div className="capability-card-photo" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={v9Assets.v7Assets.formulation} 
                  alt="Illustrative food R&D laboratory conducting formulation evaluations" 
                  loading="eager"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span style={{ position: 'absolute', top: '14px', right: isAr ? 'auto' : '14px', left: isAr ? '14px' : 'auto', background: 'rgba(16, 38, 59, 0.85)', backdropFilter: 'blur(8px)', color: '#FFFFFF', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em' }}>
                  02 · APPLIED SCIENCE
                </span>
              </div>
              <div className="capability-card-text" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', display: 'block', marginBottom: '0.5rem' }}>
                    {isAr ? 'البحث والتطوير وتطبيقات الأغذية' : 'R&D & Application Development'}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#10263B', fontWeight: 800, lineHeight: 1.25, margin: '0 0 0.85rem' }}>
                    {isAr ? 'بناء الوظيفة المطلوبة حول ظروف المعالجة.' : 'Build functionality around your process.'}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.65, margin: 0 }}>
                    {capabilityData[1].desc}
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 750, color: '#00A84F' }}>
                    {isAr ? 'استكشف البحث والتطوير' : 'Explore R&D capability'}
                  </span>
                  <ArrowRight size={15} color="#00A84F" />
                </div>
              </div>
            </Link>

            {/* Card 3: Manufacturing */}
            <Link 
              to="/capabilities/manufacturing" 
              className="value-card capability-photo-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(16, 38, 59, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
            >
              <div className="capability-card-photo" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={v9Assets.v7Assets.factory} 
                  alt="AWA Group manufacturing facility showing industrial powder processing machinery" 
                  loading="eager"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span style={{ position: 'absolute', top: '14px', right: isAr ? 'auto' : '14px', left: isAr ? '14px' : 'auto', background: 'rgba(16, 38, 59, 0.85)', backdropFilter: 'blur(8px)', color: '#FFFFFF', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em' }}>
                  03 · INDUSTRIAL SCALE
                </span>
              </div>
              <div className="capability-card-text" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', display: 'block', marginBottom: '0.5rem' }}>
                    {isAr ? 'التميز الصناعي والتصنيع' : 'Manufacturing Excellence'}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#10263B', fontWeight: 800, lineHeight: 1.25, margin: '0 0 0.85rem' }}>
                    {isAr ? 'ترجمة خبرات التركيب إلى إنتاج صناعي موثوق.' : 'Translate formulation expertise into production.'}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.65, margin: 0 }}>
                    {capabilityData[3].desc}
                  </p>
                </div>
                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 750, color: '#00A84F' }}>
                    {isAr ? 'استكشف التميز التصنيعي' : 'Explore manufacturing'}
                  </span>
                  <ArrowRight size={15} color="#00A84F" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. TAILORED FORMULATION EXPERTISE (Deep Contrast)   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section 
        className="section formulation-chamber-section" 
        style={{ 
          padding: '6.5rem 0', 
          background: 'radial-gradient(ellipse at 80% 20%, #17384A 0%, #10263B 50%, #0A192F 100%)', 
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden'
        }} 
        ref={formulationRef}
      >
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4.5rem', alignItems: 'center' }}>
            {/* Left Column: Authoritative Editorial Story */}
            <div>
              <div className="kicker on-dark" style={{ marginBottom: '1rem' }}>
                {isAr ? 'خبرات التركيبات المخصصة' : 'TAILORED FORMULATION EXPERTISE'}
              </div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.18, margin: '0 0 1.5rem' }}>
                {isAr ? (
                  <>مصممة للأداء المتميز.<br /><span style={{ color: '#4ADE80' }}>مدروسة لتحقيق أعلى قيمة.</span></>
                ) : (
                  <>Designed for performance.<br /><span style={{ color: '#4ADE80' }}>Considered for value.</span></>
                )}
              </h2>
              <p style={{ fontSize: '1.08rem', color: '#CBD5E1', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '620px' }}>
                {isAr
                  ? 'يتطلب تطوير التركيبات الغذائية تحقيق التوازن الدقيق بين الخواص الوظيفية، وظروف المعالجة الصناعية، والأهداف التجارية المستهدفة. تجمع مجموعة AWA بين توريد المكونات والتطوير التطبيقي لتقييم البدائل المناسبة، وتحسين أنظمة المكونات، ومساعدة العملاء على تحقيق الأداء المحدد وأهداف التكلفة.'
                  : 'Food formulation requires the right balance between functionality, process conditions and commercial targets. AWA combines ingredient sourcing and application development to assess suitable alternatives, optimize ingredient systems and support customers in meeting defined performance and cost objectives.'}
              </p>
              <Link 
                to="/capabilities/formulations" 
                className="btn btn-primary"
                style={{
                  background: '#00A84F',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}
              >
                <span>{isAr ? 'استكشف التركيبات المخصصة' : 'Explore customized formulations'}</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Right Column: Formulation Balancing Chamber (Proof of Engineering) */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              padding: '2.5rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', color: '#4ADE80', textTransform: 'uppercase' }}>
                  {isAr ? 'مصفوفة التوازن التقني' : 'TECHNICAL EQUILIBRIUM'}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>4 Balance Pillars</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ color: '#4ADE80', marginBottom: '0.5rem' }}><Layers size={20} /></div>
                  <strong style={{ fontSize: '0.95rem', color: '#FFFFFF', display: 'block', marginBottom: '0.3rem' }}>
                    {isAr ? 'القوام والبنية' : 'Texture & Rheology'}
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.45, display: 'block' }}>
                    {isAr ? 'اللزوجة، التماسك، الانصهار، والشعور بالفم' : 'Viscosity, firmness, binding, melt control'}
                  </span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ color: '#4ADE80', marginBottom: '0.5rem' }}><ShieldCheck size={20} /></div>
                  <strong style={{ fontSize: '0.95rem', color: '#FFFFFF', display: 'block', marginBottom: '0.3rem' }}>
                    {isAr ? 'الثبات والصلاحية' : 'Phase Stability'}
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.45, display: 'block' }}>
                    {isAr ? 'ثبات الاستحلاب، منع النضح والانفصال' : 'Emulsion integrity, syneresis control'}
                  </span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ color: '#4ADE80', marginBottom: '0.5rem' }}><TrendingUp size={20} /></div>
                  <strong style={{ fontSize: '0.95rem', color: '#FFFFFF', display: 'block', marginBottom: '0.3rem' }}>
                    {isAr ? 'إنتاجية المعالجة' : 'Yield & Processing'}
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.45, display: 'block' }}>
                    {isAr ? 'تحمل الحرارة، القص الميكانيكي، وزيادة العائد' : 'Shear resistance, thermal stability, line fit'}
                  </span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ color: '#4ADE80', marginBottom: '0.5rem' }}><Coins size={20} /></div>
                  <strong style={{ fontSize: '0.95rem', color: '#FFFFFF', display: 'block', marginBottom: '0.3rem' }}>
                    {isAr ? 'الجدوى الاقتصادية' : 'Formulation Economics'}
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.45, display: 'block' }}>
                    {isAr ? 'التكلفة بالاستخدام، والتوازن التجاري' : 'Target cost-in-use, smart ingredient dosing'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. COMMITMENT TO INTERNATIONAL STANDARDS (V9)      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="standards-showcase section" id="certifications-home" style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }} ref={standardsRef}>
        <div className="wrap">
          <div className="standards-top reveal-fade-up" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '3.5rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <div className="kicker">{isAr ? 'الالتزام بالمعايير الدولية' : 'COMMITMENT TO INTERNATIONAL STANDARDS'}</div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', marginBottom: '1rem', color: '#10263B', fontWeight: 800 }}>
                {isAr ? (
                  <>المعايير الدولية.<br /><span className="accent">الجودة في الممارسة اليومية.</span></>
                ) : (
                  <>International Standards.<br /><span className="accent">Quality in Practice.</span></>
                )}
              </h2>
              <p style={{ maxWidth: '680px', color: '#556976', fontSize: '1.02rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'في مجموعة AWA، تعد الجودة وسلامة الغذاء والعمليات المسؤولة ركائز أساسية لطريقة عملنا. تدعم عملياتنا التصنيعية أنظمة إدارة معترف بها، وشهادات منتجات، وتسجيلات رقابية، مما يعكس التزاماً ثابتاً بالتجانس والانضباط التشغيلي والتحسين المستمر.'
                  : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing operations are supported by recognized management systems, product certifications and relevant regulatory registrations, reflecting a commitment to consistency, operational discipline and continual improvement.'}
              </p>
            </div>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 24px rgba(16, 38, 59, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: '#00A84F', fontSize: '1.8rem', lineHeight: 1 }}>✳</span>
                <strong style={{ fontSize: '1.1rem', color: '#10263B', fontWeight: 800 }}>
                  {isAr ? 'جودة مدعومة بأنظمة معترف بها عالمياً' : 'Quality, supported by recognized systems.'}
                </strong>
              </div>
              <span style={{ fontSize: '0.875rem', color: '#556976', fontWeight: 600, display: 'block' }}>
                {isAr ? 'سلامة الغذاء · الجودة · البيئة · الأفراد' : 'Food Safety · Quality · Environment · People'}
              </span>
            </div>
          </div>

          {/* International Certifications: 5 Cards with Official Seals */}
          <div className="reveal-fade-up" style={{ marginBottom: '3rem' }}>
            <div className="standards-category">
              {isAr ? 'الشهادات الدولية' : 'INTERNATIONAL CERTIFICATIONS'}
            </div>
            <div className="cert-tile-grid">
              {certifications.filter(c => c.group === 'international').map((cert) => {
                const sealSrc = (v9Assets.corporateAssets as Record<string, string>)[cert.asset];
                return (
                  <Link 
                    key={cert.id} 
                    to="/quality" 
                    className="cert-tile compact-cert"
                    style={{
                      borderRadius: '16px',
                      boxShadow: '0 4px 16px rgba(16, 38, 59, 0.03)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div className="cert-logo-frame">
                      {sealSrc ? (
                        <img src={sealSrc} alt={`${cert.code} logo`} loading="eager" />
                      ) : (
                        <div style={{ fontWeight: 800, color: '#00A84F' }}>{cert.code}</div>
                      )}
                    </div>
                    <div className="cert-tile-copy" style={{ marginTop: '0.75rem' }}>
                      <strong style={{ fontSize: '0.95rem' }}>{cert.code}</strong>
                      <small style={{ fontSize: '0.78rem' }}>{cert.type}</small>
                    </div>
                    <span className="cert-more">↗</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Regulatory Registration & Listing: 2 Cards with Official Seals */}
          <div className="reveal-fade-up" style={{ marginBottom: '3rem' }}>
            <div className="standards-category">
              {isAr ? 'التسجيل والإدراج الرقابي' : 'REGULATORY REGISTRATION & LISTING'}
            </div>
            <div className="cert-tile-grid regulatory-grid">
              {certifications.filter(c => c.group === 'regulatory').map((cert) => {
                const sealSrc = (v9Assets.corporateAssets as Record<string, string>)[cert.asset];
                return (
                  <Link 
                    key={cert.id} 
                    to="/quality" 
                    className="cert-tile"
                    style={{
                      borderRadius: '16px',
                      padding: '1.5rem',
                      boxShadow: '0 4px 16px rgba(16, 38, 59, 0.03)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div className="cert-logo-frame" style={{ width: '90px', height: '90px', flexShrink: 0 }}>
                      {sealSrc ? (
                        <img src={sealSrc} alt={`${cert.code} logo`} loading="eager" />
                      ) : (
                        <div style={{ fontWeight: 800, color: '#10263B' }}>{cert.code}</div>
                      )}
                    </div>
                    <div className="cert-tile-copy" style={{ paddingLeft: isAr ? 0 : '1rem', paddingRight: isAr ? '1rem' : 0 }}>
                      <strong style={{ fontSize: '1.05rem', color: '#10263B' }}>{cert.code}</strong>
                      <small style={{ fontSize: '0.8rem', color: '#00A84F', fontWeight: 700, margin: '2px 0 6px' }}>{cert.type}</small>
                      <p style={{ fontSize: '0.825rem', color: '#556976', lineHeight: 1.5, margin: 0 }}>
                        {cert.meaning}
                      </p>
                    </div>
                    <span className="cert-more">↗</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="standards-bottom" style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
              {isAr 
                ? 'تخضع مطالبات منشأة AWA للحلول الغذائية والمنتجات المعتمدة لتأكيد النطاق والصلاحية السارية.'
                : 'AWA Food Solutions facility and certified-product claims require confirmation of current scope and validity before publication.'}
            </span>
            <Link to="/quality" className="text-link" style={{ fontSize: '0.9rem', fontWeight: 800 }}>
              {isAr ? 'استكشف الجودة والاعتمادات ↗' : 'Explore Quality & Certifications ↗'}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. RESPONSIBLE GROWTH (V9 Exact Pillars)            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section tint" style={{ padding: '6rem 0' }} ref={growthRef}>
        <div className="wrap sustainability-home">
          <div>
            <div className="kicker">{isAr ? 'النمو المسؤول' : 'RESPONSIBLE GROWTH'}</div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', color: '#10263B', fontWeight: 800, margin: '1rem 0' }}>
              {isAr ? (
                <>نمو مسؤول.<br /><span className="accent">أثر دائم ومستمر.</span></>
              ) : (
                <>Responsible Growth.<br /><span className="accent">Lasting Impact.</span></>
              )}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#556976', lineHeight: 1.7, margin: '0 0 2rem' }}>
              {isAr
                ? 'نؤمن بأن النمو طويل الأجل ينبع من قرارات مسؤولة عبر عملياتنا وسلاسل القيمة لدينا. يركز نهجنا على ممارسات الموردين، وكفاءة الموارد، والابتكار المسؤول للمنتجات، ورفاهية أفرادنا، مدعوماً بالتزام مستمر بالتحسين.'
                : 'We believe long-term growth comes from responsible decisions across our operations and value chain. Our approach focuses on supplier practices, resource efficiency, responsible product innovation and the wellbeing of our people, supported by a commitment to continuous improvement.'}
            </p>
            <Link to="/sustainability" className="btn outline" style={{ borderRadius: '12px' }}>
              <span>{isAr ? 'استكشف الاستدامة' : 'Explore sustainability'}</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="sustainability-kpis">
            <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>01</div>
              <strong style={{ fontSize: '1.15rem', color: '#10263B', fontWeight: 800 }}>
                {isAr ? 'التوريد المسؤول' : 'Responsible Sourcing'}
              </strong>
              <span style={{ fontSize: '0.875rem', color: '#556976', lineHeight: 1.5 }}>
                {isAr ? 'تقييم الموردين وبناء علاقات توريد موثوقة ومستدامة للمكونات.' : 'Supplier evaluation and dependable ingredient relationships.'}
              </span>
            </div>

            <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>02</div>
              <strong style={{ fontSize: '1.15rem', color: '#10263B', fontWeight: 800 }}>
                {isAr ? 'كفاءة الموارد' : 'Resource Efficiency'}
              </strong>
              <span style={{ fontSize: '0.875rem', color: '#556976', lineHeight: 1.5 }}>
                {isAr ? 'إدارة استهلاك الطاقة والمياه والمواد وتقليل الهدر والمخلفات.' : 'Energy, water, materials and waste management.'}
              </span>
            </div>

            <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>03</div>
              <strong style={{ fontSize: '1.15rem', color: '#10263B', fontWeight: 800 }}>
                {isAr ? 'الابتكار المسؤول' : 'Responsible Innovation'}
              </strong>
              <span style={{ fontSize: '0.875rem', color: '#556976', lineHeight: 1.5 }}>
                {isAr ? 'كفاءة استخدام المكونات وتطوير تركيبات واعية بظروف المعالجة.' : 'Ingredient efficiency and process-aware formulation.'}
              </span>
            </div>

            <div style={{ borderRadius: '16px', border: '1px solid #E2E8F0', padding: '1.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>04</div>
              <strong style={{ fontSize: '1.15rem', color: '#10263B', fontWeight: 800 }}>
                {isAr ? 'الأفراد والسلامة' : 'People & Safety'}
              </strong>
              <span style={{ fontSize: '0.875rem', color: '#556976', lineHeight: 1.5 }}>
                {isAr ? 'بيئات عمل آمنة، برامج تدريب مستمرة، ومسؤولية تشغيلية واضحة.' : 'Safe workplaces, training and accountability.'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. INSIGHTS & NEWS (Exact V9 Content & Images)      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }} ref={insightsRef}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <div className="kicker">{isAr ? 'المقالات والأخبار' : 'INSIGHTS & NEWS'}</div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', color: '#10263B', fontWeight: 800, margin: '1rem 0' }}>
                {isAr ? (
                  <>معرفة تدعم <span className="accent">التقدم والنمو.</span></>
                ) : (
                  <>Knowledge that <span className="accent">supports progress.</span></>
                )}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#556976', lineHeight: 1.7, margin: 0 }}>
                {isAr
                  ? 'توضح المعرفة التقنية، وقصص الابتكار المعتمدة، والتطورات المؤسسية كيف تطبق AWA خبراتها عبر قطاعات صناعة الأغذية المختلفة.'
                  : 'Technical knowledge, approved innovation stories and corporate developments demonstrate how AWA applies its expertise across the food industry.'}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', paddingTop: '1.5rem' }}>
              <Link to="/knowledge" className="text-link" style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                {isAr ? 'استكشف المقالات والأخبار ↗' : 'Explore Insights & News ↗'}
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {insightStories.map((story, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 6px 20px rgba(16, 38, 59, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease'
                }}
              >
                <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                  <img src={story.image} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '15px', right: isAr ? 'auto' : '15px', left: isAr ? '15px' : 'auto', background: 'rgba(16, 38, 59, 0.85)', backdropFilter: 'blur(8px)', color: '#FFFFFF', padding: '0.35rem 0.85rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700 }}>
                    {story.tag}
                  </span>
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#00A84F', display: 'block', marginBottom: '0.5rem' }}>
                      {story.kicker}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: '#10263B', fontWeight: 800, lineHeight: 1.35, marginBottom: '0.75rem' }}>
                      {story.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.6, margin: 0 }}>
                      {story.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
                    <Link to="/knowledge" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#00A84F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span>{isAr ? 'اقرأ المزيد ↗' : 'Read more ↗'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 9. GLOBAL JOINT VENTURES & PRINCIPALS MARQUEE       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section tint" style={{ padding: '6rem 0', borderTop: '1px solid #E2E8F0' }} ref={marqueeRef}>
        <div className="wrap">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '3.5rem' }}>
            <div className="kicker" style={{ justifyContent: 'center' }}>
              {isAr ? 'الشركاء والشركات المشتركة' : 'STRATEGIC JOINT VENTURES & GLOBAL PRINCIPALS'}
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', color: '#10263B', fontWeight: 800, margin: '1rem 0' }}>
              {isAr ? 'ربط الخبرة العالمية بالقدرة الصناعية المحلية' : 'Connecting International Expertise with Local Scale'}
            </h2>
            <p style={{ margin: '0 auto', maxWidth: '680px', color: '#556976', fontSize: '1.05rem', lineHeight: 1.7 }}>
              {isAr
                ? 'توسع المشاريع المشتركة الدولية والعلاقات الراسخة مع كبرى الشركات المصنعة وصول AWA إلى تقنيات الأغذية المتخصصة والمعرفة التطبيقية المتقدمة.'
                : "International joint ventures and established principal relationships extend AWA's access to specialist food technologies, technical knowledge and collaborative development opportunities."}
            </p>
          </div>

          {/* Joint Ventures Highlight Cards with Official Logos */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {jointVentures.map((jv) => {
              const jvLogo = jv.name === 'Turkphos' ? v9Assets.v8Assets.turkphosLogo : v9Assets.v8Assets.ingrevaLogo;
              return (
                <div 
                  key={jv.name}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    boxShadow: '0 8px 24px rgba(16, 38, 59, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid #F1F5F9', paddingBottom: '1rem' }}>
                      <img src={jvLogo} alt={`${jv.name} official logo`} style={{ maxHeight: '48px', maxWidth: '180px', objectFit: 'contain' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#00A84F' }}>
                        {jv.region}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 700 }}>Joint Venture</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', color: '#10263B', fontWeight: 800, marginBottom: '0.3rem' }}>
                      {jv.name}
                    </h3>
                    <h4 style={{ fontSize: '0.925rem', color: '#00A84F', fontWeight: 700, marginBottom: '0.85rem' }}>
                      {jv.category}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.6, margin: 0 }}>
                      {jv.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #E2E8F0' }}>
                    <a href={jv.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', fontWeight: 750, color: '#00A84F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span>{isAr ? 'زيارة الموقع الإلكتروني ↗' : 'Visit website ↗'}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Marquee with Authentic Principal Logos */}
          <div className="reveal-fade-up">
            <PartnerMarquee items={Object.values(v9Assets.principalLogos)} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 10. AUTHENTIC CAPABILITY GALLERY (V9 Assets)        */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="horizontal-gallery-section" ref={galleryRef} style={{ background: '#FFFFFF', borderTop: '1px solid #E2E8F0', padding: '5.5rem 0' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '2.5rem' }}>
            <div className="kicker" style={{ justifyContent: 'center' }}>
              {isAr ? 'البنية التحتية والمرافق' : 'FACILITIES & CAPABILITIES'}
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#10263B', fontWeight: 800, margin: '1rem 0 0' }}>
              {isAr ? 'علوم أغذية تطبيقية، مرافق متقدمة وقدرات إنتاجية' : 'Applied Food Science, Advanced Facilities & Production Scale'}
            </h2>
          </div>
        </div>

        <div className="horizontal-gallery-track">
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
            <div key={idx} className="gallery-card-item">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 11. CLOSING CTA (Exact V9 Content)                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5.5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2.5rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 800 }}>
              {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
              {isAr ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.' : 'Tell us about your application or project and connect with the right team.'}
            </p>
          </div>
          <Link 
            to="/contact?type=technical" 
            className="btn" 
            style={{ 
              background: '#FFFFFF', 
              color: 'var(--navy)', 
              fontWeight: 800, 
              padding: '1rem 2rem', 
              borderRadius: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '1rem',
              textDecoration: 'none'
            }}
          >
            <span>{isAr ? 'ناقش مشروعك ↗' : 'Discuss your project ↗'}</span>
            <ArrowRight size={17} />
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
