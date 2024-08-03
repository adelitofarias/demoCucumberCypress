const { Config } = require("@utils/config");

class RequestGetClinicManagerAlternative {
  getClinicManager(token) {
    return cy.request({
      method: "GET",
      url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    });
  }
}

export const requestGetClinicManagerAlternative =
  new RequestGetClinicManagerAlternative();