import { Config } from "@utils/config";

class RequestGetProcedureNotScopeAlternative {

    getOneProcedure(email, password, idProcedure) {
        return cy.getToken(email, password).then(token => {
            cy.request({
                method: 'GET',
                url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}`,
                failOnStatusCode: false,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token.body.access_token}`
                }
            })
        })
    }
}

export const requestGetProcedureNotScopeAlternative = new RequestGetProcedureNotScopeAlternative();