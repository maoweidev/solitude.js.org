<template>
  <UPageGrid>
    <UPageCard v-for="(item, index) in list" :to="item.link" :key="index" v-bind="item" target="_blank">
      <template #icon>
        <UAvatar
          :src="item.src"
          :alt="item.name"
          class="mr-3.5"
        />
        <span class="w-full text-xl font-bold">{{ item.name }}</span>
      </template>
      <template #description>
        <span class="line-clamp-2">{{ item.desc }}</span>
      </template>
    </UPageCard>
  </UPageGrid>
</template>

<script setup lang="ts">
defineProps({
  list: {
    type: Array as () => Array<{ name: string, src: string, link: string, desc: string }>,
    default: () => []
  },
})
</script>
