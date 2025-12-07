import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  ChevronRight, 
  Download, 
  Shield, 
  Sun, 
  Droplets, 
  Thermometer,
  Home,
  Building,
  Factory
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import gutdachLogo from '../../assets/GUTDACH_logo.png';
import gutwallLogo from '../../assets/GUTWALL_logo.png';
import gutdachTileImage from '../../assets/GUTDACH_roofing_tile_grey1.png';
import gutdachBrochure from '../../assets/GUTDACH_Brochure.pdf';
import gutwallBrochure from '../../assets/GUTWALL_Brochure.pdf';
import gutwallImage from '../../assets/GUTWALL_plain_sheet_wall.png'
interface ProductPageProps {
  productType: "gutdach" | "gutwall";
  onNavigate: (page: string) => void;
}

export function ProductPage({ productType, onNavigate }: ProductPageProps) {
  
  const productData = {
    gutdach: {
      title: "GUTDACH",
      subtitle: "ASA uPVC Roofing Solution",
      description: "Engineered for Northeast India's extreme climate. Available in flat sheets and tile profiles. 30+ year lifespan, rust-proof, and 5-7°C cooler than traditional GI sheets. Zero maintenance required.",
      image: gutdachTileImage,
      logo: gutdachLogo,
      brochure: gutdachBrochure,
      specifications: [
        { property: "Material", value: "ASA-coated uPVC" },
        { property: "Lifespan", value: "30+ years" },
        { property: "Profiles", value: "Flat Sheets & Tile Sheets" },
        { property: "Thickness", value: "2.5mm - 6mm" },
        { property: "Width", value: "1050mm - 1220mm" },
        { property: "Length", value: "Up to 12m" },
        { property: "Colors", value: "Blue, Red, Green, Grey, Terracotta, Brown" },
        { property: "Temperature Reduction", value: "5-7°C cooler" },
        { property: "Warranty", value: "10-12 years" }
      ],
      benefits: [
        {
          icon: Shield,
          title: "Rust-Proof Forever",
          description: "Unlike GI sheets, never rusts even in coastal or industrial zones"
        },
        {
          icon: Thermometer,
          title: "5-7°C Cooler Interiors",
          description: "Thermal insulation keeps buildings comfortable in extreme heat"
        },
        {
          icon: Sun,
          title: "Sound Absorbing",
          description: "No deafening noise during rainfall, ensuring peaceful interiors"
        },
        {
          icon: Home,
          title: "Versatile Profiles",
          description: "Available in flat sheets for industrial use and tile profiles for aesthetic applications"
        }
      ],
      applications: [
        {
          icon: Home,
          title: "Residential Roofing",
          description: "Perfect for homes, villas, and residential complexes"
        },
        {
          icon: Building,
          title: "Commercial Buildings",
          description: "Ideal for offices, warehouses, and retail spaces"
        },
        {
          icon: Factory,
          title: "Industrial Facilities",
          description: "Suitable for factories, workshops, and agricultural buildings"
        }
      ]
    },
    gutwall: {
      title: "GUTWALL",
      subtitle: "uPVC Plain Sheet for Interior Partitions",
      description: "Durable, climate-adaptive solution for interior partitions and modular walls. Moisture-proof, termite-resistant, and perfect for North East India's high humidity. Lightweight with zero maintenance required.",
      image: gutwallImage,
      logo: gutwallLogo,
      brochure: gutwallBrochure,
      specifications: [
        { property: "Material", value: "uPVC" },
        { property: "Thickness", value: "2.5mm" },
        { property: "Width", value: "1130mm" },
        { property: "Standard Length", value: "3.0m" },
        { property: "Custom Length", value: "Up to 6m (bulk orders)" },
        { property: "Colors", value: "White & Blue" },
        { property: "Finish", value: "Smooth, stain-resistant" },
        { property: "Installation", value: "Quick & easy" }
      ],
      benefits: [
        {
          icon: Droplets,
          title: "Moisture-Proof & Termite-Resistant",
          description: "Unlike wood or plywood, does not absorb moisture or attract termites—ideal for high humidity regions"
        },
        {
          icon: Shield,
          title: "Lightweight & Easy to Install",
          description: "2.5mm thickness provides structural strength without extra weight. Faster, safer installations"
        },
        {
          icon: Sun,
          title: "Zero Maintenance & Long Life",
          description: "Never needs repainting or polishing. Smooth finish resists stains and fading for years"
        },
        {
          icon: Thermometer,
          title: "Thermal & Acoustic Insulation",
          description: "Reduces indoor heat buildup and minimizes outside noise—perfect for compact urban homes"
        }
      ],
      applications: [
        {
          icon: Home,
          title: "Home Partitions",
          description: "Living rooms, bedrooms, and modular home interiors"
        },
        {
          icon: Building,
          title: "Office & Commercial",
          description: "Office partitions, clinics, study rooms, and commercial spaces"
        },
        {
          icon: Factory,
          title: "Institutional Use",
          description: "Hostels, modular cabins, and temporary setups"
        }
      ]
    }
  };

  const product = productData[productType];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button 
              onClick={() => onNavigate("home")}
              className="hover:text-primary"
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4" />
            <span>Products</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary flex items-center">
              <img 
                src={product.logo} 
                alt={product.title} 
                className="h-4 w-auto mr-1"
              />
              {product.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Premium Quality
              </Badge>
              <div className="flex items-center mb-4">
                <img 
                  src={product.logo} 
                  alt={product.title} 
                  className="h-12 w-auto"
                />
              </div>
              <h2 className="text-2xl text-primary mb-6">{product.subtitle}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("contact")}>
                  Request Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  asChild
                >
                  <a 
                    href={product.brochure} 
                    download={`${product.title}_Brochure.pdf`}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Brochure
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={product.image}
                alt={product.title}
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Technical Specifications</h2>
            <p className="text-gray-600 text-lg">
              Detailed specifications for our {product.title} ({product.subtitle})
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Product Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <div className="text-sm text-gray-600">{spec.property}</div>
                    <div className="text-lg">{spec.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Key Benefits</h2>
            <p className="text-gray-600 text-lg">
              Why our {product.title} ({product.subtitle}) is the right choice for your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Applications</h2>
            <p className="text-gray-600 text-lg">
              Perfect for a wide range of construction projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.applications.map((application, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <application.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us for a detailed quote and expert consultation for your roofing project.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => onNavigate("contact")}
          >
            Get Quote Now
          </Button>
        </div>
      </section>
    </div>
  );
}
