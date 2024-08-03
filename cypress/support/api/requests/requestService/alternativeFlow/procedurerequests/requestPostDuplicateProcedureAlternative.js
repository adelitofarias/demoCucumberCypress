import { Config } from "@utils/config";

class RequestPostDuplicateProcedureAlternative {

    createProcedureDuplicateData(token, dados){
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: dados
        })
    }
}

export const requestPostDuplicateProcedureAlternative = new RequestPostDuplicateProcedureAlternative();