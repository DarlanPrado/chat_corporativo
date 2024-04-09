<template>
    <div class="w-full">
        <h2 class="font-semibold text-2xl">Usuarios</h2>
    </div>
    <HomeUsuariosCreateUser v-model="showCreateUser"/>
    <HomeUsuariosUpdateUser v-if="showUpdateUser" v-model="showUpdateUser" :user="dataUserSelected"/>
    <UCard class="mt-5">
        <template  #header>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <UTooltip class="w-full" text="Busque o usuário pelo ID, Nome ou Email">
                        <UInput v-model="searchTableUsers"  class="w-full" icon="i-heroicons-magnifying-glass" placeholder="Buscar usuário" size="md" />
                    </UTooltip>
                </div>
                <div class="flex justify-end">
                    <UTooltip text="Adicionar usuário">
                        <UButton @click="showCreateUser = true" icon="i-heroicons-user-plus-solid" size="md"/>
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
            
            <template #createdAt-data="{ row }">
                <p>{{ $treat.date.msToDate(row.createdAt) }}</p>
            </template>

            <template #updatedAt-data="{ row }">
                <p>{{ $treat.date.msToDate(row.updatedAt) }}</p>
            </template>

            <template #blAtivo-data="{ row }">
                <UBadge v-if="row.blAtivo" label="Habilitado" color="green" variant="outline"/>
                <UBadge v-if="!row.blAtivo" label="Desabilitado" color="red" variant="outline" />
            </template>
        </UTable>
        <template #footer>
            <UPagination v-model="tableUsersPage" :page-count="tableUsersCount" :total="useUsuarioStore().getListUserFromTable.length" />
        </template>
    </UCard>
</template>
<script setup lang="ts">
const { $notification, $treat } = useNuxtApp()
import { useUsuarioStore } from '~/stores/Usuarios';
import type{ Usuario } from '~/stores/Usuarios'

const showCreateUser = ref(false);
const showUpdateUser = ref(false);
const tableUsersPage = ref(1);
const dataUserSelected = ref({} as Usuario)
const tableUsersCount = 5

definePageMeta({
    layout: 'internal'
})

useHead({
    title: "Usuarios",
})

onMounted(() => {
    findUser()
    findPerms()
    findServices()
})

const controlTableUserActionsEnableOrDisable = (row: any) => {
    if(!row.blAtivo){
        return {
            label: 'Habilitar',
            icon: 'i-heroicons-lock-open-solid',
            click: () => setStatusUser(row.id, true)
        }
    }else{
        return {
            label: 'Desabiliar',
            icon: 'i-heroicons-lock-closed-solid',
            click: () => setStatusUser(row.id, false)
        }
    }
}

const tableUserActions = (row: any) => [
    [{
        label: 'Editar',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => {
            const user = useUsuarioStore().getUserById(row.id)

            if(user){
                dataUserSelected.value = user
                showUpdateUser.value = true
            }else{
                $notification.warning("Ação invalida", "O usuário não foi encontrado")
                throw createError({statusCode: 500, message: `Erro ao encontrar o usuário selecionado para editar`})
            }
        }
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

const searchTableUsers = ref('')

const filteredRows = computed(() => {
  if (!searchTableUsers.value) {
    return useUsuarioStore().getListUserFromTable.slice((tableUsersPage.value - 1) * tableUsersCount, (tableUsersPage.value) * tableUsersCount)
  }

  return useUsuarioStore().getListUserFromTable.filter((users) => {
    return Object.values(users).some((value) => {
      return String(value).toLowerCase().includes(searchTableUsers.value.toLowerCase())
    })
  }).slice((tableUsersPage.value - 1) * tableUsersCount, (tableUsersPage.value) * tableUsersCount)
})

const findUser = () => {
    useUsuarioStore().defineUsers([
        {
            id: 1,
            email: "example1@mail.com",
            nome: "example 1",
            permissao: 'administrador',
            servicos: [1],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            email: "example2@mail.com",
            nome: "example 2",
            permissao: 'administrador',
            servicos: [1],
            dataLogin: new Date(),
            blFirstLogin: true,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 3,
            email: "example3@mail.com",
            nome: "example 3",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 4,
            email: "example4@mail.com",
            nome: "example 4",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 5,
            email: "example5@mail.com",
            nome: "example 5",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 6,
            email: "example6@mail.com",
            nome: "example 6",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 7,
            email: "example7@mail.com",
            nome: "example 7",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 8,
            email: "example8@mail.com",
            nome: "example 8",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 9,
            email: "example9@mail.com",
            nome: "example 9",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 10,
            email: "example10@mail.com",
            nome: "example 10",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 11,
            email: "example11@mail.com",
            nome: "example 11",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 12,
            email: "example12@mail.com",
            nome: "example 12",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 13,
            email: "example13@mail.com",
            nome: "example 13",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 14,
            email: "example14@mail.com",
            nome: "example 14",
            permissao: 'administrador',
            servicos: [],
            dataLogin: new Date(),
            blFirstLogin: false,
            blAtivo: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ])
}

const findPerms = () => {
    useUsuarioStore().definePerms([{
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
    }])
}


const findServices = () =>{
    useUsuarioStore().defineServicos([{
        id: 1,
        nome: "feed",
        descricao: "Ferramenta de conversação entre as equipes",
    }])
}

const setStatusUser = (id: number, status: boolean) => {
    $notification.info("Nada aqui", "Este recursto está em desenvolvimento")
}

</script>