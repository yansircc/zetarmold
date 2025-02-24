import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';
import { basicInfo } from './data';

interface WhatIsProps {
  background?: BackgroundVariant;
}

export function WhatIs({ background = 'default' }: WhatIsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <p>
        It is a versatile and widely used material, especially in engineering
        and industrial applications, thanks to its excellent mechanical
        properties, resistance to wear, and chemical stability. Polyamide can be
        produced via the polymerization of diamines and dicarboxylic acids or
        the condensation of amino acids.
      </p>
      <p>
        Polyamides are formed through the condensation of diamines with
        dicarboxylic acids (e.g., hexamethylenediamine and adipic acid in the
        case of nylon 6,6) or through the polymerization of amino acids. The key
        feature of polyamide molecules is the amide bond (-CONH-), which
        provides the material with unique properties.
      </p>
    </TextWrapper>
  );
}
