import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BackToTop } from './components/BackToTop';
import { FloatingSocialBar } from './components/FloatingSocialBar';
import { ScrollToTop } from './components/ScrollToTop';
import { JsonLd } from './components/JsonLd';

// Code-Split Lazy Loaded Pages
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const TradingPage = lazy(() => import('./pages/TradingPage').then(m => ({ default: m.TradingPage })));
const LogisticsPage = lazy(() => import('./pages/LogisticsPage').then(m => ({ default: m.LogisticsPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage').then(m => ({ default: m.SustainabilityPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isRTL } = useLanguage();
  const navigate = useNavigate();

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (pageId: string, subId?: string) => {
    if (pageId === 'home') {
      navigate('/');
    } else if (subId) {
      navigate(`/${pageId}/${subId}`);
    } else {
      navigate(`/${pageId}`);
    }
  };

  return (
    <div className={`app-root ${isRTL ? 'rtl' : 'ltr'}`}>
      <JsonLd />
      <ScrollToTop />
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar
        currentPage=""
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      <main>
        <div className="page-transition-wrapper">
          <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAFAFA' }}></div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onNavigate={handleNavigate}
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/about"
                element={
                  <AboutPage
                    onNavigate={handleNavigate}
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/solutions"
                element={
                  <SolutionsPage
                    onNavigate={handleNavigate}
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/solutions/:subId"
                element={
                  <SolutionsPage
                    onNavigate={handleNavigate}
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/trading"
                element={
                  <TradingPage
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/logistics"
                element={
                  <LogisticsPage
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/industries"
                element={
                  <IndustriesPage
                    onNavigate={handleNavigate}
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/products"
                element={
                  <ProductsPage
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/products/:subId"
                element={
                  <ProductsPage
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/sustainability"
                element={
                  <SustainabilityPage
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
              <Route
                path="/careers"
                element={
                  <CareersPage />
                }
              />
              <Route
                path="/contact"
                element={
                  <ContactPage />
                }
              />
              <Route
                path="*"
                element={
                  <HomePage
                    onNavigate={handleNavigate}
                    onOpenQuote={() => setIsQuoteModalOpen(true)}
                  />
                }
              />
            </Routes>
          </Suspense>
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
      <BackToTop />
      <FloatingSocialBar />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter basename="/awa-website">
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
