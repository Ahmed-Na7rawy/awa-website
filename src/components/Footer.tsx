import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, Award, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (pageId: string, subId?: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

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
                style={{ height: '44px', objectFit: 'contain' }} 
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <p className="footer-brand-desc" style={{ maxWidth: '340px', lineHeight: '1.6', fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
              {language === 'ar'
                ? 'حلول أغذية مخصصة. مصممة للأداء. تربط AWA بين التوريد، والبحث والتطوير التطبيقي، والتصنيع لخدمة الصناعة ومشغلي الأغذية والأسواق الاستهلاكية.'
                : 'Tailored Food Solutions. Built to Perform. AWA connects sourcing, applied R&D and manufacturing to serve industry, professional food operators and consumer markets.'}
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#4ADE80',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              SOURCE · DEVELOP · MANUFACTURE
            </div>
          </div>

          {/* Business Portfolio */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, marginBottom: '1.2rem' }}>
              {language === 'ar' ? 'قطاعات الأعمال' : 'Business Portfolio'}
            </h4>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/solutions" className="footer-link-item">
                  {language === 'ar' ? 'حلول الصناعات الغذائية' : 'Industry Solutions'}
                </Link>
              </li>
              <li>
                <Link to="/food-services" className="footer-link-item">
                  {language === 'ar' ? 'خدمات الأغذية (Food Services)' : 'Food Services'}
                </Link>
              </li>
              <li>
                <Link to="/brands" className="footer-link-item">
                  {language === 'ar' ? 'العلامات الاستهلاكية (Brands)' : 'Consumer Portfolio'}
                </Link>
              </li>
              <li>
                <Link to="/solutions/catalogue" className="footer-link-item">
                  {language === 'ar' ? 'كتالوج المنتجات الصناعية' : 'Industrial Products Catalogue'}
                </Link>
              </li>
              <li>
                <Link to="/brands/sweet-and-slim" className="footer-link-item">
                  Sweet & Slim
                </Link>
              </li>
              <li>
                <Link to="/brands/yalla-drinks" className="footer-link-item">
                  Yalla Drinks
                </Link>
              </li>
              <li>
                <Link to="/brands/squeasy" className="footer-link-item">
                  SquEasy
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Group */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, marginBottom: '1.2rem' }}>
              {language === 'ar' ? 'مجموعتنا' : 'Our Group'}
            </h4>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/about" className="footer-link-item">
                  {language === 'ar' ? 'عن AWA' : 'About AWA'}
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="footer-link-item">
                  {language === 'ar' ? 'كلمة رئيس مجلس الإدارة' : 'CEO Message'}
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="footer-link-item">
                  {language === 'ar' ? 'قدراتنا المتكاملة' : 'Our Capabilities'}
                </Link>
              </li>
              <li>
                <Link to="/capabilities/manufacturing" className="footer-link-item">
                  {language === 'ar' ? 'التميز الصناعي ومجمع برج العرب' : 'Manufacturing Excellence'}
                </Link>
              </li>
              <li>
                <Link to="/quality" className="footer-link-item">
                  {language === 'ar' ? 'الجودة والشهادات' : 'Quality & Certifications'}
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="footer-link-item">
                  {language === 'ar' ? 'الاستدامة والنمو المسؤول' : 'Sustainability'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Locations */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, marginBottom: '1.2rem' }}>
              {language === 'ar' ? 'التواصل والشبكة' : 'Connect'}
            </h4>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/global" className="footer-link-item">
                  {language === 'ar' ? 'المشاريع المشتركة والوكالات' : 'Joint Ventures & Principals'}
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="footer-link-item">
                  {language === 'ar' ? 'الأخبار والمقالات' : 'Insights & News'}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link-item">
                  {language === 'ar' ? 'الوظائف' : 'Careers'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link-item">
                  {language === 'ar' ? 'اتصل بنا' : 'Contact AWA'}
                </Link>
              </li>
              <li style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="footer-link-item" style={{ color: '#4ADE80' }}>
                  {COMPANY_CONTACT.email}
                </a>
              </li>
              <li>
                <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                  Alex HQ: +203 4292030 / 4211200
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom" style={{
          marginTop: '3.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748B'
        }}>
          <div>
            © {currentYear} AWA Group. All rights reserved. FSSC 22000, ISO 9001, ISO 14001, ISO 45001 & Halal Certified.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/quality" style={{ color: '#94A3B8' }}>Quality Policy</Link>
            <Link to="/sustainability" style={{ color: '#94A3B8' }}>ESG Commitment</Link>
            <Link to="/contact" style={{ color: '#94A3B8' }}>Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
