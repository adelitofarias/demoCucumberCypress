import { Config } from "@utils/config";

class RequestPatchStateExecutorStandard {
    loginStateExecutor() {
        return cy.getToken(Config.USER_EXECUTANTE_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK);
    }
    patchStateExecutor(update ,idStateExecutor, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/stateexecutors/${idStateExecutor}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
            body: update
        })
    }
}

export const requestPatchStateExecutorStandard = new RequestPatchStateExecutorStandard();