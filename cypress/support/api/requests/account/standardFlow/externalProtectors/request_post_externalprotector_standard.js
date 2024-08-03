import { Config } from "@utils/config";
import { util } from "@utils/util";

class RequestPostExternalProtectorStandard {

  postExternalProtectorStandard (token, dados) {
    return cy.request({
      method: "POST",
      url: `${Config.DEV_API_GATEWAY}/v1/externalprotectors`,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token.body.access_token}`,
      },
      body: dados
    });
  }


  //Registra apenas o primeiro objeto gerado das massas
  registerOneExternalProtector(municipality_id, tokenAuth) {
    return cy
      .fixture("userData/dinamic/userDataProtetorExterno.json")
      .then((externalProtectors) => {
        const externalProtector = externalProtectors.protetorExterno[5]; //Pegar o 5 pois os anteriores já estão sendo usados pelo GET
        cy.request({
          method: "POST",
          url: `${Config.DEV_API_GATEWAY}/v1/externalprotectors`,
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${tokenAuth.body.access_token}`,
          },
          body: {
            name: externalProtector.author,
            cpf: externalProtector.cpf.replace(/[^\d]/g, ""),
            municipality_id: municipality_id,
            phone: externalProtector.numero,
            email: externalProtector.email,
            password: externalProtector.password,
            address: {
              zip_code: "58429000", //Tem de ser um CEP do muncípio do gestor logado
              street: "Rua Doutor José Augusto Ribeiro",
              number: externalProtector.numero,
              complement: util.gerarString(30),
              district: util.gerarString(30),
              city: "Campina Grande", //Tem de ser o município que o CEP pertence
            },
            type: "externalprotector",
          },
        });
      });
  }

  //Registra todos os objetos gerados das massas
  registerExternalProtectors(municipality_id, tokenAuth) {
    return cy
      .fixture("userData/dinamic/userDataProtetorExterno.json")
      .then((externalProtectors) => {
        for (let i = 0; i < 4; i++) {
          const externalProtector = externalProtectors.protetorExterno[i];
          cy.request({
            method: "POST",
            url: `${Config.DEV_API_GATEWAY}/v1/externalprotectors`,
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${tokenAuth.body.access_token}`,
            },
            body: {
              name: externalProtector.author,
              cpf: externalProtector.cpf.replace(/[^\d]/g, ""),
              municipality_id: municipality_id,
              phone: externalProtector.numero,
              email: externalProtector.email,
              password: externalProtector.password,
              address: {
                zip_code: "58429000", //Tem de ser um CEP do muncípio do gestor logado
                street: "Rua Doutor José Augusto Ribeiro",
                number: externalProtector.numero,
                complement: util.gerarString(30),
                district: util.gerarString(30),
                city: "Campina Grande", //Tem de ser o município que o CEP pertence
              },
              type: "externalprotector",
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

export const requestPostExternalProtectorStandard = new RequestPostExternalProtectorStandard();
