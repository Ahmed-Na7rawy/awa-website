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
  MessageSquare
} from 'lucide-react';
import { CLIENT_LOGOS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { industryData, challengeData, familyData, certifications, jointVentures } from '../data/v9Data';

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
  'bakery-confectionery': {
    title: 'المخبوزات والحلويات والمعجنات',
    desc: 'أنظمة مكونات تدعم أداء العجين والمخفوقات، الطراوة، الحفاظ على الرطوبة، وثبات الحشوات والمنتج النهائي.'
  },
  'beverages': {
    title: 'المشروبات والعصائر',
    desc: 'حلول للانتشار والتثبيت، المذاق والشعور بالفم، الذوبان والتركيبات الغذائية عبر مختلف أشكال المشروبات السائلة والبودرة.'
  },
  'sauces-soups-culinary': {
    title: 'الصلصات والشوربات والحلول المطبخية',
    desc: 'أنظمة وظيفية وحسية للصلصات، التتبيلات، المرق، والوجبات الجاهزة لتحقيق استقرار المستحلبات وثبات النكهة.'
  },
  'snacks-cereals': {
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
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const handleJumpExplore = (tab: 'industry' | 'challenge' | 'family') => {
    setExploreTab(tab);
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const v7IndustryImages: Record<string, string> = {
    'dairy-cheese': '/images/v9/v7/dairy-cheese.webp',
    'meat-seafood': '/images/v9/v7/meat-seafood.webp',
    'bakery-confectionery': '/images/v9/v7/bakery.webp',
    'beverages': '/images/v9/v7/beverages.webp',
    'sauces-soups-culinary': '/images/v9/v7/culinary.webp',
    'snacks-cereals': '/images/v9/v7/snacks.webp',
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
      image: '/images/pages/home/food-chemistry-formulation.jpg',
      tag: isAr ? 'تطبيقات الأغذية' : 'Food Applications'
    },
    {
      kicker: isAr ? 'الابتكار الصناعي' : 'INDUSTRIAL INNOVATION',
      title: isAr ? 'من التجارب المخبرية والتطبيقية إلى حلول عملية قابلة للتوسع.' : 'From technical trials to practical solutions.',
      desc: isAr ? 'كيف يدعم التطوير التطبيقي المنظم والتقنيات المتخصصة مصنعي الأغذية في تحويل الأفكار إلى إنتاج صناعي موثوق.' : 'How structured application development and specialist technologies support food manufacturers.',
      image: '/images/pages/industries/image33.jpg',
      tag: isAr ? 'تجارب التوسع' : 'Scale-up Trials'
    },
    {
      kicker: isAr ? 'العمليات المسؤولة' : 'RESPONSIBLE OPERATIONS',
      title: isAr ? 'المعايير الدولية في الممارسة اليومية.' : 'International standards in daily practice.',
      desc: isAr ? 'الجودة والسلامة والاستدامة كمنهجية وانضباط تشغيلي راسخ بدلاً من مجرد ادعاءات تسويقية.' : 'Quality, safety and sustainability as operational disciplines rather than marketing claims.',
      image: '/images/v9/v8/rd-lab.webp',
      tag: isAr ? 'أنظمة الجودة' : 'Quality Systems'
    }
  ];

  return (
    <div className="home-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'حلول الصناعات الغذائية وتطوير التركيبات المخصصة' : 'Tailored Food Solutions & Industrial Ingredients'}
        description="AWA Group combines global sourcing expertise, application-driven R&D and manufacturing capabilities to develop customized food solutions."
        path="/"
        image="/images/pages/industries/image33.jpg"
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
      {/* 2. QUICK-JUMP DISCOVERY ROW (V9 Exact Cards)        */}
      {/* ═══════════════════════════════════════════════════ */}
      <section style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#00A84F' }}>
                {isAr ? 'ابحث عن حلك المناسب' : 'FIND YOUR SOLUTION'}
              </span>
              <h3 style={{ fontSize: '1.25rem', color: '#10263B', fontWeight: 800, margin: '0.2rem 0 0' }}>
                {isAr ? 'استكشف محفظة حلول AWA الصناعية' : "Explore AWA's industrial portfolio"}
              </h3>
            </div>
            <Link to="/solutions" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00A84F', display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
              <span>{isAr ? 'دليل الحلول الكامل ↗' : 'View solutions overview ↗'}</span>
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div 
              onClick={() => handleJumpExplore('industry')}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(16, 38, 59, 0.03)'
              }}
              className="quick-jump-card"
            >
              <div>
                <span style={{ fontSize: '1.2rem', color: '#00A84F', display: 'block', marginBottom: '0.25rem' }}>▦</span>
                <strong style={{ fontSize: '1.05rem', color: '#10263B', display: 'block' }}>
                  {isAr ? 'حسب قطاع الصناعة' : 'By Industry'}
                </strong>
                <span style={{ fontSize: '0.825rem', color: '#64748B' }}>
                  {isAr ? 'استكشف تطبيقات الأغذية' : 'Explore food applications'}
                </span>
              </div>
              <ArrowUpRight size={18} color="#00A84F" />
            </div>

            <div 
              onClick={() => handleJumpExplore('challenge')}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(16, 38, 59, 0.03)'
              }}
              className="quick-jump-card"
            >
              <div>
                <span style={{ fontSize: '1.2rem', color: '#00A84F', display: 'block', marginBottom: '0.25rem' }}>◎</span>
                <strong style={{ fontSize: '1.05rem', color: '#10263B', display: 'block' }}>
                  {isAr ? 'حسب التحدي التقني' : 'By Challenge'}
                </strong>
                <span style={{ fontSize: '0.825rem', color: '#64748B' }}>
                  {isAr ? 'معالجة الاحتياجات التقنية' : 'Address a technical need'}
                </span>
              </div>
              <ArrowUpRight size={18} color="#00A84F" />
            </div>

            <div 
              onClick={() => handleJumpExplore('family')}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '1.5rem',
                border: '1px solid #E2E8F0',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(16, 38, 59, 0.03)'
              }}
              className="quick-jump-card"
            >
              <div>
                <span style={{ fontSize: '1.2rem', color: '#00A84F', display: 'block', marginBottom: '0.25rem' }}>▧</span>
                <strong style={{ fontSize: '1.05rem', color: '#10263B', display: 'block' }}>
                  {isAr ? 'حسب عائلة المنتج' : 'By Product Family'}
                </strong>
                <span style={{ fontSize: '0.825rem', color: '#64748B' }}>
                  {isAr ? 'استكشف الوظائف للمكونات' : 'Explore ingredient functions'}
                </span>
              </div>
              <ArrowUpRight size={18} color="#00A84F" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. FOOD INDUSTRY SOLUTIONS EXPLORER                 */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="food-applications-section" id="explore" style={{ scrollMarginTop: '80px', padding: '5.5rem 0' }} ref={explorerRef}>
        <div className="container">
          <div className="food-apps-intro">
            <div className="food-apps-eyebrow">
              <span className="eyebrow-accent-line" />
              <span>{isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}</span>
            </div>
            <h2 className="food-apps-title">
              {isAr ? 'استكشف خبراتنا بالطريقة التي تناسبك.' : 'Explore our expertise your way.'}
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

                return (
                  <Link
                    key={o.id}
                    className="editorial-food-card"
                    to={`/solutions/industry/${o.id}`}
                    aria-label={`Explore ${cardTitle}`}
                  >
                    <div className="editorial-card-photo-wrap">
                      <img
                        src={v7IndustryImages[o.id] || '/images/v9/v7/hero.webp'}
                        alt={cardTitle}
                        loading="lazy"
                      />
                      <span className="editorial-photo-tag">
                        {isAr ? 'قطاع صناعي' : 'Application Sector'}
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

          <div className="editorial-showcase-cta">
            <Link to="/solutions" className="editorial-understated-btn">
              <span>{isAr ? 'استكشف دليل الحلول الكامل' : 'Explore full solutions directory'}</span>
              <ArrowRight size={16} className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. THE AWA DIFFERENCE                               */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ background: '#F8FAFC', padding: '5.5rem 0', borderTop: '1px solid #E2E8F0' }} ref={differenceRef}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', display: 'block', marginBottom: '0.5rem' }}>
                {isAr ? 'تميز مجموعة AWA' : 'THE AWA DIFFERENCE'}
              </span>
              <h2 style={{ fontSize: '2.4rem', color: '#10263B', fontWeight: 800, lineHeight: 1.25, margin: '0 0 1rem' }}>
                {isAr ? (
                  <>خبرة تقنية مخصصة<br /><span style={{ color: '#00A84F' }}>لتطبيقك الصناعي.</span></>
                ) : (
                  <>Technical expertise, tailored to<br /><span style={{ color: '#00A84F' }}>your application.</span></>
                )}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#556976', lineHeight: 1.7, margin: 0 }}>
                {isAr
                  ? 'تجمع مجموعة AWA بين المعرفة الدولية بالمكونات، وعلوم الأغذية التطبيقية، والخبرة التصنيعية لمساعدة مصنعي الأغذية في معالجة تحديات المنتجات والمعالجة الصناعية. نقيم الخواص الوظيفية للمكونات، ومتطلبات التصنيع، وجدوى التركيبات الاقتصادية لتطوير حلول عملية تلائم كل تطبيق.'
                  : 'AWA brings together international ingredient expertise, applied food science and manufacturing knowledge to help food manufacturers solve product and processing challenges. We evaluate ingredient functionality, processing requirements and formulation economics to develop practical solutions suited to each application.'}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', paddingTop: '1rem' }}>
              <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 700, color: '#00A84F', textDecoration: 'none' }}>
                <span>{isAr ? 'اكتشف من نحن ↗' : 'Discover who we are ↗'}</span>
              </Link>
            </div>
          </div>

          {/* 3 Core Capability Cards from V9 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(16, 38, 59, 0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Globe2 size={24} />
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#10263B', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {isAr ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply'}
                </h3>
                <h4 style={{ fontSize: '0.95rem', color: '#00A84F', fontWeight: 700, marginBottom: '1rem' }}>
                  {isAr ? 'تحديد واختيار المكونات والتقنيات المناسبة.' : 'Identify the right ingredients and technologies.'}
                </h4>
                <p style={{ color: '#556976', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                  {isAr
                    ? 'نحدد ونقيم المكونات المتخصصة والتقنيات عبر شركائنا الدوليين وعلاقات التوريد المؤهلة، مع مواءمة متطلبات الأداء، ومعايير الجودة، والجدوى الاقتصادية.'
                    : 'We identify and evaluate specialty ingredients and technologies through international principals and qualified supply relationships, matching performance needs, quality requirements and commercial feasibility.'}
                </p>
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
                <Link to="/capabilities" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10263B', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>{isAr ? 'استكشف قدرات التوريد' : 'Explore sourcing capability'}</span>
                  <ArrowRight size={14} color="#00A84F" />
                </Link>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(16, 38, 59, 0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <FlaskConical size={24} />
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#10263B', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {isAr ? 'البحث والتطوير وتطبيقات الأغذية' : 'R&D & Application Development'}
                </h3>
                <h4 style={{ fontSize: '0.95rem', color: '#00A84F', fontWeight: 700, marginBottom: '1rem' }}>
                  {isAr ? 'بناء الوظيفة المطلوبة حول ظروف المعالجة.' : 'Build functionality around your process.'}
                </h4>
                <p style={{ color: '#556976', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                  {isAr
                    ? 'يربط نهجنا التقني بين الخواص الوظيفية للمكونات، ومتغيرات المعالجة والتصنيع، والتجارب التطبيقية لفهم ومعالجة تحديات العملاء بدقة.'
                    : 'Our technical approach connects ingredient functionality, processing parameters and application trials to understand and address specific customer challenges.'}
                </p>
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
                <Link to="/capabilities" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10263B', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>{isAr ? 'استكشف البحث والتطوير' : 'Explore R&D capability'}</span>
                  <ArrowRight size={14} color="#00A84F" />
                </Link>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(16, 38, 59, 0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Settings2 size={24} />
                </div>
                <h3 style={{ fontSize: '1.35rem', color: '#10263B', fontWeight: 800, marginBottom: '0.4rem' }}>
                  {isAr ? 'التميز الصناعي والتصنيع' : 'Manufacturing Excellence'}
                </h3>
                <h4 style={{ fontSize: '0.95rem', color: '#00A84F', fontWeight: 700, marginBottom: '1rem' }}>
                  {isAr ? 'ترجمة خبرات التركيب إلى إنتاج صناعي موثوق.' : 'Translate formulation expertise into production.'}
                </h4>
                <p style={{ color: '#556976', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                  {isAr
                    ? 'تدعم قدراتنا التصنيعية إنتاج أنظمة الأغذية الوظيفية، ومنتجات غذائية نهائية مختارة، وشراكات تصنيع تعاقدي مختارة ومدروسة استراتيجياً.'
                    : 'Our manufacturing capabilities support functional food systems, selected finished products and strategically approved contract-manufacturing collaborations.'}
                </p>
              </div>
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9' }}>
                <Link to="/capabilities" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10263B', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>{isAr ? 'استكشف التميز التصنيعي' : 'Explore manufacturing'}</span>
                  <ArrowRight size={14} color="#00A84F" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. TAILORED FORMULATION EXPERTISE                   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '5.5rem 0', background: '#FFFFFF' }} ref={formulationRef}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', display: 'block', marginBottom: '0.75rem' }}>
              {isAr ? 'خبرات التركيبات المخصصة' : 'TAILORED FORMULATION EXPERTISE'}
            </span>
            <h2 style={{ fontSize: '2.6rem', color: '#10263B', fontWeight: 800, lineHeight: 1.25, margin: '0 0 1.25rem' }}>
              {isAr ? (
                <>مصممة للأداء المتميز.<br /><span style={{ color: '#00A84F' }}>مدروسة لتحقيق أعلى قيمة.</span></>
              ) : (
                <>Designed for performance.<br /><span style={{ color: '#00A84F' }}>Considered for value.</span></>
              )}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#556976', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              {isAr
                ? 'يتطلب تطوير التركيبات الغذائية تحقيق التوازن الدقيق بين الخواص الوظيفية، وظروف المعالجة الصناعية، والأهداف التجارية المستهدفة. تجمع مجموعة AWA بين توريد المكونات والتطوير التطبيقي لتقييم البدائل المناسبة، وتحسين أنظمة المكونات، ومساعدة العملاء على تحقيق الأداء المحدد وأهداف التكلفة.'
                : 'Food formulation requires the right balance between functionality, process conditions and commercial targets. AWA combines ingredient sourcing and application development to assess suitable alternatives, optimize ingredient systems and support customers in meeting defined performance and cost objectives.'}
            </p>
            <Link to="/capabilities" className="awa-editorial-btn-primary" style={{ display: 'inline-flex', padding: '0.85rem 2rem' }}>
              <span>{isAr ? 'استكشف التركيبات المخصصة ↗' : 'Explore customized formulations ↗'}</span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. COMMITMENT TO INTERNATIONAL STANDARDS (V9)      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="standards-showcase section" id="certifications-home" style={{ padding: '5.5rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }} ref={standardsRef}>
        <div className="container">
          <div className="standards-top reveal-fade-up" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'flex-start', marginBottom: '3rem' }}>
            <div>
              <div className="eyebrow">{isAr ? 'الالتزام بالمعايير الدولية' : 'COMMITMENT TO INTERNATIONAL STANDARDS'}</div>
              <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '1rem', color: '#10263B' }}>
                {isAr ? (
                  <>المعايير الدولية.<br /><span className="awa-highlight-green">الجودة في الممارسة اليومية.</span></>
                ) : (
                  <>International Standards.<br /><span className="awa-highlight-green">Quality in Practice.</span></>
                )}
              </h2>
              <p className="section-desc" style={{ maxWidth: '680px', color: '#556976' }}>
                {isAr
                  ? 'في مجموعة AWA، تعد الجودة وسلامة الغذاء والعمليات المسؤولة ركائز أساسية لطريقة عملنا. تدعم عملياتنا التصنيعية أنظمة إدارة معترف بها، وشهادات منتجات، وتسجيلات رقابية، مما يعكس التزاماً ثابتاً بالتجانس والانضباط التشغيلي والتحسين المستمر.'
                  : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing operations are supported by recognized management systems, product certifications and relevant regulatory registrations, reflecting a commitment to consistency, operational discipline and continual improvement.'}
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 168, 79, 0.08) 0%, rgba(16, 38, 59, 0.05) 100%)',
              border: '1px solid rgba(0, 168, 79, 0.25)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ color: '#00A84F', fontSize: '1.5rem', lineHeight: 1 }}>✳</span>
                <strong style={{ fontSize: '1.1rem', color: '#10263B', fontWeight: 800 }}>
                  {isAr ? 'جودة مدعومة بأنظمة معترف بها عالمياً' : 'Quality, supported by recognized systems.'}
                </strong>
              </div>
              <span style={{ fontSize: '0.9rem', color: '#556976', fontWeight: 600 }}>
                {isAr ? 'سلامة الغذاء · الجودة · البيئة · الأفراد' : 'Food Safety · Quality · Environment · People'}
              </span>
            </div>
          </div>

          <div className="reveal-fade-up" style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', marginBottom: '1.25rem' }}>
              {isAr ? 'الشهادات الدولية' : 'INTERNATIONAL CERTIFICATIONS'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {certifications.filter(c => c.group === 'international').map((cert) => (
                <div 
                  key={cert.id} 
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 16px rgba(16, 38, 59, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '160px'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00A84F', display: 'block', marginBottom: '0.4rem' }}>
                      {cert.type}
                    </span>
                    <strong style={{ fontSize: '1.25rem', color: '#10263B', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
                      {cert.code}
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#556976', lineHeight: 1.5, margin: 0 }}>
                    {cert.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-fade-up" style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#10263B', marginBottom: '1.25rem' }}>
              {isAr ? 'التسجيل والإدراج الرقابي' : 'REGULATORY REGISTRATION & LISTING'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {certifications.filter(c => c.group === 'regulatory').map((cert) => (
                <div 
                  key={cert.id} 
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 16px rgba(16, 38, 59, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '160px'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10263B', display: 'block', marginBottom: '0.4rem' }}>
                      {cert.type}
                    </span>
                    <strong style={{ fontSize: '1.2rem', color: '#10263B', fontWeight: 800, display: 'block', marginBottom: '0.5rem' }}>
                      {cert.code}
                    </strong>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#556976', lineHeight: 1.5, margin: 0 }}>
                    {cert.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-fade-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #E2E8F0' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
              {isAr 
                ? 'تخضع مطالبات منشأة AWA للحلول الغذائية والمنتجات المعتمدة لتأكيد النطاق والصلاحية السارية.'
                : 'AWA Food Solutions facility and certified-product claims require confirmation of current scope and validity before publication.'}
            </span>
            <Link to="/quality" className="awa-editorial-btn-secondary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}>
              <span>{isAr ? 'استكشف الجودة والاعتمادات' : 'Explore Quality & Certifications'}</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. RESPONSIBLE GROWTH (V9 Exact Pillars)            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '5.5rem 0', background: '#FFFFFF' }} ref={growthRef}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', display: 'block', marginBottom: '0.5rem' }}>
                {isAr ? 'النمو المسؤول' : 'RESPONSIBLE GROWTH'}
              </span>
              <h2 style={{ fontSize: '2.4rem', color: '#10263B', fontWeight: 800, margin: '0 0 1rem' }}>
                {isAr ? (
                  <>نمو مسؤول.<br /><span style={{ color: '#00A84F' }}>أثر دائم ومستمر.</span></>
                ) : (
                  <>Responsible Growth.<br /><span style={{ color: '#00A84F' }}>Lasting Impact.</span></>
                )}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#556976', lineHeight: 1.7, margin: 0 }}>
                {isAr
                  ? 'نؤمن بأن النمو طويل الأجل ينبع من قرارات مسؤولة عبر عملياتنا وسلاسل القيمة لدينا. يركز نهجنا على ممارسات الموردين، وكفاءة الموارد، والابتكار المسؤول للمنتجات، ورفاهية أفرادنا، مدعوماً بالتزام مستمر بالتحسين.'
                  : 'We believe long-term growth comes from responsible decisions across our operations and value chain. Our approach focuses on supplier practices, resource efficiency, responsible product innovation and the wellbeing of our people, supported by a commitment to continuous improvement.'}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', paddingTop: '1rem' }}>
              <Link to="/sustainability" className="awa-editorial-btn-secondary">
                <span>{isAr ? 'استكشف الاستدامة ↗' : 'Explore sustainability ↗'}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#00A84F', marginBottom: '0.5rem' }}>01</div>
              <h3 style={{ fontSize: '1.2rem', color: '#10263B', fontWeight: 800, marginBottom: '0.5rem' }}>
                {isAr ? 'التوريد المسؤول' : 'Responsible Sourcing'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.6, margin: 0 }}>
                {isAr ? 'تقييم الموردين وبناء علاقات توريد موثوقة ومستدامة للمكونات.' : 'Supplier evaluation and dependable ingredient relationships.'}
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#00A84F', marginBottom: '0.5rem' }}>02</div>
              <h3 style={{ fontSize: '1.2rem', color: '#10263B', fontWeight: 800, marginBottom: '0.5rem' }}>
                {isAr ? 'كفاءة الموارد' : 'Resource Efficiency'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.6, margin: 0 }}>
                {isAr ? 'إدارة استهلاك الطاقة والمياه والمواد وتقليل الهدر والمخلفات.' : 'Energy, water, materials and waste management.'}
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#00A84F', marginBottom: '0.5rem' }}>03</div>
              <h3 style={{ fontSize: '1.2rem', color: '#10263B', fontWeight: 800, marginBottom: '0.5rem' }}>
                {isAr ? 'الابتكار المسؤول' : 'Responsible Innovation'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.6, margin: 0 }}>
                {isAr ? 'كفاءة استخدام المكونات وتطوير تركيبات واعية بظروف المعالجة.' : 'Ingredient efficiency and process-aware formulation.'}
              </p>
            </div>

            <div style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#00A84F', marginBottom: '0.5rem' }}>04</div>
              <h3 style={{ fontSize: '1.2rem', color: '#10263B', fontWeight: 800, marginBottom: '0.5rem' }}>
                {isAr ? 'الأفراد والسلامة' : 'People & Safety'}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#556976', lineHeight: 1.6, margin: 0 }}>
                {isAr ? 'بيئات عمل آمنة، برامج تدريب مستمرة، ومسؤولية تشغيلية واضحة.' : 'Safe workplaces, training and accountability.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. INSIGHTS & NEWS (Exact V9 Content)               */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" style={{ padding: '5.5rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }} ref={insightsRef}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#00A84F', display: 'block', marginBottom: '0.5rem' }}>
                {isAr ? 'المقالات والأخبار' : 'INSIGHTS & NEWS'}
              </span>
              <h2 style={{ fontSize: '2.4rem', color: '#10263B', fontWeight: 800, margin: '0 0 1rem' }}>
                {isAr ? (
                  <>معرفة تدعم <span style={{ color: '#00A84F' }}>التقدم والنمو.</span></>
                ) : (
                  <>Knowledge that <span style={{ color: '#00A84F' }}>supports progress.</span></>
                )}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#556976', lineHeight: 1.7, margin: 0 }}>
                {isAr
                  ? 'توضح المعرفة التقنية، وقصص الابتكار المعتمدة، والتطورات المؤسسية كيف تطبق AWA خبراتها عبر قطاعات صناعة الأغذية المختلفة.'
                  : 'Technical knowledge, approved innovation stories and corporate developments demonstrate how AWA applies its expertise across the food industry.'}
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', paddingTop: '1rem' }}>
              <Link to="/knowledge" style={{ fontSize: '1rem', fontWeight: 700, color: '#00A84F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>{isAr ? 'استكشف المقالات والأخبار ↗' : 'Explore Insights & News ↗'}</span>
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
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
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
      <section className="section" style={{ padding: '5.5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }} ref={marqueeRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {isAr ? 'الشركاء والشركات المشتركة' : 'STRATEGIC JOINT VENTURES & GLOBAL PRINCIPALS'}
            </div>
            <h2 className="section-title" style={{ fontSize: '2.4rem', color: '#10263B' }}>
              {isAr ? 'ربط الخبرة العالمية بالقدرة الصناعية المحلية' : 'Connecting International Expertise with Local Scale'}
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px', color: '#556976' }}>
              {isAr
                ? 'توسع المشاريع المشتركة الدولية والعلاقات الراسخة مع كبرى الشركات المصنعة وصول AWA إلى تقنيات الأغذية المتخصصة والمعرفة التطبيقية المتقدمة.'
                : "International joint ventures and established principal relationships extend AWA's access to specialist food technologies, technical knowledge and collaborative development opportunities."}
            </p>
          </div>

          {/* Joint Ventures Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {jointVentures.map((jv) => (
              <div 
                key={jv.name}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '18px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#00A84F' }}>
                      {jv.region}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Joint Venture</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: '#10263B', fontWeight: 800, marginBottom: '0.3rem' }}>
                    {jv.name}
                  </h3>
                  <h4 style={{ fontSize: '0.9rem', color: '#10263B', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {jv.category}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#556976', lineHeight: 1.6, margin: 0 }}>
                    {jv.desc}
                  </p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
                  <a href={jv.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00A84F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span>{isAr ? 'زيارة الموقع الإلكتروني ↗' : 'Visit website ↗'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-fade-up">
            <PartnerMarquee items={CLIENT_LOGOS} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 10. AUTHENTIC CAPABILITY GALLERY                   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="horizontal-gallery-section" ref={galleryRef} style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" style={{ marginBottom: '2.5rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {isAr ? 'البنية التحتية والمرافق' : 'FACILITIES & CAPABILITIES'}
            </div>
            <h2 className="section-title" style={{ color: '#10263B' }}>
              {isAr ? 'علوم أغذية تطبيقية، مرافق متقدمة وقدرات إنتاجية' : 'Applied Food Science, Advanced Facilities & Production Scale'}
            </h2>
          </div>
        </div>

        <div className="horizontal-gallery-track">
          {[
            { src: '/images/pages/industries/image33.jpg', alt: 'AWA Industrial Compounding Plant, Borg El-Arab' },
            { src: '/images/v9/v8/rd-lab.webp', alt: 'AWA R&D Application Laboratory' },
            { src: '/images/pages/home/food-chemistry-formulation.jpg', alt: 'Food Chemistry & Rheology Testing' },
            { src: '/images/v9/v7/dairy-cheese.webp', alt: 'Processed Cheese & Dairy Applications' },
            { src: '/images/pages/solutions/raw-materials-warehouse.jpg', alt: 'Temperature Controlled Warehousing' },
            { src: '/images/v9/v7/meat-seafood.webp', alt: 'Meat & Savory Formulation Systems' },
            { src: '/images/pages/solutions/cold-chain-logistics-truck.jpg', alt: 'Cold-Chain Refrigerated Distribution Fleet' },
            { src: '/images/v9/v7/bakery.webp', alt: 'Bakery & Confectionery Applications' },
            { src: '/images/v9/v8/industrial-plant.webp', alt: 'Precision High-Capacity Blending Line' },
            { src: '/images/v9/v7/beverages.webp', alt: 'Beverage & Dispersion Systems' },
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
            <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 800 }}>
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
