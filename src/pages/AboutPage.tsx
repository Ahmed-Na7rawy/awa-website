import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Factory, Microscope, Users, Sparkles, Target, Eye, HeartHandshake } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { v9Assets } from '../data/v9Data';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const heroRef = useScrollReveal();
  const whoRef = useScrollReveal();
  const leaderRef = useScrollReveal();
  const purposeRef = useScrollReveal();
  const valuesRef = useScrollReveal();

  const values = [
    {
      title: isAr ? 'الابتكار الموجه للعميل' : 'Customer-Centric Innovation',
      desc: isAr ? 'نبدأ من التحدي الإنتاجي والمواصفات المستهدفة للعميل بدلاً من الترويج لحلول نمطية مسبقة.' : 'We begin with the manufacturer’s product, process and commercial objectives, developing solutions that fit their operational reality.'
    },
    {
      title: isAr ? 'النزاهة الفنية والعلمية' : 'Technical Integrity',
      desc: isAr ? 'نعتمد على المعرفة العلمية الموثقة والتجارب المعملية الصارمة لضمان موثوقية الأداء.' : 'We recommend ingredients, systems and formulations based on sound food science, rigorous evaluation and transparent performance parameters.'
    },
    {
      title: isAr ? 'التميز التشغيلي والجودة' : 'Operational Excellence',
      desc: isAr ? 'نلتزم بالمعايير الدولية المعتمدة لضمان تجانس الدفعات وسلامة الأغذية وسلاسة التوريد.' : 'We pursue consistency, hygiene and compliance across our sourcing, pilot trials, manufacturing and quality-assurance activities.'
    },
    {
      title: isAr ? 'الشراكة والشفافية' : 'Partnership & Transparency',
      desc: isAr ? 'نبني علاقات تعاون طويلة الأمد مع عملائنا وشركائنا الدوليين قائمة على الثقة والوضوح.' : 'We build long-term relationships with customers and international principals founded on mutual respect, clear communication and commercial fairness.'
    },
    {
      title: isAr ? 'المسؤولية والاستدامة' : 'Responsibility & Care',
      desc: isAr ? 'نضع سلامة الأفراد والمسؤولية البيئية وإدارة الموارد في صلب قراراتنا اليومية.' : 'We prioritize the safety of our people, responsible sourcing, resource efficiency and accountability across our business operations.'
    }
  ];

  return (
    <div className="about-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'عن مجموعة AWA • خبرات متكاملة في علوم الأغذية' : 'About AWA Group • A Group Built Around Food Expertise'}
        description="International ingredient expertise, applied food science and manufacturing capabilities connected through a shared commitment to tailored food solutions."
        path="/about"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual" ref={heroRef}>
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['industrial-plant'] || v9Assets.v7Assets.hero} 
            alt="AWA Group Corporate Expertise" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <span>{isAr ? 'عن AWA' : 'About AWA Group'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'مجموعة AWA' : 'AWA GROUP'}</div>
          <h1>
            {isAr ? (
              <>مجموعة بُنيت حول <em className="italic">خبرات علوم الأغذية.</em></>
            ) : (
              <>A group built around <em className="italic">food expertise.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'خبرات دولية في مكونات الأغذية، وعلوم أغذية تطبيقية، وقدرات تصنيع متطورة متصلة عبر التزام موحد بتقديم حلول غذائية مخصصة.'
              : 'International ingredient expertise, applied food science and manufacturing capabilities connected through a shared commitment to tailored food solutions.'}
          </p>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="section scroll-margin" id="who-we-are" ref={whoRef}>
        <div className="wrap intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'flex-start' }}>
          <div>
            <div className="kicker">{isAr ? 'من نحن' : 'WHO WE ARE'}</div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
              {isAr ? (
                <>قدرات متكاملة.<br /><span className="accent">والتزام راسخ وواضح.</span></>
              ) : (
                <>Connected capabilities.<br /><span className="accent">One clear commitment.</span></>
              )}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              {isAr
                ? 'تجمع مجموعة AWA بين المعرفة الدولية بالمكونات الغذائية، وعلوم الأغذية التطبيقية، وقدرات التصنيع والخلط الصناعي لابتكار حلول مخصصة لصناعة الأغذية. يساعد نهجنا المتكامل المصانع على تحقيق الخواص الوظيفية المطلوبة للمنتج، وتحسين كفاءة التشغيل، وتحقيق الأهداف الاقتصادية المرجوة.'
                : 'AWA Group brings together international ingredient expertise, applied food science and manufacturing capabilities to create tailored solutions for the food industry. Our integrated approach helps manufacturers achieve their desired product functionality, processing performance and commercial objectives.'}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
              {isAr
                ? 'تشمل أعمالنا توريد وتوزيع المكونات الصناعية المتخصصة، وتطوير أنظمة التركيبات المخصصة، وتوفير حلول خدمات الأغذية (Food Services) للمطاعم والمقاهي، وإدارة محفظة علامات استهلاكية مميزة.'
                : 'Our business spans specialized industrial ingredients, tailored formulation systems, professional food services solutions and a distinct consumer portfolio.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 800, display: 'block' }}>30+</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Years of Industrial Experience</span>
              </div>
              <div>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', fontWeight: 800, display: 'block' }}>2,000+</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Manufacturers Served</span>
              </div>
              <div>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 800, display: 'block' }}>15.5 MT</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Hourly Compounding Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership & CEO Message */}
      <section className="section scroll-margin" id="leadership" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }} ref={leaderRef}>
        <div className="wrap leadership-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }}>
          <div className="ceo-photo-wrap" style={{ position: 'relative' }}>
            <div style={{ borderRadius: '24px', overflow: 'hidden', border: '2px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <img 
                src={v9Assets.v7Assets.ceo} 
                alt="Eng. Wael Ghandour, Chairman & Founder of AWA Group" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              right: isAr ? 'auto' : '20px',
              left: isAr ? '20px' : 'auto',
              background: '#FFFFFF',
              padding: '0.75rem 1.25rem',
              borderRadius: '14px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              border: '1px solid var(--border-color)'
            }}>
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 800 }}>Eng. Wael Ghandour</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>Founder &amp; Chairman, AWA Group</span>
            </div>
          </div>

          <div>
            <div className="kicker">{isAr ? 'القيادة والرؤية' : 'LEADERSHIP & VISION'}</div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', margin: '0.5rem 0 1.25rem' }}>
              {isAr ? (
                <>مرتكزون على العمق الفني.<br /><span className="accent">وملتزمون بالقيمة الدائمة.</span></>
              ) : (
                <>Built on technical depth.<br /><span className="accent">Focused on lasting value.</span></>
              )}
            </h2>
            <blockquote style={{
              fontSize: '1.15rem',
              lineHeight: '1.7',
              color: 'var(--text-main)',
              fontStyle: 'italic',
              borderInlineStart: '4px solid var(--primary)',
              paddingInlineStart: '1.5rem',
              margin: '1.5rem 0'
            }}>
              "{isAr
                ? 'لقد كان تركيزنا دائماً على علوم الأغذية التطبيقية: فهم التطبيق، واحترام الواقع التشغيلي للمصنع، وابتكار حلول تؤدي وظيفتها بكفاءة وموثوقية في خطوط الإنتاج.'
                : 'Our focus has always been on practical food science: understanding the application, respecting the manufacturer’s operational reality, and formulating solutions that perform reliably in production.'}"
            </blockquote>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {isAr
                ? 'منذ تأسيس المجموعة في عام 1993، تطورت AWA من شركة متخصصة في تجارة وتوزيع المكونات إلى مجموعة صناعية متكاملة تضم معامل أبحاث وتطبيقات تجريبية، ومصانع خلط آلي متطورة بمدينة برج العرب الجديدة، وشراكات عالمية مع كبرى بيوت الخبرة الدولية.'
                : 'Since its founding in 1993, AWA has grown from a specialized ingredients distributor into an integrated food solutions group operating application pilot centers, modern automated blending facilities in New Borg El-Arab, and strategic joint ventures.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact?type=technical" className="btn btn-primary">
                <span>{isAr ? 'تواصل مع فريقنا الفني' : 'Connect with our team'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Purpose, Vision, Mission & Values */}
      <section className="section scroll-margin" id="purpose" ref={purposeRef}>
        <div className="wrap">
          <div className="section-heading text-center" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="kicker">{isAr ? 'الرؤية والرسالة' : 'PURPOSE, VISION & MISSION'}</div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)' }}>
              {isAr ? 'الغاية التي تقود مسيرتنا' : 'Guided by Purpose and Clear Principles'}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {isAr ? 'غايتنا' : 'Our Purpose'}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {isAr
                  ? 'تمكين مصنعي الأغذية من تقديم منتجات أرقى عبر علوم الأغذية التطبيقية، والتوريد الموثوق، والتركيبات المخصصة.'
                  : 'To enable food manufacturers to deliver better products through applied food science, reliable sourcing and tailored manufacturing.'}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(20, 30, 154, 0.08)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Eye size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {isAr ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {isAr
                  ? 'أن نكون الشريك الأكثر موثوقية في حلول الأغذية في المنطقة، المعترف به بالنزاهة الفنية، والأداء المتجانس، والقيمة الملموسة للعملاء.'
                  : 'To be the most trusted food solutions partner in the region, recognized for technical integrity, consistent execution and meaningful customer value.'}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <HeartHandshake size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {isAr ? 'رسالتنا' : 'Our Mission'}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                {isAr
                  ? 'الربط بين أحدث تقنيات المكونات العالمية والخبرة التطبيقية المحلية لتقديم حلول غذائية مخصصة وذات جدوى اقتصادية مثبتة.'
                  : 'To connect international ingredient technologies with local application expertise, providing tailored, commercially sound food solutions.'}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div ref={valuesRef}>
            <div className="section-heading">
              <div>
                <div className="kicker">{isAr ? 'قيمنا الجوهرية' : 'OUR CORE VALUES'}</div>
                <h2>{isAr ? 'المبادئ التي تحكم ممارساتنا اليومية' : 'Principles That Guide How We Operate'}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {values.map((val, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: 'var(--bg-soft)',
                    padding: '1.75rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    {val.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust & Responsibility Links Banner */}
      <section className="section tint">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
            <div className="kicker">{isAr ? 'الجودة والمعايير' : 'QUALITY & CERTIFICATIONS'}</div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
              {isAr ? 'شهادات الجودة والسلامة المعتمدة' : 'International Standards in Practice'}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {isAr
                ? 'استعرض شهادات FSSC 22000 و ISO 9001 وشهادات الحلال والتسجيلات الرقابية لدى الهيئة القومية لسلامة الغذاء (NFSA) والـ FDA.'
                : 'Explore FSSC 22000, ISO 9001, Halal certificates and regulatory facility registrations.'}
            </p>
            <Link to="/quality" className="btn btn-secondary">
              <span>{isAr ? 'صفحة الجودة والشهادات' : 'View Quality & Certifications'}</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
            <div className="kicker">{isAr ? 'النمو المسؤول' : 'SUSTAINABILITY & ESG'}</div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
              {isAr ? 'نهج الاستدامة والأثر الدائم' : 'Responsible Growth & Operations'}
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {isAr
                ? 'تعرف على ركائز الاستدامة الأربع لدينا: التوريد المسؤول، وكفاءة الموارد، والابتكار المسؤول، وسلامة الأفراد.'
                : 'Learn about our four pillars of sustainability: sourcing, resource efficiency, innovation and people.'}
            </p>
            <Link to="/sustainability" className="btn btn-secondary">
              <span>{isAr ? 'صفحة الاستدامة' : 'View Sustainability'}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'شريككم الموثوق في علوم وتصنيع الأغذية' : 'Partner with AWA Group'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'تواصل مع فريقنا الفني أو التجاري لمناقشة احتياجات مصنعكم وخطوط إنتاجكم.' : 'Connect with our technical or commercial teams to discuss your application needs.'}
            </p>
          </div>
          <Link to="/contact" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'تواصل معنا الآن' : 'Contact AWA'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
