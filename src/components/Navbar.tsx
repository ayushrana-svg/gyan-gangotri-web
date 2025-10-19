import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Campus Life", path: "/campus-life" },
    { name: "News & Events", path: "/news-events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--primary-light)))] rounded-full flex items-center justify-center shadow-[var(--shadow-elegant)] group-hover:scale-110 transition-[var(--transition-smooth)]">
              <span className="text-2xl font-bold text-primary-foreground">GG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Gyan Gangotri Niketan</h1>
              <p className="text-xs text-muted-foreground">CBSE Affiliated</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-[var(--transition-smooth)] ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cta" size="sm" asChild className="ml-4">
              <a href="#book-visit">Book a Visit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-[var(--transition-smooth)]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-[var(--transition-smooth)] ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="cta" size="sm" asChild className="w-full mt-4">
              <a href="#book-visit">Book a Visit</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
