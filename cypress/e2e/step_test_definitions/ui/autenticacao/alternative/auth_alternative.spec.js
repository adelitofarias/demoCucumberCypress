import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { autenticacaoPages } from "@pages/auth_pages/auth_pages";

/*
Informar email Bloqueado
*/
When("informar o {string} e a {string} de credenciamento bloqueado", (user, pass) => {
	autenticacaoPages.alterativeLogin(user, pass)
})

Then("o exibirá {string} de não autorizado", (mensagem) => {
	autenticacaoPages.mensagemUsuarioError(mensagem)
});

/*
Informar dados aleatórios
*/

When("informar o <USER> e a <SENHA> de credenciamento incompatíveis", () => {
	autenticacaoPages.preencherAleatorio()
})

Then("o exibirá {string} de incompatibilidade", (mensagem) => {
	autenticacaoPages.mensagemUsuarioError(mensagem)
});