import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Event } from "@shared/schema";

export default function EventsSection() {
  const [, setLocation] = useLocation();
  const { data: events, isLoading, error } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const handleEventClick = (eventId: number) => {
    setLocation(`/evento/${eventId}`);
  };

  if (error) {
    return (
      <section id="eventi" className="py-16 sm:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Eventi e Mostre</h2>
            <p className="text-destructive">Errore nel caricamento degli eventi. Riprova più tardi.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="eventi" className="py-16 sm:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Eventi e Mostre</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scopri i nostri prossimi eventi dedicati all'arte astratta e partecipa alle nostre iniziative culturali.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events?.map((event, index) => {
              const gradients = [
                "from-primary to-secondary",
                "from-accent to-primary", 
                "from-secondary to-accent"
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <Card 
                  key={event.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleEventClick(event.id)}
                >
                  <div className={`relative h-48 bg-gradient-to-br ${gradient}`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 text-foreground p-2 rounded-full">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary hover:text-primary/80"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEventClick(event.id);
                        }}
                      >
                        Dettagli
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
