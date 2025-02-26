import { PageHeader } from '@/components/sections/templates';
import {
  PAGE_HEADER,
  TIMELINE_SECTION,
  TIMELINE_ITEMS,
  DEV_SECTION,
} from './data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Timeline } from '@/components/sections/timeline';
import { Gallery } from '@/components/sections/gallery';
export default function Experts() {
  return (
    <main>
      <PageHeader {...PAGE_HEADER} headingLevel="h1" background="gray" />

      <SectionWrapper background="gray">
        <Gallery items={DEV_SECTION.items} columns={3} />
      </SectionWrapper>

      <SectionWrapper {...TIMELINE_SECTION}>
        <Timeline items={TIMELINE_ITEMS} />
      </SectionWrapper>
    </main>
  );
}
