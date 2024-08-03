import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { autenticacaoPages } from "@pages/auth_pages/auth_pages";

Given("acesse a tela de autenticação", () => {
	autenticacaoPages.acessarSite()
});

When("informar as credenciais de usuário padrão", () => {
	autenticacaoPages.standardLogin()
});

Then("o url conterá o subdiretório do inventário", () => {
	autenticacaoPages.compararValorURL()
});