import React from 'react';
import { AwaBrandShowcase } from '../components/AwaBrandShowcase';
import { IndustrialIngredientsShowcase } from '../components/industrial/IndustrialIngredientsShowcase';

interface ProductsProps {
  initialSubId?: string;
  onOpenQuote: () => void;
}

export const ProductsPage: React.FC<ProductsProps> = ({ initialSubId, onOpenQuote }) => {
  const isIndustrial = initialSubId === 'industrial';

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
      <AwaBrandShowcase initialBrandId={initialSubId} onOpenQuote={onOpenQuote} />
    </div>
  );
};
