import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    sector: 'Dairy & Cheese',
    requirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const targetEmail =
    formData.sector === 'Consumer Retail Brands'
      ? COMPANY_CONTACT.emailB2C
      : COMPANY_CONTACT.emailB2B;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Formulation/Quote Request: ${formData.company || formData.fullName} [${formData.sector}]`,
          _template: 'table',
          fullName: formData.fullName,
          company: formData.company,
          email: formData.email,
          phone: formData.phone || 'N/A',
          sector: formData.sector,
          requirement: formData.requirement || 'N/A',
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3500);
    } catch {
      setSubmitError(
        language === 'ar'
          ? `تعذر إرسال الطلب حالياً. يرجى التواصل مباشرة عبر ${targetEmail}.`
          : `Unable to send request right now. Please email ${targetEmail} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 id="quote-modal-title" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111a2e' }}>
              {t('quoteModal.title', 'Request a Formulation or Quote')}
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              {t('quoteModal.desc', 'Connect directly with our technical and commercial team')}
            </p>
          </div>
          <button onClick={onClose} style={{ color: '#64748b', padding: '0.25rem', background: 'none', border: 'none', cursor: 'pointer' }} aria-label={t('quoteModal.close', 'Close')}>
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={54} color="#128d46" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111a2e' }}>
                {t('quoteModal.successHeading', 'Thank You!')}
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                {t('quoteModal.successText', `Your request has been forwarded to our team at ${targetEmail}. We will contact you within 24 hours.`)}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">{t('quoteModal.fullName', 'Full Name *')}</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder={language === 'ar' ? 'مثال: د. أحمد حسن' : 'e.g. Dr. Ahmed Hassan'}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('quoteModal.company', 'Company Name *')}</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder={language === 'ar' ? 'مثال: شركة الأمل للألبان' : 'e.g. Al-Amal Dairy Co.'}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">{t('quoteModal.email', 'Business Email *')}</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('quoteModal.phone', 'Phone / WhatsApp')}</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+20 1X XXXX XXXX"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t('quoteModal.sector', 'Sector / Application')}</label>
                <select
                  className="form-select"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                >
                  <option value="Dairy & Cheese">{t('nav.categories.dairy', 'Dairy & Cheese Systems')}</option>
                  <option value="Meat & Poultry">{t('nav.categories.meat', 'Meat & Poultry Processing')}</option>
                  <option value="Bakery & Confectionery">{t('nav.categories.bakery', 'Bakery & Confectionery')}</option>
                  <option value="Beverages & Syrups">{t('nav.categories.beverage', 'Beverages & Instant Mixes')}</option>
                  <option value="Sauces & Dressings">{t('nav.categories.sauces', 'Sauces, Mayonnaise & Dressings')}</option>
                  <option value="Consumer Retail Brands">{language === 'ar' ? 'العلامات التجارية الاستهلاكية (Sweet & Slim / SquEasy / Yalla)' : 'Sweet & Slim / SquEasy / Yalla'}</option>
                  <option value="Global Sourcing & Trading">{language === 'ar' ? 'المواد الخام ومستخلصات الهيدروكولويدز' : 'Raw Ingredients / Hydrocolloid Sourcing'}</option>
                  <option value="Logistics & Warehousing">{language === 'ar' ? 'الخدمات اللوجستية والتخزين المبرد' : 'Temperature Controlled Logistics'}</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">{t('quoteModal.notes', 'Project Details & Requirements')}</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  placeholder={language === 'ar' ? 'صف متطلبات القوام، مدة الصلاحية المستهدفة، حجم الدفعة، أو الخامات المطلوبة...' : 'Describe your desired texture, target shelf-life, batch size, or ingredients needed...'}
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                />
              </div>

              {submitError && (
                <div role="alert" style={{ padding: '0.75rem 1rem', borderRadius: '10px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#991B1B', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {submitError}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
                <Send size={16} /> <span>{isSubmitting ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t('quoteModal.submit', 'Submit Inquiry')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

