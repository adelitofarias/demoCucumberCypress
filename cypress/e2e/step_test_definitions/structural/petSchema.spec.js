
/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { requestGetPetStandard } from "@requests/Petstore/standardFlow/pet/request_get_pet_findByStatus_standard";
import { definitionsSchemaPet } from '@schema/petSchema';

Given("que tem acesso à API Swagger Petstore para validar a estrutura", () => { })

Then("realizar a requisição passando o status válido", () => { })

When("retornará informando que o contrato para o Modelo Pet está dentro do esperado", () => {
    const validStatuses = 'sold';

    requestGetPetStandard.getcheckPetStatusFilter(validStatuses).then((getDataResponse) => {

        cy.log(JSON.stringify(getDataResponse.body));
        cy.log(JSON.stringify(definitionsSchemaPet));
        expect(getDataResponse.body).to.be.jsonSchema(definitionsSchemaPet)
    });
})
