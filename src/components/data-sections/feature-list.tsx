interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureList({ props }: { props: FeatureProps[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {props.map(({ icon, title, description }) => (
        <div className="flex flex-col" key={title}>
          <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  );
}
