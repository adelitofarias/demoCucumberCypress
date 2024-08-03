/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { requestPostDuplicateProcedureAlternative } from "@requests/requestService/alternativeFlow/procedurerequests/requestPostDuplicateProcedureAlternative";
import { assertionsPostProcedureDuplicateDataAlternative } from "@assertions/requestService/alternativeFlow/assertionsPostProcedureDuplicateDataAlternative";
import { Config } from "@utils/config";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";

let token = null,
  emailUser = null,
  idProtector = null,
  dados = null,
  municipality_id = null;

Given("Protetores cadastrados e com login válido {string} v3", (email) => {
  cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
    token = getDataResponse;
    emailUser = email;
  });
});

When("Capturar o id do protetor v2", () => {
  requestProtectorID
    .idProtector(emailUser, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o id do municipio do protetor v2", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When(
  "Preencher os campos necessários para a criação do procedimento com dados duplicados v2",
  () => {
    dados = {
      animal_age: 15,
      animal_size: "small_or_mid",
      animal_breed: "Vira Lata",
      animal_gender: "male",
      animal_had_leishmaniasis: false,
      animal_has_test_leishmaniasis: false,
      animal_has_vaccination_card: false,
      animal_is_vaccinated_rabies: false,
      animal_name: "Junior",
      animal_specie: "canine",
      animal_weight: 2,
      name: "castration",
      protector_id: idProtector,
      municipality_id: municipality_id,
    };
  }
);

When("criar um procedimento v2", () => {
  requestPostProcedureRequests
    .createProcedure(token, dados)
    .then((response) => {
      data = response;
      assertionsPostProcedureDuplicateDataAlternative.notNull(response);
      assertionsPostProcedureDuplicateDataAlternative.shouldContainStatus(
        response,
        201
      );
      assertionsPostProcedureDuplicateDataAlternative.shouldContainStatusText(
        response,
        "Created"
      );
    });
});

Then(
  "O sistema deve retornar uma mensagem de erro informando a inconsistencia",
  () => {
    requestPostDuplicateProcedureAlternative
      .createProcedureDuplicateData(token, dados)
      .then((response) => {
        assertionsPostProcedureDuplicateDataAlternative.notNull(response);
        assertionsPostProcedureDuplicateDataAlternative.shouldContainStatus(
          response,
          409
        );
        assertionsPostProcedureDuplicateDataAlternative.shouldContainDuration(
          response,
          1500
        );
        assertionsPostProcedureDuplicateDataAlternative.shouldContainStatusText(
          response,
          "Conflict"
        );
      });
  }
);
