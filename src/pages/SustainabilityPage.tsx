import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Leaf, BarChart3, Users2, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SustainabilityProps {
  onOpenQuote: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityProps> = ({ onOpenQuote }) => {
  const { t, language, translations } = useLanguage();
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();
  return (
    <div className="sustainability-page">
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.sustainability.hero.eyebrow}
        title={translations.sustainability.hero.title}
        subtitle={translations.sustainability.hero.subtitle}
        backgroundImage="/images/pages/sustainability/esg.jpg"
      />

      {/* ESG Framework */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {language === 'ar' ? 'إطار العمل المؤسسي' : 'Our Framework'}
            </div>
            <h2 className="section-title">
              {language === 'ar' ? 'الركائز الثلاث للاستدامة في AWA Group' : 'The Three Pillars of AWA Sustainability'}
            </h2>
            <p className="section-desc">
              {language === 'ar'
                ? 'دمج الحفاظ على البيئة، ومعايير السلامة والصحة المهنية (ISO 14001 و ISO 45001)، والمسؤولية المجتمعية في صلب عملياتنا اليومية.'
                : 'Embedding environmental stewardship, health & safety standards (ISO 14001 & ISO 45001), and community responsibility into our daily operations.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* Assess */}
            <div className="reveal-fade-up" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Leaf size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? '1. التقييم والتدقيق (Assess)' : '1. Assess'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'نقيم باستمرار أثرنا البيئي من توريد المواد الخام إلى استهلاك الطاقة في المصانع، وإمكانية إعادة تدوير العبوات، ومعالجة مياه الصرف الصناعي.'
                  : 'We continuously evaluate our ecological footprint from raw ingredient sourcing to factory energy consumption, packaging recyclability, and wastewater management.'}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> 
                  <span>{language === 'ar' ? 'تدقيق امتثال الموردين لمعايير ESG' : 'Supplier ESG compliance audits'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> 
                  <span>{language === 'ar' ? 'حساب وقياس البصمة الكربونية' : 'Carbon footprint baselining'}</span>
                </li>
              </ul>
            </div>

            {/* Monitor */}
            <div className="reveal-fade-up" style={{ animationDelay: '0.1s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <BarChart3 size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? '2. المراقبة والتحسين (Monitor)' : '2. Monitor'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'متابعة لحظية لاستهلاك المياه وكفاءة استهلاك الطاقة في مصانع الخلط وسلاسل التبريد ومعايير بيئة العمل وفق ISO 14001.'
                  : 'Real-time tracking of water consumption, energy efficiency in blending plants, cold chain refrigeration refrigerants, and workplace health metrics under ISO 14001.'}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> 
                  <span>{language === 'ar' ? 'قياس الطاقة والتحول لإضاءة LED الموفرة' : 'Energy metering & LED retrofitting'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> 
                  <span>{language === 'ar' ? 'مبادرات تقليل الهدر والنفايات' : 'Zero-landfill waste reduction goals'}</span>
                </li>
              </ul>
            </div>

            {/* Engage */}
            <div className="reveal-fade-up" style={{ animationDelay: '0.2s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Users2 size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? '3. المشاركة والتطوير (Engage)' : '3. Engage'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'تمكين كوادرنا البشرية من خلال برامج التدريب المستمر على السلامة، ودعم المجتمع المحلي في الإسكندرية وبرج العرب، وابتكار أغذية صحية.'
                  : 'Actively fostering growth for our workforce through continuous safety training, supporting local community development in Alexandria and Borg El-Arab City, and promoting healthy nutritional formulations.'}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> 
                  <span>{language === 'ar' ? 'تركيبات غذائية تعزز الصحة والرفاهية' : 'Health & wellness nutrition formulations'}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" /> 
                  <span>{language === 'ar' ? 'شراكات المسؤولية المجتمعية CSR' : 'Community CSR partnerships'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Clean Label Innovation */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">{language === 'ar' ? 'الابتكار في التغذية الصحية' : 'Nutritional Health Innovation'}</div>
              <h2 className="section-title">
                {language === 'ar' ? 'تمكين الأنظمة الغذائية الصحية من خلال تقليل السكر والدهون' : 'Enabling Healthier Diets with Sugar & Fat Reduction'}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'تتخصص معامل التطبيقات لدينا في ابتكار تركيبات وظيفية تتيح لمصنعي الأغذية تقليل السكريات المضافة، والدهون المشبعة، والمضافات الاصطناعية دون المساس بالمذاق أو القوام أو الإحساس الفموي.'
                  : 'Our application labs specialize in developing functional formulations that allow food processors to significantly reduce added sugars, saturated fats, and synthetic additives without compromising taste, mouthfeel, or texture.'}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                {language === 'ar'
                  ? 'من خلال علامات مثل <strong>Sweet & Slim</strong> وأنظمة الحفظ الحيوية الطبيعية Clean-Label، نساهم في بناء مستقبل غذائي أكثر صحة للمستهلك المصري والعربي.'
                  : 'Through brands like Sweet & Slim and clean-label natural bio-preservative systems, we help build a healthier future for Egyptian and Arab families.'}
              </p>
              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>{language === 'ar' ? 'طلب استشارة لحلول Clean Label' : 'Inquire About Clean Label Solutions'}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/sustainability/esg.jpg" 
                alt="AWA ESG Green Commitment" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/sustainability/sustainability.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
