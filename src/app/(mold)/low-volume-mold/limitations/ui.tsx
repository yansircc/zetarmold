import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { FeatureList } from '@/components/data-sections/feature-list';
import type { BackgroundVariant } from '../types';
import { features, basicInfo } from './data';

interface LimitationsProps {
  background?: BackgroundVariant;
}

export function Limitations({ background = 'default' }: LimitationsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <FeatureList features={features} />
    </TextWrapper>
  );
}
