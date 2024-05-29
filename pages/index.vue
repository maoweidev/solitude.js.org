<template>
  <div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <template #default>
        <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" />
        <img
          src="https://s3.qjqq.cn/47/6616165b0c3de.webp!color" class="w-full"
          alt="A person wearing a mask while working on a computer."
        >
      </template>
    </ULandingHero>

    <CtaCard />

    <ULandingSection title="结合你所需的一切." class="!pt-0 from-gray-950/50 to-gray-900">
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>

<script setup lang="ts">
import CtaCard from '@/components/CtaCard.vue'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  titleTemplate: '',
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>
