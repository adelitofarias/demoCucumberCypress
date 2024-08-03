const { Config } = require("@utils/config");

class RequestPatchClinicManagerAlternative {
  patchClinicManagerAlternative(token, clinicmanager_id, data) {
    return cy.request({
      method: "PATCH",
      failOnStatusCode: false,
      url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers/${clinicmanager_id}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: data,
    });
  }
}

export const requestPatchClinicManagerAlternative =
  new RequestPatchClinicManagerAlternative();
