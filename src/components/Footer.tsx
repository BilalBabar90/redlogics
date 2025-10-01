import { Facebook, Twitter, Youtube, Instagram, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import RedLogicLogo from "./RedLogicLogo";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[hsl(210,11%,15%)] text-white relative overflow-hidden">
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 20h60M20 80h60M20 20v60M80 20v60" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              <circle cx="80" cy="20" r="3" fill="currentColor"/>
              <circle cx="20" cy="80" r="3" fill="currentColor"/>
              <circle cx="80" cy="80" r="3" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center mb-6">
              <RedLogicLogo size="xl" />
            </a>
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              We work with a passion of taking challenges and creating new ones in technology consulting sector.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-primary rounded flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-primary rounded flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-primary rounded flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-primary rounded flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors text-sm">About us</a></li>
              <li><a href="#team" className="text-white/70 hover:text-primary transition-colors text-sm">Meet Our Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition-colors text-sm">News & Media</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-primary transition-colors text-sm">Our Projects</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors text-sm">Contacts</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-6 text-sm">
              Signup for our latest news & articles. We won't give you spam mails.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-primary text-sm"
              />
              <Button className="bg-primary hover:bg-primary/90 px-4 rounded">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <a href="tel:+447802626922" className="text-white/70 hover:text-primary transition-colors text-sm">
                  +44 7802 626922
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:contact@redlogic.com" className="text-white/70 hover:text-primary transition-colors text-sm">
                  contact@redlogic.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/70 text-sm">
                  276-278 Warwick Road<br/>Sparkhill, Birmingham, B11 2NU
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; Copyright 2024 by RedLogic Consulting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
