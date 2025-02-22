import { Timeline } from '@/components/data-sections/timeline';
import { milestonesProps } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';

export function Milestones() {
  return (
    <TextWrapper>
      <Timeline {...milestonesProps} />
    </TextWrapper>
  );
}
