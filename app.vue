<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'baidu-site-verification', content: 'codeva-LeTW5u4n40' },
    { name: 'google-site-verification', content: 'OQ-FnVME50EgIvv5nO4fsNl7EHkEl0vUSoFUe_fAMgY' },
    { name: 'msvalidate.01', content: '7EBDEFFBCC9B2A2F2DCC7A53B7B02D02' },
    { name: 'sogou_site_verification', content: 'V083fIOIFt'}
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh-CN'
  },
  script: [
    {
      defer: true,
      src: 'https://cloud.umami.is/script.js',
      'data-website-id': 'c82449b7-d50c-4933-8b1d-90d77fce4cf2'
    }
  ]
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: '/favicon.ico',
  twitterImage: '/favicon.ico',
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="rgb(var(--color-primary-500) / var(--tw-text-opacity))" />

    <Header />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <!-- <Adsbygoogle
        :ad-style="{ display: 'block', textAlign: 'center', height: '280px', margin: '16px 0', minWidth: '100%' }"
        :ad-layout="'in-article'" :hide-unfilled=true /> -->
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUContentSearch :files="files ?? []" :navigation="navigation ?? []" />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
