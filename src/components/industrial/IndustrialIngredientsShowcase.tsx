import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Factory,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Zap,
  ArrowRight,
  FlaskConical,
  Award,
  Layers,
  FileText,
  Boxes,
  Leaf,
  Droplets,
  HeartPulse,
  ShoppingBag,
  Send,
  Building2
} from 'lucide-react';
import './IndustrialIngredients.css';

interface SectorApplication {
  id: string;
  name: string;
  iconEmoji: string;
  category: string;
  title: string;
  description: string;
  solutions: string[];
  image: string;
  specSummary: string;
}

const SECTOR_APPLICATIONS: SectorApplication[] = [
  {
    id: 'dairy-cheese',
    name: 'Dairy & Cheese Systems',
    iconEmoji: '🧀',
    category: 'AWA Food Solutions & Additives',
    title: 'Functional Dairy, Processed Cheese & Ice Cream Systems',
    description:
      'Engineered stabilizer systems, hydrocolloid complexes, and emulsifying salts designed to optimize yield, meltability, sliceability, and shelf stability in dairy processing.',
    solutions: [
      'Processed Cheese Stabilizers & Emulsifying Salts',
      'Soft & Feta Cheese Texture Stabilizers',
      'Imitation Mozzarella Stabilizers & Anti-Caking Agents',
      'Vegetable & Dairy Proteins for Cheese Matrices',
      'Yoghurt Modified Starches, Pectins & Fat Replacers',
      'Ice Cream Stabilizers, Emulsifiers & Milk Replacers',
      'Whipping & Cooking Cream Stabilizers & Preservatives',
      'Natural Rennet, Lactic Acid & Cheese Coating Wax',
    ],
    image: '/images/pages/solutions/dairy.jpg',
    specSummary: 'Customizable melt indices, moisture binding up to 65%, syneresis control.',
  },
  {
    id: 'bakery-pastry',
    name: 'Bakery & Biscuits',
    iconEmoji: '🥖',
    category: 'AWA Food Solutions',
    title: 'Enzymatic Flour Improvers, Emulsifiers & Cake Mixes',
    description:
      'Industrial bakery solutions delivering superior dough machinability, increased loaf volume, fine crumb structure, and anti-staling shelf-life extension.',
    solutions: [
      'Ready-to-Use Industrial Cake & Muffin Mixes',
      'DATEM, SSL & Mono-Diglyceride Bakery Emulsifiers',
      'Enzymatic Flour Improvers & Vital Wheat Gluten',
      'Texturizing Modified Starches & Soy Flour',
      'Low-Calorie Sweeteners & Sorbitol Systems',
      'Natural Vanilla Extracts & Dutch Cocoa Powders',
      'Chemical Leavening Raising Agents & Baking Powders',
      'Egg Replacers & Shelf-Life Anti-Mold Systems',
    ],
    image: '/images/pages/solutions/bakery.jpg',
    specSummary: 'Up to 30 days ambient softness, consistent dough elasticity, egg cost reduction.',
  },
  {
    id: 'meat-poultry',
    name: 'Meat & Poultry Processing',
    iconEmoji: '🥩',
    category: 'AWA Food Solutions & AWASOY',
    title: 'Functional Proteins, Texture Improvers & Phosphate Blends',
    description:
      'Advanced functional ingredient matrices for luncheon meats, sausages, burger patties, kofta, frankfurters, and reformed poultry products.',
    solutions: [
      'Functional Soy TVP (Textured Vegetable Protein)',
      'Isolated Soy Protein (ISP 90%) & Soy Concentrates',
      'Sodium & Potassium Food-Grade Phosphate Salts',
      'Vegetable Dietary Fibers & Hydrolyzed Collagen',
      'Modified Potato & Corn Water-Binding Starches',
      'Burger & Minced Meat Texture Improvers',
      'High-Performance Slicing Improvers for Cold Cuts',
      'Natural Colorants, Preservatives & Antioxidant Systems',
    ],
    image: '/images/pages/solutions/meat.jpg',
    specSummary: '1:5:5 water/fat emulsification ratio, superior slice integrity, freeze-thaw stability.',
  },
  {
    id: 'sauces-condiments',
    name: 'Sauces, Dressings & Ketchup',
    iconEmoji: '🍅',
    category: 'AWA Food Solutions',
    title: 'Hydrocolloid Stabilizers, Egg Replacers & Viscosity Agents',
    description:
      'High-shear, acid-tolerant, and thermally stable stabilization systems for mayonnaise, tomato ketchup, culinary dressings, dips, and instant soup bases.',
    solutions: [
      'Tomato Paste Extenders & Replacers',
      'Complete Egg Replacers for Vegan & Diet Mayonnaise',
      'High-Viscosity Modified Waxy Maize Starches',
      'Cold-Swelling Xanthan & Guar Hydrocolloid Blends',
      'Microencapsulated Fat Powders & Creamers',
      'Preservative Blends (Sodium Benzoate / Potassium Sorbate)',
      'Food Acidulates (Citric, Lactic, Acetic & Malic Acids)',
      'Natural Colorants & Heat-Stable Spice Oleoresins',
    ],
    image: '/images/pages/solutions/sauces.jpg',
    specSummary: 'Shear-reversible thixotropy, zero phase separation at pH 3.2, cold-process ready.',
  },
  {
    id: 'beverages-juices',
    name: 'Beverages & Juices',
    iconEmoji: '🥤',
    category: 'AWA Food Solutions & Bio Ingredients',
    title: 'Clouding Agents, Juice Stabilizers & Flavor Emulsions',
    description:
      'Turnkey ingredient systems for fruit nectars, carbonated soft drinks, energy drinks, malt beverages, and instant spray-dried powder drink mixes.',
    solutions: [
      'Fruit Juice Clouding & Pulp Suspension Stabilizers',
      'Complete Powder Juice Drink Base Formulations',
      'High-Intensity Low-Calorie Sweeteners (Sucralose, Stevia, Acesulfame-K)',
      'Natural Essential Oil Emulsions (Orange, Lemon, Lime)',
      'Acidity Regulators (Citric Acid, Sodium Citrate, Malic Acid)',
      'Natural Water-Soluble Food Colors (Carotenoids, Anthocyanins)',
      'Functional Plant Proteins & Fortifying Vitamins',
      'Liquid Natural Preservative Systems',
    ],
    image: '/images/pages/solutions/beverages.jpg',
    specSummary: 'Crystal-clear dissolution, zero sedimentation, UV & heat pasteurization stable.',
  },
  {
    id: 'confectionery-chocolates',
    name: 'Confectionery & Chocolates',
    iconEmoji: '🍬',
    category: 'AWA Food Solutions',
    title: 'Gelling Agents, Glazes, Cocoa & Specialty Fats',
    description:
      'Ingredients for hard-boiled candies, gummies, chewy toffees, compound chocolates, hazelnut spreads, and bakery fillings.',
    solutions: [
      'Clarifying Agents for High-Clarity Hard Candies',
      'Carnauba Wax & Shellac High-Gloss Glazing Agents',
      'Antisticking Processing Aids for Gummy Deposition',
      'Premium Cocoa Powders (Alkalized & Natural)',
      'Natural Roasted Hazelnut Pastes (100% Pure)',
      'Gum Base Systems for Chewing & Bubble Gums',
      'Pectin & Sugar Replacers for Jams & Fruit Preparations',
      'Soy & Sunflower Lecithin Emulsifiers',
    ],
    image: '/images/pages/solutions/confectionery.jpg',
    specSummary: 'Controlled bloom prevention, high glass transition temp (Tg), snappy texture.',
  },
];

