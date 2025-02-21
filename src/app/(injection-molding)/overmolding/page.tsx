import PageWrapper from '@/components/page-wrapper';
import { basicInfo } from './data';
import BondingChart from './bonding-chart';
import HowItWorks from './how-it-works';
import WhatItIs from './what-it-is';
import Benifits from './benifits';

export default function Overmolding() {
  return (
    <PageWrapper {...basicInfo}>
      <WhatItIs />
      <HowItWorks />
      <BondingChart />
      <Benifits />
    </PageWrapper>
  );
}
