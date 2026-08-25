import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
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
  category: 'frappe' | 'smoothie' | 'choco';
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

const YALLA_FLAVORS_DATA_EN: YallaFlavor[] = [
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
      { emoji: '🌴', label: 'Tropic Palm', size: 44, top: '42%', left: '4%', delay: 1.4, duration: 4.7 },
    ],
  },
  {
    id: 'mojito',
    name: 'Mint Lime Mojito',
    category: 'smoothie',
    categoryLabel: 'Zesty Herb Refresher',
    boxImage: '/images/2026/Copy of Mojito-View 5.png',
    sachetImage: '/images/2026/Copy of sachets mojito new-View 1.png',
    color: '#059669',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #D1FAE5 0%, #A7F3D0 35%, #F8FAFC 80%)',
    textColor: '#047857',
    accentBadgeColor: '#059669',
    tagline: 'Garden Spearmint Leaves Muddled with Tart Green Lime Juice',
    notes: ['Spearmint Oil Infusion', 'Zesty Persian Lime', '100% Non-Alcoholic', 'Sparkling Water Ready'],
    prepTime: '30 Sec',
    calories: '60 kcal',
    sugar: '3.8g',
    frothOverrun: 88,
    graphicVibeLabel: 'Garden Spearmint & Crisp Green Lime',
    floatingGraphics: [
      { emoji: '🍃', label: 'Mint Leaf', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.7 },
      { emoji: '🍋', label: 'Green Lime', size: 48, top: '68%', left: '8%', delay: 0.5, duration: 5.1 },
      { emoji: '🫧', label: 'Soda Sparkle', size: 42, top: '14%', left: '42%', delay: 0.3, duration: 3.7 },
      { emoji: '🧊', label: 'Ice Chill', size: 44, top: '80%', left: '45%', delay: 1.0, duration: 4.3 },
      { emoji: '🍃', label: 'Spearmint Sprig', size: 50, top: '10%', left: '88%', delay: 0.4, duration: 4.5 },
      { emoji: '🍋', label: 'Lime Wedge', size: 46, top: '50%', left: '92%', delay: 1.1, duration: 4.8 },
      { emoji: '🫧', label: 'Carbonation', size: 38, top: '78%', left: '85%', delay: 0.7, duration: 3.9 },
      { emoji: '🍃', label: 'Fresh Herb', size: 42, top: '42%', left: '4%', delay: 1.3, duration: 4.6 },
    ],
  },
  {
    id: 'berries',
    name: 'Wild Mixed Berries',
    category: 'smoothie',
    categoryLabel: 'Antioxidant Berry Blast',
    boxImage: '/images/2026/Copy of Berries new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets berries new-View 1.png',
    color: '#9333EA',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #F3E8FF 0%, #E9D5FF 35%, #F8FAFC 80%)',
    textColor: '#7E22CE',
    accentBadgeColor: '#9333EA',
    tagline: 'Forest Blackberry, Wild Raspberry, Strawberry & Blueberry Harmony',
    notes: ['Four-Berry Fusion', 'Antioxidant Rich', 'Deep Ruby Purple', 'Velvety Smooth Texture'],
    prepTime: '30 Sec',
    calories: '68 kcal',
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

const YALLA_FLAVORS_DATA_AR: YallaFlavor[] = [
  {
    id: 'spanish-latte',
    name: 'سبانش لاتيه فرابيه',
    category: 'frappe',
    categoryLabel: 'مشروب القهوة المثلجة المميز',
    boxImage: '/images/2026/Copy of spanish latte new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets spanish latte new-View 1.png',
    color: '#D97706',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FEF3C7 0%, #FDE68A 35%, #F8FAFC 80%)',
    textColor: '#B45309',
    accentBadgeColor: '#D97706',
    tagline: 'إسبريسو محمص داكن مع حليب مكثف محلى ورغوة ميكروفوم مخملية مثلجة',
    notes: ['بن أرابيكا محمص 100%', 'حليب مكثف محلى فاخر', 'رغوة فوم حليبية كثيفة', 'جاهز للخلاط والشيكر مع الثلج'],
    prepTime: '30 ثانية',
    calories: '110 سعرة',
    sugar: '7.8 جم',
    frothOverrun: 96,
    graphicVibeLabel: 'بن أرابيكا محمص وحليب مكثف',
    floatingGraphics: [
      { emoji: '☕', label: 'حبوب البن', size: 52, top: '8%', left: '6%', delay: 0, duration: 4.8 },
      { emoji: '🥛', label: 'حليب مكثف', size: 46, top: '68%', left: '8%', delay: 0.6, duration: 5.2 },
      { emoji: '☕', label: 'رغوة فوم', size: 38, top: '15%', left: '42%', delay: 0.3, duration: 4.2 },
      { emoji: '🧊', label: 'مكعب ثلج', size: 44, top: '80%', left: '45%', delay: 0.9, duration: 4.6 },
      { emoji: '☕', label: 'بن أرابيكا', size: 48, top: '10%', left: '88%', delay: 0.2, duration: 4.4 },
      { emoji: '🥛', label: 'كريمة حليب', size: 42, top: '48%', left: '92%', delay: 1.1, duration: 5.0 },
      { emoji: '🧊', label: 'انتعاش مثلج', size: 36, top: '78%', left: '85%', delay: 0.7, duration: 3.8 },
      { emoji: '☕', label: 'قطرة إسبريسو', size: 40, top: '42%', left: '4%', delay: 1.3, duration: 4.7 },
    ],
  },
  {
    id: 'pistachio-latte',
    name: 'بيستاشيو لاتيه فرابيه',
    category: 'frappe',
    categoryLabel: 'فرابيه فستق فاخر',
    boxImage: '/images/2026/Copy of Pistachio new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets pistachio new-View 1.png',
    color: '#65A30D',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #ECFCCB 0%, #D9F99D 35%, #F8FAFC 80%)',
    textColor: '#4D7C0F',
    accentBadgeColor: '#65A30D',
    tagline: 'كريمة الفستق الأخضر المحمص ممزوجة برغوة إسبريسو مخملية',
    notes: ['كريمة فستق طبيعي محمص', 'قوام حليبي مخملي', 'المشروب الأحب بالكافيهات', 'بدون أي سيرب أو نكهة صناعية'],
    prepTime: '30 ثانية',
    calories: '115 سعرة',
    sugar: '8.1 جم',
    frothOverrun: 95,
    graphicVibeLabel: 'فستق أخضر محمص وكريمة',
    floatingGraphics: [
      { emoji: '🥜', label: 'فستق حلبي', size: 54, top: '8%', left: '6%', delay: 0, duration: 4.6 },
      { emoji: '☕', label: 'حبوب إسبريسو', size: 44, top: '68%', left: '8%', delay: 0.5, duration: 5.0 },
      { emoji: '🍃', label: 'أوراق ماتشا', size: 46, top: '14%', left: '44%', delay: 0.8, duration: 4.4 },
      { emoji: '🧊', label: 'ثلج مثلج', size: 42, top: '82%', left: '46%', delay: 1.0, duration: 4.0 },
      { emoji: '🥜', label: 'فستق أخضر', size: 50, top: '10%', left: '88%', delay: 0.3, duration: 4.8 },
      { emoji: '🥛', label: 'فوم كريمي', size: 38, top: '48%', left: '92%', delay: 0.9, duration: 3.9 },
      { emoji: '🥜', label: 'قرمشة فستق', size: 44, top: '78%', left: '86%', delay: 1.2, duration: 4.7 },
      { emoji: '🍃', label: 'نباتات عطرية', size: 40, top: '40%', left: '4%', delay: 0.4, duration: 4.5 },
    ],
  },
  {
    id: 'pink-lemonade',
    name: 'سموزي بينك ليمونيد',
    category: 'smoothie',
    categoryLabel: 'سموذي فواكه مثلج',
    boxImage: '/images/2026/Copy of pink lemonade-View 5.png',
    sachetImage: '/images/2026/Copy of sachets pink lemonade new-View 1.png',
    color: '#E11D48',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FFE4E6 0%, #FECDD3 35%, #F8FAFC 80%)',
    textColor: '#BE123C',
    accentBadgeColor: '#E11D48',
    tagline: 'ليمون وردي حامض ومنعش مع لمسة التوت البري العصيرية',
    notes: ['مستخلصات حمضيات طبيعية', 'معزز بفيتامين C', 'ذوبان فوري في الشيكر', 'نجم الصيف الوردي المنعش'],
    prepTime: '30 ثانية',
    calories: '65 سعرة',
    sugar: '4.2 جم',
    frothOverrun: 90,
    graphicVibeLabel: 'حمضيات مشمسة وتوت بري عصيري',
    floatingGraphics: [
      { emoji: '🍋', label: 'ليمون أصفر', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.5 },
      { emoji: '🍓', label: 'توت بري', size: 48, top: '68%', left: '8%', delay: 0.6, duration: 4.9 },
      { emoji: '🫧', label: 'فقاعات فوارة', size: 44, top: '14%', left: '42%', delay: 0.2, duration: 3.6 },
      { emoji: '🧊', label: 'بلورات ثلج', size: 44, top: '80%', left: '45%', delay: 0.9, duration: 4.1 },
      { emoji: '🍋', label: 'شريحة ليمون', size: 52, top: '10%', left: '88%', delay: 0.4, duration: 4.7 },
      { emoji: '🍓', label: 'توت حلو', size: 46, top: '50%', left: '92%', delay: 1.1, duration: 4.8 },
      { emoji: '🫧', label: 'فقاعة صودا', size: 40, top: '78%', left: '85%', delay: 0.8, duration: 3.7 },
      { emoji: '🍋', label: 'بشر ليمون', size: 46, top: '42%', left: '4%', delay: 1.3, duration: 5.1 },
    ],
  },
  {
    id: 'pina-colada',
    name: 'سموزي بينا كولادا',
    category: 'smoothie',
    categoryLabel: 'سموذي استوائي',
    boxImage: '/images/2026/Copy of Pina Colada-View 5.png',
    sachetImage: '/images/2026/Copy of sachets pina colada new-View 1.png',
    color: '#D97706',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FEF9C3 0%, #FEF08A 35%, #F8FAFC 80%)',
    textColor: '#B45309',
    accentBadgeColor: '#D97706',
    tagline: 'بيوريه الأناناس الذهبي وحليب جوز الهند الكريمي',
    notes: ['بودرة جوز هند استوائية', 'أناناس ذهبي مشمس', 'خالي من الكحول 100%', 'انتعاش الشواطئ المثلج'],
    prepTime: '30 ثانية',
    calories: '75 سعرة',
    sugar: '5.0 جم',
    frothOverrun: 92,
    graphicVibeLabel: 'أناناس استوائي وجوز هند الشواطئ',
    floatingGraphics: [
      { emoji: '🍍', label: 'أناناس ذهبي', size: 58, top: '8%', left: '6%', delay: 0, duration: 4.6 },
      { emoji: '🥥', label: 'جوز هند مكسور', size: 52, top: '68%', left: '8%', delay: 0.6, duration: 5.0 },
      { emoji: '🌴', label: 'ورق نخيل', size: 50, top: '14%', left: '44%', delay: 0.3, duration: 4.8 },
      { emoji: '🧊', label: 'مكعب ثلج', size: 44, top: '82%', left: '46%', delay: 1.0, duration: 4.0 },
      { emoji: '🍍', label: 'قطعة أناناس', size: 54, top: '10%', left: '88%', delay: 0.5, duration: 4.4 },
      { emoji: '🥥', label: 'حليب جوز هند', size: 46, top: '50%', left: '92%', delay: 1.2, duration: 4.9 },
      { emoji: '🥥', label: 'رقائق جوز هند', size: 40, top: '78%', left: '85%', delay: 0.8, duration: 3.8 },
      { emoji: '🌴', label: 'نخيل استوائي', size: 44, top: '42%', left: '4%', delay: 1.4, duration: 4.7 },
    ],
  },
  {
    id: 'mojito',
    name: 'سموزي موهيتو ليمون ونعناع',
    category: 'smoothie',
    categoryLabel: 'انتعاش الأعشاب والليمون',
    boxImage: '/images/2026/Copy of Mojito-View 5.png',
    sachetImage: '/images/2026/Copy of sachets mojito new-View 1.png',
    color: '#059669',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #D1FAE5 0%, #A7F3D0 35%, #F8FAFC 80%)',
    textColor: '#047857',
    accentBadgeColor: '#059669',
    tagline: 'أوراق نعناع حديقة منعشة مع عصير الليمون الأخضر الحامض',
    notes: ['زيوت نعناع طبيعية', 'عصير ليمون أخضر حامض', 'خالي من الكحول 100%', 'مثالي مع المياه الغازية'],
    prepTime: '30 ثانية',
    calories: '60 سعرة',
    sugar: '3.8 جم',
    frothOverrun: 88,
    graphicVibeLabel: 'نعناع بستاني وليمون أخضر مثلج',
    floatingGraphics: [
      { emoji: '🍃', label: 'ورقة نعناع', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.7 },
      { emoji: '🍋', label: 'ليمون أخضر', size: 48, top: '68%', left: '8%', delay: 0.5, duration: 5.1 },
      { emoji: '🫧', label: 'صودا فوارة', size: 42, top: '14%', left: '42%', delay: 0.3, duration: 3.7 },
      { emoji: '🧊', label: 'برودة الثلج', size: 44, top: '80%', left: '45%', delay: 1.0, duration: 4.3 },
      { emoji: '🍃', label: 'غصن نعناع', size: 50, top: '10%', left: '88%', delay: 0.4, duration: 4.5 },
      { emoji: '🍋', label: 'شريحة ليمون', size: 46, top: '50%', left: '92%', delay: 1.1, duration: 4.8 },
      { emoji: '🫧', label: 'فوران الصودا', size: 38, top: '78%', left: '85%', delay: 0.7, duration: 3.9 },
      { emoji: '🍃', label: 'أعشاب طازجة', size: 42, top: '42%', left: '4%', delay: 1.3, duration: 4.6 },
    ],
  },
  {
    id: 'berries',
    name: 'سموزي التوت البري المشكل',
    category: 'smoothie',
    categoryLabel: 'انفجار التوت ومضادات الأكسدة',
    boxImage: '/images/2026/Copy of Berries new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets berries new-View 1.png',
    color: '#9333EA',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #F3E8FF 0%, #E9D5FF 35%, #F8FAFC 80%)',
    textColor: '#7E22CE',
    accentBadgeColor: '#9333EA',
    tagline: 'تناغم التوت الأسود البري، والتوت الأحمر، والفراولة، والبلوبيري',
    notes: ['مزيج 4 أنواع توت طبيعي', 'غني بمضادات الأكسدة', 'لون بنفسجي ملكي طبيعي', 'قوام سموذي مخملي فائق'],
    prepTime: '30 ثانية',
    calories: '68 سعرة',
    sugar: '4.5 جم',
    frothOverrun: 91,
    graphicVibeLabel: 'بلوبيري وفراولة وتوت بري',
    floatingGraphics: [
      { emoji: '🫐', label: 'بلوبيري', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.3 },
      { emoji: '🍓', label: 'فراولة', size: 52, top: '68%', left: '8%', delay: 0.6, duration: 4.9 },
      { emoji: '💜', label: 'توت أسود', size: 42, top: '14%', left: '42%', delay: 0.3, duration: 3.8 },
      { emoji: '🧊', label: 'مكعب ثلج', size: 44, top: '80%', left: '46%', delay: 0.9, duration: 4.2 },
      { emoji: '🫐', label: 'توت بري', size: 52, top: '10%', left: '88%', delay: 0.5, duration: 4.6 },
      { emoji: '🍓', label: 'توت ناضج', size: 48, top: '50%', left: '92%', delay: 1.1, duration: 4.7 },
      { emoji: '🍓', label: 'توت أحمر', size: 38, top: '78%', left: '85%', delay: 0.7, duration: 3.9 },
      { emoji: '🫐', label: 'غصن توت', size: 46, top: '42%', left: '4%', delay: 1.4, duration: 4.5 },
    ],
  },
  {
    id: 'white-mocha',
    name: 'وايت شوكلت موكا فرابيه',
    category: 'frappe',
    categoryLabel: 'وايت موكا جورميه فاخرة',
    boxImage: '/images/2026/Copy of white mocha new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets white mocha new-View 1.png',
    color: '#A855F7',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #F3E8FF 0%, #E9D5FF 35%, #F8FAFC 80%)',
    textColor: '#7E22CE',
    accentBadgeColor: '#A855F7',
    tagline: 'زبدة كاكاو بيضاء كريمية ممزوجة ببن أرابيكا محمص فاخر',
    notes: ['زبدة كاكاو بيضاء طبيعية', 'تاج رغوة فوم مخفوقة', 'يقدم ساخناً أو مع الثلج', 'الخيار الأفضل لعشاق الشوكولاتة'],
    prepTime: '30 ثانية',
    calories: '120 سعرة',
    sugar: '8.4 جم',
    frothOverrun: 95,
    graphicVibeLabel: 'زبدة كاكاو بيضاء وإسبريسو أرابيكا',
    floatingGraphics: [
      { emoji: '🍫', label: 'شوكولاتة بيضاء', size: 54, top: '8%', left: '6%', delay: 0, duration: 4.5 },
      { emoji: '☕', label: 'تحميص إسبريسو', size: 46, top: '68%', left: '8%', delay: 0.5, duration: 5.0 },
      { emoji: '🥛', label: 'فوم كريمي', size: 44, top: '14%', left: '42%', delay: 0.8, duration: 4.2 },
      { emoji: '🥛', label: 'رغوة مخفوقة', size: 40, top: '80%', left: '46%', delay: 1.1, duration: 3.8 },
      { emoji: '☕', label: 'حبوب قهوة', size: 48, top: '10%', left: '88%', delay: 0.4, duration: 4.6 },
      { emoji: '🍫', label: 'زبدة كاكاو', size: 48, top: '50%', left: '92%', delay: 1.0, duration: 4.9 },
      { emoji: '🍫', label: 'بشر كاكاو', size: 38, top: '78%', left: '85%', delay: 0.7, duration: 3.7 },
      { emoji: '☕', label: 'إسبريسو داكن', size: 42, top: '42%', left: '4%', delay: 1.3, duration: 4.7 },
    ],
  },
  {
    id: 'hazelnut-choco',
    name: 'شوكولاتة بالبندق فرابيه',
    category: 'choco',
    categoryLabel: 'شوكولاتة بالبندق فاخرة',
    boxImage: '/images/2026/Copy of chocolate hazelnut new-View 5.png',
    sachetImage: '/images/2026/Copy of sachets chocolate hazelnut new-View 1.png',
    color: '#B45309',
    lightBgGradient: 'radial-gradient(ellipse at 50% 30%, #FEF3C7 0%, #FDE68A 35%, #F8FAFC 80%)',
    textColor: '#92400E',
    accentBadgeColor: '#B45309',
    tagline: 'مزيج الجياندويا من البندق المحمص وكاكاو هولندا الداكن',
    notes: ['بودرة كاكاو هولندي أصيل', 'معجون بندق محمص طبيعي', 'رغوة شوكولاتة كثيفة', 'مشروب ديسرت غني ولذيذ'],
    prepTime: '30 ثانية',
    calories: '118 سعرة',
    sugar: '8.0 جم',
    frothOverrun: 94,
    graphicVibeLabel: 'بندق جياندويا محمص وكاكاو داكن',
    floatingGraphics: [
      { emoji: '🌰', label: 'بندق محمص', size: 56, top: '8%', left: '6%', delay: 0, duration: 4.4 },
      { emoji: '🍫', label: 'كاكاو هولندي', size: 50, top: '68%', left: '8%', delay: 0.7, duration: 4.8 },
      { emoji: '☕', label: 'تحميص داكن', size: 44, top: '14%', left: '42%', delay: 0.3, duration: 3.9 },
      { emoji: '🍫', label: 'فوم شوكولاتة', size: 40, top: '80%', left: '46%', delay: 1.0, duration: 4.2 },
      { emoji: '🌰', label: 'حبة بندق', size: 50, top: '10%', left: '88%', delay: 0.5, duration: 4.6 },
      { emoji: '🍫', label: 'شوكولاتة داكنة', size: 48, top: '50%', left: '92%', delay: 1.2, duration: 4.9 },
      { emoji: '🌰', label: 'قرمشة بندق', size: 38, top: '78%', left: '85%', delay: 0.8, duration: 3.8 },
      { emoji: '🌰', label: 'معجون جياندويا', size: 46, top: '42%', left: '4%', delay: 1.4, duration: 4.7 },
    ],
  },
];

interface YallaBeverageRange {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  logo: string;
  bannerImage: string;
  themeColor: string;
  bgGradient: string;
  description: string;
  highlights: string[];
}

const YALLA_BEVERAGE_RANGES_EN: YallaBeverageRange[] = [
  {
    id: 'frappit',
    name: 'Yalla Frapp It',
    subtitle: 'Ice-Blended Café Frappes & Specialty Iced Lattes',
    badge: 'Specialty Coffee Line',
    logo: '/images/logos/Untitled-2-0٢.png',
    bannerImage: '/images/pages/products/retail/yalla/yalla-frappit-banner.jpg',
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
    logo: '/images/logos/yalla smoozy.png',
    bannerImage: '/images/pages/products/retail/yalla/yalla-smoozy-banner.jpg',
    themeColor: '#E11D48',
    bgGradient: 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)',
    description: 'Refreshing real fruit coolers in Pink Lemonade, Piña Colada, Mint Lime Mojito, and Wild Mixed Berries. Instant dissolvable in ice water or sparkling soda.',
    highlights: ['Real Fruit Powders', 'Enriched with Vitamin C', 'Instant Shaker Dissolution', '100% Non-Alcoholic'],
  },
  {
    id: 'koffi',
    name: 'Yalla Koffi & Choco',
    subtitle: 'Specialty 3-in-1 Instant Hot Lattes & Mochas',
    badge: 'Hot Specialty Coffee',
    logo: '/images/logos/yalla koffi.png',
    bannerImage: '/images/pages/products/retail/yalla/yalla-koffi-banner.jpg',
    themeColor: '#D97706',
    bgGradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
    description: 'Rich, comforting hot specialty coffees including Golden Caramel Latte, Mocha Latte, Hazelnut Latte, and Dutch Chocolate. Steaming thick foam head in 10 seconds.',
    highlights: ['Just Add Hot Water', 'Dutch Cocoa & Caramel', 'Creamy Overrun Foam', 'Morning & Afternoon Boost'],
  },
];

