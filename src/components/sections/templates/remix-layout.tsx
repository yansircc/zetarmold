import Image from 'next/image';

interface RemixLayoutElement {
  title: string;
  subTitle: string;
  description: string;
  images: string[];
}

interface RemixLayoutProps {
  leftElements: RemixLayoutElement;
  rightElements: RemixLayoutElement;
}

export const RemixLayout = ({
  leftElements,
  rightElements,
}: RemixLayoutProps) => {
  return (
    <div className="container flex flex-col items-center justify-start gap-6 lg:flex-row">
      <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
        <div className="pr-6">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl lg:mb-10 lg:text-4xl">
            {leftElements.title}
          </h2>
          <p className="mb-9 lg:text-xl">{leftElements.subTitle}</p>
          <p className="text-muted-foreground">{leftElements.description}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
          <div className="relative aspect-[0.7] w-full md:w-1/2">
            <Image
              src={leftElements.images[0]}
              alt="about 1"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
            <div className="relative aspect-[1.1] w-full">
              <Image
                src={leftElements.images[1]}
                alt="about 2"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative aspect-[0.7] w-full">
              <Image
                src={leftElements.images[2]}
                alt="about 3"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2">
        <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
          <div className="relative aspect-[0.9] w-full rounded-lg object-cover md:w-1/2">
            <Image
              src={rightElements.images[0]}
              alt="about 4"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
            <div className="relative aspect-[0.8] w-full rounded-lg object-cover">
              <Image
                src={rightElements.images[1]}
                alt="about 5"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative aspect-[0.9] w-full rounded-lg object-cover">
              <Image
                src={rightElements.images[2]}
                alt="about 6"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="px-8">
          <h2 className="mb-8 text-3xl font-semibold lg:mb-6 lg:text-4xl">
            {rightElements.title}
          </h2>
          <p className="mb-9 lg:text-xl">{rightElements.subTitle}</p>
          <p className="text-muted-foreground">{rightElements.description}</p>
        </div>
      </div>
    </div>
  );
};
