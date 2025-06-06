import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract artistic background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Artistic geometric elements */}
      <div className="absolute top-20 left-16 w-40 h-40 gradient-artistic rounded-full opacity-25 animate-pulse-slow blur-sm"></div>
      <div className="absolute bottom-32 right-24 w-32 h-32 bg-accent transform rotate-45 opacity-40 animate-float"></div>
      <div className="absolute top-1/3 left-1/5 w-20 h-60 bg-secondary opacity-20 transform -rotate-12 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-primary opacity-30 transform rotate-12 rounded-lg"></div>
      <div className="absolute top-3/4 right-1/4 w-16 h-40 bg-accent opacity-25 transform rotate-45 rounded-full"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/5 to-muted/10"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="block text-secondary text-shadow">Arte Astratta</span>
          <span className="block text-primary text-shadow">Paesaggi Culturali</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Un'organizzazione no profit dedicata alla promozione dell'arte astratta contemporanea e alla valorizzazione dei paesaggi culturali attraverso espressioni artistiche innovative.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => handleScrollToSection('eventi')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium transition-all duration-300 transform hover:scale-105"
          >
            Scopri gli Eventi
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleScrollToSection('contatti')}
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 text-base font-medium transition-all duration-300"
          >
            Contattaci
          </Button>
        </div>
      </div>
    </section>
  );
}
