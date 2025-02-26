import { PAGE_HEADER, QC_EQUIPMENT, QC_PROCESS, CERTIFICATION } from './data';
import { PageHeader } from '@/components/sections/templates';
import { Section2ColSticky } from '@/components/sections/section-2col-sticky';
import { VerticalScrollingItems } from '@/components/sections/VerticalScrollingItems';
import { SectionWrapper } from '@/components/section-wrapper';
import { Gallery } from '@/components/sections/gallery';
import { ServiceCards } from '@/components/ui/card-2';
// // 临时添加以触发 Tailwind 检测

export default function QualityAssurance() {
  return (
    <main>
      <PageHeader
        title={PAGE_HEADER.title}
        description={PAGE_HEADER.description}
        action={PAGE_HEADER.action}
        headingLevel="h1"
        background="gray"
      />
      <SectionWrapper
        title={QC_EQUIPMENT.title}
        description={QC_EQUIPMENT.description}
      >
        <Gallery items={QC_EQUIPMENT.items} columns={3} />
      </SectionWrapper>

      <Section2ColSticky
        title={QC_PROCESS.title}
        description={QC_PROCESS.description}
        action={QC_PROCESS.action}
        background="gray"
      >
        <VerticalScrollingItems features={QC_PROCESS.features} />
      </Section2ColSticky>

      <SectionWrapper
        title={CERTIFICATION.title}
        description={CERTIFICATION.description}
      >
        <ServiceCards items={CERTIFICATION.items} />
      </SectionWrapper>
    </main>
  );
}
