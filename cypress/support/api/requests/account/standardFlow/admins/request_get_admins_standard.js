const { Config } = require("@utils/config");


class RequestGetAdminsStandard {

    getAllAdmins(tokenAuth) {
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/admins`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }

    getNAdmins(tokenAuth) {
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/admins/?page=1&limit=20`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }

    getOrderedAdmins(tokenAuth) {
        //Retorna todos os administradores ordenados por ordem crescente
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/admins/?sort=+created_at`, 
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }

    getFilteredAdmins(tokenAuth) {
        const dataAtual = new Date(); //Pega a data atual
        const mesAtual = dataAtual.getMonth() + 1; //Pega o mês atual (no objeto Date os meses vão de 0 a 11, então soma-se +1 para ficar no nosso padrão)
        const anoAtual = dataAtual.getFullYear();  //Pega ano atual

        //Retorna locais de execução criados do dia 1 do mês anterior ao atual até o de 31 do mês atual
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/admins?start_at=${anoAtual}-${mesAtual - 1}-01&end_at=${anoAtual}-${mesAtual}-31`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }
}

export const requestGetAdminsStandard = new RequestGetAdminsStandard();