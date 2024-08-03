import { Config } from '@utils/config'
class RequestPostLoginStandard {

    postLoginAdmin() {
        return cy.getToken('admin2@regpet.com', Config.PASS_DEFAULT_BACK)
    }

    postLoginProtector() {
        return cy.getToken(Config.USER_PROTETOR_ONG_BACK_0, Config.PASS_DEFAULT_BACK)
    }

    postLoginProtector2() {
        return cy.getToken(Config.USER_PROTECTORS, Config.PASS_DEFAULT_BACK)
    }

    postLoginStateExecutor() {
        return cy.getToken(Config.USER_EXECUTANTE_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK)
    }

    postLoginMunicipalExecutor() {
        return cy.getToken(Config.USER_EXECUTANTE_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK)
    }

    postLoginStateRegulator() {
        return cy.getToken(Config.USER_REGULADOR_ESTADUAL_BACK_0, Config.PASS_DEFAULT_BACK)
    }

    postLoginMunicipalRegulator() {
        return cy.getToken(Config.USER_REGULADOR_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK)
    }

    postLoginMunicipalManager() {
        return cy.getToken(Config.USER_GESTOR_MUNICIPAL_BACK_0, Config.PASS_DEFAULT_BACK)
    }
}

export const requestPostLoginStandard = new RequestPostLoginStandard();
