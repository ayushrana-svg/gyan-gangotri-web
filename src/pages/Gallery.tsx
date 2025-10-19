import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-school.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import sportsActivities from "@/assets/sports-activities.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import library from "@/assets/library.jpg";
import culturalActivities from "@/assets/cultural-activities.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = {
    all: [
      { src: heroImage, title: "School Campus", category: "Campus" },
      { src: studentsLearning, title: "Classroom Learning", category: "Academics" },
      { src: sportsActivities, title: "Sports Day", category: "Sports" },
      { src: scienceLab, title: "Science Laboratory", category: "Academics" },
      { src: library, title: "School Library", category: "Campus" },
      { src: culturalActivities, title: "Cultural Performance", category: "Events" },
    ],
    campus: [
      { src: heroImage, title: "School Campus", category: "Campus" },
      { src: library, title: "School Library", category: "Campus" },
    ],
    academics: [
      { src: studentsLearning, title: "Classroom Learning", category: "Academics" },
      { src: scienceLab, title: "Science Laboratory", category: "Academics" },
    ],
    sports: [
      { src: sportsActivities, title: "Sports Day", category: "Sports" },
    ],
    events: [
      { src: culturalActivities, title: "Cultural Performance", category: "Events" },
    ]
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Glimpses of life at Gyan Gangotri Niketan
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="campus">Campus</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.all.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-primary-foreground">
                          <p className="font-bold text-lg">{image.title}</p>
                          <p className="text-sm text-primary-foreground/80">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="campus">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.campus.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-primary-foreground">
                          <p className="font-bold text-lg">{image.title}</p>
                          <p className="text-sm text-primary-foreground/80">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="academics">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.academics.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-primary-foreground">
                          <p className="font-bold text-lg">{image.title}</p>
                          <p className="text-sm text-primary-foreground/80">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sports">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.sports.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-primary-foreground">
                          <p className="font-bold text-lg">{image.title}</p>
                          <p className="text-sm text-primary-foreground/80">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.events.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden cursor-pointer hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)] group"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-primary-foreground">
                          <p className="font-bold text-lg">{image.title}</p>
                          <p className="text-sm text-primary-foreground/80">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
