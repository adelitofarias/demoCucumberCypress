import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";


class AssertionsPatchExternalProtectorStandard extends AssertionsBaseExtended {
    verifyExternalProtectorUpdate(externalprotector, response) {
        expect(response.body.name, `O nome do protetor externo é: ${response.body.name}`).to.eq(externalprotector.name);
        expect(response.body.email, `O email é: ${response.body.email}`).to.eq(externalprotector.email); 
        expect(response.body.cpf, `O cpf é: ${response.body.cpf}`).to.eq(externalprotector.cpf);
        expect(response.body.phone, `O contato do protetor externo é: ${response.body.phone}`).to.eq(externalprotector.phone);
    }
}

export const assertionsPatchExternalProtectorStandard = new AssertionsPatchExternalProtectorStandard();