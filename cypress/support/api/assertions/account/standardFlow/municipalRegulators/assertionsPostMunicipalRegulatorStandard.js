import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsPostMunicipalRegulatorStandard extends AssertionsBaseExtended{
    verifyIdExists(response) {
        expect(response.body, `o ID do regulador municipal é: ${response.body.id}`).have.property('id');
    }

    verifyMunicipalRegulatorEqual(municipalRegulator, response) {
        expect(response.body.name, `o nome do regulador estadual é: ${response.body.name}`).to.eq(municipalRegulator.author);
        expect(response.body.cpf, `o cpf do regulador estadual é: ${response.body.cpf}`).to.eq(municipalRegulator.cpf.replace(/[^\d]/g, ''));
        expect(response.body.email, `o e-mail do regulador estadual é: ${response.body.email}`).to.eq(municipalRegulator.email);
        expect(response.body.registration, `a matrícula do regulador estadual é: ${response.body.registration}`).to.eq(municipalRegulator.matricula);
        expect(response.body.phone, `o número do regulador estadual é: ${response.body.phone}`).to.eq(municipalRegulator.numero);
        expect(response.body.professional_phone, `o número profissional do regulador estadual é: ${response.body.professional_phone}`).to.eq(municipalRegulator.phone);
        expect(response.body.phone_extension, `o ramal do regulador estadual é: ${response.body.phone_extension}`).to.eq(municipalRegulator.ramal);
        expect(response.body.role, `O cargo do regulador estadual é: ${response.body.role}`).to.eq(municipalRegulator.job);
        expect(response.body.responsible_sector, `O setor do regulador municipal é: ${response.body.responsible_sector}`).to.eq(municipalRegulator.jobArea)
    }

    verifyTimeStampsExists(response) {
        expect(response.body, `created_at: ${response.body.created_at}`).have.property('created_at')
        expect(response.body, `updated_at: ${response.body.updated_at}`).have.property('updated_at');
    }
}

export const assertionsPostMunicipalRegulatorStandard = new AssertionsPostMunicipalRegulatorStandard();