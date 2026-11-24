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
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                textDecoration: 'none',
              }}
              aria-label="AWA Group Home"
            >
              <img
                src="/images/awa_group.png"
                alt="AWA Group Logo"
                style={{
                  height: '68px',
                  width: 'auto',
                  maxWidth: '220px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </Link>
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

            {/* Social Media & Instant Channels */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/201019741633?text=Hello%20AWA%20Group,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact AWA Group on WhatsApp (+201019741633)"
                title="WhatsApp: +20 101 974 1633"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#94A3B8',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.15)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(37,211,102,0.45)';
                  (e.currentTarget as HTMLElement).style.color = '#25D366';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                  (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.771.82 2.796.821 3.183 0 5.769-2.587 5.77-5.768.001-3.181-2.585-5.766-5.77-5.766zm10.009 5.828c-.001 5.518-4.49 10.007-10.009 10.007-1.748 0-3.414-.456-4.887-1.258l-5.644 1.48 1.506-5.503c-.878-1.526-1.341-3.268-1.34-5.056.002-5.518 4.491-10.007 10.009-10.007 5.519 0 10.009 4.489 10.009 10.007zm-5.836 2.971c-.24-.12-1.422-.702-1.642-.782-.221-.08-.382-.12-.543.12-.161.24-.622.782-.763.942-.141.16-.281.18-.522.06-.24-.12-1.015-.374-1.933-1.192-.714-.637-1.196-1.424-1.336-1.664-.141-.24-.015-.37.106-.489.109-.107.24-.28.361-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.543-1.309-.744-1.794-.196-.473-.395-.409-.543-.417l-.462-.008c-.16 0-.421.06-.642.3-.221.24-.844.825-.844 2.012s.864 2.333.985 2.493c.12.16 1.7 2.597 4.12 3.642.576.248 1.026.396 1.377.508.579.184 1.106.158 1.523.096.465-.069 1.422-.581 1.623-1.142.2-.562.2-1.043.14-1.143-.06-.101-.221-.16-.462-.28z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/awa-food-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AWA Group on LinkedIn"
                title="LinkedIn: AWA Food Solutions"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#94A3B8',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(10,102,194,0.18)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(10,102,194,0.45)';
                  (e.currentTarget as HTMLElement).style.color = '#38BDF8';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                  (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/awafoodsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AWA Group on Facebook"
                title="Facebook: AWA Food Solutions"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#94A3B8',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(24,119,242,0.18)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(24,119,242,0.45)';
                  (e.currentTarget as HTMLElement).style.color = '#60A5FA';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                  (e.currentTarget as HTMLElement).style.color = '#94A3B8';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
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
