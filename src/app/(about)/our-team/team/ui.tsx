import { Gallery } from '@/components/data-sections/gallery';
import { teamMembers, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface TeamProps {
  background?: BackgroundVariant;
}

export function Team({ background = 'default' }: TeamProps) {
  return (
    <TextWrapper
      {...basicInfo}
      background={background}
      contentClassName="max-w-screen-xl"
    >
      <Gallery items={teamMembers} variant="image-top" columns={3} />
    </TextWrapper>
  );
}
