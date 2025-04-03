// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pdnode',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  url: 'https://pdnode.com', // 请替换为你网站的实际 URL
  baseUrl: '/docs',

  organizationName: 'pdnode',
  projectName: 'pdnode',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/pdnode/pdnode-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/pdnode/pdnode-website/edit/main/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pdnode',
        logo: {
          alt: 'Pdnode Logo',
          src: 'img/logo.svg',
        },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: 'https://github.com/pdnode/pdnode', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [{ label: 'Tutorial', to: '/docs/' }],
          },
          {
            title: 'Community',
            items: [{ label: 'Email', href: 'mailto:bretren2013@gmail.com' }],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/pdnode/pdnode' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PdNode, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oceanicNext,
        darkTheme: prismThemes.palenight,
      },
    }),
    
};

export default config;
