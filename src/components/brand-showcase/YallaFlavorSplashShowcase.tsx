import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, Coffee, Droplets, IceCream, Layers, ArrowRight } from 'lucide-react';
import './BrandShowcase.css';

interface FloatingGraphicItem {
  emoji: string;
  label: string;
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
}

interface YallaFlavor {
  id: string;
  name: string;
  category: 'frappe' | 'smoothie' | 'choco' | 'iced-tea';
  categoryLabel: string;
  boxImage: string;
  sachetImage: string;
  color: string;
  lightBgGradient: string;
  textColor: string;
  accentBadgeColor: string;
  tagline: string;
  notes: string[];
  prepTime: string;
  calories: string;
  sugar: string;
  frothOverrun: number;
  graphicVibeLabel: string;
  floatingGraphics: FloatingGraphicItem[];
}

const YALLA_FLAVORS_DATA: YallaFlavor[] = [
  {
    id: 'spanish-latte',
    name: 'Spanish Latte Frappe',
    category: 'frappe',
    categoryLabel: 'Signature Iced Coffee',
    boxImage: '/images/2026/Copy of spanish latte new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets spanish latte new-View 1.png',
    color: '#D97706',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FEF3C7 0%, #FDE68A 35%, #F8FAFC 80%)',
    textColor: '#B45309',
    accentBadgeColor: '#D97706',
    tagline: 'Bold Roast Espresso Infused with Sweet Spanish Cream & Velvety Iced Microfoam',
    notes: ['100% Arabica Roast', 'Condensed Milk Essence', 'Dense Microfoam Head', 'Ice Blender Ready'],
    prepTime: '30 Sec',
    calories: '110 kcal',
    sugar: '7.8g',
    frothOverrun: 96,
    graphicVibeLabel: 'Roasted Arabica & Condensed Milk',
    floatingGraphics: [
      { emoji: '☕', label: 'Coffee Bean', size: 52, top: '8%', left: '6%', delay: 0, duration: 4.8 },
      { emoji: '🥛', label: 'Condensed Milk', size: 46, top: '68%', left: '8%', delay: 0.6, duration: 5.2 },
      { emoji: '☕', label: 'Microfoam', size: 38, top: '15%', left: '42%', delay: 0.3, duration: 4.2 },
      { emoji: '🧊', label: 'Ice Cube', size: 44, top: '80%', left: '45%', delay: 0.9, duration: 4.6 },
      { emoji: '☕', label: 'Arabica Roast', size: 48, top: '10%', left: '88%', delay: 0.2, duration: 4.4 },
      { emoji: '🥛', label: 'Cream Froth', size: 42, top: '48%', left: '92%', delay: 1.1, duration: 5.0 },
      { emoji: '🧊', label: 'Ice Chill', size: 36, top: '78%', left: '85%', delay: 0.7, duration: 3.8 },
      { emoji: '☕', label: 'Espresso Drop', size: 40, top: '42%', left: '4%', delay: 1.3, duration: 4.7 },
    ],
  },
  {
    id: 'pistachio-latte',
    name: 'Pistachio Latte',
    category: 'frappe',
    categoryLabel: 'Gourmet Nutty Frappe',
    boxImage: '/images/2026/Copy of Pistachio new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets pistachio new-View 1.png',
    color: '#65A30D',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #ECFCCB 0%, #D9F99D 35%, #F8FAFC 80%)',
    textColor: '#4D7C0F',
    accentBadgeColor: '#65A30D',
    tagline: 'Roasted Green Pistachio Cream Blended with Silky Espresso Microfoam',
    notes: ['Roasted Pistachio Cream', 'Velvety Dairy Overrun', 'Specialty Café Favorite', 'No Artificial Syrups'],
    prepTime: '30 Sec',
    calories: '115 kcal',
    sugar: '8.1g',
    frothOverrun: 95,
    graphicVibeLabel: 'Roasted Green Pistachio & Cream',
    floatingGraphics: [
      { emoji: '🥜', label: 'Pistachio Nut', size: 54, top: '8%', left: '6%', delay: 0, duration: 4.6 },
      { emoji: '☕', label: 'Espresso Bean', size: 44, top: '68%', left: '8%', delay: 0.5, duration: 5.0 },
      { emoji: '🍃', label: 'Matcha Leaf', size: 46, top: '14%', left: '44%', delay: 0.8, duration: 4.4 },
      { emoji: '🧊', label: 'Frosted Ice', size: 42, top: '82%', left: '46%', delay: 1.0, duration: 4.0 },
      { emoji: '🥜', label: 'Green Pistachio', size: 50, top: '10%', left: '88%', delay: 0.3, duration: 4.8 },
      { emoji: '🥛', label: 'Cream Froth', size: 38, top: '48%', left: '92%', delay: 0.9, duration: 3.9 },
      { emoji: '🥜', label: 'Nut Crunch', size: 44, top: '78%', left: '86%', delay: 1.2, duration: 4.7 },
      { emoji: '🍃', label: 'Botanical Sprig', size: 40, top: '40%', left: '4%', delay: 0.4, duration: 4.5 },
    ],
  },
  {
    id: 'pink-lemonade',
    name: 'Pink Lemonade',
    category: 'smoothie',
    categoryLabel: 'Fruit Shaker Cooler',
    boxImage: '/images/2026/Copy of pink lemonade-View 5.png',
    sachetImage: '/images/2026/Copy of sachets pink lemonade new-View 1.png',
    color: '#E11D48',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FFE4E6 0%, #FECDD3 35%, #F8FAFC 80%)',
    textColor: '#BE123C',
    accentBadgeColor: '#E11D48',
    tagline: 'Zesty Tart Lemon Infused with Juicy Sweet Wild Raspberry',
    notes: ['Real Fruit Citrus Extracts', 'Enriched with Vitamin C', 'Instant Shaker Dissolution', 'Ruby Pink Summer Hit'],
    prepTime: '30 Sec',
    calories: '65 kcal',
    sugar: '4.2g',
    frothOverrun: 90,
    graphicVibeLabel: 'Sunlit Citrus & Sweet Raspberry Splash',
    floatingGraphics: [
      { emoji: '🍋', label: 'Yellow Lemon', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.5 },
      { emoji: '🍓', label: 'Wild Raspberry', size: 48, top: '68%', left: '8%', delay: 0.6, duration: 4.9 },
      { emoji: '🫧', label: 'Fizz Bubble', size: 44, top: '14%', left: '42%', delay: 0.2, duration: 3.6 },
      { emoji: '🧊', label: 'Ice Crystal', size: 44, top: '80%', left: '45%', delay: 0.9, duration: 4.1 },
      { emoji: '🍋', label: 'Citrus Slice', size: 52, top: '10%', left: '88%', delay: 0.4, duration: 4.7 },
      { emoji: '🍓', label: 'Sweet Berry', size: 46, top: '50%', left: '92%', delay: 1.1, duration: 4.8 },
      { emoji: '🫧', label: 'Soda Bubble', size: 40, top: '78%', left: '85%', delay: 0.8, duration: 3.7 },
      { emoji: '🍋', label: 'Lemon Zest', size: 46, top: '42%', left: '4%', delay: 1.3, duration: 5.1 },
    ],
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    category: 'smoothie',
    categoryLabel: 'Tropical Smoothie',
    boxImage: '/images/2026/Copy of Pina Colada-View 5.png',
    sachetImage: '/images/2026/Copy of sachets pina colada new-View 1.png',
    color: '#D97706',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FEF9C3 0%, #FEF08A 35%, #F8FAFC 80%)',
    textColor: '#B45309',
    accentBadgeColor: '#D97706',
    tagline: 'Sun-Ripened Golden Pineapple Puree & Creamy Coconut Milk',
    notes: ['Tropical Coconut Powder', 'Golden Pineapple Tang', '100% Non-Alcoholic', 'Frozen Island Vibe'],
    prepTime: '30 Sec',
    calories: '75 kcal',
    sugar: '5.0g',
    frothOverrun: 92,
    graphicVibeLabel: 'Tropical Pineapple & Island Coconut',
    floatingGraphics: [
      { emoji: '🍍', label: 'Golden Pineapple', size: 58, top: '8%', left: '6%', delay: 0, duration: 4.6 },
      { emoji: '🥥', label: 'Cracked Coconut', size: 52, top: '68%', left: '8%', delay: 0.6, duration: 5.0 },
      { emoji: '🌴', label: 'Palm Leaf', size: 50, top: '14%', left: '44%', delay: 0.3, duration: 4.8 },
      { emoji: '🧊', label: 'Ice Cube', size: 44, top: '82%', left: '46%', delay: 1.0, duration: 4.0 },
      { emoji: '🍍', label: 'Pineapple Wedge', size: 54, top: '10%', left: '88%', delay: 0.5, duration: 4.4 },
      { emoji: '🥥', label: 'Coconut Milk', size: 46, top: '50%', left: '92%', delay: 1.2, duration: 4.9 },
      { emoji: '🥥', label: 'Coconut Flake', size: 40, top: '78%', left: '85%', delay: 0.8, duration: 3.8 },
      { emoji: '🌴', label: 'Tropical Frond', size: 48, top: '40%', left: '4%', delay: 1.4, duration: 4.7 },
    ],
  },
  {
    id: 'mojito-lime',
    name: 'Mint Lime Mojito',
    category: 'smoothie',
    categoryLabel: 'Zesty Ice Cooler',
    boxImage: '/images/2026/Copy of Mojito-View 5.png',
    sachetImage: '/images/2026/Copy of sachets mojito new-View 1.png',
    color: '#10B981',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #D1FAE5 0%, #A7F3D0 35%, #F8FAFC 80%)',
    textColor: '#047857',
    accentBadgeColor: '#10B981',
    tagline: 'Crushed Garden Spearmint and Key Lime with Iced Shaker Fizz',
    notes: ['Natural Spearmint Oil', 'Tart Lime Zest', 'Mix with Sparkling Water', 'Summer Thirst Quencher'],
    prepTime: '30 Sec',
    calories: '60 kcal',
    sugar: '3.8g',
    frothOverrun: 88,
    graphicVibeLabel: 'Crisp Spearmint & Garden Lime Zest',
    floatingGraphics: [
      { emoji: '🍃', label: 'Spearmint Leaf', size: 54, top: '8%', left: '6%', delay: 0, duration: 4.5 },
      { emoji: '🍋', label: 'Key Lime', size: 50, top: '68%', left: '8%', delay: 0.5, duration: 4.8 },
      { emoji: '🫧', label: 'Sparkling Fizz', size: 44, top: '14%', left: '42%', delay: 0.8, duration: 3.6 },
      { emoji: '🧊', label: 'Frosted Ice', size: 44, top: '80%', left: '46%', delay: 1.1, duration: 4.1 },
      { emoji: '🍃', label: 'Fresh Mint', size: 50, top: '10%', left: '88%', delay: 0.3, duration: 4.7 },
      { emoji: '🍋', label: 'Lime Wheel', size: 48, top: '50%', left: '92%', delay: 1.0, duration: 5.0 },
      { emoji: '🫧', label: 'Soda Bubble', size: 40, top: '78%', left: '85%', delay: 0.6, duration: 3.7 },
      { emoji: '🍃', label: 'Garden Sprig', size: 46, top: '42%', left: '4%', delay: 1.3, duration: 4.6 },
    ],
  },
  {
    id: 'mixed-berries',
    name: 'Wild Mixed Berries',
    category: 'smoothie',
    categoryLabel: 'Berry Explosion',
    boxImage: '/images/2026/Copy of mixed berries-View 5.png',
    sachetImage: '/images/2026/Copy of sachets mixed berries new-View 1.png',
    color: '#8B5CF6',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #EDE9FE 0%, #DDD6FE 35%, #F8FAFC 80%)',
    textColor: '#6D28D9',
    accentBadgeColor: '#8B5CF6',
    tagline: 'Deep Purple Blueberries, Blackberries & Strawberries Velvet Smoothie',
    notes: ['Triple Berry Blend', 'Antioxidant Enriched', 'Velvet Smooth Texture', 'All-Day Refreshing Energy'],
    prepTime: '30 Sec',
    calories: '70 kcal',
    sugar: '4.5g',
    frothOverrun: 91,
    graphicVibeLabel: 'Antioxidant Blueberries & Wild Strawberries',
    floatingGraphics: [
      { emoji: '🫐', label: 'Blueberry', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.3 },
      { emoji: '🍓', label: 'Strawberry', size: 52, top: '68%', left: '8%', delay: 0.6, duration: 4.9 },
      { emoji: '💜', label: 'Blackberry', size: 42, top: '14%', left: '42%', delay: 0.3, duration: 3.8 },
      { emoji: '🧊', label: 'Ice Cube', size: 44, top: '80%', left: '46%', delay: 0.9, duration: 4.2 },
      { emoji: '🫐', label: 'Wild Berries', size: 52, top: '10%', left: '88%', delay: 0.5, duration: 4.6 },
      { emoji: '🍓', label: 'Ripe Berry', size: 48, top: '50%', left: '92%', delay: 1.1, duration: 4.7 },
      { emoji: '🍓', label: 'Wild Berry', size: 38, top: '78%', left: '85%', delay: 0.7, duration: 3.9 },
      { emoji: '🫐', label: 'Berry Sprig', size: 46, top: '42%', left: '4%', delay: 1.4, duration: 4.5 },
    ],
  },
  {
    id: 'white-mocha',
    name: 'White Chocolate Mocha',
    category: 'frappe',
    categoryLabel: 'Gourmet White Mocha',
    boxImage: '/images/2026/Copy of white mocha new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets white mocha new-View 1.png',
    color: '#A855F7',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #F3E8FF 0%, #E9D5FF 35%, #F8FAFC 80%)',
    textColor: '#7E22CE',
    accentBadgeColor: '#A855F7',
    tagline: 'Velvety White Cocoa Butter Notes Blended with Robust Arabica Roast',
    notes: ['Real White Cocoa Solids', 'Dense Whipped Foam Crown', 'Hot or Iced Versatility', 'Sweet Tooth Favorite'],
    prepTime: '30 Sec',
    calories: '120 kcal',
    sugar: '8.4g',
    frothOverrun: 95,
    graphicVibeLabel: 'White Cocoa Butter & Arabica Espresso',
    floatingGraphics: [
      { emoji: '🍫', label: 'White Chocolate', size: 54, top: '8%', left: '6%', delay: 0, duration: 4.5 },
      { emoji: '☕', label: 'Espresso Roast', size: 46, top: '68%', left: '8%', delay: 0.5, duration: 5.0 },
      { emoji: '🥛', label: 'Cream Froth', size: 44, top: '14%', left: '42%', delay: 0.8, duration: 4.2 },
      { emoji: '🥛', label: 'Whipped Foam', size: 40, top: '80%', left: '46%', delay: 1.1, duration: 3.8 },
      { emoji: '☕', label: 'Coffee Bean', size: 48, top: '10%', left: '88%', delay: 0.4, duration: 4.6 },
      { emoji: '🍫', label: 'Cocoa Butter', size: 48, top: '50%', left: '92%', delay: 1.0, duration: 4.9 },
      { emoji: '🍫', label: 'Cocoa Shaving', size: 38, top: '78%', left: '85%', delay: 0.7, duration: 3.7 },
      { emoji: '☕', label: 'Dark Espresso', size: 42, top: '42%', left: '4%', delay: 1.3, duration: 4.7 },
    ],
  },
  {
    id: 'hazelnut-choco',
    name: 'Hazelnut Chocolate',
    category: 'choco',
    categoryLabel: 'Decadent Choco Frappe',
    boxImage: '/images/2026/Copy of chocolate hazelnut new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets chocolate hazelnut new-View 1.png',
    color: '#B45309',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FEF3C7 0%, #FDE68A 35%, #F8FAFC 80%)',
    textColor: '#92400E',
    accentBadgeColor: '#B45309',
    tagline: 'Nutty Gianduja Roasted Hazelnut and Dark Dutch Cocoa Indulgence',
    notes: ['Dutch Cocoa Powder', 'Roasted Hazelnut Paste', 'Creamy Overrun Top', 'Rich Dessert Drink'],
    prepTime: '30 Sec',
    calories: '118 kcal',
    sugar: '8.0g',
    frothOverrun: 94,
    graphicVibeLabel: 'Roasted Gianduja Hazelnut & Dark Cocoa',
    floatingGraphics: [
      { emoji: '🌰', label: 'Roasted Hazelnut', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.4 },
      { emoji: '🍫', label: 'Dutch Cocoa', size: 50, top: '68%', left: '8%', delay: 0.7, duration: 4.8 },
      { emoji: '☕', label: 'Dark Roast', size: 44, top: '14%', left: '42%', delay: 0.3, duration: 3.9 },
      { emoji: '🍫', label: 'Choco Froth', size: 40, top: '80%', left: '46%', delay: 1.0, duration: 4.2 },
      { emoji: '🌰', label: 'Hazelnut Nut', size: 50, top: '10%', left: '88%', delay: 0.5, duration: 4.6 },
      { emoji: '🍫', label: 'Dark Chocolate', size: 48, top: '50%', left: '92%', delay: 1.2, duration: 4.9 },
      { emoji: '🌰', label: 'Hazelnut Crunch', size: 38, top: '78%', left: '85%', delay: 0.8, duration: 3.8 },
      { emoji: '🌰', label: 'Gianduja Paste', size: 46, top: '42%', left: '4%', delay: 1.4, duration: 4.7 },
    ],
  },
];

