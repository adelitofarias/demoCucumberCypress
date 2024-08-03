import { Config } from "@utils/config";

class RequestPostExternalProtectorAlternative {
  postExternalProtector(token, dados) {
    return cy.request({
      method: "POST",
      failOnStatusCode: false,
      url: `${Config.DEV_API_GATEWAY}/v1/externalprotectors`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: dados
    });
  }
}

export const requestPostExternalProtectorAlternative =
  new RequestPostExternalProtectorAlternative();
