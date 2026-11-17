import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, ShieldCheck, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets, principals, jointVentures } from '../data/v9Data';

export const SourcingPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="sourcing-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'التوريد وسلاسل الإمداد العالمية • مجموعة AWA' : 'Global Sourcing & Supply • AWA Group'}
        description="AWA connects food manufacturers to international principals, specialty technologies and commercially appropriate ingredient systems."
        path="/capabilities/sourcing"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['sourcing-port'] || v9Assets.v7Assets.sourcing} 
            alt="Global Sourcing Operations" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/capabilities">{isAr ? 'قدراتنا' : 'Capabilities'}</Link>
            <span>›</span>
            <span>{isAr ? 'التوريد العالمي' : 'Global Sourcing'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'قدرات AWA / التوريد' : 'OUR CAPABILITIES / SOURCE'}</div>
          <h1>
            {isAr ? (
              <>مكونات عالمية.<br /><em className="italic">توريد موجه بالتطبيق الفعلي.</em></>
            ) : (
              <>Global ingredients.<br /><em className="italic">Application-led sourcing.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تربط AWA مصنعي الأغذية بالوكالات العالمية، والتقنيات التخصصية، وأنظمة المكونات المجدية تجارياً، مع تقييم الملاءمة للأداء والجودة واستمرارية الإمداد.'
              : 'AWA connects food manufacturers to international principals, specialty technologies and commercially appropriate ingredient systems, while evaluating fit against performance, quality, supply continuity and local application requirements.'}
          </p>
        </div>
      </section>

      {/* 2. Sourcing Philosophy */}
      <section className="section">
        <div className="wrap intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <div className="kicker">{isAr ? 'التوريد كقدرة فنية' : 'SOURCING AS A TECHNICAL CAPABILITY'}</div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
              {isAr ? (
                <>أكثر من مجرد شراء خامات.<br /><span className="accent">بناء حول المواصفة الفنية.</span></>
              ) : (
                <>Beyond procurement.<br /><span className="accent">Built around the specification.</span></>
              )}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              {isAr
                ? 'يبدأ نهج التوريد لدينا بملف المتطلبات الفنية والتجارية. نقوم بتقييم الخصائص الوظيفية، والشهادات والوثائق، والتوفر، واشتراطات سلامة الغذاء، والخيارات المتاحة من شبكة وكلائنا العالمية.'
                : 'Our sourcing approach begins with a technical and commercial brief. Depending on the application, AWA evaluates functional properties, documentation, availability, food safety requirements, regulatory considerations and relevant supply options from our principal network.'}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {isAr
                ? 'نربط هذه الخبرة مع مركز التطبيقات R&D بحيث يدعم اختيار المكونات تطوير وصفات مخصصة تحقق أعلى تصافي وأقل تكلفة ممكنة.'
                : 'We connect this sourcing expertise with the Application Center so that ingredient selection can support tailored development and, where appropriate, cost-effective formulation development.'}
            </p>
            <Link to="/global#principals" className="btn btn-secondary">
              <span>{isAr ? 'التعرف على شبكة الوكالات العالمية' : 'Meet our global principals'}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Joint Ventures & Principals Strip */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'شراكات استراتيجية' : 'STRATEGIC COLLABORATION'}</div>
              <h2>{isAr ? 'المشاريع المشتركة والوكالات العالمية' : 'Joint Ventures & Global Principal Network'}</h2>
            </div>
            <p>
              {isAr
                ? 'تعزز مشاريعنا المشتركة وشراكاتنا مع كبار المصنعين في أكثر من 30 دولة وصولنا المباشر إلى أحدث الابتكارات.'
                : 'Our joint ventures complement our global principal relationships and support specialized ingredient technologies for food manufacturers.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
            {jointVentures.map((jv, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {jv.region}
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-muted)' }}>
                    Strategic Joint Venture
                  </span>
                </div>

                <h3 style={{ fontSize: '1.75rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {jv.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--primary-blue)', fontWeight: 700, marginBottom: '1rem' }}>
                  {jv.category}
                </p>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {jv.desc}
                </p>
                <a 
                  href={jv.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}
                >
                  Visit official website <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/global" className="btn btn-primary">
              <span>{isAr ? 'استعراض كافة الوكالات العالمية (Siveele, JRS, AIPU, etc.)' : 'View Full Global Principal Network'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Sourcing Features List */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg-soft)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>01</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Supplier Audits</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Direct factory auditing, technical dossiers, and Halal / FSSC traceability.</p>
            </div>
            <div style={{ background: 'var(--bg-soft)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>02</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Batch Documentation</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Verified Certificate of Analysis (COA) with each raw material consignment.</p>
            </div>
            <div style={{ background: 'var(--bg-soft)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>03</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Temperature Control</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Multi-temperature ambient and cold storage preserving ingredient functionality.</p>
            </div>
            <div style={{ background: 'var(--bg-soft)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>04</div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>Supply Continuity</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Spot and long-term contract purchasing protecting against price spikes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'توريد الخامات' : 'RAW MATERIAL PROCUREMENT'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'تبحث عن خامة معينة أو مورد موثوق؟' : 'Inquire about specific raw ingredients'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'فريق الاستيراد والتوريد في AWA جاهز لتقديم العروض الفنية والأسعار التعاقدية.' : 'Our sourcing desk connects you with certified origin producers across 30+ countries.'}
            </p>
          </div>
          <Link to="/contact?type=technical" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'طلب تسعير ومواصفات الخامات' : 'Request ingredient quote'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
