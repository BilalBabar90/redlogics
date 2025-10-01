import { TrendingUp, Users, Award, Clock, Shield, Zap, CheckCircle } from "lucide-react";

const expertiseData = [
  {
    icon: TrendingUp,
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered innovative solutions"
  },
  {
    icon: Users,
    number: "150+",
    label: "Happy Clients",
    description: "Building lasting partnerships worldwide"
  },
  {
    icon: Award,
    number: "98%",
    label: "Success Rate",
    description: "Consistent quality and delivery excellence"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support",
    description: "Round-the-clock technical assistance"
  },
  {
    icon: Shield,
    number: "100%",
    label: "Secure",
    description: "Enterprise-grade security protocols"
  },
  {
    icon: Zap,
    number: "10+",
    label: "Years Experience",
    description: "Proven expertise in technology solutions"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-lg">
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                Our Achievements
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray leading-tight">
              Proven Excellence in Technology Solutions
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-md">
            We combine cutting-edge technology with strategic thinking to deliver solutions that drive real business value and sustainable growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-dark-gray">{item.number}</div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wide">{item.label}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-gray mb-4">
              Why Choose RedLogic Consulting?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the technology consulting landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Strategic Planning</h4>
                <p className="text-muted-foreground text-sm">Comprehensive technology roadmaps tailored to your business goals.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Innovation Focus</h4>
                <p className="text-muted-foreground text-sm">Cutting-edge solutions that give you a competitive advantage.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Scalable Solutions</h4>
                <p className="text-muted-foreground text-sm">Technology that grows with your business needs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Expert Support</h4>
                <p className="text-muted-foreground text-sm">Dedicated team of specialists at your service.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Cost Effective</h4>
                <p className="text-muted-foreground text-sm">Maximize ROI with efficient technology investments.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-dark-gray mb-2">Future Ready</h4>
                <p className="text-muted-foreground text-sm">Solutions built for tomorrow's challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
