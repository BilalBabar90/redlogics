import { User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleImage1 from "@/assets/Article-iMAGES/PHOTO-2025-10-01-04-45-17.jpg";
import articleImage2 from "@/assets/Article-iMAGES/PHOTO-2025-10-01-04-45-17 (1).jpg";
import articleImage3 from "@/assets/Article-iMAGES/PHOTO-2025-10-01-04-45-17 (2).jpg";

const articles = [
  {
    title: "Let's understand the different types of data backups",
    date: "16 MAR",
    author: "Admin",
    comments: "2 Comments",
    image: articleImage1,
  },
  {
    title: "Let's understand the different types of data backups",
    date: "16 MAR",
    author: "Admin",
    comments: "2 Comments",
    highlighted: true,
    image: articleImage2,
  },
  {
    title: "Let's understand the different types of data backups",
    date: "16 MAR",
    author: "Admin",
    comments: "2 Comments",
    image: articleImage3,
  },
];

const News = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-8 h-0.5 bg-primary"></span>
              What's Happening
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray">
            News & Articles
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="h-64 rounded-xl mb-6 relative overflow-hidden">
                {/* Article Image */}
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wide">
                    {article.date}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>by {article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>{article.comments}</span>
                </div>
              </div>
              
              <h3 className={`text-xl font-bold mb-4 group-hover:text-primary transition-colors ${
                article.highlighted ? 'text-primary' : 'text-dark-gray'
              }`}>
                {article.title}
              </h3>
              
              <Button 
                variant={article.highlighted ? "default" : "outline"}
                className={article.highlighted ? "bg-primary hover:bg-primary/90 text-white rounded uppercase tracking-wide font-semibold" : "rounded uppercase tracking-wide font-semibold"}
              >
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
