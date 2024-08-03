import { Config } from "@utils/config";

class RequestDeleteProceduretypeStandard {

    deleteProcedureType(token, id){
        return cy.request({
            method: 'DELETE',
            url: `${Config.DEV_API_GATEWAY}/v1/proceduretypes/${id}`,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
        })
    }
}

export const requestDeleteProceduretypeStandard = new RequestDeleteProceduretypeStandard();