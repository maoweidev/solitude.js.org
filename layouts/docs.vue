<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

import Artalk from 'artalk'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import 'artalk/dist/Artalk.css'

import 'artalk/dist/Artalk.css'

const el = ref<HTMLElement>()
const route = useRoute()

let artalk: Artalk

onMounted(() => {
  artalk = Artalk.init({
    el: el.value,
    pageKey: route.path,
    pageTitle: `${document.title}`,
    server: 'https://art.efu.me',
    site: 'Solitude Docs',
    darkMode: 'auto',
    voteDown: true,
    imgLazyLoad: true,
  })
})

onBeforeUnmount(() => {
  artalk.destroy()
})

const navigation = inject<Ref<NavItem[]>>('navigation')
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside>
          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>

      <slot />
      <view ref="el" />
    </UPage>
  </UContainer>
</template>
