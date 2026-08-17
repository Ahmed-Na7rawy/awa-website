import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ShieldCheck, Flame, Heart, Zap, Award, ArrowRight, ShoppingBag } from 'lucide-react';
import { FmcgBrandData } from '../../data/fmcgBrandsData';
import './BrandShowcase.css';

interface StickyScrollyHeroProps {
  brand: FmcgBrandData;
  onOpenQuote: () => void;
}

export const StickyScrollyHero: React.FC<StickyScrollyHeroProps> = ({ brand, onOpenQuote }) => {
  const stageRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={18} style={{ color: '#D97706' }} />;
      case 'ShieldCheck': return <ShieldCheck size={18} style={{ color: '#10B981' }} />;
      case 'Flame': return <Flame size={18} style={{ color: '#EA580C' }} />;
      case 'Heart': return <Heart size={18} style={{ color: '#E11D48' }} />;
      case 'Zap': return <Zap size={18} style={{ color: '#0284C7' }} />;
      default: return <Award size={18} style={{ color: '#D97706' }} />;
    }
  };

  return (
    <section className="fmcg-hero-section">
      {/* Ambient Pulsing Aura Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fmcg-hero-bg-aura"
        style={{ backgroundColor: brand.theme.primary }}
      />

      {/* Omnidirectional Floating Graphic Items Across the Whole Hero */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 3 }}>
        {brand.heroSticky.floatingIngredients.map((item, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, idx % 2 === 0 ? -22 : 22, 0],
              x: [0, idx % 2 === 0 ? 16 : -16, 0],
              rotate: [0, idx % 2 === 0 ? 18 : -18, 0],
            }}
            transition={{
              duration: 4 + idx * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 0.35,
            }}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              fontSize: '46px',
              userSelect: 'none',
              filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.12))',
            }}
            title={item.name}
          >
            {item.iconEmoji}
          </motion.div>
        ))}
      </div>

      <div className="fmcg-hero-grid">
        {/* Left Column: Typography, CTAs & Benefits */}
        <div>
          <div
            className="fmcg-eyebrow"
            style={{
              borderColor: `${brand.theme.primary}55`,
              color: brand.theme.primary,
            }}
          >
            <Sparkles size={14} style={{ color: brand.theme.primary }} />
            <span>{brand.heroSticky.eyebrow}</span>
          </div>

          <h1 className="fmcg-hero-headline">
            {brand.heroSticky.headline}
          </h1>

          <p className="fmcg-hero-sub">
            {brand.heroSticky.subheadline}
          </p>

          <div className="fmcg-hero-actions">
            <button
              onClick={onOpenQuote}
              className="fmcg-btn-primary"
              style={{ backgroundColor: brand.theme.primary }}
            >
              <ShoppingBag size={18} />
              <span>{brand.heroSticky.ctaPrimary}</span>
            </button>
            <button
              onClick={onOpenQuote}
              className="fmcg-btn-outline"
            >
              <span>{brand.heroSticky.ctaSecondary}</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Floating Benefit Badges Row */}
          <div className="fmcg-hero-badges-row">
            {brand.heroSticky.floatingBadges.map((b) => (
              <div key={b.id} className="fmcg-hero-badge-card">
                <div
                  className="fmcg-hero-badge-icon"
                  style={{ backgroundColor: `${brand.theme.primary}18` }}
                >
                  {getBadgeIcon(b.icon)}
                </div>
                <div>
                  <div className="fmcg-hero-badge-text">{b.text}</div>
                  <div className="fmcg-hero-badge-sub">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Clean 3D Single Levitating Pack Stage */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="fmcg-hero-pack-stage"
          style={{ perspective: 1200 }}
        >
          {/* Orbit Glow Ring */}
          <div
            className="fmcg-pack-glow-ring"
            style={{ borderColor: `${brand.theme.primary}33` }}
          />

          {/* Center Main 3D Levitating Pack */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              y: [0, -14, 0],
              rotateZ: [0, -1.5, 1.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative z-10 flex items-center justify-center cursor-pointer"
          >
            <img
              src={brand.heroSticky.mainPackImage}
              alt={brand.brandName}
              className="fmcg-hero-main-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/2026/1.png';
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
