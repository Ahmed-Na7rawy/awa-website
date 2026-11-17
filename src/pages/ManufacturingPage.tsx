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

      {/* 4. Infrastructure Numbers */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.25rem' }}>5.5 MT</div>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Powder Blending / Hr</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>High-shear automated dry mixing lines with micro-ingredient dosing precision.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: '0.25rem' }}>10 MT</div>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Liquid Compounding / Hr</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Dedicated liquid processing tanks with temperature regulation and shear control.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.25rem' }}>15,000 MT</div>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Storage Footprint</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Multi-temperature ambient and refrigerated warehousing preserving raw material integrity.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: '0.25rem' }}>FSSC 22000</div>
              <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Certified Food Safety</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Rigorous cleanroom operating discipline, HACCP protocols, and batch COA releases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'الإنتاج الصناعي' : 'INDUSTRIAL PRODUCTION'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'ناقش خطط الإنتاج والخلط الصناعي' : 'Connect with our manufacturing team'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'فريق العمليات في برج العرب مستعد لتلبية متطلبات التوريد والإنتاج الموسع.' : 'Our Borg El-Arab operations team is prepared to support your continuous commercial supply.'}
            </p>
          </div>
          <Link to="/contact?type=manufacturing" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'تواصل مع إدارة التصنيع' : 'Inquire about manufacturing'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
