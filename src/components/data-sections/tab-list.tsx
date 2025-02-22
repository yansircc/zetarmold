import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getVideoCoverById } from '@/app/utils/getVideoCoverById';

export interface TabItem {
  title: string;
  description: string;
  image?: string;
  videoId?: string;
  icon: React.ReactNode;
}

export function TabList({ items }: { items: TabItem[] }) {
  return (
    <section>
      <div className="mb-8 md:mb-14 lg:mb-16">
        <h2 className="mb-4 w-full text-lg font-medium md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl">
          Quality Inspection Process
        </h2>
      </div>
      <Accordion
        type="multiple"
        className="bg-border flex flex-col gap-px overflow-hidden rounded-xl border lg:hidden"
      >
        {items.map((feature, index) => (
          <AccordionItem
            key={index + 1}
            value={(index + 1).toString()}
            className="bg-muted data-[state=open]:bg-background border-b-0 px-7 py-4"
          >
            <AccordionTrigger className="group data-[state=active]:bg-background relative items-start text-left hover:no-underline">
              <span className="bg-primary absolute -top-4 bottom-0 -left-7 h-full w-[3px] transition-opacity duration-300 group-data-[state=closed]:opacity-0"></span>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-1.5">
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-muted/50 flex flex-col gap-7 rounded-xl border p-5 data-[state=inactive]:hidden">
              <div>
                <h2 className="mb-2 font-medium">{feature.title}</h2>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
              <Image
                src={
                  feature.videoId
                    ? getVideoCoverById(feature.videoId)
                    : (feature.image ?? '/path/to/fallback-image.jpg')
                }
                alt="placeholder"
                width={800}
                height={540}
                className="aspect-video max-h-[450px] rounded-xl border object-cover"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Tabs
        defaultValue="1"
        className="bg-border hidden grid-cols-3 gap-px overflow-hidden rounded-xl border lg:grid"
      >
        <TabsList className="bg-border flex flex-col gap-px">
          {items.map((feature, index) => (
            <TabsTrigger
              key={index + 1}
              value={(index + 1).toString()}
              className="group bg-muted data-[state=active]:bg-background relative flex flex-col gap-2.5 px-6 py-9 transition-colors duration-300 xl:py-10"
            >
              <span className="bg-primary absolute top-0 bottom-0 left-0 h-full w-[3px] transition-opacity duration-300 group-data-[state=inactive]:opacity-0"></span>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {feature.icon}
                  <span className="font-medium">{feature.title}</span>
                </div>
                <ChevronRight className="h-auto w-4" />
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {items.map((feature, index) => (
          <TabsContent
            value={(index + 1).toString()}
            key={index + 1}
            className="bg-background col-span-2 flex flex-col gap-7 p-10 data-[state=inactive]:hidden"
          >
            <div>
              <h2 className="mb-2 text-2xl font-medium">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
            <Image
              src={
                feature.videoId
                  ? getVideoCoverById(feature.videoId)
                  : (feature.image ?? '/path/to/fallback-image.jpg')
              }
              alt="placeholder"
              width={800}
              height={540}
              className="aspect-video max-h-[450px] rounded-xl object-cover"
            />
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
