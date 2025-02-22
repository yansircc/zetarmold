import { TextWrapper } from '@/components/data-sections/text-wrapper';
import Faqs from '@/components/data-sections/faqs';
import type { BackgroundVariant } from './types';

interface HowItWorksProps {
  background?: BackgroundVariant;
}

export default function HowItWorks({
  background = 'default',
}: HowItWorksProps) {
  return (
    <TextWrapper
      title="How Overmolding Works"
      description="Overmolding is a tricky process that has a bunch of steps and needs you to plan and do it right. Here's a quick look at how overmolding works"
      background={background}
    >
      <Faqs
        faqs={[
          {
            question: '1. Design and Prototype:',
            answer:
              'Designers create a 3D model of the main part and the other material. They make prototypes to test the design and make sure it meets the required specs.',
          },
          {
            question: '2. Tooling:',
            answer:
              'Tooling is made for both the main part and the other material. Tooling includes molds, and other equipment needed for the molding process.',
          },
          {
            question: '3. Main Part Production:',
            answer:
              'The main part is made using the main tooling. The main part is usually made of a hard material, like hard plastic (PP, ABS, PA, PC, etc).',
          },
          {
            question: '4. Overmolding Process:',
            answer:
              'The other material is injected into the mold, which has the main part. The other material flows around the main part, making a strong bond. The other material is designed to fit the shape of the main part.',
          },
          {
            question: '5. Cooling and Ejection:',
            answer:
              'The mold is cooled for the other material to solidify. Then the mold is ejected, and the overmolded part is removed.',
          },
          {
            question: '6. Finishing:',
            answer:
              'We check the overmolded part to make sure it&apos;s good to go. We trim off any extra plastic, clean it up, and get it ready for the next step.',
          },
        ]}
      />
    </TextWrapper>
  );
}
