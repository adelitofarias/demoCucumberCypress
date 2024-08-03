const { Config } = require("@utils/config");

class RequestPostClinicManagerAlternative {

    postClinicManagerAlternative (token, data) {
        return cy.request({
            method: "POST",
            failOnStatusCode: false,
            url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers`,
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token.body.access_token}`,
            },
            body: data
        })
    }
}

export const requestPostClinicManagerAlternative = new RequestPostClinicManagerAlternative();