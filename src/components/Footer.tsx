import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (pageId: string, subId?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand & Corporate Statement */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img
                src="/images/awa_group.png"
                alt="AWA Group Logo"
                style={{ height: '44px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <p style={{ maxWidth: '340px', lineHeight: '1.65', fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
              {isAr
                ? 'حلول أغذية مخصصة. مصممة للأداء. تربط AWA بين التوريد، والبحث والتطوير التطبيقي، والتصنيع لخدمة الصناعة ومشغلي الأغذية والأسواق الاستهلاكية.'
                : 'Tailored Food Solutions. Built to Perform. AWA connects sourcing, applied R&D and manufacturing to serve industry, professional food operators and consumer markets.'}
            </p>

            {/* Tagline badge — brand green, not generic green */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              background: 'rgba(0, 168, 79, 0.12)',
              border: '1px solid rgba(0, 168, 79, 0.3)',
              borderRadius: '8px',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#00A84F',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              SOURCE · DEVELOP · MANUFACTURE
            </div>

            {/* LinkedIn social link */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://www.linkedin.com/company/awa-group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AWA Group on LinkedIn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#94A3B8',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,168,79,0.15)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,168,79,0.4)';
                  (e.currentTarget as HTMLElement).style.color = '#00A84F';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Business Portfolio */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#FFFFFF', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {isAr ? 'قطاعات الأعمال' : 'Business Portfolio'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link to="/solutions" className="footer-link-item">{isAr ? 'حلول الصناعات الغذائية' : 'Industry Solutions'}</Link></li>
              <li><Link to="/food-services" className="footer-link-item">{isAr ? 'خدمات الأغذية' : 'Food Services'}</Link></li>
              <li><Link to="/brands" className="footer-link-item">{isAr ? 'العلامات الاستهلاكية' : 'Consumer Portfolio'}</Link></li>
              <li><Link to="/solutions/catalogue" className="footer-link-item">{isAr ? 'كتالوج المنتجات' : 'Products Catalogue'}</Link></li>
              <li><Link to="/brands/sweet-and-slim" className="footer-link-item">Sweet &amp; Slim</Link></li>
              <li><Link to="/brands/yalla-drinks" className="footer-link-item">Yalla Drinks</Link></li>
              <li><Link to="/brands/squeasy" className="footer-link-item">Squ'easy</Link></li>
            </ul>
          </div>

          {/* Our Group */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#FFFFFF', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {isAr ? 'مجموعتنا' : 'Our Group'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><Link to="/about" className="footer-link-item">{isAr ? 'عن AWA' : 'About AWA'}</Link></li>
              <li><Link to="/about#leadership" className="footer-link-item">{isAr ? 'كلمة الرئيس التنفيذي' : 'CEO Message'}</Link></li>
              <li><Link to="/capabilities" className="footer-link-item">{isAr ? 'قدراتنا المتكاملة' : 'Our Capabilities'}</Link></li>
              <li><Link to="/capabilities/manufacturing" className="footer-link-item">{isAr ? 'التميز الصناعي' : 'Manufacturing Excellence'}</Link></li>
              <li><Link to="/quality" className="footer-link-item">{isAr ? 'الجودة والشهادات' : 'Quality & Certifications'}</Link></li>
              <li><Link to="/sustainability" className="footer-link-item">{isAr ? 'الاستدامة' : 'Sustainability'}</Link></li>
              <li><Link to="/global" className="footer-link-item">{isAr ? 'الشراكات الدولية' : 'Global Network'}</Link></li>
              <li><Link to="/careers" className="footer-link-item">{isAr ? 'الوظائف' : 'Careers'}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#FFFFFF', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1.2rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {isAr ? 'تواصل معنا' : 'Contact'}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>

              {/* Address */}
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={15} style={{ color: '#00A84F', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: 1.55 }}>
                  {isAr
                    ? '15 عبد الوهاب سليم البشري، شيراتون، القاهرة، مصر'
                    : '15 Abd Elwahab Selim El-bishry St., Sheraton, Cairo, Egypt'}
                </span>
              </li>

              {/* Phones */}
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={15} style={{ color: '#00A84F', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href={`tel:${COMPANY_CONTACT.phoneMain}`} className="footer-link-item" style={{ fontSize: '0.84rem' }}>
                    {COMPANY_CONTACT.phoneMain}
                  </a>
                  <a href={`tel:${COMPANY_CONTACT.phoneAlt}`} className="footer-link-item" style={{ fontSize: '0.84rem' }}>
                    {COMPANY_CONTACT.phoneAlt}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={15} style={{ color: '#00A84F', flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="footer-link-item" style={{ fontSize: '0.84rem', color: '#00A84F' }}>
                  {COMPANY_CONTACT.email}
                </a>
              </li>

              {/* Hours */}
              <li style={{ marginTop: '0.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.78rem', color: '#64748B' }}>
                {isAr ? 'الأحد – الخميس: 9:00 ص – 5:00 م' : 'Sun – Thu: 9:00 AM – 5:00 PM'}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div style={{
          marginTop: '3.5rem',
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: '#475569',
        }}>
          <div>
            © {currentYear} AWA Group. All rights reserved. &nbsp;
            <span style={{ color: '#334155' }}>FSSC 22000 · ISO 9001 · ISO 14001 · ISO 45001 · Halal Certified.</span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/quality" style={{ color: '#94A3B8' }}>{isAr ? 'سياسة الجودة' : 'Quality Policy'}</Link>
            <Link to="/sustainability" style={{ color: '#94A3B8' }}>{isAr ? 'الاستدامة' : 'ESG Commitment'}</Link>
            <Link to="/contact" style={{ color: '#94A3B8' }}>{isAr ? 'الاستفسارات' : 'Inquiries'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
