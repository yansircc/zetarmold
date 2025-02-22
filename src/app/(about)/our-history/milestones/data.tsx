import type {
  TimelineItem,
  TimelineAction,
  TimelineProps,
} from '@/components/data-sections/timeline';
import { Factory, Cog, Globe, Rocket } from 'lucide-react';

const milestoneItems: TimelineItem[] = [
  {
    title: '2005-2009',
    description:
      'Founded in 2005 in Shanghai, China, our company initially offered only mold-making services. We are equipped with advanced mold-making equipment and have implemented the TS16949 management system.',
    icon: <Factory />,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    title: '2010-2013',
    description:
      'We established an injection molding line, expanding from 10 machines to 26 machines ranging from 90T to 1100T, capable of handling parts from tiny components to large items weighing up to 5100 grams. We are certified under ISO 9001:2015 and ISO 14001:2015 standards.',
    icon: <Cog />,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    title: '2013-2023',
    description:
      'Since 2013, Zetar has focused on expanding its overseas business by establishing a dedicated international business department. In addition to our local operations, Zetar has embraced online business opportunities.',
    icon: <Globe />,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    title: '2024-current',
    description:
      'Zetar is committed to thriving until 2064. We hope to collaborate closely and walk hand in hand over the next 50 titles. We have expanded our capabilities from 26 to 35 machines, ranging from 90T to 1850T, enabling us to handle large parts weighing up to 10 kg.',
    icon: <Rocket />,
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
];

export const timelineActions: TimelineAction[] = [
  {
    text: 'Contact Us',
    url: '/contact',
  },
  {
    text: 'Learn More',
    url: '/',
    variant: 'outline',
  },
];

export const milestonesProps: TimelineProps = {
  title: "Zetar's Development",
  description:
    'Founded in 2005 in Shanghai, Zetar Mold has transformed from a mold-making service provider to a comprehensive manufacturer, expanding our capabilities and establishing a strong international presence to meet diverse client needs.',
  items: milestoneItems,
  actions: timelineActions,
  variant: 'sticky',
};
