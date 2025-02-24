import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO, FEATURES } from './data';
import { type BackgroundVariant } from '../types';
import { MediaBesideLayout } from '@/components/sections/media-beside';
import { FeatureList } from '@/components/sections/feature-list';
interface PartnerWithUsProps {
  background?: BackgroundVariant;
}

export function PartnerWithUs({ background = 'default' }: PartnerWithUsProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <MediaBesideLayout
        youtubeId={BASIC_INFO.youtubeId}
        imagePosition="left"
        isSticky={true}
      >
        <FeatureList features={FEATURES} columns={1} />
      </MediaBesideLayout>
    </SectionWrapper>
  );
}
