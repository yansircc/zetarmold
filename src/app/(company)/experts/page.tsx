import { PageHeader } from '@/components/sections/templates';
import { PAGE_HEADER, EXPERTS_LAYOUT, TEAM_SECTION } from './data';
import { RemixLayout } from '@/components/sections/templates/remix-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { Gallery } from '@/components/sections/gallery';

export default function Experts() {
  return (
    <main>
      <PageHeader
        title={PAGE_HEADER.title}
        description={PAGE_HEADER.description}
        action={PAGE_HEADER.action}
        headingLevel="h1"
        background="gray"
      />

      <SectionWrapper>
        <RemixLayout
          leftElements={EXPERTS_LAYOUT.leftElements}
          rightElements={EXPERTS_LAYOUT.rightElements}
        />
      </SectionWrapper>

      <SectionWrapper
        title={TEAM_SECTION.title}
        description={TEAM_SECTION.description}
        action={TEAM_SECTION.action}
        background="gray"
      >
        <Gallery items={TEAM_SECTION.items} columns={3} />
      </SectionWrapper>
    </main>
  );
}
