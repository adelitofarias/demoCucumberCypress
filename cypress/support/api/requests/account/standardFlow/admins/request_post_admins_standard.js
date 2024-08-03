import { Config } from "@utils/config";

class RequestPostAdminsStandard {
    //Registra apenas o primeiro objeto gerado das massas
    registerOneAdmin(tokenAuth) {
        return cy.fixture('userData/dinamic/userDataAdmin.json').then(admins => {
            const admin = admins.admin[5]
            cy.request({
                method: 'POST',
                url: `${Config.DEV_API_GATEWAY}/v1/admins`,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${tokenAuth}`
                },
                body: {
                    "name": admin.author,
                    "cpf": admin.cpf.replace(/[^\d]/g, ''),
                    "phone": admin.numero,
                    "role": admin.job,
                    "professional_phone": admin.phone,
                    "registration": admin.matricula,
                    "phone_extension": admin.ramal,
                    "email": admin.email,
                    "password": admin.password,
                    "type": "admin"
                }
            })
        })
    }

    //Registra todos os objetos gerados das massas
    registerAdmins(tokenAuth) {
        return cy.fixture('userData/dinamic/userDataAdmin.json').then(admins => {
            for (let i = 0; i <= 4; i++) {
                const admin = admins.admin[i]
                console.log(admin)
                cy.request({
                    method: 'POST',
                    url: `${Config.DEV_API_GATEWAY}/v1/admins`,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${tokenAuth}`
                    },
                    body: {
                        "name": admin.author,
                        "cpf": admin.cpf.replace(/[^\d]/g, ''),
                        "phone": admin.numero,
                        "role": admin.job,
                        "professional_phone": admin.phone,
                        "registration": admin.matricula,
                        "phone_extension": admin.ramal,
                        "email": admin.email,
                        "password": admin.password,
                        "type": "admin"
                    }
                })
            }
        })
    }
}

export const requestPostAdminsStandard = new RequestPostAdminsStandard(); 