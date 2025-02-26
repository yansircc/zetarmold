import { PageHeader } from '@/components/sections/templates';
import { PAGE_HEADER, TEAM_ITEMS } from './data';
import { SectionWrapper } from '@/components/section-wrapper';
import { Gallery } from '@/components/sections/gallery';
export default function Experts() {
  return (
    <main>
      <PageHeader {...PAGE_HEADER} headingLevel="h1" background="gray" />

      <SectionWrapper background="gray">
        <Gallery items={TEAM_ITEMS} columns={4} />
      </SectionWrapper>
    </main>
  );
}
