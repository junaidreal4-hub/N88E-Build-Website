import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Alert, AlertDescription } from "../ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Building2, User } from "lucide-react";
import { submitToGoogleSheets } from "../../utils/formSubmit";


export function ContactPage() {
  const [businessFormData, setBusinessFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    projectSize: "",
    message: ""
  });
  
  const [personalFormData, setPersonalFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);


  const handleBusinessInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePersonalInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleBusinessSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitToGoogleSheets({
        type: 'Business',
        ...businessFormData
      });
      
      if (result.success) {
        setSubmitStatus("success");
        setBusinessFormData({ 
          companyName: "", 
          contactPerson: "", 
          email: "", 
          phone: "", 
          industry: "", 
          projectSize: "", 
          message: "" 
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handlePersonalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitToGoogleSheets({
        type: 'Personal',
        ...personalFormData
      });
      
      if (result.success) {
        setSubmitStatus("success");
        setPersonalFormData({ 
          name: "", 
          email: "", 
          phone: "", 
          message: "" 
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Kamrup, Guwahati", "Assam, India, 781131"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 88370 93861"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@n88ebuild.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"]
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for quotes, technical support, or any questions 
            about our ASA uPVC roofing solutions.
          </p>
        </div>
      </section>


      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    detail && <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Choose the inquiry type and fill out the form below.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus && (
                    <Alert className={`mb-6 ${submitStatus === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
                      <div className="flex items-center">
                        {submitStatus === "success" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-red-600" />
                        )}
                        <AlertDescription className="ml-2">
                          {submitStatus === "success" 
                            ? "Thank you for your message! We'll get back to you soon."
                            : "There was an error sending your message. Please try again."
                          }
                        </AlertDescription>
                      </div>
                    </Alert>
                  )}


                  <Tabs defaultValue="business" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="business" className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Business Inquiry
                      </TabsTrigger>
                      <TabsTrigger value="personal" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Personal Inquiry
                      </TabsTrigger>
                    </TabsList>


                    {/* Business Form */}
                    <TabsContent value="business">
                      <form onSubmit={handleBusinessSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name *</Label>
                            <Input
                              id="companyName"
                              name="companyName"
                              type="text"
                              required
                              value={businessFormData.companyName}
                              onChange={handleBusinessInputChange}
                              placeholder="Your company name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactPerson">Contact Person *</Label>
                            <Input
                              id="contactPerson"
                              name="contactPerson"
                              type="text"
                              required
                              value={businessFormData.contactPerson}
                              onChange={handleBusinessInputChange}
                              placeholder="Your full name"
                            />
                          </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="business-email">Email Address *</Label>
                            <Input
                              id="business-email"
                              name="email"
                              type="email"
                              required
                              value={businessFormData.email}
                              onChange={handleBusinessInputChange}
                              placeholder="company@example.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="business-phone">Phone Number *</Label>
                            <Input
                              id="business-phone"
                              name="phone"
                              type="tel"
                              required
                              value={businessFormData.phone}
                              onChange={handleBusinessInputChange}
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="industry">Industry Type *</Label>
                            <Select
                              value={businessFormData.industry}
                              onValueChange={(value) => setBusinessFormData(prev => ({ ...prev, industry: value }))}
                            >
                              <SelectTrigger id="industry">
                                <SelectValue placeholder="Select industry" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="construction">Construction</SelectItem>
                                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                <SelectItem value="agriculture">Agriculture</SelectItem>
                                <SelectItem value="warehousing">Warehousing & Logistics</SelectItem>
                                <SelectItem value="commercial">Commercial Real Estate</SelectItem>
                                <SelectItem value="residential">Residential Development</SelectItem>
                                <SelectItem value="government">Government/Defense</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="projectSize">Estimated Project Size *</Label>
                            <Select
                              value={businessFormData.projectSize}
                              onValueChange={(value) => setBusinessFormData(prev => ({ ...prev, projectSize: value }))}
                            >
                              <SelectTrigger id="projectSize">
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="small">Small (&lt; 1000 sq ft)</SelectItem>
                                <SelectItem value="medium">Medium (1000-5000 sq ft)</SelectItem>
                                <SelectItem value="large">Large (5000-10000 sq ft)</SelectItem>
                                <SelectItem value="enterprise">Enterprise (&gt; 10000 sq ft)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="business-message">Project Details *</Label>
                          <Textarea
                            id="business-message"
                            name="message"
                            required
                            value={businessFormData.message}
                            onChange={handleBusinessInputChange}
                            placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                            rows={6}
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Submit Business Inquiry"}
                        </Button>
                      </form>
                    </TabsContent>


                    {/* Personal Form */}
                    <TabsContent value="personal">
                      <form onSubmit={handlePersonalSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="personal-name">Full Name *</Label>
                            <Input
                              id="personal-name"
                              name="name"
                              type="text"
                              required
                              value={personalFormData.name}
                              onChange={handlePersonalInputChange}
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="personal-phone">Phone Number *</Label>
                            <Input
                              id="personal-phone"
                              name="phone"
                              type="tel"
                              required
                              value={personalFormData.phone}
                              onChange={handlePersonalInputChange}
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="personal-email">Email Address *</Label>
                          <Input
                            id="personal-email"
                            name="email"
                            type="email"
                            required
                            value={personalFormData.email}
                            onChange={handlePersonalInputChange}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="personal-message">Message *</Label>
                          <Textarea
                            id="personal-message"
                            name="message"
                            required
                            value={personalFormData.message}
                            onChange={handlePersonalInputChange}
                            placeholder="Tell us about your requirements, questions, or how we can help..."
                            rows={6}
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>


            {/* Map Section */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <p className="text-gray-600">
                    Visit our facility to see our products and meet our team.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p>Interactive Map</p>
                      <p className="text-sm">
                        Kamrup, Guwahati<br />
                        Assam, India, 781131
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="mb-2">Directions</h4>
                      <p className="text-gray-600 text-sm">
                        Located in Kamrup, Guwahati, Assam, easily accessible 
                        from the city center via major highways.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="mb-2">Parking</h4>
                      <p className="text-gray-600 text-sm">
                        Free parking available on-site for all visitors and customers.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-green-100 mb-8">
            Our technical support team is available during business hours to help with urgent inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91 88370 93861
            </Button>
            <Button size="lg" variant="outline" className="border-white text-[rgb(17,43,60)] hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              Email Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
