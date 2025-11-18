import { Helmet } from "react-helmet-async";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Leaf, Droplets, Wind, Trees, Fence, Home, Paintbrush, Hammer, Wrench, Sparkles, PanelTop, Triangle, BrickWall, Blocks } from "lucide-react";

const landscapingServices = [
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
    title: "Lawn Care",
    description: "Comprehensive lawn maintenance including fertilization, aeration, and weed control."
  },
  {
    icon: Sparkles,
    title: "Pressure Washing",
    description: "Powerful cleaning for driveways, decks, siding, and outdoor surfaces."
  },
  {
    icon: Wind,
    title: "Leaf Removal",
    description: "Efficient seasonal leaf cleanup to maintain a tidy and healthy lawn."
  },
  {
    icon: Wrench,
    title: "Spring & Fall Clean Up",
    description: "Thorough seasonal property maintenance to prepare your landscape year-round."
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
    icon: PanelTop,
    title: "Decks",
    description: "Quality deck construction and renovation to expand your outdoor living space."
  },
  {
    icon: BrickWall,
    title: "Retaining Walls",
    description: "Durable retaining walls for erosion control and landscape terracing."
  },
  {
    icon: Home,
    title: "All Gutters Works",
    description: "Complete gutter installation, cleaning, and repair services."
  },
  {
    icon: Paintbrush,
    title: "Paint Decks",
    description: "Professional deck staining and painting to protect and beautify your outdoor space."
  }
];

const constructionServices = [
  {
    icon: Home,
    title: "House Remodeling",
    description: "Complete home renovation services to transform and modernize your living space."
  },
  {
    icon: Blocks,
    title: "Tile",
    description: "Expert tile installation for floors, backsplashes, and bathroom surfaces."
  },
  {
    icon: Triangle,
    title: "Roofing",
    description: "Reliable roofing installation, repair, and replacement for lasting protection."
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting services for a fresh, polished appearance."
  },
  {
    icon: Hammer,
    title: "Stone Work",
    description: "Beautiful stonework and custom masonry for patios, walkways, and features."
  },
  {
    icon: BrickWall,
    title: "Masonry",
    description: "Professional brick and stone masonry for durable and attractive structures."
  },
  {
    icon: Blocks,
    title: "Concrete",
    description: "Quality concrete work for driveways, foundations, and hardscaping projects."
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - Angel Landscaping LLC | Landscaping & Home Improvement</title>
        <meta name="description" content="Explore our comprehensive landscaping and home improvement services including lawn care, stonework, masonry, roofing, painting, and more. Serving Western North Carolina with quality workmanship." />
      </Helmet>
      <div className="min-h-screen py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4" data-testid="text-services-title">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-description">
              Comprehensive landscaping and home improvement solutions tailored to your needs
            </p>
          </div>
        
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="flex-grow border-t border-border"></div>
            <h2 className="px-4 text-2xl font-bold text-primary" data-testid="text-category-landscaping">
              Landscaping & Exterior Services
            </h2>
            <div className="flex-grow border-t border-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landscapingServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-8">
            <div className="flex-grow border-t border-border"></div>
            <h2 className="px-4 text-2xl font-bold text-primary" data-testid="text-category-construction">
              Construction & Home Improvements
            </h2>
            <div className="flex-grow border-t border-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
