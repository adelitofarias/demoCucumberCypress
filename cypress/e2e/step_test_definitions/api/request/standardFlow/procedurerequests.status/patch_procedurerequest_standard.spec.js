/// <reference types="cypress" />

import { assertionsPutProcedureRequestStatusStandard } from "@assertions/requestService/standardFlow/procedurerequests.status/assertionsPutProcedureRequestStatusStandard";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";
import { requestPutProcedureRequestStatusStandard } from "@requests/requestService/standardFlow/procedurerequests.status/requestPutProcedureRequestStatusStandard";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { Config } from "@utils/config";

let token = null,
  emailProtetor = null,
  idProtector = null,
  idProcedure = null;
let municipality_id = null,
  dados = null,
  dadosProcedimento = null,
  dadosAtualizados = null;

Given(
  "Um protetor cadastrado disponivel no sistema com email {string} v3",
  (email) => {
    cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
      token = getDataResponse;
      emailProtetor = email;
    });
  }
);

When("Capturar o ID do protetor v7", () => {
  requestProtectorID
    .idProtector(emailProtetor, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o ID do municipio do protetor v7", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("Gerar os dados necessários v7", () => {
  cy.geradorGERAL().then((getDataResponse) => {
    dados = getDataResponse;
  });
});

When(
  "Preencher os campos necessários para a criação do procedimento v4",
  () => {
    dadosProcedimento = {
      animal_age: 15,
      animal_size: "small_or_mid",
      animal_breed: "srd",
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
  }
);

When("Deverá ser criado o procedimento v3", () => {
  requestPostProcedureRequests
    .createProcedure(token, dadosProcedimento)
    .then((getDataResponse) => {
      idProcedure = getDataResponse.body.id;
    });
});

When("Capturar o id do procedimento cadastrado v3", () => { });

When("Preencher os campos que serão atualizados v2", () => {
  dadosAtualizados = {
    status: "cancelada",
    status_justification: "cancelada via teste api"
  };
});

Then("O procedimento deve ser atualizado v2", () => {
  requestPutProcedureRequestStatusStandard
    .putProcedureProtector(token, idProcedure, dadosAtualizados)
    .then((response) => {
      assertionsPutProcedureRequestStatusStandard.notNull(response);
      assertionsPutProcedureRequestStatusStandard.shouldContainDuration(
        response,
        1500
      );
      assertionsPutProcedureRequestStatusStandard.shouldContainStatus(
        response,
        200
      );
      assertionsPutProcedureRequestStatusStandard.shouldContainStatusText(
        response,
        "OK"
      );

      assertionsPutProcedureRequestStatusStandard.idShouldBeString(response);
      assertionsPutProcedureRequestStatusStandard.equalId(response, idProcedure);
      assertionsPutProcedureRequestStatusStandard.equalStatus(
        response,
        dadosAtualizados.status
      );
    });
});
