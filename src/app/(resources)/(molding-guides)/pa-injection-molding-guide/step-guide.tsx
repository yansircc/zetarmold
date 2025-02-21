import { TextWrapper } from '@/components/data-sections/text-wrapper';
import FeatureCard from '@/components/data-sections/feature-card';

export default function StepGuide() {
  return (
    <TextWrapper
      title="How to Perform PA Injection Molding: A Step-by-Step Guide"
      description="Injection molding is an efficient and versatile manufacturing process used for producing high-precision parts. Polyamide (PA), commonly known as Nylon, is widely used for its excellent strength, wear resistance, and versatility. Here's a step-by-step guide for PA (Polyamide, commonly known as Nylon) injection molding processing:"
    >
      <FeatureCard
        props={[
          {
            title: 'Step 1: Material Selection and Preparation',
            description:
              'Selecting the right PA material is the first step in the injection molding process. Different types of PA materials, such as PA6, PA66, and PA12, have different temperature resistance, chemical resistance, impact strength, and flowability. Choose the material that fits your specific application requirements. Additionally, PA materials are highly hygroscopic, so they need to be dried before injection molding to ensure the moisture content is below 0.3%. For PA6, vacuum drying at 105°C for 8 hours is recommended. For PA66, it should be vacuum dried at 105°C for 12 hours. For PA12, drying at 85°C for 4-5 hours is sufficient. If necessary, additives like colorants, impact modifiers, or flame retardants can be incorporated into the PA material, ensuring even distribution for optimal product quality.',
            image:
              'https://zetarmold.com/wp-content/uploads/2025/01/3a0efd07-9bcc-4249-828e-bb9f16d099ac-scaled.webp',
          },
          {
            title: 'Step 2: Injection Molding Machine Setup',
            description:
              "When setting up the injection molding machine, it's important to adjust the temperature, pressure, and injection speed according to the PA material used. For PA6, the melting temperature should be between 230°C and 280°C, while for PA66, it should range from 260°C to 290°C. For PA12, the melting temperature should be set between 240°C and 300°C, but it should not exceed 310°C. The injection pressure for PA6 and PA66 typically ranges from 750 to 1250 bar, whereas for PA12, the maximum injection pressure can reach up to 1000 bar. Injection speed is typically high, but for glass-filled materials, it should be reduced slightly to avoid material degradation. Ensuring the machine is calibrated correctly is crucial for achieving consistent and high-quality results.",
            image:
              'https://zetarmold.com/wp-content/uploads/2025/01/da69f3cd30f59d26d480a1537c6c7486-scaled.webp',
          },
          {
            title: 'Step 3: Mold Design',
            description:
              'Mold design is critical for ensuring the success of the injection molding process. Proper design of the gate and runner systems is essential to ensure uniform filling of the mold cavity. For PA6, the gate diameter should not be less than 0.5 times the thickness of the plastic part. For PA12, the runner diameter for unfilled materials should be approximately 30mm, while for filled materials, a larger runner diameter of 5-8mm is needed. The shape of the runner should be circular, and the injection port should be as short as possible to minimize material loss. Mold temperature also needs to be adjusted based on the material used. For PA6, the mold temperature is typically set between 80°C and 90°C, while for PA66, it is usually around 80°C. For PA12, the mold temperature can range from 30°C to 100°C depending on whether the material is unfilled or filled.',
            image:
              'https://zetarmold.com/wp-content/uploads/2025/01/0ff32bc5a313905c57e84f6b34bb91b6-scaled.webp',
          },
          {
            title: 'Step 4: Injection Molding Process',
            description:
              "The injection molding process begins by closing the mold to ensure proper alignment and sealing. The molten PA material is then injected into the mold cavity under controlled pressure. To ensure complete filling of the mold cavities, the injection pressure needs to be maintained consistently. During the injection, the speed of injection is carefully controlled to avoid defects such as air bubbles or incomplete filling. After injection, holding pressure is applied to compensate for material shrinkage during cooling and to ensure the product's density and dimensional stability. The holding time is typically short, around 3-5 seconds. The cooling process generally takes between 10 to 30 seconds, depending on the part's thickness and the specific PA material used. Once the product has cooled and solidified, the mold opens, and the part is ejected from the cavity.",
            image:
              'https://zetarmold.com/wp-content/uploads/2025/01/bc706df3c239b0609a251b0fb22d461e-scaled.webp',
          },
          {
            title: 'Step 5: Post-Molding Operations',
            description:
              "After molding, additional post-processing steps are required. These may include trimming, deburring, or polishing to remove excess material, flash, or surface defects, improving the part's appearance and functionality. Some PA parts may also need annealing or conditioning to enhance toughness and dimensional stability. Annealing involves heating the part to a temperature slightly below the material's melting point and holding it at that temperature for a period of time. Conditioning, on the other hand, involves exposing the part to a humid environment to allow it to absorb moisture, which can improve its performance. These post-molding treatments ensure the final product meets quality standards and performs as expected in its application.",
            image:
              'https://zetarmold.com/wp-content/uploads/2025/01/d983e261-2fea-4fd5-9b85-a8ecdc659b1a-scaled.webp',
          },
          {
            title: 'Step 6: Quality Control and Packaging',
            description:
              "In the quality control phase, parts are inspected for defects and checked against dimensional, aesthetic, and mechanical requirements. Precision measurement tools like coordinate measuring machines (CMM) are often used to ensure parts meet the specified tolerances. Mechanical tests such as tensile strength or impact resistance may also be performed to verify the parts' durability and performance. Once parts pass inspection, they are packaged appropriately to protect them from damage or contamination during transportation and storage. Proper packaging ensures that the product maintains its quality and integrity until it reaches the customer.",
            image:
              'https://zetarmold.com/wp-content/uploads/2025/01/15014f27-3dc9-4696-865a-4c2f301f3e99-scaled.webp',
          },
        ]}
        columns={2}
      />
    </TextWrapper>
  );
}
