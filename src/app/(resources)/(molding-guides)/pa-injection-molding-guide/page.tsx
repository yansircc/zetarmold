import PageWrapper from '@/components/page-wrapper';
import { basicInfo } from './data';
import WhatItIs from './what-it-is';
import Difference from './what-is-difference';
import PACharacteristics from './pa-characteristics';
import PAProperty from './pa-property';
import CanBeMolded from './can-be-molded';
import KeyConsiderations from './key-considerations';
import DesignGuide from './design-guide';
import StepGuide from './step-guide';
import Advantages from './advantages';
import Disadvantages from './disadvantages';

export default function paInjectionMoldingGuide() {
  return (
    <PageWrapper {...basicInfo}>
      <WhatItIs />
      <Difference />
      <PACharacteristics />
      <PAProperty />
      <CanBeMolded />
      <KeyConsiderations />
      <DesignGuide />
      <StepGuide />
      <Advantages />
      <Disadvantages />
    </PageWrapper>
  );
}
