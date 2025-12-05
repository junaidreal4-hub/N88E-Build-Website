import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import gutdachLogo from '../../assets/GUTDACH_logo.png';
import gutwallLogo from '../../assets/GUTWALL_logo.png';
import peterLogo from '../../assets/PETER_logo.png';

interface ProductsLandingPageProps {
  onNavigate: (page: string) => void;
}

export function ProductsLandingPage({ onNavigate }: ProductsLandingPageProps) {
  const products = [
    {
      id: "gutdach",
      name: "GUTDACH",
      tagline: "ASA uPVC Roofing Solution",
      badge: "Available Now",
      logo: gutdachLogo
    },
    {
      id: "gutwall",
      name: "GUTWALL",
      tagline: "uPVC Plain Sheet for Interior Partitions",
      badge: "Available Now",
      logo: gutwallLogo
    },
    {
      id: "peter",
      name: "P.E.T.E.R.",
      tagline: "Portable Expeditionary Tactical Emergency Roofing",
      badge: "Coming Soon",
      logo: peterLogo
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-primary mb-6">
            Our Product Solutions
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our complete range of uPVC solutions engineered for extreme climates and modern applications.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className={`relative overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${
                  product.id === 'peter' ? 'opacity-75' : ''
                }`}
                onClick={() => product.id !== 'peter' && onNavigate(product.id)}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className={product.id === 'peter' ? 'bg-gray-500 text-white' : 'bg-primary text-white'}>
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-12 flex flex-col items-center text-center min-h-[320px] justify-center">
                  {/* Logo */}
                  <div className="mb-6">
                    <img 
                      src={product.logo} 
                      alt={product.name}
                      className={product.id === "peter" ? "h-16" : "h-12"}
                    />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-gray-900 mb-3">
                    {product.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-gray-600 mb-8">
                    {product.tagline}
                  </p>

                  {/* CTA Button */}
                  <Button 
                    className="group/btn"
                    disabled={product.id === 'peter'}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.id !== 'peter') {
                        onNavigate(product.id);
                      }
                    }}
                  >
                    {product.id === 'peter' ? 'Coming Soon' : 'Learn More'}
                    {product.id !== 'peter' && (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-600 mb-6">
            Our experts can help you select the right solution for your specific requirements.
          </p>
          <Button 
            size="lg" 
            onClick={() => onNavigate("contact")}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
