import React, { useState, useEffect } from 'react';
import { Mail, Phone, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

import { Link } from 'react-router-dom';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();

  const getPath = (id: string, subId?: string) => {
    if (id === 'home') return '/';
    return subId ? `/${id}/${subId}` : `/${id}`;
  };

  const navLinks = [
    { label: t('nav.about', 'About'), id: 'about' },
    { 
      label: t('nav.solutions', 'Food Solutions'), 
      id: 'solutions',
      children: [
        { label: t('nav.categories.dairy', 'Dairy & Cheese Systems'), id: 'solutions', subId: 'dairy' },
        { label: t('nav.categories.meat', 'Meat & Savory Systems'), id: 'solutions', subId: 'meat' },
        { label: t('nav.categories.bakery', 'Bakery & Confectionery'), id: 'solutions', subId: 'bakery' },
        { label: t('nav.categories.beverage', 'Beverages & Syrups'), id: 'solutions', subId: 'beverage' },
        { label: t('nav.categories.sauces', 'Sauces & Dressings'), id: 'solutions', subId: 'sauces' },
        { label: t('nav.categories.rnd', 'R&D Application Labs'), id: 'solutions', subId: 'rnd' },
      ]
    },
    { label: t('nav.trading', 'Formulation & Sourcing'), id: 'trading' },
    { label: t('nav.industries', 'Manufacturing'), id: 'industries' },
    { 
      label: t('nav.products', 'Brands'), 
      id: 'products',
      children: [
        { label: t('nav.categories.sweetAndSlim', 'Sweet & Slim (Diet Sweeteners)'), id: 'products', subId: 'sweet-and-slim' },
        { label: t('nav.categories.squeasy', 'SquEasy (Dessert Purées)'), id: 'products', subId: 'squeasy' },
        { label: t('nav.categories.yallaDrinks', 'Yalla Drinks (Cafe Beverages)'), id: 'products', subId: 'yalla-drinks' },
        { label: t('nav.categories.industrial', 'Industrial Ingredients Portfolio'), id: 'products', subId: 'industrial' },
      ]
    },
    { label: t('nav.sustainability', 'Sustainability'), id: 'sustainability' },
    { label: t('nav.contact', 'Contact'), id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      {/* Editorial Top Contact & Metadata Bar */}
      <div className="top-bar">
        <div className="container-wide top-bar-inner">
          <div className="top-bar-contacts">
            <a href={`mailto:${COMPANY_CONTACT.email}`} className="top-bar-item">
              <Mail size={13} />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <a href={`tel:${COMPANY_CONTACT.phoneAlex.split('/')[0].trim()}`} className="top-bar-item">
              <Phone size={13} />
              <span>{language === 'ar' ? `المقر الرئيسي: ${COMPANY_CONTACT.phoneAlex}` : `Alex HQ: ${COMPANY_CONTACT.phoneAlex}`}</span>
            </a>
            <div className="top-bar-item top-bar-hide-laptop" style={{ gap: '0.4rem', color: '#94A3B8' }}>
              <Globe size={13} color="#4ADE80" />
              <span>{t('nav.topBar.locations', 'Alexandria & Cairo Facilities, Egypt')}</span>
            </div>
          </div>
          <div className="top-bar-links">
            <div className="top-bar-item top-bar-hide-laptop" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4ADE80' }}>
              <ShieldCheck size={13} />
              <span>{t('nav.topBar.certs', 'ISO 9001, FSSC 22000 & Halal Certified')}</span>
            </div>
            <Link 
              to="/careers" 
              className="top-bar-item"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              {t('nav.careers', 'Careers')}
            </Link>
            <div style={{ marginInlineStart: '0.5rem', borderInlineStart: '1px solid rgba(255,255,255,0.15)', paddingInlineStart: '0.75rem' }}>
              <LanguageSwitcher variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-wide navbar-inner">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="brand-logo-wrap" 
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <img 
              src="/images/awa_group.png" 
              alt="AWA Group" 
              className="brand-logo-img"
              style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`nav-item ${currentPage === link.id ? 'active' : ''}`}
              >
                <Link
                  to={getPath(link.id)}
                  className="nav-link"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} style={{ opacity: 0.6 }} />}
                </Link>

                {link.children && (
                  <ul className="nav-dropdown">
                    {link.children.map((child, idx) => (
                      <li key={idx}>
                        <Link
                          to={getPath(child.id, child.subId)}
                          className="dropdown-link"
                          style={{ width: '100%', border: 'none', background: 'none' }}
                        >
                          <span>{child.label}</span>
                          <ArrowRight size={12} style={{ opacity: 0.5 }} className="arrow-icon" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Primary CTA & Mobile Toggle */}
          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LanguageSwitcher variant="navbar" />

            <button 
              onClick={() => {
                if (onOpenQuote) {
                  onOpenQuote();
                } else {
                  onNavigate('contact');
                }
              }}
              className="btn-header-cta"
            >
              <span>{t('nav.quoteBtn', "Let's Work Together")}</span>
              <ArrowRight size={15} />
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
                style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
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

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <Link 
                  to={getPath(link.id)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`}
                >
                  <span>{link.label}</span>
                  {link.children && <ChevronDown size={16} />}
                </Link>
                {link.children && (
                  <ul className="mobile-subnav">
                    {link.children.map((child, idx) => (
                      <li key={idx}>
                        <Link
                          to={getPath(child.id, child.subId)}
                          onClick={() => setMobileMenuOpen(false)}
                          className="mobile-subnav-link"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <LanguageSwitcher variant="mobile" />

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuote) {
                  onOpenQuote();
                } else {
                  onNavigate('contact');
                }
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>{t('nav.quoteBtn', "Let's Work Together")}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

