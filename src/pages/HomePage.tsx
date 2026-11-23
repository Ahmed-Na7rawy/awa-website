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

  // State for Section 1 filter tabs
  const [exploreTab, setExploreTab] = useState<'industry' | 'challenge' | 'family'>('industry');

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

  // Symmetrical 3x2 Grid items for Section 1
  const industryGridItems = industryData.map((o, idx) => {
    const arInfo = industryArabicTitles[o.id];
    const cardTitle = (isAr && arInfo) ? arInfo.title : o.title;
    const cardDesc = (isAr && arInfo) ? arInfo.desc : o.desc;
    const assetKey = (o.id === 'bakery' ? 'bakery' : o.id === 'culinary' ? 'culinary' : o.id === 'snacks' ? 'snacks' : o.id) as keyof typeof v9Assets.v7Assets;
    const photoSrc = (v9Assets.v7Assets as Record<string, string>)[assetKey] || v9Assets.v7Assets.factory;
    return {
      id: o.id,
      title: cardTitle,
      desc: cardDesc,
      image: photoSrc,
      eyebrow: isAr ? `قطاع تطبيقي 0${idx + 1}` : `SECTOR 0${idx + 1}`,
      link: `/solutions/industry/${o.id}`
    };
  });

  const challengeGridImages = [
    '/images/pages/home/food-chemistry-formulation.jpg',
    '/images/pages/home/sensory-rheology-lab.jpg',
    v9Assets.v7Assets.factory,
    v9Assets.v7Assets.sourcing,
    v9Assets.v8Assets['rd-lab'],
    '/images/pages/home/pilot-plant-dairy-testing.jpg'
  ];

  const challengeGridItems = challengeData.slice(0, 6).map((c, idx) => ({
    id: c.id,
    title: c.title,
    desc: c.desc,
    image: challengeGridImages[idx] || v9Assets.v7Assets.factory,
    eyebrow: isAr ? `تحدٍ صناعي 0${idx + 1}` : `CHALLENGE 0${idx + 1}`,
    link: '/solutions'
  }));

  const familyGridImages = [
    v9Assets.v7Assets['dairy-cheese'],
    v9Assets.v8Assets['food-cuisine'],
    v9Assets.v8Assets['rd-wide'],
    v9Assets.v8Assets['rd-lab'],
    v9Assets.v8Assets['cheese-banner'],
    v9Assets.v7Assets.factory
  ];

  const familyGridItems = familyData.slice(0, 6).map((f, idx) => ({
    id: f.id,
    title: f.title,
    desc: f.desc,
    image: familyGridImages[idx] || v9Assets.v7Assets.factory,
    eyebrow: isAr ? `عائلة منتجات 0${idx + 1}` : `PRODUCT FAMILY 0${idx + 1}`,
    link: '/solutions/catalogue'
  }));

  const currentGridItems = exploreTab === 'challenge' 
    ? challengeGridItems 
    : exploreTab === 'family' 
    ? familyGridItems 
    : industryGridItems;

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
      {/* 1. FOOD INDUSTRY SOLUTIONS — SYMMETRICAL 3×2 GRID   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-white" id="solutions" style={{ scrollMarginTop: '80px' }} ref={explorerRef}>
        <div className="wrap">
          {/* Header Layout */}
          <div style={{ marginBottom: '32px' }}>
            <span className="awa-swiss-eyebrow">
              <span className="awa-swiss-eyebrow-dot" />
              {isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <h2 className="awa-swiss-title" style={{ margin: 0 }}>
                  {isAr ? (
                    <>استكشف خبراتنا <span style={{ color: '#00A859' }}>حسب متطلباتك.</span></>
                  ) : (
                    <>Explore our expertise <span style={{ color: '#00A859' }}>your way.</span></>
                  )}
                </h2>
              </div>
              <div>
                <p className="awa-swiss-desc">
                  {isAr
                    ? 'نقدم مكونات غذائية وأنظمة وظيفية وتركيبات مخصصة مصممة حول متطلبات التصنيع الخاصة. حلول متطورة مصممة لدعم كفاءة التشغيل والجودة العالية.'
                    : 'We provide food ingredients, functional systems and customized formulations designed around specific manufacturing requirements across core food sectors.'}
                </p>
              </div>
            </div>
          </div>

          {/* Symmetrical Filter Tab Bar */}
          <div className="awa-swiss-tabbar">
            <button
              type="button"
              className={`awa-swiss-tab ${exploreTab === 'industry' ? 'is-active' : ''}`}
              onClick={() => setExploreTab('industry')}
            >
              {isAr ? 'حسب قطاع الصناعة (06)' : 'By Industry (06)'}
            </button>
            <button
              type="button"
              className={`awa-swiss-tab ${exploreTab === 'challenge' ? 'is-active' : ''}`}
              onClick={() => setExploreTab('challenge')}
            >
              {isAr ? 'حسب التحدي التقني (06)' : 'By Technical Challenge (06)'}
            </button>
            <button
              type="button"
              className={`awa-swiss-tab ${exploreTab === 'family' ? 'is-active' : ''}`}
              onClick={() => setExploreTab('family')}
            >
              {isAr ? 'حسب عائلة المنتجات (06)' : 'By Product Family (06)'}
            </button>
          </div>

          {/* Symmetrical 3-Column × 2-Row Grid */}
          <div className="awa-swiss-grid-3">
            {currentGridItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="awa-swiss-card"
                aria-label={`Explore ${item.title}`}
              >
                <div className="awa-swiss-card-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="awa-swiss-card-body">
                  <div>
                    <span className="awa-swiss-card-tag">{item.eyebrow}</span>
                    <h3 className="awa-swiss-card-title">{item.title}</h3>
                    <p className="awa-swiss-card-text">{item.desc}</p>
                  </div>
                  <span className="awa-swiss-card-link">
                    <span>{isAr ? 'استكشف الحلول ↗' : 'Explore solution →'}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Directory Link */}
          <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontSize: '13.5px', color: '#64748B' }}>
              {isAr 
                ? 'هل تبحث عن أنظمة وظيفية مخصصة أو تركيبات خاصة؟ تواصل مع خبرائنا التطبيقيين.' 
                : 'Need custom functional systems or specific processing support? Consult our application specialists.'}
            </span>
            <Link 
              to="/solutions/catalogue" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontSize: '13.5px', 
                fontWeight: 750, 
                color: '#00A859',
                textDecoration: 'none'
              }}
            >
              <span>{isAr ? 'كتالوج المنتجات والمكونات ↗' : 'Browse Product Catalogue ↗'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 2. THE AWA DIFFERENCE — SYMMETRICAL 3-COLUMN CARDS  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-offwhite" ref={differenceRef}>
        <div className="wrap">
          {/* Header Layout: 6 cols title / 6 cols description */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '44px' }}>
            <div>
              <span className="awa-swiss-eyebrow">
                <span className="awa-swiss-eyebrow-dot" />
                {isAr ? 'تميز مجموعة AWA' : 'THE AWA DIFFERENCE'}
              </span>
              <h2 className="awa-swiss-title" style={{ margin: 0 }}>
                {isAr ? (
                  <>خبرة تقنية مخصصة<br /><span style={{ color: '#00A859' }}>لتطبيقك الصناعي.</span></>
                ) : (
                  <>Technical expertise, tailored to<br /><span style={{ color: '#00A859' }}>your application.</span></>
                )}
              </h2>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <p className="awa-swiss-desc" style={{ marginBottom: '18px' }}>
                {isAr
                  ? 'تجمع مجموعة AWA بين المعرفة الدولية بالمكونات، وعلوم الأغذية التطبيقية، والخبرة التصنيعية لمساعدة مصنعي الأغذية في معالجة تحديات المنتجات والمعالجة الصناعية. نقيم الخواص الوظيفية للمكونات، ومتطلبات التصنيع، وجدوى التركيبات الاقتصادية لتطوير حلول عملية تلائم كل تطبيق.'
                  : 'AWA brings together international ingredient expertise, applied food science and manufacturing knowledge to help food manufacturers solve product and processing challenges. We evaluate ingredient functionality, processing requirements and formulation economics to develop practical solutions suited to each application.'}
              </p>
              <Link 
                to="/about" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '13.5px', 
                  fontWeight: 750, 
                  color: '#00A859', 
                  textDecoration: 'none' 
                }}
              >
                <span>{isAr ? 'اكتشف من نحن ↗' : 'Discover who we are ↗'}</span>
              </Link>
            </div>
          </div>

          {/* Symmetrical 3-Column Equal-Height Architectural Cards */}
          <div className="awa-swiss-grid-3">
            {/* Card 01: Global Sourcing & Supply */}
            <Link to="/capabilities/sourcing" className="awa-swiss-card">
              <div className="awa-swiss-card-media">
                <img 
                  src={v9Assets.v7Assets.sourcing} 
                  alt="Global Sourcing & Supply logistics operations" 
                  loading="lazy" 
                />
              </div>
              <div className="awa-swiss-card-body">
                <div>
                  <span className="awa-swiss-card-tag">01 / GLOBAL REACH</span>
                  <h3 className="awa-swiss-card-title">
                    {isAr ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply'}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 650, color: '#00A859', marginBottom: '8px' }}>
                    {isAr ? 'تحديد واختيار المكونات والتقنيات المناسبة.' : 'Identify the right ingredients and technologies.'}
                  </p>
                  <p className="awa-swiss-card-text" style={{ WebkitLineClamp: 3 }}>
                    {capabilityData[0].desc}
                  </p>
                </div>
                <span className="awa-swiss-card-link">
                  <span>{isAr ? 'استكشف قدرات التوريد ↗' : 'Explore sourcing capability →'}</span>
                </span>
              </div>
            </Link>

            {/* Card 02: R&D & Application Development */}
            <Link to="/capabilities/rd" className="awa-swiss-card">
              <div className="awa-swiss-card-media">
                <img 
                  src={v9Assets.v7Assets.formulation} 
                  alt="AWA R&D Application Development laboratory" 
                  loading="lazy" 
                />
              </div>
              <div className="awa-swiss-card-body">
                <div>
                  <span className="awa-swiss-card-tag">02 / APPLIED SCIENCE</span>
                  <h3 className="awa-swiss-card-title">
                    {isAr ? 'البحث والتطوير وتطبيقات الأغذية' : 'R&D & Application Development'}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 650, color: '#00A859', marginBottom: '8px' }}>
                    {isAr ? 'بناء الوظيفة المطلوبة حول ظروف المعالجة.' : 'Build functionality around your process.'}
                  </p>
                  <p className="awa-swiss-card-text" style={{ WebkitLineClamp: 3 }}>
                    {capabilityData[1].desc}
                  </p>
                </div>
                <span className="awa-swiss-card-link">
                  <span>{isAr ? 'استكشف البحث والتطوير ↗' : 'Explore R&D capability →'}</span>
                </span>
              </div>
            </Link>

            {/* Card 03: Manufacturing Excellence */}
            <Link to="/capabilities/manufacturing" className="awa-swiss-card">
              <div className="awa-swiss-card-media">
                <img 
                  src={v9Assets.v7Assets.factory} 
                  alt="AWA Manufacturing Excellence and compounding facility" 
                  loading="lazy" 
                />
              </div>
              <div className="awa-swiss-card-body">
                <div>
                  <span className="awa-swiss-card-tag">03 / INDUSTRIAL SCALE</span>
                  <h3 className="awa-swiss-card-title">
                    {isAr ? 'التميز الصناعي والتصنيع' : 'Manufacturing Excellence'}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 650, color: '#00A859', marginBottom: '8px' }}>
                    {isAr ? 'ترجمة خبرات التركيب إلى إنتاج صناعي موثوق.' : 'Translate formulation expertise into production.'}
                  </p>
                  <p className="awa-swiss-card-text" style={{ WebkitLineClamp: 3 }}>
                    {capabilityData[3].desc}
                  </p>
                </div>
                <span className="awa-swiss-card-link">
                  <span>{isAr ? 'استكشف التميز التصنيعي ↗' : 'Explore manufacturing →'}</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. DESIGNED FOR PERFORMANCE — DARK SLATE CONSOLE    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-dark" ref={formulationRef}>
        <div className="wrap">
          <div className="awa-swiss-formulation-grid">
            {/* Left 5 Columns: Sticky Authority Presentation */}
            <div className="awa-swiss-formulation-sticky">
              <span className="awa-swiss-eyebrow" style={{ color: '#00A859' }}>
                <span className="awa-swiss-eyebrow-dot" style={{ backgroundColor: '#00A859' }} />
                {isAr ? 'خبرات التركيبات المخصصة' : 'TAILORED FORMULATION EXPERTISE'}
              </span>
              <h2 className="awa-swiss-title" style={{ color: '#FFFFFF', marginBottom: '18px' }}>
                {isAr ? (
                  <>مصممة للأداء المتميز.<br /><span style={{ color: '#00A859' }}>مدروسة لتحقيق أعلى قيمة.</span></>
                ) : (
                  <>Designed for performance.<br /><span style={{ color: '#00A859' }}>Considered for value.</span></>
                )}
              </h2>
              <p className="awa-swiss-desc" style={{ color: '#94A3B8', marginBottom: '32px' }}>
                {isAr
                  ? 'يتطلب تطوير التركيبات الغذائية تحقيق التوازن الدقيق بين الخواص الوظيفية، وظروف المعالجة الصناعية، والأهداف التجارية المستهدفة. تجمع مجموعة AWA بين توريد المكونات والتطوير التطبيقي لتقييم البدائل المناسبة، وتحسين أنظمة المكونات، ومساعدة العملاء على تحقيق الأداء المحدد وأهداف التكلفة.'
                  : 'Food formulation requires the right balance between functionality, process conditions and commercial targets. AWA combines ingredient sourcing and application development to assess suitable alternatives, optimize ingredient systems and support customers in meeting defined performance and cost objectives.'}
              </p>
              <div>
                <Link 
                  to="/capabilities/formulations" 
                  className="awa-swiss-btn-white"
                >
                  <span>{isAr ? 'استكشف التركيبات المخصصة ↗' : 'Explore customized formulations ↗'}</span>
                </Link>
              </div>
            </div>

            {/* Right 7 Columns: Structured 4-Row Architectural Specification List */}
            <div className="awa-swiss-specs-list">
              {/* Row 1: RHEOLOGY */}
              <div className="awa-swiss-spec-row">
                <span className="awa-swiss-spec-tag">01 · RHEOLOGY</span>
                <div className="awa-swiss-spec-content">
                  <h4>{isAr ? 'القوام والبنية الوظيفية' : 'Texture & Rheology Matrix'}</h4>
                  <p>
                    {isAr 
                      ? 'التحكم في اللزوجة، التماسك، الانصهار، وقابلية الفرد والشعور بالفم.' 
                      : 'Control firmness, viscosity, binding, spreadability, melting and mouthfeel.'}
                  </p>
                </div>
              </div>

              {/* Row 2: STABILITY */}
              <div className="awa-swiss-spec-row">
                <span className="awa-swiss-spec-tag">02 · STABILITY</span>
                <div className="awa-swiss-spec-content">
                  <h4>{isAr ? 'الثبات وحفظ الصلاحية' : 'Phase Stability & Shelf Life'}</h4>
                  <p>
                    {isAr 
                      ? 'ثبات الاستحلاب، منع النضح والانفصال أثناء المعالجة وفترات التخزين.' 
                      : 'Manage separation, oxidation, consistency and performance through processing and storage.'}
                  </p>
                </div>
              </div>

              {/* Row 3: PROCESSING */}
              <div className="awa-swiss-spec-row">
                <span className="awa-swiss-spec-tag">03 · PROCESSING</span>
                <div className="awa-swiss-spec-content">
                  <h4>{isAr ? 'إنتاجية المعالجة الصناعية' : 'Yield & Process Consistency'}</h4>
                  <p>
                    {isAr 
                      ? 'دعم كفاءة التشغيل، زيادة إنتاجية الطهي، ومقاومة إجهاد القص الميكانيكي.' 
                      : 'Support processing consistency, ingredient use, cooking yield and production efficiency.'}
                  </p>
                </div>
              </div>

              {/* Row 4: ECONOMICS */}
              <div className="awa-swiss-spec-row">
                <span className="awa-swiss-spec-tag">04 · ECONOMICS</span>
                <div className="awa-swiss-spec-content">
                  <h4>{isAr ? 'الجدوى والتكلفة بالاستخدام' : 'Formulation Economics'}</h4>
                  <p>
                    {isAr 
                      ? 'تحقيق الأداء المحدد للمنتج بأفضل تكلفة عبر الاختيار الدقيق للمكونات.' 
                      : 'Achieve the required product performance at a suitable cost through ingredient selection and formulation optimization.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. INTERNATIONAL STANDARDS — 100% SYMMETRICAL FRAME */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-white" id="certifications-home" ref={standardsRef}>
        <div className="wrap">
          {/* Header Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '40px' }}>
            <div>
              <span className="awa-swiss-eyebrow">
                <span className="awa-swiss-eyebrow-dot" />
                {isAr ? 'الالتزام بالمعايير الدولية' : 'COMMITMENT TO INTERNATIONAL STANDARDS'}
              </span>
              <h2 className="awa-swiss-title" style={{ margin: 0 }}>
                {isAr ? (
                  <>المعايير الدولية.<br /><span style={{ color: '#00A859' }}>الجودة في الممارسة اليومية.</span></>
                ) : (
                  <>International Standards.<br /><span style={{ color: '#00A859' }}>Quality in Practice.</span></>
                )}
              </h2>
            </div>
            <div style={{ paddingTop: '8px' }}>
              <p className="awa-swiss-desc">
                {isAr
                  ? 'في مجموعة AWA، تعد الجودة وسلامة الغذاء والعمليات المسؤولة ركائز أساسية لطريقة عملنا. تدعم عملياتنا التصنيعية أنظمة إدارة معترف بها، وشهادات منتجات، وتسجيلات رقابية، مما يعكس التزاماً ثابتاً بالتجانس والانضباط التشغيلي والتحسين المستمر.'
                  : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing operations are supported by recognized management systems, product certifications and relevant regulatory registrations, reflecting a commitment to consistency, operational discipline and continual improvement.'}
              </p>
            </div>
          </div>

          {/* Unified 100% Symmetrical Credentials Frame */}
          <div className="awa-cert-frame">
            {/* Unified 5-Column Badge Bar */}
            <div className="awa-cert-top-bar">
              {certifications.filter(c => c.group === 'international').map((cert) => {
                const sealSrc = (v9Assets.corporateAssets as Record<string, string>)[cert.asset];
                return (
                  <Link 
                    key={cert.id} 
                    to="/quality" 
                    className="awa-cert-badge-tile"
                  >
                    <img 
                      src={sealSrc} 
                      alt={`${cert.code} official certification mark`} 
                      className="awa-cert-badge-img"
                      loading="lazy" 
                    />
                    <strong className="awa-cert-code">{cert.code}</strong>
                    <span className="awa-cert-type">{cert.type}</span>
                  </Link>
                );
              })}
            </div>

            {/* Symmetrical 2-Column Compliance Bar */}
            <div className="awa-cert-bottom-bar">
              {certifications.filter(c => c.group === 'regulatory').map((cert) => {
                const sealSrc = (v9Assets.corporateAssets as Record<string, string>)[cert.asset];
                return (
                  <Link 
                    key={cert.id} 
                    to="/quality" 
                    className="awa-compliance-tile"
                  >
                    <img 
                      src={sealSrc} 
                      alt={`${cert.code} logo`} 
                      className="awa-compliance-img"
                      loading="lazy" 
                    />
                    <div className="awa-compliance-info">
                      <strong>{cert.code}</strong>
                      <small>{cert.type}</small>
                      <p>{cert.meaning}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Compliance Disclaimer & Link */}
          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontSize: '12px', color: '#64748B', maxWidth: '720px' }}>
              {isAr 
                ? 'تخضع مطالبات منشأة AWA للحلول الغذائية والمنتجات المعتمدة لتأكيد النطاق والصلاحية السارية.'
                : 'AWA Food Solutions facility and certified-product claims require confirmation of current scope and validity before publication.'}
            </span>
            <Link 
              to="/quality" 
              style={{ 
                fontSize: '13.5px', 
                fontWeight: 750, 
                color: '#00A859', 
                textDecoration: 'none' 
              }}
            >
              <span>{isAr ? 'استكشف الجودة والاعتمادات ↗' : 'View All Certificates →'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. RESPONSIBLE GROWTH — 12-COLUMN STRUCTURED GRID   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-offwhite" ref={growthRef}>
        <div className="wrap">
          <div className="awa-growth-swiss-grid">
            {/* Left 4 Columns */}
            <div>
              <span className="awa-swiss-eyebrow">
                <span className="awa-swiss-eyebrow-dot" />
                {isAr ? 'النمو المسؤول' : 'RESPONSIBLE GROWTH'}
              </span>
              <h2 className="awa-swiss-title" style={{ margin: '0 0 16px 0' }}>
                {isAr ? (
                  <>نمو مسؤول.<br /><span style={{ color: '#00A859' }}>أثر دائم ومستمر.</span></>
                ) : (
                  <>Responsible Growth.<br /><span style={{ color: '#00A859' }}>Lasting Impact.</span></>
                )}
              </h2>
              <p className="awa-swiss-desc" style={{ marginBottom: '28px' }}>
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
                  fontSize: '13.5px',
                  fontWeight: 750,
                  color: '#0F172A',
                  textDecoration: 'none',
                  borderBottom: '2px solid #00A859',
                  paddingBottom: '4px'
                }}
              >
                <span>{isAr ? 'استكشف الاستدامة ↗' : 'Learn more →'}</span>
              </Link>
            </div>

            {/* Right 8 Columns: Symmetrical 2x2 Matrix */}
            <div className="awa-growth-matrix">
              {/* Pillar 01 */}
              <div className="awa-growth-pillar-card">
                <span className="awa-growth-pillar-tag">01 / SOURCING</span>
                <h3 className="awa-growth-pillar-title">
                  {isAr ? 'التوريد المسؤول' : 'Responsible Sourcing'}
                </h3>
                <p className="awa-growth-pillar-desc">
                  {isAr ? 'تقييم الموردين وبناء علاقات توريد موثوقة ومستدامة للمكونات.' : 'Supplier evaluation and dependable ingredient relationships.'}
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="awa-growth-pillar-card">
                <span className="awa-growth-pillar-tag">02 / RESOURCES</span>
                <h3 className="awa-growth-pillar-title">
                  {isAr ? 'كفاءة الموارد' : 'Resource Efficiency'}
                </h3>
                <p className="awa-growth-pillar-desc">
                  {isAr ? 'إدارة استهلاك الطاقة والمياه والمواد وتقليل الهدر والمخلفات.' : 'Energy, water, materials and waste management.'}
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="awa-growth-pillar-card">
                <span className="awa-growth-pillar-tag">03 / INNOVATION</span>
                <h3 className="awa-growth-pillar-title">
                  {isAr ? 'الابتكار المسؤول' : 'Responsible Innovation'}
                </h3>
                <p className="awa-growth-pillar-desc">
                  {isAr ? 'كفاءة استخدام المكونات وتطوير تركيبات واعية بظروف المعالجة.' : 'Ingredient efficiency and process-aware formulation.'}
                </p>
              </div>

              {/* Pillar 04 */}
              <div className="awa-growth-pillar-card">
                <span className="awa-growth-pillar-tag">04 / WORKPLACE</span>
                <h3 className="awa-growth-pillar-title">
                  {isAr ? 'الأفراد والسلامة' : 'People & Safety'}
                </h3>
                <p className="awa-growth-pillar-desc">
                  {isAr ? 'بيئات عمل آمنة، برامج تدريب مستمرة، ومسؤولية تشغيلية واضحة.' : 'Safe workplaces, training and accountability.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. KNOWLEDGE & INSIGHTS — SYMMETRICAL 3-COL GRID    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-white" ref={insightsRef}>
        <div className="wrap">
          {/* Header Layout */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="awa-swiss-eyebrow">
                <span className="awa-swiss-eyebrow-dot" />
                {isAr ? 'المقالات والأخبار' : 'INSIGHTS & NEWS'}
              </span>
              <h2 className="awa-swiss-title" style={{ margin: '0 0 10px 0' }}>
                {isAr ? (
                  <>معرفة تدعم <span style={{ color: '#00A859' }}>التقدم والنمو.</span></>
                ) : (
                  <>Knowledge that <span style={{ color: '#00A859' }}>supports progress.</span></>
                )}
              </h2>
              <p className="awa-swiss-desc">
                {isAr
                  ? 'توضح المعرفة التقنية، وقصص الابتكار المعتمدة، والتطورات المؤسسية كيف تطبق AWA خبراتها عبر قطاعات صناعة الأغذية المختلفة.'
                  : 'Technical knowledge, approved innovation stories and corporate developments demonstrate how AWA applies its expertise across the food industry.'}
              </p>
            </div>
            <div>
              <Link 
                to="/knowledge" 
                style={{ 
                  fontSize: '13.5px', 
                  fontWeight: 750, 
                  color: '#00A859', 
                  textDecoration: 'none' 
                }}
              >
                <span>{isAr ? 'استكشف المقالات والأخبار ↗' : 'Explore Insights & News ↗'}</span>
              </Link>
            </div>
          </div>

          {/* Symmetrical 3-Column Editorial Grid */}
          <div className="awa-swiss-grid-3">
            {insightStories.map((story, sIdx) => (
              <Link 
                key={sIdx}
                to="/knowledge"
                className="awa-swiss-card"
              >
                <div className="awa-swiss-card-media">
                  <img src={story.image} alt={story.title} loading="lazy" />
                </div>
                <div className="awa-swiss-card-body">
                  <div>
                    <span className="awa-swiss-card-tag">{story.kicker}</span>
                    <h3 className="awa-swiss-card-title">{story.title}</h3>
                    <p className="awa-swiss-card-text" style={{ WebkitLineClamp: 3 }}>
                      {story.desc}
                    </p>
                  </div>
                  <span className="awa-swiss-card-link">
                    <span>{isAr ? 'اقرأ المزيد ↗' : 'Read article →'}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. GLOBAL PARTNERS & PRINCIPALS DIRECTORY            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-offwhite" ref={marqueeRef}>
        <div className="wrap">
          {/* Header Layout */}
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <span className="awa-swiss-eyebrow">
              <span className="awa-swiss-eyebrow-dot" />
              {isAr ? 'الشركاء والشركات المشتركة' : 'STRATEGIC JOINT VENTURES & GLOBAL PRINCIPALS'}
            </span>
            <h2 className="awa-swiss-title">
              {isAr ? 'ربط الخبرة العالمية بالقدرة الصناعية المحلية' : 'Connecting International Expertise with Local Scale'}
            </h2>
            <p className="awa-swiss-desc">
              {isAr
                ? 'توسع المشاريع المشتركة الدولية والعلاقات الراسخة مع كبرى الشركات المصنعة وصول AWA إلى تقنيات الأغذية المتخصصة والمعرفة التطبيقية المتقدمة.'
                : "International joint ventures and established principal relationships extend AWA's access to specialist food technologies, technical knowledge and collaborative development opportunities."}
            </p>
          </div>

          {/* Symmetrical 2-Column Strategic Partner Cards */}
          <div className="awa-partner-cards-grid">
            {jointVentures.map((jv) => {
              const jvLogo = jv.name === 'Turkphos' ? v9Assets.v8Assets.turkphosLogo : v9Assets.v8Assets.ingrevaLogo;
              return (
                <div key={jv.name} className="awa-partner-card">
                  <div>
                    <div className="awa-partner-logo-box">
                      <img src={jvLogo} alt={`${jv.name} official logo`} />
                    </div>
                    <span className="awa-partner-meta-pill">{jv.region} · JOINT VENTURE</span>
                    <h3 className="awa-partner-title">{jv.name}</h3>
                    <h4 className="awa-partner-scope">{jv.category}</h4>
                    <p className="awa-partner-desc">{jv.desc}</p>
                  </div>
                  <Link to={jv.name === 'Turkphos' ? '/turkphos' : '/ingreva'} className="awa-partner-link">
                    <span>{isAr ? `استعراض شراكة ومواصفات ${jv.name} →` : `Explore ${jv.name} partnership →`}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Symmetrical 6-Column Bordered Logo Grid */}
          <div className="awa-logo-grid-6">
            {Object.entries(v9Assets.principalLogos).slice(0, 6).map(([key, logoSrc]) => (
              <div key={key} className="awa-logo-grid-cell">
                <img src={logoSrc} alt={`${key} partner logo`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. FACILITIES & CAPABILITIES — SYMMETRICAL 3-COL     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="awa-section-swiss awa-section-white" ref={galleryRef}>
        <div className="wrap">
          {/* Header Layout */}
          <div style={{ marginBottom: '40px' }}>
            <span className="awa-swiss-eyebrow">
              <span className="awa-swiss-eyebrow-dot" />
              {isAr ? 'البنية التحتية والمرافق' : 'FACILITIES & CAPABILITIES'}
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <h2 className="awa-swiss-title" style={{ margin: 0 }}>
                  {isAr 
                    ? 'علوم أغذية تطبيقية، مرافق متقدمة وقدرات إنتاجية' 
                    : 'Applied Food Science, Advanced Facilities & Production Scale'}
                </h2>
              </div>
              <div>
                <p className="awa-swiss-desc">
                  {isAr 
                    ? 'بنية تحتية متكاملة تشمل مجمع تصنيع وخلط آلي ببرج العرب، مختبرات تحليل القوام والريولوجيا، ومصانع تجريبية للتحجيم الصناعي لضمان الجودة ومطابقة المواصفات.'
                    : 'Integrated industrial infrastructure encompassing automated compounding in Borg El-Arab, specialized rheology and texture profiling labs, and pilot plants for factory-scale simulation.'}
                </p>
              </div>
            </div>
          </div>

          {/* Symmetrical 3-Column Facilities Grid */}
          <div className="awa-swiss-grid-3">
            {/* Facility 1: Borg El-Arab */}
            <Link to="/capabilities/manufacturing" className="awa-facility-swiss-card">
              <div className="awa-facility-swiss-media">
                <img 
                  src={v9Assets.v7Assets.factory} 
                  alt="AWA Borg El-Arab Compounding and Manufacturing Complex" 
                  loading="lazy" 
                />
              </div>
              <div className="awa-facility-swiss-caption">
                <div>
                  <span className="awa-facility-swiss-tag">
                    {isAr ? 'الإسكندرية، مصر · المنطقة الصناعية' : 'ALEXANDRIA, EGYPT · INDUSTRIAL HUB'}
                  </span>
                  <h3 className="awa-facility-swiss-heading">
                    {isAr ? 'مجمع الخلط والتصنيع - برج العرب' : 'Borg El-Arab Compounding Complex'}
                  </h3>
                  <p className="awa-facility-swiss-text">
                    {isAr
                      ? 'مجمع تصنيع صناعي مؤتمت بطاقة سنوية 24,000 طن، مخصص للخلط الجاف وأنظمة أملاح الاستحلاب الخاصة.'
                      : 'High-capacity automated compounding plant with 24,000 MT annual capacity, dedicated to functional food blending and proprietary emulsifying salts.'}
                  </p>
                </div>
                <span className="awa-swiss-card-link">
                  <span>{isAr ? 'استكشف القدرات الصناعية ↗' : 'Explore facility →'}</span>
                </span>
              </div>
            </Link>

            {/* Facility 2: Applied R&D & Rheology Lab */}
            <Link to="/capabilities/rd" className="awa-facility-swiss-card">
              <div className="awa-facility-swiss-media">
                <img 
                  src="/images/pages/home/sensory-rheology-lab.jpg" 
                  alt="AWA Applied R&D and Texture Profiling Laboratory" 
                  loading="lazy" 
                />
              </div>
              <div className="awa-facility-swiss-caption">
                <div>
                  <span className="awa-facility-swiss-tag">
                    {isAr ? 'مراكز الابتكار بالقاهرة والإسكندرية' : 'CAIRO & ALEXANDRIA INNOVATION CENTERS'}
                  </span>
                  <h3 className="awa-facility-swiss-heading">
                    {isAr ? 'مختبرات البحث والتطوير وتحليل القوام' : 'Applied R&D & Texture Labs'}
                  </h3>
                  <p className="awa-facility-swiss-text">
                    {isAr
                      ? 'مختبرات تحليلية متقدمة لقياس منحنيات اللزوجة، وتحليل خواص القوام TPA، وفحوصات النشاط المائي وثبات المستحلبات.'
                      : 'Advanced analytical suite configured for Brookfield rheometry, texture profile analysis (TPA), water activity, and accelerated shelf-life testing.'}
                  </p>
                </div>
                <span className="awa-swiss-card-link">
                  <span>{isAr ? 'استكشف مختبرات البحث ↗' : 'Explore laboratory →'}</span>
                </span>
              </div>
            </Link>

            {/* Facility 3: Food Application Pilot Testing Facilities */}
            <Link to="/capabilities" className="awa-facility-swiss-card">
              <div className="awa-facility-swiss-media">
                <img 
                  src="/images/pages/home/pilot-plant-dairy-testing.jpg" 
                  alt="AWA Food Application Pilot Testing Facilities" 
                  loading="lazy" 
                />
              </div>
              <div className="awa-facility-swiss-caption">
                <div>
                  <span className="awa-facility-swiss-tag">
                    {isAr ? 'مرافق الإنتاج التجريبي المخصصة' : 'DEDICATED PILOT PRODUCTION PLANTS'}
                  </span>
                  <h3 className="awa-facility-swiss-heading">
                    {isAr ? 'المصانع التجريبية لتطبيقات الأغذية' : 'Food Application Pilot Testing Facilities'}
                  </h3>
                  <p className="awa-facility-swiss-text">
                    {isAr
                      ? 'مصنع تجريبي نصف صناعي مجهز بطباخات ستيفان التجريبية وخطوط خلط عالية القص لمحاكاة ظروف التشغيل قبل التوسع التجاري.'
                      : 'Semi-industrial pilot plant equipped with pilot Stephan cookers and high-shear lines simulating factory conditions before commercial scaling.'}
                  </p>
                </div>
                <span className="awa-swiss-card-link">
                  <span>{isAr ? 'استكشف المصانع التجريبية ↗' : 'Explore pilot plants →'}</span>
                </span>
              </div>
            </Link>
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
