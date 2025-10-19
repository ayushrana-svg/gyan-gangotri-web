import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, Globe, Calculator, Palette, Music } from "lucide-react";

const Academics = () => {
  const curriculum = [
    {
      icon: BookOpen,
      subject: "Languages",
      description: "English, Hindi, and Sanskrit with emphasis on communication skills and literature appreciation."
    },
    {
      icon: Calculator,
      subject: "Mathematics",
      description: "Comprehensive math program from basic arithmetic to advanced calculus and statistics."
    },
    {
      icon: FlaskConical,
      subject: "Sciences",
      description: "Physics, Chemistry, and Biology with extensive laboratory work and practical applications."
    },
    {
      icon: Globe,
      subject: "Social Studies",
      description: "History, Geography, Political Science, and Economics fostering global awareness."
    },
    {
      icon: Palette,
      subject: "Arts & Crafts",
      description: "Visual arts, creative expression, and hands-on activities to nurture creativity."
    },
    {
      icon: Music,
      subject: "Music & Dance",
      description: "Indian classical and contemporary music, along with traditional and modern dance forms."
    }
  ];

  const streams = [
    {
      title: "Science Stream",
      subjects: ["Physics", "Chemistry", "Biology/Mathematics", "English", "Computer Science"],
      description: "For aspiring doctors, engineers, and scientists"
    },
    {
      title: "Commerce Stream",
      subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics"],
      description: "For future business leaders and economists"
    },
    {
      title: "Arts Stream",
      subjects: ["History", "Political Science", "Geography", "English", "Psychology"],
      description: "For humanities scholars and social scientists"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Academics</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive CBSE curriculum designed to nurture well-rounded individuals
          </p>
        </div>

        {/* Curriculum Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Curriculum</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Following the CBSE framework, our curriculum integrates academic rigor with skill development, ensuring students are prepared for both examinations and real-world challenges.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.subject}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Class Structure */}
        <div className="mb-20 bg-muted p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Class Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-foreground">1-5</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Primary Classes</h3>
              <p className="text-muted-foreground">
                Foundation years focusing on basic literacy, numeracy, and holistic development through play and exploration.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-foreground">6-10</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Secondary Classes</h3>
              <p className="text-muted-foreground">
                Building stronger academic foundations with introduction to advanced subjects and skill-based learning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-foreground">11-12</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Senior Secondary</h3>
              <p className="text-muted-foreground">
                Specialized stream-based education preparing students for higher education and competitive examinations.
              </p>
            </div>
          </div>
        </div>

        {/* Stream Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Stream Options (Classes 11-12)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {streams.map((stream, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{stream.title}</h3>
                  <p className="text-sm text-secondary mb-4 font-medium">{stream.description}</p>
                  <div className="space-y-2 mb-6">
                    {stream.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{subject}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Programs */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Computer Education</h3>
              <p className="text-primary-foreground/80">
                From basic computer literacy to advanced programming and AI concepts integrated across all classes.
              </p>
            </div>
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Life Skills</h3>
              <p className="text-primary-foreground/80">
                Communication, critical thinking, problem-solving, and emotional intelligence development.
              </p>
            </div>
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Value Education</h3>
              <p className="text-primary-foreground/80">
                Character building, ethics, and moral values integrated into daily learning experiences.
              </p>
            </div>
            <div className="bg-primary-foreground/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Career Counseling</h3>
              <p className="text-primary-foreground/80">
                Professional guidance for stream selection, college admissions, and career planning.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="cta" size="lg">
              Download Curriculum Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
