import React, { useState } from 'react';
import { ChevronDown, Star, Store, HelpCircle } from 'lucide-react';
import { FmcgBrandData } from '../../data/fmcgBrandsData';
import { PartnerMarquee } from '../PartnerMarquee';
import './BrandShowcase.css';

interface BrandFaqAndProofProps {
  brand: FmcgBrandData;
  onOpenQuote: () => void;
}

export const BrandFaqAndProof: React.FC<BrandFaqAndProofProps> = ({ brand, onOpenQuote }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="fmcg-proof-section">
      {/* 1. Customer & Industry Verified Testimonials */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
          <div
            className="fmcg-eyebrow"
            style={{
              borderColor: `${brand.theme.primary}55`,
              color: brand.theme.primary,
            }}
          >
            <Star size={14} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
            <span>Verified Industry Reviews</span>
          </div>
          <h3 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 900, textTransform: 'uppercase', color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            TRUSTED BY CHEFS, BARISTAS & CONSUMERS
          </h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6 }}>
            Discover why {brand.brandName} is a top choice in retail markets, hypermarkets, and professional foodservice operations.
          </p>
        </div>

        <div className="fmcg-reviews-grid">
          {brand.reviews.map((rev, idx) => (
            <div
              key={idx}
              className="fmcg-review-card"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid rgba(0, 0, 0, 0.08)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.05)',
                padding: '2rem',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} size={17} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                  ))}
                </div>
                <p style={{ fontSize: '1rem', color: '#1E293B', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 500 }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: brand.theme.primary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    color: '#FFFFFF',
                    flexShrink: 0,
                    boxShadow: `0 4px 12px ${brand.theme.primary}44`,
                  }}
                >
                  {rev.avatarTag}
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#0F172A' }}>{rev.author}</div>
                  <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 600, marginTop: '2px' }}>{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Hypermarket Stockists Marquee */}
      <div style={{
        padding: '3.5rem 2rem',
        borderRadius: '26px',
        background: '#FFFFFF',
        border: '1.5px solid rgba(0, 0, 0, 0.08)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.04)',
        marginBottom: '5rem',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: brand.theme.primary, marginBottom: '0.5rem' }}>
          <Store size={16} />
          <span>Nationwide Retail Availability</span>
        </div>
        <h4 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0F172A', marginBottom: '0.5rem' }}>
          WHERE TO FIND {brand.brandName.toUpperCase()}
        </h4>
        <p style={{ fontSize: '0.95rem', color: '#475569', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
          Available in leading hypermarkets, supermarkets, and specialty food stores across Egypt and regional export markets.
        </p>

        <PartnerMarquee items={brand.retailers} />
      </div>

      {/* 3. Interactive FAQs */}
      <div className="fmcg-faq-container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            className="fmcg-eyebrow"
            style={{
              borderColor: `${brand.theme.primary}55`,
              color: brand.theme.primary,
            }}
          >
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.35rem)', fontWeight: 900, color: '#0F172A', textTransform: 'uppercase' }}>
            GOT QUESTIONS? WE’VE GOT ANSWERS.
          </h3>
        </div>

        <div>
          {brand.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="fmcg-faq-item"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                  borderRadius: '18px',
                  marginBottom: '1rem',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="fmcg-faq-btn"
                  style={{
                    color: '#0F172A',
                    fontWeight: 800,
                    padding: '1.25rem 1.5rem',
                    fontSize: '1rem',
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: brand.theme.primary,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    className="fmcg-faq-answer"
                    style={{
                      color: '#334155',
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      borderTop: '1px solid rgba(0,0,0,0.04)',
                      paddingTop: '1rem',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
