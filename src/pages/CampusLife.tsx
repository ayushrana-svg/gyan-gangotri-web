import { Card, CardContent } from "@/components/ui/card";
import sportsActivities from "@/assets/sports-activities.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import library from "@/assets/library.jpg";
import culturalActivities from "@/assets/cultural-activities.jpg";
import { Trophy, Music, Palette, Globe, Heart, Star } from "lucide-react";

const CampusLife = () => {
  const facilities = [
    {
      image: scienceLab,
      title: "Science Laboratories",
      description: "State-of-the-art labs for Physics, Chemistry, and Biology with modern equipment for hands-on learning."
    },
    {
      image: library,
      title: "Library & Resource Center",
      description: "Extensive collection of 15,000+ books, digital resources, and quiet study spaces for students."
    },
    {
      image: sportsActivities,
      title: "Sports Complex",
      description: "Multi-purpose sports ground, basketball and tennis courts, and indoor games facilities."
    },
    {
      image: culturalActivities,
      title: "Auditorium",
      description: "Modern 500-seater auditorium equipped for cultural programs, seminars, and performances."
    }
  ];

  const activities = [
    {
      icon: Trophy,
      title: "Sports & Athletics",
      description: "Cricket, Football, Basketball, Badminton, Athletics, and more with professional coaching."
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Classical and contemporary music, various dance forms including Bharatanatyam and modern dance."
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Painting, sculpture, pottery, and creative arts to nurture artistic expression."
    },
    {
      icon: Globe,
      title: "Science & Tech Clubs",
      description: "Robotics, Coding, Astronomy, and innovation labs for young scientists and tech enthusiasts."
    },
    {
      icon: Heart,
      title: "Social Service",
      description: "Community service programs, environmental initiatives, and social awareness campaigns."
    },
    {
      icon: Star,
      title: "Leadership Programs",
      description: "Student council, debate club, MUN, and various leadership development opportunities."
    }
  ];

  const houses = [
    {
      name: "Agni House",
      color: "bg-red-500",
      motto: "Passion & Energy"
    },
    {
      name: "Vayu House",
      color: "bg-blue-500",
      motto: "Freedom & Spirit"
    },
    {
      name: "Prithvi House",
      color: "bg-green-500",
      motto: "Strength & Stability"
    },
    {
      name: "Jal House",
      color: "bg-cyan-500",
      motto: "Calm & Perseverance"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Campus Life</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience vibrant campus life beyond the classroom
          </p>
        </div>

        {/* Facilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">World-Class Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{facility.title}</h3>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Facilities List */}
        <div className="mb-20 bg-muted p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">More Campus Amenities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-foreground">Computer Lab with 50+ systems</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-foreground">Smart Classrooms</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-foreground">Medical Room</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-foreground">Cafeteria</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-foreground">Transportation Facility</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-foreground">CCTV Surveillance</span>
            </div>
          </div>
        </div>

        {/* Co-Curricular Activities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Co-Curricular Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                    <activity.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* House System */}
        <div className="bg-primary text-primary-foreground rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">House System</h2>
          <p className="text-center text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
            Our house system fosters healthy competition, teamwork, and school spirit. Students are divided into four houses, each representing different values and characteristics.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {houses.map((house, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 ${house.color} rounded-full mx-auto mb-4 shadow-[var(--shadow-elegant)]`}></div>
                  <h3 className="text-xl font-bold mb-2">{house.name}</h3>
                  <p className="text-primary-foreground/70 text-sm italic">{house.motto}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
