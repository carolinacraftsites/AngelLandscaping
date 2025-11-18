import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Beautiful_landscaped_yard_hero_8b8f52d0.png";

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl" data-testid="text-hero-title">
          Angel Landscaping LLC
        </h1>
        
        <Badge 
          variant="outline" 
          className="mt-6 text-base px-6 py-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          data-testid="badge-insured"
        >
          Free Estimates • Fully Insured
        </Badge>
        
        <p className="mt-8 text-lg leading-8 text-white/90 max-w-2xl mx-auto" data-testid="text-hero-description">
          Angel Landscaping LLC provides professional landscaping, stonework, and home improvement services throughout Western North Carolina. We deliver reliable workmanship and friendly service at fair prices.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto backdrop-blur-sm bg-primary/90 hover:bg-primary border border-primary-border"
            asChild
          >
            <Link href="/contact" data-testid="button-hero-estimate">Request a Free Estimate</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
            asChild
          >
            <a href="tel:828-713-4546" data-testid="button-hero-call">
              <Phone className="mr-2 h-5 w-5" />
              Call 828-713-4546
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
