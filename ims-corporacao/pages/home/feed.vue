<template>
    <div class="w-full h-full grid grid-cols-12 gap-3">
        <UCard class="col-span-3">

        </UCard>
        <UCard class="min-h-full col-span-9">
            <HomeFeedChat />
        </UCard>
    </div>
</template>
<script setup lang="ts">

    definePageMeta({
        layout: 'internal'
    })

    useHead({
        title: 'Feed'
    })

</script>
