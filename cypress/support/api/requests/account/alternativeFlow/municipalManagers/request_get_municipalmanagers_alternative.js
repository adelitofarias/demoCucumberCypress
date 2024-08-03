import { Config } from "@utils/config";

class RequestGetMunicipalManagerAlternative {

  getMunicipalManagerIncorrectPages(token) {
    return cy.request({
      method: "GET",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers/?page=abc&limit=xyz`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    });
  }

}

export const requestGetMunicipalManagerAlternative = new RequestGetMunicipalManagerAlternative();
