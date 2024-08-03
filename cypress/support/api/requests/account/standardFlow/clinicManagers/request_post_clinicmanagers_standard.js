import { Config } from "@utils/config";

class RequestPostClinicManagerStandard {

    postClinicManager(token, municipality_id1, executionLocal_id1, gestor) {
        return cy.request({
            method: "POST",
            url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers`,
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token.body.access_token}`,
            },
            body: {
                name: gestor.author,
                cpf: gestor.cpf.replace(/[^\d]/g, ""),
                phone: gestor.numero,
                role: gestor.job,
                registration: gestor.matricula,
                municipality_id: municipality_id1,
                execution_local_id: executionLocal_id1,
                email: gestor.email,
                password: gestor.password,
                type: "clinicmanager",
            },
        });
    }

    //Registra apenas o primeiro objeto gerado das massas
    registerOneClinicManager(municipality_id1, executionLocal_id1, tokenAuth) {
        return cy
            .fixture("userData/dinamic/userDataGestorClinica.json")
            .then((gestores) => {
                const manager = gestores.gestorClinica[5];
                cy.request({
                    method: "POST",
                    url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers`,
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${tokenAuth.body.access_token}`,
                    },
                    body: {
                        name: manager.author,
                        cpf: manager.cpf.replace(/[^\d]/g, ""),
                        phone: manager.numero,
                        role: manager.job,
                        registration: manager.matricula,
                        municipality_id: municipality_id1,
                        execution_local_id: executionLocal_id1,
                        email: manager.email,
                        password: manager.password,
                        type: "clinicmanager",
                    },
                });
            });
    }

    //Registra todos os objetos gerados das massas
    registerClinicManagers(municipality_id1, executionLocal_id1, tokenAuth) {
        return cy
            .fixture("userData/dinamic/userDataGestorClinica.json")
            .then((gestores) => {
                for (let i = 0; i < 4; i++) {
                    const manager = gestores.gestorClinica[i];
                    cy.request({
                        method: "POST",
                        url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers`,
                        headers: {
                            "content-type": "application/json",
                            Authorization: `Bearer ${tokenAuth.body.access_token}`,
                        },
                        body: {
                            name: manager.author,
                            cpf: manager.cpf.replace(/[^\d]/g, ""),
                            phone: manager.numero,
                            role: manager.job,
                            registration: manager.matricula,
                            municipality_id: municipality_id1,
                            execution_local_id: executionLocal_id1,
                            email: manager.email,
                            password: manager.password,
                            type: "clinicmanager",
                        },
                    });
                }
            });
    }

    getMunicipalities(tokenAuth) {
        console.log(tokenAuth.body)
        return cy.request({
            method: "GET",
            url: `${Config.DEV_API_GATEWAY}/v1/municipalities`,
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${tokenAuth.body.access_token}`,
            },
        });
    }
}

export const requestPostClinicManagerStandard =
    new RequestPostClinicManagerStandard();
