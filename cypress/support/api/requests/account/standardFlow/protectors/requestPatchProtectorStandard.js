import { Config } from "@utils/config";

class RequestPatchProtectorStandard {
    loginProtector() {
        return cy.getToken(Config.USER_PROTECTOR_INDEPENDENTE_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    patchProtector(update, idProtector, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/protectors/${idProtector}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
            body: update
        })
    }

}

export const requestPatchProtectorStandard = new RequestPatchProtectorStandard();