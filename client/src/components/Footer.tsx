import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-footer-business">
              Angel Landscaping LLC
            </h3>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
              Free Estimates • Fully Insured
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-2">
              <a 
                href="tel:828-713-4546" 
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-phone"
              >
                <Phone className="mr-2 h-4 w-4" />
                828-713-4546
              </a>
              <a 
                href="mailto:AngelandscapingLLC@outlook.com" 
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="mr-2 h-4 w-4" />
                akandrade1989@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Service Area</h4>
            <p className="text-sm text-muted-foreground" data-testid="text-service-area">
              Serving Western North Carolina
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Angel Landscaping LLC. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Created by{" "}
            <a
              href="https://carolinacraftsites.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              Carolina Craft Sites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
