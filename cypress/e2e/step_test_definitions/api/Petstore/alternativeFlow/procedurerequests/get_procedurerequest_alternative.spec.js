/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
//import { assertionsGetProcedureNotScopeAlternative } from "@assertions/requestService/alternativeFlow/assertinsGetProcedureNotScopeAlternative";
//import { assertionsGetProcedureWrongIdAlternative } from "@assertions/requestService/alternativeFlow/assertionsGetProcedureWrongIdAlternative";
//import { requestGetProcedureNotScopeAlternative } from "@requests/requestService/alternativeFlow/procedurerequests/requestGetProcedureNotScopeAlternative";
//import { requestGetProcedureWrongIdAlternative } from "@requests/requestService/alternativeFlow/procedurerequests/requestGetProcedureWrongIdAlternative";
//import { requestPostProcedureRequests } from "@requests/requestService/standardFlow/procedurerequests/requestPostProcedureRequestsStandard";
import { Config } from "@utils/config";

let token = null,
  municipality_id = null,
  dadosGerados = null,
  dados = null;
let idProtetor_1 = null,
  idProtetor_2 = null,
  idProcedure = null;

Given("um protetor 1 cadastrado disponivel no sistema v3", () => {
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
      idProtetor_1 = ID;
    });
});

Given("capturar o id do munícipio do protetor 1", () => {
  request_account_standardFlow_get_protector_id_municipality
    .dadosProtetor(token, idProtetor_1)
    .then((getDataResponse) => {
      municipality_id = getDataResponse.body.municipality_id;
    });
});

Given("Gerar os dados necessarios para a criação do procedimento v3", () => {
  cy.geradorGERAL().then((response) => {
    dadosGerados = response;
  });
});

Given(
  "Preencher os campos necessários para a criação do procedimento v3",
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
      animal_name: dadosGerados.nome,
      animal_specie: "canine",
      animal_weight: 2,
      name: "castration",
      protector_id: idProtetor_1,
      municipality_id: municipality_id,
    };
  }
);

When("criar um procedimento v3", () => {
  requestPostProcedureRequests
    .createProcedure(token, dados)
    .then((response) => {
      idProcedure = response.body.id;
      assertionsGetProcedureNotScopeAlternative.notNull(response);
      assertionsGetProcedureNotScopeAlternative.shouldContainStatus(
        response,
        201
      );
      assertionsGetProcedureNotScopeAlternative.shouldContainStatusText(
        response,
        "Created"
      );
    });
});

When("outro protetor 2 cadastrado no sistema com id disponivel", () => {
  /*
   * Arquivo com as credenciais de alguns usuários em:
   * ~/system-test/tests/cSypress/support/utils/users/defaultUsersAPI.js
   */
  requestProtectorID
    .idProtector(Config.USER_PROTETOR_ONG_BACK_0, Config.PASS_DEFAULT_BACK)
    .then((ID) => {
      idProtetor_2 = ID;
    });
});

Then(
  "tentar acessar os procedimentos do protetor 1 utilizando o acesso do protetor 2",
  () => {
    requestGetProcedureNotScopeAlternative
      .getOneProcedure(
        Config.USER_PROTETOR_ONG_BACK_0,
        Config.PASS_DEFAULT_BACK,
        idProcedure
      )
      .then((response) => {
        assertionsGetProcedureNotScopeAlternative.notNull(response);
        assertionsGetProcedureNotScopeAlternative.shouldContainStatus(
          response,
          403
        );
        assertionsGetProcedureNotScopeAlternative.shouldContainStatusText(
          response,
          "Forbidden"
        );
        assertionsGetProcedureNotScopeAlternative.verifyErrorDescription(
          response,
          "User does not have permissions to block/unblock this resource in this moment."
        );
      });
  }
);

let idInexixtente = null;

Given("um protetor cadastrado disponivel no sistema v5", () => { });

When("gerar um ID inexistente", () => {
  idInexixtente = "12dfed3f4nsfsfecdf342cd23";
});

Then(
  "Tentar capturar a mensagem de erro informando que o prodecimento não existe",
  () => {
    requestGetProcedureWrongIdAlternative
      .getOneProcedure(
        Config.USER_PROTETOR_ONG_BACK_0,
        Config.PASS_DEFAULT_BACK,
        idInexixtente
      )
      .then((response) => {
        assertionsGetProcedureWrongIdAlternative.notNull(response);
        assertionsGetProcedureWrongIdAlternative.shouldContainStatus(
          response,
          404
        );
        assertionsGetProcedureWrongIdAlternative.shouldContainStatusText(
          response,
          "Not Found"
        );
      });
  }
);
