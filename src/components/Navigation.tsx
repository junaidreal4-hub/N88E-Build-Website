import n88eLogo from "../assets/N88E_logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  end?: boolean; // important for "/" so it doesn't stay active on every page
};

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { to: "/", label: "Home", end: true },
    { to: "/products", label: "Products" },
    { to: "/certificates", label: "Certificates" },
    { to: "/about", label: "About Us" },
    { to: "/founder", label: "Founder" },
    { to: "/contact", label: "Contact" },
  ];

  const linkBase =
    "px-3 py-2 rounded-md transition-colors";

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${
      isActive
        ? "bg-primary text-white"
        : "text-gray-600 hover:text-primary hover:bg-gray-50"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              end
              className="flex flex-col items-start hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                src={n88eLogo}
                alt="N88E Build Pvt. Ltd. - Climate-Adaptive Roofing for Northeast India"
                className="h-20 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={linkClassName}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md w-full text-left transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
