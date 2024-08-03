import { Config } from "@utils/config";

class RequestPatchPasswordStandard {
    // --Usuário lembra sua antiga senha
    patchPasswordAdminRemember(oldPass, newPass, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/password`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
            body: {
                "email": Config.USER_ADMIN,
                "old_password": oldPass,
                "new_password": newPass
            }
        })
    }

    patchPasswordProtectorRemember(oldPass, newPass, tokenAuth) {
        return cy.request({
            method: 'PATCH',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/password`,
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenAuth}`
            },
            body: {
                "email": Config.USER_PROTECTOR_INDEPENDENTE_BACK_0,
                "old_password": oldPass,
                "new_password": newPass
            }
        })
    }

    postLoginGetToken(email, senha) {
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth`,
            body: {
                "email": email,
                "password": senha
            }
        })
    }
}

export const requestPatchPasswordStandard = new RequestPatchPasswordStandard(); 