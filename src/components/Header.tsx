import { useState } from "react";
import { Menu, X, Phone, Mail, Search, ShoppingCart, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import RedLogicLogo from "./RedLogicLogo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-white border-b py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground hidden lg:inline">Welcome to IT Solutions & Services WordPress Theme</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:contact@redlogic.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">contact@redlogic.com</span>
            </a>
            <span className="text-muted-foreground hidden md:inline">Mon - Sat: 8.00 am - 1.00 pm</span>
            <div className="flex items-center gap-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-3 h-3" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-3 h-3" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-3 h-3" /></a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <RedLogicLogo size="xl" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#home" className="font-medium text-dark-navy hover:text-primary transition-colors">Home</a>
              <a href="#about" className="font-medium text-dark-navy hover:text-primary transition-colors">About</a>
              <a href="#" className="font-medium text-dark-navy hover:text-primary transition-colors">Pages</a>
              <a href="#services" className="font-medium text-dark-navy hover:text-primary transition-colors">Services</a>
              <a href="#projects" className="font-medium text-dark-navy hover:text-primary transition-colors">Projects</a>
              <a href="#" className="font-medium text-dark-navy hover:text-primary transition-colors">Blog</a>
              <a href="#contact" onClick={handleContactClick} className="font-medium text-dark-navy hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* Right Actions */}
            {/* <div className="hidden lg:flex items-center gap-4">
              <button className="p-2 hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 ml-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                {/* <div className="text-sm">
                  <div className="text-muted-foreground text-xs">Call Anytime</div>
                  <div className="font-bold text-dark-navy">+ 88 ( 9800 ) 6802</div>
                </div> 
              </div>
            </div> */}

            {/* Mobile Menu Button */}
            {/* <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button> */}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-6 flex flex-col gap-4">
              <a href="#home" className="font-medium hover:text-primary transition-colors py-2">Home</a>
              <a href="#about" className="font-medium hover:text-primary transition-colors py-2">About</a>
              <a href="#services" className="font-medium hover:text-primary transition-colors py-2">Services</a>
              <a href="#projects" className="font-medium hover:text-primary transition-colors py-2">Projects</a>
              <a href="#team" className="font-medium hover:text-primary transition-colors py-2">Team</a>
              <a href="#contact" className="font-medium hover:text-primary transition-colors py-2">Contact</a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
