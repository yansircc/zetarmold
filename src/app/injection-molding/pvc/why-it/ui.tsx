import { SectionWrapper } from '@/components/section-wrapper';
import { FeatureList } from '@/components/sections/feature-list';
import type { BackgroundVariant } from '../types';
import { features, basicInfo } from './data';

interface BenefitsProps {
  background?: BackgroundVariant;
}

export function Benefits({ background = 'default' }: BenefitsProps) {
  return (
    <SectionWrapper
      {...basicInfo}
      background={background}
      alignment="center"
      className="max-w-screen-lg"
    >
      <FeatureList features={features} />
    </SectionWrapper>
  );
}
