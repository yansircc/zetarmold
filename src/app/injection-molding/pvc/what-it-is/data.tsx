import { type FeatureItem } from '@/components/sections/feature-list';
import { FlaskConical, Tag, Thermometer } from 'lucide-react';

export const BASIC_INFO = {
  title: 'What is PVC Injection Molding?',
  image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
};

export const CONTENT = (
  <>
    <p>
      PVC Injection Molding is the unsung hero of the manufacturing world,
      turning humble polyvinyl chloride (PVC) into durable, precise parts that
      power industries like construction, medical, automotive, and consumer
      goods.
    </p>
    <p>
      Known for its strength, chemical resistance, and wallet-friendly
      efficiency, this process is a go-to for mass production.
    </p>
    <p>
      At <b>ZetarMold</b>, we&apos;ve been perfecting this craft for over 20
      years, delivering top-tier solutions with a global reach and a dash of
      expertise that makes your projects shine.
    </p>
  </>
);

export const FEATURES: FeatureItem[] = [
  {
    icon: <FlaskConical className="size-6" />,
    title: 'Definition',
    description:
      'A manufacturing process where molten PVC—a versatile thermoplastic—is injected into a mold to create everything from pipes to medical tubes with precision and speed.',
  },
  {
    icon: <Tag className="size-6" />,
    title: 'Common Names',
    description: 'PVC Molding, Vinyl Injection Molding.',
  },
  {
    icon: <Thermometer className="size-6" />,
    title: 'Core Principle',
    description:
      'Heat PVC pellets until they&apos;re a gooey delight, inject them into a mold under high pressure, cool them down, and pop out a shiny new part. Simple, yet brilliant.',
  },
];
