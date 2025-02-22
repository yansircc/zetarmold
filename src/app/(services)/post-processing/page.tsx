import { Progress } from './progress';
import { PageHeader } from './page-header';

export default function PostProcessing() {
  return (
    <main>
      <PageHeader background="inverse" />
      <Progress />
    </main>
  );
}
