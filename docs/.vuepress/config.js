module.exports = {
  title: 'UzHackintosh',
  description: 'UzHackintosh - Hackintosh Guide for Uz Developers',
  theme: 'yuu',
  themeConfig: {
    yuu: {
      colorThemes: ['blue', 'red'],
    },
    repo: 'Genemator/uzhackintosh',
    docsDir: 'pages',
    editLinks: true,
    sidebarDepth: 3,
    lastUpdated: true,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Main Guide',
        link: '/more-text',
      },
      {
        text: 'Commando',
        link: '/commando/',
      },
      {
        text: 'Red',
        link: '/red/',
      },
      {
        text: 'Telegram',
        link: 'https://t.me/uzhackintosh',
      },
    ],
    sidebar: {
      '/commando/': [
        '',
        'more-content',
        'final-content',
      ],
      '/red/': [
        '',
        'more-content',
        'final-content',
      ],
      '/': [
        {
          title: 'Home',
          collapsable: false,
          children: ['/', 'custom/'],
        },
        {
          title: 'Markdown stuff',
          collapsable: false,
          children: [
            'more-text',
            'markdown',
            'markdown-vuepress',
            'markdown-it',
          ],
        },
        {
          title: 'Misc pages',
          children: [
            'custom-themes',
            'default-theme-config',
          ],
        },
      ],
    },
  },
};