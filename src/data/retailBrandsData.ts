export interface RetailBrand {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  heroImage: string;
  logo?: string;
  video?: string;
  themeColor: string;
  gradientBg: string;
  accentColor: string;
  description: string;
  longDescription: string;
  nutritionHighlights: { title: string; desc: string; icon: string }[];
  products: {
    name: string;
    image: string;
    volume: string;
    flavor: string;
    description: string;
  }[];
  gallery: string[];
  retailers: string[];
}

export const RETAIL_BRANDS_DATA: RetailBrand[] = [
  {
    id: 'sweet-and-slim',
    name: 'Sweet & Slim',
    tagline: 'Zero Calories. 100% Pure Guilt-Free Sweetness.',
    category: 'Healthy Diet & Sweeteners',
    badge: 'Egypt’s #1 Sucralose Brand',
    heroImage: '/images/pages/products/sweetslim.png',
    themeColor: '#00843d',
    gradientBg: 'linear-gradient(135deg, #022b16 0%, #084c25 50%, #0d6e37 100%)',
    accentColor: '#4ade80',
    description: 'Egypt’s market-leading zero calorie sugar replacer formulated with premium pharmaceutical-grade sucralose and soluble dietary fibers.',
    longDescription: 'Engineered by food scientists to deliver the crisp, clean sweetness of cane sugar without the metabolic burden. Ideal for individuals managing diabetes, ketogenic lifestyles, weight loss, and general wellness. Fully heat-stable for hot tea, espresso, gourmet baking, and cooking.',
    nutritionHighlights: [
      { title: '0 Calories & 0 Carbs', desc: 'No glycemic impact on blood glucose', icon: 'Sparkles' },
      { title: 'Aspartame Free', desc: 'No bitter chemical aftertaste or cyclamates', icon: 'ShieldCheck' },
      { title: 'Bake & Heat Stable', desc: 'Maintains sweetness up to 220°C in cooking', icon: 'Flame' },
      { title: 'Prebiotic Fibers', desc: 'Enriched with natural soluble fibers for gut health', icon: 'Heart' },
    ],
    products: [
      {
        name: 'Sweet & Slim Sachet Dispenser Box (50/100 Sachets)',
        image: '/images/pages/products/retail/sweet-slim/picture5.png',
        volume: '50 / 100 Sticks',
        flavor: 'Original Sucralose',
        description: 'Single-serve moisture-barrier sachets. Each stick equals 2 teaspoons of sugar.'
      },
      {
        name: 'Sweet & Slim Table-Top Culinary Jar (250g)',
        image: '/images/pages/products/retail/sweet-slim/picture5-2.png',
        volume: '250g Jar with Spoon',
        flavor: 'Original Granular',
        description: 'Spoon-for-spoon equivalent to standard table sugar for home kitchen use.'
      },
      {
        name: 'Sweet & Slim Stevia Nature Blend',
        image: '/images/pages/products/retail/sweet-slim/stevia.png',
        volume: '100 Sachets Box',
        flavor: 'Plant-Based Stevia',
        description: 'Pure Steviol Glycosides (Reb-A 98%) blended with prebiotic erythritol.'
      },
      {
        name: 'Sweet & Slim Pocket Dispenser Tablets',
        image: '/images/pages/products/retail/sweet-slim/ss.png',
        volume: '100 & 300 Micro Tablets',
        flavor: 'Instant Dissolve',
        description: 'Convenient one-click pocket dispenser for on-the-go coffee and tea.'
      }
    ],
    gallery: [
      '/images/pages/products/retail/sweet-slim/picture1.jpg',
      '/images/pages/products/retail/sweet-slim/picture2.jpg',
      '/images/pages/products/retail/sweet-slim/picture3.jpg',
      '/images/pages/products/retail/sweet-slim/picture4.jpg',
      '/images/pages/products/retail/sweet-slim/picture6.jpg',
      '/images/pages/products/retail/sweet-slim/picture7.jpg',
      '/images/pages/products/retail/sweet-slim/picture8.jpg',
      '/images/pages/products/retail/sweet-slim/picture9.jpg',
      '/images/pages/products/retail/sweet-slim/picture10.jpg',
      '/images/pages/products/retail/sweet-slim/picture11.jpg',
      '/images/pages/products/retail/sweet-slim/picture12.jpg',
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
      '/images/pages/products/retail/hyber9.png',
      '/images/pages/products/retail/hyber10.png',
    ]
  },
  {
    id: 'squeasy',
    name: 'SquEasy Purées & Sauces',
    tagline: 'Artisanal Dessert & Barista Purées In No-Drip Squeeze Bottles.',
    category: 'Gourmet Culinary & Mixology',
    badge: 'Pro Barista & Pastry Choice',
    heroImage: '/images/pages/products/SquEasy.png',
    video: '/images/pages/products/squeasy.mp4',
    themeColor: '#d97706',
    gradientBg: 'linear-gradient(135deg, #2b1102 0%, #632703 50%, #9a3412 100%)',
    accentColor: '#f59e0b',
    description: 'Rich, luscious real fruit and confectionery purées in precision squeeze bottles designed for coffee shops, bakeries, ice cream artisans, and culinary lovers.',
    longDescription: 'Created with high real-fruit pulp concentration, vibrant natural hues, and a velvety viscosity that maintains intricate art patterns on milk foam, waffles, crepes, and plated gourmet desserts. Ergonomic no-drip silicone valve ensures clean service without mess.',
    nutritionHighlights: [
      { title: 'Real Fruit Content', desc: 'Made from harvested strawberries, mangoes & berries', icon: 'Sparkles' },
      { title: 'No-Drip Silicone Valve', desc: 'Precision artistic drizzle without messy leakage', icon: 'ShieldCheck' },
      { title: 'Vibrant Texture', desc: 'Holds crisp shape on warm waffles and cold foams', icon: 'Flame' },
      { title: 'Shelf Stable', desc: 'Room temperature stability before opening', icon: 'Heart' },
    ],
    products: [
      {
        name: 'SquEasy Strawberry Supreme Purée',
        image: '/images/pages/products/retail/squeasy/p1.png',
        volume: '1000g & 500g Bottle',
        flavor: 'Fresh Mediterranean Strawberry',
        description: 'Vibrant crimson puree with real strawberry seeds and intense natural aroma.'
      },
      {
        name: 'SquEasy Belgian Dark Chocolate Drizzle',
        image: '/images/pages/products/retail/squeasy/p2.png',
        volume: '1000g Bottle',
        flavor: 'Rich Dutch Cocoa',
        description: 'Velvety cocoa reduction with glossy sheen for mocha, frappes, and churros.'
      },
      {
        name: 'SquEasy Salted Caramel Confiture',
        image: '/images/pages/products/retail/squeasy/p3.png',
        volume: '1000g Bottle',
        flavor: 'Golden Butter Caramel',
        description: 'Slow-cooked caramelized sugar with a delicate pinch of sea salt.'
      },
      {
        name: 'SquEasy Mango & Passionfruit Coulis',
        image: '/images/pages/products/retail/squeasy/p4.png',
        volume: '1000g Bottle',
        flavor: 'Tropical Alphonso Mango',
        description: 'Sweet, exotic fruit blend bursting with tropical acidity and sunshine.'
      }
    ],
    gallery: [
      '/images/pages/products/retail/squeasy/cover.png',
      '/images/pages/products/retail/squeasy/coverone.png',
      '/images/pages/products/squeasy.jpg',
      '/images/pages/products/retail1.jpg',
      '/images/pages/products/retail/squeasy/harissa.png',
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
      '/images/pages/products/retail/hyber9.png',
      '/images/pages/products/retail/hyber10.png',
    ]
  },
  {
    id: 'yalla-drinks',
    name: 'Yalla Drinks Series',
    tagline: 'Café-Style Frappes, Smoozy Fruit Mixes & Instant Coffees.',
    category: 'Instant Cafe Beverage Systems',
    badge: 'Popular Foodservice & Retail Line',
    heroImage: '/images/pages/products/frapit.jpg',
    themeColor: '#0284c7',
    gradientBg: 'linear-gradient(135deg, #081d38 0%, #034575 50%, #0284c7 100%)',
    accentColor: '#38bdf8',
    description: 'Gourmet cafe powdered beverage systems including Yalla Frapp It, Yalla Smoozy, and Yalla Koffi for instant barista indulgence at home or hotel chains.',
    longDescription: 'Formulated with instant micro-encapsulated dairy and vegetable creamer bases, rich Colombian coffee extracts, and stabilized natural fruit compounds. Blends instantly with ice, cold milk, or water to yield thick, frosty frappes with rich long-lasting foam tops.',
    nutritionHighlights: [
      { title: 'Barista Overrun & Foam', desc: 'Superior foam stability and velvety micro-texture', icon: 'Sparkles' },
      { title: 'Instant Ice Blend', desc: 'Quickly dissolves with milk or water and crushed ice', icon: 'ShieldCheck' },
      { title: 'High Yield Per Bag', desc: 'Approx. 25-30 tall café servings per 1kg foil bag', icon: 'Flame' },
      { title: 'Halal & ISO 22000', desc: 'Produced in certified sterile packaging cleanrooms', icon: 'Heart' },
    ],
    products: [
      {
        name: 'Yalla Frapp It - Caramel Velvet Frappe',
        image: '/images/pages/products/retail/yalla-drinks/yallacarmel.png',
        volume: '1kg Aluminium Foil Bag',
        flavor: 'Buttery Caramel & Vanilla',
        description: 'The definitive iced frappe mix with thick frosty body and rich aroma.'
      },
      {
        name: 'Yalla Frapp It - Choco Fudge Mocha',
        image: '/images/pages/products/retail/yalla-drinks/yallachoco.png',
        volume: '1kg Aluminium Foil Bag',
        flavor: 'Dark Chocolate Fudge',
        description: 'Decadent cocoa blend with balanced sweetness for iced or hot frappes.'
      },
      {
        name: 'Yalla Smoozy - Mixed Berry Smoothie Base',
        image: '/images/pages/products/retail/yalla-drinks/yallasmozy.png',
        volume: '1kg Aluminium Foil Bag',
        flavor: 'Wild Berry Fruit Burst',
        description: 'Real fruit-powder smoothie base that thickens beautifully in blender.'
      },
      {
        name: 'Yalla Koffi - 3-in-1 Specialty Instant Coffee',
        image: '/images/pages/products/retail/yalla-drinks/yallakofi.png',
        volume: '1kg Bag / 24 Sachets Box',
        flavor: 'Golden Roasted Arabica',
        description: 'Premium roasted instant coffee with rich silky dairy foam head.'
      }
    ],
    gallery: [
      '/images/pages/products/retail/yalla-drinks/frap.png',
      '/images/pages/products/retail/yalla-drinks/frape1.png',
      '/images/pages/products/retail/yalla-drinks/frape2.png',
      '/images/pages/products/retail/yalla-drinks/frape3.png',
      '/images/pages/products/retail/yalla-drinks/smoozy1.png',
      '/images/pages/products/retail/yalla-drinks/smozy.png',
      '/images/pages/products/retail/yalla-drinks/market1.png',
      '/images/pages/products/retail/yalla-drinks/market2.png',
      '/images/pages/products/retail/yalla-drinks/market3.png',
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
      '/images/pages/products/retail/hyber9.png',
      '/images/pages/products/retail/hyber10.png',
    ]
  }
];
