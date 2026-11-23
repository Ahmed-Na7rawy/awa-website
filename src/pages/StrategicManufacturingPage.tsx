import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const StrategicManufacturingPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const criteria = [
    { title: isAr ? 'توافق المنتج والفئة' : 'Product & category compatibility' },
    { title: isAr ? 'الجدوى الفنية' : 'Technical feasibility' },
    { title: isAr ? 'الطاقة التصنيعية المتاحة' : 'Available manufacturing capacity' },
    { title: isAr ? 'التوافق التجاري والاستراتيجي' : 'Commercial & strategic alignment' },
    { title: isAr ? 'الملاءمة التنظيمية ومعايير الجودة' : 'Regulatory and quality fit' },
    { title: isAr ? 'موافقة الإدارة التنفيذية' : 'Management approval' },
  ];

  const processSteps = [
    {
      tag: 'BRIEF',
      title: isAr ? 'النطاق الأولي' : 'Initial scope',
      desc: isAr ? 'الشريك، والفئة، والسوق، والكمية، والمتطلبات المحددة.' : 'Partner, category, market, quantity and requirements.',
    },
    {
      tag: 'REVIEW',
      title: isAr ? 'الملاءمة التجارية' : 'Commercial fit',
      desc: isAr ? 'تقييم الفرصة، والأهمية الاستراتيجية، والمحددات التشغيلية.' : 'Assess opportunity, strategic relevance and constraints.',
    },
    {
      tag: 'VALIDATE',
      title: isAr ? 'الملاءمة الفنية' : 'Technical fit',
      desc: isAr ? 'مساهمة فرق البحث والتطوير والتصنيع وضمان الجودة والجدوى.' : 'R&D, manufacturing, QA and feasibility input.',
    },
    {
      tag: 'APPROVE',
      title: isAr ? 'مشروع مشترك' : 'Joint project',
      desc: isAr ? 'التطوير السري والترخيص التجاري للمشروع.' : 'Confidential development and commercial authorization.',
    },
  ];

  const faqs = [
    {
      q: isAr ? 'هل تقبل AWA جميع عروض التصنيع للغير (Private Label)؟' : 'Is AWA accepting all private-label proposals?',
      a: isAr ? 'كلا. يتم تقييم الفرص بشكل فردي من حيث الملاءمة الفنية والإنتاجية والتنظيمية والاستراتيجية.' : 'No. Opportunities are evaluated individually for technical, production, regulatory and strategic fit.',
    },
    {
      q: isAr ? 'هل تستطيع AWA تطوير تركيبة جديدة كلياً؟' : 'Can AWA develop an entirely new formula?',
      a: isAr ? 'يتم تقييم نطاق التطوير المحتمل مقابل خبرات البحث والتطوير المتاحة وملف المشروع المتفق عليه؛ ولا يمكن افتراض الجدوى مسبقاً.' : 'Potential development scope is evaluated against available R&D expertise and an agreed project brief; feasibility cannot be assumed.',
    },
    {
      q: isAr ? 'ما هي المعلومات التي يجب أن يتضمنها الاستفسار الأولي؟' : 'What information should an initial inquiry contain?',
      a: isAr ? 'الشركة، والدولة، وفئة المنتج، والسوق المستهدف، والحجم السنوي التقديري، والخدمة المطلوبة، ومتطلبات المشروع.' : 'Company, country, product category, target market, estimated annual volume, desired service and project requirements.',
    },
    {
      q: isAr ? 'هل ستتم حماية سرية المعلومات؟' : 'Will confidentiality be protected?',
      a: isAr ? 'يمكن النظر في توقيع اتفاقية عدم إفصاح (NDA) مناسبة ومسار رسمي للمشروع عند تقدم الفرصة. يجب عدم تقديم أي تركيبة سرية من خلال نموذج تجريبي غير محمي.' : 'A suitable NDA and formal project process may be considered when the opportunity advances. No confidential formula should be submitted through an unprotected demo form.',
    },
  ];

  return (
    <div className="strategic-manufacturing-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'التصنيع التعاقدي الاستراتيجي • مجموعة AWA' : 'Strategic Projects • AWA Group'}
        description="AWA evaluates selected contract-manufacturing and private-label development projects aligned with its technical expertise, production scope and strategic priorities."
        path="/capabilities/strategic-manufacturing"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v7Assets.factory} 
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
            <Link to="/capabilities/manufacturing">{isAr ? 'التصنيع' : 'Manufacturing'}</Link>
            <span>›</span>
            <span>{isAr ? 'المشاريع الاستراتيجية' : 'Strategic Projects'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'فرص منتقاة' : 'SELECTIVE OPPORTUNITIES'}</div>
          <h1>
            {isAr ? (
              <>شراكة تصنيعية قائمة على <br /><em className="italic">الملاءمة الفنية الدقيقة.</em></>
            ) : (
              <>A manufacturing partnership <br /><em className="italic">where the fit is right.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تقوم AWA بتقييم مشاريع التصنيع التعاقدي وتطوير العلامات الخاصة المختارة والمتوافقة مع خبراتها الفنية ونطاق إنتاجها وأولوياتها الاستراتيجية.'
              : 'AWA evaluates selected contract-manufacturing and private-label development projects aligned with its technical expertise, production scope and strategic priorities.'}
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy: Not an Open Commodity Service */}
      <section className="section">
        <div className="wrap">
          <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'flex-start', marginBottom: '3.5rem' }}>
            <div>
              <div className="kicker">{isAr ? 'ليس عرضاً مفتوحاً للطاقة الإنتاجية' : 'NOT A GENERAL OPEN-CAPACITY OFFER'}</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
                {isAr ? (
                  <>مشاريع منتقاة.<br /><span className="accent">وتعاون هادف.</span></>
                ) : (
                  <>Selected projects.<br /><span className="accent">Meaningful collaboration.</span></>
                )}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {isAr
                  ? 'نهجنا لا يقوم على تسويق طاقات تصنيع تعاقدية مفتوحة وغير مقيدة. نحن نعطي الأولوية للفرص التي يمكن لـ AWA أن تساهم فيها بمعرفتها التقنية، وقدراتها التصنيعية ذات الصلة، وقيمتها التجارية طويلة الأجل.'
                  : 'Our approach is not to market unrestricted contract-manufacturing capacity. We prioritize opportunities where AWA can contribute technical knowledge, relevant manufacturing capabilities and long-term commercial value.'}
              </p>
            </div>
          </div>

          {/* Criteria Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {criteria.map((c, idx) => (
              <div key={idx} style={{ background: 'var(--bg-soft)', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{c.title}</strong>
              </div>
            ))}
          </div>

          {/* 3. Consideration Process */}
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'كيف يتم دراسة المشروع' : 'HOW A PROJECT IS CONSIDERED'}</div>
              <h2>{isAr ? 'المسار المرحلي لدراسة الشراكة' : 'How a project is considered'}</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {processSteps.map((st, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '2rem 1.5rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                  {st.tag}
                </span>
                <strong style={{ display: 'block', fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {st.title}
                </strong>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mandatory Public Disclaimer Box */}
          <div style={{
            background: 'var(--bg-soft)',
            borderLeft: '4px solid var(--primary)',
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: '1.65',
            marginBottom: '4.5rem'
          }}>
            {isAr
              ? 'يجب ألا يعد الموقع العام بالحد الأدنى للكميات أو الجداول الزمنية للتصنيع أو الطاقة الإنتاجية أو الفئات غير المقيدة قبل تقييمها والموافقة عليها.'
              : 'The public website should not promise minimum quantities, manufacturing timelines, capacity or unrestricted categories before they have been assessed and approved.'}
          </div>

          {/* 4. Frequently Asked Questions (Exact V9) */}
          <div style={{ maxWidth: '850px', margin: '0 auto 4.5rem' }}>
            <div className="section-heading" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div>
                <div className="kicker">{isAr ? 'الأسئلة الشائعة' : 'FREQUENTLY ASKED QUESTIONS'}</div>
                <h2>{isAr ? 'الأسئلة المتكررة حول الشراكات' : 'Frequently asked questions'}</h2>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '14px',
                      border: '1px solid var(--border-color)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-subtle)'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        textAlign: isAr ? 'right' : 'left',
                        cursor: 'pointer',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--text-main)'
                      }}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp size={20} style={{ color: 'var(--primary)' }} /> : <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />}
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 1.5rem 1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. Strategic Project Screening Card */}
          <div style={{
            background: 'linear-gradient(135deg, var(--bg-soft) 0%, #FFFFFF 100%)',
            border: '1.5px solid var(--primary)',
            borderRadius: '24px',
            padding: '3rem',
            textAlign: 'center',
            maxWidth: '850px',
            margin: '0 auto'
          }}>
            <div className="kicker" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>
              {isAr ? 'فحص المشاريع الاستراتيجية' : 'STRATEGIC PROJECT SCREENING'}
            </div>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
              {isAr ? 'هل يناسب مشروعك إمكانياتنا؟' : 'Does your project fit?'}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
              {isAr
                ? 'حدد فئتك، وحجمك التقريبي، وسوقك المستهدف، ونموذج شراكتك لإجراء مراجعة أولية.'
                : 'Outline your category, approximate volume, target market and partnership model for a preliminary review.'}
            </p>
            <Link to="/contact?type=manufacturing" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              <span>{isAr ? 'مناقشة شراكة تصنيعية' : 'Discuss a partnership'}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA (Exact V9) */}
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
