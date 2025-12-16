import { Routes, Route, Navigate } from "react-router-dom";

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

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
