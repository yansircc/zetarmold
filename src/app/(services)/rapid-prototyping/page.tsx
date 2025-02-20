import PageHeader from '@/components/page-header';
import { prototypeVideos } from './data';
import { VideoGallery } from './VideoGallery';

export default function RapidPrototyping() {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-16 lg:px-16">
        <PageHeader
          className="pb-16"
          title="Rapid Prototyping Service"
          description="Zetar often asked to assist in the prototype development of new product ideas of customers with CNC Machining,  3D Printing and low volume injection molding. We offer a number of

rapid prototyping options that are available to you to help validate form, fit, and function

of your future injection molded parts design before injection mold making."
          href="/contact"
          linkText="Quick Quote on Rapid Prototyping"
        />
      </div>
      <div className="container mx-auto px-4">
        <VideoGallery videos={prototypeVideos} />
      </div>
    </section>
  );
}
