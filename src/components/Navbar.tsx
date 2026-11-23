import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Globe, Search } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SearchModal } from './SearchModal';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (pageId: string, subId?: string) => void;
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const { t, language } = useLanguage();
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleCustomOpenSearch = () => setSearchOpen(true);
    window.addEventListener('open-search', handleCustomOpenSearch);
    return () => window.removeEventListener('open-search', handleCustomOpenSearch);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  const navItems = [
    {
      id: 'about',
      label: language === 'ar' ? 'عن المجموعة' : 'About',
      route: '/about',
      columns: [
        {
          heading: language === 'ar' ? 'عن AWA' : 'About AWA',
          links: [
            { label: language === 'ar' ? 'من نحن' : 'Who We Are', href: '/about#who-we-are' },
            { label: language === 'ar' ? 'كلمة رئيس مجلس الإدارة' : 'CEO Message', href: '/about#leadership' },
            { label: language === 'ar' ? 'الرؤية والرسالة والقيم' : 'Our Purpose, Vision & Values', href: '/about#purpose' },
          ]
        },
        {
          heading: language === 'ar' ? 'الثقة والمسؤولية' : 'Trust & Responsibility',
          links: [
            { label: language === 'ar' ? 'الجودة والشهادات' : 'Quality & Certifications', href: '/quality' },
            { label: language === 'ar' ? 'الاستدامة' : 'Sustainability', href: '/sustainability' },
          ]
        }
      ]
    },
    {
      id: 'solutions',
      label: language === 'ar' ? 'حلول الصناعات الغذائية' : 'Industry Solutions',
      route: '/solutions',
      columns: [
        {
          heading: language === 'ar' ? 'استكشاف حسب الصناعة' : 'By Industry',
          links: [
            { label: language === 'ar' ? 'الألبان والأجبان والمثلجات' : 'Dairy, Cheese & Frozen Desserts', href: '/solutions/industry/dairy-cheese' },
            { label: language === 'ar' ? 'اللحوم والدواجن والأسماك' : 'Meat, Poultry & Seafood', href: '/solutions/industry/meat-seafood' },
            { label: language === 'ar' ? 'المخبوزات والحلويات' : 'Bakery & Confectionery', href: '/solutions/industry/bakery' },
            { label: language === 'ar' ? 'المشروبات والعصائر' : 'Beverages', href: '/solutions/industry/beverages' },
            { label: language === 'ar' ? 'الصلصات والشوربات والمأكولات' : 'Sauces, Soups & Culinary', href: '/solutions/industry/culinary' },
            { label: language === 'ar' ? 'المقرمشات والسناكس وحبوب الإفطار' : 'Snacks & Cereals', href: '/solutions/industry/snacks' },
          ]
        },
        {
          heading: language === 'ar' ? 'استكشاف حسب التحدي' : 'By Challenge',
          links: [
            { label: language === 'ar' ? 'القوام والتركيب البنائي' : 'Texture & Structure', href: '/solutions/challenge/texture' },
            { label: language === 'ar' ? 'الثبات وفترة الصلاحية' : 'Stability & Shelf Life', href: '/solutions/challenge/stability' },
            { label: language === 'ar' ? 'المذاق والخواص الحسية' : 'Taste & Sensory', href: '/solutions/challenge/taste' },
            { label: language === 'ar' ? 'الإنتاجية وكفاءة التصنيع' : 'Yield & Processing', href: '/solutions/challenge/yield' },
            { label: language === 'ar' ? 'التركيبات الاقتصادية والجدوى' : 'Cost-Effective Formulations', href: '/solutions/challenge/affordability' },
            { label: language === 'ar' ? 'التغذية وإعادة الصياغة' : 'Nutrition & Reformulation', href: '/solutions/challenge/nutrition-reformulation' },
            { label: language === 'ar' ? 'اللون والمظهر البصري' : 'Color & Appearance', href: '/solutions/challenge/appearance' },
            { label: language === 'ar' ? 'تطوير المنتجات الجديدة' : 'New Product Development', href: '/solutions/challenge/new-product' },
          ]
        },
        {
          heading: language === 'ar' ? 'عائلات المنتجات والمواصفات' : 'By Product Family',
          links: [
            { label: language === 'ar' ? 'كتالوج كافة المنتجات (Catalogue)' : 'All Product Families (Catalogue)', href: '/solutions/catalogue' },
            { label: language === 'ar' ? 'حلول القوام والتركيب البنائي' : 'Texture & Structure Solutions', href: '/solutions/family/texture-structure' },
            { label: language === 'ar' ? 'حلول المذاق والخواص الحسية' : 'Taste & Sensory Solutions', href: '/solutions/family/taste-sensory' },
            { label: language === 'ar' ? 'حلول الحفظ وفترة الصلاحية' : 'Preservation & Shelf Life', href: '/solutions/family/preservation' },
            { label: language === 'ar' ? 'حلول التغذية والتدعيم' : 'Nutrition Solutions', href: '/solutions/family/nutrition' },
            { label: language === 'ar' ? 'حلول اللون والمظهر البصري' : 'Color & Appearance Solutions', href: '/solutions/family/color-appearance' },
            { label: language === 'ar' ? 'حلول الأداء الوظيفي والمعالجة' : 'Functional Processing Solutions', href: '/solutions/family/functional-processing' },
          ]
        }
      ]
    },
    {
      id: 'foodservices',
      label: language === 'ar' ? 'خدمات الأغذية' : 'Food Services',
      route: '/food-services',
      columns: [
        {
          heading: language === 'ar' ? 'قطاعات وحلول خدمات الأغذية' : 'Food Services Solutions & Sectors',
          links: [
            { label: language === 'ar' ? 'نظرة عامة على القطاع والقدرات' : 'Overview & Capabilities', href: '/food-services' },
            { label: language === 'ar' ? 'حلول المقاهي والمشروبات' : 'Beverage & Café Solutions', href: '/food-services#beverages' },
            { label: language === 'ar' ? 'حلول الفنادق والضيافة' : 'Hotel & Hospitality Solutions', href: '/food-services#hospitality' },
            { label: language === 'ar' ? 'حلول الطهي والمطابخ الاحترافية' : 'Culinary & Savory Solutions', href: '/food-services#culinary' },
            { label: language === 'ar' ? 'الدعم التشغيلي والحلول المخصصة' : 'Tailored Operational Support', href: '/food-services#tailored' },
          ]
        }
      ]
    },
    {
      id: 'brands',
      label: language === 'ar' ? 'العلامات التجارية' : 'Consumer Portfolio',
      route: '/brands',
      columns: [
        {
          heading: language === 'ar' ? 'علامات AWA الاستهلاكية' : 'AWA-Owned Brands',
          links: [
            { label: 'Sweet & Slim (Diet Sweeteners)', href: '/brands/sweet-and-slim' },
            { label: 'Yalla Drinks (Café Beverages & Frappé)', href: '/brands/yalla-drinks' },
            { label: "Squ'easy (Garlic & Harissa Preparations)", href: '/brands/squeasy' },
            { label: language === 'ar' ? 'استعراض العلامات المملوكة' : 'All Owned Brands Overview', href: '/brands#owned' },
          ]
        },
        {
          heading: language === 'ar' ? 'المنتجات الشريكة' : 'Partnered Retail Products',
          links: [
            { label: language === 'ar' ? 'سري (أكواب شوربة فورية وقواعد طهي)' : 'SIRRI Foods (Instant Soups & Culinary)', href: '/brands/sirri' },
            { label: language === 'ar' ? 'استعراض الشراكة الدولية لـ SIRRI' : 'Partner Collaboration Overview', href: '/brands#partnered' },
          ]
        }
      ]
    },
    {
      id: 'capabilities',
      label: language === 'ar' ? 'قدراتنا' : 'Our Capabilities',
      route: '/capabilities',
      columns: [
        {
          heading: language === 'ar' ? 'التوريد والتطوير' : 'Source & Develop',
          links: [
            { label: language === 'ar' ? 'التوريد وسلاسل الإمداد العالمية' : 'Global Sourcing & Supply', href: '/capabilities/sourcing' },
            { label: language === 'ar' ? 'الأبحاث ومعامل التطبيقات R&D' : 'R&D & Application Development', href: '/capabilities/rd' },
            { label: language === 'ar' ? 'التركيبات الوظيفية المخصصة' : 'Customized Formulations', href: '/capabilities/formulations' },
          ]
        },
        {
          heading: language === 'ar' ? 'التصنيع الصناعي' : 'Industrial Manufacturing',
          links: [
            { label: language === 'ar' ? 'التميز الصناعي ومجمع برج العرب' : 'Manufacturing Excellence', href: '/capabilities/manufacturing' },
            { label: language === 'ar' ? 'التصنيع التعاقدي والتعبئة (OEM)' : 'Selective Contract Manufacturing', href: '/capabilities/strategic-manufacturing' },
          ]
        }
      ]
    },
    {
      id: 'global',
      label: language === 'ar' ? 'الشبكة العالمية' : 'Global Network',
      route: '/global',
      columns: [
        {
          heading: language === 'ar' ? 'المشاريع المشتركة' : 'Strategic Joint Ventures',
          links: [
            { label: 'Turkphos (Türkiye / Egypt)', href: '/turkphos' },
            { label: 'Ingreva (Estonia / Europe)', href: '/ingreva' },
            { label: language === 'ar' ? 'نظرة عامة على المشاريع المشتركة' : 'Joint Ventures Overview', href: '/global#joint-ventures' },
          ]
        },
        {
          heading: language === 'ar' ? 'الشركاء والوكالات العالمية' : 'Global Principal Network',
          links: [
            { label: language === 'ar' ? 'استعراض كافة التوكيلات (9 شركاء)' : 'Explore All 9 Principals', href: '/global/principals' },
            { label: 'Siveele (The Netherlands)', href: '/global/principals' },
            { label: 'JRS Silvateam (Germany / Italy)', href: '/global/principals' },
            { label: 'AIPU Food (China)', href: '/global/principals' },
            { label: 'Škrobárny Pelhřimov (Czech Republic)', href: '/global/principals' },
            { label: 'Madhu Silica (India)', href: '/global/principals' },
            { label: 'Mokate Ingredients (Poland)', href: '/global/principals' },
            { label: 'Mayasan (Türkiye)', href: '/global/principals' },
          ]
        },
        {
          heading: language === 'ar' ? 'الأعمال الدولية والتصدير' : 'International Business',
          links: [
            { label: language === 'ar' ? 'فرص التصدير والشراكة (20+ سوق)' : 'Export & International Trade (20+ Markets)', href: '/global/exports' },
            { label: language === 'ar' ? 'الاتفاقيات التجارية (إعفاء 0% GAFTA)' : 'Trade Agreements (0% GAFTA & COMESA)', href: '/global/exports' },
            { label: language === 'ar' ? 'بدء مناقشة تعاون دولي' : 'Discuss a Collaboration', href: '/contact?type=partnership' },
          ]
        }
      ]
    }
  ];

  return (
    <>
      <header className={`site-header ${isHomePage ? 'hero-overlay' : ''} ${isTransparent ? 'is-transparent' : 'is-scrolled'}`}>
        {/* Top Contact & Metadata Bar */}
        <div className="top-bar">
          <div className="container-wide top-bar-inner">
            <div className="top-bar-contacts">
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="top-bar-item">
                <Mail size={13} />
                <span>{COMPANY_CONTACT.email}</span>
              </a>
              <a href={`tel:${COMPANY_CONTACT.phoneMain}`} className="top-bar-item">
                <Phone size={13} />
                <span>{language === 'ar' ? `هاتف: ${COMPANY_CONTACT.phoneMain}` : `Tel: ${COMPANY_CONTACT.phoneMain}`}</span>
              </a>
              <div className="top-bar-item top-bar-hide-laptop" style={{ gap: '0.4rem' }}>
                <Globe size={13} />
                <span>{language === 'ar' ? '15 شارع عبد الوهاب سليم البشري، شيراتون، القاهرة، مصر' : '15 Abd Elwahab Selim El-bishry St., Sheraton, Cairo, Egypt'}</span>
              </div>
            </div>
            <div className="top-bar-links">
              <div className="top-bar-item top-bar-hide-laptop" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                <ShieldCheck size={13} />
                <span>FSSC 22000, ISO 9001, ISO 14001, ISO 45001 & Halal</span>
              </div>
              <Link 
                to="/knowledge" 
                className="top-bar-item"
                style={{ fontSize: '0.8rem' }}
              >
                {language === 'ar' ? 'الأخبار والمقالات' : 'Insights & News'}
              </Link>
              <Link 
                to="/careers" 
                className="top-bar-item"
                style={{ fontSize: '0.8rem' }}
              >
                {language === 'ar' ? 'الوظائف' : 'Careers'}
              </Link>
              <div style={{ marginInlineStart: '0.5rem', borderInlineStart: '1px solid rgba(16, 38, 59, 0.2)', paddingInlineStart: '0.75rem' }}>
                <LanguageSwitcher variant="topbar" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="container-wide navbar-inner">
            {/* Brand Logo - Keep Official Colored Logo Always */}
            <Link 
              to="/" 
              className="brand-logo-wrap" 
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              aria-label="AWA Group Home"
            >
              <img 
                src="/images/awa_group.png" 
                alt="AWA Group" 
                className="brand-logo-img"
                style={{ 
                  height: '42px', 
                  width: 'auto', 
                  objectFit: 'contain'
                }}
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li 
                  key={item.id} 
                  className={`nav-item ${location.pathname.startsWith(item.route) ? 'active' : ''}`}
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.route}
                    className="nav-link"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={13} className="chevron-icon" style={{ opacity: 0.7 }} />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {activeDropdown === item.id && (
                    <div 
                      className="nav-dropdown"
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: language === 'ar' ? (item.id === 'global' || item.id === 'capabilities' ? '0' : 'auto') : (item.id === 'global' || item.id === 'capabilities' ? 'auto' : '0'),
                        right: language === 'ar' ? (item.id === 'global' || item.id === 'capabilities' ? 'auto' : '0') : (item.id === 'global' || item.id === 'capabilities' ? '0' : 'auto'),
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
                        border: '1px solid var(--border-color)',
                        padding: '1.75rem',
                        minWidth: item.columns.length > 2 ? '860px' : (item.columns.length > 1 ? '560px' : '320px'),
                        maxWidth: '92vw',
                        display: 'grid',
                        gridTemplateColumns: `repeat(${item.columns.length}, 1fr)`,
                        gap: '1.75rem',
                        zIndex: 1000
                      }}
                    >
                      {item.columns.map((col, cIdx) => (
                        <div key={cIdx}>
                          <div style={{
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            marginBottom: '0.75rem',
                            paddingBottom: '0.35rem',
                            borderBottom: '1px solid var(--border-color)'
                          }}>
                            {col.heading}
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {col.links.map((lnk, lIdx) => (
                              <li key={lIdx}>
                                <Link
                                  to={lnk.href}
                                  className="dropdown-link"
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '0.35rem 0.5rem',
                                    borderRadius: '8px',
                                    fontSize: '0.825rem',
                                    lineHeight: 1.35,
                                    color: 'var(--text-main)',
                                    transition: 'all 0.15s ease'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--bg-soft)';
                                    e.currentTarget.style.color = 'var(--primary)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-main)';
                                  }}
                                >
                                  <span>{lnk.label}</span>
                                  <ArrowRight size={12} style={{ opacity: 0.4 }} />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Actions (Search, Quote CTA, Mobile Toggle) */}
            <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                className="search-toggle-btn"
                onClick={() => setSearchOpen(true)}
                title="Search site (Ctrl+K)"
                aria-label="Open site search"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-soft)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  cursor: 'pointer'
                }}
              >
                <Search size={16} />
              </button>

              <LanguageSwitcher variant="navbar" />

              <button 
                onClick={() => {
                  if (onOpenQuote) {
                    onOpenQuote();
                  } else {
                    window.location.hash = '#/contact?type=technical';
                  }
                }}
                className="btn-header-cta"
              >
                <span>{language === 'ar' ? 'ابدأ محادثة' : 'Start a conversation'}</span>
                <ArrowRight size={14} />
              </button>

              <button 
                className="mobile-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle Mobile Navigation Drawer"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="brand-logo-wrap" style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                  src="/images/awa_group.png" 
                  alt="AWA Group" 
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                aria-label="Close navigation"
                style={{ color: 'var(--text-muted)', padding: '0.4rem', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <X size={26} />
              </button>
            </div>

            <div style={{ padding: '0 1rem 1rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.65rem 1rem',
                  borderRadius: '10px',
                  background: 'var(--bg-soft)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}
              >
                <Search size={16} />
                <span>{language === 'ar' ? 'البحث في الموقع والحلول...' : 'Search pages & solutions...'}</span>
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <div 
                    onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                    className="mobile-nav-link"
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} style={{ transform: activeDropdown === item.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </div>

                  {activeDropdown === item.id && (
                    <div style={{ padding: '0.5rem 1rem 1rem', background: 'var(--bg-soft)', borderRadius: '10px', margin: '0.25rem 0 0.5rem' }}>
                      <Link 
                        to={item.route}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ display: 'block', fontWeight: 700, color: 'var(--primary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}
                      >
                        {item.label} Overview ↗
                      </Link>
                      {item.columns.map((col, cIdx) => (
                        <div key={cIdx} style={{ marginTop: '0.5rem' }}>
                          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                            {col.heading}
                          </div>
                          {col.links.map((lnk, lIdx) => (
                            <Link
                              key={lIdx}
                              to={lnk.href}
                              onClick={() => setMobileMenuOpen(false)}
                              style={{ display: 'block', padding: '0.35rem 0', fontSize: '0.85rem', color: 'var(--text-main)' }}
                            >
                              {lnk.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div style={{ padding: '1rem' }}>
              <LanguageSwitcher variant="mobile" />
            </div>

            <div style={{ marginTop: 'auto', padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuote) {
                    onOpenQuote();
                  } else {
                    window.location.hash = '#/contact?type=technical';
                  }
                }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{language === 'ar' ? 'ابدأ محادثة' : 'Start a conversation'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Fast Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
