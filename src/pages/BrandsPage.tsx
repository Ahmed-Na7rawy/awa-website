import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Sparkles, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { AwaBrandShowcase } from '../components/AwaBrandShowcase';
import { v9Assets, brandData } from '../data/v9Data';

interface BrandsPageProps {
  onOpenQuote?: () => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({ onOpenQuote }) => {
  const { brandId } = useParams<{ brandId?: string }>();
  const { language } = useLanguage();
  const isAr = language === 'ar';

  // Normalize brandId aliases
  let normalizedBrandId = brandId;
  if (brandId === 'sweet' || brandId === 'sweet-and-slim') normalizedBrandId = 'sweet-and-slim';
  if (brandId === 'yalla' || brandId === 'yalla-drinks') normalizedBrandId = 'yalla-drinks';
  if (brandId === 'squeasy') normalizedBrandId = 'squeasy';

  // If a specific brand is requested, render the full interactive B2C Brand Showcase!
  if (normalizedBrandId && ['sweet-and-slim', 'yalla-drinks', 'squeasy'].includes(normalizedBrandId)) {
    return (
      <div className="b2c-brand-container">
        <AwaBrandShowcase 
          initialBrandId={normalizedBrandId} 
          onOpenQuote={onOpenQuote || (() => {})} 
        />
      </div>
    );
  }

  // Otherwise, render the V9 Consumer Portfolio Hub Page
  return (
    <div className="brands-hub-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'العلامات الاستهلاكية • مجموعة AWA' : 'Consumer Portfolio • AWA Group'}
        description="AWA-owned consumer brands and strategic retail partner products spanning sweeteners, café beverages, dessert preparations and culinary staples."
        path="/brands"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.foodVisuals.frappe || v9Assets.v7Assets.hero} 
            alt="AWA Consumer Portfolio" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <span>{isAr ? 'العلامات الاستهلاكية' : 'Consumer Portfolio'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'محفظة أعمال AWA' : 'AWA BUSINESS PORTFOLIO'}</div>
          <h1>
            {isAr ? (
              <>العلامات الاستهلاكية.<br /><em className="italic">جودة ترتقي بالحياة اليومية.</em></>
            ) : (
              <>Consumer Portfolio.<br /><em className="italic">AWA-Owned &amp; Partnered Brands.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تجمع محفظة المستهلك بين علاماتنا التجارية المملوكة بالكامل ومنتجات الشركاء الاستراتيجيين لتقديم منتجات تلبي متطلبات التغذية الصحية وأسلوب الحياة المعاصر وتجربة المقاهي المميزة.'
              : 'Our consumer portfolio brings together AWA-owned brands and selective international retail partnerships spanning health sweeteners, barista beverages, dessert purées and convenient pantry staples.'}
          </p>
        </div>
      </section>

      {/* 2. AWA-Owned Brands Section */}
      <section className="section scroll-margin" id="owned">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'علامات AWA المملوكة' : 'AWA-OWNED BRANDS'}</div>
              <h2>
                {isAr ? (
                  <>علامات متميزة. <span className="accent">مدعومة بخبراتنا العلمية.</span></>
                ) : (
                  <>Distinct brands. <span className="accent">Connected expertise.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'علاماتنا المملوكة تخدم مناسبات استهلاكية متنوعة، بدءاً من بدائل السكر الصحية ومشروبات الكافيهات سريعة التحضير وصولاً إلى بيوريهات تزيين الحلويات.'
                : 'Our owned brands serve different consumer occasions, from sugar-free health choices and barista beverage mixes to convenient culinary dessert preparations.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {/* Sweet & Slim Card */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px', width: 'fit-content' }}>
                  Diet &amp; Wellness
                </span>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.25rem' }}>Sweet &amp; Slim</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Zero Calorie Sweeteners &amp; Mints</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {isAr
                      ? 'العلامة الرائدة في المحليات الخالية من السعرات الحرارية، متوفرة في أظرف، برطمانات منزلية، أقراص فوارة، ونعناع خالي من السكر.'
                      : 'Market-leading low-calorie table-top sweeteners (Sucralose, Stevia), functional mints and low-glycemic instant hot drinks.'}
                  </p>

                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--dark-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Key Product Lines:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--primary)' }} />
                      <span>Sucralose &amp; Stevia Sachets &amp; Jars</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--primary)' }} />
                      <span>Sugar-Free Functional Mints</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--primary)' }} />
                      <span>Slim Hot Chocolate &amp; Instant Coffee</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  to="/brands/sweet-and-slim" 
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{isAr ? 'استكشف عالم Sweet & Slim' : 'Explore Sweet & Slim Showcase'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Yalla Drinks Card */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px', width: 'fit-content' }}>
                  Café &amp; Lifestyle
                </span>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.25rem' }}>Yalla Drinks</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Barista Blends &amp; Instant Specialty</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {isAr
                      ? 'مشروبات الكافيه الفاخرة سريعة التحضير: فرابيه منعش، وسموزي مثلج، ومشروبات شوكولاتة وكابتشينو بنكهات مميزة.'
                      : 'Café-style specialty beverage formats including Frappit, Smoozy, Koffi and Choco designed for both home indulgence and barista stations.'}
                  </p>

                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--dark-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Key Product Lines:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#D97706' }} />
                      <span>Frappit Iced Blended Bases</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#D97706' }} />
                      <span>Smoozy Real Fruit Instant Mixes</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#D97706' }} />
                      <span>Choco Rich Belgian Drinking Cocoa</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  to="/brands/yalla-drinks" 
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: '#D97706' }}
                >
                  <span>{isAr ? 'استكشف عالم Yalla Drinks' : 'Explore Yalla Drinks Showcase'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* SquEasy Card */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-subtle)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px', width: 'fit-content' }}>
                  Culinary &amp; Pastry
                </span>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.25rem' }}>SquEasy</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Dessert Purées &amp; Toppings</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {isAr
                      ? 'بيوريهات تزيين الحلويات والآيس كريم المعبأة في عبوات سهلة الضغط مانعة للتسرب، مجهزة بنسب فواكه طبيعية عالية.'
                      : 'Professional dessert purées and topping sauces in ergonomic non-drip silicone valve squeeze bottles for precise garnish and topping.'}
                  </p>

                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--dark-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Key Product Lines:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#DC2626' }} />
                      <span>Strawberry, Raspberry &amp; Mango Purée</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#DC2626' }} />
                      <span>Salted Caramel &amp; Belgian Chocolate Sauce</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#DC2626' }} />
                      <span>No-Drip Silicone Valve Bottling</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  to="/brands/squeasy" 
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: '#DC2626' }}
                >
                  <span>{isAr ? 'استكشف عالم SquEasy' : 'Explore SquEasy Showcase'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partnered Retail Products Section (SIRRI Foods) */}
      <section className="section tint scroll-margin" id="partnered" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'المنتجات الشريكة' : 'PARTNERED RETAIL PORTFOLIO'}</div>
              <h2>
                {isAr ? 'شراكات دولية مميزة للتجزئة والتوزيع' : 'Partnered Retail Products — SIRRI Foods'}
              </h2>
            </div>
            <p>
              {isAr
                ? 'تدعم AWA شبكات توزيع استراتيجية لمنتجات غذائية متميزة تلبي متطلبات التغذية الأصيلة والوصفات التقليدية.'
                : 'A strategic distribution collaboration bringing authentic traditional soups and convenient pantry essentials to consumers across retail channels.'}
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-subtle)',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>
                Strategic Brand Partnership
              </span>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                SIRRI Foods
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {isAr
                  ? 'تقدم SIRRI Foods حلول شوربات ووصفات طهي تقليدية سريعة التحضير تجمع بين المذاق المنزلي الأصيل والمكونات الطبيعية النقية. تعتمد على خبرات التعبئة وسلاسل التوريد التابعة لمجموعة AWA لضمان الجودة الفائقة.'
                  : 'SIRRI Foods delivers traditional ready-to-prepare soups and pantry meal preparations based on clean, natural recipes with zero artificial preservatives, supported by AWA’s packaging technology and nationwide distribution.'}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Traditional Authentic Recipes</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Clean-Label Preservative-Free</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>High Retail Channel Penetration</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>Modern Barrier Packaging</span>
                </div>
              </div>

              <Link to="/contact?type=consumer" className="btn btn-secondary">
                <span>{isAr ? 'استفسار عن التوزيع التجاري' : 'Discuss Retail Distribution'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', height: '340px' }}>
              <img 
                src={v9Assets.foodVisuals.broth || v9Assets.foodVisuals.demiglace} 
                alt="SIRRI Foods Traditional Soups" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'فرص التوزيع والتعاقد' : 'RETAIL & DISTRIBUTION COLLABORATION'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'مهتم بتوزيع علاماتنا الاستهلاكية؟' : 'Interested in distributing AWA brands?'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'تواصل مع فريق المبيعات الاستهلاكية والتصدير لمناقشة فرص التوزيع والوكالات.' : 'Connect with our commercial FMCG team to explore retail and export distribution partnerships.'}
            </p>
          </div>
          <Link to="/contact?type=consumer" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'تواصل مع فريق التجزئة والتوزيع' : 'Contact Retail Sales Team'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
