import { Chart } from './chart';
import { HowItWorks } from './how-it-works';
import { WhatItIs } from './what-it-is';
import { Benefits } from './benefits';
import { Applications } from './applications';
import { Tips } from './tips';
import { Solutions } from './solutions';
import { PageHeader } from './page-header';

export default function Overmolding() {
  return (
    <main>
      <PageHeader background="inverse" />
      <WhatItIs />
      <HowItWorks background="gray" />
      <Chart />
      <Benefits background="gray" />
      <Applications />
      <Tips background="gray" />
      <Solutions />
    </main>
  );
}
