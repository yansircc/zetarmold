import { PageHeader } from './page-header';
import { WhatItIs } from './what-it-is';
import { ApplicationsCarousel } from './applications';
import { WhereItsUsed } from './where-its-used';
import { Benefits } from './why-it';
import { Comparison } from './comparison';
import { WhyChooseUs } from './why-us';
import { TableOfContents } from '@/components/table-of-contents';
import { DocsLayout } from '@/components/layouts/docs-layout';
import { HowItWorks } from './how-it-works';
import { MaterialConsider } from './material-consider';
import { MoldMaking } from './mold-making';
import { Challenges } from './challenges';
import { Checklist } from './checklist';
import { DecisionTree } from './decision-tree';
import { RelatedTech } from './related-tech';
import { PartnerWithUs } from './partner-with-us';
import { RouteList } from './route-list';

export default function PVCInjectionMolding() {
  return (
    <DocsLayout
      leftSidebar={
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 px-4 text-sm font-semibold">Services</h3>
            <RouteList />
          </div>
        </div>
      }
      rightSidebar={<TableOfContents />}
    >
      <PageHeader alignment="left" background="gray" />
      <WhatItIs />
      <ApplicationsCarousel background="gray" />
      <WhereItsUsed />
      <Benefits background="gray" />
      <Comparison />
      <WhyChooseUs background="gray" />
      <HowItWorks />
      <MoldMaking background="gray" />
      <MaterialConsider />
      <Challenges background="gray" />
      <Checklist />
      <DecisionTree background="gray" />
      <RelatedTech />
      <PartnerWithUs background="gray" />
    </DocsLayout>
  );
}
