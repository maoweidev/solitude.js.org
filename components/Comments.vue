<template>
  <view ref="el" />
</template>

<script setup lang="ts">
import Artalk from 'artalk'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import 'artalk/dist/Artalk.css'

const colorMode = useColorMode()
const el = ref<HTMLElement>()
const route = useRoute()

let artalk: Artalk

const initArtalk = () => {
  artalk = Artalk.init({
    el: el.value,
    pageKey: route.path,
    pageTitle: document.title,
    server: 'https://art.efu.me',
    site: 'Solitude Docs',
    darkMode: colorMode.value === 'dark',
  })
}

const destroyArtalk = () => {
  artalk.destroy()
}

onMounted(() => {
  initArtalk()
})

watch(route, () => {
  destroyArtalk()
  initArtalk()
})

watch(colorMode, () => {
  artalk.setDarkMode(colorMode.value === 'dark')
})

onBeforeUnmount(() => {
  destroyArtalk()
})
</script>
