import { SectionWrapper } from '@/components/section-wrapper';
import { pageInfo } from './data';
import { type BackgroundVariant } from '../types';

export function PageHeader({
  background = 'default',
  alignment = 'left',
}: {
  background?: BackgroundVariant;
  alignment?: 'left' | 'center';
}) {
  return (
    <SectionWrapper
      {...pageInfo}
      background={background}
      alignment={alignment}
    />
  );
}
