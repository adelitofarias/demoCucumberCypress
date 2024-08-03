const { Config } = require("@utils/config")


class RequestPatchProcedureStandard {

    patchProcedureProtector(token, idProcedure, dadosAtualizados){
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: dadosAtualizados
        })
    }
}

export const requestPatchProcedureStandard = new RequestPatchProcedureStandard();