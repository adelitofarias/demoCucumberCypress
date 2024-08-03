import { Config } from "@utils/config";

class RequestGetExternalProtectorAlternative {
  getOneExternalProtector(token, idExternalProtector) {
    return cy.request({
      method: "GET",
      failOnStatusCode: false,
      url: `${Config.DEV_API_GATEWAY}/v1/externalprotectors/${idExternalProtector}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    });
  }
}

export const requestGetExternalProtectorAlternative =
  new RequestGetExternalProtectorAlternative();
