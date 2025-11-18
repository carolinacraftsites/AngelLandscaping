import ServiceCard from '../ServiceCard';
import { Scissors } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <ServiceCard
      icon={Scissors}
      title="Mow & Trim"
      description="Professional lawn mowing and trimming services to keep your property looking pristine."
    />
  );
}