const YALLA_BEVERAGE_RANGES_AR: YallaBeverageRange[] = [
  {
    id: 'frappit',
    name: 'يلا فراب إت (Yalla Frapp It)',
    subtitle: 'فرابيه مثلج ولاتيه باريستا مختص للكافيهات',
    badge: 'خط القهوة المختصة',
    logo: '/images/logos/Untitled-2-0٢.png',
    bannerImage: '/images/pages/products/retail/yalla/yalla-frappit-banner.jpg',
    themeColor: '#0284C7',
    bgGradient: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
    description: 'خلطات قهوة أرابيكا مختصة، سبانش لاتيه، بيستاشيو، وايت موكا، وفانيليا فرابيه. رغوة ميكروفوم سميكة تحاكي أفخم ماكينات الإسبريسو.',
    highlights: ['بن أرابيكا 100%', 'جاهز للخلاط مع الثلج', 'رغوة فوم مخملية كثيفة', 'بدون أي سيرب صناعي'],
  },
  {
    id: 'smoozy',
    name: 'يلا سموزي (Yalla Smoozy)',
    subtitle: 'سموذي الفواكه الطبيعية ومشروبات الشواطئ المنعشة',
    badge: 'سلسلة الفواكه الطبيعية',
    logo: '/images/logos/yalla smoozy.png',
    bannerImage: '/images/pages/products/retail/yalla/yalla-smoozy-banner.jpg',
    themeColor: '#E11D48',
    bgGradient: 'linear-gradient(135deg, #FFE4E6 0%, #FECDD3 100%)',
    description: 'مشروبات منعشة من خلاصة الفواكه الطبيعية: بينك ليمونيد، بينا كولادا، موهيتو بالنعناع، وتوت بري مشكل. تذوب فوراً في الماء المثلج أو الصودا.',
    highlights: ['بودرة فواكه طبيعية', 'معزز بفيتامين C', 'ذوبان فوري بالشيكر', 'خالي من الكحول 100%'],
  },
  {
    id: 'koffi',
    name: 'يلا كوفي & شوكو (Yalla Koffi & Choco)',
    subtitle: 'مشروبات ساخنة 3 في 1 وموكا باريستا فاخرة',
    badge: 'القهوة الساخنة المختصة',
    logo: '/images/logos/yalla koffi.png',
    bannerImage: '/images/pages/products/retail/yalla/yalla-koffi-banner.jpg',
    themeColor: '#D97706',
    bgGradient: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
    description: 'مشروبات قهوة ساخنة غنية ومريحة تشمل كراميل لاتيه ذهبي، موكا لاتيه، بندق لاتيه، وشوكولاتة هولندية. رغوة كريمية ساخنة خلال 10 ثوانٍ.',
    highlights: ['فقط أضف الماء الساخن', 'كاكاو هولندي وكراميل', 'رغوة فوم كريمية كثيفة', 'طاقة صباحية ومسائية'],
  },
];

