/// <reference types="cypress" />

import { assertionsGetProcedureIdStandard } from "@assertions/requestService/standardFlow/procedurerequests/assertionsGetProcedureIdStandard";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestGetOneProcedureStandard } from "@requests/requestService/standardFlow/procedurerequests/requestGetOneProcedureStandard";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { Config } from "@utils/config";

let token = null,
  emailProtetor = null,
  idProtector = null,
  idProcedure = null;
let municipality_id = null,
  dados = null,
  dadosProcedimento = null;

Given(
  "um protetor cadastrado disponivel no sistema com email {string}",
  (email) => {
    cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
      token = getDataResponse;
      emailProtetor = email;
    });
  }
);

When("Capturar o ID do protetor", () => {
  requestProtectorID
    .idProtector(emailProtetor, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o ID do municipio do protetor", () => {
  //Capturando o ID do municipio do protetor
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("Gerar os dados necessários", () => {
  cy.geradorGERAL().then((response) => {
    dados = response;
  });
});

When("Preencher os campos necessários para a criação do procedimento", () => {
  dadosProcedimento = {
    animal_age: 15,
    animal_size: "small_or_mid",
    animal_breed: "Vira Lata",
    animal_gender: "male",
    animal_had_leishmaniasis: false,
    animal_has_test_leishmaniasis: false,
    animal_has_vaccination_card: false,
    animal_is_vaccinated_rabies: false,
    animal_name: dados.nome,
    animal_specie: "canine",
    animal_weight: 2,
    name: "castration",
    protector_id: idProtector,
    municipality_id: municipality_id,
  };
});

When("Deverá ser criado o procedimento", () => {
  requestPostProcedureRequests
    .createProcedure(token, dadosProcedimento)
    .then((response) => {
      idProcedure = response.body.id;
    });
});
When("Capturar o id do procedimento cadastrado", () => {});

Then(
  "Deverá ser retornado o procedimento específico com seus respectivos campos",
  () => {
    requestGetOneProcedureStandard
      .getOneProcedure(emailProtetor, Config.PASS_DEFAULT_BACK, idProcedure)
      .then((response) => {
        assertionsGetProcedureIdStandard.notNull(response);
        assertionsGetProcedureIdStandard.shouldContainStatus(response, 200);
        assertionsGetProcedureIdStandard.shouldContainDuration(response, 1500);
        assertionsGetProcedureIdStandard.shouldContainStatusText(
          response,
          "OK"
        );
        assertionsGetProcedureIdStandard.idShouldBeString(response);
        assertionsGetProcedureIdStandard.equalId(response, idProcedure);
      });
  }
);
