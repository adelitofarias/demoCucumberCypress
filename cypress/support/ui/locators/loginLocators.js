class LoginLocator {

    //Campos de preenchimento
    campoEmail = () => { return '#user-name' }
    campoSenha = () => { return '#password' }

    //Botões
    botaoEntrar = () => { return '#login-button' }
}

export const loginLocator = new LoginLocator();