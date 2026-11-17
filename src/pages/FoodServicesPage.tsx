import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Coffee, Cake, Building, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { v9Assets, foodCategories } from '../data/v9Data';

export const FoodServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const categoryImages: Record<string, string> = {
    beverages: v9Assets.foodVisuals.smoothies,
    culinary: v9Assets.foodVisuals.demiglace,
    desserts: v9Assets.foodVisuals.frappe,
    catering: v9Assets.foodVisuals.hotel,
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    beverages: <Coffee size={24} />,
    culinary: <Utensils size={24} />,
    desserts: <Cake size={24} />,
    catering: <Building size={24} />,
  };

  return (
    <div className="food-services-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'خدمات الأغذية والمطاعم • مجموعة AWA' : 'Food Services • AWA Group'}
        description="A dedicated business stream developing convenient, repeatable food and beverage solutions for commercial kitchens, café operators and catering services."
        path="/food-services"
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.foodVisuals.hotel || v9Assets.v7Assets.hero} 
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
          <div className="kicker on-dark">{isAr ? 'محفظة أعمال AWA' : 'AWA BUSINESS PORTFOLIO'}</div>
          <h1>
            {isAr ? (
              <>حلول متخصصة لقطاع <em className="italic">خدمات الأغذية والضيافة.</em></>
            ) : (
              <>Tailored solutions for <em className="italic">professional food services.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'قطاع أعمال متخصص يطور حلول أغذية ومشروبات عملية وموثوقة للمطابخ المركزية وسلاسل المقاهي والمطاعم والمخابز وخدمات التموين الفندقي والمؤسسي.'
              : 'A dedicated business stream developing convenient, repeatable food and beverage solutions for commercial kitchens, quick-service restaurants, café operators, bakeries and catering services.'}
          </p>
        </div>
      </section>

      {/* 2. Overview Introduction */}
      <section className="section">
        <div className="wrap">
          <div className="intro-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="kicker">{isAr ? 'حلول احترافية متكاملة' : 'OPERATIONAL EXCELLENCE'}</div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--text-main)', lineHeight: '1.3' }}>
                {isAr ? (
                  <>السرعة والتجانس والتكلفة المحسوبة <span className="accent">في كل طبق وكوب.</span></>
                ) : (
                  <>Speed, consistency and control <span className="accent">in every serving.</span></>
                )}
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {isAr
                  ? 'تم تصميم حلول AWA Food Services لمعالجة تحديات التشغيل اليومية لقطاع HORECA: تقلب مهارات العمالة، وهدر الخامات، والحاجة إلى توحيد المذاق عبر الفروع المتعددة، مع ضمان كفاءة التكلفة دون المساس بالجودة.'
                  : 'AWA Food Services solutions are formulated to address the core operational realities of professional kitchens: variable staff skill levels, product waste, prep time constraints and multi-outlet taste consistency.'}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact?type=foodservice" className="btn btn-primary">
                <span>{isAr ? 'تواصل مع فريق خدمات الأغذية' : 'Connect with Food Services Team'}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4 Core Food Services Sectors */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'القطاعات المتخصصة' : 'FOOD SERVICES SECTORS'}</div>
              <h2>{isAr ? 'أربعة قطاعات موجهة لاحتياجات الضيافة والمطاعم' : 'Four Specialized Solution Streams'}</h2>
            </div>
            <p>
              {isAr
                ? 'استعرض حلولنا المصممة خصيصاً للمشروبات والمقاهي، والمطابخ والصلصات، وحلويات المخابز، والتوريد المؤسسي والفندقي.'
                : 'Explore formulations tailored for café bars, hot culinary kitchens, bakery dessert lines and institutional catering.'}
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
                <div style={{ order: idx % 2 === 0 ? 1 : 2, height: '100%', minHeight: '360px', overflow: 'hidden' }}>
                  <img 
                    src={categoryImages[cat.id] || v9Assets.foodVisuals.smoothies} 
                    alt={cat.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ order: idx % 2 === 0 ? 2 : 1, padding: '3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                    {categoryIcons[cat.id]}
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Sector #{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    {cat.title}
                  </h3>

                  <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 600, lineHeight: '1.5', marginBottom: '0.75rem' }}>
                    {cat.lead}
                  </p>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                    {cat.summary}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--dark-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Key Product Lines:
                      </strong>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {cat.products?.map((prod: string, pIdx: number) => (
                          <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <CheckCircle2 size={13} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                            <span>{prod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <strong style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: 'var(--dark-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Applications &amp; Formats:
                      </strong>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {cat.applications?.map((app: string, aIdx: number) => (
                          <li key={aIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem' }}>
                    <Link to="/contact?type=foodservice" className="btn btn-secondary" style={{ padding: '0.65rem 1.4rem' }}>
                      <span>{isAr ? 'طلب عينات أو مواصفات هذا القطاع' : 'Inquire for samples & pricing'}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="closing-cta" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)', padding: '5rem 0', color: '#FFFFFF' }}>
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="kicker on-dark" style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              {isAr ? 'تواصل مع فريق خدمات الأغذية' : 'HORECA & COMMERCIAL INQUIRIES'}
            </div>
            <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {isAr ? 'هل تدير سلسلة مقاهٍ أو مطابخ مركزية؟' : 'Operating a café chain or central kitchen?'}
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', maxWidth: '580px' }}>
              {isAr ? 'نوفر حلول خلطات مخصصة تضمن ثبات المذاق والتحكم في تكلفة التشغيل عبر فروعكم.' : 'We provide tailored multi-outlet food service formulations that maintain consistency and control prep cost.'}
            </p>
          </div>
          <Link to="/contact?type=foodservice" className="btn" style={{ background: '#FFFFFF', color: 'var(--navy)', fontWeight: 800, padding: '0.9rem 1.8rem', borderRadius: '12px' }}>
            <span>{isAr ? 'طلب عرض لخدمات الأغذية' : 'Request Food Services Consultation'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
