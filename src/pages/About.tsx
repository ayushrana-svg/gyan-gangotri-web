import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">About Us</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rooted in Values, Rising with Knowledge
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="border-2 border-primary">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education that nurtures intellectual curiosity, moral values, and social responsibility. We strive to create an inclusive learning environment where every student can discover and develop their unique potential while preparing them for global citizenship.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a center of educational excellence that shapes future leaders who are academically brilliant, ethically strong, and socially conscious. We envision a community of learners who contribute positively to society through innovation, compassion, and integrity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto bg-muted p-8 rounded-lg">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Established in 2005, Gyan Gangotri Niketan began with a simple yet profound vision: to create an institution where traditional values meet modern education. Over the past two decades, we have grown from a modest school serving 200 students to a thriving educational community of over 2,000 students.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our journey has been marked by consistent academic excellence, with our students consistently ranking among the top performers in CBSE examinations. Beyond academics, we take pride in our holistic approach to education, which emphasizes character development, critical thinking, and creative expression.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Gyan Gangotri Niketan stands as a testament to our founding principles: discipline, discovery, and dedication. Our alumni have gone on to excel in diverse fields, carrying forward the values and knowledge they gained within our walls.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  Upholding honesty, transparency, and ethical conduct in all aspects of education and administration.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Pursuing the highest standards in academics, character development, and all school activities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Respect</h3>
                <p className="text-muted-foreground">
                  Valuing diversity, fostering inclusion, and treating everyone with dignity and compassion.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Lifelong Learning</h3>
                <p className="text-muted-foreground">
                  Cultivating curiosity and a love for continuous learning beyond the classroom.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Responsibility</h3>
                <p className="text-muted-foreground">
                  Encouraging accountability, leadership, and positive contribution to society.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Compassion</h3>
                <p className="text-muted-foreground">
                  Nurturing empathy, kindness, and service to others in our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">98%</p>
              <p className="text-primary-foreground/80">Board Pass Rate</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">45</p>
              <p className="text-primary-foreground/80">Top Scorers (90%+)</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">25+</p>
              <p className="text-primary-foreground/80">Awards & Recognition</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-secondary mb-2">100%</p>
              <p className="text-primary-foreground/80">Parent Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
