import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Award, Info, ShoppingBag, ExternalLink } from 'lucide-react';
import { SkuProduct } from '../../data/fmcgBrandsData';
import { useLanguage } from '../../context/LanguageContext';
import './BrandShowcase.css';

interface SkuCard3DProps {
  sku: SkuProduct;
  brandPrimaryColor: string;
  onOpenQuote: () => void;
}

export const SkuCard3D: React.FC<SkuCard3DProps> = ({ sku, brandPrimaryColor, onOpenQuote }) => {
  const { language } = useLanguage();
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
        <div className="fmcg-sku-img-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src={(isHovered && sku.hoverImage) ? sku.hoverImage : sku.image}
            alt={sku.name}
            className="fmcg-sku-img"
            style={{ transition: 'all 0.35s ease', filter: 'none' }}
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

          {/* Price & Pack Format */}
          {sku.priceEgp && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', margin: '0.5rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 900, color: brandPrimaryColor }}>
                  {sku.priceEgp} {language === 'ar' ? 'ج.م' : 'EGP'}
                </span>
                {sku.compareAtPriceEgp && (
                  <span style={{ fontSize: '0.825rem', color: '#94A3B8', textDecoration: 'line-through' }}>
                    {sku.compareAtPriceEgp} {language === 'ar' ? 'ج.م' : 'EGP'}
                  </span>
                )}
              </div>
              {sku.packType && (
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', background: '#F1F5F9', padding: '3px 8px', borderRadius: '6px' }}>
                  {sku.packType}
                </span>
              )}
            </div>
          )}

          <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.5, marginBottom: '0.85rem', minHeight: '38px' }}>
            {sku.flavorProfile}
          </p>

          {/* Key Product Highlights / Features */}
          {sku.keyBenefits && sku.keyBenefits.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', margin: '0.75rem 0 1.25rem 0' }}>
              {sku.keyBenefits.slice(0, 3).map((benefit, bIdx) => (
                <span
                  key={bIdx}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#475569',
                    background: '#F8FAFC',
                    border: '1px solid rgba(0,0,0,0.06)',
                    padding: '3px 8px',
                    borderRadius: '6px',
                  }}
                >
                  {benefit}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons: Specs & Direct Shopping */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <button
              onClick={() => setShowNutritionModal(!showNutritionModal)}
              style={{
                width: '100%',
                padding: '0.65rem 0.5rem',
                borderRadius: '12px',
                background: '#F8FAFC',
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                color: '#334155',
                fontWeight: 700,
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
              }}
              title="View Nutrition Facts"
            >
              <Info size={14} style={{ color: sku.tagColor }} />
              <span>{language === 'ar' ? 'المواصفات' : 'Nutrition'}</span>
            </button>

            <a
              href={sku.buyUrl || 'https://awa-shopping-chi.vercel.app/'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                padding: '0.65rem 0.5rem',
                borderRadius: '12px',
                background: brandPrimaryColor,
                border: 'none',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                textDecoration: 'none',
                boxShadow: `0 3px 10px ${brandPrimaryColor}40`,
                transition: 'all 0.2s ease',
              }}
            >
              <ShoppingBag size={14} />
              <span>{language === 'ar' ? 'شراء أونلاين' : 'Buy Online'}</span>
            </a>
          </div>
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
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#FFFFFF' }}>
                  {language === 'ar' ? 'بطاقة الحقائق الغذائية' : 'Nutrition Facts'}
                </span>
                <button
                  onClick={() => setShowNutritionModal(false)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#FFFFFF', padding: '0.2rem 0.5rem', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer' }}
                >
                  {language === 'ar' ? 'إغلاق' : 'Close'}
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
              {language === 'ar' ? 'طلب شهادة التحليل الفني (COA)' : 'Request Full Spec Sheet (COA)'}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

