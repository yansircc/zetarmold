import { SectionWrapper } from '@/components/section-wrapper';
import { DECISION_TREE_DATA, BASIC_INFO } from './data';
import { type BackgroundVariant } from '../types';
import { FlowDecisionTree } from '@/components/sections/flow-decision-tree';
interface DecisionTreeProps {
  background?: BackgroundVariant;
}

export function DecisionTree({ background = 'default' }: DecisionTreeProps) {
  return (
    <SectionWrapper {...BASIC_INFO} background={background} alignment="center">
      <FlowDecisionTree steps={DECISION_TREE_DATA} />
    </SectionWrapper>
  );
}
