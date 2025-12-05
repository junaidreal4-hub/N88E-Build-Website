import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  Shield, 
  Award, 
  CheckCircle, 
  FileText, 
  Globe, 
  Flame, 
  Sun, 
  Zap,
  Droplets,
  Wind,
  Thermometer,
  Factory
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  standard: string;
  description: string;
  category: "Quality" | "Safety" | "Environmental" | "Performance";
  status: "Certified" | "In Progress" | "Renewal Due";
  validUntil: string;
  icon: React.ReactNode;
}

const certificates: Certificate[] = [
  {
    id: "iso-9001",
    title: "Quality Management System",
    standard: "ISO 9001:2015",
    description: "International standard for quality management systems ensuring consistent product quality and customer satisfaction.",
    category: "Quality",
    status: "Certified",
    validUntil: "2026-12-31",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: "iso-14001",
    title: "Environmental Management",
    standard: "ISO 14001:2015",
    description: "Environmental management system certification ensuring sustainable manufacturing practices and minimal environmental impact.",
    category: "Environmental",
    status: "Certified",
    validUntil: "2026-06-30",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    id: "fire-resistance",
    title: "Fire Resistance Standard",
    standard: "ASTM E84 Class A",
    description: "Fire resistance and flame spread rating certification ensuring superior fire safety performance of ASA uPVC materials.",
    category: "Safety",
    status: "Certified",
    validUntil: "2027-03-15",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    id: "uv-resistance",
    title: "UV Resistance Certification",
    standard: "ASTM G154 / ISO 4892",
    description: "Ultraviolet radiation resistance testing certification ensuring long-term durability under direct sunlight exposure.",
    category: "Performance",
    status: "Certified",
    validUntil: "2026-09-20",
    icon: <Sun className="h-6 w-6" />,
  },
  {
    id: "impact-resistance",
    title: "Impact Resistance Standard",
    standard: "ASTM D256 / ISO 179",
    description: "Impact strength and durability testing certification ensuring resistance to mechanical damage and extreme weather conditions.",
    category: "Performance",
    status: "Certified",
    validUntil: "2026-11-10",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    id: "weathering",
    title: "Weathering Performance",
    standard: "ASTM D1435 / ISO 877",
    description: "Accelerated weathering test certification ensuring long-term performance under various climatic conditions and temperature cycles.",
    category: "Performance",
    status: "Certified",
    validUntil: "2027-01-25",
    icon: <Wind className="h-6 w-6" />,
  },
  {
    id: "chemical-resistance",
    title: "Chemical Resistance Standard",
    standard: "ASTM D543 / ISO 175",
    description: "Chemical resistance testing certification ensuring durability against acids, alkalis, and other chemical exposures.",
    category: "Performance",
    status: "Certified",
    validUntil: "2026-08-15",
    icon: <Droplets className="h-6 w-6" />,
  },
  {
    id: "thermal-performance",
    title: "Thermal Performance Standard",
    standard: "ASTM C177 / ISO 8301",
    description: "Thermal conductivity and insulation performance certification ensuring excellent energy efficiency and temperature control.",
    category: "Performance",
    status: "Certified",
    validUntil: "2026-12-05",
    icon: <Thermometer className="h-6 w-6" />,
  },
  {
    id: "bis-certification",
    title: "Bureau of Indian Standards",
    standard: "BIS IS 13206:2017",
    description: "Indian Standards certification for plastic sheets ensuring compliance with national quality and safety requirements.",
    category: "Quality",
    status: "Certified",
    validUntil: "2027-02-28",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    id: "rohs-compliance",
    title: "RoHS Compliance",
    standard: "EU RoHS Directive 2011/65/EU",
    description: "Restriction of Hazardous Substances compliance ensuring products are free from harmful materials and safe for environment.",
    category: "Environmental",
    status: "Certified",
    validUntil: "2026-10-12",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    id: "factory-certification",
    title: "Manufacturing Excellence",
    standard: "Factory Audit ISO 45001:2018",
    description: "Occupational health and safety management certification ensuring safe and ethical manufacturing practices.",
    category: "Safety",
    status: "Certified",
    validUntil: "2026-07-18",
    icon: <Factory className="h-6 w-6" />,
  },
  {
    id: "green-building",
    title: "Green Building Certification",
    standard: "LEED v4.1 / GRIHA",
    description: "Green building material certification contributing to sustainable construction and environmental credits in green building projects.",
    category: "Environmental",
    status: "In Progress",
    validUntil: "2027-04-30",
    icon: <Globe className="h-6 w-6" />,
  }
];

const getStatusColor = (status: Certificate['status']) => {
  switch (status) {
    case "Certified":
      return "bg-green-100 text-green-800 border-green-200";
    case "In Progress":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Renewal Due":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getCategoryColor = (category: Certificate['category']) => {
  switch (category) {
    case "Quality":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Safety":
      return "bg-red-100 text-red-800 border-red-200";
    case "Environmental":
      return "bg-green-100 text-green-800 border-green-200";
    case "Performance":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function CertificatePage() {
  const categorizedCertificates = {
    Quality: certificates.filter(cert => cert.category === "Quality"),
    Safety: certificates.filter(cert => cert.category === "Safety"),
    Environmental: certificates.filter(cert => cert.category === "Environmental"),
    Performance: certificates.filter(cert => cert.category === "Performance"),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              <Award className="h-10 w-10" />
            </div>
            <h1 className="mb-6">GUTDACH Certifications</h1>
            <p className="text-xl text-white/90 mb-8">
              Our ASA uPVC sheets meet the highest international standards for quality, safety, and performance. 
              Every GUTDACH product is rigorously tested and certified to ensure superior reliability and durability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <CheckCircle className="h-4 w-4 mr-2" />
                {certificates.filter(c => c.status === "Certified").length} Active Certifications
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <FileText className="h-4 w-4 mr-2" />
                11 International Standards
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                <Globe className="h-4 w-4 mr-2" />
                Made in Northeast India
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {Object.entries(categorizedCertificates).map(([category, certs]) => (
            <div key={category} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                <h2 className="text-primary">{category} Certifications</h2>
                <Badge variant="outline" className={getCategoryColor(category as Certificate['category'])}>
                  {certs.length} Standards
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((certificate) => (
                  <Card key={certificate.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                          {certificate.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <CardTitle className="group-hover:text-primary transition-colors">
                              {certificate.title}
                            </CardTitle>
                            <Badge className={getStatusColor(certificate.status)}>
                              {certificate.status}
                            </Badge>
                          </div>
                          <CardDescription>
                            <span className="font-medium text-primary">{certificate.standard}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {certificate.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <Badge variant="outline" className={getCategoryColor(certificate.category)}>
                          {certificate.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Valid until {new Date(certificate.validUntil).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At N88E Build Pvt. Ltd., we believe that superior quality starts with rigorous testing and certification. 
              Our GUTDACH ASA uPVC products undergo comprehensive evaluation by internationally recognized 
              testing laboratories to ensure they meet and exceed industry standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Every batch tested and certified to international standards
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2">Global Standards</h3>
                <p className="text-muted-foreground">
                  Compliance with ISO, ASTM, BIS, and other international norms
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2">Continuous Monitoring</h3>
                <p className="text-muted-foreground">
                  Regular audits and renewals to maintain certification validity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}