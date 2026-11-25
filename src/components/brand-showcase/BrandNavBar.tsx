import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { FmcgBrandData } from '../../data/fmcgBrandsData';
import { useLanguage } from '../../context/LanguageContext';
import './BrandShowcase.css';

interface BrandNavBarProps {
  currentBrand: FmcgBrandData;
  activeBrandId: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks';
  onSelectBrand: (brandId: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks') => void;
  onOpenQuote: () => void;
}

export const BrandNavBar: React.FC<BrandNavBarProps> = ({
  currentBrand,
  activeBrandId,
  onSelectBrand,
  onOpenQuote,
}) => {
  const { language } = useLanguage();

  const brands: { id: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks'; name: string; tag: string; color: string; logo: string }[] = [
    { 
      id: 'squeasy', 
      name: 'SquEasy', 
      tag: language === 'ar' ? 'معجون الطهي' : 'Culinary Pastes', 
      color: '#EA580C', 
      logo: '/images/logos/squeasy logo.png' 
    },
    { 
      id: 'sweet-and-slim', 
      name: 'Sweet & Slim', 
      tag: language === 'ar' ? 'صفر سعرات وحلوى' : '0 Cal & Mints', 
      color: '#10B981', 
      logo: '/images/logos/Sweet&slim logo.png' 
    },
    { 
      id: 'yalla-drinks', 
      name: 'Yalla Drinks', 
      tag: language === 'ar' ? 'باريستا فوري' : 'Instant Barista', 
      color: '#0284C7', 
      logo: '/images/logos/yalla drinks.png' 
    },
  ];

  const currentBrandObj = brands.find((b) => b.id === activeBrandId) || brands[0];

  return (
    <nav className="fmcg-nav-bar">
      <div className="fmcg-nav-container">
        {/* Left: Brand Identity with Official Logo */}
        <div className="fmcg-nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <div style={{ background: '#FFFFFF', padding: '0.2rem 0.6rem', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
            <img 
              src={currentBrandObj.logo} 
              alt={currentBrand.brandName} 
              style={{ height: '22px', maxWidth: '80px', objectFit: 'contain' }}
            />
          </div>
          <span className="fmcg-nav-title">{currentBrand.brandName}</span>
          <span className="fmcg-nav-tag">
            {language === 'ar' ? 'قطاع المنتجات الاستهلاكية AWA' : 'AWA Retail FMCG'}
          </span>
        </div>

        {/* Center: Brand Switcher Pills */}
        <div className="fmcg-switcher-group">
          {brands.map((b) => {
            const isActive = activeBrandId === b.id;
            return (
              <button
                key={b.id}
                onClick={() => onSelectBrand(b.id)}
                className={`fmcg-switcher-btn ${isActive ? 'active' : ''}`}
                style={{
                  backgroundColor: isActive ? b.color : 'transparent',
                }}
              >
                <span>{b.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Quick Action CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <a
            href={`https://awa-shopping-chi.vercel.app/${language === 'ar' ? 'ar' : 'en'}/${activeBrandId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fmcg-nav-cta fmcg-nav-cta--outline"
          >
            <ShoppingBag size={14} style={{ color: currentBrand.theme.primary }} />
            <span style={{ color: '#0F172A' }}>{language === 'ar' ? 'المتجر الإلكتروني ↗' : 'Shop Online ↗'}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="fmcg-nav-cta"
            style={{ backgroundColor: currentBrand.theme.primary }}
          >
            <span>{language === 'ar' ? 'طلب توريد تجاري' : 'B2B Wholesale'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

