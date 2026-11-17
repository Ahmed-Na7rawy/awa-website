// V9 Data Layer for AWA Group Website
// Sourced from C:\Users\mayar\Music\AWA_Group_Website_V9.html

import assetManifest from './v9AssetManifest.json';

export const v9Assets = assetManifest;

export const industryData = [
{id:'dairy-cheese',title:'Dairy, Cheese & Frozen Desserts',desc:'From processed cheese and UHT milk to cultured dairy, ice cream and frozen desserts, explore functionality tailored to the product matrix and production process.',icon:'◉',subcategories:[
 {title:'Processed Cheese & Cheese Analogues',needs:['Melt control','Spreadability and firmness','Oil separation','Protein functionality','Cost-Effective Formulations']},
 {title:'Natural & Recombined Cheese Products',needs:['Moisture control','Texture consistency','Protein performance']},
 {title:'Milk & UHT Dairy Products',needs:['Heat stability','Sedimentation control','Protein stability']},
 {title:'Yogurt & Cultured Dairy',needs:['Viscosity','Syneresis control','Gel and mouthfeel stability']},
 {title:'Ice Cream & Frozen Desserts',needs:['Ice-crystal control','Overrun','Melting resistance','Creaminess']},
 {title:'Dairy Alternatives',needs:['Protein stability','Flavor balance','Texture and emulsification']} ]},
{id:'meat-seafood',title:'Meat, Poultry & Seafood',desc:'Functional ingredient approaches for binding, water retention, texture, sensory consistency and production yield across meat and seafood applications.',icon:'◇',subcategories:[
 {title:'Processed & Emulsified Meat',needs:['Binding and emulsion stability','Bite and texture','Cooking yield']},
 {title:'Formed & Restructured Meat',needs:['Cohesion','Water retention','Slicing performance']},
 {title:'Poultry Processing',needs:['Moisture retention','Tenderness','Yield consistency']},
 {title:'Seafood Processing',needs:['Drip loss','Water-holding capacity','Freeze–thaw stability']},
 {title:'Plant-Based & Hybrid Proteins',needs:['Protein binding','Texture formation','Juiciness','Flavor masking']} ]},
{id:'bakery',title:'Bakery & Confectionery',desc:'Ingredient systems addressing dough and batter performance, texture, sweetness, filling stability, moisture and finished-product consistency.',icon:'▤',subcategories:[
 {title:'Bread & Yeast-Raised Products',needs:['Dough strength','Loaf volume','Crumb softness','Staling']},
 {title:'Cakes & Pastries',needs:['Aeration','Batter stability','Moisture retention']},
 {title:'Biscuits, Cookies & Crackers',needs:['Spread control','Crispness','Breakage']},
 {title:'Fillings, Creams & Toppings',needs:['Viscosity','Heat stability','Water migration']},
 {title:'Chocolate & Compound Coatings',needs:['Viscosity','Fat crystallization','Processing consistency']},
 {title:'Sugar & Gelled Confectionery',needs:['Gel strength','Sweetness balance','Moisture management']} ]},
{id:'beverages',title:'Beverages',desc:'Solutions for dispersion, stabilization, taste, mouthfeel, solubility and nutritional formulation across liquid and powdered beverage formats.',icon:'◌',subcategories:[
 {title:'Juices & Fruit-Based Drinks',needs:['Cloud stability','Sedimentation','Acidity and color stability']},
 {title:'Ready-to-Drink Beverages',needs:['Phase stability','Flavor consistency','Processing tolerance']},
 {title:'Functional & Nutritional Beverages',needs:['Nutrient compatibility','Solubility','Off-note management']},
 {title:'Instant & Powdered Beverages',needs:['Dispersibility','Caking','Powder flow','Reconstitution']},
 {title:'Coffee, Tea & Specialty Beverages',needs:['Emulsion stability','Flavor balance','Body and sweetness']} ]},
{id:'culinary',title:'Sauces, Soups & Culinary',desc:'Functional and sensory systems for sauces, dressings, broths, seasonings, savory foods and convenient meal formats.',icon:'↝',subcategories:[
 {title:'Sauces, Dressings & Mayonnaise',needs:['Emulsion stability','Viscosity','Oil separation']},
 {title:'Soups, Broths & Bouillons',needs:['Flavor consistency','Dissolution','Sodium and cost targets']},
 {title:'Seasonings & Marinades',needs:['Flavor retention','Ingredient dispersion','Coating and adhesion']},
 {title:'Dips, Spreads & Culinary Fillings',needs:['Texture','Moisture control','Heat tolerance']},
 {title:'Ready Meals & Instant Food Systems',needs:['Reconstitution','Heat stability','Shelf life','Sensory consistency']} ]},
{id:'snacks',title:'Snacks & Cereals',desc:'Ingredient and formulation technologies for snack texture, seasoning delivery, cereal quality, coating systems and production consistency.',icon:'✳',subcategories:[
 {title:'Extruded & Savory Snacks',needs:['Expansion','Crunch and texture','Processing consistency']},
 {title:'Coated & Seasoned Snacks',needs:['Seasoning adhesion','Flavor retention','Oil distribution']},
 {title:'Breakfast Cereals',needs:['Crispness','Moisture stability','Fortification']},
 {title:'Nutrition & Cereal Bars',needs:['Binding','Hardness','Moisture migration']},
 {title:'Batters, Breadings & Coatings',needs:['Coating adhesion','Crispness','Processing stability']} ]}
];

