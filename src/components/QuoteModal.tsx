import React from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    sector: 'Dairy & Cheese',
    requirement: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111a2e' }}>Request a Formulation or Quote</h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Connect directly with our technical and commercial team</p>
          </div>
          <button onClick={onClose} style={{ color: '#64748b', padding: '0.25rem' }}>
            <X size={22} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={54} color="#128d46" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111a2e' }}>Thank You!</h4>
              <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                Your request has been forwarded to our technical team at <strong>{COMPANY_CONTACT.email}</strong>. We will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Dr. Ahmed Hassan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Al-Amal Dairy Co."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Business Email *</label>
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
                  <label className="form-label">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+20 1X XXXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Sector / Application</label>
                <select
                  className="form-select"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                >
                  <option value="Dairy & Cheese">Dairy & Cheese Systems</option>
                  <option value="Meat & Poultry">Meat & Poultry Processing</option>
                  <option value="Bakery & Confectionery">Bakery & Confectionery</option>
                  <option value="Beverages & Syrups">Beverages & Instant Mixes</option>
                  <option value="Sauces & Dressings">Sauces, Mayonnaise & Dressings</option>
                  <option value="Consumer Retail Brands">Sweet & Slim / SquEasy / Yalla</option>
                  <option value="Global Sourcing & Trading">Raw Ingredients / Hydrocolloid Sourcing</option>
                  <option value="Logistics & Warehousing">Temperature Controlled Logistics</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details & Requirements</label>
                <textarea
                  className="form-textarea"
                  rows={3}
                  placeholder="Describe your desired texture, target shelf-life, batch size, or ingredients needed..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} /> Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
