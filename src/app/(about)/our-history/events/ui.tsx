import { Timeline } from '@/components/data-sections/timeline';
import { events, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface EventsProps {
  background?: BackgroundVariant;
}

export function Events({ background = 'default' }: EventsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <Timeline items={events} variant="single" />
    </TextWrapper>
  );
}
