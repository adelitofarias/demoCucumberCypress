Feature: Alternativo login

    @regression @front @alternative @autenticacao
    Scenario Outline: Informar email Bloqueado
        Given acesse a tela de autenticação
        When informar o "<user>" e a "<senha>" de credenciamento bloqueado
        Then o exibirá "<mensagem>" de não autorizado

        Examples:
            | user            | senha        | mensagem                                            |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |

    @regression @front @alternative @autenticacao
    Scenario: Informar dados aleatórios
        Given acesse a tela de autenticação
        When informar o <USER> e a <SENHA> de credenciamento incompatíveis
        Then o exibirá "Epic sadface: Username and password do not match any user in this service" de incompatibilidade