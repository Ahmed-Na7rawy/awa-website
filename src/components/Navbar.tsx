import React, { useState, useEffect } from 'react';
import { Mail, Phone, ChevronDown, Menu, X, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { NAV_LINKS, COMPANY_CONTACT } from '../data/siteData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string, subId?: string) => {
    onNavigate(pageId, subId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <span>Alex HQ: {COMPANY_CONTACT.phoneAlex}</span>
            </a>
            <div className="top-bar-item top-bar-hide-laptop" style={{ gap: '0.4rem', color: '#94A3B8' }}>
              <Globe size={13} color="#4ADE80" />
              <span>Alexandria & Cairo Facilities, Egypt</span>
            </div>
          </div>
          <div className="top-bar-links">
            <div className="top-bar-item top-bar-hide-laptop" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4ADE80' }}>
              <ShieldCheck size={13} />
              <span>ISO 9001, FSSC 22000 & Halal Certified</span>
            </div>
            <button 
              onClick={() => handleNavClick('careers')} 
              className="top-bar-item"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Careers
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-wide navbar-inner">
          {/* Brand Logo & Slogan */}
          <div 
            className="brand-logo-wrap" 
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <img 
              src="/images/awa_group.png" 
              alt="AWA Group" 
              className="brand-logo-img"
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="brand-text-wrap" style={{ borderLeft: '1.5px solid rgba(0, 0, 0, 0.12)', paddingLeft: '0.75rem', display: 'flex', flexDirection: 'column' }}>
              <span className="brand-sub" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                Your Regional Sustainable Partner
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu">
            {NAV_LINKS.map((link) => (
              <li 
                key={link.id} 
                className={`nav-item ${currentPage === link.id ? 'active' : ''}`}
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="nav-link"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} style={{ opacity: 0.6 }} />}
                </button>

                {link.children && (
                  <ul className="nav-dropdown">
                    {link.children.map((child, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => handleNavClick(child.id, child.subId)}
                          className="dropdown-link"
                          style={{ width: '100%', border: 'none', background: 'none' }}
                        >
                          <span>{child.label}</span>
                          <ArrowRight size={12} style={{ opacity: 0.5 }} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Primary CTA & Mobile Toggle */}
          <div className="nav-actions">
            <button 
              onClick={() => (onOpenQuote ? onOpenQuote() : handleNavClick('contact'))}
              className="btn-header-cta"
            >
              <span>Let's Work Together</span>
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
            <div className="brand-logo-wrap" onClick={() => handleNavClick('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img 
                src="/images/awa_group.png" 
                alt="AWA Group" 
                style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                Your Regional Sustainable Partner
              </span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              aria-label="Close navigation"
              style={{ color: 'var(--text-muted)', padding: '0.4rem', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              <X size={26} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <button 
                  onClick={() => handleNavClick(link.id)}
                  className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`}
                >
                  <span>{link.label}</span>
                  {link.children && <ChevronDown size={16} />}
                </button>
                {link.children && (
                  <ul className="mobile-subnav">
                    {link.children.map((child, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => handleNavClick(child.id, child.subId)}
                          className="mobile-subnav-link"
                        >
                          {child.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
