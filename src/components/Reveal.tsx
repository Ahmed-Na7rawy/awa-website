import React from 'react';
import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';
type MotionTag = 'div' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'aside';

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  as?: MotionTag;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  amount = 0.12,
  once = true,
  as = 'div',
  className,
  style,
  id,
}) => {
  const offset = directionOffset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionEl = motion[as] as React.FC<
    HTMLMotionProps<'div'> & { className?: string; style?: React.CSSProperties; id?: string }
  >;

  return (
    <MotionEl
      id={id}
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionEl>
  );
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: MotionTag;
  amount?: number;
}

export const StaggerParent: React.FC<StaggerProps> = ({
  children,
  className,
  style,
  as = 'div',
  amount = 0.08,
}) => {
  const MotionEl = motion[as] as React.FC<
    HTMLMotionProps<'div'> & { className?: string; style?: React.CSSProperties }
  >;
  return (
    <MotionEl
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainer}
    >
      {children}
    </MotionEl>
  );
};

export const StaggerChild: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ children, className, style }) => (
  <motion.div className={className} style={style} variants={staggerItem}>
    {children}
  </motion.div>
);
