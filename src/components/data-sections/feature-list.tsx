interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
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
      {props.map(({ icon, title, description }) => (
        <div className="flex flex-col gap-3 rounded-lg border p-7" key={title}>
          <div className="flex flex-col items-center gap-2.5 lg:flex-row">
            <span className="bg-muted flex size-12 items-center justify-center rounded-md">
              {icon}
            </span>
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
          <p className="text-muted-foreground text-center text-sm md:text-base lg:text-left">
            {description.split('\n').map((line, i) => (
              <>
                {line}
                {i < description.split('\n').length - 1 && <br />}
              </>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
