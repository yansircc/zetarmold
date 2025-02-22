import { Timeline } from '@/components/data-sections/timeline';
import { events, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface StepsProps {
  background?: BackgroundVariant;
}

export function Steps({ background = 'default' }: StepsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <Timeline items={events} variant="single" />
    </TextWrapper>
  );
}
