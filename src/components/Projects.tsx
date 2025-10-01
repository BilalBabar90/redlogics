import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Cloud Infrastructure",
    category: "CLOUD / SERVICES",
    image: "/src/assets/service-cloud.jpg",
  },
  {
    title: "Software Development",
    category: "DEVELOPMENT / SOLUTIONS",
    highlighted: true,
    image: "/src/assets/service-dev.jpg",
  },
  {
    title: "Security Systems",
    category: "SECURITY / PROTECTION",
    image: "/src/assets/service-security.jpg",
  },
  {
    title: "Enterprise Solutions",
    category: "BUSINESS / INTEGRATION",
    image: "/src/assets/images/PHOTO-2025-10-01-04-23-54 (1).jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-lg">
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-0.5 bg-primary"></span>
                Our Completed Projects
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-dark-gray leading-tight">
              Improve & Enhance Our Tech Projects
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-md">
            There are many variations of passages of available but majority have suffered alteration in some form, by humour or randomised words which don't look even slightly believable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs font-semibold mb-3 tracking-wider">{project.category}</div>
                <h3 className="text-2xl font-bold mb-12">{project.title}</h3>
                
                {/* Arrow Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
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

export default Projects;
