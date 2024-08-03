import { Config } from "@utils/config";

class RequestPatchClinicManagersStandard {

  loginClinicManager() {
    return cy.getToken(Config.USER_GESTOR_CLINICA_BACK_0, Config.PASS_DEFAULT_BACK)
  }

  patchClinicManager(token, clinicmanager_id, update) {
    return cy.request({
      method: "PATCH",
      url: `${Config.DEV_API_GATEWAY}/v1/clinicmanagers/${clinicmanager_id}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: update
    });
  }
}

export const requestPatchClinicManagersStandard =
  new RequestPatchClinicManagersStandard();
