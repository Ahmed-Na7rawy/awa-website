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
            src={v9Assets.v8Assets['food-hotel'] || v9Assets.foodVisuals.hotel} 
            alt="AWA Consumer Portfolio" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <span>{isAr ? 'محفظة أعمال AWA' : 'AWA BUSINESS PORTFOLIO'}</span>
            <span>›</span>
            <span>{isAr ? 'العلامات الاستهلاكية' : 'CONSUMER PORTFOLIO'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'محفظة المستهلك' : 'CONSUMER PORTFOLIO'}</div>
          <h1>
            {isAr ? (
              <>محفظة لتجارب <br /><em className="italic">غذائية يومية مميزة.</em></>
            ) : (
              <>A portfolio for <br /><em className="italic">everyday food experiences.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'تجمع أعمال المستهلك في مجموعة AWA بين علاماتها التجارية الخاصة للأغذية والمشروبات والتعاون المختار في مجال التجزئة الدولية. وتظل الفروق واضحة بين ملكية العلامة وقنوات المنتجات.'
              : 'AWA Group’s consumer business brings together its own food and beverage brands and selected international retail collaborations. Brand ownership and product-channel distinctions remain clear.'}
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
                  <>علامات متميزة. <span className="accent">خبرات متصلة.</span></>
                ) : (
                  <>Distinct brands. <span className="accent">Connected expertise.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'تخدم علاماتنا التجارية المملوكة مناسبات استهلاكية مختلفة، من الخيارات الخالية من السكر والمشروبات الجاهزة للتحضير إلى تحضيرات الطهي المريحة.'
                : 'Our owned brands serve different consumer occasions, from sugar-free choices and ready-to-prepare beverages to convenient culinary preparations.'}
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
                  {isAr ? 'علامة AWA المملوكة' : 'AWA-OWNED BRAND'}
                </span>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.25rem' }}>Sweet &amp; Slim</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>{isAr ? 'محليات ومنتجات مريحة' : 'Sweeteners & Functional Formats'}</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {isAr
                      ? 'منتجات التحلية والأغذية والمشروبات المريحة التي تشمل المحليات المكتبية والنعناع الخالي من السكر وتنسيقات المشروبات الفورية.'
                      : 'Sweetening and convenient food-and-beverage products spanning tabletop sweeteners, sugar-free mints and instant drink formats.'}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {(isAr 
                      ? ['المحليات', 'نعناع خالي من السكر', 'قهوة وشوكولاتة سريعة التحضير', 'منتجات وظيفية']
                      : ['Sweeteners', 'Sugar-free mints', 'Instant coffee & chocolate', 'Functional products']
                    ).map((chip, cIdx) => (
                      <span key={cIdx} style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-main)', border: '1px solid var(--border-color)' }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/brands/sweet-and-slim" 
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>{isAr ? 'استكشف عالم Sweet & Slim' : 'Explore Sweet & Slim'}</span>
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
                  {isAr ? 'علامة AWA المملوكة' : 'AWA-OWNED BRAND'}
                </span>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.25rem' }}>Yalla Drinks</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>{isAr ? 'مشروبات بأسلوب الكافيه' : 'Café-Style Beverage Formats'}</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {isAr
                      ? 'تنسيقات مشروبات بأسلوب الكافيه تشمل Frappit و Smoozy و Koffi و Choco، إلى جانب تطبيقات المشروبات الاحترافية المختارة.'
                      : 'Café-style beverage formats including Frappit, Smoozy, Koffi and Choco, alongside selected professional beverage applications.'}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {['Frappit', 'Smoozy', 'Yalla Koffi', 'Yalla Choco'].map((chip, cIdx) => (
                      <span key={cIdx} style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 10px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-main)', border: '1px solid var(--border-color)' }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/brands/yalla-drinks" 
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: '#D97706' }}
                >
                  <span>{isAr ? 'استكشف عالم Yalla Drinks' : 'Explore Yalla Drinks'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Squ'easy Card (Exact V9 Content) */}
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
                  {isAr ? 'علامة AWA المملوكة' : 'AWA-OWNED BRAND'}
                </span>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.25rem' }}>Squ'easy</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>Garlic &amp; Harissa Culinary Preparations</span>
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {isAr
                      ? 'مستحضرات الثوم والهريسة الموفرة للوقت التي تلبي متطلبات الطهي المنزلي واحتياجات مطابخ المطاعم المهنية المختارة.'
                      : 'Time-saving garlic and harissa preparations serving home cooking and selected professional kitchen needs.'}
                  </p>

                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--dark-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {isAr ? 'المنتجات الرئيسية:' : 'Key Product Lines:'}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#DC2626' }} />
                      <span>{isAr ? 'معجون الثوم' : 'Garlic paste'}</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={13} style={{ color: '#DC2626' }} />
                      <span>{isAr ? 'الهريسة التونسية' : 'Harissa'}</span>
                    </li>
                  </ul>
                </div>

                <Link 
                  to="/brands/squeasy" 
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: '#DC2626' }}
                >
                  <span>{isAr ? 'استكشف عالم Squ\'easy' : 'Explore Squ\'easy Showcase'}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partnered Retail Products Section (SIRRI Foods - Exact V9 Content) */}
      <section className="section tint scroll-margin" id="partnered" style={{ borderTop: '1px solid var(--border-color)', padding: '5.5rem 0' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: '3rem' }}>
            <div>
              <div className="kicker">{isAr ? 'منتجات التجزئة الشريكة' : 'PARTNERED RETAIL PRODUCTS'}</div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
                {isAr ? (
                  <>تعاون دولي.<br /><span className="accent">محفظة علامات تجارية أوسع.</span></>
                ) : (
                  <>International collaboration.<br /><span className="accent">A broader brand portfolio.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'توسع منتجات SIRRI Foods المختارة عرض AWA الاستهلاكي. يتم تقديم علاقة العلامة التجارية بشكل منفصل عن العلامات المملوكة لـ AWA، مع إمكانية استكشاف المنتجات الاحترافية أيضاً عبر خدمات الأغذية (Food Services).'
                : 'Selected SIRRI Foods products extend AWA’s consumer offering. The brand relationship is presented separately from AWA-owned brands, with professional products also discoverable through Food Services.'}
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-subtle)',
            padding: '3.5rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {isAr ? 'علامة شريكة · تركيا' : 'PARTNER BRAND · TÜRKİYE'}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {isAr ? 'منتجات غذائية ومطبخية مريحة' : 'Convenient & culinary food products'}
                </span>
              </div>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                SIRRI Foods
              </h3>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00A84F', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                {isAr ? 'تعاون دولي للعلامات التجارية والتصنيع' : 'INTERNATIONAL BRAND / OEM COLLABORATION'}
              </div>
              <p style={{ fontSize: '1.025rem', color: 'var(--text-main)', fontWeight: 600, lineHeight: 1.6, marginBottom: '0.75rem' }}>
                {isAr
                  ? 'SIRRI Foods — منتجات استهلاكية ومطبخية.'
                  : 'SIRRI Foods — consumer and culinary products.'}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {isAr
                  ? 'SIRRI Foods هو تعاون دولي للعلامات التجارية يشمل أطعمة التجزئة المريحة ومنتجات مطبخية مختارة. تشمل المحفظة أكواب الشوربة سريعة التحضير، والشوربات، والمرق، ومرق الطهي، والصلصات، والديمي جلاس، ومستحضرات مطبخية أخرى. تعتمد المنتجات المقدمة لكل سوق وقناة على ترتيبات التصنيع والترتيبات التجارية المعتمدة.'
                  : 'SIRRI Foods is an international brand collaboration spanning convenient retail foods and selected culinary products. The portfolio includes instant soup cups, soups, bouillons, cooking broths, sauces, demi-glace and other culinary preparations. Products presented to each market and channel depend on the approved manufacturing and commercial arrangements.'}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '2rem' }}>
                {isAr
                  ? 'يتم أيضاً تقديم مرق SIRRI والمنتجات المطبخية الاحترافية ضمن خدمات الأغذية (Food Services) في AWA، بينما يتم تقديم منتجات الراحة بالتجزئة هنا. وتظل العلامة التجارية مملوكة بشكل مستقل.'
                  : 'Professional SIRRI broths and culinary products are also presented within AWA Food Services, while retail convenience products are introduced here. The brand remains separately owned.'}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  isAr ? 'أكواب الشوربة سريعة التحضير' : 'Instant Soup Cups',
                  isAr ? 'الشوربات والمرق' : 'Soups & Bouillons',
                  isAr ? 'مرق الطهي الاحترافي' : 'Broths',
                  isAr ? 'الصلصات والديمي جلاس' : 'Sauces & Demi-Glace',
                  isAr ? 'المستحضرات المطبخية' : 'Culinary Preparations'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/brands/sirri" className="btn btn-primary">
                  <span>{isAr ? 'استكشف عالم SIRRI والشوربات الفورية' : 'Explore SIRRI Showcase & Instant Soups'}</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/food-services#culinary-savory" className="btn btn-secondary">
                  <span>{isAr ? 'التطبيقات المطبخية المهنية ↗' : 'Professional Culinary ↗'}</span>
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', height: '360px' }}>
              <img 
                src={v9Assets.foodVisuals.broth || v9Assets.foodVisuals.demiglace} 
                alt="SIRRI Foods Culinary Products" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA (Exact V9 Content) */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5.5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2.5rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
            </div>
            <h2 style={{ fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '0.75rem', fontWeight: 800 }}>
              {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
              {isAr ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.' : 'Tell us about your application or project and connect with the right team.'}
            </p>
          </div>
          <Link 
            to="/contact?type=technical" 
            className="btn" 
            style={{ 
              background: '#FFFFFF', 
              color: 'var(--navy)', 
              fontWeight: 800, 
              padding: '1rem 2rem', 
              borderRadius: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '1rem',
              textDecoration: 'none'
            }}
          >
            <span>{isAr ? 'ناقش مشروعك ↗' : 'Discuss your project ↗'}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
};
