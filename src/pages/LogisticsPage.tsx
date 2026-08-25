import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Truck, ThermometerSnowflake, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LogisticsProps {
  onOpenQuote: () => void;
}

export const LogisticsPage: React.FC<LogisticsProps> = ({ onOpenQuote }) => {
  const { t, language, translations } = useLanguage();
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();
  const sectionRef3 = useScrollReveal();

  return (
    <div className="logistics-page">
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.logistics.hero.eyebrow}
        title={translations.logistics.hero.title}
        subtitle={translations.logistics.hero.subtitle}
        backgroundImage="/images/pages/logistics/Image30.jpg"
      />

      {/* Main Logistics Overview */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">{language === 'ar' ? 'سلامة سلسلة التبريد' : 'Cold Chain Integrity'}</div>
              <h2 className="section-title">
                {language === 'ar' ? 'حماية نقاء وفاعلية المكونات من ميناء الوصول حتى مصنعكم' : 'Preserving Ingredient Purity From Port of Entry to Plant Floor'}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'المكونات الحساسة مثل الإنزيمات، والبكتيريا الحيوية، والبروتينات الوظيفية، والنكهات السائلة تتطلب تحكماً حرارياً دقيقاً. يضمن قطاع اللوجستيات في AWA Group سلاسل تبريد محكمة، وإفراجاً جمركياً سريعاً، ونقلاً فورياً لكافة المناطق الصناعية.'
                  : 'Food ingredients like enzymes, bacterial cultures, functional proteins, and liquid flavors demand precise thermal control. AWA Group’s logistics division ensures unbroken cold chains, fast maritime port clearance, and rapid dispatch across all Egyptian industrial zones.'}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                {language === 'ar'
                  ? 'مجمعاتنا اللوجستية بالقرب من ميناء الإسكندرية وفي القاهرة مراقبة على مدار 24 ساعة بأنظمة قياس رقمية عن بعد، وضوابط للرطوبة، ومولدات طاقة احتياطية مؤتمتة.'
                  : 'Our logistics complexes in Alexandria Port vicinity and Cairo are monitored 24/7 with digital telemetry, humidity regulators, and automated backup power generators.'}
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>{language === 'ar' ? 'الاستفسار عن الخدمات اللوجستية' : 'Inquire About Supply Chain Services'}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/logistics/Image30.jpg" 
                alt="AWA Logistics Warehouse Facility" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Logistics Capabilities */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">{language === 'ar' ? 'الخدمات والمواصفات الفنية' : 'Services & Technical Specs'}</div>
            <h2 className="section-title">{language === 'ar' ? 'حلول لوجستية وسلاسل إمداد شاملة' : 'Full-Spectrum Supply Chain Capabilities'}</h2>
            <p className="section-desc">
              {language === 'ar'
                ? 'حلول تخزين ونقل مخصصة ومتوافقة تماماً مع معايير الهيئة القومية لسلامة الغذاء (NFSA) والبروتوكولات الدولية.'
                : 'Tailored storage and transport solutions fully compliant with NFSA and international food safety protocols.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="reveal-fade-up" style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ThermometerSnowflake size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? 'تخزين متعدد درجات الحرارة' : 'Multi-Temperature Warehousing'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                {language === 'ar'
                  ? 'مساحات مخصصة للتخزين الجاف (+15° إلى +25° مئوية)، والمبرد (+2° إلى +8° مئوية)، والمجمد (-18° مئوية) مع تسجيل حراري رقمي لحظي.'
                  : 'Dedicated zones for ambient (+15°C to +25°C), chilled (+2°C to +8°C), and deep frozen storage (-18°C) equipped with real-time temperature data logging.'}
              </p>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.1s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Truck size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? 'أسطول نقل مبرد معتمد' : 'Refrigerated Fleet Distribution'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                {language === 'ar'
                  ? 'أسطول حديث من الشاحنات المعزولة والمبردة للتوصيل المباشر إلى مصانع العملاء ومراكز التوزيع الإقليمية في كافة محافظات مصر.'
                  : 'Modern fleet of insulated and reefer trucks delivering directly to manufacturing plants and regional fulfillment centers across Egypt.'}
              </p>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.2s', background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Clock size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                {language === 'ar' ? 'تخليص جمركي سريع' : 'Fast Customs Clearance'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                {language === 'ar'
                  ? 'خبرة عريقة في إجراءات هيئة سلامة الغذاء (NFSA) وفحوصات الرقابة على الصادرات والواردات (GOEIC) للإفراج السريع عن الحاويات.'
                  : 'Decades of expertise navigating Egyptian food authority regulations (NFSA), GOEIC inspections, and port quarantine protocols for rapid container release.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Logistics Showcase */}
      <section className="section" ref={sectionRef3}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <div className="reveal-fade-up">
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img 
                  src="/images/pages/logistics/Image31.jpg" 
                  alt="AWA Distribution Center High Density Racking" 
                  className="reveal-zoom"
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/pages/logistics/Image2-7.jpg';
                  }}
                />
              </div>
              <h4 style={{ marginTop: '1.25rem', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                {language === 'ar' ? 'أرفف تخزين عالية الكثافة وإدارة رقمية للمنصات' : 'High-Density Racking & Pallet Management'}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {language === 'ar' ? 'نظام إدارة المخزون FIFO مع تتبع كامل لأرقام التشغيلات والدفعات.' : 'FIFO inventory management systems with complete batch lot traceability.'}
              </p>
            </div>

            <div className="reveal-fade-up" style={{ animationDelay: '0.2s' }}>
              <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img 
                  src="/images/pages/logistics/Image32.jpg" 
                  alt="AWA Cold Storage Sanitation" 
                  className="reveal-zoom"
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/pages/home/logistics.jpg';
                  }}
                />
              </div>
              <h4 style={{ marginTop: '1.25rem', fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                {language === 'ar' ? 'بروتوكولات نظافة وتعقيم صارمة' : 'Strict Sanitation & Hygiene Protocols'}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                {language === 'ar' ? 'ضوابط نظافة متوافقة مع معايير FSSC 22000 في جميع أرصفة الشحن والغرف المبردة.' : 'FSSC 22000 compliant hygiene controls across all loading docks and cold cells.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
