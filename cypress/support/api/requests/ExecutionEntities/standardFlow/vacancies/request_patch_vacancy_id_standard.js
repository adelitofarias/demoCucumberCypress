import { Config } from "@utils/config";

class Request_patch_vacancy_id_standard {
  patch_vacancy_id(token, vacancy_id, dadosUpdate) {
    return cy.request({
      method: "PATCH",
      url: `${Config.DEV_API_GATEWAY}/v1/vacancies/${vacancy_id}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: dadosUpdate,
    });
  }
}

export const request_patch_vacancy_id_standard =
  new Request_patch_vacancy_id_standard();
