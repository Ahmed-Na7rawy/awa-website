import React, { useState, useEffect } from 'react';
import { getFmcgBrandData, FmcgBrandData } from '../data/fmcgBrandsData';
import { useLanguage } from '../context/LanguageContext';
import { BrandNavBar } from './brand-showcase/BrandNavBar';
import { SweetSlimWellnessShowcase } from './brand-showcase/SweetSlimWellnessShowcase';
import { BrandEditorialSpotlight, EditorialSpotlightTab } from './brand-showcase/BrandEditorialSpotlight';
import { SkuGrid3D } from './brand-showcase/SkuGrid3D';
import { BrandStorySplit } from './brand-showcase/BrandStorySplit';
import { BrandFaqAndProof } from './brand-showcase/BrandFaqAndProof';
import { ShieldCheck, ArrowRight, ShoppingBag } from 'lucide-react';
import './brand-showcase/BrandShowcase.css';

interface AwaBrandShowcaseProps {
  initialBrandId?: string;
  onOpenQuote: () => void;
}

const YALLA_TABS_EN: EditorialSpotlightTab[] = [
  {
    id: 'frappit',
    tabLabel: 'Frapp it',
    title: 'Yalla Frapp it — Blended Iced Frappes',
    badge: '11 Café Flavors',
    tagline: 'Creamy café-quality frappé mixes engineered to blend effortlessly with ice for a smooth, refreshing beverage.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-frappit-caramel-box.png',
    dotColor: '#0284C7',
    benefits: [
      '11 flavors including Caramel, Mocha, White Mocha, Pistachio & Spanish Latte',
      'Available with Sugar-Free Caramel and Sugar-Free Coffee options',
      'Blends smoothly with ice in seconds with rich café microfoam',
      '10 × 35g single-serve sachets per retail box (18 months shelf life)',
    ],
    keySpec: '11 SKUs',
    keySpecLabel: 'Box of 10 Sachets (35g each)',
    nutritionStrip: [
      { label: 'Lineup', value: '11 Verified Flavors' },
      { label: 'Pack Format', value: 'Box of 10 Sachets' },
      { label: 'Sachet Weight', value: '35 g' },
      { label: 'Preparation', value: 'Blends Smoothly with Ice' },
    ],
  },
  {
    id: 'smoozy',
    tabLabel: 'Smoozy',
    title: 'Yalla Smoozy — Fruit Smoothie Mixes',
    badge: '4 Refreshing Flavors',
    tagline: 'Vibrant sweet-and-tangy fruit smoothie mixes that blend effortlessly into smooth, icy drinks.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-smoozy-mixed-berries-box.png',
    dotColor: '#F59E0B',
    benefits: [
      '4 fruit flavors: Mixed Berries, Mojito, Piña Colada & Pink Lemonade',
      'Bursting with bright, tangy refreshment for hot days',
      'Effortless icy smoothie texture in blender or shaker',
      '10 × 35g single-serve sachets per box',
    ],
    keySpec: '4 SKUs',
    keySpecLabel: 'Box of 10 Sachets (35g each)',
    nutritionStrip: [
      { label: 'Flavors', value: 'Berries, Mojito, Piña Colada, Pink Lemonade' },
      { label: 'Pack Format', value: 'Box of 10 Sachets' },
      { label: 'Sachet Weight', value: '35 g' },
      { label: 'Texture', value: 'Smooth Icy Refreshment' },
    ],
  },
  {
    id: 'koffi',
    tabLabel: 'Yalla Koffi',
    title: 'Yalla Koffi — Instant Café Coffees',
    badge: '4 Coffee Blends',
    tagline: 'Rich café-style instant coffees crafted for effortless everyday enjoyment at home or the office.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-koffi-caffe-latte-box.png',
    dotColor: '#8B5CF6',
    benefits: [
      '4 rich blends: Caffè Latte, Caramel, Hazelnut & Mocha',
      'Smooth, creamy coffee taste ready in seconds with hot water',
      'Consistent café aroma and balanced sweetness in every cup',
      '10 × 25g single-serve sachets per box',
    ],
    keySpec: '4 SKUs',
    keySpecLabel: 'Box of 10 Sachets (25g each)',
    nutritionStrip: [
      { label: 'Blends', value: 'Latte, Caramel, Hazelnut, Mocha' },
      { label: 'Pack Format', value: 'Box of 10 Sachets' },
      { label: 'Sachet Weight', value: '25 g' },
      { label: 'Preparation', value: 'Instant Hot Water Prep' },
    ],
  },
  {
    id: 'choco',
    tabLabel: 'Yalla Choco',
    title: 'Yalla Choco — Italian Hot Chocolate',
    badge: '2 Indulgent Flavors',
    tagline: 'Thick, velvety Italian-style barista hot chocolate crafted with premium Dutch cocoa.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-choco-classic-box.png',
    dotColor: '#D97706',
    benefits: [
      '2 rich recipes: Classic Italian Hot Chocolate & Hazelnut Hot Chocolate',
      'Crafted with premium Dutch cocoa for deep chocolate flavor',
      'Thick, velvety European drinking chocolate texture',
      '10 × 35g single-serve sachets per box',
    ],
    keySpec: '2 SKUs',
    keySpecLabel: 'Box of 10 Sachets (35g each)',
    nutritionStrip: [
      { label: 'Recipes', value: 'Classic & Hazelnut Italian' },
      { label: 'Cocoa', value: 'Premium Dutch Cocoa' },
      { label: 'Pack Format', value: 'Box of 10 Sachets (35g)' },
      { label: 'Style', value: 'Thick Barista Texture' },
    ],
  },
];

