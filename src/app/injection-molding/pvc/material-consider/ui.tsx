import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO, GALLERY_ITEMS } from './data';
import { type BackgroundVariant } from '../types';
import { Gallery } from '@/components/sections/gallery';

interface MaterialConsiderProps {
  background?: BackgroundVariant;
}

export function MaterialConsider({
  background = 'default',
}: MaterialConsiderProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <Gallery items={GALLERY_ITEMS} />
    </SectionWrapper>
  );
}
