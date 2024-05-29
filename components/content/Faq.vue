<script setup>
defineProps({
  faq: {
    type: Array,
    default: () => []
  },
})
</script>

<template>
  <ULandingFAQ :items="faq" multiple>
    <template #item="{ item }">
      <MDC :value="item.content" class="prose prose-primary dark:prose-invert max-w-none text-gray-500 dark:text-gray-400" />
    </template>
  </ULandingFAQ>
</template>