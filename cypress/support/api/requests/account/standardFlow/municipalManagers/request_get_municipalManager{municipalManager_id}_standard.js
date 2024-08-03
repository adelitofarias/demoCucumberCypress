import { Config } from "@utils/config";

class RequestGetOneMunicipalManagerStandard {
    loginMunicipalManager() {
        return cy.getToken(Config.USER_GESTOR_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    getOneMunicipalManager(idMunicipalManager, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers/${idMunicipalManager}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }
}

export const requestGetOneMunicipalManagerStandard = new RequestGetOneMunicipalManagerStandard();