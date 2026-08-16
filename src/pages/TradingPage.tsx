import React from 'react';
import { Globe, ShieldCheck, CheckCircle2, ArrowRight, Database } from 'lucide-react';
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
        'DATEM (Diacetyl Tartaric Acid Esters)',
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
        'Soy Protein Isolate (SPI 90%) & Concentrates',
        'Titanium Dioxide & Natural Food Colors',
        'Enzyme Preparations (Alpha-Amylase, Lipase)'
      ]
    }
  ];

  return (
    <div className="trading-page">
      {/* Header Banner */}
      <section className="section section-dark" style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div className="eyebrow eyebrow-dark">Global Procurement & Sourcing</div>
          <h1 className="section-title" style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>
            Direct Raw Material Sourcing & Trading
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px' }}>
            Direct distribution agreements with top chemical & food ingredient manufacturers across Europe, the Americas, and Asia.
          </p>
        </div>
      </section>

      {/* Trading Overview */}
      <section className="section">
        <div className="container">
          <div className="editorial-grid">
            <div>
              <div className="eyebrow">Reliable Supply Chain</div>
              <h2 className="section-title">Seamless Raw Material Procurement For Regional Manufacturers</h2>
              <p className="section-desc" style={{ marginBottom: '1.25rem' }}>
                With three decades of market presence, AWA Group provides unhindered access to high-purity food additives, functional hydrocolloids, and preservatives. We handle international logistics, currency hedging, regulatory compliance, and quality auditing.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '2rem' }}>
                Our strategic buffer inventory stored in Alexandria and Cairo warehouses guarantees continuous supply to your production lines, eliminating downtime caused by global shipping disruptions.
              </p>

              <button onClick={onOpenQuote} className="btn btn-primary">
                <span>Request Ingredient Quotation</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="editorial-img-container">
              <img 
                src="/images/pages/trading/Image11.jpg" 
                alt="AWA Raw Material Warehousing & Trading" 
                className="editorial-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/home/blending.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Catalog Grid */}
      <section className="section section-stone">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Product Portfolio</div>
            <h2 className="section-title">Core Trading Categories</h2>
            <p className="section-desc">
              All ingredients are supplied with Certificate of Analysis (COA), MSDS, Halal, Kosher, and ISO certifications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {categories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '2.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)'
                  }}>
                    <Database size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--dark-navy)' }}>{cat.title}</h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {cat.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partner Marquee */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Global Sourcing Network</div>
            <h2 className="section-title">Strategic Sourcing Partners</h2>
          </div>
          <PartnerMarquee items={PARTNER_LOGOS} speed="normal" />
        </div>
      </section>
    </div>
  );
};
