import type { GalleryItem } from '@/components/sections/gallery';

export const PAGE_HEADER = {
  title: 'Experts from Zetarmold',
  description:
    'Our experts are here to ensure you get the best injection molding services and solutions.',
  action: {
    text: 'Contact Us',
    href: '/contact',
  },
};

export const EXPERTS_LAYOUT = {
  leftElements: {
    title: 'Meet Our Team',
    subTitle: 'Dedicated professionals committed to excellence.',
    description:
      'At Zetarmold, our team of experts is the backbone of our success. With years of experience and a passion for innovation, we deliver top-notch injection molding solutions tailored to your needs. Our collaborative approach ensures that every project is executed with precision and care, making us a trusted partner in your journey to success.',
    images: [
      'https://shadcnblocks.com/images/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg',
      'https://shadcnblocks.com/images/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg',
      'https://shadcnblocks.com/images/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg',
    ],
  },
  rightElements: {
    title: 'Our Work Environment',
    subTitle: 'Where innovation meets craftsmanship.',
    description:
      'Step into our world and witness the synergy of technology and talent. Our state-of-the-art facilities are designed to foster creativity and efficiency, ensuring that our team can deliver exceptional results. From concept to completion, we are committed to providing a seamless experience that exceeds expectations and drives your business forward.',
    images: [
      'https://shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg',
      'https://shadcnblocks.com/images/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
      'https://shadcnblocks.com/images/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg',
    ],
  },
};

const TEAMS: GalleryItem[] = [
  {
    title: 'Engineer Team',
    description:
      'Zetar Now has 8 engineers with more than 10 years working experience in injection mold and industrial design',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Sales Team',
    description:
      'Zetar now has a 20+ sales team for oversea business with English, Spanish, German and Japanese language ability',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'QC Team',
    description:
      'QC team has more than 10 staff with rich experience and skills in quality checking and control process',
    image:
      'https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Production Team',
    description:
      '120+ works in Zetar, 70% of them are working here more than 10 years. Stable, skilled with knowledge and loyalty',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop',
  },
];

export const TEAM_SECTION = {
  title: 'Explore Our Comprehensive Team Setup',
  description:
    'Meet the diverse teams that drive our success, from engineering to sales, QC, and production. Each team brings unique expertise and dedication to ensure we deliver exceptional results.',
  action: {
    text: 'Entrust Your Project to Our Expert Team',
    href: '/contact',
  },
  items: TEAMS,
};
