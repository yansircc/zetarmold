import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO, FEATURES } from './data';
import { type BackgroundVariant } from '../types';
import { FeatureList } from '@/components/sections/feature-list';
import { MediaBesideLayout } from '@/components/sections/media-beside';
interface ChallengesProps {
  background?: BackgroundVariant;
}

export function Challenges({ background = 'default' }: ChallengesProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <MediaBesideLayout
        image="https://shadcnblocks.com/images/block/placeholder-1.svg"
        imagePosition="left"
        isSticky={true}
      >
        <FeatureList features={FEATURES} columns={1} />
        <p>
          <b>ZetarMold&apos;s Edge</b>: Our engineers tame PVC&apos;s quirks
          like pros, ensuring your parts are flawless.
        </p>
      </MediaBesideLayout>
    </SectionWrapper>
  );
}
