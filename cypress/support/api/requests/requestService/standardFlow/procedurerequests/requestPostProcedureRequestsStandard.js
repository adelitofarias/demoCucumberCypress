import { Config } from "@utils/config";

class RequestPostProcedureRequests {

    createProcedure(token, dados){
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: dados
        })
    }

    getMunicipalities(tokenAuth) {//Pegar município para a solicitação
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalities`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
        })
    }
}

export const requestPostProcedureRequests = new RequestPostProcedureRequests();