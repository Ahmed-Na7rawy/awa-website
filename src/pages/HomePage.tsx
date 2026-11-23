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
  ExternalLink,
  Factory,
  Microscope,
  Building2,
  MapPin,
  CheckCircle2,
  ChevronRight
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

/* Verified Industrial Facilities & Infrastructure Dossier */
const facilitiesData = [
  {
    id: 'borg-el-arab',
    number: '01',
    nameEn: 'Borg El-Arab Compounding & Manufacturing Complex',
    nameAr: 'مجمع الخلط والتصنيع الصناعي - برج العرب',
    locationEn: 'Alexandria, Egypt · Borg El-Arab Industrial Zone',
    locationAr: 'الإسكندرية، مصر · المنطقة الصناعية برج العرب',
    roleEn: 'High-Capacity Automated Compounding & Emulsifying Salt Synthesis',
    roleAr: 'خلط وتصنيع صناعي آلي عالي الطاقة وأملاح استحلاب متخصصة',
    descEn: 'State-of-the-art industrial processing complex dedicated to functional food blending, proprietary emulsifying salt systems, and food ingredient formulations. Equipped with computerized recipe management and hygienic cleanroom production.',
    descAr: 'مجمع تصنيع صناعي متطور مخصص لخلط المكونات الوظيفية، وأنظمة أملاح الاستحلاب الخاصة، وتركيبات المكونات الغذائية، مجهز بإدارة رقمية للوصفات وخطوط إنتاج مطابقة لمعايير النظافة العالية.',
    specsEn: ['24,000 MT Annual Compounding', 'Automated Micro-Dosing Systems', 'Cleanroom-Grade Processing'],
    specsAr: ['طاقة سنوية 24,000 طن خلط', 'أنظمة جرعات دقيقة مؤتمتة', 'مناطق إنتاج بمعايير نظافة متقدمة'],
    image: v9Assets.v7Assets.factory,
  },
  {
    id: 'applied-rd-lab',
    number: '02',
    nameEn: 'Applied R&D & Texture Analysis Laboratories',
    nameAr: 'مختبرات البحث والتطوير التطبيقي وتحليل القوام',
    locationEn: 'Cairo & Alexandria Innovation Centers',
    locationAr: 'مراكز الابتكار والبحث - القاهرة والإسكندرية',
    roleEn: 'Food Matrix Characterization, Rheology & Shelf-Life Diagnostics',
    roleAr: 'توصيف مصفوفة الأغذية، قياسات الريولوجيا وفحوصات الصلاحية',
    descEn: 'Advanced analytical suite configured for precision texture profiling, viscosity curves, emulsion stability monitoring, and water activity analysis across dairy, meat, bakery and beverage food systems.',
    descAr: 'مختبرات تحليلية متقدمة لقياس منحنيات اللزوجة، وتحليل خواص القوام، ومراقبة ثبات المستحلبات، وفحوصات النشاط المائي عبر مصفوفات الألبان واللحوم والمخبوزات والمشروبات.',
    specsEn: ['Brookfield Viscometry & Rheology', 'Texture Profile Analyzer (TPA)', 'Accelerated Shelf-Life Incubators'],
    specsAr: ['أجهزة قياس اللزوجة والريولوجيا', 'محلل خواص القوام TPA', 'حاضنات اختبارات الصلاحية المسرعة'],
    image: '/images/pages/home/sensory-rheology-lab.jpg',
  },
  {
    id: 'pilot-plants',
    number: '03',
    nameEn: 'Food Application Pilot Testing Facilities',
    nameAr: 'المصانع التجريبية لتطبيقات الأغذية وتجارب التوسع',
    locationEn: 'Dedicated Pilot-Scale Production Facilities',
    locationAr: 'مرافق إنتاج تجريبية مخصصة للتحجيم الصناعي',
    roleEn: 'Pilot Scale-Up, High-Shear Emulsification & Thermal Trials',
    roleAr: 'محاكاة التوسع الصناعي، الخلط عالي القص والتجارب الحرارية',
    descEn: 'Semi-industrial pilot plant equipped with pilot-scale Stephan cookers, vacuum bowl cutters, high-pressure homogenizers, and UHT simulators to replicate real manufacturing environments before full commercial scaling.',
    descAr: 'مصنع تجريبي نصف صناعي مجهز بطباخات ستيفان التجريبية، وقواطع مفرغة، ومجانسات الضغط العالي لمحاكاة ظروف التشغيل في المصانع قبل بدء الإنتاج التجاري الموسع.',
    specsEn: ['Pilot Stephan Cookers', 'High-Shear Emulsification Lines', 'Thermal Scale-Up Simulation'],
    specsAr: ['طباخات ستيفان التجريبية', 'خطوط خلط واستحلاب عالية القص', 'محاكاة المعاملات الحرارية والتوسع'],
    image: '/images/pages/home/pilot-plant-dairy-testing.jpg',
  },
  {
    id: 'cold-chain-logistics',
    number: '04',
    nameEn: '15,000 MT Cold-Chain & Global Logistics Hub',
    nameAr: 'مركز الخدمات اللوجستية وسلسلة التبريد (15,000 طن)',
    locationEn: 'Strategic Seaport Proximity · Dekheila & Alexandria Ports',
    locationAr: 'موقع استراتيجي قرب موانئ الإسكندرية والدخيلة',
    roleEn: 'Temperature-Controlled Storage & Resilient Supply Chain Gateway',
    roleAr: 'تخزين مضبوط حرارياً وبوابة موثوقة لسلسلة التوريد الإقليمية',
    descEn: 'Large-scale warehousing infrastructure maintaining strict climate control, cold-chain integrity, and automated batch traceability. Strategically positioned to ensure continuous availability and rapid regional dispatch.',
    descAr: 'بنية تحتية تخزينية متكاملة تطبق رقابة مناخية صارمة، وتضمن سلامة سلسلة التبريد وتتبع الشحنات، بموقع استراتيجي يضمن استمرارية الإمدادات وسرعة التوزيع الإقليمي.',
    specsEn: ['15,000 MT Storage Capacity', 'Multi-Temp Regimes (-18°C to +20°C)', 'Full Batch Traceability & Port Link'],
    specsAr: ['طاقة تخزينية 15,000 طن', 'نطاقات حرارية متعددة (-18 إلى +20°C)', 'تتبع كامل للشحنات وربط مباشر بالموانئ'],
    image: '/images/pages/home/logistics.jpg',
  }
];

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

  // State for interactive facilities showcase
  const [activeFacility, setActiveFacility] = useState(0);

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
      {/* 2. FOOD INDUSTRY SOLUTIONS — MODERN ARCHITECTURAL SHOWCASE */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section" id="solutions" style={{ scrollMarginTop: '80px' }} ref={explorerRef}>
        <div className="wrap">
          <div className="awa-editorial-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '44px' }}>
            <div style={{ maxWidth: '780px' }}>
              <span className="awa-editorial-kicker">
                {isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}
              </span>
              <h2 className="awa-editorial-title" style={{ margin: '0 0 14px 0' }}>
                {isAr ? (
                  <>محفظة حلول الأغذية الصناعية.<br /><span style={{ color: 'var(--awa-green-accent)' }}>تطبيقات متخصصة وأداء مثبت.</span></>
                ) : (
                  <>Industrial Food Solutions.<br /><span style={{ color: 'var(--awa-green-accent)' }}>Engineered for Processing Excellence.</span></>
                )}
              </h2>
              <p className="awa-editorial-desc">
                {isAr
                  ? 'نقدم مكونات غذائية وأنظمة وظيفية وتركيبات مخصصة مصممة حول متطلبات التصنيع الخاصة. حلول متطورة مصممة لدعم كفاءة التشغيل والجودة العالية عبر 6 قطاعات تصنيعية رئيسية.'
                  : 'We provide food ingredients, functional systems and customized formulations designed around specific manufacturing requirements. Engineered to optimize texture, stability and yield across six core food processing sectors.'}
              </p>
            </div>
            <div>
              <Link 
                to="/solutions/catalogue" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--awa-surface-offwhite)',
                  color: 'var(--awa-navy-main)',
                  border: '1px solid var(--awa-border-hairline)',
                  padding: '12px 22px',
                  borderRadius: '9999px',
                  fontWeight: 750,
                  fontSize: '13.5px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>{isAr ? 'كتالوج المنتجات والمكونات ↗' : 'Browse Product Catalogue ↗'}</span>
              </Link>
            </div>
          </div>

          {/* Single Modern Industry Grid */}
          <div className="awa-industry-exhibition-grid">
            {industryData.map((o, idx) => {
              const arInfo = industryArabicTitles[o.id];
              const cardTitle = (isAr && arInfo) ? arInfo.title : o.title;
              const cardDesc = (isAr && arInfo) ? arInfo.desc : o.desc;
              const assetKey = (o.id === 'bakery' ? 'bakery' : o.id === 'culinary' ? 'culinary' : o.id === 'snacks' ? 'snacks' : o.id) as keyof typeof v9Assets.v7Assets;
              const photoSrc = (v9Assets.v7Assets as Record<string, string>)[assetKey] || v9Assets.v7Assets.factory;
              const isLead = idx === 0;

              return (
                <Link
                  key={o.id}
                  className={`awa-industry-frame ${isLead ? 'is-prominent-lead' : ''}`}
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
                      {isLead 
                        ? (isAr ? 'القطاع الرئيسي · حلول الألبان' : 'FLAGSHIP SECTOR · DAIRY & CHEESE') 
                        : (isAr ? `قطاع تطبيقي 0${idx + 1}` : `SECTOR 0${idx + 1}`)}
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

          <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--awa-border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontSize: '13.5px', color: 'var(--awa-charcoal-muted)' }}>
              {isAr 
                ? 'هل تبحث عن أنظمة وظيفية مخصصة أو تركيبات خاصة؟ تواصل مع خبرائنا التطبيقيين.' 
                : 'Need custom functional systems or specific processing support? Consult our application specialists.'}
            </span>
            <Link 
              to="/solutions" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '14px', 
                fontWeight: 800, 
                color: 'var(--awa-green-accent)',
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
      <section className="awa-editorial-section is-tint" ref={differenceRef}>
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
      {/* 5. DESIGNED FOR PERFORMANCE — FORMULATION CONSOLE   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-formulation-console-section" ref={formulationRef}>
        <div className="wrap">
          <div className="awa-formulation-console-layout">
            {/* Left: Authority Narrative & Analytical Lab Card */}
            <div className="awa-formulation-narrative-col">
              <span className="awa-editorial-kicker" style={{ color: '#34D399' }}>
                {isAr ? 'خبرات التركيبات المخصصة' : 'TAILORED FORMULATION EXPERTISE'}
              </span>
              <h2 className="awa-formulation-console-title">
                {isAr ? (
                  <>مصممة للأداء المتميز.<br /><span style={{ color: '#34D399' }}>مدروسة لتحقيق أعلى قيمة.</span></>
                ) : (
                  <>Designed for performance.<br /><span style={{ color: '#34D399' }}>Considered for value.</span></>
                )}
              </h2>
              <p className="awa-formulation-console-desc">
                {isAr
                  ? 'يتطلب تطوير التركيبات الغذائية تحقيق التوازن الدقيق بين الخواص الوظيفية، وظروف المعالجة الصناعية، والأهداف التجارية المستهدفة. تجمع مجموعة AWA بين توريد المكونات والتطوير التطبيقي لتقييم البدائل المناسبة، وتحسين أنظمة المكونات، ومساعدة العملاء على تحقيق الأداء المحدد وأهداف التكلفة.'
                  : 'Food formulation requires the right balance between functionality, process conditions and commercial targets. AWA combines ingredient sourcing and application development to assess suitable alternatives, optimize ingredient systems and support customers in meeting defined performance and cost objectives.'}
              </p>
              
              <div style={{ marginBottom: '36px' }}>
                <Link 
                  to="/capabilities/formulations" 
                  className="awa-formulation-cta-btn"
                >
                  <span>{isAr ? 'استكشف التركيبات المخصصة ↗' : 'Explore customized formulations ↗'}</span>
                </Link>
              </div>

              {/* Lab Bench Photographic Visual Frame */}
              <div className="awa-formulation-lab-card">
                <img 
                  src="/images/pages/home/food-chemistry-formulation.jpg" 
                  alt="AWA Food Chemistry and Formulation Laboratory Matrix Testing"
                  loading="lazy" 
                />
                <div className="awa-formulation-lab-overlay">
                  <div className="awa-formulation-status-pill">
                    <span className="awa-pulse-dot" />
                    <span>{isAr ? 'مصفوفة بحث وتطوير معتمدة' : 'ANALYTICAL R&D MATRIX'}</span>
                  </div>
                  <div className="awa-formulation-lab-spec">
                    {isAr ? 'اختبارات ريولوجيا وقوام · ثبات المستحلبات · ملاءمة خطوط الإنتاج' : 'Brookfield Viscometry · TA.XT Texture Profile · Emulsion Stability'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: High-Contrast 2x2 Technical Engineering Matrix */}
            <div className="awa-formulation-quad-grid">
              {/* 01 · RHEOLOGY */}
              <div className="awa-console-quad-card">
                <div className="awa-console-quad-header">
                  <span className="awa-console-tag">01 · RHEOLOGY</span>
                  <Layers size={18} className="awa-console-icon" />
                </div>
                <h3 className="awa-console-quad-title">
                  {isAr ? 'القوام والبنية الوظيفية' : 'Texture & Rheology Matrix'}
                </h3>
                <p className="awa-console-quad-desc">
                  {isAr 
                    ? 'التحكم في اللزوجة، التماسك، الانصهار، وقابلية الفرد والشعور بالفم.' 
                    : 'Control firmness, viscosity, binding, spreadability, melting and mouthfeel.'}
                </p>
                <div className="awa-console-param-chips">
                  <span>{isAr ? 'التحكم باللزوجة' : 'Viscosity Curves'}</span>
                  <span>{isAr ? 'قوة الجل والتماسك' : 'Gel Firmness'}</span>
                  <span>{isAr ? 'الشعور بالفم' : 'Mouthfeel Profile'}</span>
                </div>
              </div>

              {/* 02 · STABILITY */}
              <div className="awa-console-quad-card">
                <div className="awa-console-quad-header">
                  <span className="awa-console-tag">02 · STABILITY</span>
                  <ShieldCheck size={18} className="awa-console-icon" />
                </div>
                <h3 className="awa-console-quad-title">
                  {isAr ? 'الثبات وحفظ الصلاحية' : 'Phase Stability & Shelf Life'}
                </h3>
                <p className="awa-console-quad-desc">
                  {isAr 
                    ? 'ثبات الاستحلاب، منع النضح والانفصال أثناء المعالجة وفترات التخزين.' 
                    : 'Manage separation, oxidation, consistency and performance through processing and storage.'}
                </p>
                <div className="awa-console-param-chips">
                  <span>{isAr ? 'ثبات الاستحلاب' : 'Emulsion Integrity'}</span>
                  <span>{isAr ? 'مقاومة النضح' : 'Anti-Syneresis'}</span>
                  <span>{isAr ? 'مقاومة الأكسدة' : 'Oxidation Barrier'}</span>
                </div>
              </div>

              {/* 03 · PROCESSING */}
              <div className="awa-console-quad-card">
                <div className="awa-console-quad-header">
                  <span className="awa-console-tag">03 · PROCESSING</span>
                  <TrendingUp size={18} className="awa-console-icon" />
                </div>
                <h3 className="awa-console-quad-title">
                  {isAr ? 'إنتاجية المعالجة الصناعية' : 'Yield & Process Consistency'}
                </h3>
                <p className="awa-console-quad-desc">
                  {isAr 
                    ? 'دعم كفاءة التشغيل، زيادة إنتاجية الطهي، ومقاومة إجهاد القص الميكانيكي.' 
                    : 'Support processing consistency, ingredient use, cooking yield and production efficiency.'}
                </p>
                <div className="awa-console-param-chips">
                  <span>{isAr ? 'إنتاجية الطهي' : 'Cooking Yield'}</span>
                  <span>{isAr ? 'مقاومة إجهاد القص' : 'Shear Resistance'}</span>
                  <span>{isAr ? 'استقرار خطوط الإنتاج' : 'Thermal Tolerance'}</span>
                </div>
              </div>

              {/* 04 · ECONOMICS */}
              <div className="awa-console-quad-card">
                <div className="awa-console-quad-header">
                  <span className="awa-console-tag">04 · ECONOMICS</span>
                  <Coins size={18} className="awa-console-icon" />
                </div>
                <h3 className="awa-console-quad-title">
                  {isAr ? 'الجدوى والتكلفة بالاستخدام' : 'Formulation Economics'}
                </h3>
                <p className="awa-console-quad-desc">
                  {isAr 
                    ? 'تحقيق الأداء المحدد للمنتج بأفضل تكلفة عبر الاختيار الدقيق للمكونات.' 
                    : 'Achieve the required product performance at a suitable cost through ingredient selection and formulation optimization.'}
                </p>
                <div className="awa-console-param-chips">
                  <span>{isAr ? 'التكلفة بالاستخدام' : 'Cost-in-Use'}</span>
                  <span>{isAr ? 'إعادة هندسة الوصفات' : 'Recipe Re-engineering'}</span>
                  <span>{isAr ? 'بدائل الخامات' : 'Ingredient Optimization'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. INTERNATIONAL STANDARDS — CORPORATE SHOWCASE     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-editorial-section" id="certifications-home" ref={standardsRef}>
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
      <section className="awa-editorial-section is-tint" ref={growthRef}>
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
      <section className="awa-editorial-section" ref={insightsRef}>
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
      <section className="awa-editorial-section is-tint" ref={marqueeRef}>
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
      {/* 10. FACILITIES & CAPABILITIES — ARCHITECTURAL DOSSIER */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-facilities-dossier-section" ref={galleryRef}>
        <div className="wrap">
          <div className="awa-editorial-header" style={{ marginBottom: '40px' }}>
            <div style={{ maxWidth: '840px' }}>
              <span className="awa-editorial-kicker">{isAr ? 'البنية التحتية والمرافق' : 'FACILITIES & CAPABILITIES'}</span>
              <h2 className="awa-editorial-title" style={{ margin: '0 0 14px 0' }}>
                {isAr 
                  ? 'علوم أغذية تطبيقية، مرافق متقدمة وقدرات إنتاجية' 
                  : 'Applied Food Science, Advanced Facilities & Production Scale'}
              </h2>
              <p className="awa-editorial-desc">
                {isAr 
                  ? 'بنية تحتية متكاملة تشمل مجمع تصنيع وخلط آلي ببرج العرب، مختبرات تحليل القوام والريولوجيا، مصانع تجريبية للتحجيم الصناعي، ومركز لوجستي بسعة 15,000 طن متري لضمان الجودة واستمرارية الإمداد.'
                  : 'Integrated industrial infrastructure encompassing automated compounding in Borg El-Arab, specialized rheology and texture profiling labs, pilot plants for factory-scale simulation, and a 15,000 MT cold-chain logistics hub.'}
              </p>
            </div>
          </div>

          {/* Master Architectural Dossier Grid */}
          <div className="awa-facilities-dossier-layout">
            {/* Left: Featured Active Facility Frame */}
            {(() => {
              const current = facilitiesData[activeFacility] || facilitiesData[0];
              const title = isAr ? current.nameAr : current.nameEn;
              const location = isAr ? current.locationAr : current.locationEn;
              const role = isAr ? current.roleAr : current.roleEn;
              const desc = isAr ? current.descAr : current.descEn;
              const specs = isAr ? current.specsAr : current.specsEn;

              return (
                <div className="awa-facility-featured-frame">
                  <div className="awa-facility-photo-viewport">
                    <img 
                      src={current.image} 
                      alt={title} 
                      key={current.id}
                      className="awa-facility-featured-img"
                    />
                    <div className="awa-facility-top-telemetry">
                      <span className="awa-facility-num-pill">HUB {current.number} / 04</span>
                      <span className="awa-facility-loc-pill">
                        <MapPin size={13} style={{ marginRight: isAr ? 0 : '4px', marginLeft: isAr ? '4px' : 0 }} />
                        {location}
                      </span>
                    </div>
                  </div>

                  <div className="awa-facility-dossier-body">
                    <div className="awa-facility-role-badge">
                      <Factory size={14} style={{ marginRight: isAr ? 0 : '6px', marginLeft: isAr ? '6px' : 0 }} />
                      <span>{role}</span>
                    </div>
                    <h3 className="awa-facility-master-title">{title}</h3>
                    <p className="awa-facility-master-desc">{desc}</p>

                    <div className="awa-facility-specs-grid">
                      {specs.map((spec, sIdx) => (
                        <div key={sIdx} className="awa-facility-spec-chip">
                          <CheckCircle2 size={13} className="awa-spec-chip-icon" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--awa-border-hairline)' }}>
                      <Link 
                        to="/capabilities" 
                        className="awa-facility-explore-link"
                      >
                        <span>{isAr ? 'استكشف كافة القدرات والمرافق الصناعية ↗' : 'Explore full infrastructure & capabilities ↗'}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Right: Interactive Facility Hub Selector List */}
            <div className="awa-facility-nav-stack">
              {facilitiesData.map((fac, idx) => {
                const isActive = activeFacility === idx;
                const facTitle = isAr ? fac.nameAr : fac.nameEn;
                const facLoc = isAr ? fac.locationAr : fac.locationEn;
                const facRole = isAr ? fac.roleAr : fac.roleEn;

                return (
                  <button
                    key={fac.id}
                    type="button"
                    onClick={() => setActiveFacility(idx)}
                    className={`awa-facility-nav-card ${isActive ? 'is-active' : ''}`}
                    aria-selected={isActive}
                    aria-label={`Select facility ${fac.number}: ${facTitle}`}
                  >
                    <div className="awa-facility-thumb-box">
                      <img src={fac.image} alt={facTitle} loading="lazy" />
                      <span className="awa-facility-thumb-num">{fac.number}</span>
                    </div>
                    <div className="awa-facility-nav-info">
                      <span className="awa-facility-nav-meta">
                        {facLoc}
                      </span>
                      <h4 className="awa-facility-nav-heading">{facTitle}</h4>
                      <p className="awa-facility-nav-sub">{facRole}</p>
                    </div>
                    <div className="awa-facility-nav-arrow" aria-hidden="true">
                      <ChevronRight size={16} />
                    </div>
                  </button>
                );
              })}
            </div>
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

    </div>
  );
};
