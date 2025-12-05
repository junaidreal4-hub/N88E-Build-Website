import heroimage from '../../assets/Building_GUTDACH.png';
import gutdachTileImage from '../../assets/GUTDACH_roofing_tile_grey1.png';
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Shield, Thermometer, Volume2, Calendar, ArrowRight, Award, Building2, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { RoofingMaterialsRadarChart } from "../RadarChart";
import gutdachLogo from '../../assets/GUTDACH_logo.png';
import gutwallLogo from '../../assets/GUTWALL_logo.png';
import peterLogo from '../../assets/PETER_logo.png';
import heroRoofImage from '../../assets/Building_GUTDACH.png';
import gutwallslideImage from '../../assets/GUTWALL_plainsheet_catalog.png';
import gutdach01Image from '../../assets/GUTDACH_roofing_tile_grey_roof.png';
import peterImage from '../../assets/PETER.png';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useEffect, useRef } from "react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const carouselApiRef = useRef<any>(null);

  // Auto-play carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselApiRef.current) {
        carouselApiRef.current.scrollNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "30+ Year Lifespan",
      description: "3x longer than GI sheets and built to last generations"
    },
    {
      icon: Thermometer,
      title: "5-7°C Cooler",
      description: "Thermal insulation keeps your interiors comfortable"
    },
    {
      icon: Volume2,
      title: "Silent & Peaceful",
      description: "Sound-absorbing technology eliminates rain noise"
    },
    {
      icon: Calendar,
      title: "Zero Maintenance",
      description: "No repainting, no rust, no repairs ever needed"
    }
  ];

  const certificates = [
    { title: "ISO 9001:2015", subtitle: "Quality Management" },
    { title: "ISO 14001:2015", subtitle: "Environmental" },
    { title: "ASTM E84 Class A", subtitle: "Fire Resistance" },
    { title: "ASTM G154", subtitle: "UV Resistance" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Climate-Adaptive Roofing for Northeast India
              </h1>
              <p className="text-xl text-green-100 mb-8">
                N88E Build Pvt. Ltd. delivers ASA uPVC roofing solutions engineered for India's extreme climate. 
                30+ year lifespan, rust-proof, 5-7°C cooler and zero maintenance the roofing revolution India deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => onNavigate("products")}
                  className="text-lg"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate("contact")}
                  className="text-lg border-white text-[rgb(17,43,60)] hover:bg-white hover:text-primary"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={heroRoofImage}
                alt="ASA uPVC Products"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Product Range</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our range of high-quality uPVC solutions for roofing and interior applications, designed for Northeast India's unique climate.
            </p>
          </div>
          
          {/* Product Carousel */}
          <div className="max-w-4xl mx-auto mb-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={(api) => {
                carouselApiRef.current = api;
              }}
              className="w-full"
            >
              <CarouselContent>
                {/* GUTDACH */}
                <CarouselItem>
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="relative mb-6 overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={heroimage}
                            alt="GUTDACH ASA uPVC Tile Roofing"
                            className="w-full h-80 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex items-center justify-center mb-4">
                          <img 
                            src={gutdachLogo} 
                            alt="GUTDACH" 
                            className="h-12 w-auto"
                          />
                        </div>
                        <h3 className="text-2xl mb-4 text-primary">ASA uPVC Roofing Solution</h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                          Available in flat sheets and tile profiles. Perfect for residential, commercial, and industrial applications.
                        </p>
                        <Button 
                          onClick={() => onNavigate("gutdach")}
                          size="lg"
                          className="w-full max-w-xs mx-auto"
                        >
                          Explore Details
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* GUTWALL */}
                <CarouselItem>
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="relative mb-6 overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={gutwallslideImage}
                            alt="GUTWALL"
                            className="w-full h-80 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex items-center justify-center mb-4">
                          <img 
                            src={gutwallLogo} 
                            alt="GUTWALL" 
                            className="h-12 w-auto"
                          />
                        </div>
                        <h3 className="text-2xl mb-4 text-primary">uPVC Interior Partitions</h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                          Moisture-proof, termite-resistant interior partition sheets. Perfect for modern homes and offices in high-humidity regions.
                        </p>
                        <Button 
                          onClick={() => onNavigate("gutwall")}
                          size="lg"
                          className="w-full max-w-xs mx-auto"
                        >
                          Explore Details
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* P.E.T.E.R. */}
                <CarouselItem>
                  <Card className="border-2 border-primary/20">
                    <CardContent className="p-8">
                      <div className="text-center">
                        <div className="relative mb-6 overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={peterImage}
                            alt="P.E.T.E.R."
                            className="w-full h-80 object-cover rounded-lg"
                          />
                          <Badge className="absolute top-4 right-4 bg-yellow-500">
                            Coming Soon
                          </Badge>
                        </div>
                        <div className="flex items-center justify-center mb-4">
                          <img 
                            src={peterLogo} 
                            alt="P.E.T.E.R." 
                            className="h-12 w-auto"
                          />
                        </div>
                        <h3 className="text-2xl mb-4 text-primary">Military & Emergency Roofing</h3>
                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                          Rapid deployment modular roofing system for military operations and disaster relief. Revolutionary design coming soon.
                        </p>
                        <Button 
                          onClick={() => onNavigate("peter")}
                          size="lg"
                          variant="outline"
                          className="w-full max-w-xs mx-auto"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => onNavigate("products")}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Compare All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose GUTDACH?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Unlike traditional GI sheets that rust, trap heat, and require constant maintenance, 
              GUTDACH ASA uPVC roofing is engineered to outperform and outlast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Preview */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Founded July 2025</Badge>
              <h2 className="text-primary mb-6">About N88E Build Pvt. Ltd.</h2>
              <p className="text-gray-700 mb-4">
                Based in Kamrup, Guwahati, Assam, N88E Build Pvt. Ltd. is revolutionizing the Indian roofing industry 
                with cutting-edge ASA uPVC technology. We're committed to solving India's traditional roofing 
                problems with innovative, sustainable solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Our GUTDACH products are engineered specifically for India's extreme climate conditions, 
                offering unmatched durability, thermal efficiency, and zero maintenance requirements.
              </p>
              <div className="flex items-center gap-2 text-primary mb-6">
                <MapPin className="h-5 w-5" />
                <span>Proudly made in Northeast India</span>
              </div>
              <Button onClick={() => onNavigate("about")} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <Building2 className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="mb-2">30+ Years</h3>
                <p className="text-gray-600 text-sm">Product Lifespan</p>
              </Card>
              <Card className="text-center p-6">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="mb-2">Rust-Proof</h3>
                <p className="text-gray-600 text-sm">Forever Guaranteed</p>
              </Card>
              <Card className="text-center p-6">
                <Thermometer className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="mb-2">5-7°C</h3>
                <p className="text-gray-600 text-sm">Cooler Interiors</p>
              </Card>
              <Card className="text-center p-6">
                <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="mb-2">Zero</h3>
                <p className="text-gray-600 text-sm">Maintenance</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Preview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Certifications & Standards</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our products meet the highest international quality, safety, and performance standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="mb-1">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.subtitle}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              View all 12 certifications and quality standards
            </p>
            <Button onClick={() => onNavigate("certificates")} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Certificates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Radar Chart Comparison Section */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoofingMaterialsRadarChart />
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions or ready to transform your roofing? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="mb-2">Visit Us</h3>
              <p className="text-gray-600">Kamrup, Guwahati<br />Assam, India 781131</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Phone className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="mb-2">Call Us</h3>
              <p className="text-gray-600">+91 88370 93861</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="mb-2">Email Us</h3>
              <p className="text-gray-600">Contact via our form</p>
            </Card>
          </div>

          <div className="text-center">
            <Button onClick={() => onNavigate("contact")} size="lg" className="shadow-lg">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4">
            Ready to Experience Roofing That Lasts 30+ Years?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers across India. Get your personalized quote today.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => onNavigate("contact")}
            className="text-lg border-white text-[rgba(45,106,79,1)] hover:bg-white hover:text-secondary"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
