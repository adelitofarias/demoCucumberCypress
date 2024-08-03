/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestPostProcedureRequestAttachments } from "@requests/requestService/standardFlow/procedurerequests.attachments/requestPostProcedureRequestAttachmentsStandard";
import { requestGetProcedureRequestAttachments } from "@requests/requestService/standardFlow/procedurerequests.attachments/requestGetProcedureRequestAttachmentsStandard";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { assertionsGetProcedureRequestsAttachmentsStandard } from "@assertions/requestService/standardFlow/procedurerequests.attachments/assertionsGetProcedureRequestsAttachmentsStandard";
import { Config } from "@utils/config";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";

let token = null,
  emailProtetor = null,
  idProtector = null,
  municipality_id = null,
  idProcedure = null;
let dadosGerados = null,
  dados = null;

Given("Um protetor cadastrado com acesso válido {string} v2", (email) => {
  cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
    token = getDataResponse;
    emailProtetor = email;
  });
});

When("Capturar o ID do protetor v4", () => {
  requestProtectorID
    .idProtector(emailProtetor, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o ID do municipio do protetor v4", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("Gerar os dados necessários v4", () => {
  cy.geradorGERAL().then((getDataResponse) => {
    dadosGerados = getDataResponse;
  });
});

When("Preencher os dados do procedimento v4", () => {
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

When("Criar um procedimento v2", () => {
  requestPostProcedureRequests
    .createProcedure(token, dados)
    .then((getDataResponse) => {
      idProcedure = getDataResponse.body.id;
    });
});

When("Criar anexo", () => {
  requestPostProcedureRequestAttachments.postProcedureRequestsAttachments(
    idProcedure,
    token
  );
});

Then("Deverá obter todos os arquivos anexados a um procedimento", () => {
  requestGetProcedureRequestAttachments
    .getAttachmentsOfProcedure(idProcedure, token.body.access_token)
    .then((getDataResponse) => {
      assertionsGetProcedureRequestsAttachmentsStandard.notNull(
        getDataResponse
      );
      assertionsGetProcedureRequestsAttachmentsStandard.shouldContainStatus(
        getDataResponse,
        200
      );
      assertionsGetProcedureRequestsAttachmentsStandard.shouldContainDuration(
        getDataResponse,
        1500
      );
      assertionsGetProcedureRequestsAttachmentsStandard.shouldContainStatusText(
        getDataResponse,
        "OK"
      );
      assertionsGetProcedureRequestsAttachmentsStandard.shouldBeArray(
        getDataResponse
      );
      assertionsGetProcedureRequestsAttachmentsStandard.shouldBeOfRequest(
        getDataResponse,
        idProcedure
      );
      assertionsGetProcedureRequestsAttachmentsStandard.verifyDownloadLink(
        getDataResponse,
        idProcedure
      );
    });
});
