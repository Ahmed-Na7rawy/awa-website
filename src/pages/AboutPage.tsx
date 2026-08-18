import React, { useState } from 'react';
import { 
  ShieldCheck, Target, Eye, CheckCircle2, Award, Quote, ArrowRight, Layers, 
  Microscope, Droplets, Leaf, PackageCheck, Sparkles, Phone, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATIONS, ABOUT_CERTS, STATS, CLIENT_LOGOS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface AboutProps {
  onNavigate: (pageId: string) => void;
  onOpenQuote: () => void;
}

/* Interactive Count-Up Stat Card */
const AboutStatItem: React.FC<{ value: string; label: string; sub: string; delay: number }> = ({ value, label, sub, delay }) => {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericPart, 2000);

  return (
    <div ref={ref} className="about-stat-col reveal-fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="about-stat-num">{count}{suffix}</div>
      <div className="about-stat-label">{label}</div>
      <div className="about-stat-sub">{sub}</div>
    </div>
  );
};

export const AboutPage: React.FC<AboutProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeDivision, setActiveDivision] = useState<number>(0);
  const [activeFacility, setActiveFacility] = useState<number>(0);

  const heroRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const chairmanRef = useScrollReveal();
  const divisionsRef = useScrollReveal();
  const facilitiesRef = useScrollReveal();
  const milestonesRef = useScrollReveal();
  const certsRef = useScrollReveal();

  // The 5 Corporate Operating Divisions from Official Catalogue
  const corporateDivisions = [
    {
      id: 'additives',
      name: 'AWA Food Additives Co.',
      est: 'Est. 1993',
      logo: '/images/logos/awa group logo no background.png',
      tagline: 'Global Raw Materials Sourcing & Bulk Trading',
      desc: 'The foundational pillar of AWA Group. Engaging in the worldwide procurement, supply chain logistics, and distribution of high-purity food chemicals, natural starches, hydrocolloids, and certified processing aids for top industrial manufacturers.',
      icon: <PackageCheck size={28} color="var(--primary-blue)" />,
      metrics: ['33+ Years Experience', 'Direct Sourcing from 30+ Countries', '15,000 MT Storage Capacity'],
      focus: ['Acidulants & Preservatives', 'Texturizers & Gums', 'Industrial Sweeteners', 'Cocoa & Functional Powders'],
      image: '/images/pages/solutions/raw-materials-warehouse.jpg',
    },
    {
      id: 'solutions',
      name: 'AWA Food Solutions',
      est: 'Est. 2010',
      logo: '/images/logos/awa group logo no background.png',
      tagline: 'Custom Functional Blends & Pilot R&D Center',
      desc: 'State-of-the-art compounding unit developing tailored stabilizer systems, emulsifiers, shelf-life extenders, and flavor pre-mixes formulated to exact client technical specifications and processing conditions.',
      icon: <Microscope size={28} color="var(--primary)" />,
      metrics: ['5.5 MT/HR Powder Mixing', '10 MT/HR Liquid Line', 'Dedicated Application Pilot Labs'],
      focus: ['Dairy Stabilizers & Yield Boosters', 'Meat Emulsion Systems', 'Bakery Improvers', 'Sauce & Dressing Stabilizers'],
      image: '/images/pages/home/hero-food-science-lab.jpg',
    },
    {
      id: 'bio',
      name: 'AWA Bio Ingredients',
      est: 'Est. 2020',
      logo: '/images/logos/awa group logo no background.png',
      tagline: 'Natural Oleoresins, Essential Oils & Extracts',
      desc: 'Pioneering green biotechnology extraction of high-potency spice oleoresins, certified pure essential oils, and antioxidant botanical extracts delivering authentic flavor profiles with clean-label transparency.',
      icon: <Leaf size={28} color="#059669" />,
      metrics: ['Supercritical Extraction', '100% Solvent-Free Oils', 'Standardized Active Principles'],
      focus: ['Black Pepper & Capsicum Oleoresins', 'Citrus & Herb Essential Oils', 'Natural Food Colorants', 'Bioactive Herbal Extracts'],
      image: '/images/pages/home/food-chemistry-formulation.jpg',
    },
    {
      id: 'awabey',
      name: 'AWABEY Joint Venture',
      est: 'Est. 2020',
      logo: '/images/logos/Bey Logo.png',
      tagline: 'Natural Soapwort Extract (Radix Saponariae)',
      desc: 'Exclusive joint venture utilizing modern extraction technology to produce premium-grade Soapwort root extract for traditional confectionery (Halawa Tahinia, Turkish Delight) and foaming beverage systems.',
      icon: <Droplets size={28} color="#D97706" />,
      metrics: ['100% Natural Foaming Agent', 'Standardized Saponin Concentration', 'Preservative-Free Processing'],
      focus: ['Halawa & Tahini Confectionery', 'Marshmallows & Nougat', 'Specialty Creamy Beverages', 'Natural Cleansing Emulsions'],
      image: '/images/pages/solutions/dairy.jpg',
    },
    {
      id: 'awasoy',
      name: 'AWASOY Protein Systems',
      est: 'Est. 2015',
      logo: '/images/logos/soy.png',
      tagline: 'Isolated & Textured Plant-Based Protein',
      desc: 'Dedicated plant-protein division providing non-GMO functional soy protein isolates (90% protein), textured soy flour, and soy concentrates engineered for meat extension, dietary nutrition, and vegan formulations.',
      icon: <Layers size={28} color="#DB2777" />,
      metrics: ['Non-GMO Certified', '90%+ Protein Content', 'High Water Binding Capacity 1:5'],
      focus: ['Processed Meat Binders', 'Nutritional Beverage Powders', 'Bakery Protein Fortification', 'Plant-Based Meat Analogues'],
      image: '/images/pages/industries/image33.jpg',
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
      year: '2004',
      title: 'Borg El-Arab Compounding Complex',
      desc: 'Commissioned high-capacity automated blending and compounding facilities in New Borg El-Arab City to formulate localized functional food systems.',
    },
    {
      year: '2010',
      title: 'AWA Food Solutions & R&D Pilot Plant',
      desc: 'Inauguration of the dedicated Food Solutions division with fully equipped pilot laboratories for dairy, bakery, and meat applications.',
    },
    {
      year: '2012',
      title: 'Enterprise SAP ERP Integration',
      desc: 'Standardized operational excellence across all procurement, manufacturing batches, and distribution channels with enterprise SAP ERP.',
    },
    {
      year: '2018',
      title: 'Borg El-Arab Logistics Expansion',
      desc: 'Expanded storage capacity to 15,000 MT with advanced cold-chain and bulk flexitank facilities in the 4th Industrial Zone.',
    },
    {
      year: '2020',
      title: 'Bio Ingredients & AWABEY JV Launch',
      desc: 'Broadened industrial portfolio into natural spice oleoresins, essential oils, and specialized Soapwort extracts through the AWABEY joint venture.',
    },
    {
      year: '2026',
      title: 'Multinational MENA & African Supply',
      desc: 'Supplying over 2,000 industrial clients across Egypt, the Middle East, and Africa with certified formulation matrices and reliable cold-chain delivery.',
    },
  ];

  // Manufacturing Facilities Data
  const facilities = [
    {
      title: 'New Borg El-Arab Manufacturing Complex',
      location: '4th Industrial Zone, Block 15, Alexandria',
      role: 'Primary Industrial Production & Logistics Hub',
      image: '/images/pages/industries/image33.jpg',
      specs: [
        { label: 'Storage Footprint', val: '3,700 m² (15,000 MT Capacity)' },
        { label: 'Powder Mixing', val: '3 High-Shear Mixers (5.5 MT/HR)' },
        { label: 'Liquid Processing', val: '10 MT/HR Dedicated Liquid Line' },
        { label: 'Logistics Capability', val: 'Cold Chain & Flexi-Tank Handling' },
      ],
      desc: 'Our flagship manufacturing complex operates under strict adherence to FSSC 22000 and ISO 9001 standards, featuring automated dry blending lines, micro-dosing systems, cleanrooms, and temperature-controlled storage.',
      phone: '+203 5890155 / 165',
    },
    {
      title: 'Alexandria Corporate Headquarters',
      location: '243 Horreya Road, Sporting, Alexandria',
      role: 'Executive Governance & Global Procurement',
      image: '/images/pages/home/hero-food-science-lab.jpg',
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
      image: '/images/pages/solutions/cold-chain-logistics-truck.jpg',
      specs: [
        { label: 'Coverage Area', val: 'Greater Cairo & Upper Egypt' },
        { label: 'Client Support', val: 'Rapid Technical Sales Response' },
        { label: 'Sample Dispatch', val: 'Express Formulation Lab Delivery' },
        { label: 'Commercial Team', val: 'Key FMCG Account Managers' },
      ],
      desc: 'Strategic commercial hub facilitating same-day client consultations, technical presentations, and rapid formulation sample dispatch for multinational food conglomerates headquartered in Cairo.',
      phone: '+202 22681519 / 22690727',
    },
  ];

  return (
    <div className="about-page" style={{ background: '#FFFFFF' }}>
      <section className="hero-cinematic-section" ref={heroRef} style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="hero-cinematic-bg-grid" />
        <div className="container">
          <div className="hero-cinematic-grid">
            <div className="reveal-fade-left">
              <div className="hero-cinematic-eyebrow">
                <Sparkles size={14} />
                <span>AWA GROUP · HERITAGE, SCIENCE & SCALE</span>
              </div>
              <h1 className="hero-cinematic-title">
                Three Decades of Food Science Innovation & Industrial Precision
              </h1>
              <p className="hero-cinematic-desc">
                Founded in 1993 by <strong>Eng. Wael Ghandour</strong>, AWA Group has grown into a benchmark food solutions group across Egypt and the Middle East, connecting global raw material procurement with advanced compounding plants and specialized pilot laboratories.
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0.85rem 1.4rem',
                borderRadius: '16px',
                background: 'var(--bg-soft)',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <img
                  src="/images/pages/about/signature.png"
                  alt="Eng. Wael Ghandour Signature"
                  style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
                />
                <div style={{ borderLeft: '2px solid var(--border-color)', paddingLeft: '1.25rem' }}>
                  <div style={{ color: 'var(--text-main)', fontWeight: 900, fontSize: '1rem' }}>
                    Eng. Wael Ghandour
                  </div>
                  <div style={{ color: 'var(--primary)', fontSize: '0.775rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Chairman & Founder, AWA Group
                  </div>
                </div>
              </div>
              <div className="hero-cinematic-actions">
                <button onClick={onOpenQuote} className="btn btn-primary">
                  <span>Consult Formulation Experts</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('solutions')} className="btn btn-secondary">
                  <span>Explore Capabilities</span>
                </button>
              </div>
            </div>
            <div className="hero-cinematic-media reveal-fade-right reveal-delay-1">
              <div className="hero-cinematic-img-frame" style={{ background: 'var(--bg-soft)', borderRadius: '24px', overflow: 'hidden', border: '2px solid var(--border-color)' }}>
                <img
                  src="/images/pages/home/Image2-3.jpg"
                  alt="Eng. Wael Ghandour - Chairman & Founder of AWA Group"
                  className="hero-cinematic-img"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <div className="hero-glass-badge-1">
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Award size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 800 }}>
                    Founder & Chairman
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    Leading AWA Group Since 1993
                  </span>
                </div>
              </div>
              <div className="hero-glass-badge-2">
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(20, 30, 154, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)' }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 800 }}>
                    2,000+ Industrial Clients
                  </strong>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                    Egypt, Middle East & Africa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="metrics-strip-light" style={{ background: '#F8FAFC', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="metrics-light-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {[
              { val: '1993', label: 'Founded in Alexandria', sub: '33+ Years of Heritage' },
              { val: '15.5 MT', label: 'Hourly Capacity', sub: 'Powder & Liquid Lines' },
              { val: '15,000 MT', label: 'Storage Footprint', sub: 'New Borg El-Arab Plant' },
              { val: '170+', label: 'Specialized Staff', sub: 'R&D Scientists & Engineers' },
              { val: '2,000+', label: 'Industrial Clients', sub: 'Supplied Across MENA' },
            ].map((st, idx) => (
              <AboutStatItem
                key={idx}
                value={st.val}
                label={st.label}
                sub={st.sub}
                delay={idx * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section" ref={chairmanRef} style={{ padding: '5.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
            padding: '3.5rem 4rem',
            borderRadius: '28px',
            border: '2px solid var(--border-color)',
            boxShadow: 'var(--shadow-subtle)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div style={{
              width: '76px',
              height: '76px',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-navy) 100%)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(20, 30, 154, 0.25)',
              flexShrink: 0,
            }}>
              <Quote size={38} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)', letterSpacing: '0.08em' }}>
                  Executive Governance
                </span>
                <span style={{ color: 'var(--border-color)' }}>•</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  Chairman's Statement
                </span>
              </div>
              <blockquote style={{
                fontSize: '1.2rem',
                color: 'var(--dark-navy)',
                lineHeight: '1.85',
                fontStyle: 'italic',
                marginBottom: '1.75rem',
                fontWeight: 500,
              }}>
                "It is our honor to announce that we have been engaging in the production and trading of food ingredients for more than 33 years with our management philosophy focused on customer satisfaction with top quality products. One of our superlative attributes is our talented and knowledgeable team, who push our business forward through their hard work and dedication. In the new Millennium, AWA will continue to create new values for food industries through sustained effort in research and development, faithfully providing fresh new joys as a world-leading producer and trader of fine food ingredients."
              </blockquote>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                    Eng. Wael Ghandour
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.85rem' }}>
                    Chairman of the Board • AWA Group
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img
                    src="/images/pages/about/signature.png"
                    alt="Eng. Wael Ghandour Official Signature"
                    style={{ height: '46px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" ref={valuesRef} style={{ background: '#F8FAFC', padding: '5.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Strategic Foundation</div>
            <h2 className="section-title">Built on Scientific Credibility & Trust</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              Guided by a commitment to continuous food science research, uncompromised quality standards, and deep industrial partnership.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div className="interactive-number-card reveal-fade-up">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(20, 30, 154, 0.08)', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                To be the most trusted and technically advanced food solutions group in the Middle East and Africa, recognized for pioneering custom formulation, biotechnology extraction, and uncompromised food safety.
              </p>
            </div>
            <div className="interactive-number-card reveal-fade-up reveal-delay-1">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Empowering industrial food manufacturers to achieve superior texture, yield, and consumer satisfaction through precision compounding, pilot application science, and reliable supply chain execution.
              </p>
            </div>
            <div className="interactive-number-card reveal-fade-up reveal-delay-2">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(32, 44, 106, 0.08)', color: 'var(--dark-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                Quality & Integrity
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                Operating with absolute transparency, strict adherence to international FSSC 22000 and Halal standards, and batch-by-batch certificate of analysis verification for every kg delivered.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" ref={divisionsRef} style={{ padding: '5.5rem 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Group Architecture</div>
            <h2 className="section-title">The 5 Specialized Operating Divisions</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Engineered across five synergistic business units delivering end-to-end industrial formulation, raw material procurement, and biotechnology extraction.
            </p>
          </div>
          <div className="brand-tab-bar reveal-fade-up reveal-delay-1" style={{ marginBottom: '2.5rem' }}>
            {corporateDivisions.map((div, idx) => (
              <button
                key={div.id}
                onClick={() => setActiveDivision(idx)}
                className={`brand-tab-btn ${activeDivision === idx ? 'active' : ''}`}
              >
                <span>{div.name}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8, marginLeft: '0.4rem' }}>({div.est})</span>
              </button>
            ))}
          </div>
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
                  className="brand-stage-card"
                  style={{ gridTemplateColumns: '1fr 1.25fr' }}
                >
                  <div className="brand-stage-img-wrap">
                    <img 
                      src={current.image} 
                      alt={current.name} 
                      className="brand-stage-img"
                      style={{ maxHeight: '340px' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                      <div style={{ background: '#FFFFFF', padding: '0.4rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'inline-flex', alignItems: 'center' }}>
                        <img 
                          src={current.logo} 
                          alt={current.name} 
                          style={{ height: '28px', maxWidth: '120px', objectFit: 'contain' }}
                        />
                      </div>
                      <span style={{ fontSize: '0.775rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>
                        {current.tagline}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '2.15rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
                      {current.name}
                    </h3>

                    <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                      {current.desc}
                    </p>

                    {/* Key Metrics */}
                    <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                      {current.metrics.map((m, mIdx) => (
                        <div key={mIdx} style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-color)', padding: '0.45rem 0.85rem', borderRadius: '8px', fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)' }}>
                          ✓ {m}
                        </div>
                      ))}
                    </div>

                    {/* Focus Areas */}
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                        Core Formulation Focus
                      </span>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {current.focus.map((f, fIdx) => (
                          <span key={fIdx} style={{ background: 'rgba(20, 30, 154, 0.05)', color: 'var(--primary-blue)', padding: '0.3rem 0.75rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700 }}>
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 6. MANUFACTURING & TECHNICAL COMPLEXES             */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" ref={facilitiesRef} style={{ padding: '5.5rem 0', background: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Industrial Infrastructure</div>
            <h2 className="section-title">Strategic Manufacturing & Logistics Hubs</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '720px' }}>
              Three modern operational facilities engineered for high-throughput compounding, certified food safety, and rapid regional delivery.
            </p>
          </div>

          {/* Facility Tab Selector */}
          <div className="brand-tab-bar reveal-fade-up reveal-delay-1" style={{ marginBottom: '2.5rem' }}>
            {facilities.map((fac, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFacility(idx)}
                className={`brand-tab-btn ${activeFacility === idx ? 'active' : ''}`}
              >
                {fac.title}
              </button>
            ))}
          </div>

          {/* Active Facility Card */}
          <div className="brand-stage-card reveal-fade-up" style={{ gridTemplateColumns: '1.25fr 1fr' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                <MapPin size={16} />
                <span>{facilities[activeFacility].location}</span>
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                {facilities[activeFacility].title}
              </h3>

              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-blue)', marginBottom: '1.25rem' }}>
                {facilities[activeFacility].role}
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '2rem' }}>
                {facilities[activeFacility].desc}
              </p>

              {/* Technical Specifications Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {facilities[activeFacility].specs.map((sp, spIdx) => (
                  <div key={spIdx} style={{ background: '#FFFFFF', border: '1px solid var(--border-color)', padding: '0.85rem 1rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.725rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                      {sp.label}
                    </div>
                    <strong style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {sp.val}
                    </strong>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
                <Phone size={16} color="var(--primary)" />
                <span>Direct Line: {facilities[activeFacility].phone}</span>
              </div>
            </div>

            <div className="brand-stage-img-wrap">
              <img
                src={facilities[activeFacility].image}
                alt={facilities[activeFacility].title}
                className="brand-stage-img"
                style={{ maxHeight: '380px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 7. HISTORICAL TIMELINE TRAJECTORY                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="timeline-section" ref={milestonesRef}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Over Three Decades</div>
            <h2 className="section-title">The AWA Historical Trajectory</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              Built on 33 years of continuous innovation, facility expansion, and trusted partnerships.
            </p>
          </div>

          <div className="timeline-track-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {milestones.map((ms, idx) => (
              <div key={ms.year} className="timeline-node-card reveal-fade-up" style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div className="timeline-node-dot" />
                <div className="timeline-year-tag">{ms.year}</div>
                <h3 className="timeline-node-title">{ms.title}</h3>
                <p className="timeline-node-desc">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ */}
      {/* 8. ACCREDITATIONS & GLOBAL QUALITY STANDARDS       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="section" ref={certsRef} style={{ padding: '5.5rem 0', background: '#F8FAFC', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header text-center reveal-fade-up">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Certified Excellence</div>
            <h2 className="section-title">Accreditations & Regulatory Standards</h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: '680px' }}>
              Our Borg El-Arab manufacturing plant and laboratory facilities comply with international food safety and management systems.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}>
            {[
              { code: 'FSSC 22000', name: 'Food Safety System', desc: 'GFSI recognized certification for industrial blending lines.' },
              { code: 'ISO 9001:2015', name: 'Quality Management', desc: 'Standardized operational and batch control excellence.' },
              { code: 'ISO 22000:2018', name: 'Food Safety Management', desc: 'Rigorous hazard analysis and critical control point auditing.' },
              { code: 'HALAL CERTIFIED', name: 'Islamic Sharia Compliance', desc: '100% Halal raw materials and dedicated processing lines.' },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="interactive-number-card reveal-fade-up"
                style={{ transitionDelay: `${idx * 0.08}s`, textAlign: 'center' }}
              >
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                  {cert.code}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Global Partners Marquee */}
          <div style={{ textAlign: 'center' }} className="reveal-fade-up">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '2rem' }}>
              Trusted by Leading Regional Food Manufacturers
            </div>
            <PartnerMarquee items={CLIENT_LOGOS} />
          </div>
        </div>
      </section>
    </div>
  );
};
