// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    'nuxt-og-image',
    '@nuxt/image',
    ['@nuxtjs/robots', {
      rules: [
        {UserAgent: '*'},
        {Disallow: ''},
        {BlankLine: true},
        {Comment: 'Comment here'},
        {Sitemap: 'https://docs.efu.me/sitemap.xml'},
        {Host: 'https://docs.efu.me'},
        {Allow: '/'},
        {Allow: '/get-started'},
        {Allow: '/configuration'},
        {Allow: '/comments'},
        {Allow: '/search'},
        {Allow: '/pages'},
        {Disallow: '/api'},
        {Disallow: '/_content'},
        {Disallow: '/_nuxt'},
        {Disallow: '/_dir'},
      ]
    }]
  ],
  hooks: {
    'components:extend': function (components) {
      for (const comp of components) {
        if (comp.global) {
          comp.global = 'sync'
        }
      }
    },
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  routeRules: {
    '/get-started': {redirect: '/get-started/installation'},
    '/configuration': {redirect: '/configuration/global'},
  },
  nitro: {
    prerender: {
      routes: [
        '/api/search.json',
        '/sitemap.xml'
      ]
    }
  },
  colorMode: {
    preference: 'dark'
  },
  typescript: {
    strict: true
  },
})
