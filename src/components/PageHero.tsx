import React from 'react';

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
  return (
    <section 
      className="page-hero"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: backgroundPosition,
              backgroundSize: 'cover',
            }
          : undefined
      }
    >
      <div className="page-hero-overlay">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow eyebrow-dark page-hero-eyebrow">{eyebrow}</div>
            <h1 className="page-hero-title">{title}</h1>
            <p className="page-hero-subtitle">{subtitle}</p>
            {children && <div className="page-hero-actions">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};