const YALLA_TABS_AR: EditorialSpotlightTab[] = [
  {
    id: 'frappit',
    tabLabel: 'فراب إت',
    title: 'يلا فراب إت — مشروبات الفراب المثلجة',
    badge: '11 نكهة كافيه',
    tagline: 'خلطات فرابيه كريمية بجودة الكافيه تمتزج بسهولة مع الثلج لتمنحك مشروباً مثلجاً ناعماً ومنعشاً.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-frappit-caramel-box.png',
    dotColor: '#0284C7',
    benefits: [
      '11 نكهة تشمل الكراميل، الموكا، الوايت موكا، الفستق، والسبانيش لاتيه',
      'تتوفر خيارات خالية من السكر (كراميل دايت وقهوة دايت)',
      'يمتزج بسلاسة مع الثلج في ثوانٍ مع رغوة غنية',
      'عبوة 10 أظرف (35 جم لكل ظرف) بصلاحية 18 شهراً',
    ],
    keySpec: '11 منتج',
    keySpecLabel: 'عبوة 10 أظرف (35 جم)',
    nutritionStrip: [
      { label: 'التشكيلة', value: '11 نكهة معتمدة' },
      { label: 'حجم العبوة', value: '10 أظرف' },
      { label: 'وزن الظرف', value: '35 جم' },
      { label: 'التحضير', value: 'يمتزج مع الثلج بسهولة' },
    ],
  },
  {
    id: 'smoozy',
    tabLabel: 'سموزي',
    title: 'يلا سموزي — خلطات الفواكه المنعشة',
    badge: '4 نكهات فواكه',
    tagline: 'خلطات سموزي فواكه منعشة ومتوازنة المذاق تتحول بسهولة إلى مشروبات مثلجة غنية.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-smoozy-mixed-berries-box.png',
    dotColor: '#F59E0B',
    benefits: [
      '4 نكهات: ميكس بيريز، موهيتو، بينا كولادا، وبينك ليمونيد',
      'انتعاش فوري بنكهات الفواكه الطبيعية المتوازنة',
      'قوام سموزي مثلج مثالي في الخلاط أو الشيكر',
      'عبوة 10 أظرف (35 جم لكل ظرف)',
    ],
    keySpec: '4 منتجات',
    keySpecLabel: 'عبوة 10 أظرف (35 جم)',
    nutritionStrip: [
      { label: 'النكهات', value: 'توت، موهيتو، بينا كولادا، ليمونيد' },
      { label: 'حجم العبوة', value: '10 أظرف' },
      { label: 'وزن الظرف', value: '35 جم' },
      { label: 'القوام', value: 'سموزي مثلج ناعم' },
    ],
  },
  {
    id: 'koffi',
    tabLabel: 'يلا كوفي',
    title: 'يلا كوفي — قهوة الكافيه الفورية',
    badge: '4 خلطات قهوة',
    tagline: 'قهوة سريعة التحضير بمذاق الكافيه الغني، مصممة لتمنحك استمتاعاً يومياً سهلاً وسريعاً.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-koffi-caffe-latte-box.png',
    dotColor: '#8B5CF6',
    benefits: [
      '4 خلطات غنية: كافيه لاتيه، كراميل، بندق، وموكا',
      'مذاق قهوة كريمي جاهز في ثوانٍ بالماء الساخن',
      'رائحة غنية وتوازن مثالي في كل كوب',
      'عبوة 10 أظرف (25 جم لكل ظرف)',
    ],
    keySpec: '4 منتجات',
    keySpecLabel: 'عبوة 10 أظرف (25 جم)',
    nutritionStrip: [
      { label: 'النكهات', value: 'لاتيه، كراميل، بندق، موكا' },
      { label: 'حجم العبوة', value: '10 أظرف' },
      { label: 'وزن الظرف', value: '25 جم' },
      { label: 'التحضير', value: 'تحضير فوري بالماء الساخن' },
    ],
  },
  {
    id: 'choco',
    tabLabel: 'يلا شوكو',
    title: 'يلا شوكو — هوت شوكليت إيطالي',
    badge: 'نكهتان فاخرتان',
    tagline: 'هوت شوكليت إيطالي كثيف ومخملي محضر من أجود أنواع الكاكاو الهولندي الفاخر.',
    leadImage: '/artwork/yalla-drinks/3d/yalla-choco-classic-box.png',
    dotColor: '#D97706',
    benefits: [
      'وصفتان غنيتان: كلاسيك إيطالي وهوت شوكليت بالبندق',
      'محضر من الكاكاو الهولندي الفاخر لنكهة عميقة',
      'قوام شوكولاتة ساخنة كثيف ومخملي كالكافيهات',
      'عبوة 10 أظرف (35 جم لكل ظرف)',
    ],
    keySpec: 'منتجان',
    keySpecLabel: 'عبوة 10 أظرف (35 جم)',
    nutritionStrip: [
      { label: 'الأنواع', value: 'كلاسيك وبالبندق الإيطالي' },
      { label: 'الكاكاو', value: 'كاكاو هولندي فاخر' },
      { label: 'حجم العبوة', value: '10 أظرف (35 جم)' },
      { label: 'القوام', value: 'قوام باريستا كثيف' },
    ],
  },
];

