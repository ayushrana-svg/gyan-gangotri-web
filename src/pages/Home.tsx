import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import studentsLearning from "@/assets/students-learning.jpg";
import sportsActivities from "@/assets/sports-activities.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import { BookOpen, Award, Users, Lightbulb, Calendar, Mail, Phone, User } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section id="campus" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Our School</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Gyan Gangotri Niketan is a premier CBSE-affiliated institution dedicated to nurturing young minds and shaping future leaders through holistic education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={studentsLearning} 
                alt="Students learning together"
                className="rounded-lg shadow-[var(--shadow-elegant)] w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Excellence in Education Since 2005</h3>
              <p className="text-muted-foreground">
                At Gyan Gangotri Niketan, we believe in creating an environment where discipline meets discovery. Our approach combines traditional values with modern educational methodologies to prepare students for the challenges of tomorrow.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Academic Excellence</h4>
                    <p className="text-sm text-muted-foreground">Top performers in CBSE</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Expert Faculty</h4>
                    <p className="text-sm text-muted-foreground">Qualified educators</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Innovation</h4>
                    <p className="text-sm text-muted-foreground">Modern teaching methods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Holistic Growth</h4>
                    <p className="text-sm text-muted-foreground">Beyond academics</p>
                  </div>
                </div>
              </div>
              <Button variant="default" size="lg" asChild>
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)]">
              <CardContent className="p-6">
                <img 
                  src={scienceLab} 
                  alt="Science laboratory"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold text-foreground mb-3">State-of-the-Art Facilities</h3>
                <p className="text-muted-foreground">
                  Modern classrooms, well-equipped laboratories, and extensive library resources to support comprehensive learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)]">
              <CardContent className="p-6">
                <img 
                  src={sportsActivities} 
                  alt="Sports activities"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold text-foreground mb-3">Sports & Activities</h3>
                <p className="text-muted-foreground">
                  Extensive sports programs, cultural activities, and clubs to nurture talents and build character.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-elegant)]">
              <CardContent className="p-6">
                <img 
                  src={studentsLearning} 
                  alt="Individual attention"
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-bold text-foreground mb-3">Individual Attention</h3>
                <p className="text-muted-foreground">
                  Small class sizes ensuring personalized attention and mentoring for every student's unique needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest Updates</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>January 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Admissions Open for 2025-26</h3>
                <p className="text-muted-foreground mb-4">
                  Applications are now being accepted for all classes. Early bird discount available.
                </p>
                <Button variant="link" className="p-0">Read More →</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>January 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Annual Sports Day Success</h3>
                <p className="text-muted-foreground mb-4">
                  Our students showcased exceptional talent and sportsmanship at the annual sports event.
                </p>
                <Button variant="link" className="p-0">Read More →</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>December 28, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Outstanding Board Results</h3>
                <p className="text-muted-foreground mb-4">
                  98% pass rate with 45 students scoring above 90% in CBSE examinations.
                </p>
                <Button variant="link" className="p-0">Read More →</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Book a Visit Section */}
      <section id="book-visit" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Book a School Visit</h2>
              <p className="text-lg text-primary-foreground/80">
                Experience our campus firsthand. Schedule a visit to explore our facilities and meet our team.
              </p>
            </div>

            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-8">
                <form className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                      <Input 
                        placeholder="Enter your name"
                        className="pl-10 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                      <Input 
                        placeholder="+91 1234567890"
                        className="pl-10 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <Input 
                      type="date"
                      className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Additional Information</label>
                    <Textarea 
                      placeholder="Tell us about your requirements or questions..."
                      rows={4}
                      className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Button variant="cta" size="lg" className="w-full">
                      Schedule Visit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
