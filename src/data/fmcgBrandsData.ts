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
  hoverImage?: string;
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
  priceEgp?: number;
  compareAtPriceEgp?: number;
  packType?: string;
  dietaryTags?: string[];
  barcode?: string;
  line?: string;
  buyUrl?: string;
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
      mainPackImage: '/images/products/Squ_easy collection/products/harrisa pouch.png',
      companionOrbitImages: [
        {
          image: '/images/products/Squ_easy collection/products/garlic pouch.png',
          scale: 0.7,
          top: '15%',
          left: '78%',
          zIndex: 5,
          animationDelay: 0.5,
        },
        {
          image: '/images/products/Squ_easy collection/products/garlic jar.png',
          scale: 0.65,
          top: '60%',
          left: '12%',
          zIndex: 15,
          animationDelay: 1.2,
        },
        {
          image: '/images/products/Squ_easy collection/products/12 gram garlic sachet front.png',
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
        heroImage: '/images/products/Squ_easy collection/products/harrisa pouch.png',
        sachetImage: '/images/products/Squ_easy collection/products/12 gram garlic sachet front.png',
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
        heroImage: '/images/products/Squ_easy collection/products/garlic pouch.png',
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
        heroImage: '/images/products/Squ_easy collection/products/garlic jar.png',
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
        heroImage: '/images/products/Squ_easy collection/products/12 gram garlic sachet front.png',
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
    "id": "squeasy-minced-garlic-jar-250g",
    "name": "Minced Garlic 250 g – Jar",
    "subName": "250g Glass Jar • 55 EGP",
    "image": "/artwork/squeasy/3d/squeasy-minced-garlic-jar.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-minced-garlic-jar.png",
    "categoryTag": "Minced Garlic Jar",
    "tagColor": "#EA580C",
    "weight": "250 g",
    "servings": "250 g",
    "flavorProfile": "Enhance your favorite recipes with the rich, authentic flavor of Minced Garlic 250g. Made from carefully selec...",
    "description": "Enhance your favorite recipes with the rich, authentic flavor of Minced Garlic 250g. Made from carefully selected garlic cloves, it delivers the fresh taste and aroma of garlic without the hassle of peeling or chopping. Perfect for marinades, sauces, soups, stir-fries, and everyday cooking, this ready-to-use minced garlic saves time while adding delicious flavor to every dish.",
    "tasteMeters": [
      {
        "label": "Garlic Pungency",
        "value": 96,
        "color": "#EA580C"
      },
      {
        "label": "Fresh Aroma",
        "value": 98,
        "color": "#FBBF24"
      },
      {
        "label": "Culinary Spread",
        "value": 95,
        "color": "#DC2626"
      },
      {
        "label": "Zero Prep Time",
        "value": 100,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "55 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "250g Glass Jar"
      },
      {
        "label": "Shelf Life",
        "value": "12 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "Ready to use",
      "No peeling or chopping",
      "Rich garlic flavor",
      "Saves time"
    ],
    "inStock": true,
    "priceEgp": 55,
    "packType": "250g Glass Jar",
    "dietaryTags": [],
    "line": "garlic",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/squeasy"
  },
  {
    "id": "squeasy-garlic-paste-250g",
    "name": "Garlic Paste 250 g",
    "subName": "250g Culinary Pouch • 55 EGP",
    "image": "/artwork/squeasy/3d/squeasy-garlic-paste-250g.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-garlic-paste-250g.png",
    "categoryTag": "Garlic Paste",
    "tagColor": "#EA580C",
    "weight": "250 g",
    "servings": "250 g",
    "flavorProfile": "Enhance your favorite recipes with the rich, authentic flavor of Squeasy Garlic Paste 250 g. Made from careful...",
    "description": "Enhance your favorite recipes with the rich, authentic flavor of Squeasy Garlic Paste 250 g. Made from carefully selected garlic, it delivers the fresh taste and aroma of garlic without the hassle of peeling or chopping. Perfect for marinades, sauces, soups, stir-fries, and everyday cooking, this ready-to-use garlic paste saves time while adding delicious flavor to every dish.",
    "tasteMeters": [
      {
        "label": "Garlic Pungency",
        "value": 96,
        "color": "#EA580C"
      },
      {
        "label": "Fresh Aroma",
        "value": 98,
        "color": "#FBBF24"
      },
      {
        "label": "Culinary Spread",
        "value": 95,
        "color": "#DC2626"
      },
      {
        "label": "Zero Prep Time",
        "value": 100,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "55 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "250g Culinary Pouch"
      },
      {
        "label": "Shelf Life",
        "value": "12 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "Ready to use",
      "No peeling or chopping",
      "Rich garlic flavor",
      "Saves time"
    ],
    "inStock": true,
    "priceEgp": 55,
    "packType": "250g Culinary Pouch",
    "dietaryTags": [],
    "line": "garlic",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/squeasy"
  },
  {
    "id": "squeasy-garlic-paste-sachets-50",
    "name": "Garlic Paste – Pack of 50 Sachets",
    "subName": "50 Single-Use Sachets • 55 EGP",
    "image": "/artwork/squeasy/3d/squeasy-garlic-paste-sachet.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-garlic-paste-sachet.png",
    "categoryTag": "Garlic Paste Sachets",
    "tagColor": "#EA580C",
    "weight": "250 g",
    "servings": "250 g",
    "flavorProfile": "Enjoy the rich, authentic taste of garlic with Garlic Paste in convenient single-use sachets. Made from high-q...",
    "description": "Enjoy the rich, authentic taste of garlic with Garlic Paste in convenient single-use sachets. Made from high-quality garlic, it adds bold flavor and aroma to your favorite dishes without the need for peeling or chopping. Perfect for marinades, sauces, soups, stir-fries, and everyday cooking, this pack of 50 sachets offers freshness, convenience, and consistent flavor in every serving.",
    "tasteMeters": [
      {
        "label": "Garlic Pungency",
        "value": 96,
        "color": "#EA580C"
      },
      {
        "label": "Fresh Aroma",
        "value": 98,
        "color": "#FBBF24"
      },
      {
        "label": "Culinary Spread",
        "value": 95,
        "color": "#DC2626"
      },
      {
        "label": "Zero Prep Time",
        "value": 100,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "55 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "50 Single-Use Sachets"
      },
      {
        "label": "Shelf Life",
        "value": "12 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "Single-use sachets",
      "No peeling or chopping",
      "Consistent flavor",
      "Fresh taste"
    ],
    "inStock": true,
    "priceEgp": 55,
    "packType": "50 Single-Use Sachets",
    "dietaryTags": [],
    "line": "garlic",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/squeasy"
  },
  {
    "id": "squeasy-harissa-hot-sauce-200g",
    "name": "Harissa Hot Sauce 200 g",
    "subName": "200g Squeeze Bottle • 65 EGP",
    "image": "/artwork/squeasy/3d/squeasy-harissa-pouch-200g.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-harissa-pouch-200g.png",
    "categoryTag": "Artisan Harissa Sauce",
    "tagColor": "#DC2626",
    "weight": "200 g",
    "servings": "200 g",
    "flavorProfile": "Turn up the heat with Harissa Hot Sauce 200g. Crafted from premium chili peppers and a flavorful blend of spic...",
    "description": "Turn up the heat with Harissa Hot Sauce 200g. Crafted from premium chili peppers and a flavorful blend of spices, this bold and aromatic sauce adds the perfect spicy kick to your favorite meals. Ideal for sandwiches, grilled meats, burgers, shawarma, pasta, pizzas, and dipping, it delivers a rich, authentic taste that spice lovers will enjoy.",
    "tasteMeters": [
      {
        "label": "Chili Heat",
        "value": 94,
        "color": "#DC2626"
      },
      {
        "label": "Smoky Depth",
        "value": 95,
        "color": "#EA580C"
      },
      {
        "label": "Spiced Balance",
        "value": 96,
        "color": "#FBBF24"
      },
      {
        "label": "Squeeze Precision",
        "value": 98,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "65 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "200g Squeeze Bottle"
      },
      {
        "label": "Shelf Life",
        "value": "12 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "Bold spicy flavor",
      "Premium chili peppers",
      "Versatile use",
      "Ready to use"
    ],
    "inStock": true,
    "priceEgp": 65,
    "packType": "200g Squeeze Bottle",
    "dietaryTags": [],
    "line": "harissa",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/squeasy"
  }
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
      mainPackImage: '/artwork/sweet-and-slim/3d/classic-100-box.png',
      companionOrbitImages: [
        {
          image: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 extra-View 4.png',
          scale: 0.75,
          top: '12%',
          left: '76%',
          zIndex: 5,
          animationDelay: 0.6,
        },
        {
          image: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim Spearmint Tin.png',
          scale: 0.6,
          top: '62%',
          left: '10%',
          zIndex: 15,
          animationDelay: 1.1,
        },
        {
          image: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim peach Tin.png',
          scale: 0.55,
          top: '66%',
          left: '84%',
          zIndex: 8,
          animationDelay: 0.9,
        },
        {
          image: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 100 sachets/100 Classic-View 1.png',
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
        heroImage: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 classic-View 4.png',
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
        heroImage: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 extra-View 4.png',
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
        heroImage: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 Stevia-View 1.png',
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
        heroImage: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim Spearmint Tin.png',
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
        heroImage: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim peach Tin.png',
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
        heroImage: '/images/products/Sweet & Slim Collection/S&S Hotchocolate/Box/S&S Hot chocolate-View 1.png',
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
    "id": "sweet-slim-100-sachet",
    "name": "Sweetner 100 Sachets Classic",
    "subName": "100 Sachets Box • 110 EGP • 6223004400155",
    "image": "/artwork/sweet-and-slim/3d/classic-100-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "Classic Sweetener",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "100 Sachets",
    "flavorProfile": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people wit...",
    "description": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people with diabetes and anyone following a healthy lifestyle.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "110 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "100 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400155"
      },
      {
        "label": "Dietary Profile",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "Tastes Like Sugar",
      "Corn & Sucralose Blend",
      "Aspartame-Free",
      "Diabetic & Diet Safe"
    ],
    "inStock": true,
    "priceEgp": 110,
    "compareAtPriceEgp": 125,
    "packType": "100 Sachets Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free",
      "Diabetic Safe",
      "Keto Friendly"
    ],
    "barcode": "6223004400155",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-400-sachet",
    "name": "Sweetner 400 Sachets Classic",
    "subName": "400 Sachets Economy Box • 300 EGP • 6223004400049",
    "image": "/artwork/sweet-and-slim/3d/classic-400-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "Classic Sweetener",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "400 Sachets",
    "flavorProfile": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people wit...",
    "description": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people with diabetes and anyone following a healthy lifestyle.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "300 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "400 Sachets Economy Box"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400049"
      },
      {
        "label": "Dietary Profile",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "Tastes Like Sugar",
      "Corn & Sucralose Blend",
      "Aspartame-Free",
      "Diabetic & Diet Safe"
    ],
    "inStock": true,
    "priceEgp": 300,
    "compareAtPriceEgp": 345,
    "packType": "400 Sachets Economy Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free",
      "Diabetic Safe",
      "Keto Friendly"
    ],
    "barcode": "6223004400049",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-50-sachet-extra",
    "name": "Sweetner 50 Sachets Extra",
    "subName": "50 Sachets Box • 85 EGP • 6223004400278",
    "image": "/artwork/sweet-and-slim/3d/extra-50-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/extra-sugar-sachet.png",
    "categoryTag": "Extra Sweetener",
    "tagColor": "#10B981",
    "weight": "1.4 gm/sachet",
    "servings": "50 Sachets",
    "flavorProfile": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people wit...",
    "description": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people with diabetes and anyone following a healthy lifestyle.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "85 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "50 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400278"
      },
      {
        "label": "Dietary Profile",
        "value": "Double Sweetness • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Double Sweetness",
      "1 Sachet = 4 Spoons",
      "Aspartame-Free",
      "Diabetic & Diet Safe"
    ],
    "inStock": true,
    "priceEgp": 85,
    "compareAtPriceEgp": 100,
    "packType": "50 Sachets Box",
    "dietaryTags": [
      "Double Sweetness",
      "Zero Calorie",
      "Sugar Free"
    ],
    "barcode": "6223004400278",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-200-sachet-stevia",
    "name": "Sweetner 200 Sachets Stevia",
    "subName": "200 Sachets Box • 270 EGP • 6223004400315",
    "image": "/artwork/sweet-and-slim/3d/stevia-200-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/stevia-sugar-sachet.png",
    "categoryTag": "Pure Stevia",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "200 Sachets",
    "flavorProfile": "Stevia Sugar is calorie-free, gluten-free, and aspartame-free, making it suitable for people following a keto ...",
    "description": "Stevia Sugar is calorie-free, gluten-free, and aspartame-free, making it suitable for people following a keto diet, people with diabetes, vegans, and anyone seeking a healthy lifestyle.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "270 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "200 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400315"
      },
      {
        "label": "Dietary Profile",
        "value": "100% Plant Based • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "100% Pure Stevia",
      "Zero Calories",
      "Aspartame-Free",
      "Diabetic & Keto Friendly"
    ],
    "inStock": true,
    "priceEgp": 270,
    "compareAtPriceEgp": 310,
    "packType": "200 Sachets Box",
    "dietaryTags": [
      "100% Plant Based",
      "Zero Calorie",
      "Keto Certified",
      "Aspartame Free"
    ],
    "barcode": "6223004400315",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-syrup-lite-300ml",
    "name": "Syrup Lite",
    "subName": "standard • 205 EGP • 6223004401312",
    "image": "/artwork/sweet-and-slim/3d/lite-syrup-bottle.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/lite-syrup-bottle.png",
    "categoryTag": "Classic Sweetener",
    "tagColor": "#10B981",
    "weight": "300 ml / bottle",
    "servings": "300 ml",
    "flavorProfile": "Lite Syrup is a low-calorie syrup specially made for preparing traditional Middle Eastern desserts. Ready to u...",
    "description": "Lite Syrup is a low-calorie syrup specially made for preparing traditional Middle Eastern desserts. Ready to use. Shelf Life: 12 Months. Net Volume: 300 ml.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "205 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "standard"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004401312"
      },
      {
        "label": "Dietary Profile",
        "value": "Low Calorie • Dessert Syrup"
      }
    ],
    "keyBenefits": [
      "Low Calorie",
      "Middle Eastern Desserts",
      "Ready to Use",
      "Sugar-Free"
    ],
    "inStock": true,
    "priceEgp": 205,
    "compareAtPriceEgp": 235,
    "packType": "standard",
    "dietaryTags": [
      "Low Calorie",
      "Dessert Syrup",
      "Sugar Free"
    ],
    "barcode": "6223004401312",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-classic-pouch-250g",
    "name": "Sweetner 250 Gm Classic",
    "subName": "250g Resealable Zipper Pouch • 140 EGP • 6223004400353",
    "image": "/artwork/sweet-and-slim/3d/classic-pouch.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-pouch.png",
    "categoryTag": "Classic Sweetener",
    "tagColor": "#10B981",
    "weight": "250 gm / pouch",
    "servings": "250 Gm",
    "flavorProfile": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people wit...",
    "description": "Sweetner made from corn and sucralose to deliver the taste of regular sugar, making it suitable for people with diabetes and anyone following a healthy lifestyle.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "140 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "250g Resealable Zipper Pouch"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400353"
      },
      {
        "label": "Dietary Profile",
        "value": "Baking Friendly • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Tastes Like Sugar",
      "Corn & Sucralose Blend",
      "Aspartame-Free",
      "Diabetic & Diet Safe"
    ],
    "inStock": true,
    "priceEgp": 140,
    "compareAtPriceEgp": 160,
    "packType": "250g Resealable Zipper Pouch",
    "dietaryTags": [
      "Baking Friendly",
      "Zero Calorie",
      "Sugar Free"
    ],
    "barcode": "6223004400353",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-stevia-pouch-250g",
    "name": "Sweetner 250 Gm Stevia",
    "subName": "250g Resealable Zipper Pouch • 160 EGP • 6223004400377",
    "image": "/artwork/sweet-and-slim/3d/stevia-pouch.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/stevia-pouch.png",
    "categoryTag": "Pure Stevia",
    "tagColor": "#10B981",
    "weight": "250 gm / pouch",
    "servings": "250 Gm",
    "flavorProfile": "Stevia Sugar is the perfect solution for reducing calorie intake, making all your drinks healthier without any...",
    "description": "Stevia Sugar is the perfect solution for reducing calorie intake, making all your drinks healthier without any bitterness. It is calorie-free, gluten-free, and aspartame-free, making it suitable for people following a keto diet, people with diabetes, vegans, and anyone pursuing a healthy lifestyle.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "160 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "250g Resealable Zipper Pouch"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400377"
      },
      {
        "label": "Dietary Profile",
        "value": "100% Plant Based • Baking Stevia"
      }
    ],
    "keyBenefits": [
      "100% Pure Stevia",
      "Zero Calories",
      "Aspartame-Free",
      "Diabetic & Keto Friendly"
    ],
    "inStock": true,
    "priceEgp": 160,
    "compareAtPriceEgp": 185,
    "packType": "250g Resealable Zipper Pouch",
    "dietaryTags": [
      "100% Plant Based",
      "Baking Stevia",
      "Keto Friendly"
    ],
    "barcode": "6223004400377",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-classic-50-sachet",
    "name": "Sweet & Slim Classic 50 Sachets",
    "subName": "50 Sachets Box • 65 EGP • 6223004400001",
    "image": "/artwork/sweet-and-slim/3d/classic-50-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "Classic Sweetener",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "50 Sachets",
    "flavorProfile": "Handy 50-sachet pack, your everyday companion for coffee and tea at home and work.",
    "description": "Handy 50-sachet pack, your everyday companion for coffee and tea at home and work.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "65 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "50 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400001"
      },
      {
        "label": "Dietary Profile",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "Verified Quality",
      "AWA Manufacturing"
    ],
    "inStock": true,
    "priceEgp": 65,
    "packType": "50 Sachets Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free",
      "Diabetic Safe"
    ],
    "barcode": "6223004400001",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-classic-25-sachet",
    "name": "Sweet & Slim Classic 25 Sachets",
    "subName": "25 Sachets Box • 35 EGP • 6223004400070",
    "image": "/artwork/sweet-and-slim/3d/classic-25-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "Classic Sweetener",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "25 Sachets",
    "flavorProfile": "Pocket-friendly starter pack of 25 sachets for on-the-go sweetness.",
    "description": "Pocket-friendly starter pack of 25 sachets for on-the-go sweetness.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "35 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "25 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400070"
      },
      {
        "label": "Dietary Profile",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "Verified Quality",
      "AWA Manufacturing"
    ],
    "inStock": true,
    "priceEgp": 35,
    "packType": "25 Sachets Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free"
    ],
    "barcode": "6223004400070",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-stevia-50-sachet",
    "name": "Sweet & Slim Stevia 50 Sachets",
    "subName": "50 Sachets Box • 75 EGP • 6223004400179",
    "image": "/artwork/sweet-and-slim/3d/stevia-50-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/stevia-sugar-sachet.png",
    "categoryTag": "Pure Stevia",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "50 Sachets",
    "flavorProfile": "100% plant-based stevia sachets in a convenient 50-pack.",
    "description": "100% plant-based stevia sachets in a convenient 50-pack.",
    "tasteMeters": [
      {
        "label": "Sweetness Purity",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "Solubility Speed",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Sugar Match",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "Zero Aftertaste",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "75 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "50 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004400179"
      },
      {
        "label": "Dietary Profile",
        "value": "100% Plant Based • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Verified Quality",
      "AWA Manufacturing"
    ],
    "inStock": true,
    "priceEgp": 75,
    "packType": "50 Sachets Box",
    "dietaryTags": [
      "100% Plant Based",
      "Zero Calorie",
      "Keto Certified"
    ],
    "barcode": "6223004400179",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-strawberry",
    "name": "Sugar free mints with a refreshing Strawberry Flavor",
    "subName": "boxes • 65 EGP • 6223004404290",
    "image": "/artwork/sweet-and-slim/3d/mints-strawberry-tin.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "Sugar-Free Mints",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "Sugar-free candy. Strawberry flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No afte...",
    "description": "Sugar-free candy. Strawberry flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftertaste. Long-lasting freshness.",
    "tasteMeters": [
      {
        "label": "Freshness Burst",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "Natural Essence",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "Long-Lasting Taste",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "Sugar-Free Crisp",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "65 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404290"
      },
      {
        "label": "Dietary Profile",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Zero Sugar",
      "Tooth-Friendly",
      "Zero Calories",
      "Long-Lasting Freshness"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Tooth Friendly"
    ],
    "barcode": "6223004404290",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-peach",
    "name": "Sugar free mints with a refreshing Peach Flavor",
    "subName": "boxes • 65 EGP • 6223004404306",
    "image": "/artwork/sweet-and-slim/3d/mints-peach-tin.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "Sugar-Free Mints",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "Sugar-free candy. Peach flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftertast...",
    "description": "Sugar-free candy. Peach flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftertaste. Long-lasting freshness.",
    "tasteMeters": [
      {
        "label": "Freshness Burst",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "Natural Essence",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "Long-Lasting Taste",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "Sugar-Free Crisp",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "65 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404306"
      },
      {
        "label": "Dietary Profile",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Zero Sugar",
      "Tooth-Friendly",
      "Zero Calories",
      "Long-Lasting Freshness"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Tooth Friendly"
    ],
    "barcode": "6223004404306",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-spearmint",
    "name": "Sugar free mints with a refreshing SpearMint Flavor",
    "subName": "boxes • 65 EGP • 6223004404313",
    "image": "/artwork/sweet-and-slim/3d/mints-spearmint-tin.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "Sugar-Free Mints",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "Sugar-free candy. Spearmint flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No after...",
    "description": "Sugar-free candy. Spearmint flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftertaste. Long-lasting freshness.",
    "tasteMeters": [
      {
        "label": "Freshness Burst",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "Natural Essence",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "Long-Lasting Taste",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "Sugar-Free Crisp",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "65 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404313"
      },
      {
        "label": "Dietary Profile",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Zero Sugar",
      "Tooth-Friendly",
      "Zero Calories",
      "Long-Lasting Freshness"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Maximum Freshness"
    ],
    "barcode": "6223004404313",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-orange",
    "name": "Sugar free mints with a refreshing Orange Flavor",
    "subName": "boxes • 65 EGP • 6223004405556",
    "image": "/artwork/sweet-and-slim/3d/mints-orange-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "Sugar-Free Mints",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "Sugar-free candy. Orange flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftertas...",
    "description": "Sugar-free candy. Orange flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftertaste. Long-lasting freshness.",
    "tasteMeters": [
      {
        "label": "Freshness Burst",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "Natural Essence",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "Long-Lasting Taste",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "Sugar-Free Crisp",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "65 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405556"
      },
      {
        "label": "Dietary Profile",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Zero Sugar",
      "Tooth-Friendly",
      "Zero Calories",
      "Long-Lasting Freshness"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Citrus Burst"
    ],
    "barcode": "6223004405556",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-cinnamon",
    "name": "Sugar free mints with a refreshing Cinnamon Flavor",
    "subName": "boxes • 65 EGP • 6223004405563",
    "image": "/artwork/sweet-and-slim/3d/mints-cinnamon-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "Sugar-Free Mints",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "Sugar-free candy. Cinnamon flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftert...",
    "description": "Sugar-free candy. Cinnamon flavor. Zero calories. Tooth-friendly. Suitable for people with diabetes. No aftertaste. Long-lasting freshness.",
    "tasteMeters": [
      {
        "label": "Freshness Burst",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "Natural Essence",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "Long-Lasting Taste",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "Sugar-Free Crisp",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "65 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "24 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405563"
      },
      {
        "label": "Dietary Profile",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "Zero Sugar",
      "Tooth-Friendly",
      "Zero Calories",
      "Long-Lasting Freshness"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Warm Spice"
    ],
    "barcode": "6223004405563",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-3in1-instant-coffee-classic",
    "name": "3in1 Instant Coffee Sugar Free - Classic Sachet (15g)",
    "subName": "boxes • 204 EGP • 6223004405143",
    "image": "/artwork/sweet-and-slim/3d/3in1-classic-box.jpg",
    "hoverImage": "/artwork/sweet-and-slim/3d/3in1-classic-sachet.png",
    "categoryTag": "Sugar-Free 3in1 Coffee",
    "tagColor": "#8B5CF6",
    "weight": "15 gm/sachet",
    "servings": "12 Sachets",
    "flavorProfile": "Instant coffee, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 57...",
    "description": "Instant coffee, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 57 calorie, with one spoon s&s classsic sugar",
    "tasteMeters": [
      {
        "label": "Rich Roast & Cocoa",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Creamy Viscosity",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "Smoothness",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Diet Balance",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "204 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405143"
      },
      {
        "label": "Dietary Profile",
        "value": "Zero Sugar • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "Hydrogenated-Oil Free",
      "Coconut Oil Creamer",
      "57 Calories",
      "Trans-Fat Free"
    ],
    "inStock": true,
    "priceEgp": 204,
    "compareAtPriceEgp": 235,
    "packType": "boxes",
    "dietaryTags": [
      "Zero Sugar",
      "No Hydrogenated Oils",
      "57 Calories",
      "Trans Fat Free"
    ],
    "barcode": "6223004405143",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-3in1-instant-coffee-extra",
    "name": "3in1 Instant Coffee Sugar Free - Extra Sachet (15g)",
    "subName": "boxes • 216 EGP • 6223004405150",
    "image": "/artwork/sweet-and-slim/3d/3in1-extra-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/3in1-extra-sachet.png",
    "categoryTag": "Sugar-Free 3in1 Coffee",
    "tagColor": "#8B5CF6",
    "weight": "15 gm/sachet",
    "servings": "12 Sachets",
    "flavorProfile": "Instant coffee, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 57...",
    "description": "Instant coffee, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 57 calorie, with two spoons s&s classsic sugar",
    "tasteMeters": [
      {
        "label": "Rich Roast & Cocoa",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Creamy Viscosity",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "Smoothness",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Diet Balance",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "216 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405150"
      },
      {
        "label": "Dietary Profile",
        "value": "Extra Sweet • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "Hydrogenated-Oil Free",
      "Coconut Oil Creamer",
      "57 Calories",
      "Trans-Fat Free"
    ],
    "inStock": true,
    "priceEgp": 216,
    "compareAtPriceEgp": 250,
    "packType": "boxes",
    "dietaryTags": [
      "Extra Sweet",
      "No Hydrogenated Oils",
      "57 Calories",
      "Zero Sugar"
    ],
    "barcode": "6223004405150",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-hot-chocolate-classic",
    "name": "Hot Chocolate –Classic- Sugar Free (25g Sachet)",
    "subName": "boxes • 180 EGP • 6223004404344",
    "image": "/artwork/sweet-and-slim/3d/hot-chocolate-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/hot-chocolate-sachet.png",
    "categoryTag": "Sugar-Free Hot Chocolate",
    "tagColor": "#8B5CF6",
    "weight": "25 gm/ sachet",
    "servings": "10 Sachets",
    "flavorProfile": "Hot chocolate, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 78 ...",
    "description": "Hot chocolate, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 78 calorie, classic chocolate flavor",
    "tasteMeters": [
      {
        "label": "Rich Roast & Cocoa",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Creamy Viscosity",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "Smoothness",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Diet Balance",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "180 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404344"
      },
      {
        "label": "Dietary Profile",
        "value": "Zero Sugar • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "Hydrogenated-Oil Free",
      "Premium Cocoa",
      "78 Calories",
      "Trans-Fat Free"
    ],
    "inStock": true,
    "priceEgp": 180,
    "compareAtPriceEgp": 205,
    "packType": "boxes",
    "dietaryTags": [
      "Zero Sugar",
      "No Hydrogenated Oils",
      "78 Calories"
    ],
    "barcode": "6223004404344",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-hot-chocolate-hazelnut",
    "name": "Hot Chocolate – Hazelnut - Sugar Free (25g Sachet)",
    "subName": "boxes • 180 EGP • 6223004404351",
    "image": "/artwork/sweet-and-slim/3d/hot-chocolate-hazelnut-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/hot-chocolate-hazelnut-sachet.png",
    "categoryTag": "Sugar-Free Hot Chocolate",
    "tagColor": "#8B5CF6",
    "weight": "25 gm/ sachet",
    "servings": "10 Sachets",
    "flavorProfile": "Hot chocolate, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 78 ...",
    "description": "Hot chocolate, trans fat free, hydrogenated oil free, creamer alternative is coconut oil and skimmed milk, 78 calorie, hazelnut flavor",
    "tasteMeters": [
      {
        "label": "Rich Roast & Cocoa",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Creamy Viscosity",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "Smoothness",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Diet Balance",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "180 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404351"
      },
      {
        "label": "Dietary Profile",
        "value": "Zero Sugar • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "Hydrogenated-Oil Free",
      "Premium Cocoa",
      "78 Calories",
      "Trans-Fat Free"
    ],
    "inStock": true,
    "priceEgp": 180,
    "compareAtPriceEgp": 205,
    "packType": "boxes",
    "dietaryTags": [
      "Zero Sugar",
      "No Hydrogenated Oils",
      "78 Calories"
    ],
    "barcode": "6223004404351",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-smoothie-pina-colada-inulin",
    "name": "Pina Colada Smoothie fortified with Inulin 20g",
    "subName": "boxes • 300 EGP • 6223004405679",
    "image": "/artwork/sweet-and-slim/3d/smoothie-pina-colada-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/smoothie-pina-colada-sachet.png",
    "categoryTag": "Functional Smoothie",
    "tagColor": "#06B6D4",
    "weight": "20 gm/sachet",
    "servings": "10 Sachets",
    "flavorProfile": "Smoothie with coconut and pineapple flavor fortifed with 5 gm inulin for better digestion and gut health, swee...",
    "description": "Smoothie with coconut and pineapple flavor fortifed with 5 gm inulin for better digestion and gut health, sweetend by s&s stevia sugar",
    "tasteMeters": [
      {
        "label": "Fruit Vibrancy",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Functional Wellness",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "Smoothie Texture",
        "value": 94,
        "color": "#10B981"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#3B82F6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "300 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405679"
      },
      {
        "label": "Dietary Profile",
        "value": "Prebiotic Inulin • Gut Health"
      }
    ],
    "keyBenefits": [
      "Fortified with 5g Inulin",
      "Digestive & Gut Health",
      "Stevia Sweetened",
      "Keto Friendly"
    ],
    "inStock": true,
    "priceEgp": 300,
    "compareAtPriceEgp": 345,
    "packType": "boxes",
    "dietaryTags": [
      "Prebiotic Inulin",
      "Gut Health",
      "Sugar Free",
      "Keto Friendly"
    ],
    "barcode": "6223004405679",
    "line": "cold-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  },
  {
    "id": "sweet-slim-smoothie-mixed-berries-collagen",
    "name": "Mixed Berries Smoothie fortified with Vitamin C & Hyaluronic Acid 20g",
    "subName": "boxes • 300 EGP • 6223004405655",
    "image": "/artwork/sweet-and-slim/3d/smoothie-mixed-berry-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/smoothie-mixed-berry-sachet.png",
    "categoryTag": "Functional Smoothie",
    "tagColor": "#06B6D4",
    "weight": "20 gm/sachet",
    "servings": "10 Sachets",
    "flavorProfile": "Smoothie with mixed berries fortified with 125 mg hyaluronic acid and 200 mg vitamin c for skin hydration and ...",
    "description": "Smoothie with mixed berries fortified with 125 mg hyaluronic acid and 200 mg vitamin c for skin hydration and glow, sweetend by s&s stevia sugar",
    "tasteMeters": [
      {
        "label": "Fruit Vibrancy",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "Functional Wellness",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "Smoothie Texture",
        "value": 94,
        "color": "#10B981"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#3B82F6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "300 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "boxes"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405655"
      },
      {
        "label": "Dietary Profile",
        "value": "Skin Glow • Hyaluronic Acid"
      }
    ],
    "keyBenefits": [
      "125mg Hyaluronic Acid",
      "200mg Vitamin C",
      "Skin Hydration & Glow",
      "Stevia Sweetened"
    ],
    "inStock": true,
    "priceEgp": 300,
    "compareAtPriceEgp": 345,
    "packType": "boxes",
    "dietaryTags": [
      "Skin Glow",
      "Hyaluronic Acid",
      "Vitamin C",
      "Antioxidant",
      "Sugar Free"
    ],
    "barcode": "6223004405655",
    "line": "cold-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/sweet-and-slim"
  }
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
      mainPackImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/spanish latte new-View 1.png',
      companionOrbitImages: [
        {
          image: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/Pistachio new-View 1.png',
          scale: 0.75,
          top: '10%',
          left: '78%',
          zIndex: 5,
          animationDelay: 0.5,
        },
        {
          image: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/pink lemonade-View 1.png',
          scale: 0.7,
          top: '60%',
          left: '10%',
          zIndex: 15,
          animationDelay: 1.0,
        },
        {
          image: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets spanish latte new-View 1.png',
          scale: 0.6,
          top: '68%',
          left: '84%',
          zIndex: 8,
          animationDelay: 0.7,
        },
        {
          image: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/Pina Colada-View 1.png',
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
        heroImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/spanish latte new-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets spanish latte new-View 1.png',
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
        heroImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/Pistachio new-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets pistachio new-View 1.png',
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
        heroImage: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/pink lemonade-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Smoozy/Sachets/sachets pink lemonade new-View 1.png',
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
        heroImage: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/Pina Colada-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Smoozy/Sachets/sachets pina colada new-View 1.png',
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
        heroImage: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/Mojito-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Smoozy/Sachets/sachets mojito new-View 1.png',
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
        heroImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/white mocha new-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets white mocha new-View 1.png',
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
    "id": "yalla-frappit-caramel-box-10",
    "name": "Yalla Frapp it Caramel box 10 sachets",
    "subName": "10 Sachets Box • 200 EGP • 6223004404573",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-caramel-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/caramel.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Cool down with the irresistible taste of Caramel Frapp IT. This creamy caramel frappé mix blends effortlessly ...",
    "description": "Cool down with the irresistible taste of Caramel Frapp IT. This creamy caramel frappé mix blends effortlessly with ice to create a smooth, refreshing beverage with a rich café-quality flavor in every sip.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "200 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404573"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404573",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-caramel-sugar-free-box-10",
    "name": "Yalla Frapp it Caramel Sugar-free box 10 Sachets",
    "subName": "10 Sachets Box • 220 EGP • 6223004404986",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-caramel-sugar-free-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/caramel-zero-sugar.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Enjoy all the rich caramel flavor you love with fewer calories. Caramel Sweet & Slim Frapp IT delivers a cream...",
    "description": "Enjoy all the rich caramel flavor you love with fewer calories. Caramel Sweet & Slim Frapp IT delivers a creamy, refreshing frappé that blends perfectly with ice for a light yet indulgent café-style experience.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "220 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404986"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 220,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404986",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-coffee-box-10",
    "name": "Yalla Frapp it Coffee box 10 sachets",
    "subName": "10 Sachets Box • 200 EGP • 6223004404580",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-coffee-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/coffee.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Refresh your day with the bold taste of Coffee Frapp IT. Crafted with a rich coffee flavor, this smooth frappé...",
    "description": "Refresh your day with the bold taste of Coffee Frapp IT. Crafted with a rich coffee flavor, this smooth frappé mix blends effortlessly with ice to create a perfectly chilled café-style drink every time.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "200 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404580"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404580",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-coffee-sugar-free-box-10",
    "name": "Yalla Frapp it coffee Sugar-free box 10 sachets",
    "subName": "10 Sachets Box • 220 EGP • 6223004404979",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-coffee-sugar-free-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/coffee-zero-sugar.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Savor the authentic taste of coffee without the extra calories. Coffee Sweet & Slim Frapp IT creates a smooth,...",
    "description": "Savor the authentic taste of coffee without the extra calories. Coffee Sweet & Slim Frapp IT creates a smooth, refreshing iced coffee frappé that's light, creamy, and full of café-inspired flavor.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "220 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404979"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 220,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404979",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-mocha-box-10",
    "name": "Yalla Frapp it Mocha box 10 sachets",
    "subName": "10 Sachets Box • 200 EGP • 6223004404597",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-mocha-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/mocha.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Treat yourself to the perfect blend of coffee and chocolate with Mocha Frapp IT. This creamy frappé mix create...",
    "description": "Treat yourself to the perfect blend of coffee and chocolate with Mocha Frapp IT. This creamy frappé mix creates a rich, velvety beverage that's refreshingly smooth and packed with indulgent mocha flavor.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "200 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404597"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404597",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-white-mocha-box-10",
    "name": "Yalla Frapp it White Mocha  box 10 sachets",
    "subName": "10 Sachets Box • 200 EGP • 6223004404542",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-white-mocha-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/white-mocha.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Indulge in the smooth elegance of White Mocha Frapp IT. Combining creamy white chocolate with rich coffee note...",
    "description": "Indulge in the smooth elegance of White Mocha Frapp IT. Combining creamy white chocolate with rich coffee notes, this refreshing frappé delivers a luxurious café-style experience every time.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "200 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404542"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404542",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-hazelnut-chocolate-box-10",
    "name": "Yalla Frapp it Hazelnut-Chocolate box 10 sachets",
    "subName": "10 Sachets Box • 200 EGP • 6223004404566",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-hazelnut-chocolate-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/chocolate-hazelnut.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Savor the irresistible blend of Hazelnut Chocolate Frapp IT. Rich chocolate and roasted hazelnut flavors come ...",
    "description": "Savor the irresistible blend of Hazelnut Chocolate Frapp IT. Rich chocolate and roasted hazelnut flavors come together in a smooth, creamy frappé, delivering a deliciously indulgent café-style experience in every sip.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "200 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404566"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404566",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-pistachio-latte-box-10",
    "name": "Yalla Frapp it  Pistachio Latte box 10 sachets",
    "subName": "10 Sachets Box • 230 EGP • 6223004404559",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-pistachio-latte-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/pistachio-latte-2.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Experience the rich sophistication of Pistachio Latte Frapp IT. Creamy pistachio blends perfectly with smooth ...",
    "description": "Experience the rich sophistication of Pistachio Latte Frapp IT. Creamy pistachio blends perfectly with smooth coffee notes to create a refreshing, velvety frappé with a luxurious café-style taste.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "230 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404559"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 230,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404559",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-coffee-toffee-box-10",
    "name": "Yalla Frapp it Cofee toffee box 10 sachets",
    "subName": "10 Sachets Box • 200 EGP • 6223004404610",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-coffee-toffee-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/coffee-toffee.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Enjoy the perfect harmony of Coffee Toffee Frapp IT. Rich coffee meets buttery toffee in a smooth, creamy frap...",
    "description": "Enjoy the perfect harmony of Coffee Toffee Frapp IT. Rich coffee meets buttery toffee in a smooth, creamy frappé, delivering a sweet and satisfying café-style experience. Conveniently packed in a box of 10 sachets for enjoyment anytime.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "200 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404610"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404610",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-vanilla-box-10",
    "name": "Yalla Frapp it Vanilla box 10 sachets",
    "subName": "10 Sachets Box • 200 EGP • 6223004404603",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-vanilla-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/vanilla.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Escape to the tropics with Mango Frapp IT. Bursting with sweet, juicy mango flavor, this refreshing frappé ble...",
    "description": "Escape to the tropics with Mango Frapp IT. Bursting with sweet, juicy mango flavor, this refreshing frappé blends effortlessly with ice for a vibrant, fruity drink that's perfect for any time of day.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "200 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404603"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404603",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-frappit-spanish-latte-box-10",
    "name": "Yalla Frapp it Spanish Latte box 10 sachets",
    "subName": "10 Sachets Box • 220 EGP • 6223004404535",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-spanish-latte-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/spanish-latte.png",
    "categoryTag": "Instant Frappe",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Delight in the rich taste of Spanish Latte Frapp IT. Blending smooth coffee with creamy, sweet milk notes, thi...",
    "description": "Delight in the rich taste of Spanish Latte Frapp IT. Blending smooth coffee with creamy, sweet milk notes, this refreshing frappé delivers a perfectly balanced café-style experience that's irresistibly smooth and satisfying.",
    "tasteMeters": [
      {
        "label": "Taste Intensity",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "Microfoam Head",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "Smoothness",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "Cold Solubility",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "220 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404535"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 220,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404535",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-mixed-berries-box-10",
    "name": "Yalla Smoozy Mixed Berries box 10 sachets",
    "subName": "10 Sachets Box • 210 EGP • 6223004404764",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-mixed-berries-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/mixed-berries.png",
    "categoryTag": "Powdered Drink Mix",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Bursting with the vibrant taste of ripe berries, Yalla Smoozy Mixed Berries delivers a delicious blend of swee...",
    "description": "Bursting with the vibrant taste of ripe berries, Yalla Smoozy Mixed Berries delivers a delicious blend of sweet and tangy flavors. This smoothie mix blends effortlessly into a smooth, icy drink that's refreshingly fruity and perfect for any time of the day.",
    "tasteMeters": [
      {
        "label": "Fruit Intensity",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "Velvet Texture",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "Refreshing Acidity",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "Slush Stability",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "210 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404764"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404764",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-mojito-box-10",
    "name": "Yalla Smoozy Mojito box 10 sachets",
    "subName": "10 Sachets Box • 210 EGP • 6223004404740",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-mojito-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/mojito.png",
    "categoryTag": "Powdered Drink Mix",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Cool down with the refreshing taste of Yalla Smoozy Mojito. Infused with the zesty flavor of lime and the cool...",
    "description": "Cool down with the refreshing taste of Yalla Smoozy Mojito. Infused with the zesty flavor of lime and the cool freshness of mint, this smoothie mix blends effortlessly into a smooth, icy drink that's crisp, invigorating, and perfect for every occasion.",
    "tasteMeters": [
      {
        "label": "Fruit Intensity",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "Velvet Texture",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "Refreshing Acidity",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "Slush Stability",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "210 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404740"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404740",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-pina-colada-box-10",
    "name": "Yalla Smoozy Pina colada box 10 sachets",
    "subName": "10 Sachets Box • 210 EGP • 6223004404757",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-pina-colada-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/pina-colada.png",
    "categoryTag": "Powdered Drink Mix",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Escape to the tropics with Yalla Smoozy Piña Colada. Bursting with the refreshing taste of juicy pineapple and...",
    "description": "Escape to the tropics with Yalla Smoozy Piña Colada. Bursting with the refreshing taste of juicy pineapple and creamy coconut, this smoothie mix blends effortlessly into a smooth, icy drink that's perfect for cooling down any time of the day.",
    "tasteMeters": [
      {
        "label": "Fruit Intensity",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "Velvet Texture",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "Refreshing Acidity",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "Slush Stability",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "210 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404757"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404757",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-pink-lemonade-box-10",
    "name": "Yalla Smoozy Pink Lemonade box 10 sachets",
    "subName": "10 Sachets Box • 210 EGP • 6223004404733",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-pink-lemonade-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/pink-lemonade.png",
    "categoryTag": "Powdered Drink Mix",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Refresh your day with Yalla Smoozy Pink Lemonade. Bursting with the bright citrus flavor of lemons and a touch...",
    "description": "Refresh your day with Yalla Smoozy Pink Lemonade. Bursting with the bright citrus flavor of lemons and a touch of fruity sweetness, this smoothie mix blends effortlessly into a smooth, icy drink that's crisp, refreshing, and full of vibrant flavor.",
    "tasteMeters": [
      {
        "label": "Fruit Intensity",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "Velvet Texture",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "Refreshing Acidity",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "Slush Stability",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "210 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004404733"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404733",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-koffi-caffe-latte-box-10",
    "name": "Yalla Koffi Caffe latte box 10 Sachets",
    "subName": "10 Sachets Box • 180 EGP • 6223004405341",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-caffe-latte-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-cofe.png",
    "categoryTag": "Premium Instant Coffee",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "Enjoy the rich taste of Coffee with Yalla Koffi. Crafted for a delicious café-style experience that's easy to ...",
    "description": "Enjoy the rich taste of Coffee with Yalla Koffi. Crafted for a delicious café-style experience that's easy to prepare and perfect for everyday enjoyment.",
    "tasteMeters": [
      {
        "label": "Arabica Roast",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Silky Foam",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "Aroma Intensity",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "Cream Balance",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "180 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405341"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405341",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-koffi-caramel-box-10",
    "name": "Yalla Koffi Caramel box 10 Sachets",
    "subName": "10 Sachets Box • 180 EGP • 6223004405358",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-caramel-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-caramel.png",
    "categoryTag": "Premium Instant Coffee",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "Enjoy the rich taste of Caramel with Yalla Koffi. Crafted for a delicious café-style experience that's easy to...",
    "description": "Enjoy the rich taste of Caramel with Yalla Koffi. Crafted for a delicious café-style experience that's easy to prepare and perfect for everyday enjoyment.",
    "tasteMeters": [
      {
        "label": "Arabica Roast",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Silky Foam",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "Aroma Intensity",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "Cream Balance",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "180 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405358"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405358",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-koffi-hazelnut-box-10",
    "name": "Yalla Koffi Hazelnut box 10 Sachets",
    "subName": "10 Sachets Box • 180 EGP • 6223004405372",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-hazelnut-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-hazelnut.png",
    "categoryTag": "Premium Instant Coffee",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "Enjoy the rich taste of Hazelnut with Yalla Koffi. Crafted for a delicious café-style experience that's easy t...",
    "description": "Enjoy the rich taste of Hazelnut with Yalla Koffi. Crafted for a delicious café-style experience that's easy to prepare and perfect for everyday enjoyment.",
    "tasteMeters": [
      {
        "label": "Arabica Roast",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Silky Foam",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "Aroma Intensity",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "Cream Balance",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "180 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405372"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405372",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-koffi-mocha-box-10",
    "name": "Yalla Koffi Mocha box 10 Sachets",
    "subName": "10 Sachets Box • 180 EGP • 6223004405365",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-mocha-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-mocha.png",
    "categoryTag": "Premium Instant Coffee",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "Enjoy the rich taste of Mocha with Yalla Koffi. Crafted for a delicious café-style experience that's easy to p...",
    "description": "Enjoy the rich taste of Mocha with Yalla Koffi. Crafted for a delicious café-style experience that's easy to prepare and perfect for everyday enjoyment.",
    "tasteMeters": [
      {
        "label": "Arabica Roast",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "Silky Foam",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "Aroma Intensity",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "Cream Balance",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "180 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "6223004405365"
      }
    ],
    "keyBenefits": [
      "Easy to prepare",
      "Premium taste",
      "Great texture"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405365",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-choco-classic-box-10",
    "name": "Yalla Choco Classic Italian Hot Chocolate box 10 sachets",
    "subName": "10 Sachets Box • 195 EGP",
    "image": "/artwork/yalla-drinks/3d/yalla-choco-classic-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-choco-hot-chocolate.png",
    "categoryTag": "Premium Instant Hot Chocolate",
    "tagColor": "#D97706",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Indulge in rich, thick Italian-style barista hot chocolate crafted with premium Dutch cocoa for a velvety smoo...",
    "description": "Indulge in rich, thick Italian-style barista hot chocolate crafted with premium Dutch cocoa for a velvety smooth drinking experience in seconds.",
    "tasteMeters": [
      {
        "label": "Dutch Cocoa Richness",
        "value": 98,
        "color": "#D97706"
      },
      {
        "label": "Thick Body",
        "value": 97,
        "color": "#8B5CF6"
      },
      {
        "label": "Italian Heritage",
        "value": 96,
        "color": "#DC2626"
      },
      {
        "label": "Sweet Harmony",
        "value": 94,
        "color": "#F59E0B"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "195 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "Thick Italian Style",
      "Premium Dutch Cocoa",
      "Instant Velvet Microtexture"
    ],
    "inStock": true,
    "priceEgp": 195,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "line": "choco",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  },
  {
    "id": "yalla-choco-hazelnut-box-10",
    "name": "Yalla Choco Hazelnut Italian Hot Chocolate box 10 sachets",
    "subName": "10 Sachets Box • 195 EGP",
    "image": "/artwork/yalla-drinks/3d/yalla-choco-hazelnut-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-choco-hot-chocolate-hazelnut.png",
    "categoryTag": "Premium Instant Hot Chocolate",
    "tagColor": "#D97706",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "Decadent barista hot chocolate infused with toasted hazelnut notes and velvety cocoa microfoam for cozy luxury...",
    "description": "Decadent barista hot chocolate infused with toasted hazelnut notes and velvety cocoa microfoam for cozy luxury in every cup.",
    "tasteMeters": [
      {
        "label": "Dutch Cocoa Richness",
        "value": 98,
        "color": "#D97706"
      },
      {
        "label": "Thick Body",
        "value": 97,
        "color": "#8B5CF6"
      },
      {
        "label": "Italian Heritage",
        "value": 96,
        "color": "#DC2626"
      },
      {
        "label": "Sweet Harmony",
        "value": 94,
        "color": "#F59E0B"
      }
    ],
    "nutritionFacts": [
      {
        "label": "Official Price",
        "value": "195 EGP"
      },
      {
        "label": "Packaging Format",
        "value": "10 Sachets Box"
      },
      {
        "label": "Shelf Life",
        "value": "18 months"
      },
      {
        "label": "Barcode (EAN)",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "Toasted Hazelnut Infusion",
      "Rich Velvety Texture",
      "No Machine Needed"
    ],
    "inStock": true,
    "priceEgp": 195,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "line": "choco",
    "buyUrl": "https://awa-shopping-chi.vercel.app/en/yalla-drinks"
  }
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

export const FMCG_BRANDS_AR: Record<'squeasy' | 'sweet-and-slim' | 'yalla-drinks', FmcgBrandData> = {
  /* ═══════════════════════════════════════════════════════════════ */
  /* 1. SQUEASY CULINARY PASTES & POUCHES (ARABIC)                   */
  /* ═══════════════════════════════════════════════════════════════ */
  'squeasy': {
    id: 'squeasy',
    brandName: 'SquEasy',
    tagline: 'معجون الطهي الحرفي وعبوات الضغط الابتكارية',
    slogan: 'ثوم وهريسة طبيعية 100% بدون عناء التقشير أو الفوضى في المطبخ.',
    vibeDescription: 'ثورة طهي حيوية تمنح الطهاة والعائلات ثوماً مصرياً طازجاً وفلفلاً مشوياً فائق النكهة بعبوات ضغط سهلة الاستخدام بدون فوضى أو مواد حافظة صناعية.',
    vibeKeywords: ['طبيعي 100%', 'خالي من المواد الحافظة', 'فوهة مانعة للتسريب', 'جودة المطاعم', 'بدون رائحة باليدين'],
    theme: {
      primary: '#EA580C',
      secondary: '#DC2626',
      accent: '#FBBF24',
      darkBg: '#130803',
      lightBg: '#FFF7ED',
      gradientHero: 'radial-gradient(ellipse at 60% 40%, rgba(234, 88, 12, 0.4) 0%, rgba(220, 38, 38, 0.15) 50%, #130803 100%)',
      buttonGlow: '0 0 35px rgba(234, 88, 12, 0.6)',
    },
    heroSticky: {
      eyebrow: 'ابتكارات AWA لحلول الطهي',
      headline: 'اضغط واستمتع بالنكهة الحقيقية.',
      subheadline: 'هريسة فلفل البحر المتوسط الحارة ومعجون الثوم المصري المفروم في أكياس ضغط ابتكارية قائمة مانعة للتنقيط. نكهة أصيلة بدون تقشير أو تقطيع أو فوضى.',
      ctaPrimary: 'استكشف منتجات SquEasy',
      ctaSecondary: 'طلب عبوات الفنادق والمطاعم',
      mainPackImage: '/images/products/Squ_easy collection/products/harrisa pouch.png',
      companionOrbitImages: [
        {
          image: '/images/products/Squ_easy collection/products/garlic pouch.png',
          scale: 0.7,
          top: '15%',
          left: '78%',
          zIndex: 5,
          animationDelay: 0.5,
        },
        {
          image: '/images/products/Squ_easy collection/products/garlic jar.png',
          scale: 0.65,
          top: '60%',
          left: '12%',
          zIndex: 15,
          animationDelay: 1.2,
        },
        {
          image: '/images/products/Squ_easy collection/products/12 gram garlic sachet front.png',
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
          text: 'ثوم وفلفل طبيعي 100%',
          sub: 'خالي تماماً من الإضافات الصناعية',
          icon: 'Award',
          side: 'left',
          yOffset: 25,
        },
        {
          id: 'sq-b2',
          text: 'فوهة ذكية مانعة للتنقيط',
          sub: 'تحكم دقيق في كل ضغطة',
          icon: 'ShieldCheck',
          side: 'right',
          yOffset: 35,
        },
        {
          id: 'sq-b3',
          text: 'حفظ آمن حتى 18 شهراً',
          sub: 'طبقات ألومنيوم عازلة للأكسجين',
          icon: 'Flame',
          side: 'left',
          yOffset: 65,
        },
        {
          id: 'sq-b4',
          text: 'معتمد من كبار الطهاة',
          sub: 'مثالي للتتبيل والطهي السريع',
          icon: 'Award',
          side: 'right',
          yOffset: 75,
        },
      ],
      floatingIngredients: [
        { name: 'شرائح الفلفل الأحمر', iconEmoji: '🌶️', blur: '0px', scale: 1.4, speed: 1.2, top: '15%', left: '8%' },
        { name: 'فصوص الثوم الطازجة', iconEmoji: '🧄', blur: '0px', scale: 1.3, speed: 0.9, top: '25%', left: '82%' },
        { name: 'زيت زيتون بكر', iconEmoji: '🫒', blur: '1px', scale: 1.1, speed: 1.5, top: '65%', left: '12%' },
        { name: 'أعشاب طبيعية', iconEmoji: '🌿', blur: '0px', scale: 1.2, speed: 1.1, top: '75%', left: '86%' },
      ],
    },
    flavors: [
      {
        id: 'sq-flv-harissa',
        name: 'كيس هريسة حارة حرفية',
        badge: 'حار ومدخن أصيل',
        heroImage: '/images/products/Squ_easy collection/products/harrisa pouch.png',
        sachetImage: '/images/products/Squ_easy collection/products/12 gram garlic sachet front.png',
        colorPalette: {
          primary: '#DC2626',
          secondary: '#EA580C',
          accent: '#FDE047',
          bgGradient: 'linear-gradient(135deg, #240703 0%, #5E1408 50%, #991B1B 100%)',
          ambientGlow: 'rgba(220, 38, 38, 0.45)',
          textAccent: '#FCA5A5',
        },
        tasteHighlights: ['فلفل مجفف بالشمس ومحمص', 'كزبرة وكمون بلدي', 'ثوم وزيت زيتون بكر', 'قوام كريمي متجانس'],
        nutritionalHero: {
          calories: '18 سعرة',
          sugar: '0.4 جم',
          heroMetric: '100%',
          heroLabel: 'فلفل مصري طبيعي',
        },
      },
      {
        id: 'sq-flv-garlic-pouch',
        name: 'كيس معجون الثوم النقي (تومية جاهزة)',
        badge: 'أساس كل مطبخ',
        heroImage: '/images/products/Squ_easy collection/products/garlic pouch.png',
        colorPalette: {
          primary: '#65A30D',
          secondary: '#84CC16',
          accent: '#FEF08A',
          bgGradient: 'linear-gradient(135deg, #0C1A04 0%, #233C08 50%, #4D7C0F 100%)',
          ambientGlow: 'rgba(101, 163, 13, 0.45)',
          textAccent: '#BEF264',
        },
        tasteHighlights: ['ثوم طازج مفروم 100%', 'ملح بحري طبيعي', 'لمسة ليمون متوازنة', 'مستحلب حريري ناعم'],
        nutritionalHero: {
          calories: '12 سعرة',
          sugar: '0.2 جم',
          heroMetric: '0 دقيقة',
          heroLabel: 'وقت التحضير والتقشير',
        },
      },
      {
        id: 'sq-flv-garlic-jar',
        name: 'برطمان زجاجي تقليدي للطهاة',
        badge: 'قوام غني وخشن',
        heroImage: '/images/products/Squ_easy collection/products/garlic jar.png',
        colorPalette: {
          primary: '#D97706',
          secondary: '#B45309',
          accent: '#FDE68A',
          bgGradient: 'linear-gradient(135deg, #1A1003 0%, #422606 50%, #853D0A 100%)',
          ambientGlow: 'rgba(217, 119, 6, 0.45)',
          textAccent: '#FCD34D',
        },
        tasteHighlights: ['قطع ثوم مفرومة خشنة', 'قرمشة مثالية للتشويح', 'محفوظ في زيت الزيتون', 'تحمل درجات حرارة عالية'],
        nutritionalHero: {
          calories: '14 سعرة',
          sugar: '0.3 جم',
          heroMetric: '350 جم',
          heroLabel: 'برطمان مطبخ عائلي',
        },
      },
      {
        id: 'sq-flv-harissa-sachet',
        name: 'أظرف هريسة فردية جاهزة',
        badge: 'سهولة فائقة أثناء التنقل',
        heroImage: '/images/products/Squ_easy collection/products/12 gram garlic sachet front.png',
        colorPalette: {
          primary: '#E11D48',
          secondary: '#BE123C',
          accent: '#FECDD3',
          bgGradient: 'linear-gradient(135deg, #24040D 0%, #520B1E 50%, #9F1239 100%)',
          ambientGlow: 'rgba(225, 29, 72, 0.45)',
          textAccent: '#FDA4AF',
        },
        tasteHighlights: ['حصة وجبة واحدة محكمة', 'بدون أي هدر متبقي', 'مثالي للمشويات والتيك أواي', 'نكهة مركزة فورية'],
        nutritionalHero: {
          calories: '8 سعرة',
          sugar: '0.1 جم',
          heroMetric: 'ظرف 1',
          heroLabel: 'إضافة فورية لكل طبق',
        },
      },
    ],
    skus: [
  {
    "id": "squeasy-minced-garlic-jar-250g",
    "name": "ثوم مفروم 250 جم – برطمان",
    "subName": "250g Glass Jar • 55 EGP",
    "image": "/artwork/squeasy/3d/squeasy-minced-garlic-jar.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-minced-garlic-jar.png",
    "categoryTag": "ثوم مفروم برطمان",
    "tagColor": "#EA580C",
    "weight": "250 g",
    "servings": "250 g",
    "flavorProfile": "أضف نكهة الثوم الطازجة والغنية إلى أطباقك بكل سهولة مع الثوم المفروم 250 جم. مصنوع من فصوص ثوم مختارة بعناية ل...",
    "description": "أضف نكهة الثوم الطازجة والغنية إلى أطباقك بكل سهولة مع الثوم المفروم 250 جم. مصنوع من فصوص ثوم مختارة بعناية ليمنحك الطعم والرائحة الأصيلة دون الحاجة إلى التقشير أو الفرم. جاهز للاستخدام مباشرة، ويُعد مثاليًا لتحضير التتبيلات، الصلصات، الشوربات، القلي السريع، وجميع وصفات الطهي اليومية، مما يوفر الوقت ويضيف مذاقًا شهيًا لكل وجبة.",
    "tasteMeters": [
      {
        "label": "حدة نكهة الثوم",
        "value": 96,
        "color": "#EA580C"
      },
      {
        "label": "رائحة طازجة أصيلة",
        "value": 98,
        "color": "#FBBF24"
      },
      {
        "label": "سهولة الانتشار بالطهي",
        "value": 95,
        "color": "#DC2626"
      },
      {
        "label": "توفير وقت التقشير والفرم",
        "value": 100,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "55 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "250g Glass Jar"
      },
      {
        "label": "صلاحية المنتج",
        "value": "12 months"
      },
      {
        "label": "باركود دولي",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "جاهز للاستخدام",
      "بدون تقشير أو فرم",
      "نكهة ثوم غنية",
      "يوفر الوقت"
    ],
    "inStock": true,
    "priceEgp": 55,
    "packType": "250g Glass Jar",
    "dietaryTags": [],
    "line": "garlic",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/squeasy"
  },
  {
    "id": "squeasy-garlic-paste-250g",
    "name": "معجون الثوم 250 جم",
    "subName": "250g Culinary Pouch • 55 EGP",
    "image": "/artwork/squeasy/3d/squeasy-garlic-paste-250g.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-garlic-paste-250g.png",
    "categoryTag": "معجون ثوم ناعم",
    "tagColor": "#EA580C",
    "weight": "250 g",
    "servings": "250 g",
    "flavorProfile": "أضف نكهة الثوم الطازجة والغنية إلى أطباقك بكل سهولة مع معجون الثوم 250 جم. مصنوع من ثوم مختار بعناية ليمنحك ال...",
    "description": "أضف نكهة الثوم الطازجة والغنية إلى أطباقك بكل سهولة مع معجون الثوم 250 جم. مصنوع من ثوم مختار بعناية ليمنحك الطعم والرائحة الأصيلة دون الحاجة إلى التقشير أو الفرم. جاهز للاستخدام مباشرة، ويُعد مثاليًا لتحضير التتبيلات، الصلصات، الشوربات، القلي السريع، وجميع وصفات الطهي اليومية، مما يوفر الوقت ويضيف مذاقًا شهيًا لكل وجبة.",
    "tasteMeters": [
      {
        "label": "حدة نكهة الثوم",
        "value": 96,
        "color": "#EA580C"
      },
      {
        "label": "رائحة طازجة أصيلة",
        "value": 98,
        "color": "#FBBF24"
      },
      {
        "label": "سهولة الانتشار بالطهي",
        "value": 95,
        "color": "#DC2626"
      },
      {
        "label": "توفير وقت التقشير والفرم",
        "value": 100,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "55 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "250g Culinary Pouch"
      },
      {
        "label": "صلاحية المنتج",
        "value": "12 months"
      },
      {
        "label": "باركود دولي",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "جاهز للاستخدام",
      "بدون تقشير أو فرم",
      "نكهة ثوم غنية",
      "يوفر الوقت"
    ],
    "inStock": true,
    "priceEgp": 55,
    "packType": "250g Culinary Pouch",
    "dietaryTags": [],
    "line": "garlic",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/squeasy"
  },
  {
    "id": "squeasy-garlic-paste-sachets-50",
    "name": "معجون الثوم – عبوة تحتوي على 50 ساشيت",
    "subName": "50 Single-Use Sachets • 55 EGP",
    "image": "/artwork/squeasy/3d/squeasy-garlic-paste-sachet.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-garlic-paste-sachet.png",
    "categoryTag": "معجون ثوم ساشيت",
    "tagColor": "#EA580C",
    "weight": "250 g",
    "servings": "250 g",
    "flavorProfile": "استمتع بالنكهة الغنية والطعم الأصيل للثوم مع معجون الثوم في أكياس عملية للاستخدام الفردي. مصنوع من ثوم عالي ال...",
    "description": "استمتع بالنكهة الغنية والطعم الأصيل للثوم مع معجون الثوم في أكياس عملية للاستخدام الفردي. مصنوع من ثوم عالي الجودة ليمنح أطباقك نكهة ورائحة مميزة دون الحاجة إلى التقشير أو الفرم. مثالي لتحضير التتبيلات، الصلصات، الشوربات، القلي السريع، ووصفات الطهي اليومية. تحتوي العبوة على 50 كيسًا لتوفر لك سهولة الاستخدام، والحفاظ على الطزاجة، ومذاقًا ثابتًا في كل مرة.",
    "tasteMeters": [
      {
        "label": "حدة نكهة الثوم",
        "value": 96,
        "color": "#EA580C"
      },
      {
        "label": "رائحة طازجة أصيلة",
        "value": 98,
        "color": "#FBBF24"
      },
      {
        "label": "سهولة الانتشار بالطهي",
        "value": 95,
        "color": "#DC2626"
      },
      {
        "label": "توفير وقت التقشير والفرم",
        "value": 100,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "55 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "50 Single-Use Sachets"
      },
      {
        "label": "صلاحية المنتج",
        "value": "12 months"
      },
      {
        "label": "باركود دولي",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "أكياس للاستخدام الفردي",
      "بدون تقشير أو فرم",
      "مذاق ثابت",
      "طعم طازج"
    ],
    "inStock": true,
    "priceEgp": 55,
    "packType": "50 Single-Use Sachets",
    "dietaryTags": [],
    "line": "garlic",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/squeasy"
  },
  {
    "id": "squeasy-harissa-hot-sauce-200g",
    "name": "صلصة هريسة حارة 200 جم",
    "subName": "200g Squeeze Bottle • 65 EGP",
    "image": "/artwork/squeasy/3d/squeasy-harissa-pouch-200g.png",
    "hoverImage": "/artwork/squeasy/3d/squeasy-harissa-pouch-200g.png",
    "categoryTag": "هريسة حارة حرفية",
    "tagColor": "#DC2626",
    "weight": "200 g",
    "servings": "200 g",
    "flavorProfile": "أضف لمسة من الحرارة والنكهة المميزة إلى أطباقك مع الهريسة الحارة 200 جم. مصنوعة من أجود أنواع الفلفل الحار ومز...",
    "description": "أضف لمسة من الحرارة والنكهة المميزة إلى أطباقك مع الهريسة الحارة 200 جم. مصنوعة من أجود أنواع الفلفل الحار ومزيج متوازن من التوابل، لتمنح أطباقك مذاقًا غنيًا وحارًا يناسب عشاق النكهات القوية. مثالية للسندويتشات، المشويات، البرجر، الشاورما، المكرونة، البيتزا، أو كصلصة للتغميس، لتضيف طعمًا أصيلًا ومميزًا إلى كل وجبة.",
    "tasteMeters": [
      {
        "label": "حرارة الفلفل الأحمر",
        "value": 94,
        "color": "#DC2626"
      },
      {
        "label": "عمق النكهة المدخنة",
        "value": 95,
        "color": "#EA580C"
      },
      {
        "label": "توازن التوابل والزيت",
        "value": 96,
        "color": "#FBBF24"
      },
      {
        "label": "سهولة الاستخدام والدقة",
        "value": 98,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "65 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "200g Squeeze Bottle"
      },
      {
        "label": "صلاحية المنتج",
        "value": "12 months"
      },
      {
        "label": "باركود دولي",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "نكهة حارة قوية",
      "فلفل حار عالي الجودة",
      "متعدد الاستخدامات",
      "جاهز للاستخدام"
    ],
    "inStock": true,
    "priceEgp": 65,
    "packType": "200g Squeeze Bottle",
    "dietaryTags": [],
    "line": "harissa",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/squeasy"
  }
],
    story: {
      title: 'من المزارع المصرية إلى المطابخ العالمية',
      subtitle: 'علم الحفظ الطبيعي للمكونات الطازجة',
      leadParagraph: 'لعقود طويلة، شكّل الثوم والفلفل الحار الركيزة العطرية للطهي المصري والمتوسطي. لكن تحضيرهم اليومي في المطاعم أو المنازل يعني عناء التقشير، ورائحة نفاذة على اليدين، وتلفاً سريعاً.',
      secondaryParagraph: 'في مجمع مصانع AWA بمدينة برج العرب الجديدة، نعتمد تقنيات المعالجة الباردة وتغليف العزل متعدد الطبقات لحماية المركبات العطرية المتطايرة في الثوم والفلفل الطازج مع ضمان عدم إضافة مواد حافظة كيميائية قاسية.',
      stats: [
        { value: '100%', label: 'محصول طازج', sub: 'من مزارع مصرية معتمدة' },
        { value: '0%', label: 'مواد حافظة', sub: 'حفظ طبيعي بتوازن الحموضة' },
        { value: '18 شهر', label: 'صلاحية بدرجة الغرفة', sub: 'بفضل طبقات العزل المحكمة' },
        { value: '5 أضعاف', label: 'سرعة في الطهي', sub: 'بدون وقت للتقشير والتنظيف' },
      ],
      bulletPoints: [
        { title: 'الخلط بالمعالجة الباردة', desc: 'يحافظ على مادة الأليسين الفعالة في الثوم والكابسيسين في الفلفل دون تحلل حراري.' },
        { title: 'أكياس ضغط عازلة للأكسجين', desc: 'تحمي الزيوت العطرية من الأكسدة وتغير اللون بتأثير الضوء والزنخ.' },
        { title: 'أعلى معايير سلامة الغذاء العالمية', desc: 'يصنع وفق أنظمة الجودة العالمية FSSC 22000 و ISO 9001.' },
      ],
      image: '/images/pages/products/retail/squeasy/cover.png',
      badgeText: 'تكنولوجيا الطهي من AWA',
    },
    faqs: [
      {
        q: 'هل يحتاج SquEasy إلى التبريد قبل الفتح؟',
        a: 'لا، بفضل التغليف متعدد الطبقات العازل للأكسجين والحفظ الطبيعي، تظل عبوات SquEasy غير المفتوحة طازجة 100% في درجة حرارة الغرفة حتى 18 شهراً. بعد الفتح، تحفظ في الثلاجة وتستخدم خلال 90 يوماً.',
      },
      {
        q: 'كم يعادل معجون ثوم SquEasy مقارنة بالفصوص الطازجة؟',
        a: 'ملعقة صغيرة واحدة من معجون ثوم SquEasy تعادل حوالي 3 فصوص متوسطة من الثوم الطازج المقشر، مع تطابق كامل في قوة النكهة والأداء في الطهي.',
      },
      {
        q: 'هل منتجات SquEasy مناسبة للمطاعم وقطاع الفنادق Foodservice؟',
        a: 'نعم! يعتمد كبرى سلاسل الفنادق والمطاعم ومطاعم الشاورما والبرجر في مصر على SquEasy، ونوفر أيضاً عبوات بحجم 1 كجم و 5 كجم مخصصة للقطاع التجاري.',
      },
    ],
    reviews: [
      {
        author: 'الشيف كريم م.',
        role: 'رئيس الطهاة، القاهرة',
        comment: 'هريسة SquEasy غيرت آلية العمل في مطبخنا بالكامل. ثبات النكهة في كل تشغيلة ممتاز، وفوهة الضغط تسمح بتزيين الأطباق بدقة متناهية.',
        rating: 5,
        avatarTag: 'كم',
      },
      {
        author: 'نوران الشامي',
        role: 'مدونة طعام وأم',
        comment: 'وداعاً لرائحة الثوم على اليدين لأيام! الكيس عملي جداً في باب الثلاجة، وتتبيل المشاوي أو عمل الخبز بالثوم لا يستغرق سوى 30 ثانية.',
        rating: 5,
        avatarTag: 'نش',
      },
      {
        author: 'طارق منصور',
        role: 'مدير مشتريات تجزئة FMCG',
        comment: 'سجلت SquEasy أسرع معدل دوران بين منتجات التتبيل في فروعنا هذا الربع. تصميم العبوة جذاب ومعدل الشراء المتكرر مرتفع جداً.',
        rating: 5,
        avatarTag: 'طم',
      },
    ],
    retailers: [
      '/images/pages/products/retail/hyber1.png',
      '/images/pages/products/retail/hyber2.png',
      '/images/pages/products/retail/hyber3.png',
      '/images/pages/products/retail/hyber4.png',
      '/images/pages/products/retail/hyber5.png',
      '/images/pages/products/retail/hyber8.png',
      '/images/pages/products/retail/hyber7.png',
      '/images/pages/products/retail/hyber6.png',
    ],
  },

  /* ═══════════════════════════════════════════════════════════════ */
  /* 2. SWEET & SLIM ZERO CALORIE SWEETENERS (ARABIC)               */
  /* ═══════════════════════════════════════════════════════════════ */
  'sweet-and-slim': {
    id: 'sweet-and-slim',
    brandName: 'Sweet & Slim',
    tagline: 'المحليات صفر سعرات، حلوى النعناع الفاخرة والمشروبات الصحية',
    slogan: 'حلاوة سكر القصب الطبيعي. صفر سعرات وبدون أي تأثير على سكر الدم.',
    vibeDescription: 'منظومة صحية راقية تعتمد على السكرالوز فائق النقاوة بدرجة الأدوية، وألياف الإينولين البريبايوتك المعززة للمناعة، بدون أي طعم مرار.',
    vibeKeywords: ['صفر سعرات', 'خالي من الأسبارتام', 'ألياف بريبايوتك', 'آمن لمرضى السكر والكيتو', 'يتحمل حرارة الفرن'],
    theme: {
      primary: '#10B981',
      secondary: '#059669',
      accent: '#6EE7B7',
      darkBg: '#021C12',
      lightBg: '#ECFDF5',
      gradientHero: 'radial-gradient(ellipse at 60% 40%, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.15) 50%, #021C12 100%)',
      buttonGlow: '0 0 35px rgba(16, 185, 129, 0.55)',
    },
    heroSticky: {
      eyebrow: 'العلامة الأولى لمحليات السكرالوز في مصر منذ 2011',
      headline: 'حلاوة حقيقية بدون أدنى تنازل.',
      subheadline: 'مُصنّع من أجود أنواع السكرالوز الدوائي وألياف الإينولين الذائبة من جذور الهندباء. يعادل سكر القصب ملعقة بملعقة في الشاي والقهوة والحلويات بدون مرار.',
      ctaPrimary: 'اكتشف تشكيلة Sweet & Slim',
      ctaSecondary: 'طلب مواصفات التوريد B2B',
      mainPackImage: '/artwork/sweet-and-slim/3d/classic-100-box.png',
      companionOrbitImages: [
        {
          image: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 extra-View 4.png',
          scale: 0.75,
          top: '12%',
          left: '76%',
          zIndex: 5,
          animationDelay: 0.6,
        },
        {
          image: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim Spearmint Tin.png',
          scale: 0.6,
          top: '62%',
          left: '10%',
          zIndex: 15,
          animationDelay: 1.1,
        },
        {
          image: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim peach Tin.png',
          scale: 0.55,
          top: '66%',
          left: '84%',
          zIndex: 8,
          animationDelay: 0.9,
        },
        {
          image: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 100 sachets/100 Classic-View 1.png',
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
          text: 'صفر سعرات وصفر كربوهيدرات',
          sub: 'صفر تأثير جلايسيمي على سكر الدم',
          icon: 'Award',
          side: 'left',
          yOffset: 25,
        },
        {
          id: 'ss-b2',
          text: 'خالي 100% من الأسبارتام والسكارين',
          sub: 'مذاق نقي مطابق لسكر القصب',
          icon: 'ShieldCheck',
          side: 'right',
          yOffset: 35,
        },
        {
          id: 'ss-b3',
          text: 'معزز بألياف الإينولين البريبايوتك',
          sub: 'يدعم صحة الجهاز الهضمي والقولون',
          icon: 'Heart',
          side: 'left',
          yOffset: 65,
        },
        {
          id: 'ss-b4',
          text: 'يتحمل الحرارة حتى 220 درجة مئوية',
          sub: 'مثالي للطهي والحلويات والمخبوزات',
          icon: 'Flame',
          side: 'right',
          yOffset: 75,
        },
      ],
      floatingIngredients: [
        { name: 'أوراق النعناع النقي', iconEmoji: '🍃', blur: '0px', scale: 1.3, speed: 1.1, top: '18%', left: '10%' },
        { name: 'نعناع بستاني', iconEmoji: '🌿', blur: '1px', scale: 1.5, speed: 1.4, top: '22%', left: '85%' },
        { name: 'خوخ طبيعي حلو', iconEmoji: '🍑', blur: '0px', scale: 1.2, speed: 0.9, top: '68%', left: '14%' },
      ],
    },
    flavors: [
      {
        id: 'ss-flv-classic',
        name: 'سويت آند سليم كلاسيك (علبة 50 ظرف)',
        badge: 'الخيار اليومي الأفضل',
        heroImage: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 classic-View 4.png',
        colorPalette: {
          primary: '#10B981',
          secondary: '#047857',
          accent: '#A7F3D0',
          bgGradient: 'linear-gradient(135deg, #021E13 0%, #055432 50%, #059669 100%)',
          ambientGlow: 'rgba(16, 185, 129, 0.45)',
          textAccent: '#6EE7B7',
        },
        tasteHighlights: ['سكرالوز دوائي نقي', 'ذوبان فوري بالسوائل', 'الظرف يعادل ملعقتين سكر', 'بدون أي طعم مرار'],
        nutritionalHero: {
          calories: '0 سعرة',
          sugar: '0.0 جم',
          heroMetric: '0 GI',
          heroLabel: 'مؤشر جلايسيمي صفر',
        },
      },
      {
        id: 'ss-flv-extra',
        name: 'سويت آند سليم إكسترا بالإينولين البريبايوتك',
        badge: 'ألياف بريبايوتك لصحة الهضم',
        heroImage: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 extra-View 4.png',
        colorPalette: {
          primary: '#059669',
          secondary: '#064E3B',
          accent: '#D1FAE5',
          bgGradient: 'linear-gradient(135deg, #021A11 0%, #063F25 50%, #047857 100%)',
          ambientGlow: 'rgba(5, 150, 105, 0.45)',
          textAccent: '#A7F3D0',
        },
        tasteHighlights: ['ألياف إينولين جذور الهندباء', 'راحة للجهاز الهضمي', 'قوام ناعم بالفم', 'تغذية البكتيريا النافعة'],
        nutritionalHero: {
          calories: '0 سعرة',
          sugar: '0.0 جم',
          heroMetric: '100% إينولين',
          heroLabel: 'ألياف ذائبة طبيعية',
        },
      },
      {
        id: 'ss-flv-stevia',
        name: 'سويت آند سليم ستيفيا (علبة 100 ظرف)',
        badge: 'مستخلص نباتي 100%',
        heroImage: '/images/products/Sweet & Slim Collection/S&S Sweetener/boxes/Boxes 50 Sachets/50 Stevia-View 1.png',
        colorPalette: {
          primary: '#84CC16',
          secondary: '#4D7C0F',
          accent: '#ECFCCB',
          bgGradient: 'linear-gradient(135deg, #0A1603 0%, #1E3709 50%, #65A30D 100%)',
          ambientGlow: 'rgba(132, 204, 22, 0.45)',
          textAccent: '#BEF264',
        },
        tasteHighlights: ['ستيفيا عالية النقاوة Reb-A', 'مصدر نباتي أخضر', 'خالي من المذيبات الكيميائية', 'مذاق عشبي نقي'],
        nutritionalHero: {
          calories: '0 سعرة',
          sugar: '0.0 جم',
          heroMetric: 'نباتي',
          heroLabel: 'مستخلص أوراق الستيفيا',
        },
      },
      {
        id: 'ss-flv-spearmint-tin',
        name: 'حلوى نعناع سبيرمنت بدون سكر (علبة معدنية)',
        badge: 'انتعاش فوري للجيب',
        heroImage: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim Spearmint Tin.png',
        colorPalette: {
          primary: '#06B6D4',
          secondary: '#0891B2',
          accent: '#CFFAFE',
          bgGradient: 'linear-gradient(135deg, #03181C 0%, #0A3C45 50%, #0E7490 100%)',
          ambientGlow: 'rgba(6, 182, 212, 0.45)',
          textAccent: '#67E8F9',
        },
        tasteHighlights: ['زيوت نعناع سبيرمنت طبيعية', 'حبيبات دقيقة خالية من السكر', 'علبة معدنية منزلقة أنيقة', 'انتعاش طويل الأمد'],
        nutritionalHero: {
          calories: '< 1 سعرة',
          sugar: '0.0 جم',
          heroMetric: '35 حبة',
          heroLabel: 'علبة معدنية فاخرة',
        },
      },
      {
        id: 'ss-flv-peach-tin',
        name: 'حلوى نعناع بنكهة الخوخ بدون سكر',
        badge: 'فواكه وانتعاش',
        heroImage: '/images/products/Sweet & Slim Collection/Mints/Tray & Tint/Copy of Sweet & Slim peach Tin.png',
        colorPalette: {
          primary: '#F97316',
          secondary: '#EA580C',
          accent: '#FFEDD5',
          bgGradient: 'linear-gradient(135deg, #1F0A03 0%, #4D1D07 50%, #C2410C 100%)',
          ambientGlow: 'rgba(249, 115, 22, 0.45)',
          textAccent: '#FDBA74',
        },
        tasteHighlights: ['نكهة الخوخ الصيفي الناضج', 'انتعاش النعناع الهادئ', 'حلوى بدون تأنيب ضمير', 'آمنة على صحة الأسنان'],
        nutritionalHero: {
          calories: '< 1 سعرة',
          sugar: '0.0 جم',
          heroMetric: 'صفر سكر',
          heroLabel: 'انتعاش بدون تسوس',
        },
      },
      {
        id: 'ss-flv-hotchoco-box',
        name: 'هوت شوكليت دايت بالبندق Sweet & Slim',
        badge: 'كاكاو دايت فاخر',
        heroImage: '/images/products/Sweet & Slim Collection/S&S Hotchocolate/Box/S&S Hot chocolate-View 1.png',
        colorPalette: {
          primary: '#8B5CF6',
          secondary: '#7C3AED',
          accent: '#EDE9FE',
          bgGradient: 'linear-gradient(135deg, #17072E 0%, #3B156B 50%, #7C3AED 100%)',
          ambientGlow: 'rgba(139, 92, 246, 0.45)',
          textAccent: '#C4B5FD',
        },
        tasteHighlights: ['كاكاو هولندي داكن غني', 'كريمة البندق المحمص', 'محلى بـ Sweet & Slim', 'بدون أي سكر مضاف'],
        nutritionalHero: {
          calories: '45 سعرة',
          sugar: '0.0 جم',
          heroMetric: '0 سكر',
          heroLabel: 'سكر مائدة مضاف',
        },
      },
    ],
    skus: [
  {
    "id": "sweet-slim-100-sachet",
    "name": "محلي 100 ظرف",
    "subName": "100 Sachets Box • 110 EGP • 6223004400155",
    "image": "/artwork/sweet-and-slim/3d/classic-100-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "المحلي الكلاسيكي",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "100 Sachets",
    "flavorProfile": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي،و خال من الاسبارتام مع تركيبة مناسبة لمرضى السكري وكل ...",
    "description": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي،و خال من الاسبارتام مع تركيبة مناسبة لمرضى السكري وكل من يتبع نمط حياة صحي.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "110 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "100 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400155"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "مذاق السكر الطبيعي",
      "مصنوع من الذرة والسكرالوز",
      "خالي من الأسبارتام",
      "مناسب للسكري والدايت"
    ],
    "inStock": true,
    "priceEgp": 110,
    "compareAtPriceEgp": 125,
    "packType": "100 Sachets Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free",
      "Diabetic Safe",
      "Keto Friendly"
    ],
    "barcode": "6223004400155",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-400-sachet",
    "name": "محلي400 ظرف",
    "subName": "400 Sachets Economy Box • 300 EGP • 6223004400049",
    "image": "/artwork/sweet-and-slim/3d/classic-400-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "المحلي الكلاسيكي",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "400 Sachets",
    "flavorProfile": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي،،و خال من الاسبارتام مع تركيبة مناسبة لمرضى السكري وكل...",
    "description": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي،،و خال من الاسبارتام مع تركيبة مناسبة لمرضى السكري وكل من يتبع نمط حياة صحي.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "300 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "400 Sachets Economy Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400049"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "مذاق السكر الطبيعي",
      "مصنوع من الذرة والسكرالوز",
      "خالي من الأسبارتام",
      "مناسب للسكري والدايت"
    ],
    "inStock": true,
    "priceEgp": 300,
    "compareAtPriceEgp": 345,
    "packType": "400 Sachets Economy Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free",
      "Diabetic Safe",
      "Keto Friendly"
    ],
    "barcode": "6223004400049",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-50-sachet-extra",
    "name": "محلي اكسترا سويت 50 ظرف",
    "subName": "50 Sachets Box • 85 EGP • 6223004400278",
    "image": "/artwork/sweet-and-slim/3d/extra-50-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/extra-sugar-sachet.png",
    "categoryTag": "إكسترا ومشروبات الدايت",
    "tagColor": "#10B981",
    "weight": "1.4 gm/sachet",
    "servings": "50 Sachets",
    "flavorProfile": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي، ،و خال من الاسبارتام مع تركيبة مناسبة لمرضى السكري وك...",
    "description": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي، ،و خال من الاسبارتام مع تركيبة مناسبة لمرضى السكري وكل من يتبع نمط حياة صحي.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "85 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "50 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400278"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Double Sweetness • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "حلاوة مضاعفة",
      "كيس واحد = 4 ملاعق سكر",
      "خالي من الأسبارتام",
      "مناسب للسكري والدايت"
    ],
    "inStock": true,
    "priceEgp": 85,
    "compareAtPriceEgp": 100,
    "packType": "50 Sachets Box",
    "dietaryTags": [
      "Double Sweetness",
      "Zero Calorie",
      "Sugar Free"
    ],
    "barcode": "6223004400278",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-200-sachet-stevia",
    "name": "محلي ستيفيا 200 ظرف",
    "subName": "200 Sachets Box • 270 EGP • 6223004400315",
    "image": "/artwork/sweet-and-slim/3d/stevia-200-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/stevia-sugar-sachet.png",
    "categoryTag": "ستيفيا طبيعي 100%",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "200 Sachets",
    "flavorProfile": "سكر ستيفيا  خالٍ من السعرات الحرارية، وخالٍ من الجلوتين، وخالٍ من الأسبارتام، ومناسب لمتبعي نظام الكيتو، ومرضى...",
    "description": "سكر ستيفيا  خالٍ من السعرات الحرارية، وخالٍ من الجلوتين، وخالٍ من الأسبارتام، ومناسب لمتبعي نظام الكيتو، ومرضى السكري، والنباتيين، ولكل من يسعى إلى اتباع نمط حياة صحي.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "270 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "200 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400315"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "100% Plant Based • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "ستيفيا طبيعي 100%",
      "صفر سعرات حرارية",
      "خالي من الأسبارتام",
      "مناسب لمرضى السكري والكيتو"
    ],
    "inStock": true,
    "priceEgp": 270,
    "compareAtPriceEgp": 310,
    "packType": "200 Sachets Box",
    "dietaryTags": [
      "100% Plant Based",
      "Zero Calorie",
      "Keto Certified",
      "Aspartame Free"
    ],
    "barcode": "6223004400315",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-syrup-lite-300ml",
    "name": "سيرب لايت",
    "subName": "standard • 205 EGP • 6223004401312",
    "image": "/artwork/sweet-and-slim/3d/lite-syrup-bottle.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/lite-syrup-bottle.png",
    "categoryTag": "المحلي الكلاسيكي",
    "tagColor": "#10B981",
    "weight": "300 ml / bottle",
    "servings": "300 ml",
    "flavorProfile": "شراب سويت آند سليم لايت هو شراب منخفض السعرات الحرارية، مخصص لتحضير الحلويات الشرقية، وجاهز للاستخدام. مدة الص...",
    "description": "شراب سويت آند سليم لايت هو شراب منخفض السعرات الحرارية، مخصص لتحضير الحلويات الشرقية، وجاهز للاستخدام. مدة الصلاحية: 12 شهرًا. الحجم الصافي: 300 مل.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "205 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "standard"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004401312"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Low Calorie • Dessert Syrup"
      }
    ],
    "keyBenefits": [
      "منخفض السعرات",
      "مخصص للحلويات الشرقية",
      "جاهز للاستخدام",
      "خالي من السكر"
    ],
    "inStock": true,
    "priceEgp": 205,
    "compareAtPriceEgp": 235,
    "packType": "standard",
    "dietaryTags": [
      "Low Calorie",
      "Dessert Syrup",
      "Sugar Free"
    ],
    "barcode": "6223004401312",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-classic-pouch-250g",
    "name": "محلي 250 جرام",
    "subName": "250g Resealable Zipper Pouch • 140 EGP • 6223004400353",
    "image": "/artwork/sweet-and-slim/3d/classic-pouch.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-pouch.png",
    "categoryTag": "المحلي الكلاسيكي",
    "tagColor": "#10B981",
    "weight": "250 gm / pouch",
    "servings": "250 Gm",
    "flavorProfile": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي،،و خال من الاسبارتام مما يجعله مناسبًا لمرضى السكري ول...",
    "description": "محلي مصنوع من الذرة والسكرالوز ليمنحك مذاق السكر العادي،،و خال من الاسبارتام مما يجعله مناسبًا لمرضى السكري ولكل من يتبع نمط حياة صحي. مدة الصلاحية: 24 شهرًا. الوزن الصافي: 250 جم.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "140 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "250g Resealable Zipper Pouch"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400353"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Baking Friendly • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "مذاق السكر الطبيعي",
      "مصنوع من الذرة والسكرالوز",
      "خالي من الأسبارتام",
      "مناسب للسكري والدايت"
    ],
    "inStock": true,
    "priceEgp": 140,
    "compareAtPriceEgp": 160,
    "packType": "250g Resealable Zipper Pouch",
    "dietaryTags": [
      "Baking Friendly",
      "Zero Calorie",
      "Sugar Free"
    ],
    "barcode": "6223004400353",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-stevia-pouch-250g",
    "name": "محلي استيفيا 250 جرام",
    "subName": "250g Resealable Zipper Pouch • 160 EGP • 6223004400377",
    "image": "/artwork/sweet-and-slim/3d/stevia-pouch.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/stevia-pouch.png",
    "categoryTag": "ستيفيا طبيعي 100%",
    "tagColor": "#10B981",
    "weight": "250 gm / pouch",
    "servings": "250 Gm",
    "flavorProfile": "سكر ستيفيا  خالٍ من السعرات الحرارية، وخالٍ من الجلوتين، وخالٍ من الأسبارتام، ومناسب لمتبعي نظام الكيتو، ومرضى...",
    "description": "سكر ستيفيا  خالٍ من السعرات الحرارية، وخالٍ من الجلوتين، وخالٍ من الأسبارتام، ومناسب لمتبعي نظام الكيتو، ومرضى السكري، والنباتيين، ولكل من يسعى إلى اتباع نمط حياة صحي.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "160 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "250g Resealable Zipper Pouch"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400377"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "100% Plant Based • Baking Stevia"
      }
    ],
    "keyBenefits": [
      "ستيفيا طبيعي 100%",
      "صفر سعرات حرارية",
      "خالي من الأسبارتام",
      "مناسب لمرضى السكري والكيتو"
    ],
    "inStock": true,
    "priceEgp": 160,
    "compareAtPriceEgp": 185,
    "packType": "250g Resealable Zipper Pouch",
    "dietaryTags": [
      "100% Plant Based",
      "Baking Stevia",
      "Keto Friendly"
    ],
    "barcode": "6223004400377",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-classic-50-sachet",
    "name": "سويت آند سليم محلي كلاسيك 50 ظرف",
    "subName": "50 Sachets Box • 65 EGP • 6223004400001",
    "image": "/artwork/sweet-and-slim/3d/classic-50-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "المحلي الكلاسيكي",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "50 Sachets",
    "flavorProfile": "العبوة الكلاسيكية العملية 50 ظرف، الرفيق اليومي للقهوة والشاي في العمل والمنزل.",
    "description": "العبوة الكلاسيكية العملية 50 ظرف، الرفيق اليومي للقهوة والشاي في العمل والمنزل.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "65 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "50 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400001"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "جودة معتمدة",
      "تصنيع AWA"
    ],
    "inStock": true,
    "priceEgp": 65,
    "packType": "50 Sachets Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free",
      "Diabetic Safe"
    ],
    "barcode": "6223004400001",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-classic-25-sachet",
    "name": "سويت آند سليم محلي كلاسيك 25 ظرف",
    "subName": "25 Sachets Box • 35 EGP • 6223004400070",
    "image": "/artwork/sweet-and-slim/3d/classic-25-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/classic-sugar-sachet.png",
    "categoryTag": "المحلي الكلاسيكي",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "25 Sachets",
    "flavorProfile": "عبوة تجربة مدمجة 25 ظرف سهلة الحمل في الحقيبة وأثناء السفر.",
    "description": "عبوة تجربة مدمجة 25 ظرف سهلة الحمل في الحقيبة وأثناء السفر.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "35 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "25 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400070"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Zero Calorie • Sugar Free"
      }
    ],
    "keyBenefits": [
      "جودة معتمدة",
      "تصنيع AWA"
    ],
    "inStock": true,
    "priceEgp": 35,
    "packType": "25 Sachets Box",
    "dietaryTags": [
      "Zero Calorie",
      "Sugar Free"
    ],
    "barcode": "6223004400070",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-stevia-50-sachet",
    "name": "سويت آند سليم ستيفيا 50 ظرف",
    "subName": "50 Sachets Box • 75 EGP • 6223004400179",
    "image": "/artwork/sweet-and-slim/3d/stevia-50-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/stevia-sugar-sachet.png",
    "categoryTag": "ستيفيا طبيعي 100%",
    "tagColor": "#10B981",
    "weight": "1 gm/sachet",
    "servings": "50 Sachets",
    "flavorProfile": "أظرف ستيفيا نقية نباتية 100% في عبوة عملية 50 ظرف.",
    "description": "أظرف ستيفيا نقية نباتية 100% في عبوة عملية 50 ظرف.",
    "tasteMeters": [
      {
        "label": "نقاء التحلية",
        "value": 98,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "مذاق مطابق للسكر",
        "value": 95,
        "color": "#3B82F6"
      },
      {
        "label": "صفر مرارة أو طعم غريب",
        "value": 98,
        "color": "#8B5CF6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "75 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "50 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004400179"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "100% Plant Based • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "جودة معتمدة",
      "تصنيع AWA"
    ],
    "inStock": true,
    "priceEgp": 75,
    "packType": "50 Sachets Box",
    "dietaryTags": [
      "100% Plant Based",
      "Zero Calorie",
      "Keto Certified"
    ],
    "barcode": "6223004400179",
    "line": "sugar",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-strawberry",
    "name": "مينت فراولة",
    "subName": "boxes • 65 EGP • 6223004404290",
    "image": "/artwork/sweet-and-slim/3d/mints-strawberry-tin.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "حلوى النعناع المنعشة",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة الفراولة. خالية من السعرات الحرارية، صديقة للأ...",
    "description": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة الفراولة. خالية من السعرات الحرارية، صديقة للأسنان، ومناسبة لمرضى السكري تمنحك انتعاشًا يدوم طويلًا.",
    "tasteMeters": [
      {
        "label": "انتعاش النكهة والنعناع",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "نقاء المكونات",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "ثبات الطعم",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "خالي من السكر",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "65 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404290"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "خالي من السكر",
      "صديق للأسنان",
      "صفر سعرات",
      "انتعاش يدوم طويلاً"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Tooth Friendly"
    ],
    "barcode": "6223004404290",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-peach",
    "name": "مينت خوخ",
    "subName": "boxes • 65 EGP • 6223004404306",
    "image": "/artwork/sweet-and-slim/3d/mints-peach-tin.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "حلوى النعناع المنعشة",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة الخوخ. خالية من السعرات الحرارية، صديقة للأسنا...",
    "description": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة الخوخ. خالية من السعرات الحرارية، صديقة للأسنان، ومناسبة لمرضى السكري تمنحك انتعاشًا يدوم طويلًا.",
    "tasteMeters": [
      {
        "label": "انتعاش النكهة والنعناع",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "نقاء المكونات",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "ثبات الطعم",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "خالي من السكر",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "65 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404306"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "خالي من السكر",
      "صديق للأسنان",
      "صفر سعرات",
      "انتعاش يدوم طويلاً"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Tooth Friendly"
    ],
    "barcode": "6223004404306",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-spearmint",
    "name": "مينت نعناع",
    "subName": "boxes • 65 EGP • 6223004404313",
    "image": "/artwork/sweet-and-slim/3d/mints-spearmint-tin.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "حلوى النعناع المنعشة",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة النعناع البارد. خالية من السعرات الحرارية، صدي...",
    "description": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة النعناع البارد. خالية من السعرات الحرارية، صديقة للأسنان، ومناسبة لمرضى السكري تمنحك انتعاشًا يدوم طويلًا.",
    "tasteMeters": [
      {
        "label": "انتعاش النكهة والنعناع",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "نقاء المكونات",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "ثبات الطعم",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "خالي من السكر",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "65 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404313"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "خالي من السكر",
      "صديق للأسنان",
      "صفر سعرات",
      "انتعاش يدوم طويلاً"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Maximum Freshness"
    ],
    "barcode": "6223004404313",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-orange",
    "name": "مينت برتقال",
    "subName": "boxes • 65 EGP • 6223004405556",
    "image": "/artwork/sweet-and-slim/3d/mints-orange-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "حلوى النعناع المنعشة",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة البرتقال. خالية من السعرات الحرارية، صديقة للأ...",
    "description": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة البرتقال. خالية من السعرات الحرارية، صديقة للأسنان، ومناسبة لمرضى السكري تمنحك انتعاشًا يدوم طويلًا.",
    "tasteMeters": [
      {
        "label": "انتعاش النكهة والنعناع",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "نقاء المكونات",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "ثبات الطعم",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "خالي من السكر",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "65 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405556"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "خالي من السكر",
      "صديق للأسنان",
      "صفر سعرات",
      "انتعاش يدوم طويلاً"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Citrus Burst"
    ],
    "barcode": "6223004405556",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-mints-cinnamon",
    "name": "مينت قرفة",
    "subName": "boxes • 65 EGP • 6223004405563",
    "image": "/artwork/sweet-and-slim/3d/mints-cinnamon-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/mints-pills.jpg",
    "categoryTag": "حلوى النعناع المنعشة",
    "tagColor": "#EC4899",
    "weight": "32 gm / tin",
    "servings": "40 pieces",
    "flavorProfile": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة القرفة. خالية من السعرات الحرارية، صديقة للأسن...",
    "description": "حلوى نعناع منعشة تحتوي العبوة على 40 قطعة. خالية من السكر بنكهة القرفة. خالية من السعرات الحرارية، صديقة للأسنان، ومناسبة لمرضى السكري تمنحك انتعاشًا يدوم طويلًا.",
    "tasteMeters": [
      {
        "label": "انتعاش النكهة والنعناع",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "نقاء المكونات",
        "value": 95,
        "color": "#10B981"
      },
      {
        "label": "ثبات الطعم",
        "value": 94,
        "color": "#8B5CF6"
      },
      {
        "label": "خالي من السكر",
        "value": 99,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "65 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "24 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405563"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Sugar Free • Zero Calorie"
      }
    ],
    "keyBenefits": [
      "خالي من السكر",
      "صديق للأسنان",
      "صفر سعرات",
      "انتعاش يدوم طويلاً"
    ],
    "inStock": true,
    "priceEgp": 65,
    "compareAtPriceEgp": 75,
    "packType": "boxes",
    "dietaryTags": [
      "Sugar Free",
      "Zero Calorie",
      "Warm Spice"
    ],
    "barcode": "6223004405563",
    "line": "candy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-3in1-instant-coffee-classic",
    "name": "قهوة سريعة التحضير 3في1 كلاسيك",
    "subName": "boxes • 204 EGP • 6223004405143",
    "image": "/artwork/sweet-and-slim/3d/3in1-classic-box.jpg",
    "hoverImage": "/artwork/sweet-and-slim/3d/3in1-classic-sachet.png",
    "categoryTag": "إكسترا ومشروبات الدايت",
    "tagColor": "#8B5CF6",
    "weight": "15 gm/sachet",
    "servings": "12 Sachets",
    "flavorProfile": "قهوة سريعة التحضير خالية من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز ا...",
    "description": "قهوة سريعة التحضير خالية من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز الهند و حليب خالي الدسم",
    "tasteMeters": [
      {
        "label": "عمق الكاكاو والقهوة",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "قوام مخملي كريمي",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "نعومة المذاق",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "توازن الدايت",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "204 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405143"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Zero Sugar • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "خالي من الزيوت المهدرجة",
      "بديل كريمر زيت جوز هند",
      "57 سعر حراري",
      "خالي من الدهون المتحولة"
    ],
    "inStock": true,
    "priceEgp": 204,
    "compareAtPriceEgp": 235,
    "packType": "boxes",
    "dietaryTags": [
      "Zero Sugar",
      "No Hydrogenated Oils",
      "57 Calories",
      "Trans Fat Free"
    ],
    "barcode": "6223004405143",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-3in1-instant-coffee-extra",
    "name": "قهوة سريعة التحضير 3في1 اكسترا",
    "subName": "boxes • 216 EGP • 6223004405150",
    "image": "/artwork/sweet-and-slim/3d/3in1-extra-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/3in1-extra-sachet.png",
    "categoryTag": "إكسترا ومشروبات الدايت",
    "tagColor": "#8B5CF6",
    "weight": "15 gm/sachet",
    "servings": "12 Sachets",
    "flavorProfile": "قهوة سريعة التحضير خالية من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز ا...",
    "description": "قهوة سريعة التحضير خالية من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز الهند و حليب خالي الدسم",
    "tasteMeters": [
      {
        "label": "عمق الكاكاو والقهوة",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "قوام مخملي كريمي",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "نعومة المذاق",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "توازن الدايت",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "216 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405150"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Extra Sweet • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "خالي من الزيوت المهدرجة",
      "بديل كريمر زيت جوز هند",
      "57 سعر حراري",
      "خالي من الدهون المتحولة"
    ],
    "inStock": true,
    "priceEgp": 216,
    "compareAtPriceEgp": 250,
    "packType": "boxes",
    "dietaryTags": [
      "Extra Sweet",
      "No Hydrogenated Oils",
      "57 Calories",
      "Zero Sugar"
    ],
    "barcode": "6223004405150",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-hot-chocolate-classic",
    "name": "هوت شوكليت كلاسيك",
    "subName": "boxes • 180 EGP • 6223004404344",
    "image": "/artwork/sweet-and-slim/3d/hot-chocolate-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/hot-chocolate-sachet.png",
    "categoryTag": "إكسترا ومشروبات الدايت",
    "tagColor": "#8B5CF6",
    "weight": "25 gm/ sachet",
    "servings": "10 Sachets",
    "flavorProfile": "هوت تشوكليت خالي من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز الهند و ح...",
    "description": "هوت تشوكليت خالي من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز الهند و حليب خالي الدسم",
    "tasteMeters": [
      {
        "label": "عمق الكاكاو والقهوة",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "قوام مخملي كريمي",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "نعومة المذاق",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "توازن الدايت",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "180 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404344"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Zero Sugar • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "خالي من الزيوت المهدرجة",
      "شوكولاتة فاخرة",
      "78 سعر حراري",
      "خالي من الدهون المتحولة"
    ],
    "inStock": true,
    "priceEgp": 180,
    "compareAtPriceEgp": 205,
    "packType": "boxes",
    "dietaryTags": [
      "Zero Sugar",
      "No Hydrogenated Oils",
      "78 Calories"
    ],
    "barcode": "6223004404344",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-hot-chocolate-hazelnut",
    "name": "هوت شوكليت بندق",
    "subName": "boxes • 180 EGP • 6223004404351",
    "image": "/artwork/sweet-and-slim/3d/hot-chocolate-hazelnut-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/hot-chocolate-hazelnut-sachet.png",
    "categoryTag": "إكسترا ومشروبات الدايت",
    "tagColor": "#8B5CF6",
    "weight": "25 gm/ sachet",
    "servings": "10 Sachets",
    "flavorProfile": "هوت تشوكليت خالي من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز الهند و ح...",
    "description": "هوت تشوكليت خالي من الزيوت المهدرجة و الدهون المتحولة حيث يحتوي علي بديل صحي للكريمر مكون من زيت جوز الهند و حليب خالي الدسم",
    "tasteMeters": [
      {
        "label": "عمق الكاكاو والقهوة",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "قوام مخملي كريمي",
        "value": 94,
        "color": "#D97706"
      },
      {
        "label": "نعومة المذاق",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "توازن الدايت",
        "value": 95,
        "color": "#06B6D4"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "180 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404351"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Zero Sugar • No Hydrogenated Oils"
      }
    ],
    "keyBenefits": [
      "خالي من الزيوت المهدرجة",
      "شوكولاتة فاخرة",
      "78 سعر حراري",
      "خالي من الدهون المتحولة"
    ],
    "inStock": true,
    "priceEgp": 180,
    "compareAtPriceEgp": 205,
    "packType": "boxes",
    "dietaryTags": [
      "Zero Sugar",
      "No Hydrogenated Oils",
      "78 Calories"
    ],
    "barcode": "6223004404351",
    "line": "hot-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-smoothie-pina-colada-inulin",
    "name": "سموزي بيناكولادا مدعم بالإينولين",
    "subName": "boxes • 300 EGP • 6223004405679",
    "image": "/artwork/sweet-and-slim/3d/smoothie-pina-colada-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/smoothie-pina-colada-sachet.png",
    "categoryTag": "المشروبات الباردة والسموزي",
    "tagColor": "#06B6D4",
    "weight": "20 gm/sachet",
    "servings": "10 Sachets",
    "flavorProfile": "سموزي منعش مدعم بالانيولين الذي يساعد في عملية الهضم و صحة الامعاء",
    "description": "سموزي منعش مدعم بالانيولين الذي يساعد في عملية الهضم و صحة الامعاء",
    "tasteMeters": [
      {
        "label": "انتعاش الفواكه",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "ألياف وحمض الهيالورونيك",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "قوام السموذي",
        "value": 94,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 99,
        "color": "#3B82F6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "300 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405679"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Prebiotic Inulin • Gut Health"
      }
    ],
    "keyBenefits": [
      "مدعم بـ 5 جم إينولين",
      "صحة الجهاز الهضمي والأمعاء",
      "محلى بسكر ستيفيا",
      "مناسب للكيتو"
    ],
    "inStock": true,
    "priceEgp": 300,
    "compareAtPriceEgp": 345,
    "packType": "boxes",
    "dietaryTags": [
      "Prebiotic Inulin",
      "Gut Health",
      "Sugar Free",
      "Keto Friendly"
    ],
    "barcode": "6223004405679",
    "line": "cold-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  },
  {
    "id": "sweet-slim-smoothie-mixed-berries-collagen",
    "name": "سموزي ميكس بيريز مدعم بالهالورونيك اسيد و فيتامين سي",
    "subName": "boxes • 300 EGP • 6223004405655",
    "image": "/artwork/sweet-and-slim/3d/smoothie-mixed-berry-box.png",
    "hoverImage": "/artwork/sweet-and-slim/3d/smoothie-mixed-berry-sachet.png",
    "categoryTag": "المشروبات الباردة والسموزي",
    "tagColor": "#06B6D4",
    "weight": "20 gm/sachet",
    "servings": "10 Sachets",
    "flavorProfile": "سموزي منعش مدعم باالهيالورونيك أسيد و فيتامين سي لبشرة صحية و أكثر نضارة",
    "description": "سموزي منعش مدعم باالهيالورونيك أسيد و فيتامين سي لبشرة صحية و أكثر نضارة",
    "tasteMeters": [
      {
        "label": "انتعاش الفواكه",
        "value": 96,
        "color": "#06B6D4"
      },
      {
        "label": "ألياف وحمض الهيالورونيك",
        "value": 98,
        "color": "#EC4899"
      },
      {
        "label": "قوام السموذي",
        "value": 94,
        "color": "#10B981"
      },
      {
        "label": "سرعة الذوبان",
        "value": 99,
        "color": "#3B82F6"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "300 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "boxes"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405655"
      },
      {
        "label": "الخصائص الغذائية",
        "value": "Skin Glow • Hyaluronic Acid"
      }
    ],
    "keyBenefits": [
      "125 مجم حمض هيالورونيك",
      "200 مجم فيتامين C",
      "نضارة وترطيب البشرة",
      "محلى بسكر ستيفيا"
    ],
    "inStock": true,
    "priceEgp": 300,
    "compareAtPriceEgp": 345,
    "packType": "boxes",
    "dietaryTags": [
      "Skin Glow",
      "Hyaluronic Acid",
      "Vitamin C",
      "Antioxidant",
      "Sugar Free"
    ],
    "barcode": "6223004405655",
    "line": "cold-beverages",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/sweet-and-slim"
  }
],
    story: {
      title: 'علم الحلاوة الصحية بدون تأنيب ضمير',
      subtitle: 'ريادة تصنيع السكرالوز في مصر',
      leadParagraph: 'في عام 2011، كانت AWA Food Solutions أول من أطلق إنتاج محليات السكرالوز المائدة في مصر تحت علامة Sweet & Slim. أدركنا حاجة المستهلك لمذاق سكر القصب الطبيعي بدون الأضرار الأيضية للسكروز المكرر أو مرار المحليات القديمة.',
      secondaryParagraph: 'نستخدم سكرالوز دوائي أوروبي فائق النقاوة، ونمزجه بألياف غذائية ذائبة لضمان الذوبان الفوري في المشروبات الساخنة والباردة والمثلجة، مما يجعله الخيار المفضل لمرضى السكر ومتبعي الكيتو والعائلات المهتمة بالصحة.',
      stats: [
        { value: '+14 عام', label: 'ريادة في السوق', sub: 'نبتكر محليات صفر سعرات منذ 2011' },
        { value: '0.0 جم', label: 'سكريات مضافة', sub: 'تركيبة سكرالوز دوائي نقي' },
        { value: '220°م', label: 'تحمل حراري بالفرن', sub: 'ثابت بالحرارة للطهي والمخبوزات' },
        { value: '1:10', label: 'قوة التحلية', sub: 'ظرف 1 جم يعادل 10 جم سكر' },
      ],
      bulletPoints: [
        { title: 'تكامل السكرالوز وألياف البريبايوتك', desc: 'يجمع بين الحلاوة الخالية من السعرات وألياف الإينولين المغذية للميكروبيوم المعوي.' },
        { title: 'فحص صارم للمؤشر الجلايسيمي', desc: 'مثبت علمياً بصفر ارتفاع في سكر الدم، آمن لمرضى السكري من النوعين الأول والثاني.' },
        { title: 'تركيبة نقية Clean Label', desc: 'خالي 100% من الأسبارتام المر والأسيسولفام والسكارين وسيكلامات الصوديوم.' },
      ],
      image: '/images/pages/products/sweetslim.png',
      badgeText: 'قطاع الصحة والتغذية في AWA',
    },
    faqs: [
      {
        q: 'هل Sweet & Slim آمن تماماً لمرضى السكري؟',
        a: 'نعم، 100%. يصنع Sweet & Slim من السكرالوز عالي النقاوة الذي يمر عبر الجهاز الهضمي دون أن يتحول إلى كربوهيدرات أو طاقة، ولا يسبب أي ارتفاع في سكر الدم، وهو معتمد من هيئة الدواء المصرية وFDA الأمريكية وهيئة سلامة الغذاء الأوروبية EFSA.',
      },
      {
        q: 'هل يمكنني إعداد الكيك والحلويات بالفرن باستخدام Sweet & Slim؟',
        a: 'بالتأكيد! على عكس الأسبارتام الذي يتحلل ويصبح مراً بالحرارة، يتحمل سكرالوز Sweet & Slim درجات حرارة الفرن حتى 220 درجة مئوية، ويمكن استخدامه في الكيك والبسكويت والكاسترد والحلويات الشرقية.',
      },
      {
        q: 'كم ظرفاً من Sweet & Slim يمكن تناوله بأمان يومياً؟',
        a: 'الحد اليومي المقبول (ADI) للسكرالوز وفق منظمة الصحة العالمية WHO هو 15 ملجم لكل كجم من وزن الجسم. لشخص وزنه 70 كجم، يعادل ذلك أكثر من 100 ظرف يومياً، مما يجعله آمناً تماماً للاستخدام العائلي اليومي.',
      },
    ],
    reviews: [
      {
        author: 'د. سامح عبد الرحمن',
        role: 'استشاري الغدد الصماء والسكري',
        comment: 'أنصح مرضى السكر ومرحلة ما قبل السكري دائماً بالتحول من السكر الأبيض إلى Sweet & Slim. التزام المرضى به رائع لأنه يمنحهم طعم السكر الحقيقي بدون رفع الجلوكوز.',
        rating: 5,
        avatarTag: 'دس',
      },
      {
        author: 'لينا جوهر',
        role: 'أخصائية تغذية ومدربة لياقة',
        comment: 'نسخة الإينولين إكسترا هي خياري الصباحي الأساسي مع القهوة والشوفان. حلاوة طبيعية مع ألياف بريبايوتك تدعم الهضم.',
        rating: 5,
        avatarTag: 'لج',
      },
      {
        author: 'يوسف الخولي',
        role: 'مالك سلسلة كافيهات ومخبوزات كيتو',
        comment: 'نستخدم Sweet & Slim في تشيز كيك الكيتو والحلويات الخالية من السكر. عملاؤنا لا يفرقون بينه وبين السكر الأبيض إطلاقاً.',
        rating: 5,
        avatarTag: 'يخ',
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
  /* 3. YALLA DRINKS - INSTANT BARISTA FRAPPES (ARABIC)              */
  /* ═══════════════════════════════════════════════════════════════ */
  'yalla-drinks': {
    id: 'yalla-drinks',
    brandName: 'Yalla Drinks',
    tagline: 'مشروبات الباريستا الفورية، الفرابيه، وسموذي الفواكه المنعش',
    slogan: 'جودة الكافيهات، في أي وقت وأي مكان. فقط أضف الماء والثلج.',
    vibeDescription: 'تجربة مشروبات عصرية سريعة تمنحك فرابيه مثلج بجودة الباريستا المحترف، ورغوة ميكروفوم غنية، وسموذي فواكه مثلج في علب تجزئة وأكياس كافيهات 1 كجم.',
    vibeKeywords: ['جودة الباريستا', 'سريع الذوبان', 'رغوة كريمية كثيفة', 'فرابيه مثلج', 'نكهات الكافيهات العالمية'],
    theme: {
      primary: '#0284C7',
      secondary: '#E11D48',
      accent: '#22C55E',
      darkBg: '#031424',
      lightBg: '#F0F9FF',
      gradientHero: 'radial-gradient(ellipse at 60% 40%, rgba(2, 132, 199, 0.4) 0%, rgba(225, 29, 72, 0.15) 50%, #031424 100%)',
      buttonGlow: '0 0 35px rgba(2, 132, 199, 0.65)',
    },
    heroSticky: {
      eyebrow: 'منظومة المشروبات العصرية الفورية',
      headline: 'مشروبات الكافيهات الفاخرة بين يديك.',
      subheadline: 'مبتكرة بتكنولوجيا المشروبات سريعة الذوبان في الماء البارد والحليب. حضر سبانش لاتيه مثلج، وبيستاشيو فرابيه، وبينك ليمونيد برغوة مخملية كثيفة في ثوانٍ معدودة.',
      ctaPrimary: 'استكشف مشروبات Yalla Drinks',
      ctaSecondary: 'طلب قائمة الكافيهات والفنادق B2B',
      mainPackImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/spanish latte new-View 1.png',
      companionOrbitImages: [
        {
          image: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/Pistachio new-View 1.png',
          scale: 0.75,
          top: '10%',
          left: '78%',
          zIndex: 5,
          animationDelay: 0.5,
        },
        {
          image: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/pink lemonade-View 1.png',
          scale: 0.7,
          top: '60%',
          left: '10%',
          zIndex: 15,
          animationDelay: 1.0,
        },
        {
          image: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets spanish latte new-View 1.png',
          scale: 0.6,
          top: '68%',
          left: '84%',
          zIndex: 8,
          animationDelay: 0.7,
        },
        {
          image: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/Pina Colada-View 1.png',
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
          text: 'رغوة ميكروفوم مخملية كثيفة',
          sub: 'مستحلب حليبي متطور يحاكي آلات الإسبريسو',
          icon: 'Award',
          side: 'left',
          yOffset: 25,
        },
        {
          id: 'yl-b2',
          text: 'ذوبان فوري بالماء والثلج',
          sub: 'بدون أي تكتل، قوام حريري 100%',
          icon: 'Zap',
          side: 'right',
          yOffset: 35,
        },
        {
          id: 'yl-b3',
          text: 'حبوب بن أرابيكا الفاخرة',
          sub: 'مستخلصات قهوة مختصة 100%',
          icon: 'Coffee',
          side: 'left',
          yOffset: 65,
        },
        {
          id: 'yl-b4',
          text: 'متوفر في علب 10 أظرف وعبوات 1 كجم',
          sub: 'للمنازل وسلاسل الكافيهات والمطاعم',
          icon: 'ShoppingBag',
          side: 'right',
          yOffset: 75,
        },
      ],
      floatingIngredients: [
        { name: 'حبوب البن المحمص', iconEmoji: '☕', blur: '0px', scale: 1.4, speed: 1.2, top: '15%', left: '12%' },
        { name: 'فستق حلبي محمص', iconEmoji: '🥜', blur: '0px', scale: 1.3, speed: 0.9, top: '24%', left: '80%' },
        { name: 'مكعبات ثلج منعشة', iconEmoji: '🧊', blur: '1px', scale: 1.5, speed: 1.5, top: '65%', left: '10%' },
        { name: 'ليمون وردي طازج', iconEmoji: '🍋', blur: '0px', scale: 1.3, speed: 1.1, top: '75%', left: '85%' },
      ],
    },
    flavors: [
      {
        id: 'yl-flv-spanish',
        name: 'فراب إت سبانش لاتيه (Spanish Latte)',
        badge: 'نكهة كافيهات مميزة',
        heroImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/spanish latte new-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets spanish latte new-View 1.png',
        colorPalette: {
          primary: '#0284C7',
          secondary: '#0369A1',
          accent: '#BAE6FD',
          bgGradient: 'linear-gradient(135deg, #02172D 0%, #06395E 50%, #0284C7 100%)',
          ambientGlow: 'rgba(2, 132, 199, 0.45)',
          textAccent: '#7DD3FC',
        },
        tasteHighlights: ['حليب مكثف محلى', 'إسبريسو أرابيكا محمص', 'رغوة حليبية كثيفة', 'فرابيه مثلج فاخر'],
        nutritionalHero: {
          calories: '110 سعرة',
          sugar: '7.8 جم',
          heroMetric: '30 ثانية',
          heroLabel: 'وقت التحضير مع الثلج',
        },
      },
      {
        id: 'yl-flv-pistachio',
        name: 'فراب إت بيستاشيو لاتيه (Pistachio Latte)',
        badge: 'فرابيه فستق فاخر',
        heroImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/Pistachio new-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets pistachio new-View 1.png',
        colorPalette: {
          primary: '#65A30D',
          secondary: '#4D7C0F',
          accent: '#ECFCCB',
          bgGradient: 'linear-gradient(135deg, #0B1B04 0%, #22400A 50%, #65A30D 100%)',
          ambientGlow: 'rgba(101, 163, 13, 0.45)',
          textAccent: '#BEF264',
        },
        tasteHighlights: ['كريمة الفستق الأخضر المحمص', 'حليب مخملي غني', 'نكهة القهوة الفاخرة', 'رغوة فوم غنية'],
        nutritionalHero: {
          calories: '115 سعرة',
          sugar: '8.1 جم',
          heroMetric: 'تريند',
          heroLabel: 'المشروب الأحب بالكافيهات',
        },
      },
      {
        id: 'yl-flv-smoozy-pink',
        name: 'سموزي بينك ليمونيد (Pink Lemonade)',
        badge: 'انتعاش الصيف المثلج',
        heroImage: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/pink lemonade-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Smoozy/Sachets/sachets pink lemonade new-View 1.png',
        colorPalette: {
          primary: '#E11D48',
          secondary: '#BE123C',
          accent: '#FECDD3',
          bgGradient: 'linear-gradient(135deg, #26040C 0%, #540B1D 50%, #BE123C 100%)',
          ambientGlow: 'rgba(225, 29, 72, 0.45)',
          textAccent: '#FDA4AF',
        },
        tasteHighlights: ['ليمون وردي منعش', 'خلاصة التوت البري الحلو', 'مشروب مثلج قاهر للعطش', 'ذوبان فوري بالماء البارد'],
        nutritionalHero: {
          calories: '65 سعرة',
          sugar: '4.2 جم',
          heroMetric: '100% طبيعي',
          heroLabel: 'مستخلصات حمضيات طبيعية',
        },
      },
      {
        id: 'yl-flv-smoozy-pina',
        name: 'سموزي بينا كولادا (Piña Colada)',
        badge: 'سحر الشواطئ الاستوائية',
        heroImage: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/Pina Colada-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Smoozy/Sachets/sachets pina colada new-View 1.png',
        colorPalette: {
          primary: '#D97706',
          secondary: '#B45309',
          accent: '#FEF3C7',
          bgGradient: 'linear-gradient(135deg, #1B0F02 0%, #442706 50%, #B45309 100%)',
          ambientGlow: 'rgba(217, 119, 6, 0.45)',
          textAccent: '#FDE68A',
        },
        tasteHighlights: ['بيوريه الأناناس الذهبي', 'حليب جوز الهند الكريمي', 'بدون أي كحول', 'قوام فرابيه مثلج كلاسيكي'],
        nutritionalHero: {
          calories: '75 سعرة',
          sugar: '5.0 جم',
          heroMetric: 'استوائي',
          heroLabel: 'تناغم الأناناس وجوز الهند',
        },
      },
      {
        id: 'yl-flv-smoozy-mojito',
        name: 'سموزي موهيتو ليمون ونعناع (Mint Mojito)',
        badge: 'انتعاش النعناع والثلج',
        heroImage: '/images/products/Yalla Drinks/Yalla Smoozy/Boxes/Mojito-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Smoozy/Sachets/sachets mojito new-View 1.png',
        colorPalette: {
          primary: '#10B981',
          secondary: '#059669',
          accent: '#A7F3D0',
          bgGradient: 'linear-gradient(135deg, #021E13 0%, #055432 50%, #059669 100%)',
          ambientGlow: 'rgba(16, 185, 129, 0.45)',
          textAccent: '#6EE7B7',
        },
        tasteHighlights: ['نعناع بستاني طازج', 'عصير ليمون أخضر حامض', 'مشروب شيكر مثلج منعش', 'بدون كحول 100%'],
        nutritionalHero: {
          calories: '60 سعرة',
          sugar: '3.8 جم',
          heroMetric: 'مثلج',
          heroLabel: 'قاهر العطش والحرارة',
        },
      },
      {
        id: 'yl-flv-white-mocha',
        name: 'فراب إت وايت شوكلت موكا (White Mocha)',
        badge: 'رغوة شوكولاتة بيضاء فاخرة',
        heroImage: '/images/products/Yalla Drinks/Yalla Frappit/Boxes/white mocha new-View 1.png',
        sachetImage: '/images/products/Yalla Drinks/Yalla Frappit/Sachets/sachets white mocha new-View 1.png',
        colorPalette: {
          primary: '#8B5CF6',
          secondary: '#7C3AED',
          accent: '#EDE9FE',
          bgGradient: 'linear-gradient(135deg, #16072D 0%, #361463 50%, #7C3AED 100%)',
          ambientGlow: 'rgba(139, 92, 246, 0.45)',
          textAccent: '#C4B5FD',
        },
        tasteHighlights: ['زبدة كاكاو بيضاء كريمية', 'بن أرابيكا مختص', 'تاج فوم حليبي سميك', 'يقدم مثلجاً أو ساخناً'],
        nutritionalHero: {
          calories: '120 سعرة',
          sugar: '8.4 جم',
          heroMetric: 'باريستا',
          heroLabel: 'شوكولاتة بيضاء فاخرة',
        },
      },
    ],
    skus: [
  {
    "id": "yalla-frappit-caramel-box-10",
    "name": "يلا فرابيت كارميل بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 200 EGP • 6223004404573",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-caramel-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/caramel.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بالانتعاش مع المذاق الذي لا يُقاوم لـ فرابيت كراميل. ميكس الفرابيه الكريمي بنكهة الكراميل بسهولة مع الث...",
    "description": "استمتع بالانتعاش مع المذاق الذي لا يُقاوم لـ فرابيت كراميل. ميكس الفرابيه الكريمي بنكهة الكراميل بسهولة مع الثلج ليمنحك مشروبًا منعشًا .",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "200 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404573"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404573",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-caramel-sugar-free-box-10",
    "name": "يلا فرابيت كارميل  سويت اند سليمبوكس 10 ساشيت",
    "subName": "10 Sachets Box • 220 EGP • 6223004404986",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-caramel-sugar-free-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/caramel-zero-sugar.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بمذاق الكراميل الغني الذي تحبه مع سعرات حرارية أقل. يمنحك فرابيت  كراميل سويت آند سليم مشروبًا كريميًا ...",
    "description": "استمتع بمذاق الكراميل الغني الذي تحبه مع سعرات حرارية أقل. يمنحك فرابيت  كراميل سويت آند سليم مشروبًا كريميًا ومنعشًا يمتزج بسلاسة مع الثلج لتجربة خفيفة بطعم المقاهي.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "220 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404986"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 220,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404986",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-coffee-box-10",
    "name": "يلا فرابيت قهوة بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 200 EGP • 6223004404580",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-coffee-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/coffee.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "جدّد نشاطك مع المذاق القوي لـ فراب إت قهوة. يتميز بنكهة قهوة غنية تمتزج بسهولة مع الثلج لتمنحك مشروب فرابيه با...",
    "description": "جدّد نشاطك مع المذاق القوي لـ فراب إت قهوة. يتميز بنكهة قهوة غنية تمتزج بسهولة مع الثلج لتمنحك مشروب فرابيه باردًا وناعمًا بجودة المقاهي.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "200 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404580"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404580",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-coffee-sugar-free-box-10",
    "name": "يلا فرابيت كلاسيك  سويت اند سليم بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 220 EGP • 6223004404979",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-coffee-sugar-free-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/coffee-zero-sugar.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بالمذاق الأصيل للقهوة مع سعرات حرارية أقل. يقدم لك فراب إت قهوة سويت آند سليم مشروبًا باردًا وكريميًا و...",
    "description": "استمتع بالمذاق الأصيل للقهوة مع سعرات حرارية أقل. يقدم لك فراب إت قهوة سويت آند سليم مشروبًا باردًا وكريميًا ومنعشًا بطعم غني مستوحى من المقاهي.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "220 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404979"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 220,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404979",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-mocha-box-10",
    "name": "يلا فرابيت موكا بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 200 EGP • 6223004404597",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-mocha-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/mocha.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "دلّل نفسك بالمزيج المثالي من القهوة والشوكولاتة مع فراب إت موكا. يمنحك مشروبًا كريميًا وغنيًا بقوام مخملي ومذا...",
    "description": "دلّل نفسك بالمزيج المثالي من القهوة والشوكولاتة مع فراب إت موكا. يمنحك مشروبًا كريميًا وغنيًا بقوام مخملي ومذاق موكا فاخر في كل رشفة.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "200 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404597"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404597",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-white-mocha-box-10",
    "name": "يلا فرابيت وايت موكا بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 200 EGP • 6223004404542",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-white-mocha-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/white-mocha.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بفخامة المذاق مع فراب إت وايت موكا. يجمع بين الشوكولاتة البيضاء الكريمية ولمسات القهوة الغنية ليمنحك مش...",
    "description": "استمتع بفخامة المذاق مع فراب إت وايت موكا. يجمع بين الشوكولاتة البيضاء الكريمية ولمسات القهوة الغنية ليمنحك مشروبًا فاخرًا ومنعشًا بجودة المقاهي.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "200 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404542"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404542",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-hazelnut-chocolate-box-10",
    "name": "يلا فراب إت شوكولاتة بالبندق بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 200 EGP • 6223004404566",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-hazelnut-chocolate-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/chocolate-hazelnut.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بالمذاق الذي لا يُقاوم مع فراب إت شوكولاتة بالبندق. يجمع بين الشوكولاتة الغنية ونكهة البندق المحمص في م...",
    "description": "استمتع بالمذاق الذي لا يُقاوم مع فراب إت شوكولاتة بالبندق. يجمع بين الشوكولاتة الغنية ونكهة البندق المحمص في مشروب كريمي ومنعش ليمنحك تجربة كافيهات فاخرة مع كل رشفة.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "200 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404566"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404566",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-pistachio-latte-box-10",
    "name": "يلا فرابيت فسدق بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 230 EGP • 6223004404559",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-pistachio-latte-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/pistachio-latte-2.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع برقي المذاق مع فراب إت بيستاشيو لاتيه. تمتزج نكهة الفستق الكريمية مع لمسات القهوة الناعمة لتمنحك مشروبً...",
    "description": "استمتع برقي المذاق مع فراب إت بيستاشيو لاتيه. تمتزج نكهة الفستق الكريمية مع لمسات القهوة الناعمة لتمنحك مشروبًا مخمليًا ومنعشًا بجودة الكافيهات.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "230 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404559"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 230,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404559",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-coffee-toffee-box-10",
    "name": "يلا فرابيت كوفي توفي بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 200 EGP • 6223004404610",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-coffee-toffee-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/coffee-toffee.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بالتوازن المثالي مع فراب إت كوفي توفي. تمتزج القهوة الغنية مع نكهة التوفي الكريمية لتمنحك مشروبًا منعشً...",
    "description": "استمتع بالتوازن المثالي مع فراب إت كوفي توفي. تمتزج القهوة الغنية مع نكهة التوفي الكريمية لتمنحك مشروبًا منعشًا ولذيذًا بجودة الكافيهات. يأتي في عبوة تضم 10 أكياس لتستمتع به في أي وقت.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "200 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404610"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404610",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-vanilla-box-10",
    "name": "يلا فرابيت فانيلا بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 200 EGP • 6223004404603",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-vanilla-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/vanilla.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بالمذاق الكلاسيكي لـ فراب إت فانيليا. تمتزج نكهة الفانيليا الغنية مع الثلج لتمنحك مشروبًا كريميًا ومنعش...",
    "description": "استمتع بالمذاق الكلاسيكي لـ فراب إت فانيليا. تمتزج نكهة الفانيليا الغنية مع الثلج لتمنحك مشروبًا كريميًا ومنعشًا ومتوازنًا بطعم لا يُقاوم.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "200 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404603"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 200,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404603",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-frappit-spanish-latte-box-10",
    "name": "يلا فرابيت سبانيش لاتية بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 220 EGP • 6223004404535",
    "image": "/artwork/yalla-drinks/3d/yalla-frappit-spanish-latte-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/spanish-latte.png",
    "categoryTag": "فرابيه مثلج سريع التحضير",
    "tagColor": "#0284C7",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بالمذاق الغني مع فراب إت سبانيش لاتيه. تمتزج القهوة الناعمة مع لمسات الحليب الكريمية والحلاوة المتوازنة...",
    "description": "استمتع بالمذاق الغني مع فراب إت سبانيش لاتيه. تمتزج القهوة الناعمة مع لمسات الحليب الكريمية والحلاوة المتوازنة لتمنحك مشروبًا منعشًا بقوام كريمي وتجربة كافيهات لا تُقاوم.",
    "tasteMeters": [
      {
        "label": "كثافة النكهة",
        "value": 96,
        "color": "#0284C7"
      },
      {
        "label": "رغوة المايكروفوم",
        "value": 97,
        "color": "#10B981"
      },
      {
        "label": "نعومة الملمس",
        "value": 98,
        "color": "#8B5CF6"
      },
      {
        "label": "سرعة الذوبان البارد",
        "value": 99,
        "color": "#38BDF8"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "220 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404535"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 220,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404535",
    "line": "frappit",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-mixed-berries-box-10",
    "name": "يلا سموزي ميكس توت 10 ساشيت",
    "subName": "10 Sachets Box • 210 EGP • 6223004404764",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-mixed-berries-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/mixed-berries.png",
    "categoryTag": "سموزي فواكه طبيعية بودر",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بالمزيج الغني من نكهات التوت مع يلا سموزي مشكل التوت. يجمع بين المذاق الحلو والمنعش للتوت ليمنحك سموزي ...",
    "description": "استمتع بالمزيج الغني من نكهات التوت مع يلا سموزي مشكل التوت. يجمع بين المذاق الحلو والمنعش للتوت ليمنحك سموزي ناعمًا ومثلجًا، مثاليًا للاستمتاع به في أي وقت من اليوم.",
    "tasteMeters": [
      {
        "label": "كثافة الفاكهة الطبيعية",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "ملمس مخملي في الخلاط",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "حموضة منعشة",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "ثبات السلاش مع الثلج",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "210 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404764"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404764",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-mojito-box-10",
    "name": "يلا سموزي  موخيتو 10 ساشيت",
    "subName": "10 Sachets Box • 210 EGP • 6223004404740",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-mojito-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/mojito.png",
    "categoryTag": "سموزي فواكه طبيعية بودر",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "انتعش مع يلا سموزي موهيتو. يجمع بين نكهة الليمون المنعشة وبرودة النعناع ليمنحك سموذي ناعمًا ومثلجًا بطعم منعش ...",
    "description": "انتعش مع يلا سموزي موهيتو. يجمع بين نكهة الليمون المنعشة وبرودة النعناع ليمنحك سموذي ناعمًا ومثلجًا بطعم منعش ومثالي لكل الأوقات.",
    "tasteMeters": [
      {
        "label": "كثافة الفاكهة الطبيعية",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "ملمس مخملي في الخلاط",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "حموضة منعشة",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "ثبات السلاش مع الثلج",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "210 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404740"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404740",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-pina-colada-box-10",
    "name": "يلا سموزي بينا كولادا 10 ساشيت",
    "subName": "10 Sachets Box • 210 EGP • 6223004404757",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-pina-colada-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/pina-colada.png",
    "categoryTag": "سموزي فواكه طبيعية بودر",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "اهرب إلى أجواء الجزر الاستوائية مع يلا سموزي بينا كولادا. يجمع بين المذاق المنعش للأناناس وجوز الهند الكريمي ل...",
    "description": "اهرب إلى أجواء الجزر الاستوائية مع يلا سموزي بينا كولادا. يجمع بين المذاق المنعش للأناناس وجوز الهند الكريمي ليمنحك سموذي ناعمًا ومنعشًا، مثاليًا للاستمتاع به في أي وقت من اليوم.",
    "tasteMeters": [
      {
        "label": "كثافة الفاكهة الطبيعية",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "ملمس مخملي في الخلاط",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "حموضة منعشة",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "ثبات السلاش مع الثلج",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "210 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404757"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404757",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-smoozy-pink-lemonade-box-10",
    "name": "يلا سموزي بينك ليمون 10 ساشيت",
    "subName": "10 Sachets Box • 210 EGP • 6223004404733",
    "image": "/artwork/yalla-drinks/3d/yalla-smoozy-pink-lemonade-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/pink-lemonade.png",
    "categoryTag": "سموزي فواكه طبيعية بودر",
    "tagColor": "#F59E0B",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "أنعش يومك مع يلا سموزي بينك ليمونيد. يجمع بين نكهة الليمون المنعشة و الفراولة ولمسة من الحلاوة الفاكهية ليمنحك...",
    "description": "أنعش يومك مع يلا سموزي بينك ليمونيد. يجمع بين نكهة الليمون المنعشة و الفراولة ولمسة من الحلاوة الفاكهية ليمنحك سموزي ناعمًا ومثلجًا بطعم منعش وحيوي في كل رشفة.",
    "tasteMeters": [
      {
        "label": "كثافة الفاكهة الطبيعية",
        "value": 97,
        "color": "#F59E0B"
      },
      {
        "label": "ملمس مخملي في الخلاط",
        "value": 96,
        "color": "#10B981"
      },
      {
        "label": "حموضة منعشة",
        "value": 94,
        "color": "#EC4899"
      },
      {
        "label": "ثبات السلاش مع الثلج",
        "value": 98,
        "color": "#0284C7"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "210 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004404733"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 210,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004404733",
    "line": "smoozy",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-koffi-caffe-latte-box-10",
    "name": "يلا كوفي لاتية 10 ساشيت",
    "subName": "10 Sachets Box • 180 EGP • 6223004405341",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-caffe-latte-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-cofe.png",
    "categoryTag": "قهوة لاتيه باريستا فاخرة",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بمذاق Coffee مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "description": "استمتع بمذاق Coffee مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "tasteMeters": [
      {
        "label": "تحميص بن أرابيكا",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "رغوة حريرية غنية",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "رائحة القهوة المركزة",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "توازن الحليب والكريمة",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "180 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405341"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405341",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-koffi-caramel-box-10",
    "name": "يلا كوفي كارميل 10 ساشيت",
    "subName": "10 Sachets Box • 180 EGP • 6223004405358",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-caramel-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-caramel.png",
    "categoryTag": "قهوة لاتيه باريستا فاخرة",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بمذاق Caramel مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "description": "استمتع بمذاق Caramel مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "tasteMeters": [
      {
        "label": "تحميص بن أرابيكا",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "رغوة حريرية غنية",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "رائحة القهوة المركزة",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "توازن الحليب والكريمة",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "180 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405358"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405358",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-koffi-hazelnut-box-10",
    "name": "يلا كوفي بندق 10 ساشيت",
    "subName": "10 Sachets Box • 180 EGP • 6223004405372",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-hazelnut-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-hazelnut.png",
    "categoryTag": "قهوة لاتيه باريستا فاخرة",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بمذاق Hazelnut مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "description": "استمتع بمذاق Hazelnut مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "tasteMeters": [
      {
        "label": "تحميص بن أرابيكا",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "رغوة حريرية غنية",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "رائحة القهوة المركزة",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "توازن الحليب والكريمة",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "180 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405372"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405372",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-koffi-mocha-box-10",
    "name": "يلا كوفي موكا 10 ساشيت",
    "subName": "10 Sachets Box • 180 EGP • 6223004405365",
    "image": "/artwork/yalla-drinks/3d/yalla-koffi-mocha-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-koffi-mocha.png",
    "categoryTag": "قهوة لاتيه باريستا فاخرة",
    "tagColor": "#8B5CF6",
    "weight": "25 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بمذاق Mocha مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "description": "استمتع بمذاق Mocha مع Yalla Koffi. تجربة غنية وسهلة التحضير تمنحك جودة الكافيه في أي وقت.",
    "tasteMeters": [
      {
        "label": "تحميص بن أرابيكا",
        "value": 96,
        "color": "#8B5CF6"
      },
      {
        "label": "رغوة حريرية غنية",
        "value": 95,
        "color": "#0284C7"
      },
      {
        "label": "رائحة القهوة المركزة",
        "value": 97,
        "color": "#D97706"
      },
      {
        "label": "توازن الحليب والكريمة",
        "value": 94,
        "color": "#10B981"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "180 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "6223004405365"
      }
    ],
    "keyBenefits": [
      "سهل التحضير",
      "مذاق غني",
      "جودة عالية"
    ],
    "inStock": true,
    "priceEgp": 180,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "barcode": "6223004405365",
    "line": "koffi",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-choco-classic-box-10",
    "name": "يلا شوكو كلاسيك شوكولاتة إيطالية ساخنة بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 195 EGP",
    "image": "/artwork/yalla-drinks/3d/yalla-choco-classic-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-choco-hot-chocolate.png",
    "categoryTag": "شوكولاتة ساخنة فاخرة",
    "tagColor": "#D97706",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "استمتع بمذاق الشوكولاتة الساخنة الإيطالية الفاخرة بقوام كريمي كثيف ومخملي مصنوعة من أجود أنواع الكاكاو الهولند...",
    "description": "استمتع بمذاق الشوكولاتة الساخنة الإيطالية الفاخرة بقوام كريمي كثيف ومخملي مصنوعة من أجود أنواع الكاكاو الهولندي الفاخر.",
    "tasteMeters": [
      {
        "label": "غنى الكاكاو الهولندي",
        "value": 98,
        "color": "#D97706"
      },
      {
        "label": "قوام شوكولاتة كثيف",
        "value": 97,
        "color": "#8B5CF6"
      },
      {
        "label": "طابع إيطالي أصيل",
        "value": 96,
        "color": "#DC2626"
      },
      {
        "label": "تناغم الحلاوة",
        "value": 94,
        "color": "#F59E0B"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "195 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "قوام إيطالي كثيف",
      "كاكاو هولندي فاخر",
      "رغوة مخملية سريعة التحضير"
    ],
    "inStock": true,
    "priceEgp": 195,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "line": "choco",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  },
  {
    "id": "yalla-choco-hazelnut-box-10",
    "name": "يلا شوكو شوكولاتة ساخنة بالبندق بوكس 10 ساشيت",
    "subName": "10 Sachets Box • 195 EGP",
    "image": "/artwork/yalla-drinks/3d/yalla-choco-hazelnut-box.png",
    "hoverImage": "/artwork/yalla-drinks/thumbnails/yalla-choco-hot-chocolate-hazelnut.png",
    "categoryTag": "شوكولاتة ساخنة فاخرة",
    "tagColor": "#D97706",
    "weight": "35 g",
    "servings": "10 sachets",
    "flavorProfile": "شوكولاتة ساخنة فاخرة ممزوجة بنكهة البندق المحمص وقوام كريمي دافئ وغني بجودة المقاهي العالمية.",
    "description": "شوكولاتة ساخنة فاخرة ممزوجة بنكهة البندق المحمص وقوام كريمي دافئ وغني بجودة المقاهي العالمية.",
    "tasteMeters": [
      {
        "label": "غنى الكاكاو الهولندي",
        "value": 98,
        "color": "#D97706"
      },
      {
        "label": "قوام شوكولاتة كثيف",
        "value": 97,
        "color": "#8B5CF6"
      },
      {
        "label": "طابع إيطالي أصيل",
        "value": 96,
        "color": "#DC2626"
      },
      {
        "label": "تناغم الحلاوة",
        "value": 94,
        "color": "#F59E0B"
      }
    ],
    "nutritionFacts": [
      {
        "label": "السعر الرسمي",
        "value": "195 EGP"
      },
      {
        "label": "العبوة والتنسيق",
        "value": "10 Sachets Box"
      },
      {
        "label": "صلاحية المنتج",
        "value": "18 months"
      },
      {
        "label": "باركود دولي",
        "value": "AWA-Verified"
      }
    ],
    "keyBenefits": [
      "نكهة البندق المحمص",
      "قوام كريمي غني",
      "بدون ماكينة إسبريسو"
    ],
    "inStock": true,
    "priceEgp": 195,
    "packType": "10 Sachets Box",
    "dietaryTags": [],
    "line": "choco",
    "buyUrl": "https://awa-shopping-chi.vercel.app/ar/yalla-drinks"
  }
],
    story: {
      title: 'إعادة ابتكار تجربة المشروبات سريعة التحضير',
      subtitle: 'تكنولوجيا مستحلبات ومشروبات الباريستا من AWA',
      leadParagraph: 'مع تزايد الإقبال على مشروبات الكافيهات الفاخرة مثل السبانش لاتيه والسموذي المثلج، واجه المستهلكون صعوبة في تحضيرها منزلياً، حيث تتطلب عادةً ماكينات إسبريسو معقدة ومساحيق صناعية باهظة.',
      secondaryParagraph: 'طوّر فريق البحث والتطوير R&D في AWA تقنية الخلط المجفف بالرش لتثبيت مستحلبات الحليب والزيوت العطرية لحبوب البن، مما يمنح مساحيق Yalla Drinks قدرة فريدة على تشكيل رغوة ميكروفوم كريمية والذوبان التام في السوائل المثلجة خلال 20 ثانية فقط.',
      stats: [
        { value: '100%', label: 'ذوبان بالسوائل المثلجة', sub: 'بدون أي تكتلات' },
        { value: '30 ثانية', label: 'وقت التحضير', sub: 'في الشيكر أو الخلاط مع الثلج' },
        { value: '96%', label: 'كثافة رغوة الفوم', sub: 'مستحلب حليبي دقيق' },
        { value: '10+', label: 'نكهات عالمية', sub: 'فرابيه وسموذي وموكا' },
      ],
      bulletPoints: [
        { title: 'تقنية مستحلب الميكروفوم الفوري', desc: 'تولد رغوة حليبية كثيفة ومستقرة بمجرد الخفق اليدوي أو بالخلاط.' },
        { title: 'مستخلصات قهوة أرابيكا طبيعية', desc: 'تحافظ على النوتات العطرية للتحميص دون مرارة الحرق.' },
        { title: 'حلول متكاملة للمنازل والكافيهات', desc: 'نوفر أظرف التجزئة اليومية وعبوات 1 كجم المخصصة للمطاعم ومحلات المشروبات.' },
      ],
      image: '/images/pages/products/retail/yalla/cover.png',
      badgeText: 'قطاع المشروبات والعصائر في AWA',
    },
    faqs: [
      {
        q: 'كيف يمكنني تحضير سبانش لاتيه أو بيستاشيو فرابيه في المنزل؟',
        a: 'ببساطة أفرغ محتويات الظرف (25 جم) في كوب أو شيكر، أضف 150 مل من الحليب البارد (أو الماء) و 4-5 مكعبات ثلج، واخلط لمدة 20-30 ثانية حتى تتكون رغوة الفوم الكثيفة.',
      },
      {
        q: 'هل يمكن شرب Yalla Drinks ساخناً؟',
        a: 'نعم! نكهات القهوة والموكا (مثل السبانش لاتيه والوايت موكا) ممتازة عند إذابتها في 180 مل من الحليب الساخن أو الماء الساخن للحصول على مشروب دافئ غني بالرغوة.',
      },
      {
        q: 'هل توفرون عبوات اقتصادية للكافيهات وسلاسل المشروبات؟',
        a: 'نعم، نوفر أكياس باريستا بوزن 1 كجم من كافة النكهات مخصصة للكافيهات والمطاعم مع جداول نسب التحضير القياسية ومواصفات التشغيل.',
      },
    ],
    reviews: [
      {
        author: 'ماجد الألفي',
        role: 'كبير الباريستا، الإسكندرية',
        comment: 'مساحيق Yalla Drinks وفرت علينا وقتاً وتكاليف ضخمة في قسم الفرابيه. ثبات الرغوة وطعم السبانش لاتيه ينافس المستورد بجدارة.',
        rating: 5,
        avatarTag: 'مأ',
      },
      {
        author: 'سلمى حجازي',
        role: 'طالبة جامعية وعاشقة قهوة',
        comment: 'البيستاشيو فرابيه يجنن! وفّر عليّ مصاريف الكافيهات اليومية. أحضره في دقيقة واحدة قبل النزول للجامعة.',
        rating: 5,
        avatarTag: 'سح',
      },
      {
        author: 'عمر الشناوي',
        role: 'مدير سلسلة كافيهات تيك أواي',
        comment: 'سموزي البينك ليمونيد والبينا كولادا كانا الأعلى مبيعاً في الصيف. لا تكتل وسريع التحضير جداً في أوقات الذروة.',
        rating: 5,
        avatarTag: 'عش',
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

export const getFmcgBrandData = (
  brandId: 'squeasy' | 'sweet-and-slim' | 'yalla-drinks',
  language: 'en' | 'ar' = 'en'
): FmcgBrandData => {
  if (language === 'ar') {
    return FMCG_BRANDS_AR[brandId] || FMCG_BRANDS[brandId];
  }
  return FMCG_BRANDS[brandId];
};


