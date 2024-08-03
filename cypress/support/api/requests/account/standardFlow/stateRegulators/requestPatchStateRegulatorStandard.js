import { Config } from "@utils/config";

class RequestPatchStateRegulatorStandard {
    loginStateRegulator() {
        return cy.getToken(Config.USER_REGULADOR_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    patchStateRegulator(update ,idStateRegulator, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/stateregulators/${idStateRegulator}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
            body: update
        })
    }
}

export const requestPatchStateRegulatorStandard = new RequestPatchStateRegulatorStandard();