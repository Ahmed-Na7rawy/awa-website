import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, FlaskConical, Factory, ShieldCheck, ArrowRight, Layers, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets, capabilityData } from '../data/v9Data';

export const CapabilitiesPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const capabilityItems = [
    {
      title: isAr ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply',
      route: '/capabilities/sourcing',
      desc: capabilityData[0].desc,
      image: v9Assets.v7Assets.sourcing,
      icon: <Globe size={24} />
    },
    {
      title: isAr ? 'الأبحاث ومعامل التطبيقات R&D' : 'R&D & Application Development',
      route: '/capabilities/rd',
      desc: capabilityData[1].desc,
      image: v9Assets.v7Assets.formulation,
      icon: <FlaskConical size={24} />
    },
    {
      title: isAr ? 'التركيبات الوظيفية المخصصة' : 'Customized Formulations',
      route: '/capabilities/formulations',
      desc: capabilityData[2].desc,
      image: v9Assets.v8Assets.formulations || v9Assets.v7Assets.formulation,
      icon: <Layers size={24} />
    },
    {
      title: isAr ? 'التميز الصناعي والتصنيع' : 'Manufacturing Excellence',
      route: '/capabilities/manufacturing',
      desc: capabilityData[3].desc,
      image: v9Assets.v7Assets.factory,
      icon: <Factory size={24} />
    }
  ];

  return (
    <div className="capabilities-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'قدراتنا المتكاملة • مجموعة AWA' : 'Our Capabilities • AWA Group'}
        description="AWA Group combines global sourcing, applied R&D, customized formulation and manufacturing to respond to food industry needs with application-focused solutions."
        path="/capabilities"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['rd-wide']} 
            alt="AWA Capabilities" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <span>{isAr ? 'قدراتنا' : 'Our Capabilities'}</span>
          </div>
          <div className="kicker on-dark">SOURCE · DEVELOP · MANUFACTURE</div>
          <h1>
            {isAr ? (
              <>خبرات تربط بين <em className="italic">المعرفة والتنفيذ الصناعي.</em></>
            ) : (
              <>Expertise that connects <em className="italic">knowledge and execution.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تجمع مجموعة AWA بين التوريد العالمي، والبحث والتطوير التطبيقي، وصياغة التركيبات المخصصة، والتصنيع عالي السعة للاستجابة لاحتياجات مصانع الأغذية بحلول عملية وموثوقة.'
              : 'AWA Group combines global sourcing, applied R&D, customized formulation and manufacturing to respond to food industry needs with application-focused solutions.'}
          </p>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'منظومة عمل متكاملة' : 'OUR CAPABILITIES'}</div>
              <h2>
                {isAr ? (
                  <>من الفكرة الفنية إلى <span className="accent">الحلول الصناعية العملية.</span></>
                ) : (
                  <>From technical brief <span className="accent">to practical solutions.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'تعمل قدراتنا معاً لربط تقنيات المكونات مع ظروف المعالجة الصناعية ومتطلبات أداء المنتج وخيارات التصنيع المجدية تجارياً.'
                : 'Our capabilities operate together to match ingredient technologies with processing conditions, product performance requirements and commercially feasible manufacturing options.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '3.5rem' }}>
            {capabilityItems.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Pillar #{idx + 1}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                    <Link to={item.route} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                      <span>{isAr ? 'استكشف القدرة ↗' : 'Explore capability ↗'}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FORMULATION DEVELOPMENT (Exact V9 Content) */}
      <section className="section" style={{ background: '#F8FAFC', borderTop: '1px solid var(--border-color)', padding: '5rem 0' }}>
        <div className="wrap" style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div className="kicker">{isAr ? 'تطوير التركيبات' : 'FORMULATION DEVELOPMENT'}</div>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
            {isAr ? (
              <>مصممة وفقاً لمتطلبات المنتج.<br /><span className="accent">مدروسة لتحقيق أعلى قيمة.</span></>
            ) : (
              <>Tailored to product requirements.<br /><span className="accent">Considered for value.</span></>
            )}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
            {isAr
              ? 'يأخذ فريقنا في الاعتبار الدور الدقيق لكل مكون فردي داخل التركيبة، بدءاً من الخواص الحسية والوظيفية الهيكلية ووصولاً إلى المرونة أثناء عمليات التصنيع. وعند الاقتضاء، يتعاون فريق التوريد وفريق التطوير التقني معاً لتقييم البدائل المناسبة وتحسين الحلول دون المساس بمتطلبات المنتج المحددة مسبقاً.'
              : 'Our team considers the role of individual ingredients within a formulation, from sensory and structural functionality to processing resilience. Where appropriate, sourcing and technical development work together to evaluate suitable alternatives and optimize solutions without compromising defined product requirements.'}
          </p>
          <Link to="/capabilities/formulations" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            <span>{isAr ? 'اكتشف التركيبات المخصصة ↗' : 'Discover customized formulations ↗'}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* 4. SELECTIVE MANUFACTURING COLLABORATION (Exact V9 Content) */}
      <section className="section" style={{ borderTop: '1px solid var(--border-color)', padding: '5rem 0' }}>
        <div className="wrap">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-subtle)',
            padding: '3.5rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="kicker">{isAr ? 'التعاون التصنيعي الانتقائي' : 'SELECTIVE MANUFACTURING COLLABORATION'}</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
                {isAr ? (
                  <>مشاريع استراتيجية.<br /><span className="accent">التوافق الفني أولاً.</span></>
                ) : (
                  <>Strategic projects.<br /><span className="accent">Technical fit first.</span></>
                )}
              </h2>
              <p style={{ fontSize: '1.025rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {isAr
                  ? 'بالإضافة إلى دعم محفظة AWA الصناعية والاستهلاكية، يتم تقييم فرص التصنيع التعاقدي والعلامات الخاصة المختارة من حيث الجدوى الفنية، والطاقة الاستيعابية، والمتطلبات التنظيمية، والمواءمة التجارية طويلة الأجل.'
                  : 'In addition to supporting AWA’s industrial and consumer portfolio, selected private-label and contract-manufacturing opportunities are evaluated for technical feasibility, capacity, regulatory requirements and long-term commercial alignment.'}
              </p>
              <Link to="/capabilities/strategic-manufacturing" className="btn btn-secondary">
                <span>{isAr ? 'استكشف التصنيع الاستراتيجي ↗' : 'Explore strategic manufacturing ↗'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '340px', border: '1px solid var(--border-color)' }}>
              <img 
                src={v9Assets.v8Assets['industrial-plant'] || v9Assets.v7Assets.factory} 
                alt="AWA Manufacturing Facility" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
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
