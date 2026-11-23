import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Layers, FlaskConical } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { 
  v9Assets, 
  industryData, 
  challengeData, 
  familyData, 
  solutionRecords 
} from '../data/v9Data';

export const SolutionDetailPage: React.FC = () => {
  const { kind, id } = useParams<{ kind: string; id: string }>();
  const { language } = useLanguage();
  const isAr = language === 'ar';

  // Find the target entity based on kind and id
  let item: any = null;
  let kindLabel = '';
  let linkedSolutions: any[] = [];

  if (kind === 'industry') {
    kindLabel = 'Industry Solution';
    item = industryData.find(i => i.id === id);
    if (item) {
      linkedSolutions = solutionRecords.filter(s => s.industryIds.includes(item.id));
    }
  } else if (kind === 'challenge') {
    kindLabel = 'Technical Challenge';
    item = challengeData.find(c => c.id === id);
    if (item) {
      linkedSolutions = solutionRecords.filter(s => s.challengeIds.includes(item.id));
    }
  } else if (kind === 'family') {
    kindLabel = 'Product Family';
    item = familyData.find(f => f.id === id);
    if (item) {
      linkedSolutions = solutionRecords.filter(s => s.familyIds.includes(item.id));
    }
  }

  if (!item) {
    return (
      <div className="section" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <div className="wrap">
          <h2>Solution Category Not Found</h2>
          <p style={{ color: 'var(--text-muted)', margin: '1rem 0 2rem' }}>
            The requested application or solution category could not be located.
          </p>
          <Link to="/solutions" className="btn btn-primary">
            Return to Solutions Directory
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = (kind === 'industry' && v9Assets.v7Assets[item.id as keyof typeof v9Assets.v7Assets]) 
    || v9Assets.v8Assets['cheese-banner'] 
    || v9Assets.v7Assets.hero;

  return (
    <div className="solution-detail-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={`${item.title} • AWA Group`}
        description={item.desc}
        path={`/solutions/${kind}/${item.id}`}
      />

      {/* 1. Page Hero Banner */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img src={heroImage} alt={item.title} loading="eager" />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/solutions">{isAr ? 'حلول الصناعات' : 'Industry Solutions'}</Link>
            <span>›</span>
            <span>{kindLabel}</span>
          </div>
          <div className="kicker on-dark">{kindLabel.toUpperCase()}</div>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      </section>

      {/* 2. Subcategories & Technical Needs (if Industry) */}
      {kind === 'industry' && item.subcategories && (
        <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="kicker">{isAr ? 'مجالات التطبيق' : 'APPLICATION SUBCATEGORIES'}</div>
                <h2>{isAr ? 'المواصفات والتحديات الفنية لكل قطاع' : 'Key Formulations & Processing Needs'}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {item.subcategories.map((sub: any, sIdx: number) => (
                <div 
                  key={sIdx}
                  style={{
                    background: 'var(--bg-soft)',
                    padding: '2rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
                    {sub.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Critical Processing Needs:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {sub.needs.map((need: string, nIdx: number) => (
                      <li key={nIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={15} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Linked Solution Records */}
      <section className="section tint">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'الأنظمة والتركيبات المعتمدة' : 'ASSOCIATED SOLUTIONS & SYSTEMS'}</div>
              <h2>
                {isAr ? 'الأنظمة الوظيفية المطابقة لهذا التصنيف' : `Validated Functional Systems for ${item.title}`}
              </h2>
            </div>
            <p>
              {isAr
                ? 'مجموعة من الحلول والتركيبات المطورة التي تلبي الاحتياجات الوظيفية والاقتصادية الدقيقة لهذا القطاع.'
                : 'Selected formulation systems and functional ingredients engineered to address the specific performance requirements of this area.'}
            </p>
          </div>

          {linkedSolutions.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
              {linkedSolutions.map((sol, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    padding: '2rem',
                    borderRadius: '18px',
                    border: '1px solid var(--border-color)',
                    boxShadow: 'var(--shadow-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>
                      {sol.portfolio}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                      {sol.title}
                    </h3>
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {sol.detail}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to="/contact?type=technical" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {isAr ? 'طلب عينة أو تجربة' : 'Request TDS / Pilot Trial'} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '3rem', textAlign: 'center', background: '#FFFFFF', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                We develop customized solutions for this sector based on individual factory specifications.
              </p>
              <Link to="/contact?type=technical" className="btn btn-primary">
                Contact Technical Team for Custom Formulation
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 4. Closing CTA (Exact V9) */}
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
              gap: '0.5rem'
            }}
          >
            <span>{isAr ? 'ناقش مشروعك' : 'Discuss your project'}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
