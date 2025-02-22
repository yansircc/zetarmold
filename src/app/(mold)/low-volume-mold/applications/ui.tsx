import { Gallery } from '@/components/data-sections/gallery';
import { teamMembers, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface ApplicationsProps {
  background?: BackgroundVariant;
}

export function Applications({ background = 'default' }: ApplicationsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <Gallery items={teamMembers} variant="image-top" columns={2} />
    </TextWrapper>
  );
}
