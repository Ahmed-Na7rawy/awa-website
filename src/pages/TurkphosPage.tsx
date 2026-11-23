import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  FlaskConical, 
  Factory, 
  Award, 
  ChevronRight,
  Globe2,
  FileText,
  Mail,
  Sliders
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const TurkphosPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [activeTab, setActiveTab] = useState<'cheese' | 'meat' | 'bakery'>('cheese');

  const products = {
    cheese: [
      {
        name: isAr ? 'سلسلة TP-MELT للجبن القالب والمطبوخ' : 'TP-MELT Series (Block & Pizza Cheese)',
        code: 'TP-MELT 400 / 550',
        app: isAr ? 'الجبن المطبوخ القوالب، جبن البيتزا النباتي، الجبن القابل للبشر' : 'Processed block cheese, analogue pizza blocks, sliceable loafs',
        benefits: isAr 
          ? ['تحكم دقيق في درجة الانصهار والمرونة', 'منع انفصال الدهون أثناء التسخين', 'قابلية فائقة للبشر والتقطيع بدون تفتت']
          : ['Controlled melt flow and stretch elasticity', 'Prevents oil separation under high baking heat', 'Superior shreddability and slice integrity without crumbling']
      },
      {
        name: isAr ? 'سلسلة TP-SPREAD للأجبان القابلة للدهن' : 'TP-SPREAD Series (Spreadable & Jar Cheese)',
        code: 'TP-SPREAD 210 / 320',
        app: isAr ? 'جبن الكاسات، جبن المثلثات، الجبن القابل للفرد' : 'Jar cheese, triangle portions, creamy cream cheese spreads',
        benefits: isAr
          ? ['قوام حريري ولمعان جذاب دائم', 'ثبات المستحلب ومنع النضح المائي (Syneresis)', 'مذاق متوازن وسلاسة توزيع على درجات الحرارة المنخفضة']
          : ['Silky gloss and smooth spreadable texture', 'Complete emulsion stability preventing syneresis', 'Clean flavor release and cold-temperature spreadability']
      },
      {
        name: isAr ? 'سلسلة TP-SLICE للشرائح الفردية IWS' : 'TP-SLICE Series (Individually Wrapped Slices)',
        code: 'TP-SLICE 610 / 680',
        app: isAr ? 'شرائح البرجر IWS، شرائح الجبن المطبوخ للساندوتشات' : 'Burger slice-on-slice (SOS), individually wrapped slices (IWS)',
        benefits: isAr
          ? ['عدم الالتصاق بين الشرائح أو بالغلاف', 'مرونة عالية وسهولة تقشير بدون تمزق', 'انصهار متجانس وسريع فوق شطائر البرجر الساخنة']
          : ['Non-stick release from wrapping film and adjacent slices', 'High tensile elasticity and tear resistance', 'Uniform fast melt over hot burger patties']
      }
    ],
    meat: [
      {
        name: isAr ? 'فوسفات TP-BIND للنقانق والمصنعات المستحلبة' : 'TP-BIND Series (Emulsified Meat & Sausages)',
        code: 'TP-BIND 100 / 120',
        app: isAr ? 'الهوت دوج، اللانشون، المورتديلا، السوسيس' : 'Hot dogs, mortadella, frankfurters, bologna emulsions',
        benefits: isAr
          ? ['استحلاب فائق للدهن والماء داخل شبكة البروتين', 'قوام متماسك وعضة مقرمشة (Snap) مثالية', 'تقليل الفواقد أثناء الطهي والتبريد']
          : ['Superior protein activation and fat-water matrix binding', 'Firm bite and crisp snap texture', 'Significantly reduced purge and cooking loss']
      },
      {
        name: isAr ? 'فوسفات TP-INJECT لحقن الدواجن واللحوم الكاملة' : 'TP-INJECT Series (Poultry & Whole Muscle Brine)',
        code: 'TP-INJECT 80 / 95',
        app: isAr ? 'صدور الدواجن المحقونة، الروست بيف، الشاورما المصنعة' : 'Injected chicken breasts, roast beef, restructured deli meats',
        benefits: isAr
          ? ['ذوبان فائق وسريع في محاليل التمليح الباردة', 'توزيع متجانس دون ترك بقع أو ترسبات', 'زيادة ملحوظة في نسبة الاحتفاظ بالرطوبة والوزن بعد الطهي']
          : ['Instant cold-water solubility in high-salt brines', 'Even deep-muscle diffusion without needle clogging', 'Maximizes moisture retention and cook yield']
      }
    ],
    bakery: [
      {
        name: isAr ? 'بيروفوسفات الصوديوم الحمضي SAPP للخبز' : 'SAPP Pyrophosphate Leavening Series',
        code: 'TP-SAPP 15 / 28 / 40',
        app: isAr ? 'الكيك، البسكويت، التورتيلا، الدونات' : 'Industrial cakes, biscuits, wheat tortillas, cake doughnuts',
        benefits: isAr
          ? ['تحكم دقيق في معدل انطلاق غاز ثاني أكسيد الكربون (ROR)', 'حجم متجانس ومسامية داخلية متناسقة', 'منع الطعم القلوي أو الأثر الطباشيري']
          : ['Strict Rate of Reaction (ROR) control for scheduled baking', 'Uniform crumb aeration and optimal loaf volume', 'No residual astringent or soapy off-notes']
      }
    ]
  };

  return (
    <>
      <SEO
        title={isAr ? 'توركفوس (Turkphos) | أنظمة الفوسفات وأملاح الاستحلاب المتخصصة • مجموعة AWA' : 'Turkphos | Specialized Phosphate & Emulsifying Salt Systems • AWA Group'}
        description={isAr
          ? 'مشروع استراتيجي مشترك يجمع بين تكنولوجيا التصنيع المتقدمة في تركيا ومصر لتوريد أملاح الاستحلاب والفوسفات الوظيفي للأجبان ومصنعات اللحوم.'
          : 'A strategic joint venture uniting advanced synthesis capabilities in Türkiye and Egypt for high-performance emulsifying salts and functional phosphates.'}
        path="/turkphos"
      />

      <div className="turkphos-page" style={{ background: '#FFFFFF' }}>
        {/* HERO SECTION */}
        <section className="page-hero page-hero--visual" style={{ background: '#0B131E' }}>
          <div className="page-hero-media" style={{ opacity: 0.28 }}>
            <img 
              src={v9Assets.v8Assets['cheese-banner'] || v9Assets.v8Assets['rd-lab']} 
              alt="Turkphos Chemical Synthesis & Application Lab" 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '14px', marginBottom: '1.5rem' }}>
              <Link to="/" style={{ color: '#E2E8F0', textDecoration: 'none' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <Link to="/global" style={{ color: '#E2E8F0', textDecoration: 'none' }}>{isAr ? 'الشبكة الدولية' : 'Global Network'}</Link>
              <span>›</span>
              <span style={{ color: '#00A84F', fontWeight: 600 }}>Turkphos</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(0, 168, 79, 0.15)', border: '1px solid rgba(0, 168, 79, 0.35)', padding: '6px 14px', borderRadius: '100px', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00A84F' }} />
              <span style={{ color: '#4ADE80', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {isAr ? 'مشروع مشترك استراتيجي · تركيا / مصر' : 'STRATEGIC JOINT VENTURE · TÜRKİYE / EGYPT'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <div style={{ background: '#FFFFFF', padding: '12px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center' }}>
                <img 
                  src={v9Assets.v8Assets.turkphosLogo} 
                  alt="Turkphos Logo" 
                  style={{ height: '42px', width: 'auto', objectFit: 'contain' }} 
                />
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)', color: '#FFFFFF', fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
                Turkphos
              </h1>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '720px', marginBottom: '2.5rem' }}>
              {isAr
                ? 'مشروع استراتيجي مشترك متخصص في التطوير التكنولوجي وتصنيع أملاح الاستحلاب وأنظمة الفوسفات الوظيفية المتقدمة للأجبان المطبوخة، ومنتجات الألبان، ومصنعات اللحوم والدواجن، يجمع بين قوة التخليق الكيميائي ومعامل التطبيقات الميدانية.'
                : 'A specialized strategic joint venture focused on technical phosphate synthesis and high-performance emulsifying salt formulations for processed cheese, dairy systems, and meat applications.'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="#products" 
                style={{ 
                  background: '#00A84F', 
                  color: '#FFFFFF', 
                  padding: '12px 26px', 
                  borderRadius: '10px', 
                  fontWeight: 700, 
                  fontSize: '15px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  textDecoration: 'none' 
                }}
              >
                <span>{isAr ? 'استعراض مصفوفة المنتجات' : 'Explore Product Matrix'}</span>
                <ChevronRight size={16} />
              </a>
              <Link 
                to="/contact?type=turkphos" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  border: '1px solid rgba(255, 255, 255, 0.25)', 
                  color: '#FFFFFF', 
                  padding: '12px 26px', 
                  borderRadius: '10px', 
                  fontWeight: 700, 
                  fontSize: '15px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  textDecoration: 'none' 
                }}
              >
                <span>{isAr ? 'طلب عينات ودوسيه فني' : 'Request Samples & Technical Dossier'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* PILLARS & STRATEGIC FOUNDATION */}
        <section style={{ padding: '5rem 0', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
              <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {isAr ? 'الركائز الاستراتيجية' : 'STRATEGIC ARCHITECTURE'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: '#0F172A', fontWeight: 800, marginTop: '8px', marginBottom: '16px' }}>
                {isAr ? 'ربط خبرات التخليق الكيميائي بالتطبيق الصناعي' : 'Connecting Chemical Synthesis to Industrial Application'}
              </h2>
              <p style={{ color: '#64748B', fontSize: '16px', lineHeight: 1.7 }}>
                {isAr
                  ? 'تم تأسيس توركفوس في عام 2022 لتعزيز استقلالية وأمن سلاسل الإمداد الإقليمية في الشرق الأوسط وأفريقيا، وتقديم بدائل فوسفاتية فائقة الأداء مطابقة لأعلى المعايير الأوروبية والعالمية.'
                  : 'Established in 2022 to provide regional food processors across Egypt and MENA with resilient, specialized phosphate solutions engineered to match strict European quality specifications.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Factory size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {isAr ? 'تصنيع إقليمي وتوريد مستدام' : 'Dual-Hub Regional Manufacturing'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'منشآت إنتاجية ومستودعات استراتيجية في تركيا ومصر تضمن استمرارية التوريد، وتقليل فترات الشحن، والحماية من تقلبات سلاسل الإمداد العالمية.'
                    : 'Operating manufacturing nodes and strategic buffer stock in Türkiye and Egypt ensure uninterrupted supply, rapid lead times, and foreign-exchange resilience.'}
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <FlaskConical size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {isAr ? 'معامل التطبيقات التجريبية مع AWA' : 'Application Lab Pilot Validation'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'يتم اختبار كل دفعة في خطوط الإنتاج التجريبية التابعة لـ AWA في برج العرب، بما في ذلك طباخات شتيفان (Stephan) ومفارم اللحوم الصناعية قبل الاعتماد.'
                    : 'Formulations are tested under actual factory stress conditions at AWA’s Borg El-Arab pilot plant—including Stephan cookers and bowl cutters—before commercial batch release.'}
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {isAr ? 'شهادات الجودة والحلال المعتمدة' : 'Certified International Compliance'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'عمليات إنتاج خاضعة لشهادات FSSC 22000، وISO 9001، وISO 14001، وشهادة الحلال الصارمة لضمان الامتثال التام مع أسواق الشرق الأوسط والخليج وأفريقيا.'
                    : 'Fully accredited under FSSC 22000, ISO 9001, and recognized Halal certification bodies, supporting multi-jurisdiction compliance across MENA and GCC export markets.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS MATRIX SECTION */}
        <section id="products" style={{ padding: '5rem 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '3rem' }}>
              <div>
                <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {isAr ? 'مصفوفة المنتجات المتخصصة' : 'SPECIALIZED PRODUCT MATRIX'}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: '#0F172A', fontWeight: 800, marginTop: '8px', margin: 0 }}>
                  {isAr ? 'حلول الفوسفات المهندسة للأداء الأمثل' : 'Engineered Phosphate & Salt Formulations'}
                </h2>
              </div>

              {/* TABS SWITCHER */}
              <div style={{ display: 'flex', gap: '8px', background: '#F1F5F9', padding: '4px', borderRadius: '12px' }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('cheese')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeTab === 'cheese' ? '#0F172A' : 'transparent',
                    color: activeTab === 'cheese' ? '#FFFFFF' : '#64748B',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isAr ? 'الجبن والألبان' : 'Cheese & Dairy'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('meat')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeTab === 'meat' ? '#0F172A' : 'transparent',
                    color: activeTab === 'meat' ? '#FFFFFF' : '#64748B',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isAr ? 'اللحوم والدواجن' : 'Meat & Poultry'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('bakery')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeTab === 'bakery' ? '#0F172A' : 'transparent',
                    color: activeTab === 'bakery' ? '#FFFFFF' : '#64748B',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {isAr ? 'المخبوزات والتخمير' : 'Bakery Leavening'}
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
              {products[activeTab].map((p, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    border: '1px solid #E2E8F0', 
                    borderRadius: '16px', 
                    padding: '28px', 
                    background: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#00A84F', background: 'rgba(0, 168, 79, 0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                        {p.code}
                      </span>
                      <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>TURKPHOS™</span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '16px', lineHeight: 1.5 }}>
                      <strong>{isAr ? 'التطبيق المستهدف: ' : 'Target Application: '}</strong>{p.app}
                    </p>

                    <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '20px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>
                        {isAr ? 'الفوائد الوظيفية الرئيسية:' : 'Key Functional Advantages:'}
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {p.benefits.map((b, bIdx) => (
                          <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155', lineHeight: 1.4 }}>
                            <CheckCircle2 size={15} style={{ color: '#00A84F', flexShrink: 0, marginTop: '2px' }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link 
                    to={`/contact?type=sample&product=${encodeURIComponent(p.name)}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      color: '#0F172A',
                      fontWeight: 700,
                      fontSize: '13px',
                      textDecoration: 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>{isAr ? 'طلب عينة تجريبية لهذا المنتج' : 'Request Trial Sample for this System'}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION INTEGRATION CALLOUT */}
        <section style={{ padding: '4.5rem 0', background: '#0F172A', color: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {isAr ? 'التكامل الفني مع AWA GROUP' : 'TECHNICAL COLLABORATION WITH AWA GROUP'}
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '10px', marginBottom: '18px', lineHeight: 1.2 }}>
                {isAr ? 'أكثر من مجرد توريد أملاح؛ نحن نصمم وصفتك المخصصة.' : 'More Than Chemical Supply: Custom Formulation Engineering'}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                {isAr
                  ? 'يعمل كيميائيو توركفوس جنباً إلى جنب مع خبراء تصنيع الأغذية في AWA لتحليل نوع الجبن الخام، ونسبة الكازين، ومحددات أجهزة الطهي لديك لضبط نسبة الفوسفات الحمضية والقاعدية بدقة متناهية.'
                  : 'Turkphos synthesis chemists work alongside AWA food technologists to calibrate buffering capacity, pH, and calcium sequestration to your exact raw milk casein profile, cooking speed, and target shelf life.'}
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ display: 'block', fontSize: '28px', fontWeight: 800, color: '#00A84F' }}>100%</span>
                  <span style={{ fontSize: '13px', color: '#94A3B8' }}>{isAr ? 'مطابقة معملية' : 'Pilot Batch Validation'}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '28px', fontWeight: 800, color: '#00A84F' }}>48h</span>
                  <span style={{ fontSize: '13px', color: '#94A3B8' }}>{isAr ? 'استجابة فنية سريعة' : 'Technical Support SLA'}</span>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '28px', fontWeight: 800, color: '#00A84F' }}>MENA</span>
                  <span style={{ fontSize: '13px', color: '#94A3B8' }}>{isAr ? 'تغطية إقليمية شاملة' : 'Regional Warehouse Coverage'}</span>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '36px', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>
                {isAr ? 'ابدأ مشروعك الفوسفاتي معنا اليوم' : 'Request a Formulation Consultation'}
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                {isAr
                  ? 'هل تواجه مشكلة انفصال دهن في الجبن أو فاقد طهي في مصنعات اللحوم؟ تواصل مع استشاري تطبيقات توركفوس وفريق AWA الفني.'
                  : 'Facing emulsion separation in cheese or high cooking drip in poultry? Speak with a Turkphos technical specialist and receive customized trial formulations.'}
              </p>
              <Link
                to="/contact?type=turkphos"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#00A84F',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none'
                }}
              >
                <span>{isAr ? 'تواصل مع فريق توركفوس الفني ↗' : 'Contact Turkphos Technical Team ↗'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
