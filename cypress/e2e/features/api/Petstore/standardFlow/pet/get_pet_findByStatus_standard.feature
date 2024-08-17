Feature: Verificar Consulta de Pets por Status com Múltiplos Valores no Endpoint GET /pet/findByStatus

    Como usuário do sistema, desejo consultar dados da API,
    Para que eu possa verificar se os parâmetros de tempo estão sendo processados e retornados corretamente

    @regression @back @standard @get_pet
    Scenario Outline: Assegurar que será retornado o status correto passar por parametro na consulta
        Given que a API esteja operacional
        When informar na requisição o '<status>'
        Then deverá todos os valores correspondentes

        Examples:
            | status    |
            | available |
            | pending   |
            | sold      |

