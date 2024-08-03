Feature: Sucesso login

    @regression @front @standard @autenticacao
    Scenario: Informar email válido
        Given acesse a tela de autenticação
        When informar as credenciais de usuário padrão
        Then o url conterá o subdiretório do inventário
