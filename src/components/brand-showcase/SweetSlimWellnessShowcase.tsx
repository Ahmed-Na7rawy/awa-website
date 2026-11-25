import React, { useState } from 'react';
import { CheckCircle2, Activity, Coffee, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './BrandShowcase.css';

interface SweetSlimPillar {
  id: string;
  tabLabel: string;
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
  nutritionStrip: { label: string; value: string }[];
  floatingGraphics: { emoji: string; size: number; top: string; left: string; delay: number }[];
}

const SWEET_SLIM_PILLARS_EN: SweetSlimPillar[] = [
  {
    id: 'sachets',
    tabLabel: 'Sweeteners',
    title: 'Zero-Calorie Tabletop Sweeteners',
    badge: 'Sugar Line',
    tagline: 'Made from corn and sucralose (plus 100% pure Stevia options) to deliver the clean taste of regular sugar.',
    leadImage: '/artwork/sweet-and-slim/3d/classic-100-box.webp',
    companionImage: '/artwork/sweet-and-slim/3d/extra-50-box.webp',
    color: '#10B981',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #ECFDF5 0%, #D1FAE5 40%, #F8FAFC 80%)',
    textColor: '#047857',
    benefits: [
      'Tastes just like natural cane sugar with zero bitter aftertaste',
      'Available in 25, 50, 100, 200 & 400 sachets plus 250g pouches',
      'Classic, Extra Sweet (1 sachet = 4 spoons) & Pure Stevia lines',
      '100% Aspartame-free, diabetic safe, and keto friendly',
    ],
    keySpec: '0 kcal',
    keySpecLabel: 'Zero Calorie • Sugar Free',
    nutritionStrip: [
      { label: 'Energy', value: '0 Calories' },
      { label: 'Added Sugar', value: '0.0g' },
      { label: 'Aspartame', value: '100% Free' },
      { label: 'Dietary Suitability', value: 'Diabetic & Keto Safe' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'mints',
    tabLabel: 'Pocket Mints',
    title: 'Sugar-Free Pocket Mints (40 Pcs)',
    badge: 'Candy Line',
    tagline: 'Refreshing sugar-free candy tins with zero calories, tooth-friendly formula, and long-lasting freshness.',
    leadImage: '/artwork/sweet-and-slim/3d/mints-spearmint-tin.webp',
    companionImage: '/artwork/sweet-and-slim/3d/mints-peach-tin.webp',
    color: '#06B6D4',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #CFFAFE 0%, #A5F3FC 40%, #F8FAFC 80%)',
    textColor: '#0E7490',
    benefits: [
      '5 refreshing flavors: Spearmint, Strawberry, Peach, Orange & Cinnamon',
      'Convenient 32g pocket tin containing 40 pieces',
      'Tooth-friendly, zero sugar, and zero calories',
      'Suitable for people with diabetes with no aftertaste',
    ],
    keySpec: '40 Pcs',
    keySpecLabel: '32g Pocket Tin • Zero Calories',
    nutritionStrip: [
      { label: 'Energy', value: '0 Calories' },
      { label: 'Pack Format', value: '40 Pcs / 32g Tin' },
      { label: 'Dental Care', value: 'Tooth-Friendly' },
      { label: 'Added Sugar', value: '0.0g (Diabetic Safe)' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'liquid',
    tabLabel: 'Syrup Lite',
    title: 'Syrup Lite (300 ml Bottle)',
    badge: 'Dessert Syrup',
    tagline: 'Low-calorie, sugar-free syrup specially crafted for preparing traditional Middle Eastern desserts.',
    leadImage: '/artwork/sweet-and-slim/3d/lite-syrup-bottle.webp',
    color: '#3B82F6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #DBEAFE 0%, #BFDBFE 40%, #F8FAFC 80%)',
    textColor: '#1D4ED8',
    benefits: [
      'Specially formulated for Kunafa, Basbousa & Oriental desserts',
      'Ready to use straight from the 300 ml bottle',
      'Low-calorie and sugar-free alternative to heavy sugar syrup',
      '12-month shelf life with consistent authentic texture',
    ],
    keySpec: '300 ml',
    keySpecLabel: 'Low-Calorie • Ready to Use',
    nutritionStrip: [
      { label: 'Net Volume', value: '300 ml Bottle' },
      { label: 'Formulation', value: 'Low Calorie & Sugar-Free' },
      { label: 'Culinary Use', value: 'Middle Eastern Desserts' },
      { label: 'Shelf Life', value: '12 Months' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'hotdrinks',
    tabLabel: 'Hot Beverages',
    title: 'Sugar-Free Hot Chocolate & 3in1 Coffee',
    badge: 'Hot Beverages',
    tagline: 'Trans-fat free and hydrogenated-oil free hot cocoa & instant coffee made with coconut oil and skimmed milk.',
    leadImage: '/artwork/sweet-and-slim/3d/hot-chocolate-box.webp',
    companionImage: '/artwork/sweet-and-slim/3d/3in1-extra-box.webp',
    color: '#8B5CF6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #EDE9FE 0%, #DDD6FE 40%, #F8FAFC 80%)',
    textColor: '#6D28D9',
    benefits: [
      '100% free from trans fats and hydrogenated oils',
      'Healthy creamer alternative made with coconut oil & skimmed milk',
      'Hot Chocolate (Classic & Hazelnut, 78 kcal) in 25g sachets',
      '3in1 Instant Coffee (Classic & Extra, 57 kcal) in 15g sachets',
    ],
    keySpec: '57–78 kcal',
    keySpecLabel: 'Zero Added Sugar • No Hydrogenated Oils',
    nutritionStrip: [
      { label: 'Calories', value: '57 kcal (Coffee) / 78 kcal (Cocoa)' },
      { label: 'Hydrogenated Oils', value: '100% Free' },
      { label: 'Creamer Base', value: 'Coconut Oil & Skim Milk' },
      { label: 'Added Sugar', value: 'Sugar-Free' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'colddrinks',
    tabLabel: 'Cold Drinks',
    title: 'Cold Drinks & Functional Smoothies',
    badge: 'Cold Beverages',
    tagline: 'Refreshing 20g smoothie sachets sweetened exclusively with Sweet & Slim Stevia and fortified with functional wellness actives.',
    leadImage: '/artwork/sweet-and-slim/3d/smoothie-pina-colada-box.webp',
    companionImage: '/artwork/sweet-and-slim/3d/smoothie-mixed-berry-box.webp',
    color: '#0EA5E9',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #E0F2FE 0%, #BAE6FD 40%, #F8FAFC 80%)',
    textColor: '#0369A1',
    benefits: [
      'Piña Colada Smoothie fortified with 5g Prebiotic Inulin for gut health',
      'Mixed Berries Smoothie with 125mg Hyaluronic Acid & 200mg Vitamin C',
      'Sweetened with Sweet & Slim Stevia — sugar-free & keto friendly',
      'Convenient 20g single-serve sachets for instant cold preparation',
    ],
    keySpec: 'Stevia',
    keySpecLabel: 'Fortified with Inulin, Vitamin C & Hyaluronic Acid',
    nutritionStrip: [
      { label: 'Sweetener', value: 'Sweet & Slim Stevia' },
      { label: 'Piña Colada Active', value: '5g Prebiotic Inulin' },
      { label: 'Mixed Berries Actives', value: '125mg Hyaluronic + 200mg Vit C' },
      { label: 'Dietary Profile', value: 'Sugar-Free & Keto Friendly' },
    ],
    floatingGraphics: [],
  },
];

const SWEET_SLIM_PILLARS_AR: SweetSlimPillar[] = [
  {
    id: 'sachets',
    tabLabel: 'المحليات',
    title: 'محليات المائدة الخالية من السعرات',
    badge: 'خط المحليات',
    tagline: 'مصنوع من الذرة والسكرالوز (مع خيارات ستيفيا طبيعية 100%) ليمنحك مذاق السكر العادي بدون سعرات.',
    leadImage: '/artwork/sweet-and-slim/3d/classic-100-box.webp',
    companionImage: '/artwork/sweet-and-slim/3d/extra-50-box.webp',
    color: '#10B981',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #ECFDF5 0%, #D1FAE5 40%, #F8FAFC 80%)',
    textColor: '#047857',
    benefits: [
      'مذاق مطابق للسكر الطبيعي بدون أي مرارة أو طعم غير مرغوب',
      'متوفر بعبوات 25، 50، 100، 200، و400 ظرف وأكياس 250 جم',
      'خيارات كلاسيك، إكسترا سويت (الظرف = 4 ملاعق)، وستيفيا نقي',
      'خالي تماماً من الأسبارتام ومناسب لمرضى السكري والكيتو',
    ],
    keySpec: '0 سعرة',
    keySpecLabel: 'صفر سعرات • خالي من السكر',
    nutritionStrip: [
      { label: 'السعرات الحرارية', value: '0 سعرة حرارية' },
      { label: 'السكر المضاف', value: '0.0 جم' },
      { label: 'الأسبارتام', value: 'خالي 100%' },
      { label: 'ملاءمة الاستخدام', value: 'مناسب للسكري والكيتو' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'mints',
    tabLabel: 'حلوى النعناع',
    title: 'حلوى النعناع الخالية من السكر (40 قطعة)',
    badge: 'خط الحلوى',
    tagline: 'حلوى نعناع منعشة خالية من السكر والسعرات، صديقة للأسنان وتمنحك انتعاشاً يدوم طويلاً.',
    leadImage: '/artwork/sweet-and-slim/3d/mints-spearmint-tin.webp',
    companionImage: '/artwork/sweet-and-slim/3d/mints-peach-tin.webp',
    color: '#06B6D4',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #CFFAFE 0%, #A5F3FC 40%, #F8FAFC 80%)',
    textColor: '#0E7490',
    benefits: [
      '5 نكهات منعشة: النعناع، الفراولة، الخوخ، البرتقال، والقرفة',
      'علبة جيب أنيقة (32 جم) تحتوي على 40 قطعة',
      'صديقة للأسنان وخالية تماماً من السكر والسعرات الحرارية',
      'مناسبة لمرضى السكري بدون أي طعم متبقي غير مستحب',
    ],
    keySpec: '40 قطعة',
    keySpecLabel: 'عبوة جيب 32 جم • صفر سعرات',
    nutritionStrip: [
      { label: 'السعرات الحرارية', value: '0 سعرة حرارية' },
      { label: 'حجم العبوة', value: '40 قطعة / 32 جم' },
      { label: 'صحة الأسنان', value: 'صديق للأسنان' },
      { label: 'السكر المضاف', value: '0.0 جم (مناسب للسكري)' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'liquid',
    tabLabel: 'سيرب لايت',
    title: 'سيرب لايت (عبوة 300 مل)',
    badge: 'شراب الحلويات',
    tagline: 'شراب منخفض السعرات الحرارية وخالي من السكر، مخصص لتحضير الحلويات الشرقية وجاهز للاستخدام.',
    leadImage: '/artwork/sweet-and-slim/3d/lite-syrup-bottle.webp',
    color: '#3B82F6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #DBEAFE 0%, #BFDBFE 40%, #F8FAFC 80%)',
    textColor: '#1D4ED8',
    benefits: [
      'مخصص لتحضير الكنافة والبسبوسة والقطايف والحلويات الشرقية',
      'جاهز للاستخدام مباشرة من العبوة (300 مل)',
      'بديل منخفض السعرات وخالي من السكر للشربات التقليدي',
      'صلاحية 12 شهراً مع قوام ومذاق أصيل متوازن',
    ],
    keySpec: '300 مل',
    keySpecLabel: 'منخفض السعرات • جاهز للاستخدام',
    nutritionStrip: [
      { label: 'الحجم الصافي', value: 'عبوة 300 مل' },
      { label: 'التركيبة', value: 'منخفض السعرات وخالي من السكر' },
      { label: 'الاستخدام', value: 'الحلويات الشرقية' },
      { label: 'مدة الصلاحية', value: '12 شهراً' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'hotdrinks',
    tabLabel: 'المشروبات الساخنة',
    title: 'هوت شوكليت وقهوة 3في1 بدون سكر',
    badge: 'المشروبات الساخنة',
    tagline: 'مشروبات ساخنة خالية من الزيوت المهدرجة والدهون المتحولة، ببديل كريمر صحي من زيت جوز الهند والحليب خالي الدسم.',
    leadImage: '/artwork/sweet-and-slim/3d/hot-chocolate-box.webp',
    companionImage: '/artwork/sweet-and-slim/3d/3in1-extra-box.webp',
    color: '#8B5CF6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #EDE9FE 0%, #DDD6FE 40%, #F8FAFC 80%)',
    textColor: '#6D28D9',
    benefits: [
      'خالي 100% من الزيوت المهدرجة والدهون المتحولة',
      'بديل كريمر صحي مكون من زيت جوز الهند وحليب خالي الدسم',
      'هوت شوكليت (كلاسيك وبندق — 78 سعرة حرارية) أظرف 25 جم',
      'قهوة 3في1 سريعة التحضير (كلاسيك وإكسترا — 57 سعرة حرارية) أظرف 15 جم',
    ],
    keySpec: '57–78 سعرة',
    keySpecLabel: 'خالي من السكر والزيوت المهدرجة',
    nutritionStrip: [
      { label: 'السعرات الحرارية', value: '57 سعرة (قهوة) / 78 (شوكليت)' },
      { label: 'الزيوت المهدرجة', value: 'خالي 100%' },
      { label: 'بديل الكريمر', value: 'زيت جوز الهند وحليب خالي الدسم' },
      { label: 'السكر المضاف', value: 'خالي من السكر' },
    ],
    floatingGraphics: [],
  },
  {
    id: 'colddrinks',
    tabLabel: 'المشروبات الباردة',
    title: 'المشروبات الباردة والسموذي الوظيفي',
    badge: 'المشروبات الباردة',
    tagline: 'أظرف سموذي منعشة (20 جم) محلاة حصرياً بسكر ستيفيا Sweet & Slim ومدعمة بمكونات وظيفية للهضم ونضارة البشرة.',
    leadImage: '/artwork/sweet-and-slim/3d/smoothie-pina-colada-box.webp',
    companionImage: '/artwork/sweet-and-slim/3d/smoothie-mixed-berry-box.webp',
    color: '#0EA5E9',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #E0F2FE 0%, #BAE6FD 40%, #F8FAFC 80%)',
    textColor: '#0369A1',
    benefits: [
      'سموذي بيناكولادا مدعم بـ 5 جم إينولين بريبايوتك لصحة الجهاز الهضمي والأمعاء',
      'سموذي ميكس بيريز مدعم بـ 125 مجم هيالورونيك أسيد و200 مجم فيتامين C للنضارة',
      'محلى بسكر ستيفيا Sweet & Slim — خالي من السكر ومناسب للكيتو',
      'أظرف عملية 20 جم سريعة التحضير بالماء البارد أو الثلج',
    ],
    keySpec: 'ستيفيا',
    keySpecLabel: 'مدعم بالإينولين وفيتامين C والهيالورونيك',
    nutritionStrip: [
      { label: 'المحلي المستخدم', value: 'ستيفيا Sweet & Slim' },
      { label: 'بيناكولادا', value: '5 جم إينولين بريبايوتك' },
      { label: 'ميكس بيريز', value: '125 مجم هيالورونيك + 200 مجم فيتامين C' },
      { label: 'ملاءمة الاستخدام', value: 'خالي من السكر ومناسب للكيتو' },
    ],
    floatingGraphics: [],
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

  const nutritionalHighlights = activePillar.nutritionStrip;

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
                  <span>{p.tabLabel}</span>
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

