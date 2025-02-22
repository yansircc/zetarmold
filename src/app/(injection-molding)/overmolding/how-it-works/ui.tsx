import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { Faqs } from '@/components/data-sections/faqs';
import type { BackgroundVariant } from '../types';
import { faqs, basicInfo } from './data';

interface HowItWorksProps {
  background?: BackgroundVariant;
}

export function HowItWorks({ background = 'default' }: HowItWorksProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <Faqs faqs={faqs} />
    </TextWrapper>
  );
}
