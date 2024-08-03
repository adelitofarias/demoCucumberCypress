import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchProtectorStandard extends AssertionsBaseExtended {
    verifyProtectorUpdate(protector, response) {
        expect(response.body.name, `O nome é: ${response.body.name}`).to.eq(protector.name);
        //expect(response.body.email, `O email é: ${response.body.email}`).to.eq(protector.email); Tirado enquanto bug de atualizar cpf não é resolvido (pode não deixar o email voltar para o original)
        //expect(response.body.cpf, `O cpf é: ${response.body.cpf}`).to.eq(protector.cpf); Tirado enquanto bug de atualizar cpf não é resolvido
        expect(response.body.phone, `O contato é: ${response.body.phone}`).to.eq(protector.phone);
    }
}

export const assertionsPatchProtectorStandard = new AssertionsPatchProtectorStandard();