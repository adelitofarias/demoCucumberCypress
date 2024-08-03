import { Config } from "@utils/config";

class RequestPostProceduretypesStandard {

    postProcedureType(token, dados){
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/proceduretypes`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: dados
        })
    }
}

export const requestPostProceduretypesStandard = new RequestPostProceduretypesStandard();