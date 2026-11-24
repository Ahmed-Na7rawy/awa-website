import React, { useState, useRef } from 'react';
import { 
  ArrowUpRight,
  ArrowRight,
  ShieldCheck, 
  FlaskConical, 
  Globe2, 
  Handshake, 
  Play, 
  Pause 
} from 'lucide-react';
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

  const [activeTab, setActiveTab] = useState<'industry' | 'challenge' | 'family'>('industry');
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

  const handleJumpExplore = (tab: 'industry' | 'challenge' | 'family') => {
    setActiveTab(tab);
    const el = document.getElementById('explore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      {/* 2. FIND PATHS QUICK BAR — SYMMETRICAL DISCIPLINED   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Title Column */}
            <div className="lg:col-span-3">
              <strong className="block text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                {isAr ? 'اعثر على حلك' : 'Find your solution'}
              </strong>
              <small className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {isAr ? 'استكشف محفظة AWA الصناعية' : "Explore AWA's industrial portfolio"}
              </small>
            </div>

            {/* 3 Equal Pathway Action Tiles */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleJumpExplore('industry')}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-500/70 dark:hover:border-emerald-500/70 transition-all text-left rtl:text-right shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-mono text-base flex items-center justify-center flex-shrink-0 border border-emerald-100 dark:border-emerald-900/40">
                    ▦
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {isAr ? 'حسب الصناعة' : 'By Industry'}
                    </span>
                    <small className="block text-[11px] text-slate-500 dark:text-slate-400">
                      {isAr ? 'استكشف تطبيقات الأغذية' : 'Explore food applications'}
                    </small>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleJumpExplore('challenge')}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-500/70 dark:hover:border-emerald-500/70 transition-all text-left rtl:text-right shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-mono text-base flex items-center justify-center flex-shrink-0 border border-emerald-100 dark:border-emerald-900/40">
                    ◎
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {isAr ? 'حسب التحدي' : 'By Challenge'}
                    </span>
                    <small className="block text-[11px] text-slate-500 dark:text-slate-400">
                      {isAr ? 'حل مشكلة تقنية' : 'Address a technical need'}
                    </small>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleJumpExplore('family')}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-500/70 dark:hover:border-emerald-500/70 transition-all text-left rtl:text-right shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-mono text-base flex items-center justify-center flex-shrink-0 border border-emerald-100 dark:border-emerald-900/40">
                    ▧
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {isAr ? 'حسب عائلة المنتج' : 'By Product Family'}
                    </span>
                    <small className="block text-[11px] text-slate-500 dark:text-slate-400">
                      {isAr ? 'استكشف وظائف المكونات' : 'Explore ingredient functions'}
                    </small>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. SOLUTIONS EXPLORER — SYMMETRICAL 3-WAY MATRIX     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800 scroll-margin" id="explore">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {isAr ? (
                  <>استكشف خبراتنا <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">بطريقتك.</span></>
                ) : (
                  <>Explore our expertise <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">your way.</span></>
                )}
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {isAr
                ? 'نوفر مكونات غذائية وأنظمة وظيفية وتركيبات مخصصة مصممة وفقاً لمتطلبات التصنيع المحددة. تصفح حسب التطبيق أو التحدي الفني أو العائلة الوظيفية للمنتج.'
                : 'We provide food ingredients, functional systems and customized formulations designed around specific manufacturing requirements. Browse by application, technical challenge or functional product family.'}
            </p>
          </div>

          {/* Symmetrical Segmented Tabs */}
          <div className="flex items-center justify-start mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs gap-1">
              <button 
                type="button" 
                role="tab" 
                aria-selected={activeTab === 'industry'} 
                onClick={() => setActiveTab('industry')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'industry' 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-700/50'
                }`}
              >
                <span className="font-mono text-sm">▦</span>
                <span>{isAr ? 'حسب الصناعة' : 'By Industry'}</span>
              </button>
              <button 
                type="button" 
                role="tab" 
                aria-selected={activeTab === 'challenge'} 
                onClick={() => setActiveTab('challenge')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'challenge' 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-700/50'
                }`}
              >
                <span className="font-mono text-sm">◎</span>
                <span>{isAr ? 'حسب التحدي' : 'By Challenge'}</span>
              </button>
              <button 
                type="button" 
                role="tab" 
                aria-selected={activeTab === 'family'} 
                onClick={() => setActiveTab('family')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'family' 
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-700/50'
                }`}
              >
                <span className="font-mono text-sm">▧</span>
                <span>{isAr ? 'حسب عائلة المنتج' : 'By Product Family'}</span>
              </button>
            </div>
          </div>

          {/* Symmetrical Component Results */}
          <div id="explorer-results">
            {/* By Industry Grid: Strict 3 Equal Columns × 2 Rows */}
            {activeTab === 'industry' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryData.map((o) => {
                  const photo = (v9Assets.v7Assets as any)[o.id] || v9Assets.v8Assets['industry-mosaic'];
                  return (
                    <Link 
                      key={o.id} 
                      to={`/solutions/industry/${o.id}`} 
                      aria-label={`Explore ${o.title}`}
                      className="group flex flex-col justify-between h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 overflow-hidden hover:border-emerald-500/60 hover:shadow-md transition-all"
                    >
                      {/* Locked 16:10 Aspect Ratio Image Container */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                        <img 
                          src={photo} 
                          alt={`Close-up food application photography for ${o.title}`} 
                          className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Content Bar with Strict Baselines */}
                      <div className="p-5 flex items-center justify-between gap-4 bg-white dark:bg-slate-800">
                        <strong className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {o.title}
                        </strong>
                        <span className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors text-sm font-bold border border-slate-200 dark:border-slate-700">
                          ↗
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            {/* By Challenge Grid: Strict 4 Equal Columns × 2 Rows */}
            {activeTab === 'challenge' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {challengeData.map((o) => (
                  <Link 
                    key={o.id} 
                    to={`/solutions/challenge/${o.id}`}
                    className="group flex flex-col justify-between h-full p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-500/60 hover:shadow-md transition-all"
                  >
                    <div>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 text-lg font-mono mb-4 border border-slate-100 dark:border-slate-800">
                        {o.icon}
                      </span>
                      <strong className="block text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {o.title}
                      </strong>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {o.desc}
                      </p>
                    </div>
                    <span className="pt-3 border-t border-slate-100 dark:border-slate-700/70 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                      <span>{isAr ? 'استكشف التحدي' : 'Explore challenge'}</span>
                      <span>↗</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {/* By Family Grid: Strict 3 Equal Columns × 2 Rows */}
            {activeTab === 'family' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {familyData.map((o) => (
                  <Link 
                    key={o.id} 
                    to={`/solutions/family/${o.id}`}
                    className="group flex flex-col justify-between h-full p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 hover:border-emerald-500/60 hover:shadow-md transition-all"
                  >
                    <div>
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 text-lg font-mono mb-4 border border-slate-100 dark:border-slate-800">
                        {o.icon}
                      </span>
                      <strong className="block text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {o.title}
                      </strong>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {o.desc}
                      </p>
                    </div>
                    <span className="pt-3 border-t border-slate-100 dark:border-slate-700/70 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:underline">
                      <span>{isAr ? 'استكشف عائلة المنتج' : 'Explore product family'}</span>
                      <span>↗</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Directory CTA */}
          <div className="mt-12 text-center">
            <Link 
              to="/solutions" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs"
            >
              <span>{isAr ? 'استكشف دليل الحلول الكامل' : 'Explore full solutions directory'}</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. THE AWA DIFFERENCE — DISCIPLINED 3-COLUMN CARDS  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          {/* Symmetrical 2-Column Section Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-slate-200/80 dark:border-slate-800">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{isAr ? 'ميزة AWA' : 'THE AWA DIFFERENCE'}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {isAr ? (
                  <>خبرة فنية، مصممة <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">لتطبيقك.</span></>
                ) : (
                  <>Technical expertise, tailored to <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">your application.</span></>
                )}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {isAr
                  ? 'تجمع AWA بين خبرة المكونات الدولية وعلوم الأغذية التطبيقية والمعرفة التصنيعية لمساعدة مصنعي الأغذية على حل تحديات المنتجات والتصنيع. نقوم بتقييم وظائف المكونات ومتطلبات المعالجة واقتصاديات التركيب لتطوير حلول عملية مناسبة لكل تطبيق.'
                  : 'AWA brings together international ingredient expertise, applied food science and manufacturing knowledge to help food manufacturers solve product and processing challenges. We evaluate ingredient functionality, processing requirements and formulation economics to develop practical solutions suited to each application.'}
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>{isAr ? 'اكتشف من نحن ↗' : 'Discover who we are ↗'}</span>
              </Link>
            </div>
          </div>

          {/* 3 Equal-Height Value Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link 
              to="/capabilities/sourcing" 
              className="group flex flex-col justify-between h-full bg-slate-50/70 dark:bg-slate-900/60 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-md transition-all"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={v9Assets.v7Assets.sourcing} 
                    alt="Food ingredient consignments and international sourcing operations" 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    loading="eager" 
                  />
                </div>
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
                  {isAr ? '01 · التوريد وسلاسل الإمداد العالمية' : '01 · Global Sourcing & Supply'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {isAr ? 'تحديد المكونات والتقنيات المناسبة.' : 'Identify the right ingredients and technologies.'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {capabilityData[0].desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>{isAr ? 'استكشف القدرة' : 'Explore capability'}</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </Link>

            <Link 
              to="/capabilities/rd" 
              className="group flex flex-col justify-between h-full bg-slate-50/70 dark:bg-slate-900/60 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-md transition-all"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={v9Assets.v7Assets.formulation} 
                    alt="Food R&D laboratory conducting formulation evaluations" 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    loading="eager" 
                  />
                </div>
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
                  {isAr ? '02 · البحث والتطوير والتطبيقات' : '02 · R&D & Application Development'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {isAr ? 'بناء الوظائف الفنية حول عملياتك.' : 'Build functionality around your process.'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {capabilityData[1].desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>{isAr ? 'استكشف القدرة' : 'Explore capability'}</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </Link>

            <Link 
              to="/capabilities/manufacturing" 
              className="group flex flex-col justify-between h-full bg-slate-50/70 dark:bg-slate-900/60 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-md transition-all"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={v9Assets.v7Assets.factory} 
                    alt="AWA Group manufacturing facility showing industrial processing machinery" 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    loading="eager" 
                  />
                </div>
                <span className="block text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
                  {isAr ? '03 · التميز في التصنيع' : '03 · Manufacturing Excellence'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {isAr ? 'ترجمة خبرات التركيب إلى إنتاج واقعي.' : 'Translate formulation expertise into production.'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {capabilityData[3].desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>{isAr ? 'استكشف القدرة' : 'Explore capability'}</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. TAILORED FORMULATION EXPERTISE — MODULAR BANNER  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white dark:bg-slate-850 rounded-3xl p-8 md:p-12 lg:p-14 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>{isAr ? 'خبرة التركيبات المخصصة' : 'TAILORED FORMULATION EXPERTISE'}</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {isAr ? (
                    <>مصممة للأداء.<br /><span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">ومحسوبة للقيمة.</span></>
                  ) : (
                    <>Designed for performance.<br /><span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">Considered for value.</span></>
                  )}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {isAr
                    ? 'تتطلب تركيبات الأغذية التوازن الصحيح بين الوظائف الفنية وظروف التشغيل والأهداف التجارية. تجمع AWA بين توريد المكونات وتطوير التطبيقات لتقييم البدائل المناسبة وتحسين أنظمة المكونات ومساعدة العملاء على تحقيق أهداف الأداء والتكلفة المحددة.'
                    : 'Food formulation requires the right balance between functionality, process conditions and commercial targets. AWA combines ingredient sourcing and application development to assess suitable alternatives, optimize ingredient systems and support customers in meeting defined performance and cost objectives.'}
                </p>
                <Link 
                  to="/capabilities/formulations" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  <span>{isAr ? 'استكشف التركيبات المخصصة' : 'Explore customized formulations'}</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. COMMITMENT TO INTERNATIONAL STANDARDS            */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 scroll-margin" id="certifications-home">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{isAr ? 'الالتزام بالمعايير الدولية' : 'COMMITMENT TO INTERNATIONAL STANDARDS'}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                {isAr ? (
                  <>معايير دولية. <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">جودة في الممارسة.</span></>
                ) : (
                  <>International Standards. <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">Quality in Practice.</span></>
                )}
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {isAr
                  ? 'في مجموعة AWA، تعتبر الجودة وسلامة الأغذية والعمليات المسؤولة ركائز أساسية لطريقة عملنا. تدعم عملياتنا التصنيعية أنظمة إدارة معترف بها وشهادات للمنتجات وتسجيلات تنظيمية ذات صلة، مما يعكس التزاماً بالاتساق والانضباط التشغيلي والتحسين المستمر.'
                  : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing operations are supported by recognized management systems, product certifications and relevant regulatory registrations, reflecting a commitment to consistency, operational discipline and continual improvement.'}
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <span className="text-xl text-emerald-600 block mb-2 font-mono">✳</span>
              <b className="block text-sm font-bold text-slate-900 dark:text-white mb-1">
                {isAr ? 'جودة مدعومة بأنظمة معترف بها.' : 'Quality, supported by recognized systems.'}
              </b>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {isAr ? 'سلامة الغذاء · الجودة · البيئة · الأفراد' : 'Food Safety · Quality · Environment · People'}
              </span>
            </div>
          </div>

          {/* Group 1: International Certifications (5 Equal Columns) */}
          <div className="mb-10">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              {isAr ? 'الشهادات الدولية' : 'INTERNATIONAL CERTIFICATIONS'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {certifications.filter(c => c.group === 'international').map(c => {
                const asset = (v9Assets.corporateAssets as any)[c.asset];
                return (
                  <Link 
                    key={c.id} 
                    to="/quality" 
                    className="group flex flex-col justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="h-16 flex items-center justify-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 mb-3 border border-slate-100 dark:border-slate-800">
                        <img 
                          src={asset} 
                          alt={`${c.code} logo`} 
                          className="max-h-10 max-w-[110px] object-contain group-hover:scale-105 transition-transform" 
                          loading="eager" 
                        />
                      </div>
                      <strong className="block text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {c.code}
                      </strong>
                      <small className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {c.type}
                      </small>
                    </div>
                    <span className="text-[10px] text-slate-400 group-hover:text-emerald-600 font-bold self-end mt-3">
                      ↗
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Group 2: Regulatory Registration (2 Columns) */}
          <div className="mb-8">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              {isAr ? 'التسجيل والإدراج التنظيمي' : 'REGULATORY REGISTRATION & LISTING'}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {certifications.filter(c => c.group === 'regulatory').map(c => {
                const asset = (v9Assets.corporateAssets as any)[c.asset];
                return (
                  <Link 
                    key={c.id} 
                    to="/quality" 
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/60 hover:shadow-xs transition-all gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="h-14 w-20 flex items-center justify-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex-shrink-0">
                        <img 
                          src={asset} 
                          alt={`${c.code} logo`} 
                          className="max-h-9 max-w-[70px] object-contain group-hover:scale-105 transition-transform" 
                          loading="eager" 
                        />
                      </div>
                      <div>
                        <strong className="block text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {c.code}
                        </strong>
                        <small className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {c.type}
                        </small>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-emerald-600 font-bold flex-shrink-0">
                      ↗
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="max-w-2xl">
              {isAr
                ? 'تتطلب منشأة AWA Food Solutions وادعاءات المنتجات المعتمدة تأكيد النطاق والصلاحية الحاليين قبل النشر.'
                : 'AWA Food Solutions facility and certified-product claims require confirmation of current scope and validity before publication.'}
            </span>
            <Link to="/quality" className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex-shrink-0">
              <span>{isAr ? 'استكشف الجودة والشهادات ↗' : 'Explore Quality & Certifications ↗'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. RESPONSIBLE GROWTH & SUSTAINABILITY              */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-slate-50/50 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{isAr ? 'النمو المسؤول' : 'RESPONSIBLE GROWTH'}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                {isAr ? (
                  <>نمو مسؤول. <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">وأثر دائم.</span></>
                ) : (
                  <>Responsible Growth. <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">Lasting Impact.</span></>
                )}
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {isAr
                  ? 'نؤمن بأن النمو طويل الأجل ينبع من قرارات مسؤولة عبر عملياتنا وسلسلة القيمة بأكملها. يركز نهجنا على ممارسات الموردين، وكفاءة الموارد، والابتكار المسؤول في المنتجات، وسلامة ورفاهية كوادرنا، مدعوماً بالتزام دائم بالتحسين المستمر.'
                  : 'We believe long-term growth comes from responsible decisions across our operations and value chain. Our approach focuses on supplier practices, resource efficiency, responsible product innovation and the wellbeing of our people, supported by a commitment to continuous improvement.'}
              </p>
              <Link 
                to="/sustainability" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-emerald-600 text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                <span>{isAr ? 'استكشف الاستدامة' : 'Explore sustainability'}</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Right 2x2 Symmetrical KPI Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs">
                <strong className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {isAr ? 'التوريد المسؤول' : 'Responsible Sourcing'}
                </strong>
                <span className="block text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'تقييم الموردين وعلاقات المكونات الموثوقة' : 'Supplier evaluation and dependable ingredient relationships'}
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs">
                <strong className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {isAr ? 'كفاءة الموارد' : 'Resource Efficiency'}
                </strong>
                <span className="block text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'إدارة الطاقة والمياه والمواد والنفايات' : 'Energy, water, materials and waste management'}
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs">
                <strong className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {isAr ? 'الابتكار المسؤول' : 'Responsible Innovation'}
                </strong>
                <span className="block text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'كفاءة المكونات والتركيب الواعي بالعمليات' : 'Ingredient efficiency and process-aware formulation'}
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs">
                <strong className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {isAr ? 'الأفراد والسلامة' : 'People & Safety'}
                </strong>
                <span className="block text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isAr ? 'أماكن عمل آمنة وتدريب ومسؤولية' : 'Safe workplaces, training and accountability'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. INSIGHTS & NEWS — 3 EQUAL-HEIGHT ARTICLE TILES    */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          {/* Symmetrical Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>{isAr ? 'الرؤى والأخبار' : 'INSIGHTS & NEWS'}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {isAr ? (
                  <>معرفة تدعم <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">التقدم.</span></>
                ) : (
                  <>Knowledge that <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">supports progress.</span></>
                )}
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {isAr
                ? 'توضح المعرفة التقنية وقصص الابتكار المعتمدة والتطورات المؤسسية كيف تطبق AWA خبراتها عبر قطاعات صناعة الأغذية.'
                : 'Technical knowledge, approved innovation stories and corporate developments demonstrate how AWA applies its expertise across the food industry.'}
            </p>
          </div>

          {/* 3 Equal-Height Technical Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <article className="flex flex-col justify-between h-full p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800">
              <div>
                <small className="block text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                  {isAr ? 'المعرفة التطبيقية' : 'APPLICATION KNOWLEDGE'}
                </small>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {isAr ? 'تركيبات مصممة وفقاً لمتطلبات العمليات.' : 'Formulation tailored to process requirements.'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'فهم كيفية تأثير المكونات ومصفوفات المنتجات ومعايير المعالجة على الأداء.'
                    : 'Understanding how ingredients, product matrices and processing parameters affect performance.'}
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between h-full p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800">
              <div>
                <small className="block text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                  {isAr ? 'الابتكار الصناعي' : 'INDUSTRIAL INNOVATION'}
                </small>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {isAr ? 'من التجارب التقنية إلى الحلول العملية.' : 'From technical trials to practical solutions.'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'كيف يدعم تطوير التطبيقات المنظم والتقنيات المتخصصة مصنعي الأغذية.'
                    : 'How structured application development and specialist technologies support food manufacturers.'}
                </p>
              </div>
            </article>

            <article className="flex flex-col justify-between h-full p-8 rounded-3xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800">
              <div>
                <small className="block text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                  {isAr ? 'العمليات المسؤولة' : 'RESPONSIBLE OPERATIONS'}
                </small>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {isAr ? 'المعايير الدولية في الممارسة اليومية.' : 'International standards in daily practice.'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'الجودة والسلامة والاستدامة كمسؤوليات تشغيلية بدلاً من مجرد ادعاءات تسويقية.'
                    : 'Quality, safety and sustainability as operational disciplines rather than marketing claims.'}
                </p>
              </div>
            </article>
          </div>

          <div className="text-center">
            <Link to="/knowledge" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
              <span>{isAr ? 'استكشف الرؤى والأخبار ↗' : 'Explore Insights & News ↗'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 9. CLOSING CALL TO ACTION — HIGH-CONTRAST DISCIPLINE */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left rtl:lg:text-right">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {isAr
                  ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.'
                  : 'Tell us about your application or project and connect with the right team.'}
              </p>
            </div>

            <Link 
              to="/contact?type=technical" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-950 hover:bg-emerald-400 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex-shrink-0"
            >
              <span>{isAr ? 'ناقش مشروعك' : 'Discuss your project'}</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
