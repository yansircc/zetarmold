import { teamFeatures } from './data';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
export default function OurTeam() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <PageHeader
          title="Our Professional Team"
          description="Zetar boasts a team of 8 senior engineers specializing in injection molding product design and mold design, complemented by 30 engineers skilled in mold making and injection molding, along with a group of highly experienced senior workers."
          linkText="Contact our team"
          href="/contact"
          className="md:text-center lg:mx-auto lg:max-w-3xl"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {teamFeatures.map((feature) => (
            <div
              key={feature.id}
              className="border-border flex flex-col overflow-clip rounded-xl border"
            >
              <div className="relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={450}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
