import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number too long"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message too long")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const validation = contactFormSchema.safeParse(formData);
    
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Validation Error",
        description: "Please check the form and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We would love to hear from you. Get in touch with us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                    <Input 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={errors.firstName ? "border-destructive" : ""}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                    <Input 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={errors.lastName ? "border-destructive" : ""}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <Input 
                    placeholder="+91 1234567890" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                  <Input 
                    placeholder="How can we help you?" 
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Education Street,<br />
                      Knowledge City,<br />
                      India - 110001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Main Office: +91 123 456 7890<br />
                      Admissions: +91 123 456 7891<br />
                      Principal: +91 123 456 7892
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      General: info@gyangangotri.edu.in<br />
                      Admissions: admissions@gyangangotri.edu.in<br />
                      Principal: principal@gyangangotri.edu.in
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 8:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Find Us on the Map</h2>
          <p className="text-muted-foreground mb-6">
            Visit our campus to experience the learning environment firsthand
          </p>
          <div className="w-full h-96 bg-background rounded-lg flex items-center justify-center border-2 border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
