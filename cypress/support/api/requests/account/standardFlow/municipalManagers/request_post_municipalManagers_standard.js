import { Config } from "@utils/config";

class RequestPostMunicipalManagerStandard {
  postMunicipalManager(token, municipality_id, data) {
    return cy.request({
      method: "POST",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers`,
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

  //Registra apenas o primeiro objeto gerado das massas
  registerOneMunicipalManager(municipality_id1, tokenAuth) {
    return cy
      .fixture("userData/dinamic/userDataGestorMunicipal.json")
      .then((gestores) => {
        const gestor = gestores.gestorMunicipal[5];
        cy.request({
          method: "POST",
          url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers`,
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${tokenAuth.body.access_token}`,
          },
          body: {
            name: gestor.author,
            cpf: gestor.cpf.replace(/[^\d]/g, ""),
            phone: gestor.numero,
            role: gestor.job,
            professional_phone: gestor.phone,
            registration: gestor.matricula,
            municipality_id: municipality_id1,
            phone_extension: gestor.ramal,
            email: gestor.email,
            password: gestor.password,
            responsible_sector: gestor.jobArea,
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
      });
  }

  //Registra todos os objetos gerados das massas
  registerMunicipalManagers(municipality_id1, tokenAuth) {
    return cy
      .fixture("userData/dinamic/userDataGestorMunicipal.json")
      .then((gestores) => {
        for (let i = 0; i < 4; i++) {
          const gestor = gestores.gestorMunicipal[i];
          console.log(gestor);
          cy.request({
            method: "POST",
            url: `${Config.DEV_API_GATEWAY}/v1/municipalmanagers`,
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${tokenAuth.body.access_token}`,
            },
            body: {
              name: gestor.author,
              cpf: gestor.cpf.replace(/[^\d]/g, ""),
              phone: gestor.numero,
              role: gestor.job,
              professional_phone: gestor.phone,
              registration: gestor.matricula,
              municipality_id: municipality_id1,
              phone_extension: gestor.ramal,
              email: gestor.email,
              password: gestor.password,
              responsible_sector: gestor.jobArea,
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
      });
  }

  getMunicipalities(tokenAuth) {
    return cy.request({
      method: "GET",
      url: `${Config.DEV_API_GATEWAY}/v1/municipalities`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${tokenAuth.body.access_token}`,
      },
    });
  }
}

export const requestPostMunicipalManagerStandard =
  new RequestPostMunicipalManagerStandard();
