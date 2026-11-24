import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Coffee, 
  Soup, 
  UtensilsCrossed, 
  Award, 
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Flame,
  Clock
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets } from '../data/v9Data';

export const SirriPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const [activeChannel, setActiveChannel] = useState<'retail' | 'foodservice'>('retail');

  const retailProducts = [
    {
      name: isAr ? 'شوربة الدجاج الفاخرة سِري (4 أظرف)' : 'Sirri Gourmet Chicken Soup (4 Sachets)',
      size: 'Box 4 Sachets (20g x 4)',
      price: 45,
      comparePrice: 55,
      image: '/artwork/sirri/3d/Siiri Chicken Soup Box-Camera 1.png',
      prep: 'Ready in 1 minute with hot water',
      prepAr: 'جاهزة في دقيقة واحدة بالماء الساخن',
      desc: isAr
        ? 'شوربة دجاج غنية بالمذاق الأصيل والتوابل الطبيعية المختارة بعناية. تحضر في دقيقة واحدة بالماء الساخن لتمنحك دفئاً ونكهة لا تقاوم.'
        : 'Gourmet chicken soup prepared with rich broth and savory spices. Ready in 1 minute with hot water for instant comforting flavor.',
      tags: ['100% Natural Spices', 'Zero Artificial Colors', 'Ready in 60s', 'Box 4 Sachets'],
      buyUrl: `https://awa-shopping-chi.vercel.app/${isAr ? 'ar' : 'en'}/sirri`
    },
    {
      name: isAr ? 'شوربة المشروم بالكريمة سِري (4 أظرف)' : 'Sirri Creamy Mushroom Soup (4 Sachets)',
      size: 'Box 4 Sachets (22g x 4)',
      price: 45,
      comparePrice: 55,
      image: '/artwork/sirri/3d/Siiri Mushroom Soup Box-Camera 1.png',
      prep: 'Velvety smooth · Ready in 1 minute',
      prepAr: 'قوام كريمي مخملي · جاهز في دقيقة',
      desc: isAr
        ? 'شوربة مشروم كريمية مخملية محضرة من قطع وخلاصة فطر عيش الغراب الطازج مع كريمة ناعمة لتجربة طهي فاخرة.'
        : 'Velvety creamy mushroom soup crafted from premium mushroom extract and rich dairy creamer for a restaurant-grade appetizer.',
      tags: ['Velvety Texture', 'Rich Mushroom Flavor', 'Vegetarian Friendly', 'Box 4 Sachets'],
      buyUrl: `https://awa-shopping-chi.vercel.app/${isAr ? 'ar' : 'en'}/sirri`
    },
    {
      name: isAr ? 'شوربة البطاطس الكريمية سِري (4 أظرف)' : 'Sirri Creamy Potato Soup (4 Sachets)',
      size: 'Box 4 Sachets (24g x 4)',
      price: 45,
      comparePrice: 55,
      image: '/artwork/sirri/3d/Siiri Potato Soup Box-Camera 1.png',
      prep: 'Hearty & comforting · Ready in 1 minute',
      prepAr: 'مشبعة ودافئة · جاهزة في دقيقة واحدة',
      desc: isAr
        ? 'شوربة بطاطس كريمية دافئة مشبعة ومغذية بلمسات من البصل الأخضر والتوابل الكلاسيكية.'
        : 'Hearty and wholesome creamy potato soup seasoned with aromatic chives and natural spices for comforting satisfaction.',
      tags: ['Hearty & Wholesome', 'Thick Creamy Consistency', 'Natural Herbs', 'Box 4 Sachets'],
      buyUrl: `https://awa-shopping-chi.vercel.app/${isAr ? 'ar' : 'en'}/sirri`
    },
    {
      name: isAr ? 'شوربة الطماطم بالأعشاب سِري (4 أظرف)' : 'Sirri Herb Tomato Soup (4 Sachets)',
      size: 'Box 4 Sachets (20g x 4)',
      price: 45,
      comparePrice: 55,
      image: '/artwork/sirri/3d/Siiri tomato Soup Box-Camera 1.png',
      prep: 'Mediterranean herbs · Ready in 1 minute',
      prepAr: 'أعشاب متوسطية · جاهزة في دقيقة واحدة',
      desc: isAr
        ? 'شوربة طماطم متوسطية غنية مع الريحان والأوريجانو الإيطالي، تمنحك انتعاشاً ومذاقاً حمضياً دافئاً ولذيذاً.'
        : 'Mediterranean tomato soup simmered with aromatic basil and oregano for a bright, zesty, and satisfying bowl in seconds.',
      tags: ['Sun-Ripened Tomatoes', 'Italian Basil & Oregano', 'Plant Based', 'Box 4 Sachets'],
      buyUrl: `https://awa-shopping-chi.vercel.app/${isAr ? 'ar' : 'en'}/sirri`
    }
  ];

  const foodServiceProducts = [
    {
      name: isAr ? 'قاعدة مرق الدجاج المركز الاحترافي' : 'Professional Concentrated Chicken Stock',
      format: '1kg & 5kg Pails',
      desc: isAr
        ? 'قاعدة طهي احترافية للمطاعم والفنادق تمنح عمقاً ونكهة طهي بطيئة متجانسة لكافة الأطباق والمطبوخات.'
        : 'High-yield savory chicken base delivering consistent roasted chicken profile for banquets, sauces, and soups.'
    },
    {
      name: isAr ? 'صلصة الديمي جلاس البنية الكلاسيكية' : 'Classic Brown Demi-Glace Sauce Base',
      format: '1kg Pouches',
      desc: isAr
        ? 'مستخلص مرق لحم بقري مكرمل غني مع بهارات مختارة يعاد تشكيله سريعاً لتحضير صوصات الستيك والمشروم.'
        : 'Rich roasted beef bone essence with aromatic mirepoix, instantly reconstituting into glossy steak & meat glaze.'
    },
    {
      name: isAr ? 'خلطة توابل وبهارات الشواء والطهي' : 'Master Culinary Seasonings & Marinades',
      format: '500g Shakers & 10kg Bags',
      desc: isAr
        ? 'توليفات بهارات وتتبيلات متوازنة لشركات التموين وسلاسل المطاعم لتوحيد الطعم عبر الفروع.'
        : 'Standardized spice and flavor marinades for commercial QSR chains, grill houses, and institutional catering.'
    }
  ];

  return (
    <>
      <SEO
        title={isAr ? 'أغذية سري (SIRRI Foods) | الشوربات الفورية والحلول المطبخية • مجموعة AWA' : 'SIRRI Foods | Instant Soups & Culinary Solutions • AWA Group'}
        description={isAr
          ? 'تعاون دولي في مجال الأغذية الاستهلاكية والمطبخية: شوربات فورية في أكواب للتجزئة، ومستخلصات الطهي والديمي جلاس الاحترافية لقطاع الخدمات.'
          : 'An international consumer and culinary brand collaboration: retail instant soup cups and professional culinary stock bases for hospitality.'}
        path="/brands/sirri"
      />

      <div className="sirri-page" style={{ background: '#FFFFFF' }}>
        {/* HERO SECTION */}
        <section className="page-hero page-hero--visual" style={{ background: '#0B131E' }}>
          <div className="page-hero-media" style={{ opacity: 0.3 }}>
            <img 
              src={v9Assets.v8Assets['food-broth'] || v9Assets.foodVisuals.broth} 
              alt="SIRRI Foods Mediterranean Soups" 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '14px', marginBottom: '1.5rem' }}>
              <Link to="/" style={{ color: '#E2E8F0', textDecoration: 'none' }}>{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <Link to="/brands" style={{ color: '#E2E8F0', textDecoration: 'none' }}>{isAr ? 'العلامات الاستهلاكية' : 'Consumer Portfolio'}</Link>
              <span>›</span>
              <span style={{ color: '#00A84F', fontWeight: 600 }}>SIRRI Foods</span>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(234, 88, 12, 0.15)', border: '1px solid rgba(234, 88, 12, 0.35)', padding: '6px 14px', borderRadius: '100px', marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EA580C' }} />
              <span style={{ color: '#FB923C', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {isAr ? 'شراكة تجزئة دولية · تركيا / مصر' : 'INTERNATIONAL BRAND COLLABORATION · TÜRKİYE / EGYPT'}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', color: '#FFFFFF', fontWeight: 900, margin: 0, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              SIRRI Foods
            </h1>

            <p style={{ color: '#CBD5E1', fontSize: 'clamp(1.05rem, 1.2vw, 1.2rem)', lineHeight: 1.7, maxWidth: '720px', marginBottom: '2.5rem' }}>
              {isAr
                ? 'تعاون دولي في المنتجات الاستهلاكية والحلول المطبخية يربط بين نكهات البحر الأبيض المتوسط والتحضير الفوري المريح: أكواب الشوربة السريعة لتجارة التجزئة، ومستخلصات وقواعد الطهي الاحترافية لقطاع المطاعم والفنادق.'
                : 'An international consumer collaboration spanning convenient retail foods and professional culinary preparations. From on-the-go instant soup cups to commercial stock bases, SIRRI delivers authentic Mediterranean taste.'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href="#products" 
                style={{ 
                  background: '#EA580C', 
                  color: '#FFFFFF', 
                  padding: '12px 26px', 
                  borderRadius: '10px', 
                  fontWeight: 700, 
                  fontSize: '15px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  textDecoration: 'none' 
                }}
              >
                <span>{isAr ? 'استعراض منتجات الشوربة والطهي' : 'Explore Products'}</span>
                <ChevronRight size={16} />
              </a>
              <Link 
                to="/contact?type=distribution&brand=sirri" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  border: '1px solid rgba(255, 255, 255, 0.25)', 
                  color: '#FFFFFF', 
                  padding: '12px 26px', 
                  borderRadius: '10px', 
                  fontWeight: 700, 
                  fontSize: '15px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  textDecoration: 'none' 
                }}
              >
                <span>{isAr ? 'طلب توزيع تجزئة أو توريد مطاعم' : 'Retail Distribution & Inquiries'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* DUAL CHANNEL ARCHITECTURE */}
        <section style={{ padding: '4.5rem 0', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
              <span style={{ color: '#EA580C', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {isAr ? 'قنوات التوزيع المعتمدة' : 'TWO DISTINCT CHANNELS'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: '#0F172A', fontWeight: 800, marginTop: '8px', marginBottom: '16px' }}>
                {isAr ? 'تلبية احتياجات المستهلك في المنزل والشيف في المطعم' : 'Crafted for Retail Shelves & Commercial Kitchens'}
              </h2>
              <p style={{ color: '#64748B', fontSize: '16px', lineHeight: 1.7 }}>
                {isAr
                  ? 'يتم تقديم منتجات SIRRI عبر مسارين محددين: قسم التجزئة الاستهلاكية للمنتجات الفورية السريعة، وقسم خدمات الأغذية (Food Services) للمكونات والقواعد الاحترافية.'
                  : 'SIRRI products are structured across two clear channels: Retail Convenience for fast everyday consumer eating, and Food Services for professional culinary bases.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(234, 88, 12, 0.1)', color: '#EA580C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <ShoppingBag size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  {isAr ? 'التجزئة: الشوربات الفورية بالأكواب' : 'Retail: On-the-Go Instant Soup Cups'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                  {isAr
                    ? 'أكواب شوربة فورية مصممة لنمط الحياة العصري السريع في المكاتب والجامعات والسفر، خالية من المواد الحافظة وغنية بالخضار والبروتين.'
                    : 'Convenient ready-to-prepare cups designed for modern on-the-go snacking in offices, universities, and homes. Add hot water, wait 3 minutes.'}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#FFF7ED', color: '#EA580C' }}>Hypermarkets</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#FFF7ED', color: '#EA580C' }}>Convenience Stores</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#FFF7ED', color: '#EA580C' }}>Vending</span>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 168, 79, 0.1)', color: '#00A84F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <UtensilsCrossed size={24} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  {isAr ? 'الخدمات: المرق وقواعد الطهي الاحترافية' : 'Food Services: Professional Stocks & Bases'}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                  {isAr
                    ? 'عبوات كبيرة للشيفات والمطاعم الكبرى، تمنح مذاقاً متجانساً وعائداً إنتاجياً عالياً مع تقليص وقت إعداد المرق الطويل في المطابخ.'
                    : 'Institutional pack formats for hotel banquets and restaurant kitchens, delivering consistent scratch-made culinary flavor with reduced prep time.'}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#ECFDF5', color: '#00A84F' }}>Hotels & Banquets</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#ECFDF5', color: '#00A84F' }}>QSR Chains</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#ECFDF5', color: '#00A84F' }}>Catering Companies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" style={{ padding: '5rem 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '3rem' }}>
              <div>
                <span style={{ color: '#EA580C', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {isAr ? 'كتالوج المنتجات' : 'PRODUCT RANGE'}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', color: '#0F172A', fontWeight: 800, marginTop: '8px', margin: 0 }}>
                  {activeChannel === 'retail' ? (isAr ? 'شوربات الأكواب الفورية للتجزئة' : 'Retail Instant Cup Soups') : (isAr ? 'مستخلصات الطهي الاحترافية' : 'Food Service Stocks & Sauces')}
                </h2>
              </div>

              <div style={{ display: 'flex', gap: '8px', background: '#F1F5F9', padding: '4px', borderRadius: '12px' }}>
                <button
                  type="button"
                  onClick={() => setActiveChannel('retail')}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeChannel === 'retail' ? '#EA580C' : 'transparent',
                    color: activeChannel === 'retail' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  {isAr ? 'شوربات الأكواب (تجزئة)' : 'Instant Soups (Retail)'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveChannel('foodservice')}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    cursor: 'pointer',
                    background: activeChannel === 'foodservice' ? '#0F172A' : 'transparent',
                    color: activeChannel === 'foodservice' ? '#FFFFFF' : '#64748B'
                  }}
                >
                  {isAr ? 'قواعد الطهي (خدمات الأغذية)' : 'Stocks & Demi-Glace (Food Services)'}
                </button>
              </div>
            </div>

            {/* RETAIL GRID */}
            {activeChannel === 'retail' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {retailProducts.map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      background: '#FFFFFF',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div>
                      <div style={{ height: '220px', background: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '16px' }}>
                        <img 
                          src={p.image} 
                          alt={p.name}
                          style={{ maxHeight: '190px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.12))' }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/2026/1.png';
                          }}
                        />
                        <span style={{ position: 'absolute', top: '14px', right: '14px', fontSize: '11px', fontWeight: 800, color: '#EA580C', background: '#FFFFFF', padding: '4px 10px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                          {p.size}
                        </span>
                      </div>

                      <div style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748B' }}>
                            <Clock size={13} style={{ color: '#EA580C' }} />
                            <span>{isAr ? p.prepAr : p.prep}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                            <span style={{ fontSize: '18px', fontWeight: 900, color: '#EA580C' }}>
                              {p.price} {isAr ? 'ج.م' : 'EGP'}
                            </span>
                            {p.comparePrice && (
                              <span style={{ fontSize: '12px', color: '#94A3B8', textDecoration: 'line-through' }}>
                                {p.comparePrice} {isAr ? 'ج.م' : 'EGP'}
                              </span>
                            )}
                          </div>
                        </div>

                        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '10px', lineHeight: 1.3 }}>
                          {p.name}
                        </h3>
                        <p style={{ color: '#64748B', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '16px' }}>
                          {p.desc}
                        </p>

                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {p.tags.map((t, tIdx) => (
                            <span key={tIdx} style={{ fontSize: '11px', color: '#475569', background: '#F1F5F9', padding: '3px 8px', borderRadius: '6px' }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: '16px 24px', borderTop: '1px solid #F1F5F9', background: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <a
                        href={p.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          background: '#EA580C',
                          padding: '8px 14px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          boxShadow: '0 2px 6px rgba(234, 88, 12, 0.25)'
                        }}
                      >
                        <ShoppingBag size={14} />
                        <span>{isAr ? 'شراء أونلاين' : 'Buy Online'}</span>
                      </a>
                      <Link
                        to={`/contact?type=distribution&product=${encodeURIComponent(p.name)}`}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#64748B',
                          background: '#FFFFFF',
                          border: '1px solid #E2E8F0',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          textDecoration: 'none'
                        }}
                      >
                        <span>{isAr ? 'توريد تجاري' : 'Wholesale'}</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FOOD SERVICE GRID */}
            {activeChannel === 'foodservice' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
                {foodServiceProducts.map((p, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid #E2E8F0',
                      borderRadius: '18px',
                      padding: '30px',
                      background: '#FFFFFF',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: '#00A84F', background: 'rgba(0, 168, 79, 0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                          {p.format}
                        </span>
                        <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 600 }}>SIRRI PRO™</span>
                      </div>
                      <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                        {p.name}
                      </h3>
                      <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
                        {p.desc}
                      </p>
                    </div>

                    <Link
                      to={`/contact?type=foodservices&product=${encodeURIComponent(p.name)}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 18px',
                        borderRadius: '10px',
                        background: '#0F172A',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '13px',
                        textDecoration: 'none'
                      }}
                    >
                      <span>{isAr ? 'طلب عينات لمطبخ المطعم / الفندق' : 'Request Culinary Samples for Kitchen'}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CLOSING BANNER */}
        <section style={{ padding: '4.5rem 0', background: '#0F172A', color: '#FFFFFF' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <div>
              <span style={{ color: '#EA580C', fontWeight: 800, fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {isAr ? 'توزيع علامة SIRRI FOODS' : 'RETAIL & FOOD SERVICE DISTRIBUTION'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginTop: '10px', marginBottom: '8px' }}>
                {isAr ? 'مهتم بإضافة منتجات SIRRI لمتاجرك أو مطبخك؟' : 'Interested in stocking or serving SIRRI Foods?'}
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'تواصل مع فريق المبيعات والتوزيع في AWA للحصول على قوائم الأسعار وشروط التوريد وكتالوج العينات المعتمد.'
                  : 'Connect with AWA’s consumer sales and food services distribution team for pricing, MOQ and commercial partnership opportunities.'}
              </p>
            </div>

            <Link
              to="/contact?type=distribution&brand=sirri"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#EA580C',
                color: '#FFFFFF',
                padding: '14px 28px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none'
              }}
            >
              <span>{isAr ? 'بدء محادثة تجارية ↗' : 'Start Commercial Inquiry ↗'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
