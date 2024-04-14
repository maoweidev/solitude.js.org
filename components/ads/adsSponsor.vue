<script setup>
const items = [
  {
    id: 1,
    title: '晞云云计算',
    link: 'https://lightxi.com/',
    logo: 'https://www.lightxi.com/themes/web/lightxi/assets/images/logo.png',
    image: 'https://7.isyangs.cn/1/65eb26fbe43b4-1.png',
    alt: '晞云云计算',
    description: '新一代云计算平台',
    from: 'CDN 赞助',
  }
]

const item = ref(null)

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * items.length)
  item.value = items[randomIndex]
})
</script>

<template>
  <div v-if="item"
       class="relative group/ad border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 p-2 w-full transition-colors space-y-3"
  >
    <NuxtLink :to="item.link" class="focus:outline-none" tabindex="-1" target="_blank">
      <span class="absolute inset-0" aria-hidden="true"/>
    </NuxtLink>

    <UColorModeImage
      :light="item.image"
      :dark="item.image"
      :alt="item.alt"
      loading="lazy"
      class="w-full"
    />

    <div class="flex flex-col items-center mt-2 text-center">
      <div class="inline-flex gap-1.5">
        <img :src="item.logo" :alt="item.title" class="h-5 w-auto">

        <UBadge v-if="item.title" variant="subtle" size="xs" :label="item.title" class="font-semibold rounded"/>
      </div>

      <p
        class="text-sm text-gray-500 dark:text-gray-400 group-hover/ad:text-gray-700 dark:group-hover/ad:text-gray-200 mt-1 transition-colors"
      >
        {{ item.description }}
      </p>

      <UDivider label="来自" class="space-y-2.5"/>

      <p
        class="text-sm flex end-0 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
      >
        {{ item.from }}
      </p>

    </div>
  </div>
</template>
