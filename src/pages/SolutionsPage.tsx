import React from 'react';
import { SOLUTIONS_LIST, SolutionItem } from '../data/siteData';
import { CheckCircle2, ArrowRight, FlaskConical, Sparkles } from 'lucide-react';

interface SolutionsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
  onNavigate: (pageId: string) => void;
}

export const SolutionsPage: React.FC<SolutionsProps> = ({ initialSubId, onOpenQuote, onNavigate }) => {
  const [activeTab, setActiveTab] = React.useState<string>(initialSubId || 'all');

  React.useEffect(() => {
    if (initialSubId) {
      setActiveTab(initialSubId);
    }
  }, [initialSubId]);

  const filteredSolutions = activeTab === 'all' 
    ? SOLUTIONS_LIST 
    : SOLUTIONS_LIST.filter(s => s.id === activeTab || s.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">
            <Sparkles size={14} /> Formulation & R&D
          </span>
          <h1 className="page-banner-title">Food Solutions & Application Center</h1>
          <p className="page-banner-subtitle">
            Tailor-made functional stabilizer systems, texture modifiers, and custom ingredient formulation backed by pilot plant testing.
          </p>
        </div>
      </section>

      {/* R&D Overview Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge">State-Of-The-Art Lab</span>
              <h2 className="section-title">Bridging Science & Culinary Perfection</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                At AWA Food Solutions, our in-house <strong>Application Center</strong> mimics full-scale industrial production. We partner with clients to troubleshoot texture issues, improve yield, extend shelf life, replace costly raw materials, and formulate brand new recipes.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                Our team of dedicated food technologists, chemical analysts, and microbiologists work across pilot processing lines including processed cheese cookers, emulsifying cutters, bakery ovens, and beverage homogenizers.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenQuote} className="btn btn-primary">
                  <Sparkles size={16} /> Request Custom Trial
                </button>
                <button onClick={() => onNavigate('contact')} className="btn btn-secondary">
                  Visit Application Lab
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <img 
                src="/images/pages/solutions/Image26.jpg" 
                alt="AWA Application Center Lab" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/rnd.jpg';
                }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <img 
                  src="/images/pages/solutions/Image23.jpg" 
                  alt="AWA Pilot Testing" 
                  style={{ width: '100%', height: '130px', objectFit: 'cover', borderRadius: '12px' }} 
                />
                <img 
                  src="/images/pages/solutions/Image2-6.jpg" 
                  alt="AWA Solutions Banner" 
                  style={{ width: '100%', height: '130px', objectFit: 'cover', borderRadius: '12px' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Gallery & Category Tabs */}
      <section className="section section-alt pattern-grid">
        <div className="container">
          <div className="section-header">
            <span className="badge">Categories</span>
            <h2 className="section-title">Specialized Industry Solutions</h2>
            <p className="section-desc">
              Select a category to explore our tailored functional blends and application expertise.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="tabs-nav" style={{ justifyContent: 'center' }}>
            <button
              onClick={() => setActiveTab('all')}
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            >
              All Solutions ({SOLUTIONS_LIST.length})
            </button>
            <button
              onClick={() => setActiveTab('dairy')}
              className={`tab-btn ${activeTab === 'dairy' ? 'active' : ''}`}
            >
              Dairy & Cheese
            </button>
            <button
              onClick={() => setActiveTab('meat')}
              className={`tab-btn ${activeTab === 'meat' ? 'active' : ''}`}
            >
              Meat & Poultry
            </button>
            <button
              onClick={() => setActiveTab('bakery')}
              className={`tab-btn ${activeTab === 'bakery' ? 'active' : ''}`}
            >
              Bakery & Pastry
            </button>
            <button
              onClick={() => setActiveTab('beverage')}
              className={`tab-btn ${activeTab === 'beverage' ? 'active' : ''}`}
            >
              Beverages & Mixes
            </button>
            <button
              onClick={() => setActiveTab('sauces')}
              className={`tab-btn ${activeTab === 'sauces' ? 'active' : ''}`}
            >
              Sauces & Dressings
            </button>
            <button
              onClick={() => setActiveTab('rnd')}
              className={`tab-btn ${activeTab === 'rnd' ? 'active' : ''}`}
            >
              Application Center
            </button>
          </div>

          {/* Solutions Grid */}
          <div className="cards-3col">
            {filteredSolutions.map((sol) => (
              <div
                key={sol.id}
                className="premium-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
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
                  <span className="badge" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                    {sol.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111a2e', marginBottom: '0.75rem' }}>
                    {sol.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {sol.description}
                  </p>

                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <strong style={{ fontSize: '0.85rem', color: '#111a2e', display: 'block', marginBottom: '0.5rem' }}>
                      Key Capabilities:
                    </strong>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {sol.details.map((d, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.825rem', color: '#475569' }}>
                          <CheckCircle2 size={14} color="#128d46" style={{ minWidth: '14px', marginTop: '2px' }} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenQuote}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                  >
                    Request Formulation Sample <ArrowRight size={14} />
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
