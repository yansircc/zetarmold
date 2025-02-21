import { TextWrapper } from '@/components/data-sections/text-wrapper';
import FeatureList from '@/components/data-sections/feature-list';
import {
  Wrench, // For hardware tools
  HeartPulse, // For medical devices
  Car, // For automotive
  Factory, // For industrial equipment
  ShoppingBag, // For consumer products
} from 'lucide-react';

export default function Applications() {
  return (
    <TextWrapper
      title="What are the Applications of Overmolding?"
      description="Overmolding is a versatile manufacturing process that can be used to create complex parts with unique properties and functionality, making it applicable to a wide range of industries."
      image="https://zetarmold.com/wp-content/uploads/2024/05/maxresdefault-2.jpg"
      youtubeId="6gAjMdkEd2s"
      imagePosition="left"
      isSticky={true}
    >
      <FeatureList
        props={[
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
        ]}
        columns={1}
      />
    </TextWrapper>
  );
}

// Handware tools: Overmolding can be used to make hand tools like wrenches, pliers, and screwdrivers, knives, saw blades, and drill bits tougher and easier to hold.

// Medical Devices: Overmolding is used in medical devices like syringes, needles, and implantable devices, where precision and accuracy are crucial.

// Automotive: Overmolding is used in car stuff like dashboards, door handles, and trim components, where you need them to last and work good.

// Industrial Equipment: Overmolding is used in industrial equipment like machines, pumps, and valves where you need them to be tough and work good.

// Consumer Products: Overmolding is used in consumer products like toys, appliances, and electronics, where looks and how it works are important.
