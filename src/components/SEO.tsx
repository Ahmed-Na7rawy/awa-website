import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const SITE_URL = 'https://awagroup.net';

const SEGMENT_LABELS: Record<string, string> = {
  about: 'About AWA Group',
  solutions: 'Industry Solutions',
  catalogue: 'Product Catalogue',
  industry: 'Industry',
  'dairy-cheese': 'Dairy, Cheese & Frozen Desserts',
  'meat-seafood': 'Meat, Poultry & Seafood',
  bakery: 'Bakery & Confectionery',
  beverages: 'Beverages',
  culinary: 'Sauces, Soups & Culinary',
  snacks: 'Snacks & Cereals',
  'food-services': 'Food Services',
  brands: 'Consumer Portfolio',
  'sweet-and-slim': 'Sweet & Slim',
  'yalla-drinks': 'Yalla Drinks',
  squeasy: 'SquEasy',
  sirri: 'SIRRI Foods',
  capabilities: 'Capabilities',
  sourcing: 'Global Sourcing',
  rd: 'R&D & Application Center',
  formulations: 'Customized Formulations',
  manufacturing: 'Manufacturing Excellence',
  'strategic-manufacturing': 'Strategic Manufacturing',
  quality: 'Quality & Certifications',
  sustainability: 'Sustainability',
  global: 'Global Network',
  principals: 'Global Principals',
  exports: 'Exports & International Trade',
  knowledge: 'Knowledge Hub',
  turkphos: 'Turkphos',
  ingreva: 'Ingreva',
  careers: 'Careers',
  contact: 'Contact Us',
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '',
  image = '/images/awa_group.png',
  type = 'website',
  noindex = false,
}) => {
  const { language, t } = useLanguage();

  const defaultTitle = t('nav.topBar.title', 'AWA Group | Food Solutions & Industrial Ingredients');
  const defaultDesc = t('footer.tagline', 'Engineering next-generation food solutions, custom stabilizer systems, industrial compounding, and certified cold-chain logistics across the Middle East and Africa since 1993.');

  const metaTitle = title
    ? (/awa group/i.test(title) ? title : `${title} | AWA Group`)
    : defaultTitle;
  const metaDesc = description || defaultDesc;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const segments = path.split('/').filter(Boolean);
  const breadcrumbItems = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    ...segments.map((seg, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: SEGMENT_LABELS[seg] || seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `${SITE_URL}/${segments.slice(0, idx + 1).join('/')}`,
    })),
  ];

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: metaTitle,
        description: metaDesc,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: language === 'ar' ? 'ar' : 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      },
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <link rel="canonical" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en" href={canonicalUrl} />
          <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
          <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
          <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="AWA Group" />
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
