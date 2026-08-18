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
  logo?: string;
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
    ]
  },
  { label: 'Sustainability', id: 'sustainability' },
  { label: 'Careers', id: 'careers' },
  { label: 'Contact Us', id: 'contact' },
];

export const HERO_SLIDES = [
  {
    image: '/images/pages/industries/image33.jpg',
    badge: 'Industrial Food Solutions & Scale',
    title: 'Engineering Next-Generation Food Solutions & Industrial Ingredients',
    subtitle: 'From advanced functional compounding and custom blending to state-of-the-art R&D application pilot plants in Borg El-Arab.',
    ctaPrimary: 'Partner With Our Food Scientists',
    ctaPrimaryTarget: 'solutions',
    ctaSecondary: 'Explore Industrial Portfolio',
    ctaSecondaryTarget: 'products',
  },
  {
    image: '/images/pages/home/s2.jpg',
    badge: 'Application Center & Sensory Science',
    title: 'Where Advanced Food Science Meets Industrial Formulation',
    subtitle: 'Equipped with rheological texture analyzers, pilot dairy and meat processors, and accelerated shelf-life validation suites.',
    ctaPrimary: 'R&D Application Center',
    ctaPrimaryTarget: 'solutions',
    ctaSecondary: 'Request Formulation Trial',
    ctaSecondaryTarget: 'contact',
  },
  {
    image: '/images/pages/home/s3.jpg',
    badge: 'Global Sourcing & Cold Infrastructure',
    title: 'End-to-End Raw Material Procurement & Cold-Chain Logistics',
    subtitle: 'Connecting leading global ingredient producers across 30+ countries with 15,000 MT temperature-controlled storage and nationwide distribution.',
    ctaPrimary: 'Global Trading Lines',
    ctaPrimaryTarget: 'trading',
    ctaSecondary: 'Logistics Infrastructure',
    ctaSecondaryTarget: 'logistics',
  },
];

export const STATS = [
  { value: '33+', label: 'Years of Industrial Leadership', detail: 'Founded in 1993 in Alexandria' },
  { value: '500+', label: 'Formulations Developed', detail: 'Tailored functional systems' },
  { value: '15.5', label: 'MT / Hour Mixing Capacity', detail: 'Powder & liquid compounding lines' },
  { value: '15,000', label: 'Metric Tons Storage', detail: 'Multi-temperature facilities' },
];

export interface ValueChainStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  metrics: string;
  capabilities: string[];
}

