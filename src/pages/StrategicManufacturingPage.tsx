import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Factory, FileText, Sparkles, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const StrategicManufacturingPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const criteria = [
    { title: 'Product & Category Compatibility', desc: 'Alignment with our dry powder blending, liquid compounding, or cleanroom packaging infrastructure.' },
    { title: 'Technical Feasibility', desc: 'Validation through pilot application trials and raw material processing parameters.' },
    { title: 'Available Production Capacity', desc: 'Sustainable scheduling without impacting proprietary brand operations or long-term commitments.' },
    { title: 'Commercial & Strategic Alignment', desc: 'Long-term volume stability, realistic market positioning and mutual commercial transparency.' },
    { title: 'Regulatory & Quality Compliance', desc: 'Full compliance with FSSC 22000, NFSA, ISO standards and traceability protocols.' },
    { title: 'Executive Management Approval', desc: 'Direct corporate sign-off ensuring priority support and dedicated engineering resources.' },
  ];

  const processSteps = [
    { step: '01', tag: 'BRIEF', title: 'Initial Project Scope', desc: 'Defining category, volume forecasts, packaging formats, target shelf life and regulatory requirements.' },
    { step: '02', tag: 'REVIEW', title: 'Strategic & Commercial Fit', desc: 'Evaluating production line alignment, raw material sourcing synergies and commercial viability.' },
    { step: '03', tag: 'PILOT', title: 'Technical Feasibility Trials', desc: 'Conducting formulation runs, QA stability tests and packaging machinability trials in Borg El-Arab.' },
    { step: '04', tag: 'PRODUCTION', title: 'Commercial Manufacturing', desc: 'Scheduling dedicated production campaigns with automated batch dosing and continuous in-line QA.' },
    { step: '05', tag: 'DISPATCH', title: 'Batch Release & Delivery', desc: 'Final microbiological/chemical assay validation, Certificate of Analysis (COA) issuance and multi-temp delivery.' },
  ];

  return (
    <div className="strategic-manufacturing-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'التصنيع التعاقدي الاستراتيجي • مجموعة AWA' : 'Strategic Contract Manufacturing • AWA Group'}
        description="AWA evaluates selected contract-manufacturing and private-label development projects aligned with its technical expertise, production scope and strategic priorities."
        path="/capabilities/strategic-manufacturing"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['industrial-plant'] || v9Assets.v7Assets.factory} 
            alt="Strategic Contract Manufacturing" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/capabilities">{isAr ? 'قدراتنا' : 'Capabilities'}</Link>
            <span>›</span>
            <span>{isAr ? 'التصنيع التعاقدي' : 'Strategic Projects'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'مشاريع تصنيعية منتقاة' : 'SELECTIVE OPPORTUNITIES'}</div>
          <h1>
            {isAr ? (
              <>شراكة تصنيعية قائمة على <em className="italic">الملاءمة الفنية الدقيقة.</em></>
            ) : (
              <>A manufacturing partnership <em className="italic">where the fit is right.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تقوم AWA بتقييم مشاريع التصنيع التعاقدي والتعبئة للغير (Private Label & OEM) المنتقاة بعناية، والمتوافقة مع خبراتنا التقنية وقدراتنا الإنتاجية وأولوياتنا الاستراتيجية.'
              : 'AWA evaluates selected contract-manufacturing and private-label development projects aligned with its technical expertise, production scope and strategic priorities.'}
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy: Not an Open Commodity Service */}
      <section className="section">
        <div className="wrap">
          <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <div className="kicker">{isAr ? 'فلسفة الشراكة' : 'NOT A GENERAL COMMODITY OFFER'}</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
                {isAr ? (
                  <>مشاريع منتقاة.<br /><span className="accent">وتعاون ذو قيمة متبادلة.</span></>
                ) : (
                  <>Selected projects.<br /><span className="accent">Meaningful collaboration.</span></>
                )}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {isAr
                  ? 'نهجنا لا يقوم على تسويق طاقات تصنيع تعاقدية مفتوحة للجميع. نحن نعطي الأولوية للمشاريع والشراكات التي يمكن لـ AWA أن تساهم فيها بمعرفتها العلمية، وقدراتها التصنيعية المؤتمتة، وقيمتها التجارية طويلة الأجل.'
                  : 'Our approach is not to market unrestricted contract-manufacturing capacity. We prioritize opportunities where AWA can contribute technical knowledge, relevant manufacturing capabilities and long-term commercial value.'}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/contact?type=manufacturing" className="btn btn-primary">
                  <span>{isAr ? 'تقديم استفسار مشروع تصنيع' : 'Inquire about project fit'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Criteria Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {criteria.map((c, idx) => (
              <div key={idx} style={{ background: 'var(--bg-soft)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                  <CheckCircle2 size={18} />
                  <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{c.title}</strong>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* 3. Consideration Process */}
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'مراحل التقييم والتشغيل' : 'HOW A PROJECT IS CONSIDERED'}</div>
              <h2>{isAr ? 'المسار المرحلي لدراسة واعتماد الشراكة' : 'Structured Five-Stage Partnership Process'}</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
            {processSteps.map((st, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '1.75rem 1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.25rem' }}>{st.step}</div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-blue)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  {st.tag}
                </span>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {st.title}
                </strong>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'مشاريع تصنيعية خاصة' : 'STRATEGIC CO-MANUFACTURING'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'هل لديك مشروع تصنيع استراتيجي ملائم؟' : 'Have a strategic manufacturing project?'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'شاركنا متطلبات الفئة والكميات المرجوة وسنقوم بدراسة الملاءمة الفنية.' : 'Share your project brief for confidential review by our engineering and executive teams.'}
            </p>
          </div>
          <Link to="/contact?type=manufacturing" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'مناقشة مشروع تعاقدي' : 'Submit project brief'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
