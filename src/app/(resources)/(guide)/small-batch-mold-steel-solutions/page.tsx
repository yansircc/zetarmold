import Related from './related';
import Faqs from './faqs';
import { basicInfo } from './data';
import PageWrapper from '@/components/page-wrapper';

export default function SmallBatchMoldSteelSolutions() {
  return (
    <PageWrapper {...basicInfo}>
      <Faqs />
      <Related />
    </PageWrapper>
  );
}
