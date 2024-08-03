import { Config } from "@utils/config";

class Request_get_vacancy_id_standard {
  get_vacancie_id(token, vacancy_id) {
    return cy.request({
      method: "GET",
      url: `${Config.DEV_API_GATEWAY}/v1/vacancies/${vacancy_id}`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
    });
  }
}

export const request_get_vacancy_id_standard =
  new Request_get_vacancy_id_standard();
