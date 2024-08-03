import { Config } from "@utils/config";

class RequestGetOneStateRegulatorStandard {
    loginStateRegulator() {
        return cy.getToken(Config.USER_REGULADOR_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    getOneStateRegulator(idStateRegulator, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/stateregulators/${idStateRegulator}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }
}

export const requestGetOneStateRegulatorStandard = new RequestGetOneStateRegulatorStandard();