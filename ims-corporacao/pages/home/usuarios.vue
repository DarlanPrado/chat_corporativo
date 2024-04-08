<template>
    <div class="w-full">
        <h2 class="font-semibold text-2xl">Usuarios</h2>
    </div>
    <HomeUsuariosCreateUser v-model="showCreateuser"/>
    <UCard class="mt-10">
        <template  #header>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <UTooltip class="w-full" text="Busque o usuário pelo ID, Nome ou Email">
                        <UInput v-model="searchTableUsers"  class="w-full" icon="i-heroicons-magnifying-glass" placeholder="Buscar usuário" size="md" />
                    </UTooltip>
                </div>
                <div class="flex justify-end">
                    <UTooltip text="Adicionar usuário">
                        <UButton @click="showCreateuser = true" icon="i-heroicons-user-plus-solid" size="md"/>
                    </UTooltip>
                </div>
            </div>
        </template >
        <UTable :rows="filteredRows" :columns="tableUsersColumns" >
            <template #actions-data="{ row }">
                <UDropdown :items="tableUserActions(row)">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                </UDropdown>
            </template>
            <template #blAtivo-data="{ row }">
                <UBadge v-if="row.blAtivo" label="Habilitado" color="green" variant="outline"/>
                <UBadge v-if="!row.blAtivo" label="Desabilitado" color="red" variant="outline" />
            </template>
        </UTable>
    </UCard>
</template>
<script setup lang="ts">
const showCreateuser = ref(false);


const controlTableUserActionsEnableOrDisable = (row: any) => {
    if(!row.blAtivo){
        return {
            label: 'Habilitar',
            icon: 'i-heroicons-lock-open-solid'
        }
    }else{
        return {
            label: 'Desabiliar',
            icon: 'i-heroicons-lock-closed-solid'
        }
    }
}

const tableUserActions = (row: any) => [
    [{
        label: 'Editar',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => console.log('Edit', row.id)
    }],
    [
        controlTableUserActionsEnableOrDisable(row)
    ]
]

const tableUsersColumns = [{
    key: 'id',
    label: 'ID'
},{
    key: 'nome',
    label: 'Nome'
},{
    key: 'email',
    label: 'Email'
},{
    key: 'permissao',
    label: 'Permissão'
},{
    key: 'createdAt',
    label: 'Criado em'
},{
    key: 'updatedAt',
    label: 'Atualizado em'
},{
    key: 'blAtivo',
    label: 'Status'
},{
  key: 'actions'
}]

const users = [{
    id: 1,
    nome: 'usuario de teste',
    email: 'example@mail.com',
    permissao: 'administrador',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    blAtivo: true
},
{
    id: 2,
    nome: 'usuario de teste 2',
    email: 'example@mail.com',
    permissao: 'administrador',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    blAtivo: false
}]


const searchTableUsers = ref('')

const filteredRows = computed(() => {
  if (!searchTableUsers.value) {
    return users
  }

  return users.filter((users) => {
    return Object.values(users).some((value) => {
      return String(value).toLowerCase().includes(searchTableUsers.value.toLowerCase())
    })
  })
})


definePageMeta({
    layout: 'internal'
})

useHead({
    title: "Usuarios",
})

</script>