import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { FeatureList } from '@/components/sections/feature-list';
import type { BackgroundVariant } from '../types';
import { features, basicInfo } from './data';

interface BenefitsProps {
  background?: BackgroundVariant;
}

export function Benefits({ background = 'default' }: BenefitsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <FeatureList features={features} />
    </TextWrapper>
  );
}
