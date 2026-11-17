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
      icon: <Globe size={24} />,
      kpi: '30+ Sourcing Nations'
    },
    {
      title: isAr ? 'الأبحاث ومعامل التطبيقات R&D' : 'R&D & Application Development',
      route: '/capabilities/rd',
      desc: capabilityData[1].desc,
      image: v9Assets.v7Assets.formulation,
      icon: <FlaskConical size={24} />,
      kpi: 'Dedicated Pilot Plants'
    },
    {
      title: isAr ? 'التركيبات الوظيفية المخصصة' : 'Customized Formulations',
      route: '/capabilities/formulations',
      desc: capabilityData[2].desc,
      image: v9Assets.v8Assets.formulations || v9Assets.v7Assets.formulation,
      icon: <Layers size={24} />,
      kpi: '500+ Tailored Recipes'
    },
    {
      title: isAr ? 'التميز الصناعي والتصنيع' : 'Manufacturing Excellence',
      route: '/capabilities/manufacturing',
      desc: capabilityData[3].desc,
      image: v9Assets.v7Assets.factory,
      icon: <Factory size={24} />,
      kpi: '15.5 MT/Hr Blending Capacity'
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
            src={v9Assets.v8Assets['industrial-plant'] || v9Assets.v7Assets.factory} 
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
                      <span style={{ fontSize: '0.75rem', padding: '3px 10px', background: 'var(--bg-soft)', borderRadius: '20px', color: 'var(--dark-navy)', fontWeight: 700 }}>
                        {item.kpi}
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
                      <span>{isAr ? 'عرض التفاصيل والمواصفات' : 'Explore capability details'}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Selective Contract Manufacturing Spotlight */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-subtle)',
            padding: '3.5rem',
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="kicker">{isAr ? 'التصنيع التعاقدي والتعبئة' : 'STRATEGIC CO-MANUFACTURING'}</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
                {isAr ? 'تصنيع تعاقدي انتقائي وتعبئة وتغليف للغير (OEM)' : 'Selective Contract Manufacturing & Co-Packing'}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {isAr
                  ? 'نوفر قدرات تصنيع وخلط وتعبئة تعاقدية لشركاء استراتيجيين مختارين عبر خطوط إنتاجنا المؤتمتة بمدينة برج العرب الجديدة، مع التزام تام بمعايير FSSC 22000 والسرية المهنية المطلقة.'
                  : 'For qualified partners, AWA offers dedicated dry blending, liquid compounding and specialized retail packaging capabilities under selective private label or OEM co-manufacturing agreements, adhering to rigorous FSSC 22000 quality systems.'}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>High-Shear Dry Blending (5.5 MT/Hr)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Liquid Compounding (10 MT/Hr)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Cleanroom Environment Packaging</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Full Batch COA &amp; Traceability</span>
                </div>
              </div>

              <Link to="/capabilities/strategic-manufacturing" className="btn btn-primary">
                <span>{isAr ? 'تفاصيل التصنيع الاستراتيجي التعاقدي' : 'View Strategic Manufacturing Details'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '360px', border: '1px solid var(--border-color)' }}>
              <img 
                src={v9Assets.v8Assets['industrial-plant'] || v9Assets.v7Assets.factory} 
                alt="Automated Processing Plant in Borg El-Arab" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'شراكات صناعية متكاملة' : 'TECHNICAL COLLABORATION'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'تحدث إلى خبرائنا حول قدرات مصنعكم' : 'Discuss your manufacturing requirements'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'سواء كنت بحاجة إلى توريد خامات نادرة، أو خلطات مخصصة، أو تجارب معملية، نحن هنا لدعمك.' : 'Whether sourcing specialty raw materials, piloting a formula or expanding contract capacity.'}
            </p>
          </div>
          <Link to="/contact?type=manufacturing" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'تواصل مع فريق التصنيع' : 'Contact Manufacturing Team'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
