import { injectionProductionEquipments } from './data';
import { InjectionEquipmentTable } from './table';
import PageHeader from '@/components/page-header';

export default function InjectionProductionEquipmentsPage() {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex flex-col gap-8 lg:px-16">
          <PageHeader
            title="Injection Molding Production Equipments"
            description="Our facility features 35 injection molding machines including 6 in a Class M8 dust-free room. With machines up to 1850T capacity, we can produce parts weighing up to 10 kg."
            linkText="Quick Quote"
            href="/contact"
          />
          <div className="container mx-auto flex flex-col gap-8 px-4 py-8">
            <InjectionEquipmentTable
              equipments={injectionProductionEquipments}
            />
          </div>
        </div>
      </section>
    </>
  );
}
