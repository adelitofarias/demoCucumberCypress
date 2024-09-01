import { Config } from "@utils/config";

class RequestGetPetStandard {


    checkApiAvailability() {
        return cy.request(Config.DEV_API_GATEWAY)
    }

    getcheckPetStatusFilter(status) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v2/pet/findByStatus?status=${status}`
        })

    }
    /*
        getcheckPetStatusFilter(email, password, status) {
            return cy.getToken(email, password).then(token => {
                cy.request({
                    method: 'GET',
                    url: `${Config.DEV_API_GATEWAY}/v2/pet/findByStatus?status=${status}`,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token.body.access_token}`
                    }
                })
            })
        }
    */
}

export const requestGetPetStandard = new RequestGetPetStandard();