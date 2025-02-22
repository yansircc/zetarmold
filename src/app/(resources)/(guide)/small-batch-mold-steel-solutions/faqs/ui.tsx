import { faqs, basicInfo } from './data';
import type { BackgroundVariant } from '../types';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import { Faqs as FaqsComponent } from '@/components/data-sections/faqs';
interface FaqsProps {
  background?: BackgroundVariant;
}

export function Faqs({ background = 'default' }: FaqsProps) {
  return (
    <TextWrapper {...basicInfo} background={background}>
      <FaqsComponent faqs={faqs} type="single" defaultExpandFirst />
    </TextWrapper>
  );
}
