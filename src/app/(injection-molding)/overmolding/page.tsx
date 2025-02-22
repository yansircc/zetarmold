import PageWrapper from '@/components/page-wrapper';
import { basicInfo } from './data';
import BondingChart from './bonding-chart';
import HowItWorks from './how-it-works';
import WhatItIs from './what-it-is';
import Benifits from './benifits';
import Applications from './applications';
import Checklist from './tips';
import Solutions from './solutions';

export default function Overmolding() {
  return (
    <PageWrapper {...basicInfo} background="inverse">
      <WhatItIs />
      <HowItWorks background="gray" />
      <BondingChart />
      <Benifits background="gray" />
      <Applications />
      <Checklist background="gray" />
      <Solutions />
    </PageWrapper>
  );
}
