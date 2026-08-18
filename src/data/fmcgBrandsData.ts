export interface TasteMeter {
  label: string;
  value: number; // 0 to 100
  color: string;
}

export interface NutritionFact {
  label: string;
  value: string;
}

export interface SkuProduct {
  id: string;
  name: string;
  subName: string;
  image: string;
  categoryTag: string;
  tagColor: string;
  weight: string;
  servings: string;
  flavorProfile: string;
  description: string;
  tasteMeters: TasteMeter[];
  nutritionFacts: NutritionFact[];
  keyBenefits: string[];
  inStock: boolean;
}

export interface FlavorOption {
  id: string;
  name: string;
  badge: string;
  heroImage: string;
  sachetImage?: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    bgGradient: string;
    ambientGlow: string;
    textAccent: string;
  };
  tasteHighlights: string[];
  nutritionalHero: {
    calories: string;
    sugar: string;
    heroMetric: string;
    heroLabel: string;
  };
}

export interface BrandStorySection {
  title: string;
  subtitle: string;
  leadParagraph: string;
  secondaryParagraph: string;
  stats: { value: string; label: string; sub: string }[];
  bulletPoints: { title: string; desc: string }[];
  image: string;
  badgeText: string;
}

export interface BrandFaq {
  q: string;
  a: string;
}

export interface BrandReview {
  author: string;
  role: string;
  comment: string;
  rating: number;
  avatarTag: string;
}

export interface FmcgBrandData {
  id: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks';
  brandName: string;
  tagline: string;
  slogan: string;
  vibeDescription: string;
  vibeKeywords: string[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    darkBg: string;
    lightBg: string;
    gradientHero: string;
    buttonGlow: string;
  };
  heroSticky: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    mainPackImage: string;
    companionOrbitImages: {
      image: string;
      scale: number;
      top: string;
      left: string;
      zIndex: number;
      animationDelay: number;
    }[];
    floatingBadges: {
      id: string;
      text: string;
      sub: string;
      icon: string;
      side: 'left' | 'right';
      yOffset: number;
    }[];
    floatingIngredients: {
      name: string;
      iconEmoji: string;
      blur: string;
      scale: number;
      speed: number;
      top: string;
      left: string;
    }[];
  };
  flavors: FlavorOption[];
  skus: SkuProduct[];
  story: BrandStorySection;
  faqs: BrandFaq[];
  reviews: BrandReview[];
  retailers: string[];
}

