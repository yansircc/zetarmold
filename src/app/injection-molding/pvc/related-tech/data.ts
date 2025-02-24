import { type TextListProps } from '@/components/sections/text-list';

export const BASIC_INFO = {
  title: 'Related Technologies',
  linkText: "Explore Zetar's Innovative Solutions",
  href: '/contact',
};

export const RELATED_TECHS: TextListProps['items'] = [
  {
    title: 'Extrusion',
    content: 'For continuous goodies like pipes.',
  },
  {
    title: 'Blow Molding',
    content: 'For hollow wonders like bottles.',
  },
  {
    title: 'Thermoforming',
    content: "For big, simple shapes that don't need the VIP treatment.",
  },
];
