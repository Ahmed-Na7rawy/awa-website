import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { FmcgBrandData } from '../../data/fmcgBrandsData';
import './BrandShowcase.css';

interface BrandNavBarProps {
  currentBrand: FmcgBrandData;
  activeBrandId: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks';
  onSelectBrand: (brandId: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks') => void;
  onOpenQuote: () => void;
}

export const BrandNavBar: React.FC<BrandNavBarProps> = ({
  currentBrand,
  activeBrandId,
  onSelectBrand,
  onOpenQuote,
}) => {
  const brands: { id: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks'; name: string; tag: string; color: string }[] = [
    { id: 'squeasy', name: 'SquEasy', tag: 'Culinary Pastes', color: '#EA580C' },
    { id: 'sweet-and-slim', name: 'Sweet & Slim', tag: '0 Cal & Mints', color: '#10B981' },
    { id: 'yalla-drinks', name: 'Yalla Drinks', tag: 'Instant Barista', color: '#0284C7' },
  ];

  return (
    <nav className="fmcg-nav-bar">
      <div className="fmcg-nav-container">
        {/* Left: Brand Identity */}
        <div className="fmcg-nav-brand">
          <span
            className="fmcg-nav-dot"
            style={{ backgroundColor: currentBrand.theme.primary, color: currentBrand.theme.primary }}
          />
          <span className="fmcg-nav-title">{currentBrand.brandName}</span>
          <span className="fmcg-nav-tag">AWA Retail FMCG</span>
        </div>

        {/* Center: Brand Switcher Pills */}
        <div className="fmcg-switcher-group">
          {brands.map((b) => {
            const isActive = activeBrandId === b.id;
            return (
              <button
                key={b.id}
                onClick={() => onSelectBrand(b.id)}
                className={`fmcg-switcher-btn ${isActive ? 'active' : ''}`}
                style={{
                  backgroundColor: isActive ? b.color : 'transparent',
                }}
              >
                <span>{b.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Quick Action CTA */}
        <button
          onClick={onOpenQuote}
          className="fmcg-nav-cta"
          style={{ backgroundColor: currentBrand.theme.primary }}
        >
          <ShoppingBag size={15} />
          <span>Distribution Inquiries</span>
        </button>
      </div>
    </nav>
  );
};
