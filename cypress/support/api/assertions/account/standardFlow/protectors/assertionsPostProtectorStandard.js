import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostProtectorStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do protetor é: ${response.body.id}`).have.property('id');
    }

    verifyProtectorEqual(protector, response) {
        expect(response.body.name, `o nome do protetor é: ${response.body.name}`).to.eq(protector.author);
        expect(response.body.cpf, `o cpf do protetor é: ${response.body.cpf}`).to.eq(protector.cpf);
        expect(response.body.email, `o e-mail do protetor é: ${response.body.email}`).to.eq(protector.email);
        expect(response.body.phone, `o número do protetor é: ${response.body.phone}`).to.eq(protector.numero);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostProtectorStandard = new AssertionsPostProtectorStandard();