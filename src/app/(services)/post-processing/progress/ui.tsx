import { Steps } from '@/components/data-sections/steps';
import { progress, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '@/lib/utils';

interface ProgressProps {
  background?: BackgroundVariant;
}

export function Progress({ background = 'default' }: ProgressProps) {
  return (
    <TextWrapper
      {...basicInfo}
      background={background}
      contentClassName="max-w-screen-xl"
    >
      <Steps steps={progress} />
    </TextWrapper>
  );
}
