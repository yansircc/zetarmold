import { ProcessTimeline } from './process';
import { postProcessingServices } from './data';
import PageHeader from '@/components/page-header';

export default function PostProcessing() {
  const firstThreeServices = postProcessingServices.slice(0, 3);
  const lastThreeServices = postProcessingServices.slice(3);

  return (
    <section className="py-16">
      <div className="container flex flex-col gap-16 lg:px-16">
        <PageHeader
          className="pb-16"
          title="Comprehensive Post-Processing Solutions"
          description="We provide a wide range of finishes for different forms and functions, including Painting, Plating, Laser Marking, Logo Printing, Heat Staking, and Ultrasonic Welding services tailored to your specific requirements."
          href="/contact"
          linkText="Quick Quote on Post Processing"
        />
      </div>
      <div className="container border-x lg:!px-0">
        <ProcessTimeline services={firstThreeServices} imagePosition="right" />
        <ProcessTimeline services={lastThreeServices} imagePosition="left" />
      </div>
      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
    </section>
  );
}
