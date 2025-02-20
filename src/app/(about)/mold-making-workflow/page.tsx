import Image from 'next/image';
import { workflowSteps } from './data';

export default function OurWorkflow() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col justify-center gap-7 md:text-center">
          <h1 className="text-2xl md:text-4xl">
            Mold Design & Manufacturing Workflow
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Follow our systematic approach to mold design and manufacturing,
            ensuring quality and efficiency at every step.
          </p>
        </div>
        <div className="mx-auto mt-14 flex max-w-screen-lg flex-col gap-8 lg:gap-12 lg:px-16">
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center justify-between min-[960px]:flex-row min-[960px]:gap-10"
            >
              <div className="flex gap-4 min-[960px]:max-w-md">
                <div className="relative flex flex-col items-center justify-between gap-1">
                  {index !== 0 && (
                    <span className="bg-primary/70 dark:bg-primary/50 absolute -top-12 mx-auto h-12 w-[3px] shrink-0" />
                  )}
                  {index !== workflowSteps.length - 1 && (
                    <span className="bg-primary/70 dark:bg-primary/50 absolute -bottom-12 mx-auto h-12 w-[3px] shrink-0" />
                  )}
                  <span
                    className={`${
                      index === 0
                        ? 'h-24'
                        : 'bg-primary/70 dark:bg-primary/50 h-24 w-[3px] shrink-0'
                    }`}
                  />
                  <span className="bg-muted/50 dark:bg-muted/20 flex size-10 shrink-0 items-center justify-center rounded-full border font-mono text-lg">
                    {index + 1}
                  </span>
                  <span
                    className={`${
                      index === workflowSteps.length - 1
                        ? 'h-24'
                        : 'bg-primary/70 dark:bg-primary/50 h-24 w-[3px] shrink-0'
                    }`}
                  />
                </div>
                <div className="flex flex-col justify-center gap-5 px-0 min-[960px]:gap-6 min-[960px]:px-4 min-[960px]:py-4">
                  <h3 className="text-xl min-[960px]:text-2xl">{step.title}</h3>
                  <p className="text-muted-foreground text-sm min-[960px]:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={270}
                className="z-10 max-h-56 w-full rounded-xl border object-cover min-[960px]:aspect-video min-[960px]:w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
