import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO, STEPS } from './data';
import { type BackgroundVariant } from '../types';
import { Steps } from '@/components/data-sections/steps';
interface HowItWorksProps {
  background?: BackgroundVariant;
}

export function HowItWorks({ background = 'default' }: HowItWorksProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <Steps steps={STEPS} />
    </SectionWrapper>
  );
}
