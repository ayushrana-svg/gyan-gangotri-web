import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Gyan Gangotri Niketan</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Rooted in Values, Rising with Knowledge
            </p>
            <p className="text-sm text-primary-foreground/80">
              A premier CBSE-affiliated institution committed to excellence in education and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-secondary transition-[var(--transition-smooth)]">About Us</Link></li>
              <li><Link to="/academics" className="text-sm hover:text-secondary transition-[var(--transition-smooth)]">Academics</Link></li>
              <li><Link to="/admissions" className="text-sm hover:text-secondary transition-[var(--transition-smooth)]">Admissions</Link></li>
              <li><Link to="/campus-life" className="text-sm hover:text-secondary transition-[var(--transition-smooth)]">Campus Life</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-secondary transition-[var(--transition-smooth)]">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Education Street, Knowledge City, India - 110001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-sm">+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-sm">info@gyangangotri.edu.in</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-3 mt-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-[var(--transition-smooth)]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-[var(--transition-smooth)]">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-[var(--transition-smooth)]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-secondary hover:text-secondary-foreground transition-[var(--transition-smooth)]">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
            <form className="space-y-3">
              <Input 
                placeholder="Your Name" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={3}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="cta" size="sm" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2025 Gyan Gangotri Niketan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
