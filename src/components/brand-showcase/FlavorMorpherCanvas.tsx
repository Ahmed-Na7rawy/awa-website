import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, ShoppingBag, Zap } from 'lucide-react';
import { FmcgBrandData, FlavorOption } from '../../data/fmcgBrandsData';
import './BrandShowcase.css';

interface SquEasyGraphicVibe {
  id: string;
  lightGradient: string;
  accentColor: string;
  textColor: string;
  floatingGraphics: { emoji: string; size: number; top: string; left: string; delay: number }[];
}

const SQUEASY_VIBES: Record<string, SquEasyGraphicVibe> = {
  'sq-flv-harissa': {
    id: 'sq-flv-harissa',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #FFE4E6 0%, #FED7AA 40%, #F8FAFC 80%)',
    accentColor: '#DC2626',
    textColor: '#991B1B',
    floatingGraphics: [
      { emoji: '🌶️', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🫒', size: 42, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '🌿', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🧂', size: 38, top: '82%', left: '46%', delay: 0.8 },
      { emoji: '🌶️', size: 48, top: '10%', left: '88%', delay: 0.2 },
      { emoji: '🫒', size: 40, top: '50%', left: '92%', delay: 1.0 },
      { emoji: '🌿', size: 38, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌶️', size: 44, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  'sq-flv-garlic-pouch': {
    id: 'sq-flv-garlic-pouch',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #ECFCCB 0%, #D9F99D 40%, #F8FAFC 80%)',
    accentColor: '#65A30D',
    textColor: '#3F6212',
    floatingGraphics: [
      { emoji: '🧄', size: 54, top: '8%', left: '6%', delay: 0 },
      { emoji: '🌱', size: 44, top: '68%', left: '8%', delay: 0.6 },
      { emoji: '🍋', size: 44, top: '12%', left: '44%', delay: 0.2 },
      { emoji: '🧄', size: 46, top: '82%', left: '46%', delay: 0.9 },
      { emoji: '🧄', size: 50, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🌿', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '🍋', size: 40, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌱', size: 40, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
  'sq-flv-garlic-jar': {
    id: 'sq-flv-garlic-jar',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #FEF3C7 0%, #FDE68A 40%, #F8FAFC 80%)',
    accentColor: '#D97706',
    textColor: '#92400E',
    floatingGraphics: [
      { emoji: '🧄', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🫒', size: 46, top: '68%', left: '8%', delay: 0.4 },
      { emoji: '🌿', size: 42, top: '12%', left: '44%', delay: 0.7 },
      { emoji: '🧂', size: 38, top: '82%', left: '46%', delay: 1.0 },
      { emoji: '🧄', size: 48, top: '10%', left: '88%', delay: 0.3 },
      { emoji: '🫒', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '🌿', size: 38, top: '78%', left: '85%', delay: 0.8 },
      { emoji: '🧄', size: 44, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  'sq-flv-harissa-sachet': {
    id: 'sq-flv-harissa-sachet',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #FFE4E6 0%, #FECDD3 40%, #F8FAFC 80%)',
    accentColor: '#E11D48',
    textColor: '#9F1239',
    floatingGraphics: [
      { emoji: '🌶️', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🧄', size: 40, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '🌿', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🫒', size: 42, top: '82%', left: '46%', delay: 0.8 },
      { emoji: '🌶️', size: 48, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🌿', size: 40, top: '50%', left: '92%', delay: 1.0 },
      { emoji: '🧂', size: 36, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌶️', size: 44, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
};

interface FlavorMorpherCanvasProps {
  brand: FmcgBrandData;
  onOpenQuote: () => void;
}

export const FlavorMorpherCanvas: React.FC<FlavorMorpherCanvasProps> = ({ brand, onOpenQuote }) => {
  const [activeFlavorId, setActiveFlavorId] = useState<string>(brand.flavors[0].id);

  const currentFlavor: FlavorOption =
    brand.flavors.find((f) => f.id === activeFlavorId) || brand.flavors[0];

  const vibe = SQUEASY_VIBES[activeFlavorId] || SQUEASY_VIBES['sq-flv-harissa'];

  return (
    <section className="fmcg-morpher-section-light">
      {/* Dynamic Light Background Gradient */}
      <motion.div
        key={currentFlavor.id + '-light-bg'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: vibe.lightGradient,
          pointerEvents: 'none',
        }}
      />

      {/* Omnidirectional Floating Animated Graphics Across the Entire Stage */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 3 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFlavor.id + '-graphics'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            {vibe.floatingGraphics.map((item, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, idx % 2 === 0 ? -22 : 22, 0],
                  x: [0, idx % 2 === 0 ? 16 : -16, 0],
                  rotate: [0, idx % 2 === 0 ? 18 : -18, 0],
                }}
                transition={{
                  duration: 4 + idx * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                style={{
                  position: 'absolute',
                  top: item.top,
                  left: item.left,
                  fontSize: `${item.size}px`,
                  userSelect: 'none',
                  filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.12))',
                }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="fmcg-section-header-light">
        <div
          className="fmcg-eyebrow"
          style={{
            borderColor: `${vibe.accentColor}55`,
            color: vibe.textColor,
          }}
        >
          <Zap size={14} style={{ color: vibe.accentColor }} />
          <span>Interactive Culinary Tasting Room</span>
        </div>

        <h2 className="fmcg-section-title-light">
          EXPLORE THE CULINARY SPECTRUM
        </h2>
        <p className="fmcg-section-desc-light">
          Select any format below to morph the Mediterranean recipe, packaging format, and chef application.
        </p>
      </div>

      {/* Flavor Selector Pills */}
      <div className="fmcg-flavor-pills-row-light">
        {brand.flavors.map((flavor) => {
          const isSelected = activeFlavorId === flavor.id;
          const flavorVibe = SQUEASY_VIBES[flavor.id] || SQUEASY_VIBES['sq-flv-harissa'];
          return (
            <button
              key={flavor.id}
              onClick={() => setActiveFlavorId(flavor.id)}
              className={`fmcg-flavor-pill-light ${isSelected ? 'active' : ''}`}
              style={{
                backgroundColor: isSelected ? flavorVibe.accentColor : '#FFFFFF',
                borderColor: isSelected ? flavorVibe.accentColor : 'rgba(0,0,0,0.08)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? '#FFFFFF' : flavorVibe.accentColor,
                }}
              />
              <span>{flavor.name}</span>
            </button>
          );
        })}
      </div>

      {/* 3-Column Morpher Stage */}
      <div className="fmcg-morpher-stage-grid">
        {/* Left Column: Flavor Details */}
        <div className="fmcg-glass-card-light">
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: vibe.textColor, marginBottom: '0.25rem' }}>
              Culinary Formulation
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
              {currentFlavor.name}
            </h3>
          </div>

          <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Key Flavor Notes
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {currentFlavor.tasteHighlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} style={{ color: vibe.accentColor, flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column: 3D Flip Pack Image with Orbiting Sachet */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '380px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFlavor.id}
              initial={{ rotateY: 180, scale: 0.8, opacity: 0 }}
              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
              exit={{ rotateY: -180, scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
            >
              {/* Main Pack */}
              <motion.img
                animate={{
                  y: [0, -12, 0],
                  rotateZ: [0, -1.5, 1.5, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                src={currentFlavor.heroImage}
                alt={currentFlavor.name}
                style={{
                  height: '350px',
                  width: 'auto',
                  maxWidth: '260px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 22px 40px rgba(0,0,0,0.18))',
                  position: 'relative',
                  zIndex: 10,
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/2026/1.png';
                }}
              />

              {/* Orbiting Sachet if available */}
              {currentFlavor.sachetImage && (
                <motion.img
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -14, 0],
                    rotateZ: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.2,
                  }}
                  src={currentFlavor.sachetImage}
                  alt="Flavor Sachet"
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    right: '-15px',
                    height: '150px',
                    width: 'auto',
                    maxWidth: '95px',
                    objectFit: 'contain',
                    zIndex: 20,
                    filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))',
                  }}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Nutritional Metrics */}
        <div className="fmcg-glass-card-light">
          <div style={{
            padding: '1.25rem',
            borderRadius: '18px',
            background: '#F8FAFC',
            border: '1px solid rgba(0,0,0,0.06)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: vibe.textColor }}>
              {currentFlavor.nutritionalHero.heroMetric}
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginTop: '0.25rem' }}>
              {currentFlavor.nutritionalHero.heroLabel}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div style={{ padding: '1rem', borderRadius: '16px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>
                {currentFlavor.nutritionalHero.calories}
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                Calories / Serving
              </div>
            </div>

            <div style={{ padding: '1rem', borderRadius: '16px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.06)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>
                {currentFlavor.nutritionalHero.sugar}
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                Sugar Content
              </div>
            </div>
          </div>

          <div style={{ padding: '0.85rem', borderRadius: '14px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.06)', fontSize: '0.8rem', color: '#64748B' }}>
            <div style={{ fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.25rem' }}>
              <CheckCircle2 size={14} style={{ color: vibe.accentColor }} />
              <span>Natural Acidity Preservation</span>
            </div>
            <div style={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
              18-Month ambient shelf life guaranteed via multi-layer oxygen-barrier foil lock.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
