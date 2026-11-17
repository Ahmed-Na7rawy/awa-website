import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [searchParams] = useSearchParams();

  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    category: '',
    volume: '',
    markets: '',
    stage: '',
    message: '',
    consent: false,
  });

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      setInquiryType(typeParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      title: isAr ? 'المقر الرئيسي — الإسكندرية' : 'Alexandria Headquarters',
      subtitle: isAr ? 'الإدارة العامة والمبيعات' : 'Corporate Management & Sales',
      address: isAr
        ? 'شارع الفردوس، سموحة، الإسكندرية، مصر'
        : 'El-Ferdous St., Smouha, Alexandria, Egypt',
      phone: '+20 3 420 8888',
      email: 'info@awa-group.net',
      hours: isAr ? 'الأحد - الخميس: 9:00 ص - 5:00 م' : 'Sun - Thu: 9:00 AM - 5:00 PM',
    },
    {
      title: isAr ? 'المركز الفني ومعامل R&D — القاهرة' : 'Cairo Technical & Application Center',
      subtitle: isAr ? 'تطوير التركيبات وتطبيقات العملاء' : 'R&D Labs & Customer Formulations',
      address: isAr
        ? 'التجمع الخامس، القاهرة الجديدة، مصر'
        : '5th Settlement, New Cairo, Egypt',
      phone: '+20 2 281 3333',
      email: 'rd@awa-group.net',
      hours: isAr ? 'الأحد - الخميس: 9:00 ص - 5:00 م' : 'Sun - Thu: 9:00 AM - 5:00 PM',
    },
    {
      title: isAr ? 'مجمع برج العرب الصناعي' : 'New Borg El-Arab Manufacturing Complex',
      subtitle: isAr ? 'المصانع والمستودعات المركزية' : 'Production, Blending & Logistics',
      address: isAr
        ? 'المنطقة الصناعية الثالثة، برج العرب الجديدة، الإسكندرية'
        : '3rd Industrial Zone, New Borg El-Arab, Alexandria, Egypt',
      phone: '+20 3 459 2222',
      email: 'operations@awa-group.net',
      hours: isAr ? 'الأحد - الخميس: 8:00 ص - 4:00 م' : 'Sun - Thu: 8:00 AM - 4:00 PM',
    },
  ];

  return (
    <>
      <SEO
        title={isAr ? 'اتصل بنا | مجموعة AWA' : 'Contact Us | AWA Group'}
        description={
          isAr
            ? 'تواصل مع فريق مجموعة AWA لمناقشة حلول الأغذية الصناعية وتطوير المنتجات والمبيعات.'
            : 'Get in touch with AWA Group for industrial food formulations, Food Services, and contract manufacturing.'
        }
      />

      <div className="v9-page">
        {/* HERO */}
        <section className="v9-hero">
          <div className="v9-hero-inner">
            <span className="v9-hero-badge">
              {isAr ? 'تواصل مع AWA / ابدأ محادثة' : 'CONTACT AWA / START A CONVERSATION'}
            </span>
            <h1 className="v9-hero-title">
              {isAr ? 'دعنا نتحدث عن ' : 'Let’s talk about '}
              <em className="italic">{isAr ? 'تحديك القادم.' : 'your next challenge.'}</em>
            </h1>
            <p className="v9-hero-subtitle">
              {isAr
                ? 'ابدأ محادثة مركزة مع AWA حول التركيبات الصناعية، أو خدمات الأغذية الاحترافية، أو التوزيع، أو التعاقدات التصنيعية الاستراتيجية.'
                : 'Start a focused conversation with AWA about industrial formulation, professional Food Services, consumer distribution, international relationships or selected strategic manufacturing collaborations.'}
            </p>
          </div>
        </section>

        {/* MAIN CONTACT LAYOUT */}
        <section className="v9-section">
          <div className="v9-wrap grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* LEFT COLUMN: GUIDELINES & OFFICES */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="v9-kicker">{isAr ? 'الفريق المناسب' : 'THE RIGHT TEAM'}</span>
                <h2 className="v9-h2">
                  {isAr ? 'أفضل الحلول تبدأ ' : 'Better solutions start with '}
                  <span className="accent">{isAr ? 'بملخص أدق.' : 'a better brief.'}</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {isAr
                    ? 'أخبرنا عن منتجك، ونشاطك التجاري، والتطبيق المطلوب، والنتيجة المستهدفة. يقوم الموقع بتوجيه الاستفسارات مباشرة إلى الفريق التقني أو التجاري المتخصص.'
                    : 'Tell us about your product, business, application and desired outcome. Qualified inquiries are directed to the relevant industrial R&D, Food Services, export or consumer teams.'}
                </p>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-sm">
                  <div className="font-semibold text-slate-900 dark:text-white mb-1">
                    {isAr ? 'الموقع الرسمي لمجموعة AWA' : 'Official AWA Group Portal'}
                  </div>
                  <a
                    href="https://www.awa-group.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 dark:text-amber-400 font-mono text-xs hover:underline flex items-center gap-1"
                  >
                    <span>www.awa-group.net</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* LOCATIONS */}
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">
                  {isAr ? 'مواقعنا ومقراتنا التشغيلية' : 'OPERATING LOCATIONS'}
                </h3>
                {offices.map((off, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 shadow-sm"
                  >
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">
                      {off.title}
                    </h4>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-medium block mb-3">
                      {off.subtitle}
                    </span>
                    <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>{off.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <a href={`tel:${off.phone}`} className="hover:text-amber-600 transition-colors font-mono">
                          {off.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <a href={`mailto:${off.email}`} className="hover:text-amber-600 transition-colors font-mono">
                          {off.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span>{off.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE QUALIFICATION FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-lg relative">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-700">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {isAr ? 'نموذج استفسار المشروع' : 'Project Inquiry & Qualification'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isAr ? 'حدد طبيعة طلبك لتوجيهه للفريق المختص' : 'Direct your request to the right technical or sales division'}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full font-semibold">
                    DIRECT ROUTING
                  </span>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {isAr ? 'تم استلام استفسارك بنجاح' : 'Inquiry Successfully Prepared'}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto text-sm mb-6 leading-relaxed">
                      {isAr
                        ? `شكراً لتواصلك يا ${formData.name || 'عزيزنا'}. تم توجيه طلبك المتعلق بـ (${inquiryType || 'الاستفسارات العامة'}) إلى الفريق المتخصص في AWA Group للمتابعة السريعة.`
                        : `Thank you, ${formData.name || 'valued partner'}. Your inquiry regarding "${inquiryType || 'general consultation'}" has been routed to the relevant technical division at AWA Group.`}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          country: '',
                          phone: '',
                          category: '',
                          volume: '',
                          markets: '',
                          stage: '',
                          message: '',
                          consent: false,
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 font-semibold text-sm transition-colors"
                    >
                      {isAr ? 'إرسال استفسار آخر' : 'Submit Another Inquiry'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isAr ? 'اسمك الكريم' : 'Your name'}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          {isAr ? 'البريد الإلكتروني للعمل *' : 'Business Email *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          {isAr ? 'اسم الشركة أو المؤسسة *' : 'Company / Organization *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={isAr ? 'اسم شركتك' : 'Company name'}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          {isAr ? 'الدولة / المنطقة *' : 'Country / Region *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder={isAr ? 'مصر، السعودية، الإمارات...' : 'e.g. Egypt, UAE, Germany'}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {isAr ? 'تصنيف الاستفسار *' : 'Inquiry Category *'}
                      </label>
                      <select
                        required
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all"
                      >
                        <option value="">{isAr ? '-- اختر تصنيف طلبك --' : '-- Select your request category --'}</option>
                        <option value="technical">{isAr ? 'استشارة فنية وتطوير تركيبات صناعية' : 'Industrial technical consultation'}</option>
                        <option value="sample">{isAr ? 'طلب عينة منتج أو نظام مكونات' : 'Request a product sample'}</option>
                        <option value="manufacturing">{isAr ? 'تصنيع تعاقدي استراتيجي / علامة تجارية خاصة' : 'Strategic contract manufacturing / private label'}</option>
                        <option value="foodservices">{isAr ? 'خدمات الأغذية — حسابات وموردين مهنيين' : 'Food Services — professional account / products'}</option>
                        <option value="export">{isAr ? 'تصدير وتوزيع صناعي دولي' : 'Industrial export & distribution'}</option>
                        <option value="distribution">{isAr ? 'توزيع منتجات العلامات الاستهلاكية B2C' : 'Consumer brand distribution'}</option>
                        <option value="partnership">{isAr ? 'شراكة تكنولوجية أو تجارية استراتيجية' : 'Strategic technology / business partnership'}</option>
                        <option value="other">{isAr ? 'استفسار عام آخر' : 'Other inquiry'}</option>
                      </select>
                    </div>

                    {/* DYNAMIC SCREENING FIELDS FOR CONTRACT MANUFACTURING */}
                    {inquiryType === 'manufacturing' && (
                      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase text-amber-700 dark:text-amber-400">
                          <ShieldCheck className="w-4 h-4" />
                          <span>{isAr ? 'بيانات تأهيل التصنيع التعاقدي' : 'STRATEGIC MANUFACTURING SCREENING'}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          {isAr
                            ? 'يرجى مشاركة تفاصيل عامة فقط؛ لا تشارك تركيبات أو أسرار تجارية سرية في هذه المرحلة.'
                            : 'Please share high-level project parameters only; no confidential formulations.'}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              {isAr ? 'فئة المنتج' : 'Product Category'}
                            </label>
                            <input
                              type="text"
                              value={formData.category}
                              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                              placeholder={isAr ? 'مثل: بودرة مشروبات، خلطات مخبوزات' : 'e.g. Powder beverage, bakery blend'}
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              {isAr ? 'الحجم السنوي المتوقع' : 'Indicative Annual Volume'}
                            </label>
                            <input
                              type="text"
                              value={formData.volume}
                              onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                              placeholder={isAr ? 'مثال: بالطن المتري أو عدد الوحدات' : 'e.g. MT / year or units'}
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              {isAr ? 'الأسواق المستهدفة' : 'Target Markets'}
                            </label>
                            <input
                              type="text"
                              value={formData.markets}
                              onChange={(e) => setFormData({ ...formData, markets: e.target.value })}
                              placeholder={isAr ? 'الدول أو المناطق المستهدفة' : 'Target countries / regions'}
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              {isAr ? 'مرحلة التعاون' : 'Collaboration Stage'}
                            </label>
                            <select
                              value={formData.stage}
                              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                              className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs"
                            >
                              <option value="">{isAr ? 'اختر المرحلة' : 'Select stage'}</option>
                              <option value="concept">{isAr ? 'فكرة أولية / Concept' : 'Concept'}</option>
                              <option value="validated">{isAr ? 'تركيبة تم التحقق منها' : 'Validated formulation'}</option>
                              <option value="production">{isAr ? 'إنتاج تجاري قائم يرغب بالنقل' : 'Commercial production transfer'}</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {isAr ? 'تفاصيل المشروع والطلب *' : 'Project Details & Specifications *'}
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          isAr
                            ? 'صف التطبيق، واحتياجاتك الفنية، والجدول الزمني المستهدف...'
                            : 'Describe the application, your technical need, and indicative timeline...'
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 outline-none transition-all resize-y"
                      ></textarea>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        id="consent-check"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-300"
                      />
                      <label htmlFor="consent-check" className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed cursor-pointer">
                        {isAr
                          ? 'أوافق على قيام فريق AWA Group بمراجعة هذه البيانات للتواصل بشأن طلبي، وأقر بأن هذا النموذج يخضع لسياسات الخصوصية المعمول بها.'
                          : 'I agree that AWA Group may process this information to evaluate and respond to this project inquiry.'}
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                    >
                      <span>{isAr ? 'إرسال طلب التأهيل والمناقشة' : 'Submit Project Inquiry'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
