import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostMunicipalExecutorStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do executante municipal é: ${response.body.id}`).have.property('id');
    }

    verifyMunicipalExecutorEqual(municipalExecutor, response) {
        expect(response.body.name, `o nome do executante municipal é: ${response.body.name}`).to.eq(municipalExecutor.author);
        expect(response.body.cpf, `o cpf do executante municipal é: ${response.body.cpf}`).to.eq(municipalExecutor.cpf.replace(/[^\d]/g, ''));
        expect(response.body.email, `o e-mail do executante municipal é: ${response.body.email}`).to.eq(municipalExecutor.email);
        expect(response.body.registration, `a matrícula do executante municipal é: ${response.body.registration}`).to.eq(municipalExecutor.matricula);
        expect(response.body.phone, `o número do executante municipal é: ${response.body.phone}`).to.eq(municipalExecutor.numero);
        expect(response.body.professional_phone, `o número profissional do executante municipal é: ${response.body.professional_phone}`).to.eq(municipalExecutor.phone);
        expect(response.body.phone_extension, `o ramal do executante municipal é: ${response.body.phone_extension}`).to.eq(municipalExecutor.ramal);
        expect(response.body.role, `O cargo do executante municipal é: ${response.body.role}`).to.eq(municipalExecutor.job);
        expect(response.body.responsible_sector, `O setor do executante municipal é: ${response.body.responsible_sector}`).to.eq(municipalExecutor.jobArea);
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostMunicipalExecutorStandard = new AssertionsPostMunicipalExecutorStandard();