interface YallaBeverageRange {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  bannerImage: string;
  themeColor: string;
  bgGradient: string;
  description: string;
  highlights: string[];
}

const YALLA_BEVERAGE_RANGES: YallaBeverageRange[] = [
  {
    id: 'frappit',
    name: 'Yalla Frapp It',
    subtitle: 'Ice-Blended Café Frappes & Specialty Iced Lattes',
    badge: 'Specialty Coffee Line',
    bannerImage: '/images/banners/ChatGPT_Image_13_2026_07_41_27-Photoroom (1).png',
    themeColor: '#0284C7',
    bgGradient: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
    description: 'Specialty Arabica coffee, Spanish Latte, Pistachio, White Mocha, and Vanilla Frappe mixes. Thick barista microfoam head that supports whipped cream.',
    highlights: ['100% Arabica Coffee', 'Ice Blender Ready', 'Dense Velvet Overrun', 'No Artificial Syrups'],
  },
  {
    id: 'smoozy',
    name: 'Yalla Smoozy',
    subtitle: 'Real Fruit Powder Coolers & Tropical Smoothies',
    badge: 'Real Fruit Series',
    bannerImage: '/images/banners/ChatGPT_Image_13_2026_07_38_08-Photoroom.png',
    themeColor: '#E11D48',
    bgGradient: 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)',
    description: 'Refreshing real fruit coolers in Pink Lemonade, Piña Colada, Mint Lime Mojito, and Wild Mixed Berries. Instant dissolvable in ice water or sparkling soda.',
    highlights: ['Real Fruit Powders', 'Enriched with Vitamin C', 'Instant Shaker Dissolution', '100% Non-Alcoholic'],
  },
  {
    id: 'koffi',
    name: 'Yalla Koffi',
    subtitle: 'Specialty 3-in-1 Instant Hot Lattes & Mochas',
    badge: 'Hot Specialty Coffee',
    bannerImage: '/images/banners/ChatGPT_Image_13_2026_07_37_55-Photoroom.png',
    themeColor: '#D97706',
    bgGradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
    description: 'Rich, comforting hot specialty coffees including Golden Caramel Latte, Mocha Latte, Hazelnut Latte, and Caffè Latte. Steaming thick foam head in 10 seconds.',
    highlights: ['Just Add Hot Water', 'Dutch Cocoa & Caramel', 'Creamy Overrun Foam', 'Morning & Afternoon Boost'],
  },
];

