import { Config } from "@utils/config";

class RequestPatchExternalProtectorStandard {
    patchExternalProtector(update, idExternalProtector, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/externalprotectors/${idExternalProtector}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
            body: update
        })
    }

}

export const requestPatchExternalProtectorStandard = new RequestPatchExternalProtectorStandard();