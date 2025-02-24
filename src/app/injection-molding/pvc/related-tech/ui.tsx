import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO, RELATED_TECHS } from './data';
import { type BackgroundVariant } from '../types';
import { TextList } from '@/components/sections/text-list';
import { MediaBesideLayout } from '@/components/sections/media-beside';

interface RelatedTechProps {
  background?: BackgroundVariant;
}

export function RelatedTech({ background = 'default' }: RelatedTechProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <MediaBesideLayout
        image="https://shadcnblocks.com/images/block/placeholder-1.svg"
        imagePosition="right"
      >
        <TextList items={RELATED_TECHS} />
      </MediaBesideLayout>
    </SectionWrapper>
  );
}
