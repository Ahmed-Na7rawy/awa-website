import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PageHero } from '../components/PageHero';
import { SOLUTIONS_LIST } from '../data/siteData';
import { CheckCircle2, ArrowRight, FlaskConical, Beaker, Factory, Award, Sparkles, Layers, FileText } from 'lucide-react';

interface SolutionsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const SolutionsPage: React.FC<SolutionsProps> = ({ initialSubId, onOpenQuote, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(initialSubId || 'all');
  const sectionRef1 = useScrollReveal();

  useEffect(() => {
    if (initialSubId) {
      setActiveTab(initialSubId);
    }
  }, [initialSubId]);

  const filteredSolutions = activeTab === 'all' 
    ? SOLUTIONS_LIST 
    : SOLUTIONS_LIST.filter(s => 
        s.id.toLowerCase().includes(activeTab.toLowerCase()) || 
        s.category.toLowerCase().includes(activeTab.toLowerCase()) ||
        (activeTab === 'sauces' && s.category.toLowerCase() === 'culinary') ||
        (activeTab === 'beverage' && s.category.toLowerCase() === 'beverages')
      );

  return (
    <div className="solutions-page">
      {/* Header Banner */}
      <PageHero
        eyebrow="Formulation & R&D Center"
        title="Food Solutions & Application Center"
        subtitle="Custom functional hydrocolloid stabilizer systems, emulsifiers, texture modifiers, and specialized recipe formulations backed by pilot plant testing."
        backgroundImage="/images/pages/solutions/Image26.jpg"
      />

      {/* R&D Development Process Flow */}
      <section className="section" ref={sectionRef1}>
        <div className="container">
          <div className="editorial-grid">
            <div className="reveal-fade-left">
              <div className="eyebrow">Formulation Methodology</div>
              <h2 className="section-title">From Concept to Factory Floor Execution</h2>
              <p className="section-desc">
                Our New Borg El-Arab R&D application center bridges the gap between laboratory bench science and full-scale factory production.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>
                    1
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>Challenge Assessment & Target Formulation</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Understanding client texture, meltability, cost reduction, or clean-label requirements.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>
                    2
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>Pilot Plant Simulation & Small Batches</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Mini dairy cookers, bakery test ovens, and meat emulsifiers prevent costly factory downtime.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>
                    3
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>Sensory, Rheology & TPA Validation</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Instrumental texture profile analysis (TPA) and spectrophotometer color benchmarking.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>
                    4
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>On-Site Plant Commissioning</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      AWA food engineers assist on the client's manufacturing line to ensure flawless commercial execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="editorial-img-container reveal-fade-right reveal-delay-2">
              <img 
                src="/images/pages/solutions/Image26.jpg" 
                alt="AWA Application Center Laboratory" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/rnd.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Matrix & Category Filters */}
      <section className="section section-stone">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Category Matrix</div>
            <h2 className="section-title">Specialized Food Industry Blends</h2>
            <p className="section-desc">
              Filter by matrix sector to inspect tailored functional blends, stabilizer formulations, and technical application capabilities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {[
              { id: 'all', label: 'All Solutions (20)' },
              { id: 'dairy', label: 'Dairy & Cheese' },
              { id: 'meat', label: 'Meat & Poultry' },
              { id: 'bakery', label: 'Bakery & Pastry' },
              { id: 'beverage', label: 'Beverages & Juices' },
              { id: 'sauces', label: 'Sauces & Dressings' },
              { id: 'bio', label: 'Bio & Oleoresins' },
              { id: 'soapwort', label: 'AWABEY Soapwort' },
              { id: 'rnd', label: 'R&D Application Center' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{
                  borderRadius: 'var(--radius-full)',
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dynamic Solutions Cards Grid with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '2rem',
              }}
            >
              {filteredSolutions.map((sol) => (
                <div
                  key={sol.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid var(--border-color)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <div style={{ height: '210px', overflow: 'hidden', background: '#F1F5F9', position: 'relative' }}>
                    <img
                      src={sol.image}
                      alt={sol.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/pages/products/industrial.jpg';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(12px)',
                      color: '#FFFFFF',
                      fontSize: '0.725rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}>
                      {sol.category}
                    </div>
                  </div>

                  <div style={{ padding: '1.85rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--dark-navy)', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                      {sol.title}
                    </h3>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                      {sol.description}
                    </p>

                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '0.775rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--dark-navy)', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
                        Key Formulation Capabilities:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: 0, margin: 0 }}>
                        {sol.details.map((d, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-main)', lineHeight: 1.45 }}>
                            <CheckCircle2 size={15} color="var(--primary)" style={{ minWidth: '15px', marginTop: '2px', flexShrink: 0 }} />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={onOpenQuote}
                      className="btn btn-primary btn-sm"
                      style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
                    >
                      <FileText size={15} />
                      <span>Request Formulation Specs (TDS)</span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
