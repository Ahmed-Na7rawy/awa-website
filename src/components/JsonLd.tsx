import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_CONTACT } from '../data/siteData';

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://awagroup.net/#organization',
    name: 'AWA Group',
    url: 'https://awagroup.net',
    logo: 'https://awagroup.net/images/awa_group.png',
    description: 'Premier Egyptian food solutions, functional ingredient blending, global trading, cold-chain logistics, and consumer retail brands since 1993.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15 Abd Elwahab Selim El-bishry St., Sheraton',
      addressLocality: 'Cairo',
      addressCountry: 'EG',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_CONTACT.phoneMain,
        contactType: 'customer service',
        email: COMPANY_CONTACT.email,
        availableLanguage: ['English', 'Arabic'],
      },
    ],
    sameAs: [
      'https://www.facebook.com/awafoodsolutions/',
      'https://www.linkedin.com/company/awa-food-solutions/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://awagroup.net/#website',
    url: 'https://awagroup.net',
    name: 'AWA Group',
    publisher: { '@id': 'https://awagroup.net/#organization' },
    inLanguage: ['en', 'ar'],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};
