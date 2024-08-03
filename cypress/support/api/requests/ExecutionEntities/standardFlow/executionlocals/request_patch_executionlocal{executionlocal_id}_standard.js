import { Config } from "@utils/config";

class RequestPatchExecutionlocalsStandard {

    patchExecutionlocal(update ,idExecutionlocal, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals/${idExecutionlocal}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
            body: update
        })
    }

}

export const requestPatchExecutionlocalsStandard = new RequestPatchExecutionlocalsStandard();