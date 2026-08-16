import React from 'react';
import { ShieldCheck, Target, Eye, CheckCircle2, Factory, Globe2, Building } from 'lucide-react';
import { CERTIFICATIONS, ABOUT_CERTS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';

interface AboutProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="about-page">
      {/* Editorial Header Banner */}
      <section className="section section-dark" style={{ padding: '5.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <div className="eyebrow eyebrow-dark">Established 1993</div>
            <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
              Three Decades of Food Technology Leadership
            </h1>
            <p className="section-desc">
              At AWA Group, everything we do starts with research. Understanding the Egyptian market, and what quality means within it, is the foundation for every solution we develop. We hold research and quality control to the same standard across Egypt and internationally.
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
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem' }}>Wael Ghandour</div>
                <div style={{ color: '#4ADE80', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>CEO, AWA Group</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}>
              <img
                src="/images/pages/home/Image2-3.jpg"
                alt="AWA Group Corporate Leadership"
                style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center 10%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Timeline Narrative */}
      <section className="section">
        <div className="container">
          <div className="editorial-grid">
            <div>
              <div className="eyebrow">Our Heritage & Legacy</div>
              <h2 className="section-title">Bridging Global Food Science with Regional Scale</h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Established in 1993 in Alexandria, Egypt, <strong>AWA Group</strong> has evolved from a specialized trading firm into a premier industrial group spanning ingredient distribution, custom food application R&D, temperature-controlled logistics, and consumer brand manufacturing.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                In 2009, <strong>AWA Food Solutions</strong> was established to focus on advanced functional hydrocolloid systems, texturizers, emulsifiers, and customized recipe formulations for the dairy, meat, bakery, and beverage sectors.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Today, our New Borg El-Arab City production complex operates under strict international safety standards (FSSC 22000, ISO 9001, ISO 14001, ISO 45001, Halal), partnering with leading multinational and regional food manufacturers.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('solutions')} className="btn btn-primary">
                  Explore Solutions Matrix
                </button>
                <button onClick={onOpenQuote} className="btn btn-secondary">
                  Work With Our Technical Team
                </button>
              </div>
            </div>

            <div className="editorial-img-container">
              <img 
                src="/images/pages/about/image10.jpg" 
                alt="AWA Research & Development Facilities" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/about/image9.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="section section-stone">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Strategic Foundation</div>
            <h2 className="section-title">Our Vision, Mission & Core Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* Vision */}
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                To be the most trusted and innovative food solutions and ingredients partner across the Middle East and Africa, setting benchmarks for quality, food safety, and tailored technological support.
              </p>
            </div>

            {/* Mission */}
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                To empower food manufacturers with high-performance ingredients, state-of-the-art pilot formulation labs, agile logistics, and sustainable practices that enhance consumer well-being.
              </p>
            </div>

            {/* Values */}
            <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Core Values</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Scientific Rigor & Formulation Excellence
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Uncompromised Quality & Safety Standards
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Long-Term Client Partnership
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Environmental & Operational Stewardship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Infrastructure */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Strategic Footprint</div>
            <h2 className="section-title">World-Class Facilities Across Egypt</h2>
            <p className="section-desc">
              Strategic locations ensuring rapid formulation response, pilot laboratory testing, and seamless supply chain distribution nationwide.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Building size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Alexandria Headquarters</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                243 Horreya Road, Sporting, Alexandria. Executive management, global procurement, and commercial leadership.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                Executive Headquarters
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Factory size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Borg El-Arab Plant</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                4th Industrial Zone, New Borg El-Arab City. Automated blending lines, clean packaging zones, and pilot formulation labs.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                Manufacturing & R&D Complex
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Globe2 size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Cairo Commercial Hub</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                15 Abd Elwahab Selim El-bishry St., Sheraton, Cairo. Commercial sales support, application demo center, and distribution logistics.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                Commercial Hub & Logistics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Marquee */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow eyebrow-dark" style={{ justifyContent: 'center' }}>Certified Standards</div>
            <h2 className="section-title">International Quality & Food Safety Certifications</h2>
          </div>
          <PartnerMarquee logos={ABOUT_CERTS.map((c) => c.img)} />
        </div>
      </section>
    </div>
  );
};
