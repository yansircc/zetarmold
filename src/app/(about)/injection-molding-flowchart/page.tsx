import { productionFlowSteps } from './data';
import PageHeader from '@/components/page-header';
import { InjectionMoldingFlowchart } from './InjectionMoldingFlowchart';

export default function InjectionProductionEquipmentsPage() {
  return (
    <>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container flex flex-col gap-8 lg:px-16">
          <PageHeader
            title="Injection Molding Process Flowchart"
            description="The injection molding process is a precise manufacturing technique for producing diverse plastic products. This flowchart outlines key steps, starting with customer order analysis and production scheduling. It involves selecting machinery, preparing materials, and purchasing raw materials. Mold setup requires careful calibration and testing. This flowchart highlights the essential phases in delivering high-quality products."
            linkText="Quick Quote"
            href="/contact"
            className="max-w-none lg:max-w-[66.666667%]"
          />
          <div className="container mx-auto px-4 py-8">
            <InjectionMoldingFlowchart steps={productionFlowSteps} />
          </div>
        </div>
      </section>
    </>
  );
}
