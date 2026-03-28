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
  url: 'https://canar1406.github.io', // Custom domain
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/npt/',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'canar1406', // Usually your GitHub org/user name.
  projectName: 'npt', // Usually your repo name.

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
          rehypePlugins: [[rehypeKatex, {
              strict: false,
              macros: {
                "\\heva": "\\begin{cases}#1\\end{cases}",
                "\\hoac": "\\left[\\begin{aligned}#1\\end{aligned}\\right."
              }
            }]
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {
              strict: false,
              macros: {
                "\\heva": "\\begin{cases}#1\\end{cases}",
                "\\hoac": "\\left[\\begin{aligned}#1\\end{aligned}\\right."
              }
            }]
          ],
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
          customCss: [
            './src/css/custom.css',
            './phycat-abyss.css',
            './phycat-forest.css'
          ],
        },
      }),
    ],
  ],

  // Thêm plugin và theme tùy chỉnh
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['vi'],
        highlightSearchTermsOnTargetPage: true,
        removeDefaultStopWordFilter: true,
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog'
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Docs sidebar configuration
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // Algolia search disabled - using local search
      // algolia: {
      //   appId: 'IWKUXCUYNB',
      //   apiKey: '658663484ce56914c8d325de361927bc',
      //   indexName: 'math-docs',
      //   contextualSearch: false,
      //   searchParameters: {},
      //   debug: false
      // },
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
                href: '/about',
              },
            ],
          },
        ],
        copyright: `Copyright © 2025 Tiểu sảnh nhỏ xíu của Arust. Built with <a href="https://home.heavietnam.com/" target="_blank">Heavietnam</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
