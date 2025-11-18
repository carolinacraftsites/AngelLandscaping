import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" data-testid="link-home">
            <span className="text-xl font-bold text-primary">Angel Landscaping LLC</span>
          </Link>
        </div>
        <div className="flex lg:hidden gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 hover:text-primary transition-colors ${location === item.href ? 'text-primary' : 'text-foreground'}`}
              data-testid={`link-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <Button variant="outline" size="sm" asChild data-testid="button-call">
            <a href="tel:828-713-4546">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button size="sm" asChild data-testid="button-estimate-header">
            <Link href="/contact">Free Estimate</Link>
          </Button>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="lg:hidden border-t" data-testid="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                <div className={`block rounded-md px-3 py-2 text-base font-semibold hover-elevate ${location === item.href ? 'text-primary' : 'text-foreground'}`}>
                  {item.name}
                </div>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild data-testid="button-call-mobile">
                <a href="tel:828-713-4546">
                  <Phone className="mr-2 h-4 w-4" />
                  Call 828-713-4546
                </a>
              </Button>
              <Button className="w-full" asChild data-testid="button-estimate-mobile">
                <Link href="/contact">Request Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
