Feature: Retornar um procedimento específico do protetor - Todos os protetores

    @regression @back @standard @get_procedurerequests{procedurerequest_id}
    Scenario Outline: Assegurar que será retornado o procedimento específico
        Given um protetor cadastrado disponivel no sistema com email '<email>'
        When Capturar o ID do protetor
        And Capturar o ID do municipio do protetor
        And Gerar os dados necessários
        And Preencher os campos necessários para a criação do procedimento
        And Deverá ser criado o procedimento
        And Capturar o id do procedimento cadastrado
        Then Deverá ser retornado o procedimento específico com seus respectivos campos

        Examples:
            | email                              |
            | protetor_independente_3@regpet.com |
            | protetor_ong@regpet.com            |
            | protetor_projeto_3@regpet.com      |
            