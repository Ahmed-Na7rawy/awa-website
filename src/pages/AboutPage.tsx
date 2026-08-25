import React, { useState } from 'react';
import { 
  ShieldCheck, Target, Eye, CheckCircle2, Award, Quote, ArrowRight, Layers, 
  Microscope, Droplets, Leaf, PackageCheck, Sparkles, Phone, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS, ABOUT_CERTS, STATS, CLIENT_LOGOS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

/* Interactive Count-Up Stat Card */
const AboutStatItem: React.FC<{ value: string; label: string; sub: string; delay: number }> = ({ value, label, sub, delay }) => {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericPart, 2000);

  return (
    <div ref={ref} className="about-stat-col reveal-fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="about-stat-num">{count}{suffix}</div>
      <div className="about-stat-label">{label}</div>
      <div className="about-stat-sub">{sub}</div>
    </div>
  );
};

export const AboutPage: React.FC<AboutProps> = ({ onNavigate, onOpenQuote }) => {
  const { t, language, translations } = useLanguage();
  const [activeDivision, setActiveDivision] = useState<number>(0);
  const [activeFacility, setActiveFacility] = useState<number>(0);

  const heroRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const chairmanRef = useScrollReveal();
  const divisionsRef = useScrollReveal();
  const facilitiesRef = useScrollReveal();
  const milestonesRef = useScrollReveal();
  const certsRef = useScrollReveal();

  // The 5 Corporate Operating Divisions from Official Catalogue
  const corporateDivisions = [
    {
      id: 'additives',
      name: language === 'ar' ? 'شركة AWA لمضافات الأغذية' : 'AWA Food Additives Co.',
      est: language === 'ar' ? 'تأسست 1993' : 'Est. 1993',
      logo: '/images/logos/awa group logo no background.png',
      tagline: language === 'ar' ? 'استيراد وتوريد المواد الخام والمضافات الغذائية' : 'Global Raw Materials Sourcing & Bulk Trading',
      desc: language === 'ar' 
        ? 'الركيزة التأسيسية الأولى لمجموعة AWA. تتولى عمليات الشراء الدولي وسلاسل الإمداد والتوزيع لأجود الكيماويات الغذائية عالية النقاوة، والنشويات الطبيعية، والهيدروكولويدز المعتمدة لكبرى مصانع الأغذية.'
        : 'The foundational pillar of AWA Group. Engaging in the worldwide procurement, supply chain logistics, and distribution of high-purity food chemicals, natural starches, hydrocolloids, and certified processing aids for top industrial manufacturers.',
      icon: <PackageCheck size={28} color="var(--primary-blue)" />,
      metrics: language === 'ar'
        ? ['أكثر من 33 عاماً من الخبرة', 'توريد مباشر من 30+ دولة', 'طاقة تخزين 15,000 طن']
        : ['33+ Years Experience', 'Direct Sourcing from 30+ Countries', '15,000 MT Storage Capacity'],
      focus: language === 'ar'
        ? ['الأحماض العضوية والمواد الحافظة', 'محسنات القوام ومثبتات الصمغ', 'المحليات الصناعية', 'الكاكاو والبودرات الوظيفية']
        : ['Acidulants & Preservatives', 'Texturizers & Gums', 'Industrial Sweeteners', 'Cocoa & Functional Powders'],
      image: '/images/pages/solutions/raw-materials-warehouse.jpg',
    },
    {
      id: 'solutions',
      name: language === 'ar' ? 'AWA للحلول والخلطات الغذائية' : 'AWA Food Solutions',
      est: language === 'ar' ? 'تأسست 2010' : 'Est. 2010',
      logo: '/images/logos/awa group logo no background.png',
      tagline: language === 'ar' ? 'الخلطات الوظيفية المخصصة ومعامل التطبيقات R&D' : 'Custom Functional Blends & Pilot R&D Center',
      desc: language === 'ar'
        ? 'وحدة الخلط والابتكار الصناعي المتطورة المتخصصة في ابتكار وتصنيع أنظمة التثبيت، والمستحلبات، ومحسنات مدة الصلاحية، وخلطات النكهات المصممة وفقاً للمواصفات التشغيلية الدقيقة لكل عميل.'
        : 'State-of-the-art compounding unit developing tailored stabilizer systems, emulsifiers, shelf-life extenders, and flavor pre-mixes formulated to exact client technical specifications and processing conditions.',
      icon: <Microscope size={28} color="var(--primary)" />,
      metrics: language === 'ar'
        ? ['طاقة خلط مساحيق 5.5 طن/ساعة', 'خط سوائل 10 طن/ساعة', 'معامل تطبيقات وتجارب متخصصة']
        : ['5.5 MT/HR Powder Mixing', '10 MT/HR Liquid Line', 'Dedicated Application Pilot Labs'],
      focus: language === 'ar'
        ? ['مثبتات الألبان ومضاعفة العائد', 'أنظمة استحلاب اللحوم', 'محسنات المخبوزات والحلويات', 'مثبتات الصلصات والمايونيز']
        : ['Dairy Stabilizers & Yield Boosters', 'Meat Emulsion Systems', 'Bakery Improvers', 'Sauce & Dressing Stabilizers'],
      image: '/images/pages/home/hero-food-science-lab.jpg',
    },
    {
      id: 'bio',
      name: language === 'ar' ? 'AWA للمستخلصات الحيوية' : 'AWA Bio Ingredients',
      est: language === 'ar' ? 'تأسست 2020' : 'Est. 2020',
      logo: '/images/logos/awa group logo no background.png',
      tagline: language === 'ar' ? 'الزيوت العطرية والأولوريسين والمستخلصات الطبيعية' : 'Natural Oleoresins, Essential Oils & Extracts',
      desc: language === 'ar'
        ? 'ريادة تقنيات الاستخلاص الحيوي الصديقة للبيئة لإنتاج أولوريسين التوابل عالي التركيز، والزيوت العطرية النقية المعتمدة، والمستخلصات النباتية الغنية بمضادات الأكسدة لتقديم نكهات طبيعية نظيفة (Clean-Label).'
        : 'Pioneering green biotechnology extraction of high-potency spice oleoresins, certified pure essential oils, and antioxidant botanical extracts delivering authentic flavor profiles with clean-label transparency.',
      icon: <Leaf size={28} color="#059669" />,
      metrics: language === 'ar'
        ? ['استخلاص فوق الحرج بدون مذيبات', 'زيوت طبيعية 100%', 'معايرة دقيقة للمواد الفعالة']
        : ['Supercritical Extraction', '100% Solvent-Free Oils', 'Standardized Active Principles'],
      focus: language === 'ar'
        ? ['أولوريسين الفلفل الأسود والشطة', 'زيوت الحمضيات والأعشاب النقية', 'ملونات الأغذية الطبيعية', 'مستخلصات نباتية حيوية']
        : ['Black Pepper & Capsicum Oleoresins', 'Citrus & Herb Essential Oils', 'Natural Food Colorants', 'Bioactive Herbal Extracts'],
      image: '/images/pages/home/food-chemistry-formulation.jpg',
    },
    {
      id: 'awabey',
      name: language === 'ar' ? 'شراكة AWABEY الاستراتيجية' : 'AWABEY Joint Venture',
      est: language === 'ar' ? 'تأسست 2020' : 'Est. 2020',
      logo: '/images/logos/Bey Logo.png',
      tagline: language === 'ar' ? 'خلاصة عرق الحلاوة الطبيعي (Radix Saponariae)' : 'Natural Soapwort Extract (Radix Saponariae)',
      desc: language === 'ar'
        ? 'شراكة استراتيجية حصرية تطبق أحدث تقنيات الاستخلاص لإنتاج خلاصة عرق الحلاوة الطبيعي عالي النقاوة لصناعة الحلاوة الطحينية، والراحة الحلقومية، وأنظمة الرغوة الفائقة للمشروبات.'
        : 'Exclusive joint venture utilizing modern extraction technology to produce premium-grade Soapwort root extract for traditional confectionery (Halawa Tahinia, Turkish Delight) and foaming beverage systems.',
      icon: <Droplets size={28} color="#D97706" />,
      metrics: language === 'ar'
        ? ['عامل رغوة طبيعي 100%', 'تركيز سابونين معاير', 'إنتاج خالٍ تماماً من المواد الحافظة']
        : ['100% Natural Foaming Agent', 'Standardized Saponin Concentration', 'Preservative-Free Processing'],
      focus: language === 'ar'
        ? ['الحلاوة الطحينية والحلويات', 'المارشميلو والنوجا', 'المشروبات الرغوية الخاصة', 'مستحلبات التنظيف الطبيعية']
        : ['Halawa & Tahini Confectionery', 'Marshmallows & Nougat', 'Specialty Creamy Beverages', 'Natural Cleansing Emulsions'],
      image: '/images/pages/solutions/dairy.jpg',
    },
    {
      id: 'awasoy',
      name: language === 'ar' ? 'AWASOY لأنظمة بروتين الصويا' : 'AWASOY Protein Systems',
      est: language === 'ar' ? 'تأسست 2015' : 'Est. 2015',
      logo: '/images/logos/soy.png',
      tagline: language === 'ar' ? 'بروتينات نباتية معزولة ومحكمة القوام' : 'Isolated & Textured Plant-Based Protein',
      desc: language === 'ar'
        ? 'قطاع متخصص في البروتينات النباتية يقدم بروتين الصويا المعزول غير المعدل وراثياً (نسبة بروتين 90%)، والبروتين النباتي المحكم القوام لتعزيز مصنعات اللحوم، وتغذية الرياضيين، والمنتجات النباتية.'
        : 'Dedicated plant-protein division providing non-GMO functional soy protein isolates (90% protein), textured soy flour, and soy concentrates engineered for meat extension, dietary nutrition, and vegan formulations.',
      icon: <Layers size={28} color="#DB2777" />,
      metrics: language === 'ar'
        ? ['معتمد غير معدل وراثياً (Non-GMO)', 'نسبة بروتين تتجاوز 90%', 'قدرة ربط ماء عالية 1:5']
        : ['Non-GMO Certified', '90%+ Protein Content', 'High Water Binding Capacity 1:5'],
      focus: language === 'ar'
        ? ['روابط مصنعات اللحوم والدواجن', 'بودرات المشروبات الغذائية', 'تدعيم بروتين المخبوزات', 'بدائل اللحوم النباتية']
        : ['Processed Meat Binders', 'Nutritional Beverage Powders', 'Bakery Protein Fortification', 'Plant-Based Meat Analogues'],
      image: '/images/pages/industries/image33.jpg',
    },
  ];

  // Manufacturing Facilities Data
  const facilities = [
    {
      title: language === 'ar' ? 'مجمع برج العرب الصناعي المتكامل' : 'New Borg El-Arab Manufacturing Complex',
      location: language === 'ar' ? 'المنطقة الصناعية الرابعة، بلوك 15، مدينة برج العرب الجديدة' : '4th Industrial Zone, Block 15, Alexandria',
      role: language === 'ar' ? 'مجمع التصنيع الرئيسي والخلط واللوجستيات' : 'Primary Industrial Production & Logistics Hub',
      image: '/images/pages/industries/image33.jpg',
      specs: language === 'ar' ? [
        { label: 'المساحة والتخزين', val: '3,700 م² (سعة تخزين 15,000 طن)' },
        { label: 'خلط المساحيق', val: '3 خلاطات عالية القص (5.5 طن/ساعة)' },
        { label: 'معالجة السوائل', val: 'خط سوائل مخصص بطاقة 10 طن/ساعة' },
        { label: 'القدرات اللوجستية', val: 'تخزين مبرد ومناولة صهاريج Flexi-Tank' },
      ] : [
        { label: 'Storage Footprint', val: '3,700 m² (15,000 MT Capacity)' },
        { label: 'Powder Mixing', val: '3 High-Shear Mixers (5.5 MT/HR)' },
        { label: 'Liquid Processing', val: '10 MT/HR Dedicated Liquid Line' },
        { label: 'Logistics Capability', val: 'Cold Chain & Flexi-Tank Handling' },
      ],
      desc: language === 'ar'
        ? 'يعمل مجمعنا الصناعي الرائد وفق أعلى معايير FSSC 22000 و ISO 9001، ويضم خطوط خلط جاف مؤتمتة، وأنظمة جرعات ميكروية دقيقة، وغرفاً نظيفة، ومستودعات تخزين مبردة متطورة.'
        : 'Our flagship manufacturing complex operates under strict adherence to FSSC 22000 and ISO 9001 standards, featuring automated dry blending lines, micro-dosing systems, cleanrooms, and temperature-controlled storage.',
      phone: '+203 5890155 / 165',
    },
    {
      title: language === 'ar' ? 'المقر الرئيسي للمجموعة - الإسكندرية' : 'Alexandria Corporate Headquarters',
      location: language === 'ar' ? '243 طريق الحرية، سبورتنج، الإسكندرية' : '243 Horreya Road, Sporting, Alexandria',
      role: language === 'ar' ? 'القيادة التنفيذية والحوكمة والتوريد الدولي' : 'Executive Governance & Global Procurement',
      image: '/images/pages/home/hero-food-science-lab.jpg',
      specs: language === 'ar' ? [
        { label: 'العمليات الرئيسية', val: 'توريد المواد الخام من 30+ دولة' },
        { label: 'القطاع التجاري', val: 'إدارة كبار العملاء والمالية' },
        { label: 'قطاع التصدير', val: 'مكتب التجارة لمنطقة MENA وإفريقيا' },
        { label: 'مركز الـ ERP', val: 'إدارة منظومة SAP المؤسسية' },
      ] : [
        { label: 'Key Operations', val: 'Global Raw Materials Sourcing' },
        { label: 'Commercial Directorate', val: 'Corporate Accounts & Finance' },
        { label: 'Export Division', val: 'MENA & African Trade Desk' },
        { label: 'ERP Center', val: 'Enterprise SAP Operations' },
      ],
      desc: language === 'ar'
        ? 'المقر الرئيسي للقيادة المؤسسية حيث تتم إدارة الخطط الاستراتيجية، والشراكات الدولية مع كبار الموردين، وحوكمة المجموعة برئاسة المهندس وائل غندور.'
        : 'The corporate leadership headquarters where executive strategy, international supplier partnerships, and group governance are directed under Chairman Eng. Wael Ghandour.',
      phone: '+203 4292030 / 4211200',
    },
    {
      title: language === 'ar' ? 'المركز الفني والتجاري - القاهرة' : 'Cairo Commercial & Technical Center',
      location: language === 'ar' ? '15 شارع عبد الوهاب سليم البشري، مساكن شيراتون، القاهرة' : '15 Abd El-Wahab Selim El-Bishry St., Sheraton, Cairo',
      role: language === 'ar' ? 'التوزيع الإقليمي والدعم الفني السريع للعملاء' : 'Regional Dispatch & Technical Client Support',
      image: '/images/pages/solutions/cold-chain-logistics-truck.jpg',
      specs: language === 'ar' ? [
        { label: 'نطاق التغطية', val: 'القاهرة الكبرى والوجه القبلي' },
        { label: 'دعم العملاء', val: 'استجابة فنية وتجارية فورية' },
        { label: 'إرسال العينات', val: 'توصيل سريع للعينات المعملية' },
        { label: 'الفريق التجاري', val: 'مديرو حسابات كبرى شركات الأغذية' },
      ] : [
        { label: 'Coverage Area', val: 'Greater Cairo & Upper Egypt' },
        { label: 'Client Support', val: 'Rapid Technical Sales Response' },
        { label: 'Sample Dispatch', val: 'Express Formulation Lab Delivery' },
        { label: 'Commercial Team', val: 'Key FMCG Account Managers' },
      ],
      desc: language === 'ar'
        ? 'مركز تجاري واستشاري استراتيجي يقدم الدعم الفني اليومي، والعروض التقنية، وإرسال العينات المعملية المخصصة لكبرى شركات الأغذية متعددة الجنسيات التي تتخذ من القاهرة مقراً لها.'
        : 'Strategic commercial hub facilitating same-day client consultations, technical presentations, and rapid formulation sample dispatch for multinational food conglomerates headquartered in Cairo.',
      phone: '+202 22681519 / 22690727',
    },
  ];

  return (
    <div className="about-page" style={{ background: '#FFFFFF' }}>
      <section 
        className="hero-cinematic-section" 
        ref={heroRef} 
        style={{ 
          background: 'radial-gradient(ellipse at 15% 25%, rgba(0, 168, 79, 0.12) 0%, transparent 60%), linear-gradient(135deg, rgba(0, 168, 79, 0.07) 0%, #FFFFFF 50%, rgba(0, 168, 79, 0.04) 100%)',
          borderBottom: '1px solid var(--border-color)',
          position: 'relative'
        }}
      >
        <div className="hero-cinematic-bg-grid" />
        <div className="container">
          <div className="hero-cinematic-grid">
            <div className="reveal-fade-left">
              <div className="hero-cinematic-eyebrow">
                <Sparkles size={14} />
                <span>{translations.about.hero.eyebrow}</span>
              </div>
              <h1 className="hero-cinematic-title">
                {translations.about.hero.title}
              </h1>
              <p className="hero-cinematic-desc">
                {translations.about.hero.desc}
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0.85rem 1.4rem',
                borderRadius: '16px',
                background: 'var(--bg-soft)',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <img
                  src="/images/pages/about/signature.png"
                  alt="Eng. Wael Ghandour Signature"
                  style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
                />
                <div style={{ borderInlineStart: '2px solid var(--border-color)', paddingInlineStart: '1.25rem' }}>
                  <div style={{ color: 'var(--text-main)', fontWeight: 900, fontSize: '1rem' }}>
                    {translations.about.hero.signatureName}
                  </div>
                  <div style={{ color: 'var(--primary)', fontSize: '0.775rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {translations.about.hero.signatureTitle}
                  </div>
                </div>
              </div>
              <div className="hero-cinematic-actions">
                <button onClick={onOpenQuote} className="btn btn-primary">
                  <span>{translations.about.hero.btnPrimary}</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('solutions')} className="btn btn-secondary">
                  <span>{translations.about.hero.btnSecondary}</span>
                </button>
              </div>
            </div>
            <div className="hero-cinematic-media reveal-fade-right reveal-delay-1">
              <div className="hero-cinematic-img-frame" style={{ background: 'var(--bg-soft)', borderRadius: '24px', overflow: 'hidden', border: '2px solid var(--border-color)' }}>
                <img
                  src="/images/pages/home/Image2-3.jpg"
                  alt="Eng. Wael Ghandour - Chairman & Founder of AWA Group"
                  className="hero-cinematic-img"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="hero-glass-badge-1">
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Award size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 800 }}>
                    {translations.about.hero.badge1Title}
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    {translations.about.hero.badge1Sub}
                  </span>
                </div>
              </div>
              <div className="hero-glass-badge-2">
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(20, 30, 154, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 800 }}>
                    {translations.about.hero.badge2Title}
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    {translations.about.hero.badge2Sub}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip-light" style={{ background: '#F8FAFC', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="metrics-light-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {translations.about.metrics.map((st, idx) => (
              <AboutStatItem
                key={idx}
                value={st.val}
                label={st.label}
                sub={st.sub}
                delay={idx * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section" ref={chairmanRef} style={{ padding: '5.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            padding: '3.5rem 4rem',
            borderRadius: '28px',
            border: '2px solid var(--border-color)',
            boxShadow: 'var(--shadow-subtle)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-navy) 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(20, 30, 154, 0.25)',
              flexShrink: 0,
            }}>
              <Quote size={38} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.08em' }}>
                  {translations.about.chairman.eyebrow}
                </span>
                <span style={{ color: 'var(--border-color)' }}>•</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  {translations.about.chairman.title}
                </span>
              </div>
              <blockquote style={{
                fontSize: '1.15rem',
                color: 'var(--dark-navy)',
                lineHeight: '1.9',
                fontStyle: 'normal',
                marginBottom: '1.75rem',
                fontWeight: 500,
              }}>
                {translations.about.chairman.quote}
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                    {translations.about.chairman.name}
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.85rem' }}>
                    {translations.about.chairman.role}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src="/images/pages/about/signature.png"
                    alt="Eng. Wael Ghandour Official Signature"
                    style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" ref={valuesRef} style={{ background: '#F8FAFC', padding: '5.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.about.foundation.eyebrow}</div>
            <h2 className="section-title">{translations.about.foundation.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              {translations.about.foundation.desc}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="interactive-number-card reveal-fade-up">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(20, 30, 154, 0.08)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {translations.about.foundation.visionTitle}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {translations.about.foundation.visionDesc}
              </p>
            </div>
            <div className="interactive-number-card reveal-fade-up reveal-delay-1">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {translations.about.foundation.missionTitle}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {translations.about.foundation.missionDesc}
              </p>
            </div>
            <div className="interactive-number-card reveal-fade-up reveal-delay-2">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(32, 44, 106, 0.08)', color: 'var(--dark-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                {translations.about.foundation.valuesTitle}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                {translations.about.foundation.valuesDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" ref={divisionsRef} style={{ padding: '5.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.about.divisions.eyebrow}</div>
            <h2 className="section-title">{translations.about.divisions.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
              {translations.about.divisions.desc}
            </p>
          </div>
          <div className="brand-tab-bar reveal-fade-up reveal-delay-1" style={{ marginBottom: '2.5rem' }}>
            {corporateDivisions.map((div, idx) => (
              <button
                key={div.id}
                onClick={() => setActiveDivision(idx)}
                className={`brand-tab-btn ${activeDivision === idx ? 'active' : ''}`}
              >
                <span>{div.name}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, marginInlineStart: '0.4rem' }}>({div.est})</span>
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {(() => {
              const current = corporateDivisions[activeDivision];
              return (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="brand-stage-card"
                  style={{ gridTemplateColumns: '1fr 1.25fr' }}
                >
                  <div className="brand-stage-img-wrap">
                    <img 
                      src={current.image} 
                      alt={current.name} 
                      className="brand-stage-img"
                      style={{ maxHeight: '340px' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                      <div style={{ background: '#FFFFFF', padding: '0.4rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'inline-flex', alignItems: 'center' }}>
                        <img 
                          src={current.logo} 
                          alt={current.name} 
                          style={{ height: '28px', maxWidth: '120px', objectFit: 'contain' }}
                        />
                      </div>
                      <span style={{ fontSize: '0.775rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                        {current.tagline}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '2.15rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
                      {current.name}
                    </h3>

                    <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                      {current.desc}
                    </p>

                    {/* Key Metrics */}
                    <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                      {current.metrics.map((m, mIdx) => (
                        <div key={mIdx} style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', padding: '0.45rem 0.85rem', borderRadius: '8px', fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)' }}>
                          ✓ {m}
                        </div>
                      ))}
                    </div>

                    {/* Focus Areas */}
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                        {translations.about.divisions.focusHeading}
                      </span>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {current.focus.map((f, fIdx) => (
                          <span key={fIdx} style={{ background: 'rgba(20, 30, 154, 0.05)', color: 'var(--primary-blue)', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. MANUFACTURING & TECHNICAL COMPLEXES             */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" ref={facilitiesRef} style={{ padding: '5.5rem 0', background: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.about.facilities.eyebrow}</div>
            <h2 className="section-title">{translations.about.facilities.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
              {translations.about.facilities.desc}
            </p>
          </div>

          {/* Facility Tab Selector */}
          <div className="brand-tab-bar reveal-fade-up reveal-delay-1" style={{ marginBottom: '2.5rem' }}>
            {facilities.map((fac, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFacility(idx)}
                className={`brand-tab-btn ${activeFacility === idx ? 'active' : ''}`}
              >
                {fac.title}
              </button>
            ))}
          </div>

          {/* Active Facility Card */}
          <div className="brand-stage-card reveal-fade-up" style={{ gridTemplateColumns: '1.25fr 1fr' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                <MapPin size={16} />
                <span>{facilities[activeFacility].location}</span>
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {facilities[activeFacility].title}
              </h3>

              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1.25rem' }}>
                {facilities[activeFacility].role}
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2rem' }}>
                {facilities[activeFacility].desc}
              </p>

              {/* Technical Specifications Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {facilities[activeFacility].specs.map((sp, spIdx) => (
                  <div key={spIdx} style={{ background: '#FFFFFF', border: '1px solid var(--border-color)', padding: '0.85rem 1rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {sp.label}
                    </div>
                    <strong style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {sp.val}
                    </strong>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
                <Phone size={16} color="var(--primary)" />
                <span>{translations.about.facilities.directLine} <span dir="ltr">{facilities[activeFacility].phone}</span></span>
              </div>
            </div>

            <div className="brand-stage-img-wrap">
              <img
                src={facilities[activeFacility].image}
                alt={facilities[activeFacility].title}
                className="brand-stage-img"
                style={{ maxHeight: '380px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. HISTORICAL TIMELINE TRAJECTORY                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="timeline-section" ref={milestonesRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.home.timeline.eyebrow}</div>
            <h2 className="section-title">{translations.home.timeline.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              {translations.home.timeline.desc}
            </p>
          </div>

          <div className="timeline-track-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {translations.home.timeline.nodes.map((ms, idx) => (
              <div key={ms.year} className="timeline-node-card reveal-fade-up" style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div className="timeline-node-dot" />
                <div className="timeline-year-tag">{ms.year}</div>
                <h3 className="timeline-node-title">{ms.title}</h3>
                <p className="timeline-node-desc">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. ACCREDITATIONS & GLOBAL QUALITY STANDARDS       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" ref={certsRef} style={{ padding: '5.5rem 0', background: '#F8FAFC', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>{translations.about.certs.eyebrow}</div>
            <h2 className="section-title">{translations.about.certs.title}</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              {translations.about.certs.desc}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}>
            {[
              { 
                code: 'FSSC 22000', 
                name: language === 'ar' ? 'نظام سلامة الغذاء العالمي' : 'Food Safety System', 
                desc: language === 'ar' ? 'شهادة معتمدة من مبادرة سلامة الغذاء العالمية (GFSI) لخطوط الخلط.' : 'GFSI recognized certification for industrial blending lines.' 
              },
              { 
                code: 'ISO 9001:2015', 
                name: language === 'ar' ? 'إدارة الجودة الشاملة' : 'Quality Management', 
                desc: language === 'ar' ? 'حوكمة قياسية للعمليات وضبط جودة الدفعات الإنتاجية.' : 'Standardized operational and batch control excellence.' 
              },
              { 
                code: 'ISO 22000:2018', 
                name: language === 'ar' ? 'إدارة سلامة الغذاء' : 'Food Safety Management', 
                desc: language === 'ar' ? 'تدقيق وتحليل شامل للمخاطر ونقاط التحكم الحرجة (HACCP).' : 'Rigorous hazard analysis and critical control point auditing.' 
              },
              { 
                code: 'HALAL CERTIFIED', 
                name: language === 'ar' ? 'شهادة حلال المعتمدة' : 'Islamic Sharia Compliance', 
                desc: language === 'ar' ? 'خامات وخطوط إنتاج متوافقة 100% مع اشتراطات الشريعة الإسلامية.' : '100% Halal raw materials and dedicated processing lines.' 
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="interactive-number-card reveal-fade-up"
                style={{ transitionDelay: `${idx * 0.08}s`, textAlign: 'center' }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                  {cert.code}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Global Partners Marquee */}
          <div style={{ textAlign: 'center' }} className="reveal-fade-up">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '2rem' }}>
              {translations.about.certs.partnerTitle}
            </div>
            <PartnerMarquee items={CLIENT_LOGOS} />
          </div>
        </div>
      </section>
    </div>
  );
};
