import { Config } from "@utils/config";

class RequestPatchProceduretypeStandard {

    patchProcedureType(token, id, dados){
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/proceduretypes/${id}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: dados
        })
    }
}

export const requestPatchProceduretypeStandard = new RequestPatchProceduretypeStandard();