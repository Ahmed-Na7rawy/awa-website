import React, { useState, useRef } from 'react';
import { 
  ArrowUpRight,
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
    <div className="home-page" style={{ background: '#FFFFFF' }}>
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
      {/* 2. FIND PATHS QUICK BAR (EXACT V9 COMPONENT)        */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="find-paths">
        <div className="wrap find-paths-inner">
          <div className="find-paths-heading">
            <strong>{isAr ? 'اعثر على حلك' : 'Find your solution'}</strong>
            <small>{isAr ? 'استكشف محفظة AWA الصناعية' : "Explore AWA's industrial portfolio"}</small>
          </div>
          <button type="button" onClick={() => handleJumpExplore('industry')}>
            <span className="path-icon">▦</span>
            <span>{isAr ? 'حسب الصناعة' : 'By Industry'}<small>{isAr ? 'استكشف تطبيقات الأغذية' : 'Explore food applications'}</small></span>
            <b>↗</b>
          </button>
          <button type="button" onClick={() => handleJumpExplore('challenge')}>
            <span className="path-icon">◎</span>
            <span>{isAr ? 'حسب التحدي' : 'By Challenge'}<small>{isAr ? 'حل مشكلة تقنية' : 'Address a technical need'}</small></span>
            <b>↗</b>
          </button>
          <button type="button" onClick={() => handleJumpExplore('family')}>
            <span className="path-icon">▧</span>
            <span>{isAr ? 'حسب العائلة' : 'By Product Family'}<small>{isAr ? 'استكشف وظائف المكونات' : 'Explore ingredient functions'}</small></span>
            <b>↗</b>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 3. EXPLORE SECTION — 3 APPROACHES (EXACT V9)        */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section tint scroll-margin" id="explore">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}</div>
              <h2>
                {isAr ? (
                  <>استكشف خبراتنا <span className="accent">بطريقتك.</span></>
                ) : (
                  <>Explore our expertise <span className="accent">your way.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'نوفر مكونات غذائية وأنظمة وظيفية وتركيبات مخصصة مصممة وفقاً لمتطلبات التصنيع المحددة. تصفح حسب التطبيق أو التحدي الفني أو العائلة الوظيفية للمنتج.'
                : 'We provide food ingredients, functional systems and customized formulations designed around specific manufacturing requirements. Browse by application, technical challenge or functional product family.'}
            </p>
          </div>

          <div className="browser-tabs" role="tablist" aria-label="Explore industrial solutions">
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'industry'} 
              onClick={() => setActiveTab('industry')}
            >
              <span className="approach-icon" aria-hidden="true">▦</span> {isAr ? 'حسب الصناعة' : 'By Industry'}
            </button>
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'challenge'} 
              onClick={() => setActiveTab('challenge')}
            >
              <span className="approach-icon" aria-hidden="true">◎</span> {isAr ? 'حسب التحدي' : 'By Challenge'}
            </button>
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'family'} 
              onClick={() => setActiveTab('family')}
            >
              <span className="approach-icon" aria-hidden="true">▧</span> {isAr ? 'حسب عائلة المنتج' : 'By Product Family'}
            </button>
          </div>

          <div className="browser-results" id="explorer-results">
            {activeTab === 'industry' && (
              industryData.map((o) => {
                const photo = (v9Assets.v7Assets as any)[o.id] || v9Assets.v8Assets['industry-mosaic'];
                return (
                  <Link 
                    key={o.id} 
                    className="browser-card industry-photo-card" 
                    to={`/solutions/industry/${o.id}`} 
                    aria-label={`Explore ${o.title}`}
                  >
                    <div className="industry-card-photo">
                      <img 
                        src={photo} 
                        alt={`Close-up food application photography for ${o.title}`} 
                        loading="lazy" 
                      />
                    </div>
                    <div className="industry-card-body">
                      <strong>{o.title}</strong>
                      <span className="industry-card-arrow" aria-hidden="true">↗</span>
                    </div>
                  </Link>
                );
              })
            )}

            {activeTab === 'challenge' && (
              challengeData.map((o) => (
                <Link 
                  key={o.id} 
                  className="browser-card discovery-card" 
                  to={`/solutions/challenge/${o.id}`}
                >
                  <span className="tiny-icon" aria-hidden="true">{o.icon}</span>
                  <strong>{o.title}</strong>
                  <p>{o.desc}</p>
                  <span>{isAr ? 'استكشف التحدي ↗' : 'Explore challenge ↗'}</span>
                </Link>
              ))
            )}

            {activeTab === 'family' && (
              familyData.map((o) => (
                <Link 
                  key={o.id} 
                  className="browser-card discovery-card" 
                  to={`/solutions/family/${o.id}`}
                >
                  <span className="tiny-icon" aria-hidden="true">{o.icon}</span>
                  <strong>{o.title}</strong>
                  <p>{o.desc}</p>
                  <span>{isAr ? 'استكشف عائلة المنتج ↗' : 'Explore product family ↗'}</span>
                </Link>
              ))
            )}
          </div>

          <div className="cta-small">
            <Link to="/solutions" className="btn outline">
              <span>{isAr ? 'استكشف دليل الحلول الكامل' : 'Explore full solutions directory'}</span>
              <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 4. THE AWA DIFFERENCE (EXACT V9 COMPONENT)          */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section">
        <div className="wrap">
          <div className="home-intro">
            <div>
              <div className="kicker">{isAr ? 'ميزة AWA' : 'THE AWA DIFFERENCE'}</div>
              <h2>
                {isAr ? (
                  <>خبرة فنية، مصممة <span className="accent">لتطبيقك.</span></>
                ) : (
                  <>Technical expertise, tailored to <span className="accent">your application.</span></>
                )}
              </h2>
            </div>
            <div className="home-intro-right">
              <p>
                {isAr
                  ? 'تجمع AWA بين خبرة المكونات الدولية وعلوم الأغذية التطبيقية والمعرفة التصنيعية لمساعدة مصنعي الأغذية على حل تحديات المنتجات والتصنيع. نقوم بتقييم وظائف المكونات ومتطلبات المعالجة واقتصاديات التركيب لتطوير حلول عملية مناسبة لكل تطبيق.'
                  : 'AWA brings together international ingredient expertise, applied food science and manufacturing knowledge to help food manufacturers solve product and processing challenges. We evaluate ingredient functionality, processing requirements and formulation economics to develop practical solutions suited to each application.'}
              </p>
              <Link to="/about" className="text-link">
                {isAr ? 'اكتشف من نحن ↗' : 'Discover who we are ↗'}
              </Link>
            </div>
          </div>

          <div className="value-cards">
            <Link to="/capabilities/sourcing" className="value-card capability-photo-card">
              <div className="capability-card-photo">
                <img 
                  src={v9Assets.v7Assets.sourcing} 
                  alt="Food ingredient consignments and international sourcing operations" 
                  loading="eager" 
                />
              </div>
              <div className="capability-card-text">
                <span>{isAr ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply'}</span>
                <h3>{isAr ? 'تحديد المكونات والتقنيات المناسبة.' : 'Identify the right ingredients and technologies.'}</h3>
                <p>{capabilityData[0].desc}</p>
              </div>
            </Link>

            <Link to="/capabilities/rd" className="value-card capability-photo-card">
              <div className="capability-card-photo">
                <img 
                  src={v9Assets.v7Assets.formulation} 
                  alt="Food R&D laboratory conducting formulation evaluations" 
                  loading="eager" 
                />
              </div>
              <div className="capability-card-text">
                <span>{isAr ? 'البحث والتطوير والتطبيقات' : 'R&D & Application Development'}</span>
                <h3>{isAr ? 'بناء الوظائف الفنية حول عملياتك.' : 'Build functionality around your process.'}</h3>
                <p>{capabilityData[1].desc}</p>
              </div>
            </Link>

            <Link to="/capabilities/manufacturing" className="value-card capability-photo-card">
              <div className="capability-card-photo">
                <img 
                  src={v9Assets.v7Assets.factory} 
                  alt="AWA Group manufacturing facility showing industrial processing machinery" 
                  loading="eager" 
                />
              </div>
              <div className="capability-card-text">
                <span>{isAr ? 'التميز في التصنيع' : 'Manufacturing Excellence'}</span>
                <h3>{isAr ? 'ترجمة خبرات التركيب إلى إنتاج واقعي.' : 'Translate formulation expertise into production.'}</h3>
                <p>{capabilityData[3].desc}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 5. TAILORED FORMULATION EXPERTISE (EXACT V9)        */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section">
        <div className="wrap intro-grid">
          <div>
            <div className="kicker">{isAr ? 'خبرة التركيبات المخصصة' : 'TAILORED FORMULATION EXPERTISE'}</div>
            <h2>
              {isAr ? (
                <>مصممة للأداء.<br /><span className="accent">ومحسوبة للقيمة.</span></>
              ) : (
                <>Designed for performance.<br /><span className="accent">Considered for value.</span></>
              )}
            </h2>
          </div>
          <div>
            <p>
              {isAr
                ? 'تتطلب تركيبات الأغذية التوازن الصحيح بين الوظائف الفنية وظروف التشغيل والأهداف التجارية. تجمع AWA بين توريد المكونات وتطوير التطبيقات لتقييم البدائل المناسبة وتحسين أنظمة المكونات ومساعدة العملاء على تحقيق أهداف الأداء والتكلفة المحددة.'
                : 'Food formulation requires the right balance between functionality, process conditions and commercial targets. AWA combines ingredient sourcing and application development to assess suitable alternatives, optimize ingredient systems and support customers in meeting defined performance and cost objectives.'}
            </p>
            <Link to="/capabilities/formulations" className="btn outline">
              <span>{isAr ? 'استكشف التركيبات المخصصة' : 'Explore customized formulations'}</span>
              <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. COMMITMENT TO INTERNATIONAL STANDARDS (EXACT V9) */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="standards-showcase section" id="certifications-home">
        <div className="wrap">
          <div className="standards-top">
            <div>
              <div className="kicker">{isAr ? 'الالتزام بالمعايير الدولية' : 'COMMITMENT TO INTERNATIONAL STANDARDS'}</div>
              <h2>
                {isAr ? (
                  <>معايير دولية.<br /><span className="accent">جودة في الممارسة.</span></>
                ) : (
                  <>International Standards.<br /><span className="accent">Quality in Practice.</span></>
                )}
              </h2>
              <p>
                {isAr
                  ? 'في مجموعة AWA، تعتبر الجودة وسلامة الأغذية والعمليات المسؤولة ركائز أساسية لطريقة عملنا. تدعم عملياتنا التصنيعية أنظمة إدارة معترف بها وشهادات للمنتجات وتسجيلات تنظيمية ذات صلة، مما يعكس التزاماً بالاتساق والانضباط التشغيلي والتحسين المستمر.'
                  : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing operations are supported by recognized management systems, product certifications and relevant regulatory registrations, reflecting a commitment to consistency, operational discipline and continual improvement.'}
              </p>
            </div>
            <div className="standards-overview">
              <span className="standards-star">✳</span>
              <b>{isAr ? 'جودة مدعومة بأنظمة معترف بها.' : 'Quality, supported by recognized systems.'}</b>
              <span>{isAr ? 'سلامة الغذاء · الجودة · البيئة · الأفراد' : 'Food Safety · Quality · Environment · People'}</span>
            </div>
          </div>

          <div className="standards-category">
            {isAr ? 'الشهادات الدولية' : 'INTERNATIONAL CERTIFICATIONS'}
          </div>
          <div className="cert-tile-grid">
            {certifications.filter(c => c.group === 'international').map(c => {
              const asset = (v9Assets.corporateAssets as any)[c.asset];
              return (
                <Link key={c.id} to="/quality" className="cert-tile compact-cert">
                  <div className="cert-logo-frame">
                    <img src={asset} alt={`${c.code} logo`} loading="eager" />
                  </div>
                  <div className="cert-tile-copy">
                    <strong>{c.code}</strong>
                    <small>{c.type}</small>
                  </div>
                  <span className="cert-more">↗</span>
                </Link>
              );
            })}
          </div>

          <div className="standards-category">
            {isAr ? 'التسجيل والإدراج التنظيمي' : 'REGULATORY REGISTRATION & LISTING'}
          </div>
          <div className="cert-tile-grid regulatory-grid">
            {certifications.filter(c => c.group === 'regulatory').map(c => {
              const asset = (v9Assets.corporateAssets as any)[c.asset];
              return (
                <Link key={c.id} to="/quality" className="cert-tile compact-cert">
                  <div className="cert-logo-frame">
                    <img src={asset} alt={`${c.code} logo`} loading="eager" />
                  </div>
                  <div className="cert-tile-copy">
                    <strong>{c.code}</strong>
                    <small>{c.type}</small>
                  </div>
                  <span className="cert-more">↗</span>
                </Link>
              );
            })}
          </div>

          <div className="standards-bottom">
            <span>
              {isAr
                ? 'تتطلب منشأة AWA Food Solutions وادعاءات المنتجات المعتمدة تأكيد النطاق والصلاحية الحاليين قبل النشر.'
                : 'AWA Food Solutions facility and certified-product claims require confirmation of current scope and validity before publication.'}
            </span>
            <Link to="/quality" className="text-link">
              {isAr ? 'استكشف الجودة والشهادات ↗' : 'Explore Quality & Certifications ↗'}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. RESPONSIBLE GROWTH & SUSTAINABILITY (EXACT V9)   */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section tint">
        <div className="wrap sustainability-home">
          <div>
            <div className="kicker">{isAr ? 'النمو المسؤول' : 'RESPONSIBLE GROWTH'}</div>
            <h2>
              {isAr ? (
                <>نمو مسؤول.<br /><span className="accent">وأثر دائم.</span></>
              ) : (
                <>Responsible Growth.<br /><span className="accent">Lasting Impact.</span></>
              )}
            </h2>
            <p>
              {isAr
                ? 'نؤمن بأن النمو طويل الأجل ينبع من قرارات مسؤولة عبر عملياتنا وسلسلة القيمة بأكملها. يركز نهجنا على ممارسات الموردين، وكفاءة الموارد، والابتكار المسؤول في المنتجات، وسلامة ورفاهية كوادرنا، مدعوماً بالتزام دائم بالتحسين المستمر.'
                : 'We believe long-term growth comes from responsible decisions across our operations and value chain. Our approach focuses on supplier practices, resource efficiency, responsible product innovation and the wellbeing of our people, supported by a commitment to continuous improvement.'}
            </p>
            <Link to="/sustainability" className="btn outline">
              <span>{isAr ? 'استكشف الاستدامة' : 'Explore sustainability'}</span>
              <span className="arrow">↗</span>
            </Link>
          </div>
          <div className="sustainability-kpis">
            <div>
              <strong>{isAr ? 'التوريد المسؤول' : 'Responsible Sourcing'}</strong>
              <span>{isAr ? 'تقييم الموردين وعلاقات المكونات الموثوقة' : 'Supplier evaluation and dependable ingredient relationships'}</span>
            </div>
            <div>
              <strong>{isAr ? 'كفاءة الموارد' : 'Resource Efficiency'}</strong>
              <span>{isAr ? 'إدارة الطاقة والمياه والمواد والنفايات' : 'Energy, water, materials and waste management'}</span>
            </div>
            <div>
              <strong>{isAr ? 'الابتكار المسؤول' : 'Responsible Innovation'}</strong>
              <span>{isAr ? 'كفاءة المكونات والتركيب الواعي بالعمليات' : 'Ingredient efficiency and process-aware formulation'}</span>
            </div>
            <div>
              <strong>{isAr ? 'الأفراد والسلامة' : 'People & Safety'}</strong>
              <span>{isAr ? 'أماكن عمل آمنة وتدريب ومسؤولية' : 'Safe workplaces, training and accountability'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. INSIGHTS & NEWS (EXACT V9 COMPONENT)             */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'الرؤى والأخبار' : 'INSIGHTS & NEWS'}</div>
              <h2>
                {isAr ? (
                  <>معرفة تدعم <em className="italic">التقدم.</em></>
                ) : (
                  <>Knowledge that <em className="italic">supports progress.</em></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'توضح المعرفة التقنية وقصص الابتكار المعتمدة والتطورات المؤسسية كيف تطبق AWA خبراتها عبر قطاعات صناعة الأغذية.'
                : 'Technical knowledge, approved innovation stories and corporate developments demonstrate how AWA applies its expertise across the food industry.'}
            </p>
          </div>

          <div className="insight-mini">
            <article className="insight-tile">
              <small>{isAr ? 'المعرفة التطبيقية' : 'APPLICATION KNOWLEDGE'}</small>
              <h3>{isAr ? 'تركيبات مصممة وفقاً لمتطلبات العمليات.' : 'Formulation tailored to process requirements.'}</h3>
              <p>
                {isAr
                  ? 'فهم كيفية تأثير المكونات ومصفوفات المنتجات ومعايير المعالجة على الأداء.'
                  : 'Understanding how ingredients, product matrices and processing parameters affect performance.'}
              </p>
            </article>
            <article className="insight-tile">
              <small>{isAr ? 'الابتكار الصناعي' : 'INDUSTRIAL INNOVATION'}</small>
              <h3>{isAr ? 'من التجارب التقنية إلى الحلول العملية.' : 'From technical trials to practical solutions.'}</h3>
              <p>
                {isAr
                  ? 'كيف يدعم تطوير التطبيقات المنظم والتقنيات المتخصصة مصنعي الأغذية.'
                  : 'How structured application development and specialist technologies support food manufacturers.'}
              </p>
            </article>
            <article className="insight-tile">
              <small>{isAr ? 'العمليات المسؤولة' : 'RESPONSIBLE OPERATIONS'}</small>
              <h3>{isAr ? 'المعايير الدولية في الممارسة اليومية.' : 'International standards in daily practice.'}</h3>
              <p>
                {isAr
                  ? 'الجودة والسلامة والاستدامة كمسؤوليات تشغيلية بدلاً من مجرد ادعاءات تسويقية.'
                  : 'Quality, safety and sustainability as operational disciplines rather than marketing claims.'}
              </p>
            </article>
          </div>

          <Link to="/knowledge" className="text-link">
            {isAr ? 'استكشف الرؤى والأخبار ↗' : 'Explore Insights & News ↗'}
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 9. CLOSING CALL TO ACTION (EXACT V9 COMPONENT)      */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="closing-cta">
        <div className="wrap">
          <div>
            <div className="kicker on-dark">
              {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
            </div>
            <h2>
              {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
            </h2>
            <p>
              {isAr
                ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.'
                : 'Tell us about your application or project and connect with the right team.'}
            </p>
          </div>
          <Link to="/contact?type=technical" className="btn white">
            <span>{isAr ? 'ناقش مشروعك' : 'Discuss your project'}</span>
            <span className="arrow">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
