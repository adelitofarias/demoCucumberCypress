import { Config } from "@utils/config";

class RequestGetOneExternalProtectorStandard {
    getOneExternalProtector(idExternalProtector, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/externalprotectors/${idExternalProtector}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }
}

export const requestGetOneExternalProtectorStandard = new RequestGetOneExternalProtectorStandard();