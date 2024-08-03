import { Config } from "@utils/config";

class RequestPostProtectorStandard {
  //Registra apenas o primeiro objeto gerado das massas
  registerOneProtector(municipality_id, tokenAuth) {
    return cy
      .fixture("userData/dinamic/userDataProtetor.json")
      .then((protectors) => {
        const protector = protectors.protetor[5]; //Pegar o 5 pois os anteriores já estão sendo usados pelo GET
        cy.request({
          method: "POST",
          url: `${Config.DEV_API_GATEWAY}/v1/protectors`,
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${tokenAuth.body.access_token}`,
          },
          body: {
            identification: "individual_protector",
            name: protector.author,
            cpf: protector.cpf.replace(/[^\d]/g, ""),
            municipality_id: municipality_id,
            phone: protector.numero,
            email: protector.email,
            password: protector.password,
            address: {
              zip_code: "58710000",
              street: "Rua João da Mata",
              number: "100",
              complement: "Centro",
              district: "Centro",
              city: "Vista Serrana",
            },
            activity: {
              time: "more_than_12_months",
              neighborhoods_sanitary_situation: "good",
              salary_range: "between_one_two_minimum_wages",
              activity_summary: "Example of text description.",
              species: {
                feline_species: {
                  female_neutered: 3,
                  female_not_neutered: 1,
                  male_neutered: 2,
                  male_not_neutered: 2,
                },
                canine_species: {
                  female_neutered: 3,
                  female_not_neutered: 1,
                  male_neutered: 2,
                  male_not_neutered: 2,
                },
                other_species: "",
              },
            },
            type: "protector",
          },
        });
      });
  }

  //Registra todos os objetos gerados das massas
  registerProtectors(municipality_id, tokenAuth) {
    return cy
      .fixture("userData/dinamic/userDataProtetor.json")
      .then((protectors) => {
        for (let i = 0; i < 4; i++) {
          const protector = protectors.protetor[i];
          cy.request({
            method: "POST",
            url: `${Config.DEV_API_GATEWAY}/v1/protectors`,
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${tokenAuth.body.access_token}`,
            },
            body: {
              identification: "individual_protector",
              name: protector.author,
              cpf: protector.cpf.replace(/[^\d]/g, ""),
              municipality_id: municipality_id,
              phone: protector.numero,
              email: protector.email,
              password: protector.password,
              address: {
                zip_code: "58710000",
                street: "Rua João da Mata",
                number: "100",
                complement: "Centro",
                district: "Centro",
                city: "Vista Serrana",
              },
              activity: {
                time: "more_than_12_months",
                neighborhoods_sanitary_situation: "good",
                salary_range: "between_one_two_minimum_wages",
                activity_summary: "Example of text description.",
                species: {
                  feline_species: {
                    female_neutered: 3,
                    female_not_neutered: 1,
                    male_neutered: 2,
                    male_not_neutered: 2,
                  },
                  canine_species: {
                    female_neutered: 3,
                    female_not_neutered: 1,
                    male_neutered: 2,
                    male_not_neutered: 2,
                  },
                  other_species: "",
                },
              },
              type: "protector",
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

export const requestPostProtectorStandard = new RequestPostProtectorStandard();
