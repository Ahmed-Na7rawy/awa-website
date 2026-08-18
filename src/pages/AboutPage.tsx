import React, { useState } from 'react';
import { 
  ShieldCheck, Target, Eye, CheckCircle2, Factory, Globe2, Building, 
  Users, Award, Sparkles, Quote, Calendar, ArrowRight, Layers, 
  Microscope, Cpu, ChevronRight, Check, Droplets, Leaf, PackageCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS, ABOUT_CERTS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeDivision, setActiveDivision] = useState<number>(0);
  const [activeFacility, setActiveFacility] = useState<number>(0);

  const revealVision = useScrollReveal('left');
  const revealMission = useScrollReveal('up');
  const revealValues = useScrollReveal('right');
  const revealCorporate = useScrollReveal('up');
  const revealFacilities = useScrollReveal('up');
  const revealCertifications = useScrollReveal('up');

  // The 5 Corporate Operating Divisions from Official Catalogue
  const corporateDivisions = [
    {
      id: 'additives',
      name: 'AWA Food Additives Co.',
      est: 'Est. 1993',
      tagline: 'Global Raw Materials Sourcing & Bulk Trading',
      desc: 'The foundational pillar of AWA Group. Engaging in the worldwide procurement, supply chain logistics, and distribution of high-purity food chemicals, natural starches, hydrocolloids, and certified processing aids for top industrial manufacturers.',
      icon: <PackageCheck size={28} color="#0284C7" />,
      metrics: ['28+ Years Experience', 'Direct Sourcing from 30+ Countries', '15,000 MT Storage Capacity'],
      focus: ['Acidulants & Preservatives', 'Texturizers & Gums', 'Industrial Sweeteners', 'Cocoa & Functional Powders'],
      color: '#0284C7',
    },
    {
      id: 'solutions',
      name: 'AWA Food Solutions',
      est: 'Est. 2010',
      tagline: 'Custom Functional Blends & Pilot R&D Center',
      desc: 'State-of-the-art compounding unit developing tailored stabilizer systems, emulsifiers, shelf-life extenders, and flavor pre-mixes formulated to exact client technical specifications and processing conditions.',
      icon: <Microscope size={28} color="#10B981" />,
      metrics: ['5.5 MT/HR Powder Mixing', '10 MT/HR Liquid Line', 'Dedicated Application Pilot Labs'],
      focus: ['Dairy Stabilizers & Yield Boosters', 'Meat Emulsion Systems', 'Bakery Improvers', 'Sauce & Dressing Stabilizers'],
      color: '#10B981',
    },
    {
      id: 'bio',
      name: 'AWA Bio Ingredients',
      est: 'Est. 2020',
      tagline: 'Natural Oleoresins, Essential Oils & Extracts',
      desc: 'Pioneering green biotechnology extraction of high-potency spice oleoresins, certified pure essential oils, and antioxidant botanical extracts delivering authentic flavor profiles with clean-label transparency.',
      icon: <Leaf size={28} color="#8B5CF6" />,
      metrics: ['Supercritical Extraction', '100% Solvent-Free Oils', 'Standardized Active Principles'],
      focus: ['Black Pepper & Capsicum Oleoresins', 'Citrus & Herb Essential Oils', 'Natural Food Colorants', 'Bioactive Herbal Extracts'],
      color: '#8B5CF6',
    },
    {
      id: 'awabey',
      name: 'AWABEY Joint Venture',
      est: 'Est. 2020',
      tagline: 'Natural Soapwort Extract (Radix Saponariae)',
      desc: 'Exclusive joint venture utilizing modern extraction technology to produce premium-grade Soapwort root extract for traditional confectionery (Halawa Tahinia, Turkish Delight) and foaming beverage systems.',
      icon: <Droplets size={28} color="#F59E0B" />,
      metrics: ['100% Natural Foaming Agent', 'Standardized Saponin Concentration', 'Preservative-Free Processing'],
      focus: ['Halawa & Tahini Confectionery', 'Marshmallows & Nougat', 'Specialty Creamy Beverages', 'Natural Cleansing Emulsions'],
      color: '#F59E0B',
    },
    {
      id: 'awasoy',
      name: 'AWASOY Protein Systems',
      est: 'Est. 2015',
      tagline: 'Isolated & Textured Plant-Based Protein',
      desc: 'Dedicated plant-protein division providing non-GMO functional soy protein isolates (90% protein), textured soy flour, and soy concentrates engineered for meat extension, dietary nutrition, and vegan formulations.',
      icon: <Layers size={28} color="#EC4899" />,
      metrics: ['Non-GMO Certified', '90%+ Protein Content', 'High Water Binding Capacity 1:5'],
      focus: ['Processed Meat Binders', 'Nutritional Beverage Powders', 'Bakery Protein Fortification', 'Plant-Based Meat Analogues'],
      color: '#EC4899',
    },
  ];

  // Key Milestones from 1993 to 2026
  const milestones = [
    {
      year: '1993',
      title: 'Foundation in Alexandria',
      desc: 'Eng. Wael Ghandour establishes AWA Food Additives in Alexandria, pioneering the direct import and technical distribution of certified food ingredients in Egypt.',
    },
    {
      year: '2010',
      title: 'AWA Food Solutions & R&D Pilot Plant',
      desc: 'Inauguration of the dedicated Food Solutions manufacturing division with fully equipped pilot laboratories for dairy, bakery, and meat applications.',
    },
    {
      year: '2012',
      title: 'Enterprise SAP ERP Integration',
      desc: 'Standardized operational excellence across all procurement, manufacturing batches, and distribution channels with enterprise SAP ERP.',
    },
    {
      year: '2018',
      title: 'Borg El-Arab Logistics Expansion',
      desc: 'Commissioned the New Borg El-Arab 4th Industrial Zone logistics center, expanding storage capacity to 15,000 MT with cold-chain and bulk flexitank facilities.',
    },
    {
      year: '2020',
      title: 'Bio Ingredients & AWABEY JV Launch',
      desc: 'Broadened industrial portfolio into natural spice oleoresins, essential oils, and specialized Soapwort extracts through the AWABEY strategic joint venture.',
    },
    {
      year: '2026',
      title: 'Multinational Export & Digital Platform',
      desc: 'Supplying over 2,000 industrial clients across Egypt, Middle East, and Africa with advanced B2B digital specification portals and next-gen retail consumer brands.',
    },
  ];

  // Manufacturing Facilities Data
  const facilities = [
    {
      title: 'New Borg El-Arab Manufacturing Complex',
      location: '4th Industrial Zone, Block 15, Alexandria',
      role: 'Primary Industrial Production & Logistics Hub',
      specs: [
        { label: 'Storage Footprint', val: '3,700 m² (15,000 MT Capacity)' },
        { label: 'Powder Mixing', val: '3 High-Shear Mixers (5.5 MT/HR)' },
        { label: 'Liquid Processing', val: '10 MT/HR Dedicated Liquid Line' },
        { label: 'Logistics Capability', val: 'Cold Chain & Flexi-Tank Bulk Handling' },
      ],
      desc: 'Our flagship manufacturing center operates in strict adherence to FSSC 22000 and ISO 9001 standards, featuring stainless steel automated dry blending lines, micro-dosing systems, and cleanrooms.',
      phone: '+203 5890155 / 165',
    },
    {
      title: 'Alexandria Corporate Headquarters',
      location: '243 Horreya Road, Sporting, Alexandria',
      role: 'Executive Governance & Global Procurement',
      specs: [
        { label: 'Key Operations', val: 'Global Raw Materials Sourcing' },
        { label: 'Commercial Directorate', val: 'Corporate Accounts & Finance' },
        { label: 'Export Division', val: 'MENA & African Trade Desk' },
        { label: 'ERP Center', val: 'Enterprise SAP Operations' },
      ],
      desc: 'The corporate leadership headquarters where executive strategy, international supplier partnerships, and group governance are directed under Chairman Eng. Wael Ghandour.',
      phone: '+203 4292030 / 4211200',
    },
    {
      title: 'Cairo Commercial & Technical Center',
      location: '15 Abd El-Wahab Selim El-Bishry St., Sheraton, Cairo',
      role: 'Regional Dispatch & Technical Client Support',
      specs: [
        { label: 'Coverage Area', val: 'Greater Cairo & Upper Egypt' },
        { label: 'Client Support', val: 'Rapid Technical Sales Response' },
        { label: 'Sample Dispatch', val: 'Express Formulation Lab Delivery' },
        { label: 'Commercial Team', val: 'Key FMCG Account Managers' },
      ],
      desc: 'Strategic commercial branch facilitating same-day client consultations, technical presentations, and rapid formulation dispatch for multinational food conglomerates headquartered in Cairo.',
      phone: '+202 22681519 / 22690727',
    },
  ];

  return (
    <div className="about-page" style={{ background: '#F8FAFC' }}>
      {/* 1. EXECUTIVE HERO: Fortune-500 Leadership Section */}
      <section style={{
        background: 'radial-gradient(ellipse at 80% 20%, rgba(2, 132, 199, 0.15) 0%, rgba(11, 19, 43, 0) 70%), linear-gradient(135deg, #0B132B 0%, #0F172A 50%, #1E293B 100%)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        padding: '5.5rem 0 4rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        {/* Subtle Ambient Background Grids */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
          pointerEvents: 'none',
        }} />

        <div className="container-wide" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}>
            {/* Left Content */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                color: '#4ADE80',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}>
                <Sparkles size={14} />
                <span>AWA Group • Established 1993</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.12,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                letterSpacing: '-0.025em',
              }}>
                Three Decades of <br />
                <span style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #4ADE80 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Food Science & Precision
                </span><br />
                Manufacturing
              </h1>

              <p style={{
                fontSize: '1.1rem',
                color: '#CBD5E1',
                lineHeight: 1.75,
                maxWidth: '680px',
                marginBottom: '2.25rem',
              }}>
                Engaged in the production, custom formulation, and trading of premium food ingredients for over <strong>28+ years</strong> with an uncompromising commitment to client partnership, food safety, and cutting-edge R&D innovation across the Middle East & Africa.
              </p>

              {/* Founder Credential Card */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1rem 1.5rem',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(12px)',
              }}>
                <img
                  src="/images/pages/about/signature.png"
                  alt="Eng. Wael Ghandour Signature"
                  style={{ height: '48px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.95 }}
                />
                <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.25rem' }}>
                  <div style={{ color: '#FFFFFF', fontWeight: 900, fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
                    Eng. Wael Ghandour
                  </div>
                  <div style={{ color: '#38BDF8', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Chairman & Founder, AWA Group
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Full Official Executive Portrait (100% Uncropped) */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
              {/* Subtle Gold Aura Glow */}
              <div style={{
                position: 'absolute',
                width: '320px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(2, 132, 199, 0.35) 0%, rgba(0, 0, 0, 0) 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
              }} />

              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '26px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.15)',
                background: '#0F172A',
                maxHeight: '490px',
                border: '2px solid rgba(255, 255, 255, 0.12)',
              }}>
                <img
                  src="/images/pages/home/Image2-3.jpg"
                  alt="Eng. Wael Ghandour - Chairman of AWA Group"
                  style={{
                    height: '490px',
                    width: 'auto',
                    maxWidth: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem',
                  background: 'linear-gradient(to top, rgba(11, 19, 43, 0.95) 0%, rgba(11, 19, 43, 0) 100%)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontWeight: 900, fontSize: '1rem', color: '#FFFFFF' }}>Eng. Wael Ghandour</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Founder & Chairman of the Board
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Executive Stat Bar */}
        <div style={{
          marginTop: '3.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(11, 19, 43, 0.7)',
          backdropFilter: 'blur(16px)',
          padding: '1.75rem 0',
        }}>
          <div className="container-wide" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1.5rem',
              textAlign: 'center',
            }}>
              {[
                { val: '1993', label: 'Founded in Alexandria', sub: '28+ Years of Heritage' },
                { val: '15.5 MT', label: 'Hourly Capacity', sub: 'Powder & Liquid Lines' },
                { val: '15,000 MT', label: 'Storage Facility', sub: 'New Borg El-Arab Plant' },
                { val: '170+', label: 'Specialized Staff', sub: 'R&D Engineers & Techs' },
                { val: '2,000+', label: 'Industrial Clients', sub: 'Supplied Across MENA' },
              ].map((stat, idx) => (
                <div key={idx} style={{ borderRight: idx < 4 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none', paddingRight: '1rem' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#4ADE80', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '0.25rem' }}>
                    {stat.val}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>{stat.label}</div>
                  <div style={{ fontSize: '0.725rem', color: '#94A3B8' }}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRESIDENTIAL LETTER FROM THE CHAIRMAN */}
      <section className="section" style={{ background: '#FFFFFF', padding: '5rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            padding: '3.5rem 4rem',
            borderRadius: '28px',
            border: '2px solid var(--border-color)',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.04)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            alignItems: 'center',
            position: 'relative',
          }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(2, 132, 199, 0.35)',
              flexShrink: 0,
            }}>
              <Quote size={38} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#0284C7', letterSpacing: '0.08em' }}>
                  Executive Governance
                </span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  Chairman's Statement
                </span>
              </div>

              <blockquote style={{
                fontSize: '1.2rem',
                color: '#1E293B',
                lineHeight: '1.8',
                fontStyle: 'italic',
                marginBottom: '1.75rem',
                fontWeight: 500,
              }}>
                "It is our honor to announce that we have been engaging in the production and trading of food ingredients for more than 28 years with our management philosophy focused on customer satisfaction with top quality products. One of our superlative attributes is our talented and knowledgeable team, who push our business forward through their hard work and dedication. In the new Millennium, AWA will continue to create new values for food industries through sustained effort in research and development, faithfully providing fresh new joys as a world-leading producer and trader of fine food ingredients."
              </blockquote>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#0F172A' }}>
                    Eng. Wael Ghandour
                  </div>
                  <div style={{ fontWeight: 700, color: '#0284C7', fontSize: '0.85rem' }}>
                    Chairman of the Board • AWA Group
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src="/images/pages/about/signature.png"
                    alt="Eng. Wael Ghandour Official Signature"
                    style={{ height: '46px', width: 'auto', objectFit: 'contain', opacity: 0.85 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 5 CORPORATE OPERATING DIVISIONS (ECOSYSTEM MATRIX) */}
      <section className="section section-stone" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Group Architecture</div>
            <h2 className="section-title">The 5 Specialized Operating Divisions</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Engineered across five synergistic business units delivering end-to-end industrial formulation, raw material procurement, and biotechnology extraction.
            </p>
          </div>

          {/* Division Selector Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}>
            {corporateDivisions.map((div, idx) => (
              <button
                key={div.id}
                onClick={() => setActiveDivision(idx)}
                style={{
                  padding: '0.75rem 1.4rem',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  border: activeDivision === idx ? `2px solid ${div.color}` : '1.5px solid var(--border-color)',
                  background: activeDivision === idx ? div.color : '#FFFFFF',
                  color: activeDivision === idx ? '#FFFFFF' : 'var(--dark-navy)',
                  boxShadow: activeDivision === idx ? `0 8px 20px ${div.color}33` : 'var(--shadow-subtle)',
                }}
              >
                <span>{div.name}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, marginLeft: '0.4rem' }}>({div.est})</span>
              </button>
            ))}
          </div>

          {/* Active Division Feature Card */}
          <AnimatePresence mode="wait">
            {(() => {
              const current = corporateDivisions[activeDivision];
              return (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    border: '1.5px solid var(--border-color)',
                    padding: '3rem 3.5rem',
                    boxShadow: 'var(--shadow-subtle)',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        background: '#F1F5F9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {current.icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--dark-navy)', marginBottom: '0.2rem' }}>
                          {current.name}
                        </h3>
                        <div style={{ color: current.color, fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          {current.tagline}
                        </div>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                      {current.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {current.metrics.map((metric, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '0.4rem 0.85rem',
                            borderRadius: '10px',
                            background: '#F8FAFC',
                            border: '1px solid var(--border-color)',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: 'var(--dark-navy)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                          }}
                        >
                          <Check size={14} color={current.color} />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Technical Focus List */}
                  <div style={{
                    background: '#F8FAFC',
                    padding: '2rem',
                    borderRadius: '18px',
                    border: '1px solid var(--border-color)',
                  }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: current.color, letterSpacing: '0.08em', marginBottom: '1rem' }}>
                      Primary Technical Applications
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {current.focus.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontWeight: 700, color: '#1E293B' }}>
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: current.color }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. CHRONOLOGICAL MILESTONE TIMELINE (1993 - 2026) */}
      <section className="section" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Historical Journey</div>
            <h2 className="section-title">Three Decades of Continuous Growth</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              From our founding in Alexandria to an emerging multinational supplying over 2,000 global food processing plants.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: '#F8FAFC',
                  padding: '2.25rem',
                  borderRadius: '20px',
                  border: '1.5px solid var(--border-color)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#0284C7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '8px',
                  background: '#0284C7',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 900,
                  marginBottom: '1rem',
                }}>
                  <Calendar size={13} />
                  <span>{m.year}</span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                  {m.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.65' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC FOUNDATION: VISION, MISSION & CORE VALUES */}
      <section className="section section-stone" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up" ref={revealMission as any}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Corporate DNA</div>
            <h2 className="section-title">Our Vision, Mission & Core Values</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* Vision */}
            <div className="reveal-fade-left" ref={revealVision as any} style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Eye size={28} />
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
            <div className="reveal-fade-up" ref={revealMission as any} style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Mission</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                To identify the critical technologies for shaping food & beverage solutions while taking into full consideration food safety regulations, local consumer cultures, and continuous cost optimization.
              </p>
            </div>

            {/* Core Values */}
            <div className="reveal-fade-right" ref={revealValues as any} style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>Our Core Values</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-main)', fontSize: '0.875rem', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Community:</strong> Adding tangible value to our community, employees, customers, and country.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Safety:</strong> Applying the latest safety, environmental, and eco-friendly technologies.</span>
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

      {/* 6. MANUFACTURING & R&D PILOT COMPLEX (INFRASTRUCTURE SHOWCASE) */}
      <section className="section" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Production Footprint</div>
            <h2 className="section-title">World-Class Facilities Across Egypt</h2>
            <p className="section-desc">
              Three strategic hubs ensuring rapid formulation response, pilot laboratory testing, and seamless supply chain distribution nationwide.
            </p>
          </div>

          {/* Facility Selector */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {facilities.map((fac, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFacility(idx)}
                style={{
                  padding: '0.85rem 1.5rem',
                  borderRadius: '14px',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  border: activeFacility === idx ? '2px solid var(--primary)' : '1.5px solid var(--border-color)',
                  background: activeFacility === idx ? 'var(--primary)' : '#FFFFFF',
                  color: activeFacility === idx ? '#FFFFFF' : 'var(--dark-navy)',
                  transition: 'all 0.25s ease',
                }}
              >
                {fac.title.split(' ')[0]} {fac.title.split(' ')[1]}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {(() => {
              const fac = facilities[activeFacility];
              return (
                <motion.div
                  key={fac.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: '#F8FAFC',
                    padding: '3rem',
                    borderRadius: '24px',
                    border: '1.5px solid var(--border-color)',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                      {fac.role}
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                      {fac.title}
                    </h3>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                      📍 {fac.location}
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                      {fac.desc}
                    </p>
                    <div style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.9rem' }}>
                      Official Desk: {fac.phone}
                    </div>
                  </div>

                  <div style={{
                    background: '#FFFFFF',
                    padding: '2rem',
                    borderRadius: '18px',
                    border: '1px solid var(--border-color)',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1rem',
                  }}>
                    {fac.specs.map((s, idx) => (
                      <div key={idx} style={{ borderBottom: idx < fac.specs.length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                          {s.label}
                        </div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 900, color: 'var(--dark-navy)' }}>
                          {s.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* 7. CERTIFIED QUALITY WALL & HALAL STANDARDS */}
      <section className="section section-stone" ref={revealCertifications as any} style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Certified Quality</div>
            <h2 className="section-title">International Accreditations & Standards</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Rigorous adherence to international food safety, environmental sustainability, and occupational safety frameworks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem', marginBottom: '4.5rem' }}>
            {[
              { code: 'FSSC 22000', name: 'Food Safety System Certification', desc: 'ACERTA Global Middle East' },
              { code: 'ISO 9001:2015', name: 'Quality Management System', desc: 'IAF Accredited Benchmark' },
              { code: 'ISO 22000:2018', name: 'Food Safety Management', desc: 'Comprehensive Plant Safety' },
              { code: 'ISO 14001:2015', name: 'Environmental Management', desc: 'Eco-Responsible Operations' },
              { code: 'ISO 45001:2018', name: 'OH&S Safety Standard', desc: 'Zero-Harm Workplace Policy' },
            ].map((cert, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '2rem 1.25rem', borderRadius: '18px', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto',
                }}>
                  <ShieldCheck size={26} />
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
                  {cert.code}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Global Partners Marquee */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '1.75rem' }}>
              Strategic Global Supply & Technology Partners
            </div>
            <PartnerMarquee />
          </div>
        </div>
      </section>
    </div>
  );
};
