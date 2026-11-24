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
    logo: '/images/logos/Sweet&slim logo.png',
    heroImage: '/images/pages/products/sweetslim.png',
    themeColor: '#00843d',
    gradientBg: 'linear-gradient(135deg, #022b16 0%, #084c25 50%, #0d6e37 100%)',
    accentColor: '#4ade80',
    description: 'Egypt’s market-leading zero calorie sugar replacer formulated with premium pharmaceutical-grade sucralose and soluble dietary fibers.',
    longDescription: 'Engineered by food scientists to deliver the crisp, clean sweetness of cane sugar without the metabolic burden. Ideal for individuals managing diabetes, ketogenic lifestyles, weight loss, and general wellness. Fully heat-stable for hot tea, espresso, gourmet baking, and cooking.',
    nutritionHighlights: [
      { title: '0 Calories & 0 Carbs', desc: 'No glycemic impact on blood glucose', icon: 'Award' },
      { title: 'Aspartame Free', desc: 'No bitter chemical aftertaste or cyclamates', icon: 'ShieldCheck' },
      { title: 'Bake & Heat Stable', desc: 'Maintains sweetness up to 220°C in cooking', icon: 'Flame' },
      { title: 'Prebiotic Fibers', desc: 'Enriched with natural soluble fibers for gut health', icon: 'Heart' },
    ],
    products: [
      {
        name: 'Sweet & Slim Classic Sweetener 100 Sachets Box',
        image: '/artwork/sweet-and-slim/3d/classic-100-box.png',
        volume: '100 Sachets Box (110 EGP)',
        flavor: 'Original Sucralose & Corn Carrier',
        description: 'Single-serve moisture-barrier sachets. Each stick equals 2 teaspoons of table sugar with zero calories.'
      },
      {
        name: 'Sweet & Slim Spearmint Pocket Sliding Tin',
        image: '/artwork/sweet-and-slim/3d/spearmint-tin.png',
        volume: '40 Pcs Pocket Tin (65 EGP)',
        flavor: 'Cool Spearmint Essential Oil',
        description: 'Sugar-free dental-safe breath mints in a sleek sliding metal tin.'
      },
      {
        name: 'Sweet & Slim 3in1 Coffee Classic Sachet',
        image: '/artwork/sweet-and-slim/3d/coffee-3in1-box.png',
        volume: 'Box 12 Sachets (95 EGP)',
        flavor: 'Diet Arabica Coffee & Creamer',
        description: 'Instant rich coffee blend sweetened with Sweet & Slim, low in calories.'
      },
      {
        name: 'Sweet & Slim Piña Colada Functional Smoothie',
        image: '/artwork/sweet-and-slim/3d/smoothie-pina-colada-box.png',
        volume: 'Box 10 Sachets (120 EGP)',
        flavor: 'Pineapple & Coconut with Inulin',
        description: 'Cold smoothie beverage enriched with natural chicory inulin fiber.'
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
    logo: '/images/logos/squeasy logo.png',
    heroImage: '/images/pages/products/SquEasy.png',
    video: '/images/pages/products/squeasy.mp4',
    themeColor: '#d97706',
    gradientBg: 'linear-gradient(135deg, #2b1102 0%, #632703 50%, #9a3412 100%)',
    accentColor: '#f59e0b',
    description: 'Rich, luscious real fruit and confectionery purées in precision squeeze bottles designed for coffee shops, bakeries, ice cream artisans, and culinary lovers.',
    longDescription: 'Created with high real-fruit pulp concentration, vibrant natural hues, and a velvety viscosity that maintains intricate art patterns on milk foam, waffles, crepes, and plated gourmet desserts. Ergonomic no-drip silicone valve ensures clean service without mess.',
    nutritionHighlights: [
      { title: 'Real Fruit Content', desc: 'Made from harvested strawberries, mangoes & berries', icon: 'Award' },
      { title: 'No-Drip Silicone Valve', desc: 'Precision artistic drizzle without messy leakage', icon: 'ShieldCheck' },
      { title: 'Vibrant Texture', desc: 'Holds crisp shape on warm waffles and cold foams', icon: 'Flame' },
      { title: 'Shelf Stable', desc: 'Room temperature stability before opening', icon: 'Heart' },
    ],
    products: [
      {
        name: 'SquEasy Minced Garlic 250g Jar',
        image: '/artwork/squeasy/3d/squeasy-minced-garlic-jar.png',
        volume: '250g Glass Jar (55 EGP)',
        flavor: 'Fresh Crushed Garlic',
        description: 'Selected cloves deliver authentic aroma and taste without peeling or chopping.'
      },
      {
        name: 'SquEasy Garlic Paste 250g Pouch',
        image: '/artwork/squeasy/3d/squeasy-garlic-paste-250g.png',
        volume: '250g Culinary Pouch (55 EGP)',
        flavor: 'Smooth Pure Garlic',
        description: 'Smooth emulsion ready for chef marinades, dressings, stir-fries and cooking.'
      },
      {
        name: 'SquEasy Garlic Paste 50 Sachets Pack',
        image: '/artwork/squeasy/3d/squeasy-garlic-paste-sachet.png',
        volume: 'Pack of 50 Sachets (55 EGP)',
        flavor: 'Single-Use Fresh Garlic',
        description: 'Perfect portion control and freshness for home kitchens and takeaway service.'
      },
      {
        name: 'SquEasy Harissa Hot Sauce 200g',
        image: '/artwork/squeasy/3d/squeasy-harissa-pouch-200g.png',
        volume: '200g Squeeze Bottle (65 EGP)',
        flavor: 'Fiery Mediterranean Chili',
        description: 'Crafted from premium red chili peppers and spices for burgers, grills, and dips.'
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
    logo: '/images/logos/yalla drinks.png',
    heroImage: '/images/pages/products/frapit.jpg',
    themeColor: '#0284c7',
    gradientBg: 'linear-gradient(135deg, #081d38 0%, #034575 50%, #0284c7 100%)',
    accentColor: '#38bdf8',
    description: 'Gourmet cafe powdered beverage systems including Yalla Frapp It, Yalla Smoozy, and Yalla Koffi for instant barista indulgence at home or hotel chains.',
    longDescription: 'Formulated with instant micro-encapsulated dairy and vegetable creamer bases, rich Colombian coffee extracts, and stabilized natural fruit compounds. Blends instantly with ice, cold milk, or water to yield thick, frosty frappes with rich long-lasting foam tops.',
    nutritionHighlights: [
      { title: 'Barista Overrun & Foam', desc: 'Superior foam stability and velvety micro-texture', icon: 'Award' },
      { title: 'Instant Ice Blend', desc: 'Quickly dissolves with milk or water and crushed ice', icon: 'ShieldCheck' },
      { title: 'High Yield Per Bag', desc: 'Approx. 25-30 tall café servings per 1kg foil bag', icon: 'Flame' },
      { title: 'Halal & ISO 22000', desc: 'Produced in certified sterile packaging cleanrooms', icon: 'Heart' },
    ],
    products: [
      {
        name: 'Yalla Frapp It Caramel (Box 10 Sachets)',
        image: '/artwork/yalla-drinks/3d/frappit-caramel-box.png',
        volume: 'Box 10 Sachets (200 EGP)',
        flavor: 'Rich Caramel & Microfoam',
        description: 'Smooth, refreshing iced caramel frappé blending effortlessly with ice.'
      },
      {
        name: 'Yalla Smoozy Mixed Berries (Box 10 Sachets)',
        image: '/artwork/yalla-drinks/3d/smoozy-mixed-berries-box.png',
        volume: 'Box 10 Sachets (210 EGP)',
        flavor: 'Wild Mixed Berries',
        description: 'Vibrant fruit puree mix for frosty slush smoothies in seconds.'
      },
      {
        name: 'Yalla Koffi Caffe Latte (Box 10 Sachets)',
        image: '/artwork/yalla-drinks/3d/koffi-latte-box.png',
        volume: 'Box 10 Sachets (180 EGP)',
        flavor: 'Roasted Arabica & Milk',
        description: 'Barista-quality hot or iced caffè latte with a velvety microfoam head.'
      },
      {
        name: 'Yalla Choco Italian Hot Chocolate (Box 10 Sachets)',
        image: '/artwork/yalla-drinks/3d/choco-classic-box.png',
        volume: 'Box 10 Sachets (190 EGP)',
        flavor: 'Classic Dutch Dark Cocoa',
        description: 'Thick, decadent Italian-style drinking chocolate.'
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
