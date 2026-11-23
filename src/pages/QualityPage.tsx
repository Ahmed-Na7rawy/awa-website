import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
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
        description="At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing activities are supported by recognized management systems, product certifications and regulatory facility registrations."
        path="/quality"
      />

      {/* 1. Page Hero Banner (Exact V9 Content) */}
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
          <div className="kicker on-dark">{isAr ? 'الجودة والشهادات' : 'QUALITY & CERTIFICATIONS'}</div>
          <h1>
            {isAr ? (
              <>المعايير الدولية.<br /><em className="italic">الجودة في الممارسة اليومية.</em></>
            ) : (
              <>International Standards.<br /><em className="italic">Quality in Practice.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'في مجموعة AWA، تعد الجودة وسلامة الأغذية والعمليات المسؤولة ركائز جوهرية لأسلوب عملنا. يتم دعم أنشطتنا التصنيعية بأنظمة إدارة معترف بها عالمياً، وشهادات منتجات، وتسجيلات رقابية لمنشآتنا.'
              : 'At AWA Group, quality, food safety and responsible operations are fundamental to how we work. Our manufacturing activities are supported by recognized management systems, product certifications and regulatory facility registrations.'}
          </p>
        </div>
      </section>

      {/* 2. International Management Systems (Exact V9 Content) */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'الشهادات الدولية' : 'INTERNATIONAL CERTIFICATIONS'}</div>
              <h2>
                {isAr ? (
                  <>أنظمة معترف بها عالمياً. <span className="accent">ومعايير متجانسة.</span></>
                ) : (
                  <>Recognized systems. <span className="accent">Consistent standards.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'تعكس شهاداتنا متطلبات محددة لأنظمة الإدارة والمنتجات. يتم تقديم كل اعتماد مع النطاق الصحيح للمنشأة أو الشركة أو المنتج.'
                : 'Our certifications reflect defined management system and product requirements. Each credential is presented with its correct facility, company or product scope.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '4.5rem' }}>
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                    {c.type}
                  </span>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 800 }}>
                    {c.code}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {c.meaning}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', marginTop: '1.5rem', fontSize: '0.75rem', color: '#64748B' }}>
                  {isAr ? 'الشهادة والمنشأة والنطاق والصلاحية تخضع لموافقة توكيد الجودة' : 'Certificate, facility, legal holder, scope and validity subject to QA approval'}
                </div>
              </div>
            ))}
          </div>

          {/* 3. Regulatory Registrations (Exact V9 Content) */}
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'التسجيل والإدراج الرقابي' : 'REGULATORY REGISTRATION & LISTING'}</div>
              <h2>
                {isAr ? (
                  <>اعتمادات المنشأة. <span className="accent">ممثلة بدقة وموثوقية.</span></>
                ) : (
                  <>Facility credentials. <span className="accent">Accurately represented.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'هذه أوضاع وإدراجات رقابية رسمية وليست شهادات لأنظمة الإدارة أو موافقات للمنتجات من الـ FDA.'
                : 'These are regulatory statuses and listings, not management-system certifications or FDA product approvals.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            {regulatoryListings.map((c) => (
              <div 
                key={c.id}
                style={{
                  background: 'var(--bg-soft)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-blue)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                    {c.type}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.75rem', fontWeight: 800 }}>
                    {c.code}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    {c.meaning}
                  </p>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', marginTop: '1.5rem', fontSize: '0.75rem', color: '#64748B' }}>
                  {isAr ? 'الشهادة والمنشأة والنطاق والصلاحية تخضع لموافقة توكيد الجودة' : 'Certificate, facility, legal holder, scope and validity subject to QA approval'}
                </div>
              </div>
            ))}
          </div>

          {/* V9 Important Regulatory Disclaimer Note */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(20, 30, 154, 0.04) 0%, rgba(0, 168, 79, 0.06) 100%)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            marginBottom: '4.5rem'
          }}>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)', display: 'block', marginBottom: '0.35rem' }}>
              {isAr ? 'تنبيه هام ومسؤول:' : 'Important:'}
            </strong>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
              {isAr
                ? 'يجب عدم وصف تسجيل منشأة الأغذية لدى الـ FDA الأمريكية بأنه موافقة أو تفويض من الـ FDA للمصنع أو منتجاته أو ممارساته التصنيعية. كما يجب التحقق من وضع القائمة البيضاء للهيئة القومية لسلامة الغذاء (NFSA) والمنشأة المحددة المدرجة من خلال السجلات الرسمية السارية.'
                : 'U.S. FDA food facility registration must not be described as FDA approval or authorization of the factory, its products or its manufacturing practices. NFSA White List status and the specific listed facility must be verified with current official records.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Quality & Continuous Improvement (Exact V9 Content) */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)', padding: '5.5rem 0' }}>
        <div className="wrap">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <div className="kicker">{isAr ? 'الجودة والتحسين المستمر' : 'QUALITY & CONTINUOUS IMPROVEMENT'}</div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1.25rem' }}>
              {isAr ? (
                <>معايير تنعكس في <span className="accent">العمليات اليومية.</span></>
              ) : (
                <>Standards reflected in <span className="accent">daily operations.</span></>
              )}
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              {isAr
                ? 'يربط نهج AWA للجودة بين التقييم المناسب للموردين، والمواصفات الفنية، والتحقق التطبيقي، والعمليات التصنيعية المضبوطة، وممارسات التتبع المعمول بها. ويجب التحقق من الشهادات الحالية ووثائق التسجيل من قبل إدارة توكيد الجودة قبل النشر.'
                : 'AWA’s approach to quality connects appropriate supplier assessment, technical specifications, application validation, controlled manufacturing processes and applicable traceability practices. Current certificates and registration documents must be verified by QA before publication.'}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {isAr
                ? 'حيثما يتم النشر، يجب أن تحدد كل وثيقة الاعتماد صاحب الحق القانوني، والنطاق، والجهة المصدرة، والمنشأة ذات الصلة، وفترة الصلاحية. ويجب أن تشير تغطية الحلال إلى مجموعات المنتجات المعتمدة بدلاً من محفظة المجموعة بأكملها.'
                : 'Where published, each credential should identify the legal holder, scope, issuing organization, relevant facility and validity period. Halal coverage must refer to approved product ranges rather than the entire group portfolio.'}
            </p>
            <Link to="/contact?type=technical" className="btn btn-primary" style={{ display: 'inline-flex' }}>
              <span>{isAr ? 'طلب الوثائق ذات الصلة ↗' : 'Request relevant documentation ↗'}</span>
              <ArrowRight size={15} />
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
