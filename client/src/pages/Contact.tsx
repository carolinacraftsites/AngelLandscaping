import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
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
                      href="mailto:akandrade1989@gmail.com" 
                      className="text-primary hover:underline break-all"
                      data-testid="link-email"
                    >
                      akandrade1989@gmail.com
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
          
          <Card data-testid="card-contact-form">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    data-testid="input-name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(828) 123-4567"
                    data-testid="input-phone"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={6}
                    data-testid="input-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit"
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
