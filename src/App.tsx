import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BackToTop } from './components/BackToTop';
import { FloatingSocialBar } from './components/FloatingSocialBar';

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

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [subPageId, setSubPageId] = useState<string | undefined>(undefined);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    setCurrentPage(pageId);
    setSubPageId(subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'solutions':
        return (
          <SolutionsPage
            initialSubId={subPageId}
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'trading':
        return (
          <TradingPage
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'logistics':
        return (
          <LogisticsPage
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'industries':
        return (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'products':
        return (
          <ProductsPage
            initialSubId={subPageId}
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'sustainability':
        return (
          <SustainabilityPage
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
      case 'careers':
        return (
          <CareersPage />
        );
      case 'contact':
        return (
          <ContactPage />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={() => setIsQuoteModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="app-root">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      <main>
        <div className="page-transition-wrapper" key={currentPage}>
          {renderCurrentPage()}
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

export default App;
