import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Cpu, Users, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export const SustainabilityPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const pillars = [
    {
      kicker: isAr ? 'المصادر المسؤولة' : 'RESPONSIBLE SOURCING',
      title: isAr ? 'توريد مسؤول للمكونات' : 'Responsible ingredient sourcing',
      desc: isAr
        ? 'تعزيز تقييم الموردين، ومتطلبات الامتثال المعمول بها، والشفافية في سلاسل التوريد لدعم علاقات توريد موثوقة واستمرارية الإمداد.'
        : 'Strengthening supplier evaluation, applicable compliance requirements and sourcing transparency to support dependable ingredient relationships and continuity of supply.',
      icon: Leaf,
    },
    {
      kicker: isAr ? 'كفاءة الموارد' : 'RESOURCE EFFICIENCY',
      title: isAr ? 'الاستخدام الكفء للموارد' : 'Efficient use of resources',
      desc: isAr
        ? 'مراقبة استهلاك الطاقة والمياه والمواد في أنشطة التصنيع، وتحديد فرص الحد من الهدر وتحسين كفاءة العمليات الصناعية.'
        : 'Monitoring energy, water and materials in manufacturing activities, identifying opportunities to reduce waste and improve process efficiency.',
      icon: Cpu,
    },
    {
      kicker: isAr ? 'الابتكار المسؤول' : 'RESPONSIBLE INNOVATION',
      title: isAr ? 'كفاءة تركيبات الأغذية' : 'Food formulation efficiency',
      desc: isAr
        ? 'تطبيق خبرات البحث والتطوير لاستكشاف الاستخدام الأمثل للمكونات، وأداء العمليات المحسّن، والحلول العملية مع مراعاة الموارد.'
        : 'Applying R&D expertise to explore efficient ingredient usage, optimized process performance and practical solutions with responsible resource considerations.',
      icon: ShieldCheck,
    },
    {
      kicker: isAr ? 'الأفراد والحوكمة' : 'PEOPLE & GOVERNANCE',
      title: isAr ? 'الأفراد والسلامة والمساءلة' : 'People, safety and accountability',
      desc: isAr
        ? 'دعم السلامة في مكان العمل، وتطوير الموظفين، واتخاذ القرارات المسؤولة من خلال إجراءات محددة وبرامج التحسين المستمر.'
        : 'Supporting workplace safety, employee development and responsible decision-making through defined processes and continuous improvement.',
      icon: Users,
    },
  ];

  return (
    <>
      <SEO
        title={isAr ? 'الاستدامة | مجموعة AWA' : 'Sustainability | AWA Group'}
        description={
          isAr
            ? 'تتبع مجموعة AWA نهج الاستدامة من خلال المصادر المسؤولة، وكفاءة الموارد، والابتكار، والسلامة.'
            : 'AWA Group approaches sustainability through responsible sourcing, resource efficiency, product innovation and a commitment to safe operations.'
        }
      />

      <div className="v9-page">
        {/* HERO */}
        <section className="v9-hero">
          <div className="v9-hero-inner">
            <span className="v9-hero-badge">
              {isAr ? 'عن AWA / الاستدامة' : 'ABOUT / SUSTAINABILITY'}
            </span>
            <h1 className="v9-hero-title">
              {isAr ? 'نمو مسؤول. ' : 'Responsible Growth. '}
              <em className="italic">{isAr ? 'أثر دائم.' : 'Lasting Impact.'}</em>
            </h1>
            <p className="v9-hero-subtitle">
              {isAr
                ? 'تتبع مجموعة AWA نهج الاستدامة عبر التوريد المسؤول وكفاءة الموارد والابتكار التكنولوجي والالتزام بعمليات آمنة وخاضعة للمساءلة.'
                : 'AWA Group approaches sustainability through responsible sourcing, resource efficiency, product innovation and a commitment to safe, accountable operations.'}
            </p>
          </div>
        </section>

        {/* APPROACH INTRO */}
        <section className="v9-section">
          <div className="v9-wrap v9-intro-grid">
            <div>
              <span className="v9-kicker">{isAr ? 'نهجنا' : 'OUR APPROACH'}</span>
              <h2 className="v9-h2">
                {isAr ? 'المسؤولية متكاملة مع ' : 'Responsibility integrated with '}
                <span className="accent">{isAr ? 'طريقة عملنا اليومية.' : 'how we operate.'}</span>
              </h2>
            </div>
            <div>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4">
                {isAr
                  ? 'نؤمن بأن القيمة طويلة الأجل تُبنى من خلال قرارات مسؤولة عبر أعمالنا وسلسلة القيمة بأكملها. تشمل أولوياتنا تعزيز تقييم الموردين، وتحسين كفاءة استخدام الموارد، واستكشاف خيارات التركيبات المسؤولة، وتوفير بيئات عمل آمنة.'
                  : 'We believe long-term value is created through responsible decisions across our business and value chain. Our priorities include strengthening supplier evaluation, improving the efficiency of resource use, exploring responsible formulation options and supporting safe working environments.'}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {isAr
                  ? 'توجه هذه الأولويات التحسين المستمر والتقارير المستقبلية. يتم نشر إنجازات الأداء المحددة فقط عند دعمها بأدلة داخلية موثوقة وحدود قياس دقيقة.'
                  : 'These priorities guide continuous improvement and future reporting. Specific performance achievements are published only where supported by reliable internal evidence and appropriate measurement boundaries.'}
              </p>
            </div>
          </div>
        </section>

        {/* FOUR PILLARS */}
        <section className="v9-section tint">
          <div className="v9-wrap">
            <div className="v9-heading text-center max-w-3xl mx-auto mb-12">
              <span className="v9-kicker">{isAr ? 'أربعة مجالات للمسؤولية' : 'FOUR AREAS OF RESPONSIBILITY'}</span>
              <h2 className="v9-h2">
                {isAr ? 'أولويات عملية. ' : 'Practical priorities. '}
                <span className="accent">{isAr ? 'التزام طويل الأمد.' : 'Long-term commitment.'}</span>
              </h2>
              <p className="v9-p">
                {isAr
                  ? 'يركز اتجاه الاستدامة لدينا على الأنشطة المرتبطة مباشرة بمصادر المكونات وتطوير التركيبات وتصنيع الأغذية.'
                  : 'Our sustainability direction is focused on activities directly connected to ingredient sourcing, formulation development and food manufacturing.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase mb-2 block">
                      {p.kicker}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
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
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
