import { TabList } from '@/components/data-sections/tab-list';
import { processes, basicInfo } from './data';
import { TextWrapper } from '@/components/data-sections/text-wrapper';
import type { BackgroundVariant } from '../types';

interface ProcessProps {
  background?: BackgroundVariant;
}

export function Process({ background = 'default' }: ProcessProps) {
  return (
    <TextWrapper
      {...basicInfo}
      background={background}
      contentClassName="max-w-screen-xl"
    >
      <TabList items={processes} />
    </TextWrapper>
  );
}
