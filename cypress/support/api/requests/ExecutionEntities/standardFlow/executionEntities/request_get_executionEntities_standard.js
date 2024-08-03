import { Config } from "@utils/config";

class RequestGetExecutionEntitiesStandard {

    getAllExecutionEntities(tokenAuth) {
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionentities`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getNExecutionEntities(tokenAuth) {
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionentities/?page=1&limit=10`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getOrderedExecutionEntities(tokenAuth) {
        //Retorna todos os administradores ordenados por ordem crescente
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionentities/?sort=+created_atpage=15&limit=4`, /*Necessário colocar um limite de elementos de 3 
                                                                                                    (a api fornece 6 pois existem dois tipos de 
                                                                                                    Execution Entities), se colocar 4 o assertion 
                                                                                                    retorna false por causa desconhecida*/
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getFilteredExecutionEntities(tokenAuth) {
        const dataAtual = new Date(); //Pega a data atual
        const mesAtual = dataAtual.getMonth() + 1; //Pega o mês atual (no objeto Date os meses vão de 0 a 11, então soma-se +1 para ficar no nosso padrão)
        const anoAtual = dataAtual.getFullYear();  //Pega ano atual

        //Retorna locais de execução criados do dia 1 do mês anterior ao atual até o de 31 do mês atual
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionentities?start_at=${anoAtual}-${mesAtual - 1}-01&end_at=${anoAtual}-${mesAtual}-31`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }
}

export const requestGetExecutionEntitiesStandard = new RequestGetExecutionEntitiesStandard();