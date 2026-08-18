import React, { useState, useEffect } from 'react';
import { FMCG_BRANDS, FmcgBrandData } from '../data/fmcgBrandsData';
import { BrandNavBar } from './brand-showcase/BrandNavBar';
import { StickyScrollyHero } from './brand-showcase/StickyScrollyHero';
import { FlavorMorpherCanvas } from './brand-showcase/FlavorMorpherCanvas';
import { YallaFlavorSplashShowcase } from './brand-showcase/YallaFlavorSplashShowcase';
import { SweetSlimWellnessShowcase } from './brand-showcase/SweetSlimWellnessShowcase';
import { SkuGrid3D } from './brand-showcase/SkuGrid3D';
import { BrandStorySplit } from './brand-showcase/BrandStorySplit';
import { BrandFaqAndProof } from './brand-showcase/BrandFaqAndProof';
import { ShieldCheck, ArrowRight, ShoppingBag } from 'lucide-react';
import './brand-showcase/BrandShowcase.css';

interface AwaBrandShowcaseProps {
  initialBrandId?: string;
  onOpenQuote: () => void;
}

export const AwaBrandShowcase: React.FC<AwaBrandShowcaseProps> = ({
  initialBrandId,
  onOpenQuote,
}) => {
  const getNormalizedBrandId = (id?: string): 'squeasy' | 'sweet-and-slim' | 'yalla-drinks' => {
    if (id === 'squeasy') return 'squeasy';
    if (id === 'sweet-and-slim') return 'sweet-and-slim';
    if (id === 'yalla-drinks' || id === 'yalla') return 'yalla-drinks';
    return 'squeasy';
  };

  const [activeBrandId, setActiveBrandId] = useState<'squeasy' | 'sweet-and-slim' | 'yalla-drinks'>(
    getNormalizedBrandId(initialBrandId)
  );

  useEffect(() => {
    if (initialBrandId) {
      setActiveBrandId(getNormalizedBrandId(initialBrandId));
    }
  }, [initialBrandId]);

  const currentBrand: FmcgBrandData = FMCG_BRANDS[activeBrandId];

  return (
    <div className="fmcg-root">
      {/* 1. Global Glassmorphic Brand Nav */}
      <BrandNavBar
        currentBrand={currentBrand}
        activeBrandId={activeBrandId}
        onSelectBrand={(id) => {
          setActiveBrandId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuote={onOpenQuote}
      />

      {/* 2. Hero Stage (Brand-Bespoke) */}
      {activeBrandId === 'yalla-drinks' ? (
        /* Yalla: Flagship Light Mode 360° Flavor Splash Stage with Graphic Overlays */
        <YallaFlavorSplashShowcase onOpenQuote={onOpenQuote} />
      ) : (
        /* Squeasy & Sweet & Slim: Tactile 3D Hero Levitation Stage with Floating Ingredient Graphics */
        <StickyScrollyHero
          key={activeBrandId + '-hero'}
          brand={currentBrand}
          onOpenQuote={onOpenQuote}
        />
      )}

      {/* 3. Interactive Middle Experience */}
      {activeBrandId === 'sweet-and-slim' && (
        <SweetSlimWellnessShowcase onOpenQuote={onOpenQuote} />
      )}

      {activeBrandId === 'squeasy' && (
        <FlavorMorpherCanvas
          key="squeasy-morpher"
          brand={currentBrand}
          onOpenQuote={onOpenQuote}
        />
      )}

      {/* 4. 3D Parallax & Glare SKU Grid with Taste Profile Meters */}
      <SkuGrid3D
        key={activeBrandId + '-skus'}
        brand={currentBrand}
        onOpenQuote={onOpenQuote}
      />

      {/* 5. Brand Heritage & Manufacturing Science */}
      <BrandStorySplit
        key={activeBrandId + '-story'}
        brand={currentBrand}
        onOpenQuote={onOpenQuote}
      />

      {/* 6. Social Proof, Retailer Stockists & Interactive FAQs */}
      <BrandFaqAndProof
        key={activeBrandId + '-proof'}
        brand={currentBrand}
        onOpenQuote={onOpenQuote}
      />

      {/* 7. Bottom Ecosystem Banner */}
      <section style={{
        padding: '4rem 1.5rem',
        background: '#FFFFFF',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        color: '#0F172A',
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: currentBrand.theme.primary, marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} />
              <span>AWA Group Industrial & Retail Ecosystem</span>
            </div>
            <h4 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.35rem' }}>
              Partner With AWA Food Solutions
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#475569', maxWidth: '640px' }}>
              We partner with global food manufacturers, retail supermarket chains, foodservice operators, and export distributors.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="fmcg-btn-primary"
            style={{ backgroundColor: currentBrand.theme.primary }}
          >
            <ShoppingBag size={16} />
            <span>Connect With Our Trade Team</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};
