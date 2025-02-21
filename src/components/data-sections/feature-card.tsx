import Image from 'next/image';

interface FeatureProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

interface FeatureListProps {
  props: FeatureProps[];
  // Optional columns prop with default value of 2
  columns?: 1 | 2 | 3;
}

export default function FeatureList({ props, columns = 2 }: FeatureListProps) {
  // Dynamic grid columns class based on the columns prop
  const gridColsClass = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  }[columns];

  return (
    <div className={`grid gap-6 ${gridColsClass}`}>
      {props.map(({ icon, title, description, image }) => (
        <div
          className="border-border flex flex-col overflow-clip rounded-xl border"
          key={title}
        >
          {image && (
            <div className="relative aspect-[16/9]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover object-center"
              />
            </div>
          )}
          <div className="px-3 py-4 md:px-8 md:py-10">
            {icon && (
              <span className="bg-muted mb-4 flex size-12 items-center justify-center rounded-md">
                {icon}
              </span>
            )}
            <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
              {title}
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              {description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
