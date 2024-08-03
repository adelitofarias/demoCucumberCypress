import { Config } from "@utils/config";

class RequestGetOneMunicipalExecutorStandard {
    loginMunicipalExecutor() {
        return cy.getToken(Config.USER_EXECUTANTE_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    getOneMunicipalExecutor(idMunicipalExecutor, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalexecutors/${idMunicipalExecutor}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }
}

export const requestGetOneMunicipalExecutorStandard = new RequestGetOneMunicipalExecutorStandard();