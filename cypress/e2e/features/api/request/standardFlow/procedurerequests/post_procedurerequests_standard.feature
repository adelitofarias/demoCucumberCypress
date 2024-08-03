Feature: Criar um procedimento - Todos os usuários exceto o Admin

    @regression @back @standard @post_procedurerequests
    Scenario Outline: Assegurar que será criado um procedimento
        Given Protetores cadastrados e com login válido '<email>' v2
        When capturar o id do protetor
        And capturar o id do municipio do protetor
        And gerar os dados necessários
        And preencher os campos necessários para a criação do procedimento
        Then deverá ser criado o procedimento

        Examples:
            | email                              |
            | protetor_independente_3@regpet.com |
            | protetor_ong@regpet.com            |
            | protetor_projeto_3@regpet.com      |