const SQUEASY_TABS_EN: EditorialSpotlightTab[] = [
  {
    id: 'garlic',
    tabLabel: 'Garlic Pastes & Jars',
    title: 'SquEasy Minced Garlic & Garlic Paste',
    badge: '3 Verified Formats',
    tagline: 'Made from carefully selected garlic cloves to deliver authentic fresh taste and aroma with zero peeling or chopping.',
    leadImage: '/artwork/squeasy/3d/squeasy-garlic-paste-250g.png',
    dotColor: '#EA580C',
    benefits: [
      'Available in 250g Glass Jar (Minced), 250g Pouch (Paste) & 50 Sachets Pack',
      'Ready to use directly for marinades, sauces, soups & stir-fries',
      'Consistent fresh garlic flavor with zero kitchen prep mess',
      '12-month shelf life for everyday home & restaurant cooking',
    ],
    keySpec: '250 g',
    keySpecLabel: 'Jar, Pouch & 50-Sachet Formats • 55 EGP',
    nutritionStrip: [
      { label: 'Formats', value: '250g Jar, 250g Pouch, 50 Sachets' },
      { label: 'Official Price', value: '55 EGP' },
      { label: 'Shelf Life', value: '12 Months' },
      { label: 'Preparation', value: 'Ready to Use (Zero Peeling)' },
    ],
  },
  {
    id: 'harissa',
    tabLabel: 'Artisan Harissa',
    title: 'SquEasy Harissa Hot Sauce 200 g',
    badge: 'Spicy Culinary Sauce',
    tagline: 'Crafted from premium chili peppers and a flavorful blend of spices for a bold, aromatic spicy kick.',
    leadImage: '/artwork/squeasy/3d/squeasy-harissa-pouch-200g.png',
    dotColor: '#DC2626',
    benefits: [
      'Bold spicy flavor crafted from selected red chili peppers & spices',
      'Convenient 200g squeezable pouch for clean, effortless dispensing',
      'Ideal for grilled meats, shawarma, burgers, pasta, pizza & dips',
      'Ready to use with authentic Mediterranean heat',
    ],
    keySpec: '200 g',
    keySpecLabel: 'Squeeze Pouch • 65 EGP',
    nutritionStrip: [
      { label: 'Pack Format', value: '200g Squeeze Pouch' },
      { label: 'Official Price', value: '65 EGP' },
      { label: 'Shelf Life', value: '12 Months' },
      { label: 'Culinary Use', value: 'Grills, Sandwiches & Dips' },
    ],
  },
];

