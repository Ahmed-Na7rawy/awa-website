import React from 'react';
import { Globe, ShieldCheck, CheckCircle2, ArrowRight, Truck, Database, Sparkles } from 'lucide-react';
import { PARTNER_LOGOS } from '../data/siteData';
import { PartnerMarquee } from '../components/PartnerMarquee';

interface TradingProps {
  onOpenQuote: () => void;
}

export const TradingPage: React.FC<TradingProps> = ({ onOpenQuote }) => {
  const categories = [
    {
      title: 'Hydrocolloids & Texture Stabilizers',
      items: [
        'Xanthan Gum (Food & Pharma Grade)',
        'Carrageenan (Refined Kappa, Semi-Refined, Iota)',
        'Guar Gum (Food & Industrial Grade)',
        'Sodium Carboxymethylcellulose (CMC)',
        'Sodium Alginate & Calcium Lactate',
        'Pectin (High Methoxyl & Low Methoxyl)',
        'Locust Bean Gum (LBG) & Tara Gum'
      ]
    },
    {
      title: 'Preservatives & Shelf-Life Extenders',
      items: [
        'Potassium Sorbate & Sorbic Acid',
        'Sodium Benzoate & Benzoic Acid',
        'Natamycin (50% & Liquid Suspension)',
        'Nisin (Natural Peptide Antimicrobial)',
        'Calcium Propionate & Sodium Diacetate',
        'Ascorbic Acid (Vitamin C) & Sodium Erythorbate',
        'Citric Acid Anhydrous & Monohydrate'
      ]
    },
    {
      title: 'Emulsifiers & Phosphates',
      items: [
        'Distilled Monoglycerides (DMG / E471)',
        'Sodium Stearoyl Lactylate (SSL / E481)',
        'Polysorbate 60 & 80 (Tween Series)',
        'DATEM (Diacetyl Tartaric Acid Esters of Mono- and Diglycerides)',
        'Sodium Tripolyphosphate (STPP)',
        'Tetrasodium Pyrophosphate (TSPP)',
        'Sodium Hexametaphosphate (SHMP)'
      ]
    },
    {
      title: 'Sweeteners, Proteins & Specialty Additives',
      items: [
        'High-Purity Sucralose (USP/FCC)',
        'Acesulfame Potassium (Ace-K)',
        'Sodium Saccharin & Aspartame',
        'Whey Protein Concentrates (WPC 80 / WPC 35)',
        'Soy Protein Isolate (SPI 90%) & Soy Protein Concentrates',
        'Titanium Dioxide & Natural Food Colors',
        'Enzyme Preparations (Fungal Alpha-Amylase, Lipase, Protease)'
      ]
    }
  ];

  return (
    <div>
      {/* Banner */}
      <section className="page-banner">
        <div className="container">
          <span className="badge badge-dark">
            <Sparkles size={14} /> Global Procurement
          </span>
          <h1 className="page-banner-title">Global Ingredient Trading</h1>
          <p className="page-banner-subtitle">
            Direct partnerships with top chemical & food ingredient manufacturers across Europe, the Americas, and Asia.
          </p>
        </div>
      </section>

      {/* Trading Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge">Reliable Supply</span>
              <h2 className="section-title">Seamless Raw Material Procurement For Egyptian Manufacturers</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                With three decades of market presence, AWA Group provides unhindered access to high-purity food additives, functional hydrocolloids, and preservatives. We manage all international shipping, currency hedging, regulatory compliance, and quality auditing.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Our strategic buffer stock stored in Alexandria and Cairo warehouses guarantees continuous supply to your production lines, eliminating downtime caused by global shipping disruptions.
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                Request Ingredient Specification & Quote <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <img 
                src="/images/pages/trading/Image11.jpg" 
                alt="AWA Ingredient Sourcing" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-xl)', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/blending.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Catalog Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="badge">Product Portfolio</span>
            <h2 className="section-title">Core Trading Categories</h2>
            <p className="section-desc">
              All ingredients are supplied with Certificate of Analysis (COA), MSDS, Halal, Kosher, and ISO certifications.
            </p>
          </div>

          <div className="cards-2col">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="premium-card"
                style={{
                  background: '#ffffff',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    <Database size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#111a2e' }}>{cat.title}</h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {cat.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: '#475569' }}>
                      <CheckCircle2 size={16} color="#128d46" style={{ minWidth: '16px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Moving Carousel */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Global Network</span>
            <h2 className="section-title">Strategic Sourcing Partners</h2>
            <p className="section-desc">
              We collaborate with globally recognized ingredient producers to bring top-tier science to Egypt.
            </p>
          </div>

          <PartnerMarquee
            items={PARTNER_LOGOS}
            speed="normal"
          />
        </div>
      </section>
    </div>
  );
};
