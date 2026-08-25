import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

export interface StatCardProps {
  value: string;
  label: string;
  detail?: string;
  sub?: string;
  delay?: number;
  variant?: 'interactive' | 'about';
}

export const AnimatedStatCard: React.FC<StatCardProps> = ({
  value,
  label,
  detail,
  sub,
  delay = 0,
  variant = 'interactive'
}) => {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(isNaN(numericPart) ? 0 : numericPart, 2000);

  if (variant === 'about') {
    return (
      <div ref={ref} className="about-stat-col reveal-fade-up" style={{ transitionDelay: `${delay}s` }}>
        <div className="about-stat-num">{isNaN(numericPart) ? value : `${count}${suffix}`}</div>
        <div className="about-stat-label">{label}</div>
        {sub && <div className="about-stat-sub">{sub}</div>}
      </div>
    );
  }

  return (
    <div ref={ref} className="interactive-number-card reveal-fade-up" style={{ transitionDelay: `${delay}s` }}>
      <div className="interactive-number-val">{isNaN(numericPart) ? value : `${count}${suffix}`}</div>
      <div className="interactive-number-lbl">{label}</div>
      {detail && <div className="interactive-number-detail">{detail}</div>}
    </div>
  );
};
