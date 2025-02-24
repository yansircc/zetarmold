import { Gallery } from '@/components/sections/gallery';
import { GALLERY_ITEMS, BASIC_INFO } from './data';
import { SectionWrapper } from '@/components/section-wrapper';
import type { BackgroundVariant } from '../types';

interface WhereItsUsedProps {
  background?: BackgroundVariant;
}

export function WhereItsUsed({ background = 'default' }: WhereItsUsedProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <Gallery items={GALLERY_ITEMS} columns={3} />
    </SectionWrapper>
  );
}
