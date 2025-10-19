import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Trophy, Newspaper } from "lucide-react";

const NewsEvents = () => {
  const upcomingEvents = [
    {
      date: "Feb 15, 2025",
      time: "9:00 AM",
      title: "Annual Sports Day",
      location: "School Ground",
      description: "Inter-house sports competition featuring athletics, team sports, and much more.",
      category: "Sports"
    },
    {
      date: "Feb 28, 2025",
      time: "10:00 AM",
      title: "Science Exhibition",
      location: "School Auditorium",
      description: "Students showcase innovative science projects and experiments.",
      category: "Academic"
    },
    {
      date: "Mar 8, 2025",
      time: "11:00 AM",
      title: "Cultural Fest",
      location: "Auditorium",
      description: "Celebration of diversity through music, dance, and drama performances.",
      category: "Cultural"
    },
    {
      date: "Mar 20, 2025",
      time: "2:00 PM",
      title: "Parent-Teacher Meeting",
      location: "Classrooms",
      description: "Quarterly meeting to discuss student progress and development.",
      category: "Academic"
    }
  ];

  const recentNews = [
    {
      date: "Jan 10, 2025",
      title: "Outstanding CBSE Results 2024",
      excerpt: "Our students achieved 98% pass rate with 45 students scoring above 90%. Congratulations to all!",
      image: Trophy,
      category: "Achievement"
    },
    {
      date: "Jan 5, 2025",
      title: "New Computer Lab Inauguration",
      excerpt: "State-of-the-art computer lab with 50+ systems inaugurated, enhancing our technology education.",
      image: Newspaper,
      category: "Infrastructure"
    },
    {
      date: "Dec 28, 2024",
      title: "National Science Olympiad Winners",
      excerpt: "Five of our students won medals at the National Science Olympiad 2024. Making us proud!",
      image: Trophy,
      category: "Achievement"
    },
    {
      date: "Dec 15, 2024",
      title: "Annual Day Celebration",
      excerpt: "Grand annual day celebration with cultural performances, awards, and recognition ceremony.",
      image: Newspaper,
      category: "Event"
    },
    {
      date: "Dec 5, 2024",
      title: "Tree Plantation Drive",
      excerpt: "Students and staff planted 200+ trees as part of our environmental conservation initiative.",
      image: Newspaper,
      category: "Social"
    },
    {
      date: "Nov 20, 2024",
      title: "Inter-School Debate Victory",
      excerpt: "Our debate team secured first position in the district-level inter-school debate competition.",
      image: Trophy,
      category: "Achievement"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Sports: "bg-blue-500/10 text-blue-700 border-blue-500/20",
      Academic: "bg-primary/10 text-primary border-primary/20",
      Cultural: "bg-purple-500/10 text-purple-700 border-purple-500/20",
      Achievement: "bg-secondary/10 text-secondary-foreground border-secondary/20",
      Infrastructure: "bg-green-500/10 text-green-700 border-green-500/20",
      Event: "bg-orange-500/10 text-orange-700 border-orange-500/20",
      Social: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">News & Events</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings at Gyan Gangotri Niketan
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center justify-end space-x-2 text-sm text-muted-foreground mt-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent News */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Recent News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <news.image className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className={`${getCategoryColor(news.category)} mb-3`}>
                    {news.category}
                  </Badge>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{news.title}</h3>
                  <p className="text-muted-foreground text-sm">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-primary text-primary-foreground rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about upcoming events, achievements, and important announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-semibold hover:bg-secondary/90 transition-[var(--transition-smooth)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