interface YallaFlavorSplashShowcaseProps {
  onOpenQuote: () => void;
}

export const YallaFlavorSplashShowcase: React.FC<YallaFlavorSplashShowcaseProps> = () => {
  const [activeFlavor, setActiveFlavor] = useState<YallaFlavor>(YALLA_FLAVORS_DATA[0]);
  const [filterCategory, setFilterCategory] = useState<'all' | 'frappe' | 'smoothie' | 'choco'>('all');
  const [activeRangeIndex, setActiveRangeIndex] = useState<number>(0);

  const filteredFlavors =
    filterCategory === 'all'
      ? YALLA_FLAVORS_DATA
      : YALLA_FLAVORS_DATA.filter((f) => f.category === filterCategory);

  const activeRange = YALLA_BEVERAGE_RANGES[activeRangeIndex];

  return (
    <section className="yalla-splash-section-light">
      {/* Dynamic Ambient Light Gradient */}
      <motion.div
        key={activeFlavor.id + '-light-bg'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: activeFlavor.lightBgGradient,
          pointerEvents: 'none',
        }}
      />

      {/* Omnidirectional Floating Animated Graphics Across the Entire Stage */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 3 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlavor.id + '-graphics'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            {activeFlavor.floatingGraphics.map((item, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, idx % 2 === 0 ? -24 : 24, 0],
                  x: [0, idx % 2 === 0 ? 18 : -18, 0],
                  rotate: [0, idx % 2 === 0 ? 20 : -20, 0],
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                style={{
                  position: 'absolute',
                  top: item.top,
                  left: item.left,
                  fontSize: `${item.size}px`,
                  userSelect: 'none',
                  filter: 'drop-shadow(0 12px 20px rgba(0, 0, 0, 0.12))',
                }}
                title={item.label}
              >
                {item.emoji}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="yalla-splash-container-light">
        {/* Header */}
        <div className="yalla-header-light">
          <div
            className="fmcg-eyebrow"
            style={{
              borderColor: `${activeFlavor.color}55`,
              color: activeFlavor.textColor,
            }}
          >
            <Zap size={14} style={{ color: activeFlavor.color }} />
            <span>{activeFlavor.graphicVibeLabel}</span>
          </div>

          <h1 className="yalla-main-title-light">
            INSTANT CAFÉ OVERDRIVE
          </h1>

          <p className="yalla-sub-desc-light">
            Select any barista flavor below to preview the instant formulation, microfoam density, and retail packaging.
          </p>

          {/* Category Filter Chips */}
          <div className="yalla-filter-bar-light">
            {[
              { id: 'all', label: 'All Flavors' },
              { id: 'frappe', label: 'Iced Frappes' },
              { id: 'smoothie', label: 'Fruit Coolers' },
              { id: 'choco', label: 'Choco & Mochas' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id as any)}
                className={`yalla-filter-btn-light ${filterCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Horizontal Flavor Barista Stations (Spacious 140px Chips) */}
        <div className="yalla-flavor-orbit-row-light">
          {filteredFlavors.map((flavor) => {
            const isSelected = activeFlavor.id === flavor.id;
            return (
              <button
                key={flavor.id}
                onClick={() => setActiveFlavor(flavor)}
                className={`yalla-flavor-chip-light ${isSelected ? 'active' : ''}`}
                style={{
                  borderColor: isSelected ? flavor.color : 'rgba(0,0,0,0.08)',
                }}
              >
                <img
                  src={flavor.boxImage}
                  alt={flavor.name}
                  className="yalla-chip-thumb"
                />
                <span className="yalla-chip-name">{flavor.name}</span>
                <span
                  className="yalla-chip-tag"
                  style={{
                    backgroundColor: isSelected ? flavor.color : '#F1F5F9',
                    color: isSelected ? '#FFFFFF' : '#475569',
                  }}
                >
                  {flavor.categoryLabel.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. Main 3-Column Large Stage Grid */}
        <div className="yalla-stage-grid">
          {/* Left Column: Barista Specs Card (Spacious 2.25rem Padding) */}
          <div className="yalla-glass-card-light">
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: activeFlavor.textColor, marginBottom: '0.35rem', letterSpacing: '0.05em' }}>
                {activeFlavor.categoryLabel}
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.15 }}>
                {activeFlavor.name}
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#475569', marginTop: '0.5rem', lineHeight: 1.55 }}>
                "{activeFlavor.tagline}"
              </p>
            </div>

            {/* Formula Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.775rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Barista Formula Highlights
              </div>
              {activeFlavor.notes.map((note, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#1E293B', fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: activeFlavor.color, flexShrink: 0 }} />
                  <span>{note}</span>
                </div>
              ))}
            </div>

            {/* Froth Overrun Gauge */}
            <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                <span style={{ color: '#475569' }}>Microfoam Density:</span>
                <span style={{ color: activeFlavor.textColor, fontWeight: 900 }}>{activeFlavor.frothOverrun}% Overrun</span>
              </div>
              <div className="fmcg-meter-bar-bg" style={{ height: '8px' }}>
                <div
                  className="fmcg-meter-bar-fill"
                  style={{ width: `${activeFlavor.frothOverrun}%`, backgroundColor: activeFlavor.color }}
                />
              </div>
            </div>
          </div>

          {/* Center Column: 3D Bold Dual Box + Sachet Floating Stage (410px Main Pack) */}
          <div className="yalla-center-pack-stage">
            {/* Ambient Circular Splash Halo */}
            <div
              className="yalla-pack-halo"
              style={{ borderColor: `${activeFlavor.color}33` }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlavor.id}
                initial={{ rotateY: 180, scale: 0.85, opacity: 0 }}
                animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                exit={{ rotateY: -180, scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* Main 10-Sachet Retail Box */}
                <motion.img
                  animate={{
                    y: [0, -14, 0],
                    rotateZ: [0, -1.5, 1.5, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  src={activeFlavor.boxImage}
                  alt={activeFlavor.name}
                  className="yalla-main-pack-img"
                />

                {/* Flying Individual Barista Sachet */}
                <motion.img
                  initial={{ x: 40, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    y: [0, -18, 0],
                    rotateZ: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.2,
                  }}
                  src={activeFlavor.sachetImage}
                  alt={`${activeFlavor.name} Sachet`}
                  className="yalla-sachet-pack-img"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Speed & Nutrition Breakdown (Spacious 2.25rem Padding) */}
          <div className="yalla-glass-card-light">
            <div style={{ padding: '1.5rem', borderRadius: '20px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.85rem', fontWeight: 900, color: activeFlavor.textColor, lineHeight: 1 }}>
                {activeFlavor.prepTime}
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginTop: '0.4rem', letterSpacing: '0.04em' }}>
                Ice Blender / Shaker Prep
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
                  {activeFlavor.calories}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Calories
                </div>
              </div>

              <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
                  {activeFlavor.sugar}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  Sugar
                </div>
              </div>
            </div>

            <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.85rem' }}>
              <div style={{ fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <CheckCircle2 size={16} style={{ color: activeFlavor.color }} />
                <span>Instant Cold-Solubility</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>
                100% fine spray-dried powder dissolves instantly in cold milk or ice water with zero lumps.
              </div>
            </div>
          </div>
        </div>

        {/* 3. NEW: Interactive Spotlight of the 3 Signature Yalla Beverage Universes */}
        <div style={{ marginTop: '2.5rem', background: '#FFFFFF', borderRadius: '30px', border: '1.5px solid rgba(0,0,0,0.08)', padding: '2.5rem', boxShadow: '0 15px 40px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: activeRange.themeColor, letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                The 3 Signature Yalla Product Lines
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0F172A' }}>
                DISCOVER THE COMPLETE YALLA UNIVERSE
              </h3>
            </div>

            {/* Sub-line Switcher Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '9999px', border: '1px solid rgba(0,0,0,0.06)' }}>
              {YALLA_BEVERAGE_RANGES.map((range, idx) => (
                <button
                  key={range.id}
                  onClick={() => setActiveRangeIndex(idx)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.825rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: activeRangeIndex === idx ? range.themeColor : 'transparent',
                    color: activeRangeIndex === idx ? '#FFFFFF' : '#475569',
                    boxShadow: activeRangeIndex === idx ? `0 4px 15px ${range.themeColor}44` : 'none',
                  }}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>

          {/* Banner Spotlight Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRange.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '2.5rem',
                alignItems: 'center',
              }}
            >
              {/* Left: High-Res Banner Display */}
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: activeRange.bgGradient,
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '380px',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
              }}>
                <img
                  src={activeRange.bannerImage}
                  alt={activeRange.name}
                  style={{
                    maxHeight: '340px',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
                  }}
                />
              </div>

              {/* Right: Lineup Info */}
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  background: '#F8FAFC',
                  color: activeRange.themeColor,
                  border: `1px solid ${activeRange.themeColor}33`,
                  marginBottom: '0.75rem',
                }}>
                  {activeRange.badge}
                </div>

                <h4 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                  {activeRange.name}
                </h4>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: activeRange.themeColor, marginBottom: '1rem' }}>
                  {activeRange.subtitle}
                </div>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {activeRange.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                  {activeRange.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#1E293B', fontWeight: 700 }}>
                      <CheckCircle2 size={16} style={{ color: activeRange.themeColor, flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
