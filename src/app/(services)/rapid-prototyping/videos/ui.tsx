import { Gallery } from '@/components/data-sections/gallery';
import { videos, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface VideosProps {
  background?: BackgroundVariant;
}

export function Videos({ background = 'default' }: VideosProps) {
  return (
    <TextWrapper
      {...basicInfo}
      background={background}
      contentClassName="max-w-screen-xl"
    >
      <Gallery items={videos} columns={3} variant="image-top" />
    </TextWrapper>
  );
}
