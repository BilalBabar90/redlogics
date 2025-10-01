import { Monitor, Settings, Shield, Palette, Database } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Product Development",
    description: "Lorem Ipsum has been the industry text ever since then.",
  },
  {
    icon: Settings,
    title: "Digital Marketing",
    description: "Lorem Ipsum has been the industry text ever since then.",
    highlighted: true,
  },
  {
    icon: Shield,
    title: "Security System",
    description: "Lorem Ipsum has been the industry text ever since then.",
  },
  {
    icon: Palette,
    title: "UI/UX Designing",
    description: "Lorem Ipsum has been the industry text ever since then.",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Lorem Ipsum has been the industry text ever since then.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/5 rounded-full" />
      
      {/* Diagonal pattern bottom left */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-full bg-white/20 transform rotate-45"
            style={{ left: `${i * 12}px` }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-lg">
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                What We're Offering
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Dealing in all Professional IT Services
            </h2>
          </div>
          
          <p className="text-white/70 max-w-md">
            There are many variations of passages of available but majority have suffered alteration in some form, by humour or randomised words which don't look even slightly believable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`rounded-lg p-8 transition-all hover:scale-105 ${
                  service.highlighted
                    ? 'bg-white'
                    : 'bg-white/5 backdrop-blur-sm'
                }`}
              >
                <div className={`w-16 h-16 ${service.highlighted ? 'bg-primary' : 'bg-primary/20'} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${service.highlighted ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${service.highlighted ? 'text-dark-gray' : 'text-white'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${service.highlighted ? 'text-muted-foreground' : 'text-white/70'}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
