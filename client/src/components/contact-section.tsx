import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";

const contactFormSchema = insertContactSchema.extend({
  nome: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  messaggio: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      messaggio: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contacts', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per il tuo messaggio. Ti risponderemo presto.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: "Errore",
        description: error.message || "Si è verificato un errore nell'invio del messaggio.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contatti" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Contattaci</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hai domande sui nostri eventi? Vuoi partecipare alle nostre iniziative? Scrivici!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-muted border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Invia un Messaggio</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Il tuo nome" 
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="tua@email.com" 
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="messaggio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Messaggio *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Scrivi qui il tuo messaggio..."
                            rows={5}
                            {...field}
                            className="resize-none transition-all duration-200 focus:ring-2 focus:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Invio in corso..." : "Invia Messaggio"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Informazioni</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@pictapaesaggiculturali.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Telefono</h4>
                    <p className="text-muted-foreground">+39 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Indirizzo</h4>
                    <p className="text-muted-foreground">Via dell'Arte, 123<br />00100 Roma, Italia</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Seguici sui Social</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-muted hover:bg-primary hover:text-primary-foreground text-foreground p-3 rounded-lg transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-primary hover:text-primary-foreground text-foreground p-3 rounded-lg transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-primary hover:text-primary-foreground text-foreground p-3 rounded-lg transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
