import PageHeader from '@/components/page-header';
import Related from './related';
import Faqs from './faqs';

export default function SmallBatchMoldSteelSolutions() {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <PageHeader
          title="Small Batch Mold Steel Solutions"
          description="Discover perfect small batch mold steel solutions with Zetar Mold. Enhance precision and flexibility for superior manufacturing results."
          linkText="Start Your Project"
          href="/contact"
        />
        <Faqs />
        <Related />
      </div>
    </section>
  );
}
