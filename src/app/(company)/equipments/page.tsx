import { PAGE_HEADER } from './data';
import { PageHeader } from '@/components/sections/templates';

export default function Equipments() {
  return (
    <main>
      <PageHeader
        title={PAGE_HEADER.title}
        description={PAGE_HEADER.description}
        action={PAGE_HEADER.action}
        headingLevel="h1"
        background="gray"
      />
    </main>
  );
}
