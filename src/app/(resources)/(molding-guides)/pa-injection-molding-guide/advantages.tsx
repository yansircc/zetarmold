import { TextWrapper } from '@/components/data-sections/text-wrapper';
import FeatureList from '@/components/data-sections/feature-list';
import {
  Shield,
  Repeat,
  Move,
  Beaker,
  Thermometer,
  Shapes,
  Factory,
  Droplets,
  Zap,
  Cable,
  Sun,
  Recycle,
  DollarSign,
} from 'lucide-react';

export default function Advantages() {
  return (
    <TextWrapper
      title="What are the advantages of PA Injection Molding?"
      description="PA (Polyamide), also known as Nylon, is a versatile and high-performance material commonly used in injection molding. Its unique properties make it an excellent choice for producing durable and reliable components across various industries. Below are the key advantages of PA injection molding:"
    >
      <FeatureList
        props={[
          {
            icon: <Shield className="size-6" />,
            title: 'Strength and Toughness',
            description:
              'PA materials, especially PA6 and PA66, are known for their high tensile strength and impact toughness. These properties allow PA injection-molded parts to withstand heavy mechanical stress and vibrations without losing their shape or integrity. For example, PA-made engine covers and air intake manifolds in the automotive industry can endure the stresses of vehicle operation while maintaining structural integrity.',
          },
          {
            icon: <Repeat className="size-6" />,
            title: 'Fatigue Resistance',
            description:
              'PA exhibits resistance to cyclic loading, making it suitable for components subject to repeated use, such as gears and bearings. PA injection-molded gears, for instance, can operate for extended periods without breaking due to fatigue, ensuring the reliability of mechanical systems.',
          },
          {
            icon: <Move className="size-6" />,
            title: 'Excellent Wear and Abrasion Resistance',
            description:
              'PA materials have a relatively low coefficient of friction, which translates to excellent wear resistance. This makes PA parts ideal for applications where moving components experience friction, such as conveyor belts and industrial rollers. In material handling systems, PA-made rollers help reduce wear, extend equipment lifespan, and minimize maintenance costs and downtime.',
          },
          {
            icon: <Beaker className="size-6" />,
            title: 'Chemical Resistance',
            description:
              'PA injection-molded parts are resistant to a wide range of chemicals, including oils, fuels, weak acids, and bases. This property makes PA well-suited for environments where exposure to chemicals is common. For example, PA materials are used in automotive components and industrial machinery, where they can resist corrosion and maintain performance in harsh conditions. PA can also be used in storage tanks and pipes for transporting chemicals that are not highly corrosive.',
          },
          {
            icon: <Thermometer className="size-6" />,
            title: 'Thermal Stability',
            description:
              "PA materials offer good thermal stability, withstanding relatively high temperatures without significant deformation. For example, in the electronics industry, PA components such as housings for electronic devices can manage heat dissipation, preventing deformation and protecting internal components. PA's ability to function in higher temperature ranges adds to its versatility in various applications.",
          },
          {
            icon: <Shapes className="size-6" />,
            title: 'Design Flexibility',
            description:
              'PA injection molding allows for the creation of complex and intricate geometries, such as undercuts, internal cavities, and thin-walled structures. This design flexibility helps manufacturers meet specific product requirements, even in demanding applications. For instance, in consumer products, PA can be molded into ergonomic and aesthetically pleasing casings with unique shapes and forms.',
          },
          {
            icon: <Factory className="size-6" />,
            title: 'Cost-Effectiveness for Mass Production',
            description:
              'Once the injection molding mold is set up, the process becomes highly efficient for large-scale production. PA parts can be produced quickly and consistently, which lowers the unit cost of production. This makes PA injection molding an attractive option for industries that require high-volume production with consistent quality, such as automotive, medical, and consumer electronics.',
          },
          {
            icon: <Droplets className="size-6" />,
            title: 'Low Moisture Absorption',
            description:
              'PA materials are known for their relatively low moisture absorption compared to other engineering plastics. This makes them suitable for applications where moisture resistance is important, such as in automotive and electrical components. Low moisture absorption ensures dimensional stability and performance under varying environmental conditions.',
          },
          {
            icon: <Zap className="size-6" />,
            title: 'Impact Resistance',
            description:
              'PA has excellent impact resistance, even at low temperatures, making it ideal for applications where parts are subject to impacts or vibrations. This property is particularly beneficial for protective gear and components exposed to dynamic stresses.',
          },
          {
            icon: <Cable className="size-6" />,
            title: 'Good Electrical Insulation',
            description:
              'PA materials possess good electrical insulation properties, which makes them suitable for use in electrical and electronic applications. For instance, PA is often used in the production of electrical connectors, housings for electrical devices, and insulation components, ensuring reliable performance in electrical systems.',
          },
          {
            icon: <Sun className="size-6" />,
            title: 'Good UV Resistance',
            description:
              'PA materials have good resistance to UV radiation, which makes them suitable for applications exposed to sunlight or other sources of UV light. This UV resistance helps maintain the structural integrity and appearance of PA components over time, making it useful in outdoor and exposed environments.',
          },
          {
            icon: <Recycle className="size-6" />,
            title: 'Recyclability',
            description:
              'PA materials are recyclable, which makes them a more sustainable choice for manufacturing. Recycled PA can be used in various applications, reducing waste and supporting environmental sustainability initiatives.',
          },
          {
            icon: <DollarSign className="size-6" />,
            title: 'Cost-Efficiency for High Volumes',
            description:
              'The injection molding process, once the molds are developed, is very cost-effective for high-volume production. The ability to produce large quantities of parts quickly and consistently helps reduce production costs, making PA injection molding a viable option for large-scale manufacturing.',
          },
        ]}
        columns={3}
      />
    </TextWrapper>
  );
}
