import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const ManufacturingPage = lazy(() => import('./pages/ManufacturingPage').then((module) => ({ default: module.ManufacturingPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then((module) => ({ default: module.PrivacyPolicyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));
const ProductDetailRoute = lazy(() => import('./pages/ProductDetailRoute').then((module) => ({ default: module.ProductDetailRoute })));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="route-loading flex items-center justify-center min-h-[60vh]">
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 text-gray-700 font-medium animate-pulse">Loading Basdils Pharmaceuticals...</div>
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
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/products/:slug" element={<ProductDetailRoute />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
