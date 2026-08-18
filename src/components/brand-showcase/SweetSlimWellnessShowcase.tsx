import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Heart, CheckCircle2, ShoppingBag, ArrowRight, Activity, Coffee, Droplets } from 'lucide-react';
import './BrandShowcase.css';

interface SweetSlimPillar {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  leadImage: string;
  companionImage?: string;
  color: string;
  lightGradient: string;
  textColor: string;
  benefits: string[];
  keySpec: string;
  keySpecLabel: string;
  floatingGraphics: { emoji: string; size: number; top: string; left: string; delay: number }[];
}

const SWEET_SLIM_PILLARS: SweetSlimPillar[] = [
  {
    id: 'sachets',
    title: 'Daily Table-Top Sachets & Value Dispensers',
    badge: 'Daily Essentials',
    tagline: '1 Stick Replaces 2 Teaspoons of Sugar with 0 Calories & 0 Glycemic Index',
    leadImage: '/images/2026/50 classic-View 4 (1).png',
    companionImage: '/images/2026/50 extra-View 4 (2).png',
    color: '#10B981',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #ECFDF5 0%, #D1FAE5 40%, #F8FAFC 80%)',
    textColor: '#047857',
    benefits: [
      'Pure pharmaceutical-grade sucralose',
      'Available in 50 & 100 stick dispenser boxes',
      'Enriched with prebiotic chicory inulin fiber',
      '100% Aspartame, Cyclamate & Saccharin free',
    ],
    keySpec: '0.0 GI',
    keySpecLabel: 'Zero Blood Sugar Elevation',
    floatingGraphics: [
      { emoji: '🍃', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🌱', size: 38, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '☕', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🌱', size: 40, top: '82%', left: '46%', delay: 0.8 },
      { emoji: '🍃', size: 48, top: '10%', left: '88%', delay: 0.2 },
      { emoji: '🌿', size: 36, top: '50%', left: '92%', delay: 1.0 },
      { emoji: '🌱', size: 40, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '☕', size: 42, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  {
    id: 'mints',
    title: 'Artisan Sugar-Free Pocket Breath Mints',
    badge: 'Pocket Fresh',
    tagline: 'Collectible Metal Sliding Tins with Natural Essential Oils & Zero Tooth Decay',
    leadImage: '/images/2026/Sweet & Slim Spearmint Tin-Photoroom.png',
    companionImage: '/images/2026/peach2-Current View-Photoroom.png',
    color: '#06B6D4',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #CFFAFE 0%, #A5F3FC 40%, #F8FAFC 80%)',
    textColor: '#0E7490',
    benefits: [
      'Refreshing Spearmint, Sun Peach & Strawberry',
      'Matte embossed metal pocket sliding tin',
      'Tooth friendly sugar-free micro-pills',
      'Instant long-lasting cooling breath freshness',
    ],
    keySpec: '< 1 kcal',
    keySpecLabel: 'Per Refreshing Mint Pill',
    floatingGraphics: [
      { emoji: '🧊', size: 50, top: '8%', left: '6%', delay: 0 },
      { emoji: '🍑', size: 48, top: '68%', left: '8%', delay: 0.6 },
      { emoji: '🍃', size: 46, top: '12%', left: '44%', delay: 0.2 },
      { emoji: '🌿', size: 36, top: '82%', left: '46%', delay: 0.9 },
      { emoji: '🧊', size: 46, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🍓', size: 44, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '🍑', size: 42, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🍃', size: 42, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
  {
    id: 'liquid',
    title: 'Instant Zero-Calorie Liquid Dropper',
    badge: 'Cold Mixology',
    tagline: 'Instant Cold-Soluble Dropper Bottle for Iced Lattes, Cocktails & Juices',
    leadImage: '/images/2026/S&S Bottle.png',
    color: '#3B82F6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #DBEAFE 0%, #BFDBFE 40%, #F8FAFC 80%)',
    textColor: '#1D4ED8',
    benefits: [
      '3 drops equal 1 full teaspoon of sugar',
      'Dissolves instantly in ice water without stirring crystals',
      'Zero residue, zero stickiness, no clumping',
      'Pocket-sized leakproof precision dropper',
    ],
    keySpec: '150+',
    keySpecLabel: 'Sweet Servings Per Bottle',
    floatingGraphics: [
      { emoji: '💧', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🍋', size: 46, top: '68%', left: '8%', delay: 0.5 },
      { emoji: '🧊', size: 44, top: '12%', left: '44%', delay: 0.8 },
      { emoji: '💧', size: 38, top: '82%', left: '46%', delay: 1.0 },
      { emoji: '💧', size: 48, top: '10%', left: '88%', delay: 0.3 },
      { emoji: '🍋', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '💧', size: 42, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌿', size: 36, top: '42%', left: '4%', delay: 1.2 },
    ],
  },
  {
    id: 'hotdrinks',
    title: 'Diet Hot Cocoa & 3-in-1 Coffee Boxes',
    badge: 'Warm Indulgence',
    tagline: 'Decadent Dutch Chocolate & Arabica Coffee with Zero Added Table Sugar',
    leadImage: '/images/2026/S&S Hot Chocolate Hazelnut 3D Box-Camera 3.png',
    companionImage: '/images/2026/S&S Hot Chocolate Hazelnut Sachet-Sachet 1.png',
    color: '#8B5CF6',
    lightGradient: 'radial-gradient(ellipse at 50% 30%, #EDE9FE 0%, #DDD6FE 40%, #F8FAFC 80%)',
    textColor: '#6D28D9',
    benefits: [
      'Dutch dark cocoa with roasted hazelnut cream',
      'Only 45 calories per rich creamy mug',
      'Sweetened exclusively with Sweet & Slim',
      'Instant boiling water or steamed milk dissolution',
    ],
    keySpec: '45 kcal',
    keySpecLabel: 'Only 45 kcal / Creamy Mug',
    floatingGraphics: [
      { emoji: '🍫', size: 52, top: '8%', left: '6%', delay: 0 },
      { emoji: '🌰', size: 46, top: '68%', left: '8%', delay: 0.6 },
      { emoji: '☕', size: 44, top: '12%', left: '44%', delay: 0.3 },
      { emoji: '🍫', size: 38, top: '82%', left: '46%', delay: 0.9 },
      { emoji: '🍫', size: 48, top: '10%', left: '88%', delay: 0.4 },
      { emoji: '🌰', size: 42, top: '50%', left: '92%', delay: 1.1 },
      { emoji: '☕', size: 40, top: '78%', left: '85%', delay: 0.7 },
      { emoji: '🌿', size: 36, top: '42%', left: '4%', delay: 1.3 },
    ],
  },
];

interface SweetSlimWellnessShowcaseProps {
  onOpenQuote: () => void;
}

export const SweetSlimWellnessShowcase: React.FC<SweetSlimWellnessShowcaseProps> = ({ onOpenQuote }) => {
  const [activePillar, setActivePillar] = useState<SweetSlimPillar>(SWEET_SLIM_PILLARS[0]);

  // Interactive Sugar Saver Calculator State
  const [cupsPerDay, setCupsPerDay] = useState<number>(3);
  const [spoonsPerCup, setSpoonsPerCup] = useState<number>(2);

  const dailySugarSpoons = cupsPerDay * spoonsPerCup;
  const dailyCaloriesSaved = dailySugarSpoons * 20;
  const yearlyCaloriesSaved = dailyCaloriesSaved * 365;
  const yearlySugarKg = ((dailySugarSpoons * 5 * 365) / 1000).toFixed(1);
  const yearlyFatLossKg = (yearlyCaloriesSaved / 7700).toFixed(1);

  return (
    <section className="ss-wellness-section-light">
      {/* Dynamic Ambient Light Gradient */}
      <motion.div
        key={activePillar.id + '-light-bg'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: activePillar.lightGradient,
          pointerEvents: 'none',
        }}
      />

      {/* Omnidirectional Floating Animated Graphics Across the Entire Stage */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 3 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id + '-graphics'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            {activePillar.floatingGraphics.map((item, idx) => (
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

      <div className="ss-wellness-container-light">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <div
            className="fmcg-eyebrow"
            style={{
              borderColor: `${activePillar.color}55`,
              color: activePillar.textColor,
            }}
          >
            <Award size={14} style={{ color: activePillar.color }} />
            <span>The Sugar-Free Lifestyle Ecosystem</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            PURE SWEETNESS. ZERO COMPROMISE.
          </h2>

          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            From morning espresso sticks to pocket breath mints and warm diet cocoa, Sweet & Slim replaces table sugar across every moment of your day.
          </p>

          {/* Lifestyle Pillar Switcher */}
          <div className="ss-pillars-nav-light">
            {SWEET_SLIM_PILLARS.map((p) => {
              const isSelected = activePillar.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p)}
                  className={`ss-pillar-btn-light ${isSelected ? 'active' : ''}`}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#FFFFFF' : p.color,
                    }}
                  />
                  <span>{p.title.split(' ')[0]} {p.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. 3D Floating Multi-Product Stage */}
        <div className="ss-stage-grid-light">
          {/* Left Column: Pillar Specs */}
          <div className="yalla-glass-card-light">
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: activePillar.textColor, marginBottom: '0.25rem' }}>
                {activePillar.badge}
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.2 }}>
                {activePillar.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.4rem', lineHeight: 1.5 }}>
                "{activePillar.tagline}"
              </p>
            </div>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '0.75rem' }}>
              {activePillar.benefits.map((b, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} style={{ color: activePillar.color, flexShrink: 0 }} />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Hero Metric */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem', borderRadius: '16px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.06)' }}>
              <div>
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: activePillar.textColor }}>
                  {activePillar.keySpec}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#64748B' }}>
                  {activePillar.keySpecLabel}
                </div>
              </div>
              <Heart size={24} style={{ color: activePillar.color }} />
            </div>
          </div>

          {/* Right Column: 3D Transparent Floating Packs Stage */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '380px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ rotateY: 180, scale: 0.8, opacity: 0 }}
                animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                exit={{ rotateY: -180, scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* Lead Transparent Pack */}
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
                  src={activePillar.leadImage}
                  alt={activePillar.title}
                  style={{
                    height: '350px',
                    width: 'auto',
                    maxWidth: '260px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 22px 40px rgba(0,0,0,0.18))',
                  }}
                />

                {/* Companion Floating Pack if available */}
                {activePillar.companionImage && (
                  <motion.img
                    initial={{ x: 30, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      y: [0, -14, 0],
                      rotateZ: [0, 8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.2,
                    }}
                    src={activePillar.companionImage}
                    alt="Companion Pack"
                    style={{
                      position: 'absolute',
                      bottom: '-10px',
                      right: '-15px',
                      height: '160px',
                      width: 'auto',
                      maxWidth: '100px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.2))',
                      zIndex: 20,
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 2. Interactive Sugar & Calorie Replacement Calculator Widget */}
        <div className="ss-calculator-card-light">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', background: '#ECFDF5', color: '#047857', border: '1px solid rgba(16, 185, 129, 0.3)', marginBottom: '0.35rem' }}>
              <Activity size={14} />
              <span>Interactive Health Impact Calculator</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase' }}>
              CALCULATE YOUR SUGAR & CALORIE SAVINGS
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.25rem' }}>
              Adjust the sliders to see how replacing sugar with Sweet & Slim transforms your yearly health.
            </p>
          </div>

          <div className="ss-calc-grid-light">
            {/* Sliders Input Column */}
            <div className="ss-calc-inputs-light">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Coffee size={15} style={{ color: '#D97706' }} />
                    <span>Drinks per Day:</span>
                  </span>
                  <span style={{ color: '#047857', fontWeight: 800 }}>{cupsPerDay} Cups</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={cupsPerDay}
                  onChange={(e) => setCupsPerDay(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: '#10B981' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Coffee size={15} style={{ color: '#10B981' }} />
                    <span>Sugar Spoons per Cup:</span>
                  </span>
                  <span style={{ color: '#047857', fontWeight: 800 }}>{spoonsPerCup} Spoons</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={spoonsPerCup}
                  onChange={(e) => setSpoonsPerCup(Number(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer', accentColor: '#10B981' }}
                />
              </div>
            </div>

            {/* Results Live Metrics Grid */}
            <div className="ss-calc-results-light">
              <div className="ss-stat-box-light">
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#047857' }}>
                  {dailyCaloriesSaved} kcal
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Daily Calories Saved
                </div>
              </div>

              <div className="ss-stat-box-light">
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
                  {yearlySugarKg} kg
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#047857', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Sugar Cut / Year
                </div>
              </div>

              <div className="ss-stat-box-light">
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#D97706' }}>
                  {yearlyCaloriesSaved.toLocaleString()}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Yearly Calories (~{yearlyFatLossKg}kg fat)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