export const VALUE_CHAIN_STAGES: ValueChainStage[] = [
  {
    step: '01',
    title: 'Global Sourcing & Direct Trading',
    subtitle: 'Worldwide Procurement of High-Purity Food Ingredients',
    description: 'Direct procurement partnerships with certified manufacturers in over 30 countries. We source hydrocolloids, emulsifiers, modified starches, preservatives, plant proteins, and specialty cocoa derivatives with full COA traceability.',
    icon: 'Globe',
    image: '/images/pages/industries/Image7.jpg',
    metrics: '30+ Origin Countries • Spot & Contract Supply',
    capabilities: ['Certified Supplier Auditing', 'Comprehensive Technical Dossiers', 'Halal & Kosher Compliance', 'Bulk Import Logistics']
  },
  {
    step: '02',
    title: 'Application R&D & Sensory Labs',
    subtitle: 'Pilot-Scale Formulation & Rheological Testing',
    description: 'Our world-class application center replicates client factory conditions. We utilize texture profile analyzers (TPA), spectrophotometers, pilot dairy vats, and bakery test ovens to optimize mouthfeel, meltability, and shelf stability.',
    icon: 'FlaskConical',
    image: '/images/pages/home/s2.jpg',
    metrics: 'Dedicated Pilot Labs • 500+ Tailored Recipes',
    capabilities: ['Texture Profile Analysis (TPA)', 'Syneresis & Shelf-Life Studies', 'Cost-Optimized Recipe Engineering', 'Clean-Label Conversion']
  },
  {
    step: '03',
    title: 'High-Capacity Compounding & Blending',
    subtitle: 'Precision Automated Powder & Liquid Production',
    description: 'Equipped with 5.5 MT/hour dry powder blenders, 10 MT/hour liquid compounding tanks, and automated micro-ingredient dosing in New Borg El-Arab City ensuring batch-to-batch homogeneity.',
    icon: 'Factory',
    image: '/images/pages/industries/image33.jpg',
    metrics: '15.5 MT/HR Capacity • Cleanroom Environment',
    capabilities: ['Dust-Free Pneumatic Conveying', 'Micro-Dosing Automation', 'Liquid & Powder Homogenization', 'Custom Batch Packaging']
  },
  {
    step: '04',
    title: 'Quality Assurance & Food Safety',
    subtitle: 'FSSC 22000 & ISO 9001 Batch Certification',
    description: 'Every incoming raw material and finished blend undergoes rigorous microbiological, physical, and chemical assay testing in our internal laboratories before release.',
    icon: 'ShieldCheck',
    image: '/images/pages/home/about.jpg',
    metrics: '100% Batch Traceability • Zero Chemical Cyclamates',
    capabilities: ['Microbiological Assay Testing', 'Heavy Metal & Moisture Profiling', 'ISO 9001:2015 & FSSC 22000 Certified', 'Batch Release COA Protocol']
  },
  {
    step: '05',
    title: 'Cold-Chain Logistics & Distribution',
    subtitle: '15,000 MT Temperature-Controlled Warehousing',
    description: 'Modern multi-temperature bonded storage in Alexandria, Cairo, and Borg El-Arab backed by our dedicated refrigerated distribution fleet ensuring rapid, uninterrupted supply to factories.',
    icon: 'Truck',
    image: '/images/pages/home/s3.jpg',
    metrics: '15,000 MT Storage • 24/48hr Regional Dispatch',
    capabilities: ['Multi-Temperature Ambient & Cold Storage', 'Bonded Customs Clearance', 'Refrigerated GPS Fleet', 'Just-In-Time Plant Delivery']
  },
  {
    step: '06',
    title: 'Retail FMCG & Contract Packaging',
    subtitle: 'Commercial Brand Development & Co-Packing',
    description: 'High-speed automated packaging lines for retail table-top sweeteners (Sweet & Slim), barista dessert purées (SquEasy), and instant specialty beverage powders (Yalla Drinks).',
    icon: 'PackageCheck',
    image: '/images/pages/home/s4.jpg',
    metrics: '3 Market-Leading Brands • High-Speed Form-Fill-Seal',
    capabilities: ['Precision Sachet Stick Packing', 'No-Drip Silicone Bottle Bottling', 'Multi-Head Powder Canning', 'Private Label FMCG Co-Manufacturing']
  }
];

export const CORE_PILLARS = [
  {
    id: 'solutions',
    title: 'Solutions & Innovation',
    subtitle: 'Application Centers & Custom Formulation',
    description: 'Our world-class application lab and food scientists develop tailor-made recipes, stabilization systems, and texture enhancers for all dairy, bakery, meat, and beverage sectors.',
    image: '/images/pages/home/s2.jpg',
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
    image: '/images/pages/industries/Image7.jpg',
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
    image: '/images/pages/home/s3.jpg',
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
    image: '/images/pages/industries/image33.jpg',
    icon: 'Factory',
    actionText: 'Explore Manufacturing',
    page: 'industries',
    features: ['Automated Blending Units', 'Cleanroom Packaging', 'Strict ESG & Safety Compliance', 'Contract Manufacturing Capabilities']
  },
];

