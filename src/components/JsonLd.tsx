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
      streetAddress: '243 Horreya Road, Sporting',
      addressLocality: 'Alexandria',
      addressCountry: 'EG',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+2035924111',
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};
