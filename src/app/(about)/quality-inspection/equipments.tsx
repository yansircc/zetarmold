import { qualityInspectionEquipments } from './data';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function QualityInspectionEquipments() {
  return (
    <section>
      <div className="mb-8 md:mb-14 lg:mb-16">
        <h2 className="mb-4 w-full text-lg font-medium md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl">
          Quality Inspection Equipments
        </h2>
      </div>
      <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {qualityInspectionEquipments.map((equipment, i) => (
          <li key={i}>
            <Card className="p-6">
              <Image
                src={equipment.image}
                alt={equipment.name}
                width={100}
                height={100}
                className="w-14"
              />
              <h3 className="mt-4 mb-1 text-lg font-medium">
                {equipment.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {equipment.description}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
