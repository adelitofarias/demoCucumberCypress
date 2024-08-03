import { Config } from "@utils/config";

class Request_post_executionlocal_alternative {

    createExecutionLocalFields(token, data){
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/executionlocals`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: data
        })
    }

}

export const request_post_executionlocal_alternative = new Request_post_executionlocal_alternative();