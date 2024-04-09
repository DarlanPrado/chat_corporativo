interface Servico{
    id: number,
    nome: string,
    descricao: string,
}

interface Permissao{
    name: string,
    value: string,
}

export interface Usuario{
    id: number,
    email: string,
    nome: string,
    permissao: string,
    servicos: Array<number | undefined>,
    dataLogin?: Date,
    blFirstLogin: boolean,
    blAtivo: boolean,
    createdAt: Date,
    updatedAt: Date,
}

interface UsuarioFromTable{
    id: number,
    nome: string,
    email: string,
    permissao: string,
    createdAt: number,
    updatedAt: number,
    blAtivo: boolean
}

interface State{
    usuarios: Array<Usuario>
    permissoes: Array<Permissao>
    servico: Array<Servico>
}

export const useUsuarioStore = defineStore('usuarios', {
    state: ():State => {
        return {
            usuarios: [],
            permissoes: [],
            servico: [],
        }
    },
    actions: {
        defineUsers(users: Array<Usuario>){
            this.usuarios = users
        },
        definePerms(perms: Array<Permissao>){
            this.permissoes = perms
        },
        defineServicos(servicos: Array<Servico>){
            this.servico = servicos
        }
    },
    getters: {
        getAllUsers(state: State){
            return state.usuarios
        },
        getListUserFromTable(state: State): Array<UsuarioFromTable>{
            var users = [] as Array<UsuarioFromTable>
            state.usuarios.forEach(usuario => {
                users.push({
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    permissao: usuario.permissao,
                    createdAt: usuario.createdAt.getTime(),
                    updatedAt: usuario.updatedAt.getTime(),
                    blAtivo: usuario.blAtivo
                })
            });
            return users
        },
        getUserById(state: State){
            return (idUsuario: number): Usuario | undefined => {
                return state.usuarios.find(usuario => usuario.id == idUsuario)
            }
        },
        getPerms(state: State){
            return state.permissoes
        },
        getServices(state: State){
            return state.servico
        }
    }
})