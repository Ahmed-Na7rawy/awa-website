export interface ProductItem {
  id: string;
  name: string;
  image: string;
  weight: string;
  flavor: string;
  description: string;
  tag?: string;
}

export interface SubFamily {
  id: string;
  familyName: string;
  familyTagline: string;
  themeColor: string;
  badgeBg: string;
  cardBg: string;
  products: ProductItem[];
}

export interface BrandIdentity {
  id: string;
  brandName: string;
  brandTag: string;
  slogan: string;
  heroImage: string;
  heroBgGradient: string;
  accentColor: string;
  secondaryColor: string;
  introStory: string;
  heritageYear: string;
  videoUrl?: string;
  socialLinks: { platform: string; url: string }[];
  subFamilies: SubFamily[];
  retailers: string[];
}

export const AWA_STYLE_BRANDS: BrandIdentity[] = [
  {
    id: 'sweet-and-slim',
    brandName: 'Sweet & Slim',
    brandTag: 'Zero Calorie Sweeteners & Beverages',
    slogan: 'Pure Sweetness, Zero Guilt',
    heroImage: '/images/pages/products/retail/sweet-slim/expand.png',
    heroBgGradient: 'linear-gradient(135deg, #022b16 0%, #064e26 40%, #0d7a3c 100%)',
    accentColor: '#10b981',
    secondaryColor: '#34d399',
    introStory: 'Launched by AWA Food Solutions as Egypt’s pioneer in sucralose-based table-top sweeteners, Sweet & Slim revolutionizes everyday wellness. Crafted with pharmaceutical-grade sucralose and soluble dietary prebiotic fibers, it empowers health-conscious families and diabetes patients to enjoy authentic cane-sugar sweetness without glycemic spikes or aftertaste.',
    heritageYear: 'Since 2011',
    socialLinks: [
      { platform: 'Facebook', url: 'https://www.facebook.com/sweetandslim1/' },
      { platform: 'Instagram', url: 'https://www.instagram.com/sweetandslim_egypt/?hl=en' },
      { platform: 'TikTok', url: 'https://www.tiktok.com/@sweetandslimofficial' }
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
    ],
    subFamilies: [
      {
        id: 'ss-sachets',
        familyName: 'Sweet & Slim Sachet & Value Box Series',
        familyTagline: 'Individual Moisture-Barrier Sticks & Value Boxes for Daily Hot & Cold Drinks',
        themeColor: '#059669',
        badgeBg: 'rgba(5, 150, 105, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'ss-50',
            name: 'Sweet & Slim 50 Sticks Pack',
            image: '/images/Sweet&slimPics/S&S Sweetener/boxes/Boxes 50 Sachets/50 classic-View 2.png',
            weight: '50 Sachets (1g each)',
            flavor: 'Original Sucralose',
            description: 'Single-serve moisture-barrier sachets. Each stick equals 2 teaspoons of table sugar with zero calories.',
            tag: 'Daily Essential'
          },
          {
            id: 'ss-100',
            name: 'Sweet & Slim 100 Value Dispenser Box',
            image: '/images/Sweet&slimPics/S&S Sweetener/boxes/Boxes 100 sachets/100 classic-View 1.png',
            weight: '100 Sachets Dispenser',
            flavor: 'Original Sucralose',
            description: 'Value pack with pull-out dispenser drawer. 1 stick replaces 2 spoonfuls of sugar.',
            tag: 'Best Value'
          },
          {
            id: 'ss-extra-50',
            name: 'Sweet & Slim Extra Prebiotic (50 Sticks)',
            image: '/images/Sweet&slimPics/S&S Sweetener/boxes/Boxes 50 Sachets/50 extra-View 1.png',
            weight: '50 Sticks Box',
            flavor: 'Enriched With Inulin Fiber',
            description: 'Enriched with natural chicory inulin soluble fibers for healthy digestion and zero calorie sweetness.',
            tag: 'Prebiotic Boost'
          },
          {
            id: 'ss-extra-100',
            name: 'Sweet & Slim Extra Prebiotic (100 Sticks)',
            image: '/images/Sweet&slimPics/S&S Sweetener/boxes/Boxes 100 sachets/100 Extra-View 1.png',
            weight: '100 Sachets Value Box',
            flavor: 'Double Prebiotic Formula',
            description: 'Large family value box with digestive inulin fibers and zero glycemic impact.',
            tag: 'Family Pack'
          }
        ]
      },
      {
        id: 'ss-natural',
        familyName: 'Sweet & Slim Stevia Nature Blend & Pocket Dispensers',
        familyTagline: '100% Plant-Sourced Steviol Glycosides & Portable Tablets',
        themeColor: '#15803d',
        badgeBg: 'rgba(21, 128, 61, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'ss-stevia-50',
            name: 'Sweet & Slim Stevia 50 Sticks',
            image: '/images/Sweet&slimPics/S&S Sweetener/boxes/Boxes 50 Sachets/50 Stevia-View 1.png',
            weight: '50 Green Sticks',
            flavor: 'Pure Stevia Leaf Extract',
            description: 'Zero glycemic index, premium steviol glycosides (Reb-A 98%) with natural plant carriers.',
            tag: '100% Plant-Based'
          },
          {
            id: 'ss-stevia-100',
            name: 'Sweet & Slim Stevia 100 Sticks',
            image: '/images/Sweet&slimPics/S&S Sweetener/boxes/Boxes 100 sachets/100 stevia-View 1.png',
            weight: '100 Green Sticks Box',
            flavor: 'Reb-A 98% Stevia Extract',
            description: 'All-natural stevia sweetener for cold brews, keto diets, and fitness wellness.',
            tag: 'Top Green Choice'
          },
          {
            id: 'ss-tablets',
            name: 'Sweet & Slim Pocket Click Dispenser',
            image: '/images/pages/products/retail/sweet-slim/ss.png',
            weight: '100 & 300 Micro Tablets',
            flavor: 'Instant Dissolve Tablets',
            description: 'Pocket-sized one-click dispenser. Ideal for quick coffee, tea, and on-the-go travel.',
            tag: 'On-The-Go'
          },
          {
            id: 'ss-syrup',
            name: 'Sweet & Slim Zero Calorie Liquid Syrup',
            image: '/images/Sweet&slimPics/S&S Sweetener/Syrup/2311 syrup.png',
            weight: 'Liquid Dropper Bottle',
            flavor: 'Instant Liquid Sweetener',
            description: 'Instant cold-dissolving liquid sweetness for iced lattes, fresh juices, and mixology.',
            tag: 'Instant Liquid'
          }
        ]
      },
      {
        id: 'ss-beverages',
        familyName: 'Sweet & Slim Diet Hot Chocolates & 3-in-1 Coffees',
        familyTagline: 'Guilt-Free Rich Hot Chocolates and 3-in-1 Instant Coffees with Zero Added Sugar',
        themeColor: '#047857',
        badgeBg: 'rgba(4, 120, 87, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'ss-hot-choco-hazelnut',
            name: 'Sweet & Slim Diet Hot Chocolate (Hazelnut 3D Box)',
            image: '/images/Sweet&slimPics/S&S Hotchocolate/Box/Copy of S&S Hot Chocolate Hazelnut 3D Box-Camera 1.jpg',
            weight: 'Box (10 Sachets)',
            flavor: 'Rich Cocoa & Roasted Hazelnut',
            description: 'Decadent creamy hot chocolate indulgence sweetened with Sweet & Slim, 0 added table sugar.',
            tag: 'Zero Added Sugar'
          },
          {
            id: 'ss-hot-choco-classic',
            name: 'Sweet & Slim Diet Hot Chocolate (Classic Box)',
            image: '/images/Sweet&slimPics/S&S Hotchocolate/Box/Copy of Yalla Choco-Camera 1.jpg',
            weight: 'Box (10 Sachets)',
            flavor: 'Dutch Dark Chocolate',
            description: 'Rich velvety hot cocoa blend with creamy froth and zero guilty calories.',
            tag: 'Choco Delight'
          },
          {
            id: 'ss-3in1-extra',
            name: 'Sweet & Slim 3-in-1 Diet Coffee (Extra Prebiotic)',
            image: '/images/Sweet&slimPics/S&S 3in1 Instant Coffee/Boxes/Extra/3in 1 Extra 3D Box-View 1.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Rich Arabica & Prebiotic Fiber',
            description: 'Creamy 3-in-1 instant coffee with rich roasted coffee beans, inulin fiber and only 45 kcal.',
            tag: 'Digestive Health'
          },
          {
            id: 'ss-3in1-classic',
            name: 'Sweet & Slim 3-in-1 Diet Coffee (Classic Box)',
            image: '/images/Sweet&slimPics/S&S 3in1 Instant Coffee/Boxes/Classic/3in 1 Classic 3D Box-View 1.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Classic Roasted Coffee & Dairy Creamer',
            description: 'Smooth and satisfying 3-in-1 café experience with zero sugar spikes.',
            tag: 'Only 45 kcal'
          }
        ]
      }
    ]
  },
  {
    id: 'squeasy',
    brandName: 'SquEasy',
    brandTag: 'Artisanal Culinary Pastes & Squeeze Pouches',
    slogan: 'Authentic Flavors, Naturally Made',
    heroImage: '/images/pages/products/retail/squeasy/coverone.png',
    heroBgGradient: 'linear-gradient(135deg, #1c1917 0%, #451a03 40%, #78350f 100%)',
    accentColor: '#f59e0b',
    secondaryColor: '#fbbf24',
    introStory: 'SquEasy is AWA Food Solutions’ innovative culinary line designed to eliminate food preparation hassle with 100% natural, preservative-free recipe bases. From rich authentic Harissa to pure minced garlic, SquEasy comes in mess-free ergonomic spout pouches, glass jars, and single-serve sachets.',
    heritageYear: 'Chef & Home Choice',
    videoUrl: '/images/pages/products/squeasy.mp4',
    socialLinks: [
      { platform: 'YouTube', url: '#' },
      { platform: 'Instagram', url: '#' },
      { platform: 'TikTok', url: '#' }
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
    ],
    subFamilies: [
      {
        id: 'squeasy-harissa-family',
        familyName: 'SquEasy Harissa Chili Pastes',
        familyTagline: '100% Natural Crushed Red Pepper & Mediterranean Spices in Spout Pouches & Jars',
        themeColor: '#dc2626',
        badgeBg: 'rgba(220, 38, 38, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'sq-harissa-pouch',
            name: 'SquEasy Harissa Chili Spout Pouch (250g)',
            image: '/images/pages/products/retail/squeasy/p1.png',
            weight: '250g Stand-Up Spout Pouch',
            flavor: 'Roasted Chili & Cumin',
            description: '100% natural spicy red pepper puree with ergonomic no-drip corner spout.',
            tag: 'Top Seller'
          },
          {
            id: 'sq-harissa-jar',
            name: 'SquEasy Harissa Traditional Glass Jar (200g)',
            image: '/images/pages/products/retail/squeasy/harissa.png',
            weight: '200g Glass Jar',
            flavor: 'Spicy Mediterranean Harissa',
            description: 'Authentic stone-ground chili paste with olive oil and aromatic coriander seeds.',
            tag: 'Authentic Flavor'
          }
        ]
      },
      {
        id: 'squeasy-garlic-family',
        familyName: 'SquEasy Pure Garlic Pastes',
        familyTagline: '100% Natural Fresh Peeled & Crushed Egyptian Garlic with Zero Peeling Mess',
        themeColor: '#65a30d',
        badgeBg: 'rgba(101, 163, 13, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'sq-garlic-pouch',
            name: 'SquEasy Garlic Paste Spout Pouch (250g)',
            image: '/images/pages/products/retail/squeasy/p2.png',
            weight: '250g Stand-Up Spout Pouch',
            flavor: '100% Natural Crushed Garlic',
            description: 'Smooth, creamy garlic paste in a resealable spout pouch for marinades, sauces, and cooking.',
            tag: 'Kitchen Essential'
          },
          {
            id: 'sq-garlic-jar',
            name: 'SquEasy Minced Garlic Glass Jar (350g)',
            image: '/images/pages/products/retail/squeasy/p3.png',
            weight: '350g Glass Jar',
            flavor: 'Coarse Minced Garlic in Brine',
            description: 'Crisp minced garlic pieces packed fresh in brine for sautés, garlic bread, and grills.',
            tag: 'Chef Favorite'
          },
          {
            id: 'sq-garlic-sachet',
            name: 'SquEasy Garlic Paste Single-Serve Sachet',
            image: '/images/pages/products/retail/squeasy/p4.png',
            weight: 'Single Use Sachet',
            flavor: 'Pure Garlic Purée',
            description: 'Convenient single-use portion pack for quick meal seasoning without storing leftover opened garlic.',
            tag: 'Single Portion'
          }
        ]
      }
    ]
  },
  {
    id: 'yalla-drinks',
    brandName: 'Yalla Drinks',
    brandTag: 'Instant Café Beverage Systems',
    slogan: 'Café Quality, Anytime Anywhere',
    heroImage: '/images/yalla-drinks/banners/yalla_main_web_hero_banner.png',
    heroBgGradient: 'linear-gradient(135deg, #041f3d 0%, #03487d 40%, #0284c7 100%)',
    accentColor: '#38bdf8',
    secondaryColor: '#7dd3fc',
    introStory: 'Yalla Drinks is AWA Food Solutions’ modern lifestyle beverage line designed to bring authentic barista-grade frappes, refreshing fruit smoothies, and specialty instant coffees straight to consumers and foodservice outlets. Formulated with instant cold-water and milk soluble matrices, Yalla delivers rich overrun, velvety microfoam tops, and vibrant café flavors in convenient 10-sachet retail boxes and 1kg bags.',
    heritageYear: 'Modern Café Line',
    videoUrl: '/images/yalla-drinks/video/yalla_drinks_official_hero_video.mp4',
    socialLinks: [
      { platform: 'Instagram', url: 'https://www.instagram.com/yalladrinks/' },
      { platform: 'TikTok', url: '#' },
      { platform: 'YouTube', url: '#' }
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
    ],
    subFamilies: [
      {
        id: 'yalla-frappit',
        familyName: 'Frapp It - Ice Blended Series',
        familyTagline: 'Thick Velvety Iced Frappes with Rich Micro-Foam Head',
        themeColor: '#0284c7',
        badgeBg: 'rgba(2, 132, 199, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'frap-spanish',
            name: 'Frapp It Spanish Latte',
            image: '/images/yalla-drinks/frappit/frappit_spanish_latte_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Sweet Condensed Milk & Espresso',
            description: 'The definitive iced Spanish latte experience with rich creamy texture.',
            tag: 'Top Pick'
          },
          {
            id: 'frap-pistachio',
            name: 'Frapp It Pistachio Latte',
            image: '/images/yalla-drinks/frappit/frappit_pistachio_latte_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Roasted Green Pistachio & Cream',
            description: 'Gourmet nutty profile with rich green pistachio cream notes.',
            tag: 'Trending Flavor'
          },
          {
            id: 'frap-vanilla',
            name: 'Frapp It Vanilla Frappe',
            image: '/images/yalla-drinks/frappit/frappit_vanilla_frappe_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Madagascar Vanilla Bean',
            description: 'Classic creamy iced vanilla blend that pairs perfectly with whipped cream.',
            tag: 'Classic'
          },
          {
            id: 'frap-hazelnut',
            name: 'Frapp It Hazelnut Chocolate',
            image: '/images/yalla-drinks/frappit/frappit_hazelnut_chocolate_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Nutty Gianduja & Dark Cocoa',
            description: 'Luscious hazelnut chocolate frappe for chocoholics and iced coffee lovers.',
            tag: 'Choco Craze'
          },
          {
            id: 'frap-toffee',
            name: 'Frapp It Coffee Toffee',
            image: '/images/yalla-drinks/frappit/frappit_coffee_toffee_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'English Butter Toffee & Coffee',
            description: 'Sweet caramelized toffee crunch aroma blended with bold Arabica coffee.',
            tag: 'Caramel Bliss'
          },
          {
            id: 'frap-white-mocha',
            name: 'Frapp It White Chocolate Mocha',
            image: '/images/yalla-drinks/frappit/frappit_white_mocha_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Velvety White Cocoa & Coffee',
            description: 'Sweet creamy white chocolate notes combined with robust iced espresso.',
            tag: 'White Mocha'
          },
          {
            id: 'frap-classic-mocha',
            name: 'Frapp It Classic Mocha',
            image: '/images/yalla-drinks/frappit/frappit_classic_mocha_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Rich Dark Cocoa Mocha',
            description: 'Rich dark chocolate mocha blend for refreshing coffee indulgence.',
            tag: 'Classic Mocha'
          },
          {
            id: 'frap-sugar-free',
            name: 'Frapp It Coffee (Sugar Free)',
            image: '/images/yalla-drinks/frappit/frappit_coffee_sugar_free_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Zero Added Sugar Iced Coffee',
            description: 'Guilt-free frosty iced coffee indulgence with zero added table sugar.',
            tag: 'Diet Friendly'
          },
          {
            id: 'frap-caramel-sugar-free',
            name: 'Frapp It Caramel (Sugar Free)',
            image: '/images/yalla-drinks/frappit/frappit_caramel_sugar_free_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Zero Added Sugar Caramel',
            description: 'Luscious caramel iced frappe formulation with 0 added sugar.',
            tag: 'Diet Caramel'
          }
        ]
      },
      {
        id: 'yalla-smoozy-family',
        familyName: 'Smoozy - Iced Fruit Smoothies',
        familyTagline: 'Refreshing Fruit Blender & Shaker Mixes with Real Natural Compounds',
        themeColor: '#e11d48',
        badgeBg: 'rgba(225, 29, 72, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'smoozy-pink-lemonade',
            name: 'Smoozy Pink Lemonade',
            image: '/images/yalla-drinks/smoozy/smoozy_pink_lemonade_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Sweet Pink Citrus & Berry',
            description: 'Vibrant summer citrus cooler bursting with thirst-quenching zest.',
            tag: 'Summer Hit'
          },
          {
            id: 'smoozy-pina-colada',
            name: 'Smoozy Piña Colada',
            image: '/images/yalla-drinks/smoozy/smoozy_pina_colada_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Tropical Coconut & Pineapple',
            description: 'Creamy tropical coconut cream and sweet golden pineapple fusion.',
            tag: 'Tropical Bliss'
          },
          {
            id: 'smoozy-mojito',
            name: 'Smoozy Mojito Lime Mint',
            image: '/images/yalla-drinks/smoozy/smoozy_mojito_lime_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Zesty Lime & Fresh Garden Mint',
            description: 'Invigorating Mediterranean mojito mocktail base with cool spearmint finish.',
            tag: 'Ultra Refreshing'
          },
          {
            id: 'smoozy-berries',
            name: 'Smoozy Mixed Berries',
            image: '/images/yalla-drinks/smoozy/smoozy_mixed_berries_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Strawberry, Raspberry & Blackberry',
            description: 'Rich deep crimson smoothie blend loaded with forest berry fruit flavor.',
            tag: 'Berry Burst'
          }
        ]
      },
      {
        id: 'yalla-koffi-family',
        familyName: 'Koffi - Specialty Coffee Mixes',
        familyTagline: 'Premium Micro-Ground Roasted Coffee Extracts with Silky Foam Head',
        themeColor: '#78350f',
        badgeBg: 'rgba(120, 53, 15, 0.12)',
        cardBg: '#ffffff',
        products: [
          {
            id: 'koffi-mocha',
            name: 'Koffi Rich Mocha',
            image: '/images/yalla-drinks/koffi/koffi_rich_mocha_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Dark Chocolate & Espresso',
            description: 'Harmonious blend of rich cocoa beans and smooth roasted coffee.',
            tag: 'Rich Mocha'
          },
          {
            id: 'koffi-hazelnut',
            name: 'Koffi Roasted Hazelnut',
            image: '/images/yalla-drinks/koffi/koffi_roasted_hazelnut_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Toasted Hazelnut Latte',
            description: 'Aromatic roasted hazelnut infused into premium instant coffee.',
            tag: 'Nutty Classic'
          },
          {
            id: 'koffi-caramel',
            name: 'Koffi Golden Caramel',
            image: '/images/yalla-drinks/koffi/koffi_golden_caramel_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Butter Caramel Latte',
            description: 'Sweet golden caramel drizzle notes with velvety microfoam froth.',
            tag: 'Caramel Comfort'
          },
          {
            id: 'koffi-latte',
            name: 'Koffi Caffè Latte',
            image: '/images/yalla-drinks/koffi/koffi_caffe_latte_box_10_sachets.png',
            weight: 'Box (10 Sachets)',
            flavor: 'Smooth Creamy Dairy Latte',
            description: 'Silky smooth milk coffee with delicate sweetness and full body.',
            tag: 'Morning Choice'
          }
        ]
      }
    ]
  }
];
