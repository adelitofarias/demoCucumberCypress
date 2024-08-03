import { loginPage } from "@pages/loginPages"
import { autenticacaoLocators } from "@locators/auth_locators/auth_locators"
import { Config } from "@utils/config";
import { faker } from '@faker-js/faker'
import { fixtures_dinamic } from "@path_fixtures/userData"

class AuthPages {

    acessarSite() {
        loginPage.baseUrl()
    }

    standardLogin() {
        loginPage.credencialPadrao()
    }

    alterativeLogin(user, pass) {
        loginPage.credencialAlternativa(user, pass)
    }

    //Capturar e validar rota
    compararValorURL() {
        cy.url().then((url) => {
            expect(url).to.contain("/inventory.html");
        });
    }

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



    /*
    ----------------------------------------------------------------------------------------------------------------------
    
    */

    acessarEsqueciMinhaSenha() {
        cy.get(autenticacaoLocators.botaoEsqueciMinhaSenha()).click()
        cy.wait(2000)
    }

    //Preencher login com email válido
    preencherEmailValido() {

        const fileName = 'userDataAdmin.json';
        const filePath = `${fixtures_dinamic}/${fileName}`;

        // Agora que os dados foram gerados e escritos no arquivo, podemos acessá-los
        cy.fixture(filePath).then(userDataAdmin => {
            const emailValido = userDataAdmin.admin[0].email;
            cy.contains(autenticacaoLocators.campoDeEmail()).type(emailValido)
        });

    }

    //Preencher login com senha válida
    preencherSenhaValida(senhaValida) {
        cy.contains(autenticacaoLocators.campoDeSenha()).type(senhaValida)
    }

    //Preencher login com email inválido
    preencherEmailInvalido() {
        cy.contains(autenticacaoLocators.campoDeEmail()).type(faker.internet.email())
    }

    //Preencher login com senha inválida
    preencherSenhaInvalida() {
        cy.contains(autenticacaoLocators.campoDeSenha()).type(faker.internet.password())
    }

    //Mensagem de credenciais inválidas
    mensagemDaSnackBar(mensagem) {
        cy.get(autenticacaoLocators.mensagemSnackbar()).should('contain.text', mensagem)
    }

    //Mensagem de preencher email
    retornoDeEmailObrigatorio(mensagem) {
        cy.contains(autenticacaoLocators.mensagemEmailObrigatorio()).should('contain.text', mensagem)
    }

    //Mensagem de preencer senha
    retornoDeSenhaObrigatoria(mensagem) {
        cy.contains(autenticacaoLocators.mensagemSenhaObrigatoria()).should('contain.text', mensagem)
    }

    //Clicar no botão de entrar
    clicarBotaoDeEntrar() {
        cy.get(autenticacaoLocators.botaoDeEntrar()).click()
    }
}

export const autenticacaoPages = new AuthPages()