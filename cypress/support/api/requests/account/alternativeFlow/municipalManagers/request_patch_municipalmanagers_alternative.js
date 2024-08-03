import { Config } from "@utils/config";

class RequestPatchMunicipalManagerAlternative {
  
  patchMunicipalManager(token, municipalmanager_id, data) {
    return cy.request({
      method: "PATCH",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers/${municipalmanager_id}`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: data
    });
  }
}

export const requestPatchMunicipalManagerAlternative =
  new RequestPatchMunicipalManagerAlternative();
