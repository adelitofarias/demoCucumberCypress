// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import { Config } from '@utils/config'


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

//valor em Milissegundos para esperar entre acoes
/*
const COMMAND_DELAY = 600;


for (const command of ['get','visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains', 'should', 'selectFile', 'window']) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
        const origVal = originalFn(...args);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(origVal);
            }, COMMAND_DELAY);
        });
    });
}
*/


Cypress.Commands.add('getToken', (email, pass) => {

    cy.request({
        method: 'POST',
        url: `${Config.DEV_API_GATEWAY}/v1/auth/`,
        body: {
            "email": email,
            "password": pass
        }

    }).then(token => {
        expect(token.body.access_token).to.not.be.empty;
        return token;
    })
});


Cypress.Commands.add('geradorNome', () => {
    cy.request({
        url: 'https://www.4devs.com.br/ferramentas_online.php',
        method: 'POST',
        form: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            'acao': 'gerar_pessoa',
            'sexo': 'I',
            'pontuacao': 'N',
            'txt_qtde': 1
        }
    }).then((response) => {
        return response.body[0].nome
    })

})

Cypress.Commands.add('geradorEmail', () => {
    cy.request({
        url: 'https://www.4devs.com.br/ferramentas_online.php',
        method: 'POST',
        form: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            'acao': 'gerar_pessoa',
            'sexo': 'I',
            'pontuacao': 'N',
            'txt_qtde': 1
        }
    }).then((response) => {
        return response.body[0].email
    })

})

Cypress.Commands.add('geradorExternoTelefone', () => {
    cy.request({
        url: 'https://www.4devs.com.br/ferramentas_online.php',
        method: 'POST',
        form: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        failOnStatusCode: false,
        body: {
            'acao': 'gerar_pessoa',
            'sexo': 'I',
            'pontuacao': 'N',
            'txt_qtde': 1
        }
    }).then((response) => {
        return response.body[0].celular
    })

})

Cypress.Commands.add('geradorCPF', (comPontos = false) => {
    function randomiza(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }
    function mod(dividendo, divisor) {
        return Math.round(
            dividendo - Math.floor(dividendo / divisor) * divisor
        );
    }
    var n = 9;
    var n1 = randomiza(n);
    var n2 = randomiza(n);
    var n3 = randomiza(n);
    var n4 = randomiza(n);
    var n5 = randomiza(n);
    var n6 = randomiza(n);
    var n7 = randomiza(n);
    var n8 = randomiza(n);
    var n9 = randomiza(n);
    var d1 =
        n9 * 2 +
        n8 * 3 +
        n7 * 4 +
        n6 * 5 +
        n5 * 6 +
        n4 * 7 +
        n3 * 8 +
        n2 * 9 +
        n1 * 10;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10) d1 = 0;
    var d2 =
        d1 * 2 +
        n9 * 3 +
        n8 * 4 +
        n7 * 5 +
        n6 * 6 +
        n5 * 7 +
        n4 * 8 +
        n3 * 9 +
        n2 * 10 +
        n1 * 11;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10) d2 = 0;
    var retorno = '';
    var cpf = 'vazio';
    if (comPontos)
        cpf =
            '' +
            n1 +
            n2 +
            n3 +
            '.' +
            n4 +
            n5 +
            n6 +
            '.' +
            n7 +
            n8 +
            n9 +
            '-' +
            d1 +
            d2;
    else cpf = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
    return cpf;
});

Cypress.Commands.add('geradorCEP', () => {
    cy.request({
        url: 'https://www.4devs.com.br/ferramentas_online.php',
        method: 'POST',
        form: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            'acao': 'gerar_pessoa',
            'sexo': 'I',
            'pontuacao': 'N',
            'txt_qtde': 1
        }
    }).then((response) => {
        return response.body[0].cep
    })
});

Cypress.Commands.add('geradorRG', () => {
    cy.request({
        url: 'https://www.4devs.com.br/ferramentas_online.php',
        method: 'POST',
        form: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
            'acao': 'gerar_pessoa',
            'sexo': 'I',
            'pontuacao': 'N',
            'txt_qtde': 1
        }
    }).then((response) => {
        return response.body[0].rg
    })
});

Cypress.Commands.add('geradorGERAL', () => {
    cy.request({
        url: 'https://www.4devs.com.br/ferramentas_online.php',
        method: 'POST',
        form: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        failOnStatusCode: false,
        body: {
            'acao': 'gerar_pessoa',
            'sexo': 'I',
            'pontuacao': 'N',
            'cep_estado': 'PB',
            'txt_qtde': 1
        }
    }).then((response) => {
        const { nome, cpf, rg, email, senha, cep, endereco, numero, bairro, cidade, estado, celular } = response.body[0]; // Desestruturação dos atributos
        return { nome, cpf, rg, email, senha, cep, endereco, numero, bairro, cidade, estado, celular };
    })

});

Cypress.Commands.add('geradorCNPJ', () => {
    cy.request({
        url: 'https://www.4devs.com.br/ferramentas_online.php',
        method: 'POST',
        form: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        failOnStatusCode: false,
        body: {
            acao: 'gerar_cnpj',
            pontuacao: 'S'
        },
    }).then((response) => {
        return response.body
    })

});

Cypress.Commands.add('geradorDataAleatoria', () => {

    let intervalo = 30;
    let dataAtual = new Date();

    //Calcula o dia aleatório dentro do intervalo
    let diaAleatorio = Math.floor(Math.random() * (intervalo - 1));

    //Calculando uma data de referência
    let referencia = new Date(dataAtual);
    referencia.setDate(dataAtual.getDate() + intervalo);

    //Gerando a data aleatória
    let dataAleatoria = new Date(referencia);
    dataAleatoria.setDate(referencia.getDate() + diaAleatorio);

    //Formando a data final
    return dataAleatoria.getDate().toString().padStart(2, '0') + "/" + (dataAleatoria.getMonth() + 1).toString().padStart(2, '0') + "/" + dataAleatoria.getFullYear().toString();
});

Cypress.Commands.add('generateLicenseNumber', () => {

    let numeros = '';

    for (let i = 0; i < 5; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 10);
        numeros += numeroAleatorio.toString();
    }
    //Retornando uma string aleatória de números
    return numeros;
});