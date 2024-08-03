import { Config } from "@utils/config";

class RequestPostVacanciesStandard {

    createVacancies(token, vacancies) {
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/vacancies`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token.body.access_token}`
            },
            body: vacancies
        })
    }

    getMunicipalities(tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/municipalities`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
        })
    }

    getExecutionEntities(tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/executionentities`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
        })
    }

    getProcedureTypes(tokenAuth) {
        return cy.request({
            method: 'GET',
            url: `${Config.DEV_API_GATEWAY}/v1/proceduretypes`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth.body.access_token}`
            },
        })
    }
}


export const requestPostVacanciesStandard = new RequestPostVacanciesStandard();