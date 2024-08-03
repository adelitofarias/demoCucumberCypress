import { loginLocator } from '@locators/loginLocators'
import { defaultUsersFront } from '@utils/users/defaultUsersFront'
import { Config } from '@utils/config'


class LoginPage {
    // Acessa o site que será testado
    baseUrl() {
        cy.viewport(1280, 720)
        cy.visit(Config.DEV_APP_ADDRESS, { timeout: 100000 })
        cy.reload()
    }

    // Campos do usuário Padrão
    credencialPadrao() {
        cy.get(loginLocator.campoEmail()).type(defaultUsersFront.standardEmail())
        cy.get(loginLocator.campoSenha()).type(defaultUsersFront.senha())
        this.clicarBotaoDeEntrar()
    }

    // Campos do usuário Alternativo
    credencialAlternativa(user, pass) {
        cy.get(loginLocator.campoEmail()).type(user)
        cy.get(loginLocator.campoSenha()).type(pass)
        this.clicarBotaoDeEntrar()
    }

    // Clicar botão de entrar
    clicarBotaoDeEntrar() {
        cy.get(loginLocator.botaoEntrar()).click()
    }
}

export const loginPage = new LoginPage();