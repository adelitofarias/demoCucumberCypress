import { Config } from "@utils/config";

class RequestService_standardFlow_get_procedurerequest {

    getProcedure(token) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            }
        })
    }
}

export const requestService_standardFlow_get_procedurerequest = new RequestService_standardFlow_get_procedurerequest();