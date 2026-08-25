import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Settings, Cpu, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface IndustriesProps {
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const IndustriesPage: React.FC<IndustriesProps> = ({ onOpenQuote, onNavigate }) => {
  const { t, language, translations } = useLanguage();
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();
  return (
    <div className="industries-page">
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.industries.hero.eyebrow}
        title={translations.industries.hero.title}
        subtitle={translations.industries.hero.subtitle}
        backgroundImage="/images/pages/industries/image33.jpg"
      />

      {/* Main Overview */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">{language === 'ar' ? 'مجمع برج العرب الجديدة' : 'New Borg El-Arab Plant'}</div>
              <h2 className="section-title">
                {language === 'ar' ? 'خطوط إنتاج مؤتمتة ومصممة لأعلى درجات النقاء الغذائي' : 'Automated Production Lines Engineered for Food Purity'}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'يمتد مجمع تصنيع AWA Group في المنطقة الصناعية الرابعة بمدينة برج العرب الجديدة على مساحات إنتاج نظيفة مخصصة لخلط المساحيق الجافة، وتركيب مثبتات السوائل، والتعبئة والتغليف للمنتجات الاستهلاكية.'
                  : 'AWA Group’s manufacturing complex in the 4th Industrial Zone of New Borg El-Arab City spans specialized cleanroom production zones for dry powder blending, liquid stabilizer formulation, and retail consumer packaging.'}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                {language === 'ar'
                  ? 'بفضل أنظمة الجرعات الميكروية المحوسبة، وأوعية الخلط المصنوعة من الستانلس ستيل 316L المقاوم، وأنظمة ترشيح الهواء HEPA الصارمة، يضمن مصنعنا التجانس الكامل من دفعة إلى أخرى وانعدام التلوث التبادلي.'
                  : 'With computerized micro-dosing systems, stainless steel 316L mixing vessels, and strict HEPA air filtration, our facility guarantees complete batch-to-batch uniformity and zero cross-contamination.'}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenQuote} className="btn btn-primary">
                  <span>{language === 'ar' ? 'طلب التصنيع للغير (Toll Manufacturing)' : 'Inquire For Contract Toll Manufacturing'}</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('products')} className="btn btn-secondary">
                  <span>{language === 'ar' ? 'استعراض العلامات التجارية' : 'View Consumer Brands'}</span>
                </button>
              </div>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/industries/image33.jpg" 
                alt="AWA Borg El Arab Manufacturing Plant" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/customercare.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">{language === 'ar' ? 'القدرات الإنتاجية' : 'Production Capabilities'}</div>
            <h2 className="section-title">{language === 'ar' ? 'خطوط المعالجة والتصنيع الصناعي' : 'Industrial Processing Lines'}</h2>
            <p className="section-desc">
              {language === 'ar'
                ? 'أحجام دفعات مرنة وخيارات تصنيع مخصصة لتلبية احتياجات السوق المحلي وأسواق التصدير.'
                : 'Flexible batch sizes and custom manufacturing options for domestic and export clients.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="reveal-fade-up" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Settings size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? 'خلط المساحيق عالي القص' : 'High-Shear Powder Blending'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'خلاطات شريطية ومجاديف محوسبة تضمن التوزيع المتجانس للمكونات الدقيقة، والهيدروكولويدز، وخلطات الفيتامينات في أكياس 25 كجم متعددة الطبقات.'
                  : 'Computerized ribbon and paddle blenders capable of uniform dispersion for micro-ingredients, hydrocolloids, and vitamin premixes in 25kg multi-wall bags.'}
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                {language === 'ar' ? 'الطاقة الإنتاجية: 1,500 طن / شهر' : 'Capacity: 1,500 MT / Month'}
              </div>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.1s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Cpu size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? 'التعبئة والتغليف الاستهلاكي' : 'Consumer Retail Packaging'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'خطوط تعبئة أكياس صغيرة متعددة المسارات (Sweet & Slim)، وخطوط تعبئة العبوات القابلة للعصر (SquEasy)، وتعبئة الباوتش بضخ النيتروجين.'
                  : 'Automated multi-lane sachet packaging (Sweet & Slim), squeeze bottle filling lines (SquEasy purées), and nitrogen-flushed pouch filling.'}
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                {language === 'ar' ? 'خطوط متعددة الأحجام والأنماط' : 'Multi-Format Lines'}
              </div>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.2s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? 'التصنيع للغير والعلامات الخاصة (Private Label)' : 'Private Label & Toll Manufacturing'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'تصنيع تعاقدي متكامل لكبرى العلامات التجارية الاستهلاكية وسلاسل السوبرماركت والمطاعم مع سرية تامة للوصفات والتركيبات.'
                  : 'Turnkey contract manufacturing for multinational FMCG brands, retail supermarkets, and food service chains with full recipe confidentiality.'}
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>
                {language === 'ar' ? 'حلول OEM / ODM متكاملة' : 'Turnkey OEM / ODM Solutions'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

