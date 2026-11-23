import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, ExternalLink, ArrowRight, ShieldCheck, Handshake } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { principals, jointVentures, v9Assets } from '../data/v9Data';

export const GlobalPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <SEO
        title={isAr ? 'الشبكة العالمية والمشاريع المشتركة | مجموعة AWA' : 'Global Network & Joint Ventures | AWA Group'}
        description={
          isAr
            ? 'توسع المشاريع المشتركة والشركاء العالميون وصول AWA إلى تقنيات الأغذية المتقدمة والمكونات الوظيفية.'
            : 'Strategic joint ventures (Turkphos, Ingreva) and global principal network extending AWA’s access to specialist food technologies.'
        }
      />

      <div className="v9-page" style={{ background: '#FFFFFF' }}>
        {/* HERO */}
        <section className="page-hero page-hero--visual">
          <div className="page-hero-media">
            <img 
              src={v9Assets.v8Assets['sourcing-port']} 
              alt="Global Principals & Joint Ventures" 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content">
            <div className="breadcrumb">
              <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <span>{isAr ? 'الشبكة الدولية' : 'Global Network'}</span>
            </div>
            <div className="kicker on-dark">
              {isAr ? 'مجموعة AWA / الشبكة الدولية' : 'AWA GROUP / INTERNATIONAL'}
            </div>
            <h1>
              {isAr ? 'خبرة عالمية. ' : 'Global expertise. '}
              <em className="italic">{isAr ? 'طموح مشترك.' : 'Shared ambition.'}</em>
            </h1>
            <p>
              {isAr
                ? 'توسع المشاريع المشتركة الدولية وعلاقات التوكيلات المعتمدة وصول مجموعة AWA إلى تكنولوجيات الأغذية المتخصصة والمعرفة التقنية وفرص التطوير المشترك.'
                : 'International joint ventures and established principal relationships extend AWA’s access to specialist food technologies, technical knowledge and collaborative development opportunities.'}
            </p>
          </div>
        </section>

        {/* STRATEGIC JOINT VENTURES */}
        <section className="v9-section scroll-margin" id="joint-ventures">
          <div className="v9-wrap">
            <div className="v9-heading text-center max-w-3xl mx-auto mb-12">
              <span className="v9-kicker">{isAr ? 'المشاريع المشتركة الاستراتيجية' : 'STRATEGIC JOINT VENTURES'}</span>
              <h2 className="v9-h2">
                {isAr ? 'تعاون متخصص. ' : 'Specialized collaboration. '}
                <em className="italic">{isAr ? 'قدرة ممتدة.' : 'Long-term capability.'}</em>
              </h2>
              <p className="v9-p">
                {isAr
                  ? 'توركفوس وإنجريفا هما المشروعان المشتركان الاستراتيجيان لـ AWA، مع تخصصات تقنية متميزة وهويات مؤسسية مستقلة.'
                  : 'Turkphos and Ingreva are AWA’s strategic joint ventures, with separate technical specializations and distinct corporate identities.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {jointVentures.map((j) => (
                <article
                  key={j.name}
                  className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-20 flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl mb-6 border border-slate-100 dark:border-slate-800">
                      <img
                        src={j.name === 'Turkphos' ? v9Assets.v8Assets.turkphosLogo : v9Assets.v8Assets.ingrevaLogo}
                        alt={`${j.name} logo`}
                        className="max-h-12 max-w-full object-contain"
                        loading="eager"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                      <span>{isAr ? `مشروع مشترك · ${j.region}` : `JOINT VENTURE · ${j.region}`}</span>
                      <span>↗</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-1">
                      {j.name}
                    </h3>
                    <b className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-4">
                      {j.category}
                    </b>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {j.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700 flex-wrap gap-3">
                    <Link
                      to={j.name === 'Turkphos' ? '/turkphos' : '/ingreva'}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>{isAr ? `استعراض صفحة ${j.name} ومصفوفة المنتجات` : `Explore ${j.name} Showcase & Specs`}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={j.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    >
                      <span>{isAr ? 'الموقع الرسمي' : 'Official Portal'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL PRINCIPALS */}
        <section className="v9-section tint scroll-margin" id="principals" style={{ padding: '5rem 0' }}>
          <div className="v9-wrap" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="v9-heading text-center max-w-3xl mx-auto mb-12">
              <span className="v9-kicker">{isAr ? 'شبكة التوكيلات العالمية' : 'GLOBAL PRINCIPAL NETWORK'}</span>
              <h2 className="v9-h2">
                {isAr ? 'الوصول إلى خبرات ' : 'Access to specialist '}
                <span className="accent">{isAr ? 'المكونات المتقدمة.' : 'ingredient expertise.'}</span>
              </h2>
              <p className="v9-p">
                {isAr
                  ? 'تعمل AWA كوكيل حصري وشريك تكنولوجي لكبرى شركات تصنيع المكونات العالمية (هولندا، ألمانيا، إيطاليا، التشيك، بولندا، تركيا، الصين، الهند) لتوريد أنظمة وظيفية متطورة.'
                  : 'AWA acts as an exclusive agent and technology partner for premier food ingredient manufacturers across Europe and Asia, supplying specialized systems for diverse applications.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-12">
              {principals.map((p) => {
                const logoSrc = p.logo ? (v9Assets.principalLogos as any)[p.logo] : null;
                return (
                  <div
                    key={p.name}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-16 flex items-center justify-center p-2 bg-slate-50 dark:bg-slate-900 rounded-xl mb-4 border border-slate-100 dark:border-slate-800">
                        {logoSrc ? (
                          <img
                            src={logoSrc}
                            alt={`${p.name} logo`}
                            className="max-h-10 max-w-[140px] object-contain transition-transform group-hover:scale-105"
                          />
                        ) : (
                          <div className="text-center">
                            <span className="block text-sm font-bold text-slate-800 dark:text-slate-200 uppercase">
                              {p.name}
                            </span>
                            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">{isAr ? 'شريك معتمد' : 'Authorized Partner'}</span>
                          </div>
                        )}
                      </div>
                      <small className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        {p.location}
                      </small>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {p.category}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                      <Link
                        to="/global/principals"
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <span>{isAr ? 'المواصفات الفنية' : 'Technical Specs'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                      >
                        <span>{isAr ? 'الموقع' : 'Portal'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-sm text-slate-700 dark:text-slate-300 max-w-4xl mx-auto mb-8 text-center leading-relaxed">
              <strong>{isAr ? 'القيمة المضافة لـ AWA: ' : 'Our Value Extends Beyond Supply: '}</strong>
              {isAr
                ? 'لا تقتصر قيمتنا على التمثيل التجاري، بل يقيم فريقنا التقني الوظائف الحيوية للمكونات، ومطابقة المواصفات، والجدوى الاقتصادية، وضمان استمرارية التوريد والمخزون المحلي لتطبيقات العملاء.'
                : 'Our value extends beyond supplier representation: our team evaluates ingredient functionality, technical specifications, sourcing options, commercial feasibility and continuity of supply for customer applications.'}
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/global/principals"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <span>{isAr ? 'استعراض الدليل الشامل للتوكيلات والمواصفات' : 'Explore Full Principals Showcase & Tech Specs'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/capabilities/sourcing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-colors"
              >
                <span>{isAr ? 'استكشف التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* INTERNATIONAL BUSINESS & EXPORTS */}
        <section className="v9-section scroll-margin" id="exports" style={{ padding: '5rem 0', background: '#FFFFFF' }}>
          <div className="v9-wrap" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
              <div>
                <span className="v9-kicker">{isAr ? 'الأعمال الدولية والتصدير' : 'INTERNATIONAL BUSINESS & EXPORTS'}</span>
                <h2 className="v9-h2">
                  {isAr ? 'ربط الخبرات ' : 'Connecting expertise '}
                  <span className="accent">{isAr ? 'عبر 20+ سوقاً عالمياً.' : 'across 20+ global markets.'}</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                  {isAr
                    ? 'انطلاقاً من مجمع مصانعنا في مدينة برج العرب الجديدة وبالقرب من موانئ الإسكندرية وبورسعيد على البحر المتوسط، تصدر AWA حلول الصناعات الغذائية والمكونات الوظيفية إلى أكثر من 20 دولة في الخليج وإفريقيا وأوروبا، مستفيدة من إعفاءات اتفاقيات التجارة الحرة GAFTA وCOMESA بنسبة جمارك 0%.'
                    : 'From our manufacturing hub in New Borg El-Arab near Alexandria and Port Said Mediterranean ports, AWA Group exports advanced food systems to over 20 countries across the GCC, MENA, Africa and Europe, backed by 0% duty trade agreements (GAFTA & COMESA).'}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['Saudi Arabia', 'UAE', 'Kuwait', 'Jordan', 'Iraq', 'Libya', 'Sudan', 'Kenya', 'Algeria', 'Tunisia'].map((c, i) => (
                    <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-md">
                      {c}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link
                    to="/global/exports"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-emerald-600 hover:text-white transition-colors shadow-sm"
                  >
                    <span>{isAr ? 'استكشف بوابة التصدير والتجارة الدولية ↗' : 'Explore Full Export & International Trade Portal ↗'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/contact?type=export"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-sm transition-colors"
                  >
                    <span>{isAr ? 'طلب استفسار تصدير' : 'Direct Export Inquiry'}</span>
                  </Link>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                  {isAr ? 'مزايا التصدير مع مجموعة AWA:' : 'Export Advantages with AWA Group:'}
                </h4>
                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>{isAr ? 'إعفاء جمركي كامل 0%:' : '0% Customs Duty:'}</strong> {isAr ? 'بموجب اتفاقية التجارة الحرة العربية الكبرى (GAFTA) والكوميسا (COMESA).' : 'Under GAFTA (Arab Free Trade) and COMESA agreements.'}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>{isAr ? 'شهادات اعتماد دولية:' : 'International Accreditations:'}</strong> FSSC 22000, ISO 9001/14001/45001, Halal Certified, NFSA White List, US FDA Registered.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>{isAr ? 'شروط شحن مرنة:' : 'Flexible INCOTERMS:'}</strong> EXW, FOB Alexandria/Port Said, CFR, CIF in 20ft & 40ft FCL or consolidated LCL shipments.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>{isAr ? 'وثائق تصدير كاملة:' : 'End-to-End Documentation:'}</strong> Batch CoA, Phytosanitary Certificates, Halal, EUR.1 & Arab Origin certificates.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA (Exact V9 Content) */}
        <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5.5rem 0', color: '#FFFFFF' }}>
          <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2.5rem' }}>
            <div>
              <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
              </div>
              <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 800 }}>
                {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
                {isAr ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.' : 'Tell us about your application or project and connect with the right team.'}
              </p>
            </div>
            <Link 
              to="/contact?type=technical" 
              className="btn" 
              style={{ 
                background: '#FFFFFF', 
                color: 'var(--navy)', 
                fontWeight: 800, 
                padding: '1rem 2rem', 
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              <span>{isAr ? 'ناقش مشروعك ↗' : 'Discuss your project ↗'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
