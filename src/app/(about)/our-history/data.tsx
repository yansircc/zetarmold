import { Factory, Cog, Globe, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Milestone = {
  id: string;
  year: string;
  title: string;
  event: string;
  icon: LucideIcon;
  image: string;
};
export const milestones: Milestone[] = [
  {
    id: 'milestone-1',
    year: '2005-2009',
    title: 'Injection Molds Making',
    event:
      'Founded in 2005 in Shanghai, China, our company initially offered only mold-making services. We are equipped with advanced mold-making equipment and have implemented the TS16949 management system.',
    icon: Factory,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    id: 'milestone-2',
    year: '2010-2013',
    title: 'Injection Molds + Injection Molding',
    event:
      'We established an injection molding line, expanding from 10 machines to 26 machines ranging from 90T to 1100T, capable of handling parts from tiny components to large items weighing up to 5100 grams. We are certified under ISO 9001:2015 and ISO 14001:2015 standards.',
    icon: Cog,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    id: 'milestone-3',
    year: '2013-2023',
    title: 'Domestic + International',
    event:
      'Since 2013, Zetar has focused on expanding its overseas business by establishing a dedicated international business department. In addition to our local operations, Zetar has embraced online business opportunities.',
    icon: Globe,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    id: 'milestone-4',
    year: '2024-current',
    title: 'Speed up to future',
    event:
      'Zetar is committed to thriving until 2064. We hope to collaborate closely and walk hand in hand over the next 50 years. We have expanded our capabilities from 26 to 35 machines, ranging from 90T to 1850T, enabling us to handle large parts weighing up to 10 kg.',
    icon: Rocket,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
];

export type Event = {
  id: string;
  year: number;
  event: string;
  description: string;
  image: string;
  youtubeId?: string;
};

export const events: Event[] = [
  {
    id: 'event-1',
    year: 2005,
    event: 'Establish Injection Mold Factory',
    description:
      'Founded in 2005 in Shanghai, China, our company initially offered only mold-making services. We are equipped with advanced mold-making equipment and have implemented the TS16949 management system.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'event-2',
    year: 2010,
    event: 'Establish Injection Molding Factory',
    description:
      'Established in 2010, our company expanded its operations to include injection molding services, further enhancing our capabilities.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'event-3',
    year: 2013,
    event: 'Set Up Zetar Mainly Focus On Oversea Business',
    description:
      'Since 2013, Zetar has focused on expanding its overseas business by establishing a dedicated international business department. In addition to our local operations, Zetar has embraced online business opportunities.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'event-4',
    year: 2014,
    event: 'Expansion of Injection mold factory',
    description:
      'In 2014, we significantly expanded our injection mold manufacturing facility, adding new CNC machines and advanced equipment to increase production capacity and improve precision.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'event-5',
    year: 2016,
    event:
      'Injection Molding Company expanded and moved to the current location',
    description:
      'Our injection molding division relocated to a larger facility in 2016, allowing us to install additional injection molding machines and implement automated production lines for higher efficiency.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'event-6',
    year: 2018,
    event: 'Zetar Expanded and moved to the current location',
    description:
      'In 2018, Zetar consolidated operations into our current headquarters, featuring a modern facility with integrated mold making and injection molding capabilities, streamlining our production process.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'event-7',
    year: 2020,
    event: 'Established Jiangsu Branch Factory',
    description:
      'We expanded our manufacturing footprint by opening a new facility in Jiangsu Province in 2020, equipped with state-of-the-art machinery to serve the growing demand in Eastern China.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'event-8',
    year: 2021,
    event: 'Established Zhejiang Branch Factory',
    description:
      'Further expanding our presence, we opened our Zhejiang facility in 2021, featuring advanced automation systems and specialized equipment for high-precision molding projects.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
    youtubeId: 'dQw4w9WgXcQ',
  },
];
