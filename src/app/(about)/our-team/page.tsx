import { ArrowRight } from 'lucide-react';
import { teamFeatures } from './data';
import Image from 'next/image';
import Link from 'next/link';

export default function OurTeam() {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-xl">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Our Professional Team
          </h2>
          <p className="text-muted-foreground mb-8 lg:text-lg">
            Zetar boasts a team of 8 senior engineers specializing in injection
            molding product design and mold design, complemented by 30 engineers
            skilled in mold making and injection molding, along with a group of
            highly experienced senior workers.
          </p>
          <Link
            href="/contact"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            Contact our team
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
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
