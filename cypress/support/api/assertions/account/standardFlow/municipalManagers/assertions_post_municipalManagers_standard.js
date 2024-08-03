import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostMunicipalManagerStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do gestor municipal é: ${response.body.id}`).have.property('id');
    }

    verifyMunicipalManagerEqual(municipalManager, response) {
        expect(response.body.name, `o nome do gestor municipal é: ${response.body.name}`).to.eq(municipalManager.author);
        expect(response.body.cpf, `o cpf do gestor municipal é: ${response.body.cpf}`).to.eq(municipalManager.cpf.replace(/[^\d]/g, ''));
        expect(response.body.email, `o e-mail do gestor municipal é: ${response.body.email}`).to.eq(municipalManager.email);
        expect(response.body.registration, `a matrícula do gestor municipal é: ${response.body.registration}`).to.eq(municipalManager.matricula);
        expect(response.body.phone, `o número do gestor municipal é: ${response.body.phone}`).to.eq(municipalManager.numero);
        expect(response.body.professional_phone, `o número profissional do gestor municipal é: ${response.body.professional_phone}`).to.eq(municipalManager.phone);
        expect(response.body.phone_extension, `o ramal do gestor municipal é: ${response.body.phone_extension}`).to.eq(municipalManager.ramal);
        expect(response.body.role, `O cargo do gestor municipal é: ${response.body.role}`).to.eq(municipalManager.job);
        expect(response.body.responsible_sector, `O setor do gestor municipal é: ${response.body.responsible_sector}`).to.eq(municipalManager.jobArea);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostMunicipalManagerStandard = new AssertionsPostMunicipalManagerStandard();