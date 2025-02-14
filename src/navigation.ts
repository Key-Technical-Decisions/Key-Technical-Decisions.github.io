import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Advantages',
      href: getPermalink('/#benefits'),
    },
    {
      text: 'Audience',
      href: getPermalink('/#audience'),
    },
    {
      text: 'Anatomy',
      href: '/anatomy',
    },
    {
      text: 'Process',
      href: '/process',
    },
    {
      text: 'Resources',
      href: '/resources',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        { text: 'Advantages of KTDs', href: '/#benefits' },
        { text: 'Audience and pain points addressed by KTDs', href: '/#audience' },
        { text: 'Anatomy of a KTD', href: '/anatomy' },
        { text: 'KTD Process', href: '/process' },
        { text: 'Downloadable resources', href: '/resources' },
        { text: 'Contact us', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/colophon#privacy-policy') },
    { text: 'License', href: getPermalink('/colophon#license') },
    { text: 'Colophon', href: getPermalink('/colophon') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Key-Technical-Decisions' },
  ],
  footNote: '<img class="h-5 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/assets/by-sa.png" alt="creative commons logo" loading="lazy"></img>This content is licensed under a <a class="text-blue-600 underline dark:text-muted" href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.',
};
