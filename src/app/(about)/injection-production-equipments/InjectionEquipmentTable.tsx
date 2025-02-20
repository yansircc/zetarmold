import { type InjectionProductionEquipment } from './data';

interface Props {
  equipments: InjectionProductionEquipment[];
}

export function InjectionEquipmentTable({ equipments }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">No.</th>
            <th className="border px-4 py-2">Brand</th>
            <th className="border px-4 py-2">Machine Tonnage</th>
            <th className="border px-4 py-2">Injection Volume</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Usage Area</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment.no} className="hover:bg-gray-50">
              <td className="border px-4 py-2 text-center">{equipment.no}</td>
              <td className="border px-4 py-2">{equipment.brand}</td>
              <td className="border px-4 py-2 text-center">
                {equipment.machineTonnage}
              </td>
              <td className="border px-4 py-2 text-center">
                {equipment.injectionVolume}
              </td>
              <td className="border px-4 py-2 text-center">
                {equipment.quantity}
              </td>
              <td className="border px-4 py-2">{equipment.usageArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
