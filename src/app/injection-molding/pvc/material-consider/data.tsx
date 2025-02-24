import type { GalleryItem } from '@/components/data-sections/gallery';
export const BASIC_INFO = {
  title: (
    <>
      PVC Injection <span className="text-primary">Material</span>{' '}
      Considerations
    </>
  ),
  description: 'Explore the additives and challenges in PVC injection molding.',
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Additives',
    description:
      'Plasticizers for flexibility, stabilizers to keep things cool under heat.',
    image: 'https://shadcnblocks.com/images/block/placeholder-1.svg',
  },
  {
    title: 'Challenges',
    description:
      'Overheat PVC, and it might release HCl gas—proper temp control is key.',
    image: 'https://shadcnblocks.com/images/block/placeholder-2.svg',
  },
];
