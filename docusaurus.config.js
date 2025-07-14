// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tiểu sảnh nhỏ xíu của Arust',
  tagline: 'Khám phá vẻ đẹp của toán học qua những nghiên cứu học thuật',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://npt.com', // Thay bằng domain thật của bạn
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'math-academy', // Usually your GitHub org/user name.
  projectName: 'math-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // Algolia search configuration
      algolia: {
        // The application ID provided by Algolia
        appId: 'BH4D9OD16A',
        
        // Public API key: it is safe to commit it
        apiKey: 'ac317234e6a42074175369b2f42e9296',
        
        indexName: 'math-docs',
        
        // Optional: see doc section below
        contextualSearch: true,
        
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push
        externalUrlRegex: 'external\\.com|domain\\.com',
        
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        
        // Optional: Algolia search parameters
        searchParameters: {},
        
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        
        // Optional: whether the insights feature is enabled or not on Docsearch
        insights: false,
        
        //... other Algolia params
      },
      navbar: {
        logo: {
          alt: 'Math Academy Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
            activeBaseRegex: '^/$',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Kiến thức',
          },
          {
            to: '/about',
            position: 'left',
            label: 'About me',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tài Liệu',
            items: [
              {
                label: 'Kiến Thức',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Cộng Đồng',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/NPTarceus',
              },
              {
                label: 'My Page',
                href: 'https://www.facebook.com/profile.php?id=61577889720836',
              },
            ],
          },
          {
            title: 'Thêm',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'About me',
                href: 'https://the-bithub.com/NPT',
              },
            ],
          },
        ],
        copyright: `Copyright © 2025 Tiểu sảnh nhỏ xíu của Arust. Built with Heavietnam.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
