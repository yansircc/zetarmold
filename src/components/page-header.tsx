import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface PageHeaderProps {
  title: string;
  description: string;
  href: string;
  linkText: string;
  headingLevel?: HeadingLevel;
}

export default function PageHeader({
  title,
  description,
  href,
  linkText,
  headingLevel = 'h1',
}: PageHeaderProps) {
  const Heading = headingLevel;

  return (
    <div className="lg:max-w-xl">
      <Heading className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
        {title}
      </Heading>
      <p className="text-muted-foreground mb-8 lg:text-lg">{description}</p>
      <Link
        href={href}
        className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
      >
        {linkText}
        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
