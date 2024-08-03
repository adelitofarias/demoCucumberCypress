const { Config } = require("@utils/config")


class RequestPutProcedureRequestStatusStandard {

    putProcedureProtector(token, idProcedure, update) {
        return cy.request({
            method: 'PUT',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}/status`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: update
        })
    }
}

export const requestPutProcedureRequestStatusStandard = new RequestPutProcedureRequestStatusStandard();