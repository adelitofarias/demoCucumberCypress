import { Config } from "@utils/config";

class Request_patch_mobilecastration_standard {

    patch_mobilecastration(token, dados, mobilecastration_id){
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/mobilecastrations/${mobilecastration_id}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: dados
        })
    }
}

export const request_patch_mobilecastration_standard = new Request_patch_mobilecastration_standard();