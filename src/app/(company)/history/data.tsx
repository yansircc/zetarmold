import type { TimelineItem } from '@/components/sections/timeline';
import type { GalleryItem } from '@/components/sections/gallery';
import { Rocket } from 'lucide-react';

export const PAGE_HEADER = {
  title: 'Zetarmold Footprints',
  description:
    'Our company has been dedicated to providing high-quality injection molding services since 2005. Over the years, we have grown from a small mold-making company to a comprehensive manufacturing enterprise that offers a wide range of services.',
  action: {
    text: 'Contact Us',
    href: '/contact',
  },
};

const DEV_ITEMS: GalleryItem[] = [
  {
    title: '2005-2009 Injection Molds Making',
    description:
      'Founded in 2005 in Shanghai, China, our company initially offered only mold-making services. We are equipped with advanced mold-making equipment and have implemented the TS16949 management system.',
    image:
      'https://shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg',
  },
  {
    title: '2010-2013 Injection Molds + Injection Molding',
    description:
      'We established an injection molding line, expanding from 10 machines to 26 machines ranging from 90T to 1100T, capable of handling parts from tiny components to large items weighing up to 5100 grams. We are certified under ISO 9001:2015 and ISO 14001:2015 standards.',
    image:
      'https://shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg',
  },
  {
    title: '2013-2023 Domestic + International',
    description:
      'Since 2013, Zetar has focused on expanding its overseas business by establishing a dedicated international business department. In addition to our local operations, Zetar has embraced online business opportunities.',
    image:
      'https://shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg',
  },
  {
    title: '2024- ...... Speed up to future',
    description:
      'Zetar is committed to thriving until 2064. We hope to collaborate closely and walk hand in hand over the next 50 years. We have expanded our capabilities from 26 to 35 machines, ranging from 90T to 1850T, enabling us to handle large parts weighing up to 10 kg.',
    image:
      'https://shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg',
  },
];

export const DEV_SECTION = {
  title: "Zetarmold's Development",
  description: 'Meet the team behind Zetarmold',

  items: DEV_ITEMS,
};
export const TIMELINE_SECTION = {
  title: "Some Key Moments In Zetarmold's Growth",
  description:
    'Since 2005, we have transformed our company into a powerhouse that encompasses product design, mold making, product manufacturing, assembly, post-processing, and packaging. This growth has been achieved organically and through strategic acquisitions, leading to decades of outstanding performance. Explore our history to see some of the highlights of our journey.',
  action: {
    text: 'Entrust Your Project to Our Expert Team',
    href: '/contact',
  },
};

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    title: '2005',
    description: 'Establish Injection Mold Factory',
    icon: Rocket,
    youtubeId: '5VcQPGJ_eKo',
  },
  {
    title: '2010',
    description: 'Establish Injection Molding Factory',
    icon: Rocket,
    youtubeId: 'bb740WMV7_M',
  },
  {
    title: '2013',
    description: 'Set Up Zetar Mainly Focus On Oversea Business',
    icon: Rocket,
    youtubeId: 'Azqzi33FSsg',
  },
  {
    title: '2014',
    description: 'Expansion of Injection mold factory',
    icon: Rocket,
    youtubeId: 'R8lmSwBzBmc',
  },
  {
    title: '2016',
    description:
      'Injection Molding Company expanded and moved to the current location',
    icon: Rocket,
    youtubeId: 'c-WnG-hw8kM',
  },
  {
    title: '2018',
    description: 'Zetar Expanded and moved to the current location',
    icon: Rocket,
    youtubeId: 'UklrnOZOGSw',
  },
  {
    title: '2020',
    description: 'Established Jiangsu Branch Factory',
    icon: Rocket,
    youtubeId: 'YMexw822Kvc',
  },
  {
    title: '2021',
    description: 'Established Zhejiang Branch Factory',
    icon: Rocket,
    youtubeId: 'tUa5Jbsa9Yo',
  },
];
