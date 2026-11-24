import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { principals, jointVentures, v9Assets } from '../data/v9Data';

export const GlobalPage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  return (
    <>
      <SEO
        title={isAr ? 'الشبكة الدولية والمشاريع المشتركة • مجموعة AWA' : 'Global Network & Joint Ventures • AWA Group'}
        description={
          isAr
            ? 'توسع المشاريع المشتركة الدولية وعلاقات التوكيلات المعتمدة وصول مجموعة AWA إلى تكنولوجيات الأغذية المتخصصة والمعرفة التقنية وفرص التطوير المشترك.'
            : 'International joint ventures and established principal relationships extend AWA’s access to specialist food technologies, technical knowledge and collaborative development opportunities.'
        }
        path="/global"
      />

      <div className="v9-page">
        {/* HERO SECTION */}
        <section className="page-hero page-hero--visual">
          <div className="page-hero-media">
            <img 
              src={v9Assets.v8Assets['sourcing-port']} 
              alt={isAr ? 'الشبكة الدولية لمجموعة AWA' : 'Visual illustration relating to GLOBAL NETWORK'} 
              loading="eager" 
            />
          </div>
          <div className="wrap page-hero-content">
            <div className="breadcrumb">
              <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
              <span>›</span>
              <span>{isAr ? 'الشبكة الدولية' : 'AWA GROUP / INTERNATIONAL'}</span>
            </div>
            <div className="kicker on-dark">
              {isAr ? 'الشبكة الدولية' : 'GLOBAL NETWORK'}
            </div>
            <h1>
              {isAr ? (
                <>خبرة عالمية. <em className="italic">طموح مشترك.</em></>
              ) : (
                <>Global expertise. <em className="italic">Shared ambition.</em></>
              )}
            </h1>
            <p>
              {isAr
                ? 'توسع المشاريع المشتركة الدولية وعلاقات التوكيلات المعتمدة وصول مجموعة AWA إلى تكنولوجيات الأغذية المتخصصة والمعرفة التقنية وفرص التطوير المشترك.'
                : 'International joint ventures and established principal relationships extend AWA’s access to specialist food technologies, technical knowledge and collaborative development opportunities.'}
            </p>
          </div>
        </section>

        {/* 1. STRATEGIC JOINT VENTURES */}
        <section className="section scroll-margin" id="joint-ventures">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">{isAr ? 'المشاريع المشتركة الاستراتيجية' : 'STRATEGIC JOINT VENTURES'}</div>
                <h2>
                  {isAr ? (
                    <>تعاون متخصص. <em className="italic">قدرة ممتدة.</em></>
                  ) : (
                    <>Specialized collaboration. <em className="italic">Long-term capability.</em></>
                  )}
                </h2>
              </div>
              <p>
                {isAr
                  ? 'توركفوس وإنجريفا هما المشروعان المشتركان الاستراتيجيان لـ AWA، مع تخصصات تقنية متميزة وهويات مؤسسية مستقلة. تخضع الأوصاف القانونية والتشغيلية المنشورة للتأكيد الإداري.'
                  : 'Turkphos and Ingreva are AWA’s strategic joint ventures, with separate technical specializations and distinct corporate identities. Published legal and operational descriptions remain subject to management confirmation.'}
              </p>
            </div>

            <div className="joint-venture-grid">
              {jointVentures.map((j) => (
                <article key={j.name} className="joint-venture">
                  <div className="joint-logo">
                    <img
                      src={j.name === 'Turkphos' ? v9Assets.v8Assets.turkphosLogo : v9Assets.v8Assets.ingrevaLogo}
                      alt={`${j.name} official logo`}
                      loading="eager"
                    />
                  </div>
                  <div className="joint-top">
                    <span>{isAr ? `مشروع مشترك · ${j.region}` : `JOINT VENTURE · ${j.region}`}</span>
                    <span>↗</span>
                  </div>
                  <h3>{j.name}</h3>
                  <b>{j.category}</b>
                  <p>{j.desc}</p>
                  <a href={j.url} target="_blank" rel="noopener noreferrer">
                    {isAr ? `زيارة موقع ${j.name} ↗` : `Visit ${j.name} website ↗`}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 2. GLOBAL PRINCIPAL NETWORK */}
        <section className="section tint scroll-margin" id="principals">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">{isAr ? 'شبكة التوكيلات العالمية' : 'GLOBAL PRINCIPAL NETWORK'}</div>
                <h2>
                  {isAr ? (
                    <>الوصول إلى خبرات <span className="accent">المكونات المتخصصة.</span></>
                  ) : (
                    <>Access to specialist <span className="accent">ingredient expertise.</span></>
                  )}
                </h2>
              </div>
              <p>
                {isAr
                  ? 'تعمل AWA مع كبار مصنعي المكونات والتوكيلات التكنولوجية لتوريد المكونات والأنظمة المناسبة لمختلف التطبيقات الغذائية. وتخضع المنتجات والأقاليم والحقوق الفعلية لعلاقات فردية.'
                  : 'AWA works with established ingredient manufacturers and technology principals to source ingredients and systems suitable for diverse food applications. Actual products, territories and rights are governed by individual relationships.'}
              </p>
            </div>

            <div className="principal-grid">
              {principals.map((p) => {
                const logo = p.logo ? (v9Assets.principalLogos as any)[p.logo] : null;
                return (
                  <a
                    key={p.name}
                    className="principal-card principal-card-v6"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="principal-logo-frame">
                      {logo ? (
                        <img src={logo} alt={`${p.name} logo`} />
                      ) : (
                        <div className="logo-placeholder">
                          <b>OM TEX CHEM</b>
                          <small>{isAr ? 'الشعار الرسمي قيد الاعتماد' : 'Official logo pending'}</small>
                        </div>
                      )}
                    </div>
                    <small>{p.location}</small>
                    <h3>{p.name}</h3>
                    <p>{p.category}</p>
                    <span>{isAr ? 'موقع الوكيل ↗' : 'Principal website ↗'}</span>
                  </a>
                );
              })}
            </div>

            <div className="info-note">
              {isAr
                ? 'تمتد قيمتنا إلى ما هو أبعد من تمثيل الموردين: يقوم الفريق بتقييم الوظائف الفنية للمكونات والمواصفات وخيارات التوريد والجدوى التجارية واستمرارية الإمداد لتطبيقات العملاء.'
                : 'Our value extends beyond supplier representation: the team evaluates ingredient functionality, technical specifications, sourcing options, commercial feasibility and continuity of supply for customer applications.'}
            </div>

            <div className="cta-small">
              <Link to="/capabilities/sourcing" className="btn outline">
                <span>{isAr ? 'استكشف التوريد وسلاسل الإمداد العالمية' : 'Explore Global Sourcing & Supply'}</span>
                <span className="arrow">↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. INTERNATIONAL BUSINESS & EXPORTS */}
        <section className="section scroll-margin" id="exports">
          <div className="wrap intro-grid">
            <div>
              <div className="kicker">{isAr ? 'الأعمال الدولية' : 'INTERNATIONAL BUSINESS'}</div>
              <h2>
                {isAr ? (
                  <>ربط الخبرات <span className="accent">عبر الأسواق.</span></>
                ) : (
                  <>Connecting expertise <span className="accent">across markets.</span></>
                )}
              </h2>
            </div>
            <div>
              <p>
                {isAr
                  ? 'تتيح علاقاتنا الدولية توريد المكونات والتعاون في التطبيقات وفرص التصدير المعتمدة. سيميز الموقع بين مواقع التشغيل ووجهات التصدير المؤكدة والمناطق التعاقدية والأسواق المستهدفة للحفاظ على تمثيل دقيق للسوق.'
                  : 'Our international relationships enable ingredient supply, application collaboration and approved export opportunities. The website will distinguish operating locations, confirmed export destinations, contractual territories and target markets to maintain accurate market representation.'}
              </p>
              <Link to="/contact?type=export" className="btn outline">
                <span>{isAr ? 'استفسار عن الأعمال الدولية' : 'International business inquiry'}</span>
                <span className="arrow">↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. CLOSING CTA */}
        <section className="closing-cta">
          <div className="wrap">
            <div>
              <div className="kicker on-dark">
                {isAr ? 'ابدأ محادثة' : 'START A CONVERSATION'}
              </div>
              <h2>
                {isAr ? 'هل لديك تحدٍ غذائي تريد حله؟' : 'Have a food challenge to solve?'}
              </h2>
              <p>
                {isAr
                  ? 'أخبرنا عن تطبيقك أو مشروعك وتواصل مع الفريق المختص.'
                  : 'Tell us about your application or project and connect with the right team.'}
              </p>
            </div>
            <Link to="/contact?type=technical" className="btn white">
              <span>{isAr ? 'ناقش مشروعك' : 'Discuss your project'}</span>
              <span className="arrow">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default GlobalPage;
