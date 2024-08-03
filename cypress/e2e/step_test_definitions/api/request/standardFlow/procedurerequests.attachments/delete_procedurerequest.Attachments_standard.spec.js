/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestPostProcedureRequestAttachments } from "@requests/requestService/standardFlow/procedurerequests.attachments/requestPostProcedureRequestAttachmentsStandard";
import { requestDeleteProcedureRequestIdAttachments } from "@requests/requestService/standardFlow/procedurerequests.attachments/requestDeleteProcedureRequestIdAttachmentsStandard";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { assertionsDeleteProcedureRequestsIdAttachmentsStandard } from "@assertions/requestService/standardFlow/procedurerequests.attachments/assertionsDeleteProcedureRequestsIdAttachmentsStandard";
import { Config } from "@utils/config";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";

let token = null,
  emailProtetor = null,
  idProtector = null,
  municipality_id = null,
  idProcedure = null;
let dadosGerados = null,
  dados = null;
let decodedString = null,
  idAttachment = null;
const decoder = new TextDecoder("utf-8");

Given("Um protetor cadastrado com acesso válido {string} v3", (email) => {
  cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
    token = getDataResponse;
    emailProtetor = email;
  });
});

When("Capturar o ID do protetor v5", () => {
  requestProtectorID
    .idProtector(emailProtetor, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o ID do municipio do protetor v5", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("Gerar os dados necessários v5", () => {
  cy.geradorGERAL().then((getDataResponse) => {
    dadosGerados = getDataResponse;
  });
});

When("Preencher os dados do procedimento v5", () => {
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

When("Criar um procedimento v3", () => {
  requestPostProcedureRequests
    .createProcedure(token, dados)
    .then((getDataResponse) => {
      idProcedure = getDataResponse.body.id;
    });
});

When("Criar anexo v1", () => {
  requestPostProcedureRequestAttachments
    .postProcedureRequestsAttachments(idProcedure, token.body.access_token)
    .then((getDataResponse) => {
      decodedString = decoder.decode(getDataResponse.body);
      idAttachment = JSON.parse(decodedString)[0].id;
    });
});

When("Capturar o ID do anexo", () => {});

Then("Deverá deletar o anexo do procedimento com o respectivo ID", () => {
  requestDeleteProcedureRequestIdAttachments
    .getAttachmentDataOfProcedure(
      idAttachment,
      idProcedure,
      token.body.access_token
    )
    .then((getDataResponse) => {
      assertionsDeleteProcedureRequestsIdAttachmentsStandard.notNull(
        getDataResponse
      );
      assertionsDeleteProcedureRequestsIdAttachmentsStandard.shouldContainStatus(
        getDataResponse,
        204
      );
      assertionsDeleteProcedureRequestsIdAttachmentsStandard.shouldContainDuration(
        getDataResponse,
        1500
      );
      assertionsDeleteProcedureRequestsIdAttachmentsStandard.shouldContainStatusText(
        getDataResponse,
        "No Content"
      );
    });
});
