import { Config } from "@utils/config";

class RequestDataMunicipalityALternativeFlow {

    getDataMunicipality(token, municipality_id){
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalities/${municipality_id}`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
        })
    }
}

export const requestDataMunicipalityAlternativeFlow = new RequestDataMunicipalityALternativeFlow();