interface YallaFlavorSplashShowcaseProps {
  onOpenQuote: () => void;
}

export const YallaFlavorSplashShowcase: React.FC<YallaFlavorSplashShowcaseProps> = () => {
  const { language } = useLanguage();
  const flavorsData = language === 'ar' ? YALLA_FLAVORS_DATA_AR : YALLA_FLAVORS_DATA_EN;
  const beverageRanges = language === 'ar' ? YALLA_BEVERAGE_RANGES_AR : YALLA_BEVERAGE_RANGES_EN;

  const [activeFlavorIndex, setActiveFlavorIndex] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<'all' | 'frappe' | 'smoothie' | 'choco'>('all');
  const [activeRangeIndex, setActiveRangeIndex] = useState<number>(0);

  const activeFlavor = flavorsData[activeFlavorIndex] || flavorsData[0];

  const filteredFlavors =
    filterCategory === 'all'
      ? flavorsData
      : flavorsData.filter((f) => f.category === filterCategory);

  const activeRange = beverageRanges[activeRangeIndex] || beverageRanges[0];

  const filterCategories = [
    { id: 'all', label: language === 'ar' ? 'جميع النكهات' : 'All Flavors' },
    { id: 'frappe', label: language === 'ar' ? 'فرابيه مثلج' : 'Iced Frappes' },
    { id: 'smoothie', label: language === 'ar' ? 'سموذي فواكه' : 'Fruit Coolers' },
    { id: 'choco', label: language === 'ar' ? 'شوكو وموكا' : 'Choco & Mochas' },
  ];

  return (
    <section className="yalla-splash-section-light">
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
            {language === 'ar' ? 'مشروبات الكافيهات الفورية الفاخرة' : 'INSTANT CAFÉ OVERDRIVE'}
          </h1>

          <p className="yalla-sub-desc-light">
            {language === 'ar'
              ? 'اختر أي نكهة باريستا للتعرف على سرعة الذوبان، وكثافة رغوة الفوم، وعبوات التجزئة.'
              : 'Select any barista flavor below to preview the instant formulation, microfoam density, and retail packaging.'}
          </p>

          <div className="yalla-filter-bar-light">
            {filterCategories.map((cat) => (
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

        <div className="yalla-flavor-orbit-row-light">
          {filteredFlavors.map((flavor) => {
            const originalIndex = flavorsData.findIndex((f) => f.id === flavor.id);
            const isSelected = activeFlavor.id === flavor.id;
            return (
              <button
                key={flavor.id}
                onClick={() => setActiveFlavorIndex(originalIndex)}
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

        <div className="yalla-stage-grid">
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.775rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {language === 'ar' ? 'مميزات تركيبة الباريستا' : 'Barista Formula Highlights'}
              </div>
              {activeFlavor.notes.map((note, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#1E293B', fontWeight: 600 }}>
                  <CheckCircle2 size={18} style={{ color: activeFlavor.color, flexShrink: 0 }} />
                  <span>{note}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                <span style={{ color: '#475569' }}>
                  {language === 'ar' ? 'كثافة رغوة الميكروفوم:' : 'Microfoam Density:'}
                </span>
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

          <div className="yalla-center-pack-stage">
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

          <div className="yalla-glass-card-light">
            <div style={{ padding: '1.5rem', borderRadius: '20px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
              <div style={{ fontSize: '2.85rem', fontWeight: 900, color: activeFlavor.textColor, lineHeight: 1 }}>
                {activeFlavor.prepTime}
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', marginTop: '0.4rem', letterSpacing: '0.04em' }}>
                {language === 'ar' ? 'تحضير فوري بالخلاط أو الشيكر' : 'Ice Blender / Shaker Prep'}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
                  {activeFlavor.calories}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {language === 'ar' ? 'السعرات' : 'Calories'}
                </div>
              </div>

              <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#0F172A' }}>
                  {activeFlavor.sugar}
                </div>
                <div style={{ fontSize: '0.725rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                  {language === 'ar' ? 'السكر' : 'Sugar'}
                </div>
              </div>
            </div>

            <div style={{ padding: '1.15rem', borderRadius: '18px', background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)', fontSize: '0.85rem' }}>
              <div style={{ fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                <CheckCircle2 size={16} style={{ color: activeFlavor.color }} />
                <span>{language === 'ar' ? 'ذوبان فوري في السوائل الباردة' : 'Instant Cold-Solubility'}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>
                {language === 'ar'
                  ? 'بودرة مجففة بالرش 100% تذوب فوراً في الحليب البارد أو الماء والثلج دون أي تكتلات.'
                  : '100% fine spray-dried powder dissolves instantly in cold milk or ice water with zero lumps.'}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', background: '#FFFFFF', borderRadius: '30px', border: '1px solid rgba(0,0,0,0.08)', padding: '2.5rem', boxShadow: '0 15px 40px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: activeRange.themeColor, letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                {language === 'ar' ? 'خطوط منتجات Yalla الثلاثة المميزة' : 'The 3 Signature Yalla Product Lines'}
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0F172A' }}>
                {language === 'ar' ? 'اكتشف عالم Yalla Drinks المتكامل' : 'DISCOVER THE COMPLETE YALLA UNIVERSE'}
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', background: '#F1F5F9', padding: '0.35rem', borderRadius: '9999px', border: '1px solid rgba(0,0,0,0.06)' }}>
              {beverageRanges.map((range, idx) => (
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
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: activeRange.bgGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '360px',
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 12px 35px rgba(0,0,0,0.06)'
              }}>
                <img
                  src={activeRange.bannerImage}
                  alt={activeRange.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
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
                  }}>
                    {activeRange.badge}
                  </div>
                  {activeRange.logo && (
                    <div style={{ background: '#FFFFFF', padding: '0.25rem 0.65rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center' }}>
                      <img src={activeRange.logo} alt={activeRange.name} style={{ height: '24px', maxWidth: '100px', objectFit: 'contain' }} />
                    </div>
                  )}
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
