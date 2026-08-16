import React from 'react';
import { ShieldCheck, Award, Target, Eye, CheckCircle2, Factory, Users, Globe2, Building } from 'lucide-react';
import { CERTIFICATIONS, ABOUT_CERTS, ABOUT_LOGOS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';

interface AboutProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div>
      {/* Header Banner */}
      <section className="page-banner">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <span className="badge badge-dark">Since 1993</span>
            <h1 className="page-banner-title">About AWA Group</h1>
            <p className="page-banner-subtitle">
              At AWA Group, everything we do starts with research. Understanding the Egyptian market, and what quality means within it, is the foundation for every solution we develop.
              <br /><br />
              We hold research and quality control to the same standard. That is the principle behind our work, and it is the one we carry forward as we grow beyond Egypt.
            </p>
            <div style={{ marginTop: '1.75rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <img
                src="/images/pages/about/signature.png"
                alt="Wael Ghandour Signature"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.95
                }}
              />
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.25)', paddingLeft: '1rem' }}>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>Wael Ghandour</div>
                <div style={{ color: '#34d399', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>CEO, AWA Group</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              width: '100%',
              maxWidth: '340px',
              height: '320px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 25px rgba(18, 141, 70, 0.3)',
              border: '2px solid rgba(255, 255, 255, 0.15)',
              position: 'relative'
            }}>
              <img
                src="/images/pages/home/Image2-3.jpg"
                alt="About AWA Food Solutions Leadership"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17, 26, 46, 0.35) 0%, transparent 40%)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & History */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Our Heritage</span>
              <h2 className="section-title">A Legacy of Innovation & Food Science Excellence</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Established in 1993 in Alexandria, Egypt, <strong>AWA Group</strong> has evolved from a specialized trading firm into a diversified industrial powerhouse covering ingredients distribution, custom food application R&D, temperature-controlled logistics, and retail brand manufacturing.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                In 2009, <strong>AWA Food Solutions</strong> was founded to focus on advanced functional ingredient blends, hydrocolloid systems, and customized recipe formulations for the dairy, meat, bakery, and beverage sectors.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Today, our New Borg El-Arab City production complex operates under strict international certifications (FSSC 22000, ISO 9001, ISO 14001, ISO 45001), serving leading multinational and local FMCG manufacturers.
              </p>

              {/* CEO Signature */}
              <div style={{ margin: '1.75rem 0 2rem 0', display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem 1.25rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', width: 'fit-content' }}>
                <img
                  src="/images/pages/about/signature.png"
                  alt="Wael Ghandour - CEO, AWA Group"
                  style={{ height: '54px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
                <div style={{ borderLeft: '2px solid #cbd5e1', paddingLeft: '1.25rem' }}>
                  <div style={{ fontWeight: 800, color: '#111a2e', fontSize: '0.95rem' }}>Mr. Wael Ghandour</div>
                  <div style={{ fontSize: '0.8rem', color: '#128d46', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>CEO, AWA Group</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('solutions')} className="btn btn-primary">
                  Explore Our Solutions
                </button>
                <button onClick={onOpenQuote} className="btn btn-secondary">
                  Work With Us
                </button>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="/images/pages/about/image10.jpg"
                alt="AWA History & Laboratory"
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/about/image9.jpg';
                }}
              />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem' }}>
                <img
                  src="/images/pages/about/image9.jpg"
                  alt="AWA Research"
                  style={{ width: '50%', height: '140px', objectFit: 'cover', borderRadius: '12px' }}
                />
                <img
                  src="/images/pages/about/image_9.jpg"
                  alt="AWA Pilot Plant"
                  style={{ width: '50%', height: '140px', objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="section section-alt pattern-grid">
        <div className="container">
          <div className="cards-3col">
            {/* Vision */}
            <div className="premium-card" style={{ padding: '2.5rem 2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                To be the most trusted and innovative food solutions and ingredients partner across the Middle East and Africa, setting benchmarks for quality, food safety, and tailored technological support.
              </p>
            </div>

            {/* Mission */}
            <div className="premium-card" style={{ padding: '2.5rem 2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                To empower food manufacturers with high-performance ingredients, state-of-the-art pilot formulation labs, agile logistics, and sustainable practices that enhance consumer well-being and market success.
              </p>
            </div>

            {/* Core Values */}
            <div className="premium-card" style={{ padding: '2.5rem 2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>Core Values</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#128d46" /> Scientific Rigor & Innovation
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#128d46" /> Uncompromised Quality & Safety
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#128d46" /> Customer-Centric Collaboration
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#128d46" /> Sustainable & Ethical Operation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Infrastructure */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Infrastructure</span>
            <h2 className="section-title">World-Class Facilities Across Egypt</h2>
            <p className="section-desc">
              Strategic locations ensuring swift response, pilot testing, and rapid distribution nationwide.
            </p>
          </div>

          <div className="cards-3col">
            <div className="pillar-card premium-card">
              <div style={{ padding: '2rem' }}>
                <Building size={32} color="#128d46" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Alexandria Headquarters</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  243 Horreya Road, Sporting, Alexandria. Executive management, international procurement, and commercial leadership.
                </p>
                <span className="badge" style={{ margin: 0 }}>Executive Office</span>
              </div>
            </div>

            <div className="pillar-card premium-card">
              <div style={{ padding: '2rem' }}>
                <Factory size={32} color="#128d46" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Borg El-Arab Plant</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  4th Industrial Zone, New Borg El-Arab City. Automated blending lines, clean packaging zones, chemical & microbiological labs.
                </p>
                <span className="badge" style={{ margin: 0 }}>Manufacturing & R&D</span>
              </div>
            </div>

            <div className="pillar-card premium-card">
              <div style={{ padding: '2rem' }}>
                <Globe2 size={32} color="#128d46" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Cairo Commercial Hub</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  15 Abd Elwahab Selim El-bishry St., Sheraton, Cairo. Sales support, client application demo center, and distribution logistics.
                </p>
                <span className="badge" style={{ margin: 0 }}>Commercial Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Accreditations and Certifications Marquee */}
      <section className="section section-dark glowing-bg">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-dark">Certified Standards</span>
            <h2 className="section-title">International Certifications & Accreditations</h2>
            <p className="section-desc">
              All facilities adhere to rigorous international management and food safety standards.
            </p>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <PartnerMarquee
              title="Official Certification Seals"
              items={ABOUT_CERTS}
              speed="normal"
            />
          </div>

          <PartnerMarquee
            title="Affiliated Industry Accreditation Bodies"
            items={ABOUT_LOGOS}
            speed="slow"
            reverse={true}
          />
        </div>
      </section>
    </div>
  );
};
