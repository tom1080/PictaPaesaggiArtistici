import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent transform rotate-45 opacity-30 animate-float"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-48 bg-secondary opacity-15 transform -rotate-12"></div>
      
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
