/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { assertionsProcedureRequestsStandard } from "@assertions/requestService/standardFlow/procedurerequests/assertionsProcedureRequestsStandard";
import { Config } from "@utils/config";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";

let token = null,
  emailUser = null,
  idProtector = null,
  dados = null,
  municipality_id = null;
let dadosGerados = null;

Given("Protetores cadastrados e com login válido {string} v2", (email) => {
  cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
    token = getDataResponse;
    emailUser = email;
  });
});

When("capturar o id do protetor", () => {
  requestProtectorID
    .idProtector(emailUser, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("capturar o id do municipio do protetor", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("gerar os dados necessários", () => {
  cy.geradorGERAL().then((response) => {
    dadosGerados = response;
  });
});
When("preencher os campos necessários para a criação do procedimento", () => {
  dados = {
    animal_age: 15,
    animal_size: "small_or_mid",
    animal_breed: "Vira Lata",
    animal_gender: "male",
    animal_had_leishmaniasis: false,
    animal_has_test_leishmaniasis: false,
    animal_has_vaccination_card: false,
    animal_is_vaccinated_rabies: false,
    animal_name: dadosGerados.nome,
    animal_specie: "canine",
    animal_weight: 2,
    name: "castration",
    protector_id: idProtector,
    municipality_id: municipality_id,
  };
});

Then("deverá ser criado o procedimento", () => {
  requestPostProcedureRequests
    .createProcedure(token, dados)
    .then((getDataResponse) => {
      assertionsProcedureRequestsStandard.notNull(getDataResponse);
      assertionsProcedureRequestsStandard.shouldContainStatus(
        getDataResponse,
        201
      );
      assertionsProcedureRequestsStandard.shouldContainDuration(
        getDataResponse,
        1500
      );
      assertionsProcedureRequestsStandard.shouldContainStatusText(
        getDataResponse,
        "Created"
      );
    });
});
