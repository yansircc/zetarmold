import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO } from './data';
import { type BackgroundVariant } from '../types';

interface PartnerWithUsProps {
  background?: BackgroundVariant;
}

export function PartnerWithUs({ background = 'default' }: PartnerWithUsProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Partner With Us</h3>
        </div>
      </div>
    </SectionWrapper>
  );
}
