import { Config } from "@utils/config";


class RequestGetExecutionlocalsStandard {

    getAllExecutionLocals(token){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
        })
    }

    getNExecutionLocals(tokenAuth) {
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals/?page=1&limit=20`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getOrderedExecutionLocals(tokenAuth) {
        //Retorna todos os locais de execução ordenados por ordem crescente
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals/?sort=+created_at`, 
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getFilteredExecutionLocals(tokenAuth) {
        const dataAtual = new Date(); //Pega a data atual
        const mesAtual = dataAtual.getMonth() + 1; //Pega o mês atual (no objeto Date os meses vão de 0 a 11, então soma +1 para ficar no nosso padrão)
        const anoAtual = dataAtual.getFullYear();  //Pega ano atual

        //Retorna locais de execução criados do dia 1 do mês anterior ao atual até o de 28 do mês atual
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals?start_at=${anoAtual}-${mesAtual - 1}-01&end_at=${anoAtual}-${mesAtual}-28`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }
}

export const requestGetExecutionlocalsStandard = new RequestGetExecutionlocalsStandard();