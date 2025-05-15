import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [, setLocation] = useLocation();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Here we would typically send the email to a backend service
    toast({
      title: "Success",
      description: "You've been subscribed to our newsletter!",
    });
    
    setEmail("");
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setLocation(href);
    }
  };

  return (
    <footer className="bg-[#2B2D42] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-6">
              THIRAN <span className="text-accent">2025</span>
            </h3>
            <p className="text-gray-300 mb-8">
              South India's largest techno-cultural-sports festival organized by Sri Eshwar College of Engineering.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent/20 hover:text-accent rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent/20 hover:text-accent rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent/20 hover:text-accent rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-accent/20 hover:text-accent rounded-full"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Events", href: "#events" },
                { name: "Schedule", href: "#schedule" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Sri Eshwar College of Engineering, Kinathukadavu, Coimbatore - 641202
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@thiran.in" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@thiran.in
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates about Thiran 2025.
            </p>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 px-3">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 Thiran 2026 | Sri Eshwar College of Engineering. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
