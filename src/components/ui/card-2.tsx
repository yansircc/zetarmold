'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
export interface DatItem {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ item }: { item: DatItem }) => {
  return (
    <div className="group relative flex h-full flex-col items-start justify-start gap-2">
      <div className="w-full">
        <div className="group relative z-10 overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            style={{ aspectRatio: '3/4' }}
            width={300}
            height={400}
          />
          <Badge
            className="bg-background absolute top-4 left-4 px-4 py-2"
            variant="outline"
          >
            {item.title}
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground px-2 py-2 text-sm font-medium">
          {item.description}
        </span>
      </div>
    </div>
  );
};

export const ServiceCards = ({ items }: { items: DatItem[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <ServiceCard key={item.title} item={item} />
      ))}
    </div>
  );
};
