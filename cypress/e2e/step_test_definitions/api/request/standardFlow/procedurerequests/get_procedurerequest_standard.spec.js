/// <reference types="cypress" />

import { assertionsGetProcedureRequestStandard } from "@assertions/requestService/standardFlow/procedurerequests/assertionsGetProcedureRequest";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestService_standardFlow_get_procedurerequest } from "@requests/requestService/standardFlow/procedurerequests/requestService_standardFlow_get_procedurerequest";
import { Config } from "@utils/config";

let token = null,
  emailProtetor = null;

Given("Protetores cadastrados e com login válido {string}", (email) => {
  cy.getToken(email, Config.PASS_DEFAULT_BACK).then((responseToken) => {
    token = responseToken;
    emailProtetor = email;
  });
});

When("solicitar todos os procedimentos", () => {});

Then("deverá ser retornado todos os procedimentos do protetor", () => {
  requestService_standardFlow_get_procedurerequest
    .getProcedure(token)
    .then((getDataResponse) => {
      assertionsGetProcedureRequestStandard.notNull(getDataResponse);
      assertionsGetProcedureRequestStandard.shouldContainStatus(
        getDataResponse,
        200
      );
      assertionsGetProcedureRequestStandard.shouldContainDuration(
        getDataResponse,
        1500
      );
      assertionsGetProcedureRequestStandard.shouldContainStatusText(
        getDataResponse,
        "OK"
      );
    });
});
