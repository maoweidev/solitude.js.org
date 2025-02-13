export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'slate',
    button: {
      color: {
        white: {
          link: 'text-white dark:text-white hover:text-gray-300 dark:hover:text-gray-300 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-gray-500 dark:focus-visible:ring-gray-400 transition-all duration-200'
        },
        transparent: {
          outline: 'ring-1 ring-inset ring-gray-700 text-white dark:text-white hover:bg-gray-900 disabled:bg-gray-300 dark:hover:bg-gray-900 dark:disabled:bg-gray-300 focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-400'
        }
      }
    },
    content: {
      prose: {
        code: {
          icon: {
            terminal: 'i-ph-terminal'
          }
        }
      }
    }
  },
  elements: {
    variables: {
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)'
      },
      dark: {
        background: 'var(--color-gray-950)',
        foreground: 'var(--color-gray-400)'
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
        to: 'https://github.com/everfu/hexo-theme-solitude',
        target: '_blank',
        'aria-label': 'Theme on GitHub',
      },
    ],
  },
  footer: {
    credits: 'Copyright © 2023 Efu - MIT License',
    colorMode: false,
    links: [
      {
        to: 'https://qm.qq.com/q/mYIJRTqo0w',
        icon: 'i-simple-icons-tencentqq',
        target: '_blank',
        'aria-label': 'QQ Group',
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/everfu/hexo-theme-solitude',
        target: '_blank',
        'aria-label': 'Solitude on GitHub',
      },
    ]
  },
  toc: {
    title: '目录',
    bottom: {
      title: '相关链接',
      edit: 'https://github.com/everfu/solitude.js.org/edit/main/content',
      links: [
        {
          icon: 'i-heroicons-star',
          label: '点个 Star 吧！',
          to: 'https://github.com/everfu/hexo-theme-solitude',
          target: '_blank',
        },
        {
          icon: 'i-heroicons-banknotes',
          label: '爱发电赞助',
          to: 'https://afdian.net/a/everfu',
          target: '_blank',
        },
        {
          icon: 'i-heroicons-heart',
          label: 'Github Sponsor',
          to: 'https://github.com/sponsors/everfu',
          target: '_blank',
        }
      ],
    },
  },
})
