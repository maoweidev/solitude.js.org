export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    'nuxt-og-image',
    '@nuxt/image',
    // '@nuxtjs/google-adsense',
    ['@nuxtjs/robots', {
      rules: [
        {UserAgent: '*'},
        {Disallow: ''},
        {BlankLine: true},
        {Comment: 'Comment here'},
        {Sitemap: 'https://solitude.js.org/sitemap.xml'},
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
  googleAdsense: {
    id: 'ca-pub-6338523842252061'
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
  }
})
