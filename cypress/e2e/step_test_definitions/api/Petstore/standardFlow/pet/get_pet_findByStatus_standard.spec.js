/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

import { requestGetPetStandard } from "@requests/Petstore/standardFlow/pet/request_get_pet_findByStatus_standard";
import { assertionsGetPetStandard } from "@assertions/Petstore/standardFlow/pet/assertion_get_pet_findByStatus_standard";

let statusValido = null;

Given("que a API esteja operacional", () => {

  requestGetPetStandard.checkApiAvailability().then((response) => {
    assertionsGetPetStandard.notNull(response);
    assertionsGetPetStandard.shouldContainStatus(response, 200);
  });

});

When("informar na requisição o {string}", (status) => {
  const validStatuses = ['available', 'pending', 'sold'];

  if (validStatuses.includes(status)) {
    statusValido = status;
  } else {
    throw new Error(`${status} não é um status válido.`);

  }

});

Then("deverá todos os valores correspondentes", () => {
  requestGetPetStandard.getcheckPetStatusFilter(statusValido).then((response) => {
    assertionsGetPetStandard.notNull(response);
    assertionsGetPetStandard.shouldContainStatus(response, 200);
    assertionsGetPetStandard.shouldContainDuration(response, 1500);
    assertionsGetPetStandard.shouldContainStatusText(response, "OK");
    assertionsGetPetStandard.statusShouldBeString(response);
    assertionsGetPetStandard.firstPetStatus(response, statusValido);
    assertionsGetPetStandard.validateAllPetsHaveValidStatus(response, statusValido);

  });

});
