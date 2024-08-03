import { Config } from "@utils/config";

class RequestGetOneProtectorStandard {
    loginProtector() {
        return cy.getToken(Config.USER_PROTECTOR_INDEPENDENTE_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    getOneProtector(idProtector, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/protectors/${idProtector}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }
}

export const requestGetOneProtectorStandard = new RequestGetOneProtectorStandard();