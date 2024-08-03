import { Config } from "@utils/config";

class RequestPostStateRegulatorStandard {

    //Registra apenas o primeiro objeto gerado das massas
    registerOneStateRegulator(tokenAuth) {
        return cy.fixture('userData/dinamic/userDataReguladorEstadual.json').then(reguladores => {
            const regulador = reguladores.reguladorEstadual[5]
            cy.request({
                method: 'POST',
                url: `${Config.DEV_API_GATEWAY}/v1/stateregulators`,
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
                    "phone_extension": regulador.ramal,
                    "email": regulador.email,
                    "password": regulador.password,
                    "type": "stateregulator"
                }
            })
        })
    }

    //Registra todos os objetos gerados das massas
    registerStateRegulators(tokenAuth) {
        return cy.fixture('userData/dinamic/userDataReguladorEstadual.json').then(reguladores => {
            for (let i = 0; i < 4; i++) {
                const regulador = reguladores.reguladorEstadual[i]
                cy.request({
                    method: 'POST',
                    url: `${Config.DEV_API_GATEWAY}/v1/stateregulators`,
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
                        "phone_extension": regulador.ramal,
                        "email": regulador.email,
                        "password": regulador.password,
                        "type": "stateregulator"
                    }
                })
            }
        })
    }
}

export const requestPostStateRegulatorStandard = new RequestPostStateRegulatorStandard(); 