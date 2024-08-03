Feature: Retornar um procedimento específico do usuario - Todos os usuarios

    @regression @back @standard @get_procedurerequests{procedurerequest_id}
    Scenario Outline: Assegurar que será retornado o procedimento específico
        Given um usuario cadastrado disponivel no sistema com email '<email>'
        When Capturar o ID do usuario
        And Capturar o ID do municipio do usuario
        And Gerar os dados necessários
        And Preencher os campos necessários para a criação do procedimento
        And Deverá ser criado o procedimento
        And Capturar o id do procedimento cadastrado
        Then Deverá ser retornado o procedimento específico com seus respectivos campos

        Examples:
            | email            |
            | email1@email.com |
            | email2@email.com |
            | email3@email.com |
