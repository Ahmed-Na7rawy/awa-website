export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'industrial' | 'retail';
  brand?: string;
  image: string;
  description: string;
  features: string[];
  specs?: { label: string; value: string }[];
  gallery?: string[];
}

export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { 
    label: 'Solutions', 
    id: 'solutions',
    children: [
      { label: 'Dairy Solutions', id: 'solutions', subId: 'dairy' },
      { label: 'Meat & Savory', id: 'solutions', subId: 'meat' },
      { label: 'Bakery & Confectionery', id: 'solutions', subId: 'bakery' },
      { label: 'Beverages & Syrups', id: 'solutions', subId: 'beverage' },
      { label: 'Sauces & Dressings', id: 'solutions', subId: 'sauces' },
      { label: 'R&D Application Center', id: 'solutions', subId: 'rnd' },
    ]
  },
  { label: 'Trading', id: 'trading' },
  { label: 'Logistics', id: 'logistics' },
  { label: 'Industries', id: 'industries' },
  { 
    label: 'Products', 
    id: 'products',
    children: [
      { label: 'Industrial Ingredients', id: 'products', subId: 'industrial' },
      { label: 'Consumer & Retail Brands', id: 'products', subId: 'retail' },
      { label: 'Sweet & Slim', id: 'products', subId: 'sweet-and-slim' },
      { label: 'SquEasy Purées', id: 'products', subId: 'squeasy' },
      { label: 'Yalla Drinks Series', id: 'products', subId: 'yalla-drinks' },
    ]
  },
  { label: 'Sustainability', id: 'sustainability' },
  { label: 'Careers', id: 'careers' },
  { label: 'Contact Us', id: 'contact' },
];

export const HERO_SLIDES = [
  {
    image: '/images/pages/home/slider1.jpg',
    badge: 'Innovating Food Technology Since 1993',
    title: 'Transforming The Food Industry With Advanced Solutions',
    subtitle: 'From functional ingredient systems and custom blending to state-of-the-art R&D application labs.',
    ctaPrimary: 'Explore Solutions',
    ctaPrimaryTarget: 'solutions',
    ctaSecondary: 'Contact Us',
    ctaSecondaryTarget: 'contact',
  },
  {
    image: '/images/pages/home/slider2.jpg',
    badge: 'Global Supply Chain & Trading',
    title: 'End-to-End Ingredient Sourcing & Cold Logistics',
    subtitle: 'Connecting world-class ingredient manufacturers with premier food producers across Egypt and the Middle East.',
    ctaPrimary: 'Trading Portfolio',
    ctaPrimaryTarget: 'trading',
    ctaSecondary: 'Logistics Network',
    ctaSecondaryTarget: 'logistics',
  },
  {
    image: '/images/pages/home/slider3.webp',
    badge: 'Tailored Formulations & Quality Assured',
    title: 'Your Dedicated Partner In Product Formulation',
    subtitle: 'FSSC 22000 & ISO 9001 certified facilities dedicated to quality, texture perfection, and extended shelf life.',
    ctaPrimary: 'Our Industries',
    ctaPrimaryTarget: 'industries',
    ctaSecondary: 'Discover Products',
    ctaSecondaryTarget: 'products',
  },
];

export const STATS = [
  { value: '30+', label: 'Years of Excellence', detail: 'Pioneering since 1993' },
  { value: '500+', label: 'Formulations Developed', detail: 'Tailored recipe solutions' },
  { value: '40+', label: 'Global Sourcing Partners', detail: 'Worldwide ingredient leaders' },
  { value: '100%', label: 'Quality Assured', detail: 'ISO 9001 & FSSC 22000 certified' },
];

