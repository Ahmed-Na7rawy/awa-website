import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search, Layers, Sparkles, Filter, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { 
  v9Assets, 
  industryData, 
  challengeData, 
  familyData, 
  solutionRecords 
} from '../data/v9Data';

export const SolutionsPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab') as 'industry' | 'challenge' | 'family' | null;

  const [activeTab, setActiveTab] = useState<'industry' | 'challenge' | 'family'>(tabParam || 'industry');

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  return (
    <div className="solutions-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'حلول الصناعات الغذائية • مجموعة AWA' : 'Industry Solutions • AWA Group'}
        description="AWA Group develops and supplies functional food ingredients, tailored systems and application-focused solutions for industrial manufacturers."
        path="/solutions"
      />

      {/* 1. Page Hero */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['food-cuisine'] || v9Assets.v7Assets.hero} 
            alt="Food Industry Solutions" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <span>{isAr ? 'حلول الصناعات الغذائية' : 'Industry Solutions'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'حلول الصناعات الغذائية' : 'FOOD INDUSTRY SOLUTIONS'}</div>
          <h1>
            {isAr ? (
              <>الحلول تبدأ من <em className="italic">تطبيقك الإنتاجي.</em></>
            ) : (
              <>Solutions begin with <em className="italic">your application.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تطور وتورد مجموعة AWA مكونات الأغذية الوظيفية، والأنظمة المخصصة، والحلول الموجهة للتطبيقات لمصنعي الأغذية. استكشف محفظتنا حسب القطاع الصناعي، أو التحدي التقني، أو عائلة المنتجات الوظيفية.'
              : 'AWA Group develops and supplies functional food ingredients, tailored systems and application-focused solutions for industrial manufacturers. Explore the portfolio by industry, technical challenge or functional ingredient family.'}
          </p>
        </div>
      </section>

      {/* 2. Three-Way Discovery Header & Tabs */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'استكشف محفظتنا' : 'DISCOVER OUR PORTFOLIO'}</div>
              <h2>
                {isAr ? (
                  <>اعثر على الخبرة التي <span className="accent">تحتاجها تحديداً.</span></>
                ) : (
                  <>Find the expertise <span className="accent">you need.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'ثلاثة مسارات مترابطة لاستكشاف حلول AWA: نوع الغذاء الذي تصنعه، أو التحدي التقني الذي ترغب في حله، أو التكنولوجيا الوظيفية التي تبحث عنها.'
                : 'Three connected ways to explore AWA’s offering: the food you manufacture, the challenge you want to address, or the functional technology you need. All routes lead into the same application and ingredient portfolio.'}
            </p>
          </div>

          {/* Quick Catalogue Callout Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 30, 154, 0.04) 0%, rgba(0, 168, 79, 0.06) 100%)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '1.25rem 1.75rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)', display: 'block' }}>
                {isAr ? 'هل تبحث عن كتالوج عائلات المنتجات الصناعية بالكامل؟' : 'Looking for the complete Industrial Product Families Catalogue?'}
              </strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {isAr ? 'تصفح كافة المكونات ومضافات الأغذية مع أدوات البحث والفلترة المتقدمة.' : 'Browse all ingredients, stabilizers, emulsifiers and bio-extracts with full search & filtering.'}
              </span>
            </div>
            <Link to="/solutions/catalogue" className="btn btn-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}>
              <span>{isAr ? 'فتح كتالوج المنتجات' : 'Open Product Catalogue'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Discovery Tabs */}
          <div className="browser-tabs" role="tablist">
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
              <span className="approach-icon" aria-hidden="true">◎</span> {isAr ? 'حسب التحدي التقني' : 'By Challenge'}
            </button>
            <button 
              type="button" 
              role="tab" 
              aria-selected={activeTab === 'family'}
              onClick={() => setActiveTab('family')}
            >
              <span className="approach-icon" aria-hidden="true">▧</span> {isAr ? 'حسب عائلة المنتجات' : 'By Product Family'}
            </button>
          </div>

          {/* Tab Content Display */}
          <div style={{ marginTop: '2.5rem' }}>
            {activeTab === 'industry' && (
              <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {industryData.map((ind) => (
                  <Link 
                    key={ind.id} 
                    to={`/solutions/industry/${ind.id}`}
                    className="browser-card industry-photo-card"
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: 'var(--shadow-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ height: '190px', overflow: 'hidden', position: 'relative' }}>
                      <img 
                        src={v9Assets.v7Assets[ind.id as keyof typeof v9Assets.v7Assets] || v9Assets.v7Assets.hero} 
                        alt={ind.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <strong style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem', display: 'block' }}>
                        {ind.title}
                      </strong>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.25rem', flexGrow: 1 }}>
                        {ind.desc}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)' }}>
                          {ind.subcategories?.length || 0} Subcategories
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
                          {isAr ? 'عرض الحلول' : 'Explore'} <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {activeTab === 'challenge' && (
              <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {challengeData.map((ch) => (
                  <Link 
                    key={ch.id} 
                    to={`/solutions/challenge/${ch.id}`}
                    className="browser-card discovery-card"
                    style={{
                      background: '#FFFFFF',
                      padding: '2rem',
                      borderRadius: '18px',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-subtle)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <span className="tiny-icon" style={{ fontSize: '1.8rem', color: 'var(--primary)', display: 'block', marginBottom: '0.75rem' }}>{ch.icon}</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>{ch.title}</strong>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{ch.desc}</p>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {isAr ? 'استكشف التحدي وحلوله' : 'Explore challenge & solutions'} <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            )}

            {activeTab === 'family' && (
              <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {familyData.map((fam) => (
                  <Link 
                    key={fam.id} 
                    to={`/solutions/family/${fam.id}`}
                    className="browser-card discovery-card"
                    style={{
                      background: '#FFFFFF',
                      padding: '2rem',
                      borderRadius: '18px',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-subtle)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <span className="tiny-icon" style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', display: 'block', marginBottom: '0.75rem' }}>{fam.icon}</span>
                    <strong style={{ fontSize: '1.25rem', color: 'var(--text-main)', display: 'block', marginBottom: '0.5rem' }}>{fam.title}</strong>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', flexGrow: 1 }}>{fam.desc}</p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                      {fam.subfamilies?.slice(0, 3).map((sf, idx) => (
                        <span key={idx} style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-muted)' }}>
                          {sf}
                        </span>
                      ))}
                    </div>

                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {isAr ? 'استكشف المنتجات والمواصفات' : 'Explore products & specifications'} <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL PARTNERSHIP (Exact V9 Content) */}
      <section className="section" id="technical-partnership" style={{ background: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '5.5rem 0' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: '3rem' }}>
            <div className="kicker">{isAr ? 'الشراكة التقنية' : 'TECHNICAL PARTNERSHIP'}</div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem', lineHeight: 1.25 }}>
              {isAr ? (
                <>تحدياتكم. خبراتنا.<br /><span className="accent">حلول تحقق الأداء الأمثل.</span></>
              ) : (
                <>Your Challenges. Our Expertise.<br /><span className="accent">Solutions That Perform.</span></>
              )}
            </h2>
            <div style={{ maxWidth: '820px' }}>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.025rem', marginBottom: '1rem' }}>
                {isAr
                  ? 'يقدم كل منتج غذائي تحديات فريدة، من تحقيق القوام والمذاق والاستقرار المطلوب إلى تحسين كفاءة المعالجة، وترشيد التكلفة، والحفاظ على الجودة الثابتة. تعمل AWA جنباً إلى جنب مع المصنعين لفهم متطلبات إنتاجهم وتطوير حلول سليمة تقنياً.'
                  : 'Every food product presents unique challenges, from achieving the right texture, taste and stability to improving processing efficiency, optimizing cost and maintaining consistent quality. AWA works alongside manufacturers to understand their production requirements and develop technically sound solutions.'}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.975rem', marginBottom: '1rem' }}>
                {isAr
                  ? 'يتطلب النجاح في تصنيع الأغذية أكثر من مجرد اختيار المكونات المناسبة. إنه يتطلب معرفة تقنية، وخبرة تطبيقية عملية، وشريكاً يفهم حقائق وظروف خطوط الإنتاج. يعمل فريقنا بشكل وثيق مع المصنعين لتقييم تحديات التركيبات، وتحديد التقنيات المناسبة، وتصميم نهج تطوير يتمحور حول متطلبات منتجاتهم ومعالجتهم الخاصة.'
                  : 'Successful food manufacturing requires more than selecting the right ingredients. It requires technical knowledge, practical application expertise and a partner who understands production realities. Our team works closely with manufacturers to assess formulation challenges, identify suitable technologies and design a development approach around their specific product and processing requirements.'}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.975rem', margin: 0 }}>
                {isAr
                  ? 'سواء كان الهدف تحسين تركيبة قائمة أو تطوير منتج جديد بالكامل، فإننا نجمع بين التوريد العالمي، والبحث والتطوير التطبيقي، والخبرة التصنيعية لدعم اختيار المكونات، وتحسين التركيبات، والتجارب التطبيقية ذات الصلة، والتنفيذ الصناعي على خطوط الإنتاج. وأياً كان التحدي، فإن التزامنا هو العمل جنباً إلى جنب مع عملائنا نحو حلول عملية، سليمة تقنياً ومجدية تجارياً.'
                  : 'Whether optimizing an existing formulation or developing a new product, we combine global sourcing, applied R&D and manufacturing expertise to support ingredient selection, formulation optimization, relevant application trials and manufacturing implementation. Whatever the challenge, our commitment is to work alongside customers toward practical, technically sound and commercially viable solutions.'}
              </p>
            </div>
          </div>

          {/* 4-Stage Process: UNDERSTAND, SOURCE, DEVELOP, VALIDATE */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                01 · {isAr ? 'فهم الاحتياج' : 'UNDERSTAND'}
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                {isAr ? 'تحديد التحدي' : 'Define the challenge'}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'فهم التطبيق الغذائي، وظروف المعالجة الصناعية، وموجز المشروع التقني، والنتائج المستهدفة.'
                  : 'Understand the application, processing conditions, technical brief and desired outcomes.'}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                02 · {isAr ? 'تحديد المصدر' : 'SOURCE'}
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                {isAr ? 'تحديد التقنيات ذات الصلة' : 'Identify relevant technologies'}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'تقييم المكونات والأنظمة المناسبة من خلال محافظنا المتخصصة وشبكتنا العالمية من الشركاء.'
                  : 'Evaluate suitable ingredients and systems through our specialist portfolios and global network.'}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                03 · {isAr ? 'التطوير والتجربة' : 'DEVELOP'}
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                {isAr ? 'التدقيق والتجريب المخبري' : 'Refine and trial'}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'تقييم خيارات التركيبات، والوظائف، والأهداف الحسية، والتوافق مع عمليات الإنتاج.'
                  : 'Assess formulation options, functionality, sensorial targets and process compatibility.'}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                04 · {isAr ? 'التحقق والمطابقة' : 'VALIDATE'}
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                {isAr ? 'دراسة إمكانية التنفيذ' : 'Consider implementation'}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'مراجعة الأداء، وجدوى التصنيع على نطاق واسع، والبدائل المجدية تجارياً.'
                  : 'Review performance, manufacturing feasibility and commercially viable alternatives.'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link to="/solutions/catalogue" className="btn btn-secondary">
              <span>{isAr ? 'تصفح عائلات المنتجات ↗' : 'Browse product families ↗'}</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/contact?type=technical" className="btn btn-primary">
              <span>{isAr ? 'ناقش تحديك التقني معنا ↗' : 'Discuss Your Technical Challenge ↗'}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Solution Records Highlight Table */}
      <section className="section" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'الأنظمة الوظيفية' : 'FUNCTIONAL SOLUTION RECORDS'}</div>
              <h2>
                {isAr ? 'أمثلة على حلولنا المعتمدة لخطوط الإنتاج' : 'Proven Solution Records in Industrial Production'}
              </h2>
            </div>
            <p>
              {isAr
                ? 'أنظمة متخصصة أثبتت كفاءتها في تحسين القوام، والارتقاء بالمذاق، وتقليل تكاليف التركيبات في مصانع الألبان واللحوم والمخبوزات.'
                : 'Engineered systems validated for texture enhancement, shelf-life extension, yield maximization and formulation economics across major food plants.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
            {solutionRecords.slice(0, 6).map((sol, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '1.75rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                    {sol.portfolio}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.65rem' }}>
                    {sol.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {sol.detail}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  {sol.industryIds.map((indId, iIdx) => (
                    <span key={iIdx} style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-main)' }}>
                      {indId}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/solutions/catalogue" className="btn btn-secondary">
              <span>{isAr ? 'عرض كافة حلول الكتالوج الصناعي (24+ نظام وظيفي)' : 'View All 24+ Solution Records in Catalogue'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA (Exact V9 Content) */}
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
    </div>
  );
};
