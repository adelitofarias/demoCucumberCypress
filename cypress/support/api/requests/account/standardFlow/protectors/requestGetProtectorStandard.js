const { Config } = require("@utils/config");


class RequestGetProtectorStandard {

    getAllProtectors(tokenAuth) {
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/protectors`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getNProtectors(tokenAuth) {
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/protectors/?page=1&limit=20`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getOrderedProtectors(tokenAuth) {
        //Retorna todos os protetores ordenados por ordem crescente
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/protectors/?sort=+created_at`, 
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }

    getFilteredProtectors(tokenAuth) {
        const dataAtual = new Date(); //Pega a data atual
        const mesAtual = dataAtual.getMonth() + 1; //Pega o mês atual (no objeto Date os meses vão de 0 a 11, então soma-se +1 para ficar no nosso padrão)
        const anoAtual = dataAtual.getFullYear();  //Pega ano atual

        //Retorna locais de execução criados do dia 1 do mês anterior ao atual até o de 31 do mês atual
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/protectors?start_at=${anoAtual}-${mesAtual - 1}-01&end_at=${anoAtual}-${mesAtual}-31`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }
}

export const requestGetProtectorStandard = new RequestGetProtectorStandard();