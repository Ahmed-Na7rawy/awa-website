import React, { useState } from 'react';
import { Send, CheckCircle2, Award, HeartHandshake, Microscope } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

export const CareersPage: React.FC = () => {
  const { t, translations } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [careerForm, setCareerForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: 'R&D / Food Science',
    experience: '3-5 years',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCareerForm({
        fullName: '',
        email: '',
        phone: '',
        department: 'R&D / Food Science',
        experience: '3-5 years',
        message: ''
      });
    }, 3500);
  };

  const openings = [
    {
      title: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Senior Food Scientist / Application Technologist (Dairy)' : 'كبير علماء أغذية / أخصائي تطبيقات (قطاع الألبان)',
      location: translations.careers.vacancies.title === 'Featured Opportunities' ? 'New Borg El-Arab City / Alexandria' : 'مدينة برج العرب الجديدة / الإسكندرية',
      department: translations.careers.vacancies.title === 'Featured Opportunities' ? 'R&D & Application Center' : 'مركز التطبيقات والأبحاث R&D',
      type: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Full-Time' : 'دوام كامل',
      desc: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Formulation of processed cheese stabilizer blends, yogurt texture optimizers, and pilot trials.' : 'تركيب وتطوير مثبتات الجبن المطبوخ ومحسنات قوام الزبادي والتجارب المعملية.'
    },
    {
      title: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Chemical & Microbiological QC Specialist' : 'أخصائي رقابة جودة كيميائية وميكروبيولوجية (QC)',
      location: translations.careers.vacancies.title === 'Featured Opportunities' ? 'New Borg El-Arab Plant' : 'مجمع مصانع برج العرب الجديدة',
      department: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Quality Assurance' : 'توكيد ومراقبة الجودة',
      type: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Full-Time' : 'دوام كامل',
      desc: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Raw material testing, HPLC / viscosity profiling, and microbiological pathogen screening.' : 'فحص الخامات، التحليل الكروماتوغرافي HPLC، وفحص الميكروبيولوجي للدفعات.'
    },
    {
      title: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Technical Sales Manager (Food Ingredients)' : 'مدير مبيعات فنية (مكونات ومضافات الأغذية)',
      location: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Cairo Office (Sheraton)' : 'مكتب القاهرة (مساكن شيراتون)',
      department: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Commercial Sales' : 'القطاع التجاري والمبيعات',
      type: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Full-Time' : 'دوام كامل',
      desc: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Managing key accounts across FMCG industrial food processors, dairy, and beverage manufacturers.' : 'إدارة كبار العملاء في قطاعات تصنيع الأغذية والألبان والمشروبات.'
    },
    {
      title: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Supply Chain & Cold Logistics Coordinator' : 'منسق سلاسل إمداد ونقل مبرد',
      location: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Alexandria Headquarters' : 'المقر الرئيسي بالإسكندرية',
      department: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Logistics & Operations' : 'اللوجستيات والعمليات',
      type: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Full-Time' : 'دوام كامل',
      desc: translations.careers.vacancies.title === 'Featured Opportunities' ? 'Coordinating reefer fleet distribution, temperature telemetry, and warehouse FIFO dispatch.' : 'تنسيق أسطول النقل المبرد ومراقبة درجات الحرارة وصرف المخزون FIFO.'
    }
  ];

  return (
    <div className="careers-page">
      <SEO
        title={t('nav.careers', 'Careers')}
        description={translations.careers.hero.subtitle}
        path="/careers"
      />
      {/* Header Banner */}
      <section className="section section-dark" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">{translations.careers.hero.eyebrow}</div>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
            {translations.careers.hero.title}
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px' }}>
            {translations.careers.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              {translations.careers.culture.eyebrow}
            </div>
            <h2 className="section-title">
              {translations.careers.culture.title}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Microscope size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                {translations.careers.culture.card1Title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {translations.careers.culture.card1Desc}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                {translations.careers.culture.card2Title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {translations.careers.culture.card2Desc}
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <HeartHandshake size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                {translations.careers.culture.card3Title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {translations.careers.culture.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Openings & Application Form */}
      <section className="section section-stone">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem' }}>
            {/* Job Openings */}
            <div>
              <div className="eyebrow">{translations.careers.vacancies.eyebrow}</div>
              <h2 className="section-title" style={{ fontSize: '2.2rem' }}>
                {translations.careers.vacancies.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                {openings.map((job, idx) => (
                  <div key={idx} style={{ background: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>{job.title}</h4>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--primary)', background: 'var(--primary-light)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                        {job.type}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.75rem' }}>
                      {job.department} • {job.location}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Application Form */}
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: 'fit-content' }}>
              <div className="eyebrow">{translations.careers.form.eyebrow}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '1.5rem' }}>
                {translations.careers.form.title}
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={54} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                    {translations.careers.form.successTitle}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {translations.careers.form.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.careers.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={translations.careers.form.namePlaceholder}
                      value={careerForm.fullName}
                      onChange={(e) => setCareerForm({ ...careerForm, fullName: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.careers.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sara@example.com"
                      value={careerForm.email}
                      onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.careers.form.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+20 1X XXXX XXXX"
                      value={careerForm.phone}
                      onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                        {translations.careers.form.dept}
                      </label>
                      <select
                        value={careerForm.department}
                        onChange={(e) => setCareerForm({ ...careerForm, department: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', background: '#FFFFFF' }}
                      >
                        <option value="R&D / Food Science">{translations.careers.form.depts.rnd}</option>
                        <option value="Quality Assurance / QC">{translations.careers.form.depts.qa}</option>
                        <option value="Technical Sales">{translations.careers.form.depts.sales}</option>
                        <option value="Supply Chain & Logistics">{translations.careers.form.depts.logistics}</option>
                        <option value="Factory Operations">{translations.careers.form.depts.ops}</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                        {translations.careers.form.exp}
                      </label>
                      <select
                        value={careerForm.experience}
                        onChange={(e) => setCareerForm({ ...careerForm, experience: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', background: '#FFFFFF' }}
                      >
                        <option value="Fresh Graduate">{translations.careers.form.exps.fresh}</option>
                        <option value="1-3 years">{translations.careers.form.exps.y1_3}</option>
                        <option value="3-5 years">{translations.careers.form.exps.y3_5}</option>
                        <option value="5+ years">{translations.careers.form.exps.y5plus}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.careers.form.msg}
                    </label>
                    <textarea
                      placeholder={translations.careers.form.msgPlaceholder}
                      rows={3}
                      value={careerForm.message}
                      onChange={(e) => setCareerForm({ ...careerForm, message: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <span>{translations.careers.form.submit}</span>
                    <Send size={16} />
                  </button>

                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                    {translations.careers.form.orEmail} 
                    <strong style={{ color: 'var(--primary)' }} dir="ltr">{COMPANY_CONTACT.email}</strong>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
