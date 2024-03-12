<template>
  <div>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
  useHead({
    // bodyAttrs: {
    //   class: 'bg-gradient-to-b from-primary-900 dark:from-[#000] from-20% dark:to-primary-900 to-primary-950 to-90% text-gray-500 dark:text-gray-200'
    // },
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} | IMS` : 'IMS';
    },
    // link: [
    //   {
    //     rel: 'icon',
    //     type: 'image/svg+xml',
    //     href: '/Icon.svg'
    //   }
    // ]
  });
</script>
