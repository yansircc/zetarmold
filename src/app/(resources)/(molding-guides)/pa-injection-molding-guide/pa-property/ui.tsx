import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { FeatureList } from '@/components/data-sections/feature-list';
import type { BackgroundVariant } from '../types';
import { features, basicInfo } from './data';

export function PaProperty() {
  return <TextWrapper {...basicInfo}>{/* Section content here */}</TextWrapper>;
}
