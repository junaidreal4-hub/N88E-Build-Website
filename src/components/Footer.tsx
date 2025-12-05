import { Facebook, Twitter, Users, Mail, Phone, MapPin } from "lucide-react";
import n88eLogo from '../assets/N88E_logo.png';
import gutdachLogo from '../assets/GUTDACH_logo.png';
import gutwallLogo from '../assets/GUTWALL_logo.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img 
                src={n88eLogo} 
                alt="N88E Build Pvt. Ltd. - Climate-Adaptive Roofing for Northeast India" 
                className="h-24 w-auto mb-4"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Climate-Adaptive Roofing for Northeast India. Founded July 2025 in Guwahati, Assam. 
              Delivering ASA uPVC roofing solutions with 30+ year lifespan, zero maintenance, and 5-7°C cooler interiors.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Users className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate("home")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("gutdach")}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <img 
                    src={gutdachLogo} 
                    alt="GUTDACH" 
                    className="h-4 w-auto mr-2 brightness-0 invert opacity-60"
                  />
                  GUTDACH
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("gutwall")}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <img 
                    src={gutwallLogo} 
                    alt="GUTWALL" 
                    className="h-4 w-auto mr-2 brightness-0 invert opacity-60"
                  />
                  GUTWALL
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("peter")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  P.E.T.E.R. (Coming Soon)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("certificates")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Certificates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("about")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("founder")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Founder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* GUTDACH Products */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={gutdachLogo} 
                alt="GUTDACH" 
                className="h-6 w-auto mr-2 brightness-0 invert"
              />
              <h4>Our Products</h4>
            </div>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate("gutdach")}
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  GUTDACH - ASA uPVC Roofing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("gutwall")}
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  GUTWALL - Interior Partitions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("peter")}
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  P.E.T.E.R. - Military Solution (Coming Soon)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+91 88370 93861</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">info@n88ebuild.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Kamrup, Guwahati<br />
                  Assam, India, 781131
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 N88E Build Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}