interface BioIngredientCategory {
  title: string;
  badge: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

const BIO_INGREDIENTS_DATA: BioIngredientCategory[] = [
  {
    title: 'Natural Oleoresins',
    badge: 'Concentrated Bio-Extracts',
    description:
      'Pure, highly concentrated liquid extracts containing volatile essential oils and non-volatile pungent principles. Rapid flavor release and standardized aroma.',
    items: [
      'Black Pepper',
      'Capsicum (Chili)',
      'Paprika (Color & Flavor)',
      'Garlic',
      'Onion',
      'Ginger',
      'Coriander',
      'Cardamom',
      'Cumin',
      'Clove',
      'Rosemary',
      'Nutmeg',
      'Cassia (Cinnamon)',
      'Turmeric (Curcumin)',
      'Celery',
      'Fenugreek',
      'Mace',
      'Pimento',
    ],
    icon: <Droplets size={22} style={{ color: '#0284C7' }} />,
  },
  {
    title: 'Essential Oils',
    badge: '100% Steam Distilled',
    description:
      'Pure volatile aroma fractions extracted through steam or hydro-distillation. Imparts authentic signature top-notes for food, beverages, and seasonings.',
    items: [
      'Black Pepper Oil',
      'White Pepper Oil',
      'Ginger Oil',
      'Garlic Oil',
      'Cumin Oil',
      'Cardamom Oil',
      'Cinnamon / Cassia Oil',
      'Rosemary Oil',
      'Clove Bud Oil',
      'Mustard Essential Oil',
      'Nutmeg Oil',
      'Onion Oil',
    ],
    icon: <Droplets size={22} style={{ color: '#10B981' }} />,
  },
  {
    title: 'Liquid Spice Blends & Hydrops™',
    badge: 'Ready-to-Inject Formulations',
    description:
      'Tailored liquid seasonings for meat processing, sauces, and instant noodles. Spice Hydrops™ are completely water-dispersible cell-wall bio-extracts.',
    items: [
      'Oriental Sausage Spice Blend',
      'Alexandrian Sausage Blend',
      'Beef Burger Seasoning Blend',
      'Kofta & Kebab Liquid Blend',
      'Bastirma Liquid Blend',
      'Turkish Sujuk Blend',
      'Tandoori Liquid Spice',
      'Pizza & Pasta Sauce Blend',
      'Instant Noodle Broth Blend',
      'Water-Soluble Spice Hydrops™',
    ],
    icon: <FlaskConical size={22} style={{ color: '#D97706' }} />,
  },
];

interface IndustrialIngredientsShowcaseProps {
  onOpenQuote: () => void;
}

export const IndustrialIngredientsShowcase: React.FC<IndustrialIngredientsShowcaseProps> = ({
  onOpenQuote,
}) => {
  const [activeSector, setActiveSector] = useState<SectorApplication>(SECTOR_APPLICATIONS[0]);
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  return (
    <div className="industrial-root">
      {/* 1. Hero Section */}
      <section className="ind-hero-section">
        <div className="ind-hero-container">
          <div className="ind-hero-eyebrow">
            <Factory size={16} />
            <span>AWA Group • Food Solutions & Ingredients Since 1993</span>
          </div>

          <h1 className="ind-hero-title">
            INDUSTRIAL INGREDIENTS & TAILORED FORMULATION SYSTEMS
          </h1>

          <p className="ind-hero-desc">
            Partnering with over 2,000+ food manufacturers across Egypt and the MENA region. We manufacture, blend, and distribute over 200+ specialized food additives, hydrocolloid stabilizer systems, and natural bio-extracts from our New Borg El-Arab manufacturing complex.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenQuote}
              className="fmcg-btn-primary"
              style={{ backgroundColor: '#0284C7' }}
            >
              <FileText size={18} />
              <span>Request Technical Spec Sheet (TDS/COA)</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="#sectors-section"
              className="fmcg-btn-outline"
            >
              <Layers size={18} />
              <span>Explore Application Sectors</span>
            </a>
          </div>

          {/* Key Infrastructure Metrics Row */}
          <div className="ind-stats-row">
            <div className="ind-stat-card">
              <div className="ind-stat-number">28+</div>
              <div className="ind-stat-label">Years Heritage</div>
              <div className="ind-stat-sub">Founded in 1993</div>
            </div>

            <div className="ind-stat-card">
              <div className="ind-stat-number">200+</div>
              <div className="ind-stat-label">Food Additives</div>
              <div className="ind-stat-sub">Custom Blends</div>
            </div>

            <div className="ind-stat-card">
              <div className="ind-stat-number">2,000+</div>
              <div className="ind-stat-label">B2B Clients</div>
              <div className="ind-stat-sub">Industrial Plants</div>
            </div>

            <div className="ind-stat-card">
              <div className="ind-stat-number">15.5 MT</div>
              <div className="ind-stat-label">Hourly Capacity</div>
              <div className="ind-stat-sub">3 Powder + Liquid</div>
            </div>

            <div className="ind-stat-card">
              <div className="ind-stat-number">15,000 MT</div>
              <div className="ind-stat-label">Warehouse Size</div>
              <div className="ind-stat-sub">3,700 m² Facility</div>
            </div>

            <div className="ind-stat-card">
              <div className="ind-stat-number">5x</div>
              <div className="ind-stat-label">Global Certs</div>
              <div className="ind-stat-sub">FSSC 22000 & ISO</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Group Operating Divisions */}
      <section className="ind-divisions-section">
        <div style={{ maxWidth: '1240px', margin: '0 auto 1.75rem auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#0284C7', marginBottom: '0.25rem' }}>
              Corporate Structure
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A' }}>
              AWA GROUP OPERATING DIVISIONS
            </h3>
          </div>
          <p style={{ fontSize: '0.875rem', color: '#64748B', maxWidth: '520px', margin: 0 }}>
            Specialized manufacturing business units covering chemical additives, functional blends, natural extracts, and soapwort technology.
          </p>
        </div>

