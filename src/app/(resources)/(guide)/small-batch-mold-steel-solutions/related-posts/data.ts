interface RelatedPost {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  href: string;
  image: string;
}

export const basicInfo = {
  title: 'Related Posts',
  description:
    'Explore best practices about small batch mold steel solutions to optimize your manufacturing processes.',
};

export const relatedPosts: RelatedPost[] = [
  {
    id: 'post-1',
    title: 'gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '/small-batch-mold-steel-solutions-1',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-2',
    title: 'gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '/small-batch-mold-steel-solutions-2',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
  {
    id: 'post-3',
    title: 'gravida vel porttitor eu, volutpat ut arcu',
    summary:
      'Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.',
    label: 'Ut varius dolor turpis',
    author: 'Jane Doe',
    published: '1 Jan 2024',
    href: '/small-batch-mold-steel-solutions-3',
    image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
  },
];
