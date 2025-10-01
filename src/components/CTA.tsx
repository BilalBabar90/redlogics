import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";

const CTA = () => {
  return (
    <>
      {/* First CTA - Purple Background */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Large decorative circle */}
        <div className="absolute left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Ready to Transform Your Business with IT Solutions?
              </h2>
              <ul className="space-y-4 text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Expert consultation for enterprise-level IT infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Custom software development and cloud solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>24/7 security monitoring and network protection</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-end">
              <Button size="lg" className="bg-white text-dark-gray hover:bg-white/90 px-10 py-6 rounded uppercase tracking-wide font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA - Dark with Stats */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* Diagonal purple shape */}
        <div className="absolute -left-20 top-0 bottom-0 w-[600px]">
          <div className="absolute inset-0 bg-primary/30 transform -skew-x-12" />
        </div>
        
        {/* Decorative circle with play button */}
        <div className="absolute left-40 top-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
          <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-white/70 font-medium text-sm uppercase tracking-wider">
                  Do You Need a Meeting?
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Save Time and Money with a Top IT Solution Agency
              </h2>
            </div>
            
            <div className="flex gap-6 justify-end">
              {/* Stats Cards */}
              <div className="bg-primary/90 rounded-lg p-8 w-44 text-center">
                <div className="text-5xl font-bold text-white mb-2">9280</div>
                <div className="text-white/90 text-sm leading-tight">We have satisfied customers</div>
              </div>
              <div className="bg-primary rounded-lg p-8 w-44 text-center">
                <div className="text-5xl font-bold text-white mb-2">6420</div>
                <div className="text-white/90 text-sm leading-tight">Projects has been completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Diagonal shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-full bg-white/10 transform skew-x-12 translate-x-32" />
          <div className="absolute top-0 left-0 w-96 h-full bg-white/10 transform -skew-x-12 -translate-x-32" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white/90 mb-3 text-sm">Partner with RedLogic for cutting-edge technology solutions.</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Scale Your Business with Advanced IT Solutions?
            </h2>
            
            <Button size="lg" className="bg-white text-dark-gray hover:bg-white/90 px-10 py-6 rounded uppercase tracking-wide font-semibold">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
