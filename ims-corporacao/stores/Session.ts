export interface Sessao{
    id: number,
    email: string,
    nome: string,
    permissao: string
}

interface State {
    id: number,
    email: string,
    nome: string,
    permissao: string
}

export const useSessionStore = defineStore('session', {
    state: (): State => {
        return {
            id: 0,
            email: "",
            nome: "",
            permissao: ""
        }
    },
    actions: {
        defineSession(session: Sessao){
            this.id = session.id,
            this.email = session.email,
            this.nome = session.nome,
            this.permissao = session.permissao
        },
    },
    getters: {
        getSession(state: State){
            return {
                id: state.id,
                email: state.email,
                nome: state.nome,
                permissao: state.permissao
            }
        }
    }
})