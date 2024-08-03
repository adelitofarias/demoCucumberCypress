/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestPostProcedureRequestAttachments } from "@requests/requestService/standardFlow/procedurerequests.attachments/requestPostProcedureRequestAttachmentsStandard";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { assertionsPostProcedureRequestsAttachmentsStandard } from "@assertions/requestService/standardFlow/procedurerequests.attachments/assertionsPostProcedureRequestsAttachmentsStandard";
import { Config } from "@utils/config";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";

const decoder = new TextDecoder("utf-8");
let token = null,
  idProtector = null,
  emailProtetor = null,
  municipality_id = null;
let dadosGerados = null,
  dados = null,
  idProcedure = null;

Given("Um protetor cadastrado com acesso válido {string}", (email) => {
  cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
    token = getDataResponse;
    emailProtetor = email;
  });
});

When("Capturar o ID do protetor v3", () => {
  requestProtectorID
    .idProtector(emailProtetor, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o ID do municipio do protetor v3", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("Gerar os dados necessários v3", () => {
  cy.geradorGERAL().then((getDataResponse) => {
    dadosGerados = getDataResponse;
  });
});

When("Preencher os dados do procedimento v3", () => {
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

When("Criar um procedimento", () => {
  requestPostProcedureRequests
    .createProcedure(token, dados)
    .then((getDataResponse) => {
      idProcedure = getDataResponse.body.id;
    });
});

When("Anexar arquivos válidos", () => {});

Then("Deverá submeter os arquivos com sucesso", () => {
  requestPostProcedureRequestAttachments
    .postProcedureRequestsAttachments(idProcedure, token.body.access_token)
    .then((getDataResponse) => {
      const decodedString = decoder.decode(getDataResponse.body);

      assertionsPostProcedureRequestsAttachmentsStandard.notNull(
        getDataResponse
      );
      assertionsPostProcedureRequestsAttachmentsStandard.shouldContainStatus(
        getDataResponse,
        201
      );
      assertionsPostProcedureRequestsAttachmentsStandard.shouldContainDuration(
        getDataResponse,
        1500
      );
      assertionsPostProcedureRequestsAttachmentsStandard.shouldContainStatusText(
        getDataResponse,
        "Created"
      );
      assertionsPostProcedureRequestsAttachmentsStandard.idShouldBeString(
        JSON.parse(decodedString)
      );
      assertionsPostProcedureRequestsAttachmentsStandard.verifyDownloadLink(
        JSON.parse(decodedString),
        idProcedure
      );
    });
});
