<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import request from '~/composables/request'

interface Contributor {
  login: string;
  html_url: string;
  avatar_url: string;
}

const star = ref('0')
const downloads = ref('0')
const contributors: Ref<Contributor[]> = ref([])

async function fetchState() {
  const { format } = Intl.NumberFormat('en', { notation: 'compact' })

  const { data: starInfo } = await request.getStar()
  star.value = format(starInfo.data.star)
  const { data: infoData } = await request.getInfo()
  downloads.value = format(infoData.data.downloads + 10000)
  contributors.value = infoData.data.contributors
}

onMounted(() => {
  fetchState()
})
</script>

<template>
  <div>
    <ULandingSection class="!pt-0 from-gray-950/50 to-gray-900">
      <ULandingCTA
        align="left" card :ui="{
          background: 'dark:bg-gradient-to-b from-gray-800 to-gray-900',
          shadow: 'dark:shadow-2xl',
          title: 'text-center lg:text-left',
          links: 'justify-center lg:justify-start',
        }"
      >
        <template #title>
          <span>
            因为热爱，
            <br>
            我们汇聚在一起。
          </span>
        </template>

        <template #links>
          <ClientOnly>
            <UAvatarGroup :max="16" size="md" class="flex-wrap-reverse [&_span:first-child]:text-xs justify-center">
              <UTooltip
                v-for="(contributor, index) of contributors" :key="index" :text="contributor.login"
                class="rounded-full" :ui="{ background: 'bg-gray-50 dark:bg-gray-800/50' }"
                :popper="{ offsetDistance: 16 }"
              >
                <UAvatar
                  :alt="contributor.login" :src="`https://ipx.nuxt.com/s_40x40/gh_avatar/${contributor.login}`"
                  :srcset="`https://ipx.nuxt.com/s_80x80/gh_avatar/${contributor.login} 2x`"
                  class="lg:hover:scale-125 lg:hover:ring-2 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform"
                  width="40" height="40" size="md" loading="lazy"
                >
                  <NuxtLink
                    :to="`https://github.com/${contributor.login}`" :aria-label="contributor.login"
                    target="_blank" class="focus:outline-none" tabindex="-1"
                  >
                    <span class="absolute inset-0" aria-hidden="true" />
                  </NuxtLink>
                </UAvatar>
              </UTooltip>
            </UAvatarGroup>
          </ClientOnly>
        </template>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          <NuxtLink class="text-center group" to="https://www.npmjs.com/package/hexo-theme-solitude" target="_blank">
            <p
              class="text-6xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400"
            >
              {{ downloads }}+
            </p>
            <p>最近一年下载量</p>
          </NuxtLink>

          <NuxtLink class="text-center group" to="https://github.com/valor-x/hexo-theme-solitude" target="_blank">
            <p
              class="text-6xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400"
            >
              {{ star }}+
            </p>
            <p>Star 数</p>
          </NuxtLink>
        </div>
      </ULandingCTA>
    </ULandingSection>
  </div>
</template>