import React from 'react';
import { ShieldCheck, Target, Eye, CheckCircle2, Factory, Globe2, Building, Users, Award, Sparkles, Quote } from 'lucide-react';
import { CERTIFICATIONS, ABOUT_CERTS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';

interface AboutProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutProps> = ({ onNavigate, onOpenQuote }) => {
  const revealCorporate = useScrollReveal('up');
  const revealVision = useScrollReveal('left');
  const revealMission = useScrollReveal('up');
  const revealValues = useScrollReveal('right');
  const revealFacilities = useScrollReveal('up');
  const revealCertifications = useScrollReveal('up');

  return (
    <div className="about-page">
      {/* 1. Page Hero with Eng. Wael Ghandour at the Top (Full Head Visible via top positioning) */}
      <PageHero
        eyebrow="AWA Group • Established 1993"
        title="Three Decades of Food Science & Precision Manufacturing"
        subtitle="Engaged in the production, custom formulation, and trading of premium food ingredients for over 28+ years, with a steadfast commitment to customer satisfaction, food safety, and continuous R&D innovation."
        backgroundImage="/images/pages/home/Image2-3.jpg"
        backgroundPosition="right top"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src="/images/pages/about/signature.png"
              alt="Eng. Wael Ghandour Signature"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.95 }}
            />
            <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.25)', paddingLeft: '1rem' }}>
              <div style={{ color: '#FFFFFF', fontWeight: 900, fontSize: '1rem' }}>Eng. Wael Ghandour</div>
              <div style={{ color: '#4ADE80', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Chairman & Founder, AWA Group</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginLeft: 'auto' }}>
            <button onClick={() => onNavigate('solutions')} className="btn btn-primary btn-sm">
              Explore Solutions Matrix
            </button>
            <button onClick={onOpenQuote} className="btn btn-secondary btn-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </PageHero>

      {/* 2. Chairman's Statement Feature */}
      <section className="section" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-color)', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            padding: '3rem 3.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--border-color)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '2.5rem',
            alignItems: 'center',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#0284C7',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Quote size={32} />
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#0284C7', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Chairman's Statement
              </div>
              <blockquote style={{ fontSize: '1.15rem', color: '#1E293B', lineHeight: '1.75', fontStyle: 'italic', marginBottom: '1.25rem', fontWeight: 500 }}>
                "It is our honor to announce that we have been engaging in the production and trading of food ingredients for more than 28 years with our management philosophy focused on customer satisfaction with top quality products. In the new Millennium, AWA will continue to create new values for food industries through sustained effort in research and development, faithfully providing fresh new joys as a world-leading producer and trader of fine food ingredients."
              </blockquote>
              <div style={{ fontWeight: 900, fontSize: '1rem', color: '#0F172A' }}>
                Eng. Wael Ghandour — <span style={{ fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>Chairman of the Board</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Corporate Overview & Timeline Narrative */}
      <section className="section" ref={revealCorporate as any}>
        <div className="container reveal-fade-up">
          <div className="editorial-grid">
            <div>
              <div className="eyebrow">Our Heritage & Scope</div>
              <h2 className="section-title">Serving 2,000+ Food Industrial Clients Worldwide</h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                Founded in 1993, <strong>AWA Group</strong> has developed into an emerging Egyptian multinational encompassing specialized manufacturing business units: <strong>AWA Food Additives Co.</strong>, <strong>AWA Food Solutions</strong>, <strong>AWA Bio Ingredients</strong>, <strong>AWABEY</strong> (Soapwort Extract JV), and <strong>AWASOY</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We operate with a dedicated team of <strong>170 highly qualified employees</strong>, an advanced R&D pilot plant center, <strong>3 powder mixers (5.5 MT/HR capacity)</strong>, and a <strong>10 MT/HR liquid processing line</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Our <strong>3,700 m² warehouse facility in New Borg El-Arab City holds 15,000 MT</strong> with temperature-controlled cold chain logistics and flexi-tank handling, fully coordinated through enterprise SAP ERP since 2012.
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

      {/* 4. Vision, Mission & Core Values */}
      <section className="section section-stone">
        <div className="container">
          <div className="section-header text-center reveal-fade-up" ref={revealMission as any}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Strategic Foundation</div>
            <h2 className="section-title">Our Vision, Mission & Core Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* Vision */}
            <div className="reveal-fade-left" ref={revealVision as any} style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '0.75rem' }}>
                • To become a food & beverage solutions leader across the Middle East and Africa.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                • To sustain long-term customer partnerships through operational excellence and innovative quality.
              </p>
            </div>

            {/* Mission */}
            <div className="reveal-fade-up" ref={revealMission as any} style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                To identify the critical technologies for shaping food & beverage solutions while taking into full consideration food safety regulations, local consumer cultures, and continuous cost optimization.
              </p>
            </div>

            {/* Core Values */}
            <div className="reveal-fade-right" ref={revealValues as any} style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-sm)', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Our Core Values</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-main)', fontSize: '0.875rem', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Community:</strong> Striving to add value to our community, employees, customers, and country.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Safety:</strong> Applying the latest safety and environmental technologies.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Quality:</strong> Committing to premium quality, healthy, and certified raw materials.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Our Team:</strong> 170 dedicated professionals with excellent know-how and training.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Facilities Infrastructure */}
      <section className="section" ref={revealFacilities as any}>
        <div className="container reveal-fade-up">
          <div className="section-header">
            <div className="eyebrow">Production Footprint</div>
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
                Tel: +203 4292030 / 4211200
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Building size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>Cairo Commercial Branch</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                15 Abd El-Wahab Selim El-Bishry St., Sheraton Area, Cairo. Key account management and fast regional dispatch.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                Tel: +202 22681519 / 22690727
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <Factory size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>New Borg El-Arab Complex</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                4th Industrial Zone, Block 15. 15.5 MT/HR mixing lines, 3,700 m² temperature-controlled storage, and pilot laboratories.
              </p>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                Tel: +203 5890155 / 165
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Certifications */}
      <section className="section section-stone" ref={revealCertifications as any}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Certified Quality</div>
            <h2 className="section-title">International Accreditations & Standards</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Rigorous adherence to international food safety, environmental sustainability, and occupational safety frameworks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem', marginBottom: '4rem' }}>
            {[
              { code: 'FSSC 22000', name: 'Food Safety System Certification', desc: 'ACERTA Global Middle East' },
              { code: 'ISO 9001:2015', name: 'Quality Management System', desc: 'IAF Accredited Benchmark' },
              { code: 'ISO 22000:2018', name: 'Food Safety Management', desc: 'Comprehensive Plant Safety' },
              { code: 'ISO 14001:2015', name: 'Environmental Management', desc: 'Eco-Responsible Operations' },
              { code: 'ISO 45001:2018', name: 'OH&S Safety Standard', desc: 'Zero-Harm Workplace Policy' },
            ].map((cert, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '1.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <ShieldCheck size={28} color="var(--primary)" style={{ margin: '0 auto 0.75rem auto' }} />
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
                  {cert.code}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Industry Partner Marquee */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '1.5rem' }}>
              Strategic Global Supply & Technology Partners
            </div>
            <PartnerMarquee />
          </div>
        </div>
      </section>
    </div>
  );
};
