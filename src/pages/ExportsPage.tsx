import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  Ship, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  Layers, 
  FileText,
  Boxes,
  Truck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const ExportsPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const exportMarkets = [
    {
      region: isAr ? 'الخليج العربي والشرق الأوسط (GCC & MENA)' : 'Arabian Gulf & Middle East (GCC & MENA)',
      countries: isAr 
        ? ['المملكة العربية السعودية', 'الإمارات العربية المتحدة', 'الكويت', 'الأردن', 'العراق', 'سلطنة عمان'] 
        : ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Jordan', 'Iraq', 'Oman'],
      agreement: isAr ? 'اتفاقية التجارة الحرة العربية الكبرى (GAFTA) — إعفاء جمركي 0%' : 'GAFTA Free Trade Agreement — 0% Customs Duty',
      icon: <Globe2 size={24} />
    },
    {
      region: isAr ? 'شمال وشرق إفريقيا (COMESA & Africa)' : 'North & East Africa (COMESA & Africa)',
      countries: isAr 
        ? ['ليبيا', 'السودان', 'كينيا', 'الجزائر', 'تونس', 'المغرب'] 
        : ['Libya', 'Sudan', 'Kenya', 'Algeria', 'Tunisia', 'Morocco'],
      agreement: isAr ? 'اتفاقية الكوميسا (COMESA) واتفاقية أغادير — تعريفات تفضيلية' : 'COMESA & Agadir Agreements — Preferential Tariffs',
      icon: <Ship size={24} />
    },
    {
      region: isAr ? 'أوروبا والمشاريع الدولية (Europe & Strategic JVs)' : 'Europe & Strategic JVs',
      countries: isAr 
        ? ['إستونيا (Ingreva JV)', 'تركيا (Turkphos JV)', 'شركاء وسط أوروبا'] 
        : ['Estonia (Ingreva JV)', 'Türkiye (Turkphos JV)', 'Central European Partners'],
      agreement: isAr ? 'شهادة الحركة EUR.1 والتعاون التكنولوجي المشترك' : 'EUR.1 Movement Certificate & Technology Joint Ventures',
      icon: <Building2 size={24} />
    }
  ];

  const exportPortfolios = [
    {
      title: isAr ? 'أملاح وفوسفات توركفوس الوظيفية' : 'Turkphos Functional Phosphates',
      desc: isAr 
        ? 'أملاح الاستحلاب المتطورة للأجبان المطبوخة والفوسفات الفنية للحوم والمخبوزات معتمدة ومعبأة للتصدير الدولي.' 
        : 'Specialized emulsifying salts for processed cheese, yield-enhancing phosphates for meat, and leavening agents.',
      tags: ['TP-MELT', 'TP-SPREAD', 'TP-BIND', 'SAPP 28']
    },
    {
      title: isAr ? 'مثبتات وأنظمة قوام AWA Bio Ingredients' : 'AWA Bio Ingredients & Texture Systems',
      desc: isAr 
        ? 'خلطات بروتينات الصويا، وأنظمة القوام الوظيفية، ومثبتات الألبان المصممة لخفض التكلفة وتحسين الجودة.' 
        : 'Custom hydrocolloid stabilizer systems, soy protein isolates, and yield boosters for industrial processors.',
      tags: ['Soy Protein Blends', 'Dairy Stabilizers', 'Yield Improvers']
    },
    {
      title: isAr ? 'منتجات SIRRI الغذائية (تجزئة وخدمات أغذية)' : 'SIRRI Foods (Instant Soups & Culinary)',
      desc: isAr 
        ? 'أكواب الشوربة الفورية سريعة التحضير للهايبرماركت، وقواعد المرق والديمي جلاس المركزة للمطابخ الفندقية.' 
        : 'Convenient instant soup cups for retail distribution and high-yield culinary demi-glace and broths for HoReCa.',
      tags: ['Instant Cup Soups', 'Demi-Glace Paste', 'Bouillons']
    },
    {
      title: isAr ? 'مشروبات Yalla ومحليات Sweet & Slim' : 'Yalla Drinks & Sweet & Slim Portfolio',
      desc: isAr 
        ? 'بودرة الفرابي والمشروبات الساخنة للمقاهي، وبدائل السكر الآمنة الخالية من السعرات الحرارية للمستهلك.' 
        : 'Specialty beverage powders for café operators and zero-calorie table-top sweeteners for retail export.',
      tags: ['Frappé Powders', 'Sweeteners', 'Squ’easy Pastes']
    }
  ];

  const tradeAgreements = [
    {
      name: 'GAFTA',
      title: isAr ? 'اتفاقية التجارة الحرة العربية الكبرى' : 'Greater Arab Free Trade Area',
      benefit: isAr ? 'إعفاء جمركي كامل 0% على كافة المنتجات مصرية المنشأ في 17 دولة عربية.' : 'Full 0% customs duty on Egyptian manufactured goods across 17 member states.'
    },
    {
      name: 'COMESA',
      title: isAr ? 'السوق المشتركة لشرق وجنوب إفريقيا' : 'Common Market for Eastern & Southern Africa',
      benefit: isAr ? 'معاملة جمركية تفضيلية معفاة أو مخفضة تغطي سوقاً استهلاكياً يتجاوز 580 مليون نسمة.' : 'Preferential zero-duty or reduced tariff treatment across 21 African member nations.'
    },
    {
      name: 'AGADIR',
      title: isAr ? 'الاتفاقية العربية المتوسطية للتبادل الحر' : 'The Agadir Free Trade Agreement',
      benefit: isAr ? 'تكامل تجاري وصناعي يعزز التصدير المتبادل بين مصر والأردن وتونس والمغرب.' : 'Free industrial trade integration connecting Egypt, Jordan, Tunisia, and Morocco.'
    },
    {
      name: 'EUR.1',
      title: isAr ? 'شهادة المنشأ التفضيلية الأوروبية' : 'EUR.1 Movement Certificate',
      benefit: isAr ? 'تيسير التبادل التجاري وتصدير المنتجات المتوافقة إلى دول الاتحاد الأوروبي.' : 'Export documentation facilitation for approved goods entering the European Union.'
    }
  ];

  const complianceStandards = [
    isAr ? 'شهادة سلامة الغذاء العالمية FSSC 22000 (الإصدار السادس)' : 'FSSC 22000 (Version 6) Food Safety Certification',
    isAr ? 'شهادة الحلال الرسمية المعتمدة لدول الخليج والعالم الإسلامي' : 'Official Halal Certification recognized across GCC & Global Islamic markets',
    isAr ? 'القائمة البيضاء للهيئة القومية لسلامة الغذاء المصرية (NFSA)' : 'Egyptian National Food Safety Authority (NFSA) White List Listing',
    isAr ? 'تسجيل رسمي في هيئة الغذاء والدواء الأمريكية (US FDA Food Facility)' : 'Registered with the United States FDA as a Food Facility',
    isAr ? 'شهادات الجودة والسلامة والبيئة ISO 9001, ISO 14001, ISO 45001' : 'ISO 9001, ISO 14001 & ISO 45001 Integrated Management Systems',
    isAr ? 'إصدار شهادات التحليل الكيميائي والميكروبيولوجي (CoA) لكل دفعة' : 'Batch-specific Certificates of Analysis (CoA) & health documentation'
  ];

  return (
    <>
      <SEO
        title={isAr ? 'الأعمال الدولية والتصدير • مجموعة AWA' : 'Export & International Trade • AWA Group'}
        description={
          isAr
            ? 'تصدر مجموعة AWA حلول الصناعات الغذائية والمكونات الوظيفية إلى أكثر من 20 دولة في الخليج وإفريقيا وأوروبا، مستفيدة من اتفاقيات التجارة الحرة والموقع الاستراتيجي لموانئ الإسكندرية وبورسعيد.'
            : 'AWA Group exports advanced food ingredients and solutions across 20+ markets in the GCC, MENA, Africa and Europe, backed by 0% duty trade agreements and prime Mediterranean port logistics.'
        }
        path="/global/exports"
      />

      <div className="exports-page" style={{ background: '#F8FAFC', minHeight: '100vh' }}>
        {/* HERO SECTION */}
        <section className="page-hero page-hero--visual">
          <div className="page-hero-media">
            <img 
              src={v9Assets.v8Assets['sourcing-port']} 
              alt="International Trade and Export Hub" 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content">
            <div className="breadcrumb">
              <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <Link to="/global">{isAr ? 'الشبكة الدولية' : 'Global Network'}</Link>
              <span>›</span>
              <span>{isAr ? 'الأعمال الدولية والتصدير' : 'Export & International Trade'}</span>
            </div>
            <div className="kicker on-dark">
              {isAr ? 'مجموعة AWA / التجارة الدولية والتصدير' : 'AWA GROUP / EXPORT & INTERNATIONAL TRADE'}
            </div>
            <h1>
              {isAr ? 'بوابة تصدير استراتيجية. ' : 'A Strategic Export Gateway. '}
              <em className="italic">{isAr ? 'ثقة عبر الأسواق العالمية.' : 'Trusted Across Global Markets.'}</em>
            </h1>
            <p>
              {isAr
                ? 'انطلاقاً من مجمع مصانعنا في مدينة برج العرب الجديدة وبالقرب من موانئ الإسكندرية وبورسعيد على البحر المتوسط، تصدر AWA حلول الصناعات الغذائية المتطورة إلى أكثر من 20 دولة مع الاستفادة الكاملة من اتفاقيات الإعفاء الجمركي.'
                : 'Headquartered at the New Borg El-Arab industrial hub adjacent to Alexandria and Port Said Mediterranean ports, AWA Group exports functional food solutions to over 20 countries leveraging preferential duty-free agreements.'}
            </p>
          </div>
        </section>

        {/* KEY NUMBERS STRIP */}
        <section style={{ background: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
              <div>
                <strong style={{ fontSize: '2.5rem', fontWeight: 900, color: '#00A84F', display: 'block', lineHeight: 1 }}>20+</strong>
                <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>{isAr ? 'وجهة وسوق تصدير دولي' : 'International Export Markets'}</span>
              </div>
              <div>
                <strong style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', display: 'block', lineHeight: 1 }}>0%</strong>
                <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>{isAr ? 'جمارك عبر GAFTA وCOMESA' : 'Customs Duty via GAFTA / COMESA'}</span>
              </div>
              <div>
                <strong style={{ fontSize: '2.5rem', fontWeight: 900, color: '#2563EB', display: 'block', lineHeight: 1 }}>FSSC 22000</strong>
                <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>{isAr ? 'سلامة غذاء عالمية معتمدة' : 'GFSI-Recognized Food Safety'}</span>
              </div>
              <div>
                <strong style={{ fontSize: '2.5rem', fontWeight: 900, color: '#D97706', display: 'block', lineHeight: 1 }}>100% Halal</strong>
                <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600 }}>{isAr ? 'اعتماد حلال متوافق مع الخليج' : 'GCC & Global Halal Compliance'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* EXPORT DESTINATIONS & MARKETS */}
        <section style={{ padding: '4.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {isAr ? 'الانتشار الجغرافي' : 'GLOBAL COVERAGE'}
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '8px 0 16px' }}>
                {isAr ? 'الأسواق الإقليمية ووجهات التصدير' : 'Regional Markets & Export Destinations'}
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'بفضل شبكة لوجستية متكاملة وأسطول نقل معتمد، نلبي احتياجات المصانع والموزعين في أهم الأسواق التصديرية مع دعم كامل لمتطلبات التسجيل والتخليص الجمركي.'
                  : 'Through integrated supply logistics and verified freight partnerships, we serve food manufacturers and distributors across major export corridors with full clearance support.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {exportMarkets.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    border: '1px solid #E2E8F0',
                    padding: '2.25rem',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>{m.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                    {m.region}
                  </h3>
                  <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '8px 12px', fontSize: '0.8rem', fontWeight: 700, color: '#065F46', marginBottom: '1.25rem' }}>
                    {m.agreement}
                  </div>

                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                    {isAr ? 'البلدان ووجهات التوريد النشطة:' : 'Key Active Destinations:'}
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {m.countries.map((country, cIdx) => (
                      <span
                        key={cIdx}
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          background: '#F1F5F9',
                          color: '#1E293B',
                          padding: '6px 12px',
                          borderRadius: '8px'
                        }}
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRADE PRIVILEGES & BILATERAL AGREEMENTS */}
        <section style={{ background: '#FFFFFF', padding: '4.5rem 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3.5rem', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {isAr ? 'الميزة التنافسية للتصدير' : 'TRADE AGREEMENTS & ZERO DUTY'}
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginTop: '8px', marginBottom: '16px', lineHeight: 1.25 }}>
                  {isAr ? (
                    <>وفورات جمركية وتنافسية تجارية <span style={{ color: '#00A84F' }}>لكافة الشركاء.</span></>
                  ) : (
                    <>Customs Privileges & Cost Advantages <span style={{ color: '#00A84F' }}>for International Buyers.</span></>
                  )}
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {isAr
                    ? 'تستفيد منتجات AWA المصنعة في مجمع مصانع برج العرب من موقع مصر الاستراتيجي والاتفاقيات الاقتصادية الثنائية والمتعددة الأطراف، مما يمنح المستوردين إعفاءات جمركية كاملة أو تفضيلية مقارنة بالمنافسين الدوليين.'
                    : 'Manufactured under rigorous food science protocols in Egypt, AWA products qualify for certified national origin status, unlocking zero-tariff entry and duty savings across the Arab World, Africa, and partner economies.'}
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    to="/contact?type=export"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#0F172A',
                      color: '#FFFFFF',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{isAr ? 'استفسار عن الشحن والجمارك ↗' : 'Inquire on Customs & Freight ↗'}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                {tradeAgreements.map((agr, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#F8FAFC',
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0',
                      padding: '1.5rem'
                    }}
                  >
                    <span style={{ fontSize: '1rem', fontWeight: 900, color: '#00A84F', display: 'block', marginBottom: '4px' }}>
                      {agr.name}
                    </span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                      {agr.title}
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                      {agr.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPORT PRODUCT PORTFOLIO */}
        <section style={{ padding: '4.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00A84F', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {isAr ? 'محفظة المنتجات الجاهزة للتصدير' : 'EXPORT PORTFOLIO'}
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0F172A', margin: '8px 0 16px' }}>
                {isAr ? 'حلول صناعية واستهلاكية معتمدة دولياً' : 'Industrial & Consumer Solutions for Export'}
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'نوفر خيارات تعبئة صناعية بالحاويات الكاملة (FCL) أو المجزأة (LCL)، مع إمكانية التوريد بعبوات خاصة أو التصنيع التعاقدي للموزعين الدوليين.'
                  : 'Available in 20ft & 40ft FCL container loads, multi-pallet mixed shipments, industrial bulk sacks, or retail-ready branded cartons.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {exportPortfolios.map((port, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    padding: '1.75rem',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                      {port.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {port.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {port.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          background: '#F1F5F9',
                          color: '#00A84F',
                          padding: '4px 8px',
                          borderRadius: '6px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOGISTICS & COMPLIANCE STRIP */}
        <section style={{ background: '#0F172A', color: '#FFFFFF', padding: '4.5rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
              <div>
                <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {isAr ? 'الامتثال والشحن الدولي' : 'LOGISTICS & DOCUMENTATION'}
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '8px', marginBottom: '16px' }}>
                  {isAr ? 'شروط شحن مرنة ووثائق تصدير متكاملة' : 'Flexible INCOTERMS & Export Certifications'}
                </h2>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {isAr
                    ? 'يتولى قسم العمليات الدولية والتصدير في AWA إعداد كافة وثائق الشحن والتصديق القنصلي، مع خيارات شحن EXW, FOB (موانئ الإسكندرية / بورسعيد), CFR, CIF إلى أي ميناء وصول حول العالم.'
                    : 'Our international trade department manages end-to-end documentation, embassy attestations, and shipping under standard INCOTERMS (EXW, FOB Alexandria/Port Said, CFR, CIF) directly to your destination port.'}
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    to="/contact?type=export"
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
                    <span>{isAr ? 'بدء طلب استفسار تصدير ↗' : 'Start Export Inquiry ↗'}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div style={{ background: '#1E293B', borderRadius: '20px', border: '1px solid #334155', padding: '2rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '16px' }}>
                  {isAr ? 'المعايير والوثائق المعتمدة للتصدير:' : 'Certified Export Documentation Standards:'}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {complianceStandards.map((std, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={17} style={{ color: '#00A84F', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#E2E8F0', lineHeight: 1.5 }}>{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ExportsPage;
