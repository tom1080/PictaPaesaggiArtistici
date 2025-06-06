export default function MissionSection() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6">La Nostra Missione</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Picta Paesaggi Culturali nasce dalla passione per l'arte astratta e dalla volontà di creare connessioni profonde tra espressione artistica e territorio. La nostra missione è quella di promuovere artisti emergenti e consolidati nel panorama dell'arte astratta contemporanea.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Attraverso mostre, workshop e eventi culturali, lavoriamo per rendere l'arte accessibile a tutti e per valorizzare il patrimonio culturale del nostro territorio attraverso nuove forme di espressione artistica.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Arte astratta colorata" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-70 blur-sm"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-lg transform rotate-12 opacity-80"></div>
            <div className="absolute top-1/2 -right-4 w-12 h-20 bg-secondary rounded-full opacity-50 transform rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
