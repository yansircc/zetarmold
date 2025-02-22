import { Gallery } from '@/components/data-sections/gallery';
import { equipments, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface EquipmentsProps {
  background?: BackgroundVariant;
}

export function Equipments({ background = 'default' }: EquipmentsProps) {
  return (
    <TextWrapper
      {...basicInfo}
      background={background}
      contentClassName="max-w-screen-xl"
    >
      <Gallery items={equipments} variant="image-top" columns={3} />
    </TextWrapper>
  );
}
