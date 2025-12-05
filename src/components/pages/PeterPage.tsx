import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  ChevronRight, 
  Download, 
  Shield, 
  Zap,
  Package,
  Layers,
  Eye,
  Droplets,
  Plug,
  Wind
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import peterLogo from '../../assets/PETER_logo.png';

interface PeterPageProps {
  onNavigate: (page: string) => void;
}

export function PeterPage({ onNavigate }: PeterPageProps) {
  const features = [
    {
      icon: Package,
      title: "Modular, Interlocking Panels",
      description: "Trapezoidal or corrugated panels with tongue-and-groove or snap-lock joints for quick, tool-free assembly. Ideal for rapid military deployment, enabling quick setup and dismantling in the field.",
      pageRef: "Page 1 images show interlocking panel joints for visual clarity."
    },
    {
      icon: Zap,
      title: "Lightweight Folding Panels",
      description: "Foldable or rollable plastic sheets for easy transportation in trucks or backpacks. Functions similarly to foldable solar panels, reducing logistics effort and space usage.",
      pageRef: "Illustration on Page 2 shows compact foldable roofing panels."
    },
    {
      icon: Layers,
      title: "Multi-layered Composite Design",
      description: "Uses recycled plastic blended with UV stabilizers, fire retardants, and glass fiber for enhanced strength and safety. Includes an inner insulating foam/plastic layer for temperature regulation.",
      pageRef: "Page 2 diagram displays cross-section showing inner foam insulation."
    },
    {
      icon: Eye,
      title: "Camouflage Coating / Embedded Pigments",
      description: "Sheets use camouflage pigments embedded during molding — not surface paint — for UV resistance and military stealth. Optional infrared reflective coating reduces heat absorption.",
      pageRef: "Page 3 shows multiple camouflage roof patterns in shades of green and brown."
    },
    {
      icon: Droplets,
      title: "Built-in Rainwater Harvesting",
      description: "Integrated ribs and channels guide rainwater into collection pipes. Perfect for military bases or disaster relief camps needing sustainable water sources.",
      pageRef: "Page 3 image depicts ribbed roof panels with built-in drainage paths."
    },
    {
      icon: Plug,
      title: "Clip-on Add-ons",
      description: "Roofing designed with integrated slots for easy attachment of solar film panels (for portable energy), netting or insulation, and ventilation modules.",
      pageRef: "Page 4 illustrations show modular slots connecting solar panels, mesh, and vents."
    },
    {
      icon: Wind,
      title: "Self-cooling / Insulating Design",
      description: "Features double-layer, hollow-core sheets that provide thermal insulation, keeping interiors cooler than conventional GI sheets.",
      pageRef: "Page 5 shows 3D model of hollow-core plastic roof design."
    }
  ];

  const advantages = [
    {
      title: "Rapid deployment & reusability",
      description: "Perfect for military or emergency operations"
    },
    {
      title: "Eco-friendly",
      description: "Manufactured from recycled plastics"
    },
    {
      title: "Durable, insulated, lightweight, and modular",
      description: "Built to withstand harsh conditions"
    },
    {
      title: "Customizable",
      description: "Available with camouflage or energy modules"
    }
  ];

  const specifications = [
    { property: "Material", value: "Recycled uPVC with UV stabilizers & fire retardants" },
    { property: "Design", value: "Modular, interlocking panels" },
    { property: "Weight", value: "Ultra-lightweight for portability" },
    { property: "Assembly", value: "Tool-free, snap-lock system" },
    { property: "Insulation", value: "Hollow-core double-layer design" },
    { property: "Camouflage", value: "Embedded pigments (optional)" },
    { property: "Add-ons", value: "Solar panels, netting, ventilation" },
    { property: "Applications", value: "Military, disaster relief, emergency shelters" }
  ];

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
            <button 
              onClick={() => onNavigate("products")}
              className="hover:text-primary"
            >
              Products
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-primary">P.E.T.E.R.</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-green-600 text-white border-none">
                Military & Emergency Solution
              </Badge>
              <div className="flex items-center mb-6">
                <img 
                  src={peterLogo} 
                  alt="P.E.T.E.R." 
                  className="h-32 w-auto"
                />
              </div>
              <h1 className="text-4xl mb-4">
                Portable Expeditionary Tactical Emergency Roofing
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Revolutionary modular roofing system engineered for rapid deployment in military operations, 
                disaster relief, and emergency shelter scenarios. Built with recycled materials for sustainability 
                without compromising on durability or tactical functionality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => onNavigate("contact")} className="bg-green-600 hover:bg-green-700">
                  Request Military Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="mr-2 h-5 w-5" />
                  Download Tactical Specs
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Military tent setup"
                  className="rounded-lg w-full h-96 object-cover mb-4"
                />
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-green-600 text-white border-none">Rapid Deployment</Badge>
                  <Badge className="bg-green-600 text-white border-none">Modular</Badge>
                  <Badge className="bg-green-600 text-white border-none">Eco-Friendly</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Advanced Tactical Features</h2>
            <p className="text-gray-600 text-lg">
              Seven innovative features designed for military and emergency applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{index + 1}. {feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    {feature.description}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {feature.pageRef}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Technical Specifications</h2>
            <p className="text-gray-600 text-lg">
              Detailed specifications for P.E.T.E.R. tactical roofing system
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Product Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specifications.map((spec, index) => (
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

      {/* Key Advantages */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">🌍 Key Advantages at a Glance</h2>
            <p className="text-gray-600 text-lg">
              Why P.E.T.E.R. is the superior choice for tactical operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Applications</h2>
            <p className="text-gray-600 text-lg">
              Designed for the most demanding scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="mb-2">Military Operations</h3>
              <p className="text-gray-600">Forward operating bases, field camps, and tactical shelters</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="mb-2">Disaster Relief</h3>
              <p className="text-gray-600">Emergency shelters, medical facilities, and temporary housing</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="mb-2">Remote Operations</h3>
              <p className="text-gray-600">Research stations, mining camps, and expedition bases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4">
            Ready to Deploy P.E.T.E.R.?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact our military solutions team for tactical specifications, deployment planning, 
            and custom configuration options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate("contact")}
              className="bg-green-600 hover:bg-green-700"
            >
              Contact Military Solutions Team
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate("products")}
              className="border-white text-white hover:bg-white/10"
            >
              View Other Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
