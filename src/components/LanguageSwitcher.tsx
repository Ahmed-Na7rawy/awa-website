import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'topbar' | 'navbar' | 'mobile';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'topbar', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div className={`lang-switcher-topbar ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
        <Globe size={12} style={{ color: '#4ADE80', opacity: 0.9 }} />
        <button
          type="button"
          onClick={() => setLanguage('en')}
          style={{
            background: 'none',
            border: 'none',
            color: language === 'en' ? '#4ADE80' : '#94A3B8',
            fontWeight: language === 'en' ? 800 : 500,
            fontSize: '0.75rem',
            cursor: 'pointer',
            padding: '2px 4px',
            transition: 'color 0.2s ease',
          }}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span style={{ color: '#475569', fontSize: '0.7rem' }}>|</span>
        <button
          type="button"
          onClick={() => setLanguage('ar')}
          style={{
            background: 'none',
            border: 'none',
            color: language === 'ar' ? '#4ADE80' : '#94A3B8',
            fontWeight: language === 'ar' ? 800 : 500,
            fontSize: '0.78rem',
            cursor: 'pointer',
            padding: '2px 4px',
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            transition: 'color 0.2s ease',
          }}
          aria-label="التغيير إلى اللغة العربية"
        >
          العربية
        </button>
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className={`lang-switcher-mobile ${className}`} style={{ padding: '1rem 0.5rem', borderTop: '1px solid var(--border-color)', marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
            <Globe size={16} color="var(--primary)" />
            <span>{language === 'ar' ? 'اللغة / Language' : 'Language / اللغة'}</span>
          </div>
          <div style={{ display: 'flex', background: 'var(--bg-soft)', borderRadius: '9999px', padding: '3px', border: '1px solid var(--border-color)' }}>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: 'none',
                background: language === 'en' ? 'var(--primary)' : 'transparent',
                color: language === 'en' ? '#FFFFFF' : 'var(--text-muted)',
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                border: 'none',
                background: language === 'ar' ? 'var(--primary)' : 'transparent',
                color: language === 'ar' ? '#FFFFFF' : 'var(--text-muted)',
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                transition: 'all 0.2s ease',
              }}
            >
              العربية
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default navbar variant
  return (
    <div className={`lang-switcher-navbar ${className}`} style={{ display: 'flex', alignItems: 'center' }}>
      <button
        type="button"
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.45rem 0.85rem',
          borderRadius: '9999px',
          background: 'var(--bg-soft)',
          border: '1px solid var(--border-color)',
          color: 'var(--dark-navy)',
          fontWeight: 800,
          fontSize: '0.8rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        aria-label="Toggle language"
      >
        <Globe size={14} color="var(--primary)" />
        <span style={{ fontFamily: language === 'en' ? "'Cairo', sans-serif" : "'Plus Jakarta Sans', sans-serif" }}>
          {language === 'en' ? 'العربية' : 'EN'}
        </span>
      </button>
    </div>
  );
};
