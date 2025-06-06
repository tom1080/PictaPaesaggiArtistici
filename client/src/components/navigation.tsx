import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (elementId: string, event: React.MouseEvent) => {
    event.preventDefault();
    scrollToElement(elementId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`bg-background/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-200 ${isScrolled ? 'shadow-lg border-b border-border/50' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-secondary">Picta Paesaggi Culturali</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick('home', e)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a 
                href="#eventi" 
                onClick={(e) => handleNavClick('eventi', e)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Eventi
              </a>
              <a 
                href="#contatti" 
                onClick={(e) => handleNavClick('contatti', e)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contatti
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick('home', e)}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a 
                href="#eventi" 
                onClick={(e) => handleNavClick('eventi', e)}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Eventi
              </a>
              <a 
                href="#contatti" 
                onClick={(e) => handleNavClick('contatti', e)}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contatti
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
