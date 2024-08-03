import { Config } from "@utils/config";

class RequestPostMunicipalExecutorStandard {
    //Registra apenas o primeiro objeto gerado das massas
    registerOneMunicipalExecutor(municipality_id1, municipality_id2, tokenAuth) {
        return cy.fixture('userData/dinamic/userDataExecutanteMunicipal.json').then(executantes => {
            const executante = executantes.executanteMunicipal[5]
            cy.request({
                method: 'POST',
                url: `${Config.DEV_API_GATEWAY}/v1/municipalexecutors`,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth.body.access_token}`
                },
                body: {
                    "name": executante.author,
                    "cpf": executante.cpf.replace(/[^\d]/g, ''),
                    "phone": executante.numero,
                    "role": executante.job,
                    "professional_phone": executante.phone,
                    "registration": executante.matricula,
                    "municipalities": [
                        municipality_id1,
                        municipality_id2
                    ],
                    "phone_extension": executante.ramal,
                    "email": executante.email,
                    "password": executante.password,
                    "responsible_sector": executante.jobArea,
                    "type": "municipalexecutor"
                }
            })
        })
    }

    //Registra todos os objetos gerados das massas
    registerMunicipalExecutors(municipality_id1, municipality_id2, tokenAuth) {
        return cy.fixture('userData/dinamic/userDataExecutanteMunicipal.json').then(executantes => {
            for (let i = 0; i < 4; i++) {
                const executante = executantes.executanteMunicipal[i]
                console.log(executante);
                cy.request({
                    method: 'POST',
                    url: `${Config.DEV_API_GATEWAY}/v1/municipalexecutors`,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${tokenAuth.body.access_token}`
                    },
                    body: {
                        "name": executante.author,
                        "cpf": executante.cpf.replace(/[^\d]/g, ''),
                        "phone": executante.numero,
                        "role": executante.job,
                        "professional_phone": executante.phone,
                        "registration": executante.matricula,
                        "municipalities": [
                            municipality_id1,
                            municipality_id2
                        ],
                        "phone_extension": executante.ramal,
                        "email": executante.email,
                        "password": executante.password,
                        "responsible_sector": executante.jobArea,
                        "type": "municipalexecutor"
                    }
                })
            }
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
}

export const requestPostMunicipalExecutorStandard = new RequestPostMunicipalExecutorStandard(); 