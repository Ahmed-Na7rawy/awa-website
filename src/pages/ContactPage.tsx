import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Building, Globe } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [contactData, setContactData] = React.useState({
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
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">Reach Out</span>
          <h1 className="page-banner-title">Contact AWA Group</h1>
          <p className="page-banner-subtitle">
            Get in touch with our technical, commercial, and customer care teams in Alexandria and Cairo.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information & Office Details */}
            <div>
              <span className="badge">Locations</span>
              <h2 className="section-title">Our Offices & Production Facilities</h2>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                We are always available to discuss your formulation challenges, ingredient sourcing inquiries, and supply chain needs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Alexandria HQ */}
                <div style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Building size={22} color="#128d46" />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111a2e' }}>Alexandria Headquarters</h3>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <MapPin size={16} style={{ display: 'inline', marginRight: '0.4rem', color: '#128d46' }} />
                    {COMPANY_CONTACT.alexOffice}
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.9rem' }}>
                    <Phone size={16} style={{ display: 'inline', marginRight: '0.4rem', color: '#128d46' }} />
                    {COMPANY_CONTACT.phoneAlex}
                  </p>
                </div>

                {/* Cairo Office */}
                <div style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Building size={22} color="#128d46" />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111a2e' }}>Cairo Commercial Office</h3>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <MapPin size={16} style={{ display: 'inline', marginRight: '0.4rem', color: '#128d46' }} />
                    {COMPANY_CONTACT.cairoOffice}
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.9rem' }}>
                    <Phone size={16} style={{ display: 'inline', marginRight: '0.4rem', color: '#128d46' }} />
                    {COMPANY_CONTACT.phoneCairo}
                  </p>
                </div>

                {/* Factory */}
                <div style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <Globe size={22} color="#128d46" />
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111a2e' }}>Manufacturing Complex</h3>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    <MapPin size={16} style={{ display: 'inline', marginRight: '0.4rem', color: '#128d46' }} />
                    {COMPANY_CONTACT.factory}
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.9rem' }}>
                    <Clock size={16} style={{ display: 'inline', marginRight: '0.4rem', color: '#128d46' }} />
                    {COMPANY_CONTACT.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="contact-card">
              <span className="badge">Send a Message</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111a2e', marginBottom: '1.5rem' }}>
                Contact Our Team Directly
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={54} color="#128d46" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.5rem' }}>Message Dispatched!</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    Thank you for reaching out. A representative from our Alexandria or Cairo commercial office will contact you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="e.g. Eng. Tarek Mansour"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="tarek@company.com"
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+20 1X XXXX XXXX"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company Name & Industry</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Delta Beverage Industries"
                      value={contactData.company}
                      onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Subject</label>
                    <select
                      className="form-select"
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    >
                      <option value="General Inquiry">General Corporate Inquiry</option>
                      <option value="Dairy Solutions">Dairy & Cheese Formulation</option>
                      <option value="Meat Systems">Meat & Poultry Processing</option>
                      <option value="Bakery Solutions">Bakery Improvers & Enzymes</option>
                      <option value="Sweet & Slim Retail">Sweet & Slim / Retail Distributorship</option>
                      <option value="Raw Materials Sourcing">Raw Materials & Hydrocolloid Sourcing</option>
                      <option value="Contract Manufacturing">Contract Blending & Packaging</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      required
                      className="form-textarea"
                      placeholder="Please write your inquiry here..."
                      rows={4}
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <Send size={16} /> Send Message
                  </button>

                  <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
                    Direct Email: <a href={`mailto:${COMPANY_CONTACT.email}`} style={{ color: '#128d46', fontWeight: 600 }}>{COMPANY_CONTACT.email}</a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed or Visual Location Strip */}
      <section style={{ height: '350px', width: '100%', background: '#e2e8f0', position: 'relative' }}>
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
