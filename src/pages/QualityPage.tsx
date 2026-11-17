import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, CheckCircle2, ArrowRight, FileCheck, ExternalLink, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets, certifications } from '../data/v9Data';

export const QualityPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const internationalCerts = certifications.filter(c => c.group === 'international');
  const regulatoryListings = certifications.filter(c => c.group === 'regulatory');

  return (
    <div className="quality-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'الجودة والشهادات المعتمدة • مجموعة AWA' : 'Quality & Certifications • AWA Group'}
        description="At AWA Group, quality, food safety and responsible operations are fundamental to how we work. FSSC 22000, ISO 9001, ISO 14001, ISO 45001 and Halal certified."
        path="/quality"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['technical-certs'] || v9Assets.v7Assets.factory} 
            alt="International Quality Certifications" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/about">{isAr ? 'عن AWA' : 'About'}</Link>
            <span>›</span>
            <span>{isAr ? 'الجودة والشهادات' : 'Quality & Certifications'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'أنظمة الجودة وسلامة الأغذية' : 'QUALITY & FOOD SAFETY'}</div>
          <h1>
            {isAr ? (
              <>المعايير الدولية.<br /><em className="italic">الجودة في الممارسة اليومية.</em></>
            ) : (
              <>International Standards.<br /><em className="italic">Quality in Practice.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'في مجموعة AWA، تعد الجودة وسلامة الأغذية والعمليات المسؤولة ركائز جوهرية لأسلوب عملنا. يتم دعم عملياتنا التصنيعية بأنظمة إدارة معترف بها عالمياً، وشهادات منتجات، وتسجيلات رقابية معتمدة.'
              : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing activities are supported by recognized management systems, product certifications and regulatory facility registrations.'}
          </p>
        </div>
      </section>

      {/* 2. International Management Systems */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'أنظمة الإدارة الدولية' : 'INTERNATIONAL CERTIFICATIONS'}</div>
              <h2>
                {isAr ? (
                  <>أنظمة معترف بها عالمياً. <span className="accent">ومعايير تشغيل متجانسة.</span></>
                ) : (
                  <>Recognized systems. <span className="accent">Consistent standards.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'تعكس شهاداتنا الدولية الالتزام بمتطلبات أنظمة الإدارة وسلامة الأغذية. يتم تقديم كل اعتماد وفقاً للمجال المحدد لمنشآت المجموعة.'
                : 'Our certifications reflect defined management system and product requirements. Each credential is presented with its correct facility, company or product scope.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {internationalCerts.map((c) => (
              <div 
                key={c.id}
                style={{
                  background: '#FFFFFF',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ width: '80px', height: '80px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={v9Assets.corporateAssets[c.asset as keyof typeof v9Assets.corporateAssets]} 
                      alt={c.code} 
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                    />
                  </div>

                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                    {c.type}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    {c.code}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {c.meaning}
                  </p>
                </div>

                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--primary)' }} />
                  <span>Audited &amp; Active Scope</span>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Regulatory Registrations (FDA & NFSA) */}
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'الجهات الرقابية' : 'REGULATORY REGISTRATION & LISTING'}</div>
              <h2>{isAr ? 'التسجيل والاعتماد لدى الهيئات الرقابية الرسمية' : 'Governmental Food Safety & Export Authorizations'}</h2>
            </div>
            <p>
              {isAr
                ? 'منشآت AWA مسجلة ومعتمدة لدى كبرى الهيئات الرقابية المحلية والدولية لضمان سلامة الإمداد للأسواق المحلية وأسواق التصدير.'
                : 'Official listings and regulatory authorizations verifying facility hygiene, food defense protocols and export compliance.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {regulatoryListings.map((c) => (
              <div 
                key={c.id}
                style={{
                  background: 'var(--bg-soft)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '2rem',
                  alignItems: 'center'
                }}
              >
                <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', borderRadius: '16px', padding: '0.5rem', border: '1px solid var(--border-color)' }}>
                  <img 
                    src={v9Assets.corporateAssets[c.asset as keyof typeof v9Assets.corporateAssets]} 
                    alt={c.code} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                  />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-blue)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                    {c.type}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {c.code}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {c.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QA Protocol Highlights */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'إجراءات توكيد الجودة' : 'QUALITY ASSURANCE PROTOCOL'}</div>
              <h2>{isAr ? 'فحص دقيق لكل دفعة قبل الإفراج الصناعي' : 'Rigorous Batch-by-Batch Release Testing'}</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>01. Microbiological Assays</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Total plate count (TPC), yeasts, molds, Salmonella, E. coli and pathogen screening before warehouse release.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>02. Chemical &amp; Physical Profiling</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Moisture profiling, viscosity measurement, pH regulation, heavy metal assay and sieve particle size analysis.</p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '18px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>03. Certificate of Analysis (COA)</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Every outgoing shipment is accompanied by a certified batch-specific COA with full raw material traceability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'توثيق الجودة والشهادات' : 'TECHNICAL COMPLIANCE'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'هل تحتاج إلى نسخ من شهادات الجودة أو الـ COA؟' : 'Need certificate copies or technical dossiers?'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'فريق توكيد الجودة في AWA مستعد لتوفير كافة الوثائق والملفات الفنية المعتمدة.' : 'Our QA & Regulatory Affairs department provides active audit certificates and technical dossiers upon request.'}
            </p>
          </div>
          <Link to="/contact?type=technical" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'طلب الوثائق الفنية والشهادات' : 'Request QA Documentation'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
