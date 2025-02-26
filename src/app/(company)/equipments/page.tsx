import {
  INJECTION_PRODUCTION,
  INJECTION_PRODUCTION_COLUMNS,
  INJECTION_PRODUCTION_DATA,
  MOLD_MAKING,
  MOLD_MAKING_COLUMNS,
  MOLD_MAKING_DATA,
  PAGE_HEADER,
} from './data';
import { Comparison, PageHeader } from '@/components/sections/templates';
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

      <Comparison
        title={MOLD_MAKING.title}
        description={MOLD_MAKING.description}
        action={MOLD_MAKING.action}
        data={MOLD_MAKING_DATA}
        columns={MOLD_MAKING_COLUMNS}
      />

      <Comparison
        title={INJECTION_PRODUCTION.title}
        description={INJECTION_PRODUCTION.description}
        action={INJECTION_PRODUCTION.action}
        data={INJECTION_PRODUCTION_DATA}
        columns={INJECTION_PRODUCTION_COLUMNS}
        background="gray"
      />
    </main>
  );
}
