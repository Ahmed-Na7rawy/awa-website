import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Leaf, 
  Globe2, 
  Award, 
  ChevronRight,
  Sparkles,
  Building2,
  FileCheck2
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const IngrevaPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [activeArea, setActiveArea] = useState<'texture' | 'clean' | 'plant'>('texture');

  const capabilities = {
    texture: [
      {
        title: isAr ? 'أنظمة التثبيت الهيدروكولويدية المتقدمة' : 'Advanced Hydrocolloid Stabilizing Systems',
        desc: isAr 
          ? 'أنظمة مركبة تجمع بين الصموغ الوظيفية (زانثان، جوار، كاراجينان) والبكتين لتوفير قوام متجانس ومقاوم للإجهاد الميكانيكي والحراري.'
          : 'Synergistic hydrocolloid systems combining functional gums, carrageenan, and citrus pectin for sheer-thinning and high thermal stability.'
      },
      {
        title: isAr ? 'تحسين القوام ومقاومة الانفصال للمشروبات' : 'Beverage Emulsion & Cloud Systems',
        desc: isAr
          ? 'تثبيت العصائر الطبيعية ومشروبات الحليب المعقم (UHT) ومخفوقات البروتين، ومنع تكون حلقة الترسيب الدهنية في الأعناق.'
          : 'Stabilizing UHT dairy drinks, flavored plant milks, and cloud juices, preventing sedimentation and oil-ring formation.'
      }
    ],
    clean: [
      {
        title: isAr ? 'بدائل النشا المعدل (Clean Label Replacers)' : 'Modified Starch Replacement Blends',
        desc: isAr
          ? 'حلول قائمة على الألياف الطبيعية والدقيق الوظيفي المعالج حرارياً لتحقيق لزوجة وثبات عاليين دون الحاجة لوسم النشا المعدل.'
          : 'Native functional flours and citrus fiber matrix providing rich viscosity and freeze-thaw stability without chemical modification.'
      },
      {
        title: isAr ? 'مستحلبات طبيعية للصلصات والمخبوزات' : 'Natural Plant-Based Emulsifiers',
        desc: isAr
          ? 'أنظمة استحلاب طبيعية بديلة للبوليسوربات والأحاديات الاصطناعية، مثالية للمايونيز والصلصات الباردة والساخنة.'
          : 'Sunflower and soy lecithin fractions paired with plant proteins replacing synthetic mono/diglycerides in dressings and sauces.'
      }
    ],
    plant: [
      {
        title: isAr ? 'أنظمة بناء القوام للبروتينات النباتية' : 'Plant-Based Protein Texturizing Matrices',
        desc: isAr
          ? 'أنظمة مخصصة للبدائل النباتية للحوم والألبان تمنح ملمساً ليفياً وعضة شبيهة بالبروتين الحيواني مع حجب النكهات الجانبية.'
          : 'Targeted systems for meat & dairy analogues, engineering fibrous chew, moisture retention, and off-note masking.'
      },
      {
        title: isAr ? 'أنظمة الزبادي والحلويات النباتية المخمرة' : 'Fermented Plant-Based Yogurts & Desserts',
        desc: isAr
          ? 'تطوير قوام متماسك وكريمي للأجبان والزبادي القائم على الشوفان واللوز والصويا مع تحكم دقيق في قوام الهلام.'
          : 'Delivering creamy spoonability and syneresis control for oat, almond, and coconut fermented bases.'
      }
    ]
  };

  return (
    <>
      <SEO
        title={isAr ? 'إنجريفا (Ingreva) | أنظمة الأغذية الوظيفية الصناعية • مجموعة AWA' : 'Ingreva | Industrial Functional Food Systems • AWA Group'}
        description={isAr
          ? 'مشروع استراتيجي مشترك في إستونيا يربط بين تكنولوجيا الأغذية الأوروبية المتقدمة وقدرات التصنيع والتوزيع لـ AWA.'
          : 'A strategic joint venture in Estonia connecting advanced European functional food engineering with AWA’s regional manufacturing and distribution scale.'}
        path="/ingreva"
      />

      <div className="ingreva-page" style={{ background: '#FFFFFF' }}>
        {/* HERO SECTION */}
        <section className="page-hero page-hero--visual" style={{ background: '#0B131E' }}>
          <div className="page-hero-media" style={{ opacity: 0.28 }}>
            <img 
              src={v9Assets.v8Assets['rd-wide'] || v9Assets.v8Assets['rd-lab']} 
              alt="Ingreva European Food Systems" 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '14px', marginBottom: '1.5rem' }}>
              <Link to="/" style={{ color: '#E2E8F0', textDecoration: 'none' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <Link to="/global" style={{ color: '#E2E8F0', textDecoration: 'none' }}>{isAr ? 'الشبكة الدولية' : 'Global Network'}</Link>
              <span>›</span>
              <span style={{ color: '#00A84F', fontWeight: 600 }}>Ingreva</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(0, 168, 79, 0.15)', border: '1px solid rgba(0, 168, 79, 0.35)', padding: '6px 14px', borderRadius: '100px', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00A84F' }} />
              <span style={{ color: '#4ADE80', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {isAr ? 'مشروع مشترك استراتيجي · إستونيا / الاتحاد الأوروبي' : 'STRATEGIC JOINT VENTURE · ESTONIA / EU'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <div style={{ background: '#FFFFFF', padding: '12px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center' }}>
                <img 
                  src={v9Assets.v8Assets.ingrevaLogo} 
                  alt="Ingreva Logo" 
                  style={{ height: '42px', width: 'auto', objectFit: 'contain' }} 
                />
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)', color: '#FFFFFF', fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
                Ingreva
              </h1>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '720px', marginBottom: '2.5rem' }}>
              {isAr
                ? 'مشروع استراتيجي مشترك مقره إستونيا (تأسس عام 2025) يركز على أنظمة الأغذية الوظيفية الصناعية وتطوير المكونات المتخصصة للتطبيقات الدقيقة، مدعوماً بالخبرات الأوروبية في تركيبات الأغذية المستدامة والنظيفة.'
                : 'A strategic joint venture based in Estonia (established in 2025) dedicated to industrial functional food systems, clean-label formulation engineering, and application-focused ingredient performance.'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="#capabilities" 
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
                <span>{isAr ? 'استعراض التقنيات والأنظمة' : 'Explore Systems & Tech'}</span>
                <ChevronRight size={16} />
              </a>
              <Link 
                to="/contact?type=ingreva" 
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
                <span>{isAr ? 'بدء شراكة تقنية' : 'Initiate Technical Partnership'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* STRATEGIC MISSION */}
        <section style={{ padding: '5rem 0', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
              <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {isAr ? 'الرؤية والتعاون الأوروبي' : 'EUROPEAN FORMULATION ENGINEERING'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: '#0F172A', fontWeight: 800, marginTop: '8px', marginBottom: '16px' }}>
                {isAr ? 'دمج الابتكار الأوروبي بقدرات التصنيع والتوزيع لـ AWA' : 'Bridging European Innovation with Regional Scale'}
              </h2>
              <p style={{ color: '#64748B', fontSize: '16px', lineHeight: 1.7 }}>
                {isAr
                  ? 'تمثل إنجريفا ذراع التعاون التقني الدولي لمجموعة AWA لتطوير أنظمة وظيفية مخصصة للعملاء الصناعيين الذين يبحثون عن أداء متفوق، وتقليل تكلفة الإنتاج، ومطابقة التوجهات العالمية نحو الملصق النظيف (Clean Label).'
                  : 'Ingreva serves as AWA’s international technical collaboration arm, developing customized functional systems for manufacturers demanding superior stability, cost optimization, and clean-label compliance.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Globe2 size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {isAr ? 'قاعدة إستونية أوروبية' : 'EU / Nordic Innovation Hub'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'الاستفادة من مراكز الأبحاث الاسكندنافية والأوروبية في تكنولوجيا النشا النظيف والبروتينات البديلة والهيدروكولويد المتقدم.'
                    : 'Leveraging Baltic and European R&D clusters in clean-label starch alternatives, plant proteins, and advanced functional fibers.'}
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Layers size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {isAr ? 'تطبيقات مخصصة لخطوط الإنتاج' : 'Customized System Integration'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'لا نقدم خلطات جاهزة نمطية، بل نعدل اللزوجة ودرجة التجلط وسرعة الذوبان لتتوافق حرفياً مع مواصفات أجهزة ومعدات المصنع الخاص بك.'
                    : 'We formulate tailored pre-mixes that match your plant’s shear rates, thermal profiles, and dissolution equipment perfectly.'}
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
                  {isAr ? 'الامتثال الصارم لمعايير الغذاء' : 'Strict Regulatory Assurance'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'جميع الحلول مطابقة للوائح الهيئة القومية لسلامة الغذاء (NFSA) والاتحاد الأوروبي ومواصفات الدستور الغذائي Codex Alimentarius.'
                    : 'Full alignment with EU food ingredient regulations, NFSA standards, and Codex Alimentarius guidelines for worldwide exportability.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES & SYSTEMS */}
        <section id="capabilities" style={{ padding: '5rem 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '3rem' }}>
              <div>
                <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {isAr ? 'مجالات التركيز الوظيفية' : 'FUNCTIONAL FOCUS AREAS'}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: '#0F172A', fontWeight: 800, marginTop: '8px', margin: 0 }}>
                  {isAr ? 'أنظمة الأغذية الوظيفية المتطورة' : 'Advanced Industrial Food Systems'}
                </h2>
              </div>

              <div style={{ display: 'flex', gap: '8px', background: '#F1F5F9', padding: '4px', borderRadius: '12px' }}>
                <button
                  type="button"
                  onClick={() => setActiveArea('texture')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeArea === 'texture' ? '#0F172A' : 'transparent',
                    color: activeArea === 'texture' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  {isAr ? 'أنظمة القوام والثبات' : 'Texture & Stability'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArea('clean')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeArea === 'clean' ? '#0F172A' : 'transparent',
                    color: activeArea === 'clean' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  {isAr ? 'الملصق النظيف' : 'Clean Label'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveArea('plant')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeArea === 'plant' ? '#0F172A' : 'transparent',
                    color: activeArea === 'plant' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  {isAr ? 'البدائل النباتية' : 'Plant-Based Systems'}
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
              {capabilities[activeArea].map((item, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    border: '1px solid #E2E8F0', 
                    borderRadius: '16px', 
                    padding: '32px', 
                    background: '#FFFFFF',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Sparkles size={20} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
                    {item.desc}
                  </p>
                  <Link 
                    to="/contact?type=ingreva"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#00A84F',
                      fontWeight: 700,
                      fontSize: '14px',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{isAr ? 'طلب مواصفات فنية ودوسيه' : 'Request Technical Briefing'}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section style={{ padding: '4.5rem 0', background: '#0F172A', color: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div>
              <span style={{ color: '#00A84F', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {isAr ? 'التعاون الصناعي مع INGREVA' : 'INDUSTRIAL COLLABORATION WITH INGREVA'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '10px', marginBottom: '8px' }}>
                {isAr ? 'هل تبحث عن أنظمة تثبيت متطورة لمنتجك؟' : 'Ready to Elevate Your Formulation Performance?'}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'تواصل مع فريق إنجريفا المشترك لتقييم الاحتياجات الفنية وتطوير خلطات مخصصة لمصنعك.'
                  : 'Connect with Ingreva’s formulation team to assess your processing needs and pilot custom ingredient systems.'}
              </p>
            </div>

            <Link
              to="/contact?type=ingreva"
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
              <span>{isAr ? 'بدء استفسار فني ↗' : 'Start Technical Inquiry ↗'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
