import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, ArrowRight, ExternalLink, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { v9Assets } from '../data/v9Data';

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [searchParams] = useSearchParams();

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [inquiryType, setInquiryType] = useState<string>('technical');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      _subject: `New Inquiry from awagroup.net: ${formData.company || formData.name} [${inquiryType}]`,
      _template: 'table',
      name: formData.name,
      email: formData.email,
      company: formData.company,
      country: formData.country,
      phone: formData.phone || 'Not provided',
      inquiryType: inquiryType,
      category: formData.category || 'N/A',
      volume: formData.volume || 'N/A',
      markets: formData.markets || 'N/A',
      stage: formData.stage || 'N/A',
      message: formData.message,
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@awa-group.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch {
      setSubmitError(
        isAr
          ? `تعذر إرسال الرسالة تلقائياً. يرجى مراسلتنا مباشرة على ${COMPANY_CONTACT.email}.`
          : `Unable to submit automatically right now. Please email ${COMPANY_CONTACT.email} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      title: isAr ? 'المقر الرئيسي — القاهرة' : 'Cairo Headquarters & Corporate Office',
      subtitle: isAr ? 'الإدارة العامة والمبيعات والمراسلات' : 'Corporate Management, Sales & Inquiries',
      address: isAr
        ? '15 شارع عبد الوهاب سليم البشري، شيراتون، القاهرة، مصر'
        : '15 Abd Elwahab Selim El-bishry St., Sheraton, Cairo, Egypt',
      phones: [COMPANY_CONTACT.phoneMain, COMPANY_CONTACT.phoneAlt],
      email: COMPANY_CONTACT.email,
      hours: isAr ? 'الأحد - الخميس: 9:00 ص - 5:00 م' : 'Sun - Thu: 9:00 AM - 5:00 PM',
      isPrimary: true,
      mapLink: 'https://maps.google.com/?q=15+Abd+Elwahab+Selim+El-bishry+st+Sheraton+Cairo+Egypt',
    },
    {
      title: isAr ? 'مجمع برج العرب الصناعي' : 'New Borg El-Arab Manufacturing Complex',
      subtitle: isAr ? 'مصانع الخلط والمستودعات المركزية' : 'Production, Compounding & Central Warehouses',
      address: isAr
        ? 'المنطقة الصناعية، برج العرب الجديدة، الإسكندرية، مصر'
        : 'Industrial Zone, New Borg El-Arab City, Alexandria, Egypt',
      phones: [COMPANY_CONTACT.phoneMain],
      email: COMPANY_CONTACT.email,
      hours: isAr ? 'الأحد - الخميس: 8:00 ص - 4:00 م' : 'Sun - Thu: 8:00 AM - 4:00 PM',
      isPrimary: false,
      mapLink: 'https://maps.google.com/?q=New+Borg+El-Arab+City+Alexandria+Egypt',
    },
  ];

  return (
    <>
      <SEO
        title={isAr ? 'اتصل بنا | مجموعة AWA' : 'Contact Us | AWA Group'}
        description={
          isAr
            ? 'تواصل مع فريق مجموعة AWA لمناقشة حلول الأغذية الصناعية وتطوير التركيبات والمبيعات عبر info@awa-group.net.'
            : 'Get in touch with AWA Group for industrial food formulations, Food Services, and manufacturing partnerships. Located in Cairo and Alexandria, Egypt.'
        }
        path="/contact"
      />

      <div className="contact-page" style={{ background: '#FFFFFF' }}>
        {/* HERO SECTION */}
        <section
          className="page-hero page-hero--visual"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="page-hero-media">
            <img 
              src={v9Assets.v8Assets['industrial-plant']} 
              alt="AWA Operations & Contacts" 
              loading="eager" 
            />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '780px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#4ADE80',
                  marginBottom: '1rem',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80' }} />
                <span>{isAr ? 'تواصل مع AWA · ابدأ محادثة' : 'CONTACT AWA · START A CONVERSATION'}</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.25rem',
                }}
              >
                {isAr ? (
                  <>دعنا نتحدث عن <span style={{ color: '#4ADE80' }}>تحديك الغذائي القادم.</span></>
                ) : (
                  <>Let’s talk about <span style={{ color: '#4ADE80' }}>your next challenge.</span></>
                )}
              </h1>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#CBD5E1',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {isAr
                  ? 'ابدأ محادثة مركزة مع AWA حول التركيبات الصناعية، أو خدمات الأغذية، أو التوزيع، أو التوريد وسلاسل الإمداد. يتم توجيه كل استفسار مباشرة إلى الفريق المتخصص.'
                  : 'Start a focused conversation with AWA about industrial food formulation, food services, ingredient sourcing, or strategic manufacturing. Every inquiry is reviewed directly by our specialized team.'}
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT SECTION */}
        <section className="section" style={{ padding: '4.5rem 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.35fr)',
                gap: '3.5rem',
                alignItems: 'start',
              }}
              className="contact-layout-grid"
            >
              {/* LEFT COLUMN: CONTACT DETAILS & OFFICES */}
              <div>
                <div style={{ marginBottom: '2.5rem' }}>
                  <div className="eyebrow">{isAr ? 'بيانات التواصل المباشر' : 'DIRECT CHANNELS'}</div>
                  <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--dark-navy)', lineHeight: 1.25, marginBottom: '1rem' }}>
                    {isAr ? 'قنوات الاتصال الرسمية' : 'Official Contact Channels'}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {isAr
                      ? 'يمكنكم التواصل مباشرة عبر البريد الإلكتروني أو أرقام الهواتف أو زيارة مقرنا الرئيسي في القاهرة.'
                      : 'Reach our team directly via email, phone, or visit our headquarters in Cairo.'}
                  </p>
                </div>

                {/* LOCATIONS LIST */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  {offices.map((off, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: off.isPrimary ? '#F8FAFC' : '#FFFFFF',
                        border: off.isPrimary ? '1.5px solid rgba(0, 168, 79, 0.4)' : '1px solid var(--border-color)',
                        borderRadius: '16px',
                        padding: '1.75rem',
                        boxShadow: off.isPrimary ? '0 10px 25px rgba(0, 168, 79, 0.06)' : 'none',
                        position: 'relative',
                      }}
                    >
                      {off.isPrimary && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '1rem',
                            right: isAr ? 'auto' : '1rem',
                            left: isAr ? '1rem' : 'auto',
                            background: '#00A84F',
                            color: '#FFFFFF',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            padding: '0.2rem 0.65rem',
                            borderRadius: '999px',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {isAr ? 'المقر الرئيسي' : 'HQ'}
                        </div>
                      )}

                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
                        {off.title}
                      </h3>
                      <div style={{ fontSize: '0.8rem', color: '#00A84F', fontWeight: 700, marginBottom: '1.25rem' }}>
                        {off.subtitle}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-main)' }}>
                          <MapPin size={17} style={{ color: '#00A84F', flexShrink: 0, marginTop: '2px' }} />
                          <div>
                            <div>{off.address}</div>
                            <a
                              href={off.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: '#00A84F', fontSize: '0.78rem', fontWeight: 700, marginTop: '0.25rem' }}
                            >
                              <span>{isAr ? 'عرض على خرائط Google' : 'Open in Google Maps'}</span>
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-main)' }}>
                          <Phone size={17} style={{ color: '#00A84F', flexShrink: 0 }} />
                          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {off.phones.map((p, pIdx) => (
                              <a
                                key={pIdx}
                                href={`tel:${p}`}
                                style={{ color: 'var(--dark-navy)', fontWeight: 700, fontFamily: 'monospace' }}
                              >
                                {p}
                              </a>
                            ))}
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                          <Mail size={17} style={{ color: '#00A84F', flexShrink: 0 }} />
                          <a
                            href={`mailto:${off.email}`}
                            style={{ color: '#00A84F', fontWeight: 700 }}
                          >
                            {off.email}
                          </a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-muted)' }}>
                          <Clock size={16} style={{ flexShrink: 0 }} />
                          <span>{off.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* OFFICIAL DOMAIN BADGE */}
                <div
                  style={{
                    background: '#F1F5F9',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      {isAr ? 'النطاق والموقع الرسمي' : 'Official Web Portal'}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--dark-navy)', fontFamily: 'monospace' }}>
                      awagroup.net
                    </div>
                  </div>
                  <a
                    href="mailto:info@awa-group.net"
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.8rem' }}
                  >
                    <span>{isAr ? 'مراسلة مباشرة' : 'Email Directly'}</span>
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: QUALIFICATION & INQUIRY FORM */}
              <div>
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: '20px',
                    padding: '2.5rem',
                    boxShadow: '0 14px 34px rgba(15, 23, 42, 0.06)',
                  }}
                >
                  <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
                        {isAr ? 'نموذج استفسار المشروع' : 'Project Inquiry Form'}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                        {isAr
                          ? 'يتم إرسال رسالتك مباشرة إلى info@awa-group.net'
                          : 'Your message will be delivered directly to info@awa-group.net'}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '999px',
                        background: 'rgba(0, 168, 79, 0.1)',
                        color: '#00A84F',
                        textTransform: 'uppercase',
                      }}
                    >
                      DIRECT DISPATCH
                    </span>
                  </div>

                  {submitted ? (
                    <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: 'rgba(0, 168, 79, 0.12)',
                          color: '#00A84F',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 1.25rem',
                        }}
                      >
                        <CheckCircle2 size={36} />
                      </div>
                      <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                        {isAr ? 'تم إرسال استفسارك بنجاح!' : 'Inquiry Dispatched Successfully!'}
                      </h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 1.75rem', lineHeight: 1.65 }}>
                        {isAr
                          ? `شكراً لتواصلك يا ${formData.name || 'عزيزنا'}. تم إرسال طلبك إلى فريق AWA Group عبر info@awa-group.net وسنقوم بالرد عليك في غضون 24 ساعة.`
                          : `Thank you, ${formData.name || 'partner'}. Your project inquiry has been sent to info@awa-group.net. Our technical team will review and reply within 24 hours.`}
                      </p>

                      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                          href={`mailto:info@awa-group.net?subject=Inquiry from ${encodeURIComponent(formData.company || formData.name)}&body=${encodeURIComponent(formData.message)}`}
                          className="btn btn-secondary"
                          style={{ fontSize: '0.85rem' }}
                        >
                          <Mail size={15} />
                          <span>{isAr ? 'فتح مسودة في بريدك' : 'Open in your Email App'}</span>
                        </a>
                        <button
                          type="button"
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
                          className="btn btn-primary"
                          style={{ fontSize: '0.85rem' }}
                        >
                          <span>{isAr ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      {/* NAME & EMAIL */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="contact-form-row">
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
                            {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={isAr ? 'اسمك الكريم' : 'Your name'}
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: '1px solid var(--border-color)',
                              background: '#F8FAFC',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: 'var(--text-main)',
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
                            {isAr ? 'البريد الإلكتروني للعمل *' : 'Business Email *'}
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: '1px solid var(--border-color)',
                              background: '#F8FAFC',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: 'var(--text-main)',
                            }}
                          />
                        </div>
                      </div>

                      {/* COMPANY & COUNTRY */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="contact-form-row">
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
                            {isAr ? 'اسم الشركة أو المصنع *' : 'Company / Facility Name *'}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder={isAr ? 'اسم شركتك' : 'Company name'}
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: '1px solid var(--border-color)',
                              background: '#F8FAFC',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: 'var(--text-main)',
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
                            {isAr ? 'الدولة / المدينة *' : 'Country / City *'}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            placeholder={isAr ? 'مصر، السعودية، الإمارات...' : 'e.g. Egypt, UAE, Jordan'}
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: '1px solid var(--border-color)',
                              background: '#F8FAFC',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: 'var(--text-main)',
                            }}
                          />
                        </div>
                      </div>

                      {/* PHONE & CATEGORY */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="contact-form-row">
                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
                            {isAr ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+20 1..."
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: '1px solid var(--border-color)',
                              background: '#F8FAFC',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: 'var(--text-main)',
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
                            {isAr ? 'تصنيف الاستفسار *' : 'Inquiry Category *'}
                          </label>
                          <select
                            required
                            value={inquiryType}
                            onChange={(e) => setInquiryType(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: '1px solid var(--border-color)',
                              background: '#F8FAFC',
                              fontSize: '0.9rem',
                              outline: 'none',
                              color: 'var(--text-main)',
                            }}
                          >
                            <option value="technical">{isAr ? 'استشارة فنية وتطوير تركيبات صناعية' : 'Industrial Technical Formulation'}</option>
                            <option value="sample">{isAr ? 'طلب عينة منتج أو نظام مكونات' : 'Product Sample Request'}</option>
                            <option value="manufacturing">{isAr ? 'تصنيع تعاقدي استراتيجي (OEM / Co-Pack)' : 'Strategic Contract Manufacturing (Co-Pack)'}</option>
                            <option value="foodservices">{isAr ? 'حلول خدمات الأغذية (Food Services)' : 'Food Services Solutions'}</option>
                            <option value="export">{isAr ? 'تصدير وتجارة دولية' : 'Export & International Distribution'}</option>
                            <option value="brands">{isAr ? 'توزيع العلامات الاستهلاكية (Sweet & Slim, Yalla, SquEasy)' : 'Consumer Brands Distribution'}</option>
                            <option value="other">{isAr ? 'استفسار عام آخر' : 'General Inquiry'}</option>
                          </select>
                        </div>
                      </div>

                      {/* CONDITIONAL CONTRACT MANUFACTURING SCREENER */}
                      {inquiryType === 'manufacturing' && (
                        <div
                          style={{
                            background: 'rgba(0, 168, 79, 0.06)',
                            border: '1px solid rgba(0, 168, 79, 0.25)',
                            borderRadius: '12px',
                            padding: '1.25rem',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#00A84F', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            <ShieldCheck size={16} />
                            <span>{isAr ? 'بيانات تأهيل التصنيع التعاقدي' : 'Contract Manufacturing Parameters'}</span>
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }} className="contact-form-row">
                            <input
                              type="text"
                              value={formData.category}
                              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                              placeholder={isAr ? 'فئة المنتج (بودرة، سائل، خلطات)' : 'Product category (powder, liquid, blends)'}
                              style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: '#FFFFFF', fontSize: '0.85rem' }}
                            />
                            <input
                              type="text"
                              value={formData.volume}
                              onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                              placeholder={isAr ? 'الحجم السنوي المتوقع (بالطن)' : 'Estimated annual volume (MT)'}
                              style={{ width: '100%', padding: '0.6rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: '#FFFFFF', fontSize: '0.85rem' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* MESSAGE */}
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>
                          {isAr ? 'تفاصيل الطلب أو التحدي الفني *' : 'Project Details & Specifications *'}
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={
                            isAr
                              ? 'يرجى وصف التطبيق الغذائي، التحدي التقني (القوام، الثبات، الذوبان، التكلفة)، والجدول الزمني المستهدف...'
                              : 'Please describe your food application, technical challenge (texture, stability, shelf-life, yield, cost), and timeline...'
                          }
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '10px',
                            border: '1px solid var(--border-color)',
                            background: '#F8FAFC',
                            fontSize: '0.9rem',
                            outline: 'none',
                            color: 'var(--text-main)',
                            resize: 'vertical',
                          }}
                        />
                      </div>

                      {/* CONSENT */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <input
                          type="checkbox"
                          required
                          id="consent-check"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          style={{ marginTop: '0.2rem', accentColor: '#00A84F' }}
                        />
                        <label htmlFor="consent-check" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, cursor: 'pointer' }}>
                          {isAr
                            ? 'أوافق على قيام فريق AWA Group بمراجعة هذه البيانات والرد عبر البريد الإلكتروني أو الهاتف المسجل.'
                            : 'I agree that AWA Group may review this information and respond via the provided business email or phone.'}
                        </label>
                      </div>

                      {submitError && (
                        <div role="alert" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 1rem', borderRadius: '10px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#991B1B', fontSize: '0.85rem', fontWeight: 600 }}>
                          <AlertCircle size={17} style={{ flexShrink: 0 }} />
                          <span>{submitError}</span>
                        </div>
                      )}

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary"
                        style={{
                          width: '100%',
                          padding: '1rem',
                          fontSize: '1rem',
                          fontWeight: 800,
                          justifyContent: 'center',
                          opacity: isSubmitting ? 0.75 : 1,
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>{isAr ? 'جاري الإرسال إلى info@awa-group.net...' : 'Sending to info@awa-group.net...'}</span>
                          </>
                        ) : (
                          <>
                            <span>{isAr ? 'إرسال الاستفسار إلى info@awa-group.net' : 'Send Inquiry to info@awa-group.net'}</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
