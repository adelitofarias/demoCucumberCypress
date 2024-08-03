import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostExternalProtectorStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do protetor externo é: ${response.body.id}`).have.property('id');
    }

    verifyExternalProtectorEqual(externalProtector, response) {
        expect(response.body.name, `o nome do protetor externo é: ${response.body.name}`).to.eq(externalProtector.author);
        expect(response.body.cpf, `o cpf do protetor externo é: ${response.body.cpf}`).to.eq(externalProtector.cpf);
        expect(response.body.email, `o e-mail do protetor externo é: ${response.body.email}`).to.eq(externalProtector.email);
        expect(response.body.phone, `o número do protetor externo é: ${response.body.phone}`).to.eq(externalProtector.numero);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostExternalProtectorStandard = new AssertionsPostExternalProtectorStandard();