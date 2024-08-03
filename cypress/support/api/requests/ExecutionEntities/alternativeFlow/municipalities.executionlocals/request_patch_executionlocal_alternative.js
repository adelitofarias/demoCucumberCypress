import { Config } from "@utils/config";

class Request_patch_executionlocal_alternative {
  patch_executionlocal_fields(token, data, executionlocal_id) {
    return cy.request({
      method: "PATCH",
      url: `${Config.DEV_API_GATEWAY}/v1/executionlocals/${executionlocal_id}`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: data,
    });
  }
}

export const request_patch_executionlocal_alternative =
  new Request_patch_executionlocal_alternative();