export const challengeData = [
{id:'texture',title:'Texture & Structure',desc:'Control firmness, viscosity, binding, spreadability, melting and mouthfeel.',icon:'≋'},
{id:'stability',title:'Stability & Shelf Life',desc:'Manage separation, oxidation, consistency and performance through processing and storage.',icon:'⬡'},
{id:'taste',title:'Taste & Sensory',desc:'Develop flavor, sweetness, aroma and balanced sensory profiles.',icon:'✧'},
{id:'yield',title:'Yield & Processing',desc:'Support processing consistency, ingredient use, cooking yield and production efficiency.',icon:'↗'},
{id:'affordability',title:'Cost-Effective Formulations',desc:'Achieve the required product performance at a suitable cost through ingredient selection and formulation optimization.',icon:'◎'},
{id:'nutrition-reformulation',title:'Nutrition & Reformulation',desc:'Develop products around nutrient goals, sugar or fat reduction and ingredient replacement.',icon:'✳'},
{id:'appearance',title:'Color & Appearance',desc:'Manage color and visual consistency across food applications.',icon:'◈'},
{id:'new-product',title:'New Product Development',desc:'Explore concepts, ingredients, application trials and production feasibility.',icon:'⌘'}
];

export const familyData = [
{id:'texture-structure',title:'Texture & Structure Solutions',desc:'Emulsifiers and emulsifying salts, stabilizers, hydrocolloids, thickeners, binders, texturizers and fat-replacement systems.',icon:'≋',category:'Function',subfamilies:['Emulsifiers & Emulsifying Salts','Stabilizers, Hydrocolloids & Thickeners','Binders & Texturizers','Fat-Replacement Systems'],applications:['Dairy','Meat','Beverage','Bakery','Culinary','Snacks','General']},
{id:'taste-sensory',title:'Taste & Sensory Solutions',desc:'Sweeteners, flavors, spices, oleoresins, extracts, seasonings and taste-modulation ingredients.',icon:'✧',category:'Function',subfamilies:['Sweeteners & Sweetening Systems','Flavors, Extracts & Oleoresins','Spices & Seasonings','Taste Modulation'],applications:['Dairy','Meat','Beverage','Bakery','Culinary','Snacks','General']},
{id:'preservation',title:'Preservation & Shelf-Life Solutions',desc:'Preservatives, natural antioxidants, moisture-management ingredients and suitable shelf-life technologies.',icon:'⬡',category:'Function',subfamilies:['Preservatives & Antimicrobial Systems','Antioxidants & Oxidation Control','Moisture Management'],applications:['Dairy','Meat','Beverage','Bakery','Culinary','Snacks','General']},
{id:'nutrition',title:'Nutrition Solutions',desc:'Nutritional proteins, vitamins, minerals, fibers and suitable fortification ingredients.',icon:'✳',category:'Function',subfamilies:['Protein & Nutritional Enrichment','Vitamins & Minerals','Fibers & Nutrition Ingredients'],applications:['Dairy','Meat','Beverage','Bakery','Culinary','Snacks','General']},
{id:'color-appearance',title:'Color & Appearance Solutions',desc:'Food colors, selected natural extracts and ingredient systems for consistent visual appearance.',icon:'◈',category:'Function',subfamilies:['Food Colors','Selected Natural Coloring Extracts','Appearance & Color Stability'],applications:['Dairy','Meat','Beverage','Bakery','Culinary','Snacks','General']},
{id:'functional-processing',title:'Functional Processing Solutions',desc:'Enzymes, leavening systems, pH-control ingredients, anti-caking agents, dough conditioners and other processing functionalities.',icon:'⚙',category:'Function',subfamilies:['Enzyme Preparations','Leavening & Dough Strengtheners','Anti-Caking & Powder-Flow Ingredients','pH Control Agents & Acidulants','Yeast Nutrients'],applications:['Dairy','Meat','Beverage','Bakery','Culinary','Snacks','General']}
];

