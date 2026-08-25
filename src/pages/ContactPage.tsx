import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building, Globe } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const { t, translations } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 3500);
  };

  return (
    <div className="contact-page">
      <SEO
        title={t('nav.contact', 'Contact Us')}
        description={translations.contact.hero.subtitle}
        path="/contact"
      />
      {/* Header Banner */}
      <section className="section section-dark" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">{translations.contact.hero.eyebrow}</div>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
            {translations.contact.hero.title}
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px' }}>
            {translations.contact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3.5rem' }}>
            {/* Offices & Locations */}
            <div>
              <div className="eyebrow">{translations.contact.footprint.eyebrow}</div>
              <h2 className="section-title" style={{ fontSize: '2.2rem' }}>
                {translations.contact.footprint.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {translations.contact.footprint.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Alexandria HQ */}
                <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Building size={22} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                      {translations.contact.footprint.alexTitle}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={15} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                    <span>{COMPANY_CONTACT.alexOffice}</span>
                  </p>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={15} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                    <span dir="ltr">{COMPANY_CONTACT.phoneAlex}</span>
                  </p>
                </div>

                {/* Cairo Office */}
                <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Building size={22} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                      {translations.contact.footprint.cairoTitle}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={15} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                    <span>{COMPANY_CONTACT.cairoOffice}</span>
                  </p>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Phone size={15} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                    <span dir="ltr">{COMPANY_CONTACT.phoneCairo}</span>
                  </p>
                </div>

                {/* Borg El Arab Plant */}
                <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Globe size={22} color="var(--primary)" />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dark-navy)' }}>
                      {translations.contact.footprint.factoryTitle}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={15} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                    <span>{COMPANY_CONTACT.factory}</span>
                  </p>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={15} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                    <span>{COMPANY_CONTACT.workingHours}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', height: 'fit-content' }}>
              <div className="eyebrow">{translations.contact.form.eyebrow}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '1.5rem' }}>
                {translations.contact.form.title}
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={54} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                    {translations.contact.form.successTitle}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {translations.contact.form.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.contact.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={translations.contact.form.namePlaceholder}
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                        {translations.contact.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tarek@company.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                        {translations.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        placeholder="+20 1X XXXX XXXX"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.contact.form.company}
                    </label>
                    <input
                      type="text"
                      placeholder={translations.contact.form.companyPlaceholder}
                      value={contactData.company}
                      onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.925rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.contact.form.subject}
                    </label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', background: '#FFFFFF' }}
                    >
                      <option value="General Inquiry">{translations.contact.form.subjects.general}</option>
                      <option value="Dairy Solutions">{translations.contact.form.subjects.dairy}</option>
                      <option value="Meat Systems">{translations.contact.form.subjects.meat}</option>
                      <option value="Bakery Solutions">{translations.contact.form.subjects.bakery}</option>
                      <option value="Sweet & Slim Retail">{translations.contact.form.subjects.retail}</option>
                      <option value="Raw Materials Sourcing">{translations.contact.form.subjects.raw}</option>
                      <option value="Contract Manufacturing">{translations.contact.form.subjects.contract}</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.35rem' }}>
                      {translations.contact.form.msg}
                    </label>
                    <textarea
                      required
                      placeholder={translations.contact.form.msgPlaceholder}
                      rows={4}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.9rem', fontFamily: 'inherit' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    <span>{translations.contact.form.submit}</span>
                    <Send size={16} />
                  </button>

                  <div style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    {translations.contact.form.directEmail}
                    <a href={`mailto:${COMPANY_CONTACT.email}`} style={{ color: 'var(--primary)', fontWeight: 700 }} dir="ltr">{COMPANY_CONTACT.email}</a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Location */}
      <section style={{ height: '380px', width: '100%', background: '#E2E8F0', position: 'relative' }}>
        <iframe
          title="AWA Group Alexandria Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109156.45263172088!2d29.897453158203126!3d31.22403490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c490a6e0fb89%3A0x6b45a90d984fa588!2sSporting%2C%20Alexandria%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1692000000000!5m2!1sen!2seg"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};
