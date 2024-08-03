import { compraProdutoLocators } from "@locators/compraProduto_locators/compraProduto_locators"
import { Config } from "@utils/config";
import { faker } from '@faker-js/faker'
import { fixtures_dinamic } from "@path_fixtures/userData"

class CompraProdutoPages {

    ordenarProduto(tipo) {
        cy.get(compraProdutoLocators.selectSort()).select(tipo)
    }

    //Para verificar o texto de um elemento específico usando expect, selecionando o primeiro elemento da ordenacao
    validarOrdenacao() {
        cy.get(compraProdutoLocators.fistElementSort()).then((elements) => {
            const element = elements.eq(0); // Seleciona o primeiro elemento com a classe 'inventory_item_name'
            expect(element).to.be.visible;
            expect(element.text()).to.contain('Sauce Labs Fleece Jacket');
        });
    }

///////////////////////////////////////////////////////////////////

    //Mensagem de credencial Errada
    mensagemUsuarioError(mensagem) {
        cy.get(autenticacaoLocators.errorMessage()).then((element) => {
            expect(element).to.be.visible;
            expect(element.text()).to.contain(mensagem);
        });
    }


    preencherAleatorio() {
        const fileName = 'userDataAdmin.json';
        const filePath = `${fixtures_dinamic}/${fileName}`;

        // Agora que os dados foram gerados e escritos no arquivo, podemos acessá-los
        cy.fixture(filePath).then(userDataAdmin => {
            const emailAleatorio = userDataAdmin.admin[0].email;
            const passAleatoria = userDataAdmin.admin[0].num_comments;
            loginPage.credencialAlternativa(emailAleatorio, passAleatoria)
        });
    }

}

export const compraProdutoPages = new CompraProdutoPages()