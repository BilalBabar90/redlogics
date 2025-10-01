import { Button } from "@/components/ui/button";
import { Code2, Network, CheckCircle } from "lucide-react";
import companyImage1 from "@/assets/images/PHOTO-2025-10-01-04-23-54.jpg";
import companyImage2 from "@/assets/images/PHOTO-2025-10-01-04-23-55.jpg";
import companyImage3 from "@/assets/images/PHOTO-2025-10-01-04-38-12.jpg";
import companyImage4 from "@/assets/images/PHOTO-2025-10-01-04-23-55 (1).jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Company Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main company image */}
              <div className="bg-secondary h-96 rounded-lg overflow-hidden">
                <img 
                  src={companyImage1}
                  alt="RedLogic Consulting Office"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Circular badge overlay */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full border-8 border-white shadow-lg flex flex-col items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2" style={{ writingMode: 'horizontal-tb' }}>
                    IT Solution
                  </div>
                  <div className="w-12 h-12 mx-auto my-2">
                    <svg viewBox="0 0 50 50" className="text-primary">
                      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 25 L23 33 L35 18" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                    Business Dev
                  </div>
                </div>
              </div>
              
              {/* Stats badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white px-8 py-4 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold">6800<sup className="text-lg">+</sup></div>
                <div className="text-xs uppercase tracking-wide">Satisfied Clients</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                About Our Company
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-gray leading-tight">
              We're Partner of Your Innovations
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
            Get a roadmap shaped by clear technical and business priorities and real-world experience, not what looks good in theory. Consulting filters out low-value ideas before they drain resources 
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-gray text-sm">Enterprise </h3>
                  <p className="text-sm font-bold text-dark-gray">Solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-gray text-sm">Internal</h3>
                  <p className="text-sm font-bold text-dark-gray">Networking</p>
                </div>
              </div>
            </div>

            {/* Checkmarks */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Targeted Investment</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Optimized Project Planing</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">Faster Deployment</p>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 rounded uppercase tracking-wide font-semibold">
              Learn More
            </Button>
          </div>
        </div>

        {/* Three Cards Below */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              image: companyImage2,
              title: "Perfect solutions that", 
              subtitle: "business demands" 
            },
            { 
              image: companyImage3,
              title: "Perfect solutions that", 
              subtitle: "business demands" 
            },
            { 
              image: companyImage4,
              title: "Perfect solutions that", 
              subtitle: "business demands" 
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden group hover:shadow-lg transition-all">
              <div className="bg-secondary h-56 relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={`RedLogic Service ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-dark-gray">{item.title}</h3>
                <p className="font-bold text-lg text-dark-gray">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
