const { Config } = require("@utils/config");

class RequestGetClinicManagerIdAlternative {
  getClinicManagerId(token, clinicmanager_id) {
    return cy.request({
      method: "GET",
      url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers/${clinicmanager_id}`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    });
  }
}

export const requestGetClinicManagerIdAlternative =
  new RequestGetClinicManagerIdAlternative();
