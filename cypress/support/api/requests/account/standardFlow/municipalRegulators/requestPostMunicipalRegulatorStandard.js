import { Config } from "@utils/config";

class RequestPostMunicipalRegulatorStandard {

    //Registra apenas o primeiro objeto gerado das massas
    registerOneMunicipalRegulator(municipality_id, tokenAuth) {
        return cy.fixture('userData/dinamic/userDataReguladorMunicipal.json').then(reguladores => {
            const regulador = reguladores.reguladorMunicipal[2]
            cy.request({
                method: 'POST',
                url: `${Config.DEV_API_GATEWAY}/v1/municipalregulators`,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth.body.access_token}`
                },
                body: {
                    "name": regulador.author,
                    "cpf": regulador.cpf.replace(/[^\d]/g, ''),
                    "phone": regulador.numero,
                    "role": regulador.job,
                    "professional_phone": regulador.phone,
                    "registration": regulador.matricula,
                    "municipality_id": municipality_id,
                    "phone_extension": regulador.ramal,
                    "email": regulador.email,
                    "password": regulador.password,
                    "responsible_sector": regulador.jobArea,
                    "type": "municipalregulator"
                }
            })
        })
    }

    //Registra todos os objetos gerados das massas
    registerMunicipalRegulators(municipality_id, tokenAuth) {
        return cy.fixture('userData/dinamic/userDataReguladorMunicipal.json').then(reguladores => {
            for (let i = 0; i < 4; i++) {
                const regulador = reguladores.reguladorMunicipal[i]
                console.log(regulador);
                cy.request({
                    method: 'POST',
                    url: `${Config.DEV_API_GATEWAY}/v1/municipalregulators`,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${tokenAuth.body.access_token}`
                    },
                    body: {
                        "name": regulador.author,
                        "cpf": regulador.cpf.replace(/[^\d]/g, ''),
                        "phone": regulador.numero,
                        "role": regulador.job,
                        "professional_phone": regulador.phone,
                        "registration": regulador.matricula,
                        "municipality_id": municipality_id,
                        "phone_extension": regulador.ramal,
                        "email": regulador.email,
                        "password": regulador.password,
                        "responsible_sector": regulador.jobArea,
                        "type": "municipalregulator"
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

export const requestPostMunicipalRegulatorStandard = new RequestPostMunicipalRegulatorStandard(); 