import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, FileText, Users, Download, Phone } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      icon: FileText,
      title: "Step 1: Registration",
      description: "Fill out the online registration form or visit the school office to collect the admission form."
    },
    {
      icon: Calendar,
      title: "Step 2: Submission",
      description: "Submit the completed form along with required documents by the specified deadline."
    },
    {
      icon: Users,
      title: "Step 3: Interaction",
      description: "Parents and students meet with our admissions team and tour the campus facilities."
    },
    {
      icon: CheckCircle,
      title: "Step 4: Confirmation",
      description: "Receive admission confirmation and complete the enrollment process with fee payment."
    }
  ];

  const documents = [
    "Birth Certificate (original for verification)",
    "Previous school Transfer Certificate",
    "Last year's report card and mark sheets",
    "Aadhaar Card copy (student and parents)",
    "Recent passport-size photographs (4 copies)",
    "Address proof (Ration card/Electricity bill)",
    "Caste certificate (if applicable)",
    "Medical fitness certificate"
  ];

  const feeStructure = [
    { class: "Class 1-5", admission: "₹15,000", annual: "₹45,000", total: "₹60,000" },
    { class: "Class 6-8", admission: "₹18,000", annual: "₹52,000", total: "₹70,000" },
    { class: "Class 9-10", admission: "₹20,000", annual: "₹60,000", total: "₹80,000" },
    { class: "Class 11-12", admission: "₹25,000", annual: "₹70,000", total: "₹95,000" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Admissions</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our learning community — Admissions Open for Academic Year 2025-26
          </p>
        </div>

        {/* Important Dates */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Registration Opens</h3>
              <p className="text-primary-foreground/80">January 15, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Last Date to Apply</h3>
              <p className="text-primary-foreground/80">March 31, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Session Begins</h3>
              <p className="text-primary-foreground/80">April 10, 2025</p>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Admission Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/10 rounded-bl-full"></div>
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Required Documents</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fee Structure */}
        <div className="mb-20 bg-muted p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Fee Structure</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 text-foreground font-bold">Class</th>
                  <th className="text-right py-4 px-4 text-foreground font-bold">Admission Fee</th>
                  <th className="text-right py-4 px-4 text-foreground font-bold">Annual Tuition</th>
                  <th className="text-right py-4 px-4 text-foreground font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-background transition-[var(--transition-smooth)]">
                    <td className="py-4 px-4 font-medium text-foreground">{row.class}</td>
                    <td className="py-4 px-4 text-right text-muted-foreground">{row.admission}</td>
                    <td className="py-4 px-4 text-right text-muted-foreground">{row.annual}</td>
                    <td className="py-4 px-4 text-right font-bold text-primary">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Fee includes tuition, books, and examination charges. Transportation and lunch are optional.
          </p>
          <p className="text-center text-sm font-medium text-secondary mt-2">
            Early Bird Discount: 10% off on admission fee if registered before February 28, 2025
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Apply?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your child's journey towards excellence. Download the admission form or contact us for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download Application Form
            </Button>
            <Button variant="default" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
