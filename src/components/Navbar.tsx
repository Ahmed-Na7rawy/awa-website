import React from 'react';
import { Mail, Phone, MapPin, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS, COMPANY_CONTACT } from '../data/siteData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string, subId?: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
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
    <header>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-contacts">
            <a href={`mailto:${COMPANY_CONTACT.email}`} className="top-bar-item">
              <Mail size={14} />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <a href={`tel:${COMPANY_CONTACT.phoneAlex.split('/')[0].trim()}`} className="top-bar-item">
              <Phone size={14} />
              <span>Alex: {COMPANY_CONTACT.phoneAlex}</span>
            </a>
            <span className="top-bar-item" style={{ display: 'none', lg: 'inline-flex' }}>
              <MapPin size={14} />
              <span>Alexandria & Cairo, Egypt</span>
            </span>
          </div>
          <div className="top-bar-links">
            <span className="top-bar-item" style={{ fontSize: '0.75rem', opacity: 0.8 }}>
              ISO 9001 & FSSC 22000 Certified
            </span>
            <button 
              onClick={() => handleNavClick('careers')} 
              className="top-bar-item"
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', fontSize: '0.825rem' }}
            >
              Careers
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-wide navbar-inner">
          <div 
            className="brand-logo-wrap" 
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0, marginLeft: '0.5rem' }}
          >
            <img 
              src="/images/awa_group.png" 
              alt="AWA Group" 
              className="brand-logo-img"
              style={{ height: '40px', width: 'auto', objectFit: 'contain', display: 'block' }}
              onError={(e) => {
                // Fallback to text if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111a2e', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                AWA <span style={{ color: '#128d46' }}>GROUP</span>
              </span>
              <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', fontWeight: 600, marginTop: '2px' }}>
                Food Solutions & Sourcing
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
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
                  {link.children && <ChevronDown size={14} style={{ opacity: 0.7 }} />}
                </button>

                {link.children && (
                  <ul className="nav-dropdown">
                    {link.children.map((child, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => handleNavClick(child.id, child.subId)}
                          className="dropdown-link"
                          style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
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

          {/* Actions */}
          <div className="nav-actions">
            <button 
              onClick={onOpenQuote}
              className="btn btn-primary btn-sm"
              style={{ display: 'none', sm: 'inline-flex' }}
            >
              Request Quote
              <ArrowRight size={14} />
            </button>
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="brand-logo-wrap" onClick={() => handleNavClick('home')}>
              <img src="/images/awa_group.png" alt="AWA Group" style={{ height: '36px' }} />
              <span style={{ fontWeight: 800, color: '#111a2e' }}>AWA GROUP</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} style={{ color: '#64748b' }}>
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`mobile-nav-link ${currentPage === link.id ? 'active' : ''}`}
                  style={{ width: '100%', textAlign: 'left', border: 'none', background: 'none' }}
                >
                  <span>{link.label}</span>
                </button>
                {link.children && (
                  <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '0.5rem' }}>
                    {link.children.map((child, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(child.id, child.subId)}
                        style={{
                          textAlign: 'left',
                          padding: '0.4rem 0.5rem',
                          fontSize: '0.875rem',
                          color: '#64748b',
                          background: 'none',
                          border: 'none'
                        }}
                      >
                        • {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '1rem' }}
            >
              Get In Touch
            </button>
            <div style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
              Alex: {COMPANY_CONTACT.phoneAlex}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
