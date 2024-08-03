import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { compraProdutoPages } from "@pages/compraProduto_pages/compraProduto_pages";

When("visualização de Produto ordendos por {string}", (tipo) => {
	compraProdutoPages.ordenarProduto(tipo)
	compraProdutoPages.validarOrdenacao()

});

When("Adicionar ao Carrinho", () => {
	autenticacaoPages.standardLogin()
});

When("Finalizar Compra", () => {
	autenticacaoPages.standardLogin()
});

Then("o produto será comprado", () => {
	autenticacaoPages.compararValorURL()
});