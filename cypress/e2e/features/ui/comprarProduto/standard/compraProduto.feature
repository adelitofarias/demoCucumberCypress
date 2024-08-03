Feature: Concretizar a compra de produto com êxito

    @regression @front @standard @comprarProduto
    Scenario: Logar, Adicionar e Finazar compra
        Given acesse a tela de autenticação
        When informar as credenciais de usuário padrão

        When visualização de Produto ordendos por "Price (high to low)"
       # When Adicionar ao Carrinho
       # When Finalizar Compra
       # Then o produto será comprado
