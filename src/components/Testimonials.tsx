import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Hardson",
    role: "Senior Designer",
    content: "This is due to their excellent service, competitive pricing and customer support. It's refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit.",
    rating: 5,
  },
  {
    name: "Aleesha Smith",
    role: "Senior Designer",
    content: "This is due to their excellent service, competitive pricing and customer support. It's refreshing to get such a personal touch. Duis aute lorem ipsum is simply free text reprehen.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-8 h-0.5 bg-primary"></span>
              Client Testimonials
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">
            What They're Talking?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center border-4 border-primary shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {/* Purple underline accent */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-dark-gray text-lg mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.role}</p>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
