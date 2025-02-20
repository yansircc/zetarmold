interface FooterLink {
  title: string;
  links?: {
    name: string;
    href: string;
  }[];
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Company',
    links: [
      {
        name: 'Our History',
        href: '/our-history',
      },
      {
        name: 'Our Team',
        href: '/our-team',
      },
      {
        name: 'Our Blog',
        href: '/our-blog',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        name: 'Injection Molding',
        href: '/injection-molding',
      },
      {
        name: 'Rapid Prototyping',
        href: '/rapid-prototyping',
      },
      {
        name: 'Post Processing',
        href: '/post-processing',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Terms of Service',
        href: '/terms-of-service',
      },
      {
        name: 'Privacy Policy',
        href: '/privacy-policy',
      },
    ],
  },
];
