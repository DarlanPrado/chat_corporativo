<template>
    <UContainer :ui="{base: 'h-screen w-screen'}">
        <div class="h-full w-full grid grid-cols-1 lg:grid-cols-2">
            <div class="flex justify-center items-center p-5 lg:p-16">
                <UCard :ui="{base: 'h-full w-full'}">
                    <div>
                        <div class="flex justify-between flex-col md:flex-row">
                            <div class="flex justify-center items-center">
                                <NuxtImg src="/logo.png" sizes="100px md:200px" />
                            </div>
                            <div class="flex justify-center items-center w-full">
                                <h1 class="text-4xl md:text-6xl font-black text-primary shadownFire">Firelight</h1>
                            </div>
                        </div>
                        <h3 class="text-center text-2xl font-black text-primary">Corporation Management</h3>
                    </div>
                    <div class="m-10 hidden md:flex justify-center items-center">
                        <span class="text-4xl font-black">Descubra a Verdadeira Natureza da sua Empresa</span>
                    </div>
                </UCard>
            </div>
            <div class="flex justify-center items-center p-5">
                <UCard v-if="!showEsqueciASenha" :ui="{ base: 'w-full'}">
                    <template #header>
                        <div class="w-full flex justify-center">
                            <span class="text-center text-xl font-bold">Login</span>
                        </div>
                    </template>

                    <div>
                        <UForm>
                            <div class="flex flex-col gap-3">
                                <UInput icon="i-heroicons-envelope-16-solid" placeholder="Email" size="md" />
                                <UInput type="password" icon="i-heroicons-lock-closed-solid" placeholder="Senha" size="md" />
                            </div>
                            <div class="my-5">
                                <UButton label="Entrar" size="lg" block/>
                                <span @click="showEsqueciASenha = true" class="mt-2 hover:text-primary hover:underline cursor-pointer">Esqueci a senha</span>
                            </div>
                        </UForm>
                    </div>
                </UCard>
                <UCard v-if="showEsqueciASenha" :ui="{ base: 'w-full'}">
                    <template #header>
                        <div class="w-full flex justify-center">
                            <span class="text-center text-xl font-bold">Esqueci a senha</span>
                        </div>
                    </template>

                    <div>
                        <UForm>
                            <div class="flex flex-col gap-3">
                                <UInput icon="i-heroicons-envelope-16-solid" placeholder="Email" size="md" />
                                <UInput icon="i-heroicons-envelope-16-solid" placeholder="Confirmar email" size="md" />
                            </div>
                            <div class="my-5">
                                <UButton label="Enviar" size="lg" block/>
                                <span @click="showEsqueciASenha = false" class="mt-2 hover:text-primary hover:underline cursor-pointer">Entrar na conta</span>
                            </div>
                        </UForm>
                    </div>
                </UCard>
            </div>
        </div>
    </UContainer>
</template>
<script setup lang="ts">
const showEsqueciASenha = ref(false);

</script>
<style scoped>

.shadownFire {
    animation: shadownFireAnimation 6s infinite linear;
}


@keyframes shadownFireAnimation {
    0%{

    }
    25% {
      text-shadow: -20px 10px 70px #d97706 ;
    }
    50% {
        text-shadow: 10px 10px 70px red;
    }
    75%{
        text-shadow: 20px 10px 70px #b45309  ;
    }
    100% {
        
    }
}


</style>