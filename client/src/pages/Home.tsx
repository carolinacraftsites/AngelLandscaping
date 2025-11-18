import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Scissors, Leaf, Droplets, Wind, Trees, Fence, Hammer, ShieldCheck, MapPin, Phone } from "lucide-react";

const featuredServices = [
  {
    icon: Scissors,
    title: "Mow & Trim",
    description: "Professional lawn mowing and trimming services to keep your property looking pristine."
  },
  {
    icon: Leaf,
    title: "Mulching",
    description: "Quality mulch installation to enhance your garden beds and retain soil moisture."
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description: "Powerful cleaning for driveways, decks, siding, and outdoor surfaces."
  },
  {
    icon: Trees,
    title: "Tree Work",
    description: "Expert tree trimming, pruning, and removal services for safety and aesthetics."
  },
  {
    icon: Fence,
    title: "Fencing",
    description: "Custom fence installation and repair for privacy, security, and curb appeal."
  },
  {
    icon: Hammer,
    title: "Stone Work",
    description: "Beautiful stonework, retaining walls, and masonry for lasting outdoor structures."
  }
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Angel Landscaping LLC - Professional Landscaping & Home Improvement in Western NC</title>
        <meta name="description" content="Angel Landscaping LLC provides professional landscaping, stonework, masonry, and home improvement services in Western North Carolina. Free estimates, fully insured. Call 828-713-4546 today." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
      
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4" data-testid="text-intro-title">
              Professional Service You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-intro-description">
              Angel Landscaping LLC provides professional landscaping, stonework, and home improvement services throughout Western North Carolina. We deliver reliable workmanship and friendly service at fair prices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.title} className="hover-elevate transition-all duration-200" data-testid={`card-featured-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <service.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" asChild data-testid="button-view-services">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-testid="feature-insured">
              <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
              <p className="text-muted-foreground">Licensed and insured for your peace of mind</p>
            </div>
            <div data-testid="feature-experienced">
              <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-muted-foreground">Years of hands-on expertise in landscaping and home improvement</p>
            </div>
            <div data-testid="feature-area">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Serving Western NC</h3>
              <p className="text-muted-foreground">Proudly serving communities across Western North Carolina</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90" data-testid="text-cta-description">
            Get a free estimate today and see how we can enhance your outdoor space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
              data-testid="button-estimate-cta"
            >
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
              data-testid="button-call-cta"
            >
              <a href="tel:828-713-4546">
                <Phone className="mr-2 h-5 w-5" />
                Call 828-713-4546
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
