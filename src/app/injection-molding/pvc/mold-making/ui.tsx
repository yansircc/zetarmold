import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO, FEATURES } from './data';
import { type BackgroundVariant } from '../types';
import { FeatureList } from '@/components/sections/feature-list';

interface MoldMakingProps {
  background?: BackgroundVariant;
}

export function MoldMaking({ background = 'default' }: MoldMakingProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <FeatureList features={FEATURES} />
    </SectionWrapper>
  );
}
