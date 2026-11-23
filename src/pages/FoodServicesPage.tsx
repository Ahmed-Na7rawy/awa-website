import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Building, Utensils, Sparkles, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets, foodCategories } from '../data/v9Data';

export const FoodServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const categoryImages: Record<string, string> = {
    'beverage-cafe': v9Assets.foodVisuals.smoothies,
    'hotel-hospitality': v9Assets.foodVisuals.hotel,
    'culinary-savory': v9Assets.foodVisuals.demiglace,
    'tailored-services': v9Assets.foodVisuals.frappe,
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    'beverage-cafe': <Coffee size={24} />,
    'hotel-hospitality': <Building size={24} />,
    'culinary-savory': <Utensils size={24} />,
    'tailored-services': <Sparkles size={24} />,
  };

  return (
    <div className="food-services-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'حلول خدمات الأغذية والضيافة • مجموعة AWA' : 'Professional Food Services • AWA Group'}
        description="AWA Food Services is a dedicated business combining professional beverages, hospitality products, culinary solutions and tailored operational support for cafés, restaurants, hotels and catering operators."
        path="/food-services"
      />

      {/* 1. Page Hero Banner (Exact V9 Content) */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['food-smoothies'] || v9Assets.foodVisuals.smoothies} 
            alt="AWA Professional Food Services" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <span>{isAr ? 'خدمات الأغذية' : 'Food Services'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'محفظة أعمال مجموعة AWA' : 'AWA BUSINESS PORTFOLIO'}</div>
          <h1>
            {isAr ? (
              <>حلول غذائية احترافية.<br /><em className="italic">مصممة لقطاع الخدمة والضيافة.</em></>
            ) : (
              <>Professional food solutions.<br /><em className="italic">Made for service.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'قطاع خدمات الأغذية في AWA هو وحدة أعمال متخصصة تجمع بين المشروبات الاحترافية، ومنتجات الضيافة، والحلول المطبخية، والدعم التشغيلي المخصص للمقاهي والمطاعم والفنادق وشركات التموين.'
              : 'AWA Food Services is a dedicated business combining professional beverages, hospitality products, culinary solutions and tailored operational support for cafés, restaurants, hotels and catering operators.'}
          </p>
        </div>
      </section>

      {/* 2. Overview Introduction (Exact V9 Content) */}
      <section className="section">
        <div className="wrap">
          <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="kicker">{isAr ? 'وحدة أعمال متخصصة في AWA' : 'A DEDICATED AWA BUSINESS'}</div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', lineHeight: '1.25' }}>
                {isAr ? (
                  <>أكثر من مجرد منتجات.<br /><span className="accent">شريك حقيقي لخدمات الأغذية.</span></>
                ) : (
                  <>More than products.<br /><span className="accent">A Food Services partner.</span></>
                )}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                {isAr
                  ? 'يحتاج المتخصصون في مجال الأغذية والمشروبات إلى تحضير متجانس، ومذاق موثوق، ومنتجات تعمل بكفاءة ضمن ظروف الخدمة والتشغيل الحقيقية. تجمع AWA Food Services بين العبوات والأحجام المناسبة للاستخدام الاحترافي، والمساعدة في تطوير الوصفات، والمعرفة التطبيقية، مع دعم الكفاءة واعتبارات التكلفة المناسبة لكل وجبة وحصة.'
                  : 'Food and beverage professionals need consistent preparation, dependable taste and products that work within real service conditions. AWA Food Services brings together suitable professional-use formats, recipe assistance and application knowledge, while supporting efficiency and relevant cost-per-serving considerations.'}
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                {isAr
                  ? 'تستفيد وحدة الأعمال من علامات تجارية مختارة مملوكة لـ AWA ومحافظ الشركاء الدوليين. ويتم تنظيم العرض حول التطبيقات المهنية بدلاً من فئات التجزئة الاستهلاكية.'
                  : 'The business draws on selected AWA-owned brands and international collaborator portfolios. The offering is organized around professional applications, not consumer retail categories.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solutions & Professional Applications (Exact V9 Content) */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)', padding: '5.5rem 0' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: '3.5rem' }}>
            <div>
              <div className="kicker">{isAr ? 'الحلول والتطبيقات المهنية' : 'SOLUTIONS & PROFESSIONAL APPLICATIONS'}</div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
                {isAr ? (
                  <>استكشف التشكيلة الكاملة <span className="accent">في مكان واحد.</span></>
                ) : (
                  <>Explore the range <span className="accent">in one place.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'يجمع كل عرض بين المنتجات والتطبيقات المهنية والمزايا التشغيلية، مما يوفر تجربة سلسة ومتكاملة لاحتياجات العملاء.'
                : 'Each offering combines products, professional applications and operational benefits, avoiding separate navigation paths for essentially the same customer need.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {foodCategories.map((cat, idx) => (
              <div 
                key={cat.id}
                id={cat.id}
                className="scroll-margin"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-subtle)',
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                  alignItems: 'center'
                }}
              >
                <div style={{ order: idx % 2 === 0 ? 1 : 2, height: '100%', minHeight: '380px', overflow: 'hidden' }}>
                  <img 
                    src={categoryImages[cat.id] || v9Assets.foodVisuals.smoothies} 
                    alt={cat.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ order: idx % 2 === 0 ? 2 : 1, padding: '3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>
                    {categoryIcons[cat.id]}
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {cat.lead}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                    {cat.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                    {cat.desc}
                  </p>

                  <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                    <strong style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--dark-navy)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                      {isAr ? 'المنتجات والتطبيقات المتاحة:' : 'Available Products & Applications:'}
                    </strong>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                      {cat.products?.map((prod: string, pIdx: number) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                          <CheckCircle2 size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                          <span>{prod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem' }}>
                    <Link to="/contact?type=foodservices" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
                      <span>{isAr ? 'تواصل مع فريق خدمات الأغذية ↗' : 'Inquire for Food Services ↗'}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TAILORED PROFESSIONAL SUPPORT (Exact V9 Content) */}
      <section className="section" style={{ background: '#FFFFFF', padding: '5.5rem 0' }}>
        <div className="wrap" style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div className="kicker">{isAr ? 'دعم مهني مخصص' : 'TAILORED PROFESSIONAL SUPPORT'}</div>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--text-main)', margin: '0.5rem 0 1rem' }}>
            {isAr ? (
              <>دعم عملي ومباشر <span className="accent">للعمليات المهنية.</span></>
            ) : (
              <>Practical support for <span className="accent">professional operations.</span></>
            )}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            {isAr
              ? 'تكتمل مجموعة AWA Food Services بمناقشات حول تكييف الوصفات، واختيار المنتجات، وتجانس التحضير، والتحكم في تكاليف التشغيل. ويمكن دراسة مشاريع التطوير والعلامات الخاصة المختارة حيثما توجد مواءمة تقنية وتجارية واضحة.'
              : 'The AWA Food Services range is complemented by discussions around recipe adaptation, product selection, preparation consistency and operational cost. Selected development and private-label projects may be considered where a clear technical and commercial fit exists.'}
          </p>
          <Link to="/contact?type=foodservices" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            <span>{isAr ? 'تواصل مع خدمات الأغذية ↗' : 'Contact Food Services ↗'}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* 5. Closing CTA (Exact V9 Content) */}
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