export const CORE_PILLARS = [
  {
    id: 'solutions',
    title: 'Solutions & Innovation',
    subtitle: 'Application Centers & Custom Formulation',
    description: 'Our world-class application lab and food scientists develop tailor-made recipes, stabilization systems, and texture enhancers for all dairy, bakery, meat, and beverage sectors.',
    image: '/images/pages/home/rnd.jpg',
    icon: 'FlaskConical',
    actionText: 'Discover Solutions',
    page: 'solutions',
    features: ['Custom Recipe Tailoring', 'Chemical & Microbiological Labs', 'Pilot Plant Testing', 'Texture & Shelf-life Extension']
  },
  {
    id: 'trading',
    title: 'Global Trading',
    subtitle: 'Premium Ingredient Sourcing',
    description: 'Exclusive partnerships with leading global manufacturers providing high-purity preservatives, hydrocolloids, emulsifiers, acidulants, proteins, and specialty additives.',
    image: '/images/pages/home/blending.jpg',
    icon: 'Globe',
    actionText: 'View Ingredient Lines',
    page: 'trading',
    features: ['Verified Global Suppliers', 'Regulatory & Halal Compliance', 'Spot & Contract Purchasing', 'Comprehensive Technical Dossiers']
  },
  {
    id: 'logistics',
    title: 'Logistics & Cold Chain',
    subtitle: 'Temperature Controlled Infrastructure',
    description: 'Fully integrated supply chain management featuring modern warehousing, bonded customs clearance, and refrigerated distribution fleets guaranteeing product integrity.',
    image: '/images/pages/home/logistics.jpg',
    icon: 'Truck',
    actionText: 'Explore Logistics',
    page: 'logistics',
    features: ['Multi-Temperature Warehouses', 'Fast Customs Clearance', 'Nationwide Delivery Fleet', 'Real-time Batch Tracking']
  },
  {
    id: 'industries',
    title: 'Industries & Manufacturing',
    subtitle: 'Precision Blending & Packaging',
    description: 'Modern manufacturing plants in New Borg El-Arab City producing functional powder blends, nutraceuticals, liquid syrups, and consumer retail innovations.',
    image: '/images/pages/home/customercare.jpg',
    icon: 'Factory',
    actionText: 'Explore Manufacturing',
    page: 'industries',
    features: ['Automated Blending Units', 'Cleanroom Packaging', 'Strict ESG & Safety Compliance', 'Contract Manufacturing Capabilities']
  },
];

export const FOOD_SECTORS = [
  { name: 'Dairy & Cheese', icon: '/images/pages/home/icons/cheese.png', desc: 'Processed cheese, yogurt, UHT milk, desserts & whipped creams.' },
  { name: 'Meat & Poultry', icon: '/images/pages/home/icons/meat.png', desc: 'Sausages, burgers, luncheon, nuggets & marinated cuts.' },
  { name: 'Bakery & Pastry', icon: '/images/pages/home/icons/breads.png', desc: 'Bread improvers, sponge cakes, fillings & glaze systems.' },
  { name: 'Biscuits & Cookies', icon: '/images/pages/home/icons/cookies.png', desc: 'Texture modifiers, fat replacers & specialty leavening.' },
  { name: 'Beverages & Juices', icon: '/images/pages/home/icons/cocktail.png', desc: 'Emulsions, clouding agents, juice concentrates & blends.' },
  { name: 'Ice Cream & Frozen', icon: '/images/pages/home/icons/ice-cream.png', desc: 'Melt-down resistance, overrun stability & creaminess enhancers.' },
  { name: 'Sauces & Condiments', icon: '/images/pages/home/icons/chili-sauce.png', desc: 'Mayonnaise, ketchup, dressings & cold-process thickeners.' },
  { name: 'Proteins & Nutrition', icon: '/images/pages/home/icons/proteins.png', desc: 'Whey protein concentrates, plant proteins & nutraceutical blends.' },
];

export const CERTIFICATIONS = [
  { name: 'FSSC 22000', label: 'Food Safety System Certification', img: '/images/pages/home/cert/SGS-ISO22000-2005.png' },
  { name: 'ISO 9001:2015', label: 'Quality Management Systems', img: '/images/pages/home/cert/ISO9001-2008.png' },
  { name: 'ISO 14001', label: 'Environmental Management', img: '/images/pages/home/cert/IQS-14001-2004.png' },
  { name: 'ISO 45001 / OHSAS', label: 'Occupational Health & Safety', img: '/images/pages/home/cert/BS-OHSAS.png' },
];

export const ABOUT_CERTS = [
  '/images/pages/about/cert1.png',
  '/images/pages/about/cert2.png',
  '/images/pages/about/cert3.png',
  '/images/pages/about/cert4.png',
  '/images/pages/about/cert5.png',
];

export const ABOUT_LOGOS = [
  '/images/pages/about/logo1.png',
  '/images/pages/about/logo2.png',
  '/images/pages/about/logo3.png',
  '/images/pages/about/logo4.png',
  '/images/pages/about/logo5.png',
  '/images/pages/about/logo6.png',
  '/images/pages/about/logo7.png',
];

