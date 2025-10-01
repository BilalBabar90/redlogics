import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center overflow-hidden bg-[hsl(210,11%,25%)]">
      {/* Large Diagonal Purple Shape - Left */}
      <div className="absolute top-0 left-0 w-[35%] h-full bg-primary transform origin-top-right skew-x-[-12deg] -translate-x-20" />
      
      {/* Large Diagonal Purple Shape - Right */}
      <div className="absolute top-0 right-0 w-[35%] h-full bg-primary/80 transform origin-top-left skew-x-[12deg] translate-x-20" />
      
      {/* Diagonal Lines Pattern - Right */}
      <div className="absolute bottom-0 right-0 w-64 h-64">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-full bg-primary/20 transform rotate-45"
            style={{ left: `${i * 12}px` }}
          />
        ))}
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-1/4 right-32 w-16 h-16 border-2 border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-40 w-12 h-12 border-2 border-white/10 rounded-full" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-white/80 text-xs uppercase tracking-[0.3em] font-medium">
              Experience the Best IT Solutions
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 leading-none tracking-tight">
            IT CONSULTING <span className="text-primary">&</span>
            <br />
            SERVICES
          </h1>
          
          {/* Decorative curved arrow */}
          <div className="flex justify-center mb-8">
            <svg width="120" height="60" viewBox="0 0 120 60" className="text-white/50">
              <path d="M10 10 Q 60 50, 110 10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M105 5 L 110 10 L 105 15" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-base font-semibold rounded uppercase tracking-wide">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
