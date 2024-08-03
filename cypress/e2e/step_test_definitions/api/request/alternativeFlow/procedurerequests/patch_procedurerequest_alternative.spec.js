/// <reference types="cypress" />

import { assertionsPatchProcedureDuplicateDataAlternative } from "@assertions/requestService/alternativeFlow/assertionsPatchProcedureDuplicateDataAlternative";
import { assertionsPostProcedureDuplicateDataAlternative } from "@assertions/requestService/alternativeFlow/assertionsPostProcedureDuplicateDataAlternative";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { requestProtectorID } from "@requests/account/standardFlow/auth/requestProtectorID";
import { request_account_standardFlow_get_protector_id_municipality } from "@requests/account/standardFlow/auth/request_account_standardFlow_get_protector_id_municipality";
import { requestPatchProcedureAlternative } from "@requests/requestService/alternativeFlow/procedurerequests/requestPatchProcedureAlternative";
import { requestPostDuplicateProcedureAlternative } from "@requests/requestService/alternativeFlow/procedurerequests/requestPostDuplicateProcedureAlternative";
import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { Config } from "@utils/config";

let idProtector = null,
  idProcedure_1 = null,
  idProcedure_2 = null,
  nomeProcedure_2 = null,
  updateData = null;
let municipality_id = null,
  dadosGerados_1 = null,
  dadosGerados_2 = null,
  procedure_1 = null,
  procedure_2 = null;

Given("um protetor cadastrado disponivel no sistema v3", () => {
  cy.getToken(
    Config.USER_PROTECTOR_INDEPENDENTE_BACK_0,
    Config.PASS_DEFAULT_BACK
  ).then((getDataResponse) => {
    token = getDataResponse;
  });
  /*
   * Arquivo com as credenciais de alguns usuários em:
   * ~/system-test/tests/cypress/support/utils/users/defaultUsersAPI.js
   */
  requestProtectorID
    .idProtector(
      Config.USER_PROTECTOR_INDEPENDENTE_BACK_0,
      Config.PASS_DEFAULT_BACK
    )
    .then((ID) => {
      idProtector = ID;
    });
});

Given("capturar o id do munícipio do protetor v1", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

Given(
  "Gerar os dados necessarios para a criação de ambos os procedimentos",
  () => {
    cy.geradorGERAL().then((response) => {
      dadosGerados_1 = response;
    });
    cy.geradorGERAL().then((response) => {
      dadosGerados_2 = response;
    });
  }
);

Given(
  "Preencher os campos necessários para a criação de ambos procedimentos",
  () => {
    procedure_1 = {
      animal_age: 15,
      animal_size: "small_or_mid",
      animal_breed: "Vira Lata",
      animal_gender: "male",
      animal_had_leishmaniasis: false,
      animal_has_test_leishmaniasis: false,
      animal_has_vaccination_card: false,
      animal_is_vaccinated_rabies: false,
      animal_name: dadosGerados_1.nome,
      animal_specie: "canine",
      animal_weight: 2,
      name: "castration",
      protector_id: idProtector,
      municipality_id: municipality_id,
    };
    procedure_2 = {
      animal_age: 15,
      animal_size: "small_or_mid",
      animal_breed: "Vira Lata",
      animal_gender: "male",
      animal_had_leishmaniasis: false,
      animal_has_test_leishmaniasis: false,
      animal_has_vaccination_card: false,
      animal_is_vaccinated_rabies: false,
      animal_name: dadosGerados_2.nome,
      animal_specie: "canine",
      animal_weight: 2,
      name: "castration",
      protector_id: idProtector,
      municipality_id: municipality_id,
    };
  }
);

When("criar um procedimento p1 e capturar o id", () => {
  requestPostProcedureRequests
    .createProcedure(token, procedure_1)
    .then((response) => {
      idProcedure_1 = response.body.id;
      assertionsPatchProcedureDuplicateDataAlternative.notNull(response);
      assertionsPatchProcedureDuplicateDataAlternative.shouldContainStatus(
        response,
        201
      );
      assertionsPatchProcedureDuplicateDataAlternative.shouldContainStatusText(
        response,
        "Created"
      );
    });
});

When("crir outro procedimento p2 e capturar o nome", () => {
  requestPostProcedureRequests
    .createProcedure(token, procedure_2)
    .then((response) => {
      nomeProcedure_2 = response.body.animal_name;
      idProcedure_2 = response.body.id;
      assertionsPatchProcedureDuplicateDataAlternative.notNull(response);
      assertionsPatchProcedureDuplicateDataAlternative.shouldContainStatus(
        response,
        201
      );
      assertionsPatchProcedureDuplicateDataAlternative.shouldContainStatusText(
        response,
        "Created"
      );
    });
});

Then("Atualizar o p1 com o nome do p2", () => {
  updateData = {
    animal_name: nomeProcedure_2,
  };
  requestPatchProcedureAlternative
    .patchProcedureProtector(token, idProcedure_1, updateData)
    .then((response) => {
      assertionsPatchProcedureDuplicateDataAlternative.notNull(response);
      assertionsPatchProcedureDuplicateDataAlternative.shouldContainDuration(
        response,
        1500
      );
      assertionsPatchProcedureDuplicateDataAlternative.shouldContainStatus(
        response,
        200
      );
      assertionsPatchProcedureDuplicateDataAlternative.shouldContainStatusText(
        response,
        "OK"
      );
    });
});

Then("deve ser retornado uma mensagem de erro", () => {});

/*
--------------------------------------------------------------------------- CENÁRIO 2 ----------------------------------------------------------------
*/

Given("Protetores cadastrados e com login válido {string} v5", (email) => {
  cy.getToken(email, Config.PASS_DEFAULT_BACK).then((getDataResponse) => {
    token = getDataResponse;
    emailUser = email;
  });
});

When("Capturar o id do protetor v4", () => {
  requestProtectorID
    .idProtector(emailUser, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtector = ID;
    });
});

When("Capturar o id do municipio do protetor v3", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtector)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

When("Tornar o ID incorreto", () => {
  idProtector = idProtector + "H";
});

When(
  "Preencher os campos necessários para a criação do procedimento v1",
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

Then(
  "O sistema deve retornar uma mensagem de erro informando a inconsistencia v1",
  () => {
    requestPostDuplicateProcedureAlternative
      .createProcedureDuplicateData(token, dados)
      .then((getDataResponse) => {
        assertionsPostProcedureDuplicateDataAlternative.notNull(
          getDataResponse
        );
        assertionsPostProcedureDuplicateDataAlternative.shouldContainStatus(
          getDataResponse,
          403
        );
        assertionsPostProcedureDuplicateDataAlternative.shouldContainStatusText(
          getDataResponse,
          "Forbidden"
        );
        assertionsPostProcedureDuplicateDataAlternative.shouldContainDuration(
          getDataResponse,
          1500
        );
      });
  }
);
