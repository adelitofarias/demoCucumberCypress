Feature: Verificar contrato do Modelo Pet

    @regression @back @structural
    Scenario: Assegurar que o contrato terá a estrutura válida para o modelo Pet
        Given que tem acesso à API Swagger Petstore para validar a estrutura
        When realizar a requisição passando o status válido
        Then retornará informando que o contrato para o Modelo Pet está dentro do esperado