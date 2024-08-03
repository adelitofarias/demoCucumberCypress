class AuthLocators {

  // Localizador da Mensagem de Erro
  errorMessage = () => {
    return 'h3[data-test="error"]';
  };

  /*
      ----------------------------------------------------------------------------------------------------------------------
      
  */

  // Mensagem da snackbar
  mensagemSnackbar = () => {
    return ".q-notification__message > :nth-child(1)";
  };

  // Mensagem de senha obrigatória
  mensagemSenhaObrigatoria = () => {
    return '[id^="f_"]', "Senha obrigatória.";
  };

  // Mensagem de email obrigatória
  mensagemEmailObrigatorio = () => {
    return '[id^="f_"]', "Email obrigatório.";
  };

  //Botão de entrar
  botaoDeEntrar = () => {
    return "#button-auth-login";
  };

  //Botão esqueci minha senha
  botaoEsqueciMinhaSenha = () => {
    return "#button-auth-forgot-password";
  };
}

export const autenticacaoLocators = new AuthLocators();
