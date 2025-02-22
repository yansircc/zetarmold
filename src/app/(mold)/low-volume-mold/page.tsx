import { WhatItIs } from './what-it-is';
import { PageHeader } from './page-header';
import { Benefits } from './benefits';
import { Applications } from './applications';
import { Limitations } from './limitations';
import { Categories } from './categories';

export default function OurHistory() {
  return (
    <main>
      <PageHeader background="inverse" alignment="left" />
      <WhatItIs />
      <Benefits background="gray" />
      <Applications />
      <Limitations background="gray" />
      <Categories />
    </main>
  );
}