export const solutionRecords = [
{title:'Soya Protein Solutions',familyIds:['texture-structure','nutrition'],industryIds:['meat-seafood','dairy-cheese','bakery','snacks'],challengeIds:['texture','yield','nutrition-reformulation','affordability'],portfolio:'AWA Food Additives portfolio',detail:'Functional protein ingredients with potential binding, texture and nutritional applications; grade-specific performance requires confirmation.'},
{title:'Emulsifying Salt Systems',familyIds:['texture-structure','functional-processing'],industryIds:['dairy-cheese','meat-seafood'],challengeIds:['texture','stability','yield','affordability'],portfolio:'Turkphos joint-venture technology',detail:'Specialized emulsifying salts and phosphate-based systems for appropriate dairy, cheese and meat formulations.'},
{title:'Stabilizers & Hydrocolloid Systems',familyIds:['texture-structure'],industryIds:['dairy-cheese','beverages','culinary','bakery','snacks'],challengeIds:['texture','stability','yield','affordability'],portfolio:'AWA Group functional ingredient portfolio',detail:'Systems selected according to target viscosity, texture, stability and processing conditions.'},
{title:'Sweeteners & Sweetening Systems',familyIds:['taste-sensory'],industryIds:['beverages','dairy-cheese','bakery','culinary'],challengeIds:['taste','nutrition-reformulation','affordability'],portfolio:'AWA Group ingredient portfolio',detail:'Ingredient selection considers sweetness profile, sensory balance, formulation and process requirements.'},
{title:'Oleoresins',familyIds:['taste-sensory'],industryIds:['meat-seafood','culinary','snacks','bakery','beverages'],challengeIds:['taste','affordability'],portfolio:'AWA Bio Ingredients portfolio',detail:'Concentrated spice and herb extracts supporting flavor standardization and application-specific seasoning profiles.'},
{title:'Herb Extracts',familyIds:['taste-sensory','preservation'],industryIds:['meat-seafood','culinary','beverages','bakery'],challengeIds:['taste','stability'],portfolio:'AWA Bio Ingredients portfolio',detail:'Herbal extracts for relevant sensory applications; preservation functions depend on specific extract properties.'},
{title:'Green Spice Extracts',familyIds:['taste-sensory'],industryIds:['meat-seafood','culinary','snacks'],challengeIds:['taste'],portfolio:'AWA Bio Ingredients portfolio',detail:'Extracts capturing fresh spice character for appropriate savory formulations.'},
{title:'Roasted & Fried Flavors',familyIds:['taste-sensory'],industryIds:['meat-seafood','culinary','snacks'],challengeIds:['taste'],portfolio:'AWA Bio Ingredients portfolio',detail:'Roasted and fried aromatic profiles for culinary and savory applications.'},
{title:'Essential Oils',familyIds:['taste-sensory'],industryIds:['bakery','beverages','culinary'],challengeIds:['taste','new-product'],portfolio:'AWA Bio Ingredients portfolio',detail:'Aromatic essential oils for approved food-use applications where suitable and compliant.'},
{title:'Spice Hydrops™',familyIds:['taste-sensory'],industryIds:['beverages','culinary','meat-seafood'],challengeIds:['taste','new-product'],portfolio:'AWA Bio Ingredients portfolio',detail:'Available in relevant water-soluble or water-dispersible formats, subject to variant and application suitability.'},
{title:'Natural Antioxidants',familyIds:['preservation'],industryIds:['meat-seafood','culinary','beverages','snacks'],challengeIds:['stability'],portfolio:'AWA Bio Ingredients portfolio',detail:'Suitable botanical extracts, including rosemary-based options, for applicable oxidation-management needs.'},
{title:'Encapsulated & Spray-Dried Ingredients',familyIds:['taste-sensory'],industryIds:['bakery','beverages','snacks','culinary'],challengeIds:['taste','stability'],portfolio:'AWA Bio Ingredients portfolio',detail:'Protected and dried flavor-delivery formats for selected processing and sensory requirements.'},
{title:'Raw Spices — Whole, Crushed & Powdered',familyIds:['taste-sensory'],industryIds:['meat-seafood','culinary','bakery','snacks'],challengeIds:['taste','affordability'],portfolio:'AWA Bio Ingredients portfolio',detail:'Whole, crushed and powdered spices for flavor systems and appropriate food formulations.'},
{title:'Liquid Seasonings',familyIds:['taste-sensory'],industryIds:['meat-seafood','culinary','snacks'],challengeIds:['taste','affordability'],portfolio:'AWA Bio Ingredients portfolio',detail:'Specialized liquid seasoning profiles for selected savory foods, sauces and processed-meat products.'},
{title:'Color Ingredients & Selected Natural Extracts',familyIds:['color-appearance'],industryIds:['beverages','bakery','culinary','snacks','dairy-cheese'],challengeIds:['appearance','stability'],portfolio:'AWA Group ingredient portfolio',detail:'Selection must reflect the approved coloring function, regulatory status and intended food application.'},
{title:'Enzymes & Processing Ingredients',familyIds:['functional-processing'],industryIds:['bakery','beverages','culinary','snacks'],challengeIds:['yield','new-product','affordability'],portfolio:'AWA Group ingredient portfolio',detail:'Processing functionality includes enzymes, leavening, dough-strengthening, anti-caking and suitable acidity-control systems.'}
];

