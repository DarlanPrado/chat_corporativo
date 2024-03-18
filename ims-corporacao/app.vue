<template>
  <div>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: 'bg-stone-300 dark:bg-stone-900'
    },
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | Firelight` : 'Firelight';
    },
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.png'
      }
    ]
  });
</script>
