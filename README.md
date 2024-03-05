Projeto chat corporativo

Tecnologias:

 - Nuxt
 - MongoDB

Descrição:

    O chat corporativo é uma ferramenta feita para ser utilizada internamente pela empresa, cada membro estará designado a um setor,
    e por sua vez cada setor terá um "feed" com as informações inseridas pelo responsável do setor.

    é possível criar grupos com pessoas de diferentes setores, os nomeandos conforme desejado, além de que o responsável pelo grupo
    pode fazer o controle de que irá ou não criar novas postagens

Requisitos:

    Permissões: Administrator, Responsável, Funcionário, Espectador

    Administrador:

        Eu como administrador posso visualizar e interagir com o feed geral 

        Eu como administrador posso adicionar e inavitar usuários e designar os mesmos ao setor correspondente.

        Eu como administrador posso adicionar e remover setores

        Eu como administrador posso criar e remover grupos

        Eu como administrador posso atribuir o responsável de cada setor

        Eu como administrador posso atribuir a hierarquia dos membros do setor

        Eu como administrador posso configurar o chat conforme as opções de preferencias

        Eu como espectador posso visualizar o feed de todos os setores

        Eu como administrador posso vizualizar e interagir com os grupos a qual participo conforme as opções de preferencias

    Responsável:
        
        Eu como responsável posso visualizar o feed geral

        Eu como funcionário posso visualizar e interagit com o feed do meu setor

        Eu como responsável posso criar e remover grupos

        Eu como responsável posso atribuir a hierarquia dos membros do setor

        Eu como responsável posso configurar o chat conforme as opções de preferencias

        Eu como responsável posso vizualizar e interagir com os grupos a qual participo conforme as opções de preferencias

    Funcionário:

        Eu como funcionário posso visualizar o feed geral

        Eu como funcionário posso visualizar o feed do meu setor

        Eu como funcioário posso vizualizar e interagir com os grupos a qual participo conforme as opções de preferencias

    Espectador:

        Eu como espectador posso visualizar o feed geral

        Eu como espectador posso visualizar o feed do setor definido

        Eu como espectador posso vizualizar os grupos a qual participo conforme as opções de preferencias

    
Permissão: cada permissão é esclusiva para cada feed, ela define o que o usuário pode ou não fazer no feed atual
Hierarquia: define os niveis de prioridades do usuário, utilizado em conjunto com as opções de preferencias

Opções de preferencias:

    Tempo de atraso entre postagens

    Tipo de mensagem permitidas(Texto, Foto, Vídeo...)

    Usuários que podem criar e/ou remover postagens

    Tamano maximo de mensagem(caracteres/tamanho)

    Nível de importancia das postagens

    Permitir mensionar usuários

    permitir postagens temporárias

