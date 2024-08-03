Feature: Retornar todos os procedimentos - Todos os usuários exceto o Admin

    @regression @back @standard @get_procedurerequests
    Scenario Outline: Assegurar que será retornado todos os procedimentos correspondentes
        Given Protetores cadastrados e com login válido '<email>'
        When solicitar todos os procedimentos
        Then deverá ser retornado todos os procedimentos do protetor

        Examples:
            | email                              |
            | protetor_independente_3@regpet.com |
            | protetor_ong@regpet.com            |
            | protetor_projeto_3@regpet.com      |
            | regulador_estadual@regpet.com      |
            | regulador_municipal@regpet.com     |
            | executante_estadual@regpet.com     |
            | executante_municipal@regpet.com    |
            