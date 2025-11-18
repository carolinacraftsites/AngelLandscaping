import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-200" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        <Icon className="h-8 w-8 text-primary mb-4" data-testid="icon-service" />
        <h3 className="text-lg font-semibold mb-2" data-testid="text-service-title">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground" data-testid="text-service-description">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
