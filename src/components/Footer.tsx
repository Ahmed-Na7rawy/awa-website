import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_CONTACT, CERTIFICATIONS } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (pageId: string, subId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleNav = (id: string, subId?: string) => {
    onNavigate(id, subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Corporate Statement */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img 
                src="/images/awa-fs-w.png" 
                alt="AWA Group White Logo" 
                style={{ height: '42px', objectFit: 'contain' }} 
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
              <div>
                <div style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  AWA <span style={{ color: '#4ADE80' }}>GROUP</span>
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.725rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {t('footer.brandSubtitle')}
                </div>
              </div>
            </div>
            <p className="footer-brand-desc">
              {t('footer.tagline')}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', color: '#4ADE80', fontWeight: 600 }}>
                <ShieldCheck size={14} /> FSSC 22000 & ISO 9001
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', color: '#4ADE80', fontWeight: 600 }}>
                <Award size={14} /> {t('footer.certBadge')}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">{t('footer.quickLinks', 'Navigation')}</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('home')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.home', 'Home')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.about', 'About AWA Group')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.solutions', 'Food Solutions')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('trading')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.trading', 'Formulation & Sourcing')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.industries', 'Manufacturing')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sustainability')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.sustainability', 'Sustainability')}
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Brands */}
          <div>
            <h4 className="footer-col-title">{t('footer.solutionsLinks', 'Solutions & Brands')}</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('solutions', 'dairy')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.categories.dairy', 'Dairy & Cheese Systems')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions', 'meat')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.categories.meat', 'Meat & Poultry Solutions')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions', 'bakery')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  {t('nav.categories.bakery', 'Bakery & Confectionery')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products', 'sweet-and-slim')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Sweet & Slim
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products', 'yalla-drinks')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Yalla Drinks
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="footer-col-title">{t('footer.corporateInfo', 'Headquarters')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#4ADE80', minWidth: '16px', marginTop: '2px' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>{t('footer.alexLabel')}</strong> {COMPANY_CONTACT.alexOffice}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#4ADE80', minWidth: '16px', marginTop: '2px' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>{t('footer.cairoLabel')}</strong> {COMPANY_CONTACT.cairoOffice}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#4ADE80', minWidth: '16px' }} />
                <span dir="ltr">{COMPANY_CONTACT.phoneAlex}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#4ADE80', minWidth: '16px' }} />
                <a href={`mailto:${COMPANY_CONTACT.email}`} style={{ color: '#4ADE80', fontWeight: 600 }}>
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
          padding: '1.75rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
            {t('footer.certsLabel')}
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {CERTIFICATIONS.map((cert, idx) => (
              <img 
                key={idx} 
                src={cert.img} 
                alt={cert.name} 
                title={cert.label}
                style={{ height: '34px', filter: 'brightness(0) invert(1)', opacity: 0.65 }} 
              />
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} {t('footer.copyright')}</p>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('about')}>{t('footer.corporatePolicy')}</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('sustainability')}>{t('footer.esgCommitment')}</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('contact')}>{t('footer.contactHq')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

