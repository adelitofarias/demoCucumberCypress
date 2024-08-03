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


//import { Config } from '@utils/config'
import { util } from '@utils/util';


Cypress.Commands.add('generateUserDataAdmin', (telefones, CPFs, CEPs, RGs, CNPJs) => {
    const { faker } = require('@faker-js/faker');

    // Verificar se os arrays têm o mesmo comprimento
    if (
        telefones.length !== CPFs.length ||
        telefones.length !== CEPs.length ||
        telefones.length !== RGs.length ||
        telefones.length !== CNPJs.length
    ) {
        throw new Error('Os arrays de telefones, CPFS, CEPs, RGs e CNPJs não têm o mesmo comprimento.');
    }



    // Cria um objeto para armazenar os dados de usuário gerados
    const userDataAdmin = {
        //cria uma propriedade chamada 'admin' em um objeto e preenche essa propriedade com um array resultante da aplicação do método map() ao array arrays.
        'admin': telefones.map((itemArray, index) => {
            const cpf = CPFs[index]; // CPF correspondente ao índice atual
            const cep = CEPs[index]; // CEP correspondente ao índice atual
            const rg = RGs[index]; // RG correspondente ao índice atual
            const cnpj = CNPJs[index]; // CNPJ correspondente ao índice atual

            return {
                'lorem': `${faker.lorem.sentences(2)}`,
                'title': `${faker.lorem.words(3)}`,
                'url': `${faker.internet.url()}`,
                'author': `${faker.person.firstName()} ${faker.person.lastName()}`,
                'num_comments': `${faker.string.uuid()}`,
                'points': `${faker.string.nanoid(5)}`,
                'matricula': `${faker.string.uuid()}`,
                'phone': `${itemArray}`,
                'ramal': `${faker.string.numeric({ length: 3, exclude: ['0'] })}`,
                'numero': `${faker.string.numeric({ length: 10, exclude: ['0'] })}`, // '943228'
                'email': `${util.generateLowerCaseEmail(faker.internet.email({ firstName: 'regpet' }) )}`,
                'password': `${faker.internet.password({ length: 10, memorable: true, pattern: /[A-Z]/, prefix: '$%@AS12' })}`,
                'cpf': cpf,
                'cep': cep,
                'rg': rg,
                'cnpj': cnpj.replace(/[^\d]/g, ''),
                'job': `cargo${faker.lorem.word({ strategy: 'shortest' })}`,
                'jobArea': `setor${faker.lorem.word({ strategy: 'shortest' })}`
            };
        })
    };
    // Retornar a promessa da escrita do arquivo
    return cy.writeFile('cypress/fixtures/userData/dinamic/userDataAdmin.json', userDataAdmin);
});