export const capabilityData = [
{title:'Global Sourcing & Supply',route:'/capabilities/sourcing',desc:'We identify and evaluate specialty ingredients and technologies through international principals and qualified supply relationships, matching performance needs, quality requirements and commercial feasibility.'},
{title:'R&D & Application Development',route:'/capabilities/rd',desc:'Our technical approach connects ingredient functionality, processing parameters and application trials to understand and address specific customer challenges.'},
{title:'Customized Formulations',route:'/capabilities/formulations',desc:'We develop and refine ingredient systems around target texture, stability, sensory performance, processing conditions and formulation economics.'},
{title:'Manufacturing Excellence',route:'/capabilities/manufacturing',desc:'Our manufacturing capabilities support functional food systems, selected finished products and strategically approved contract-manufacturing collaborations.'}
];

export const brandData = [
{id:'sweet',name:'Sweet & Slim',tag:'AWA BRAND · RETAIL & PROFESSIONAL USE',desc:'Sweetening and convenient food-and-beverage products spanning tabletop sweeteners, sugar-free mints and instant drink formats.',items:['Sweeteners','Sugar-free mints','Instant coffee & chocolate','Functional products']},
{id:'yalla',name:'Yalla Drinks',tag:'AWA BRAND · RETAIL & FOODSERVICE',desc:'Café-style beverage formats including Frappit, Smoozy, Koffi and Choco, alongside selected professional beverage applications.',items:['Frappit','Smoozy','Yalla Koffi','Yalla Choco']},
{id:'squeasy',name:"Squ'easy",tag:'AWA BRAND · RETAIL & CULINARY',desc:'Time-saving garlic and harissa preparations serving home cooking and selected professional kitchen needs.',items:['Garlic paste','Harissa']},
{id:'sirri',name:'SIRRI Foods',tag:'PARTNER BRAND · TÜRKİYE · RETAIL',desc:'SIRRI instant soup in cups is presented within the consumer retail portfolio; professional SIRRI broths and sauces belong within AWA Food Services.',items:['Instant soup in cups','Partner collaboration','Retail convenience foods']}
];

