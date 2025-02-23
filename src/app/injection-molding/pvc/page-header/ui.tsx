import { SectionWrapper } from '@/components/section-wrapper/index';
import { PAGE_HEADER_INFO } from './data';
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
      {...PAGE_HEADER_INFO}
      background={background}
      alignment={alignment}
      headingLevel="h1"
    />
  );
}