const SQUEASY_TABS_AR: EditorialSpotlightTab[] = [
  {
    id: 'garlic',
    tabLabel: 'معجون وبرطمان الثوم',
    title: 'ثوم مفروم ومعجون ثوم SquEasy',
    badge: '3 عبوات معتمدة',
    tagline: 'مصنوع من فصوص ثوم مختارة بعناية ليمنحك الطعم والرائحة الأصيلة مباشرة دون عناء التقشير أو الفرم.',
    leadImage: '/artwork/squeasy/3d/squeasy-garlic-paste-250g.png',
    dotColor: '#EA580C',
    benefits: [
      'متوفر في برطمان ثوم مفروم 250 جم، باوتش معجون 250 جم، وعبوة 50 ساشيت',
      'جاهز للاستخدام مباشرة في التتبيلات والصلصات والشوربات والقلي السريع',
      'نكهة ثوم طازجة وثابتة توفر الوقت في المطبخ',
      'صلاحية 12 شهراً مناسبة للاستخدام المنزلي والمطاعم',
    ],
    keySpec: '250 جم',
    keySpecLabel: 'برطمان، باوتش، و50 ساشيت • 55 ج.م',
    nutritionStrip: [
      { label: 'العبوات المتاحة', value: 'برطمان 250 جم، باوتش، 50 ساشيت' },
      { label: 'السعر الرسمي', value: '55 ج.م' },
      { label: 'مدة الصلاحية', value: '12 شهراً' },
      { label: 'الاستخدام', value: 'جاهز بدون تقشير أو فرم' },
    ],
  },
  {
    id: 'harissa',
    tabLabel: 'الهريسة الحارة',
    title: 'صلصة هريسة حارة SquEasy 200 جم',
    badge: 'صلصة طهي حارة',
    tagline: 'مصنوعة من أجود أنواع الفلفل الحار ومزيج متوازن من التوابل لتضيف طعماً غنياً وحاراً لأطباقك.',
    leadImage: '/artwork/squeasy/3d/squeasy-harissa-pouch-200g.png',
    dotColor: '#DC2626',
    benefits: [
      'نكهة حارة قوية من أجود أنواع الفلفل الأحمر والتوابل',
      'عبوة باوتش 200 جم سهلة العصر والاستخدام المباشر',
      'مثالية للمشويات والشاورما والبرجر والمكرونة والبيتزا والتغميس',
      'جاهزة للاستخدام بنكهة متوسطية أصيلة',
    ],
    keySpec: '200 جم',
    keySpecLabel: 'عبوة سهلة العصر • 65 ج.م',
    nutritionStrip: [
      { label: 'حجم العبوة', value: '200 جم باوتش' },
      { label: 'السعر الرسمي', value: '65 ج.م' },
      { label: 'مدة الصلاحية', value: '12 شهراً' },
      { label: 'الاستخدام', value: 'المشويات والسندويتشات والتغميس' },
    ],
  },
];

