import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BackToTop } from './components/BackToTop';
import { FloatingSocialBar } from './components/FloatingSocialBar';
import { ScrollToTop } from './components/ScrollToTop';
import { JsonLd } from './components/JsonLd';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { TradingPage } from './pages/TradingPage';
import { LogisticsPage } from './pages/LogisticsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProductsPage } from './pages/ProductsPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

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
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
