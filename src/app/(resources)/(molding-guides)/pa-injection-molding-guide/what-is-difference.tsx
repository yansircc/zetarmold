import { TextWrapper } from '@/components/data-sections/text-wrapper';
import Faqs from '@/components/data-sections/faqs';

export default function Difference() {
  return (
    <TextWrapper
      title="What are the different types of PA materials?"
      description="PA (Polyamide), commonly known as Nylon, is a family of synthetic polymers with various types and characteristics. These materials are versatile, offering a wide range of mechanical, thermal, and chemical properties that make them suitable for numerous applications, from textiles to automotive parts. Below is a detailed description of the main types of PA materials, their properties, and applications:

"
    >
      <Faqs
        faqs={[
          {
            question: '1. PA 6 (Nylon 6):',
            answer:
              'PA 6 (Nylon 6) is produced by the ring-opening polymerization of caprolactam. It offers excellent toughness, flexibility, and high tensile strength. With superior abrasion resistance, PA 6 is ideal for applications involving wear, such as gears and bearings. It also has good chemical resistance to oils and solvents, though it is susceptible to strong acids and bases. PA 6 is commonly used in textiles (e.g., nylon stockings), automotive components (e.g., air intake manifolds, fuel lines), and electrical equipment (e.g., cable ties, connectors).',
          },
          {
            question: '2. PA 66 (Nylon 66):',
            answer:
              'PA 66 (Nylon 66) is synthesized from hexamethylenediamine and adipic acid. It has a higher melting point (around 255°C) than PA 6, offering better heat resistance and stiffness. PA 66 exhibits excellent dimensional stability and lower moisture absorption, making it suitable for high-performance applications. It also has good electrical insulation properties. PA 66 is widely used in the production of high-strength engineering plastics, automotive components (e.g., gears, nuts, bolts), aerospace parts, and electrical devices.',
          },
          {
            question: '3. PA 12 (Nylon 12):',
            answer:
              'PA 12 (Nylon 12) is produced through the polymerization of laurolactam. It is known for its very low moisture absorption, which helps maintain dimensional stability in humid environments. PA 12 offers excellent impact resistance and good chemical resistance, making it suitable for harsh chemical environments. Additionally, it is highly processable and can be easily molded or extruded into various shapes. PA 12 is commonly used for precision parts like watch straps, optical components, and in the medical field for tubing and catheters.',
          },
          {
            question: '4. PA 11 (Nylon 11):',
            answer:
              'PA 11 (Nylon 11) is a bio-based polyamide derived from castor oil. It has a lower melting point and excellent flexibility, impact resistance, and chemical resistance. It also features a smooth surface finish, making it ideal for applications where aesthetics or fluid flow characteristics are important. PA 11 is often used in flexible tubing and hoses in the automotive and aerospace industries, as well as in sports equipment (e.g., ski boots), due to its toughness and pliability.',
          },
          {
            question: '5. PA 46 (Nylon 46):',
            answer:
              'PA 46 (Nylon 46) is produced through the polycondensation of 1,4-diaminobutane and adipic acid. Known for its exceptional thermal stability and mechanical strength, it is capable of withstanding high temperatures and harsh chemical environments. PA 46 is suitable for high-performance engineering applications that require superior heat resistance and durability, including automotive and industrial components.',
          },
          {
            question: '6. PA 610 (Nylon 610):',
            answer:
              'PA 610 (Nylon 610) is a copolymer of PA 6 and sebacic acid. It offers a higher melting point, better chemical resistance, and lower moisture absorption compared to PA 6. PA 610 is more environmentally friendly, as it is derived from renewable resources. It is commonly used in automotive parts, industrial components, and applications requiring good chemical resistance.',
          },
          {
            question: '7. PA 612 (Nylon 612):',
            answer:
              'PA 612 (Nylon 612) is made from 1,2-diaminocyclohexane and sebacic acid. It features low moisture absorption, excellent chemical resistance, and superior mechanical properties. PA 612 also has good lubricating properties, making it ideal for reducing friction in moving parts. It is commonly used in bearings, gears, and automotive components.',
          },
          {
            question: '8. Polyphthalamide (PPA):',
            answer:
              'Polyphthalamide (PPA) is a high-performance aromatic polyamide known for its excellent resistance to high temperatures and outstanding mechanical properties. It maintains its stability under high heat and chemical exposure, making it ideal for industrial, automotive, and aerospace applications. PPA is often used in components that require exceptional thermal and mechanical performance in extreme conditions.',
          },
          {
            question: '9. Polyamide-imide (PAI):',
            answer:
              'Polyamide-imide (PAI) is a high-performance polyamide with exceptional heat resistance, mechanical strength, and wear resistance. It performs well in extreme working environments, where high temperature and durability are essential. PAI is used in aerospace, automotive, and industrial applications where superior thermal and mechanical properties are needed for demanding parts.',
          },
        ]}
      />
    </TextWrapper>
  );
}