export const FOOD_SECTORS = [
  { 
    id: 'dairy',
    name: 'Dairy & Cheese Systems', 
    icon: '/images/pages/home/icons/cheese.png',
    image: '/images/pages/home/s1.jpg',
    desc: 'Stabilizer blends for processed cheese blocks, cream cheese, labneh, stirred yogurt, and UHT dairy creams.',
    highlights: ['Syneresis Prevention', 'Melt & Stretch Optimization', 'Yield Maximization', 'Fat & Solids Replacement']
  },
  { 
    id: 'meat',
    name: 'Meat & Savory Systems', 
    icon: '/images/pages/home/icons/meat.png', 
    image: '/images/pages/home/s2.jpg',
    desc: 'Functional protein blends, phosphates, texturizers, and antimicrobial shelf-life extenders for poultry, beef, and processed cuts.',
    highlights: ['Water Binding 1:5', 'Cooking Loss Reduction', 'Emulsion Stability', 'Bite & Firmness Enhancement']
  },
  { 
    id: 'bakery',
    name: 'Bakery & Confectionery', 
    icon: '/images/pages/home/icons/breads.png', 
    image: '/images/pages/solutions/Image24.jpg',
    desc: 'Enzyme-based bread improvers, anti-staling systems, sponge cake emulsifiers, and moisture-retaining glazes.',
    highlights: ['Crumb Softness Extension', 'Volume & Oven Spring', 'Sugar Reduction Systems', 'Freeze-Thaw Stability']
  },
  { 
    id: 'sauces',
    name: 'Sauces, Dressings & Culinary', 
    icon: '/images/pages/home/icons/chili-sauce.png', 
    image: '/images/pages/products/SquEasy.png',
    desc: 'Cold-process modified starches, hydrocolloid texturizers, and emulsifiers for mayonnaise, ketchup, and salad dressings.',
    highlights: ['Shear & Thermal Stability', 'No-Drip Squeeze Viscosity', 'Oil Droplet Suspension', 'Low-Fat Formulation']
  },
  { 
    id: 'beverages',
    name: 'Beverages, Frappes & Syrups', 
    icon: '/images/pages/home/icons/cocktail.png', 
    image: '/images/pages/products/frapit.jpg',
    desc: 'Instant barista beverage bases, clouding agents, foaming boosters, and premium natural flavor essences.',
    highlights: ['Dense Microfoam Overrun', 'Instant Hot & Cold Dissolution', 'Natural Clouding Agents', 'Zero Syneresis in Acidic Media']
  },
  { 
    id: 'proteins',
    name: 'Plant Proteins & Biotechnology', 
    icon: '/images/pages/home/icons/proteins.png', 
    image: '/images/pages/about/bg_about.jpg',
    desc: 'Non-GMO soy protein isolates (90%), textured vegetable protein (TVP), and AWABEY natural soapwort extracts.',
    highlights: ['90%+ Isolated Soy Protein', 'Clean-Label Foaming Saponins', 'Meat Analogue Textures', 'Hypoallergenic Emulsions']
  },
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
  // DAIRY & CHEESE (Catalogue Pages 11, 17)
  {
    id: 'dairy-processed-cheese',
    title: 'Processed Cheese Stabilizer & Emulsifying Salts',
    category: 'Dairy',
    image: '/images/pages/solutions/Image20.jpg',
    description: 'Specialized polyphosphate and sodium citrate emulsifying salt complexes designed for processed cheese triangles, blocks, and slice-on-slice formats with customized firmness and meltability.',
    details: [
      'Tailored creaming and melting index for triangle and block cheese',
      'Prevents oil separation and syneresis during hot filling and cooling',
      'Enables high moisture binding (up to 65%) with firm slicing texture',
      'Full compatibility with vegetable fat, butterfat, and milk powder formulas'
    ]
  },
  {
    id: 'dairy-mozzarella-analogue',
    title: 'Mozzarella & Pizza Cheese Texture Systems',
    category: 'Dairy',
    image: '/images/pages/solutions/Image28.jpg',
    description: 'Engineered stabilizer matrices and modified starches for analogue and hybrid mozzarella cheese, delivering superior stretch, shredding elasticity, and controlled blister browning.',
    details: [
      'Imitation & analogue mozzarella stabilizer blends with high fat emulsification',
      'Food-grade anti-caking starches for pre-shredded retail & food service bags',
      'Heat-stable protein networks preventing oiling-off on high-temperature pizza decks',
      'Exceptional freeze-thaw recovery with zero crumbly texture upon baking'
    ]
  },
  {
    id: 'dairy-soft-feta',
    title: 'Soft & Feta Cheese Coagulation Stabilizers',
    category: 'Dairy',
    image: '/images/pages/solutions/dairy.jpg',
    description: 'Hydrocolloid and calcium-optimized stabilizer blends for ultrafiltrated (UF) Feta, white brined cheese, and spreadable cream cheese.',
    details: [
      'Enhances curd firmness, total dry matter recovery, and commercial yield',
      'Prevents whey syneresis throughout 12-month vacuum or brine shelf life',
      'Microbial rennet and natural lactic acid culture boosters',
      'Protective cheese coating wax and antifungal surface treatment'
    ]
  },
  {
    id: 'dairy-icecream-yoghurt',
    title: 'Ice Cream, Yoghurt & Whipping Cream Systems',
    category: 'Dairy',
    image: '/images/pages/solutions/Image27.jpg',
    description: 'Synergistic stabilizer-emulsifier complexes for set/stirred yoghurt, UHT whipping cream, and ice cream overrun control.',
    details: [
      'Prevents whey separation in fruit-on-bottom and stirred yoghurts',
      'Overrun enhancers for ice cream ensuring slow melt-down and micro-ice crystals',
      'High-stability emulsifiers for 35% dairy and non-dairy whipping creams',
      'Modified starches, pectin complexes, and low-calorie sweetener solutions'
    ]
  },

  // MEAT & POULTRY (Catalogue Pages 14, 18)
  {
    id: 'meat-emulsified',
    title: 'Luncheon, Sausage & Frankfurters Emulsion Systems',
    category: 'Meat',
    image: '/images/pages/solutions/Image21.jpg',
    description: 'High-performance phosphate salt complexes, vegetable dietary fibers, and functional soy proteins engineered to optimize water and fat binding in cooked emulsion meats.',
    details: [
      'Sodium and potassium food-grade phosphate salt blends (1:5:5 emulsification)',
      'High-tensile slicing improvers for ultra-thin luncheon and mortadella slicing',
      'Natural colorants (carmine, paprika) maintaining stable shade post-cooking',
      'Preservative blends preventing slime and microbial spoilage in cold storage'
    ]
  },
  {
    id: 'meat-burgers-minced',
    title: 'Beef Burger, Kofta & Minced Meat Texture Improvers',
    category: 'Meat',
    image: '/images/pages/solutions/meat.jpg',
    description: 'Functional vegetable proteins (Soy TVP, ISP 90%), potato starches, and natural binder systems for formed beef patties, meatballs, and oriental kofta.',
    details: [
      'Minimizes cooking loss and diameter shrinkage on industrial grill lines',
      'Soy TVP (Textured Vegetable Protein) providing meaty fibrous texture',
      'Clean label hydrolyzed collagen and vegetable dietary fiber matrices',
      'Authentic oriental spice notes: Alexandria Sausage, Burger, Kofta & Sujuk'
    ]
  },
  {
    id: 'meat-cured-poultry',
    title: 'Poultry Tumbling Marinades & Curing Systems',
    category: 'Meat',
    image: '/images/pages/solutions/Image29.jpg',
    description: 'Yield-enhancing injection and vacuum-tumbling brine systems for chicken breasts, nuggets, salami, pastrami (Bastirma), and bacon.',
    details: [
      'Instant-dissolving tumbling phosphate brines boosting yield by 15% - 30%',
      'Curing accelerators ensuring deep, uniform cured pink color development',
      'Liquid Bastirma and Pastrami spice blends with rapid penetration',
      'Antioxidant blends preventing warmed-over flavor (WOF) and lipid oxidation'
    ]
  },

  // BAKERY & PASTRY (Catalogue Pages 12, 17)
  {
    id: 'bakery-improvers',
    title: 'Enzymatic Flour Improvers & Vital Wheat Gluten',
    category: 'Bakery',
    image: '/images/pages/solutions/Image22.jpg',
    description: 'High-activity fungal alpha-amylase, xylanase, and ascorbic acid flour improver complexes for industrial sandwich bread, toast, and baguettes.',
    details: [
      'Improves dough machinability, gas retention, and oven spring volume',
      'Extends crumb softness and freshness up to 30 days ambient shelf life',
      'Vital wheat gluten (75% - 80% protein) boosting weak commercial flours',
      'Anti-staling maltogenic enzyme systems delaying starch retrogradation'
    ]
  },
  {
    id: 'bakery-cake-mixes',
    title: 'Ready Industrial Cake Mixes & Emulsifier Gels',
    category: 'Bakery',
    image: '/images/pages/solutions/bakery.jpg',
    description: 'All-in-one industrial cake bases, sponge cake emulsifiers (DATEM, SSL, PGE), and specialty baking powders for industrial bakeries.',
    details: [
      'Ready-to-use sponge, muffin, pound cake, and chocolate brownie pre-mixes',
      'Distilled monoglyceride and polyglycerol ester aerating cake gels',
      'Controlled double-acting chemical leavening raising agents',
      'Cost-saving egg replacers and fat mimetics preserving moisture'
    ]
  },
  {
    id: 'bakery-fillings-biscuit',
    title: 'Biscuit Improvers & Bake-Stable Fillings',
    category: 'Bakery',
    image: '/images/pages/solutions/confectionery.jpg',
    description: 'Rheology modifiers for hard & soft dough biscuits, cookies, wafers, and temperature-tolerant fruit & chocolate bakery fillings.',
    details: [
      'Controls biscuit dough spread, crispiness, and oven stack height',
      'Bake-stable fruit jams and chocolate creams that resist boiling-out at 200°C',
      'High-grade Dutch cocoa powders and natural bourbon vanilla extracts',
      'Sorbitol and low-calorie polyol systems for sugar-free bakery lines'
    ]
  },

  // BEVERAGES & JUICES (Catalogue Pages 13, 19)
  {
    id: 'beverage-cloud-stabilizers',
    title: 'Fruit Juice Clouding & Pulp Suspension Stabilizers',
    category: 'Beverages',
    image: '/images/pages/solutions/Image24.jpg',
    description: 'Natural citrus oil weighting emulsions and hydrocolloid suspension matrices ensuring uniform turbidity and long-term cloud stability in bottled juices.',
    details: [
      'Prevents ringing, neck oiling, and bottom sediment in fruit nectars',
      'Cold-soluble xanthan and carboxymethylcellulose (CMC) viscosity blends',
      'Natural water-soluble food colorants (Beta-Carotene, Anthocyanins)',
      'Heat-pasteurization and UV-light stable formulations'
    ]
  },
  {
    id: 'beverage-powder-mixes',
    title: 'Instant Powder Drink Bases & Energy Formulations',
    category: 'Beverages',
    image: '/images/pages/solutions/beverages.jpg',
    description: 'Complete spray-dried powder beverage formulations for instant fruit drinks, malt beverages, sports hydration, and carbonated soft drinks.',
    details: [
      'Instant cold-water dissolution without lump formation in 15 seconds',
      'Acidity regulator matrices (Citric Acid, Malic Acid, Sodium Citrate)',
      'Synergistic high-intensity sweetener blends (Sucralose, Stevia, Acesulfame-K)',
      'Vitamin and mineral fortification complexes for functional energy drinks'
    ]
  },

  // SAUCES, DRESSINGS & CONDIMENTS (Catalogue Pages 14, 18)
  {
    id: 'sauces-mayo-eggless',
    title: 'Mayonnaise Stabilizers & Vegan Egg Replacers',
    category: 'Culinary',
    image: '/images/pages/solutions/Image25.jpg',
    description: 'Cold-process stabilizer systems and functional plant proteins designed for full-fat (65%), light (30%), and 100% vegan eggless mayonnaise.',
    details: [
      'Complete egg yolk replacement with silky gloss and authentic creamy mouthfeel',
      'High shear stability under colloid mills and continuous homogenizers',
      'Prevents phase separation and syneresis at pH 3.2 – 3.8',
      'Microencapsulated fat powders and flavor enhancers'
    ]
  },
  {
    id: 'sauces-ketchup-dressings',
    title: 'Ketchup, Tomato Paste Extenders & Salad Dressings',
    category: 'Culinary',
    image: '/images/pages/solutions/sauces.jpg',
    description: 'Modified waxy maize starches, tomato paste replacers, and thixotropic hydrocolloid blends for ketchup, dipping sauces, and culinary dressings.',
    details: [
      'Tomato paste replacers reducing raw material cost while preserving rich body',
      'Thixotropic shear-thinning behavior for easy bottle pouring and clinging cling',
      'Thermal stability in hot-filled barbecue, pizza sauces, and instant soups',
      'Food-grade acidulates and preservative systems (Sodium Benzoate / Sorbate)'
    ]
  },

  // AWA BIO INGREDIENTS & NATURAL EXTRACTS (Catalogue Pages 21–29)
  {
    id: 'bio-oleoresins-oils',
    title: 'Pure Spice Oleoresins & Essential Oils',
    category: 'Bio',
    image: '/images/pages/solutions/Image30.jpg',
    description: '100% pure concentrated liquid extracts of spices and herbs. Volatile and non-volatile aroma components providing instant flavor release and microbiological sterility.',
    details: [
      '18+ Single Oleoresins: Black Pepper, Capsicum (Chili), Paprika, Garlic, Onion, Ginger, Cumin, Cardamom, Turmeric, Rosemary',
      'Steam-distilled essential oils delivering authentic volatile signature top-notes',
      'Standardized color & pungency tested on advanced spectrophotometers',
      'Completely free from salmonella, mold spores, and agricultural filth'
    ]
  },
  {
    id: 'bio-liquid-blends-hydrops',
    title: 'Liquid Seasoning Blends & Spice Hydrops™',
    category: 'Bio',
    image: '/images/pages/solutions/Image31.jpg',
    description: 'Ready-to-inject liquid spice blends for meat processing, sauces, and noodle seasonings, plus water-soluble cell-wall Spice Hydrops™.',
    details: [
      'Ready Liquid Blends: Alexandrian Sausage, Beef Burger, Kofta, Bastirma, Turkish Sujuk, Pizza, Tandoori & Noodle Seasoning',
      'Spice Hydrops™: Pure water-dispersible cell-wall extracts for clear drinks & brines',
      'Natural antioxidants (Rosemary, Green Tea, Mixed Tocopherols) preventing rancidity',
      'Extended 24-month shelf life with zero moisture condensation'
    ]
  },

  // AWABEY SOAPWORT EXTRACT (Catalogue Pages 31–34)
  {
    id: 'soapwort-halva-extract',
    title: 'AWABEY Soapwort Extract (Çöven Suyu 3°–45° Brix)',
    category: 'Soapwort',
    image: '/images/pages/solutions/Image32.jpg',
    description: 'Manufactured through Turkish extraction technology producing 7 MT/day of pure Soapwort Extract (Çöven Suyu) for halva, tahini, Melvin, and confectionery.',
    details: [
      '100% natural Turkish raw materials concentrated from 3° Brix to 45° Brix',
      'Essential natural foaming and whitening agent for sesame halva & tahini',
      'Allergen-Free certification compliant with World Health Organization (WHO)',
      'Packed in 30 kg industrial buckets with 24-month shelf stability'
    ]
  },

  // R&D PILOT APPLICATION CENTER (Catalogue Pages 35–36)
  {
    id: 'rnd-pilot-plant',
    title: 'Pilot Plant Testing & Recipe Simulation',
    category: 'R&D',
    image: '/images/pages/solutions/Image26.jpg',
    description: 'Our New Borg El-Arab R&D application center is equipped with mini pilot production units to simulate industrial dairy, meat, bakery, and beverage lines.',
    details: [
      'Pilot-scale high-shear mixers, cheese cookers, bakery ovens, and beverage carbonators',
      'Small batch trial production preventing costly full-scale factory downtime',
      'Comprehensive recipe benchmarking, cost reduction, and clean label reformulation',
      'Technical on-site plant support and operator training provided across MENA'
    ]
  },
  {
    id: 'rnd-analytical-sensory',
    title: 'Instrumental Rheology & Sensory Profiling',
    category: 'R&D',
    image: '/images/pages/solutions/Image33.jpg',
    description: 'State-of-the-art analytical testing suite including texture analyzers, spectrophotometers, moisture meters, and trained sensory discrimination panels.',
    details: [
      'Texture Profile Analysis (TPA) for cheese meltability, crumb softness & meat bite',
      'Spectrophotometer color consistency and CIELAB color coordinate mapping',
      'Microbiological challenge testing and accelerated thermal shelf-life studies',
      'Certificate of Analysis (COA) and complete technical specification dossiers'
    ]
  }
];

export const PRODUCTS_LIST: ProductItem[] = [
  {
    id: 'sweet-and-slim',
    name: 'Sweet & Slim (Zero Calorie Sweeteners)',
    category: 'retail',
    brand: 'Sweet & Slim',
    logo: '/images/logos/Sweet&slim logo.png',
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
    logo: '/images/logos/squeasy logo.png',
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
    brand: 'Yalla Drinks',
    logo: '/images/logos/yalla drinks.png',
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
