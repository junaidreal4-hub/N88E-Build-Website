import image_ec42eb8d61cff3dcf971881c4d373cb2ae3199ae from '../../assets/GUTDACH_grey_NE.png'
import image_a051e033dbba6dfa831709ee5dd33fc9cbef575f from '../../assets/Julius.png';
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { GraduationCap, Lightbulb, Factory, Target, MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import gutdachLogo from '../../assets/GUTDACH_logo.png';

export function FounderPage() {
  const journey = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Pursued MBA in Germany with focus on sustainable business solutions"
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation",
      description: "Thesis on affordable roofing solutions approved, focusing on climate-smart materials"
    },
    {
      icon: Target,
      title: "Vision for Northeast India",
      description: "Identified critical gap in Northeast India's roofing market during extreme weather conditions"
    },
    {
      icon: Factory,
      title: "N88E Build Pvt. Ltd. Founded",
      description: "July 2025 - Turned academic vision into reality in Guwahati, Assam"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white text-primary">About the Founder</Badge>
            <h1 className="text-4xl lg:text-5xl mb-6">
              Julius Longjam
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-4">
              Founder & CEO, N88E Build Pvt. Ltd.
            </p>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Turning Academic Research into Revolutionary Roofing Solutions for India
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl text-primary mb-6">From Research to Revolution</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  <strong>Julius Longjam</strong>, the founder of N88E Build Pvt. Ltd., had his thesis on 
                  <strong> affordable roofing solutions</strong> approved by his university in Germany 
                  while pursuing his MBA.
                </p>
                <p className="text-lg">
                  His research focused on developing <strong>cost-effective, durable, and climate-smart roofing systems</strong> for 
                  regions like Northeast India, where conventional materials such as GI sheets struggle to withstand heavy monsoons, 
                  humidity, and extreme temperature shifts.
                </p>
                <p className="text-lg">
                  During his studies, Julius identified a critical challenge millions of households across developing nations 
                  rely on roofing materials unsuited to their climate, resulting in heat stress, frequent leaks, and costly maintenance.
                </p>
                <p className="text-lg">
                  Motivated to create change, Julius transformed his academic vision into reality by founding 
                  <strong> N88E Build Pvt. Ltd. in July 2025</strong>, establishing its head office in 
                  <strong> Guwahati, Assam</strong>, and building a robust distribution network across Northeast India to deliver 
                  next-generation ASA uPVC roofing under the brand <strong>"GUTDACH."</strong>
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImageWithFallback
                src={image_a051e033dbba6dfa831709ee5dd33fc9cbef575f}
                alt="Julius Longjam - Founder of N88E Build Pvt. Ltd."
                className="rounded-lg shadow-xl w-full h-96 object-cover object-top"
              />
              <p className="text-center text-gray-600 mt-4 italic">
                Julius Longjam - Founder & CEO, N88E Build Pvt. Ltd.
              </p>
            </div>
          </div>

          {/* Mission Quote */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary">
              <CardContent className="p-8">
                <p className="text-2xl text-gray-700 italic mb-4 text-center">
                  “My mission is simple – to provide better, longer-lasting, and affordable roofing solutions that truly make sense for the people and climate of Northeast India.”
"
                </p>
                <p className="text-center text-primary text-lg">
                  <strong>– — Julius Longjam, Founder & CEO, N88E Build Pvt. Ltd.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">The Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From academic thesis to founding a revolutionary roofing company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg mb-3 text-primary">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Academic Background & Research</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Julius's groundbreaking research in Germany laid the foundation for N88E Build Pvt. Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl text-primary mb-2">MBA - Germany</h3>
                    <p className="text-gray-600">
                      Specialized in sustainable business models and innovative solutions for developing markets
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Thesis Title</p>
                  <p className="text-gray-700">
                    <strong>Affordable Roofing Solutions for Climate-Challenged Regions</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl text-primary mb-2">Research Focus</h3>
                    <p className="text-gray-600">
                      Identifying the failures of traditional roofing materials in extreme weather conditions
                    </p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Cost-effectiveness in developing markets</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Climate adaptation and durability</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Sustainable material innovation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision for India */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Why Northeast India?Why Now?</h2>
              <div className="space-y-4 text-green-100 text-lg">
                <p>
                  Julius recognized that Northeast India, with its diverse and challenging terrain from humid valleys and heavy monsoon belts to hilly and high-altitude regions needed roofing solutions built for resilience and longevity. Homes and small industries here face:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">•</span>
                    <span>Relentless rainfall and high humidity that weaken traditional materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">•</span>
                    <span>Intense summer heat and UV exposure in the plains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">•</span>
                    <span>Strong winds and frequent storms in hilly and border areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">•</span>
                    <span>Difficult logistics and high replacement costs due to limited infrastructure</span>
                  </li>
                </ul>
                <p>
                  His research showed that traditional GI sheets and fiber cement roofs often corrode, leak, or break within a few years, leaving thousands of households vulnerable.
This insight led him to develop GUTDACH – ASA uPVC roofing, engineered specifically for the demanding climate of Northeast India delivering durability, zero maintenance, and long-term affordability for every family and builder in the region.
                </p>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src={image_ec42eb8d61cff3dcf971881c4d373cb2ae3199ae}
                alt="India's Climate Diversity"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center">
                        <Factory className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-2xl text-primary">N88E Build Pvt. Ltd. HQ</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            <strong>Location:</strong><br />
                            Kamrup, Guwahati<br />
                            Assam, India - 781131
                          </p>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-gray-700">
                          <strong className="text-primary">Founded:</strong> July 2025
                        </p>
                      </div>
                      <p className="text-gray-600 italic">
                        Bringing world-class roofing innovation to the heart of Northeast India
                      </p>
                    </div>
                  </div>
                  <div>
                    <img 
                      src={gutdachLogo} 
                      alt="GUTDACH" 
                      className="h-32 w-auto mx-auto mb-6"
                    />
                    <p className="text-center text-gray-600">
                      GUTDACH - The result of Julius's vision to perfect roofing for India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6 text-primary">
            A Vision Realized
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            From an MBA thesis in Germany to revolutionizing roofing in India, 
            Julius Longjam's journey exemplifies how academic research can transform 
            into real-world solutions that improve millions of lives.
          </p>
          <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary">
            <p className="text-lg text-gray-700">
              Today, N88E Build Pvt. Ltd. stands as a testament to the power of combining 
              <strong> academic rigor</strong>, <strong>practical innovation</strong>, and 
              <strong> deep understanding of local needs</strong> to create products that 
              truly make a difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}