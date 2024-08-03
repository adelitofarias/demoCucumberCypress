import { Config } from "@utils/config";

class RequestGetOneMunicipalRegulatorStandard {
    loginMunicipalRegulator() {
        return cy.getToken(Config.USER_REGULADOR_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    getOneMunicipalRegulator(idMunicipalRegulator, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalregulators/${idMunicipalRegulator}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }
}

export const requestGetOneMunicipalRegulatorStandard = new RequestGetOneMunicipalRegulatorStandard();