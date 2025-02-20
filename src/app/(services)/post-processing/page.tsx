import { ProcessTimeline } from './process';
import { postProcessingServices } from './data';
import SectionHeader from '@/components/section-header';
import { Settings } from 'lucide-react';

export default function PostProcessing() {
  const firstThreeServices = postProcessingServices.slice(0, 3);
  const lastThreeServices = postProcessingServices.slice(3);

  return (
    <section>
      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="container h-full w-full border-x"></div>
      </div>
      <div className="border-y">
        <SectionHeader
          headingLevel="h1"
          iconTitle="Post Processing"
          title="Comprehensive Post-Processing Solutions"
          icon={Settings}
          description="We provide a wide range of finishes for different forms and functions, including Painting, Plating, Laser Marking, Logo Printing, Heat Staking, and Ultrasonic Welding services tailored to your specific requirements."
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
