import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { utilsPages } from "@pages/utils/utilsPages";

Given("que preciso gerar {string} perfis de administradores", (quantidade) => {
  cy.wrap(quantidade).as('quantidade');
});

When("eu gerar os perfis de administradores", function () {
  const quantidade = this.quantidade;
  utilsPages.gerarMassasAdmin(quantidade);
});