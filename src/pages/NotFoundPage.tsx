import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        background: '#F8FAFC',
      }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        {/* Large 404 */}
        <div
          style={{
            fontSize: 'clamp(5rem, 20vw, 10rem)',
            fontWeight: 900,
            lineHeight: 1,
            color: 'var(--primary)',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginBottom: '0.5rem',
            letterSpacing: '-0.04em',
          }}
        >
          404
        </div>

        {/* AWA Logo accent */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.3rem 0.85rem',
            background: 'rgba(0,168,79,0.08)',
            border: '1px solid rgba(0,168,79,0.2)',
            borderRadius: '6px',
            fontSize: '0.7rem',
            fontWeight: 800,
            color: 'var(--primary)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
          }}
        >
          AWA GROUP · PAGE NOT FOUND
        </div>

        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            fontWeight: 800,
            color: 'var(--dark-navy)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          {isAr
            ? 'هذه الصفحة غير موجودة'
            : "This page doesn't exist."}
        </h1>

        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          {isAr
            ? 'ربما تم نقل الصفحة أو حذفها. ابدأ من الصفحة الرئيسية أو تصفح حلولنا الغذائية.'
            : "The page you're looking for may have been moved or deleted. Start from the homepage or explore our food solutions."}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            className="btn btn-primary"
            style={{ minWidth: '160px' }}
          >
            {isAr ? 'الصفحة الرئيسية' : 'Back to Home'}
          </Link>
          <Link
            to="/solutions"
            className="btn btn-secondary"
            style={{ minWidth: '160px' }}
          >
            {isAr ? 'استكشف الحلول' : 'Explore Solutions'}
          </Link>
          <Link
            to="/contact"
            className="btn btn-secondary"
            style={{ minWidth: '160px' }}
          >
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </Link>
        </div>
      </div>
    </div>
  );
};
