import { Config } from "@utils/config";

class Request_get_id_mobilecastration_standard {

    get_mobilecastration_id(token, mobilecastration_id){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/mobilecastrations/${mobilecastration_id}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            }
        })
    }
}

export const request_get_id_mobilecastration_standard = new Request_get_id_mobilecastration_standard();