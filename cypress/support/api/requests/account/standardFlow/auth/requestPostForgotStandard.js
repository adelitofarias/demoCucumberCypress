import { Config } from "@utils/config";

class RequestPostForgotStandard {

    postForgotAdmin() {
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/forgot`,
            body: {
                "email": Config.USER_ADMIN
            }
        })
    }
    postForgotProtector() {
        return cy.request({
            method: 'POST',
            url: `${Config.DEV_API_GATEWAY}/v1/auth/forgot`,
            body: {
                "email": Config.USER_PROTECTOR
            }
        })
    }
}

export const requestPostForgotStandard = new RequestPostForgotStandard();