export const FMCG_BRANDS: Record<'squeasy' | 'sweet-and-slim' | 'yalla-drinks', FmcgBrandData> = {
  /* ═══════════════════════════════════════════════════════════════ */
  /* 1. SQUEASY CULINARY PASTES & POUCHES                            */
  /* ═══════════════════════════════════════════════════════════════ */
  'squeasy': {
    id: 'squeasy',
    brandName: 'SquEasy',
    tagline: 'Artisanal Culinary Pastes & Squeeze Pouches',
    slogan: '100% Real Garlic & Harissa. Zero Kitchen Mess.',
    vibeDescription: 'Vibrant, juicy, high-energy culinary revolution bringing farm-fresh Mediterranean garlic and fiery roasted chili directly to modern chef and family kitchens.',
    vibeKeywords: ['100% Natural', 'No Preservatives', 'Ergonomic Spout', 'Chef Quality', 'Zero Peeling Mess'],
    theme: {
      primary: '#EA580C', // Electric Orange
      secondary: '#DC2626', // Fiery Red
      accent: '#FBBF24', // Citrus Gold
      darkBg: '#130803',
      lightBg: '#FFF7ED',
      gradientHero: 'radial-gradient(ellipse at 60% 40%, rgba(234, 88, 12, 0.4) 0%, rgba(220, 38, 38, 0.15) 50%, #130803 100%)',
      buttonGlow: '0 0 35px rgba(234, 88, 12, 0.6)',
    },
    heroSticky: {
      eyebrow: 'AWA Culinary Innovations',
      headline: 'SQUEEZE THE REAL FLAVOR.',
      subheadline: 'Pure Mediterranean Harissa chili and Egyptian crushed garlic in revolutionary no-drip stand-up spout pouches. Authentic taste without peeling, chopping, or messy fingers.',
      ctaPrimary: 'Explore Culinary SKUs',
      ctaSecondary: 'Request Foodservice Pack',
      mainPackImage: '/images/2026/harrisa.png',
      companionOrbitImages: [
        {
          image: '/images/2026/toom.png',
          scale: 0.7,
          top: '15%',
          left: '78%',
          zIndex: 5,
          animationDelay: 0.5,
        },
        {
          image: '/images/2026/jar.png',
          scale: 0.65,
          top: '60%',
          left: '12%',
          zIndex: 15,
          animationDelay: 1.2,
        },
        {
          image: '/images/2026/Hariessa Sachet_upscayl_3x_upscayl-standard-4x.png',
          scale: 0.55,
          top: '68%',
          left: '82%',
          zIndex: 8,
          animationDelay: 0.8,
        },
      ],
      floatingBadges: [
        {
          id: 'sq-b1',
          text: '100% Real Garlic & Chili',
          sub: 'Zero Artificial Additives',
          icon: 'Award',
          side: 'left',
          yOffset: 25,
        },
        {
          id: 'sq-b2',
          text: 'No-Drip Smart Spout',
          sub: 'Precise Dosage Every Squeeze',
          icon: 'ShieldCheck',
          side: 'right',
          yOffset: 35,
        },
        {
          id: 'sq-b3',
          text: '18-Month Barrier Lock',
          sub: 'Multi-layer Oxygen Foil',
          icon: 'Flame',
          side: 'left',
          yOffset: 65,
        },
        {
          id: 'sq-b4',
          text: 'Chef-Approved Consistency',
          sub: 'Perfect for Marinades & Sauté',
          icon: 'Award',
          side: 'right',
          yOffset: 75,
        },
      ],
      floatingIngredients: [
        { name: 'Red Chili Slice', iconEmoji: '🌶️', blur: '0px', scale: 1.4, speed: 1.2, top: '15%', left: '8%' },
        { name: 'Garlic Clove', iconEmoji: '🧄', blur: '0px', scale: 1.3, speed: 0.9, top: '25%', left: '82%' },
        { name: 'Olive Oil Droplet', iconEmoji: '🫒', blur: '1px', scale: 1.1, speed: 1.5, top: '65%', left: '12%' },
        { name: 'Fresh Herb Leaf', iconEmoji: '🌿', blur: '0px', scale: 1.2, speed: 1.1, top: '75%', left: '86%' },
      ],
    },
    flavors: [
      {
        id: 'sq-flv-harissa',
        name: 'Artisan Harissa Chili Pouch',
        badge: 'Fiery & Smoky',
        heroImage: '/images/2026/harrisa.png',
        sachetImage: '/images/2026/Hariessa Sachet_upscayl_3x_upscayl-standard-4x.png',
        colorPalette: {
          primary: '#DC2626',
          secondary: '#EA580C',
          accent: '#FDE047',
          bgGradient: 'linear-gradient(135deg, #240703 0%, #5E1408 50%, #991B1B 100%)',
          ambientGlow: 'rgba(220, 38, 38, 0.45)',
          textAccent: '#FCA5A5',
        },
        tasteHighlights: ['Roasted Sun-Dried Chili', 'Ground Coriander', 'Cumin & Garlic', 'Extra Virgin Olive Oil'],
        nutritionalHero: {
          calories: '18 kcal',
          sugar: '0.4g',
          heroMetric: '100%',
          heroLabel: 'Natural Egyptian Chili',
        },
      },
      {
        id: 'sq-flv-garlic-pouch',
        name: 'Pure Toum Garlic Paste Pouch',
        badge: 'Kitchen Essential',
        heroImage: '/images/2026/toom.png',
        colorPalette: {
          primary: '#65A30D',
          secondary: '#84CC16',
          accent: '#FEF08A',
          bgGradient: 'linear-gradient(135deg, #0C1A04 0%, #233C08 50%, #4D7C0F 100%)',
          ambientGlow: 'rgba(101, 163, 13, 0.45)',
          textAccent: '#BEF264',
        },
        tasteHighlights: ['100% Crushed Fresh Garlic', 'Natural Sea Salt', 'Citrus Balance', 'Smooth Emulsion'],
        nutritionalHero: {
          calories: '12 kcal',
          sugar: '0.2g',
          heroMetric: '0 min',
          heroLabel: 'Peeling & Chopping Prep',
        },
      },
      {
        id: 'sq-flv-garlic-jar',
        name: 'Traditional Culinary Glass Jar',
        badge: 'Chunky & Robust',
        heroImage: '/images/2026/jar.png',
        colorPalette: {
          primary: '#D97706',
          secondary: '#B45309',
          accent: '#FDE68A',
          bgGradient: 'linear-gradient(135deg, #1A1003 0%, #422606 50%, #853D0A 100%)',
          ambientGlow: 'rgba(217, 119, 6, 0.45)',
          textAccent: '#FCD34D',
        },
        tasteHighlights: ['Coarse Minced Cloves', 'Crisp Sauté Texture', 'Olive Oil Preserved', 'High Heat Stability'],
        nutritionalHero: {
          calories: '14 kcal',
          sugar: '0.3g',
          heroMetric: '350g',
          heroLabel: 'Heavy-Duty Kitchen Jar',
        },
      },
      {
        id: 'sq-flv-harissa-sachet',
        name: 'Single-Serve Harissa Sachet',
        badge: 'Ultra Convenient',
        heroImage: '/images/2026/Hariessa Sachet_upscayl_3x_upscayl-standard-4x.png',
        colorPalette: {
          primary: '#E11D48',
          secondary: '#BE123C',
          accent: '#FECDD3',
          bgGradient: 'linear-gradient(135deg, #24040D 0%, #520B1E 50%, #9F1239 100%)',
          ambientGlow: 'rgba(225, 29, 72, 0.45)',
          textAccent: '#FDA4AF',
        },
        tasteHighlights: ['Exact 1-Meal Portion', 'Zero Leftover Waste', 'BBQ & Takeout Ready', 'Instant Rich Flavor'],
        nutritionalHero: {
          calories: '8 kcal',
          sugar: '0.1g',
          heroMetric: '1 Pack',
          heroLabel: 'Perfect Plate Drizzle',
        },
      },
    ],
    skus: [
      {
        id: 'sq-sku-1',
        name: 'SquEasy Harissa Chili Spout Pouch',
        subName: '250g Stand-Up Multi-Layer Barrier Pouch',
        image: '/images/2026/harrisa.png',
        categoryTag: 'Signature Hot',
        tagColor: '#DC2626',
        weight: '250g',
        servings: '50 Servings',
        flavorProfile: 'Intense roasted Mediterranean chili with notes of cumin and garlic.',
        description: 'Features a precision screw-top spout that eliminates spoon contamination and prevents oil separation.',
        tasteMeters: [
          { label: 'Heat & Spice', value: 92, color: '#EF4444' },
          { label: 'Aroma Punch', value: 88, color: '#F97316' },
          { label: 'Smoky Depth', value: 85, color: '#EAB308' },
          { label: 'Smoothness', value: 95, color: '#10B981' },
        ],
        nutritionFacts: [
          { label: 'Serving Size', value: '5g (1 tsp)' },
          { label: 'Calories', value: '18 kcal' },
          { label: 'Total Fat', value: '1.2g' },
          { label: 'Sodium', value: '120mg' },
          { label: 'Total Carbs', value: '1.4g' },
        ],
        keyBenefits: ['No artificial food colors', 'Gluten-free & Vegan', 'Easy squeeze ergonomic corner', 'Halal certified'],
        inStock: true,
      },
      {
        id: 'sq-sku-2',
        name: 'SquEasy Garlic Paste Spout Pouch',
        subName: '250g Stand-Up Multi-Layer Pouch',
        image: '/images/2026/toom.png',
        categoryTag: 'Kitchen Hero',
        tagColor: '#65A30D',
        weight: '250g',
        servings: '50 Servings',
        flavorProfile: 'Crisp, pungent Egyptian garlic aroma with ultra-velvety puree texture.',
        description: 'Smooth, creamy garlic paste ideal for instant shawarma toum, chicken marinades, and pasta bases.',
        tasteMeters: [
          { label: 'Garlic Intensity', value: 96, color: '#84CC16' },
          { label: 'Freshness', value: 94, color: '#10B981' },
          { label: 'Creaminess', value: 90, color: '#06B6D4' },
          { label: 'Mellow Finish', value: 82, color: '#F59E0B' },
        ],
        nutritionFacts: [
          { label: 'Serving Size', value: '5g (1 tsp)' },
          { label: 'Calories', value: '12 kcal' },
          { label: 'Total Fat', value: '0.1g' },
          { label: 'Sodium', value: '95mg' },
          { label: 'Total Carbs', value: '2.1g' },
        ],
        keyBenefits: ['Replaces 40 raw garlic cloves', 'No sulfurous smell on hands', 'Zero added starch', 'Long refrigerated life'],
        inStock: true,
      },
      {
        id: 'sq-sku-3',
        name: 'SquEasy Traditional Glass Culinary Jar',
        subName: '350g Value Glass Kitchen Jar',
        image: '/images/2026/jar.png',
        categoryTag: 'Gourmet Jar',
        tagColor: '#D97706',
        weight: '350g',
        servings: '70 Servings',
        flavorProfile: 'Hand-crafted stone-ground recipe with olive oil and aromatic coriander seeds.',
        description: 'Authentic stone-ground recipe crafted for mezze platters, grilled kebabs, and gourmet culinary dressings.',
        tasteMeters: [
          { label: 'Heat & Spice', value: 95, color: '#DC2626' },
          { label: 'Coarse Texture', value: 90, color: '#D97706' },
          { label: 'Herb Complexity', value: 88, color: '#16A34A' },
          { label: 'Olive Richness', value: 86, color: '#F59E0B' },
        ],
        nutritionFacts: [
          { label: 'Serving Size', value: '5g (1 tsp)' },
          { label: 'Calories', value: '22 kcal' },
          { label: 'Total Fat', value: '1.6g' },
          { label: 'Sodium', value: '110mg' },
          { label: 'Total Carbs', value: '1.2g' },
        ],
        keyBenefits: ['Authentic stone-ground recipe', 'Olive oil preservation', 'Ideal table condiment', 'Zero GMO'],
        inStock: true,
      },
      {
        id: 'sq-sku-4',
        name: 'SquEasy Harissa Single-Serve Sachet',
        subName: 'Single Use Portion Sachets',
        image: '/images/2026/Hariessa Sachet_upscayl_3x_upscayl-standard-4x.png',
        categoryTag: 'Single Sachet',
        tagColor: '#BE123C',
        weight: '15g Sachet',
        servings: '1 Portion',
        flavorProfile: 'Spicy Mediterranean red pepper puree packed for on-the-go meals.',
        description: 'Convenient single-use portion pack for quick meal seasoning without storing leftover opened jars.',
        tasteMeters: [
          { label: 'Portion Control', value: 98, color: '#BE123C' },
          { label: 'Heat & Spice', value: 92, color: '#EF4444' },
          { label: 'Freshness Seal', value: 96, color: '#10B981' },
          { label: 'Convenience', value: 100, color: '#38BDF8' },
        ],
        nutritionFacts: [
          { label: 'Serving Size', value: '15g (1 Sachet)' },
          { label: 'Calories', value: '12 kcal' },
          { label: 'Total Fat', value: '0.8g' },
          { label: 'Sodium', value: '80mg' },
          { label: 'Total Carbs', value: '1.0g' },
        ],
        keyBenefits: ['Single-use portion pack', 'Travel & BBQ friendly', 'Zero refrigeration needed before opening', 'FSSC 22000 certified'],
        inStock: true,
      },
    ],
    story: {
      title: 'FROM EGYPTIAN FARMS TO GLOBAL KITCHENS',
      subtitle: 'The Science of Fresh Culinary Preservation',
      leadParagraph: 'For decades, garlic and hot peppers have formed the aromatic backbone of Egyptian and Mediterranean cooking. Yet preparing them daily in industrial or home kitchens means tedious peeling, pungent odor on fingers, and rapid spoilage.',
      secondaryParagraph: 'At AWA Food Solutions’ Borg El-Arab manufacturing facility, we deploy cold-processing and multi-layer oxygen-barrier packaging technology to preserve the natural volatile aroma compounds of real harvested garlic and red peppers with zero harsh chemical preservatives.',
      stats: [
        { value: '100%', label: 'Fresh Harvested', sub: 'From certified Egyptian farms' },
        { value: '0%', label: 'Preservatives', sub: 'Preserved via natural acidity' },
        { value: '18 Mos', label: 'Ambient Shelf Life', sub: 'Guaranteed barrier foil lock' },
        { value: '5x', label: 'Faster Cooking', sub: 'Zero peeling or cleanup time' },
      ],
      bulletPoints: [
        { title: 'Cold-Formulation Blending', desc: 'Preserves essential allicin in garlic and capsaicin in peppers without thermal degradation.' },
        { title: 'Oxygen-Barrier Spout Pouches', desc: 'Protects delicate oils against oxidation, sunlight discoloration, and rancidity.' },
        { title: 'Global Food Safety Standards', desc: 'Manufactured under rigorous FSSC 22000 and ISO 9001 quality management protocols.' },
      ],
      image: '/images/pages/products/retail/squeasy/cover.png',
      badgeText: 'AWA Culinary Technology',
    },
    faqs: [
      {
        q: 'Does SquEasy need to be refrigerated before opening?',
        a: 'No. Thanks to our multi-layer barrier packaging and natural preservation, unopened SquEasy pouches and jars remain 100% fresh at room temperature for up to 18 months. Once opened, store in the refrigerator and use within 90 days.',
      },
      {
        q: 'How does SquEasy Garlic compare to whole fresh cloves?',
        a: 'One teaspoon of SquEasy Garlic Paste equals approximately 3 medium cloves of fresh peeled garlic. It provides identical aromatic potency and cooking performance without peeling or crushing.',
      },
      {
        q: 'Is SquEasy suitable for commercial foodservice & restaurants?',
        a: 'Yes! SquEasy is widely trusted by leading hotel chains, caterers, and burger/shawarma franchises across Egypt. We also offer 1kg and 5kg bulk foodservice containers.',
      },
    ],
    reviews: [
      {
        author: 'Chef Karim M.',
        role: 'Executive Chef, Cairo Bistro',
        comment: 'SquEasy Harissa has completely transformed our kitchen workflow. The flavor consistency is identical batch-after-batch, and the spout allows pinpoint plate drizzling.',
        rating: 5,
        avatarTag: 'KM',
      },
      {
        author: 'Nouran El-Shamy',
        role: 'Food Blogger & Mom',
        comment: 'No more smelling like garlic for 3 days! The pouch is so easy to keep in the fridge door. My garlic bread and marinades take literally 30 seconds now.',
        rating: 5,
        avatarTag: 'NE',
      },
      {
        author: 'Tarek Mansour',
        role: 'FMCG Retail Director',
        comment: 'SquEasy was one of our fastest-turning culinary SKUs this quarter. Eye-catching shelf packaging and stellar repeat purchase rate.',
        rating: 5,
        avatarTag: 'TM',
      },
    ],
    retailers: [
      '/images/pages/products/retail/hyber1.png',
      '/images/pages/products/retail/hyber2.png',
      '/images/pages/products/retail/hyber3.png',
      '/images/pages/products/retail/hyber4.png',
      '/images/pages/products/retail/hyber5.png',
      '/images/pages/products/retail/hyber6.png',
      '/images/pages/products/retail/hyber7.png',
      '/images/pages/products/retail/hyber8.png',
    ],
  },

  /* ═══════════════════════════════════════════════════════════════ */
  /* 2. SWEET & SLIM ZERO CALORIE SWEETENERS & MINTS                 */
  /* ═══════════════════════════════════════════════════════════════ */
  'sweet-and-slim': {
    id: 'sweet-and-slim',
    brandName: 'Sweet & Slim',
    tagline: 'Zero Calorie Sweeteners, Gourmet Mints & Functional Beverages',
    slogan: 'Pure Cane-Sugar Sweetness. Zero Glycemic Spike.',
    vibeDescription: 'Clean, minimalist, sophisticated, wellness-first ecosystem formulated with pharmaceutical-grade sucralose, prebiotic inulin, and natural botanical extracts for everyday guilt-free vitality.',
    vibeKeywords: ['0 Calories', 'Aspartame Free', 'Prebiotic Fiber', 'Keto & Diabetic Safe', 'Bake Stable'],
    theme: {
      primary: '#10B981', // Emerald Mint
      secondary: '#059669', // Deep Jade
      accent: '#6EE7B7', // Soft Sage
      darkBg: '#021C12',
      lightBg: '#ECFDF5',
      gradientHero: 'radial-gradient(ellipse at 60% 40%, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.15) 50%, #021C12 100%)',
      buttonGlow: '0 0 35px rgba(16, 185, 129, 0.55)',
    },
    heroSticky: {
      eyebrow: 'Egypt’s #1 Sucralose Table-Top Brand Since 2011',
      headline: 'SWEETNESS WITHOUT COMPROMISE.',
      subheadline: 'Crafted with premium pharmaceutical-grade sucralose and chicory inulin soluble fiber. Replaces table sugar spoon-for-spoon in hot tea, espresso, and baking with zero bitter aftertaste.',
      ctaPrimary: 'Discover Sweet & Slim Range',
      ctaSecondary: 'Request B2B Formulation Spec',
      mainPackImage: '/images/2026/50 classic-View 4 (1).png',
      companionOrbitImages: [
        {
          image: '/images/2026/50 extra-View 4 (2).png',
          scale: 0.75,
          top: '12%',
          left: '76%',
          zIndex: 5,
          animationDelay: 0.6,
        },
        {
          image: '/images/2026/Sweet & Slim Spearmint Tin-Photoroom.png',
          scale: 0.6,
          top: '62%',
          left: '10%',
          zIndex: 15,
          animationDelay: 1.1,
        },
        {
          image: '/images/2026/peach2-Current View-Photoroom.png',
          scale: 0.55,
          top: '66%',
          left: '84%',
          zIndex: 8,
          animationDelay: 0.9,
        },
        {
          image: '/images/2026/S&S Bottle.png',
          scale: 0.5,
          top: '20%',
          left: '8%',
          zIndex: 4,
          animationDelay: 1.4,
        },
      ],
      floatingBadges: [
        {
          id: 'ss-b1',
          text: '0 Calories & 0 Net Carbs',
          sub: 'Zero Glycemic Impact on Blood Sugar',
          icon: 'Award',
          side: 'left',
          yOffset: 25,
        },
        {
          id: 'ss-b2',
          text: '100% Aspartame & Cyclamate Free',
          sub: 'Clean Cane Sugar Taste Profile',
          icon: 'ShieldCheck',
          side: 'right',
          yOffset: 35,
        },
        {
          id: 'ss-b3',
          text: 'Chicory Prebiotic Fibers',
          sub: 'Supports Healthy Gut Microbiome',
          icon: 'Heart',
          side: 'left',
          yOffset: 65,
        },
        {
          id: 'ss-b4',
          text: 'Heat-Stable Up to 220°C',
          sub: 'Ideal for Cakes, Pastries & Cooking',
          icon: 'Flame',
          side: 'right',
          yOffset: 75,
        },
      ],
      floatingIngredients: [
        { name: 'Pure Mint Leaf', iconEmoji: '🍃', blur: '0px', scale: 1.3, speed: 1.1, top: '18%', left: '10%' },
        { name: 'Garden Spearmint', iconEmoji: '🌿', blur: '1px', scale: 1.5, speed: 1.4, top: '22%', left: '85%' },
        { name: 'Sweet Peach', iconEmoji: '🍑', blur: '0px', scale: 1.2, speed: 0.9, top: '68%', left: '14%' },
      ],
    },
    flavors: [
      {
        id: 'ss-flv-classic',
        name: 'Sweet & Slim Classic (50 Sticks Box)',
        badge: 'Top Daily Choice',
        heroImage: '/images/2026/50 classic-View 4 (1).png',
        colorPalette: {
          primary: '#10B981',
          secondary: '#047857',
          accent: '#A7F3D0',
          bgGradient: 'linear-gradient(135deg, #021E13 0%, #055432 50%, #059669 100%)',
          ambientGlow: 'rgba(16, 185, 129, 0.45)',
          textAccent: '#6EE7B7',
        },
        tasteHighlights: ['Pure Sucralose Blend', 'Instant Dissolving', 'Equals 2 Tsp Sugar', 'Zero Bitter Aftertaste'],
        nutritionalHero: {
          calories: '0 kcal',
          sugar: '0.0g',
          heroMetric: '0 GI',
          heroLabel: 'Zero Glycemic Spike',
        },
      },
      {
        id: 'ss-flv-extra',
        name: 'Sweet & Slim Extra Prebiotic Inulin',
        badge: 'Gut Health Inulin',
        heroImage: '/images/2026/50 extra-View 4 (2).png',
        colorPalette: {
          primary: '#059669',
          secondary: '#064E3B',
          accent: '#D1FAE5',
          bgGradient: 'linear-gradient(135deg, #021A11 0%, #063F25 50%, #047857 100%)',
          ambientGlow: 'rgba(5, 150, 105, 0.45)',
          textAccent: '#A7F3D0',
        },
        tasteHighlights: ['Chicory Inulin Fiber', 'Digestive Comfort', 'Smooth Mouthfeel', 'Prebiotic Enriched'],
        nutritionalHero: {
          calories: '0 kcal',
          sugar: '0.0g',
          heroMetric: '100% Inulin',
          heroLabel: 'Dietary Soluble Fiber',
        },
      },
      {
        id: 'ss-flv-stevia',
        name: 'Sweet & Slim Stevia 100 Sticks Box',
        badge: '100% Plant Source',
        heroImage: '/images/2026/100 stevia-View 3.png',
        colorPalette: {
          primary: '#84CC16',
          secondary: '#4D7C0F',
          accent: '#ECFCCB',
          bgGradient: 'linear-gradient(135deg, #0A1603 0%, #1E3709 50%, #65A30D 100%)',
          ambientGlow: 'rgba(132, 204, 22, 0.45)',
          textAccent: '#BEF264',
        },
        tasteHighlights: ['High Purity Reb-A Stevia', 'Natural Green Origin', 'Zero Chemical Solvents', 'Clean Herb Finish'],
        nutritionalHero: {
          calories: '0 kcal',
          sugar: '0.0g',
          heroMetric: 'Plant',
          heroLabel: 'Botanical Stevia Extract',
        },
      },
      {
        id: 'ss-flv-spearmint-tin',
        name: 'Artisan Spearmint Breath Mints',
        badge: 'Ice Breath Tin',
        heroImage: '/images/2026/Sweet & Slim Spearmint Tin-Photoroom.png',
        colorPalette: {
          primary: '#06B6D4',
          secondary: '#0891B2',
          accent: '#CFFAFE',
          bgGradient: 'linear-gradient(135deg, #03181C 0%, #0A3C45 50%, #0E7490 100%)',
          ambientGlow: 'rgba(6, 182, 212, 0.45)',
          textAccent: '#67E8F9',
        },
        tasteHighlights: ['Natural Spearmint Oils', 'Zero Sugar Micro-Pills', 'Pocket Embossed Tin', 'Instant Coolness'],
        nutritionalHero: {
          calories: '< 1 kcal',
          sugar: '0.0g',
          heroMetric: '35 Pills',
          heroLabel: 'Ergonomic Pocket Tin',
        },
      },
      {
        id: 'ss-flv-peach-tin',
        name: 'Gourmet Peach Infusion Mints',
        badge: 'Fruity & Refreshing',
        heroImage: '/images/2026/peach2-Current View-Photoroom.png',
        colorPalette: {
          primary: '#F97316',
          secondary: '#EA580C',
          accent: '#FFEDD5',
          bgGradient: 'linear-gradient(135deg, #1F0A03 0%, #4D1D07 50%, #C2410C 100%)',
          ambientGlow: 'rgba(249, 115, 22, 0.45)',
          textAccent: '#FDBA74',
        },
        tasteHighlights: ['Sun-Ripened Peach Notes', 'Gentle Mint Coolness', 'Sugar-Free Indulgence', 'Tooth Friendly'],
        nutritionalHero: {
          calories: '< 1 kcal',
          sugar: '0.0g',
          heroMetric: 'Zero Sugar',
          heroLabel: 'Guilt-Free Refreshment',
        },
      },
      {
        id: 'ss-flv-hotchoco-box',
        name: 'Diet Hot Chocolate Hazelnut Box',
        badge: 'Guilt-Free Cocoa',
        heroImage: '/images/2026/S&S Hot Chocolate Hazelnut 3D Box-Camera 3.png',
        colorPalette: {
          primary: '#8B5CF6',
          secondary: '#7C3AED',
          accent: '#EDE9FE',
          bgGradient: 'linear-gradient(135deg, #17072E 0%, #3B156B 50%, #7C3AED 100%)',
          ambientGlow: 'rgba(139, 92, 246, 0.45)',
          textAccent: '#C4B5FD',
        },
        tasteHighlights: ['Dutch Dark Cocoa', 'Roasted Hazelnut Cream', 'Sweet & Slim Sweetened', 'Zero Added Sugar'],
        nutritionalHero: {
          calories: '45 kcal',
          sugar: '0.0g',
          heroMetric: '0 Sugar',
          heroLabel: 'Added Table Sugar',
        },
      },
    ],
    skus: [
      {
        id: 'ss-sku-50',
        name: 'Sweet & Slim Classic 50 Sticks',
        subName: '50 Moisture-Barrier Individual Sachets (1g each)',
        image: '/images/2026/50 classic-View 4 (1).png',
        categoryTag: 'Daily Classic',
        tagColor: '#10B981',
        weight: '50g Box',
        servings: '50 Servings',
        flavorProfile: 'Authentic cane sugar sweetness without metallic or bitter aftertaste.',
        description: 'Single-serve moisture-barrier sachets. Each 1g stick delivers the exact sweetness of 2 full teaspoons (10g) of sugar with 0 calories.',
        tasteMeters: [
          { label: 'Sweetness Purity', value: 98, color: '#10B981' },
          { label: 'Solubility Speed', value: 96, color: '#06B6D4' },
          { label: 'Sugar Match', value: 95, color: '#3B82F6' },
          { label: 'Zero Aftertaste', value: 94, color: '#8B5CF6' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '0 kcal' },
          { label: 'Total Carbohydrate', value: '0.0g' },
          { label: 'Total Sugars', value: '0.0g' },
          { label: 'Dietary Fiber', value: '0.8g' },
          { label: 'Sodium', value: '0mg' },
        ],
        keyBenefits: ['Spoon-for-spoon sweetness', 'Aspartame & Cyclamate Free', 'Keto & Diabetic Safe', 'Convenient pocket sticks'],
        inStock: true,
      },
      {
        id: 'ss-sku-100',
        name: 'Sweet & Slim 100 Value Dispenser Box',
        subName: '100 Individual Sticks with Pull-Out Drawer Dispenser',
        image: '/images/2026/100 classic-View 3 (1).png',
        categoryTag: 'Best Value',
        tagColor: '#059669',
        weight: '100g Box',
        servings: '100 Servings',
        flavorProfile: 'Pure sucralose sweetness with smart countertop dispensing mechanism.',
        description: 'Countertop dispenser box designed for home coffee bars, offices, and cafes. 1 stick replaces 2 spoonfuls of sugar.',
        tasteMeters: [
          { label: 'Sweetness Purity', value: 98, color: '#10B981' },
          { label: 'Value & Economy', value: 97, color: '#F59E0B' },
          { label: 'Solubility Speed', value: 96, color: '#06B6D4' },
          { label: 'Zero Aftertaste', value: 94, color: '#8B5CF6' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '0 kcal' },
          { label: 'Total Carbohydrate', value: '0.0g' },
          { label: 'Total Sugars', value: '0.0g' },
          { label: 'Serving Size', value: '1 Sachet (1g)' },
          { label: 'Sodium', value: '0mg' },
        ],
        keyBenefits: ['Pull-out drawer design', 'Best cost-per-serving', 'FSSC 22000 quality certified', '100% moisture sealed'],
        inStock: true,
      },
      {
        id: 'ss-sku-extra-50',
        name: 'Sweet & Slim Extra Prebiotic (50 Sticks)',
        subName: 'Enriched with Soluble Chicory Inulin Fiber',
        image: '/images/2026/50 extra-View 4 (2).png',
        categoryTag: 'Gut Health',
        tagColor: '#047857',
        weight: '50g Box',
        servings: '50 Servings',
        flavorProfile: 'Silky sweetness fortified with prebiotic fiber for digestive vitality.',
        description: 'Blended with natural inulin soluble fiber extracted from chicory root to nourish beneficial gut microflora while sweetening drinks.',
        tasteMeters: [
          { label: 'Sweetness Purity', value: 96, color: '#10B981' },
          { label: 'Gut Prebiotic Fiber', value: 98, color: '#059669' },
          { label: 'Mouthfeel Roundness', value: 92, color: '#F59E0B' },
          { label: 'Zero Aftertaste', value: 94, color: '#8B5CF6' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '0 kcal' },
          { label: 'Dietary Inulin Fiber', value: '0.9g' },
          { label: 'Total Sugars', value: '0.0g' },
          { label: 'Glycemic Index', value: '0' },
          { label: 'Sodium', value: '0mg' },
        ],
        keyBenefits: ['Feeds beneficial gut bifidobacteria', 'Smooth texture in coffee & tea', 'Zero calorie formulation', 'Non-GMO chicory'],
        inStock: true,
      },
      {
        id: 'ss-sku-stevia-100',
        name: 'Sweet & Slim Stevia 100 Sticks Box',
        subName: '100% Botanical Stevia Leaf Extract',
        image: '/images/2026/100 stevia-View 3.png',
        categoryTag: 'Plant Source',
        tagColor: '#84CC16',
        weight: '100g Box',
        servings: '100 Servings',
        flavorProfile: 'Pure botanical sweetness extracted from high-purity Stevia Rebaudiana leaves.',
        description: 'Nature-derived plant sweetener crafted without chemical bleaches or artificial fillers.',
        tasteMeters: [
          { label: 'Plant Purity', value: 98, color: '#84CC16' },
          { label: 'Natural Origin', value: 100, color: '#10B981' },
          { label: 'Sweet Balance', value: 94, color: '#06B6D4' },
          { label: 'Zero Calories', value: 100, color: '#F59E0B' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '0 kcal' },
          { label: 'Sugars', value: '0.0g' },
          { label: 'Net Carbs', value: '0.0g' },
          { label: 'Glycemic Index', value: '0' },
        ],
        keyBenefits: ['100% Plant based', 'Zero glycemic load', 'Dispenser box format', 'Certified Non-GMO'],
        inStock: true,
      },
      {
        id: 'ss-sku-spearmint-tin',
        name: 'Sweet & Slim Spearmint Pocket Tin',
        subName: 'Sugar-Free Pocket Breath Mints with Natural Spearmint Oil',
        image: '/images/2026/Sweet & Slim Spearmint Tin-Photoroom.png',
        categoryTag: 'Pocket Fresh',
        tagColor: '#06B6D4',
        weight: '14g Embossed Tin',
        servings: '35 Mints',
        flavorProfile: 'Invigorating cool spearmint with clean, long-lasting breath freshness.',
        description: 'Packaged in a sleek matte-finish embossed metal pocket tin. Perfect after meals, coffee, or before meetings.',
        tasteMeters: [
          { label: 'Breath Freshness', value: 98, color: '#06B6D4' },
          { label: 'Cooling Sensation', value: 94, color: '#3B82F6' },
          { label: 'Longevity', value: 92, color: '#8B5CF6' },
          { label: 'Zero Sugar', value: 100, color: '#10B981' },
        ],
        nutritionFacts: [
          { label: 'Calories per Mint', value: '< 1 kcal' },
          { label: 'Sugar', value: '0.0g' },
          { label: 'Fat', value: '0.0g' },
          { label: 'Sodium', value: '0mg' },
        ],
        keyBenefits: ['Premium embossed sliding tin', '100% Sugar-free & tooth safe', 'Instant cooling breath freshness', 'Zero artificial colors'],
        inStock: true,
      },
      {
        id: 'ss-sku-peach-tin',
        name: 'Sweet & Slim Peach Pocket Tin',
        subName: 'Sugar-Free Gourmet Peach & Mild Mint Mints',
        image: '/images/2026/peach2-Current View-Photoroom.png',
        categoryTag: 'Fruity Mint',
        tagColor: '#F97316',
        weight: '14g Embossed Tin',
        servings: '35 Mints',
        flavorProfile: 'Juicy summer peach essence with a crisp touch of refreshing cooling crystal.',
        description: 'A delicate harmony of luscious sweet peach and gentle breath mint in a collectible lifestyle pocket tin.',
        tasteMeters: [
          { label: 'Peach Fruitiness', value: 96, color: '#F97316' },
          { label: 'Sweetness Balance', value: 94, color: '#EC4899' },
          { label: 'Refreshing Finish', value: 90, color: '#06B6D4' },
          { label: 'Zero Sugar', value: 100, color: '#10B981' },
        ],
        nutritionFacts: [
          { label: 'Calories per Mint', value: '< 1 kcal' },
          { label: 'Sugar', value: '0.0g' },
          { label: 'Fat', value: '0.0g' },
          { label: 'Sodium', value: '0mg' },
        ],
        keyBenefits: ['Artisanal peach fruit extract', 'Sugar-free guilt-free indulgence', 'Stylish pocket size', 'Made by AWA Food Solutions'],
        inStock: true,
      },
      {
        id: 'ss-sku-hotchoco-hazelnut',
        name: 'Sweet & Slim Diet Hot Chocolate (Hazelnut Box)',
        subName: '10 Single-Serve Sachets with Zero Added Sugar',
        image: '/images/2026/S&S Hot Chocolate Hazelnut 3D Box-Camera 3.png',
        categoryTag: 'Diet Indulgence',
        tagColor: '#8B5CF6',
        weight: '10 Sachets Box',
        servings: '10 Mugs',
        flavorProfile: 'Decadent Dutch cocoa blended with roasted hazelnut cream and zero sugar spikes.',
        description: 'Rich velvety hot chocolate indulgence sweetened exclusively with Sweet & Slim. Creamy, comforting, and only 45 kcal per cup.',
        tasteMeters: [
          { label: 'Choco Creaminess', value: 96, color: '#8B5CF6' },
          { label: 'Hazelnut Aroma', value: 94, color: '#D97706' },
          { label: 'Sweet Balance', value: 95, color: '#10B981' },
          { label: 'Froth Thickness', value: 90, color: '#3B82F6' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '45 kcal' },
          { label: 'Added Sugars', value: '0.0g' },
          { label: 'Protein', value: '1.8g' },
          { label: 'Total Fat', value: '1.2g' },
        ],
        keyBenefits: ['Zero added table sugar', 'Only 45 kcal per creamy mug', 'Real Dutch cocoa & roasted hazelnut', 'Instant hot water dissolving'],
        inStock: true,
      },
      {
        id: 'ss-sku-liquid-bottle',
        name: 'Sweet & Slim Zero Calorie Liquid Dropper',
        subName: 'Instant Cold-Soluble Liquid Sweetener Bottle',
        image: '/images/2026/S&S Bottle.png',
        categoryTag: 'Liquid Dropper',
        tagColor: '#0284C7',
        weight: 'Liquid Squeeze Bottle',
        servings: '150 Drops',
        flavorProfile: 'Concentrated instant-dissolving liquid sweetness for iced coffee, cocktails, and fresh lemonades.',
        description: '3 drops equal 1 teaspoon of sugar. Dissolves instantly in ice-cold drinks without stirring crystals.',
        tasteMeters: [
          { label: 'Cold Solubility', value: 100, color: '#0284C7' },
          { label: 'Sweetness Purity', value: 98, color: '#10B981' },
          { label: 'Precision Dosing', value: 96, color: '#8B5CF6' },
          { label: 'Portability', value: 95, color: '#F59E0B' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '0 kcal' },
          { label: 'Sugar', value: '0.0g' },
          { label: 'Carbs', value: '0.0g' },
          { label: 'Serving Size', value: '3 Drops' },
        ],
        keyBenefits: ['Instant dissolving in iced drinks', 'Precision no-leak dropper tip', 'Zero calories & zero carbs', 'Travel friendly size'],
        inStock: true,
      },
    ],
    story: {
      title: 'THE SCIENCE OF GUILT-FREE SWEETNESS',
      subtitle: 'Pioneering Sucralose Formulation in Egypt',
      leadParagraph: 'In 2011, AWA Food Solutions pioneered table-top sucralose manufacturing in Egypt under the brand Sweet & Slim. We recognized that consumers demanded a true cane-sugar flavor profile without the metabolic penalties of refined sucrose, fructose, or the bitter aftertaste of older artificial sweeteners.',
      secondaryParagraph: 'Formulated with European pharmaceutical-grade sucralose, our proprietary matrix binds with high-purity dietary fibers to ensure rapid instant dissolution in both iced and boiling beverages, making it the preferred choice for diabetics, keto dieters, and health-minded families across the Middle East.',
      stats: [
        { value: '14+ Yrs', label: 'Market Leadership', sub: 'Pioneering zero-calorie products since 2011' },
        { value: '0.0g', label: 'Added Sugars', sub: 'Pure sucralose formulation' },
        { value: '220°C', label: 'Thermal Stability', sub: 'Fully bake-stable for gourmet ovens' },
        { value: '1:10', label: 'Sugar Potency', sub: '1g stick equals 10g sugar sweetness' },
      ],
      bulletPoints: [
        { title: 'Sucralose & Prebiotic Synergy', desc: 'Combines zero-calorie sweetness with chicory inulin soluble fiber for prebiotic gut benefits.' },
        { title: 'Strict Glycemic Validation', desc: 'Scientifically verified zero blood glucose elevation, safe for type 1 and type 2 diabetics.' },
        { title: 'Ultra-Clean Clean Label', desc: '100% free of bitter aspartame, acesulfame-K, saccharin, and sodium cyclamate.' },
      ],
      image: '/images/pages/products/sweetslim.png',
      badgeText: 'AWA Health & Wellness Division',
    },
    faqs: [
      {
        q: 'Is Sweet & Slim completely safe for diabetes patients?',
        a: 'Yes, 100%. Sweet & Slim is formulated with high-purity sucralose which passes through the human digestive tract without being metabolized into carbohydrates or calories. It produces zero glycemic spikes and is approved by global health authorities including the US FDA, EFSA, and Egyptian EDA.',
      },
      {
        q: 'Can I bake cakes and cookies with Sweet & Slim?',
        a: 'Absolutely! Unlike aspartame which breaks down and turns bitter under heat, Sweet & Slim sucralose is heat-stable up to 220°C (428°F). It can be used in sponge cakes, biscuits, custards, and warm culinary sauces.',
      },
      {
        q: 'How many sticks of Sweet & Slim can I safely consume daily?',
        a: 'The Acceptable Daily Intake (ADI) for sucralose established by the WHO and FDA is 15mg/kg of body weight. For an average 70kg adult, that equals over 100 sachets of Sweet & Slim daily — making everyday household usage completely safe.',
      },
    ],
    reviews: [
      {
        author: 'Dr. Sameh Abdel-Rahman',
        role: 'Consultant Endocrinologist & Diabetologist',
        comment: 'I routinely advise my diabetic and pre-diabetic patients to switch from cane sugar to Sweet & Slim. The patient compliance is outstanding because it genuinely tastes like real sugar with zero glycemic impact.',
        rating: 5,
        avatarTag: 'DR',
      },
      {
        author: 'Lina Gohar',
        role: 'Fitness Coach & Nutritionist',
        comment: 'The Extra Inulin version is my daily go-to for morning espresso and protein oatmeal. Clean sweetness plus prebiotic fiber is a game changer.',
        rating: 5,
        avatarTag: 'LG',
      },
      {
        author: 'Youssef El-Kholy',
        role: 'Café & Specialty Bakery Owner',
        comment: 'We use Sweet & Slim in our sugar-free keto cheesecake line. Our customers cannot tell the difference between this and traditional sugar.',
        rating: 5,
        avatarTag: 'YK',
      },
    ],
    retailers: [
      '/images/pages/products/retail/hyber1.png',
      '/images/pages/products/retail/hyber2.png',
      '/images/pages/products/retail/hyber3.png',
      '/images/pages/products/retail/hyber4.png',
      '/images/pages/products/retail/hyber5.png',
      '/images/pages/products/retail/hyber6.png',
      '/images/pages/products/retail/hyber7.png',
      '/images/pages/products/retail/hyber8.png',
    ],
  },

  /* ═══════════════════════════════════════════════════════════════ */
  /* 3. YALLA DRINKS - INSTANT BARISTA FRAPPES & SMOOTHIES           */
  /* ═══════════════════════════════════════════════════════════════ */
  'yalla-drinks': {
    id: 'yalla-drinks',
    brandName: 'Yalla Drinks',
    tagline: 'Instant Barista Frappes, Iced Fruit Smoothies & Specialty Coffees',
    slogan: 'Café Quality, Anytime Anywhere. Just Add Water & Ice.',
    vibeDescription: 'Bold, fast-paced, urban, punchy beverage experience delivering instant barista-grade ice-blended frappes, thick velvety microfoam, and vibrant fruit coolers in convenient retail boxes and 1kg café bags.',
    vibeKeywords: ['Barista Grade', 'Instant Soluble', 'Thick Microfoam', 'Ice Blended', 'Vibrant Café Flavors'],
    theme: {
      primary: '#0284C7', // Neon Sky Cyan
      secondary: '#E11D48', // Electric Berry
      accent: '#22C55E', // Electric Lime
      darkBg: '#031424',
      lightBg: '#F0F9FF',
      gradientHero: 'radial-gradient(ellipse at 60% 40%, rgba(2, 132, 199, 0.4) 0%, rgba(225, 29, 72, 0.15) 50%, #031424 100%)',
      buttonGlow: '0 0 35px rgba(2, 132, 199, 0.65)',
    },
    heroSticky: {
      eyebrow: 'Modern Lifestyle Beverage Matrix',
      headline: 'INSTANT CAFÉ OVERDRIVE.',
      subheadline: 'Crafted with instant cold-water and milk soluble beverage technology. Whip up thick ice-blended Spanish Lattes, Pistachio Frappes, and Pink Lemonade with signature micro-foam head in seconds.',
      ctaPrimary: 'Explore Yalla Drink Series',
      ctaSecondary: 'Request Foodservice Menu Spec',
      mainPackImage: '/images/2026/Copy of spanish latte new-View 5.png',
      companionOrbitImages: [
        {
          image: '/images/2026/Copy of Pistachio new-View 5.png',
          scale: 0.75,
          top: '10%',
          left: '78%',
          zIndex: 5,
          animationDelay: 0.5,
        },
        {
          image: '/images/2026/Copy of pink lemonade-View 5.png',
          scale: 0.7,
          top: '60%',
          left: '10%',
          zIndex: 15,
          animationDelay: 1.0,
        },
        {
          image: '/images/2026/Copy of sachets spanish latte new-View 1.png',
          scale: 0.6,
          top: '68%',
          left: '84%',
          zIndex: 8,
          animationDelay: 0.7,
        },
        {
          image: '/images/2026/Copy of Pina Colada-View 5.png',
          scale: 0.55,
          top: '18%',
          left: '8%',
          zIndex: 4,
          animationDelay: 1.3,
        },
      ],
      floatingBadges: [
        {
          id: 'yl-b1',
          text: 'Velvety Micro-Foam Head',
          sub: 'Engineered Dairy Emulsion Overrun',
          icon: 'Award',
          side: 'left',
          yOffset: 25,
        },
        {
          id: 'yl-b2',
          text: 'Cold Water Instant Soluble',
          sub: 'No Clumping, 100% Smooth Texture',
          icon: 'Zap',
          side: 'right',
          yOffset: 35,
        },
        {
          id: 'yl-b3',
          text: 'Barista Grade Roast Profiles',
          sub: 'Premium 100% Arabica Extracts',
          icon: 'Coffee',
          side: 'left',
          yOffset: 65,
        },
        {
          id: 'yl-b4',
          text: 'Available in 10-Sticks & 1kg',
          sub: 'For Retail Consumers & Coffee Shops',
          icon: 'ShoppingBag',
          side: 'right',
          yOffset: 75,
        },
      ],
      floatingIngredients: [
        { name: 'Coffee Bean', iconEmoji: '☕', blur: '0px', scale: 1.4, speed: 1.2, top: '15%', left: '12%' },
        { name: 'Pistachio Nut', iconEmoji: '🥜', blur: '0px', scale: 1.3, speed: 0.9, top: '24%', left: '80%' },
        { name: 'Ice Cube Frost', iconEmoji: '🧊', blur: '1px', scale: 1.5, speed: 1.5, top: '65%', left: '10%' },
        { name: 'Pink Lemonade Citrus', iconEmoji: '🍋', blur: '0px', scale: 1.3, speed: 1.1, top: '75%', left: '85%' },
      ],
    },
    flavors: [
      {
        id: 'yl-flv-spanish',
        name: 'Frapp It Spanish Latte',
        badge: '#1 Café Hit',
        heroImage: '/images/2026/Copy of spanish latte new-View 5.png',
        sachetImage: '/images/2026/Copy of sachets spanish latte new-View 1.png',
        colorPalette: {
          primary: '#0284C7',
          secondary: '#0369A1',
          accent: '#BAE6FD',
          bgGradient: 'linear-gradient(135deg, #02172D 0%, #06395E 50%, #0284C7 100%)',
          ambientGlow: 'rgba(2, 132, 199, 0.45)',
          textAccent: '#7DD3FC',
        },
        tasteHighlights: ['Sweet Condensed Milk', 'Bold Espresso Roast', 'Silky Micro-Foam', 'Ice-Blended Perfection'],
        nutritionalHero: {
          calories: '110 kcal',
          sugar: '7.8g',
          heroMetric: '30 sec',
          heroLabel: 'Ice Blender Prep Time',
        },
      },
      {
        id: 'yl-flv-pistachio',
        name: 'Frapp It Pistachio Latte',
        badge: 'Gourmet Nutty',
        heroImage: '/images/2026/Copy of Pistachio new-View 5.png',
        sachetImage: '/images/2026/Copy of sachets pistachio new-View 1.png',
        colorPalette: {
          primary: '#65A30D',
          secondary: '#4D7C0F',
          accent: '#ECFCCB',
          bgGradient: 'linear-gradient(135deg, #0B1B04 0%, #22400A 50%, #65A30D 100%)',
          ambientGlow: 'rgba(101, 163, 13, 0.45)',
          textAccent: '#BEF264',
        },
        tasteHighlights: ['Roasted Green Pistachio', 'Velvety Dairy Cream', 'Subtle Cardamom', 'Rich Froth Overrun'],
        nutritionalHero: {
          calories: '115 kcal',
          sugar: '8.1g',
          heroMetric: 'Trending',
          heroLabel: 'Specialty Café Favorite',
        },
      },
      {
        id: 'yl-flv-smoozy-pink',
        name: 'Smoozy Pink Lemonade',
        badge: 'Summer Cooler',
        heroImage: '/images/2026/Copy of pink lemonade-View 5.png',
        sachetImage: '/images/2026/Copy of sachets pink lemonade new-View 1.png',
        colorPalette: {
          primary: '#E11D48',
          secondary: '#BE123C',
          accent: '#FECDD3',
          bgGradient: 'linear-gradient(135deg, #26040C 0%, #540B1D 50%, #BE123C 100%)',
          ambientGlow: 'rgba(225, 29, 72, 0.45)',
          textAccent: '#FDA4AF',
        },
        tasteHighlights: ['Zesty Pink Lemon', 'Wild Raspberry Burst', 'Crisp Cold Quencher', 'Instant Water Dissolution'],
        nutritionalHero: {
          calories: '65 kcal',
          sugar: '4.2g',
          heroMetric: '100% Real',
          heroLabel: 'Natural Citrus Extracts',
        },
      },
      {
        id: 'yl-flv-smoozy-pina',
        name: 'Smoozy Piña Colada',
        badge: 'Tropical Bliss',
        heroImage: '/images/2026/Copy of Pina Colada-View 5.png',
        sachetImage: '/images/2026/Copy of sachets pina colada new-View 1.png',
        colorPalette: {
          primary: '#D97706',
          secondary: '#B45309',
          accent: '#FEF3C7',
          bgGradient: 'linear-gradient(135deg, #1B0F02 0%, #442706 50%, #B45309 100%)',
          ambientGlow: 'rgba(217, 119, 6, 0.45)',
          textAccent: '#FDE68A',
        },
        tasteHighlights: ['Golden Pineapple Puree', 'Creamy Coconut Milk', 'Zero Alcohol', 'Frozen Beach Vibe'],
        nutritionalHero: {
          calories: '75 kcal',
          sugar: '5.0g',
          heroMetric: 'Island',
          heroLabel: 'Tropical Coconut Fusion',
        },
      },
      {
        id: 'yl-flv-smoozy-mojito',
        name: 'Smoozy Mint Lime Mojito',
        badge: 'Ice Mint Cooler',
        heroImage: '/images/2026/Copy of Mojito-View 5.png',
        sachetImage: '/images/2026/Copy of sachets mojito new-View 1.png',
        colorPalette: {
          primary: '#10B981',
          secondary: '#059669',
          accent: '#A7F3D0',
          bgGradient: 'linear-gradient(135deg, #021E13 0%, #055432 50%, #059669 100%)',
          ambientGlow: 'rgba(16, 185, 129, 0.45)',
          textAccent: '#6EE7B7',
        },
        tasteHighlights: ['Crushed Garden Spearmint', 'Key Lime Zest', 'Frosty Cold Shaker Mix', '100% Non-Alcoholic'],
        nutritionalHero: {
          calories: '60 kcal',
          sugar: '3.8g',
          heroMetric: 'Frosty',
          heroLabel: 'Zesty Lime Quencher',
        },
      },
      {
        id: 'yl-flv-white-mocha',
        name: 'Frapp It White Chocolate Mocha',
        badge: 'Decadent Froth',
        heroImage: '/images/2026/Copy of white mocha new-View 5.png',
        sachetImage: '/images/2026/Copy of sachets white mocha new-View 1.png',
        colorPalette: {
          primary: '#8B5CF6',
          secondary: '#7C3AED',
          accent: '#EDE9FE',
          bgGradient: 'linear-gradient(135deg, #16072D 0%, #361463 50%, #7C3AED 100%)',
          ambientGlow: 'rgba(139, 92, 246, 0.45)',
          textAccent: '#C4B5FD',
        },
        tasteHighlights: ['Creamy White Cocoa', 'Specialty Arabica Roast', 'Velvet Foam Crown', 'Iced or Steamed'],
        nutritionalHero: {
          calories: '120 kcal',
          sugar: '8.4g',
          heroMetric: 'Barista',
          heroLabel: 'Artisan Cocoa Butter',
        },
      },
    ],
    skus: [
      {
        id: 'yl-sku-spanish',
        name: 'Frapp It Spanish Latte (Box 10 Sachets)',
        subName: '10 x 25g Single-Serve Barista Sachets',
        image: '/images/2026/Copy of spanish latte new-View 5.png',
        categoryTag: 'Bestseller',
        tagColor: '#0284C7',
        weight: '250g Box',
        servings: '10 Mugs/Glasses',
        flavorProfile: 'Sweet condensed milk and dark espresso with thick frothy overrun.',
        description: 'Blend with 150ml cold milk and 5 ice cubes for 25 seconds to create a luxury iced Spanish latte matching top international coffee houses.',
        tasteMeters: [
          { label: 'Espresso Boldness', value: 92, color: '#0284C7' },
          { label: 'Sweet Milk Balance', value: 95, color: '#F59E0B' },
          { label: 'Froth Overrun', value: 96, color: '#10B981' },
          { label: 'Smoothness', value: 98, color: '#8B5CF6' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '110 kcal' },
          { label: 'Total Sugars', value: '7.8g' },
          { label: 'Total Fat', value: '2.5g' },
          { label: 'Protein', value: '2.1g' },
          { label: 'Serving Size', value: '1 Sachet (25g)' },
        ],
        keyBenefits: ['100% Arabica coffee extract', 'Instant cold solubility', 'Thick creamy head without blender required', 'Halal certified'],
        inStock: true,
      },
      {
        id: 'yl-sku-pistachio',
        name: 'Frapp It Pistachio Latte (Box 10 Sachets)',
        subName: '10 x 25g Single-Serve Gourmet Sachets',
        image: '/images/2026/Copy of Pistachio new-View 5.png',
        categoryTag: 'Trending Gourmet',
        tagColor: '#65A30D',
        weight: '250g Box',
        servings: '10 Glasses',
        flavorProfile: 'Rich roasted green pistachio cream combined with silky espresso microfoam.',
        description: 'Brings the world’s hottest coffee trend to your home. Gourmet green pistachio cream and Arabica coffee in a pre-portioned sachet.',
        tasteMeters: [
          { label: 'Pistachio Intensity', value: 96, color: '#84CC16' },
          { label: 'Creaminess', value: 95, color: '#06B6D4' },
          { label: 'Coffee Accent', value: 85, color: '#D97706' },
          { label: 'Aroma Depth', value: 92, color: '#EC4899' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '115 kcal' },
          { label: 'Total Sugars', value: '8.1g' },
          { label: 'Total Fat', value: '2.8g' },
          { label: 'Protein', value: '2.3g' },
          { label: 'Serving Size', value: '1 Sachet (25g)' },
        ],
        keyBenefits: ['Roasted pistachio aromatic notes', 'Instant café texture', 'No syrups or artificial pastes needed', 'Made by AWA Food Solutions'],
        inStock: true,
      },
      {
        id: 'yl-sku-smoozy-pink',
        name: 'Smoozy Pink Lemonade (Box 10 Sachets)',
        subName: '10 x 20g Single-Serve Fruit Smoothie Sachets',
        image: '/images/2026/Copy of pink lemonade-View 5.png',
        categoryTag: 'Fruit Cooler',
        tagColor: '#E11D48',
        weight: '200g Box',
        servings: '10 Glasses',
        flavorProfile: 'Electric tart pink lemon balanced with juicy sweet raspberry essence.',
        description: 'The ultimate thirst quencher. Shake with 200ml cold water and ice for an electrifying ruby-pink summer citrus cooler.',
        tasteMeters: [
          { label: 'Citrus Zest', value: 98, color: '#E11D48' },
          { label: 'Refreshing Kick', value: 96, color: '#06B6D4' },
          { label: 'Sweet Harmony', value: 90, color: '#F59E0B' },
          { label: 'Solubility Speed', value: 98, color: '#10B981' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '65 kcal' },
          { label: 'Total Sugars', value: '4.2g' },
          { label: 'Total Fat', value: '0.0g' },
          { label: 'Vitamin C', value: '45mg (50% DV)' },
          { label: 'Serving Size', value: '1 Sachet (20g)' },
        ],
        keyBenefits: ['Enriched with Vitamin C', 'Zero caffeine', 'Real fruit citrus oils', 'Vibrant ruby pink presentation'],
        inStock: true,
      },
      {
        id: 'yl-sku-smoozy-pina',
        name: 'Smoozy Piña Colada (Box 10 Sachets)',
        subName: '10 x 20g Single-Serve Fruit Smoothie Sachets',
        image: '/images/2026/Copy of Pina Colada-View 5.png',
        categoryTag: 'Tropical Hit',
        tagColor: '#D97706',
        weight: '200g Box',
        servings: '10 Glasses',
        flavorProfile: 'Luscious tropical coconut cream and sweet golden pineapple fusion.',
        description: 'Instant tropical escape. Shake or blend with cold water and ice for a rich, creamy, non-alcoholic Piña Colada.',
        tasteMeters: [
          { label: 'Tropical Flavor', value: 96, color: '#F59E0B' },
          { label: 'Coconut Richness', value: 94, color: '#06B6D4' },
          { label: 'Pineapple Tang', value: 90, color: '#84CC16' },
          { label: 'Velvety Texture', value: 95, color: '#8B5CF6' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '75 kcal' },
          { label: 'Total Sugars', value: '5.0g' },
          { label: 'Total Fat', value: '1.2g' },
          { label: 'Serving Size', value: '1 Sachet (20g)' },
        ],
        keyBenefits: ['100% Non-alcoholic', 'Coconut milk powder base', 'Barista blender friendly', 'Instant tropical vacation in a glass'],
        inStock: true,
      },
      {
        id: 'yl-sku-smoozy-mojito',
        name: 'Smoozy Mint Lime Mojito (Box 10)',
        subName: '10 x 20g Single-Serve Mojito Sachets',
        image: '/images/2026/Copy of Mojito-View 5.png',
        categoryTag: 'Zesty Cooler',
        tagColor: '#10B981',
        weight: '200g Box',
        servings: '10 Glasses',
        flavorProfile: 'Zesty Key lime with garden spearmint crushed aroma.',
        description: 'Shake with ice cold sparkling or still water for a restaurant-grade virgin mint mojito.',
        tasteMeters: [
          { label: 'Lime Zest', value: 96, color: '#10B981' },
          { label: 'Mint Coolness', value: 95, color: '#06B6D4' },
          { label: 'Thirst Quench', value: 98, color: '#3B82F6' },
          { label: 'Sweet Harmony', value: 90, color: '#F59E0B' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '60 kcal' },
          { label: 'Total Sugars', value: '3.8g' },
          { label: 'Vitamin C', value: '30mg' },
          { label: 'Serving Size', value: '1 Sachet (20g)' },
        ],
        keyBenefits: ['Natural spearmint extracts', '100% Non-alcoholic', 'Instant shaker prep', 'Summer bestseller'],
        inStock: true,
      },
      {
        id: 'yl-sku-smoozy-berries',
        name: 'Smoozy Wild Mixed Berries (Box 10)',
        subName: '10 x 20g Single-Serve Berry Smoothie Sachets',
        image: '/images/2026/Copy of mixed berries-View 5.png',
        categoryTag: 'Berry Burst',
        tagColor: '#8B5CF6',
        weight: '200g Box',
        servings: '10 Glasses',
        flavorProfile: 'Blueberries, blackberries, and wild strawberries in a smooth purple smoothie mix.',
        description: 'Antioxidant-rich wild berry puree powder that whips into a thick iced berry frappe.',
        tasteMeters: [
          { label: 'Berry Intensity', value: 98, color: '#8B5CF6' },
          { label: 'Tart Balance', value: 92, color: '#EC4899' },
          { label: 'Velvety Body', value: 94, color: '#06B6D4' },
          { label: 'Rich Color', value: 100, color: '#7C3AED' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '70 kcal' },
          { label: 'Total Sugars', value: '4.5g' },
          { label: 'Antioxidants', value: 'High' },
          { label: 'Serving Size', value: '1 Sachet (20g)' },
        ],
        keyBenefits: ['Real berry extracts', 'Deep purple velvet presentation', 'High Vitamin C', 'Kid & adult favorite'],
        inStock: true,
      },
      {
        id: 'yl-sku-white-mocha',
        name: 'Frapp It White Chocolate Mocha (Box 10)',
        subName: '10 x 25g Single-Serve Barista Sachets',
        image: '/images/2026/Copy of white mocha new-View 5.png',
        categoryTag: 'White Cocoa',
        tagColor: '#A855F7',
        weight: '250g Box',
        servings: '10 Mugs/Glasses',
        flavorProfile: 'Creamy white cocoa butter notes with smooth iced espresso roast.',
        description: 'A decadent café indulgence. The sweetness of premium white chocolate beautifully balances deep dark Arabica coffee.',
        tasteMeters: [
          { label: 'White Choco Sweetness', value: 94, color: '#A855F7' },
          { label: 'Espresso Body', value: 88, color: '#0284C7' },
          { label: 'Froth Creaminess', value: 96, color: '#10B981' },
          { label: 'Indulgence Level', value: 98, color: '#EC4899' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '120 kcal' },
          { label: 'Total Sugars', value: '8.4g' },
          { label: 'Total Fat', value: '3.0g' },
          { label: 'Protein', value: '2.0g' },
          { label: 'Serving Size', value: '1 Sachet (25g)' },
        ],
        keyBenefits: ['Real white cocoa solids', 'Can be served hot or blended with ice', 'Rich café microfoam head', 'Perfect for sweet tooth coffee lovers'],
        inStock: true,
      },
      {
        id: 'yl-sku-hazelnut-choco',
        name: 'Frapp It Hazelnut Chocolate (Box 10)',
        subName: '10 x 25g Single-Serve Barista Sachets',
        image: '/images/2026/Copy of chocolate hazelnut new-View 5.png',
        categoryTag: 'Choco Nut',
        tagColor: '#B45309',
        weight: '250g Box',
        servings: '10 Mugs/Glasses',
        flavorProfile: 'Nutty Gianduja chocolate and dark espresso with velvety chocolate froth.',
        description: 'The definitive iced mocha for hazelnut lovers. Rich Dutch cocoa and roasted hazelnut cream in an instant soluble powder.',
        tasteMeters: [
          { label: 'Hazelnut Aroma', value: 96, color: '#D97706' },
          { label: 'Dark Choco Depth', value: 94, color: '#8B5CF6' },
          { label: 'Espresso Balance', value: 86, color: '#0284C7' },
          { label: 'Creaminess', value: 95, color: '#10B981' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '118 kcal' },
          { label: 'Total Sugars', value: '8.0g' },
          { label: 'Total Fat', value: '2.6g' },
          { label: 'Protein', value: '2.2g' },
          { label: 'Serving Size', value: '1 Sachet (25g)' },
        ],
        keyBenefits: ['Roasted hazelnut essence', 'Dutch dark cocoa', 'Instant cold or hot preparation', 'FSSC 22000 certified quality'],
        inStock: true,
      },
      {
        id: 'yl-sku-koffi-caffe',
        name: 'Yalla Koffi Caffe Latte (Box 10 Sachets)',
        subName: 'Specialty 3-in-1 Instant Café Coffee',
        image: '/images/2026/Yalla koffi caffe-Camera 3.png',
        categoryTag: 'Hot Café',
        tagColor: '#78350F',
        weight: '200g Box',
        servings: '10 Mugs',
        flavorProfile: 'Golden roasted Arabica coffee beans with rich dairy creamer and silky froth head.',
        description: 'Smooth and satisfying morning coffee with zero equipment needed. Just pour hot water.',
        tasteMeters: [
          { label: 'Coffee Roast', value: 94, color: '#78350F' },
          { label: 'Creamy Froth', value: 95, color: '#D97706' },
          { label: 'Sweet Harmony', value: 90, color: '#10B981' },
          { label: 'Aroma Punch', value: 96, color: '#F59E0B' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '85 kcal' },
          { label: 'Coffee Extract', value: '100% Arabica' },
          { label: 'Serving Size', value: '1 Sachet (20g)' },
        ],
        keyBenefits: ['100% Pure Arabica beans', 'Fine spray-dried creamer', 'Steaming hot froth in 10 seconds', 'Value box format'],
        inStock: true,
      },
      {
        id: 'yl-sku-koffi-caramel',
        name: 'Yalla Koffi Golden Caramel (Box 10)',
        subName: 'Specialty 3-in-1 Caramel Coffee',
        image: '/images/2026/Yalla koffi caramel-Camera 3.png',
        categoryTag: 'Caramel Café',
        tagColor: '#D97706',
        weight: '200g Box',
        servings: '10 Mugs',
        flavorProfile: 'Buttery English caramel aroma with smooth roasted espresso notes.',
        description: 'The sweet warmth of buttery caramel infused with premium coffee and velvety foam.',
        tasteMeters: [
          { label: 'Caramel Richness', value: 98, color: '#D97706' },
          { label: 'Espresso Body', value: 90, color: '#78350F' },
          { label: 'Foam Head', value: 94, color: '#10B981' },
          { label: 'Sweet Balance', value: 95, color: '#EC4899' },
        ],
        nutritionFacts: [
          { label: 'Calories', value: '90 kcal' },
          { label: 'Sugars', value: '6.5g' },
          { label: 'Serving Size', value: '1 Sachet (20g)' },
        ],
        keyBenefits: ['Golden caramel syrup aroma', 'Velvety microfoam head', 'Hot or iced versatility', 'Instant preparation'],
        inStock: true,
      },
    ],
    story: {
      title: 'BARISTA SCIENCE IN INSTANT FORMULATION',
      subtitle: 'The Engineering of Cold-Soluble Overrun Matrices',
      leadParagraph: 'Commercial coffee shops charge premium prices for specialty frappes and iced fruit coolers. Making them at home traditionally required expensive equipment, dairy stabilizers, and synthetic flavor syrups.',
      secondaryParagraph: 'Yalla Drinks changes everything. Leveraging AWA Group’s 30+ years of food technology expertise in hydrocolloid emulsifiers and spray-dried fat systems, Yalla powders dissolve instantly in cold water and milk, generating micro-foam aeration and dense mouthfeel with a standard handheld shaker or simple home blender.',
      stats: [
        { value: '30 Sec', label: 'Barista Prep Time', sub: 'Just add cold water or milk & ice' },
        { value: '100%', label: 'Cold Soluble', sub: 'Engineered non-clumping powder matrix' },
        { value: '18 Mos', label: 'Ambient Freshness', sub: 'Nitrogen-flushed retail sachets' },
        { value: '15+ Flavors', label: 'Café Menu Matrix', sub: 'Frappes, smoothies, and hot coffees' },
      ],
      bulletPoints: [
        { title: 'Proprietary Microfoam Matrix', desc: 'Creates persistent, dense foam tops that support whipped cream and caramel drizzle without collapsing.' },
        { title: 'Fine Spray-Dried Creamers', desc: 'Guarantees 100% lump-free dissolving even in ice-cold 4°C water and refrigerated milk.' },
        { title: 'Dual Format Capability', desc: 'Available in pre-portioned 10-sachet retail packs for consumers and 1kg bags for cafes & restaurants.' },
      ],
      image: '/images/banners/yalla_smoozy_banner-Photoroom.png',
      badgeText: 'AWA Beverage Technology',
    },
    faqs: [
      {
        q: 'Do I need an expensive blender to make Yalla Frappes?',
        a: 'No! While an ice blender produces the ultimate frosty coffee shop texture, Yalla’s instant formulation allows you to simply shake 1 sachet with 150ml cold milk/water and ice cubes in a shaker bottle for 20 seconds.',
      },
      {
        q: 'Can Yalla Frapp It sachets be served hot?',
        a: 'Yes! Frapp It sachets can be mixed with 180ml steaming hot milk or hot water for a rich, frothy hot café latte, mocha, or hot cocoa.',
      },
      {
        q: 'Does AWA supply Yalla to cafés and foodservice in bulk?',
        a: 'Yes! Yalla Drinks offers commercial 1kg bags and dispensing systems for cafes, hotels, beach bars, and restaurant chains across Egypt and the MENA region.',
      },
    ],
    reviews: [
      {
        author: 'Omar El-Shennawy',
        role: 'Specialty Coffee Barista, Alexandria',
        comment: 'Yalla Spanish Latte and Pistachio powders have revolutionized our summer iced menu. Prep time dropped from 3 minutes to 30 seconds with 100% flavor consistency.',
        rating: 5,
        avatarTag: 'OS',
      },
      {
        author: 'Farida Zaki',
        role: 'University Student & Coffee Enthusiast',
        comment: 'I save so much money making Yalla Frappes before lectures instead of spending 90 EGP at commercial drive-thrus every morning. It tastes even better!',
        rating: 5,
        avatarTag: 'FZ',
      },
      {
        author: 'Hany Roushdy',
        role: 'Beach Resort Beverage Manager',
        comment: 'Smoozy Pink Lemonade and Piña Colada are our top poolside sellers all summer. Guests love the vibrant colors and instant tropical taste.',
        rating: 5,
        avatarTag: 'HR',
      },
    ],
    retailers: [
      '/images/pages/products/retail/hyber1.png',
      '/images/pages/products/retail/hyber2.png',
      '/images/pages/products/retail/hyber3.png',
      '/images/pages/products/retail/hyber4.png',
      '/images/pages/products/retail/hyber5.png',
      '/images/pages/products/retail/hyber6.png',
      '/images/pages/products/retail/hyber7.png',
      '/images/pages/products/retail/hyber8.png',
    ],
  },
};
