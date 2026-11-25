import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  backgroundPosition = 'center',
  children,
}) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <section
      ref={heroRef}
      className="page-hero"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {backgroundImage && (
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-10% 0',
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition,
            backgroundSize: 'cover',
            y: bgY,
            zIndex: 0,
            willChange: 'transform',
          }}
        />
      )}
      <div className="page-hero-overlay" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow eyebrow-dark page-hero-eyebrow">{eyebrow}</div>
            <h1 className="page-hero-title">{title}</h1>
            <p className="page-hero-subtitle">{subtitle}</p>
            {children && <div className="page-hero-actions">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
