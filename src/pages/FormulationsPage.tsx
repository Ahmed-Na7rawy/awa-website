import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Factory } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const FormulationsPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="formulations-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'التركيبات الوظيفية المخصصة • مجموعة AWA' : 'Customized Formulations • AWA Group'}
        description="Not every product challenge can be met by a standard ingredient system. AWA evaluates tailored technical approaches."
        path="/capabilities/formulations"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets.formulations || v9Assets.v7Assets.formulation} 
            alt="Customized Food Formulations" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/capabilities">{isAr ? 'قدراتنا' : 'Capabilities'}</Link>
            <span>›</span>
            <span>{isAr ? 'التركيبات المخصصة' : 'Customized Formulations'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'هندسة التركيبات الوظيفية' : 'CUSTOMIZED FORMULATIONS'}</div>
          <h1>
            {isAr ? (
              <>حلول وظيفية مخصصة.<br /><em className="italic">مصممة خصيصاً لخطوط إنتاجكم.</em></>
            ) : (
              <>Customized solutions.<br /><em className="italic">Designed for your process.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'لا يمكن حل كل تحدٍ تصنيعي باستخدام نظام مكونات نمطي مسبق الصنع. تقوم AWA بتقييم وبناء حلول فنية مخصصة تضمن الأداء الأعلى والجدوى الاقتصادية المثلى.'
              : 'Not every product challenge can be met by a standard ingredient system. AWA evaluates and engineers tailored functional systems designed around specific processing constraints.'}
          </p>
        </div>
      </section>

      {/* 2. Formulation Methodology */}
      <section className="section">
        <div className="wrap intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <div className="kicker">{isAr ? 'منهجية التطوير' : 'FORMULATION METHODOLOGY'}</div>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
              {isAr ? (
                <>التخصيص هو فارقنا <span className="accent">التجاري والتقني الأبرز.</span></>
              ) : (
                <>Customization is our <span className="accent">central differentiator.</span></>
              )}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              {isAr
                ? 'نعمل بشكل وثيق مع مديري التطوير والجودة والإنتاج في مصانع الألبان واللحوم والمخبوزات والمشروبات لفهم معايير التكلفة وظروف الطهي والتبريد ومدة الصلاحية المطلوبة.'
                : 'We collaborate closely with client R&D and plant managers to understand raw material economics, thermal pasteurization curves, cooling cycles and target consumer sensory preferences.'}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {isAr
                ? 'يتم اختبار كل خلطة في مركز التطبيقات قبل اعتمادها للإنتاج الصناعي على خطوط الخلط الآلية في برج العرب.'
                : 'Every compound formula is piloted and stress-tested in our application labs before scale-up on our automated Borg El-Arab industrial blending lines.'}
            </p>
            <Link to="/contact?type=technical" className="btn btn-primary">
              <span>{isAr ? 'تقديم طلب دراسة تركيبة مخصصة' : 'Submit technical formulation brief'}</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The 4-Stage Formulation Flow (Exact V9) */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'مراحل الشراكة الفنية' : 'TECHNICAL PARTNERSHIP'}</div>
              <h2>
                {isAr ? (
                  <>تطوير التركيبات <span className="accent">بهدف محدد وواضح.</span></>
                ) : (
                  <>Formulation development <span className="accent">with purpose.</span></>
                )}
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem 1.75rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>UNDERSTAND</div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {isAr ? 'التطبيق والتحديات' : 'Application & challenges'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr ? 'تحليل المواصفات المستهدفة ومحددات خط الإنتاج وتوقعات المستهلك.' : 'Analyze target specs, factory constraints and consumer expectations.'}
              </p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem 1.75rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-blue)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>SOURCE</div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {isAr ? 'تكنولوجيا المكونات' : 'Ingredient technologies'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr ? 'تحديد المكونات الوظيفية والأنظمة التخصصية من أصول موثوقة ومعتمدة.' : 'Identify functional ingredients and specialty systems from vetted origins.'}
              </p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem 1.75rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>DEVELOP</div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {isAr ? 'التركيبة والتجارب المعملية' : 'Formulation & trials'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr ? 'نمذجة التركيبات في مركز التطبيقات لتحقيق أعلى درجات الثبات والإنتاجية.' : 'Prototype formulations in the application center to achieve stability and yield.'}
              </p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '2rem 1.75rem', borderRadius: '18px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary-blue)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>VALIDATE</div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {isAr ? 'التشغيل الصناعي والجودة' : 'Scale-up & quality'}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr ? 'ضمان أداء تصنيعي متسق والتوثيق والامتثال الكامل للمعايير القياسية.' : 'Ensure consistent manufacturing performance, documentation and compliance.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA (Exact V9) */}
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
