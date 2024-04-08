<template>
    <div class="h-full w-full max-h-full min-h-full flex flex-col gap-2">
        <div v-for="mensagemV in mensagens">
            <HomeFeedMensagem :mensagem="mensagemV" />
        </div>
    </div>
</template>
<script setup lang="ts">

const mensagens = [{
    id_mensagem: 1,
    usuario: 'teste',
    mensagem: 'uma mensagem de teste',
    data_envio: new Date()
},{
    id_mensagem: 2,
    usuario: 'teste',
    mensagem: 'outra mensagem de teste',
    data_envio: new Date()
},{
    id_mensagem: 2,
    usuario: 'teste',
    mensagem: 'aikdnauhnduiasbidbasuidbayusdbuyasbdyuabsdbasy uaybsduyabsdub uasbduybuay byuabsuydbuaysbduaybsdyubuyb adadasdasd',
    data_envio: new Date()
}]

</script>