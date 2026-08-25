import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
}

const SITE_URL = 'https://awagroup.net';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '',
  image = '/images/awa_group.png',
  type = 'website',
}) => {
  const { language, t } = useLanguage();

  const defaultTitle = t('nav.topBar.title', 'AWA Group | Food Solutions & Industrial Ingredients');
  const defaultDesc = t('footer.tagline', 'Engineering next-generation food solutions, custom stabilizer systems, industrial compounding, and certified cold-chain logistics across the Middle East and Africa since 1993.');

  const metaTitle = title ? `${title} | AWA Group` : defaultTitle;
  const metaDesc = description || defaultDesc;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Language Alternates (hreflang) */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_EG' : 'en_US'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};
