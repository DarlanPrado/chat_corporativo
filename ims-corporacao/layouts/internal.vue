<template>
  <NuxtErrorBoundary @error="$notification.warning('Ocorreu um erro ao tentar carregar'), showCofiguration = false">
    <UModal v-model="showCofiguration" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Configuração
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showCofiguration = false" />
          </div>
        </template>

        <Placeholder class="h-32" />
      </UCard>
    </UModal>
  </NuxtErrorBoundary>

  <NuxtErrorBoundary @error="$notification.warning('Ocorreu um erro ao tentar carregar'), showMenu = false">
    <USlideover v-model="showMenu" prevent-close>
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Menu
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showMenu = false" />
          </div>
        </template>

        <Placeholder class="h-full" />
      </UCard>
    </USlideover>
  </NuxtErrorBoundary>


  <div>
    <div class="min-h-screen min-w-screen">
      <div class="flex justify-between w-full h-20 bg-gray-300 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-7">
        <div class="flex justify-center items-center">
          <h1 @click="navigateTo('/')" class="text-4xl font-black text-primary shadownFire cursor-pointer">Firelight</h1>
        </div>
        <div class="flex justify-center items-center gap-2">
          <UTooltip text="Tema" :shortcuts="['SHIFT','T']">
            <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray" variant="ghost" aria-label="Tema" @click="isDark = !isDark"/>
          </UTooltip>
          <UTooltip text="Configuração" :shortcuts="['SHIFT','C']">
            <UButton icon="i-heroicons-cog-6-tooth-20-solid" color="gray" variant="ghost" aria-label="Configuração" @click="showCofiguration = true"/>
          </UTooltip>
          <UTooltip text="Menu" :shortcuts="['SHIFT','M']">
            <UButton @click="showMenu = true" icon="i-heroicons-bars-3-16-solid" aria-label="Menu" />
          </UTooltip>
        </div>
      </div>
      <div>
        <slot />
      </div>
    </div>
    <div class="flex justify-between w-full h-36 bg-gray-300 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">

    </div>
  </div>
</template>
<script setup lang="ts">
const { $notification } = useNuxtApp()
const colorMode = useColorMode()
const showMenu = ref(false)
const showCofiguration = ref(false)

defineShortcuts({
  shift_t: {
    handler: () => {
      isDark.value = !isDark.value
    }
  },
  shift_m: {
    handler: () => {
      showMenu.value = !showMenu.value
    }
  },
  shift_c: {
    handler: () => {
      showCofiguration.value = !showCofiguration.value
    }
  }
})

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>