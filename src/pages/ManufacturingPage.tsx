import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ShieldCheck, CheckCircle2, ArrowRight, Award, Boxes, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const ManufacturingPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="manufacturing-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'التميز الصناعي والتصنيع • مجموعة AWA' : 'Manufacturing Excellence • AWA Group'}
        description="AWA links food systems manufacturing and selected consumer product development with technical know-how and disciplined operating processes."
        path="/capabilities/manufacturing"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v7Assets.factory} 
            alt="AWA Manufacturing Facility in New Borg El-Arab City" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/capabilities">{isAr ? 'قدراتنا' : 'Capabilities'}</Link>
            <span>›</span>
            <span>{isAr ? 'التميز الصناعي والتصنيع' : 'Manufacturing Excellence'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'القدرات التصنيعية' : 'MANUFACTURING EXCELLENCE'}</div>
          <h1>
            {isAr ? (
              <>خبرة تصنيعية متقدمة.<br /><em className="italic">مبنية حول الابتكار والجودة.</em></>
            ) : (
              <>Manufacturing expertise.<br /><em className="italic">Built around innovation.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تربط AWA بين تصنيع النظم والخلطات الغذائية وتطوير المنتجات الاستهلاكية المختارة بدقة، مدعومة بالمعرفة الفنية العميقة وإجراءات التشغيل الصارمة.'
              : 'AWA links food systems manufacturing and selected consumer product development with technical know-how, quality practices and disciplined operating processes.'}
          </p>
        </div>
      </section>

      {/* 2. Facility Photo Showcase */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="wrap">
          <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)', position: 'relative' }}>
            <img 
              src={v9Assets.v7Assets.factory} 
              alt="Actual AWA Group manufacturing equipment and facility" 
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '550px', objectFit: 'cover' }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: isAr ? 'auto' : '20px',
              right: isAr ? '20px' : 'auto',
              background: 'rgba(16, 38, 59, 0.88)',
              backdropFilter: 'blur(10px)',
              color: '#FFFFFF',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <span style={{ fontSize: '0.75rem', color: '#4ADE80', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                NEW BORG EL-ARAB COMPLEX
              </span>
              <strong style={{ fontSize: '0.95rem' }}>Actual AWA Manufacturing &amp; Compounding Facility</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Manufacturing Roles */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'الأدوار التصنيعية' : 'MANUFACTURING ROLE'}</div>
              <h2>
                {isAr ? (
                  <>قدرة تشغيلية أساسية. <span className="accent">وفرص تعاقدية انتقائية.</span></>
                ) : (
                  <>A core capability. <span className="accent">Selective external opportunities.</span></>
                )}
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                INDUSTRIAL SYSTEMS
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {isAr ? 'الأنظمة الغذائية الوظيفية' : 'Functional Food Systems'}
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr
                  ? 'خلطات مساحيق وسوائل متخصصة تم تطويرها وفقاً لمواصفات تشغيلية دقيقة لمصانع الألبان والأجبان واللحوم والمخبوزات.'
                  : 'Specialty blends and application-led systems developed around defined industrial specifications, functionality and manufacturing requirements.'}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-blue)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                CONSUMER PRODUCTS
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {isAr ? 'المنتجات الاستهلاكية التامة' : 'Finished Consumer Products'}
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr
                  ? 'منتجات أغذية ومشروبات معبأة وفق أعلى المعايير لعلامات AWA التجارية (Sweet & Slim, Yalla Drinks, SquEasy).'
                  : 'Selected food and beverage products developed within AWA’s own brand portfolio and approved retail commercial projects.'}
              </p>
            </div>

            <Link 
              to="/capabilities/strategic-manufacturing" 
              style={{
                background: 'var(--bg-soft)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    STRATEGIC FIT
                  </span>
                  <ArrowRight size={16} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  {isAr ? 'التصنيع التعاقدي للغير (OEM)' : 'Contract Manufacturing & OEM'}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {isAr
                    ? 'تقييم انتقائي لمشاريع التصنيع والتعبئة طويلة الأجل المتوافقة مع إمكانياتنا التكنولوجية.'
                    : 'Project-by-project evaluation for suitable long-term manufacturing partnerships where technical capabilities align.'}
                </p>
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                {isAr ? 'استعراض معايير التصنيع التعاقدي' : 'View strategic project criteria'} ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Quality in Execution (Exact V9) */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="kicker">{isAr ? 'الجودة في التنفيذ' : 'QUALITY IN EXECUTION'}</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
                {isAr ? (
                  <>من التركيبة المخبرية إلى <br /><span className="accent">الجدوى التصنيعية.</span></>
                ) : (
                  <>From formulation to <br /><span className="accent">manufacturing feasibility.</span></>
                )}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {isAr
                  ? 'بالنسبة للمصنعين الدوليين، يجب أن يُظهر التواصل الصناعي الموثوق قدرات العمليات الفعلية ونطاق المنتجات وضوابط الجودة والعلاقة بين تجارب التركيب والإنتاج التجاري. يستخدم موقع AWA صور إنتاج حقيقية وقدرات معتمدة ومواصفات تفصيلية للشهادات.'
                  : 'For international manufacturers, credible manufacturing communication must demonstrate actual process capabilities, product scope, quality controls and the relationship between formulation trials and commercial production. The live website should use authentic AWA production imagery, verified equipment capabilities and approved certification details.'}
              </p>
              <div style={{
                background: 'var(--bg-soft)',
                borderLeft: '4px solid var(--primary)',
                padding: '1rem 1.25rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                {isAr
                  ? 'يجب ألا نذكر الطاقات الإنتاجية والحد الأدنى للكميات والجداول الزمنية إلا بعد تأكيدها للمنشأة التصنيعية المعنية والترتيب التجاري المحدد.'
                  : 'We should only state capacities, minimum quantities and timelines after they are confirmed for the relevant manufacturing facility and commercial arrangement.'}
              </div>
              <Link to="/quality" className="btn btn-secondary">
                <span>{isAr ? 'الجودة والشهادات الدولية' : 'Quality & global certifications'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA (Exact V9) */}
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
              gap: '0.5rem'
            }}
          >
            <span>{isAr ? 'ناقش مشروعك' : 'Discuss your project'}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
