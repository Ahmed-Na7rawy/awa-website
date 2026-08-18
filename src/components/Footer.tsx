import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_CONTACT, CERTIFICATIONS } from '../data/siteData';

interface FooterProps {
  onNavigate: (pageId: string, subId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

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
                <div style={{ color: '#94A3B8', fontSize: '0.725rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Food Solutions & Supply Chain
                </div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Founded in 1993, AWA Group is Egypt’s premier supplier of innovative food systems, custom functional blends, direct commodity sourcing, and temperature-controlled logistics. Bridging global food science with regional manufacturing scale.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', color: '#4ADE80', fontWeight: 600 }}>
                <ShieldCheck size={14} /> FSSC 22000 & ISO 9001
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', color: '#4ADE80', fontWeight: 600 }}>
                <Award size={14} /> ISO 45001 & Halal
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Corporate Divisions</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('home')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  About AWA Group
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  R&D & Food Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('trading')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Direct Sourcing & Trading
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('logistics')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Cold Chain Logistics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sustainability')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  ESG & Quality Assurance
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Brands */}
          <div>
            <h4 className="footer-col-title">Solutions & Retail</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('solutions', 'dairy')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Dairy & Cheese Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions', 'meat')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Meat & Poultry Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions', 'bakery')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Bakery & Confectionery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products', 'retail')} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  Consumer & Retail Brands
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="footer-col-title">Headquarters</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#4ADE80', minWidth: '16px', marginTop: '2px' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>Alexandria HQ:</strong> {COMPANY_CONTACT.alexOffice}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#4ADE80', minWidth: '16px', marginTop: '2px' }} />
                <span>
                  <strong style={{ color: '#FFFFFF' }}>Cairo Office:</strong> {COMPANY_CONTACT.cairoOffice}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: '#4ADE80', minWidth: '16px' }} />
                <span>{COMPANY_CONTACT.phoneAlex}</span>
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
            Global Industry Safety & Quality Accreditations:
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
          <p>© {currentYear} AWA Group (AWA Food Solutions). All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('about')}>Corporate Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('sustainability')}>ESG Commitment</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('contact')}>Contact Headquarters</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
