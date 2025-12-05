import rusted_roof from '../../assets/Rusted_roof.png';
import gutdach_installation from '../../assets/GUTDACH_installation.png';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { AlertTriangle, CheckCircle2, Shield, Zap, Volume2, Thermometer, Droplet, Calendar, MapPin, Factory } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import gutdachLogo from '../../assets/GUTDACH_logo.png';

export function AboutPage() {
  const traditionalProblems = [
    {
      icon: Droplet,
      title: "Rusting & Corrosion",
      description: "GI sheets rust within a few years, especially in coastal and humid areas"
    },
    {
      icon: Thermometer,
      title: "Heat Trapping",
      description: "Metal sheets trap unbearable heat, making interiors extremely hot"
    },
    {
      icon: Volume2,
      title: "Noise Pollution",
      description: "Deafening noise during rainfall disrupts daily life"
    },
    {
      icon: Calendar,
      title: "Frequent Maintenance",
      description: "Color-coated sheets require repainting every 4 years"
    }
  ];

  const gutdachBenefits = [
    {
      icon: CheckCircle2,
      title: "30+ Year Lifespan",
      description: "3x longer than GI sheets (8-10 years) and fiber cement (12 years)"
    },
    {
      icon: Shield,
      title: "Rust-Proof",
      description: "Resists corrosion even in coastal and industrial zones"
    },
    {
      icon: Thermometer,
      title: "5-7°C Cooler",
      description: "Thermal insulation keeps interiors significantly cooler"
    },
    {
      icon: Volume2,
      title: "Sound Absorbing",
      description: "No noise during rainfall, ensuring peaceful interiors"
    },
    {
      icon: Zap,
      title: "Lightweight",
      description: "Easy to transport and install, reducing costs"
    },
    {
      icon: CheckCircle2,
      title: "Zero Maintenance",
      description: "No repainting, no rust, no repairs needed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white text-primary">Founded July 2025</Badge>
            <h1 className="text-4xl lg:text-5xl mb-6">
              N88E Build Pvt. Ltd. – Climate-Adaptive Roofing for Northeast India
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Founded in July 2025 and proudly based in Guwahati, Assam, we're revolutionizing 
              India's roofing industry with ASA-coated uPVC solutions that truly make sense for India's people and climate.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-100">
              <MapPin className="h-5 w-5" />
              <span>Kamrup, Guwahati, Assam, India - 781131</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-red-500 text-red-500">
              <AlertTriangle className="h-4 w-4 mr-2" />
              The Problem
            </Badge>
            <h2 className="text-3xl mb-4">Why Traditional Roofing Fails India</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              For decades, the roofing market has been dominated by GI and color-coated sheets. 
              But in reality, these materials fail to meet India's environmental and economic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl mb-6 text-red-600">The Reality of GI & Color-Coated Sheets</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>In regions with scorching summers, heavy monsoons, and coastal humidity, GI sheets rust within a few years</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Paint fades quickly, requiring expensive repainting every 4 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>They trap unbearable heat inside buildings</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Create deafening noise during rainfall</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>Heavy to transport and expensive to install</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>After exposure to salt or moisture, corrosion quickly eats away at the surface</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  <strong>The Verdict:</strong> Despite their market dominance, traditional roofing materials 
                  are quick to lose their appeal and fail to provide long-term value.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src={rusted_roof}
                alt="Traditional Roofing Problems"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {traditionalProblems.map((problem, index) => (
              <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <problem.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              The Solution
            </Badge>
            <h2 className="text-3xl mb-4">Introducing GUTDACH – A Roofing Revolution</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              N88E Build Pvt. Ltd. is delivering climate-adaptive roofing for Northeast India through our breakthrough product 
              <strong> GUTDACH</strong>, made from ASA-coated uPVC — 
              a new-generation material engineered specifically for Northeast India's demanding climate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="mb-6">
                <img 
                  src={gutdachLogo} 
                  alt="GUTDACH" 
                  className="h-16 w-auto mb-4"
                />
                <h3 className="text-2xl mb-4 text-primary">What Makes GUTDACH Different?</h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Unlike GI, fiber cement, or clay tiles</strong>, ASA-coated uPVC roofing is:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Lightweight</strong> – Easy to transport and install</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Rust-proof</strong> – No corrosion even in coastal zones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Thermally insulated</strong> – Keeps interiors 5-7°C cooler</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Sound-absorbing</strong> – No noise during rain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span><strong>Built to last 30+ years</strong> – Zero maintenance required</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src={gutdach_installation}
                alt="GUTDACH Products"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gutdachBenefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20 hover:shadow-lg transition-shadow hover:border-primary">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">GUTDACH vs. Traditional Roofing</h2>
            <p className="text-gray-600 text-lg">
              See why GUTDACH delivers more than 3x the lifespan at a more affordable cost
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">GUTDACH (ASA uPVC)</th>
                  <th className="p-4 text-left">GI Sheets</th>
                  <th className="p-4 text-left">Fiber Cement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Lifespan</td>
                  <td className="p-4 bg-green-50"><strong className="text-primary">30+ years</strong></td>
                  <td className="p-4 bg-red-50"><span className="text-red-600">8-10 years</span></td>
                  <td className="p-4 bg-orange-50"><span className="text-orange-600">~12 years</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Rust/Corrosion</td>
                  <td className="p-4 bg-green-50"><strong className="text-primary">None</strong></td>
                  <td className="p-4 bg-red-50"><span className="text-red-600">High risk</span></td>
                  <td className="p-4 bg-orange-50"><span className="text-orange-600">Moderate</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Heat Insulation</td>
                  <td className="p-4 bg-green-50"><strong className="text-primary">5-7°C cooler</strong></td>
                  <td className="p-4 bg-red-50"><span className="text-red-600">Traps heat</span></td>
                  <td className="p-4 bg-orange-50"><span className="text-orange-600">Minimal</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Noise During Rain</td>
                  <td className="p-4 bg-green-50"><strong className="text-primary">Silent</strong></td>
                  <td className="p-4 bg-red-50"><span className="text-red-600">Very loud</span></td>
                  <td className="p-4 bg-orange-50"><span className="text-orange-600">Loud</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Maintenance</td>
                  <td className="p-4 bg-green-50"><strong className="text-primary">Zero</strong></td>
                  <td className="p-4 bg-red-50"><span className="text-red-600">Repaint every 4 years</span></td>
                  <td className="p-4 bg-orange-50"><span className="text-orange-600">Regular repairs</span></td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Weight</td>
                  <td className="p-4 bg-green-50"><strong className="text-primary">Lightweight</strong></td>
                  <td className="p-4 bg-red-50"><span className="text-red-600">Heavy</span></td>
                  <td className="p-4 bg-orange-50"><span className="text-orange-600">Heavy</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-l-4 border-primary">
            <p className="text-lg text-gray-700">
              <strong className="text-primary">Bottom Line:</strong> GUTDACH truly delivers a roofing revolution made for India — 
              no repainting, no noise, no heat, and no rust!
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Mission</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-4 text-primary">What We Believe</h3>
                <p className="text-gray-700 mb-6 text-lg">
                  At N88E Build Pvt. Ltd., we believe that good roofing should be <strong>affordable, intelligent, 
                  and built to endure India's toughest weather</strong>.
                </p>
                <p className="text-gray-700 mb-6">
                  Our products not only outperform traditional materials like GI, fiber cement, clay, 
                  and asphalt roofing, but also align with the Indian customer's sentiment:
                </p>
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-xl text-primary">
                    "The best product at the best price"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3 mb-4">
                  <Factory className="h-8 w-8 text-primary flex-shrink-0" />
                  <h3 className="text-2xl text-primary">Proudly Made in Northeast India</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  With our factory and head office in <strong>Guwahati, Assam</strong>, we are proud to bring 
                  world-class innovation to the heart of Northeast India.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        <strong>Address:</strong><br />
                        Kamrup, Guwahati, Assam<br />
                        India - 781131
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Offering roofing that is <strong>stronger, lighter, quieter, cooler, and longer-lasting</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <img 
              src={gutdachLogo} 
              alt="GUTDACH" 
              className="h-20 w-auto mx-auto mb-6 brightness-0 invert"
            />
          </div>
          <h2 className="text-3xl mb-6">
            We're Not Just Making Roofs
          </h2>
          <p className="text-2xl text-green-100 mb-4">
            We're Delivering Climate-Adaptive Roofing for Northeast India
          </p>
          <div className="mt-8 pt-8 border-t border-green-400/30">
            <p className="text-green-100 text-lg">
              Founded July 2025 | Guwahati, Assam | Serving All of India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}