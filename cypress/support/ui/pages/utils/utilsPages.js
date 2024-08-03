import { util } from '@utils/util'
import { fixtures_static } from "@path_fixtures/userData"

const fileName = 'phones.json';
const filePath = `${fixtures_static}/${fileName}`;

class UtilsPages {

    gerarMassasAdmin(numeroDeMassas) {
        const telefones = [];
        const cpfs = [];
        const ceps = [];
        const rgs = [];
        const cnpjs = [];

        cy.fixture(filePath).then(userPhone => {
            // Certifique-se de que temos pelo menos `numeroDeMassas` números no arquivo JSON
            if (userPhone.phones.length < numeroDeMassas) {
                throw new Error(`O arquivo JSON contém menos de ${numeroDeMassas} números de telefone.`);
            }

            // Gerar números aleatórios e adicionar ao array `telefones`
            for (let i = 0; i < numeroDeMassas; i++) {
                const indice = util.gera_random(userPhone.phones.length);
                const telefone = userPhone.phones[indice];
                telefones.push(telefone);

                // Remover o número selecionado para evitar repetições
                userPhone.phones.splice(indice, 1);
            }


            const promiseCNPJs = Promise.all(
                Array.from({ length: numeroDeMassas }, () => util.geradorLocalCNPJ())
            ).then(resultados => {
                resultados.forEach(cnpj => cnpjs.push(cnpj));
            });


            // Gerar CPFs únicos
            const promiseCPFs = Promise.all(
                Array.from({ length: numeroDeMassas }, () => util.geradorLocalCPF())
            ).then(resultados => {
                resultados.forEach(cpf => cpfs.push(cpf));
            });


            // Gerar CEPs e RGs únicos
            const promiseGERAL = Promise.all(Array.from({ length: numeroDeMassas }, () => cy.geradorGERAL().then(resultado => {
                ceps.push(resultado.cep);
                rgs.push(resultado.rg);
            })));

            return Promise.all([promiseCNPJs, promiseCPFs, promiseGERAL]);

        }).then(() => {

            for (let i = 0; i < numeroDeMassas; i++) {
                cy.generateUserDataAdmin(telefones, cpfs, ceps, rgs, cnpjs);
            }
        });
    }


}

export const utilsPages = new UtilsPages();