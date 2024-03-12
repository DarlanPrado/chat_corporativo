<template>
    <UContainer :ui="{base: 'h-screen w-screen'}">
        <div class="h-full w-full grid grid-cols-1 md:grid-cols-2">
            <div class="md:order-1 py-10">
                <UCard :ui="{base: 'h-full'}">
                    <h1>title</h1>
                </UCard>
            </div>
            <div class="flex justify-center items-center">
                <UCard :ui="{ base: 'w-full'}">
                    <template #header>
                        <div class="w-full flex justify-center">
                            <span class="text-center text-xl font-bold">Login</span>
                        </div>
                    </template>

                    <div>
                        <UForm>

                            <div>

                            </div>
                            <div>
                                <UButton label="Entrar" size="lg" block/>
                                <NuxtLink class="mt-2 hover:text-primary hover:underline cursor-pointer">Esqueci a senha</NuxtLink>
                            </div>
                        </UForm>
                    </div>
                </UCard>
            </div>
        </div>
    </UContainer>
</template>
<script setup lang="ts">
</script>