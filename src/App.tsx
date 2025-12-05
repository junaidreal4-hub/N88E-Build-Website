import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "products":
        return <ProductsLandingPage onNavigate={setCurrentPage} />;
      case "gutdach":
        return <ProductPage productType="gutdach" onNavigate={setCurrentPage} />;
      case "gutwall":
        return <ProductPage productType="gutwall" onNavigate={setCurrentPage} />;
      case "peter":
        return <PeterPage onNavigate={setCurrentPage} />;
      case "certificates":
        return <CertificatePage />;
      case "about":
        return <AboutPage />;
      case "founder":
        return <FounderPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}