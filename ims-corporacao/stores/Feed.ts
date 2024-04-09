interface Midia{
    base64: string,
    mimeType: string,
    nome: string,
}

interface Message{
    id_mensagem: number,
    usuario: string,
    mensagem: string,
    data_envio: Date,
    midia?: Midia
}

interface Member{
    id: number,
    name: string,
    email: string,
}

interface Chat{
    id: number,
    image: string,
    name: string
    newMessage: boolean
    members: Array<Member>
    messages: Array<Message>
    allowEnviteMessage: boolean
    timeOutFeed: number,
    temporaryMessages: boolean, 
}

interface State{
    token: string
    feeds: Array<Chat>
    feedSelected: Chat
}

export const useFeedStore = defineStore('feed', {
    state: (): State => {
        return {
            token: "",
            feeds: [],
            feedSelected: {} as Chat
        }
    }
})