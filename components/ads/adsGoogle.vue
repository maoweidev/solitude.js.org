<template>
    <div ref="googleads" class="google" />
</template>

<script setup lang="ts">
const googleads = ref(null)

onMounted(() => {
    if (googleads.value) {
        const script = document.createElement('script')
        script.setAttribute('type', 'text/javascript')
        script.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
        script.setAttribute('async', 'true')
        script.setAttribute('data-ad-client', 'ca-pub-6338523842252061')
        script.setAttribute('crossorigin', 'anonymous')
        googleads.value.appendChild(script)
    }
})
</script>

<style lang="postcss">
.google>#googleads {
    @apply relative border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-700 w-full transition-colors min-h-[220px];

    &:hover {
        .google-text {
            @apply text-gray-700 dark:text-gray-200;
        }
    }

    .google-img {
        @apply flex justify-center p-2 w-full;

        &>img {
            @apply !max-w-full w-full rounded;
        }
    }

    .google-text {
        @apply flex px-2 text-sm text-gray-500 dark:text-gray-400 transition-colors text-center w-full;
    }

    .google-poweredby {
        @apply block text-xs text-center text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 pt-1 pb-2 px-2 transition-colors;
    }
}
</style>