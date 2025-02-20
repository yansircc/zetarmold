import Image from 'next/image';
import { type ProductionFlowStep } from './data';

interface Props {
  steps: ProductionFlowStep[];
}

export function InjectionMoldingFlowchart({ steps }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:w-48">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
