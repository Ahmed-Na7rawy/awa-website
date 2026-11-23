import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  FlaskConical, 
  Warehouse, 
  CheckCircle2, 
  Filter,
  Sparkles,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets, principals } from '../data/v9Data';

export const PrincipalsPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const detailedPrincipals = [
    {
      id: 'siveele',
      name: 'Siveele',
      origin: isAr ? 'هولندا · أوروبا' : 'The Netherlands · Europe',
      flag: '🇳🇱',
      category: isAr ? 'تكنولوجيا المكونات ومضافات الألبان والمخبوزات' : 'Ingredient technology & dairy/bakery solutions',
      categoryKey: 'dairy-bakery',
      url: 'https://www.siveele.com/',
      logoKey: 'siveele',
      tagline: isAr ? 'أنظمة استحلاب وقوام متقدمة' : 'Advanced emulsification & structure systems',
      desc: isAr
        ? 'شريك تكنولوجي هولندي رائد يقدم مكونات غذائية متخصصة، وأنظمة استحلاب وقوام للأجبان المصنعة، ومنتجات المخابز والحلويات مع التزام صارم بمعايير الجودة الأوروبية.'
        : 'Leading Dutch technology partner supplying specialized functional ingredients, emulsification and texture systems for processed cheese, bakery and confectionery with stringent European quality adherence.',
      keyProducts: isAr 
        ? ['مستحلبات نباتية مخصصة', 'أنظمة تحسين قوام المخبوزات', 'مثبتات ألبان عالية الأداء'] 
        : ['Custom vegetable emulsifiers', 'Bakery texture enhancers', 'High-performance dairy stabilizers'],
      applications: isAr 
        ? ['الألبان والأجبان', 'المخبوزات والحلويات', 'الصلصات المستحلبة'] 
        : ['Dairy & Cheese', 'Bakery & Biscuits', 'Emulsified Sauces']
    },
    {
      id: 'jrs',
      name: 'JRS Silvateam',
      origin: isAr ? 'ألمانيا / إيطاليا · أوروبا' : 'Germany / Italy · Europe',
      flag: '🇩🇪 🇮🇹',
      category: isAr ? 'ألياف نباتية وأنظمة هيدروكولويد نظيفة (Clean Label)' : 'Plant-based functional fibers & hydrocolloids',
      categoryKey: 'hydrocolloids',
      url: 'https://jrs.silvateam.com/',
      logoKey: 'jrs',
      tagline: isAr ? 'ألياف الحمضيات، التارا صمغ، والبكتين الطبيعي' : 'Citrus fibers, tara gum & natural pectins',
      desc: isAr
        ? 'تحالف أوروبي عريق يجمع خبرات Rettenmaier الألمانية وSilvateam الإيطالية لتقديم ألياف الحمضيات الوظيفية، وصمغ التارا، والبكتين لحلول التسميك والربط النظيفة بدون إضافات كيميائية.'
        : 'European alliance combining German JRS Rettenmaier and Italian Silvateam expertise to deliver functional citrus fibers, tara gum, and premium pectins for clean-label thickening, fat replacement and moisture binding.',
      keyProducts: isAr 
        ? ['ألياف الحمضيات الوظيفية', 'صمغ التارا المعتمد', 'بكتين الحمضيات عالي الميثوكسيل'] 
        : ['Functional citrus fibers', 'Standardized Tara gum', 'High-methoxyl citrus pectin'],
      applications: isAr 
        ? ['اللحوم المصنعة', 'المربى والعصائر', 'الزبادي والحلويات'] 
        : ['Processed Meats', 'Jams & Beverages', 'Cultured Dairy & Desserts']
    },
    {
      id: 'aipu',
      name: 'AIPU Food',
      origin: isAr ? 'شنغهاي · الصين' : 'Shanghai · China',
      flag: '🇨🇳',
      category: isAr ? 'بروتينات نباتية متحللة (HVP)، ألوان كراميل، ومستخلصات نكهة' : 'Hydrolyzed vegetable proteins (HVP) & caramel colors',
      categoryKey: 'savory-colors',
      url: 'https://www.aipufood.com/en',
      logoKey: 'aipu',
      tagline: isAr ? 'قادة عالميون في ألوان الكراميل ومحسنات الطعم' : 'Global leaders in caramel colors & savory extracts',
      desc: isAr
        ? 'إحدى أكبر المجموعات العالمية المتخصصة في إنتاج ألوان الكراميل الطبيعية (Class I, II, III, IV)، وبروتينات الصويا المتحللة HVP المعززة لنكهة الأومامي، وخلاصات التوابل للمصنعات الغذائية.'
        : 'One of the world’s foremost producers of Class I–IV caramel colors, savory hydrolyzed vegetable proteins (HVP) for rich umami enhancement, and natural seasoning extracts for processed food formulations.',
      keyProducts: isAr 
        ? ['ألوان كراميل سائلة وبودرة (E150a–d)', 'بروتينات نباتية متحللة HVP', 'مسحوق صويا مخمر'] 
        : ['Liquid & powder caramel colors (E150a-d)', 'Hydrolyzed vegetable protein (HVP)', 'Fermented soy sauce powders'],
      applications: isAr 
        ? ['المشروبات والعصائر', 'الصلصات والشوربات', 'المقرمشات والسناكس'] 
        : ['Beverages & Soft Drinks', 'Sauces & Bouillons', 'Savory Snacks & Seasonings']
    },
    {
      id: 'skrobarny',
      name: 'Škrobárny Pelhřimov',
      origin: isAr ? 'بيلهريموف · جمهورية التشيك' : 'Pelhřimov · Czech Republic',
      flag: '🇨🇿',
      category: isAr ? 'نشويات البطاطس الطبيعية والمعدلة والنشويات الوظيفية' : 'Native & modified potato starches',
      categoryKey: 'starches',
      url: 'https://www.skrobarny.com/',
      logoKey: 'skrobarny',
      tagline: isAr ? 'نقاء تشيكي فائق لأنظمة الربط والتجلط' : 'Ultra-pure potato starches for gelling & binding',
      desc: isAr
        ? 'صرح صناعي أوروبي عريق متخصص في نشويات البطاطس عالية النقاء؛ تمنح لزوجة شفافة، وقدرة استثنائية على ربط الماء وتحمل درجات حرارة التعقيم والتجميد.'
        : 'Historic Central European manufacturer dedicated to ultra-pure potato starches, providing neutral taste, crystal-clear gel paste, superior water-binding capacity, and high freeze-thaw stability.',
      keyProducts: isAr 
        ? ['نشا بطاطس طبيعي فائق النقاء', 'نشويات بطاطس معدلة لربط الماء', 'نشويات مقاومة للتعقيم الحراري'] 
        : ['Superior native potato starch', 'Modified starches for cook-yield', 'Retort-stable texturizers'],
      applications: isAr 
        ? ['اللحوم والمصنعات', 'النودلز والوجبات الجاهزة', 'الأغذية الخالية من الجلوتين'] 
        : ['Meat & Cold Cuts', 'Noodles & Convenience Meals', 'Gluten-Free Formulations']
    },
    {
      id: 'madhusilica',
      name: 'Madhu Silica',
      origin: isAr ? 'غوجارات · الهند' : 'Gujarat · India',
      flag: '🇮🇳',
      category: isAr ? 'سيليكا مترسبة ومضادات تكتل للمساحيق (Micosil)' : 'Precipitated silica & anti-caking agents',
      categoryKey: 'flow-aids',
      url: 'https://www.madhusilica.com/',
      logoKey: 'madhusilica',
      tagline: isAr ? 'سيولة مثالية للمساحيق ومنع التكتل والامتصاص' : 'Free-flowing powder performance & anti-caking',
      desc: isAr
        ? 'أكبر مصنع للسيليكا المترسبة الغذائية في الهند والرابع عالمياً؛ توفر درجات Micosil قدرة امتصاص فائقة للرطوبة والدهون وتمنع تكتل المساحيق الغذائية الحساسة أثناء التخزين والنقل.'
        : 'India’s largest and world’s 4th largest manufacturer of precipitated food-grade silica. Micosil grades provide high moisture/oil absorption capacity and prevent caking in moisture-sensitive food powders.',
      keyProducts: isAr 
        ? ['Micosil 55P لمقاومة التكتل', 'سيليكا حاملة للنكهات السائلة', 'محسنات تدفق الملح والتوابل'] 
        : ['Micosil 55P anti-caking silica', 'High-absorption flavor carrier', 'Salt & spice free-flow additives'],
      applications: isAr 
        ? ['المشروبات البودرة', 'خلطات التوابل والبهارات', 'مساحيق الحليب والبدائل'] 
        : ['Powdered Beverages', 'Seasonings & Spices', 'Dairy Powders & Creamers']
    },
    {
      id: 'mokate',
      name: 'Mokate Ingredients',
      origin: isAr ? 'أوسترون · بولندا' : 'Ustroń · Poland',
      flag: '🇵🇱',
      category: isAr ? 'مبيضات غير لبنية، مساحيق رغوية، ودهون مجففة بالرش' : 'Non-dairy creamers & foaming agents',
      categoryKey: 'dairy-bakery',
      url: 'https://mokate.com/',
      logoKey: 'mokate',
      tagline: isAr ? 'رغوة الكابتشينو الفاخرة والمبيضات الفورية' : 'Premium beverage foamers & non-dairy creamers',
      desc: isAr
        ? 'عملاق الصناعات الغذائية في أوروبا الوسطى؛ متخصص في تصنيع مبيضات القهوة والشاي غير اللبنية (NDC)، وقواعد الرغوة للكابتشينو الفوري، ومساحيق الدهون النباتية المغلفة.'
        : 'Central European food ingredients leader specializing in spray-dried non-dairy creamers (NDC), micro-bubble foaming agents for instant cappuccino, and encapsulated vegetable fat powders.',
      keyProducts: isAr 
        ? ['مبيضات القهوة سريعة الذوبان', 'بودرة الرغوة للكابتشينو الفوري', 'مساحيق دهون نباتية للطهي'] 
        : ['Instant non-dairy creamers', 'Cappuccino foaming creamers', 'Spray-dried fat powders'],
      applications: isAr 
        ? ['خلطات القهوة 3 في 1', 'مشروبات الشوكولاتة والفرابي', 'قواعد الشوربات الجاهزة'] 
        : ['3-in-1 Coffee Blends', 'Hot Chocolate & Frappés', 'Instant Soup Bases']
    },
    {
      id: 'mayasan',
      name: 'Mayasan',
      origin: isAr ? 'إسطنبول · تركيا' : 'Istanbul · Türkiye',
      flag: '🇹🇷',
      category: isAr ? 'إنزيمات التجبن، منفحة ميكروبية، ومزارع حيوية للأجبان' : 'Cheese coagulants & microbial enzymes',
      categoryKey: 'dairy-bakery',
      url: 'https://www.mayasan.com/',
      logoKey: 'mayasan',
      tagline: isAr ? 'تكنولوجيا التخمير والتجبن الحيوي' : 'Biotechnology & fermentation for cheesemaking',
      desc: isAr
        ? 'شركة رائدة عالمياً في التكنولوجيا الحيوية للأجبان وتصنيع إنزيمات التجبن الميكروبي والفطري (Valiren)، والمخثرات الحلال النقية لصناعة الأجبان البيضاء والصلبة والمطبوخة.'
        : 'Global biotechnology innovator manufacturing microbial coagulants (Valiren), halal microbial rennet, and specialized dairy enzymes for industrial and artisanal cheese production.',
      keyProducts: isAr 
        ? ['منفحة ميكروبية Valiren حلال', 'إنزيمات إنضاج الأجبان', 'محافظ حيوية ومضادات فطرية'] 
        : ['Valiren microbial rennet', 'Cheese ripening enzymes', 'Natural bio-preservation systems'],
      applications: isAr 
        ? ['الأجبان البيضاء والفيتا', 'الأجبان الصفراء والموزاريلا', 'الأجبان المطبوخة والقابلة للدهن'] 
        : ['White Feta & Brined Cheeses', 'Yellow & Mozzarella Cheeses', 'Processed & Spreadable Cheese']
    },
    {
      id: 'goldenuts',
      name: 'Goldenuts',
      origin: isAr ? 'تركيا · دولي' : 'Türkiye · Global',
      flag: '🇹🇷',
      category: isAr ? 'معاجين المكسرات المحمصة، زبدة الفول السوداني والبندق' : 'Roasted nut pastes & specialty confectionery bases',
      categoryKey: 'confectionery',
      url: 'https://www.goldenuts.com/',
      logoKey: 'goldenuts',
      tagline: isAr ? 'معاجين بندق وفول سوداني نقية للصناعات الغذائية' : '100% pure nut pastes for chocolate & ice cream',
      desc: isAr
        ? 'مورد معتمد دولياً لأفخر معاجين البندق التركي المحمص، وزبدة الفول السوداني النقية، والمكسرات المصنعة كمدخلات رئيسية لمصانع الشوكولاتة، والآيس كريم، وكريمات البسكويت.'
        : 'Internationally accredited supplier of premium roasted Turkish hazelnut pastes, smooth peanut pastes, and customized nut ingredients for chocolate, gelato, and bakery filling manufacturers.',
      keyProducts: isAr 
        ? ['معجون بندق تركي طبيعي 100%', 'زبدة فول سوداني صناعية ناعمة', 'برالين وقواعد حشوات شوكولاتة'] 
        : ['100% Pure hazelnut paste', 'Industrial smooth peanut paste', 'Praline & chocolate fillings'],
      applications: isAr 
        ? ['الشوكولاتة وكريمات الفرد', 'الآيس كريم والجيلاتو', 'حشوات البسكويت والكرواسون'] 
        : ['Chocolates & Spreads', 'Ice Cream & Gelato', 'Bakery Fillings & Wafers']
    },
    {
      id: 'omtex',
      name: 'Om Tex Chem',
      origin: isAr ? 'مومباي · الهند' : 'Mumbai · India',
      flag: '🇮🇳',
      category: isAr ? 'مضافات غذائية ومركبات ضبط الحموضة وأملاح متخصصة' : 'Food additives & acidity regulators',
      categoryKey: 'starches',
      url: 'https://www.omtexchem.com/',
      logoKey: null,
      tagline: isAr ? 'كيماويات غذائية وأملاح متوافقة مع الدستور الغذائي' : 'Food-grade specialty salts & processing aids',
      desc: isAr
        ? 'شريك توريد متخصص في المركبات الوظيفية، وأملاح ضبط الحموضة، وحافظات الأغذية المعتمدة وفقاً للمواصفات القياسية الدولية (FCC / Codex Alimentarius).'
        : 'Specialized chemical and functional food additive supplier providing compliant acidity regulators, specialty mineral salts, and processing aids meeting FCC and international Codex standards.',
      keyProducts: isAr 
        ? ['سترات الصوديوم والبوتاسيوم', 'حمض الفوسفوريك الغذائي', 'مضادات أكسدة متخصصة'] 
        : ['Sodium & potassium citrates', 'Food-grade phosphoric acid', 'Specialized antioxidant blends'],
      applications: isAr 
        ? ['المشروبات الغازية والعصائر', 'اللحوم والألبان', 'الصناعات التحويلية'] 
        : ['Beverages & Soft Drinks', 'Meat & Dairy Processing', 'Industrial Food Manufacturing']
    }
  ];

  const categories = [
    { key: 'all', label: isAr ? 'كافة الشركاء الدوليين (9)' : 'All Principals (9)' },
    { key: 'dairy-bakery', label: isAr ? 'الألبان والمخبوزات والمبيضات' : 'Dairy, Bakery & Creamers' },
    { key: 'hydrocolloids', label: isAr ? 'الألياف والهيدروكولويد (Clean Label)' : 'Fibers & Hydrocolloids' },
    { key: 'savory-colors', label: isAr ? 'مستخلصات الأومامي وألوان الكراميل' : 'Savory HVP & Caramel Colors' },
    { key: 'starches', label: isAr ? 'النشويات والمضافات الوظيفية' : 'Starches & Functional Salts' },
    { key: 'flow-aids', label: isAr ? 'السيليكا ومضادات التكتل' : 'Silica & Anti-Caking' },
    { key: 'confectionery', label: isAr ? 'معاجين المكسرات والحلويات' : 'Nut Pastes & Confectionery' }
  ];

  const filteredPrincipals = selectedCategory === 'all' 
    ? detailedPrincipals 
    : detailedPrincipals.filter(p => p.categoryKey === selectedCategory);

  return (
    <>
      <SEO
        title={isAr ? 'شبكة التوكيلات العالمية • مجموعة AWA' : 'Global Principal Network • AWA Group'}
        description={
          isAr
            ? 'تتعاون مجموعة AWA مع كبرى شركات تصنيع المكونات التكنولوجية العالمية (هولندا، ألمانيا، إيطاليا، التشيك، بولندا، تركيا، الصين، الهند) لتقديم حلول غذائية متطورة.'
            : 'AWA Group partners with premier global ingredient technology principals across Europe and Asia to supply specialized food functional systems.'
        }
        path="/global/principals"
      />

      <div className="principals-page" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
        {/* HERO SECTION */}
        <section className="page-hero page-hero--visual">
          <div className="page-hero-media">
            <img 
              src={v9Assets.v8Assets['sourcing-port']} 
              alt="Global Principals Network" 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content">
            <div className="breadcrumb">
              <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <Link to="/global">{isAr ? 'الشبكة الدولية' : 'Global Network'}</Link>
              <span>›</span>
              <span>{isAr ? 'التوكيلات العالمية' : 'Global Principals'}</span>
            </div>
            <div className="kicker on-dark">
              {isAr ? 'مجموعة AWA / شبكة التوكيلات العالمية' : 'AWA GROUP / GLOBAL PRINCIPAL NETWORK'}
            </div>
            <h1>
              {isAr ? 'شراكات تقنية عالمية. ' : 'Global Technology Partners. '}
              <em className="italic">{isAr ? 'أداء محلي موثوق.' : 'Dependable Local Performance.'}</em>
            </h1>
            <p>
              {isAr
                ? 'تعمل مجموعة AWA كوكيل حصري وشريك تكنولوجي لكبرى الشركات المصنعة للمكونات الغذائية المتخصصة في أوروبا وآسيا، لربط المصانع المحلية بأحدث ابتكارات علوم الأغذية وسلاسل التوريد المعتمدة.'
                : 'AWA Group acts as an exclusive agent and technology partner for premier food ingredient manufacturers across Europe and Asia, bridging local processors with verified global food science and dependable supply.'}
            </p>
          </div>
        </section>

        {/* VALUE PILLARS STRIP */}
        <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                    {isAr ? 'شهادات اعتماد ورقابة NFSA' : 'Verified Compliance & NFSA'}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    {isAr ? 'إجراءات جمركية ورصد سلامة غذاء معتمد لجميع الخامات المستوردة.' : 'Full regulatory clearance, CoA documentation, and food safety validation.'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Warehouse size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                    {isAr ? 'مخزون استراتيجي محلي' : 'Local Strategic Warehousing'}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    {isAr ? 'مستودعات مكيفة ومبردة في برج العرب والإسكندرية تضمن أمان التوريد.' : 'Climate-controlled buffer stock in Borg El-Arab ensuring uninterrupted supply.'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FDF2F8', color: '#DB2777', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <FlaskConical size={22} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                    {isAr ? 'معامل تطبيقات R&D وتجارب تجريبية' : 'Applied R&D & Pilot Trials'}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    {isAr ? 'فحص وملاءمة المكونات في معاملنا التجريبية قبل التشغيل الصناعي.' : 'Pilot-scale testing and recipe optimization before customer plant trials.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPALS DIRECTORY & FILTER */}
        <section style={{ padding: '4.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            {/* Header & Filter Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {isAr ? 'دليل الشركاء الدوليين' : 'PARTNER DIRECTORY'}
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '6px', margin: 0 }}>
                  {isAr ? 'الشركات والتوكيلات العالمية المعتمدة' : 'Authorized Technology Principals'}
                </h2>
              </div>

              {/* Category Filter Pills */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat.key}
                    onClick={() => setSelectedCategory(cat.key)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '999px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: '1px solid',
                      borderColor: selectedCategory === cat.key ? '#00A84F' : '#CBD5E1',
                      background: selectedCategory === cat.key ? '#00A84F' : '#FFFFFF',
                      color: selectedCategory === cat.key ? '#FFFFFF' : '#475569',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Principals Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
              {filteredPrincipals.map((p) => {
                const logoSrc = p.logoKey ? (v9Assets.principalLogos as Record<string, string>)[p.logoKey] : null;

                return (
                  <div
                    key={p.id}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      border: '1px solid #E2E8F0',
                      padding: '2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div>
                      {/* Top Bar: Logo & Origin */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #F1F5F9' }}>
                        <div style={{ height: '54px', maxWidth: '170px', display: 'flex', alignItems: 'center' }}>
                          {logoSrc ? (
                            <img
                              src={logoSrc}
                              alt={`${p.name} logo`}
                              style={{ maxHeight: '46px', maxWidth: '160px', objectFit: 'contain' }}
                            />
                          ) : (
                            <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>
                              {p.name}
                            </span>
                          )}
                        </div>
                        <div style={{ textAlign: isAr ? 'left' : 'right' }}>
                          <span style={{ fontSize: '1.1rem', display: 'block', lineHeight: 1 }}>{p.flag}</span>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>{p.origin}</span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                        {p.name}
                      </h3>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#00A84F', marginBottom: '12px' }}>
                        {p.tagline}
                      </div>
                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        {p.desc}
                      </p>

                      {/* Product Highlights */}
                      <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                          {isAr ? 'أبرز الحلول والمكونات الموردة:' : 'Key Supplied Ingredients:'}
                        </span>
                        <ul style={{ margin: 0, paddingInlineStart: '18px', fontSize: '0.85rem', color: '#334155', lineHeight: 1.6 }}>
                          {p.keyProducts.map((prod, idx) => (
                            <li key={idx}>{prod}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Target Applications Badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                        {p.applications.map((app, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              background: '#F1F5F9',
                              color: '#334155',
                              padding: '4px 10px',
                              borderRadius: '6px'
                            }}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Links */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid #F1F5F9', flexWrap: 'wrap', gap: '10px' }}>
                      <Link
                        to={`/contact?type=sample&principal=${encodeURIComponent(p.name)}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#00A84F',
                          textDecoration: 'none'
                        }}
                      >
                        <FileText size={15} />
                        <span>{isAr ? 'طلب عينات ومواصفات' : 'Request Specs & Samples'}</span>
                      </Link>

                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#64748B',
                          textDecoration: 'none'
                        }}
                      >
                        <span>{isAr ? 'موقع الشركة' : 'Official Portal'}</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOSING TECHNICAL CONSULTATION BANNER */}
        <section style={{ background: '#0F172A', color: '#FFFFFF', padding: '4.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {isAr ? 'خدمات الاستشارات الفنية والتوريد' : 'TECHNICAL SOURCING CONSULTATION'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '8px', marginBottom: '8px' }}>
                {isAr ? 'هل تبحث عن بديل وظيفي أو توريد متخصص؟' : 'Looking for a specialized ingredient or formulation trial?'}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '620px', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'يقوم فريق مهندسي الأغذية وخبراء سلاسل التوريد في AWA بمراجعة متطلبات تطبيقك وتوفير العينات الفنية والدعم التقني اللازم.'
                  : 'AWA’s food science application engineers and supply chain specialists review your processing brief to provide validated samples and pilot trial support.'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/contact?type=sample"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#00A84F',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}
              >
                <span>{isAr ? 'طلب عينات مجانية ↗' : 'Request Ingredient Samples ↗'}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/capabilities/sourcing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  color: '#FFFFFF',
                  border: '1px solid #475569',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none'
                }}
              >
                <span>{isAr ? 'استكشف سلاسل الإمداد' : 'Global Sourcing & Supply'}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PrincipalsPage;
