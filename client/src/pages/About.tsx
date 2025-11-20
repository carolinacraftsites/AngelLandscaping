import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ShieldCheck, Users, Award } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Angel Landscaping LLC | Angel Cruz, Owner</title>
        <meta name="description" content="Learn about Angel Cruz and Angel Landscaping LLC. Years of hands-on experience in landscaping, masonry, and home renovation. Known for reliable communication and quality work in Western NC." />
      </Helmet>
      <div className="min-h-screen py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4" data-testid="text-about-title">
              About Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
              Quality workmanship and reliable service for Western North Carolina
            </p>
          </div>
        
          <div>
            <h2 className="text-3xl font-bold mb-6" data-testid="text-owner-name">
              Angel Cruz
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-owner-description">
              Angel Cruz leads Angel Landscaping LLC with years of hands-on experience in landscaping, masonry, and home renovation. Known for reliable communication, quality work, and attention to detail.
            </p>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg italic text-foreground" data-testid="text-quote">
                  "Angel and his team are always timely, professional, and deliver excellent work."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card data-testid="card-commitment-quality">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-muted-foreground">
                We take pride in delivering exceptional results on every project, no matter the size.
              </p>
            </CardContent>
          </Card>
          
          <Card data-testid="card-commitment-insured">
            <CardContent className="p-8 text-center">
              <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-muted-foreground">
                Licensed and fully insured for your protection and peace of mind.
              </p>
            </CardContent>
          </Card>
          
          <Card data-testid="card-commitment-service">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Friendly Service</h3>
              <p className="text-muted-foreground">
                Professional, courteous service with clear communication from start to finish.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </>
  );
}
