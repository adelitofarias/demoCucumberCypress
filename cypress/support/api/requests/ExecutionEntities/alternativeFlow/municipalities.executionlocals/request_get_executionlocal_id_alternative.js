import { Config } from "@utils/config";

class Request_get_executionlocal_id_alternative {
  getExecutionlocal_id(token, executionlocal_id) {
    return cy.request({
      method: "GET",
      url: `${Config.DEV_API_GATEWAY}/v1/executionlocals/${executionlocal_id}`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    });
  }
}

export const request_get_executionlocal_id_alternative =
  new Request_get_executionlocal_id_alternative();
