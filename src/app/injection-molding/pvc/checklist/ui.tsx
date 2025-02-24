import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO, CHECKLIST } from './data';
import { type BackgroundVariant } from '../types';
import { Checklist as ChecklistComponent } from '@/components/sections/checklist';

interface ChecklistProps {
  background?: BackgroundVariant;
}

export function Checklist({ background = 'default' }: ChecklistProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background} alignment="center">
      <ChecklistComponent tips={CHECKLIST} background={background} />
    </SectionWrapper>
  );
}
