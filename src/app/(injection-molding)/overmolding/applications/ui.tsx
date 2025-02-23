import { features, basicInfo } from './data';
import { FeatureList } from '@/components/sections/feature-list';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface ApplicationsProps {
  background?: BackgroundVariant;
}

export function Applications({ background = 'default' }: ApplicationsProps) {
  return (
    <TextWrapper
      {...basicInfo}
      imagePosition="left"
      isSticky={true}
      background={background}
    >
      <FeatureList features={features} columns={1} />
    </TextWrapper>
  );
}
