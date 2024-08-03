import { Config } from "@utils/config";

class Request_post_mobilecastration_standard {

    post_mobilecastration(token, dados){
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/mobilecastrations`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: dados
        })
    }
}

export const request_post_mobilecastration_standard = new Request_post_mobilecastration_standard();