export const CLIENT_LOGOS = [
  '/images/pages/home/clients/client1.png',
  '/images/pages/home/clients/client2.png',
  '/images/pages/home/clients/client3.png',
  '/images/pages/home/clients/client4.png',
  '/images/pages/home/clients/client5.png',
  '/images/pages/home/clients/client6.png',
  '/images/pages/home/clients/client7.png',
  '/images/pages/home/clients/client8.png',
  '/images/pages/home/clients/client9.png',
  '/images/pages/home/clients/client10.png',
];

export const PARTNER_LOGOS = [
  '/images/pages/trading/Logo8.png',
  '/images/pages/trading/Logo9.png',
  '/images/pages/trading/Logo10.png',
  '/images/pages/trading/Logo11.png',
  '/images/pages/trading/Logo12.png',
  '/images/pages/trading/Logo13.png',
  '/images/pages/trading/Logo14.png',
  '/images/pages/trading/Logo15.png',
  '/images/pages/trading/Logo16.png',
  '/images/pages/trading/Logo17.png',
];

export const SOLUTIONS_LIST: SolutionItem[] = [
  {
    id: 'dairy',
    title: 'Dairy & Cheese Solutions',
    category: 'Dairy',
    image: '/images/pages/solutions/Image20.jpg',
    description: 'Advanced functional blends for processed cheese triangles, blocks, shredded mozzarella, labneh, UHT creams, and set/stirred yogurts. Designed for optimal meltability, stretch, firmness, and cost-efficiency.',
    details: [
      'Emulsifying salts for processed cheese with tailored firmness and melting',
      'Yogurt texture stabilizers preventing syneresis and boosting mouthfeel',
      'Analogue and hybrid cheese systems with excellent stretch and browning',
      'UHT whipping and cooking cream stabilizer systems'
    ]
  },
  {
    id: 'meat',
    title: 'Meat & Poultry Processing Systems',
    category: 'Meat',
    image: '/images/pages/solutions/Image21.jpg',
    description: 'High-performance binder, curing, and texture systems for frankfurters, luncheon, beef burgers, nuggets, and tumbling marinades to improve water retention and yield.',
    details: [
      'Phosphate and phosphate-free water retention systems',
      'Soy, pea, and animal protein functional blends',
      'Clean label microbial shelf-life extenders',
      'Custom seasoning, spice oleoresins, and flavor boosters'
    ]
  },
  {
    id: 'bakery',
    title: 'Bakery & Confectionery Innovations',
    category: 'Bakery',
    image: '/images/pages/solutions/Image22.jpg',
    description: 'Specialty enzymes, emulsifiers, and hydrocolloid blends engineered to improve dough elasticity, crumb softness, volume, and extended shelf life.',
    details: [
      'Modular bread and toast improvers',
      'Cake gels and sponge cake emulsifier systems',
      'Bake-stable fruit fillings and chocolate creams',
      'Anti-staling enzyme complexes'
    ]
  },
  {
    id: 'beverage',
    title: 'Beverage & Flavor Systems',
    category: 'Beverages',
    image: '/images/pages/solutions/Image24.jpg',
    description: 'Stabilizers for cloud stability, pulp suspension, juice drinks, energy drinks, and flavored instant powdered beverage mixes with supreme solubility.',
    details: [
      'Hydrocolloid stabilizers for fruit juices and nectars',
      'Clouding agents and weighing emulsions for citrus drinks',
      'High-intensity sweetener blends with balanced taste profiles',
      'Instant beverage powders with instant dispersion'
    ]
  },
  {
    id: 'sauces',
    title: 'Sauces, Dressings & Culinary',
    category: 'Culinary',
    image: '/images/pages/solutions/Image25.jpg',
    description: 'Cold-process and hot-process stabilizer blends for mayonnaise, ketchup, mustard, salad dressings, and culinary gravies with high shear and freeze-thaw stability.',
    details: [
      'Cold-soluble starch and gum blends for eggless mayonnaise',
      'Ketchup and tomato paste viscosity stabilizers',
      'Heat-stable cooking sauces and marinades',
      'Dip and condiment texture enhancers'
    ]
  },
  {
    id: 'rnd',
    title: 'Application Center & Pilot R&D',
    category: 'R&D',
    image: '/images/pages/solutions/Image26.jpg',
    description: 'Equipped with pilot-scale processing machinery, mini dairy plants, meat emulsifiers, bakery ovens, and analytical testing equipment to test formulations in real production conditions.',
    details: [
      'Recipe benchmarking & reverse engineering',
      'Pilot-scale testing mimicking industrial processing',
      'Sensory panel evaluations & texture analysis',
      'Microbiological shelf-life testing and challenge studies'
    ]
  },
  {
    id: 'texture-modifiers',
    title: 'Texture & Viscosity Systems',
    category: 'Texture',
    image: '/images/pages/solutions/Image27.jpg',
    description: 'Bespoke rheology and mouthfeel modifiers ensuring uniform suspension, creamy mouthfeel, and thermal stability in hot or cold processed foods.',
    details: [
      'Custom hydrocolloid synergy testing',
      'Shear-thinning and thixotropic texture control',
      'Gelling and elasticity modulation',
      'Cost reduction through functional ingredient optimization'
    ]
  },
  {
    id: 'pilot-testing',
    title: 'Sensory & Analytical Evaluation',
    category: 'Pilot Trials',
    image: '/images/pages/solutions/Image28.jpg',
    description: 'Full scientific characterization including texture profiling, moisture retention, pH mapping, and trained sensory panel testing.',
    details: [
      'Texture analyzer profile mapping (TPA)',
      'Viscosity measurement under temperature gradients',
      'Sensory ranking and triangular discrimination tests',
      'Accelerated temperature shelf-life studies'
    ]
  },
  {
    id: 'blending-innovation',
    title: 'Custom Pre-Mix & Blending Technologies',
    category: 'Formulation',
    image: '/images/pages/solutions/Image29.jpg',
    description: 'All-in-one pre-mixes combining functional hydrocolloids, proteins, seasonings, and active enzymes in homogenous powder systems.',
    details: [
      'Eliminates factory weighing errors for plant operators',
      'Micro-dosed active ingredient homogeneity',
      'Custom batch packaging matching client batch sizes',
      'Reduces inventory SKU complexity'
    ]
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'sweet-and-slim',
    name: 'Sweet & Slim (Zero Calorie Sweeteners)',
    category: 'retail',
    brand: 'Sweet & Slim',
    image: '/images/pages/products/sweetslim.png',
    description: 'Premier low and zero-calorie table-top sweetener formulated with sucralose and natural fibers, offering pure sugar-like taste without the bitter aftertaste or glycemic spike.',
    features: [
      '0 Calories & 0 Aspartame',
      'Ideal for diabetic and keto diets',
      'Heat-stable for cooking, baking, and hot beverages',
      'Available in sachets, dispenser jars, and bulk culinary packs'
    ],
    specs: [
      { label: 'Packaging', value: '50 / 100 Sachets Box, 250g Jar' },
      { label: 'Sweetness Factor', value: '1 Sachet = 2 Teaspoons Sugar' },
      { label: 'Shelf Life', value: '24 Months' }
    ],
    gallery: [
      '/images/pages/products/retail/sweet-slim/picture1.jpg',
      '/images/pages/products/retail/sweet-slim/picture2.jpg',
      '/images/pages/products/retail/sweet-slim/picture3.jpg',
      '/images/pages/products/retail/sweet-slim/picture4.jpg',
      '/images/pages/products/retail/sweet-slim/picture5.png',
      '/images/pages/products/retail/sweet-slim/ss.png',
      '/images/pages/products/retail/sweet-slim/stevia.png',
    ]
  },
  {
    id: 'squeasy',
    name: 'SquEasy Fruit & Dessert Purées',
    category: 'retail',
    brand: 'SquEasy',
    image: '/images/pages/products/SquEasy.png',
    description: 'Premium fruit and flavor purees in easy-squeeze bottles designed for baristas, pastry chefs, and home mixologists for coffees, waffles, frappes, and ice cream toppings.',
    features: [
      'Rich fruit content with natural vibrant color',
      'No-drip ergonomic squeeze nozzle',
      'Smooth pourable texture that holds design on foam and pastries',
      'Flavors: Strawberry, Mango, Chocolate, Caramel, Blueberry, Passionfruit'
    ],
    specs: [
      { label: 'Bottle Size', value: '1000g & 500g Squeeze Bottle' },
      { label: 'Storage', value: 'Ambient / Cool Dry Place' },
      { label: 'Application', value: 'Topping, Mixology, Pastry' }
    ],
    gallery: [
      '/images/pages/products/squeasy.jpg',
      '/images/pages/products/retail1.jpg',
    ]
  },
  {
    id: 'yalla-drinks',
    name: 'Yalla Drinks Series (Frapp It, Smoozy, Koffi)',
    category: 'retail',
    brand: 'Yalla',
    image: '/images/pages/products/frapit.jpg',
    description: 'Complete cafe-style instant beverage powder line including iced frappes, smoothie bases, hot chocolates, and specialty iced coffee mixes for food service and retail.',
    features: [
      'Velvety texture and rich gourmet profile',
      'Just add milk/water and ice and blend',
      'High overrun and consistent foam structure',
      'Popular in cafes, hotel chains, and retail outlets'
    ],
    specs: [
      { label: 'Weight', value: '1kg Aluminium Foil Bag' },
      { label: 'Yield', value: 'Approx. 25-30 servings per kg' },
      { label: 'Certifications', value: 'ISO 22000, Halal' }
    ],
    gallery: [
      '/images/pages/products/retail/yalla-drinks/frap.png',
      '/images/pages/products/retail/yalla-drinks/smozy.png',
      '/images/pages/products/retail/yalla-drinks/yallacofe.png',
      '/images/pages/products/retail/yalla-drinks/yallachoco.png',
      '/images/pages/products/retail/yalla-drinks/yallacarmel.png',
      '/images/pages/products/retail/yalla-drinks/market1.png',
      '/images/pages/products/retail/yalla-drinks/market2.png',
    ]
  },
  {
    id: 'stabilizers-dairy',
    name: 'AWA-Stab: Functional Dairy Systems',
    category: 'industrial',
    brand: 'AWA Food Solutions',
    image: '/images/pages/products/industrial.jpg',
    description: 'Proprietary synergistic hydrocolloid and protein blends formulated for yogurt, labneh, whipping creams, and cream cheese.',
    features: [
      'Prevents whey separation (syneresis)',
      'Improves creaminess and viscosity without heavy mouth-coating',
      'Cost-effective solids replacement',
      'Available in customized grades for specific processing temperatures'
    ],
    specs: [
      { label: 'Form', value: 'Fine white/cream powder' },
      { label: 'Packaging', value: '25kg multi-wall paper bags with PE liner' },
      { label: 'Dosage', value: '0.2% - 1.2% depending on formula' }
    ]
  },
  {
    id: 'preservatives-blend',
    name: 'AWA-Guard: Natural & Chemical Antimicrobials',
    category: 'industrial',
    brand: 'AWA Food Solutions',
    image: '/images/pages/products/Image34.jpg',
    description: 'Tailored preservative blends including potassium sorbate, sodium benzoate, nisin, natamycin, and buffered vinegar systems for bakery, dairy, and meat.',
    features: [
      'Broad-spectrum inhibition against mold, yeast, and pathogens',
      'Neutral flavor profile without sensory alterations',
      'Extended commercial shelf life',
      'Clean label and conventional options'
    ],
    specs: [
      { label: 'Target Foods', value: 'Bread, cakes, cheese surfaces, cured meats' },
      { label: 'Origin', value: 'High purity ISO/USP grade' },
      { label: 'Packaging', value: '25kg Bags / Drums' }
    ]
  },
  {
    id: 'hydrocolloids-trading',
    name: 'Specialty Hydrocolloids & Gums',
    category: 'industrial',
    brand: 'Global Trading Partner Portfolio',
    image: '/images/pages/products/image-34.jpg',
    description: 'Sourced from top global manufacturers: Xanthan Gum, Carrageenan (Kappa & Iota), Sodium Alginate, Guar Gum, CMC (Carboxymethylcellulose), Pectin, and Locust Bean Gum.',
    features: [
      'High viscosity clarity and rapid hydration',
      'Thermal stability and freeze-thaw resilience',
      'Full technical documentation and batch COA provided',
      'Prompt shipment from Alexandria and Cairo warehouses'
    ],
    specs: [
      { label: 'Purity', value: 'Food Grade E415, E407, E412, E466' },
      { label: 'Packaging', value: '25kg bags on shrink-wrapped pallets' },
      { label: 'Origin', value: 'Europe, USA, Asia' }
    ]
  }
];

export const COMPANY_CONTACT = {
  email: 'info@awa-group.net',
  phoneAlex: '+203 4292030 / 4211200',
  phoneCairo: '+202 22681519 / 22690727',
  alexOffice: '243 Horreya Road, Sporting, Alexandria, Egypt',
  cairoOffice: '15 Abd Elwahab Selim El-bishry St., Sheraton, Cairo, Egypt',
  factory: 'Area 11, 12, 13 – Block 15, 4th Industrial Zone, New Borg El-Arab City, Alexandria, Egypt',
  workingHours: 'Sunday – Thursday: 8:30 AM – 5:00 PM',
};
