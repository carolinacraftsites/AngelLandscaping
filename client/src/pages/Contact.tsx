import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Angel Landscaping LLC | Free Estimates</title>
        <meta name="description" content="Contact Angel Landscaping LLC for a free estimate. Call 828-713-4546 or email AngelandscapingLLC@outlook.com. Serving Western North Carolina with professional landscaping and home improvement services." />
      </Helmet>
      <div className="min-h-screen py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4" data-testid="text-contact-title">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
              Get in touch for a free estimate on your next project
            </p>
          </div>
        
          <div className="max-w-3xl mx-auto">
            <Card className="mb-8" data-testid="card-contact-info">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Reach out to us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:828-713-4546" 
                      className="text-lg text-primary hover:underline"
                      data-testid="link-phone"
                    >
                      828-713-4546
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Click to call for immediate assistance
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:AngelandscapingLLC@outlook.com" 
                      className="text-primary hover:underline break-all"
                      data-testid="link-email"
                    >
                      AngelandscapingLLC@outlook.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-muted-foreground" data-testid="text-service-area-contact">
                      Western North Carolina
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-free-estimates">
                    Free Estimates • Fully Insured
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted" data-testid="card-business-hours">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Angel Cruz</h3>
                <p className="text-sm text-muted-foreground">Owner & Operator</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Years of hands-on experience in landscaping, masonry, and home renovation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
