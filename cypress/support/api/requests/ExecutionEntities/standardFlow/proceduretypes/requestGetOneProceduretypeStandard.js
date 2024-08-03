const { Config } = require("@utils/config");

class RequestGetOneProceduretypeStandard {

    getOneProcedureType(token, proceduretype_id){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/proceduretypes/${proceduretype_id}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
        })
    }
}

export const requestGetOneProceduretypeStandard = new RequestGetOneProceduretypeStandard();