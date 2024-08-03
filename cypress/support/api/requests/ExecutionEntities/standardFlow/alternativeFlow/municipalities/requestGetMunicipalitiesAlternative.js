import { Config } from "@utils/config";

class RequestGetMunicipalitiesAlternative {

    getMunicipalitiesWithPage(token, complementoURL){
        ///v1/protectors/?page=1&limit=20
        return cy.request({
            method: 'GET',
            failOnStatusCode: false,
            url: `${Config.DEV_API_GATEWAY}${complementoURL}`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
    }
}

export const requestGetMunicipalitiesAlternative = new RequestGetMunicipalitiesAlternative();