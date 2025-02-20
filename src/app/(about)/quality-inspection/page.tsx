import PageHeader from '@/components/page-header';
import QualityInspectionEquipments from './equipments';
import QualityInspectionProcess from './process';

export default function QualityInspection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <PageHeader
          title="Quality Inspection"
          description="ZetarMold was founded in 2020 by a team of experienced professionals who are dedicated to providing the highest quality injection molding services to their clients."
          href="/contact"
          linkText="Let us inspect for you"
        />
        <QualityInspectionEquipments />
        <QualityInspectionProcess />
      </div>
    </section>
  );
}
