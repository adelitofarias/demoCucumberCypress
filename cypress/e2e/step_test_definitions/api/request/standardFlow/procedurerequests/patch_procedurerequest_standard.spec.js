/// <reference types="cypress" />

import { assertionsPatchProcedurerequestStandard } from "@assertions/requestService/standardFlow/procedurerequests/assertionsPatchProcedurerequestStandard";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";
import { requestPatchProcedureStandard } from "@requests/requestService/standardFlow/procedurerequests/requestPatchProcedureStandard";
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
  "Um protetor cadastrado disponivel no sistema com email {string} v2",
  (email) => {
    cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
      token = getDataResponse;
      emailProtetor = email;
    });
  }
);

When("Capturar o ID do protetor v2", () => {
  requestProtectorID
    .idProtector(emailProtetor, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o ID do municipio do protetor v2", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("Gerar os dados necessários v2", () => {
  cy.geradorGERAL().then((getDataResponse) => {
    dados = getDataResponse;
  });
});

When(
  "Preencher os campos necessários para a criação do procedimento v2",
  () => {
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
  }
);

When("Deverá ser criado o procedimento v2", () => {
  requestPostProcedureRequests
    .createProcedure(token, dadosProcedimento)
    .then((getDataResponse) => {
      idProcedure = getDataResponse.body.id;
    });
});

When("Capturar o id do procedimento cadastrado v2", () => {});

When("Preencher os campos que serão atualizados", () => {
  dadosAtualizados = {
    animal_breed: "Pitbull",
  };
});

Then("O procedimento deve ser atualizado", () => {
  requestPatchProcedureStandard
    .patchProcedureProtector(token, idProcedure, dadosAtualizados)
    .then((response) => {
      assertionsPatchProcedurerequestStandard.notNull(response);
      assertionsPatchProcedurerequestStandard.shouldContainDuration(
        response,
        1500
      );
      assertionsPatchProcedurerequestStandard.shouldContainStatus(
        response,
        200
      );
      assertionsPatchProcedurerequestStandard.shouldContainStatusText(
        response,
        "OK"
      );

      assertionsPatchProcedurerequestStandard.idShouldBeString(response);
      assertionsPatchProcedurerequestStandard.equalId(response, idProcedure);
      assertionsPatchProcedurerequestStandard.equalBreed(
        response,
        dadosAtualizados.animal_breed
      );
    });
});
