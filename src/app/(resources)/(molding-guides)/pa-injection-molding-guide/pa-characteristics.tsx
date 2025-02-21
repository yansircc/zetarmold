import FeatureList from '@/components/data-sections/feature-list';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import {
  BeakerIcon,
  Puzzle,
  LayersIcon,
  Zap,
  Feather,
  Thermometer,
  Shield,
  Cable,
  Recycle,
  Sun,
  Flame,
} from 'lucide-react';

export default function PACharacteristics() {
  return (
    <TextWrapper
      title="What are the characteristics of PA?"
      description="Polyamide (PA), also known as Nylon, is a versatile synthetic polymer with a wide range of properties that make it suitable for various industrial and consumer applications. Here's a comprehensive summary of its characteristics:"
    >
      <FeatureList
        props={[
          {
            icon: <Shield className="size-6" />,
            title: 'High Strength',
            description:
              'PA has excellent tensile strength, typically ranging from 50 to 200 MPa depending on the specific type (e.g., PA6, PA66). This makes it ideal for applications involving mechanical stress, such as industrial ropes, cables, and structural components.',
          },
          {
            icon: <Zap className="size-6" />,
            title: 'Good Toughness',
            description:
              'PA materials exhibit high impact resistance, allowing them to absorb energy during mechanical impacts. This is crucial in applications like automotive bumpers, where the material can help protect other parts from collision damage.',
          },
          {
            icon: <Feather className="size-6" />,
            title: 'Abrasion Resistance',
            description:
              'PA is highly resistant to wear and abrasion, making it suitable for components subject to friction, such as gears, bearings, and conveyor system rollers. Its durability under constant friction helps maintain performance over time.',
          },
          {
            icon: <LayersIcon className="size-6" />,
            title: 'Low Friction',
            description:
              'With a low coefficient of friction, PA is ideal for parts that need to minimize wear, such as sliding components, bushings, and bearings, ensuring long-term durability with minimal maintenance.',
          },
          {
            icon: <Thermometer className="size-6" />,
            title: 'Good Heat Resistance',
            description:
              'PA materials can endure moderate to high temperatures. For example, PA66 has a melting point of about 260°C, while PA46 can withstand temperatures up to 180°C in continuous use, making them suitable for environments like engine compartments.',
          },
          {
            icon: <Cable className="size-6" />,
            title: 'Low Thermal Conductivity',
            description:
              'PA has relatively low thermal conductivity, which makes it a good thermal insulator. This property is beneficial in applications such as electronic device housings, where it helps prevent overheating of internal components.',
          },
          {
            icon: <BeakerIcon className="size-6" />,
            title: 'Chemical Resistance',
            description:
              'PA materials show resistance to a wide range of chemicals, including oils, greases, and solvents. This makes them suitable for use in industries like automotive, chemical processing, and food production. However, they may be susceptible to strong acids or alkalis under certain conditions.',
          },
          {
            icon: <Feather className="size-6" />,
            title: 'Moisture Absorption',
            description:
              'PA is hygroscopic and can absorb moisture from the environment. While moisture absorption can increase flexibility in some cases (acting as a plasticizer), excessive moisture can lead to dimensional changes and a decrease in mechanical properties. Certain variants, like PA12, have low moisture absorption, enhancing dimensional stability.',
          },
          {
            icon: <Cable className="size-6" />,
            title: 'Good Electrical Insulation',
            description:
              'PA is a good electrical insulator and is commonly used for electrical components like wire insulation and connectors, preventing electrical leakage or short circuits. Its dielectric strength typically ranges from 15 to 20 kV/mm.',
          },
          {
            icon: <Puzzle className="size-6" />,
            title: 'Good Moldability',
            description:
              'PA materials can be easily molded through various processes, such as injection molding, extrusion, and 3D printing. This makes them suitable for mass production of complex-shaped parts used in consumer goods and industrial applications.',
          },
          {
            icon: <Recycle className="size-6" />,
            title: 'Recyclability',
            description:
              'PA materials are recyclable, with recycled PA being used for products with slightly lower performance requirements. This helps reduce environmental impact and promotes sustainability.',
          },
          {
            icon: <LayersIcon className="size-6" />,
            title: 'Dimensional Stability',
            description:
              'PA materials maintain their dimensions well under normal conditions, although excessive moisture absorption can affect their size and shape. Certain grades, like PA12, offer better dimensional stability due to their low moisture absorption.',
          },
          {
            icon: <Shield className="size-6" />,
            title: 'Creep Resistance',
            description:
              'PA exhibits good resistance to creep, which makes it suitable for applications where constant stress is applied over a long period, such as structural components in machinery or automotive parts.',
          },
          {
            icon: <Zap className="size-6" />,
            title: 'Fatigue Resistance',
            description:
              'PA materials demonstrate good resistance to fatigue, which is important in applications that experience repetitive or cyclical stresses, such as moving parts in machinery or automotive components.',
          },
          {
            icon: <Sun className="size-6" />,
            title: 'UV Resistance',
            description:
              'PA materials generally have good resistance to UV radiation, making them suitable for outdoor applications exposed to sunlight, such as automotive parts, construction materials, and outdoor equipment.',
          },
          {
            icon: <Flame className="size-6" />,
            title: 'Flame Retardancy',
            description:
              'Certain grades of PA exhibit flame retardant properties, helping to slow or prevent the spread of fire. This makes them useful in applications that require fire safety standards, such as electrical components and automotive parts.',
          },
        ]}
      />
    </TextWrapper>
  );
}
