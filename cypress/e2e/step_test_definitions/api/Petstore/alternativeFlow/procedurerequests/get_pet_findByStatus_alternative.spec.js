/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

import { requestGetPetAlternative } from "@requests/Petstore/alternativeFlow/procedurerequests/request_get_pet_findByStatus_alternative";
import { assertionsGetPetAlternative } from "@assertions/Petstore/alternativeFlow/get_pet_findByStatus_alternativespec";


When("informar na requisição o status inválido", () => { });

Then("deverá informar que o status não está dentro do conjunto válido", () => {
  const statusInvalido = "naoExiste"

  requestGetPetAlternative.getcheckPetStatusFilter(statusInvalido).then((response) => {
    console.log(response)
    assertionsGetPetAlternative.notNull(response);
    assertionsGetPetAlternative.shouldContainStatus(response, 200);
    assertionsGetPetAlternative.shouldContainDuration(response, 1500);
    assertionsGetPetAlternative.shouldContainStatusText(response, "OK");
    assertionsGetPetAlternative.shouldHaveEmptyBody(response)
    assertionsGetPetAlternative.shouldHaveSizeZero(response)

  });

});
