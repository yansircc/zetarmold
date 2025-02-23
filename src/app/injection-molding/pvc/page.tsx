import { PageHeader } from './page-header';
import { WhatItIs } from './what-it-is';
import { ApplicationsCarousel } from './applications';
import { WhereItsUsed } from './where-its-used';
import { Benefits } from './why-it';
import { Comparison } from './comparison';
import { WhyChooseUs } from './why-us';
import { TableOfContents } from '@/components/table-of-contents';
import { DocsLayout } from '@/components/layouts/docs-layout';

export default function PVCInjectionMolding() {
  return (
    <DocsLayout
      leftSidebar={
        <div>
          <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Categories
          </h3>
          <ul className="space-y-2.5">
            <li>
              <a
                href="#what-it-is"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                What It Is
              </a>
            </li>
            <li>
              <a
                href="#applications"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Applications
              </a>
            </li>
            <li>
              <a
                href="#where-its-used"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Where It&apos;s Used
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#comparison"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Comparison
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Why Choose Us
              </a>
            </li>
          </ul>
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
    </DocsLayout>
  );
}
