Feature: Atualizar um procedimento - Todos os protetores

    @regression @back @standard @patch_procedurerequests{procedurerequest_id}
    Scenario Outline: Assegurar que será atualizado o procedimento específico que foi criado
        Given Um protetor cadastrado disponivel no sistema com email '<email>' v2
        When Capturar o ID do protetor v2
        And Capturar o ID do municipio do protetor v2
        And Gerar os dados necessários v2
        And Preencher os campos necessários para a criação do procedimento v2
        And Deverá ser criado o procedimento v2
        And Capturar o id do procedimento cadastrado v2
        And Preencher os campos que serão atualizados
        Then O procedimento deve ser atualizado

        Examples:
            | email                              |
            | protetor_independente_3@regpet.com |
            | protetor_ong@regpet.com            |
            | protetor_projeto_3@regpet.com      |
            