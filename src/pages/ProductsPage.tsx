import React from 'react';
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

  if (isIndustrial) {
    return (
      <div className="products-page">
        <IndustrialIngredientsShowcase onOpenQuote={onOpenQuote} />
      </div>
    );
  }

  // Default: Consumer & Retail Brands (SquEasy, Sweet & Slim, Yalla Drinks)
  return (
    <div className="products-page">
      <AwaBrandShowcase initialBrandId={effectiveSubId} onOpenQuote={onOpenQuote} />
    </div>
  );
};
