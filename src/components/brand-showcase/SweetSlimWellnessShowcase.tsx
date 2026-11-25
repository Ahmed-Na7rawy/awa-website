import React, { useState } from 'react';
import { CheckCircle2, Activity, Coffee, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './BrandShowcase.css';

interface SweetSlimPillar {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  leadImage: string;
  companionImage?: string;
  color: string;
  lightGradient: string;
  textColor: string;
  benefits: string[];
  keySpec: string;
  keySpecLabel: string;
  floatingGraphics: { emoji: string; size: number; top: string; left: string; delay: number }[];
}

const SWEET_SLIM_PILLARS_EN: SweetSlimPillar[] = [
  {
    id: 'sachets',
    title: 'Daily Table-Top Sachets & Value Dispensers',
    badge: 'Daily Essentials',
    tagline: '1 Stick Replaces 2 Teaspoons of Sugar with 0 Calories & 0 Glycemic Index',
    leadImage: '/artwork/sweet-and-slim/3d/classic-100-box.png',
    companionImage: '/artwork/sweet-and-slim/3d/extra-50-box.png',
    color: '#10B981',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #ECFDF5 0%, #D1FAE5 40%, #F8FAFC 80%)',
    textColor: '#047857',
    benefits: [
      'Pure pharmaceutical-grade sucralose',
      'Available in 50 & 100 stick dispenser boxes',
      'Enriched with prebiotic chicory inulin fiber',
      '100% Aspartame, Cyclamate & Saccharin free',
    ],
    keySpec: '0.0 GI',
    keySpecLabel: 'Zero Blood Sugar Elevation',
    floatingGraphics: [
      { emoji: '🍃', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🌱', size: 38, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '☕', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🌱', size: 40, top: '82%', left: '46%', delay: 0.8 },
      { emoji: '🍃', size: 48, top: '10%', left: '88%', delay: 0.2 },
      { emoji: '🌿', size: 36, top: '50%', left: '92%', delay: 1.0 },
      { emoji: '🌱', size: 40, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '☕', size: 42, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  {
    id: 'mints',
    title: 'Artisan Sugar-Free Pocket Breath Mints',
    badge: 'Pocket Fresh',
    tagline: 'Collectible Metal Sliding Tins with Natural Essential Oils & Zero Tooth Decay',
    leadImage: '/artwork/sweet-and-slim/3d/mints-spearmint-tin.png',
    companionImage: '/artwork/sweet-and-slim/3d/mints-peach-tin.png',
    color: '#06B6D4',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #CFFAFE 0%, #A5F3FC 40%, #F8FAFC 80%)',
    textColor: '#0E7490',
    benefits: [
      'Refreshing Spearmint, Sun Peach & Strawberry',
      'Matte embossed metal pocket sliding tin',
      'Tooth friendly sugar-free micro-pills',
      'Instant long-lasting cooling breath freshness',
    ],
    keySpec: '< 1 kcal',
    keySpecLabel: 'Per Refreshing Mint Pill',
    floatingGraphics: [
      { emoji: '🧊', size: 50, top: '8%', left: '6%', delay: 0 },
      { emoji: '🍑', size: 48, top: '68%', left: '8%', delay: 0.6 },
      { emoji: '🍃', size: 46, top: '12%', left: '44%', delay: 0.2 },
      { emoji: '🌿', size: 36, top: '82%', left: '46%', delay: 0.9 },
      { emoji: '🧊', size: 46, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🍓', size: 44, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '🍑', size: 42, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🍃', size: 42, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
  {
    id: 'liquid',
    title: 'Instant Zero-Calorie Liquid Dropper',
    badge: 'Cold Mixology',
    tagline: 'Instant Cold-Soluble Dropper Bottle for Iced Lattes, Cocktails & Juices',
    leadImage: '/artwork/sweet-and-slim/3d/lite-syrup-bottle.png',
    color: '#3B82F6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #DBEAFE 0%, #BFDBFE 40%, #F8FAFC 80%)',
    textColor: '#1D4ED8',
    benefits: [
      '3 drops equal 1 full teaspoon of sugar',
      'Dissolves instantly in ice water without stirring crystals',
      'Zero residue, zero stickiness, no clumping',
      'Pocket-sized leakproof precision dropper',
    ],
    keySpec: '150+',
    keySpecLabel: 'Sweet Servings Per Bottle',
    floatingGraphics: [
      { emoji: '💧', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🍋', size: 46, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '🧊', size: 44, top: '12%', left: '44%', delay: 0.8 },
      { emoji: '💧', size: 38, top: '82%', left: '46%', delay: 1.0 },
      { emoji: '💧', size: 48, top: '10%', left: '88%', delay: 0.3 },
      { emoji: '🍋', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '💧', size: 42, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌿', size: 36, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  {
    id: 'hotdrinks',
    title: 'Diet Hot Cocoa & 3-in-1 Coffee Boxes',
    badge: 'Warm Indulgence',
    tagline: 'Decadent Dutch Chocolate & Arabica Coffee with Zero Added Table Sugar',
    leadImage: '/artwork/sweet-and-slim/3d/hot-chocolate-box.png',
    companionImage: '/artwork/sweet-and-slim/3d/3in1-extra-box.png',
    color: '#8B5CF6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #EDE9FE 0%, #DDD6FE 40%, #F8FAFC 80%)',
    textColor: '#6D28D9',
    benefits: [
      'Dutch dark cocoa with roasted hazelnut cream',
      'Only 45 calories per rich creamy mug',
      'Sweetened exclusively with Sweet & Slim',
      'Instant boiling water or steamed milk dissolution',
    ],
    keySpec: '45 kcal',
    keySpecLabel: 'Only 45 kcal / Creamy Mug',
    floatingGraphics: [
      { emoji: '🍫', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🌰', size: 46, top: '68%', left: '8%', delay: 0.6 },
      { emoji: '☕', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🍫', size: 38, top: '82%', left: '46%', delay: 0.9 },
      { emoji: '🍫', size: 48, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🌰', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '☕', size: 40, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌿', size: 36, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
];

const SWEET_SLIM_PILLARS_AR: SweetSlimPillar[] = [
  {
    id: 'sachets',
    title: 'أظرف التحلية اليومية وعلب التوفير',
    badge: 'الأساسيات اليومية',
    tagline: 'ظرف واحد يحل محل ملعقتين سكر بصفر سعرات وصفر مؤشر جلايسيمي',
    leadImage: '/artwork/sweet-and-slim/3d/classic-100-box.png',
    companionImage: '/artwork/sweet-and-slim/3d/extra-50-box.png',
    color: '#10B981',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #ECFDF5 0%, #D1FAE5 40%, #F8FAFC 80%)',
    textColor: '#047857',
    benefits: [
      'سكرالوز دوائي أوروبي نقي 100%',
      'متوفر في علب موزع 50 و 100 ظرف',
      'معزز بألياف الإينولين البريبايوتك',
      'خالي تماماً من الأسبارتام والسكارين والسيكلامات',
    ],
    keySpec: '0.0 GI',
    keySpecLabel: 'صفر تأثير على سكر الدم',
    floatingGraphics: [
      { emoji: '🍃', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🌱', size: 38, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '☕', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🌱', size: 40, top: '82%', left: '46%', delay: 0.8 },
      { emoji: '🍃', size: 48, top: '10%', left: '88%', delay: 0.2 },
      { emoji: '🌿', size: 36, top: '50%', left: '92%', delay: 1.0 },
      { emoji: '🌱', size: 40, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '☕', size: 42, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  {
    id: 'mints',
    title: 'حلوى نعناع الجيب الفاخرة بدون سكر',
    badge: 'انتعاش الجيب',
    tagline: 'علب معدنية منزلقة أنيقة بزيوت طبيعية وبدون أي تسوس للأسنان',
    leadImage: '/artwork/sweet-and-slim/3d/mints-spearmint-tin.png',
    companionImage: '/artwork/sweet-and-slim/3d/mints-peach-tin.png',
    color: '#06B6D4',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #CFFAFE 0%, #A5F3FC 40%, #F8FAFC 80%)',
    textColor: '#0E7490',
    benefits: [
      'نكهات منعشة: نعناع سبيرمنت، خوخ صيفي، وفراولة',
      'علبة معدنية فاخرة منزلقة منقوشة',
      'حبيبات دقيقة خالية من السكر وصديقة للأسنان',
      'انتعاش فوري للنفس يدوم طويلاً',
    ],
    keySpec: '< 1 سعرة',
    keySpecLabel: 'لكل حبة نعناع منعشة',
    floatingGraphics: [
      { emoji: '🧊', size: 50, top: '8%', left: '6%', delay: 0 },
      { emoji: '🍑', size: 48, top: '68%', left: '8%', delay: 0.6 },
      { emoji: '🍃', size: 46, top: '12%', left: '44%', delay: 0.2 },
      { emoji: '🌿', size: 36, top: '82%', left: '46%', delay: 0.9 },
      { emoji: '🧊', size: 46, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🍓', size: 44, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '🍑', size: 42, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🍃', size: 42, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
  {
    id: 'liquid',
    title: 'قطارة التحلية السائلة الفورية',
    badge: 'ذوبان بارد فوري',
    tagline: 'زجاجة قطارة فورية الذوبان للأيس كوفي والعصائر المثلجة والكوكتيلات',
    leadImage: '/artwork/sweet-and-slim/3d/lite-syrup-bottle.png',
    color: '#3B82F6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #DBEAFE 0%, #BFDBFE 40%, #F8FAFC 80%)',
    textColor: '#1D4ED8',
    benefits: [
      '3 قطرات تعادل ملعقة سكر كاملة',
      'تذوب فوراً في الماء المثلج دون الحاجة للتقليب',
      'بدون أي رواسب أو التصاق أو تكتل',
      'زجاجة تنقيط دقيقة محكمة مانعة للتسريب',
    ],
    keySpec: '150+',
    keySpecLabel: 'حصة تحلية في كل زجاجة',
    floatingGraphics: [
      { emoji: '💧', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🍋', size: 46, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '🧊', size: 44, top: '12%', left: '44%', delay: 0.8 },
      { emoji: '💧', size: 38, top: '82%', left: '46%', delay: 1.0 },
      { emoji: '💧', size: 48, top: '10%', left: '88%', delay: 0.3 },
      { emoji: '🍋', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '💧', size: 42, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌿', size: 36, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  {
    id: 'hotdrinks',
    title: 'مشروب الشوكولاتة الساخنة دايت',
    badge: 'دفء دايت فاخر',
    tagline: 'كاكاو هولندي غني وبندق محمص بدون أي سكر مائدة مضاف',
    leadImage: '/artwork/sweet-and-slim/3d/hot-chocolate-box.png',
    companionImage: '/artwork/sweet-and-slim/3d/3in1-extra-box.png',
    color: '#8B5CF6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #EDE9FE 0%, #DDD6FE 40%, #F8FAFC 80%)',
    textColor: '#6D28D9',
    benefits: [
      'كاكاو هولندي داكن مع كريمة البندق المحمص',
      '45 سعرة حرارية فقط للكوب الكريمي المشبع',
      'محلى حصرياً بواسطة Sweet & Slim',
      'ذوبان فوري بالماء المغلي أو الحليب الساخن',
    ],
    keySpec: '45 سعرة',
    keySpecLabel: '45 سعرة فقط للكوب الكريمي',
    floatingGraphics: [
      { emoji: '🍫', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🌰', size: 46, top: '68%', left: '8%', delay: 0.6 },
      { emoji: '☕', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🍫', size: 38, top: '82%', left: '46%', delay: 0.9 },
      { emoji: '🍫', size: 48, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🌰', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '☕', size: 40, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌿', size: 36, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
];

interface SweetSlimWellnessShowcaseProps {
  onOpenQuote: () => void;
}

export const SweetSlimWellnessShowcase: React.FC<SweetSlimWellnessShowcaseProps> = ({ onOpenQuote }) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const pillars = isAr ? SWEET_SLIM_PILLARS_AR : SWEET_SLIM_PILLARS_EN;
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  const activePillar = pillars[activePillarIndex] || pillars[0];

  // Interactive Sugar Saver Calculator State
  const [cupsPerDay, setCupsPerDay] = useState<number>(3);
  const [spoonsPerCup, setSpoonsPerCup] = useState<number>(2);

  const dailySugarSpoons = cupsPerDay * spoonsPerCup;
  const dailyCaloriesSaved = dailySugarSpoons * 20;
  const yearlyCaloriesSaved = dailyCaloriesSaved * 365;
  const yearlySugarKg = ((dailySugarSpoons * 5 * 365) / 1000).toFixed(1);
  const yearlyFatLossKg = (yearlyCaloriesSaved / 7700).toFixed(1);

  const nutritionalHighlights = isAr
    ? [
        { label: 'السعرات الحرارية', value: activePillar.keySpec },
        { label: 'السكر المضاف', value: '0.0 جم' },
        { label: 'الأسبارتام والسيكلامات', value: 'خالي 100%' },
        { label: 'ملاءمة الاستخدام', value: 'السكري والكيتو' },
      ]
    : [
        { label: 'Energy Metric', value: activePillar.keySpec },
        { label: 'Added Sugar', value: '0.0g' },
        { label: 'Aspartame & Cyclamate', value: '100% Free' },
        { label: 'Dietary Suitability', value: 'Diabetic & Keto Safe' },
      ];

  return (
    <section className="ss-wellness-section-light">
      <div className="ss-wellness-container-light">
        {/* Editorial Section Header */}
        <div className="ss-editorial-header">
          <h2 className="ss-editorial-title">
            {isAr ? 'حلاوة حقيقية. بدون أدنى تنازل.' : 'PURE SWEETNESS. ZERO COMPROMISE.'}
          </h2>

          <p className="ss-editorial-subtitle">
            {isAr
              ? 'من أظرف القهوة الصباحية إلى حلوى النعناع في الجيب والشوكولاتة الساخنة دايت، يستبدل Sweet & Slim سكر المائدة في كل لحظة من يومك.'
              : 'From morning espresso sticks to pocket breath mints and warm diet cocoa, Sweet & Slim replaces table sugar across every moment of your day.'}
          </p>

          {/* Product Line Switcher */}
          <div className="ss-pillars-nav-light" role="tablist" aria-label={isAr ? 'خطوط منتجات Sweet & Slim' : 'Sweet & Slim product lines'}>
            {pillars.map((p, idx) => {
              const isSelected = activePillarIndex === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`ss-pillar-btn-light ${isSelected ? 'active' : ''}`}
                >
                  <span
                    className="ss-pillar-dot"
                    style={{ backgroundColor: isSelected ? '#FFFFFF' : p.color }}
                  />
                  <span>{p.title.split(' ').slice(0, 2).join(' ')}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cohesive White Editorial Spotlight Container */}
        <div className="ss-editorial-card">
          <div className="ss-editorial-grid">
            {/* Left Column: Product Intro, Benefits & Nutritional Info */}
            <div className="ss-editorial-copy">
              <div>
                <div className="ss-editorial-badge">
                  {activePillar.badge}
                </div>
                <h3 className="ss-editorial-product-title">
                  {activePillar.title}
                </h3>
                <p className="ss-editorial-tagline">
                  {activePillar.tagline}
                </p>
              </div>

              {/* Benefits Checklist */}
              <div className="ss-editorial-benefits">
                {activePillar.benefits.map((b, idx) => (
                  <div key={idx} className="ss-editorial-benefit-item">
                    <CheckCircle2 size={17} style={{ color: '#059669', flexShrink: 0 }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Key Nutritional Metric Box & Quote Action */}
              <div className="ss-editorial-metric-row">
                <div className="ss-editorial-metric">
                  <div className="ss-editorial-metric-value">
                    {activePillar.keySpec}
                  </div>
                  <div className="ss-editorial-metric-label">
                    {activePillar.keySpecLabel}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="ss-editorial-cta-link"
                >
                  <ShieldCheck size={16} />
                  <span>{isAr ? 'طلب المواصفات الفنية' : 'Request Specs'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Light-Mint Display Stage with White Image Frame */}
            <div className="ss-editorial-stage">
              <div className="ss-product-frame ss-product-frame--editorial">
                <img
                  src={activePillar.leadImage}
                  alt={activePillar.title}
                  className="ss-product-frame-img ss-product-frame-img--editorial"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/2026/1.png';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Clean Nutritional Highlights Strip Beneath Main Content */}
          <div className="ss-nutrition-strip">
            {nutritionalHighlights.map((item, idx) => (
              <div key={idx} className="ss-nutrition-strip-item">
                <span className="ss-nutrition-strip-label">{item.label}</span>
                <span className="ss-nutrition-strip-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Sugar & Calorie Replacement Calculator */}
        <div className="ss-calculator-card-light">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <div className="ss-eyebrow" style={{ marginBottom: '0.5rem' }}>
              <Activity size={14} style={{ color: '#059669' }} />
              <span>{isAr ? 'حاسبة الأثر الصحي التفاعلية' : 'Interactive Health Impact Calculator'}</span>
            </div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase', margin: 0 }}>
              {isAr ? 'احسب وفر السكر والسعرات الحرارية سنوياً' : 'CALCULATE YOUR SUGAR & CALORIE SAVINGS'}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: '0.4rem', marginBottom: 0 }}>
              {isAr
                ? 'حرّك المؤشرات لترى كيف يؤدي استبدال السكر بـ Sweet & Slim إلى تحسين صحتك على مدار العام.'
                : 'Adjust the sliders to see how replacing sugar with Sweet & Slim transforms your yearly health.'}
            </p>
          </div>

          <div className="ss-calc-grid-light">
            {/* Sliders Input Column */}
            <div className="ss-calc-inputs-light">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Coffee size={15} style={{ color: '#059669' }} />
                    <span>{isAr ? 'عدد المشروبات يومياً:' : 'Drinks per Day:'}</span>
                  </span>
                  <span style={{ color: '#047857', fontWeight: 800 }}>
                    {cupsPerDay} {isAr ? 'أكواب' : 'Cups'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={cupsPerDay}
                  onChange={(e) => setCupsPerDay(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: '#059669' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Coffee size={15} style={{ color: '#059669' }} />
                    <span>{isAr ? 'ملاعق السكر لكل كوب:' : 'Sugar Spoons per Cup:'}</span>
                  </span>
                  <span style={{ color: '#047857', fontWeight: 800 }}>
                    {spoonsPerCup} {isAr ? 'ملاعق' : 'Spoons'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={spoonsPerCup}
                  onChange={(e) => setSpoonsPerCup(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: '#059669' }}
                />
              </div>
            </div>

            {/* Results Live Metrics Grid */}
            <div className="ss-calc-results-light">
              <div className="ss-stat-box-light">
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#047857' }}>
                  {dailyCaloriesSaved} {isAr ? 'سعرة' : 'kcal'}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {isAr ? 'وفر السعرات يومياً' : 'Daily Calories Saved'}
                </div>
              </div>

              <div className="ss-stat-box-light">
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
                  {yearlySugarKg} {isAr ? 'كجم' : 'kg'}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {isAr ? 'سكر مستبعد سنوياً' : 'Sugar Cut / Year'}
                </div>
              </div>

              <div className="ss-stat-box-light">
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#059669' }}>
                  {yearlyCaloriesSaved.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {isAr
                    ? `سعرات سنوية (~${yearlyFatLossKg} كجم دهون)`
                    : `Yearly Calories (~${yearlyFatLossKg}kg fat)`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

