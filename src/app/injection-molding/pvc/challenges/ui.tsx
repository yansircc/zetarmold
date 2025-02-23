import { SectionWrapper } from '@/components/section-wrapper';
import { BASIC_INFO } from './data';
import { type BackgroundVariant } from '../types';

interface ChallengesProps {
  background?: BackgroundVariant;
}

export function Challenges({ background = 'default' }: ChallengesProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Challenges</h3>
        </div>
      </div>
    </SectionWrapper>
  );
}
