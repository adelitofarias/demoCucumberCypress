import { Config } from '@utils/config'

class RequestPostLogin {
    // SENHA INCORRETA
    postLoginAdminSenhaIncorreta() {
        const email = Config.USER_ADMIN;
        const password = "12345";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginProtectorSenhaIncorreta() {
        const email = Config.USER_PROTECTOR;
        const password = "12345";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateExecutorSenhaIncorreta() {
        const email = Config.USER_EXECUTANTE_ESTADUAL_BACK_0;
        const password = "12345";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateRegulatorSenhaIncorreta() {
        const email = Config.USER_REGULADOR_ESTADUAL_BACK_0;
        const password = "12345";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    // SEM EMAIL
    postLoginAdminSemEmail() {
        const email = "";
        const password = Config.PASS_ADMIN;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginProtectorSemEmail() {
        const email = "";
        const password = Config.PASS_DEFAULT_BACK;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateExecutorSemEmail() {
        const email = "";
        const password = Config.PASS_DEFAULT_BACK;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateRegulatorSemEmail() {
        const email = "";
        const password = Config.PASS_DEFAULT_BACK;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    // SEM SENHA
    postLoginAdminSemSenha() {
        const email = Config.USER_ADMIN;
        const password = "";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginProtectorSemSenha() {
        const email = Config.USER_PROTECTOR;
        const password = "";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateExecutorSemSenha() {
        const email = Config.USER_EXECUTANTE_ESTADUAL_BACK_0;
        const password = "";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateRegulatorSemSenha() {
        const email = Config.USER_REGULADOR_ESTADUAL_BACK_0;
        const password = "";

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    // E-mail inválido
    postLoginAdminEmailInvalido() {
        const email = "adm}in@regpet.com";
        const password = Config.PASS_DEFAULT_BACK;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginProtectorEmailInvalido() {
        const email = "prote]ctor@regpet.com";
        const password = Config.PASS_DEFAULT_BACK;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateExecutorEmailInvalido() {
        const email = "state]executor@regpet.com";
        const password = Config.PASS_DEFAULT_BACK;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }

    postLoginStateRegulatorEmailInvalido() {
        const email = "state]regulator@regpet.com";
        const password = Config.PASS_DEFAULT_BACK;

        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
            failOnStatusCode: false,
            body: {
                "email": email,
                "password": password
            }
        })
    }
}



export const requestPostLoginAlternative = new RequestPostLogin();
