import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Info } from 'lucide-react';
import { SkuProduct } from '../../data/fmcgBrandsData';
import './BrandShowcase.css';

interface SkuCard3DProps {
  sku: SkuProduct;
  brandPrimaryColor: string;
  onOpenQuote: () => void;
}

export const SkuCard3D: React.FC<SkuCard3DProps> = ({ sku, brandPrimaryColor, onOpenQuote }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showNutritionModal, setShowNutritionModal] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="fmcg-sku-card"
      >
        {/* Top Tag & Weight */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span
            style={{
              padding: '0.25rem 0.8rem',
              borderRadius: '9999px',
              fontSize: '0.725rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              backgroundColor: sku.tagColor,
              boxShadow: `0 4px 12px ${sku.tagColor}44`,
            }}
          >
            {sku.categoryTag}
          </span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', background: '#F1F5F9', padding: '0.2rem 0.6rem', borderRadius: '8px' }}>
            {sku.weight}
          </span>
        </div>

        {/* Large Prominent Pack Shot Image */}
        <div className="fmcg-sku-img-wrapper">
          <img
            src={sku.image}
            alt={sku.name}
            className="fmcg-sku-img"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/2026/1.png';
            }}
          />
        </div>

        {/* SKU Info */}
        <div style={{ marginTop: '0.5rem' }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 900, lineHeight: 1.25, color: '#0F172A', marginBottom: '0.35rem' }}>
            {sku.name}
          </h4>
          <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.5, marginBottom: '1rem', minHeight: '38px' }}>
            {sku.flavorProfile}
          </p>

          {/* Taste Profile Meters */}
          <div style={{ padding: '0.85rem 0', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.6rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Award size={13} style={{ color: '#D97706' }} />
                <span>Taste Profile Matrix</span>
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {sku.tasteMeters.slice(0, 3).map((meter, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.725rem', fontWeight: 700, color: '#475569' }}>
                    <span>{meter.label}</span>
                    <span style={{ color: meter.color, fontWeight: 800 }}>{meter.value}%</span>
                  </div>
                  <div className="fmcg-meter-bar-bg">
                    <div
                      className="fmcg-meter-bar-fill"
                      style={{
                        width: isHovered ? `${meter.value}%` : `${meter.value * 0.75}%`,
                        backgroundColor: meter.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Action */}
          <button
            onClick={() => setShowNutritionModal(!showNutritionModal)}
            style={{
              width: '100%',
              padding: '0.7rem 1rem',
              borderRadius: '14px',
              background: '#F8FAFC',
              border: '1px solid rgba(0,0,0,0.08)',
              cursor: 'pointer',
              color: '#334155',
              fontWeight: 700,
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              transition: 'all 0.2s ease',
            }}
            title="View Nutrition Facts"
          >
            <Info size={15} style={{ color: sku.tagColor }} />
            <span>Nutritional Profile & Specs</span>
          </button>
        </div>

        {/* Nutrition Facts Modal Overlay */}
        {showNutritionModal && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 30,
              padding: '1.5rem',
              borderRadius: '26px',
              background: 'rgba(15, 23, 42, 0.96)',
              color: '#FFFFFF',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#FFFFFF' }}>Nutrition Facts</span>
                <button
                  onClick={() => setShowNutritionModal(false)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer' }}
                >
                  Close
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {sku.nutritionFacts.map((fact, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '0.25rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#94A3B8' }}>{fact.label}:</span>
                    <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="fmcg-btn-primary"
              style={{ backgroundColor: brandPrimaryColor, width: '100%', justifyContent: 'center', padding: '0.65rem 1rem', fontSize: '0.8rem' }}
            >
              Request Full Spec Sheet (COA)
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
