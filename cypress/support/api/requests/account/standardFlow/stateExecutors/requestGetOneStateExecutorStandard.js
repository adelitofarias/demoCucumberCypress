import { Config } from "@utils/config";

class RequestGetOneStateExecutorStandard {
    loginStateExecutor() {
        return cy.getToken(Config.USER_EXECUTANTE_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    getOneStateExecutor(idStateExecutor, tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/stateexecutors/${idStateExecutor}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            }
        })
    }
}

export const requestGetOneStateExecutorStandard = new RequestGetOneStateExecutorStandard();