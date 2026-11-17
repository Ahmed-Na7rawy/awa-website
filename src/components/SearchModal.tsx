import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { pagesForSearch, industryData, challengeData, familyData, solutionRecords } from '../data/v9Data';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via document event or custom handler
          window.dispatchEvent(new CustomEvent('open-search'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }

    const items: any[] = [];

    // Search Pages
    pagesForSearch.forEach(p => {
      if (p.title.toLowerCase().includes(q) || p.keywords.toLowerCase().includes(q) || p.route.toLowerCase().includes(q)) {
        items.push({
          type: 'Page',
          title: p.title,
          subtitle: p.route,
          route: p.route,
        });
      }
    });

    // Search Industries
    industryData.forEach(ind => {
      if (ind.title.toLowerCase().includes(q) || ind.desc.toLowerCase().includes(q)) {
        items.push({
          type: 'Industry Solution',
          title: ind.title,
          subtitle: ind.desc,
          route: `/solutions/industry/${ind.id}`,
        });
      }
    });

    // Search Challenges
    challengeData.forEach(ch => {
      if (ch.title.toLowerCase().includes(q) || ch.desc.toLowerCase().includes(q)) {
        items.push({
          type: 'Technical Challenge',
          title: ch.title,
          subtitle: ch.desc,
          route: `/solutions/challenge/${ch.id}`,
        });
      }
    });

    // Search Product Families
    familyData.forEach(fam => {
      if (fam.title.toLowerCase().includes(q) || fam.desc.toLowerCase().includes(q)) {
        items.push({
          type: 'Product Family',
          title: fam.title,
          subtitle: fam.desc,
          route: `/solutions/family/${fam.id}`,
        });
      }
    });

    // Search Solutions
    solutionRecords.forEach(sol => {
      if (sol.title.toLowerCase().includes(q) || sol.detail.toLowerCase().includes(q) || sol.portfolio.toLowerCase().includes(q)) {
        items.push({
          type: 'Solution Record',
          title: sol.title,
          subtitle: sol.detail,
          route: '/solutions/catalogue',
        });
      }
    });

    setResults(items.slice(0, 10));
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="search-modal" role="dialog" aria-modal="true" style={{ display: 'block' }}>
      <div className="search-backdrop" onClick={onClose} />
      <div className="search-panel">
        <div className="search-top">
          <Search size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages, solutions, industries, food services, products..."
            aria-label="Search site"
          />
          <button className="search-close" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <div className="search-results">
          {query.trim() === '' ? (
            <div style={{ padding: '2rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Type keywords such as <em>dairy, cheese, sweeteners, food services, Halal, FSSC, Turkphos</em>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '2rem 1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No results found for "<strong>{query}</strong>".
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={idx}
                className="search-item"
                style={{
                  padding: '0.85rem 1.25rem',
                  borderBottom: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-soft)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onClick={() => {
                  onClose();
                  navigate(item.route);
                }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.type}
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {item.subtitle}
                  </div>
                </div>
                <ArrowRight size={15} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </div>
            ))
          )}
        </div>

        <div className="search-note">
          <span>Search index covers AWA corporate, industrial solutions, Food Services & consumer brands</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <kbd style={{ padding: '2px 6px', background: 'var(--bg-soft)', borderRadius: '4px', fontSize: '0.75rem', border: '1px solid var(--border-color)' }}>ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};
