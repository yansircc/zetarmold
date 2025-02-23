import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureList } from '@/components/sections/feature-list';
import type { BackgroundVariant } from '../types';
import { BASIC_INFO, FEATURES } from './data';

interface BenefitsProps {
  background?: BackgroundVariant;
}

export function Benefits({ background = 'default' }: BenefitsProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <FeatureList features={FEATURES} />
    </SectionWrapper>
  );
}
