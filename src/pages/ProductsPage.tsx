import React from 'react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { AwaBrandShowcase } from '../components/AwaBrandShowcase';
import { IndustrialIngredientsShowcase } from '../components/industrial/IndustrialIngredientsShowcase';
import { useParams } from 'react-router-dom';

interface ProductsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsProps> = ({ initialSubId, onOpenQuote }) => {
  const { subId } = useParams<{ subId?: string }>();
  const effectiveSubId = subId || initialSubId;
  const isIndustrial = effectiveSubId === 'industrial';
  const { t, translations } = useLanguage();

  return (
    <div className="products-page">
      <SEO
        title={t('nav.products', 'Brands & Products')}
        description={translations.products?.hero?.subtitle || 'AWA Group FMCG consumer brand portfolio and industrial ingredients catalogue.'}
        path={effectiveSubId ? `/products/${effectiveSubId}` : '/products'}
      />
      {isIndustrial ? (
        <IndustrialIngredientsShowcase onOpenQuote={onOpenQuote} />
      ) : (
        <AwaBrandShowcase initialBrandId={effectiveSubId} onOpenQuote={onOpenQuote} />
      )}
    </div>
  );
};
