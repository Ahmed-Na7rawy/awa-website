import React from 'react';
import './PartnerMarquee.css';

interface PartnerMarqueeProps {
  items: string[];
  title?: string;
  speed?: 'normal' | 'slow' | 'fast';
  reverse?: boolean;
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({
  items,
  title,
  speed = 'normal',
  reverse = false,
}) => {
  // Duplicate array multiple times for smooth infinite loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-wrapper">
      {title && <h4 className="marquee-title">{title}</h4>}
      <div className="marquee-container">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>
        <div className={`marquee-track speed-${speed} ${reverse ? 'reverse' : ''}`}>
          {displayItems.map((src, index) => (
            <div key={index} className="marquee-item">
              <img
                src={src}
                alt="Partner Brand"
                className="marquee-img"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
