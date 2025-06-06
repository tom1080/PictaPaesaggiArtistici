import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import type { Event } from "@shared/schema";

export default function EventDetail() {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  
  const { data: events, isLoading, error } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const event = events?.find(e => e.id === parseInt(id || ''));

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-4 w-1/4"></div>
            <div className="h-12 bg-muted rounded mb-6 w-3/4"></div>
            <div className="h-64 bg-muted rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-secondary mb-4">Evento non trovato</h1>
            <p className="text-muted-foreground mb-6">L'evento che stai cercando non esiste o è stato rimosso.</p>
            <Button onClick={() => setLocation('/')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const gradients = [
    "from-primary to-secondary",
    "from-accent to-primary", 
    "from-secondary to-accent"
  ];
  const gradient = gradients[event.id % gradients.length];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            onClick={() => setLocation('/')} 
            variant="ghost" 
            className="mb-6 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna agli Eventi
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Calendar className="w-3 h-3 mr-1" />
                {event.date}
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
                {event.title}
              </h1>
              
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-lg">{event.location}</span>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
            
            <div className="relative">
              <Card className="overflow-hidden shadow-2xl">
                <div className={`relative h-80 bg-gradient-to-br ${gradient}`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Calendar className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <div className="text-2xl font-bold">{event.date}</div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-50 blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-lg transform rotate-12 opacity-80"></div>
              <div className="absolute top-1/3 -left-8 w-8 h-32 bg-secondary rounded-full opacity-40 transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Dettagli dell'Evento</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Data</h4>
                      <p className="text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-lg mr-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Luogo</h4>
                      <p className="text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-accent text-accent-foreground p-3 rounded-lg mr-4">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Orario</h4>
                      <p className="text-muted-foreground">Da definire</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Partecipa</h3>
                <p className="text-muted-foreground mb-6">
                  Interessato a partecipare a questo evento? Contattaci per maggiori informazioni 
                  sulla registrazione e sui dettagli pratici.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    onClick={() => setLocation('/#contatti')} 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Contattaci per Info
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Email: <span className="text-primary">info@pictapaesaggiculturali.org</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tel: <span className="text-primary">+39 123 456 7890</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}