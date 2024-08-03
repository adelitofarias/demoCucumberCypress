/**
 * Arquivo: baseLocators.js
 * Descrição: Este arquivo contém os locators que são comuns a todos (ou quase todos) os perfis de usuários.
 * Cada método retorna um locator específico.
 * 
 * Por favor, adicione aqui apenas locators que são comumente usados em vários perfis de usuários.
 */

export class BaseLocators {

    /**
     * Comportamentos universais comuns a todos os perfis.
     */

    botaoMenuLateral = () => { return '#id-6a04bc4377b43b8866b97418b2f165f8f9205e6c' }
    botaoSolicitacoes = () => { return '#id-7a6ea3e5e47fe9fa25246482851313eba2e40693' }
    botaoSolicitacoesEmergenciais = () => { return '#id-152d872a7e0ef1b716c019bee9642b1acb730985' }
    botaoMinhaConta = () => { return '#id-7cb3a9fa0a176e913d2199b039fc29ff937b5b0e' }

    mensagemSucessoSnackbar = () => { return '.q-notification__message > :nth-child(1)' }
}