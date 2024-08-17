Feature: Tentar acessar os procedimentos fora do escopo de autorização

    #Usuário sem escopo para acessar a solicitação
    @regression @back @alternative @get_procedurerequests
    Scenario: Assegurar que será retornado a mensagem com erro 403
        Given um protetor 1 cadastrado disponivel no sistema v3
        And capturar o id do munícipio do protetor 1
        And Gerar os dados necessarios para a criação do procedimento v3
        And Preencher os campos necessários para a criação do procedimento v3
        When criar um procedimento v3
        And outro protetor 2 cadastrado no sistema com id disponivel
        Then tentar acessar os procedimentos do protetor 1 utilizando o acesso do protetor 2

        