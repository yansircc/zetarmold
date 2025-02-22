import { Milestones } from './milestones';
import { Events } from './events';
import { PageHeader } from './page-header';

export default function OurHistory() {
  return (
    <main>
      <PageHeader background="inverse" />
      <Milestones />
      <Events background="gray" />
    </main>
  );
}
