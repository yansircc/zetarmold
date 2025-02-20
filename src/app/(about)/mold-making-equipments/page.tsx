import { moldWorkshopEquipments } from './data';
import { MoldWorkshopEquipmentTable } from './table';
import PageHeader from '@/components/page-header';

export default function MoldMakingEquipmentsPage() {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex flex-col gap-8 lg:px-16">
          <PageHeader
            title="Mold Making Equipments"
            description="Our in-house mold manufacturing facility is equipped with CNC machines, wire cutters, EDMs, grinders, millers and other essential equipment. We deliver over 100 mold sets monthly."
            linkText="Quick Quote"
            href="/contact"
          />
          <div className="container mx-auto flex flex-col gap-8 px-4 py-8">
            <MoldWorkshopEquipmentTable equipments={moldWorkshopEquipments} />
          </div>
        </div>
      </section>
    </>
  );
}
