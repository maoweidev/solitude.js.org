// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    'nuxt-og-image',
    '@nuxtjs/sitemap',
    "@nuxt/image"
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
    '/get-started': { redirect: '/get-started/installation' },
  },
  nitro: {
    prerender: {
      routes: [
        '/api/search.json'
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
