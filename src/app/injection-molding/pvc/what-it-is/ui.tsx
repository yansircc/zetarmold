import type { BackgroundVariant } from '../types';
import { BASIC_INFO, CONTENT, FEATURES } from './data';
import { FeatureList } from '@/components/sections/feature-list';
import { SectionWrapper } from '@/components/section-wrapper';
import { MediaBesideLayout } from '@/components/sections/media-beside';
interface WhatItIsProps {
  background?: BackgroundVariant;
}

export function WhatItIs({ background = 'default' }: WhatItIsProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background} alignment="left">
      <MediaBesideLayout image={BASIC_INFO.image} imagePosition="left">
        {CONTENT}
      </MediaBesideLayout>
      <FeatureList features={FEATURES} columns={2} />
    </SectionWrapper>
  );
}
