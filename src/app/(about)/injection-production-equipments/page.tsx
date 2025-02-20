import { injectionProductionEquipments } from './data';
import { InjectionEquipmentTable } from './InjectionEquipmentTable';
import PageHeader from '@/components/page-header';

export default function InjectionProductionEquipmentsPage() {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex flex-col gap-16 lg:px-16">
          <PageHeader
            title="Plastic Injection Mold Manufacturing Since 2005"
            description=""
            linkText="Quick Quote"
            href="/contact"
          />
          <div className="container mx-auto px-4 py-8">
            <h2 className="mb-6 text-center text-2xl font-bold">
              Injection Production Equipment
            </h2>
            <InjectionEquipmentTable
              equipments={injectionProductionEquipments}
            />
          </div>
        </div>
      </section>
    </>
  );
}
