import { basicInfo, tips } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { Checklist } from '@/components/sections/checklist';
import type { BackgroundVariant } from '../types';

interface TipsProps {
  background?: BackgroundVariant;
}

export function Tips({ background = 'default' }: TipsProps) {
  return (
    <TextWrapper title={basicInfo.title} background={background}>
      <Checklist tips={tips} />
    </TextWrapper>
  );
}
