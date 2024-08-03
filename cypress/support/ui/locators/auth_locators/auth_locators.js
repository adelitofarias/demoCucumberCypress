class AuthLocators {

  // Localizador da Mensagem de Erro
  errorMessage = () => {
    return 'h3[data-test="error"]';
  };

 
}

export const autenticacaoLocators = new AuthLocators();
