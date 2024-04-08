<template>
    <UModal v-model="showModal">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">Adicionar usuário</h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="showModal = false" />
                </div>
            </template>

            <div>
                <UForm ref="form" :schema="schemaCreateUser" :state="stateCreateuser" @submit="criarUsuario" >
                    <div class="mb-5 flex flex-col gap-2">
                        <UFormGroup label="Nome" name="nome">
                            <UInput v-model="stateCreateuser.nome" placeholder="Nome do Usuario" />
                        </UFormGroup>
                        <UFormGroup label="Email" name="email">
                            <UInput v-model="stateCreateuser.email" placeholder="exemplo@mail.com" />
                        </UFormGroup>
                        <UFormGroup label="Permissão" name="permissao">
                            <USelect v-model="stateCreateuser.permissao" placeholder="Selecione" :options="optionsPerm" option-attribute="name"/>
                        </UFormGroup>
                        <UFormGroup label="Status" name="status">
                            <USelect v-model="stateCreateuser.status" :options="optionsStatus" option-attribute="name"/>
                        </UFormGroup>
                    </div>
                    <div>
                        <UButton type="submit" label="Adicionar" size="md" block/>
                    </div>
                </UForm>
            </div>
        </UCard>
    </UModal>
</template>
<script setup lang="ts"> 
import type { InferType } from 'yup';
import type { FormSubmitEvent } from '#ui/types'
const { $yup, $notification } = useNuxtApp()
const showModal = defineModel()

const schemaCreateUser = $yup.object({
    nome: $yup.string().lowercase().trim().required(),
    email: $yup.string().lowercase().trim().email().required(),
    permissao: $yup.string().required(),
    status: $yup.boolean().required()
})


type schemaCreateUser = InferType<typeof schemaCreateUser>

const stateCreateuser = reactive({
    nome: undefined,
    email: undefined,
    permissao: undefined,
    status: true,
})

const optionsPerm = [{
    name: 'Administrator',
    value: 'administrador'
},{
    name: 'Responsável',
    value: 'responsavel'
},{
    name: 'Funcionário',
    value: 'funcionario'
},{
    name: 'Espectador',
    value: 'espectador'
}]

const optionsStatus = [{
    name: 'Habilitado',
    value: true
},{
    name: 'Deshabilitado',
    value: false
}]

const criarUsuario = (event: FormSubmitEvent<schemaCreateUser>) => {
    showModal.value = false
    $notification.info("Este recurso está em desenvolvimento")
}
</script>