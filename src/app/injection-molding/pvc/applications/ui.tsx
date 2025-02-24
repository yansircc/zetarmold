'use client';

import { CarouselLayout } from '@/components/sections/carousel';
import { APPLICATIONS, SECTION_INFO } from './data';
import type { BackgroundVariant } from '../types';
import { SectionWrapper } from '@/components/section-wrapper';

export function ApplicationsCarousel({
  background = 'default',
}: {
  background?: BackgroundVariant;
}) {
  return (
    <SectionWrapper {...SECTION_INFO} background={background}>
      <CarouselLayout items={APPLICATIONS} showProgress showControls />
    </SectionWrapper>
  );
}