export const foodCategories = [
{id:'beverages',title:'Beverage & Café Solutions',lead:'Designed for speed, repeatability and a consistent drinking experience across cafés, restaurants, beverage stations and catering.',summary:'AWA Food Services offers convenient beverage solutions across smoothie preparations, flavored powders for cold-drink dispensers, frappe bases and chocolate and coffee formats. Product selection is guided by required serving style, preparation method, sensory target and operational cost.',products:['Smoothie powders','Cold beverage dispenser formats','Frappe bases','Chocolate & coffee preparations'],image:'smoothies',audience:'Cafés · Restaurants · Beverage stations'},
{id:'hospitality',title:'Hotel & Hospitality Solutions',lead:'Practical, guest-facing beverage and sweetening formats for room service, breakfast areas and minibars.',summary:'The range includes tabletop sweeteners, instant coffee choices, sugar-free mints and hot chocolate products suitable for selected hospitality occasions. Product and pack selection should reflect the operator’s service format, usage volumes and guest expectations.',products:['Tabletop sweeteners','Instant coffee formats','Sugar-free mints','Hot chocolate'],image:'hotel',audience:'Hotels · Hospitality · Guest amenities'},
{id:'culinary',title:'Culinary & Savory Solutions',lead:'Consistent kitchen staples that support chefs with preparation efficiency and repeatable flavor foundations.',summary:'The professional savory offering brings together SIRRI cooking broth and demi-glace products with Squ’easy garlic preparations and other approved culinary solutions. Position these products around convenience, application suitability, kitchen workflow and verified cost per use.',products:['SIRRI cooking broths','SIRRI demi-glace','Squ’easy garlic preparations','Selected savory products'],image:'broth',audience:'Professional kitchens · Catering · Restaurants'},
{id:'tailored',title:'Tailored Food Services Solutions',lead:'Application-minded support that responds to professional operational needs rather than simply providing a product list.',summary:'AWA’s Food Services team can explore recipe adaptation, product selection, menu-concept support, preparation consistency and cost optimization. Product development and private-label projects are considered selectively and subject to feasibility and commercial approval.',products:['Recipe & menu support','Preparation consistency','Cost-per-serving optimization','Selected private-label projects'],image:'frappe',audience:'Operators · Chains · Strategic customers'}
];

export const principals = [
{name:'Siveele',location:'Global principal',category:'Ingredient technology partner',url:'https://www.siveele.com/',logo:'siveele'},
{name:'JRS Silvateam',location:'Global principal',category:'Plant-based functional ingredient systems',url:'https://jrs.silvateam.com/',logo:'jrs'},
{name:'AIPU Food',location:'Global principal',category:'Food ingredients and specialty technologies',url:'https://www.aipufood.com/en',logo:'aipu'},
{name:'Škrobárny Pelhřimov',location:'Global principal',category:'Starch and related food ingredient expertise',url:'https://www.skrobarny.com/',logo:'skrobarny'},
{name:'Om Tex Chem',location:'Global principal',category:'Relationship and food-portfolio scope for confirmation',url:'https://www.omtexchem.com/',logo:null},
{name:'Madhu Silica',location:'Global principal',category:'Ingredient and formulation technologies',url:'https://www.madhusilica.com/',logo:'madhusilica'},
{name:'Mokate',location:'Global principal',category:'Food and beverage products',url:'https://mokate.com/',logo:'mokate'},
{name:'Goldenuts',location:'Global principal',category:'Food and ingredient portfolio',url:'https://www.goldenuts.com/',logo:'goldenuts'},
{name:'Mayasan',location:'Global principal',category:'Ingredient and food technology partner',url:'https://www.mayasan.com/',logo:'mayasan'}
];

export const jointVentures = [
{name:'Turkphos',region:'TÜRKİYE / EGYPT',category:'Specialized functional phosphate systems',desc:'A strategic joint venture focused on technical phosphate and emulsifying salt applications for processed cheese, dairy and meat. The relationship connects application knowledge, manufacturing and customer-specific functionality needs.',url:'https://www.turkphos.com/'},
{name:'Ingreva',region:'ESTONIA',category:'Industrial functional food systems',desc:'A strategic joint venture for industrial food systems and application-focused ingredient development. The collaboration supports customized functional solutions through formulation know-how, ingredient selection and industrial implementation.',url:'https://www.ingreva.net/'}
];

export const certifications = [
{id:'fssc',code:'FSSC 22000',type:'Food Safety Management',group:'international',asset:'fssc-22000',meaning:'Recognized food safety management system certification scheme for eligible manufacturing activities within the certified facility scope.'},
{id:'iso9001',code:'ISO 9001',type:'Quality Management',group:'international',asset:'iso-9001',meaning:'Quality management system standard supporting consistent processes, customer requirements and continual improvement.'},
{id:'iso14001',code:'ISO 14001',type:'Environmental Management',group:'international',asset:'iso-14001',meaning:'Environmental management system standard supporting the management and improvement of environmental responsibilities.'},
{id:'iso45001',code:'ISO 45001',type:'Occupational Health & Safety',group:'international',asset:'iso-45001',meaning:'Occupational health and safety management system standard addressing safer working conditions and continual improvement.'},
{id:'halal',code:'Halal Certification',type:'Certified Product Scope',group:'international',asset:'halal',meaning:'Halal certification for the specifically approved food products and applicable manufacturing scope.'},
{id:'fda',code:'U.S. FDA Facility Registration',type:'Regulatory Registration',group:'regulatory',asset:'fda',meaning:'AWA Food Solutions facilities: food-facility registration with the U.S. Food and Drug Administration. Registration is not FDA product approval or endorsement.'},
{id:'nfsa',code:'NFSA White List Facility',type:'National Regulatory Listing',group:'regulatory',asset:'nfsa',meaning:'AWA Food Solutions: facility stated to be listed on the Egyptian National Food Safety Authority White List. Exact listing and current status require verification.'}
];

