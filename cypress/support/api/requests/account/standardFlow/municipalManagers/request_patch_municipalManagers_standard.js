import { Config } from "@utils/config";

class RequestPatchMunicipalManagersStandard {

  patchMunicipalManager(token, municipalmanager_id, data) {
    return cy.request({
      method: "PATCH",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers/${municipalmanager_id}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: {
        name: data.author,
        cpf: data.cpf.replace(/[^\d]/g, ""),
        phone: data.numero,
        role: data.job,
        professional_phone: data.phone,
        registration: data.matricula,
        phone_extension: data.ramal,
      },
    });
  }
}

export const requestPatchMunicipalManagersStandard =
  new RequestPatchMunicipalManagersStandard();
