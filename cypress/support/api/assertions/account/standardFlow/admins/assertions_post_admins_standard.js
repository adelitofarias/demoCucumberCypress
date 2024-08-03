import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostAdminsStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do admin é: ${response.body.id}`).have.property('id');
    }

    verifyAdminEqual(admin, response) {
        expect(response.body.name, `o nome do admin é: ${response.body.name}`).to.eq(admin.author);
        expect(response.body.cpf, `o cpf do admin é: ${response.body.cpf}`).to.eq(admin.cpf);
        expect(response.body.email, `o e-mail do admin é: ${response.body.email}`).to.eq(admin.email);
        expect(response.body.registration, `a matrícula do admin é: ${response.body.registration}`).to.eq(admin.matricula);
        expect(response.body.phone, `o número do admin é: ${response.body.phone}`).to.eq(admin.numero);
        expect(response.body.professional_phone, `o número profissional do admin é: ${response.body.professional_phone}`).to.eq(admin.phone);
        expect(response.body.phone_extension, `o ramal do admin é: ${response.body.phone_extension}`).to.eq(admin.ramal);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostAdminsStandard = new AssertionsPostAdminsStandard();