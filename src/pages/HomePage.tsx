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
  TrendingUp,
  Award
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  v9Assets, 
  industryData, 
  certifications, 
  capabilityData 
} from '../data/v9Data';
import '../awa-editorial.css';

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
      icon: <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
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
      icon: <FlaskConical className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
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
      icon: <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
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
        : 'High-Protein Snacks & Emulsifying Salt Systems in Dairy Formulations',
      image: v9Assets.v8Assets['cheese-banner'] || v9Assets.v8Assets['sourcing-ingredients'],
      link: '/knowledge'
    },
    {
      id: 'art-2',
      category: isAr ? 'ابتكار' : 'Innovation',
      date: 'Nov 18, 2026',
      title: isAr 
        ? 'دراسة تقنية حول بدائل السكر والدهون دون التأثير على القوام' 
        : 'Industrial Sugar & Fat Replacement Without Sensory Compromise',
      image: '/images/pages/home/food-chemistry-formulation.jpg',
      link: '/knowledge'
    },
    {
      id: 'art-3',
      category: isAr ? 'رؤى السوق' : 'Market Insights',
      date: 'Nov 12, 2026',
      title: isAr 
        ? 'أبحاث تحسين الإنتاجية والاحتفاظ بالرطوبة في مصنعات اللحوم' 
        : 'Yield & Moisture Retention Research in Processed Meats & Poultry',
      image: v9Assets.v7Assets['meat-seafood'] || '/images/pages/home/pilot-plant-dairy-testing.jpg',
      link: '/knowledge'
    }
  ];

  return (
    <div className="home-page bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
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
      <section className="py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Asymmetric Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            {/* Left Content Column */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] mb-5">
                {isAr ? 'استكشف خبراتنا' : 'Explore our expertise'} <br />
                <span className="text-[#00A84F]">{isAr ? 'بطريقتك الخاصة' : 'your way'}</span>
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-md">
                {isAr
                  ? 'من المكونات الأساسية إلى الابتكار التطبيقي — اكتشف مجموعتنا الشاملة من حلول الصناعات الغذائية المصممة لتحقيق الأداء الأمثل.'
                  : 'From ingredients to innovation — discover our wide range of food solutions tailored to your production process.'}
              </p>
              <Link 
                to="/solutions" 
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-[#00A84F] hover:text-[#00A84F] font-semibold text-xs tracking-wide transition-all shadow-2xs hover:shadow-xs"
              >
                <span>{isAr ? 'استعراض كافة الحلول' : 'Explore all solutions'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

            {/* Right Asymmetric Photo Composition */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5">
              {/* Dominant Featured Category: Dairy & Cheese */}
              <Link 
                to="/solutions/industry/dairy-cheese"
                className="group relative sm:col-span-7 aspect-[4/5] sm:aspect-auto sm:h-[400px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <img 
                  src={v9Assets.v7Assets['dairy-cheese']} 
                  alt="Dairy, Cheese & Frozen Desserts" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="block text-xs font-mono font-bold text-emerald-300 mb-1">01</span>
                    <h3 className="text-xl font-bold leading-snug">
                      {isAr ? 'الألبان والأجبان والحلويات المجمدة' : 'Dairy, Cheese & Frozen Desserts'}
                    </h3>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#00A84F] group-hover:text-white transition-colors flex-shrink-0">
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </span>
                </div>
              </Link>

              {/* Two Stacked Secondary Categories */}
              <div className="sm:col-span-5 flex flex-col gap-5 sm:h-[400px]">
                {/* Meat & Poultry */}
                <Link 
                  to="/solutions/industry/meat-seafood"
                  className="group relative flex-1 h-[190px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <img 
                    src={v9Assets.v7Assets['meat-seafood']} 
                    alt="Meat, Poultry & Seafood" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                    <div>
                      <span className="block text-[11px] font-mono font-bold text-emerald-300 mb-0.5">02</span>
                      <h4 className="text-sm font-bold leading-tight">
                        {isAr ? 'اللحوم والدواجن والأسماك' : 'Meat, Poultry & Seafood'}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all flex-shrink-0 rtl:rotate-180" />
                  </div>
                </Link>

                {/* Sauces & Culinary */}
                <Link 
                  to="/solutions/industry/culinary"
                  className="group relative flex-1 h-[190px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
                >
                  <img 
                    src={v9Assets.v7Assets['culinary']} 
                    alt="Sauces, Soups & Culinary" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                    <div>
                      <span className="block text-[11px] font-mono font-bold text-emerald-300 mb-0.5">03</span>
                      <h4 className="text-sm font-bold leading-tight">
                        {isAr ? 'الصلصات والشوربات والطهي' : 'Sauces, Soups & Culinary'}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all flex-shrink-0 rtl:rotate-180" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Horizontal Category Navigation Strip */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <Link 
              to="/solutions/industry/beverages"
              className="group flex items-center gap-1.5 hover:text-[#00A84F] transition-colors"
            >
              <span>{isAr ? 'المشروبات والعصائر' : 'Beverages'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A84F] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">›</span>

            <Link 
              to="/solutions/industry/snacks"
              className="group flex items-center gap-1.5 hover:text-[#00A84F] transition-colors"
            >
              <span>{isAr ? 'المقرمشات ورقائق الإفطار' : 'Snacks & Cereals'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A84F] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">›</span>

            <Link 
              to="/solutions/industry/bakery"
              className="group flex items-center gap-1.5 hover:text-[#00A84F] transition-colors"
            >
              <span>{isAr ? 'المخبوزات والحلويات' : 'Bakery & Confectionery'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A84F] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">›</span>

            <Link 
              to="/capabilities/formulations"
              className="group flex items-center gap-1.5 hover:text-[#00A84F] transition-colors"
            >
              <span>{isAr ? 'أنظمة التركيبات المخصصة' : 'Custom Formulations'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A84F] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
            </Link>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">›</span>

            <Link 
              to="/solutions/catalogue"
              className="group flex items-center gap-1.5 hover:text-[#00A84F] transition-colors"
            >
              <span>{isAr ? 'كتالوج المكونات الكامل' : 'Ingredient Catalogue'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A84F] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 02: TECHNICAL EXPERTISE, TAILORED (SPLIT)   */}
      {/* (45% INDUSTRIAL PHOTO + INTERACTIVE NUMBERED LIST)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 45%: Large Industrial Photograph with Smooth Curved Edge */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-[480px] rounded-[32px] overflow-hidden shadow-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
              {capabilitiesList.map((cap, idx) => (
                <img
                  key={cap.id}
                  src={cap.image}
                  alt={cap.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                    hoveredCapability === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                  loading="lazy"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white text-xs font-mono font-semibold tracking-wider px-3.5 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/20">
                {capabilitiesList[hoveredCapability].subtitle}
              </div>
            </div>

            {/* Right 55%: Editorial Heading + Refined Interactive List */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00A84F] mb-3">
                <span>•</span>
                <span>{isAr ? 'الخبرة التكنولوجية والتطبيقية' : 'TECHNICAL EXPERTISE'}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] mb-4">
                {isAr ? 'خبرة فنية، مصممة ' : 'Technical expertise, '} <br />
                {isAr ? 'خصيصاً ' : 'tailored to '}
                <span className="text-[#00A84F]">
                  {isAr ? 'لتطبيقاتك الصناعية.' : 'your application.'}
                </span>
              </h2>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
                {isAr
                  ? 'تساعدك خبرتنا العميقة في صناعة الأغذية وفهمنا الدقيق لمعايير التشغيل على تحويل الأفكار والتركيبات إلى حلول قابلة للتطوير وموثوقة الإنتاج.'
                  : 'Our in-depth knowledge and industry experience help you turn ideas into reliable, scalable solutions.'}
              </p>

              {/* 3 Refined Interactive Capabilities */}
              <div className="space-y-4 mb-8">
                {capabilitiesList.map((cap, idx) => (
                  <Link
                    key={cap.id}
                    to={cap.route}
                    onMouseEnter={() => setHoveredCapability(idx)}
                    onFocus={() => setHoveredCapability(idx)}
                    className={`group flex items-center justify-between p-5 rounded-2xl border transition-all ${
                      hoveredCapability === idx
                        ? 'bg-slate-50 dark:bg-slate-900/80 border-[#00A84F] shadow-sm'
                        : 'bg-white dark:bg-slate-900/30 border-slate-200/80 dark:border-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-[#00A84F] w-6">
                        {cap.num}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#EBF7EE] dark:bg-emerald-950/60 flex items-center justify-center flex-shrink-0 border border-emerald-100 dark:border-emerald-900/40">
                        {cap.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-950 dark:text-white group-hover:text-[#00A84F] transition-colors">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 max-w-md">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:text-[#00A84F] group-hover:bg-[#EBF7EE] dark:group-hover:bg-slate-800 transition-all flex-shrink-0">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#00A84F] hover:underline"
              >
                <span>{isAr ? 'اكتشف قدراتنا المتكاملة' : 'Discover our capabilities'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 03: DESIGNED FOR PERFORMANCE & VALUE        */}
      {/* (EXPRESSIVE 2-PART EDITORIAL WITH 3 PILLARS)        */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-slate-50/60 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00A84F] mb-3">
                <span>•</span>
                <span>{isAr ? 'الأداء والقيمة' : 'PERFORMANCE & VALUE'}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] mb-5">
                {isAr ? 'مصممة للأداء.' : 'Designed for'} <br />
                {isAr ? 'ومحسوبة ' : 'performance.'} <br />
                <span className="text-[#00A84F]">
                  {isAr ? 'لتحقيق القيمة.' : 'Considered for value.'}
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-md">
                {isAr
                  ? 'حلول عالية الجودة تقدم أثراً قابلاً للقياس عبر سلسلة القيمة الخاصة بك، محققة التوازن الدقيق بين الأداء الوظيفي والتكلفة الاقتصادية.'
                  : 'High-quality solutions that deliver measurable impact across your entire value chain.'}
              </p>
              <Link
                to="/capabilities/formulations"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:bg-[#00A84F] hover:text-white dark:hover:bg-[#00A84F] dark:hover:text-white font-semibold text-xs tracking-wider transition-all shadow-sm"
              >
                <span>{isAr ? 'اعرف المزيد' : 'Learn more'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 3 Supporting Principles with Thin Dividers */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-slate-200 dark:md:divide-slate-800 rtl:md:divide-x-reverse">
              {/* Pillar 1 */}
              <div className="md:px-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF7EE] dark:bg-emerald-950/60 text-[#00A84F] flex items-center justify-center mb-5 border border-emerald-100 dark:border-emerald-900/40">
                  <Cog className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {isAr ? 'الأداء الوظيفي' : 'Functional Performance'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">
                  {isAr ? 'ضبط القوام، الاستحلاب، والذوبانية لتحقيق أعلى جودة حسية.' : 'Precision texture, melt control, and shelf-life stability.'}
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="md:px-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF7EE] dark:bg-emerald-950/60 text-[#00A84F] flex items-center justify-center mb-5 border border-emerald-100 dark:border-emerald-900/40">
                  <Boxes className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {isAr ? 'التوافق الإنتاجي' : 'Production Compatibility'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">
                  {isAr ? 'التوافق التام مع خطوط التشغيل الحالية وظروف المعاملات الحرارية.' : 'Seamless integration with existing industrial lines & thermal profiles.'}
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="md:px-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#EBF7EE] dark:bg-emerald-950/60 text-[#00A84F] flex items-center justify-center mb-5 border border-emerald-100 dark:border-emerald-900/40">
                  <TrendingUp className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {isAr ? 'القيمة التجارية' : 'Commercial Value'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">
                  {isAr ? 'تحسين تكلفة الوصفات وزيادة إنتاجية التشغيل بهوامش ربحية مستدامة.' : 'Optimized formulation economics and reduced ingredient waste.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 04: INTERNATIONAL STANDARDS (MINT SURFACE)  */}
      {/* (EXACT REPLICA OF THE MINT CERTIFICATION SHOWCASE)  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#EBF7EE] dark:bg-slate-900/80 border-b border-emerald-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header */}
            <div className="lg:col-span-5">
              <span className="block text-xs font-mono font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400 mb-2">
                {isAr ? 'الشهادات والاعتمادات' : 'CERTIFICATIONS'}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-snug mb-3">
                {isAr ? 'معايير دولية.' : 'International Standards.'} <br />
                {isAr ? 'جودة في الممارسة.' : 'Quality in Practice.'}
              </h2>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-md">
                {isAr
                  ? 'نلتزم بأعلى معايير سلامة الأغذية العالمية، لأن الجودة والامتثال يمثلان جوهر كل ما نقوم به.'
                  : 'We meet the highest international standards, because quality is at the core of what we do.'}
              </p>
              <Link
                to="/quality"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:underline"
              >
                <span>{isAr ? 'استعراض كافة الشهادات والاعتمادات' : 'View our certifications'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: Logos in 2 Columns with Hairline Divider */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 dark:bg-slate-850/70 backdrop-blur-xs p-8 rounded-3xl border border-emerald-200/60 dark:border-slate-800 shadow-2xs">
              {/* International Certifications Column */}
              <div className="md:col-span-7">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">
                  {isAr ? 'الشهادات الدولية المعتمدة' : 'International Certifications'}
                </span>
                <div className="flex items-center flex-wrap gap-4">
                  {['fssc-22000', 'iso-9001', 'iso-14001', 'iso-45001'].map((assetKey) => {
                    const src = (v9Assets.corporateAssets as any)[assetKey];
                    return (
                      <div key={assetKey} className="h-14 w-20 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-750 shadow-2xs hover:scale-105 transition-transform">
                        <img src={src} alt={assetKey} className="max-h-10 max-w-[65px] object-contain" loading="eager" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Vertical Hairline Divider */}
              <div className="hidden md:block md:col-span-1 h-20 border-r border-slate-200 dark:border-slate-750 rtl:border-l rtl:border-r-0" />

              {/* Regulatory Registrations Column */}
              <div className="md:col-span-4">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">
                  {isAr ? 'التسجيل والاعتماد التنظيمي' : 'Regulatory Registrations'}
                </span>
                <div className="flex items-center gap-3">
                  {['fda', 'halal', 'nfsa'].map((assetKey) => {
                    const src = (v9Assets.corporateAssets as any)[assetKey];
                    return (
                      <div key={assetKey} className="h-14 w-16 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-750 shadow-2xs hover:scale-105 transition-transform">
                        <img src={src} alt={assetKey} className="max-h-10 max-w-[50px] object-contain" loading="eager" />
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
      {/* (SUSTAINABILITY PHOTO + 5 HORIZONTAL PILLARS)       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            {/* Left Arched Photo */}
            <div className="lg:col-span-4 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-900">
              <img 
                src="/images/pages/sustainability/sustainability.jpg" 
                alt="Responsible Growth & Agriculture" 
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = v9Assets.v7Assets.sourcing;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Center-Left Content */}
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] mb-4">
                {isAr ? 'نمو مسؤول.' : 'Responsible Growth.'} <br />
                <span className="text-[#00A84F]">{isAr ? 'وأثر دائم.' : 'Lasting Impact.'}</span>
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl">
                {isAr
                  ? 'بناء مستقبل غذائي أكثر استدامة عبر الممارسات المسؤولة، وكفاءة استهلاك الموارد الطبيعية، والابتكار التطبيقي المتواصل.'
                  : 'Building a more sustainable food future through responsible practices and innovation across our operations and value chain.'}
              </p>
              <Link
                to="/sustainability"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-[#00A84F] hover:text-[#00A84F] font-semibold text-xs tracking-wide transition-all shadow-2xs"
              >
                <span>{isAr ? 'أثرنا في الاستدامة' : 'Our impact'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* 5 Horizontal Pillars with Numbers & Outline Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: isAr ? 'التوريد المستدام' : 'Sustainable Sourcing', icon: <Leaf className="w-5 h-5" /> },
              { num: '02', title: isAr ? 'المسؤولية البيئية' : 'Environmental Responsibility', icon: <Recycle className="w-5 h-5" /> },
              { num: '03', title: isAr ? 'دعم المجتمع والأفراد' : 'Community & People', icon: <Users className="w-5 h-5" /> },
              { num: '04', title: isAr ? 'سلامة الغذاء والجودة' : 'Food Safety & Quality', icon: <ShieldCheck className="w-5 h-5" /> },
              { num: '05', title: isAr ? 'الابتكار لغد أفضل' : 'Innovation for Tomorrow', icon: <Lightbulb className="w-5 h-5" /> },
            ].map((pillar) => (
              <div 
                key={pillar.num} 
                className="group p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-[#00A84F] transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="w-full flex items-center justify-between text-slate-400 text-xs font-mono mb-4">
                  <span>{pillar.num}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-[#00A84F] transition-colors" />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 text-[#00A84F] flex items-center justify-center mb-3 border border-slate-100 dark:border-slate-700 shadow-2xs group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <strong className="block text-xs font-bold text-slate-900 dark:text-white leading-tight">
                  {pillar.title}
                </strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 06: KNOWLEDGE THAT SUPPORTS PROGRESS        */}
      {/* (EDITORIAL HEADING + 3 ARTICLE PREVIEWS WITH PHOTOS)*/}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.15] mb-4">
                {isAr ? 'معرفة تدعم' : 'Knowledge that'} <br />
                {isAr ? 'التقدم الصناعي.' : 'supports progress.'}
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-sm">
                {isAr
                  ? 'رؤى تطبيقية، وأبحاث علمية، واتجاهات حديثة في صناعة الأغذية لمساعدتك على البقاء في الصدارة.'
                  : 'Insights, research and industry trends to help you stay ahead in food formulation and manufacturing.'}
              </p>
              <Link
                to="/knowledge"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A84F] hover:underline"
              >
                <span>{isAr ? 'استكشف منصة المعرفة والأبحاث' : 'Explore our insights'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>

            {/* Right: 3 Article Previews */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {insightArticles.map((art) => (
                <Link
                  key={art.id}
                  to={art.link}
                  className="group flex flex-col justify-between bg-white dark:bg-slate-850 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:shadow-lg transition-all"
                >
                  <div>
                    {/* Locked Photo Container */}
                    <div className="aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF7EE] text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          {art.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {art.date}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#00A84F] transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h3>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-0">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00A84F] group-hover:underline">
                      <span>{isAr ? 'اقرأ المزيد' : 'Read more'}</span>
                      <ArrowRight className="w-3 h-3 rtl:rotate-180" />
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
      <section className="relative overflow-hidden py-16 lg:py-20 bg-[#0C2A3C] text-white">
        {/* Subtle Decorative Flowing Wave Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="none" stroke="#00A84F" strokeWidth="2" d="M0,160 C320,280,480,40,720,160 C960,280,1120,40,1440,160" />
            <path fill="none" stroke="#00A84F" strokeWidth="1" strokeDasharray="6 6" d="M0,200 C320,320,480,80,720,200 C960,320,1120,80,1440,200" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left rtl:md:text-right">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
                {isAr ? 'هل لديك ' : 'Have a '}
                <span className="text-[#4ADE80]">
                  {isAr ? 'تحدٍ غذائي' : 'food challenge'}
                </span>
                {isAr ? ' تريد حله؟' : ' to solve?'}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {isAr
                  ? 'أخبرنا عن متطلبات تطبيقك ومشروعك ولنبتكر الحل الأمثل معاً.'
                  : "Tell us about your needs and let's create the right solution together."}
              </p>
            </div>

            <Link
              to="/contact?type=technical"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-[#4ADE80] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex-shrink-0"
            >
              <span>{isAr ? 'تواصل مع خبرائنا' : 'Contact our experts'}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
