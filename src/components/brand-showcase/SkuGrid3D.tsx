import React, { useState } from 'react';
import { Layers, ShoppingBag, ArrowRight } from 'lucide-react';
import { FmcgBrandData } from '../../data/fmcgBrandsData';
import { SkuCard3D } from './SkuCard3D';
import './BrandShowcase.css';

interface SkuGrid3DProps {
  brand: FmcgBrandData;
  onOpenQuote: () => void;
}

export const SkuGrid3D: React.FC<SkuGrid3DProps> = ({ brand, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(brand.skus.map((s) => s.categoryTag)))];

  const filteredSkus =
    activeCategory === 'all'
      ? brand.skus
      : brand.skus.filter((s) => s.categoryTag === activeCategory);

  const isLight = brand.id === 'yalla-drinks';

  return (
    <section className="fmcg-sku-section">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div>
          <div
            className="fmcg-eyebrow"
            style={{
              borderColor: `${brand.theme.primary}55`,
              backgroundColor: isLight ? '#FFFFFF' : `${brand.theme.primary}22`,
              color: isLight ? '#0284C7' : brand.theme.accent,
            }}
          >
            <Layers size={14} />
            <span>Retail & Foodservice SKU Lineup</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, textTransform: 'uppercase', color: 'inherit', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
            {brand.brandName} PRODUCT CATALOG
          </h2>
          <p style={{ fontSize: '0.95rem', opacity: 0.75, margin: 0 }}>
            Explore packaging formats, taste intensity metrics, and retail specifications.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          background: isLight ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
          padding: '0.3rem',
          borderRadius: '14px',
          border: isLight ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.1)'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '10px',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'capitalize',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: activeCategory === cat ? (isLight ? '#0F172A' : '#FFFFFF') : 'transparent',
                color: activeCategory === cat ? '#FFFFFF' : 'inherit',
                opacity: activeCategory === cat ? 1 : 0.7,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 3D Cards */}
      <div className="fmcg-sku-grid">
        {filteredSkus.map((sku) => (
          <SkuCard3D
            key={sku.id}
            sku={sku}
            brandPrimaryColor={brand.theme.primary}
            onOpenQuote={onOpenQuote}
          />
        ))}
      </div>

      {/* B2B Banner */}
      <div style={{
        marginTop: '3.5rem',
        padding: '2rem 2.5rem',
        borderRadius: '24px',
        background: isLight ? '#FFFFFF' : 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        border: isLight ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.12)',
        boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.04)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        <div>
          <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: 'inherit', marginBottom: '0.25rem' }}>
            Looking for Commercial Distribution or Foodservice Supply?
          </h4>
          <p style={{ fontSize: '0.875rem', opacity: 0.75 }}>
            We supply hypermarkets, retail chains, specialty cafes, and export partners worldwide.
          </p>
        </div>

        <button
          onClick={onOpenQuote}
          className="fmcg-btn-primary"
          style={{ backgroundColor: brand.theme.primary }}
        >
          <ShoppingBag size={16} />
          <span>Request Commercial Price List</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};
