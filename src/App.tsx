import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BackToTop } from './components/BackToTop';
import { FloatingSocialBar } from './components/FloatingSocialBar';
import { ScrollToTop } from './components/ScrollToTop';
import { JsonLd } from './components/JsonLd';

// Eagerly loaded landing page for instant First Contentful Paint
import { HomePage } from './pages/HomePage';

// Route-level code splitting for secondary pages
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const CataloguePage = lazy(() => import('./pages/CataloguePage').then(m => ({ default: m.CataloguePage })));
const SolutionDetailPage = lazy(() => import('./pages/SolutionDetailPage').then(m => ({ default: m.SolutionDetailPage })));
const FoodServicesPage = lazy(() => import('./pages/FoodServicesPage').then(m => ({ default: m.FoodServicesPage })));
const BrandsPage = lazy(() => import('./pages/BrandsPage').then(m => ({ default: m.BrandsPage })));
const CapabilitiesPage = lazy(() => import('./pages/CapabilitiesPage').then(m => ({ default: m.CapabilitiesPage })));
const SourcingPage = lazy(() => import('./pages/SourcingPage').then(m => ({ default: m.SourcingPage })));
const RdPage = lazy(() => import('./pages/RdPage').then(m => ({ default: m.RdPage })));
const FormulationsPage = lazy(() => import('./pages/FormulationsPage').then(m => ({ default: m.FormulationsPage })));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage').then(m => ({ default: m.ManufacturingPage })));
const StrategicManufacturingPage = lazy(() => import('./pages/StrategicManufacturingPage').then(m => ({ default: m.StrategicManufacturingPage })));
const QualityPage = lazy(() => import('./pages/QualityPage').then(m => ({ default: m.QualityPage })));
const SustainabilityPage = lazy(() => import('./pages/SustainabilityPage').then(m => ({ default: m.SustainabilityPage })));
const GlobalPage = lazy(() => import('./pages/GlobalPage').then(m => ({ default: m.GlobalPage })));
const KnowledgePage = lazy(() => import('./pages/KnowledgePage').then(m => ({ default: m.KnowledgePage })));
const TurkphosPage = lazy(() => import('./pages/TurkphosPage').then(m => ({ default: m.TurkphosPage })));
const IngrevaPage = lazy(() => import('./pages/IngrevaPage').then(m => ({ default: m.IngrevaPage })));
const SirriPage = lazy(() => import('./pages/SirriPage').then(m => ({ default: m.SirriPage })));
const PrincipalsPage = lazy(() => import('./pages/PrincipalsPage').then(m => ({ default: m.PrincipalsPage })));
const ExportsPage = lazy(() => import('./pages/ExportsPage').then(m => ({ default: m.ExportsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Legacy URL redirect resolver for /products/:subId
const ProductsRedirect: React.FC = () => {
  const { subId } = useParams<{ subId?: string }>();
  if (!subId) return <Navigate to="/brands" replace />;
  if (subId === 'industrial') return <Navigate to="/solutions/catalogue" replace />;
  if (subId === 'sweet' || subId === 'sweet-and-slim') return <Navigate to="/brands/sweet-and-slim" replace />;
  if (subId === 'yalla' || subId === 'yalla-drinks') return <Navigate to="/brands/yalla-drinks" replace />;
  if (subId === 'squeasy') return <Navigate to="/brands/squeasy" replace />;
  if (subId === 'sirri' || subId === 'sirri-foods' || subId === 'sirri-olive-oil') return <Navigate to="/brands/sirri" replace />;
  return <Navigate to={`/brands/${subId}`} replace />;
};

// Legacy URL redirect resolver for /solutions/:legacySlug
const LegacySolutionsRedirect: React.FC = () => {
  const { legacySlug } = useParams<{ legacySlug?: string }>();
  if (!legacySlug) return <Navigate to="/solutions" replace />;
  const map: Record<string, string> = {
    dairy: '/solutions/industry/dairy-cheese',
    meat: '/solutions/industry/meat-seafood',
    bakery: '/solutions/industry/bakery',
    beverage: '/solutions/industry/beverages',
    sauces: '/solutions/industry/culinary',
    rnd: '/capabilities/rd',
    catalogue: '/solutions/catalogue',
  };
  const target = map[legacySlug];
  if (target) return <Navigate to={target} replace />;
  return <Navigate to={`/solutions/industry/${legacySlug}`} replace />;
};

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
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar
        currentPage=""
        onNavigate={handleNavigate}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      <main id="main-content" tabIndex={-1}>
        <div className="page-transition-wrapper">
          <Suspense fallback={
            <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '3px solid #E2E8F0', borderTopColor: '#00A84F', animation: 'spin 0.8s linear infinite' }} aria-label="Loading" />
            </div>
          }>
          <Routes>
            {/* Core V9 Routes */}
            <Route path="/" element={<HomePage onNavigate={handleNavigate} onOpenQuote={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Solutions Routes */}
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/catalogue" element={<CataloguePage />} />
            <Route path="/solutions/:kind/:id" element={<SolutionDetailPage />} />

            {/* Food Services */}
            <Route path="/food-services" element={<FoodServicesPage />} />
            <Route path="/food-services/:sectorId" element={<FoodServicesPage />} />

            {/* Consumer Brands (B2C) & Showcases */}
            <Route path="/brands" element={<BrandsPage onOpenQuote={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/brands/sirri" element={<SirriPage />} />
            <Route path="/brands/sirri-foods" element={<SirriPage />} />
            <Route path="/brands/sirri-olive-oil" element={<SirriPage />} />
            <Route path="/brands/:brandId" element={<BrandsPage onOpenQuote={() => setIsQuoteModalOpen(true)} />} />

            {/* Capabilities Routes */}
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/capabilities/sourcing" element={<SourcingPage />} />
            <Route path="/capabilities/rd" element={<RdPage />} />
            <Route path="/capabilities/formulations" element={<FormulationsPage />} />
            <Route path="/capabilities/manufacturing" element={<ManufacturingPage />} />
            <Route path="/capabilities/strategic-manufacturing" element={<StrategicManufacturingPage />} />

            {/* Trust, Network & Knowledge */}
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/sustainability" element={<SustainabilityPage />} />
            <Route path="/global" element={<GlobalPage />} />
            <Route path="/global/principals" element={<PrincipalsPage />} />
            <Route path="/principals" element={<Navigate to="/global/principals" replace />} />
            <Route path="/global/exports" element={<ExportsPage />} />
            <Route path="/exports" element={<Navigate to="/global/exports" replace />} />
            <Route path="/export" element={<Navigate to="/global/exports" replace />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/insights" element={<KnowledgePage />} />
            <Route path="/news" element={<KnowledgePage />} />
            <Route path="/insights-and-news" element={<Navigate to="/knowledge" replace />} />

            {/* Strategic Joint Ventures & Entities */}
            <Route path="/turkphos" element={<TurkphosPage />} />
            <Route path="/joint-ventures/turkphos" element={<Navigate to="/turkphos" replace />} />
            <Route path="/ingreva" element={<IngrevaPage />} />
            <Route path="/joint-ventures/ingreva" element={<Navigate to="/ingreva" replace />} />

            {/* Operations & Communication */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />

            {/* Legacy URL Aliases & Compatibility Redirects */}
            <Route path="/trading" element={<Navigate to="/capabilities/sourcing" replace />} />
            <Route path="/industries" element={<Navigate to="/capabilities/manufacturing" replace />} />
            <Route path="/logistics" element={<Navigate to="/capabilities/manufacturing" replace />} />
            <Route path="/rnd" element={<Navigate to="/capabilities/rd" replace />} />
            <Route path="/products" element={<Navigate to="/brands" replace />} />
            <Route path="/products/:subId" element={<ProductsRedirect />} />
            <Route path="/solutions/:legacySlug" element={<LegacySolutionsRedirect />} />

            {/* 404 — Branded Not Found */}
            <Route path="*" element={<NotFoundPage />} />
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
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
