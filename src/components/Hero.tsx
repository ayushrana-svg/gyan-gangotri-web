import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-school.jpg";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--primary-dark)/0.85),hsl(var(--primary)/0.9))]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
            <p className="text-secondary font-semibold text-sm">CBSE Affiliated • Est. 2005</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Welcome to<br />
            <span className="text-secondary">Gyan Gangotri Niketan</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-light">
            Where Discipline Meets Discovery
          </p>
          
          <p className="text-xl text-primary-foreground/80 mb-8 italic">
            Rooted in Values, Rising with Knowledge
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="cta" size="lg" asChild>
              <a href="#campus">
                Explore Our Campus
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="/academics">View Curriculum</a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="/admissions">Admissions Open</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-2">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <p className="text-3xl font-bold text-primary-foreground">2000+</p>
              <p className="text-sm text-primary-foreground/70">Students</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-2">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <p className="text-3xl font-bold text-primary-foreground">100+</p>
              <p className="text-sm text-primary-foreground/70">Teachers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-2">
                <BookOpen className="h-6 w-6 text-secondary-foreground" />
              </div>
              <p className="text-3xl font-bold text-primary-foreground">20+</p>
              <p className="text-sm text-primary-foreground/70">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