export const pagesForSearch = [
{title:'Homepage',route:'/',keywords:'AWA group tailored food solutions built to perform'},
{title:'About',route:'/about',keywords:'who we are CEO message vision mission values leadership history purpose'},
{title:'Industry Solutions',route:'/solutions',keywords:'food processing dairy cheese frozen desserts meat bakery beverages soups culinary snacks cereals affordability'},
{title:'Food Services',route:'/food-services',keywords:'food services professional food beverage culinary hospitality'},
{title:'Consumer Portfolio',route:'/brands',keywords:'sweet slim yalla squ easy sirri soup retail'},
{title:'Industrial Product Families',route:'/solutions/catalogue',keywords:'texture structure taste sensory preservation shelf life nutrition color appearance functional processing AWA Bio Ingredients soya protein'},
{title:'Our Capabilities',route:'/capabilities',keywords:'global sourcing R&D customized formulations manufacturing'},
{title:'Quality & Certifications',route:'/quality',keywords:'FSSC 22000 ISO 9001 ISO 14001 ISO 45001 Halal FDA NFSA'},
{title:'Sustainability',route:'/sustainability',keywords:'responsible sourcing resource efficiency innovation people safety governance'},
{title:'Strategic Manufacturing',route:'/capabilities/strategic-manufacturing',keywords:'selective OEM private label co-manufacturing'},
{title:'Manufacturing Excellence',route:'/capabilities/manufacturing',keywords:'industrial production manufacturing'},
{title:'Global Principals & Joint Ventures',route:'/global',keywords:'principals Siveele JRS Silvateam AIPU Škrobárny Omtex Madhusilica Mokate Goldenuts Mayasan Turkphos Ingreva'},
{title:'Insights & News',route:'/knowledge',keywords:'corporate developments research industry news'},
{title:'Contact AWA',route:'/contact',keywords:'project sample food services private label inquiry'}
];

export const teamUrlMap = {
 '/trading':'/capabilities/sourcing', '/industries':'/capabilities/manufacturing',
 '/products/industrial':'/solutions/catalogue','/products':'/brands',
 '/solutions/dairy':'/solutions/industry/dairy-cheese','/solutions/meat':'/solutions/industry/meat-seafood',
 '/solutions/bakery':'/solutions/industry/bakery','/solutions/beverage':'/solutions/industry/beverages',
 '/solutions/sauces':'/solutions/industry/culinary','/solutions/rnd':'/capabilities/rd',
 '/products/sweet-and-slim':'/brands/sweet','/products/squeasy':'/brands/squeasy',
 '/products/yalla-drinks':'/brands/yalla'
};


export interface IndustryItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  subcategories: {
    title: string;
    needs: string[];
  }[];
  applications?: string[];
}

export interface ChallengeItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface FamilyItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  category: string;
  subfamilies: string[];
  applications: string[];
}

export interface SolutionRecord {
  title: string;
  familyIds: string[];
  industryIds: string[];
  challengeIds: string[];
  portfolio: string;
  detail: string;
}

export interface CapabilityItem {
  title: string;
  route: string;
  desc: string;
}

export interface BrandItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
  items: string[];
  partnered?: boolean;
}

export interface FoodCategoryItem {
  id: string;
  title: string;
  lead: string;
  summary: string;
  products: string[];
  applications: string[];
  formats: string[];
  image: string;
}

export interface PrincipalItem {
  name: string;
  location: string;
  category: string;
  url: string;
  logo: string;
}

export interface JointVenturesItem {
  name: string;
  region: string;
  category: string;
  desc: string;
  url: string;
}

export interface CertificationItem {
  id: string;
  code: string;
  type: string;
  group: string;
  asset: string;
  meaning: string;
}
