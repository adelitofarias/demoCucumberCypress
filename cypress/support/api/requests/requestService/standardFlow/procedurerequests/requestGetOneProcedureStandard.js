import { Config } from "@utils/config";

class RequestGetOneProcedureStandard {

    getOneProcedure(email, password, idProcedure) {
        return cy.getToken(email, password).then(token => {
            cy.request({
                method: 'GET',
                url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}`,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token.body.access_token}`
                }
            })
        })
    }
}

export const requestGetOneProcedureStandard = new RequestGetOneProcedureStandard();