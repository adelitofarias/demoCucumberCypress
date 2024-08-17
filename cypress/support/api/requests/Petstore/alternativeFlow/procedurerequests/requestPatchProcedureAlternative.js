const { Config } = require("@utils/config");

class RequestPatchProcedureAlternative {
  patchProcedureProtector(token, idProcedure, updateData) {
    return cy.request({
      method: "PATCH",
      url: `${Config.DEV_API_GATEWAY}/v1/procedurerequests/${idProcedure}`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: updateData,
    });
  }
}

export const requestPatchProcedureAlternative =
  new RequestPatchProcedureAlternative();
