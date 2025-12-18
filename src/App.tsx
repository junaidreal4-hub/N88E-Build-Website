import { Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

import { HomePage } from "./components/pages/HomePage";
import { ProductPage } from "./components/pages/ProductPage";
import { ProductsLandingPage } from "./components/pages/ProductsLandingPage";
import { PeterPage } from "./components/pages/PeterPage";
import { AboutPage } from "./components/pages/AboutPage";
import { FounderPage } from "./components/pages/FounderPage";
import { ContactPage } from "./components/pages/ContactPage";
import { CertificatePage } from "./components/pages/CertificatePage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsLandingPage />} />
          <Route path="/gutdach" element={<ProductPage productType="gutdach" />} />
          <Route path="/gutwall" element={<ProductPage productType="gutwall" />} />
          <Route path="/peter" element={<PeterPage />} />
          <Route path="/certificates" element={<CertificatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
