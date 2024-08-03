import { Config } from "@utils/config";

class RequestPostStateExecutorStandard {

    //Registra apenas o primeiro objeto gerado das massas
    registerOneStateExecutor(tokenAuth) {
        return cy.fixture('userData/dinamic/userDataExecutanteEstadual.json').then(executantes => {
            const executante = executantes.executanteEstadual[5]
            cy.request({
                method: 'POST',
                url: `${Config.DEV_API_GATEWAY}/v1/stateexecutors`,
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
                    "phone_extension": executante.ramal,
                    "email": executante.email,
                    "password": executante.password,
                    "type": "stateexecutor"
                }
            })
        })
    }

    //Registra todos os objetos gerados das massas
    registerStateExecutors(tokenAuth) {
        return cy.fixture('userData/dinamic/userDataExecutanteEstadual.json').then(executantes => {
            for (let i = 0; i < 4; i++) {
                const executante = executantes.executanteEstadual[i]
                cy.request({
                    method: 'POST',
                    url: `${Config.DEV_API_GATEWAY}/v1/stateexecutors`,
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
                        "phone_extension": executante.ramal,
                        "email": executante.email,
                        "password": executante.password,
                        "type": "stateexecutor"
                    }
                })
            }
        })
    }
}

export const requestPostStateExecutorStandard = new RequestPostStateExecutorStandard(); 