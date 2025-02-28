import Image from 'next/image';

export interface Feature {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  description?: string;
}

interface VerticalScrollingItemsProps {
  features: Feature[];
}

export function VerticalScrollingItems({
  features,
}: VerticalScrollingItemsProps) {
  return (
    <div className="flex flex-col gap-12 md:gap-20">
      {features.map((feature, index) => (
        <div key={index} className="rounded-xl border bg-white p-2">
          <Image
            src={feature.image.url}
            alt={feature.image.alt}
            layout="responsive"
            width={16}
            height={9}
            className="aspect-video w-full rounded-xl object-cover"
          />
          <div className="p-6">
            <h3 className="mb-1 text-2xl font-semibold">{feature.title}</h3>
            {feature.description && (
              <p className="text-muted-foreground">{feature.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
