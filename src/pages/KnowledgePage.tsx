import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Sparkles, Building2, ArrowRight, Lightbulb, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export const KnowledgePage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const pillars = [
    {
      kicker: isAr ? 'المعرفة التقنية' : 'TECHNICAL KNOWLEDGE',
      title: isAr ? 'تكنولوجيا الأغذية والتطبيقات الصناعية' : 'Food technology & applications',
      desc: isAr
        ? 'تحديات التطبيقات الصناعية، والاتجاهات التقنية، واعتبارات التركيبات ذات الصلة بمصنعي الأغذية والمشروبات.'
        : 'Application challenges, technical trends and formulation considerations relevant to manufacturers.',
      icon: Lightbulb,
      topics: isAr
        ? ['تحسين القوام وثبات المستحلبات', 'تقليل السكر دون التأثير على الطعم', 'أنظمة التمديد في منتجات اللحوم']
        : ['Texture optimization & stability', 'Sugar reduction without mouthfeel loss', 'Yield extension systems for meats'],
    },
    {
      kicker: isAr ? 'قدرات AWA' : 'AWA CAPABILITIES',
      title: isAr ? 'نظرة داخل خبراتنا التشغيلية' : 'Inside our expertise',
      desc: isAr
        ? 'البحث والتطوير، واختبارات التطبيقات التجريبية، وعمليات التصنيع، وقصص التطوير القائمة على أعلى معايير الجودة.'
        : 'R&D, application testing, manufacturing processes and quality-led development stories.',
      icon: Sparkles,
      topics: isAr
        ? ['إمكانيات مصنع النماذج الأولية التجريبي', 'التحكم الدقيق في معايير الجودة FSSC', 'تطوير الخلطات الجافة المخصصة']
        : ['Pilot plant trial capabilities', 'FSSC 22000 quality standards', 'Custom dry blend processing'],
    },
    {
      kicker: isAr ? 'تطور المجموعة' : 'GROUP DEVELOPMENT',
      title: isAr ? 'المحطات البارزة والشراكات' : 'Milestones & partnerships',
      desc: isAr
        ? 'الإعلانات المؤسسية المعتمدة، وشراكات التكنولوجيا الدولية، والإطلاقات والفعاليات الصناعية والمعارض.'
        : 'Approved corporate announcements, technology collaborations, launches and events.',
      icon: Building2,
      topics: isAr
        ? ['المشاريع المشتركة توركفوس وإنجريفا', 'توسعات مجمع برج العرب الصناعي', 'المشاركة في معارض جلفود وأفريقيا للتصنيع']
        : ['Turkphos & Ingreva JV updates', 'Borg El-Arab plant expansion', 'Gulfood & ProPak MENA showcases'],
    },
  ];

  return (
    <>
      <SEO
        title={isAr ? 'منصة المعرفة والأفكار التقنية | مجموعة AWA' : 'Knowledge Hub & Technical Insights | AWA Group'}
        description={
          isAr
            ? 'منصة المعرفة التابعة لمجموعة AWA: رؤى تكنولوجيا الأغذية، وأبحاث التطبيقات، وأخبار المجموعة.'
            : 'AWA Group Knowledge Hub: Food technology insights, formulation best practices, and corporate development.'
        }
      />

      <div className="v9-page">
        {/* HERO */}
        <section className="v9-hero">
          <div className="v9-hero-inner">
            <span className="v9-hero-badge">
              {isAr ? 'منصة المعرفة / التواصل المؤسسي' : 'KNOWLEDGE HUB / TECHNICAL COMMUNICATION'}
            </span>
            <h1 className="v9-hero-title">
              {isAr ? 'أفكار، وتطورات، ' : 'Ideas, developments and '}
              <em className="italic">{isAr ? 'ورؤى صناعية متعمقة.' : 'industry insight.'}</em>
            </h1>
            <p className="v9-hero-subtitle">
              {isAr
                ? 'منصة معرفية مخصصة لجعل إمكانيات مجموعة AWA ملموسة من خلال محتوى تقني ومؤسسي مفيد ومعتمد يخدم قطاع تصنيع الأغذية.'
                : 'A knowledge platform designed to make AWA’s capabilities tangible through useful, approved technical and corporate content.'}
            </p>
          </div>
        </section>

        {/* EDITORIAL STRUCTURE */}
        <section className="v9-section">
          <div className="v9-wrap">
            <div className="v9-heading text-center max-w-3xl mx-auto mb-12">
              <span className="v9-kicker">{isAr ? 'الهيكل التحريري' : 'EDITORIAL STRUCTURE'}</span>
              <h2 className="v9-h2">
                {isAr ? 'رؤى مدعومة ' : 'Insight backed by '}
                <span className="accent">{isAr ? 'بالخبرة العملية.' : 'experience.'}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase mb-2 block">
                        {p.kicker}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {p.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        {isAr ? 'مجالات التركيز:' : 'Key Focus Areas:'}
                      </span>
                      <ul className="space-y-1.5">
                        {p.topics.map((t, tIdx) => (
                          <li key={tIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-6 text-sm text-amber-900 dark:text-amber-300 max-w-4xl mx-auto text-center leading-relaxed">
              <strong>{isAr ? 'ملاحظة تحريرية: ' : 'Editorial Standard: '}</strong>
              {isAr
                ? 'يتم عرض هذه المحاور كنظرة عامة على هيكل المحتوى. تعرض المنصة المباشرة مقالات وأبحاثاً مؤرخة ومعتمدة فقط مع تحديد المسؤول التقني عن كل دراسة.'
                : 'Editorial content shown represents our publication framework. The live hub displays verified, dated content with an identified technical approver and author.'}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="v9-section tint">
          <div className="v9-wrap text-center max-w-2xl mx-auto">
            <h2 className="v9-h2 mb-4">
              {isAr ? 'هل تبحث عن استشارة لتطبيق محدد؟' : 'Need specific formulation insight?'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              {isAr
                ? 'فريق البحث والتطوير في AWA متاح دائماً للإجابة على استفساراتكم التقنية واختبار الحلول في معاملنا التطبيقية.'
                : 'AWA’s application and R&D specialists are ready to discuss your product challenges and benchmark solutions in our pilot laboratories.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact?type=technical"
                className="px-8 py-3.5 rounded-xl font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors inline-flex items-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>{isAr ? 'طلب استشارة تقنية' : 'Request Technical Consultation'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions/catalogue"
                className="px-8 py-3.5 rounded-xl font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-2"
              >
                <span>{isAr ? 'تصفح كتالوج الحلول' : 'Browse Solutions Catalogue'}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
