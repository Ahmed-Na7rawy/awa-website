import React from 'react';
import { Mail, Phone, MapPin, ChevronRight, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_CONTACT, NAV_LINKS, CERTIFICATIONS } from '../data/siteData';

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
          {/* Company Summary */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img src="/images/awa-fs-w.png" alt="AWA Group" style={{ height: '40px', objectFit: 'contain' }} />
              <div>
                <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 800 }}>AWA GROUP</h3>
                <span style={{ color: '#4ade80', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>FOOD SOLUTIONS</span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              Established in 1993, AWA Group is a premier partner for the Middle East and African food industry. Specializing in functional ingredient systems, global trading, temperature-controlled logistics, and tailored formulation innovations.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-dark" style={{ fontSize: '0.75rem', margin: 0 }}>
                <ShieldCheck size={12} /> FSSC 22000
              </span>
              <span className="badge badge-dark" style={{ fontSize: '0.75rem', margin: 0 }}>
                <Award size={12} /> ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('home')} className="footer-link">
                  <ChevronRight size={14} /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="footer-link">
                  <ChevronRight size={14} /> About AWA Group
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="footer-link">
                  <ChevronRight size={14} /> R&D & Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('trading')} className="footer-link">
                  <ChevronRight size={14} /> Global Trading
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('logistics')} className="footer-link">
                  <ChevronRight size={14} /> Cold Chain Logistics
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sustainability')} className="footer-link">
                  <ChevronRight size={14} /> Sustainability & ESG
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="footer-link">
                  <ChevronRight size={14} /> Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Product & Solutions */}
          <div>
            <h4 className="footer-col-title">Solutions & Brands</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => handleNav('solutions', 'dairy')} className="footer-link">
                  <ChevronRight size={14} /> Dairy & Cheese
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions', 'meat')} className="footer-link">
                  <ChevronRight size={14} /> Meat & Poultry
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions', 'bakery')} className="footer-link">
                  <ChevronRight size={14} /> Bakery & Pastry
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products', 'sweet-and-slim')} className="footer-link">
                  <ChevronRight size={14} /> Sweet & Slim®
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products', 'squeasy')} className="footer-link">
                  <ChevronRight size={14} /> SquEasy® Purées
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products', 'yalla-drinks')} className="footer-link">
                  <ChevronRight size={14} /> Yalla® Drink Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#4ade80', minWidth: '16px', marginTop: '3px' }} />
                <span>
                  <strong style={{ color: '#ffffff' }}>Alexandria:</strong> {COMPANY_CONTACT.alexOffice}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={16} style={{ color: '#4ade80', minWidth: '16px', marginTop: '3px' }} />
                <span>
                  <strong style={{ color: '#ffffff' }}>Cairo:</strong> {COMPANY_CONTACT.cairoOffice}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Phone size={16} style={{ color: '#4ade80', minWidth: '16px', marginTop: '3px' }} />
                <span>{COMPANY_CONTACT.phoneAlex}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: '#4ade80', minWidth: '16px' }} />
                <a href={`mailto:${COMPANY_CONTACT.email}`} style={{ color: '#4ade80' }}>
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications strip */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>
            Accredited Quality & Safety Systems:
          </span>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {CERTIFICATIONS.map((cert, idx) => (
              <img 
                key={idx} 
                src={cert.img} 
                alt={cert.name} 
                title={cert.label}
                style={{ height: '32px', filter: 'brightness(0) invert(1)', opacity: 0.6 }} 
              />
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom">
          <p>© {currentYear} AWA Group (AWA Food Solutions). All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('about')}>Corporate Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('sustainability')}>ESG Commitment</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('contact')}>Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
