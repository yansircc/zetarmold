import { SectionWrapper } from '@/components/section-wrapper';
import { pageInfo } from './data';
import { type BackgroundVariant } from '../types';

export function PageHeader({
  background = 'default',
}: {
  background?: BackgroundVariant;
}) {
  return (
    <SectionWrapper {...pageInfo} background={background} alignment="center" />
  );
}
