import React, { useState, useEffect } from 'react';
import { SOLUTIONS_LIST } from '../data/siteData';
import { CheckCircle2, ArrowRight, FlaskConical, Beaker, Factory, Award } from 'lucide-react';

interface SolutionsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const SolutionsPage: React.FC<SolutionsProps> = ({ initialSubId, onOpenQuote, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>(initialSubId || 'all');

  useEffect(() => {
    if (initialSubId) {
      setActiveTab(initialSubId);
    }
  }, [initialSubId]);

  const filteredSolutions = activeTab === 'all' 
    ? SOLUTIONS_LIST 
    : SOLUTIONS_LIST.filter(s => s.id === activeTab || s.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="solutions-page">
      {/* Header Banner */}
      <section className="section section-dark" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">Formulation & R&D Center</div>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
            Food Solutions & Application Center
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px' }}>
            Custom functional hydrocolloid stabilizer systems, emulsifiers, texture modifiers, and specialized recipe formulations backed by pilot plant testing.
          </p>
        </div>
      </section>

      {/* R&D Development Process Flow */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Structured R&D Methodology</div>
            <h2 className="section-title">From Concept to Commercial Production</h2>
            <p className="section-desc">
              How our application scientists collaborate with food processors to deliver reliable, scalable food systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', marginBottom: '4.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '1.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>01</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>Challenge Audit</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Analyze texture, syneresis, cost targets, or shelf-life challenges.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>02</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>Formulation</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Design custom functional stabilizer & emulsifier blends.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>03</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>Pilot Lab Trials</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Test on pilot equipment (cheese cookers, cutters, homogenizers).</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>04</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>Sensory & QA</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Validate rheology, taste, stability, and microbiology.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1.75rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>05</div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.4rem' }}>Plant Scale-Up</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Support full industrial plant trials and batch startup.</p>
            </div>
          </div>

          <div className="editorial-grid">
            <div>
              <div className="eyebrow">Application Lab Capabilities</div>
              <h2 className="section-title">Bridging Science & Industrial Culinary Performance</h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                At AWA Food Solutions, our in-house <strong>Application Center</strong> replicates industrial processing conditions. We partner with client R&D teams to optimize meltability in processed cheese, water binding in meat systems, volume stability in bakery, and turbidity in beverages.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Our scientists utilize high-shear homogenizers, rheometers, texture analyzers, and pilot pasteurizers to ensure seamless transition from laboratory to high-capacity production lines.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenQuote} className="btn btn-primary">
                  Request Trial Sample
                </button>
                <button onClick={() => onNavigate('contact')} className="btn btn-secondary">
                  Visit Application Center
                </button>
              </div>
            </div>

            <div className="editorial-img-container">
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
              Filter by matrix sector to inspect tailored functional blends and technical application capabilities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {[
              { id: 'all', label: 'All Solutions' },
              { id: 'dairy', label: 'Dairy & Cheese' },
              { id: 'meat', label: 'Meat & Poultry' },
              { id: 'bakery', label: 'Bakery & Pastry' },
              { id: 'beverage', label: 'Beverages & Mixes' },
              { id: 'sauces', label: 'Sauces & Dressings' },
              { id: 'rnd', label: 'Application Center' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)', padding: '0.55rem 1.4rem', fontSize: '0.875rem' }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Solutions Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {filteredSolutions.map((sol) => (
              <div
                key={sol.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={sol.image}
                    alt={sol.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/pages/home/s1.jpg';
                    }}
                  />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                    {sol.category}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark-navy)', marginBottom: '0.75rem' }}>
                    {sol.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {sol.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>
                      Key Capabilities:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {sol.details.map((d, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={14} color="var(--primary)" style={{ minWidth: '14px', marginTop: '3px' }} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenQuote}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 'auto', width: '100%' }}
                  >
                    <span>Request Formulation Specs</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
