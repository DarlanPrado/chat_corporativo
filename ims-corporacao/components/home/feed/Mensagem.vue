<template>
    <UCard :ui="{ background: 'dark:bg-gray-700' }">
        <div class="mb-2">
            <p>{{ props.mensagem.mensagem }}</p>
        </div>
        <div>
            <span class="text-sm text-gray-500">{{ props.mensagem.usuario }}</span>
        </div>
    </UCard>
    <!-- <div class="bg-gray-700">
        <p>{{ props.mensagem.mensagem }}</p>
        opa
    </div> -->
</template>
<script setup lang="ts">

interface Mensagem {
    id_mensagem: number,
    usuario: string,
    mensagem: string,
    data_envio: Date,
}

interface Props {
    mensagem: Mensagem
}

const props = defineProps<Props>()


</script>