        <div className="ind-divisions-grid">
          {[
            {
              id: 'additives',
              name: 'AWA Food Additives Co.',
              badge: 'Est. 1993',
              tagline: 'High Quality, Healthy & Innovative',
              desc: 'Core trading and distribution of raw additives, preservatives, acidulates, phosphates, and emulsifiers with lean supply chain integration.',
            },
            {
              id: 'solutions',
              name: 'AWA Food Solutions',
              badge: 'Custom Engineering',
              tagline: 'Developing Tailored Solutions',
              desc: 'Tailored functional stabilizer systems, hydrocolloid matrices, and texture improvers optimized for dairy, meat, bakery, and beverage plants.',
            },
            {
              id: 'bio',
              name: 'AWA Bio Ingredients',
              badge: 'Natural Extraction',
              tagline: 'Processed to Perfection',
              desc: 'Pure spice oleoresins, steam-distilled essential oils, spectrophotometer-standardized natural colors, and Spice Hydrops™.',
            },
            {
              id: 'awabey',
              name: 'AWABEY',
              badge: 'Joint Venture',
              tagline: 'Soapwort Extract Technology',
              desc: 'Egyptian-Turkish specialized facility producing 7 MT/day of high-brix soapwort extract (Çöven Suyu) for the halva and confectionery industry.',
            },
            {
              id: 'awasoy',
              name: 'AWASOY',
              badge: 'Plant Protein',
              tagline: 'Functional Soy Systems',
              desc: 'Textured vegetable protein (Soy TVP), isolated soy protein (ISP 90%), and functional concentrates for high-yield meat processing.',
            },
          ].map((div) => (
            <div
              key={div.id}
              onClick={() => setSelectedDivision(div.id)}
              className={`ind-division-card ${selectedDivision === div.id ? 'active' : ''}`}
            >
              <div>
                <div className="ind-division-badge">{div.badge}</div>
                <h4 className="ind-division-title">{div.name}</h4>
                <div style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#0284C7', fontWeight: 700, marginBottom: '0.5rem' }}>
                  "{div.tagline}"
                </div>
                <p className="ind-division-desc">{div.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Sector Applications Explorer */}
      <section id="sectors-section" className="ind-sectors-section">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2.5rem auto' }}>
          <div className="fmcg-eyebrow" style={{ borderColor: '#0284C7', color: '#0284C7' }}>
            <Boxes size={15} />
            <span>Industrial Sector Solutions Matrix</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            APPLICATION-DRIVEN FOOD SCIENCE
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>
            Select your industrial sector below to review tailored stabilizer systems, functional additives, and formulation performance specs.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="ind-sector-tabs-row">
          {SECTOR_APPLICATIONS.map((sector) => {
            const isSelected = activeSector.id === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className={`ind-sector-tab-btn ${isSelected ? 'active' : ''}`}
              >
                <span>{sector.iconEmoji}</span>
                <span>{sector.name}</span>
              </button>
            );
          })}
        </div>

        {/* Sector Main Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="ind-sector-main-stage"
          >
            {/* Left Content */}
            <div>
              <span className="ind-category-tag">{activeSector.category}</span>
              <h3 className="ind-sector-title">{activeSector.title}</h3>
              <p className="ind-sector-desc">{activeSector.description}</p>

              {/* Solutions Grid */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                  Available Formulations & Products in this Sector:
                </div>
                <div className="ind-solutions-grid">
                  {activeSector.solutions.map((sol, idx) => (
                    <div key={idx} className="ind-solution-item">
                      <CheckCircle2 size={16} style={{ color: '#0284C7', flexShrink: 0 }} />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Spec Banner */}
              <div style={{ padding: '1rem 1.25rem', borderRadius: '16px', background: '#F0F9FF', border: '1px solid rgba(2, 132, 199, 0.2)', marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0369A1', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                  Technical Target Specs:
                </div>
                <div style={{ fontSize: '0.875rem', color: '#0C4A6E', fontWeight: 600 }}>
                  {activeSector.specSummary}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenQuote}
                  className="fmcg-btn-primary"
                  style={{ backgroundColor: '#0284C7' }}
                >
                  <Send size={16} />
                  <span>Request {activeSector.name} Sample / COA</span>
                </button>
              </div>
            </div>

            {/* Right Media */}
            <div className="ind-sector-img-box">
              <img
                src={activeSector.image}
                alt={activeSector.name}
                className="ind-sector-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/pages/products/industrial.jpg';
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', padding: '1rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(16px)', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#38BDF8' }}>
                  <FlaskConical size={14} />
                  <span>Pilot Plant Validated</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#E2E8F0', marginTop: '2px' }}>
                  Formulations tested under high-temperature pasteurization and industrial shear.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. AWA Bio Ingredients & Natural Oleoresins Feature */}
      <section className="ind-bio-section">
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
            <div className="fmcg-eyebrow" style={{ borderColor: '#059669', color: '#059669' }}>
              <Leaf size={15} />
              <span>AWA Bio Ingredients Division</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              NATURAL SPICE EXTRACTS & OLEORESINS
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
              When Nature Holds Flavours So Unique — We extract pure spice and herb concentrates with advanced extraction technology to preserve robust aroma, active pungency, and microbiological sterility.
            </p>
          </div>

          <div className="ind-bio-grid">
            {BIO_INGREDIENTS_DATA.map((bio, idx) => (
              <div key={idx} className="ind-bio-card">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="ind-bio-badge">{bio.badge}</span>
                    {bio.icon}
                  </div>
                  <h3 className="ind-bio-title">{bio.title}</h3>
                  <p className="ind-bio-desc">{bio.description}</p>

                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#0F172A', marginBottom: '0.5rem' }}>
                    Standard Product Range:
                  </div>
                  <div className="ind-bio-chips-wrap">
                    {bio.items.map((item, i) => (
                      <span key={i} className="ind-bio-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="fmcg-btn-outline"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem 1rem' }}
                >
                  <span>Request Bio Ingredients Catalog</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AWABEY Soapwort Extract (Çöven Suyu) Showcase */}
      <section className="ind-soapwort-section">
        <div className="ind-soapwort-grid">
          <div className="ind-soapwort-card">
            <div className="fmcg-eyebrow" style={{ borderColor: '#D97706', color: '#D97706', marginBottom: '0.75rem' }}>
              <Award size={15} />
              <span>AWABEY Joint Venture</span>
            </div>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 900, color: '#0F172A', lineHeight: 1.15, marginBottom: '0.75rem' }}>
              PIONEERING SOAPWORT EXTRACT TECHNOLOGY
            </h2>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#D97706', marginBottom: '1.25rem' }}>
              100% Natural Turkish Raw Materials • 7 MT / Day Production Capacity
            </div>

            <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              AWABEY operates with cutting-edge Turkish extraction technology to produce pure Soapwort Extract (Çöven Suyu) with custom concentrations from <strong>3° Brix to 45° Brix</strong>. Trusted by the largest halva, tahini, and confectionery producers across Egypt and international export markets.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {[
                'Essential natural foaming & whitening agent for Halva & Tahini',
                'Sensory profile: Brown liquid, distinct odor, bittersweet taste',
                'Allergen-Free certification compliant with World Health Organization (WHO)',
                'Packed in 30 kg industrial buckets with 24-month guaranteed shelf life',
                'Supervised by Turkish food processing extraction engineers',
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} style={{ color: '#D97706', flexShrink: 0 }} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenQuote}
              className="fmcg-btn-primary"
              style={{ backgroundColor: '#D97706' }}
            >
              <ShoppingBag size={16} />
              <span>Request Soapwort 30kg Trial Bucket</span>
            </button>
          </div>

          {/* Right Stage Showcase */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '24px', border: '1.5px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#64748B', marginBottom: '0.5rem' }}>
                Key Technical Specifications
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ padding: '1rem', borderRadius: '16px', background: '#FEF3C7', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#B45309' }}>3° - 45°</div>
                  <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#92400E', textTransform: 'uppercase' }}>Brix Concentration Range</div>
                </div>
                <div style={{ padding: '1rem', borderRadius: '16px', background: '#FEF3C7', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 900, color: '#B45309' }}>7 MT / Day</div>
                  <div style={{ fontSize: '0.725rem', fontWeight: 700, color: '#92400E', textTransform: 'uppercase' }}>Production Output</div>
                </div>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '24px', border: '1.5px solid rgba(0,0,0,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <ShieldCheck size={18} style={{ color: '#10B981' }} />
                <span>Laboratory Certified Quality</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Every production lot is subjected to comprehensive sensory, microbiological, and concentration density testing prior to dispatch. Free from toxic substances and synthetic additives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. R&D Pilot Plant, Certifications & Manufacturing Power */}
      <section className="ind-rd-section">
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 2rem auto' }}>
            <div className="fmcg-eyebrow" style={{ borderColor: '#0284C7', color: '#0284C7' }}>
              <FlaskConical size={15} />
              <span>R&D Application Center & Quality Assurance</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              PILOT PLANT SIMULATION & GLOBAL CERTIFICATIONS
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
              Our modern New Borg El-Arab R&D application center is equipped with pilot production units for small test batches, rheology texturizers, and spectrophotometers to guarantee batch-to-batch consistency.
            </p>
          </div>

          {/* Certificate Gallery */}
          <div className="ind-certs-grid">
            {[
              { code: 'FSSC 22000', name: 'Food Safety System Certification', authority: 'ACERTA Middle East' },
              { code: 'ISO 9001:2015', name: 'Quality Management Systems', authority: 'IAF Accredited' },
              { code: 'ISO 22000:2018', name: 'Food Safety Management', authority: 'Global Benchmark' },
              { code: 'ISO 14001:2015', name: 'Environmental Management', authority: 'Sustainable Operations' },
              { code: 'ISO 45001:2018', name: 'Occupational Health & Safety', authority: 'Zero-Hazard Plant' },
            ].map((cert, idx) => (
              <div key={idx} className="ind-cert-box">
                <ShieldCheck size={26} style={{ color: '#0284C7', margin: '0 auto 0.5rem auto' }} />
                <div className="ind-cert-code">{cert.code}</div>
                <div className="ind-cert-name">{cert.name}</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', marginTop: '4px' }}>{cert.authority}</div>
              </div>
            ))}
          </div>

          {/* Bottom Trade Partner CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '2.5rem 3rem',
            borderRadius: '26px',
            background: '#F0F9FF',
            border: '1.5px solid rgba(2, 132, 199, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#0284C7', marginBottom: '0.25rem' }}>
                <Building2 size={16} />
                <span>Head Office: Alexandria • Cairo Branch • Factory: New Borg El-Arab</span>
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.25rem' }}>
                Ready to Upgrade Your Food Manufacturing Line?
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#475569', margin: 0 }}>
                Our technical sales team and R&D food scientists are ready to assist with custom recipes, cost reduction, and trial samples.
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="fmcg-btn-primary"
              style={{ backgroundColor: '#0284C7' }}
            >
              <Send size={16} />
              <span>Connect with Industrial Sales</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
