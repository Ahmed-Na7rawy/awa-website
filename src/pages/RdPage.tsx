import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, FlaskConical, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const RdPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div className="rd-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'الأبحاث ومعامل التطبيقات R&D • مجموعة AWA' : 'R&D & Application Development • AWA Group'}
        description="Our application-development approach connects technical food science knowledge with real customer processing parameters."
        path="/capabilities/rd"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['rd-wide'] || v9Assets.v7Assets.formulation} 
            alt="AWA R&D Application Center" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/capabilities">{isAr ? 'قدراتنا' : 'Capabilities'}</Link>
            <span>›</span>
            <span>{isAr ? 'الأبحاث والتطبيقات R&D' : 'Application R&D'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'البحث والتطوير التطبيقي' : 'R&D & APPLICATION DEVELOPMENT'}</div>
          <h1>
            {isAr ? (
              <>أبحاث وتطوير تركز على <em className="italic">تحديات التصنيع الفعلية.</em></>
            ) : (
              <>R&amp;D focused on <em className="italic">real manufacturing challenges.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'يربط نهجنا في تطوير التطبيقات بين المعرفة العلمية المتقدمة وواقع خطوط الإنتاج لدى عملائنا لضمان نجاح التركيبة قبل بدء التشغيل الموسع.'
              : 'Our application-development approach connects technical food science knowledge with customer process realities to validate performance before commercial production.'}
          </p>
        </div>
      </section>

      {/* 2. Laboratory Scope & Equipment */}
      <section className="section">
        <div className="wrap">
          <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="kicker">{isAr ? 'محاكاة بيئة المصانع' : 'PILOT APPLICATION LABS'}</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
                {isAr ? (
                  <>محاكاة دقيقة لظروف <span className="accent">المعالجة والتصنيع.</span></>
                ) : (
                  <>Replicating industrial factory <span className="accent">processing environments.</span></>
                )}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {isAr
                  ? 'تم تجهيز مركز التطبيقات والأبحاث في مدينة برج العرب الجديدة بمعدات تجريبية تحاكي أجهزة البسترة والطهي تحت التفريغ والتجنيس وتصنيع الجبن المطبوخ وأفران المخبوزات الصناعية.'
                  : 'Equipped with pilot-scale dairy processing vats, high-pressure homogenizers, vacuum cookers, texture profile analyzers (TPA) and test bakery ovens, our Borg El-Arab R&D center allows food manufacturers to optimize mouthfeel, meltability, viscosity and shelf stability.'}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/contact?type=technical" className="btn btn-primary">
                  <span>{isAr ? 'حجز جلسة تجارب في مركز التطبيقات' : 'Schedule a pilot plant trial'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '3.5rem' }}>
            <div style={{ background: 'var(--bg-soft)', padding: '2rem 1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}><FlaskConical size={24} /></div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {isAr ? 'تحسين القوام والاستحلاب' : 'Texture & Emulsification'}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr ? 'تحسين اللزوجة والاستقرار والإحساس بالفم عبر درجات حرارة معالجة وظروف قص متغيرة.' : 'Viscosity, stability and mouthfeel optimization across varied processing temperatures and shear conditions.'}
              </p>
            </div>
            <div style={{ background: 'var(--bg-soft)', padding: '2rem 1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary-blue)', marginBottom: '0.75rem' }}><Layers size={24} /></div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {isAr ? 'تحسين الإنتاجية والتكلفة' : 'Yield & Cost Optimization'}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr ? 'إعادة موازنة التركيبات لحماية جودة المذاق مع تحسين اقتصاديات الإنتاج.' : 'Formulation rebalancing designed to protect eating quality while improving production economics.'}
              </p>
            </div>
            <div style={{ background: 'var(--bg-soft)', padding: '2rem 1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}><ShieldCheck size={24} /></div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {isAr ? 'البطاقات النظيفة وتبسيط المكونات' : 'Cleaner Labels & Simplified Ingredients'}
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {isAr ? 'إعادة صياغة التركيبات لتقليل أو استبدال مضافات معينة مع الحفاظ على الأداء وقبول المستهلك.' : 'Reformulation to reduce or replace specific additives while maintaining functionality and consumer acceptance.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Closing CTA (Exact V9) */}
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
