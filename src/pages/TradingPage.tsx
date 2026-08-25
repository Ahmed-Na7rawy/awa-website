import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { Globe, ShieldCheck, CheckCircle2, ArrowRight, Database } from 'lucide-react';
import { PARTNER_LOGOS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useLanguage } from '../context/LanguageContext';

interface TradingProps {
  onOpenQuote: () => void;
}

export const TradingPage: React.FC<TradingProps> = ({ onOpenQuote }) => {
  const { t, language, translations } = useLanguage();
  const sectionRef1 = useScrollReveal();
  const sectionRef2 = useScrollReveal();

  const categories = [
    {
      title: language === 'ar' ? 'الهيدروكولويدز ومحسنات ومثبتات القوام' : 'Hydrocolloids & Texture Stabilizers',
      items: language === 'ar' ? [
        'صمغ الزانثان (درجة غذائية ودوائية عالية النقاوة)',
        'الكاراجينان (كابا مكرر، شبه مكرر، أيوتا)',
        'صمغ الغوار (درجة غذائية وصناعية)',
        'كربوكسي ميثيل سيليلوز الصوديوم (CMC)',
        'ألجينات الصوديوم ولاكتات الكالسيوم',
        'البكتين (عالي وميثوكسيل منخفض)',
        'صمغ حبوب الخروب (LBG) وصمغ التارا'
      ] : [
        'Xanthan Gum (Food & Pharma Grade)',
        'Carrageenan (Refined Kappa, Semi-Refined, Iota)',
        'Guar Gum (Food & Industrial Grade)',
        'Sodium Carboxymethylcellulose (CMC)',
        'Sodium Alginate & Calcium Lactate',
        'Pectin (High Methoxyl & Low Methoxyl)',
        'Locust Bean Gum (LBG) & Tara Gum'
      ]
    },
    {
      title: language === 'ar' ? 'المواد الحافظة ومطيلات مدة الصلاحية' : 'Preservatives & Shelf-Life Extenders',
      items: language === 'ar' ? [
        'سوربات البوتاسيوم وحمض السوربيك',
        'بنزوات الصوديوم وحمض البنزويك',
        'الناتامايسين (تركيز 50% ومعلق سائل)',
        'النايسين (ببتيد طبيعي مضاد للميكروبات)',
        'بروبيونات الكالسيوم وثنائي أسيتات الصوديوم',
        'حمض الأسكوربيك (فيتامين C) وإريثوربات الصوديوم',
        'حمض الستريك (لامائي وأحادي الهيدرات)'
      ] : [
        'Potassium Sorbate & Sorbic Acid',
        'Sodium Benzoate & Benzoic Acid',
        'Natamycin (50% & Liquid Suspension)',
        'Nisin (Natural Peptide Antimicrobial)',
        'Calcium Propionate & Sodium Diacetate',
        'Ascorbic Acid (Vitamin C) & Sodium Erythorbate',
        'Citric Acid Anhydrous & Monohydrate'
      ]
    },
    {
      title: language === 'ar' ? 'المستحلبات والفوسفات الغذائي' : 'Emulsifiers & Phosphates',
      items: language === 'ar' ? [
        'أحادي الجليسريد المقطر (DMG / E471)',
        'ستيرويل لاكتيلات الصوديوم (SSL / E481)',
        'بوليسوربات 60 و 80 (سلسلة Tween)',
        'إسترات حمض الطرطريك ثنائي الأسيتيل (DATEM)',
        'ثلاثي بولي فوسفات الصوديوم (STPP)',
        'بيروفوسفات رباعي الصوديوم (TSPP)',
        'هيكساميتافوسفات الصوديوم (SHMP)'
      ] : [
        'Distilled Monoglycerides (DMG / E471)',
        'Sodium Stearoyl Lactylate (SSL / E481)',
        'Polysorbate 60 & 80 (Tween Series)',
        'DATEM (Diacetyl Tartaric Acid Esters)',
        'Sodium Tripolyphosphate (STPP)',
        'Tetrasodium Pyrophosphate (TSPP)',
        'Sodium Hexametaphosphate (SHMP)'
      ]
    },
    {
      title: language === 'ar' ? 'المحليات والبروتينات والمضافات التخصصية' : 'Sweeteners, Proteins & Specialty Additives',
      items: language === 'ar' ? [
        'سكرالوز عالي النقاوة (USP / FCC)',
        'أسيسولفام البوتاسيوم (Ace-K)',
        'سكارين الصوديوم والأسبارتام',
        'مركزات بروتين مصل اللبن (WPC 80 / WPC 35)',
        'بروتين الصويا المعزول (SPI 90%) ومركزات الصويا',
        'ثاني أكسيد التيتانيوم وملونات الأغذية الطبيعية',
        'مستحضرات الإنزيمات (ألفا أميليز، ليباز)'
      ] : [
        'High-Purity Sucralose (USP/FCC)',
        'Acesulfame Potassium (Ace-K)',
        'Sodium Saccharin & Aspartame',
        'Whey Protein Concentrates (WPC 80 / WPC 35)',
        'Soy Protein Isolate (SPI 90%) & Concentrates',
        'Titanium Dioxide & Natural Food Colors',
        'Enzyme Preparations (Alpha-Amylase, Lipase)'
      ]
    }
  ];

  return (
    <div className="trading-page">
      {/* Header Banner */}
      <PageHero
        eyebrow={translations.trading.hero.eyebrow}
        title={translations.trading.hero.title}
        subtitle={translations.trading.hero.subtitle}
        backgroundImage="/images/pages/trading/Image11.jpg"
      />

      {/* Trading Overview */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">{language === 'ar' ? 'سلاسل إمداد موثوقة' : 'Reliable Supply Chain'}</div>
              <h2 className="section-title">
                {language === 'ar' ? 'توريد مباشر للمواد الخام لمصانع الأغذية بالمنطقة' : 'Seamless Raw Material Procurement For Regional Manufacturers'}
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                {language === 'ar'
                  ? 'بخبرة تمتد لأكثر من 33 عاماً، تضمن AWA Group وصولاً سلساً للمضافات الغذائية النقية، ومثبتات القوام، والمواد الحافظة. نتولى عمليات الشحن الدولي والامتثال الرقابي والتحقق من الجودة.'
                  : 'With three decades of market presence, AWA Group provides unhindered access to high-purity food additives, functional hydrocolloids, and preservatives. We handle international logistics, currency hedging, regulatory compliance, and quality auditing.'}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                {language === 'ar'
                  ? 'مخزوننا الاستراتيجي في مستودعات الإسكندرية والقاهرة يضمن استمرارية الإمداد لخطوط إنتاجكم دون توقف ناتج عن تقلبات الشحن العالمي.'
                  : 'Our strategic buffer inventory stored in Alexandria and Cairo warehouses guarantees continuous supply to your production lines, eliminating downtime caused by global shipping disruptions.'}
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>{language === 'ar' ? 'طلب عرض أسعار للخامات' : 'Request Ingredient Quotation'}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/trading/Image11.jpg" 
                alt="AWA Raw Material Warehousing & Trading" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/blending.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Catalog Grid */}
      <section className="section section-stone" ref={sectionRef2}>
        <div className="container">
          <div className="section-header reveal-fade-up">
            <div className="eyebrow">{language === 'ar' ? 'قائمة المنتجات والخامات' : 'Product Portfolio'}</div>
            <h2 className="section-title">{language === 'ar' ? 'فئات التوريد والتجارة الرئيسية' : 'Core Trading Categories'}</h2>
            <p className="section-desc">
              {language === 'ar' 
                ? 'كافة المكونات والمواد الخام مصحوبة بشهادات التحليل المعتمدة (COA) وبطاقات السلامة (MSDS) وشهادات حلال و ISO.' 
                : 'All ingredients are supplied with Certificate of Analysis (COA), MSDS, Halal, Kosher, and ISO certifications.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="reveal-fade-up"
                style={{
                  background: '#FFFFFF',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    <Database size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark-navy)' }}>{cat.title}</h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {cat.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partner Marquee */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {language === 'ar' ? 'شبكة الموردين العالمية' : 'Global Sourcing Network'}
            </div>
            <h2 className="section-title">
              {language === 'ar' ? 'شركاء التوريد الاستراتيجيون' : 'Strategic Sourcing Partners'}
            </h2>
          </div>
          <PartnerMarquee items={PARTNER_LOGOS} speed="normal" />
        </div>
      </section>
    </div>
  );
};
