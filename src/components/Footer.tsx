import { Facebook, Twitter, Users, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import n88eLogo from "../assets/N88E_logo.png";
import gutdachLogo from "../assets/GUTDACH_logo.png";
import gutwallLogo from "../assets/GUTWALL_logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                <img
                  src={n88eLogo}
                  alt="N88E Build Pvt. Ltd. - Climate-Adaptive Roofing for Northeast India"
                  className="h-24 w-auto mb-4"
                />
              </Link>
            </div>

            <p className="text-gray-400 mb-4">
              Climate-Adaptive Roofing for Northeast India. Founded July 2025 in Guwahati, Assam.
              Delivering ASA uPVC roofing solutions with 30+ year lifespan, zero maintenance, and
              5-7°C cooler interiors.
            </p>

            <div className="flex space-x-4">
              {/* Replace these with real profile URLs when available */}
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Community"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/gutdach"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <img
                    src={gutdachLogo}
                    alt="GUTDACH"
                    className="h-4 w-auto mr-2 brightness-0 invert opacity-60"
                  />
                  GUTDACH
                </Link>
              </li>

              <li>
                <Link
                  to="/gutwall"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <img
                    src={gutwallLogo}
                    alt="GUTWALL"
                    className="h-4 w-auto mr-2 brightness-0 invert opacity-60"
                  />
                  GUTWALL
                </Link>
              </li>

              <li>
                <Link
                  to="/peter"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  P.E.T.E.R. (Coming Soon)
                </Link>
              </li>

              <li>
                <Link
                  to="/certificates"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Certificates
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/founder"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Founder
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
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
                <Link
                  to="/gutdach"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  GUTDACH - ASA uPVC Roofing
                </Link>
              </li>

              <li>
                <Link
                  to="/gutwall"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  GUTWALL - Interior Partitions
                </Link>
              </li>

              <li>
                <Link
                  to="/peter"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  P.E.T.E.R. - Military Solution (Coming Soon)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href="tel:+918837093861"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 88370 93861
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href="mailto:info@n88ebuild.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@n88ebuild.com
                </a>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Kamrup, Guwahati
                  <br />
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
