import { Config } from "@utils/config";

class RequestGetMunicipalManagerIdAlternative {
  getMunicipalManagerId(token, municipalmanager_id) {
    return cy.request({
      method: "GET",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers/${municipalmanager_id}`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    });
  }
}

export const requestGetMunicipalManagerIdAlternative = new RequestGetMunicipalManagerIdAlternative();
