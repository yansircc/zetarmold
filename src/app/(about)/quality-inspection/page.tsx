import { Equipments } from './equipments';
import { Process } from './process';
import { PageHeader } from './page-header';

export default function QualityInspection() {
  return (
    <main>
      <PageHeader background="inverse" />
      <Equipments />
      <Process background="gray" />
    </main>
  );
}
