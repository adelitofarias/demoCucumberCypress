Feature: Verificar Consulta de Pets por Status Inválido no Endpoint GET /pet/findByStatus

    Como usuário do sistema, desejo consultar dados da API informando status Invalido,
    Para que eu possa verificar se o tratamento está coerente

    @regression @back @standard @get_pet
    Scenario Outline: Assegurar que será retornado o status correto ao informar um tipo de status inválido por parametro na consulta
        Given que a API esteja operacional
        When informar na requisição o status inválido
        Then deverá informar que o status não está dentro do conjunto válido
