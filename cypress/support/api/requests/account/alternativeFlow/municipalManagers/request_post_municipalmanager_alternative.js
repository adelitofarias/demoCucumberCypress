import { Config } from "@utils/config";

class RequestPostMunicipalManagerAlternative {
  postMunicipalManager(token, municipality_id, data) {
    return cy.request({
      method: "POST",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers`,
      failOnStatusCode: false,
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
        municipality_id: municipality_id,
        phone_extension: data.ramal,
        email: data.email,
        password: data.password,
        responsible_sector: data.jobArea,
        animal_cause_summary: {
          has_animal_cause_policies: true,
          public_policy_description: "string",
          zoonoses_surveillance_center: 0,
          neutering_center: 0,
          average_abandoned_animals: 0,
          number_guarded_animals: 0,
        },
        type: "municipalmanager",
      },
    });
  }

  postMunicipalManagerViolateSchema(token, data) {
    return cy.request({
      method: "POST",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers`,
      failOnStatusCode: false,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: data
    });
  }
}

export const requestPostMunicipalManagerAlternative =
  new RequestPostMunicipalManagerAlternative();
