import { Wrench, HeartPulse, Car, Factory, ShoppingBag } from 'lucide-react';
import type { FeatureItem } from '@/components/sections/feature-list';

export const basicInfo = {
  title: 'What are the Applications of Overmolding?',
  description:
    'Overmolding is a versatile manufacturing process that can be used to create complex parts with unique properties and functionality, making it applicable to a wide range of industries.',
  image: 'https://zetarmold.com/wp-content/uploads/2024/05/maxresdefault-2.jpg',
  youtubeId: '6gAjMdkEd2s',
};

export const features: FeatureItem[] = [
  {
    icon: <Wrench className="size-6" />,
    title: 'Hardware Tools',
    description:
      'Used in hand tools like wrenches, pliers, screwdrivers, knives, saw blades, and drill bits to improve durability and grip comfort.',
  },
  {
    icon: <HeartPulse className="size-6" />,
    title: 'Medical Devices',
    description:
      'Applied in medical devices like syringes, needles, and implantable devices, where precision and accuracy are crucial.',
  },
  {
    icon: <Car className="size-6" />,
    title: 'Automotive',
    description:
      'Utilized in automotive components like dashboards, door handles, and trim components for enhanced durability and functionality.',
  },
  {
    icon: <Factory className="size-6" />,
    title: 'Industrial Equipment',
    description:
      'Implemented in industrial equipment like machines, pumps, and valves where durability and performance are essential.',
  },
  {
    icon: <ShoppingBag className="size-6" />,
    title: 'Consumer Products',
    description:
      'Featured in consumer products like toys, appliances, and electronics, where aesthetics and functionality are key considerations.',
  },
];
