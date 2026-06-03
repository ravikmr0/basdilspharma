import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage').then((module) => ({ default: module.ManufacturingPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const ProductDetailRoute = lazy(() => import('./pages/ProductDetailRoute').then((module) => ({ default: module.ProductDetailRoute })));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="route-loading">
          <div className="route-loading-card glass-panel">Loading BASDILS...</div>
        </div>
      }
    >
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:slug" element={<ProductDetailRoute />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
