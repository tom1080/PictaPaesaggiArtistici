import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { scrollToElement } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNavClick = (elementId: string, event: React.MouseEvent) => {
    event.preventDefault();
    scrollToElement(elementId);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    // You could show a toast notification here
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Picta Paesaggi Culturali</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Organizzazione no profit dedicata alla promozione dell'arte astratta e alla valorizzazione culturale del territorio.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Link Utili</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick('home', e)}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#eventi" 
                  onClick={(e) => handleNavClick('eventi', e)}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Eventi
                </a>
              </li>
              <li>
                <a 
                  href="#contatti" 
                  onClick={(e) => handleNavClick('contatti', e)}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-secondary-foreground/80 mb-4 text-sm">
              Rimani aggiornato sui nostri eventi e iniziative.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <Input 
                type="email" 
                placeholder="La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-r-none bg-background text-foreground border-r-0 focus:ring-2 focus:ring-accent"
                required
              />
              <Button 
                type="submit"
                className="bg-primary hover:bg-primary/90 rounded-l-none px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/80">
          <p>&copy; 2024 Picta Paesaggi Culturali. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
