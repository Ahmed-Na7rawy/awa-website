import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, ArrowLeft, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { 
  v9Assets, 
  familyData, 
  solutionRecords,
  industryData
} from '../data/v9Data';

export const CataloguePage: React.FC = () => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const filteredSolutions = useMemo(() => {
    return solutionRecords.filter(sol => {
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || 
        sol.title.toLowerCase().includes(q) || 
        sol.detail.toLowerCase().includes(q) || 
        sol.portfolio.toLowerCase().includes(q);

      const matchFamily = selectedFamily === 'all' || sol.familyIds.includes(selectedFamily);
      const matchIndustry = selectedIndustry === 'all' || sol.industryIds.includes(selectedIndustry);

      return matchQuery && matchFamily && matchIndustry;
    });
  }, [searchQuery, selectedFamily, selectedIndustry]);

  return (
    <div className="catalogue-page" style={{ background: '#FFFFFF' }}>
      <SEO
        title={isAr ? 'كتالوج المنتجات وعائلات الحلول الصناعية • AWA Group' : 'Product Families Catalogue • AWA Group'}
        description="Six functional solution families bring our ingredient technologies, subsidiary portfolios and global network together in a consistent classification."
        path="/solutions/catalogue"
      />

      {/* 1. Page Hero */}
      <section className="page-hero page-hero--visual">
        <div className="page-hero-media">
          <img 
            src={v9Assets.v8Assets['sourcing-ingredients'] || v9Assets.v7Assets.hero} 
            alt="Product Families Catalogue" 
            loading="eager" 
          />
        </div>
        <div className="wrap page-hero-content">
          <div className="breadcrumb">
            <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span>›</span>
            <Link to="/solutions">{isAr ? 'حلول الصناعات' : 'Industry Solutions'}</Link>
            <span>›</span>
            <span>{isAr ? 'كتالوج عائلات المنتجات' : 'Product Families'}</span>
          </div>
          <div className="kicker on-dark">{isAr ? 'كتالوج المنتجات الصناعية' : 'PRODUCT DISCOVERY'}</div>
          <h1>
            {isAr ? (
              <>عائلات المنتجات المبنية حول <em className="italic">الوظيفة الغذائية.</em></>
            ) : (
              <>Product families built around <em className="italic">food functionality.</em></>
            )}
          </h1>
          <p>
            {isAr
              ? 'ست عائلات حلول وظيفية تجمع تقنيات المكونات الخاصة بنا، ومحافظ الشركات التابعة، وشبكتنا الدولية في تصنيف متكامل ومتجانس.'
              : 'Six functional solution families bring our ingredient technologies, subsidiary portfolios and global network together in a consistent classification.'}
          </p>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'كتالوج المنتجات والمواصفات' : 'DISCOVER THE PRODUCT FAMILIES'}</div>
              <h2>
                {isAr ? (
                  <>ابحث عن المكونات حسب <span className="accent">وظيفتها المحددة.</span></>
                ) : (
                  <>Find ingredients by <span className="accent">what they do.</span></>
                )}
              </h2>
            </div>
            <p>
              {isAr
                ? 'تصفح الفئات الوظيفية الست المعتمدة. ترتبط كل عائلة بالقطاعات الغذائية المعنية، والتحديات التقنية، ومجموعات المكونات المرافقة.'
                : 'Browse six agreed functional categories. Each family links to relevant food industries, technical challenges and associated ingredient ranges.'}
            </p>
          </div>

          {/* Interactive Filter Toolbar */}
          <div className="filter-toolbar" style={{
            background: 'var(--bg-soft)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ position: 'relative' }}>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث عن منتج، عائلة، أو تطبيق...' : 'Search family, product or subsidiary portfolio...'}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  background: '#FFFFFF',
                  fontSize: '0.9rem',
                  color: 'var(--text-main)'
                }}
              />
              <Search size={16} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: isAr ? 'auto' : '12px', right: isAr ? '12px' : 'auto', color: 'var(--text-muted)' }} />
            </div>

            <div>
              <select
                value={selectedFamily}
                onChange={(e) => setSelectedFamily(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  background: '#FFFFFF',
                  fontSize: '0.9rem',
                  color: 'var(--text-main)'
                }}
              >
                <option value="all">{isAr ? 'كافة الفئات الوظيفية' : 'All functional categories'}</option>
                {familyData.map((f) => (
                  <option key={f.id} value={f.id}>{f.title}</option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  background: '#FFFFFF',
                  fontSize: '0.9rem',
                  color: 'var(--text-main)'
                }}
              >
                <option value="all">{isAr ? 'كافة القطاعات الصناعية' : 'All food industries'}</option>
                {industryData.map((ind) => (
                  <option key={ind.id} value={ind.id}>{ind.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Summary & List */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Showing {filteredSolutions.length} functional solutions
            </span>
            {(searchQuery || selectedFamily !== 'all' || selectedIndustry !== 'all') && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFamily('all');
                  setSelectedIndustry('all');
                }}
                style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}
              >
                Clear all filters
              </button>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
            {filteredSolutions.map((sol, idx) => (
              <div 
                key={idx}
                className="solution-record-card"
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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {sol.portfolio}
                    </span>
                    <span style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-muted)' }}>
                      Record #{idx + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                    {sol.title}
                  </h3>

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {sol.detail}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Applicable Food Sectors:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {sol.industryIds.map((indId, iIdx) => (
                      <span key={iIdx} style={{ fontSize: '0.75rem', padding: '3px 8px', background: 'var(--bg-soft)', borderRadius: '6px', color: 'var(--text-main)' }}>
                        {indId}
                      </span>
                    ))}
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link to="/contact?type=technical" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {isAr ? 'طلب عينة أو مواصفة TDS' : 'Request TDS / Sample'} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--bg-soft)', borderRadius: '16px' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                No solutions matched your exact query or filter combinations.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFamily('all');
                  setSelectedIndustry('all');
                }}
                className="btn btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. 6 Functional Families Overview Cards */}
      <section className="section tint" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">{isAr ? 'عائلات المنتجات' : 'PRODUCT FAMILIES CLASSIFICATION'}</div>
              <h2>{isAr ? 'التصنيف الوظيفي الشامل لعائلات AWA' : 'Six Core Functional Ingredient Families'}</h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {familyData.map((fam) => (
              <div 
                key={fam.id} 
                style={{
                  background: '#FFFFFF',
                  padding: '2rem',
                  borderRadius: '18px',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ fontSize: '1.8rem', color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                  {fam.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {fam.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {fam.desc}
                </p>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Sub-families:
                </div>
                <ul style={{ paddingInlineStart: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {fam.subfamilies.map((sf, sIdx) => (
                    <li key={sIdx}>{sf}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* V9 Product Families Validation Disclaimer */}
          <div style={{
            background: 'var(--bg-soft)',
            borderLeft: '4px solid var(--primary)',
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: '1.65',
            marginTop: '3.5rem',
            maxWidth: '900px'
          }}>
            {isAr
              ? 'أسماء عائلات المنتجات هي فئات وصفية وليست علامات تجارية جديدة تم إطلاقها. تتطلب ملكية المحفظة وتوافر الدرجات وملاءمة التطبيق والأداء الفني التحقق والاعتماد قبل النشر العام.'
              : 'Product-family names are descriptive categories, not newly introduced brands. Portfolio ownership, grade availability, application suitability and technical performance require validation before public publication.'}
          </div>
        </div>
      </section>

      {/* Closing CTA (Exact V9) */}
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
