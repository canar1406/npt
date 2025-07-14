// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Sidebar cho nội dung toán học
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Đại Số',
      items: [
        'algebra/index',
        'algebra/linear-algebra',
      ],
    },
    {
      type: 'category',
      label: 'Giải Tích',
      items: [
        'calculus/index',
        'calculus/limits',
      ],
    },
    {
      type: 'category',
      label: 'Hình Học',
      items: [
        'geometry/index',
      ],
    },
    {
      type: 'category',
      label: 'Xác Suất & Thống Kê',
      items: [
        'statistics/index',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
