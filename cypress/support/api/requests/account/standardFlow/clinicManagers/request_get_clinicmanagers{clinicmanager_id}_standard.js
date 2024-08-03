import { Config } from "@utils/config";

class RequestGetOneClinicManagerStandard {
    loginClinicManager() {
        return cy.getToken(Config.USER_GESTOR_CLINICA_BACK_0, Config.PASS_DEFAULT_BACK)
    }
    getOneClinicManager(idClinicManager, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers/${idClinicManager}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            }
        })
    }
}

export const requestGetOneClinicManagerStandard = new RequestGetOneClinicManagerStandard();