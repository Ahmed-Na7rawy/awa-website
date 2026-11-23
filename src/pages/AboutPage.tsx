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
      title: isAr ? 'شراكة العملاء' : 'Customer Partnership',
      desc: isAr ? 'فهم تحديات العملاء والتعاون لتحقيق نتائج عملية ملموسة.' : 'Understand customer challenges and collaborate on practical outcomes.'
    },
    {
      title: isAr ? 'الابتكار والخبرة' : 'Innovation & Expertise',
      desc: isAr ? 'تطبيق علوم الأغذية، والمعرفة التقنية، والتعلم المستمر.' : 'Apply food science, technical knowledge and continuous learning.'
    },
    {
      title: isAr ? 'النزاهة والجودة' : 'Integrity & Quality',
      desc: isAr ? 'بناء الثقة من خلال الالتزامات الموثوقة والممارسات الصارمة.' : 'Build trust through reliable commitments and rigorous practices.'
    },
    {
      title: isAr ? 'المسؤولية والتميز' : 'Ownership & Excellence',
      desc: isAr ? 'تحمل المسؤولية عن التنفيذ المنضبط والتحسين المستمر.' : 'Take responsibility for disciplined execution and improvement.'
    },
    {
      title: isAr ? 'النمو المسؤول' : 'Responsible Growth',
      desc: isAr ? 'مراعاة الأفراد والموارد والقيمة طويلة الأجل في قراراتنا.' : 'Consider people, resources and long-term value in our decisions.'
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
            src={v9Assets.v7Assets.factory} 
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
                ? 'تشمل محفظة أعمالنا الأوسع عمليات مخصصة لخدمات الأغذية (Food Services) وعلامات تجارية استهلاكية، مدعومة بخبرات مشتركة وعلاقات دولية. يتم تقديم جميع الأنشطة تحت مظلة علامة مجموعة AWA، مع الحفاظ على التحديد الواضح للكيانات القانونية وعلاقات الشراكة حيثما كان ذلك مناسباً.'
                : 'Our broader business portfolio includes a dedicated Food Services operation and consumer brands, supported by shared expertise and international relationships. All activities are presented under the AWA Group brand, while legal entities and partner relationships remain clearly identified where appropriate.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 800, display: 'block' }}>1993</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{isAr ? 'التأسيس في الإسكندرية' : 'Founded in Alexandria'}</span>
              </div>
              <div>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', fontWeight: 800, display: 'block' }}>30+</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{isAr ? 'عاماً من الخبرة الصناعية' : 'Years of Food Science'}</span>
              </div>
              <div>
                <strong style={{ fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 800, display: 'block' }}>7</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{isAr ? 'معايير واعتمادات دولية' : 'Certified Standards'}</span>
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
              <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 800 }}>Wael Ghandour</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>{isAr ? 'الرئيس التنفيذي · مجموعة AWA' : 'Chief Executive Officer · AWA Group'}</span>
            </div>
          </div>

          <div>
            <div className="kicker">{isAr ? 'رسالة الرئيس التنفيذي' : 'CEO MESSAGE'}</div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', margin: '0.5rem 0 1.25rem' }}>
              {isAr ? (
                <>من توريد المكونات إلى <span className="accent">شراكة دائمة ومستدامة.</span></>
              ) : (
                <>From ingredient supply to <span className="accent">lasting partnership.</span></>
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
                ? 'لقد استند تطورنا في مجموعة AWA إلى قناعة عملية راسخة: يحتاج مصنعو الأغذية إلى شركاء يفهمون علم المكونات والواقع التشغيلي لخطوط الإنتاج على حد سواء.'
                : 'Our development as AWA Group has been guided by a practical belief: food manufacturers need partners who understand both the science of ingredients and the realities of food manufacturing.'}"
            </blockquote>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1rem' }}>
              {isAr
                ? 'ومع توسعنا في شراكاتنا الدولية وتطوير أعمالنا في خدمات الأغذية والمنتجات الاستهلاكية، يظل التزامنا ثابتاً: خبرة عملية، معايير موثوقة، وحلول مصممة بدقة حول متطلبات تطبيقكم.'
                : 'As we expand our international collaborations and build our consumer and professional food businesses, our commitment remains the same: practical expertise, dependable standards, and solutions built around your application.'}
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {isAr
                ? 'فصلنا القادم يركز على تحويل هذه القدرات المتكاملة إلى قيمة ملموسة للعملاء والأسواق التي نخدمها.'
                : 'Our next chapter is about turning integrated capabilities into measurable value for the customers and markets we serve.'}
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
                  ? 'مساعدة مصنعي الأغذية على تحويل التحديات التقنية إلى حلول غذائية عملية وعالية الأداء.'
                  : 'To help food manufacturers turn technical challenges into practical, high-performing food solutions.'}
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
                  ? 'صياغة مستقبل الغذاء من خلال الابتكار والتميز التقني والشراكات الموثوقة التي تخلق قيمة دائمة.'
                  : 'To shape the future of food through innovation, technical excellence, and trusted partnerships that create lasting value.'}
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
                  ? 'تطوير وتقديم حلول غذائية مخصصة تعزز أداء المنتج وتساعد عملاءنا على النجاح.'
                  : 'To develop and deliver tailored food solutions that enhance product performance and help our customers succeed.'}
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

      {/* 5. Our Evolution Timeline (Exact V9 Content) */}
      <section className="section tint scroll-margin" id="evolution">
        <div className="wrap">
          <div className="section-heading">
            <div className="kicker">{isAr ? 'مسيرتنا وتطورنا' : 'OUR EVOLUTION'}</div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
              {isAr ? (
                <>خبرة تُبنى <span className="accent">عبر الزمن.</span></>
              ) : (
                <>Experience built <span className="accent">over time.</span></>
              )}
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '680px', lineHeight: 1.6, fontSize: '1rem' }}>
              {isAr
                ? 'تعكس كل محطة رئيسية تطور قدراتنا، وتوسع شركاتنا المتخصصة، وشراكاتنا الدولية التي تسهم في مسيرة مجموعة AWA.'
                : 'Each milestone reflects the development of capabilities, specialized businesses and international collaborations that contribute to the AWA Group story.'}
            </p>
          </div>

          <div className="evolution-timeline">
            {[
              { year: '2005', title: isAr ? 'AWA للمكونات الغذائية' : 'AWA Food Ingredients', desc: isAr ? 'تأسيس أنشطة ومبيعات المكونات الغذائية المتخصصة.' : 'Establishing dedicated food ingredient activities.' },
              { year: '2010', title: isAr ? 'AWA للحلول الغذائية' : 'AWA Food Solutions', desc: isAr ? 'توسيع نطاق التركيز التقني وتطوير الحلول التطبيقية للمصانع.' : 'Expanding the group’s technical and solution-development focus.' },
              { year: '2018', title: isAr ? 'AWA للمكونات الحيوية' : 'AWA Bio Ingredients', desc: isAr ? 'تطوير محفظة المكونات والمستخلصات الحيوية المتخصصة.' : 'Further developing the specialized ingredient portfolio.' },
              { year: '2020', title: isAr ? 'AWA BAY' : 'AWA BAY', desc: isAr ? 'توسيع الهيكل المؤسسي وشبكة أعمال المجموعة.' : 'Broadening the group’s business structure and reach.' },
              { year: '2021', title: isAr ? 'مجموعة AWA' : 'AWA Group', desc: isAr ? 'توحيد كافة قطاعات ووحدات الأعمال تحت علامة مؤسسية واحدة.' : 'Bringing the businesses together under one group brand.' },
              { year: '2022', title: isAr ? 'مشروع تركفوس المشترك' : 'Turkphos Joint Venture', desc: isAr ? 'تعزيز قدرات أملاح الاستحلاب وأنظمة الفوسفات المتخصصة.' : 'Strengthening specialized phosphate and emulsifying salt capabilities.' },
              { year: '2025', title: isAr ? 'مشروع إنغريفا المشترك' : 'Ingreva Joint Venture', desc: isAr ? 'توسيع التعاون في أنظمة الأغذية الصناعية والوظيفية.' : 'Extending collaboration in industrial functional food systems.' },
            ].map((m) => (
              <div key={m.year} className="evolution-stop">
                <span>{m.year}</span>
                <strong>{m.title}</strong>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Commitments Section (Exact V9 Content) */}
      <section className="section" id="commitments">
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: '2.5rem' }}>
            <div className="kicker">{isAr ? 'التزاماتنا' : 'OUR COMMITMENTS'}</div>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
              {isAr ? (
                <>الجودة والمسؤولية في <span className="accent">الممارسة اليومية.</span></>
              ) : (
                <>Quality and responsibility in <span className="accent">everyday practice.</span></>
              )}
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '680px', lineHeight: 1.6, fontSize: '1rem' }}>
              {isAr
                ? 'تدعم المعايير الدولية والعمليات المسؤولة قدرتنا على خدمة المصنعين والشركاء والعملاء المهنيين بثقة.'
                : 'International standards and responsible operations support our ability to serve manufacturers, partners and professional customers with confidence.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div className="kicker">{isAr ? 'الجودة والشهادات ↗' : 'QUALITY & CERTIFICATIONS ↗'}</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
                {isAr ? 'معايير تعزز الثقة.' : 'Standards that strengthen trust.'}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {isAr
                  ? 'استكشف شهادات نظم الإدارة، والتغطية الخاصة بمنتجات الحلال، والتسجيلات الرقابية للمنشآت.'
                  : 'Explore management-system certifications, product-specific Halal coverage and regulatory facility registrations.'}
              </p>
              <Link to="/quality" className="btn btn-secondary">
                <span>{isAr ? 'استعرض الشهادات ↗' : 'View certifications ↗'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div className="kicker">{isAr ? 'الاستدامة ↗' : 'SUSTAINABILITY ↗'}</div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
                {isAr ? 'نمو مسؤول، أثر دائم.' : 'Responsible growth, lasting impact.'}
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                {isAr
                  ? 'اقرأ عن ممارسات الموردين، وكفاءة الموارد، والابتكار الغذائي المسؤول، ورفاهية بيئة العمل.'
                  : 'Read about supplier practices, resource efficiency, responsible food innovation and workplace wellbeing.'}
              </p>
              <Link to="/sustainability" className="btn btn-secondary">
                <span>{isAr ? 'استعرض نهجنا ↗' : 'View our approach ↗'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA (Exact V9 Content) */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.' : 'Tell us about your application or project and connect with the right team.'}
            </p>
          </div>
          <Link to="/contact?type=technical" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'ناقش مشروعك ↗' : 'Discuss your project ↗'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
