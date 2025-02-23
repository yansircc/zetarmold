import { SectionWrapper } from '@/components/section-wrapper';
import { pageInfo } from './data';
import { type BackgroundVariant } from '../types';

export function PageHeader({
  background = 'default',
  alignment = 'center',
}: {
  background?: BackgroundVariant;
  alignment?: 'center' | 'left';
}) {
  return (
    <SectionWrapper
      {...pageInfo}
      background={background}
      alignment={alignment}
    />
  );
}
