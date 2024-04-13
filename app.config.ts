export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Solitude',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/valor-x/hexo-theme-solitude',
        target: '_blank',
        'aria-label': 'Theme on GitHub',
      },
    ],
  },
  footer: {
    credits: 'Copyright © 2023 Efu',
    colorMode: false,
    links: [
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/valor-x/hexo-theme-solitude',
        target: '_blank',
        'aria-label': 'Solitude on GitHub',
      },
      {
        icon: 'i-simple-icons-telegram',
        to: 'https://t.me/solitudePro',
        target: '_blank',
        'aria-label': 'Telegram',
      }
    ]
  },
  toc: {
    title: '目录',
    bottom: {
      title: '相关链接',
      edit: 'https://github.com/efuo/docs/edit/main/content',
      links: [
        {
          icon: 'i-heroicons-star',
          label: '点个 Star 吧！',
          to: 'https://github.com/valor-x/hexo-theme-solitude',
          target: '_blank',
        },
        {
          icon: 'i-heroicons-photo',
          label: '去图图床',
          to: 'https://7tu.top/',
          target: '_blank',
        }
      ],
    },
  },
})