export const AwaBrandShowcase: React.FC<AwaBrandShowcaseProps> = ({
  initialBrandId,
  onOpenQuote,
}) => {
  const { language } = useLanguage();

  const getNormalizedBrandId = (id?: string): 'squeasy' | 'sweet-and-slim' | 'yalla-drinks' => {
    if (id === 'squeasy') return 'squeasy';
    if (id === 'sweet-and-slim') return 'sweet-and-slim';
    if (id === 'yalla-drinks' || id === 'yalla') return 'yalla-drinks';
    return 'squeasy';
  };

  const [activeBrandId, setActiveBrandId] = useState<'squeasy' | 'sweet-and-slim' | 'yalla-drinks'>(
    getNormalizedBrandId(initialBrandId)
  );

  useEffect(() => {
    if (initialBrandId) {
      setActiveBrandId(getNormalizedBrandId(initialBrandId));
    }
  }, [initialBrandId]);

  const currentBrand: FmcgBrandData = getFmcgBrandData(activeBrandId, language);

  return (
    <div className="fmcg-root">
      {/* 1. Global Glassmorphic Brand Nav */}
      <BrandNavBar
        currentBrand={currentBrand}
        activeBrandId={activeBrandId}
        onSelectBrand={(id) => {
          setActiveBrandId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuote={onOpenQuote}
      />

      {/* 2. Unified Clean Editorial Product Spotlight (Brand-Specific) */}
      {activeBrandId === 'sweet-and-slim' && (
        <SweetSlimWellnessShowcase onOpenQuote={onOpenQuote} />
      )}

      {activeBrandId === 'yalla-drinks' && (
        <BrandEditorialSpotlight
          headlineEn="CAFÉ-STYLE DRINKS. READY IN SECONDS."
          headlineAr="مشروبات الكافيه. جاهزة في ثوانٍ."
          subtitleEn="From ice-blended Frapp it and frosty fruit Smoozy to Yalla Koffi and thick Italian Yalla Choco, explore our complete café beverage system."
          subtitleAr="من مشروبات فراب إت المثلجة وسموزي الفواكه إلى يلا كوفي والهوت شوكليت الإيطالي يلا شوكو، استكشف منظومة مشروبات الكافيه الكاملة."
          tabsEn={YALLA_TABS_EN}
          tabsAr={YALLA_TABS_AR}
          theme={{
            sectionBg: '#F0F9FF',
            stageBg: '#E0F2FE',
            borderColor: '#BAE6FD',
            accent: '#0284C7',
            accentDark: '#0369A1',
          }}
          onOpenQuote={onOpenQuote}
        />
      )}

      {activeBrandId === 'squeasy' && (
        <BrandEditorialSpotlight
          headlineEn="PURE GARLIC & HARISSA. ZERO KITCHEN MESS."
          headlineAr="ثوم نقي وهريسة حارة. بدون أي عناء."
          subtitleEn="Hand-selected garlic cloves and fiery chili peppers prepared for instant culinary convenience across home kitchens and commercial restaurants."
          subtitleAr="فصوص ثوم مختارة بعناية وفلفل حار محضر للاستخدام الفوري في المطابخ المنزلية والمطاعم الاحترافية."
          tabsEn={SQUEASY_TABS_EN}
          tabsAr={SQUEASY_TABS_AR}
          theme={{
            sectionBg: '#FFF7ED',
            stageBg: '#FFEDD5',
            borderColor: '#FED7AA',
            accent: '#EA580C',
            accentDark: '#C2410C',
          }}
          onOpenQuote={onOpenQuote}
        />
      )}

      {/* 3. 3D Parallax & Glare SKU Grid */}
      <SkuGrid3D
        key={activeBrandId + '-skus-' + language}
        brand={currentBrand}
        onOpenQuote={onOpenQuote}
      />

      {/* 4. Brand Heritage & Manufacturing Science */}
      <BrandStorySplit
        key={activeBrandId + '-story-' + language}
        brand={currentBrand}
        onOpenQuote={onOpenQuote}
      />

      {/* 5. Social Proof, Retailer Stockists & Interactive FAQs */}
      <BrandFaqAndProof
        key={activeBrandId + '-proof-' + language}
        brand={currentBrand}
        onOpenQuote={onOpenQuote}
      />

      {/* 6. B2B Export & Wholesale Bottom Banner */}
      <div style={{ padding: '0 1.5rem 5.5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          padding: '2.5rem',
          borderRadius: '28px',
          background: '#FFFFFF',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#059669', marginBottom: '0.4rem' }}>
              <ShieldCheck size={15} />
              <span>{language === 'ar' ? 'تصنيع مجموعة AWA للصناعات الغذائية' : 'Manufactured by AWA Food Solutions'}</span>
            </div>
            <h4 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.3rem' }}>
              {language === 'ar' ? `هل تبحث عن توزيع تجاري أو تصدير لمنتجات ${currentBrand.brandName}؟` : `Ready to Stock or Export ${currentBrand.brandName}?`}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>
              {language === 'ar'
                ? 'اطلب قائمة أسعار الجملة، خطط التصدير، وعبوات التوريد للمطاعم والفنادق والسوبرماركت.'
                : 'Request wholesale pricing, export logistics, and foodservice supply packs from our factory.'}
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="fmcg-btn-primary"
            style={{ backgroundColor: currentBrand.theme.primary }}
          >
            <ShoppingBag size={17} />
            <span>{language === 'ar' ? 'تواصل مع فريق المبيعات' : 'Contact Sales Team'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
