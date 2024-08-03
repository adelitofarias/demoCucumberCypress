import { Config } from "@utils/config";

class RequestGetProceduretypesStandard {

    getAllProceduretypes(token){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/proceduretypes`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
        })
    }

    getAllProceduretypesSpecial(token, complementoURL){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}${complementoURL}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
        })
    }

    compararName(a, b){
        return a.name.localeCompare(b.name);
    }

    verifyOrdenationString(response, procedure, itens){
        let i = 0;
        for(i = 0; i < itens; i++){
            if(response[0].name != procedure[0].name){
                return false;
            }
        }
        return true;
    }

    getFilteredProcedureTypes(tokenAuth) {
        const dataAtual = new Date(); //Pega a data atual
        const mesAtual = dataAtual.getMonth() + 1; //Pega o mês atual (no objeto Date os meses vão de 0 a 11, então soma-se +1 para ficar no nosso padrão)
        const anoAtual = dataAtual.getFullYear();  //Pega ano atual

        //Retorna locais de execução criados do dia 1 do mês anterior ao atual até o de 31 do mês atual
        return cy.request({
            methods: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/proceduretypes?start_at=${anoAtual}-${mesAtual - 1}-01&end_at=${anoAtual}-${mesAtual}-31`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }
}

export const requestGetProceduretypesStandard = new RequestGetProceduretypesStandard();