import { FEATURES, BASIC_INFO } from './data';
import { FeatureList } from '@/components/sections/feature-list';
import { SectionWrapper } from '@/components/section-wrapper';
import type { BackgroundVariant } from '../types';
import { MediaBesideLayout } from '@/components/sections/media-beside';
interface WhyChooseUsProps {
  background?: BackgroundVariant;
}

export function WhyChooseUs({ background = 'default' }: WhyChooseUsProps) {
  return (
    <SectionWrapper
      {...BASIC_INFO}
      background={background}
      className="max-w-screen-lg"
    >
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
