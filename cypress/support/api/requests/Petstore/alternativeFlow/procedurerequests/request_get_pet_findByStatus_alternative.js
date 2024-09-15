import { Config } from "@utils/config";

class RequestGetPetAlternative {

    getcheckPetStatusFilter(status) {
        return cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${Config.DEV_API_GATEWAY}/v2/pet/findByStatus?status=${status}`
        })
    }
}

export const requestGetPetAlternative = new RequestGetPetAlternative();