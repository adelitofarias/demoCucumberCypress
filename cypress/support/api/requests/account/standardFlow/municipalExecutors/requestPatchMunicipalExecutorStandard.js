import { Config } from "@utils/config";

class RequestPatchMunicipalExecutorStandard {
    loginMunicipalExecutor() {
        return cy.getToken(Config.USER_EXECUTANTE_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    patchMunicipalExecutor(update ,idMunicipalExecutor, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalexecutors/${idMunicipalExecutor}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
            body: update
        })
    }
}

export const requestPatchMunicipalExecutorStandard = new RequestPatchMunicipalExecutorStandard();