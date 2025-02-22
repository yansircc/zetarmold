import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';
import { basicInfo } from './data';
interface WhatItIsProps {
  background?: BackgroundVariant;
}

export function WhatItIs({ background = 'default' }: WhatItIsProps) {
  return (
    <TextWrapper
      {...basicInfo}
      background={background}
      contentClassName="max-w-3xl"
    >
      <p>
        A Low Volume Injection Mold is a type of injection mold designed for
        producing small batches of plastic parts with low volume requirements.
        Low Volume Injection Mold consists of 4 processes: 3D printing injection
        molds, vacuum casting mold and reaction injection mold,aluminum
        injection mold.
      </p>
    </TextWrapper>
  );
}
